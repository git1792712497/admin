var v=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(e,t,s)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))y.call(t,s)&&h(e,s,t[s]);if(p)for(var s of p(t))b.call(t,s)&&h(e,s,t[s]);return e},u=(e,t)=>x(e,S(t));import{d as f}from"./lodash-es-81e82e73.js";import{F as c,e as w,d as B,o as m,c as I,T as E,a5 as F,$,a0 as k,b7 as L,b6 as C,a}from"./@vue-46cd96cd.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./@amap-9fd45ac7.js";const N=c({name:"BigScreenScale"}),R=c(u(_({},N),{props:{width:{default:1920},height:{default:1080},rootValue:null},setup(e){const t=e,s=w(),n=()=>{const o=document.documentElement.clientWidth,d=document.documentElement.clientHeight,i=(o/t.width).toFixed(10),l=(d/t.height).toFixed(10),r=i<l?i:l;s.value.style.transform=`scale(${r})`,s.value.style.transformOrigin="left top",i>l?s.value.style.marginLeft=(o-parseInt((t.width*Number(r)).toFixed(2)))/2+"px":s.value.style.marginTop=(d-parseInt((t.height*Number(r)).toFixed(2)))/2+"px"};return B(()=>{n(),window.addEventListener("resize",f(n,100),!1),document.addEventListener("DOMContentLoaded",f(n,100),!1)}),(o,d)=>(m(),I("section",{class:"bigScreenScale",ref_key:"scaleRef",ref:s,style:F({width:e.width+"px",height:e.height+"px"})},[E(o.$slots,"default",{},void 0,!0)],4))}}));const z=g(R,[["__scopeId","data-v-5c4de0e1"]]),H=e=>(L("data-v-e093a5fe"),e=e(),C(),e),M=H(()=>a("main",{class:"screen-bg"},[a("header",{class:"header"}),a("aside",{class:"left-top"}),a("aside",{class:"left-bottom"}),a("aside",{class:"right-top"}),a("div",{class:"right-center"}),a("div",{class:"right-bottom"}),a("div",{class:"center"}),a("footer",{class:"bottom"})],-1)),O=c({name:"BigScreenZoom"}),T=c(u(_({},O),{setup(e){return(t,s)=>(m(),$(z,null,{default:k(()=>[M]),_:1}))}}));const q=g(T,[["__scopeId","data-v-e093a5fe"]]);export{q as default};
