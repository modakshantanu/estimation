
import GameState , {ProgressState} from "./GameState";
let ls = require('local-storage')

export enum InputType {
    BUTTON,
    ANSWER,
    ANIM
}
export type Input = {
    type: InputType,
    payload: any
}





export function nextState(state: GameState, input: Input, callback: (input: Input) => void): GameState {

    let next = state;
    if (state.progressState === ProgressState.PREGAME) {
        
        if (input.type === InputType.BUTTON) {
            if (input.payload === "start") {
                next = initialState(state)

                next.progressState = ProgressState.RUNNING
            }
        }
    } else if (state.progressState === ProgressState.RUNNING) {
        if (input.type === InputType.BUTTON) {
            if (input.payload === "reset") {
                next = initialState(state)
                next.progressState = ProgressState.RUNNING
            } else if (input.payload === 'playpause') {
                next.progressState = ProgressState.PAUSED
            }
        } else if (input.type === InputType.ANSWER) {
            let score = state.currentQuestion?.scorer(input.payload)
            next.totalScore += score || 0;
            next.recentGuess = input.payload
            next.recentAnswer = state.currentQuestion?.answer || -1;
            next.recentScore = score || 0;

            next.currentIndex ++;
            if (next.currentIndex < next.numQuestions) {
                next.currentQuestion = next.questionArray[next.currentIndex];
                next.totalTime = next.currentQuestion.timelimit
            } else {

                // Update Highscore
                let scores = ls('highscores')
                if (!scores) {
                    ls('highscores', {})
                    scores = {} 
                }
                scores[next.storageKey] = Math.max(next.totalScore , (scores[next.storageKey] || 0))
                ls('highscores' , scores)

                next.progressState = ProgressState.POSTGAME;
            }
        } 
    } else if (state.progressState === ProgressState.PAUSED) {
        if (input.type === InputType.BUTTON && input.payload === 'playpause') {
            next.progressState = ProgressState.RUNNING
        } else if (input.payload === "reset") {
            next = initialState(state)
            next.progressState = ProgressState.RUNNING
        }
    } else if (state.progressState === ProgressState.POSTGAME) {
        if (input.type === InputType.BUTTON && input.payload === 'replay') {
            next = initialState(state)
            next.progressState = ProgressState.RUNNING   
        }
    }

    return next;
}

function initialState(state: GameState): GameState {
    state.currentIndex = 0;
    state.recentAnswer = state.recentGuess = state.recentScore = state.totalScore = 0;
    state.questionArray = []
    for (let i = 0; i < state.numQuestions; i++) {
        state.questionArray.push(state.generator(state.generatorconfig));
    }
    state.currentQuestion = state.questionArray[0]
    state.totalTime = state.currentQuestion.timelimit
    return state
}

