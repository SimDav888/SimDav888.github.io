import{_,o as r,c as i,a as o,u as d,b as n,t as l,F as p,r as m,e as s,p as b,h as y}from"./index.502a43c6.js";const k={class:"card",style:{width:"18rem",margin:"30px",padding:"10px",background:"rgb(33,37,41)",color:"aliceblue"}},v=["src","alt"],h={class:"card-body"},U={style:{display:"inline"}},B={class:"card-text"},f={__name:"BookReviewCard",props:{title:{type:String,required:!1},body:{type:String,required:!0},imageUrl:{type:String,required:!0},score:{type:Number,required:!1}},setup(e){const a=e,c=new URL(a.imageUrl,import.meta.url).href,u=a.imageUrl.substring(16,a.imageUrl.length-4);return(E,N)=>(r(),i("div",k,[o("img",{src:d(c),alt:d(u),class:"card-img-top"},null,8,v),o("div",h,[n(l(e.title)+" ",1),o("ul",null,[n("Score : "),(r(!0),i(p,null,m(parseInt(e.score),V=>(r(),i("li",U,"*"))),256))]),o("p",B,l(e.body),1)])]))}},t=_(f,[["__scopeId","data-v-4f8d682a"]]);const g=e=>(b("data-v-03bec63c"),e=e(),y(),e),x=g(()=>o("h2",null,"Lectures",-1)),H={class:"grid"},S=g(()=>o("h2",null,"Books covered from my bootcamp.",-1)),j={class:"grid"},F={__name:"Education",setup(e){return(a,c)=>(r(),i(p,null,[x,o("div",H,[s(t,{score:"4",title:"HeadFirst-DesignPatterns",body:"currently on it",imageUrl:"..\\assets\\books\\HeadFirst-DesignPatterns.jpg"}),s(t,{score:"4",title:"HeadFirst-C#book",body:"currently on it",imageUrl:"..\\assets\\books\\HeadFirst-CSharpBook.jpg"}),s(t,{score:"5",title:"HeadFirst-JavaBook",body:"done twice :)",imageUrl:"..\\assets\\books\\HeadFirst-JavaBook.jpg"}),s(t,{score:"3",title:"HeadFirst-JavascriptBook",body:"currently on it",imageUrl:"..\\assets\\books\\HeadFirst-JavascriptBook.jpg"})]),S,o("div",j,[s(t,{score:"2",title:"MEVN",body:"\uC2E4\uC2DC\uAC04 \uBAA8\uB2C8\uD130\uB9C1 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uBA70 \uC815\uBCF5\uD558\uB294 MEVN - MongoDB, Express, Vue.js 3.0, Node.js, D3.js\uC640 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCD5C\uC801\uD654, \uAC1C\uBC1C\uC790 \uD3EC\uD2B8\uD3F4\uB9AC\uC624, \uD568\uC218\uD615 \uD504\uB85C\uADF8\uB798\uBC0D, \uBC30\uD3EC\uAE4C\uC9C0",imageUrl:"..\\assets\\books\\MEVN.png"}),s(t,{score:"5",title:"MEVN",body:"Java\uC758 \uC815\uC11D : \uAE30\uCD08\uD3B8",imageUrl:"..\\assets\\books\\Java.jpg"}),s(t,{score:"5",title:"Spring",body:"\uCF54\uB4DC\uB85C \uBC30\uC6B0\uB294 \uC2A4\uD504\uB9C1 \uBD80\uD2B8 \uC6F9 \uD504\uB85C\uC81D\uD2B8 - \uD604\uC5C5 \uAC1C\uBC1C\uC744 \uC704\uD55C \uB2E8\uACC4\uBCC4 \uC2E4\uC2B5\uC11C (\uB3D9\uC601\uC0C1 \uAC15\uC758 \uC81C\uACF5)",imageUrl:"..\\assets\\books\\Spring.jpg"}),s(t,{score:"3",title:"Vue,Html5,css",body:"HTML5 \uC6F9 \uD504\uB85C\uADF8\uB798\uBC0D \uC785\uBB38 - 3\uD310 | IT Cookbook \uD55C\uBE5B \uAD50\uC7AC \uC2DC\uB9AC\uC988 258",imageUrl:"..\\assets\\books\\HTML5.jpg"})])],64))}},I=_(F,[["__scopeId","data-v-03bec63c"]]);export{I as default};