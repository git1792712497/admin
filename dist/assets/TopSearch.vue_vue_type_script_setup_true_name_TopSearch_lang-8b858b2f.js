var y=Object.defineProperty,V=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var r=(o,t,e)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,d=(o,t)=>{for(var e in t||(t={}))C.call(t,e)&&r(o,e,t[e]);if(_)for(var e of _(t))E.call(t,e)&&r(o,e,t[e]);return o},c=(o,t)=>V(o,x(t));import{A as b,P as h,w as k,Q as B}from"./element-plus-cbff5993.js";import{g as f,s as R,o as g,ab as M,ac as a,c as l,X as m,u as N,y as T}from"./@vue-f164b9f1.js";const v=f({name:"TopSearch"}),S=f(c(d({},v),{emits:["addMenu"],setup(o,{emit:t}){let e=R();return(A,n)=>{const u=b,s=h,i=k,w=B;return g(),M(w,{gutter:15},{default:a(()=>[l(s,{span:2},{default:a(()=>[l(u,{style:{width:"100%"},type:"primary",onClick:n[0]||(n[0]=p=>t("addMenu"))},{default:a(()=>[m("新增菜单")]),_:1})]),_:1}),l(s,{span:4},{default:a(()=>[l(i,{modelValue:N(e),"onUpdate:modelValue":n[1]||(n[1]=p=>T(e)?e.value=p:e=p),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1}),l(s,{span:2,offset:16},{default:a(()=>[l(u,{type:"primary",style:{width:"100%"}},{default:a(()=>[m("查询")]),_:1})]),_:1})]),_:1})}}}));export{S as _};