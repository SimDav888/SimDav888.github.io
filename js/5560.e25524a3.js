"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[5560],{5560:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ve}});var n=l(6252),a=l(9963),i=l(3577);const o=e=>((0,n.dD)("data-v-0348ab42"),e=e(),(0,n.Cn)(),e),s={id:"searchForm",onsubmit:"return false"},d={class:"input-group"},c=o((()=>(0,n._)("input",{type:"hidden",name:"page",value:"1"},null,-1))),u={class:"input-group-prepend"},r=o((()=>(0,n._)("option",{value:"title"},"제목",-1))),m=o((()=>(0,n._)("option",{value:"content"},"내용",-1))),p=o((()=>(0,n._)("option",{value:"writer"},"작성자",-1))),b=[r,m,p],_={class:"input-group-append",id:"button-addon4"},y=o((()=>(0,n._)("br",null,null,-1))),h={key:0},g=o((()=>(0,n._)("div",{class:"alert alert-success",role:"alert"}," 등록한 질문이 없습니다. ",-1))),k=[g],w={class:"accordion",id:"accordionPanelsStayExample"},f={hidden:""},v=o((()=>(0,n._)("div",null,null,-1))),q=["id"],C=["data-bs-target","aria-controls"],x={class:"titlecontent"},T=["id","aria-labelledby"],z={hidden:""},D={hidden:""},U={class:"buttongoup"},V=o((()=>(0,n._)("span",null," 질문 수정 ",-1))),S=o((()=>(0,n._)("span",null," 삭제 ",-1))),M={class:"accordion-body"},P={hidden:""},Q=o((()=>(0,n._)("b",null,"작성자 :: ",-1))),W=o((()=>(0,n._)("b",null,"질문 내용 :: ",-1))),I=o((()=>(0,n._)("b",null,"수정 일자 :: ",-1))),O={class:"answerList"},j={class:"modal fade",id:"staticBackdrop1","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},B={class:"modal-dialog"},H={class:"modal-content"},A=o((()=>(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Question Modify"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),K={class:"modal-body container"},Y={class:"item modalswitch"},N=o((()=>(0,n._)("label",{for:"nickname"}," 공개여부 :: ",-1))),E=o((()=>(0,n._)("br",null,null,-1))),R={class:"item"},L=o((()=>(0,n._)("label",{for:"nickname"}," Nickname :: ",-1))),Z=o((()=>(0,n._)("br",null,null,-1))),F={class:"item"},J=o((()=>(0,n._)("label",{for:"title"}," Title :: ",-1))),$=o((()=>(0,n._)("br",null,null,-1))),G={class:"item"},X=o((()=>(0,n._)("label",{for:"content"}," Content :: ",-1))),ee=o((()=>(0,n._)("br",null,null,-1))),te={class:"modal-footer"},le=o((()=>(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1))),ne=o((()=>(0,n._)("h3",null,"Register Question",-1))),ae={class:"item modalswitch"},ie=o((()=>(0,n._)("label",{for:""}," 공개여부 :: ",-1))),oe=o((()=>(0,n._)("br",null,null,-1))),se={class:"item"},de=o((()=>(0,n._)("label",{for:""}," Nickname :: ",-1))),ce=o((()=>(0,n._)("br",null,null,-1))),ue={class:"item"},re=o((()=>(0,n._)("label",{for:"title"}," Title :: ",-1))),me=o((()=>(0,n._)("br",null,null,-1))),pe={class:"item"},be=o((()=>(0,n._)("label",{for:"content"}," Content :: ",-1))),_e=o((()=>(0,n._)("br",null,null,-1)));function ye(e,t,l,o,r,m){const p=(0,n.up)("el-button"),g=(0,n.up)("el-button-group"),ye=(0,n.up)("Answer"),he=(0,n.up)("el-switch"),ge=(0,n.up)("modal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("form",s,[(0,n._)("div",d,[c,(0,n._)("div",u,[(0,n.wy)((0,n._)("select",{class:"form-select form-select-md","aria-label":".form-select-lg example","onUpdate:modelValue":t[0]||(t[0]=e=>o.myoption=e)},b,512),[[a.bM,o.myoption]])]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.string2search=e),class:"form-control",onKeyup:t[2]||(t[2]=(0,a.D2)((e=>o.launchSearch()),["enter"]))},null,544),[[a.nr,o.string2search]]),(0,n._)("div",_,[(0,n._)("button",{class:"btn btn-outline-secondary searchBtn",type:"button",onClick:t[3]||(t[3]=e=>o.launchSearch())},"검색"),(0,n._)("button",{class:"btn btn-outline-secondary searchBtn",type:"button",onClick:t[4]||(t[4]=e=>o.questionlistbyemail())},"취소")])])]),y,0==o.state.lists.length?((0,n.wg)(),(0,n.iD)("div",h,k)):(0,n.kq)("",!0),(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.state.lists,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"accordion-item question",key:t},[(0,n._)("div",f," CircleId that I Joined :: "+(0,i.zw)(e.circleid),1),v,(0,n._)("h2",{class:"accordion-header",id:"panelsStayOpen-heading"+t},[(0,n._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapse"+t,"aria-expanded":"true","aria-controls":"panelsStayOpen-collapse"+t},[(0,n._)("div",x,(0,i.zw)(t+1)+" "+(0,i.zw)(e.title),1)],8,C)],8,q),(0,n._)("div",{id:"panelsStayOpen-collapse"+t,class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-heading"+t},[(0,n._)("h1",z,(0,i.zw)(o.state.nickname=e.nickname),1),(0,n._)("h1",D,(0,i.zw)(o.state.circleid=e.circleid),1),(0,n._)("div",U,[(0,n.Wm)(g,{class:"ml-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"titlebtn","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop1",onClick:t=>o.sendId(e.questionid,e.nickname,e.title,e.content)},{default:(0,n.w5)((()=>[V])),_:2},1032,["onClick"]),(0,n.Wm)(p,{class:"titlebtn",onClick:o.deleteModal},{default:(0,n.w5)((()=>[S])),_:1},8,["onClick"])])),_:2},1024)]),(0,n._)("div",M,[(0,n._)("p",P,(0,i.zw)(o.state.qid=e.questionid),1),(0,n._)("p",null,[Q,(0,n.Uk)(" "+(0,i.zw)(e.nickname),1)]),(0,n._)("p",null,[W,(0,n.Uk)((0,i.zw)(e.content),1)]),(0,n._)("p",null,[I,(0,n.Uk)((0,i.zw)(o.formatDate(e.modDate)),1)])]),(0,n._)("div",O,[(0,n.Wm)(ye,{questionid:e.questionid,qnickname:e.nickname,quid:e.uid},null,8,["questionid","qnickname","quid"])])],8,T)])))),128))]),(0,n._)("div",j,[(0,n._)("div",B,[(0,n._)("div",H,[A,(0,n._)("div",K,[(0,n._)("div",Y,[N,E,(0,n.Wm)(he,{modelValue:o.questionPublic,"onUpdate:modelValue":t[5]||(t[5]=e=>o.questionPublic=e),size:"large","active-text":"Public"},null,8,["modelValue"])]),(0,n._)("div",R,[L,Z,(0,n.wy)((0,n._)("input",{type:"text",id:"nickname","onUpdate:modelValue":t[6]||(t[6]=e=>o.modal.nickname=e),disabled:""},null,512),[[a.nr,o.modal.nickname]])]),(0,n._)("div",F,[J,$,(0,n.wy)((0,n._)("input",{type:"text",id:"title","onUpdate:modelValue":t[7]||(t[7]=e=>o.modal.title=e),style:{width:"400px"}},null,512),[[a.nr,o.modal.title]])]),(0,n._)("div",G,[X,ee,(0,n.wy)((0,n._)("textarea",{type:"text",id:"content","onUpdate:modelValue":t[8]||(t[8]=e=>o.modal.content=e)},null,512),[[a.nr,o.modal.content]])])]),(0,n._)("div",te,[le,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[9]||(t[9]=e=>o.modifyQuestion()),"data-bs-dismiss":"modal"},"Modify")])])])]),((0,n.wg)(),(0,n.j4)(n.lR,{to:"body"},[(0,n.Wm)(ge,{show:o.state.showModal,onClose:t[17]||(t[17]=e=>o.state.showModal=!1)},{header:(0,n.w5)((()=>[ne])),body:(0,n.w5)((()=>[(0,n._)("div",ae,[ie,oe,(0,n.Wm)(he,{size:"large","active-text":"Public",modelValue:o.questionPublic,"onUpdate:modelValue":t[10]||(t[10]=e=>o.questionPublic=e)},null,8,["modelValue"])]),(0,n._)("div",se,[de,ce,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>o.state.nickname=e),disabled:""},null,512),[[a.nr,o.state.nickname]]),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=e=>o.state.circleid=e),disabled:""},null,512),[[a.nr,o.state.circleid]])]),(0,n._)("div",ue,[re,me,(0,n.wy)((0,n._)("input",{type:"text",id:"title","onUpdate:modelValue":t[13]||(t[13]=e=>o.regist.registTitle=e),style:{width:"400px"}},null,512),[[a.nr,o.regist.registTitle]])]),(0,n._)("div",pe,[be,_e,(0,n.wy)((0,n._)("textarea",{type:"text",id:"content","onUpdate:modelValue":t[14]||(t[14]=e=>o.regist.registContent=e)},null,512),[[a.nr,o.regist.registContent]])])])),footer:(0,n.w5)((()=>[(0,n.Wm)(p,{type:"secondary",plain:"",onClick:t[15]||(t[15]=e=>o.state.showModal=!1)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Close ")])),_:1}),(0,n.Wm)(p,{type:"primary",plain:"",onClick:t[16]||(t[16]=t=>e.questionRegister())},{default:(0,n.w5)((()=>[(0,n.Uk)("Register")])),_:1})])),_:1},8,["show"])]))],64)}var he=l(9737),ge=l(1348),ke=l(2262),we=l(2201),fe=l(696),ve=l(9669),qe=l.n(ve),Ce=l(7484),xe=l.n(Ce),Te=l(5158),ze={name:"TheQuestion",components:{Answer:Te.Z,Modal:fe.Z},setup(){const e=(0,ke.iH)("title"),t=(0,ke.iH)(""),l=async()=>{const l="http://43.201.60.125/api/searchquestionbyemail",n={"Content-Type":"application/json",Authorization:sessionStorage.getItem("TOKEN"),token:sessionStorage.getItem("TOKEN")};console.log("vlaue :"+e.value),console.log("vlaue :"+t.value);const a={email:i.email,myoption:e.value,string2search:t.value};await qe().post(l,a,{headers:n}).then((function(e){console.log("the res :"+e),i.lists=e.data})).catch((e=>{console.log("the error :"+e)}))};(0,n.bv)((()=>{u()}));const a=(0,ke.iH)(!0),i=((0,we.tv)(),(0,ke.qj)({qid:"",uid:"",circleid:"",nickname:"",questionPublic:"",lists:"",modiDate:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")})),o=e=>{const t=xe()(e);return t.format("YYYY-MM-D HH:mm")},s=(0,ke.qj)({questionid:"",nickname:"",title:"",content:""}),d=(e,t,l,n)=>{s.questionid=e,s.nickname=t,s.title=l,s.content=n},c=()=>{he.T.confirm("Do you really want to delete your Question?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{(0,ge.z8)({type:"success",message:"Delete completed"}),r()})).catch((()=>{(0,ge.z8)({type:"info",message:"Delete canceled"})}))},u=async()=>{const e="http://43.201.60.125/api/questionlistbyemail",t={"Content-Type":"application/json",Authorization:i.token,token:i.token,name:"test list"},l={email:i.email};await qe().post(e,l,{headers:t}).then((function(e){200==e.status?i.lists=e.data:alert("bad.")}))},r=async()=>{const e="http://43.201.60.125/api/deleteQuestion",t={"Content-Type":"application/json",Authorization:i.token,token:i.token},l={questionid:i.qid};console.log("delete Question... launch"+i.qid),await qe().post(e,l,{headers:t}).then((function(e){console.log("delete user after axios"),200===e.status&&(console.log(`question${i.qid} is deleted`),setTimeout(u(),1e3))}))},m=async()=>{if(""===i.title)return alert("Please input title"),title.value.focus(),!1;if(""===i.content)return alert("Please input content"),content.value.focus(),!1;console.log("modify Question launch");const e="http://43.201.60.125/api/questionModify",t={"Content-Type":"application/json",Authorization:i.token,token:i.token},l={questionid:s.questionid,nickname:s.nickname,title:s.title,content:s.content,questionPublic:a.value,modDate:i.modDate},n=await qe().post(e,l,{headers:t});200===n.status?(alert("modify successfully"),setTimeout(u(),1e3)):alert("fail")},p=(0,ke.qj)({registContent:"",registTitle:""});return{myoption:e,string2search:t,launchSearch:l,questionPublic:a,sendId:d,modal:s,formatDate:o,deleteModal:c,modifyQuestion:m,state:i,questionlistbyemail:u,deleteQuestion:r,regist:p}}},De=l(3744);const Ue=(0,De.Z)(ze,[["render",ye],["__scopeId","data-v-0348ab42"]]);var Ve=Ue}}]);
//# sourceMappingURL=5560.e25524a3.js.map