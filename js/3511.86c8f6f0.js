"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[3511,5927],{3511:function(l,e,t){t.r(e),t.d(e,{default:function(){return X}});var a=t(6252),o=t(9963),s=t(3043);const n=l=>((0,a.dD)("data-v-570f46d7"),l=l(),(0,a.Cn)(),l),c={class:"row"},i=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),r={class:"mb-3 col-lg-4 col-md-12 col-sm-12"},m=n((()=>(0,a._)("label",{for:"inputName",class:"form-label"},"그룹 이름",-1))),u={class:"form-text",ref:"notice"},d=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),g={class:"row"},f=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),p={class:"mb-3 col-lg-2 col-md-6 col-sm-12"},v=n((()=>(0,a._)("label",{for:"inputNumber",class:"form-label"},[(0,a._)("img",{alt:"Vue logo",src:s}),(0,a.Uk)("  최대 회원수")],-1))),b={class:"form-text",ref:"maxNotice"},w={class:"mb-3 col-lg-2 col-md-6 col-sm-12"},h=n((()=>(0,a._)("label",{for:"inputPassword",class:"form-label"},"비밀번호",-1))),k=n((()=>(0,a._)("div",{class:"form-text"},"옵션",-1))),C=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),U={class:"row"},y=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),H={class:"form-floating mb-3 col-lg-4 col-md-12 col-sm-12"},q=n((()=>(0,a._)("label",{for:"floatingTextarea2"},"그룹 설명",-1))),x=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),J={class:"row"},Q=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1))),A={class:"mb-3 col-lg-2 col-md-6 col-sm-12"},I=n((()=>(0,a._)("label",{for:"inputName",class:"form-label"},"나의 목표",-1))),Y={class:"item buttons mb-3 col-lg-2 col-md-6 col-sm-12"},j=n((()=>(0,a._)("div",{class:"col-lg-4 col-md-0 col-sm-0"},null,-1)));function L(l,e,t,s,n,L){const N=(0,a.up)("SelectGoalList");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[i,(0,a._)("div",r,[m,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"inputName",maxlength:"10",ref:"circlename","onUpdate:modelValue":e[0]||(e[0]=l=>s.state.name=l),autofocus:""},null,512),[[o.nr,s.state.name]]),(0,a._)("div",u,"필수 (*)",512)]),d]),(0,a._)("div",g,[f,(0,a._)("div",p,[v,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"inputNumber",ref:"maxNumber","onUpdate:modelValue":e[1]||(e[1]=l=>s.state.maxNumber=l),min:"1",max:"3000"},null,512),[[o.nr,s.state.maxNumber]])]),(0,a._)("div",b,"숫자만 가능",512)]),(0,a._)("div",w,[h,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"inputPassword","onUpdate:modelValue":e[2]||(e[2]=l=>s.state.pass=l)},null,512),[[o.nr,s.state.pass]]),k]),C]),(0,a._)("div",U,[y,(0,a._)("div",H,[(0,a.wy)((0,a._)("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2","onUpdate:modelValue":e[3]||(e[3]=l=>s.state.content=l),style:{height:"100px"}},null,512),[[o.nr,s.state.content]]),q]),x]),(0,a._)("div",J,[Q,(0,a._)("div",A,[I,(0,a.Uk)(),(0,a.Wm)(N,{onSetInput:s.goalid},null,8,["onSetInput"])]),(0,a._)("div",Y,[(0,a._)("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=(0,o.iM)(((...l)=>s.createCircleHandler&&s.createCircleHandler(...l)),["prevent"]))},"저장"),(0,a._)("button",{class:"btn btn-secondary",onClick:e[5]||(e[5]=(0,o.iM)(((...l)=>s.cancel&&s.cancel(...l)),["prevent"]))},"취소")]),j])],64)}t(7658);var N=t(2262),V=t(9669),S=t.n(V),z=t(2201),E=t(5927),G={setup(){const l=(0,z.tv)(),e=(0,N.qj)({goalid:"",name:"",content:"",maxNumber:"",pass:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),t=l=>{console.log(l),e.goalid=l},a=(0,N.iH)(null),o=(0,N.iH)(null);let s=(0,N.iH)(null),n=(0,N.iH)(null),c=(0,N.iH)(null);const i=async()=>{if(""===a.value.value)return s.value.innerHTML="그룹 이름을 입력해 주세요",s.value.style.color="red",a.value.focus(),!1;if(0==c.value.value&&null!=c.value.value)return n.value.innerHTML="최대 회원수를 확인해 주세요",n.value.style.color="red",!1;if(c.value.value<=-1)return n.value.innerHTML="최대 회원수를 확인해 주세요",n.value.style.color="red",!1;console.log("createCircle launch");const t="http://43.201.60.125/api/createCircle",o={"Content-Type":"application/json",Authorization:e.token,token:e.token},i={user:e.email,name:e.name,content:e.content,maxNum:e.maxNumber,pass:e.pass};console.log("goalid"+e.goalid),console.log("body"+i.user),console.log("name"+i.name),console.log("content"+i.content),console.log("maxNum"+i.maxNum),console.log("pass"+i.pass);await S().post(t,i,{headers:o}).then((e=>{console.log("the res :"+e.data),console.log("the res :"+e.data.cid),alert("그룹이 성공적으로 만들어 졌습니다");e.data.cid;//!\\------------------
l.push({name:"mycircleread",params:{id:e.data}})}
//!\\------------------
)).catch((l=>{console.log("the error :"+l)}))};function r(){o.value.reset(),a.value.focus()}return{circlename:a,maxNotice:n,maxNumber:c,frm:o,notice:s,cancel:r,createCircleHandler:i,state:e,goalid:t}},components:{SelectGoalList:E["default"]}},M=t(3744);const O=(0,M.Z)(G,[["render",L],["__scopeId","data-v-570f46d7"]]);var X=O},5927:function(l,e,t){t.r(e),t.d(e,{default:function(){return u}});var a=t(6252);function o(l,e,t,o,s,n){const c=(0,a.up)("el-option"),i=(0,a.up)("el-select");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{onChange:[o.onChange,n.onEmit],modelValue:o.state.lists.goalid,"onUpdate:modelValue":e[0]||(e[0]=l=>o.state.lists.goalid=l),clearable:"",placeholder:"내 목표리스트에서 선택",style:{width:"325px"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.state.lists,(l=>((0,a.wg)(),(0,a.j4)(c,{key:l,label:l.name,value:l.goalid},null,8,["label","value"])))),128))])),_:1},8,["onChange","modelValue"])])}var s=t(9669),n=t.n(s),c=t(2262),i={methods:{onEmit(){this.$emit("setInput",this.state.lists.goalid)}},setup(){const l=(0,c.qj)({uid:"",lists:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),e=(0,c.iH)(""),t="http://43.201.60.125/api/goalNameList",a={"Content-Type":"application/json",Authorization:l.token,token:l.token},o={email:l.email};n().post(t,o,{headers:a}).then((function(e){null!=e.data?(l.lists=e.data,console.log(l.lists[0]),console.log("state.lists[0].goalid"+l.lists[0].goalid),console.log("state.lists[0].goalName"+l.lists[0].name)):alert("too bad. check something")}));const s=()=>{console.log(l.lists.goalid)};return{state:l,uid:e,onChange:s}}},r=t(3744);const m=(0,r.Z)(i,[["render",o]]);var u=m},3043:function(l){l.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=3511.86c8f6f0.js.map