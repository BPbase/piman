import{d as C,r as k,c as r,a as o,b as _,w as e,e as t,f as l,o as c,F as b,g,h as n,t as v}from"./index-cdf59003.js";const B={class:"page"},x={class:"page-header"},y={class:"page-main"},A=o("h2",null,"Accordion",-1),N=o("h3",null,"Basic",-1),V=o("h3",null,"Custom Header",-1),$=o("mark",null,"Custom(HTML)",-1),H=C({__name:"DemoAccordion",setup(w){const d=k([{title:"🏠首頁",url:"/"},{title:"Accrordion"}]);return(u,D)=>{const p=l("pi-breadcrumb-item"),m=l("pi-breadcrumb"),f=l("router-link"),a=l("pi-accordion-item"),s=l("pi-accordion");return c(),r("div",B,[o("div",x,[(c(),_(m,{key:u.$route.path},{default:e(()=>[(c(!0),r(b,null,g(d.value,(i,h)=>(c(),_(p,{key:`pathIndex-${h}`,title:`前往${i.title}`,to:i.url},{default:e(()=>[n(v(i.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),o("div",y,[t(f,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:e(()=>[n(":::")]),_:1}),A,o("section",null,[N,t(s,null,{default:e(()=>[t(a,null,{default:e(()=>[n(" Content ")]),_:1}),t(a,{open:""},{default:e(()=>[n(" Content (set default open) "),t(s,null,{default:e(()=>[t(a,null,{default:e(()=>[n(" Content ")]),_:1}),t(a,{open:""},{default:e(()=>[n(" Content (set default open) ")]),_:1})]),_:1})]),_:1})]),_:1})]),o("section",null,[V,t(s,null,{default:e(()=>[t(a,{title:"Custom"},{default:e(()=>[n(" Content ")]),_:1}),t(a,null,{title:e(()=>[$]),default:e(()=>[n(" Content ")]),_:1})]),_:1})])])])}}});export{H as default};
