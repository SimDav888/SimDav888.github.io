"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[165],{8214:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var s=l(6252),o=l(3577);const a={hidden:""},n={class:"row container"},i={hidden:""},c={class:"card-body text-success"},r={key:0,class:"card-title"},u={key:1,class:"card-text content"};function d(e,t,l,d,p,m){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h2",a,(0,o.zw)(d.state.circle=e.$route.params.id),1),(0,s._)("div",n,[(0,s._)("span",i,(0,o.zw)(d.state.circleid),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.state.lists,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"card border-success mb-3",style:{"max-width":"18rem"},key:t},[(0,s._)("div",{class:"card-header",ref_for:!0,ref:"nickname1"},(0,o.zw)(e.nickname),513),(0,s._)("div",c,[1==e.emailPublic?((0,s.wg)(),(0,s.iD)("h5",r)):(0,s.kq)("",!0),1==e.studytopicPublic?((0,s.wg)(),(0,s.iD)("p",u)):(0,s.kq)("",!0)])])))),128))])],64)}var p=l(2201),m=l(2262),f=l(9669),b=l.n(f),g={props:["circleid"],setup(e){(0,s.bv)((()=>{n()}));(0,p.tv)(),(0,m.Vh)(e,"circleid");let t=(0,m.iH)(null);const l=(0,m.qj)({lists:"",circle:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),o=(0,m.qj)({name:"",uid:""}),a=(e,t)=>{o.name=e,o.uid=t},n=async()=>{const e="http://localhost:9090/api/circleusers",t={"Content-Type":"application/json",Authorization:l.token,token:l.token},s={circle:l.circle};await b().post(e,s,{headers:t}).then((function(e){null!=e.data?l.lists=e.data:alert("bad.")}))};return{state:l,getData:n,modal:o,sendInfo:a,nickname1:t}}},y=l(3744);const h=(0,y.Z)(g,[["render",d],["__scopeId","data-v-d4a149b2"]]);var w=h},6854:function(e,t,l){l.r(t),l.d(t,{default:function(){return le}});var s=l(6252),o=l(3577),a=l(9963),n=l.p+"img/usericon.3771c34e.svg",i=l.p+"img/QnA.4b34b951.png",c=l(7216);const r=e=>((0,s.dD)("data-v-715b05c1"),e=e(),(0,s.Cn)(),e),u={hidden:""},d={class:"tutoCircleRead tutoBox",ref:"tutoCircleRead"},p=r((()=>(0,s._)("h4",null,"여기에 그룹에 대한 상세 설명이 있어요!",-1))),m={class:"circleInfo circleInfoIfNotFounder container",ref:"circleInfo2",action:""},f={class:"row"},b={class:"mb-3 col"},g=r((()=>(0,s._)("label",{for:"inputName",class:"form-label"},"그룹 이름",-1))),y={class:"mb-3 col"},h=r((()=>(0,s._)("label",{for:"inputNumber",class:"form-label"},[(0,s._)("img",{alt:"Vue logo",src:n}),(0,s.Uk)(" 최대 인원")],-1))),w={class:"mb-3 col"},_=r((()=>(0,s._)("label",{for:"inputPassword",class:"form-label"},"비밀번호",-1))),v={class:"form-floating mb-3"},k=r((()=>(0,s._)("label",{for:"floatingTextarea2"},"그룹 상세 내용",-1))),x={class:"item buttons",ref:"buttons",style:{"text-align":"right"}},N={class:"tutoNewsFeed tutoBox",ref:"tutoNewsFeed",style:{display:"none"}},S={ref:"newsFeedDesc"},C={class:"tutoNewsFeed tutoBox",ref:"tutoFAQ",style:{display:"none"}},H={ref:"faqDesc"},U={class:"row"},D={ref:"newsFeed",class:"col"},F={ref:"fAQ",class:"col"},I=r((()=>(0,s._)("img",{src:i,alt:"team"},null,-1))),L=[I],M={class:"tutoNewsFeed tutoBox",ref:"tutoUserList",style:{display:"none"}},A=r((()=>(0,s._)("h4",null,"이 그룹의 회원들이에요. 한 명의 회원을 클릭해 그의 여정을 따라가 보세요.",-1))),T=[A],q={ref:"circleUserList"},B=r((()=>(0,s._)("h2",null,"회원목록",-1))),P={class:"image-container"},R=["onClick"],j=["src","onClick"],V=r((()=>(0,s._)("h2",null,"나가기",-1))),z=r((()=>(0,s._)("div",null,[(0,s._)("h5",null,"가입 후 사용 가능한 기능입니다")],-1))),O=r((()=>(0,s._)("a",{id:"here"},"you are here",-1)));function Q(e,t,l,n,i,r){const I=(0,s.up)("NewsFeed"),A=(0,s.up)("el-tooltip"),Q=(0,s.up)("RouterLink"),$=(0,s.up)("el-button"),J=(0,s.up)("modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h2",u,(0,o.zw)(n.state.circleid=6),1),(0,s._)("section",d,[p,(0,s._)("button",{class:"btn btn-success tutoBtn",style:{background:"rgba(6, 90, 92, 0.5)"},onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>n.goStep1of4&&n.goStep1of4(...e)),["prevent"]))},"네 그렇군요 ")],512),(0,s._)("form",m,[(0,s._)("div",f,[(0,s._)("div",b,[g,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputName",ref:"circlename","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.name=e),disabled:""},null,512),[[a.nr,n.state.name]])]),(0,s._)("div",y,[h,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"inputNumber",ref:"maxNumber","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.maxNum=e),disabled:""},null,512),[[a.nr,n.state.maxNum]])])]),(0,s._)("div",w,[_,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.pass=e),disabled:""},null,512),[[a.nr,n.state.pass]])])]),(0,s._)("div",v,[(0,s.wy)((0,s._)("textarea",{class:"form-control",id:"floatingTextarea2","onUpdate:modelValue":t[4]||(t[4]=e=>n.state.content=e),disabled:"",style:{height:"80px"}},null,512),[[a.nr,n.state.content]]),k]),(0,s._)("div",x,[(0,s._)("button",{class:"btn btn-dark",onClick:t[5]||(t[5]=(0,a.iM)((e=>n.state.showModal=!0),["prevent"]))},"나가기")],512)],512),(0,s._)("section",N,[(0,s._)("h4",S,"와! 많은 회원들이 목표를 향해 전진하고 있어요",512),(0,s._)("button",{class:"btn btn-success tutoBtn",id:"goStep2of4",style:{background:"rgba(6, 90, 92, 0.5)"},onClick:t[6]||(t[6]=(0,a.iM)(((...e)=>n.goStep2of4&&n.goStep2of4(...e)),["prevent"]))},"네!")],512),(0,s._)("section",C,[(0,s._)("h4",H,"이 곳에 질문과 답변을 자유롭게 올릴 수 있어요.",512),(0,s._)("button",{class:"btn btn-success tutoBtn",id:"goStep3of4",onClick:t[7]||(t[7]=(0,a.iM)(((...e)=>n.goStep3of4&&n.goStep3of4(...e)),["prevent"]))},"멋지네요!")],512),(0,s._)("div",U,[(0,s._)("div",D,[(0,s.Wm)(I,{circleid:8})],512),(0,s._)("div",F,L,512),(0,s._)("section",M,T,512)]),(0,s.Wm)(Q,{to:"/tutoprivate",id:"goStep4of4"},{default:(0,s.w5)((()=>[(0,s._)("div",q,[B,(0,s._)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.state.img,((e,t)=>((0,s.wg)(),(0,s.j4)(A,{key:t,effect:"dark",content:n.state.lists[t].nickname,placement:"top"},{default:(0,s.w5)((()=>[null==n.state.lists[t].path?((0,s.wg)(),(0,s.iD)("img",{key:0,src:c,onClick:e=>n.showUserList(t)},null,8,R)):((0,s.wg)(),(0,s.iD)("img",{key:1,src:n.state.img[t],alt:"프로필사진",onClick:e=>n.showUserList(t)},null,8,j))])),_:2},1032,["content"])))),128))])],512)])),_:1}),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(J,{show:n.state.showModal,onClose:t[9]||(t[9]=e=>n.state.showModal=!1)},{header:(0,s.w5)((()=>[V])),body:(0,s.w5)((()=>[z])),footer:(0,s.w5)((()=>[(0,s.Wm)($,{type:"primary",plain:"",onClick:t[8]||(t[8]=e=>n.state.showModal=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("확인")])),_:1})])),_:1},8,["show"])])),O],64)}l(7658);var $=l(2262),J=l(9669),K=l.n(J),W=l(2201),Y=l(696),Z=l(9042),E=l(926),G=l(8214),X={components:{Modal:Y.Z,NewsFeed:Z["default"],QuestionByCircle:E.Z,CircleUserListForPublic:G["default"]},setup(){(0,s.bv)((()=>{x()}));const e=(0,W.tv)(),t=(0,$.qj)({roleSet:"",name:"",content:"",maxNum:"",pass:"",circleid:"8",img:new Array,lists:"",isAmember:!0,email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN"),showModal:!1}),l=(0,$.iH)(null),o=(0,$.iH)(null);let a=(0,$.iH)(null),n=(0,$.iH)(null),i=(0,$.iH)(null),c=(0,$.iH)(null),r=(0,$.iH)(null),u=(0,$.iH)(null),d=(0,$.iH)(null),p=(0,$.iH)(null),m=(0,$.iH)(null),f=(0,$.iH)(null),b=(0,$.iH)(null),g=(0,$.iH)(null),y=(0,$.iH)(null);const h=e=>{console.log(`#${e}`);let t=document.querySelector(`#${e}`);console.log(t),t.scrollIntoView({behavior:"smooth"})},w=()=>{r.value.style.border="0px solid #b6f67c",c.value.style.display="none",p.value.style.border="30px solid #065a5c",u.value.style.display="",m.value.style.display="none"},_=()=>{p.value.style.border="0px solid #b6f67c",u.value.style.display="none",b.value.style.border="30px solid #065a5c",f.value.style.display="",m.value.style.display=""},v=()=>{b.value.style.border="0px solid #b6f67c",f.value.style.display="none",d.value.style.display="none",y.value.style.border="30px solid #065a5c",g.value.style.display="",m.value.style.display="",h("goStep4of4")},k=()=>{},x=async()=>{console.log("myreadCircle launch");const e="http://localhost:9090/api/circleread",l={"Content-Type":"application/json",Authorization:t.token,token:t.token},s={circleid:"8",email:"hyelan@ds.org"};await K().post(e,s,{headers:l}).then((function(e){200===e.status?(t.name=e.data.dto.name,t.content=e.data.dto.content,t.maxNum=e.data.dto.maxNum,t.pass=e.data.dto.pass,t.roleSet=e.data.dto.roleSet,t.lists=e.data.img,N(t.lists)):alert("fail")}))},N=async e=>{const l="http://localhost:9090/display";let s="";console.info("Thumbnail"+e[0].thumbnailURL),console.info("Thumbnail"+e[1].thumbnailURL);for(let o=0;o<e.length;o++)s=`${l}?fileName=${e[o].thumbnailURL}`,t.img.push(s)},S=async l=>{JSON.stringify(t.uid)==JSON.stringify(t.lists[l].uid)?e.push({name:"privateProfile"}):JSON.stringify(t.uid)!=JSON.stringify(t.lists[l].uid)&&e.push({name:"publicProfile",params:{id:t.lists[l].uid}})};return{circlename:l,circleInfo2:r,newsFeed:p,scrollPageTo:h,tutoCircleRead:c,tutoNewsFeed:u,tutoFAQ:f,fAQ:b,tutoUserList:g,circleUserList:y,goStep1of4:w,goStep2of4:_,goStep3of4:v,goStep4of4:k,maxNotice:n,maxNumber:i,frm:o,notice:a,getCircle:x,state:t,newsFeedDesc:d,faqDesc:m,showUserList:S,showImage:N}}},ee=l(3744);const te=(0,ee.Z)(X,[["render",Q],["__scopeId","data-v-715b05c1"]]);var le=te}}]);
//# sourceMappingURL=165.acdd02ec.js.map