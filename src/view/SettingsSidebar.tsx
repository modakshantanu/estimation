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
            width: '300px',
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

    


        return (

            <div style= {sidebarStyle}>
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