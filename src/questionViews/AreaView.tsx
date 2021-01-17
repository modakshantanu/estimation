import React from "react";
var convexHull = require('graham-scan-convex-hull');
var PolygonTools = require('polygon-tools')
var pt = PolygonTools.polygon

type stateType = {
    remUpdates: number
}

type propType = {
    ratio: number,
    shape: string
}

class AreaView extends React.Component<propType, stateType> {
    

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
        this.drawCircle = this.drawCircle.bind(this)
        this.drawPoly = this.drawPoly.bind(this)
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
            if (shape === 'circle') {
                this.drawCircle(ctx, ratio)
            } else if (shape === 'polygon') {
                this.drawPoly(ctx, ratio)
            }
        }

        this.update();



        return <canvas width = {this.width} height = {this.height} ref = {this.canvasRef}/>
    }
    
    
    drawCircle(ctx: CanvasRenderingContext2D, ratio: number) {
        let side = this.height;
        
        let r1 = side * 0.45
        let r2 = r1 * Math.sqrt(ratio)
        
        if (r2 > r1) {
            let tmp = r1
            r1 = r1 * r1 / r2
            r2 = tmp
        }
        
        let x1 = this.width / 4
        let x2 = this.width * 0.75
        let y = this.height / 2
        
        ctx.beginPath()
        ctx.strokeStyle = '#eeeeee'
        ctx.arc(x1,y,r1, 0, 2* Math.PI)
        ctx.stroke()
        ctx.closePath()
        
        let textSize = r1 / 2 
        textSize = Math.max(textSize, 20)
        
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.fillStyle = "#eeeeee";
        ctx.textAlign = "center";
        ctx.fillText("1", x1, y + textSize /3 + (textSize > r1*2 ? r1 * 3 : 0) );
        
        ctx.beginPath()
        ctx.strokeStyle = '#ffc107'
        ctx.arc(x2,y,r2, 0, 2* Math.PI)
        ctx.stroke()
        ctx.closePath()
        
        textSize = r2 / 2
        textSize = Math.max(textSize, 20)
        
        
        
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.fillStyle = "#ffc107";
        ctx.textAlign = "center";
        ctx.fillText("?", x2, y + textSize /3 + (textSize > r2*2 ? r2 * 3 : 0) );
    }
    drawPoly(ctx: CanvasRenderingContext2D, ratio: number) {
        
        let segW = this.width / 2
        let segH = this.height

        let poly = randomPolygon(segW, segH)
        let area = pt.area(poly)
        let r = Math.sqrt(area/(ratio * Math.PI))
        if (2*r > segH) {
            let scale = segH / (2*r) * 0.95
            r = segH * 0.95 / 2
            poly = scalePoly(poly, scale)
        }

        if (ratio < 1) {
            poly = centerPoly(poly, segW * 1.5, segH / 2)
        } else {
            let [x,y] = pt.centroid(poly)
            poly = centerPoly(poly, x + segW, y)
        }

        area = pt.area(poly)

        let x1 = segW / 2
        let y = segH / 2
    

        ctx.beginPath()
        ctx.strokeStyle = '#eeeeee'
        ctx.arc(x1,y,r, 0, 2* Math.PI)
        ctx.stroke()
        ctx.closePath()
        
        let textSize = r / 2 
        textSize = Math.max(textSize, 20)
        
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.fillStyle = "#eeeeee";
        ctx.textAlign = "center";
        ctx.fillText("1", x1, y + textSize /3 + (textSize > r*2 ? r * 3 : 0) );

        ctx.beginPath()
        ctx.strokeStyle = '#ffc107'
        ctx.moveTo(poly[0][0], poly[0][1])
        for (let i = 1; i < poly.length; i++) {
            ctx.lineTo(poly[i][0], poly[i][1])
        }
        ctx.lineTo(poly[0][0], poly[0][1])
        ctx.closePath()
        
        ctx.stroke()

        textSize = 20
        let [x2,y2] = pt.centroid(poly)
        
        ctx.font = `${textSize}px Roboto Mono`;
        ctx.fillStyle = "#ffc107";
        ctx.textAlign = "center";
        ctx.fillText("?", x2, y2 + textSize /3 );


        
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

function randomPolygon(limX: number, limY: number, numPts = 10): number[][] {
    let pts = []
    for (let i = 0; i < numPts; i++) {
        pts.push([rng(0, limX), rng(0,limY)])
    }
    pts = convexHull(pts)
    return pts
}   
function scalePoly(pts: number[][] , scale: number): number[][] {
    return pts.map(e => e.map(f => f*scale))
}

function centerPoly(pts: number[][] , x: number, y: number): number[][] {

    let center = pt.centroid(pts)
    let offsetX = x - center[0];
    let offsetY = y -  center[1] 

    return pts.map(e => [e[0] + offsetX, e[1] + offsetY])

}

export default AreaView