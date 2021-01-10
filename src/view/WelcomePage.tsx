import React from "react";
import { Theme } from "../App";
import Question from "../logic/Question";


import modes from "../logic/GameModes"
import { Button, ButtonGroup } from "react-bootstrap";


type propType = {
    theme: Theme,
    updateHandler: any

}

class WelcomePage extends React.Component<propType, {}> {

    constructor(props: propType) {
        super(props) 
            
        this.updateParent = this.updateParent.bind(this)
        
    }

    render() {

        let {theme, updateHandler} = this.props

        let outerButtons = modes.map((e: any, i: any) => {
            

            return <Button 
                key = {i}
                style = {{margin: '2px'}}
                variant='primary'
                onClick={() => this.updateParent(e.category)}    
            >{e.category}</Button>
        })

        return (<div id='welcomediv'>
            <div style={{fontSize: '24px', fontFamily: theme.bodyFont, textAlign: 'center', padding: '10px'}}>
                Quick Play
            </div>
            
            <ButtonGroup vertical style={{width: '100%'}}>
                {outerButtons}
            </ButtonGroup>
           
        </div>)
    }

    updateParent(outer: string) {

        let outerObj: any = {};
        for (let i = 0; i < modes.length; i++) {
            if (modes[i].category === outer) {
                outerObj = modes[i];
            }
        }
        let level = outerObj.levels[0].name

        let category = `${outer} (${level})`;
        let numQ = outerObj.numQuestions;
        let generator = outerObj.generator;        
        let config: any = {}
        for (let l of outerObj.levels) {
            if (l.name === level) {
                config = l.config;
            }
        }

        config.timeLimit = outerObj.times[0];

        this.props.updateHandler(category, numQ, generator, config, true)
    }
}

export default WelcomePage