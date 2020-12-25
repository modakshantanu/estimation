import React, { CSSProperties } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { Theme } from '../App';
import { Input, InputType } from '../logic/GameController';
import GameState, { ProgressState } from '../logic/GameState';

type propType = { 
    theme: Theme,
    gameState: GameState,
    inputHandler: (arg0: Input) => void
}


class GameInfoView extends React.Component<propType, any>{
    render() {
        let {theme, gameState, inputHandler} = this.props
        let style: CSSProperties = {
            fontFamily:  theme.headerFont,
            fontSize: "24px",
            marginTop: "12px",
        }

        let progressString = `(${gameState.currentIndex + 1}/${gameState.numQuestions})`
        let startButton = <Button 
            variant = "success" 
            style = {{float: "right", fontFamily : theme.bodyFont}}
            onClick = {() => {inputHandler({type: InputType.BUTTON, payload: 'start'})}
        }>Start↵</Button>
        
        let replayButton = <Button 
            variant = "success" 
            style = {{float: "right", fontFamily : theme.bodyFont}}
            onClick = {() => {inputHandler({type: InputType.BUTTON, payload: 'replay'})}
        }>Replay↵</Button>



        return (
            <div style = {style}>

                <span>{gameState.category}</span>
                
                {gameState.progressState === ProgressState.PREGAME ? 
                    startButton :
                gameState.progressState === ProgressState.POSTGAME ?
                    replayButton:
                    <span style = {{float: "right"}}>{progressString}</span>
                }
                <hr style = {{borderColor: theme.textColor  }}></hr>
            </div>       
        )
    }

    
}

export default GameInfoView