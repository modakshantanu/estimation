import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Question from '../logic/Question';
import InputView from './InputView';
import QuestionView from './QuestionView';
import ScoreView from './ScoreView';

type propType = {
    generator: (arg: object) => Question,
    config: object
}

type stateType = {
    generator: (arg: object) => Question,
    config: object,
    question: Question,
    recentScore: number,
    totalScore: number,
    recentGuess: number,
    recentAnswer: number
}

class CenterView extends React.Component<propType, stateType>{
    
    

    constructor(props: propType) {
        super(props);


        this.state = {
            generator: props.generator,
            config: props.config,
            question: props.generator(props.config),
            recentScore: 0,
            totalScore: 0,
            recentGuess: 0,
            recentAnswer: 0
        }

        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        
    }

    render() {
        return (
            <div >
                <QuestionView question = {this.state.question}/>
                <InputView inputHandler = {this.handleAnswerSubmit}></InputView>
                <ScoreView recentScore = {this.state.recentScore} totalScore = {this.state.totalScore}
                        recentGuess = {this.state.recentGuess} recentAnswer = {this.state.recentAnswer}/>
            </div>
        )
    }

    handleAnswerSubmit(answer: number) {
        let score = this.state.question.scorer(answer)
        let totalScore = this.state.totalScore + score;

        let newQuestion = this.state.generator(this.state.config);
        this.setState((state) => ({
            question: newQuestion,
            recentScore: score, 
            totalScore: totalScore,
            recentGuess: answer,
            recentAnswer: state.question.answer
            
        }))
    }
    
    

}

export default CenterView