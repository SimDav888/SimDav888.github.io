"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[2286,3491,7238],{8410:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var i=a(6252),s=a(3577),n=a(9963),l=a(3043),o=a(7216);const c=e=>((0,i.dD)("data-v-515d9f10"),e=e(),(0,i.Cn)(),e),d={hidden:""},r={class:"row"},m={class:"card col"},u={class:"card-header"},p=c((()=>(0,i._)("img",{class:"image-people",alt:"Vue logo",src:l},null,-1))),g={class:"card-body"},b=c((()=>(0,i._)("h5",{class:"card-title"},null,-1))),f={key:0,class:"card-text"},k={key:1,class:"card-text"},h={class:"btn btn-light"},w={key:2,hidden:""},y={key:3},C={class:"image-container col"},v=["onClick"],U=["src","onClick"],z={class:"row"},J={class:"col"},A={class:"col",style:{"overflow-y":"scroll",height:"600px"}},j={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},q={class:"modal-dialog"},x={class:"modal-content"},I={class:"modal-header"},Q={class:"modal-title",id:"exampleModalLabel",ref:"mTitle"},L=c((()=>(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))),Y={class:"modal-body"},S={class:"input-group input-group-sm mb-3"},N=c((()=>(0,i._)("span",{class:"input-group-text",id:"inputCircle-sizing-sm"},"비밀번호",-1))),O={class:"modal-footer"},M=c((()=>(0,i._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"취소",-1)));function D(e,t,a,l,c,D){const H=(0,i.up)("RouterLink"),P=(0,i.up)("el-tooltip"),R=(0,i.up)("NewsFeed"),V=(0,i.up)("QuestionByCircle");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h2",d,(0,s.zw)(l.state.circleid=e.$route.params.id),1),(0,i._)("div",r,[(0,i._)("div",m,[(0,i._)("h5",u,[(0,i.Uk)("그룹 이름: "+(0,s.zw)(l.state.name)+"    "+(0,s.zw)(l.state.memberCount)+"/"+(0,s.zw)(l.state.maxNum),1),p]),(0,i._)("div",g,[b,""==l.state.content?((0,i.wg)(),(0,i.iD)("p",f,"그룹 설명 없음")):((0,i.wg)(),(0,i.iD)("p",k,(0,s.zw)(l.state.content),1)),(0,i._)("button",h,[(0,i.Wm)(H,{to:"/network",style:{"text-decoration":"none"}},{default:(0,i.w5)((()=>[(0,i.Uk)("리스트로 가기")])),_:1})]),1==l.state.isAmember?((0,i.wg)(),(0,i.iD)("span",w)):((0,i.wg)(),(0,i.iD)("span",y,[""!=l.state.password?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-light","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:t[0]||(t[0]=e=>l.sendId(l.state.circleid,l.state.name,l.state.maxNum,l.state.memberCount))},"가입")):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn btn-light",onClick:t[1]||(t[1]=e=>(l.sendId(l.state.circleid,l.state.name,l.state.maxNum,l.state.memberCount),l.join()))},"가입"))]))])]),(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.state.img,((e,t)=>((0,i.wg)(),(0,i.j4)(P,{key:t,effect:"dark",content:l.state.lists[t].nickname,placement:"top"},{default:(0,i.w5)((()=>[null==l.state.lists[t].path?((0,i.wg)(),(0,i.iD)("img",{key:0,src:o,onClick:e=>l.showUserList(t)},null,8,v)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:l.state.img[t],alt:"프로필사진",onClick:e=>l.showUserList(t)},null,8,U))])),_:2},1032,["content"])))),128))])]),(0,i._)("div",z,[(0,i._)("div",J,[(0,i.Wm)(R,{circleid:l.state.circleid},null,8,["circleid"])]),(0,i._)("div",A,[(0,i.Wm)(V,{circleid:l.state.circleid,ismember:l.state.isAmember},null,8,["circleid","ismember"])])]),(0,i._)("div",j,[(0,i._)("div",q,[(0,i._)("div",x,[(0,i._)("div",I,[(0,i._)("h5",Q,[(0,i.Uk)("비밀번호 확인"),(0,i._)("div",null,(0,s.zw)(l.state.name)+" 그룹에 가입",1)],512),L]),(0,i._)("div",Y,[(0,i._)("div",S,[N,(0,i.wy)((0,i._)("input",{type:"pass","onUpdate:modelValue":t[2]||(t[2]=e=>l.state.pass=e),class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputCircle-sizing-sm",autofocus:""},null,512),[[n.nr,l.state.pass]])])]),(0,i._)("div",O,[M,(0,i._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[3]||(t[3]=e=>l.passCheck(l.state.circleid))},"확인")])])])])],64)}a(7658);var H=a(2262),P=a(9669),R=a.n(P),V=a(2201),E=a(8296),G=a(3491),Z=a(5),T={components:{NewsFeed:E["default"],QuestionByCircle:Z.Z,CircleUserListForPublic:G["default"]},setup(){(0,i.bv)((()=>{l(),s()}));const e=(0,V.tv)(),t=(0,H.qj)({name:"",content:"",maxNum:"",pass:"",password:"",circleid:"circleid",lists:"",img:new Array,isAmember:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),a=(0,H.qj)({id:"",name:"",maxNum:"",memberCount:""}),s=async()=>{console.log("readCircle launch");const e="http://43.201.60.125/api/isMember",a={"Content-Type":"application/json",Authorization:t.token,token:t.token},i={circleid:t.circleid,email:t.email};console.log(" from isMember circleid: email: "+i.circleid+i.email),await R().post(e,i,{headers:a}).then((function(e){console.log("isMember res :"+e.data),t.isAmember=e.data})).catch((e=>{console.log("err:"+e)}))},n=(e,t,i,s)=>{a.id=e,a.name=t,a.maxNum=i,a.memberCount=s},l=async()=>{console.log("readCircle launch");const e="http://43.201.60.125/api/circleread",a={"Content-Type":"application/json",Authorization:t.token,token:t.token},i={circleid:t.circleid,email:t.email};console.log("circleid: email: "+i.circleid+i.email),await R().post(e,i,{headers:a}).then((function(e){console.log(e.data),200===e.status?(t.name=e.data.dto.name,t.content=e.data.dto.content,t.maxNum=e.data.dto.maxNum,t.password=e.data.dto.pass,t.memberCount=e.data.dto.memberCount,t.nickname=e.data.dto.nickname,t.uid=e.data.dto.uid,t.lists=e.data.img,d(t.lists)):alert("fail")}))},o=async()=>{if(console.log("join launched"),a.memberCount>=a.maxNum)alert("회원이 가득 찼습니다");else{const i="http://43.201.60.125/api/joinCircle",s={"Content-Type":"application/json",Authorization:t.token,token:t.token},n={circleid:a.id,email:t.email};await R().post(i,n,{headers:s}).then((function(t){200===t.status&&(alert(t.data+"가입 되었습니다 "),e.push({name:"mycircleread",params:{id:a.id}}))})).catch((function(e){e&&console.log("Password is not correct from Join")}))}},c=async e=>{if(a.memberCount>=a.maxNum)alert("회원이 가득 찼습니다.");else{const a="http://43.201.60.125/api/passCheck",i={"Content-Type":"application/json",Authorization:t.token,token:t.token},s={circleid:e,pass:t.pass};await R().post(a,s,{headers:i}).then((function(e){e.data.dto.pass==t.pass?(t.pass=e.data.dto.pass,t.circleid=e.data.dto.circleid,o(e.data.dto.circleid)):alert("비밀번호가 맞지 않습니다")})).catch((function(e){e&&alert("비밀번호가 맞지 않습니다!")}))}},d=async e=>{const a="http://43.201.60.125/display";let i="";console.info("Thumbnail"+e[0].thumbnailURL),console.info("Thumbnail"+e[1].thumbnailURL);for(let s=0;s<e.length;s++)i=`${a}?fileName=${e[s].thumbnailURL}`,t.img.push(i);console.log(t.img)},r=async a=>{console.log("클릭한 프로필 사람의 번호::"+t.lists[a].uid),console.log("로그인한 사람의 번호::"+t.uid),console.log(JSON.stringify(t.uid)==JSON.stringify(t.lists[a].uid)),JSON.stringify(t.uid)==JSON.stringify(t.lists[a].uid)?e.push({name:"privateProfile"}):JSON.stringify(t.uid)!=JSON.stringify(t.lists[a].uid)&&e.push({name:"publicProfile",params:{id:t.lists[a].uid}})};return{getCircle:l,state:t,passCheck:c,join:o,isMember:s,sendId:n,showImage:d,showUserList:r}}},X=a(3744);const W=(0,X.Z)(T,[["render",D],["__scopeId","data-v-515d9f10"]]);var B=W},3491:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(6252),s=a(3577);const n={hidden:""},l={class:"row container"},o={hidden:""},c={class:"card-body text-success"},d={key:0,class:"card-title"},r={key:1,class:"card-text content"};function m(e,t,a,m,u,p){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h2",n,(0,s.zw)(m.state.circle=e.$route.params.id),1),(0,i._)("div",l,[(0,i._)("span",o,(0,s.zw)(m.state.circleid),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.state.lists,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"card border-success mb-3",style:{"max-width":"18rem"},key:t},[(0,i._)("div",{class:"card-header",ref_for:!0,ref:"nickname1"},(0,s.zw)(e.nickname),513),(0,i._)("div",c,[1==e.emailPublic?((0,i.wg)(),(0,i.iD)("h5",d)):(0,i.kq)("",!0),1==e.studytopicPublic?((0,i.wg)(),(0,i.iD)("p",r)):(0,i.kq)("",!0)])])))),128))])],64)}var u=a(2201),p=a(2262),g=a(9669),b=a.n(g),f={props:["circleid"],setup(e){(0,i.bv)((()=>{l()}));(0,u.tv)(),(0,p.Vh)(e,"circleid");let t=(0,p.iH)(null);const a=(0,p.qj)({lists:"",circle:"",email:sessionStorage.getItem("email"),token:sessionStorage.getItem("TOKEN")}),s=(0,p.qj)({name:"",uid:""}),n=(e,t)=>{s.name=e,s.uid=t},l=async()=>{const e="http://43.201.60.125/api/circleusers",t={"Content-Type":"application/json",Authorization:a.token,token:a.token},i={circle:a.circle};console.log("body.circle :"+i.circle),await b().post(e,i,{headers:t}).then((function(e){null!=e.data?a.lists=e.data:alert("bad.")}))};return{state:a,getData:l,modal:s,sendInfo:n,nickname1:t}}},k=a(3744);const h=(0,k.Z)(f,[["render",m],["__scopeId","data-v-3a7512fa"]]);var w=h},3043:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=2286.3983dbb2.js.map