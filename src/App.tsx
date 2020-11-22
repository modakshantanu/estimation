import React, { CSSProperties } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { genMul } from './logic/QGenerators';
import Question from './logic/Question';
import CenterView from './view/CenterView';
import HeaderView from './view/HeaderView';
import colors from './view/constants'

let generator: (arg0: any) => Question = genMul;
type stateType = {
	width: number,
	height: number
}

type Theme = {
	background: string,
	primary: string,
	secondary: string,
	text: string,
	
}

let config = {
	numOperands : {low: 2, high: 2},
    rangeCenter: 20000,
    rangeVariance: 2,
    operandVariance: 2
}

let appStyle: CSSProperties = {
	background: colors.grey,
	minHeight: "100vh",
	color: colors.white
}

class App extends React.Component<any,stateType> {

	

	constructor(props: any) {
		super(props)
		
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		})
		window.addEventListener('resize', (ev: any)=> {
			this.setState({
				height: ev.currentTarget.innerHeight,
				width: ev.currentTarget.innerWidth
			})
		})
	}

  	render() {
    	return (
			<div style = {appStyle}>
				<HeaderView/>
				<Container>
					<Row>
						<Col lg={2} md={1} xs = {0}>
					
						</Col>
						<Col lg={8} md={10} xs = {12}>
					
							<CenterView config = {config} generator = {generator}></CenterView>
						</Col>
						<Col lg ={2} md = {1} xs = {0} >
						
						</Col>
						</Row>
				</Container>
			</div>

    );
  }
}

export default App;
