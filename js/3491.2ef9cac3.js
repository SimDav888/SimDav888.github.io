"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[3491],{3491:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var c=a(6252),i=a(3577);const s={hidden:""},n={class:"row container"},r={hidden:""},l={class:"card-body text-success"},o={key:0,class:"card-title"},d={key:1,class:"card-text content"};function u(e,t,a,u,p,h){return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("h2",s,(0,i.zw)(u.state.circle=e.$route.params.id),1),(0,c._)("div",n,[(0,c._)("span",r,(0,i.zw)(u.state.circleid),1),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(u.state.lists,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:"card border-success mb-3",style:{"max-width":"18rem"},key:t},[(0,c._)("div",{class:"card-header",ref_for:!0,ref:"nickname1"},(0,i.zw)(e.nickname),513),(0,c._)("div",l,[1==e.emailPublic?((0,c.wg)(),(0,c.iD)("h5",o)):(0,c.kq)("",!0),1==e.studytopicPublic?((0,c.wg)(),(0,c.iD)("p",d)):(0,c.kq)("",!0)])])))),128))])],64)}var p=a(2201),h=a(2262),k=a(9669),m=a.n(k),g={props:["circleid"],setup(e){(0,c.bv)((()=>{n()}));(0,p.tv)(),(0,h.Vh)(e,"circleid");let t=(0,h.iH)(null);const a=(0,h.qj)({lists:"",circle:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),i=(0,h.qj)({name:"",uid:""}),s=(e,t)=>{i.name=e,i.uid=t},n=async()=>{const e="http://43.201.60.125/api/circleusers",t={"Content-Type":"application/json",Authorization:a.token,token:a.token},c={circle:a.circle};console.log("body.circle :"+c.circle),await m().post(e,c,{headers:t}).then((function(e){null!=e.data?a.lists=e.data:alert("bad.")}))};return{state:a,getData:n,modal:i,sendInfo:s,nickname1:t}}},w=a(3744);const f=(0,w.Z)(g,[["render",u],["__scopeId","data-v-3a7512fa"]]);var v=f}}]);
//# sourceMappingURL=3491.2ef9cac3.js.map