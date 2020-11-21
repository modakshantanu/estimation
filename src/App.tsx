import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { genMul } from './logic/QGenerators';
import Question from './logic/Question';
import CenterView from './view/CenterView';
import QuestionView from './view/QuestionView'

let question = new Question("1 + 1" , 2);

let generator: (arg0: any) => Question = genMul;
let config = {
	numOperands : {low: 2, high: 3},
    rangeCenter: 10000,
    rangeVariance: 2,
    operandVariance: 2,
}

class App extends React.Component {
  render() {
    return (
    
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
      
    );
  }
}

export default App;
