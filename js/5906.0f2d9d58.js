"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[5906],{5906:function(t,a,e){e.r(a),e.d(a,{default:function(){return D}});var o=e(6252),l=e(3577);const s=t=>((0,o.dD)("data-v-75a248aa"),t=t(),(0,o.Cn)(),t),n={hidden:""},d={class:"row"},c=s((()=>(0,o._)("div",{class:"col-lg-3 col-md-12"},null,-1))),i={class:"card col-lg-6 col-md-12"},r={class:"card-header"},u={class:"card-body"},m={class:"card-title"},p={class:"card-text"},g=s((()=>(0,o._)("div",{class:"col-lg-3 col-md-12"},null,-1))),h=s((()=>(0,o._)("h2",{style:{color:"red"}},"나의 목표 삭제",-1)));function _(t,a,e,s,_,w){const k=(0,o.up)("el-button"),v=(0,o.up)("modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h2",n,(0,l.zw)(s.state.goalid=t.$route.params.id),1),(0,o._)("div",d,[c,(0,o._)("div",i,[(0,o._)("div",r,(0,l.zw)(s.state.name),1),(0,o._)("div",u,[(0,o._)("h5",m,(0,l.zw)(s.state.dueDate)+"까지, "+(0,l.zw)(s.state.successQ)+(0,l.zw)(s.state.unit)+"목표",1),(0,o._)("p",p,(0,l.zw)(s.state.content),1),(0,o._)("a",{href:"#",class:"btn btn-success",onClick:a[0]||(a[0]=a=>t.$router.go(-1))},"뒤로가기"),(0,o._)("button",{class:"btn btn-dark",onClick:a[1]||(a[1]=t=>s.state.deleteModal=!0)},"목표 삭제")])]),g]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o.Wm)(v,{show:s.state.deleteModal,onClose:a[3]||(a[3]=t=>s.state.deleteModal=!1)},{header:(0,o.w5)((()=>[h])),body:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("h5",null,"정말 "+(0,l.zw)(s.state.name)+" 목표를 삭제하시겠습니까?",1)])])),footer:(0,o.w5)((()=>[(0,o.Wm)(k,{type:"primary",plain:"",onClick:a[2]||(a[2]=t=>s.state.deleteModal=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("취소")])),_:1}),(0,o.Wm)(k,{type:"primary",plain:"",onClick:s.deleteGoal},{default:(0,o.w5)((()=>[(0,o.Uk)("목표 삭제하기")])),_:1},8,["onClick"])])),_:1},8,["show"])]))],64)}e(7658);var w=e(2262),k=e(2201),v=e(696),f=e(9669),b=e.n(f),y={components:{Modal:v.Z},setup(){(0,o.bv)((()=>{e()}));const t=(0,k.tv)(),a=(0,w.qj)({goalid:"",name:"",content:"",successQ:"",dueDate:"",unit:"",deleteModal:!1,email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),e=async()=>{console.log("GoalRead launched");const t="http://43.201.60.125/api/goalread",e={"Content-Type":"application/json",Authorization:a.token,token:a.token},o={goalid:a.goalid};console.log("state.goalid:: "+o.goalid),await b().post(t,o,{headers:e}).then((function(t){200===t.status&&(console.log("res.data.result::"+t.data.dto),a.name=t.data.dto.name,a.content=t.data.dto.content,a.successQ=t.data.dto.successQ,a.dueDate=t.data.dto.dueDate,a.unit=t.data.dto.unit)}))},l=async()=>{console.log("delete goal launched");const e="http://43.201.60.125/api/goalDelete",o={"Content-Type":"application/json",Authorization:a.token,token:a.token},l={goalid:a.goalid};await b().post(e,l,{headers:o}).then((function(e){200===e.status&&(console.log("res.data.::"+e.data),alert(a.name+"목표가 삭제 되었습니다."),a.deleteModal=!1,t.push({name:"privateProfile"}))}))};return{getGoal:e,state:a,deleteGoal:l}}},C=e(3744);const z=(0,C.Z)(y,[["render",_],["__scopeId","data-v-75a248aa"]]);var D=z},696:function(t,a,e){e.d(a,{Z:function(){return h}});var o=e(6252),l=e(9963);const s={key:0,class:"modal-mask"},n={class:"modal-wrapper"},d={class:"modal-container"},c={class:"modal-header"},i={class:"modal-body"},r={class:"modal-footer"};function u(t,a,e,u,m,p){return(0,o.wg)(),(0,o.j4)(l.uT,{name:"modal"},{default:(0,o.w5)((()=>[e.show?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",n,[(0,o._)("div",d,[(0,o._)("div",c,[(0,o.WI)(t.$slots,"header",{},(()=>[(0,o.Uk)("default header")]))]),(0,o._)("div",i,[(0,o.WI)(t.$slots,"body",{},(()=>[(0,o.Uk)("default body")]))]),(0,o._)("div",r,[(0,o.WI)(t.$slots,"footer",{},(()=>[(0,o.Uk)(" default footer "),(0,o._)("button",{class:"modal-default-button",onClick:a[0]||(a[0]=a=>t.$emit("close"))}," OK ")]))])])])])):(0,o.kq)("",!0)])),_:3})}var m={name:"CommonModal",props:{show:Boolean}},p=e(3744);const g=(0,p.Z)(m,[["render",u]]);var h=g}}]);
//# sourceMappingURL=5906.0f2d9d58.js.map