import{d as C,r as h,c as d,a as c,b as m,w as n,e as s,h as o,j as v,f as r,o as i,F as y,g as $,t as M}from"./index-81aa7215.js";const w={class:"page"},x={class:"page-header"},B={class:"page-main"},D=c("h2",null,"Message",-1),V=C({__name:"DemoMsg",setup(I){const p=h([{title:"🏠首頁",url:"/"},{title:"Msg"}]),_=v("PiMsg"),a=(u,e)=>{_({msg:e,theme:u,duration:3e3,onClose:()=>{console.log("msg closed")}})};return(u,e)=>{const g=r("pi-breadcrumb-item"),f=r("pi-breadcrumb"),k=r("router-link"),l=r("pi-button");return i(),d("div",w,[c("div",x,[(i(),m(f,{key:u.$route.path},{default:n(()=>[(i(!0),d(y,null,$(p.value,(t,b)=>(i(),m(g,{key:`pathIndex-${b}`,title:`前往${t.title}`,to:t.url},{default:n(()=>[o(M(t.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),c("div",B,[s(k,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:n(()=>[o(":::")]),_:1}),D,c("section",null,[o(" Msg Content "),s(l,{onClick:e[0]||(e[0]=t=>a("","hello I'm default"))},{default:n(()=>[o("Default")]),_:1}),s(l,{theme:"primary",onClick:e[1]||(e[1]=t=>a("primary","hello I'm primary"))},{default:n(()=>[o("Primary")]),_:1}),s(l,{theme:"success",onClick:e[2]||(e[2]=t=>a("success","hello I'm success"))},{default:n(()=>[o("Success")]),_:1}),s(l,{theme:"warning",onClick:e[3]||(e[3]=t=>a("warning","hello I'm warning"))},{default:n(()=>[o("Warning")]),_:1}),s(l,{theme:"danger",onClick:e[4]||(e[4]=t=>a("danger","hello I'm danger"))},{default:n(()=>[o("Danger")]),_:1})])])])}}});export{V as default};