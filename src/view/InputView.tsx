import React, { CSSProperties } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Theme } from '../App';
import { Input, InputType } from '../logic/GameController';
import GameState, { ProgressState } from '../logic/GameState';

type propType = { 
    inputHandler : (arg0: Input) => void,
    theme: Theme,
    gameState: GameState
}

class InputView extends React.Component<propType, any>{
    inputField: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);

        this.inputField = React.createRef();
    }

    render() {
        let inputStyle: CSSProperties = {
            background: this.props.theme.background,
            color: this.props.theme.textColor
        }

        if (this.props.gameState.progressState === ProgressState.RUNNING) {
            this.inputField.current?.focus();
        }
        
        let progressState = this.props.gameState.progressState;
        
        let placeholder = '';
        if (progressState === ProgressState.RUNNING) {
            placeholder = 'Enter Answer'
        } else if (progressState === ProgressState.PAUSED) {
            placeholder = 'Game Paused'
        }

        return (
            <div>
                <InputGroup size="lg" style = {inputStyle}>
                    <FormControl onKeyDown = {this.handleKeyDown}
                        style = {inputStyle}
                        value = {this.state.text}
                        onChange = {this.handleChange}
                        placeholder={placeholder }
                        ref = {this.inputField}
                    />
                </InputGroup>   
            </div>
        )
    }

    handleChange(e: any) {
        if (this.props.gameState.progressState !== ProgressState.RUNNING) {
            return
        }
        let inputText: String = e.target.value;
        let lastChar = inputText.slice(-1);
        if (inputText.length === 0 || (lastChar >= '0' && lastChar <= '9') || lastChar === 'e' || lastChar === '-' || lastChar === '+' || lastChar === '.') {
            this.setState({text: inputText});
        } 
    }

    handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && this.props.gameState.progressState === ProgressState.RUNNING) {
            let parsed : number;
            try {
                parsed = parseFloat(this.state.text);
            } catch (error) {
                return
            }
            if (isNaN(parsed)) {
                return
            }
           this.props.inputHandler({type: InputType.ANSWER, payload: parsed})
           this.setState({text: ''})
        } else if (e.key === 'Enter' && this.props.gameState.progressState === ProgressState.POSTGAME) {
            this.props.inputHandler({type: InputType.BUTTON, payload: 'replay'})
        }
    }
}

export default InputView