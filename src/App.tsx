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
import WelcomePage from './view/WelcomePage';
import TextView from './questionViews/TextView';
import AngleView from './questionViews/AngleView';
import CountingStaticView from './questionViews/CountingStaticView';
import { Recoverable } from 'repl';
import SettingsSidebar from './view/SettingsSidebar';
var ls = require('local-storage')

let generator: (arg0: any) => Question = genMul;
type stateType = {
	width: number,
	height: number,
	leftBar: boolean,
	rightBar: boolean,
	welcomePage: boolean
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

let appStyle: CSSProperties = {
	background: theme.background,
	minHeight: "100vh",
	color: theme.textColor,
	fontFamily: theme.bodyFont
}


let previewQuestions: any = [
	<TextView text = {'12 * 34'}/>,
	<TextView text = {'60% * 35% * 12%'}/>,
	<AngleView angle = {Math.PI / 3}/>,
	<CountingStaticView num = {25} shape = {'circle'}/>
]

let categories = ['Multiplication' , 'Percentages', 'Angles' , 'Counting']



class App extends React.Component<any,stateType> {

	centerRef: React.RefObject<CenterView>
	sidebarRef: React.RefObject<GamemodeSidebar>

	constructor(props: any) {
		super(props)
		
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			rightBar: false,
			leftBar: false,
			welcomePage: true
		}
		window.addEventListener('resize', (ev: any)=> {
			this.setState({
				height: ev.currentTarget.innerHeight,
				width: ev.currentTarget.innerWidth
			})
		})
		this.sidebarHandler = this.sidebarHandler.bind(this)
		this.centerRef = React.createRef()
		this.sidebarRef = React.createRef()
		this.updateGamemode = this.updateGamemode.bind(this)

		if (ls('highscore') == null) {
			ls('highscore' , {})
		}
	}

	
	
	render() {
    	return (
			<div style = {appStyle}>
				<HeaderView theme = {theme} sidebarHandler = {this.sidebarHandler} width = {this.state.width} />
				{this.state.welcomePage && <div style={{right: 5, position: 'fixed'}}> View all modes ↑ </div>}
				{this.state.welcomePage && <div style={{left: 5, position: 'fixed'}}> ↑ Settings </div>}
				{this.state.welcomePage && <br/>}
				<SettingsSidebar theme = {theme} visible = {this.state.leftBar} />
				<Container>
					<Row>
						<Col lg={2} md={1} xs = {0}>
					
						</Col>
						<Col lg={8} md={10} xs = {12}>
							{this.state.welcomePage? 
								<WelcomePage theme = {theme} updateHandler = {this.updateGamemode}/> : 
								<CenterView theme = {theme} ref = {this.centerRef} width = {this.state.width}></CenterView>
							}

						</Col>
						<Col lg ={2} md = {1} xs = {0} >
						
						</Col>
						</Row>
				</Container>

				 <GamemodeSidebar ref = {this.sidebarRef} theme = {theme} updateHandler = {this.updateGamemode} visible = {this.state.rightBar} />

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
			this.setState(({leftBar}) => ({
				leftBar: !leftBar,
				rightBar: false
			}))
		}
	}


	updateGamemode(category: string, numQ: number, generator: any, config: any, fromWelcomePage = false) {
		if (this.state.welcomePage) {
			this.setState({welcomePage: false}, 
			() => {
				if (fromWelcomePage) {
					this.sidebarRef.current?.handleUpdate(category)
				}	
				this.updateGamemode(category, numQ, generator, config)
			})
		} 
		let gameState = new GameState();
		gameState.category = category;
		gameState.numQuestions = numQ;
		gameState.generator = generator;
		gameState.generatorconfig =config;
		gameState.storageKey = `${category}|${config.timeLimit}`
		this.centerRef.current?.parentUpdate(gameState)
	}
}

export default App;
