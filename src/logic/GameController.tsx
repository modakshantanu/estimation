
import GameState , {ProgressState} from "./GameState";


export enum InputType {
    BUTTON,
    ANSWER,
    ANIM
}
export type Input = {
    type: InputType,
    payload: any
}





export function nextState(state: GameState, input: Input): GameState {

    let nextState = state;
    if (state.progressState === ProgressState.PREGAME) {
        
        if (input.type === InputType.BUTTON) {
            if (input.payload === "start") {
                nextState = initialState(state)

                nextState.progressState = ProgressState.RUNNING
            }
        }
    } else if (state.progressState === ProgressState.RUNNING) {
        if (input.type === InputType.BUTTON) {
            if (input.payload === "reset") {
                nextState = initialState(state)
                nextState.progressState = ProgressState.RUNNING
            } else if (input.payload === 'playpause') {
                nextState.progressState = ProgressState.PAUSED
            }
        } else if (input.type === InputType.ANSWER) {
            let score = state.currentQuestion?.scorer(input.payload)
            state.totalScore += score || 0;
            state.recentGuess = input.payload
            state.recentAnswer = state.currentQuestion?.answer || -1;
            state.recentScore = score || 0;

            state.currentIndex ++;
            if (state.currentIndex < state.numQuestions) {
                state.currentQuestion = state.questionArray[state.currentIndex];
            } else {
                state.progressState = ProgressState.POSTGAME;
            }

        }
    } else if (state.progressState === ProgressState.PAUSED) {
        if (input.type === InputType.BUTTON && input.payload === 'playpause') {
            state.progressState = ProgressState.RUNNING
        }
    } else if (state.progressState === ProgressState.POSTGAME) {
        if (input.type === InputType.BUTTON && input.payload === 'replay') {
            nextState = initialState(state)
            nextState.progressState = ProgressState.RUNNING   
        }
    }

    return nextState;
}

function initialState(state: GameState): GameState {
    state.currentIndex = 0;
    state.recentAnswer = state.recentGuess = state.recentScore = state.totalScore = 0;
    state.questionArray = []
    for (let i = 0; i < state.numQuestions; i++) {
        state.questionArray.push(state.generator(state.generatorconfig));
    }
    state.currentQuestion = state.questionArray[0]
    return state
}

