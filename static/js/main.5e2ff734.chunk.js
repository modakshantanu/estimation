(this.webpackJsonpestimation=this.webpackJsonpestimation||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),s=n(15),o=n.n(s),c=(n(23),n(3)),l=n(6),h=n(9),u=n(8),d=n(7),p=n(39),m=n(40),g=n(41);n(24);function v(e,t){return e<t?e/t:t/e}var f=function e(t,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(c.a)(this,e),this.expression=void 0,this.answer=void 0,this.timelimit=void 0,this.id=void 0,this.scorer=void 0,this.expression=t,this.answer=n,this.id=Math.random(),this.scorer=function(e){return a(e,r.answer)},this.timelimit=i};function j(e,t){return e+Math.floor(Math.random()*(t-e+.99999))}function b(e,t){return e*Math.pow(2,(r=t,(n=-t)+Math.random()*(r-n)));var n,r}function y(e){for(var t=e.numOperands,n=e.rangeCenter,r=e.rangeVariance,a=e.operandVariance,i=e.timeLimit,s=j(t.low,t.high),o=b(n,r),c=[],l=0;l<s;l++){var h=b(Math.pow(o,1/(s-l)),a);c.push(Math.round(h)),o/=h}c.sort((function(e,t){return e-t})),o=c.reduce((function(e,t){return e*t}));var u="";return c.forEach((function(e){u+="".concat(e," \xd7 ")})),u=u.slice(0,-3),new f(u,o,(function(e,t){var n=e<t?e/t:t/e;return Math.round(100*n)}),i)}var O,x=n(43),S=n(44);!function(e){e[e.PREGAME=0]="PREGAME",e[e.INTRO=1]="INTRO",e[e.RUNNING=2]="RUNNING",e[e.PAUSED=3]="PAUSED",e[e.OUTRO=4]="OUTRO",e[e.POSTGAME=5]="POSTGAME"}(O||(O={}));var w,N={numOperands:{low:2,high:2},rangeCenter:2e4,rangeVariance:2,operandVariance:2,timeLimit:0},E=function e(){Object(c.a)(this,e),this.generator=y,this.questionArray=[],this.currentQuestion=void 0,this.category="Multiplication (Easy)",this.numQuestions=5,this.currentIndex=0,this.recentScore=0,this.totalScore=0,this.recentGuess=0,this.recentAnswer=0,this.progressState=O.PREGAME,this.generatorconfig=N,this.totalTime=0};function k(e){e.currentIndex=0,e.recentAnswer=e.recentGuess=e.recentScore=e.totalScore=0,e.questionArray=[];for(var t=0;t<e.numQuestions;t++)e.questionArray.push(e.generator(e.generatorconfig));return e.currentQuestion=e.questionArray[0],e.totalTime=e.currentQuestion.timelimit,e}!function(e){e[e.BUTTON=0]="BUTTON",e[e.ANSWER=1]="ANSWER",e[e.ANIM=2]="ANIM"}(w||(w={}));var T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).inputField=void 0,r.canvasRef=void 0,r.timerInterval=void 0,r.questionId=0,r.timeLimit=0,r.startTime=0,r.handleKeyDown=function(e){if("Enter"===e.key&&r.props.gameState.progressState===O.RUNNING){var t;try{t=parseFloat(r.state.text)}catch(n){return}if(isNaN(t))return;r.props.inputHandler({type:w.ANSWER,payload:t}),r.setState({text:""}),r.props.gameState.currentIndex,r.props.gameState.numQuestions}else"Enter"===e.key&&r.props.gameState.progressState===O.POSTGAME&&r.props.inputHandler({type:w.BUTTON,payload:"replay"})},r.state={text:""},r.inputField=i.a.createRef(),r.canvasRef=i.a.createRef(),r.drawArc=r.drawArc.bind(Object(h.a)(r)),r.handleChange=r.handleChange.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"drawArc",value:function(e){if(null!==this.canvasRef.current){var t=this.canvasRef.current,n=this.canvasRef.current.getContext("2d");n.strokeStyle=e<.75?"green":"red",n.fillStyle=this.props.theme.background,n.fillRect(0,0,48,48),n.lineWidth=3,n.translate(-.5,-.5);var r=t.width/2,a=t.height/2;n.beginPath(),n.arc(r,a,16,2*Math.PI*e-Math.PI/2,-Math.PI/2),n.stroke(),n.translate(.5,.5)}}},{key:"componentDidMount",value:function(){var e;this.handleChange=this.handleChange.bind(this),null===(e=this.inputField.current)||void 0===e||e.focus()}},{key:"render",value:function(){var e=this,t={background:this.props.theme.background,color:this.props.theme.textColor},n=this.props.gameState.progressState,a=this.props.gameState.currentQuestion;void 0!==a&&a.id!==this.questionId&&(this.timerInterval&&clearInterval(this.timerInterval),this.questionId=a.id,this.timeLimit=a.timelimit,this.startTime=Date.now(),0!==this.timeLimit&&(this.timerInterval=setInterval((function(){e.props.gameState.progressState===O.PAUSED&&(e.startTime+=16.67);var t=(Date.now()-e.startTime)/e.timeLimit;t<1?e.drawArc(t):(e.timerInterval&&clearInterval(e.timerInterval),e.props.inputHandler({type:w.ANSWER,payload:1}))}),16.67)),this.forceUpdate());var i=(null===a||void 0===a?void 0:a.timelimit)||0,s=this.props.gameState,o="";return n===O.RUNNING?o="Enter Answer":n===O.PAUSED&&(o="Game Paused"),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(x.a,{size:"lg",style:t,children:Object(r.jsx)(S.a,{onKeyDown:this.handleKeyDown,style:t,value:this.state.text,onChange:this.handleChange,placeholder:o,ref:this.inputField})}),0!==i&&s.progressState===O.RUNNING&&Object(r.jsx)("canvas",{ref:this.canvasRef,width:48,height:48})]})}},{key:"handleChange",value:function(e){if(this.props.gameState.progressState===O.RUNNING){var t=e.target.value,n=t.slice(-1);(0===t.length||n>="0"&&n<="9"||"e"===n||"-"===n||"+"===n||"."===n)&&this.setState({text:t})}}}]),n}(i.a.Component),I=n(10),R=n(16),A={fontSize:45,textAlign:"center",minHeight:100},C={fontSize:30,textAlign:"center",minHeight:100,padding:15},M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n=this.props.gameState.progressState;null===(e=this.props.question)||void 0===e||e.expression;return n===O.PAUSED?Object(r.jsx)("div",{style:Object(I.a)(Object(I.a)({},A),{},{fontFamily:this.props.theme.questionFont}),children:"---Paused---"}):n===O.POSTGAME?Object(r.jsx)("div",{style:Object(I.a)(Object(I.a)({},C),{},{fontFamily:this.props.theme.questionFont}),children:"Final Score: ".concat(this.props.gameState.totalScore)}):Object(r.jsx)(R.Textfit,{max:A.fontSize,mode:"single",style:Object(I.a)(Object(I.a)({},A),{},{fontFamily:this.props.theme.questionFont}),children:(null===(t=this.props.question)||void 0===t?void 0:t.expression)||"---"})}}]),n}(i.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.recentGuess,n=e.recentAnswer,a="",i=Math.abs(Math.log10(n)-Math.log10(t));i=Math.pow(10,i),isNaN(i)&&(i=1),i<1.5?a="Error: ".concat((i=100*(i-1)).toFixed(2)," %"):(i=Math.log10(i),a="Error (log\u2081\u2080): ".concat(i.toFixed(2)));var s=window.innerWidth<576?{}:{float:"right"};return Object(r.jsx)("div",{children:Object(r.jsx)(p.a,{children:Object(r.jsxs)(m.a,{children:[Object(r.jsxs)(g.a,{xs:12,sm:4,children:[Object(r.jsx)("span",{children:"Score: ".concat(this.props.totalScore," ")}),Object(r.jsx)("span",{children:"(+".concat(this.props.recentScore,")")})]}),Object(r.jsx)(g.a,{xs:12,sm:8,children:Object(r.jsxs)("div",{style:s,children:[Object(r.jsx)("div",{children:"Guess: ".concat(P(t),", Answer: ").concat(P(n))}),Object(r.jsx)("div",{children:a})]})})]})})})}}]),n}(i.a.Component),U="\u2070\xb9\xb2\xb3\u2074\u2075\u2076\u2077\u2078\u2079\u207b";function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.001;if(0!==e&&(e<n||e>t)){for(var r=Math.floor(Math.log10(e)),a=e/Math.pow(10,r),i=r.toString(),s="",o=0;o<i.length;o++)"-"===i[o]?s+=U[10]:s+=U[parseInt(i[o])];return"".concat(a.toFixed(3),"\xd710").concat(s)}for(var c=e.toString(),l=c.length-1,h=0;l>=0&&"."!=c[l];)l--,h++;return l>=0&&h>6&&(c=e.toFixed(6)),c.length>8&&(c=c.substring(0,8)),c}var F=G,L=n(45),H=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.theme,n=e.gameState,a=e.inputHandler,i={fontFamily:t.headerFont,fontSize:"24px",marginTop:"12px"};this.props.width<400&&(i.fontSize="20px");var s="(".concat(n.currentIndex+1,"/").concat(n.numQuestions,")"),o=Object(r.jsx)(L.a,{variant:"success",style:{float:"right",fontFamily:t.bodyFont},onClick:function(){a({type:w.BUTTON,payload:"start"})},children:"Start\u21b5"}),c=Object(r.jsx)(L.a,{variant:"success",style:{float:"right",fontFamily:t.bodyFont},onClick:function(){a({type:w.BUTTON,payload:"replay"})},children:"Replay\u21b5"});return Object(r.jsxs)("div",{style:i,children:[Object(r.jsx)("span",{children:n.category}),n.progressState===O.PREGAME?o:n.progressState===O.POSTGAME?c:Object(r.jsx)("span",{style:{float:"right"},children:s}),Object(r.jsx)("hr",{style:{borderColor:t.textColor}})]})}}]),n}(i.a.Component),B={marginRight:4},Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).pauseEvent=r.pauseEvent.bind(Object(h.a)(r)),r.resetEvent=r.resetEvent.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.gameState.progressState,t=e===O.PAUSED,n=[Object(r.jsxs)(L.a,{variant:"primary",style:B,onClick:this.pauseEvent,children:[Object(r.jsx)("u",{children:"P"}),t?"lay":"ause"]},1),Object(r.jsxs)(L.a,{variant:"warning",style:B,onClick:this.resetEvent,children:[Object(r.jsx)("u",{children:"R"}),"eset"]},2)];return Object(r.jsx)("div",{children:e===O.POSTGAME?[]:n})}},{key:"pauseEvent",value:function(){this.props.inputHandler({type:w.BUTTON,payload:"playpause"})}},{key:"resetEvent",value:function(){this.props.inputHandler({type:w.BUTTON,payload:"reset"})}}]),n}(i.a.Component),D=0;var q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).prevTimestamp=0,r.state={gameState:new E},r.handleInput=r.handleInput.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handleInput=this.handleInput.bind(this),this.keyCapture=this.keyCapture.bind(this),document.body.addEventListener("keydown",this.keyCapture)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.keyCapture)}},{key:"render",value:function(){var e=this.state.gameState;return Object(r.jsxs)("div",{children:[Object(r.jsx)(H,{theme:this.props.theme,gameState:e,inputHandler:this.handleInput,width:this.props.width}),Object(r.jsx)(M,{question:e.currentQuestion,theme:this.props.theme,gameState:e}),Object(r.jsx)(T,{inputHandler:this.handleInput,theme:this.props.theme,gameState:e}),Object(r.jsx)(F,{recentScore:e.recentScore,totalScore:e.totalScore,recentGuess:e.recentGuess,recentAnswer:e.recentAnswer}),Object(r.jsx)(Q,{inputHandler:this.handleInput,gameState:e})]})}},{key:"parentUpdate",value:function(e){this.setState({gameState:e})}},{key:"handleInput",value:function(e){var t=function(e,t,n){var r=e;if(e.progressState===O.PREGAME)t.type===w.BUTTON&&"start"===t.payload&&((r=k(e)).progressState=O.RUNNING);else if(e.progressState===O.RUNNING){if(t.type===w.BUTTON)"reset"===t.payload?(r=k(e)).progressState=O.RUNNING:"playpause"===t.payload&&(r.progressState=O.PAUSED);else if(t.type===w.ANSWER){var a,i,s=null===(a=e.currentQuestion)||void 0===a?void 0:a.scorer(t.payload);r.totalScore+=s||0,r.recentGuess=t.payload,r.recentAnswer=(null===(i=e.currentQuestion)||void 0===i?void 0:i.answer)||-1,r.recentScore=s||0,r.currentIndex++,r.currentIndex<r.numQuestions?(r.currentQuestion=r.questionArray[r.currentIndex],r.totalTime=r.currentQuestion.timelimit):r.progressState=O.POSTGAME}}else e.progressState===O.PAUSED?t.type===w.BUTTON&&"playpause"===t.payload?r.progressState=O.RUNNING:"reset"===t.payload&&((r=k(e)).progressState=O.RUNNING):e.progressState===O.POSTGAME&&t.type===w.BUTTON&&"replay"===t.payload&&((r=k(e)).progressState=O.RUNNING);return r}(this.state.gameState,e,this.handleInput);this.setState({gameState:t})}},{key:"keyCapture",value:function(e){var t=function(e,t){if(!(e.timeStamp-D<.1)){D=e.timeStamp;var n={type:w.BUTTON,payload:""};if("KeyR"===e.code)return n.payload="reset",n;if("KeyP"===e.code)return n.payload="playpause",n;if("Enter"===e.code){if(t.progressState===O.PREGAME)return n.payload="start",n;if(t.progressState===O.RUNNING)return}}}(e,this.state.gameState);void 0!==t&&this.handleInput(t)}}]),n}(i.a.Component),z=n(17),V=n(42),W=[{category:"Multiplication",numQuestions:5,generator:y,levels:[{name:"Easy",config:{numOperands:{low:2,high:2},rangeCenter:2e4,rangeVariance:2,operandVariance:2,timeLimit:0}},{name:"Medium",config:{numOperands:{low:3,high:3},rangeCenter:1e5,rangeVariance:2,operandVariance:2,timeLimit:0}},{name:"Hard",config:{numOperands:{low:4,high:4},rangeCenter:1e6,rangeVariance:2,operandVariance:2,timeLimit:0}}],times:[0,1e4,3e4]},{category:"Percentages",numQuestions:5,generator:function(e){for(var t=e.numOperands,n=e.operandRange,r=e.timeLimit,a=e.round,i=j(t.low,t.high),s=[],o=1,c=0;c<i;c++)s.push(j(n.low,n.high)),s[c]-=s[c]%a,o*=s[c]/100;var l="";return s.forEach((function(e){l+="".concat(e,"% \xd7 ")})),l=l.slice(0,-3),new f(l,o,(function(e,t){var n=e<t?e/t:t/e;return Math.round(100*n)}),r)},levels:[{name:"Easy",config:{numOperands:{low:2,high:3},operandRange:{low:10,high:99},timeLimit:0,round:5}},{name:"Hard",config:{numOperands:{low:4,high:4},operandRange:{low:10,high:99},timeLimit:0,round:1}}],times:[0,1e4,3e4]}],K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={outer:"Multiplication",level:"Easy",timeLimit:0},r.changeOuter=r.changeOuter.bind(Object(h.a)(r)),r.changeTimeLimit=r.changeTimeLimit.bind(Object(h.a)(r)),r.changeLevel=r.changeLevel.bind(Object(h.a)(r)),r.updateParent=r.updateParent.bind(Object(h.a)(r)),console.log("Constructed"),r}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this;if(!this.props.visible)return Object(r.jsx)("div",{});var n={height:"100%",width:"300px",position:"fixed",zIndex:1e4,top:0,right:0,overflowX:"hidden",backgroundColor:this.props.theme.primary,borderLeft:"3px solid ".concat(this.props.theme.textColor)};n.marginTop=null===(e=document.getElementById("header"))||void 0===e?void 0:e.clientHeight;var a={fontFamily:this.props.theme.headerFont,fontSize:"20px",margin:"3px"},i=W[0],s=W.map((function(e,n){var a=e.category===t.state.outer;return a&&(i=e),Object(r.jsx)(L.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeOuter(e.category)},children:e.category},n)})),o=i.times.map((function(e,n){var a=e===t.state.timeLimit,i=e>0?(e/1e3).toFixed(0)+" s":"Unlimited";return Object(r.jsx)(L.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeTimeLimit(e)},children:i},n)})),c=i.levels.map((function(e,n){var a=e.name===t.state.level;return Object(r.jsx)(L.a,{style:{margin:"2px"},variant:a?"warning":"primary",onClick:function(){return t.changeLevel(e.name)},children:e.name},n)}));return Object(r.jsxs)("div",{style:n,children:[Object(r.jsx)("div",{style:Object(I.a)(Object(I.a)({},a),{},{fontSize:"24px"}),children:"Gamemode Settings"}),Object(r.jsx)("div",{style:a,children:"Time Limit"}),o,Object(r.jsx)("div",{style:a,children:"Difficulty"}),c,Object(r.jsx)("div",{style:a,children:"Category"}),Object(r.jsx)(V.a,{vertical:!0,children:s})]})}},{key:"changeOuter",value:function(e){if(this.state.outer!==e){for(var t={},n=0;n<W.length;n++)W[n].category===e&&(t=W[n]);var r=t.times[0],a=t.levels[0].name;this.setState({outer:e,timeLimit:r,level:a},this.updateParent)}}},{key:"changeTimeLimit",value:function(e){this.state.timeLimit!==e&&this.setState({timeLimit:e},this.updateParent)}},{key:"changeLevel",value:function(e){this.state.level!==e&&this.setState({level:e},this.updateParent)}},{key:"updateParent",value:function(){for(var e={},t=0;t<W.length;t++)W[t].category===this.state.outer&&(e=W[t]);var n,r="".concat(this.state.outer," (").concat(this.state.level,")"),a=e.numQuestions,i=e.generator,s={},o=Object(z.a)(e.levels);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.name===this.state.level&&(s=c.config)}}catch(l){o.e(l)}finally{o.f()}s.timeLimit=this.state.timeLimit,this.props.updateHandler(r,a,i,s)}}]),n}(i.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={background:this.props.theme.primary,width:"wrap-content",textAlign:"center",fontFamily:this.props.theme.headerFont,fontSize:"30px",color:this.props.theme.textColor},n={height:"100%",margin:"6px"};return this.props.width<400&&(t.fontSize="24px"),Object(r.jsxs)("div",{style:t,id:"header",children:[Object(r.jsx)("span",{style:Object(I.a)(Object(I.a)({},t),{},{display:"inline-block"}),children:"The Estimation Game"}),Object(r.jsx)("i",{className:"fas fa-cog",style:Object(I.a)(Object(I.a)({},n),{},{float:"left"}),onClick:function(){return e.props.sidebarHandler("left")}}),Object(r.jsx)("i",{className:"fas fa-dice",style:Object(I.a)(Object(I.a)({},n),{},{float:"right"}),onClick:function(){return e.props.sidebarHandler("right")}})]})}}]),n}(i.a.Component),X={background:"#222831",primary:"#30475e",secondary:"#ffc107",textColor:"#eeeeee",questionFont:"Roboto Mono",headerFont:"Concert One",bodyFont:"Noto Sans"},Y={background:X.background,minHeight:"100vh",color:X.textColor,fontFamily:X.bodyFont},Z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).centerRef=void 0,r.state={width:window.innerWidth,height:window.innerHeight,rightBar:!1,leftBar:!1},window.addEventListener("resize",(function(e){r.setState({height:e.currentTarget.innerHeight,width:e.currentTarget.innerWidth})})),r.sidebarHandler=r.sidebarHandler.bind(Object(h.a)(r)),r.centerRef=i.a.createRef(),r.updateGamemode=r.updateGamemode.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{style:Y,children:[Object(r.jsx)(J,{theme:X,sidebarHandler:this.sidebarHandler,width:this.state.width}),Object(r.jsx)(p.a,{children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(g.a,{lg:2,md:1,xs:0}),Object(r.jsx)(g.a,{lg:8,md:10,xs:12,children:Object(r.jsx)(q,{theme:X,ref:this.centerRef,width:this.state.width})}),Object(r.jsx)(g.a,{lg:2,md:1,xs:0})]})}),Object(r.jsx)(K,{theme:X,updateHandler:this.updateGamemode,visible:this.state.rightBar})]})}},{key:"sidebarHandler",value:function(e){"right"===e?this.setState((function(e){return{rightBar:!e.rightBar,leftBar:!1}})):"left"===e&&this.setState({leftBar:!0,rightBar:!1})}},{key:"updateGamemode",value:function(e,t,n,r){var a,i=new E;i.category=e,i.numQuestions=t,i.generator=n,i.generatorconfig=r,null===(a=this.centerRef.current)||void 0===a||a.parentUpdate(i)}}]),n}(i.a.Component);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5e2ff734.chunk.js.map