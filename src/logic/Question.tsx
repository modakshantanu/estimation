

class Question {
    
    expression: String
    answer: number
    
    // Return a number between 0 and 1
    scorer: (arg0: number) => number


    constructor(expression: String, answer: number, scorer = defaultScorer) {
        this.expression = expression
        this.answer = answer
        this.scorer = (guess: number) => scorer(guess, this.answer)
    }

}

function defaultScorer(guess: number, actual: number) : number {
    if (guess < actual) {
        return guess / actual;
    }
    return actual / guess;
}

export default Question