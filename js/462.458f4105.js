"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[462],{462:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var i=s(6252),a=s(9963);const r=e=>((0,i.dD)("data-v-09dcd6cb"),e=e(),(0,i.Cn)(),e),n=r((()=>(0,i._)("h1",{style:{"text-align":"center",color:"rgb(6,90,92)"}},"카운트다운 시간 설정하기",-1))),l={class:"gridContainer"},o=r((()=>(0,i._)("div",null,null,-1))),c=r((()=>(0,i._)("div",null,null,-1))),u=r((()=>(0,i._)("span",{class:"columnDots"}," :",-1))),d=r((()=>(0,i._)("span",{class:"columnDots"}," :",-1))),h=r((()=>(0,i._)("div",null,null,-1))),m=r((()=>(0,i._)("div",null,null,-1))),b={class:"timer"};function P(e,t,s,r,P,f){return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("div",l,[(0,i._)("button",{ref:"addHourDecimal",onClick:t[0]||(t[0]=(...e)=>f.addHourDecimal&&f.addHourDecimal(...e)),class:"btn"},"^",512),(0,i._)("button",{ref:"addHourUnit",onClick:t[1]||(t[1]=(...e)=>f.addhourPart&&f.addhourPart(...e)),class:"btn"},"^",512),o,(0,i._)("button",{ref:"addMinDecimal",onClick:t[2]||(t[2]=(...e)=>f.addMinDecimal&&f.addMinDecimal(...e)),class:"btn"},"^",512),(0,i._)("button",{ref:"addMinUnit",onClick:t[3]||(t[3]=(...e)=>f.addminPart&&f.addminPart(...e)),class:"btn"},"^",512),c,(0,i._)("button",{ref:"addSecDecimal",onClick:t[4]||(t[4]=(...e)=>f.addSecDecimal&&f.addSecDecimal(...e)),class:"btn"},"^",512),(0,i._)("button",{ref:"addSecUnit",onClick:t[5]||(t[5]=(...e)=>f.addsecPart&&f.addsecPart(...e)),class:"btn"},"^",512),(0,i.wy)((0,i._)("input",{ref:"hourInput",size:"2",maxlength:"2","onUpdate:modelValue":t[6]||(t[6]=e=>P.hourPart=e),class:"twoColElem spaceSet",onInput:t[7]||(t[7]=(...e)=>f.checkInput&&f.checkInput(...e))},null,544),[[a.nr,P.hourPart]]),u,(0,i.wy)((0,i._)("input",{ref:"minInput",size:"2",maxlength:"2","onUpdate:modelValue":t[8]||(t[8]=e=>P.minPart=e),class:"twoColElem spaceSet",onInput:t[9]||(t[9]=(...e)=>f.checkInput&&f.checkInput(...e))},null,544),[[a.nr,P.minPart]]),d,(0,i.wy)((0,i._)("input",{ref:"secInput",type:"tel",size:"2",maxlength:"2","onUpdate:modelValue":t[10]||(t[10]=e=>P.secPart=e),class:"twoColElem spaceSet",onInput:t[11]||(t[11]=(...e)=>f.checkInput&&f.checkInput(...e))},null,544),[[a.nr,P.secPart]]),(0,i._)("button",{ref:"subHourDecimal",onClick:t[12]||(t[12]=(...e)=>f.subHourDecimal&&f.subHourDecimal(...e)),class:"btn"},"v",512),(0,i._)("button",{ref:"subHourUnit",onClick:t[13]||(t[13]=(...e)=>f.subhourPart&&f.subhourPart(...e)),class:"btn"},"v",512),h,(0,i._)("button",{ref:"subMinDecimal",onClick:t[14]||(t[14]=(...e)=>f.subMinDecimal&&f.subMinDecimal(...e)),class:"btn"},"v",512),(0,i._)("button",{ref:"subMinUnit",onClick:t[15]||(t[15]=(...e)=>f.subminPart&&f.subminPart(...e)),class:"btn"},"v",512),m,(0,i._)("button",{ref:"subSecDecimal",onClick:t[16]||(t[16]=(...e)=>f.subSecDecimal&&f.subSecDecimal(...e)),class:"btn"},"v",512),(0,i._)("button",{ref:"subSecUnit",onClick:t[17]||(t[17]=(...e)=>f.subSecPart&&f.subSecPart(...e)),class:"btn"},"v",512)]),(0,i._)("div",b,[(0,i._)("button",{onClick:t[18]||(t[18]=(...e)=>f.startCountDown&&f.startCountDown(...e)),class:"btn btn-success"},"카운트다운 시작"),(0,i._)("button",{onClick:t[19]||(t[19]=(...e)=>f.stopTimer&&f.stopTimer(...e)),class:"btn btn-success"},"카운트다운 정지"),(0,i._)("button",{onClick:t[20]||(t[20]=(...e)=>f.resetTimer&&f.resetTimer(...e)),ref:"resetTimerBtn",class:"btn btn-success"},"카운트다운 리셋",512)])],64)}var f={data(){return{secPart:"00",minPart:"00",hourPart:"00",SettedTimer:new Date,intervalClock:null}},methods:{resetTimer(){console.log("resetTimer");let e=this;e.secPart=e.update(0),e.minPart=e.update(0),e.hourPart=e.update(0);let t=this.SettedTimer;t.setHours(0),t.setMinutes(0),t.setSeconds(0)},stopTimer(){this.EnableInputs(),clearInterval(this.intervalClock),console.log("this.SettedTimer.getSeconds(): ",this.SettedTimer.getSeconds()),console.log("this.SettedTimer.getMinutes(): ",this.SettedTimer.getMinutes()),console.log("this.SettedTimer.getHours(): ",this.SettedTimer.getHours());let e=""+this.update(this.SettedTimer.getSeconds());console.log("sec: ",e);let t=""+this.update(this.SettedTimer.getMinutes());console.log("min: ",t);let s=""+this.update(this.SettedTimer.getHours());console.log("hou: ",s),this.secPart=e,this.minPart=t,this.hourPart=s},checkInput(e){let t=String.fromCharCode(e.which);/[0-9]/.test(t)||e.preventDefault();let s=this;s.secPart>=60&&(s.secPart="59"),s.minPart>=60&&(s.minPart="59"),s.hourPart>24&&(s.hourPart="23")},update(e){return e<10?"0"+e:e},EnableInputs(){this.$refs.subSecUnit.disabled=!1,this.$refs.subSecDecimal.disabled=!1,this.$refs.subMinUnit.disabled=!1,this.$refs.subMinDecimal.disabled=!1,this.$refs.subHourUnit.disabled=!1,this.$refs.subHourDecimal.disabled=!1,this.$refs.addSecUnit.disabled=!1,this.$refs.addSecDecimal.disabled=!1,this.$refs.addMinUnit.disabled=!1,this.$refs.addMinDecimal.disabled=!1,this.$refs.addHourUnit.disabled=!1,this.$refs.addHourDecimal.disabled=!1,this.$refs.hourInput.disabled=!1,this.$refs.minInput.disabled=!1,this.$refs.secInput.disabled=!1,this.$refs.resetTimerBtn.disabled=!1},DisableInputs(){console.log("btn and filed editing disabled"),this.$refs.subSecUnit.disabled=!0,this.$refs.subSecDecimal.disabled=!0,this.$refs.subMinUnit.disabled=!0,this.$refs.subMinDecimal.disabled=!0,this.$refs.subHourUnit.disabled=!0,this.$refs.subHourDecimal.disabled=!0,this.$refs.addSecUnit.disabled=!0,this.$refs.addSecDecimal.disabled=!0,this.$refs.addMinUnit.disabled=!0,this.$refs.addMinDecimal.disabled=!0,this.$refs.addHourUnit.disabled=!0,this.$refs.addHourDecimal.disabled=!0,this.$refs.hourInput.disabled=!0,this.$refs.minInput.disabled=!0,this.$refs.secInput.disabled=!0,this.$refs.resetTimerBtn.disabled=!0},startCountDown(){let e=this,t=this.SettedTimer;t.setHours(this.hourPart),t.setMinutes(this.minPart),t.setSeconds(this.secPart),console.log("theSettedTimer: ",t.getSeconds()),console.log("theSettedTimer: ",t),this.intervalClock=setInterval((function(){e.DisableInputs(),t.setSeconds(t.getSeconds()-1),console.log("theSettedTimer: ",t),e.secPart=e.update(t.getSeconds()),e.minPart=e.update(t.getMinutes()),e.hourPart=e.update(t.getHours()),0==t.getSeconds()&&0==t.getMinutes()&&0==t.getHours()&&e.stopTimer()}),1e3)},addHourDecimal(){console.log("addHourDecimal()");let e=this.hourPart[0];if(console.log("tmpDecimal"+e),e>=2){let e="2"+this.hourPart[1];this.hourPart=e}else{e=Number(e)+1,console.log("tmpDecimal after else"+e);let t=""+e+this.hourPart[1];console.log("concat after else"+t),this.hourPart=t}},addhourPart(){let e=this.hourPart,t=e[1];if(t>=3&&e[0]>=2){const t=e[0]+"3";this.hourPart=t}else if(9==t){console.log("else if (tmpUnit == 9)"),this.addHourDecimal();let e=this.hourPart;const t=""+e[0]+0;this.hourPart=t}else{t=Number(t)+1;const s=""+e[0]+t;this.hourPart=s}},addMinDecimal(){let e=this.minPart[0];if(e>=5){const e="0"+this.minPart[1];this.minPart=e}else{e=Number(e)+1;const t=""+e+this.minPart[1];this.minPart=t}},addminPart(){let e=this.minPart,t=e[1];if(9==t){this.addMinDecimal();let e=this.minPart;const t=""+e[0]+0;this.minPart=t}else{t=Number(t)+1;const s=""+e[0]+t;this.minPart=s}},addSecDecimal(){let e=this.secPart[0];if(e>=5){const e="0"+this.secPart[1];this.secPart=e}else{e=Number(e)+1;const t=""+e+this.secPart[1];this.secPart=t}},addsecPart(){let e=this.secPart,t=e[1];if(9==t){this.addSecDecimal();let e=this.secPart;const t=""+e[0]+0;this.secPart=t}else{t=Number(t)+1;const s=""+e[0]+t;this.secPart=s}},subHourDecimal(){console.log("start subHourDecimal()");let e=this.hourPart,t=e[0];t=Number(t)-1,t<0&&(t=0,console.log("if subHourDecimal()"));const s=""+t+e[1];this.hourPart=s,console.log("end subHourDecimal()")},subhourPart(){let e=this.hourPart,t=e[1];0==e[1]&&0==e[0]?this.hourPart="00":0==t?(t=9,this.hourPart=""+(Number(e[0])-1)+t):(t=Number(t)-1,this.hourPart=""+e[0]+t)},subMinDecimal(){console.log("start subMinDecimal()");let e=this.minPart,t=e[0];t=Number(t)-1,t<0&&(t=0,console.log("if subMinDecimal()"));const s=""+t+e[1];this.minPart=s,console.log("end subMinDecimal()")},subminPart(){let e=this.minPart,t=e[1];0==e[1]&&0==e[0]?this.minPart="00":0==t?(t=9,this.minPart=""+(Number(e[0])-1)+t):(t=Number(t)-1,this.minPart=""+e[0]+t)},subSecDecimal(){console.log("start subSecDecimal()");let e=this.secPart,t=e[0];t=Number(t)-1,t<0&&(t=0,console.log("if subSecDecimal()"));const s=""+t+e[1];this.secPart=s,console.log("end subSecDecimal()")},subSecPart(){let e=this.secPart,t=e[1];if(0==e[1]&&0==e[0]){console.log("reach else if(tmpUnit==0 && tempSecWhole2==0)");const e="00";this.secPart=e}else if(0==t){console.log("before this.subSecDecimal();"),t=9;const s=""+(Number(e[0])-1)+t;this.secPart=s,console.log("tempSecWhole2[1])"+e[1]),console.log("tempSecWhole2[0])"+e[0])}else{t=Number(t)-1;const s=""+e[0]+t;this.secPart=s}}}},D=s(3744);const p=(0,D.Z)(f,[["render",P],["__scopeId","data-v-09dcd6cb"]]);var S=p}}]);
//# sourceMappingURL=462.458f4105.js.map