(this.webpackJsonpestimation=this.webpackJsonpestimation||[]).push([[0],{30:function(e,t,i){},31:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),r=i.n(a),s=i(23),o=i.n(s),h=(i(30),i(2)),c=i(4),l=i(3),d=i(6),u=i(5),p=i(53),m=i(54),v=i(55),f=(i(31),function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).canvasRef=void 0,n.width=300,n.height=300,n.state={remUpdates:1},n.canvasRef=r.a.createRef(),n.update=n.update.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t;this.width=(null===(e=document.getElementById("centerview"))||void 0===e?void 0:e.clientWidth)||300,this.height=.45*this.width;var i=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d"),a=this.width/2,r=this.props.angle<Math.PI?.9*this.height:.2*this.height;if(i){i.fillStyle="#222831",i.fillRect(0,0,this.width,this.height),i.strokeStyle="#eeeeee",i.lineWidth=this.width/150,i.beginPath();var s=.35*this.width,o=.2*s;i.moveTo(a,r),i.lineTo(a+s,r),i.moveTo(a,r);var h=s*Math.cos(this.props.angle),c=s*Math.sin(this.props.angle);i.lineTo(a+h,r-c),i.moveTo(a,r),i.arc(a,r,o,-this.props.angle,0),i.stroke()}return this.update(),Object(n.jsx)("canvas",{width:this.width,height:this.height,ref:this.canvasRef})}},{key:"update",value:function(){this.state.remUpdates<=0||(this.setState((function(e){return{remUpdates:e.remUpdates-1}})),setTimeout(this.update,16.67))}}]),i}(r.a.Component)),g=i(18),b=i(32),j=i(34).polygon;function y(e,t){return e+Math.random()*(t-e)}function O(e,t,i){var n=j.centroid(e),a=t-n[0],r=i-n[1];return e.map((function(e){return[e[0]+a,e[1]+r]}))}var x=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).canvasRef=void 0,n.width=300,n.height=300,n.state={remUpdates:1},n.canvasRef=r.a.createRef(),n.update=n.update.bind(Object(l.a)(n)),n.drawCircle=n.drawCircle.bind(Object(l.a)(n)),n.drawPoly=n.drawPoly.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t,i=this.props,a=i.ratio,r=i.shape;this.width=(null===(e=document.getElementById("centerview"))||void 0===e?void 0:e.clientWidth)||300,this.height=.45*this.width;var s=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d");return s&&(s.fillStyle="#222831",s.fillRect(0,0,this.width,this.height),s.lineWidth=this.width/200,"circle"===r?this.drawCircle(s,a):"polygon"===r&&this.drawPoly(s,a)),this.update(),Object(n.jsx)("canvas",{width:this.width,height:this.height,ref:this.canvasRef})}},{key:"drawCircle",value:function(e,t){var i=.45*this.height,n=i*Math.sqrt(t);if(n>i){var a=i;i=i*i/n,n=a}var r=this.width/4,s=.75*this.width,o=this.height/2;e.beginPath(),e.strokeStyle="#eeeeee",e.arc(r,o,i,0,2*Math.PI),e.stroke(),e.closePath();var h=i/2;h=Math.max(h,20),e.font="".concat(h,"px Roboto Mono"),e.fillStyle="#eeeeee",e.textAlign="center",e.fillText("1",r,o+h/3+(h>2*i?3*i:0)),e.beginPath(),e.strokeStyle="#ffc107",e.arc(s,o,n,0,2*Math.PI),e.stroke(),e.closePath(),h=n/2,h=Math.max(h,20),e.font="".concat(h,"px Roboto Mono"),e.fillStyle="#ffc107",e.textAlign="center",e.fillText("?",s,o+h/3+(h>2*n?3*n:0))}},{key:"drawPoly",value:function(e,t){var i=this.width/2,n=this.height,a=function(e,t){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=[],a=0;a<i;a++)n.push([y(0,e),y(0,t)]);return n=b(n)}(i,n),r=j.area(a),s=Math.sqrt(r/(t*Math.PI));if(2*s>n){var o=n/(2*s)*.95;s=.95*n/2,a=function(e,t){return e.map((function(e){return e.map((function(e){return e*t}))}))}(a,o)}if(t<1)a=O(a,1.5*i,n/2);else{var h=j.centroid(a),c=Object(g.a)(h,2);a=O(a,c[0]+i,c[1])}r=j.area(a);var l=i/2,d=n/2;e.beginPath(),e.strokeStyle="#eeeeee",e.arc(l,d,s,0,2*Math.PI),e.stroke(),e.closePath();var u=s/2;u=Math.max(u,20),e.font="".concat(u,"px Roboto Mono"),e.fillStyle="#eeeeee",e.textAlign="center",e.fillText("1",l,d+u/3+(u>2*s?3*s:0)),e.beginPath(),e.strokeStyle="#ffc107",e.moveTo(a[0][0],a[0][1]);for(var p=1;p<a.length;p++)e.lineTo(a[p][0],a[p][1]);e.lineTo(a[0][0],a[0][1]),e.closePath(),e.stroke(),u=20;var m=j.centroid(a),v=Object(g.a)(m,2),f=v[0],x=v[1];e.font="".concat(u,"px Roboto Mono"),e.fillStyle="#ffc107",e.textAlign="center",e.fillText("?",f,x+u/3)}},{key:"update",value:function(){this.state.remUpdates<=0||(this.setState((function(e){return{remUpdates:e.remUpdates-1}})),setTimeout(this.update,16.67))}}]),i}(r.a.Component);function w(e,t,i){var n=e.x,a=e.y,r=e.dx,s=e.dy;return(n+r<0||n+r>t)&&(r=-r),(a+s<0||a+s>i)&&(s=-s),{x:n+=r,y:a+=s,dx:r,dy:s}}function S(e,t){return e+Math.random()*(t-e)}var k=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).animtaionId=0,n.canvasRef=void 0,n.ctx=null,n.width=300,n.height=300,n.particles=[],n.canvasRef=r.a.createRef(),n.updatePositions=n.updatePositions.bind(Object(l.a)(n)),n.generateParticles=n.generateParticles.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t,i=this.props.num;return this.width=this.props.width||(null===(e=document.getElementById("centerview"))||void 0===e?void 0:e.clientWidth)||300,this.height=.4*this.width,this.ctx=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d"),this.particles.length!==i&&this.generateParticles(i),cancelAnimationFrame(this.animtaionId),this.updatePositions(),Object(n.jsx)("canvas",{width:this.width,height:this.height,ref:this.canvasRef})}},{key:"updatePositions",value:function(){var e=this.props.num;this.particles.length!==e&&this.generateParticles(this.props.num);var t,i=this.props.num<=80?7:4;this.ctx||(this.ctx=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d"));var n=this.ctx;if(n){n.fillStyle="#222831",n.fillRect(0,0,this.width,this.height),n.fillStyle="#eeeeee";for(var a=0;a<this.props.num;a++)this.drawCircle(n,this.particles[a].x,this.particles[a].y,i),this.particles[a]=w(this.particles[a],this.width,this.height)}this.animtaionId=requestAnimationFrame(this.updatePositions)}},{key:"drawCircle",value:function(e,t,i,n){e.beginPath(),e.arc(t,i,n,0,2*Math.PI),e.fill(),e.closePath()}},{key:"generateParticles",value:function(e){this.particles=[];for(var t=0;t<e;t++){var i=S(0,this.width),n=S(0,this.height),a=S(-5,5),r=S(-5,5);this.particles.push({x:i,y:n,dx:a,dy:r})}}}]),i}(r.a.Component);function P(e,t){return e+Math.floor(Math.random()*(t-e+.99999))}var R=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).canvasRef=void 0,n.width=300,n.height=300,n.state={remUpdates:1},n.canvasRef=r.a.createRef(),n.update=n.update.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t,i=this.props.num,a=i<100?50:80,r=i<100?20:32;this.width=this.props.width||(null===(e=document.getElementById("centerview"))||void 0===e?void 0:e.clientWidth)||300,this.height=.4*this.width;var s=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d");if(s){s.fillStyle="#222831",s.fillRect(0,0,this.width,this.height),s.fillStyle="#eeeeee";for(var o=new Array(r).fill(!1).map((function(){return new Array(a).fill(!1)})),h=0,c="square"===this.props.shape?this.drawSquare:this.drawCircle;h<this.props.num;){var l=P(0,r-1),d=P(0,a-1);o[l][d]||(o[l][d]=!0,c(s,a,r,l,d,this.width,this.height),h++)}}return this.update(),Object(n.jsx)("canvas",{width:this.width,height:this.height,ref:this.canvasRef})}},{key:"update",value:function(){this.state.remUpdates<=0||(this.setState((function(e){return{remUpdates:e.remUpdates-1}})),setTimeout(this.update,16.67))}},{key:"drawCircle",value:function(e,t,i,n,a,r,s){var o=r/(t+1),h=a*o,c=n*o;h+=o/2,c+=o/2,e.beginPath(),e.arc(h,c,o/2*.9,0,2*Math.PI),e.fill(),e.closePath()}},{key:"drawSquare",value:function(e,t,i,n,a,r){var s=a/(t+1),o=n*s,h=i*s;o+=s*(t-i-1)/t,h+=s*n/t,o+=s/2,h+=s/2,e.beginPath(),e.fillRect(o,h,s,s),e.closePath()}}]),i}(r.a.Component);function M(e,t){return e+Math.random()*(t-e)}function T(e,t,i,n){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-n,2))}var C=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).canvasRef=void 0,n.width=300,n.height=300,n.state={remUpdates:1},n.canvasRef=r.a.createRef(),n.update=n.update.bind(Object(l.a)(n)),n.parallel=n.parallel.bind(Object(l.a)(n)),n.path=n.path.bind(Object(l.a)(n)),n.singleLines=n.singleLines.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t,i=this.props,a=i.ratio,r=i.shape;this.width=(null===(e=document.getElementById("centerview"))||void 0===e?void 0:e.clientWidth)||300,this.height=.45*this.width;var s=null===(t=this.canvasRef.current)||void 0===t?void 0:t.getContext("2d");return s&&(s.fillStyle="#222831",s.fillRect(0,0,this.width,this.height),s.lineWidth=this.width/200,"parallel"===r?this.parallel(s,a):"singlelines"===r?this.singleLines(s,a):"path"===r&&this.path(s,a)),this.update(),Object(n.jsx)("canvas",{width:this.width,height:this.height,ref:this.canvasRef})}},{key:"parallel",value:function(e,t){var i=this.height/2,n=.9*this.width,a=n*t;if(t>1){var r=n;n/=t,a=r}this.poltLines(e,[0,.8*i,n,.8*i],[0,1.2*i,a,1.2*i])}},{key:"path",value:function(e,t){var i=0;e.strokeStyle="#ffc107",e.beginPath();var n=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],a=n[0],r=n[1];for(e.moveTo(a,r);i/t<this.width/8;){var s=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],o=s[0],h=s[1];e.lineTo(o,h),i+=T(a,r,o,h),a=o,r=h}e.stroke(),e.closePath();var c=i/t;e.strokeStyle="#eeeeee",e.beginPath(),e.moveTo(.05*this.width,.05*this.width),e.lineTo(.05*this.width+c,.05*this.width),e.stroke(),e.closePath();e.font="".concat(20,"px Roboto Mono"),e.fillStyle="#eeeeee",e.textAlign="center",e.fillText("1",.05*this.width+c+10,.05*this.width+20/3)}},{key:"singleLines",value:function(e,t){var i=t>1;t>1&&(t=1/t);for(var n=0,a=[],r=[];n<this.width/2;){var s=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],o=s[0],h=s[1],c=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],l=c[0],d=c[1];n=T(o,h,l,d),a=[o,h,l,d]}if(a[2]<a[0]){var u=[a[0],a[1],a[2],a[3]];a[2]=u[0],a[3]=u[1],a[0]=u[2],a[1]=u[3]}for(var p=n*t,m=0;m<p;){var v=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],f=v[0],g=v[1],b=[M(.05*this.width,.95*this.width),M(.05*this.height,.95*this.height)],j=b[0],y=b[1];m=T(f,g,j,y),r=[f,g,j,y]}if(r[2]<r[0]){var O=[r[0],r[1],r[2],r[3]];r[2]=O[0],r[3]=O[1],r[0]=O[2],r[1]=O[3]}var x=p/m;if(r[2]=r[0]+(r[2]-r[0])*x,r[3]=r[1]+(r[3]-r[1])*x,i){var w=[r,a];a=w[0],r=w[1]}}},{key:"poltLines",value:function(e,t,i){e.font="".concat(20,"px Roboto Mono"),e.textAlign="center",e.strokeStyle="#eeeeee",e.fillStyle="#eeeeee",e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(t[2],t[3]),e.stroke(),e.closePath(),e.fillText("1",t[2]+10,t[3]+20/3),e.strokeStyle="#ffc107",e.fillStyle="#ffc107",e.beginPath(),e.moveTo(i[0],i[1]),e.lineTo(i[2],i[3]),e.stroke(),e.closePath(),e.fillText("?",i[2]+10,i[3]+20/3)}},{key:"update",value:function(){this.state.remUpdates<=0||(this.setState((function(e){return{remUpdates:e.remUpdates-1}})),setTimeout(this.update,16.67))}}]),i}(r.a.Component),I=i(10),N=i(24),E=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(h.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e={fontSize:45,textAlign:"center",minHeight:100};return Object(n.jsx)(N.Textfit,{max:e.fontSize,mode:"single",style:Object(I.a)(Object(I.a)({},e),{},{fontFamily:"Roboto Mono"}),children:this.props.text})}}]),i}(r.a.Component);function A(e,t){return e<t?e/t:t/e}var L=function e(t,i){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(h.a)(this,e),this.view=void 0,this.answer=void 0,this.timelimit=void 0,this.id=void 0,this.scorer=void 0,this.view=t,this.answer=i,this.id=Math.random(),this.scorer=function(e){return a(e,n.answer)},this.timelimit=r};function U(e,t){return e+Math.floor(Math.random()*(t-e+.99999))}function G(e,t){return e*Math.pow(2,(n=t,(i=-t)+Math.random()*(n-i)));var i,n}function F(e){for(var t=e.numOperands,i=e.rangeCenter,a=e.rangeVariance,r=e.operandVariance,s=e.timeLimit,o=U(t.low,t.high),h=G(i,a),c=[],l=0;l<o;l++){var d=G(Math.pow(h,1/(o-l)),r);c.push(Math.round(d)),h/=d}c.sort((function(e,t){return e-t})),h=c.reduce((function(e,t){return e*t}));var u="";return c.forEach((function(e){u+="".concat(e," \xd7 ")})),u=u.slice(0,-3),new L(Object(n.jsx)(E,{text:u}),h,(function(e,t){var i=e<t?e/t:t/e;return Math.round(100*i)}),s)}var H,B=i(57),D=i(58);!function(e){e[e.PREGAME=0]="PREGAME",e[e.INTRO=1]="INTRO",e[e.RUNNING=2]="RUNNING",e[e.PAUSED=3]="PAUSED",e[e.OUTRO=4]="OUTRO",e[e.POSTGAME=5]="POSTGAME"}(H||(H={}));var Q,q={numOperands:{low:2,high:2},rangeCenter:2e4,rangeVariance:2,operandVariance:2,timeLimit:0},z=function e(){Object(h.a)(this,e),this.generator=F,this.questionArray=[],this.currentQuestion=void 0,this.category="Multiplication (Easy)",this.numQuestions=5,this.currentIndex=0,this.recentScore=0,this.totalScore=0,this.recentGuess=0,this.recentAnswer=0,this.progressState=H.PREGAME,this.generatorconfig=q,this.totalTime=0,this.storageKey="Multiplication (Easy)|0"},W=i(14);function V(e){e.currentIndex=0,e.recentAnswer=e.recentGuess=e.recentScore=e.totalScore=0,e.questionArray=[];for(var t=0;t<e.numQuestions;t++)e.questionArray.push(e.generator(e.generatorconfig));return e.currentQuestion=e.questionArray[0],e.totalTime=e.currentQuestion.timelimit,e}!function(e){e[e.BUTTON=0]="BUTTON",e[e.ANSWER=1]="ANSWER",e[e.ANIM=2]="ANIM"}(Q||(Q={}));var K=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).inputField=void 0,n.canvasRef=void 0,n.timerInterval=void 0,n.questionId=0,n.timeLimit=0,n.startTime=0,n.handleKeyDown=function(e){if("Enter"===e.key&&n.props.gameState.progressState===H.RUNNING){var t;try{t=parseFloat(n.state.text)}catch(i){return}if(isNaN(t))return;n.props.inputHandler({type:Q.ANSWER,payload:t}),n.setState({text:""}),n.props.gameState.currentIndex,n.props.gameState.numQuestions}else"Enter"===e.key&&n.props.gameState.progressState===H.POSTGAME&&n.props.inputHandler({type:Q.BUTTON,payload:"replay"})},n.state={text:""},n.inputField=r.a.createRef(),n.canvasRef=r.a.createRef(),n.drawArc=n.drawArc.bind(Object(l.a)(n)),n.handleChange=n.handleChange.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"drawArc",value:function(e){if(null!==this.canvasRef.current){var t=this.canvasRef.current,i=this.canvasRef.current.getContext("2d");i.strokeStyle=e<.75?"green":"red",i.fillStyle=this.props.theme.background,i.fillRect(0,0,48,48),i.lineWidth=3,i.translate(-.5,-.5);var n=t.width/2,a=t.height/2;i.beginPath(),i.arc(n,a,16,2*Math.PI*e-Math.PI/2,-Math.PI/2),i.stroke(),i.translate(.5,.5)}}},{key:"componentDidMount",value:function(){var e;this.handleChange=this.handleChange.bind(this),null===(e=this.inputField.current)||void 0===e||e.focus()}},{key:"render",value:function(){var e=this,t={background:this.props.theme.background,color:this.props.theme.textColor},i=this.props.gameState.progressState,a=this.props.gameState.currentQuestion;void 0!==a&&a.id!==this.questionId&&(this.timerInterval&&clearInterval(this.timerInterval),this.questionId=a.id,this.timeLimit=a.timelimit,this.startTime=Date.now(),0!==this.timeLimit&&(this.timerInterval=setInterval((function(){e.props.gameState.progressState===H.PAUSED&&(e.startTime+=16.67);var t=(Date.now()-e.startTime)/e.timeLimit;t<1?e.drawArc(t):(e.timerInterval&&clearInterval(e.timerInterval),e.props.inputHandler({type:Q.ANSWER,payload:e.toValidAnswer(e.state.text)}),e.setState({text:""}))}),16.67)),this.forceUpdate());var r=(null===a||void 0===a?void 0:a.timelimit)||0,s=this.props.gameState,o="";return i===H.RUNNING?o="Enter Answer":i===H.PAUSED&&(o="Game Paused"),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(n.jsx)(B.a,{size:"lg",style:t,children:Object(n.jsx)(D.a,{onKeyDown:this.handleKeyDown,style:t,value:this.state.text,onChange:this.handleChange,placeholder:o,ref:this.inputField,autoComplete:"chrome-off"})}),0!==r&&s.progressState===H.RUNNING&&Object(n.jsx)("canvas",{ref:this.canvasRef,width:48,height:48})]})}},{key:"toValidAnswer",value:function(e){var t;try{t=parseFloat(e)}catch(i){return 1}return isNaN(t)?1:t}},{key:"handleChange",value:function(e){if(this.props.gameState.progressState===H.RUNNING){var t=e.target.value,i=t.slice(-1);(0===t.length||i>="0"&&i<="9"||"e"===i||"-"===i||"+"===i||"."===i)&&this.setState({text:t})}}}]),i}(r.a.Component),J={fontSize:45,textAlign:"center",minHeight:100},X={fontSize:30,textAlign:"center",minHeight:100,padding:15},Y=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(h.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e,t=this.props.gameState.progressState;return t===H.PAUSED?Object(n.jsx)("div",{style:Object(I.a)(Object(I.a)({},J),{},{fontFamily:this.props.theme.questionFont}),children:"---Paused---"}):t===H.POSTGAME?Object(n.jsx)("div",{style:Object(I.a)(Object(I.a)({},X),{},{fontFamily:this.props.theme.questionFont}),children:"Final Score: ".concat(this.props.gameState.totalScore)}):this.props.question?null===(e=this.props.question)||void 0===e?void 0:e.view:Object(n.jsx)(E,{text:"---"})}}]),i}(r.a.Component),Z=i(14),$=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(h.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this.props.gameState,t=e.recentGuess,i=e.recentAnswer,a=e.totalScore,r=e.recentScore,s="",o=Math.abs(Math.log10(i)-Math.log10(t));o=Math.pow(10,o),isNaN(o)&&(o=1),o<1.5?s="Error: ".concat((o=100*(o-1)).toFixed(2)," %"):(o=Math.log10(o),s="Error (log\u2081\u2080): ".concat(o.toFixed(2)));var h=window.innerWidth<576,c=h?{}:{float:"right"},l={fontSize:h?"16px":"19px"},d=Z("highscores");null===d&&(Z("highscores",{}),d={});var u=d[this.props.gameState.storageKey]||0;return Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(v.a,{xs:12,sm:4,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{style:l,children:"Score: ".concat(a," ")}),Object(n.jsx)("span",{style:l,children:"(+".concat(r,")")})]}),Object(n.jsx)("div",{style:l,children:"Highscore: ".concat(u)})]}),Object(n.jsx)(v.a,{xs:12,sm:8,children:Object(n.jsxs)("div",{style:c,children:[Object(n.jsx)("div",{style:l,children:"Guess: ".concat(ee(t),", Answer: ").concat(ee(i))}),Object(n.jsx)("div",{style:l,children:s})]})})]})})})}}]),i}(r.a.Component),_="\u2070\xb9\xb2\xb3\u2074\u2075\u2076\u2077\u2078\u2079\u207b";function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e6,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.001;if(0!==e&&(e<i||e>t)){for(var n=Math.floor(Math.log10(e)),a=e/Math.pow(10,n),r=n.toString(),s="",o=0;o<r.length;o++)"-"===r[o]?s+=_[10]:s+=_[parseInt(r[o])];return"".concat(a.toFixed(3),"\xd710").concat(s)}for(var h=e.toString(),c=h.length-1,l=0;c>=0&&"."!=h[c];)c--,l++;return c>=0&&l>6&&(h=e.toFixed(6)),h.length>8&&(h=h.substring(0,8)),h}var te=$,ie=i(59),ne=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(h.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this.props,t=e.theme,i=e.gameState,a=e.inputHandler,r={fontFamily:t.headerFont,fontSize:"24px",marginTop:"12px"},s=this.props.width<450;s&&(r.fontSize="18px");var o="(".concat(i.currentIndex+1,"/").concat(i.numQuestions,")"),h=Object(n.jsx)(ie.a,{size:s?"sm":void 0,variant:"success",style:{float:"right",fontFamily:t.bodyFont},onClick:function(){a({type:Q.BUTTON,payload:"start"})},children:"Start\u21b5"}),c=Object(n.jsx)(ie.a,{size:s?"sm":void 0,variant:"success",style:{float:"right",fontFamily:t.bodyFont},onClick:function(){a({type:Q.BUTTON,payload:"replay"})},children:"Replay\u21b5"});return Object(n.jsxs)("div",{style:r,children:[Object(n.jsx)("span",{children:i.category}),i.progressState===H.PREGAME?h:i.progressState===H.POSTGAME?c:Object(n.jsx)("span",{style:{float:"right"},children:o}),Object(n.jsx)("hr",{style:{borderColor:t.textColor}})]})}}]),i}(r.a.Component),ae={marginRight:4},re=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).pauseEvent=n.pauseEvent.bind(Object(l.a)(n)),n.resetEvent=n.resetEvent.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e=this.props.gameState.progressState,t=e===H.PAUSED,i=[Object(n.jsxs)(ie.a,{variant:"primary",style:ae,onClick:this.pauseEvent,children:[Object(n.jsx)("u",{children:"P"}),t?"lay":"ause"]},1),Object(n.jsxs)(ie.a,{variant:"warning",style:ae,onClick:this.resetEvent,children:[Object(n.jsx)("u",{children:"R"}),"eset"]},2)];return Object(n.jsx)("div",{children:e===H.POSTGAME?[]:i})}},{key:"pauseEvent",value:function(){this.props.inputHandler({type:Q.BUTTON,payload:"playpause"})}},{key:"resetEvent",value:function(){this.props.inputHandler({type:Q.BUTTON,payload:"reset"})}}]),i}(r.a.Component),se=0;var oe=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).prevTimestamp=0,n.state={gameState:new z},n.handleInput=n.handleInput.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"componentDidMount",value:function(){this.handleInput=this.handleInput.bind(this),this.keyCapture=this.keyCapture.bind(this),document.body.addEventListener("keydown",this.keyCapture)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.keyCapture)}},{key:"render",value:function(){var e=this.state.gameState;return Object(n.jsxs)("div",{id:"centerview",children:[Object(n.jsx)(ne,{theme:this.props.theme,gameState:e,inputHandler:this.handleInput,width:this.props.width}),Object(n.jsx)(Y,{question:e.currentQuestion,theme:this.props.theme,gameState:e}),Object(n.jsx)(K,{inputHandler:this.handleInput,theme:this.props.theme,gameState:e}),Object(n.jsx)(te,{gameState:e}),Object(n.jsx)(re,{inputHandler:this.handleInput,gameState:e})]})}},{key:"parentUpdate",value:function(e){this.setState({gameState:e})}},{key:"handleInput",value:function(e){var t=function(e,t,i){var n=e;if(e.progressState===H.PREGAME)t.type===Q.BUTTON&&"start"===t.payload&&((n=V(e)).progressState=H.RUNNING);else if(e.progressState===H.RUNNING){if(t.type===Q.BUTTON)"reset"===t.payload?(n=V(e)).progressState=H.RUNNING:"playpause"===t.payload&&(n.progressState=H.PAUSED);else if(t.type===Q.ANSWER){var a,r,s=null===(a=e.currentQuestion)||void 0===a?void 0:a.scorer(t.payload);if(n.totalScore+=s||0,n.recentGuess=t.payload,n.recentAnswer=(null===(r=e.currentQuestion)||void 0===r?void 0:r.answer)||-1,n.recentScore=s||0,n.currentIndex++,n.currentIndex<n.numQuestions)n.currentQuestion=n.questionArray[n.currentIndex],n.totalTime=n.currentQuestion.timelimit;else{var o=W("highscores");o||(W("highscores",{}),o={}),o[n.storageKey]=Math.max(n.totalScore,o[n.storageKey]||0),W("highscores",o),n.progressState=H.POSTGAME}}}else e.progressState===H.PAUSED?t.type===Q.BUTTON&&"playpause"===t.payload?n.progressState=H.RUNNING:"reset"===t.payload&&((n=V(e)).progressState=H.RUNNING):e.progressState===H.POSTGAME&&t.type===Q.BUTTON&&"replay"===t.payload&&((n=V(e)).progressState=H.RUNNING);return n}(this.state.gameState,e,this.handleInput);this.setState({gameState:t})}},{key:"keyCapture",value:function(e){var t=function(e,t){if(!(e.timeStamp-se<.1)){se=e.timeStamp;var i={type:Q.BUTTON,payload:""};if("KeyR"===e.code)return i.payload="reset",i;if("KeyP"===e.code)return i.payload="playpause",i;if("Enter"===e.code){if(t.progressState===H.PREGAME)return i.payload="start",i;if(t.progressState===H.RUNNING)return}}}(e,this.state.gameState);void 0!==t&&this.handleInput(t)}}]),i}(r.a.Component),he=i(15),ce=i(56),le=[{category:"Multiplication",numQuestions:5,generator:F,levels:[{name:"Easy",config:{numOperands:{low:2,high:2},rangeCenter:2e4,rangeVariance:2,operandVariance:2,timeLimit:0}},{name:"Medium",config:{numOperands:{low:3,high:3},rangeCenter:1e5,rangeVariance:2,operandVariance:2,timeLimit:0}},{name:"Hard",config:{numOperands:{low:4,high:4},rangeCenter:1e6,rangeVariance:2,operandVariance:2,timeLimit:0}}],times:[0,1e4,3e4]},{category:"Percentages",numQuestions:5,generator:function(e){for(var t=e.numOperands,i=e.operandRange,a=e.timeLimit,r=e.round,s=U(t.low,t.high),o=[],h=1,c=0;c<s;c++)o.push(U(i.low,i.high)),o[c]-=o[c]%r,h*=o[c]/100;var l="";return o.forEach((function(e){l+="".concat(e,"% \xd7 ")})),l=l.slice(0,-3),new L(Object(n.jsx)(E,{text:l}),h,(function(e,t){var i=e<t?e/t:t/e;return Math.round(100*i)}),a)},levels:[{name:"Easy",config:{numOperands:{low:2,high:3},operandRange:{low:10,high:99},timeLimit:0,round:5}},{name:"Hard",config:{numOperands:{low:4,high:4},operandRange:{low:10,high:99},timeLimit:0,round:1}}],times:[0,1e4,3e4]},{category:"Angles",numQuestions:5,generator:function(e){var t=e.minDeg,i=e.maxDeg,a=e.timeLimit,r=U(t,i),s=r*Math.PI/180;return new L(Object(n.jsx)(f,{angle:s}),r,(function(e,t){var i=1-.05*Math.abs(e-t);return i<0&&(i=0),Math.round(100*i)}),a)},levels:[{name:"Acute Only",config:{minDeg:1,maxDeg:89,timeLimit:0}},{name:"Any",config:{minDeg:1,maxDeg:359,timeLimit:0}}],times:[0,7e3,2e4]},{category:"Counting (Static)",numQuestions:5,generator:function(e){var t=e.min,i=e.max,a=e.timeLimit,r=U(t,i);return new L(Object(n.jsx)(R,{num:r,shape:"circle"}),r,(function(e,t){if(e===t)return 100;var i=e<t?e/t:t/e;return Math.round(90*i)}),a)},levels:[{name:"20 - 50",config:{min:20,max:50,timeLimit:0}},{name:"50 - 100",config:{min:50,max:100,timeLimit:0}},{name:"100 - 500",config:{min:100,max:500,timeLimit:0}}],times:[0,7e3,2e4]},{category:"Counting (Moving)",numQuestions:5,generator:function(e){var t=e.min,i=e.max,a=e.timeLimit,r=U(t,i);return new L(Object(n.jsx)(k,{num:r}),r,(function(e,t){var i=e<t?e/t:t/e;return Math.round(100*i)}),a)},levels:[{name:"15-30",config:{min:15,max:30,timeLimit:0}},{name:"30 - 80",config:{min:30,max:80,timeLimit:0}},{name:"80 - 200",config:{min:81,max:200,timeLimit:0}}],times:[0,7e3,2e4]},{category:"Length",numQuestions:5,generator:function(e){var t=e.center,i=e.variance,a=e.shape,r=e.timeLimit,s=G(t,i);return new L(Object(n.jsx)(C,{ratio:s,shape:a}),s,(function(e,t){var i=e<t?e/t:t/e;return Math.round(100*i)}),r)},levels:[{name:"Parallel Lines",config:{center:3,variance:3,shape:"parallel",timeLimit:0}},{name:"Lines",config:{center:3,variance:3,shape:"singlelines",timeLimit:0}},{name:"Paths",config:{center:16,variance:1,shape:"path",timeLimit:0}}],times:[0,7e3,2e4]},{category:"Area",numQuestions:5,generator:function(e){var t=e.center,i=e.variance,a=e.shape,r=e.timeLimit,s=G(t,i);return new L(Object(n.jsx)(x,{ratio:s,shape:a}),s,(function(e,t){var i=e<t?e/t:t/e;return i=Math.sqrt(i),Math.round(100*i)}),r)},levels:[{name:"Circles",config:{center:3,variance:5,shape:"circle",timeLimit:0}},{name:"Polygons",config:{center:3,variance:4,shape:"polygon",timeLimit:0}}],times:[0,7e3,2e4]}],de=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).state={outer:"Multiplication",level:"Easy",timeLimit:0},n.changeOuter=n.changeOuter.bind(Object(l.a)(n)),n.changeTimeLimit=n.changeTimeLimit.bind(Object(l.a)(n)),n.changeLevel=n.changeLevel.bind(Object(l.a)(n)),n.updateParent=n.updateParent.bind(Object(l.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e,t=this;if(!this.props.visible)return Object(n.jsx)("div",{});var i={height:"100%",width:"300px",position:"fixed",zIndex:1e4,top:0,right:0,overflowX:"hidden",backgroundColor:this.props.theme.primary,borderLeft:"3px solid ".concat(this.props.theme.textColor)};i.marginTop=null===(e=document.getElementById("header"))||void 0===e?void 0:e.clientHeight;var a={fontFamily:this.props.theme.headerFont,fontSize:"20px",margin:"3px"},r=le[0],s=le.map((function(e,i){var a=e.category===t.state.outer;return a&&(r=e),Object(n.jsx)(ie.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeOuter(e.category)},children:e.category},i)})),o=r.times.map((function(e,i){var a=e===t.state.timeLimit,r=e>0?(e/1e3).toFixed(0)+" s":"Unlimited";return Object(n.jsx)(ie.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeTimeLimit(e)},children:r},i)})),h=r.levels.map((function(e,i){var a=e.name===t.state.level;return Object(n.jsx)(ie.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeLevel(e.name)},children:e.name},i)}));return Object(n.jsxs)("div",{style:i,children:[Object(n.jsx)("div",{style:Object(I.a)(Object(I.a)({},a),{},{fontSize:"24px"}),children:"Gamemode Settings"}),Object(n.jsx)("div",{style:a,children:"Time Limit"}),o,Object(n.jsx)("div",{style:a,children:"Difficulty"}),h,Object(n.jsx)("div",{style:a,children:"Category"}),Object(n.jsx)(ce.a,{vertical:!0,children:s})]})}},{key:"changeOuter",value:function(e){if(this.state.outer!==e){for(var t={},i=0;i<le.length;i++)le[i].category===e&&(t=le[i]);var n=t.times[0],a=t.levels[0].name;this.setState({outer:e,timeLimit:n,level:a},this.updateParent)}}},{key:"changeTimeLimit",value:function(e){this.state.timeLimit!==e&&this.setState({timeLimit:e},this.updateParent)}},{key:"changeLevel",value:function(e){this.state.level!==e&&this.setState({level:e},this.updateParent)}},{key:"updateParent",value:function(){for(var e={},t=0;t<le.length;t++)le[t].category===this.state.outer&&(e=le[t]);var i,n="".concat(this.state.outer," (").concat(this.state.level,")"),a=e.numQuestions,r=e.generator,s={},o=Object(he.a)(e.levels);try{for(o.s();!(i=o.n()).done;){var h=i.value;h.name===this.state.level&&(s=h.config)}}catch(c){o.e(c)}finally{o.f()}s.timeLimit=this.state.timeLimit,this.props.updateHandler(n,a,r,s)}},{key:"handleUpdate",value:function(e){for(var t={},i=0;i<le.length;i++)"".concat(le[i].category," (").concat(le[i].levels[0].name,")")===e&&(t=le[i]);e=t.category;var n=t.levels[0].name,a=t.times[0];this.setState({outer:e,level:n,timeLimit:a})}}]),i}(r.a.Component),ue=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(h.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this,t={background:this.props.theme.primary,width:"wrap-content",textAlign:"center",fontFamily:this.props.theme.headerFont,fontSize:"30px",color:this.props.theme.textColor},i={height:"100%",margin:"6px"};return this.props.width<400&&(t.fontSize="24px"),Object(n.jsxs)("div",{style:t,id:"header",children:[Object(n.jsx)("span",{style:Object(I.a)(Object(I.a)({},t),{},{display:"inline-block"}),children:"The Estimation Game"}),Object(n.jsx)("i",{className:"fas fa-cog",style:Object(I.a)(Object(I.a)({},i),{},{float:"left"}),onClick:function(){return e.props.sidebarHandler("left")}}),Object(n.jsx)("i",{className:"fas fa-dice",style:Object(I.a)(Object(I.a)({},i),{},{float:"right"}),onClick:function(){return e.props.sidebarHandler("right")}})]})}}]),i}(r.a.Component),pe=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).updateParent=n.updateParent.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.theme,a=(t.updateHandler,le.map((function(t,i){return Object(n.jsx)(ie.a,{style:{margin:"2px"},variant:"primary",onClick:function(){return e.updateParent(t.category)},children:t.category},i)})));return Object(n.jsxs)("div",{id:"welcomediv",children:[Object(n.jsx)("div",{style:{fontSize:"24px",fontFamily:i.bodyFont,textAlign:"center",padding:"10px"},children:"Quick Play"}),Object(n.jsx)(ce.a,{vertical:!0,style:{width:"100%"},children:a})]})}},{key:"updateParent",value:function(e){for(var t={},i=0;i<le.length;i++)le[i].category===e&&(t=le[i]);var n,a=t.levels[0].name,r="".concat(e," (").concat(a,")"),s=t.numQuestions,o=t.generator,h={},c=Object(he.a)(t.levels);try{for(c.s();!(n=c.n()).done;){var l=n.value;l.name===a&&(h=l.config)}}catch(d){c.e(d)}finally{c.f()}h.timeLimit=t.times[0],this.props.updateHandler(r,s,o,h,!0)}}]),i}(r.a.Component),me=i(14),ve=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(h.a)(this,i),t.call(this,e)}return Object(c.a)(i,[{key:"render",value:function(){var e;if(!this.props.visible)return Object(n.jsx)("div",{});var t={height:"100%",width:"300px",position:"fixed",zIndex:1e4,top:0,left:0,overflowX:"hidden",backgroundColor:this.props.theme.primary,borderRight:"3px solid ".concat(this.props.theme.textColor)};t.marginTop=null===(e=document.getElementById("header"))||void 0===e?void 0:e.clientHeight;this.props.theme.headerFont;return Object(n.jsx)("div",{style:t,children:Object(n.jsx)(ie.a,{style:{margin:"5px"},variant:"danger",onClick:this.handleDelete,children:"Reset Highscores"})})}},{key:"handleDelete",value:function(){window.confirm("do you wanna delete")&&me.remove("highscores")}}]),i}(r.a.Component),fe=i(14),ge={background:"#222831",primary:"#30475e",secondary:"#ffc107",textColor:"#eeeeee",questionFont:"Roboto Mono",headerFont:"Concert One",bodyFont:"Noto Sans"},be={background:ge.background,minHeight:"100vh",color:ge.textColor,fontFamily:ge.bodyFont},je=(Math.PI,function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).centerRef=void 0,n.sidebarRef=void 0,n.state={width:window.innerWidth,height:window.innerHeight,rightBar:!1,leftBar:!1,welcomePage:!0},window.addEventListener("resize",(function(e){n.setState({height:e.currentTarget.innerHeight,width:e.currentTarget.innerWidth})})),n.sidebarHandler=n.sidebarHandler.bind(Object(l.a)(n)),n.centerRef=r.a.createRef(),n.sidebarRef=r.a.createRef(),n.updateGamemode=n.updateGamemode.bind(Object(l.a)(n)),null==fe("highscore")&&fe("highscore",{}),n}return Object(c.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:be,children:[Object(n.jsx)(ue,{theme:ge,sidebarHandler:this.sidebarHandler,width:this.state.width}),this.state.welcomePage&&Object(n.jsx)("div",{style:{right:5,position:"fixed"},children:" View all modes \u2191 "}),this.state.welcomePage&&Object(n.jsx)("div",{style:{left:5,position:"fixed"},children:" \u2191 Settings "}),this.state.welcomePage&&Object(n.jsx)("br",{}),Object(n.jsx)(ve,{theme:ge,visible:this.state.leftBar}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(v.a,{lg:2,md:1,xs:0}),Object(n.jsx)(v.a,{lg:8,md:10,xs:12,children:this.state.welcomePage?Object(n.jsx)(pe,{theme:ge,updateHandler:this.updateGamemode}):Object(n.jsx)(oe,{theme:ge,ref:this.centerRef,width:this.state.width})}),Object(n.jsx)(v.a,{lg:2,md:1,xs:0})]})}),Object(n.jsx)(de,{ref:this.sidebarRef,theme:ge,updateHandler:this.updateGamemode,visible:this.state.rightBar})]})}},{key:"sidebarHandler",value:function(e){"right"===e?this.setState((function(e){return{rightBar:!e.rightBar,leftBar:!1}})):"left"===e&&this.setState((function(e){return{leftBar:!e.leftBar,rightBar:!1}}))}},{key:"updateGamemode",value:function(e,t,i,n){var a,r=this,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.state.welcomePage&&this.setState({welcomePage:!1},(function(){var a;s&&(null===(a=r.sidebarRef.current)||void 0===a||a.handleUpdate(e));r.updateGamemode(e,t,i,n)}));var o=new z;o.category=e,o.numQuestions=t,o.generator=i,o.generatorconfig=n,o.storageKey="".concat(e,"|").concat(n.timeLimit),null===(a=this.centerRef.current)||void 0===a||a.parentUpdate(o)}}]),i}(r.a.Component));o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(je,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ca8179d4.chunk.js.map