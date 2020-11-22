import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

type propType = { 
    inputHandler : (arg0: number) => void
}

class InputView extends React.Component<propType, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <InputGroup size="lg">
                    <FormControl onKeyDown = {this.handleKeyDown}
                        value = {this.state.text}
                        onChange = {this.handleChange}
                        placeholder="Enter Answer"
                    />
                </InputGroup>   
            </div>
        )
    }

    handleChange(e: any) {
        let inputText: String = e.target.value;
        let lastChar = inputText.slice(-1);
        if (inputText.length === 0 || (lastChar >= '0' && lastChar <= '9') || lastChar === 'e' || lastChar === '-' || lastChar === '+' || lastChar === '.') {
            this.setState({text: inputText});
        } 
    }

    handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            let parsed : number;
            try {
                parsed = parseFloat(this.state.text);
            } catch (error) {
                return
            }
            if (isNaN(parsed)) {
                return
            }
           this.props.inputHandler(parsed)
           this.setState({text: ''})
        }
    }
}

export default InputView