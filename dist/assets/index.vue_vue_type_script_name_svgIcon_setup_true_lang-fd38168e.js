var i=Object.defineProperty,l=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var r=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&r(t,n,e[n]);if(o)for(var n of o(e))f.call(e,n)&&r(t,n,e[n]);return t},a=(t,e)=>l(t,u(e));import{d as c,U as p,o as _,Z as m,_ as h,u as x}from"./runtime-core.esm-bundler-76eda81d.js";const g={"aria-hidden":"true"},k=["fill","xlink:href"],y=c({name:"svgIcon"}),$=c(a(s({},y),{props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup(t){const e=t,n=p(()=>`#${e.prefix}-${e.name}`);return(B,S)=>(_(),m("svg",g,[h("use",{fill:t.color,"xlink:href":x(n)},null,8,k)]))}}));export{$ as _};
