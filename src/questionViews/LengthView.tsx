import { SSL_OP_NO_QUERY_MTU } from "constants";
import React from "react";

type stateType = {
    remUpdates: number
}

type propType = {
    ratio: number,
    shape: string
}

class LengthView extends React.Component<propType, stateType> {
    

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
        this.parallel = this.parallel.bind(this)
        this.path = this.path.bind(this)
        this.singleLines = this.singleLines.bind(this)
    }
    

    render() {

        let  {ratio, shape} = this.props

        this.width = document.getElementById('centerview')?.clientWidth || 300;
        this.height = this.width * 0.45;
        let ctx = this.canvasRef.current?.getContext('2d')
        if (ctx) {
            ctx.fillStyle = '#222831'
            ctx.fillRect(0,0,this.width, this.height)

            ctx.lineWidth = this.width / 200
            if (shape === 'parallel') {
                this.parallel(ctx, ratio)
            } else if (shape === 'singlelines') {
                this.singleLines(ctx, ratio)
            } else if (shape === 'path') {
                this.path(ctx, ratio)
            }
        }

        this.update();



        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }
    parallel(ctx: CanvasRenderingContext2D, ratio: number) {
        
        let semiH = this.height / 2
        let l1 = this.width * 0.9;
        let l2 = l1 * ratio
        if (ratio > 1) {
            let tmp = l1;
            l1 /= ratio
            l2 = tmp
        }


        this.poltLines(ctx, [0,semiH*0.8, l1, semiH *0.8],[0, semiH * 1.2, l2, semiH* 1.2])
    }

    path(ctx: CanvasRenderingContext2D, ratio: number) {
        let pathLen: number = 0
        ctx.strokeStyle = '#ffc107'
        ctx.beginPath()

        
        let [x1, y1] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]
        ctx.moveTo(x1,y1)
        while (pathLen/ratio < this.width / 8) {
            let [x2, y2] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]

            ctx.lineTo(x2,y2)
            pathLen += dist(x1,y1,x2,y2)
            x1 = x2
            y1 = y2
        }
        ctx.stroke()

        ctx.closePath()
        let lineLen = pathLen / ratio
        
        ctx.strokeStyle = '#eeeeee'
        ctx.beginPath()
        ctx.moveTo(this.width * 0.05, this.width* 0.05)
        ctx.lineTo(this.width* 0.05 + lineLen, this.width * 0.05)    
        ctx.stroke()

        ctx.closePath()
        let textSize = 20
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.fillStyle = "#eeeeee";
        ctx.textAlign = "center";
        ctx.fillText("1", this.width* 0.05 + lineLen + 10, this.width * 0.05 + textSize /3);
        
    }

    

    singleLines(ctx: CanvasRenderingContext2D, ratio: number) {

        let swap = ratio > 1
        if (ratio > 1) {
            ratio = 1/ratio
        }   
            
        
        let len1 = 0
        let l1: number[] = [], l2: number[] = []
        while (len1 < this.width / 2) {
            let [x1, y1] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]
            let [x2, y2] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]
            len1 = dist(x1,y1,x2,y2)
            l1 = [x1,y1,x2,y2]
        }
        if (l1[2] < l1[0]) {
            [l1[2], l1[3], l1[0], l1[1]] = [l1[0], l1[1] , l1[2], l1[3]]
        }
        let len2 = len1 * ratio
        let tmp = 0
        
        while (tmp < len2) {
            let [x1, y1] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]
            let [x2, y2] = [rng(this.width * 0.05, this.width * 0.95), rng(this.height * 0.05, this.height * 0.95)]
            tmp = dist(x1,y1,x2,y2)
            l2 = [x1,y1,x2,y2]
        }

        if (l2[2] < l2[0]) {
            [l2[2], l2[3], l2[0], l2[1]] = [l2[0], l2[1] , l2[2], l2[3]]
        }

        let scale = len2 / tmp
        l2[2] = l2[0] + (l2[2] - l2[0]) * scale
        l2[3] = l2[1] + (l2[3] - l2[1]) * scale

        if (swap) {
            [l1 , l2] = [l2 , l1]
        }
    }

    poltLines(ctx: CanvasRenderingContext2D, l1: number[], l2: number[]) {

        let textSize = 20
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.textAlign = "center";

        ctx.strokeStyle = '#eeeeee'
        ctx.fillStyle = "#eeeeee";
        ctx.beginPath()
        ctx.moveTo(l1[0], l1[1])
        ctx.lineTo(l1[2], l1[3])
        ctx.stroke()
        ctx.closePath()
        ctx.fillText("1", l1[2] + 10, l1[3] + textSize /3);

        


        ctx.strokeStyle = '#ffc107'
        ctx.fillStyle = '#ffc107'
        ctx.beginPath()
        ctx.moveTo(l2[0], l2[1])
        ctx.lineTo(l2[2], l2[3])
        ctx.stroke()
        ctx.closePath()
        ctx.fillText("?", l2[2] + 10, l2[3] + textSize /3);
    }
    
    
    
    update() {
        if (this.state.remUpdates <= 0) {
            return
        }
        
        this.setState((state) => ({remUpdates: state.remUpdates - 1}));
        setTimeout(this.update, 16.67);
    }
}

function rng(low: number, high: number) : number {
    return low + Math.random() * (high - low);
}
function dist(x1: number, y1: number, x2: number, y2: number) : number {
    return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

// function randomPolygon(limX: number, limY: number, numPts = 10): number[][] {
//     let pts = []
//     for (let i = 0; i < numPts; i++) {
//         pts.push([rng(0, limX), rng(0,limY)])
//     }
//     pts = convexHull(pts)
//     return pts
// }   
// function scalePoly(pts: number[][] , scale: number): number[][] {
//     return pts.map(e => e.map(f => f*scale))
// }

// function centerPoly(pts: number[][] , x: number, y: number): number[][] {

//     let center = pt.centroid(pts)
//     let offsetX = x - center[0];
//     let offsetY = y -  center[1] 

//     return pts.map(e => [e[0] + offsetX, e[1] + offsetY])

// }

export default LengthView