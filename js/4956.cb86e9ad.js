"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[4956],{4956:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var i=s(6252),a=s(9963);const r=t=>((0,i.dD)("data-v-fc2c09dc"),t=t(),(0,i.Cn)(),t),n=r((()=>(0,i._)("h1",{style:{"text-align":"center",color:"rgb(6,90,92)"}},"카운트다운 시간 설정하기",-1))),u={class:"gridContainer"},l=r((()=>(0,i._)("div",null,null,-1))),c=r((()=>(0,i._)("div",null,null,-1))),d=r((()=>(0,i._)("span",{class:"columnDots"}," :",-1))),o=r((()=>(0,i._)("span",{class:"columnDots"}," :",-1))),h=r((()=>(0,i._)("div",null,null,-1))),b=r((()=>(0,i._)("div",null,null,-1))),m={class:"timer"};function P(t,e,s,r,P,f){return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("div",u,[(0,i._)("button",{ref:"addHourDecimal",onClick:e[0]||(e[0]=(...t)=>f.addHourDecimal&&f.addHourDecimal(...t)),class:"btn"},"^",512),(0,i._)("button",{ref:"addHourUnit",onClick:e[1]||(e[1]=(...t)=>f.addhourPart&&f.addhourPart(...t)),class:"btn"},"^",512),l,(0,i._)("button",{ref:"addMinDecimal",onClick:e[2]||(e[2]=(...t)=>f.addMinDecimal&&f.addMinDecimal(...t)),class:"btn"},"^",512),(0,i._)("button",{ref:"addMinUnit",onClick:e[3]||(e[3]=(...t)=>f.addminPart&&f.addminPart(...t)),class:"btn"},"^",512),c,(0,i._)("button",{ref:"addSecDecimal",onClick:e[4]||(e[4]=(...t)=>f.addSecDecimal&&f.addSecDecimal(...t)),class:"btn"},"^",512),(0,i._)("button",{ref:"addSecUnit",onClick:e[5]||(e[5]=(...t)=>f.addsecPart&&f.addsecPart(...t)),class:"btn"},"^",512),(0,i.wy)((0,i._)("input",{ref:"hourInput",size:"2",maxlength:"2","onUpdate:modelValue":e[6]||(e[6]=t=>P.hourPart=t),class:"twoColElem spaceSet",onInput:e[7]||(e[7]=(...t)=>f.checkInput&&f.checkInput(...t))},null,544),[[a.nr,P.hourPart]]),d,(0,i.wy)((0,i._)("input",{ref:"minInput",size:"2",maxlength:"2","onUpdate:modelValue":e[8]||(e[8]=t=>P.minPart=t),class:"twoColElem spaceSet",onInput:e[9]||(e[9]=(...t)=>f.checkInput&&f.checkInput(...t))},null,544),[[a.nr,P.minPart]]),o,(0,i.wy)((0,i._)("input",{ref:"secInput",type:"tel",size:"2",maxlength:"2","onUpdate:modelValue":e[10]||(e[10]=t=>P.secPart=t),class:"twoColElem spaceSet",onInput:e[11]||(e[11]=(...t)=>f.checkInput&&f.checkInput(...t))},null,544),[[a.nr,P.secPart]]),(0,i._)("button",{ref:"subHourDecimal",onClick:e[12]||(e[12]=(...t)=>f.subHourDecimal&&f.subHourDecimal(...t)),class:"btn"},"v",512),(0,i._)("button",{ref:"subHourUnit",onClick:e[13]||(e[13]=(...t)=>f.subhourPart&&f.subhourPart(...t)),class:"btn"},"v",512),h,(0,i._)("button",{ref:"subMinDecimal",onClick:e[14]||(e[14]=(...t)=>f.subMinDecimal&&f.subMinDecimal(...t)),class:"btn"},"v",512),(0,i._)("button",{ref:"subMinUnit",onClick:e[15]||(e[15]=(...t)=>f.subminPart&&f.subminPart(...t)),class:"btn"},"v",512),b,(0,i._)("button",{ref:"subSecDecimal",onClick:e[16]||(e[16]=(...t)=>f.subSecDecimal&&f.subSecDecimal(...t)),class:"btn"},"v",512),(0,i._)("button",{ref:"subSecUnit",onClick:e[17]||(e[17]=(...t)=>f.subSecPart&&f.subSecPart(...t)),class:"btn"},"v",512)]),(0,i._)("div",m,[(0,i._)("button",{onClick:e[18]||(e[18]=(...t)=>f.startCountDown&&f.startCountDown(...t)),class:"btn btn-success"},"카운트다운 시작"),(0,i._)("button",{onClick:e[19]||(e[19]=(...t)=>f.stopTimer&&f.stopTimer(...t)),class:"btn btn-success"},"카운트다운 정지"),(0,i._)("button",{onClick:e[20]||(e[20]=(...t)=>f.resetTimer&&f.resetTimer(...t)),ref:"resetTimerBtn",class:"btn btn-success"},"카운트다운 리셋",512)])],64)}var f={data(){return{secPart:"00",minPart:"00",hourPart:"00",SettedTimer:new Date,intervalClock:null}},methods:{resetTimer(){let t=this;t.secPart=t.update(0),t.minPart=t.update(0),t.hourPart=t.update(0);let e=this.SettedTimer;e.setHours(0),e.setMinutes(0),e.setSeconds(0)},stopTimer(){this.EnableInputs(),clearInterval(this.intervalClock);let t=""+this.update(this.SettedTimer.getSeconds()),e=""+this.update(this.SettedTimer.getMinutes()),s=""+this.update(this.SettedTimer.getHours());this.secPart=t,this.minPart=e,this.hourPart=s},checkInput(t){let e=String.fromCharCode(t.which);/[0-9]/.test(e)||t.preventDefault();let s=this;s.secPart>=60&&(s.secPart="59"),s.minPart>=60&&(s.minPart="59"),s.hourPart>24&&(s.hourPart="23")},update(t){return t<10?"0"+t:t},EnableInputs(){this.$refs.subSecUnit.disabled=!1,this.$refs.subSecDecimal.disabled=!1,this.$refs.subMinUnit.disabled=!1,this.$refs.subMinDecimal.disabled=!1,this.$refs.subHourUnit.disabled=!1,this.$refs.subHourDecimal.disabled=!1,this.$refs.addSecUnit.disabled=!1,this.$refs.addSecDecimal.disabled=!1,this.$refs.addMinUnit.disabled=!1,this.$refs.addMinDecimal.disabled=!1,this.$refs.addHourUnit.disabled=!1,this.$refs.addHourDecimal.disabled=!1,this.$refs.hourInput.disabled=!1,this.$refs.minInput.disabled=!1,this.$refs.secInput.disabled=!1,this.$refs.resetTimerBtn.disabled=!1},DisableInputs(){this.$refs.subSecUnit.disabled=!0,this.$refs.subSecDecimal.disabled=!0,this.$refs.subMinUnit.disabled=!0,this.$refs.subMinDecimal.disabled=!0,this.$refs.subHourUnit.disabled=!0,this.$refs.subHourDecimal.disabled=!0,this.$refs.addSecUnit.disabled=!0,this.$refs.addSecDecimal.disabled=!0,this.$refs.addMinUnit.disabled=!0,this.$refs.addMinDecimal.disabled=!0,this.$refs.addHourUnit.disabled=!0,this.$refs.addHourDecimal.disabled=!0,this.$refs.hourInput.disabled=!0,this.$refs.minInput.disabled=!0,this.$refs.secInput.disabled=!0,this.$refs.resetTimerBtn.disabled=!0},startCountDown(){let t=this,e=this.SettedTimer;e.setHours(this.hourPart),e.setMinutes(this.minPart),e.setSeconds(this.secPart),this.intervalClock=setInterval((function(){t.DisableInputs(),e.setSeconds(e.getSeconds()-1),t.secPart=t.update(e.getSeconds()),t.minPart=t.update(e.getMinutes()),t.hourPart=t.update(e.getHours()),0==e.getSeconds()&&0==e.getMinutes()&&0==e.getHours()&&t.stopTimer()}),1e3)},addHourDecimal(){let t=this.hourPart[0];if(t>=2){let t="2"+this.hourPart[1];this.hourPart=t}else{t=Number(t)+1;let e=""+t+this.hourPart[1];this.hourPart=e}},addhourPart(){let t=this.hourPart,e=t[1];if(e>=3&&t[0]>=2){const e=t[0]+"3";this.hourPart=e}else if(9==e){this.addHourDecimal();let t=this.hourPart;const e=""+t[0]+0;this.hourPart=e}else{e=Number(e)+1;const s=""+t[0]+e;this.hourPart=s}},addMinDecimal(){let t=this.minPart[0];if(t>=5){const t="0"+this.minPart[1];this.minPart=t}else{t=Number(t)+1;const e=""+t+this.minPart[1];this.minPart=e}},addminPart(){let t=this.minPart,e=t[1];if(9==e){this.addMinDecimal();let t=this.minPart;const e=""+t[0]+0;this.minPart=e}else{e=Number(e)+1;const s=""+t[0]+e;this.minPart=s}},addSecDecimal(){let t=this.secPart[0];if(t>=5){const t="0"+this.secPart[1];this.secPart=t}else{t=Number(t)+1;const e=""+t+this.secPart[1];this.secPart=e}},addsecPart(){let t=this.secPart,e=t[1];if(9==e){this.addSecDecimal();let t=this.secPart;const e=""+t[0]+0;this.secPart=e}else{e=Number(e)+1;const s=""+t[0]+e;this.secPart=s}},subHourDecimal(){let t=this.hourPart,e=t[0];e=Number(e)-1,e<0&&(e=0);const s=""+e+t[1];this.hourPart=s},subhourPart(){let t=this.hourPart,e=t[1];0==t[1]&&0==t[0]?this.hourPart="00":0==e?(e=9,this.hourPart=""+(Number(t[0])-1)+e):(e=Number(e)-1,this.hourPart=""+t[0]+e)},subMinDecimal(){let t=this.minPart,e=t[0];e=Number(e)-1,e<0&&(e=0);const s=""+e+t[1];this.minPart=s},subminPart(){let t=this.minPart,e=t[1];0==t[1]&&0==t[0]?this.minPart="00":0==e?(e=9,this.minPart=""+(Number(t[0])-1)+e):(e=Number(e)-1,this.minPart=""+t[0]+e)},subSecDecimal(){let t=this.secPart,e=t[0];e=Number(e)-1,e<0&&(e=0);const s=""+e+t[1];this.secPart=s},subSecPart(){let t=this.secPart,e=t[1];if(0==t[1]&&0==t[0]){const t="00";this.secPart=t}else if(0==e){e=9;const s=""+(Number(t[0])-1)+e;this.secPart=s}else{e=Number(e)-1;const s=""+t[0]+e;this.secPart=s}}}},p=s(3744);const D=(0,p.Z)(f,[["render",P],["__scopeId","data-v-fc2c09dc"]]);var S=D}}]);
//# sourceMappingURL=4956.cb86e9ad.js.map