import React from 'react';
import Question from '../logic/Question';

type propType = {
    question: Question
}

let mainFontStyle = {
    fontFamily: "monospace",
    fontSize: 45,
    textAlign: "center" as const
}

class QuestionView extends React.Component<propType, any>{
    


    render() {
        return (
            <div style = {mainFontStyle}>
                {this.props.question.expression}
            </div>
        )
    }
}

export default QuestionView