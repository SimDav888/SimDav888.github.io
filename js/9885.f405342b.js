"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[9885],{9885:function(t,e,a){a.r(e),a.d(e,{default:function(){return Pt}});var n=a(6252),o=a(3577),s=a(9963);const l=t=>((0,n.dD)("data-v-7520c7d7"),t=t(),(0,n.Cn)(),t),i={class:"container-lg"},d={class:"accordion",id:"accordionPanelsStayExample"},c={class:"accordion-item question"},r=["id"],u=["data-bs-target","aria-controls"],m=["id","aria-labelledby"],p={class:"accordion-body"},b={class:"question-body"},_=l((()=>(0,n._)("b",null," 작성자 :: ",-1))),k=l((()=>(0,n._)("b",null,"질문 제목 :: ",-1))),w=l((()=>(0,n._)("b",null,"질문 내용 :: ",-1))),y=l((()=>(0,n._)("b",null,"수정 일자 :: ",-1))),h={class:"accordion",id:"accordionPanelsStayOpenExample"},f={class:"accordion-item"},v={class:"accordion-header",id:"panelsStayOpen-heading"},g={hidden:""},q={class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapse","aria-expanded":"true","aria-controls":"panelsStayOpen-collapse"},C={class:"titlecontent"},D={id:"panelsStayOpen-collapse",class:"accordion-collapse","aria-labelledby":"panelsStayOpen-heading"},z={class:"buttongoup"},U=l((()=>(0,n._)("span",null," 답변 수정 ",-1))),T=l((()=>(0,n._)("span",null," 삭제 ",-1))),M={class:"accordion-body"},O={class:"counter"},j={class:"buttons"},x={class:"container"},A={class:"content"},S=l((()=>(0,n._)("b",null," 답변 작성자 :: ",-1))),I=l((()=>(0,n._)("b",null," 답변 내용 :: ",-1))),P=l((()=>(0,n._)("b",null," 수정 일자 :: ",-1))),W={class:"commentList"},V={class:"modal fade",id:"staticBackdrop2","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},Y={class:"modal-dialog"},B={class:"modal-content"},H=l((()=>(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Answer Modify"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),R={class:"modal-body modalcontainer"},K={class:"item modalswitch"},E=l((()=>(0,n._)("label",{for:"nickname"}," 공개여부 :: ",-1))),Z=l((()=>(0,n._)("br",null,null,-1))),$={class:"item"},L=l((()=>(0,n._)("label",{for:"nickname"}," Nickname :: ",-1))),N=l((()=>(0,n._)("br",null,null,-1))),Q={class:"item"},F=l((()=>(0,n._)("label",{for:"content"}," Content :: ",-1))),G=l((()=>(0,n._)("br",null,null,-1))),J={class:"modal-footer"},X=l((()=>(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)));function tt(t,e,a,l,tt,et){const at=(0,n.up)("el-button"),nt=(0,n.up)("el-button-group"),ot=(0,n.up)("PrivateCommmentread"),st=(0,n.up)("el-switch");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",d,[(0,n._)("div",c,[(0,n._)("h2",{class:"accordion-header",id:"panelsStayOpen-heading"+l.state.qid},[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>l.theQuestion&&l.theQuestion(...t)),class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapse"+l.state.qid,"aria-expanded":"true","aria-controls":"panelsStayOpen-collapse"+l.state.qid}," 질문 보기 ",8,u)],8,r),(0,n._)("div",{id:"panelsStayOpen-collapse"+l.state.qid,class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-heading"+l.state.qid},[(0,n._)("div",p,[(0,n._)("div",b,[(0,n._)("p",null,[_,(0,n.Uk)(" "+(0,o.zw)(l.state.qnickname),1)]),(0,n._)("p",null,[k,(0,n.Uk)(" "+(0,o.zw)(l.state.qtitle),1)]),(0,n._)("p",null,[w,(0,n.Uk)((0,o.zw)(l.state.qcontent),1)]),(0,n._)("p",null,[y,(0,n.Uk)(" "+(0,o.zw)(l.formatDate(l.state.qmodDate)),1)])])])],8,m)])]),(0,n._)("div",h,[(0,n._)("div",f,[(0,n._)("h2",v,[(0,n._)("h2",g,(0,o.zw)(l.state.aid=t.$route.params.id),1),(0,n._)("button",q,[(0,n._)("div",C," ┗   "+(0,o.zw)(l.state.content),1)])]),(0,n._)("div",D,[(0,n._)("div",z,[l.state.quid==l.state.auid?((0,n.wg)(),(0,n.j4)(nt,{key:0,class:"ml-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(at,{class:"titlebtn",type:"info",plain:"","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop2",onClick:e[1]||(e[1]=t=>l.sendId(l.state.answerid,l.state.nickname,l.state.content,l.state.rate))},{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(at,{class:"titlebtn",type:"info",plain:"",onClick:l.deleteModal},{default:(0,n.w5)((()=>[T])),_:1},8,["onClick"])])),_:1})):(0,n.kq)("",!0)]),(0,n._)("div",M,[(0,n._)("div",O,[(0,n._)("div",j,[(0,n._)("button",{onClickOnce:e[2]||(e[2]=t=>(l.state.rate>=0?l.state.rate+=1:l.state.rate+=0,l.sendId(l.state.aid,l.state.nickname,l.state.content,l.state.rate),l.modifyAnswer()))}," ˄ ",32),(0,n._)("button",{onClickOnce:e[3]||(e[3]=t=>(0!=l.state.rate?l.state.rate-=1:l.state.rate-=0,l.sendId(l.state.aid,l.state.nickname,l.state.content,l.state.rate),l.modifyAnswer()))}," ˅ ",32)]),(0,n._)("div",{class:"num",ref:"num"},(0,o.zw)(l.state.rate),513)]),(0,n._)("div",x,[(0,n._)("div",A,[(0,n._)("p",null,[S,(0,n.Uk)(" "+(0,o.zw)(l.state.nickname),1)]),(0,n._)("p",null,[I,(0,n.Uk)(" "+(0,o.zw)(l.state.content),1)]),(0,n._)("p",null,[P,(0,n.Uk)(" "+(0,o.zw)(l.formatDate(l.state.modDate)),1)])])])]),(0,n._)("div",W,[(0,n.Wm)(ot,{answerid:l.state.aid,quid:l.state.quid,qemail:l.state.email},null,8,["answerid","quid","qemail"])])])])]),(0,n._)("div",V,[(0,n._)("div",Y,[(0,n._)("div",B,[H,(0,n._)("div",R,[(0,n._)("div",K,[E,Z,(0,n.Wm)(st,{modelValue:l.answerPublic,"onUpdate:modelValue":e[4]||(e[4]=t=>l.answerPublic=t),size:"large","active-text":"Public"},null,8,["modelValue"])]),(0,n._)("div",$,[L,N,(0,n.wy)((0,n._)("input",{type:"text",id:"nickname","onUpdate:modelValue":e[5]||(e[5]=t=>l.modal.nickname=t),disabled:""},null,512),[[s.nr,l.modal.nickname]])]),(0,n._)("div",Q,[F,G,(0,n.wy)((0,n._)("textarea",{type:"text",id:"content","onUpdate:modelValue":e[6]||(e[6]=t=>l.modal.content=t)},null,512),[[s.nr,l.modal.content]])])]),(0,n._)("div",J,[X,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[7]||(e[7]=t=>l.modifyAnswer()),"data-bs-dismiss":"modal"},"Modify")])])])])])}var et=a(9737),at=a(1348),nt=a(2262),ot=a(2201),st=a(9669),lt=a.n(st),it=a(7484),dt=a.n(it);const ct=t=>((0,n.dD)("data-v-8c0a8ed0"),t=t(),(0,n.Cn)(),t),rt={class:"btnreg"},ut={hidden:""},mt={hidden:""},pt={class:"buttongoup"},bt={key:0,class:"card-body container"},_t={class:"item1"},kt=ct((()=>(0,n._)("b",null," 댓글 작성자 ",-1))),wt={class:"item2"},yt=ct((()=>(0,n._)("b",null,"댓글 내용 :: ",-1))),ht=ct((()=>(0,n._)("b",null,"수정 일자 :: ",-1))),ft={hidden:""},vt=ct((()=>(0,n._)("h3",null,"Register Comment",-1))),gt={class:"item"},qt=ct((()=>(0,n._)("label",{for:"nickname"}," Email :: ",-1))),Ct=ct((()=>(0,n._)("br",null,null,-1))),Dt={class:"item"},zt=ct((()=>(0,n._)("label",{for:"content"}," Content :: ",-1))),Ut=ct((()=>(0,n._)("br",null,null,-1)));function Tt(t,e,a,l,i,d){const c=(0,n.up)("el-button"),r=(0,n.up)("el-button-group"),u=(0,n.up)("modal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",rt,[(0,n.Wm)(c,{plain:"",onClick:e[0]||(e[0]=t=>l.state.showModal=!0)},{default:(0,n.w5)((()=>[(0,n.Uk)(" 댓글 등록하기 ")])),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.state.lists,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:e},[(0,n._)("div",ut,(0,o.zw)(l.state.cid=t.commentid),1),(0,n._)("div",mt,(0,o.zw)(l.state.content=t.content),1),(0,n._)("div",pt,[l.state.quid==t.uid?((0,n.wg)(),(0,n.j4)(r,{key:0,class:"ml-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{plain:"",onClick:l.deleteModal},{default:(0,n.w5)((()=>[(0,n.Uk)(" 삭제하기 ")])),_:1},8,["onClick"])])),_:1})):(0,n.kq)("",!0)]),null!=t.uid?((0,n.wg)(),(0,n.iD)("div",bt,[(0,n._)("div",_t,[kt,(0,n.Uk)(" "+(0,o.zw)(t.nickname),1)]),(0,n._)("div",wt,[(0,n._)("p",null,[yt,(0,n.Uk)(" "+(0,o.zw)(t.content),1)]),(0,n._)("p",null,[ht,(0,n.Uk)(" "+(0,o.zw)(l.formatDate(t.modDate)),1)]),(0,n._)("p",ft,(0,o.zw)(l.state.cid=t.commentid),1)])])):(0,n.kq)("",!0)])))),128)),((0,n.wg)(),(0,n.j4)(n.lR,{to:"body"},[(0,n.Wm)(u,{show:l.state.showModal,onClose:e[5]||(e[5]=t=>l.state.showModal=!1)},{header:(0,n.w5)((()=>[vt])),body:(0,n.w5)((()=>[(0,n._)("div",gt,[qt,Ct,(0,n.wy)((0,n._)("input",{type:"text",id:"nickname","onUpdate:modelValue":e[1]||(e[1]=t=>l.state.qemail=t),disabled:""},null,512),[[s.nr,l.state.qemail]])]),(0,n._)("div",Dt,[zt,Ut,(0,n.wy)((0,n._)("textarea",{type:"text",id:"content","onUpdate:modelValue":e[2]||(e[2]=t=>l.regist.registContent=t)},null,512),[[s.nr,l.regist.registContent]])])])),footer:(0,n.w5)((()=>[(0,n.Wm)(c,{type:"secondary",plain:"",onClick:e[3]||(e[3]=t=>l.state.showModal=!1)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Close ")])),_:1}),(0,n.Wm)(c,{type:"primary",plain:"",onClick:e[4]||(e[4]=t=>l.commentRegister())},{default:(0,n.w5)((()=>[(0,n.Uk)("Register")])),_:1})])),_:1},8,["show"])]))],64)}var Mt=a(696),Ot={name:"TheComment",props:["answerid","quid","qemail"],components:{Modal:Mt.Z},setup(t){(0,n.bv)((()=>{d()}));(0,ot.tv)();const e=(0,nt.Vh)(t,"answerid"),a=(0,nt.Vh)(t,"quid"),o=(0,nt.Vh)(t,"qemail"),s=(0,nt.qj)({aid:e,qnickname:"",quid:a,qemail:o,cid:"",nickname:"",content:"",lists:"",modDate:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN"),showModal:!1}),l=t=>{const e=dt()(t);return e.format("YYYY-MM-D HH:mm")},i=()=>{et.T.confirm("Do you really want to delete your comment?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{(0,at.z8)({type:"success",message:"Delete completed"}),c()})).catch((()=>{(0,at.z8)({type:"info",message:"Delete canceled"})}))},d=async()=>{const t="http://localhost:9090/api/commentbyanswer",e={"Content-Type":"application/json",Authorization:s.token,token:s.token,name:"test list"},a={answer:s.aid};await lt().post(t,a,{headers:e}).then((function(t){200==t.status?s.lists=t.data:alert("bad.")}))},c=async()=>{const t="http://localhost:9090/api/deleteComment",e={"Content-Type":"application/json",Authorization:s.token,token:s.token},a={commentid:s.cid};await lt().post(t,a,{headers:e}).then((function(t){200===t.status&&setTimeout(d(),1e3)}))},r=(0,nt.qj)({registContent:""}),u=async()=>{if(""===r.registContent)return alert("Please Input your content"),email.value.focus(),!1;const t="http://localhost:9090/api/privatecmregister",e={"Content-Type":"application/json",Authorization:s.token,token:s.token},a={answerid:s.aid,uid:s.quid,content:r.registContent},n=await lt().post(t,a,{headers:e});200===n.status?(alert("register successfully"),s.showModal=!1,setTimeout(d(),1e3)):alert("fail")};return{formatDate:l,deleteModal:i,state:s,commentRead:d,deleteComment:c,regist:r,commentRegister:u}}},jt=a(3744);const xt=(0,jt.Z)(Ot,[["render",Tt],["__scopeId","data-v-8c0a8ed0"]]);var At=xt,St={name:"TheAnswer",components:{PrivateCommmentread:At},setup(){(0,n.bv)((()=>{d(),c()}));const t=(0,ot.tv)(),e=(0,nt.iH)(!0),a=t=>{const e=dt()(t);return e.format("YYYY-MM-D HH:mm")},o=(0,nt.qj)({qid:"",qnickname:"",quid:"",qtitle:"",qcontent:"",aid:"",auid:"",rate:"",nickname:"",answerPublic:"",modDate:"",lists:"",countComment:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN"),showModal:!1}),s=(0,nt.qj)({answerid:"",nickname:"",content:"",rate:""}),l=(t,e,a,n)=>{s.answerid=t,s.nickname=e,s.content=a,s.rate=n},i=()=>{et.T.confirm("Do you really want to delete your answer?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{(0,at.z8)({type:"success",message:"Delete completed"}),u()})).catch((()=>{(0,at.z8)({type:"info",message:"Delete canceled"})}))},d=async()=>{const t="http://localhost:9090/api/answerread",e={"Content-Type":"application/json",Authorization:o.token,token:o.token,name:"test list"},a={answerid:o.aid};await lt().post(t,a,{headers:e}).then((function(t){200==t.status?(o.qid=t.data.dto.questionid,o.auid=t.data.dto.uid,o.nickname=t.data.dto.nickname,o.content=t.data.dto.content,o.rate=t.data.dto.rate,o.modDate=t.data.dto.modDate):alert("bad.")}))},c=async()=>{const t="http://localhost:9090/api/answerregiuid",e={"Content-Type":"application/json",Authorization:o.token,token:o.token,name:"test list"},a={email:o.email};await lt().post(t,a,{headers:e}).then((function(t){200==t.status?o.quid=t.data:alert("bad.")}))},r=async()=>{const t="http://localhost:9090/api/questionread",e={"Content-Type":"application/json",Authorization:o.token,token:o.token},a={questionid:o.qid};await lt().post(t,a,{headers:e}).then((function(t){200===t.status?(o.circleid=t.data.dto.circleid,o.qnickname=t.data.dto.nickname,o.qtitle=t.data.dto.title,o.qcontent=t.data.dto.content,o.questionPublic=t.data.dto.questionPublic,o.modDate=t.data.dto.modDate,o.quid=t.data.dto.uid):alert("bad.")}))},u=async()=>{const e="http://localhost:9090/api/deleteAnswer",a={"Content-Type":"application/json",Authorization:o.token,token:o.token},n={answerid:o.aid};await lt().post(e,n,{headers:a}).then((function(e){200===e.status&&t.go(0)}))},m=async()=>{if(""===s.content)return alert("Please input content"),s.content.value.focus(),!1;const t="http://localhost:9090/api/privateanswermodify",a={"Content-Type":"application/json",Authorization:o.token,token:o.token},n={answerid:o.aid,nickname:o.nickname,content:s.content,answerPublic:e.value,rate:s.rate},l=await lt().post(t,n,{headers:a});200===l.status?(alert("modify successfully"),setTimeout(d(),1e3)):alert("fail")};return{formatDate:a,answerPublic:e,deleteModal:i,state:o,answerRead:d,registerUid:c,theQuestion:r,deleteAnswer:u,modifyAnswer:m,modal:s,sendId:l}}};const It=(0,jt.Z)(St,[["render",tt],["__scopeId","data-v-7520c7d7"]]);var Pt=It},696:function(t,e,a){a.d(e,{Z:function(){return _}});var n=a(6252),o=a(9963);const s={key:0,class:"modal-mask"},l={class:"modal-wrapper"},i={class:"modal-container"},d={class:"modal-header"},c={class:"modal-body"},r={class:"modal-footer"};function u(t,e,a,u,m,p){return(0,n.wg)(),(0,n.j4)(o.uT,{name:"modal"},{default:(0,n.w5)((()=>[a.show?((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",l,[(0,n._)("div",i,[(0,n._)("div",d,[(0,n.WI)(t.$slots,"header",{},(()=>[(0,n.Uk)("default header")]))]),(0,n._)("div",c,[(0,n.WI)(t.$slots,"body",{},(()=>[(0,n.Uk)("default body")]))]),(0,n._)("div",r,[(0,n.WI)(t.$slots,"footer",{},(()=>[(0,n.Uk)(" default footer "),(0,n._)("button",{class:"modal-default-button",onClick:e[0]||(e[0]=e=>t.$emit("close"))}," OK ")]))])])])])):(0,n.kq)("",!0)])),_:3})}var m={name:"CommonModal",props:{show:Boolean}},p=a(3744);const b=(0,p.Z)(m,[["render",u]]);var _=b}}]);
//# sourceMappingURL=9885.f405342b.js.map