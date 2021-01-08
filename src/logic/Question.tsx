

class Question {
    
    view: any
    answer: number
    timelimit: number
    id: number
    
    // Return a number between 0 and 1
    scorer: (arg0: number) => number

    constructor(view: any, answer: number, scorer = defaultScorer, timelimit: number = 0) {
        this.view = view
        this.answer = answer
        this.id = Math.random();
        this.scorer = (guess: number) => scorer(guess, this.answer)
        this.timelimit = timelimit
    }

}

function defaultScorer(guess: number, actual: number) : number {
    if (guess < actual) {
        return guess / actual;
    }
    return actual / guess;
}

export default Question