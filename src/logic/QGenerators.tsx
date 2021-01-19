import React from "react";
import { Theme } from "../App";
import AngleView from "../questionViews/AngleView";
import AreaView from "../questionViews/AreaView";
import CountingMovingView from "../questionViews/CountingMovingView";
import CountingStaticView from "../questionViews/CountingStaticView";
import LengthView from "../questionViews/LengthView";
import TextView from "../questionViews/TextView";
import TimeView from "../questionViews/TimeView";
import VelocityView from "../questionViews/VelocityView";
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
    timeLimit: number

}) : Question {
    let {numOperands, rangeCenter, rangeVariance, operandVariance, timeLimit} = config;
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
    return new Question( <TextView text = {questionString}/>, result, scorer, timeLimit);
}

export function genPerc(
    config : {
        numOperands : Range,
        operandRange: Range,
        timeLimit: number,
        round: number
    }
) {

    let {numOperands, operandRange, timeLimit, round} = config;
    let numOp = rngInt(numOperands.low, numOperands.high);

    let operands = []
    let result = 1;
    for (let i = 0; i < numOp; i++) {
        
        operands.push(rngInt(operandRange.low, operandRange.high));
        
        operands[i] -= operands[i] % round; 
        result *= operands[i] / 100;
    }

    let questionString = '';
    operands.forEach(element => {
        questionString += `${(element)}% × `;
    });
    questionString = questionString.slice(0, -3);

    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }


    return new Question(<TextView text = {questionString}/>, result, scorer, timeLimit);


    

}


export function genAngle (
    config: {
        minDeg: number,
        maxDeg: number,
        timeLimit: number
    }
) : Question {

    let {minDeg, maxDeg, timeLimit} = config
    let result = rngInt(minDeg, maxDeg);

    let resultRad = result * Math.PI / 180

    let scorer = (guess: number, actual: number) : number => {

        let fraction = 1 - Math.abs(guess - actual) * 0.05
        if (fraction < 0) fraction = 0;
        return Math.round(fraction * 100)
    }


    return new Question(<AngleView angle={resultRad}/>, result, scorer, timeLimit)

}

export function genCounting (
    config: {
        min: number,
        max: number,
        timeLimit: number
    }
) : Question {

    let {min, max, timeLimit} = config;
    let result = rngInt(min, max)

    let scorer = (guess: number, actual: number) : number => {

        if (guess === actual) {
            return 100
        }

        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 90)
    }

    let shape = 'circle'

    return new Question(<CountingStaticView num={result} shape = {shape}/>, result, scorer, timeLimit)
}

export function genCountingMoving (
    config: {
        min: number,
        max: number,
        timeLimit: number
    }
) : Question {

    let {min, max, timeLimit} = config;
    let result = rngInt(min, max)

    let scorer = (guess: number, actual: number) : number => {


        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }


    return new Question(<CountingMovingView num={result}/>, result, scorer, timeLimit)
}

export function genArea (
    config: {
        center: number,
        variance: number,
        shape: string,
        timeLimit: number
    }
) : Question {

    let {center, variance, shape, timeLimit} = config;
    let result = logRng(center, variance)
    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        fraction = Math.sqrt(fraction)
        return Math.round(fraction * 100)
    }
    return new Question(<AreaView ratio = {result} shape={shape}/>, result, scorer, timeLimit)


}

export function genLength (
    config: {
        center: number,
        variance: number,
        shape: string,
        timeLimit: number
    }
) : Question {

    let {center, variance, shape, timeLimit} = config;
    let result = logRng(center, variance)
    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }
    return new Question(<LengthView ratio = {result} shape={shape}/>, result, scorer, timeLimit)


}

export function genSpeed (
    config: {
        center: number,
        variance: number,
        parallel: boolean,
        timeLimit: number
    }
) : Question {

    let {center, variance, parallel, timeLimit} = config;
    let result = logRng(center, variance)

    let v1 = rng(1,2)
    let v2 = v1 * result

    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }
    return new Question(<VelocityView v1 = {v1} v2 = {v2} parallel = {parallel}/>, result, scorer, timeLimit)
}


export function genExpo (
    config: {
        type: string,
        timeLimit: number
    }
) : Question {
    let {type, timeLimit} = config
    if (type === 'interest') {
        let P = logRng(1,1)
        if (P < 1) P = 1/P
        P **= 1/3
        P = Math.round(P * 1000) / 1000
        let Q = rngInt(10, 25)
        let result = P**Q
        let scorer = (guess: number, actual: number) : number => {
            guess = guess**(1/Q)
            if (isNaN(guess)) return 0
            actual = P
            let fraction = guess < actual ? (guess / actual) : (actual / guess)
            fraction**= 2
            return Math.round(fraction * 100)
        }
        let questionString = `(${P.toFixed(3)})^${Q}`
        return new Question(<TextView text = {questionString}/> , result , scorer, timeLimit)

    } else if (type === 'huge') {
        let P = rngInt(10, 30)
        let Q = rngInt(10, 30)
        let result = P**Q
        let scorer = (guess: number, actual: number) : number => {
            guess = Math.log2(guess)
            actual = Math.log2(actual)
            let diff = Math.abs(guess - actual)
            if (diff <= 3) return 100
            else diff -= 3

            return Math.round(Math.max(100 - diff * 5 , 0))
        }
        let questionString = `${P}^${Q}`
        return new Question(<TextView text = {questionString}/> , result , scorer, timeLimit)
    } else {
        let P = rngInt(30 , 100)
        let Q = rngInt(30 , 100)
        let result = P**Q
        let scorer = (guess: number, actual: number) : number => {
            guess = Math.log2(guess)
            actual = Math.log2(actual)
            let diff = Math.abs(guess - actual)
            if (diff <= 5) return 100
            else diff -= 5

            return Math.round(Math.max(100 - diff , 0))

        }
        let questionString = `${P}^${Q}`
        return new Question(<TextView text = {questionString}/> , result , scorer, timeLimit)
    }

}

export function genTime (
    config: {
        min: number,
        max: number,
        reference: boolean
        timeLimit: number
    }
) : Question {

    let {min, max, reference, timeLimit} = config;
    let result = rng(min, max)
    let scorer = (guess: number, actual: number) : number => {
        let fraction = guess < actual ? (guess / actual) : (actual / guess)
        return Math.round(fraction * 100)
    }

    return new Question(<TimeView time = {result} reference = {reference} />, result / 1000, scorer, timeLimit)


}






