import React from "react";
import { Theme } from "../App";
import AngleView from "../questionViews/AngleView";
import CountingStaticView from "../questionViews/CountingStaticView";
import TextView from "../questionViews/TextView";
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




