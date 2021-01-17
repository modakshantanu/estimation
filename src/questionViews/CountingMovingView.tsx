import React from "react";
import { Theme } from "../App";


type propType = {num: number, width?: number}

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

class CountingMovingView extends React.Component<propType, {}> {
    
    animtaionId: number = 0

    canvasRef: React.RefObject<HTMLCanvasElement>
    ctx: CanvasRenderingContext2D | null | undefined = null
    width: number = 300
    height: number = 300
    particles: Pos[] = []
    constructor(props: propType) {
        super(props)
        this.canvasRef = React.createRef();
        this.updatePositions = this.updatePositions.bind(this);
        this.generateParticles = this.generateParticles.bind(this)
        
    }


    render() {

        let {num} = this.props
        
        this.width = this.props.width || document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width * 0.40;
        this.ctx = this.canvasRef.current?.getContext('2d')

        if (this.particles.length !== num) {
            this.generateParticles(num)
        }

        cancelAnimationFrame(this.animtaionId)

        this.updatePositions()


        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }

    updatePositions() {
        let {num} = this.props
        if (this.particles.length !== num) {
            this.generateParticles(this.props.num)
        }

        let r = this.props.num <= 80 ? 7 : 4
        if (!this.ctx) {
            this.ctx = this.canvasRef.current?.getContext('2d')
        }
        let ctx = this.ctx

        if (ctx) {

            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)

            ctx.fillStyle = '#eeeeee'

            for (let i = 0; i < this.props.num; i++) {
                this.drawCircle(ctx, this.particles[i].x, this.particles[i].y, r)
                this.particles[i] = update(this.particles[i], this.width, this.height)
            }


        }
        this.animtaionId = requestAnimationFrame(this.updatePositions)
    }

    drawCircle(ctx: CanvasRenderingContext2D , x: number, y: number, r: number) {
       
        

        ctx.beginPath()
        ctx.arc(x,y,r, 0, 2* Math.PI)
        ctx.fill()
        ctx.closePath()

    }

    generateParticles(num: number) {
        this.particles = []
        for (let i = 0; i < num; i++) {
            let x = rng(0, this.width)
            let y = rng(0, this.height)
            let dx = rng(-5,5)
            let dy = rng(-5,5)
            this.particles.push({x,y,dx,dy})
        }
    }
}

function rng(low: number, high: number) : number {
    return low + Math.random() * (high - low);
}

export default CountingMovingView