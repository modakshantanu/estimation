import React, { CSSProperties } from "react";
import { Input, InputType } from "../logic/GameController";
import GameState, { ProgressState } from "../logic/GameState";
import { Button } from 'react-bootstrap'

type propType = {
    inputHandler: (arg0: Input) => void
    gameState: GameState
}

let buttonStyle: CSSProperties = {
    marginRight: 4
}

class ButtonRow extends React.Component<propType, {}> {


    constructor(props: propType) {
        super(props);

        this.pauseEvent = this.pauseEvent.bind(this);
        this.resetEvent = this.resetEvent.bind(this);
    }

    render() {

        let progressState = this.props.gameState.progressState
        let paused = progressState === ProgressState.PAUSED

        let runningButtons = 
        [
            <Button variant="primary" style={buttonStyle} key ={1} onClick={this.pauseEvent}><u>P</u>{paused? "lay" : "ause"}</Button>,
            <Button variant="warning" style={buttonStyle} key={2} onClick={this.resetEvent}><u>R</u>eset</Button>
        ]
        
        let postgameButtons: HTMLElement[] = [] 
        // [
        //     <Button variant="primary" style={buttonStyle} onClick={this.replayEvent} key={1}>Replay ↵</Button>
        // ]

        return (
            <div>
                {progressState === ProgressState.POSTGAME ? postgameButtons:runningButtons }
            </div>
        )
    }

    pauseEvent() {
        this.props.inputHandler({type: InputType.BUTTON, payload: "playpause"})
    }
    
    resetEvent() {
        this.props.inputHandler({type: InputType.BUTTON, payload: "reset"})
    }
    
}

export default ButtonRow