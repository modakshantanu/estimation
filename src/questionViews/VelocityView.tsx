import React from "react";
import { Theme } from "../App";


type propType = {
    v1: number,
    v2: number,
    parallel: boolean,   
    width?: number
}

function rngInt(low: number, high: number) : number {
    return low + Math.floor(Math.random() * (high - low + 0.99999));
}

type Pos = {
    x: number,
    y: number,
    dx: number,
    dy: number,
}

function update(p: Pos, w: number, h: number): Pos {
    let {x,y,dx,dy} = p
    if (x + dx < 0 || x + dx > w) dx = -dx
    if (y + dy < 0 || y + dy > h) dy = -dy
    x += dx
    y += dy
    return {x,y,dx,dy}
}

class VelocityView extends React.Component<propType, {}> {
    
    animtaionId: number = 0

    canvasRef: React.RefObject<HTMLCanvasElement>
    ctx: CanvasRenderingContext2D | null | undefined = null
    width: number = 300
    height: number = 300
    p1: Pos = {x:0,y:0,dx:0,dy:0}
    p2: Pos = {x:0,y:0,dx:0,dy:0}


    constructor(props: propType) {
        super(props)
        this.canvasRef = React.createRef();
        this.updatePositions = this.updatePositions.bind(this);
        this.generateParticles = this.generateParticles.bind(this)
        
    }


    render() {

        
        
        this.width = this.props.width || document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width * 0.40;
        this.ctx = this.canvasRef.current?.getContext('2d')
        
        this.generateParticles()

        cancelAnimationFrame(this.animtaionId)


        this.updatePositions()


        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }

    updatePositions() {


        if (!this.ctx) {
            this.ctx = this.canvasRef.current?.getContext('2d')
        }
        let ctx = this.ctx

        if (ctx) {

            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)
            ctx.lineWidth = 2

            this.drawCircle(ctx, this.p1.x, this.p1.y, 12, '#eeeeee', '1')
            this.drawCircle(ctx, this.p2.x, this.p2.y, 12, '#ffc107', '?')
        }
        this.p1 = update(this.p1, this.width, this.height)
        this.p2 = update(this.p2, this.width, this.height)

        this.animtaionId = requestAnimationFrame(this.updatePositions)
    }

    drawCircle(ctx: CanvasRenderingContext2D , x: number, y: number, r: number, color: string, text: string) {
        
        ctx.strokeStyle = color
        ctx.fillStyle = color

        ctx.beginPath()
        ctx.arc(x,y,r, 0, 2* Math.PI)
        ctx.stroke()
        ctx.closePath()
        let textSize = 14
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.textAlign = "center";
        ctx.fillText(text, x, y + textSize /3);


    }

    generateParticles() {
        let {v1,v2, parallel} = this.props
        if (parallel) {
            this.p1.x = 0;
            this.p2.x = 0;
            this.p1.y = this.height * 0.4
            this.p2.y = this.height * 0.6
            this.p1.dx = v1
            this.p2.dx = v2
            this.p1.dy = this.p2.dy = 0
        } else {
            this.p1.x = rng(0, this.width);
            this.p2.x = rng(0, this.width);;
            this.p1.y = rng(0,this.height)
            this.p2.y = rng(0,this.height)
            let t1 = rng(0, 2 * Math.PI)
            let t2 = rng(0, 2 * Math.PI)
            this.p1.dx = v1 * Math.cos(t1)
            this.p1.dy = v1 * Math.sin(t1)
            this.p2.dx = v2 * Math.cos(t2)
            this.p2.dy = v2 * Math.sin(t2)
        }
    }
}

function rng(low: number, high: number) : number {
    return low + Math.random() * (high - low);
}

export default VelocityView