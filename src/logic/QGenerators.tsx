import Question from "./Question";

type Range = {
    low: number,
    high: number
}



function rngInt(low: number, high: number) : number {
    return low + Math.floor(Math.random() * (high - low + 0.99999));
}


function rng(low: number, high: number) : number {
    return low + Math.random() * (high - low);
}

function logRng(mid: number, variance: number) : number {
    return mid * Math.pow(2 , rng(-variance, variance));
}


export function genMul(config : {
    numOperands : Range,
    rangeCenter: number,
    rangeVariance: number
    operandVariance: number, 

}) : Question {
    let {numOperands, rangeCenter, rangeVariance, operandVariance} = config;

    let numOp = rngInt(numOperands.low, numOperands.high);
    let result = logRng(rangeCenter, rangeVariance);
    let avgOp: number
    let operands: number[] = [];
    for (let i = 0; i < numOp; i++) {
        avgOp = Math.pow(result , 1 / (numOp - i));
        let nextOperand = logRng(avgOp , operandVariance);
        operands.push(Math.round(nextOperand));
        result /= nextOperand;
    }
    operands.sort((a,b) => a-b);
    

    // Calculate actual result
    result = operands.reduce((acc, cur) => acc * cur);
    // scorer
    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }

    let questionString = '';
    operands.forEach(element => {
        questionString += `${element} × `;
    });

    questionString = questionString.slice(0, -3);
    return new Question(questionString, result, scorer,15000);
}




