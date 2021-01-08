import React, { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

 
type propType = {
    recentScore: number,
    totalScore: number,
    recentGuess: number,
    recentAnswer: number
}

class ScoreView extends React.Component<propType, {}> {

    render() {

        let {recentGuess , recentAnswer} = this.props

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
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs = {12} sm = {4}>
                            <span >{`Score: ${this.props.totalScore} `}</span>
                            <span>{`(+${this.props.recentScore})`}</span>
                        </Col>
                        <Col xs = {12} sm = {8}>
                            <div style = {errorStyle}>
                                <div>{`Guess: ${format(recentGuess)}, Answer: ${format(recentAnswer)}`}</div>
                                <div>{errorString}</div>
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