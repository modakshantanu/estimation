  import React, { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GameState, { ProgressState } from "../logic/GameState";
var ls = require('local-storage')
 
type propType = {
    gameState: GameState
}

class ScoreView extends React.Component<propType, {}> {

    render() {

        let {recentGuess , recentAnswer, totalScore, recentScore} = this.props.gameState

        let errorString = '';
        let relError = Math.abs(Math.log10(recentAnswer) - Math.log10(recentGuess))
        relError = Math.pow(10, relError);
        
        if (isNaN(relError)) {
            relError = 1
        } 
        

        
        if (relError < 1.5) {
            relError = 100 * (relError - 1);
            errorString = `Error: ${relError.toFixed(2)} %`
        } else {
            relError = Math.log10(relError)
            errorString = `Error (log₁₀): ${relError.toFixed(2)}`
        }

        let isTinyScreen = window.innerWidth < 576
        let errorStyle: CSSProperties = isTinyScreen ? {} : {float: "right"}

        let textStyle: CSSProperties = {
            fontSize: (isTinyScreen ? '16px' : '18px')
        }

        
        let highscores = ls('highscores') 
        if (highscores === null) {
            ls('highscores', {})
            highscores = {}
        }

        let highscore = highscores[this.props.gameState.storageKey] || 0




        return (
            <div>
                <Container>
                    <Row>
                        <Col xs = {12} sm = {4}>
                            <div>
                                <span style = {textStyle}>{`Score: ${totalScore} `}</span>
                                <span style = {textStyle}>{`(+${recentScore})`}</span>
                            </div>
                            
                            <div style = {textStyle}>{`Highscore: ${highscore}`}</div>
                            
                            
                        </Col>
                        <Col xs = {12} sm = {8}>
                            <div style = {errorStyle}>
                                <div style = {textStyle}>{`Guess: ${format(recentGuess)}, Answer: ${format(recentAnswer)}`}</div>
                                <div style = {textStyle}>{errorString}</div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }

}

let superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹⁻"


function format(num: number, max:number  = 1e6, min:number = 1e-3): string {
    if (num !== 0 && (num < min || num > max)) {
        let exponent = Math.floor(Math.log10(num))
        let mantissa = num / Math.pow(10, exponent);
        let temp = exponent.toString();
        let exponentStr = ''
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === '-') {
                exponentStr += superscripts[10]
            } else {
                exponentStr += superscripts[parseInt(temp[i])]
            }
        }

        return `${mantissa.toFixed(3)}×10${exponentStr}`
        
    }
    let tmp =  num.toString();

    // Remove floating imprecision

    let i = tmp.length - 1;
    let decimal = 0;
    while (i >= 0 && tmp[i] != '.') {
        i--;
        decimal++;
    }
    if (i >= 0 && decimal > 6) {
        tmp = num.toFixed(6)
    }
    if (tmp.length > 8) {
        tmp = tmp.substring(0,8);
    }
    return tmp
}





export default ScoreView;