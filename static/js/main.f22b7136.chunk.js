(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},16:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(8),c=n.n(i),o=n(9),s=n(2),u=n(3),l=n(5),m=n(4),f=n(1);n(7);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var p=function(t){Object(l.a)(n,t);var e=h(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={timerOn:!1,timerStart:0,timerTime:0},t.startTimer=function(){t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:Date.now()-t.state.timerTime}),t.timer=setInterval(function(){console.log("Time is \ud83d\ude80 ".concat(Date.now()-t.state.timerStart)),t.setState({timerTime:Date.now()-t.state.timerStart})},10)},t.stopTimer=function(){t.setState({timerOn:!1}),clearInterval(t.timer)},t.resetTimer=function(){t.setState({timerStart:0,timerTime:0})},t}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this,e=this.state.timerTime,n=("0"+Math.floor(e/10)%100).slice(-2),r=("0"+Math.floor(e/1e3)%60).slice(-2),i=("0"+Math.floor(e/6e4)%60).slice(-2),c=("0"+Math.floor(e/36e5)).slice(-2);return a.a.createElement("div",{className:"Stopwatch"},a.a.createElement("span",{className:"cross",onClick:function(){return t.props.close("stopwatch")}},"X"),a.a.createElement("div",{className:"Stopwatch-header"},"Stopwatch"),a.a.createElement("div",{className:"Stopwatch-display"},c," : ",i," : ",r," : ",n),!1===this.state.timerOn&&0===this.state.timerTime&&a.a.createElement("button",{onClick:this.startTimer},"Start"),!0===this.state.timerOn&&a.a.createElement("button",{onClick:this.stopTimer},"Stop"),!1===this.state.timerOn&&this.state.timerTime>0&&a.a.createElement("button",{onClick:this.startTimer},"Resume"),!1===this.state.timerOn&&this.state.timerTime>0&&a.a.createElement("button",{onClick:this.resetTimer},"Reset"))}}]),n}(r.Component);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var v=function(t){Object(l.a)(n,t);var e=d(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={timerOn:!1,timerStart:0,timerTime:0},t.startTimer=function(){t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:t.state.timerTime}),t.timer=setInterval(function(){var e=t.state.timerTime-10;console.log("Time left is \ud83d\ude80 ".concat(e)),e>=0?t.setState({timerTime:e}):(clearInterval(t.timer),t.setState({timerOn:!1}),alert("Countdown ended"))},10)},t.stopTimer=function(){clearInterval(t.timer),t.setState({timerOn:!1})},t.resetTimer=function(){!1===t.state.timerOn&&t.setState({timerTime:t.state.timerStart})},t.adjustTimer=function(e){var n=t.state,r=n.timerTime;n.timerOn||("incHours"===e&&r+36e5<216e6?t.setState({timerTime:r+36e5}):"decHours"===e&&r-36e5>=0?t.setState({timerTime:r-36e5}):"incMinutes"===e&&r+6e4<216e6?t.setState({timerTime:r+6e4}):"decMinutes"===e&&r-6e4>=0?t.setState({timerTime:r-6e4}):"incSeconds"===e&&r+1e3<216e6?t.setState({timerTime:r+1e3}):"decSeconds"===e&&r-1e3>=0&&t.setState({timerTime:r-1e3}))},t}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this,e=this.state,n=e.timerTime,r=e.timerStart,i=e.timerOn,c=("0"+Math.floor(n/1e3%60)%60).slice(-2),o=("0"+Math.floor(n/6e4%60)).slice(-2),s=("0"+Math.floor(n/36e5%60)).slice(-2);return a.a.createElement("div",{className:"Countdown"},a.a.createElement("span",{className:"cross",onClick:function(){return t.props.close("countdown")}},"X"),a.a.createElement("div",{className:"Countdown-header"},"Countdown"),a.a.createElement("div",{className:"Countdown-label"},"Hours : Minutes : Seconds"),a.a.createElement("div",{className:"Countdown-display"},a.a.createElement("button",{onClick:function(){return t.adjustTimer("incHours")}},"\u2b06"),a.a.createElement("button",{onClick:function(){return t.adjustTimer("incMinutes")}},"\u2b06"),a.a.createElement("button",{onClick:function(){return t.adjustTimer("incSeconds")}},"\u2b06"),a.a.createElement("div",{className:"Countdown-time"},s," : ",o," : ",c),a.a.createElement("button",{onClick:function(){return t.adjustTimer("decHours")}},"\u2b07"),a.a.createElement("button",{onClick:function(){return t.adjustTimer("decMinutes")}},"\u2b07"),a.a.createElement("button",{onClick:function(){return t.adjustTimer("decSeconds")}},"\u2b07")),!1===i&&(0===r||n===r)&&a.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===i&&n>=1e3&&a.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===i&&0!==r&&r!==n&&0!==n&&a.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===i||n<1e3)&&r!==n&&r>0&&a.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),n}(r.Component);function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var S=function(t){Object(l.a)(n,t);var e=T(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={stopwatch:!1,countdown:!1},t.close=function(e){t.setState(Object(o.a)({},e,!1))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-title"}," Timers  "),a.a.createElement("div",{className:"Timers"},this.state.stopwatch?a.a.createElement(p,{close:this.close}):a.a.createElement("button",{onClick:function(){return t.setState({stopwatch:!0})}},"Show Stopwatch"),this.state.countdown?a.a.createElement(v,{close:this.close}):a.a.createElement("button",{onClick:function(){return t.setState({countdown:!0})}},"Show Countdown")))}}]),n}(r.Component);c.a.render(a.a.createElement(S,null),document.getElementById("root"))},7:function(t,e,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.f22b7136.chunk.js.map