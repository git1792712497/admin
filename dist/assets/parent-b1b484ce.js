var d=Object.defineProperty,f=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var n=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))k.call(t,o)&&n(e,o,t[o]);return e},i=(e,t)=>f(e,V(t));import{A as x}from"./element-plus-cbff5993.js";import{_ as y}from"./Child.vue_vue_type_script_setup_true_name_child_lang-fbe4a35e.js";import{g as p,r as B,o as C,a as b,b as c,ae as v,u as l,c as m,y as N,ac as g,X as w}from"./@vue-f164b9f1.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const D={class:"h1"},E=c("br",null,null,-1),A=p({name:"parent"}),Q=p(i(s({},A),{setup(e){const t=B([1,2,3,4,5]),o=()=>{t.value=[Date.now()]};return(L,a)=>{const u=x;return C(),b("div",null,[c("h1",D,"父组件中的值"+v(l(t)),1),m(y,{modelValue:l(t),"onUpdate:modelValue":a[0]||(a[0]=_=>N(t)?t.value=_:null)},null,8,["modelValue"]),E,m(u,{type:"primary",onClick:o},{default:g(()=>[w("父组件更新")]),_:1})])}}}));export{Q as default};