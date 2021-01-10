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
        this.height = this.width * 0.45;
        let ctx = this.canvasRef.current?.getContext('2d')
        let cx = this.width / 2
        let cy = this.props.angle < Math.PI ? this.height * 0.9 : this.height * 0.2
        if (ctx) {

            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)

            ctx.strokeStyle = '#eeeeee'
            ctx.lineWidth = this.width /150
            ctx.beginPath()
            let radius = this.width * 0.35
            let innerRad = radius * 0.2
            ctx.moveTo(cx,cy)
            ctx.lineTo(cx + radius, cy)
            ctx.moveTo(cx,cy);

            let x = radius * Math.cos(this.props.angle)
            let y = radius * Math.sin(this.props.angle)

            ctx.lineTo(cx + x , cy - y)


            ctx.moveTo(cx,cy)
            
            ctx.arc(cx,cy, innerRad, -this.props.angle , 0)

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