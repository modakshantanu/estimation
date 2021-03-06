import React from 'react';
import { Theme } from '../App';
import GameState, { ProgressState } from '../logic/GameState';
import Question from '../logic/Question';
// @ts-ignore
import { Textfit } from 'react-textfit';
import TextView from '../questionViews/TextView';

type propType = {
    question: Question | undefined,
    theme: Theme
    gameState: GameState
}

let mainFontStyle = {
    fontSize: 45,
    textAlign: "center" as const,
    minHeight: 100
}

let altFontStyle = {
    fontSize: 30,
    textAlign: "center" as const,
    minHeight: 100,
    padding: 15
}



class QuestionView extends React.Component<propType, any>{
    


    render() {

        let progressState = this.props.gameState.progressState;

        if (progressState === ProgressState.PAUSED) {
            return (
                <div style = {{...mainFontStyle, fontFamily: this.props.theme.questionFont}}>
                    ---Paused---
                </div>
            )
        } else if (progressState === ProgressState.POSTGAME) {
            return (
                <div style = {{...altFontStyle, fontFamily: this.props.theme.questionFont}}>
                   {`Final Score: ${this.props.gameState.totalScore}`}
                </div>
            )
        }

        if (this.props.question) {
            return this.props.question?.view
        } 
        return (
            <div style = {{...altFontStyle, fontSize: 20, fontFamily: this.props.theme.questionFont}}>
            {this.props.gameState.helpText}
            </div>  
        )
    }
}

export default QuestionView