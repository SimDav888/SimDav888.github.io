"use strict";(self["webpackChunkgachivue0_4"]=self["webpackChunkgachivue0_4"]||[]).push([[8372],{8372:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var a=s(6252),n=s(3577),o=s(9963);const r=e=>((0,a.dD)("data-v-251db8b0"),e=e(),(0,a.Cn)(),e),l={key:0,hidden:""},c={key:1,hidden:""},i={class:"container"},d={class:"screen"},_={class:"screen__content"},u={class:"login",action:"",id:"frm",ref:"frm"},p=r((()=>(0,a._)("h1",{style:{color:"#7875B5"}},"로그인",-1))),m={class:"login__field"},g={class:"login__field"},h=r((()=>(0,a._)("span",{class:"button__text"},"지금 로그인 하기                >>",-1))),b=[h],f={style:{"margin-top":"1em"}},v=(0,a.uE)('<div class="screen__background" data-v-251db8b0><span class="screen__background__shape screen__background__shape4" data-v-251db8b0></span><span class="screen__background__shape screen__background__shape3" data-v-251db8b0></span><span class="screen__background__shape screen__background__shape2" data-v-251db8b0></span><span class="screen__background__shape screen__background__shape1" data-v-251db8b0></span></div>',1);function k(e,t,s,r,h,k){const w=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,["1"==r.state.stateStoreTransmeter?((0,a.wg)(),(0,a.iD)("h2",l,(0,n.zw)(this.$store.commit("setUserIsLogged")),1)):((0,a.wg)(),(0,a.iD)("h2",c,(0,n.zw)(this.$store.commit("setUserIsNotLogged")),1)),(0,a._)("div",i,[(0,a._)("div",d,[(0,a._)("div",_,[(0,a._)("form",u,[p,(0,a._)("div",m,[(0,a.wy)((0,a._)("input",{type:"text",class:"login__input","aria-describedby":"emailHelp",ref:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.state.email=e),placeholder:"이메일",required:"",autofocus:""},null,512),[[o.nr,r.state.email]])]),(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{type:"password",class:"login__input",placeholder:"비밀번호",ref:"pw","onUpdate:modelValue":t[1]||(t[1]=e=>r.state.pw=e)},null,512),[[o.nr,r.state.pw]])]),(0,a._)("button",{class:"button login__submit",onClick:t[2]||(t[2]=(0,o.iM)(((...e)=>r.loginHandler&&r.loginHandler(...e)),["prevent"]))},b),(0,a._)("h5",f,[(0,a.Wm)(w,{to:"/signup",style:{"text-decoration":"none",color:"#7875B5"}},{default:(0,a.w5)((()=>[(0,a.Uk)("회원 가입")])),_:1})]),(0,a._)("h6",null,[(0,a.Wm)(w,{to:"/forgot",style:{"text-decoration":"none",color:"#30353d"}},{default:(0,a.w5)((()=>[(0,a.Uk)("비밀번호 찾기 ")])),_:1})])],512)]),v])])],64)}s(7658);var w=s(2262),y=s(9669),I=s.n(y),U=s(2201),H={computed:{complogIn(){return this.$store.commit("setUserIsLogged")},complogOut(){return this.$store.commit("setUserIsNotLogged")}},setup(){const e=()=>{s.stateStoreTransmeter=0},t=((0,w.iH)(""),(0,U.tv)()),s=(0,w.qj)({email:"",pw:"",stateStoreTransmeter:"default"}),n=(0,w.iH)(""),o=(0,w.iH)(""),r=(0,a.Fl)((()=>this.$store.commit("setUserIsLogged"))),l=async()=>{if(""===s.email)return alert("Check Email"),n.value.focus(),!1;if(""===s.pw)return alert("Check Password"),o.value.focus(),!1;const e="http://localhost:9090/members/login",a={"Content-Type":"application/json; charset=utf-8"},r={email:s.email,pw:s.pw};await I().post(e,r,{headers:a}).then((function(e){sessionStorage.setItem("TOKEN",e.data.token),sessionStorage.setItem("email",e.data.email),sessionStorage.setItem("guest",!1),alert("로그인되었습니다."),s.stateStoreTransmeter=1,t.push({name:"commandBoard"})})).catch((function(e){console.log("Error",e.message),alert('로그인에 실패했습니다 "비밀번호 찾기로 가세요"'),s.stateStoreTransmeter=0}))};return{state:s,email:n,pw:o,loginHandler:l,logIn:r,logOut:e}},data(){return{}}},S=s(3744);const C=(0,S.Z)(H,[["render",k],["__scopeId","data-v-251db8b0"]]);var T=C}}]);
//# sourceMappingURL=8372.9ee258fb.js.map