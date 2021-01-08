import React, { CSSProperties } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { genMul } from './logic/QGenerators';
import Question from './logic/Question';
import CenterView from './view/CenterView';
import GamemodeSidebar from './view/GamemodeSidebar';
import HeaderView from './view/HeaderView';
import modes from './logic/GameModes'
import GameState from './logic/GameState';

let generator: (arg0: any) => Question = genMul;
type stateType = {
	width: number,
	height: number,
	leftBar: boolean,
	rightBar: boolean,
}

export type Theme = {
	background: string,
	primary: string,
	secondary: string,
	textColor: string,
	questionFont: string, 
	headerFont: string,
	bodyFont: string
}

let theme: Theme = {
	background: "#222831",
	primary: "#30475e",
	secondary: "#ffc107",
	textColor: "#eeeeee",
	questionFont: "Roboto Mono",
	headerFont: "Concert One",
	bodyFont: "Noto Sans"
}

let config = {
	numOperands : {low: 2, high: 2},
    rangeCenter: 20000,
    rangeVariance: 2,
	operandVariance: 2,
	timeLimit: 10000
}

let appStyle: CSSProperties = {
	background: theme.background,
	minHeight: "100vh",
	color: theme.textColor,
	fontFamily: theme.bodyFont
}

class App extends React.Component<any,stateType> {

	centerRef: React.RefObject<CenterView>

	constructor(props: any) {
		super(props)
		
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			rightBar: false,
			leftBar: false
		}
		window.addEventListener('resize', (ev: any)=> {
			this.setState({
				height: ev.currentTarget.innerHeight,
				width: ev.currentTarget.innerWidth
			})
		})
		this.sidebarHandler = this.sidebarHandler.bind(this)
		this.centerRef = React.createRef()
		this.updateGamemode = this.updateGamemode.bind(this)
	}

  	render() {
    	return (
			<div style = {appStyle}>
				<HeaderView theme = {theme} sidebarHandler = {this.sidebarHandler} width = {this.state.width} />
				<Container>
					<Row>
						<Col lg={2} md={1} xs = {0}>
					
						</Col>
						<Col lg={8} md={10} xs = {12}>
					
							<CenterView theme = {theme} ref = {this.centerRef} width = {this.state.width}></CenterView>
						</Col>
						<Col lg ={2} md = {1} xs = {0} >
						
						</Col>
						</Row>
				</Container>

				 <GamemodeSidebar theme = {theme} updateHandler = {this.updateGamemode} visible = {this.state.rightBar} />
			</div>

		);
	
  	}
  
	sidebarHandler(side: string) {
		if (side === 'right') {
			this.setState(({rightBar}) => ({
				rightBar: !rightBar,
				leftBar: false
			}))
		} else if (side === 'left') {
			this.setState({
				leftBar: true,
				rightBar: false
			})
		}
	}


	updateGamemode(category: string, numQ: number, generator: any, config: any) {
		let gameState = new GameState();
		gameState.category = category;
		gameState.numQuestions = numQ;
		gameState.generator = generator;
		gameState.generatorconfig =config;
		this.centerRef.current?.parentUpdate(gameState)
	}
}

export default App;
