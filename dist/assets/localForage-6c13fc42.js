var b=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(o,e,t)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))B.call(e,t)&&h(o,t,e[t]);if(f)for(var t of f(e))C.call(e,t)&&h(o,t,e[t]);return o},g=(o,e)=>v(o,x(e));var k=(o,e,t)=>new Promise((_,l)=>{var m=a=>{try{s(t.next(a))}catch(p){l(p)}},d=a=>{try{s(t.throw(a))}catch(p){l(p)}},s=a=>a.done?_(a.value):Promise.resolve(a.value).then(m,d);s((t=t.apply(o,e)).next())});import{c as E,w as I,A as N,B as j}from"./element-plus-ef60ab81.js";import{l as w}from"./localforage-27b2db04.js";import{F as V,s as F,o as R,$ as A,a0 as n,a as c,a2 as r,ac as i,u as G,m as L}from"./@vue-46cd96cd.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-c4efa120.js";import"./@element-plus-32e4db1a.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-bd17b2e0.js";import"./@floating-ui-5f39704e.js";import"./dayjs-7cbd9aff.js";import"./memoize-one-0650c7b0.js";const P={class:"flex justify-between"},S=c("span",null,"数据库存储",-1),T=c("br",null,null,-1),U=V({name:"localForage"}),le=V(g(y({},U),{setup(o){let e=F();const t=()=>{w.setItem("localforage",e.value).then(l=>{console.log(l)})},_=()=>k(this,null,function*(){const l=yield w.getItem("localforage");console.log(l)});return(l,m)=>{const d=E,s=I,a=N,p=j;return R(),A(p,{shadow:"hover",style:{height:"100%"},"body-style":{height:"100%"}},{header:n(()=>[c("nav",P,[S,r(d,{type:"primary",target:"_blank",href:"https://localforage.docschina.org/"},{default:n(()=>[i("localforage.js")]),_:1})])]),default:n(()=>[c("div",null,[r(s,{modelValue:G(e),"onUpdate:modelValue":m[0]||(m[0]=u=>L(e)?e.value=u:e=u),placeholder:"Please input"},null,8,["modelValue"])]),T,c("div",null,[r(a,{type:"primary",onClick:t},{default:n(()=>[i("增加")]),_:1}),r(a,{type:"primary"},{default:n(()=>[i("删除")]),_:1}),r(a,{type:"primary"},{default:n(()=>[i("修改")]),_:1}),r(a,{type:"primary",onClick:_},{default:n(()=>[i("查询")]),_:1})])]),_:1})}}}));export{le as default};
