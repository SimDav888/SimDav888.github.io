"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[3993],{3993:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(6252),s=n(3577);const i=e=>((0,a.dD)("data-v-08a64869"),e=e(),(0,a.Cn)(),e),o={class:""},c={class:"listanswer"},l={class:"table table-hover"},r=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"답변 내용 "),(0,a._)("th",{scope:"col"},"공개 여부")])],-1))),u={class:"form-check form-switch form-check-inline"},h=["onChange"],d=["onChange"];function w(e,t,n,i,w,p){const k=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("main",o,[(0,a._)("div",c,[(0,a._)("table",l,[r,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.state.lists,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",null,[(0,a.Wm)(k,{to:{name:"answerread",params:{id:e.answerid}},style:{color:"rgba(6, 90, 92, 0.9)","text-decoration":"none","font-weight":"bold"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.content),1)])),_:2},1032,["to"])]),(0,a._)("td",null,[(0,a._)("div",u,[e.answerPublic?((0,a.wg)(),(0,a.iD)("input",{key:1,class:"form-check-input text-center",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",checked:"",onChange:t=>i.sendValues(e.answerid,e.answerPublic,e.content,e.rate)},null,40,d)):((0,a.wg)(),(0,a.iD)("input",{key:0,class:"form-check-input text-end",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onChange:t=>i.sendValues(e.answerid,e.answerPublic,e.content,e.rate)},null,40,h))])])])))),128))])])])])}var p=n(2201),k=n(2262),b=n(9669),g=n.n(b),f={setup(){(0,a.bv)((()=>{i()}));(0,p.tv)();const e=(0,k.iH)(!1),t=(0,k.qj)({questionid:"",lists:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),n=(0,k.qj)({answerid:"",answerPublic:"",content:"",rate:""}),s=(e,t,a,s)=>{n.answerid=e,n.answerPublic=t,n.content=a,n.rate=s,o()},i=async()=>{const e="http://localhost:9090/api/answerlistbyemail",n={"Content-Type":"application/json",Authorization:t.token,token:t.token,name:"test list"},a={email:t.email};await g().post(e,a,{headers:n}).then((function(e){200==e.status?t.lists=e.data:alert("bad.")}))},o=async()=>{const e="http://localhost:9090/api/switchanswerpulic",a={"Content-Type":"application/json",Authorization:t.token,token:t.token},s={answerid:n.answerid,content:n.content,answerPublic:!n.answerPublic,rate:n.rate},i=await g().post(e,s,{headers:a});200===i.status||alert("fail")};return{value:e,state:t,values:n,sendValues:s,loginHandler:i,changeSwitchOption:o}}},m=n(3744);const _=(0,m.Z)(f,[["render",w],["__scopeId","data-v-08a64869"]]);var v=_}}]);
//# sourceMappingURL=3993.e02456e6.js.map