"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[8768],{8768:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var l=a(6252),s=a(3577);const i=e=>((0,l.dD)("data-v-466be87e"),e=e(),(0,l.Cn)(),e),o={hidden:""},n={class:"row container"},c=["onClick"],d={class:"card-body text-success"},r={key:0,class:"card-title"},u={key:1,class:"card-title"},m={key:2,class:"card-text content"},b={key:3,class:"card-text"},p={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},k={class:"modal-dialog"},h={class:"modal-content"},y=i((()=>(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"강제 탈퇴"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),w={class:"modal-body"},_={class:"modal-footer"},g=i((()=>(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function v(e,t,a,i,v,f){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("h2",o,(0,s.zw)(i.state.circle=e.$route.params.id),1),(0,l._)("div",n,[(0,l._)("span",null,(0,s.zw)(i.state.roleSet),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.state.lists,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"card border-success mb-3",style:{"max-width":"18rem"},key:t},[(0,l._)("div",{class:"card-header",ref_for:!0,ref:"nickname1"},[(0,l.Uk)((0,s.zw)(e.nickname)+" ",1),i.state.roleSet.includes("ROLE_FOUNDER")?((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",class:"btn-close","aria-label":"Close","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:t=>i.sendInfo(e.nickname,e.uid)},null,8,c)):(0,l.kq)("",!0)],512),(0,l._)("div",d,[1==e.emailPublic?((0,l.wg)(),(0,l.iD)("h5",r,(0,s.zw)(e.email),1)):((0,l.wg)(),(0,l.iD)("h5",u,"이메일: 비공개")),1==e.studytopicPublic?((0,l.wg)(),(0,l.iD)("p",m,(0,s.zw)(e.aboutme),1)):((0,l.wg)(),(0,l.iD)("p",b,"나의 관심: 비공개"))])])))),128))]),(0,l._)("div",p,[(0,l._)("div",k,[(0,l._)("div",h,[y,(0,l._)("div",w," Do you really want to kick "+(0,s.zw)(i.modal.name)+" out ? ",1),(0,l._)("div",_,[g,(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[0]||(t[0]=t=>i.kickOut(i.modal,e.uid))},"네, 탈퇴시킵니다")])])])])],64)}var f=a(2201),D=a(2262),C=a(9669),x=a.n(C),z={props:["circleid","roleSet"],setup(e){(0,l.bv)((()=>{n()}));(0,f.tv)(),(0,D.Vh)(e,"circleid");const t=(0,D.Vh)(e,"roleSet");let a=(0,D.iH)(null);const s=(0,D.qj)({lists:"",circle:"",roleSet:t,email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),i=(0,D.qj)({name:"",uid:""}),o=(e,t)=>{i.name=e,i.uid=t},n=async()=>{const e="http://localhost:9090/api/circleusers",t={"Content-Type":"application/json",Authorization:s.token,token:s.token},a={circle:s.circle};await x().post(e,a,{headers:t}).then((function(e){null!=e.data?s.lists=e.data:alert("bad.")}))},c=async()=>{const e="http://localhost:9090/api/kickOut",t={"Content-Type":"application/json",Authorization:s.token,token:s.token},a={circleid:s.circle,uid:i.uid};await x().post(e,a,{headers:t}).then((function(e){null!=e.data&&(alert("Dropped out "+i.name),setTimeout(n(),3e3))}))};return{state:s,getData:n,modal:i,sendInfo:o,kickOut:c,nickname1:a}}},S=a(3744);const O=(0,S.Z)(z,[["render",v],["__scopeId","data-v-466be87e"]]);var I=O}}]);
//# sourceMappingURL=8768.bdde6c03.js.map