import React from "react";
import { Theme } from "../App";

type stateType = {
    remUpdates: number,

}

type propType = {angle: number}

class AngleView extends React.Component<propType, stateType> {
    

    canvasRef: React.RefObject<HTMLCanvasElement>
    width: number = 300
    height: number = 300
    constructor(props: propType) {
        super(props)
        this.state = {
            remUpdates: 1
        }
        this.canvasRef = React.createRef();
        this.update = this.update.bind(this);
    }
    

    render() {

       
        this.width = document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width;
        let ctx = this.canvasRef.current?.getContext('2d')
        if (ctx) {

            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)

            ctx.strokeStyle = '#eeeeee'
            ctx.lineWidth = this.width /150
            ctx.beginPath()
            let radius = this.width * 0.4
            let innerRad = radius * 0.2
            ctx.moveTo(this.width/2, this.height/2)
            ctx.lineTo(this.width / 2 + radius, this.height / 2)
            ctx.moveTo(this.width / 2, this.height / 2);

            let x = radius * Math.cos(this.props.angle)
            let y = radius * Math.sin(this.props.angle)

            ctx.lineTo(this.width / 2 + x , this.height / 2 - y)


            ctx.moveTo(this.width/2, this.height/2)
            
            ctx.arc(this.width/2, this.height/2, innerRad, -this.props.angle , 0)

            ctx.stroke()
        }

        this.update();



        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }



    update() {
        if (this.state.remUpdates <= 0) {
            return
        }
        
        this.setState((state) => ({remUpdates: state.remUpdates - 1}));
        setTimeout(this.update, 16.67);
    }
}

export default AngleView