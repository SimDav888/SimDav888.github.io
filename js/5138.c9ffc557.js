"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[5138],{5138:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var s=l(6252);function o(e,t,l,o,i,n){const a=(0,s.up)("el-option"),c=(0,s.up)("el-select");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{onChange:[o.onChange,n.onEmit],modelValue:o.state.lists.circleid,"onUpdate:modelValue":t[0]||(t[0]=e=>o.state.lists.circleid=e),clearable:"",placeholder:"Select Circle"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.state.lists,(e=>((0,s.wg)(),(0,s.j4)(a,{key:e,label:e.name,value:e.circleid},null,8,["label","value"])))),128))])),_:1},8,["onChange","modelValue"])])}var i=l(9669),n=l.n(i),a=l(2262),c={methods:{onEmit(){this.$emit("setInput",this.state.lists.circleid)}},setup(){const e=(0,a.qj)({lists:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),t="http://43.201.60.125/api/circleNameList",l={"Content-Type":"application/json",Authorization:e.token,token:e.token},s={email:e.email};console.log("before post select circle name:: "+s.email),n().post(t,s,{headers:l}).then((function(t){null!=t.data?(e.lists=t.data,console.log(e.lists[0]),console.log("state.lists[0].goalid"+e.lists[0].circleid),console.log("state.lists[0].goalName"+e.lists[0].name)):alert("too bad. check something")}));const o=()=>{console.log(e.lists.circleid)};return{state:e,onChange:o}}},r=l(3744);const u=(0,r.Z)(c,[["render",o]]);var d=u}}]);
//# sourceMappingURL=5138.c9ffc557.js.map