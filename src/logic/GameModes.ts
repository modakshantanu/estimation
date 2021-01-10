import { genAngle, genCounting, genMul, genPerc } from "./QGenerators";

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
    },

    {
        category: 'Angles',
        numQuestions: 5,
        generator: genAngle,

        levels: [
            {
                name: 'Acute Only',
                config: {
                    minDeg: 1,
                    maxDeg: 89,
                    timeLimit: 0,
            
                }
            },
            {
                name: 'Any',
                config: {
                    minDeg: 1,
                    maxDeg: 359,
                    timeLimit: 0,
                }
            }
        ],
        times: [0, 7000, 20000]
    },
    {
        category: 'Counting (Static)',
        numQuestions: 5,
        generator: genCounting,

        levels: [
            {
                name: '20 - 50',
                config: {
                    min: 20,
                    max: 50,
                    timeLimit: 0,
                }
            },
            {
                name: '50 - 100',
                config: {
                    min: 50,
                    max: 100,
                    timeLimit: 0,
                }
            },
            {
                name: '100 - 500',
                config: {
                    min: 100,
                    max: 500,
                    timeLimit: 0,
                }
            }
        ],
        times: [0, 7000, 20000]
    }
]

export default modes;