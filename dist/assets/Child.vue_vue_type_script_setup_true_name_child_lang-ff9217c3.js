var V=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var s=(a,e,t)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))y.call(e,t)&&s(a,t,e[t]);if(l)for(var t of l(e))k.call(e,t)&&s(a,t,e[t]);return a},c=(a,e)=>f(a,h(e));import{A as C}from"./element-plus-ef60ab81.js";import{g as x}from"./@vueuse-c4efa120.js";import{F as m,o as B,c as M,a as N,a4 as g,a2 as d,a0 as r,ac as u}from"./@vue-46cd96cd.js";const v={class:"h1"},A=m({name:"child"}),T=m(c(n({},A),{props:{modelValue:{type:Array,default:[]}},emits:["update:modelValue"],setup(a,{emit:e}){const t=a,p=()=>{e("update:modelValue",[Math.random()])},i=x(t,"modelValue",e),_=()=>{i.value=[10,20,30,40,50]};return(E,b)=>{const o=C;return B(),M("div",null,[N("h1",v,"子组件中的值"+g(a.modelValue),1),d(o,{type:"primary",onClick:p},{default:r(()=>[u("子组件更新")]),_:1}),d(o,{type:"primary",onClick:_},{default:r(()=>[u("子组件useVModel更新")]),_:1})])}}}));export{T as _};
