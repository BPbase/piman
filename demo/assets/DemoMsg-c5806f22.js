import{d as $,r as y,c as f,a as u,b as k,w as s,e as r,h as t,j as w,f as c,o as p,F as h,g as M,t as I}from"./index-e13bd4f8.js";const D={class:"page"},x={class:"page-header"},S={class:"page-main"},B=u("h2",null,"Message",-1),P=u("br",null,null,-1),j=u("br",null,null,-1),W=$({__name:"DemoMsg",setup(N){const C=y([{title:"🏠首頁",url:"/"},{title:"Msg"}]),o=w("PiMsg"),d=(l,e)=>{o({msg:e,theme:l,duration:3e3,onClose:()=>{console.log("msg closed")}})},m=(l,e)=>{l===""&&(l="info"),o[l](e)},g=(l,e)=>{let a={msg:e,duration:1e3,position:"center",width:"300px",onClose:()=>{console.log("msg closed")}};switch(l){case"primary":o.primary(a);break;case"success":o.success(a);break;case"warning":o.warning(a);break;case"danger":o.danger(a);break;default:o.info(a)}};return(l,e)=>{const a=c("pi-breadcrumb-item"),v=c("pi-breadcrumb"),_=c("router-link"),i=c("pi-button");return p(),f("div",D,[u("div",x,[(p(),k(v,{key:l.$route.path},{default:s(()=>[(p(!0),f(h,null,M(C.value,(n,b)=>(p(),k(a,{key:`pathIndex-${b}`,title:`前往${n.title}`,to:n.url},{default:s(()=>[t(I(n.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),u("div",S,[r(_,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:s(()=>[t(":::")]),_:1}),B,u("section",null,[t(" Msg Content "),r(i,{onClick:e[0]||(e[0]=n=>d("","hello I'm default"))},{default:s(()=>[t("Default")]),_:1}),r(i,{theme:"primary",onClick:e[1]||(e[1]=n=>d("primary","hello I'm primary"))},{default:s(()=>[t("Primary")]),_:1}),r(i,{theme:"success",onClick:e[2]||(e[2]=n=>d("success","hello I'm success"))},{default:s(()=>[t("Success")]),_:1}),r(i,{theme:"warning",onClick:e[3]||(e[3]=n=>d("warning","hello I'm warning"))},{default:s(()=>[t("Warning")]),_:1}),r(i,{theme:"danger",onClick:e[4]||(e[4]=n=>d("danger","hello I'm danger"))},{default:s(()=>[t("Danger")]),_:1}),P,t(" Msg string content "),r(i,{onClick:e[5]||(e[5]=n=>m("","this is default string"))},{default:s(()=>[t("Default")]),_:1}),r(i,{theme:"primary",onClick:e[6]||(e[6]=n=>m("primary","this is primary string"))},{default:s(()=>[t("Primary")]),_:1}),r(i,{theme:"success",onClick:e[7]||(e[7]=n=>m("success","this is default string"))},{default:s(()=>[t("Success")]),_:1}),r(i,{theme:"warning",onClick:e[8]||(e[8]=n=>m("warning","this is warning string"))},{default:s(()=>[t("Warning")]),_:1}),r(i,{theme:"danger",onClick:e[9]||(e[9]=n=>m("danger","this is danger string"))},{default:s(()=>[t("Danger")]),_:1}),j,t(" Msg option content "),r(i,{onClick:e[10]||(e[10]=n=>g("","hello I'm default"))},{default:s(()=>[t("Default")]),_:1}),r(i,{theme:"primary",onClick:e[11]||(e[11]=n=>g("primary","hello I'm primary"))},{default:s(()=>[t("Primary")]),_:1}),r(i,{theme:"success",onClick:e[12]||(e[12]=n=>g("success","hello I'm success"))},{default:s(()=>[t("Success")]),_:1}),r(i,{theme:"warning",onClick:e[13]||(e[13]=n=>g("warning","hello I'm warning"))},{default:s(()=>[t("Warning")]),_:1}),r(i,{theme:"danger",onClick:e[14]||(e[14]=n=>g("danger","hello I'm danger"))},{default:s(()=>[t(" Danger")]),_:1})])])])}}});export{W as default};