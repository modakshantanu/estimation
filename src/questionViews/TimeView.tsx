import React from "react";
import { Theme } from "../App";


type propType = {

    time: number
    reference: boolean,   
    width?: number
}


class TimeView extends React.Component<propType, {x: boolean}> {
    
    animtaionId: number = 0

    canvasRef: React.RefObject<HTMLCanvasElement>
    ctx: CanvasRenderingContext2D | null | undefined = null
    width: number = 300
    height: number = 300
    startedAnim: boolean = false
    x1: number = 0
    y1: number = 0
    x2: number = 0
    y2: number = 0
    r: number = 0


    constructor(props: propType) {
        super(props)
        this.canvasRef = React.createRef();
        this.state = {x : false}
        
    }


    render() {

        
        
        this.width = this.props.width || document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width * 0.40;
        let ctx = this.canvasRef.current?.getContext('2d')
        
        
        
        if (this.props.reference) {
            this.x1 = this.width / 4
            this.y1 = this.height / 2
            this.x2  =this.width * 3/4
            this.y2 = this.height / 2
        } else {
            this.x2 = this.width / 2
            this.y2 = this.height / 2
        }
        this.r = this.width / 6
        console.log(this.width, this.height, ctx)
        if (ctx) {
            if (!this.startedAnim) {
                ctx.fillStyle = '#222831'
                ctx.fillRect(0,0,this.width, this.height)
                let textSize = 20
                ctx.font = `${textSize}px Roboto Mono`;
                ctx.textAlign = "center";  
                ctx.fillStyle = '#eeeeee'
                ctx.fillText('Get ready...' , this.width / 2, this.height / 2)  
                
                setTimeout(() => {
                    if (!ctx) return
                    ctx.fillStyle = '#222831'
                    ctx.fillRect(0,0,this.width, this.height)
                    ctx.fillStyle = '#ffc107'
                    ctx.beginPath()
                    ctx.arc(this.x2,this.y2,this.r,0,2 * Math.PI)
                    ctx.fill()
                    ctx.closePath()
                    if (!this.props.reference) return
                    ctx.fillStyle = '#eeeeee'
                    ctx.beginPath()
                    ctx.arc(this.x1,this.y1,this.r,0,2 * Math.PI)
                    ctx.fill()
                    ctx.closePath()
                }, 3000)
                if (this.props.reference) {
                    setTimeout(() => {
                        if (!ctx) return
                        ctx.fillStyle = '#222831'
                        ctx.fillRect(0,0,this.width, this.height)
                        ctx.fillStyle = '#ffc107'
                        ctx.beginPath()
                        ctx.arc(this.x2,this.y2,this.r,0,2 * Math.PI)
                        ctx.fill()
                        ctx.closePath()
                        
                        ctx.fillStyle = '#eeeeee'
                        ctx.lineWidth = this.width / 100
                        ctx.beginPath()
                        ctx.arc(this.x1,this.y1,this.r,0,2 * Math.PI)
                        ctx.stroke()
                        ctx.fillText('1 sec' , this.x1, this.y1 + textSize / 3)  
                        ctx.closePath()
                    }, 4000)
                }
    
                setTimeout(() => {
                    if (!ctx) return
                    ctx.fillStyle = '#222831'
                    ctx.fillRect(0,0,this.width, this.height)
                    ctx.fillStyle = '#ffc107'
                    ctx.lineWidth = this.width / 100
                    ctx.beginPath()
                    ctx.arc(this.x2,this.y2,this.r,0,Math.PI * 2)
                    ctx.stroke()
                    ctx.fillText('? sec' , this.x2, this.y2 + textSize / 3)  
                    ctx.closePath()
                    
                    if (!this.props.reference) return
                    ctx.fillStyle = '#eeeeee'
                    ctx.lineWidth = this.width / 100
                    ctx.beginPath()
                    ctx.arc(this.x1,this.y1,this.r,0,Math.PI * 2)
                    ctx.stroke()
                    ctx.fillText('1 sec' , this.x1, this.y1 + textSize / 3)  
                    ctx.closePath()
                }, 3000 + this.props.time)
            }
            this.startedAnim = true
        }

        if (!this.state.x) {
            setTimeout(() => this.setState({x: true}), 1)
        }
        

        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }

    // drawCircle(ctx: CanvasRenderingContext2D , x: number, y: number, r: number, color: string, text: string) {
        
    //     ctx.strokeStyle = color
    //     ctx.fillStyle = color

    //     ctx.beginPath()
    //     ctx.arc(x,y,r, 0, 2* Math.PI)
    //     ctx.stroke()
    //     ctx.closePath()
    //     let textSize = 14
    //     ctx.font = `${textSize}px Roboto Mono`;
    //     ctx.textAlign = "center";
    //     ctx.fillText(text, x, y + textSize /3);


    // }

    
}

function rng(low: number, high: number) : number {
    return low + Math.random() * (high - low);
}

export default TimeView