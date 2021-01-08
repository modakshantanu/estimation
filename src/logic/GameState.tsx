import { genMul } from "./QGenerators";
import Question from "./Question";

type generatorType = (arg0: any) => Question;
export enum ProgressState {
    PREGAME,
    INTRO,
    RUNNING,
    PAUSED,
    OUTRO,
    POSTGAME
}

let defaultConfig = {
	numOperands : {low: 2, high: 2},
    rangeCenter: 20000,
    rangeVariance: 2,
    operandVariance: 2,
    timeLimit: 0
}

class GameState {
    generator: generatorType = genMul
    questionArray: Question[] = []
    currentQuestion?: Question;
    category: string = "Multiplication (Easy)"
    numQuestions: number = 5
    currentIndex: number = 0
    recentScore: number = 0
    totalScore: number = 0
    recentGuess: number = 0
    recentAnswer: number = 0
    progressState: ProgressState = ProgressState.PREGAME
    generatorconfig: any = defaultConfig
    totalTime = 0
    // constructor(category: string, generator: generatorType, numQuestions: number, config: any) {
    //     this.category = category
    //     this.generator = generator
    //     this.numQuestions = numQuestions
    //     this.generatorconfig = config
    // }
}

export default GameState;