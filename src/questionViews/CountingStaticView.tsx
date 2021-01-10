import React from "react";
import { Theme } from "../App";

type stateType = {
    remUpdates: number
}

type propType = {num: number, shape: string, width?: number}

function rngInt(low: number, high: number) : number {
    return low + Math.floor(Math.random() * (high - low + 0.99999));
}


class CountingStaticView extends React.Component<propType, stateType> {
    
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

        let {num} = this.props
        let gridW = num < 100 ? 50 : 80
        let gridH = num < 100 ? 20 : 32
        
        this.width = this.props.width || document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width * 0.40;

        
        let ctx = this.canvasRef.current?.getContext('2d')
        if (ctx) {

            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)

            ctx.fillStyle = '#eeeeee'
            let filled: boolean[][] = new Array(gridH)
                .fill(false)
                .map(() => new Array(gridW)
                .fill(false));

            

            let cnt = 0
            let drawFunction = this.props.shape === 'square'? this.drawSquare : this.drawCircle
            while (cnt < this.props.num) {

                let r = rngInt(0, gridH - 1)
                let c = rngInt(0, gridW - 1)
                if (filled[r][c]) continue

                filled[r][c] = true

                drawFunction(ctx, gridW, gridH, r, c, this.width, this.height)

                cnt++
            }

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

    drawCircle(ctx: CanvasRenderingContext2D , gridW: number, gridH: number, r: number, c: number, w: number, h: number) {
       
        

        let cellsize = w / (gridW + 1)
        
        let x = c * cellsize
        let y = r * cellsize

        x += cellsize / 2
        y += cellsize / 2

        

        ctx.beginPath()
        ctx.arc(x,y,cellsize / 2 * 0.9, 0, 2* Math.PI)
        ctx.fill()
        ctx.closePath()

    }

    drawSquare(ctx: CanvasRenderingContext2D , gridsize: number, r: number, c: number, w: number, h: number) {
        let cellsize = w / (gridsize + 1)
        
        let x = c * cellsize
        let y = r * cellsize
        x += cellsize * (gridsize - r - 1) / gridsize;
        y += cellsize * (c) / gridsize

        x += cellsize / 2
        y += cellsize / 2

        

        ctx.beginPath()
        ctx.fillRect(x,y,cellsize, cellsize)
        ctx.closePath()

    }
}

export default CountingStaticView