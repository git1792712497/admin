var d=Object.defineProperty,f=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))h.call(e,t)&&i(o,t,e[t]);if(r)for(var t of r(e))g.call(e,t)&&i(o,t,e[t]);return o},c=(o,e)=>f(o,u(e));import{c as v,B as x}from"./element-plus-3c3e7816.js";import{i as E}from"./vue-fullpage.js-85d6b206.js";import{F as l,o as k,$ as b,a0 as s,a,a2 as p,ac as y,u as B}from"./@vue-0bd7c233.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b3c2dc13.js";import"./@element-plus-9f43ecf9.js";import"./dayjs-604b50be.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-171b62d6.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const C={class:"flex justify-between"},j=a("strong",null,"全屏滚动",-1),w=a("div",{class:"section"},"First section ...",-1),N=a("div",{class:"section"},"Second section ...",-1),V=l({name:"fullpage"}),P=l(c(n({},V),{setup(o){const e={licenseKey:"YOUR_KEY_HEERE",menu:"#menu",anchors:["page1","page2","page3"],sectionsColor:["#41b883","#ff5f45","#0798ec"]};return(t,F)=>{const _=v,m=x;return k(),b(m,{shadow:"hover"},{header:s(()=>[a("nav",C,[j,p(_,{type:"primary",target:"_blank",href:"https://github.com/alvarotrigo/vue-fullpage.js"},{default:s(()=>[y("vue-fullpage.js")]),_:1})])]),default:s(()=>[a("div",null,[p(B(E),{ref:"fullpage",options:e,id:"fullpage"},{default:s(()=>[w,N]),_:1},512)])]),_:1})}}}));export{P as default};
