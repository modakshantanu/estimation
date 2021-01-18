import React, { CSSProperties } from "react";
import { Button, ButtonGroup, ThemeProvider } from "react-bootstrap";
import { Theme } from "../App";
import modes from "../logic/GameModes"
var ls = require('local-storage')


type propType = {
    theme: Theme,
    visible: boolean
}

class SettingsSidebar extends React.Component<propType,{}> {

    constructor(props: propType) {
        super(props);

    }
    

    render() {

        if (!this.props.visible) {
            return <div></div>
        }

        let sidebarStyle: CSSProperties = {
            height: '100%',
            width: '350px',
            position: 'fixed',
            zIndex: 10000,
            top: 0,
            left: 0,
            overflowX: 'hidden',
            backgroundColor: this.props.theme.primary,
            
            borderRight: `3px solid ${this.props.theme.textColor}`,
            // borderTop: `3px solid ${this.props.theme.textColor}`,
        }
        sidebarStyle.marginTop = document.getElementById('header')?.clientHeight

        let headingStyle: CSSProperties = {
            fontFamily: this.props.theme.headerFont,
            fontSize: '20px',
            margin: '3px'
        }
        let bodyStyle: CSSProperties = {
            fontFamily: this.props.theme.bodyFont,
            fontSize: '16px',
            margin: '3px'
        }


    


        return (

            <div style= {sidebarStyle}>
                <div style = {headingStyle}>
                    Instructions
                </div>
                <div style = {bodyStyle}>
                    To select a gamemode, click the dice icon on the top right. You will see a description of what needs to be guessed.
                </div>
                <br></br>
                <div style = {bodyStyle}>
                    Type your answer in the input box and press <b>Enter↵</b> to submit the answer. Each answer is given a score between 0 and 100 based on how accurate it is. The score, correct answer, and your guess are also shown there.
                </div>
                <br></br>
                <div style = {bodyStyle}>
                    For very large/very small answers, use "e" to use scientific notation. E.g. 1234000 can be entered as "1.234e6". 
                </div>
                <br></br>
                <div style = {bodyStyle}>
                    For timed questions, if the timer runs out, the answer in the text box is submitted. If there is no valid number in the text box, "1" is submitted. 
                </div>
                <br></br>
                <Button 
                    style = {{margin: '5px'}}
                    variant = 'danger'
                    onClick = {this.handleDelete} >
                        
                Reset Highscores</Button>

                {/* <Button 
                    style = {{margin: '5px'}}
                    variant = 'danger'
                    onClick = {() => {
                        console.log(ls('highscores'))
                    }} >
                        
                Debug</Button> */}

                

            </div>
        )
    }

    handleDelete() {
        let res = window.confirm('do you wanna delete')
        if (!res) {
            return
        }

        ls.remove('highscores')



    }



}   

export default SettingsSidebar