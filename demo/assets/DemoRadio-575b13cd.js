import{d as g,r,c as m,a as n,b as _,w as l,e as d,h as o,t as c,f as u,o as i,F as h,g as B}from"./index-cdf59003.js";const x={class:"page"},y={class:"page-header"},C={class:"page-main"},R=n("h2",null,"Radio",-1),U=n("h3",null,"Basic",-1),N=n("br",null,null,-1),D=g({__name:"DemoRadio",setup($){const a=r(3),p=r([{title:"🏠首頁",url:"/"},{title:"Radio"}]);return(v,t)=>{const V=u("pi-breadcrumb-item"),f=u("pi-breadcrumb"),b=u("router-link"),s=u("pi-radio");return i(),m("div",x,[n("div",y,[(i(),_(f,{key:v.$route.path},{default:l(()=>[(i(!0),m(h,null,B(p.value,(e,k)=>(i(),_(V,{key:`pathIndex-${k}`,title:`前往${e.title}`,to:e.url},{default:l(()=>[o(c(e.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),n("div",C,[d(b,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:l(()=>[o(":::")]),_:1}),R,n("section",null,[U,d(s,{name:"testname",value:"1",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),id:"a"},{default:l(()=>[o("單選按鈕 1")]),_:1},8,["modelValue"]),d(s,{name:"testname",value:"2",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),id:"b"},{default:l(()=>[o("單選按鈕 2")]),_:1},8,["modelValue"]),d(s,{name:"testname",value:"3",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),id:"c"},{default:l(()=>[o("單選按鈕 3")]),_:1},8,["modelValue"]),d(s,{name:"testname",value:"4",modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value=e),id:"d",disabled:""},{default:l(()=>[o("單選按鈕 4")]),_:1},8,["modelValue"]),N,o(" Select: "+c(a.value),1)])])])}}});export{D as default};
