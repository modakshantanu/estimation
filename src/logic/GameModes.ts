import { genMul, genPerc } from "./QGenerators";

let modes: any = [
    {
        category: 'Multiplication',
        numQuestions: 5,
        generator: genMul,

        levels: [
            {
                name: 'Easy',
                config: {
                    numOperands : {low: 2, high: 2},
                    rangeCenter: 20000,
                    rangeVariance: 2,
                    operandVariance: 2,
                    timeLimit: 0
                }
            },
            {
                name: 'Medium',
                config: {
                    numOperands : {low: 3, high: 3},
                    rangeCenter: 100000,
                    rangeVariance: 2,
                    operandVariance: 2,
                    timeLimit: 0
                }
            },
            {
                name: 'Hard',
                config: {
                    numOperands : {low: 4, high: 4},
                    rangeCenter: 1000000,
                    rangeVariance: 2,
                    operandVariance: 2,
                    timeLimit: 0
                }
            }
        ],
        times: [0, 10000, 30000]
    },

    {
        category: 'Percentages',
        numQuestions: 5,
        generator: genPerc,

        levels: [
            {
                name: 'Easy',
                config: {
                    numOperands : {low: 2, high: 3},
                    operandRange: {low: 10, high: 99},
                    timeLimit: 0,
                    round: 5
                }
            },
            {
                name: 'Hard',
                config: {
                    numOperands : {low: 4, high: 4},
                    operandRange: {low: 10, high: 99},
                    timeLimit: 0,
                    round: 1
                }
            }
        ],
        times: [0, 10000, 30000]
    }
]

export default modes;