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



class InputView extends React.Component<propType, {text: string}>{
    inputField: React.RefObject<HTMLInputElement>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    timerInterval?: NodeJS.Timeout;
    questionId: number = 0;
    timeLimit: number = 0;
    startTime: number = 0;
    

    constructor(props: any) {
        super(props);
        this.state = {
            text: "",
        }

        this.inputField = React.createRef();
        this.canvasRef = React.createRef();
        this.drawArc = this.drawArc.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    drawArc(fraction: number) {
        if (this.canvasRef.current === null) {
            return
        }

        const canvas: any = this.canvasRef.current;
        const context: any = this.canvasRef.current.getContext('2d');
        context.strokeStyle = fraction < 0.75? 'green':'red'
        
        context.fillStyle = this.props.theme.background;
        context.fillRect(0,0,48,48);
        context.lineWidth = 3
        context.translate(-0.5,-0.5);
        let cx = canvas.width/2;
        let cy = canvas.height/2;
        context.beginPath();
        context.arc(cx,cy, 16, 2* Math.PI * fraction - Math.PI /2, - Math.PI / 2);
        context.stroke();

        context.translate(0.5,0.5);

        
    }

    componentDidMount(){
        this.handleChange = this.handleChange.bind(this);
        this.inputField.current?.focus();
        
    }
    render() {
        let inputStyle: CSSProperties = {
            background: this.props.theme.background,
            color: this.props.theme.textColor,
        }
    

        
        let progressState = this.props.gameState.progressState;
        
        let curQuestion = this.props.gameState.currentQuestion;
        if (curQuestion !== undefined && curQuestion.id !== this.questionId) {

            this.timerInterval && clearInterval(this.timerInterval);
            
            
            this.questionId = curQuestion.id;
            this.timeLimit = curQuestion.timelimit;
            this.startTime = Date.now();
            if (this.timeLimit !== 0) {
                
                this.timerInterval = setInterval(() => {
                    if (this.props.gameState.progressState === ProgressState.PAUSED) {
                        this.startTime += 16.67; // instead of stopping the interval
                    }
                    let elapsed =  Date.now() - this.startTime ;
                    let fraction = elapsed / this.timeLimit 
                    
                    if (fraction < 1) {
                        this.drawArc(fraction);
                    } else {
                        this.timerInterval && clearInterval(this.timerInterval);
                        this.props.inputHandler({type: InputType.ANSWER, payload: this.toValidAnswer(this.state.text) })
                        this.setState({text: ''})
                    }

                }, 16.67);
            }
            this.forceUpdate();

        }
        let totalTime = curQuestion?.timelimit || 0;
        let {gameState} = this.props;

        let placeholder = '';
        if (progressState === ProgressState.RUNNING) {
            placeholder = 'Enter Answer'
        } else if (progressState === ProgressState.PAUSED) {
            placeholder = 'Game Paused'
        }

        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <InputGroup size="lg" style = {inputStyle}>
                    <FormControl onKeyDown = {this.handleKeyDown}
                        style = {inputStyle}
                        value = {this.state.text}
                        onChange = {this.handleChange}
                        placeholder={placeholder }
                        ref = {this.inputField}
                    />
                </InputGroup>   
                {totalTime !== 0 && gameState.progressState === ProgressState.RUNNING 
                && <canvas ref = {this.canvasRef} width = {48} height = {48}/>}
            </div>
        )
    }

    toValidAnswer(text: string): number{
        let parsed: number
        try {
            parsed = parseFloat(text);
        } catch (error) {
            return 1
        }
        if (isNaN(parsed)) {
            return 1
        }
        return parsed
    }

    handleChange(e: any) {
        if (this.props.gameState.progressState !== ProgressState.RUNNING) {
            return
        }
        let inputText: string = e.target.value;
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

           if (this.props.gameState.currentIndex === this.props.gameState.numQuestions - 1) {
           }
        } else if (e.key === 'Enter' && this.props.gameState.progressState === ProgressState.POSTGAME) {
            this.props.inputHandler({type: InputType.BUTTON, payload: 'replay'})
        }
    }
}

export default InputView