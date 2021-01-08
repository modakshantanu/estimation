import React, { CSSProperties } from "react";
import { Button, ButtonGroup, ThemeProvider } from "react-bootstrap";
import { Theme } from "../App";

import modes from "../logic/GameModes"

type propType = {
    theme: Theme,
    updateHandler: any,
    visible: boolean
}

type stateType = {
    outer: string,
    level: string,
    timeLimit: number
}

class GamemodeSidebar extends React.Component<propType,stateType> {

    constructor(props: propType) {
        super(props);

        this.state = {
            outer: 'Multiplication',
            level: 'Easy',
            timeLimit: 0
        }

        this.changeOuter = this.changeOuter.bind(this);
        this.changeTimeLimit = this.changeTimeLimit.bind(this);
        this.changeLevel = this.changeLevel.bind(this);
        this.updateParent = this.updateParent.bind(this);

        console.log('Constructed');
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
            right: 0,
            overflowX: 'hidden',
            backgroundColor: this.props.theme.primary,
            
            borderLeft: `3px solid ${this.props.theme.textColor}`,
            // borderTop: `3px solid ${this.props.theme.textColor}`,
        }
        sidebarStyle.marginTop = document.getElementById('header')?.clientHeight

        let headingStyle: CSSProperties = {
            fontFamily: this.props.theme.headerFont,
            fontSize: '20px',
            margin: '3px'
        }

        let chosenOuter = modes[0];

        let outerButtons = modes.map((e: any, i: any) => {
            let isSelected = e.category === this.state.outer
            
            if (isSelected) {
                chosenOuter = e
            }

            return <Button 
                key = {i}
                style = {{margin: '2px'}}
                variant={isSelected ? 'warning' : 'primary'}
                onClick={() => this.changeOuter(e.category)}    
            >{e.category}</Button>
        })

        let timeButtons = chosenOuter.times.map((e: any ,i: any) => {
            let isSelected = e === this.state.timeLimit
            
            let timerText = e > 0? (e/1000).toFixed(0) + ' s' : 'Unlimited'

            return <Button 
            
                key = {i}
                style = {{margin: '2px'}}
                variant={isSelected ? 'warning' : 'primary'}
                onClick={() => this.changeTimeLimit(e)}    
            >{timerText}</Button>
        })

        let levelButtons = chosenOuter.levels.map((e: any,i: any) => {
            let isSelected = e.name === this.state.level
            

            return <Button 
                key = {i}
                 style = {{margin: '2px'}}
                variant={isSelected ? 'warning' : 'primary'}
                onClick={() => this.changeLevel(e.name)}    
            >{e.name}</Button>
        })


        return (

            <div style= {sidebarStyle}>
                <div style={{...headingStyle, fontSize: '24px'}}>Gamemode Settings</div>

                <div style={headingStyle}>Time Limit</div> 
                {timeButtons}

                <div style={headingStyle}>Difficulty</div> 
                {levelButtons}

                <div style={headingStyle}>Category</div> 
                <ButtonGroup vertical>
                    {outerButtons}
                </ButtonGroup>

            </div>
        )
    }

    changeOuter(newCategory: string) {
        if (this.state.outer === newCategory) {
            return
        }

        let outerObj:any = {};

        for (let i = 0; i < modes.length; i++) {
            if (modes[i].category === newCategory) {
                outerObj = modes[i];
            }
        }

        let newTime = outerObj.times[0]
        let newLevel = outerObj.levels[0].name;


        this.setState({outer: newCategory, timeLimit: newTime, level: newLevel}, this.updateParent)
    }

    changeTimeLimit(newLimit: number) {
        if (this.state.timeLimit === newLimit) {
            return
        }
        this.setState({timeLimit: newLimit}, this.updateParent)
    }

    changeLevel(newLevel: string) {
        if (this.state.level === newLevel) {
            return
        }
        this.setState({level: newLevel}, this.updateParent)
    }

    //category: string, numQ: number, generator: any, config: any
    updateParent() {

        let outerObj: any = {};
        for (let i = 0; i < modes.length; i++) {
            if (modes[i].category === this.state.outer) {
                outerObj = modes[i];
            }
        }

        let category = `${this.state.outer} (${this.state.level})`;
        let numQ = outerObj.numQuestions;
        let generator = outerObj.generator;        
        let config: any = {}
        for (let l of outerObj.levels) {
            if (l.name === this.state.level) {
                config = l.config;
            }
        }

        config.timeLimit = this.state.timeLimit;

        this.props.updateHandler(category, numQ, generator, config)
    }

    
}

export default GamemodeSidebar