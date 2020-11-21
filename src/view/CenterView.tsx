import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Question from '../logic/Question';
import InputView from './InputView';
import QuestionView from './QuestionView';

type propType = {
    generator: (arg: object) => Question,
    config: object
}

type stateType = {
    generator: (arg: object) => Question,
    config: object,
    question: Question   
}

class CenterView extends React.Component<propType, stateType>{
    
    

    constructor(props: propType) {
        super(props);


        this.state = {
            generator: props.generator,
            config: props.config,
            question: props.generator(props.config)
        }

        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        
    }

    render() {
        return (
            <div >
                <QuestionView question = {this.state.question}/>
                <InputView inputHandler = {this.handleAnswerSubmit}></InputView>
            </div>
        )
    }

    handleAnswerSubmit(answer: number) {
        let score = Math.round(100 * this.state.question.scorer(answer))
        console.log(score)

        let newQuestion = this.state.generator(this.state.config);
        this.setState({question: newQuestion})
    }
    
    

}

export default CenterView