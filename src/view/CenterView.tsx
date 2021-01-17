import React from 'react';
import Question from '../logic/Question';
import InputView from './InputView';
import QuestionView from './QuestionView';
import ScoreView from './ScoreView';
import { Theme } from '../App'
import GameInfoView from './GameInfoView';
import ButtonRow from './ButtonRow';
import { Input } from '../logic/GameController';
import GameState from '../logic/GameState';
import {nextState } from '../logic/GameController'
import { decodeInput } from '../logic/KeyDecoder';

type propType = {
    theme: Theme,
    width: number
}

type stateType = {
    gameState: GameState
}



class CenterView extends React.Component<propType, stateType>{
    
    
    prevTimestamp: number = 0;

    constructor(props: propType) {
        super(props);


        this.state = {
            gameState: new GameState()
        }

        
        this.handleInput = this.handleInput.bind(this);   

    }

    componentDidMount() {
        
        this.handleInput = this.handleInput.bind(this);   
        this.keyCapture  = this.keyCapture.bind(this);
        
        document.body.addEventListener('keydown', this.keyCapture)
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.keyCapture);
    }

    render() {
        let gameState = this.state.gameState;
        
        return (
            <div id='centerview'>
                
                <GameInfoView theme = {this.props.theme} gameState={gameState} inputHandler = {this.handleInput} width = {this.props.width}/> 
                <QuestionView question = {gameState.currentQuestion} theme ={this.props.theme} gameState={gameState}/>
                <InputView inputHandler = {this.handleInput} theme = {this.props.theme} gameState={gameState}></InputView>
                <ScoreView gameState = {gameState}/>
                <ButtonRow inputHandler = {this.handleInput} gameState={gameState}/>
            </div>
        )
    }

    parentUpdate(gameState: GameState) {
        this.setState({gameState})
    }

    handleInput(input: Input) {

        let next = nextState(this.state.gameState, input, this.handleInput);
        this.setState({gameState: next})
    }

    keyCapture(e: KeyboardEvent) {
        
        let inputEvent: Input | undefined = decodeInput(e, this.state.gameState);
        if (inputEvent !== undefined) {
            this.handleInput(inputEvent);
        }
    }
    
    

}

export default CenterView