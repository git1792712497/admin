var f=Object.defineProperty,h=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(o,t,e)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,m=(o,t)=>{for(var e in t||(t={}))C.call(t,e)&&p(o,e,t[e]);if(n)for(var e of n(t))b.call(t,e)&&p(o,e,t[e]);return o},s=(o,t)=>h(o,E(t));import"./base-27e822c2.js";import{E as v}from"./el-card-e0fbc180.js";import{E as x,a as B}from"./el-collapse-item-d394acd9.js";import{E as k}from"./el-button-9d05fcca.js";import{d as _,o as y,c as N,b as r,aG as i,e as a,_ as V}from"./runtime-core.esm-bundler-76eda81d.js";import"./require-bb924a95.js";import"./plugin-vue_export-helper-529fb311.js";import"./index-e961436e.js";import"./index-2ac923fb.js";import"./runtime-dom.esm-bundler-eeabfc76.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./index-f4108455.js";import"./index-99ad55f3.js";import"./style-e1000a00.js";import"./index-3b581194.js";import"./index-43159e72.js";import"./index-35e23b9e.js";import"./index-56996fd0.js";import"./icon-6077fbcf.js";import"./index-fb510e2d.js";const g=V("div",{contenteditable:"true"},"点击编辑元素",-1),w=_({name:"methods"}),Z=_(s(m({},w),{setup(o){const t=()=>history.pushState(null,null,"/修改url");return addEventListener("popstate",()=>{}),new MutationObserver(e=>{console.log(e)}),(e,G)=>{const c=k,l=x,d=B,u=v;return y(),N(u,null,{header:r(()=>[i(" h函数使用 ")]),default:r(()=>[a(d,{"model-value":"0"},{default:r(()=>[a(l,{title:"修改url",name:"1"},{default:r(()=>[a(c,{type:"primary",onClick:t},{default:r(()=>[i("按钮")]),_:1})]),_:1}),a(l,{title:"可编辑元素",name:"2"},{default:r(()=>[g]),_:1})]),_:1})]),_:1})}}}));export{Z as default};
