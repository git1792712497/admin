var y=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))k.call(e,t)&&_(o,t,e[t]);if(h)for(var t of h(e))B.call(e,t)&&_(o,t,e[t]);return o},d=(o,e)=>w(o,x(e));var u=(o,e,t)=>new Promise((s,c)=>{var r=a=>{try{n(t.next(a))}catch(l){c(l)}},i=a=>{try{n(t.throw(a))}catch(l){c(l)}},n=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,i);n((t=t.apply(o,e)).next())});import{A as C,c as E,B as N}from"./element-plus-60237716.js";import{h as R}from"./html2canvas-a83b8864.js";import{g as b,o as T,ab as V,ac as m,b as v,c as f,X as g}from"./@vue-f164b9f1.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const D={class:"flex justify-between"},L=v("main",{class:"w-80 h-80 bg-blue-200",id:"html2canvas-box"},null,-1),S=b({name:"html2canvas"}),Z=b(d(p({},S),{setup(o){const e=(s,c)=>{const r=window.devicePixelRatio,i=s.offsetWidth,n=s.offsetHeight,a=p({scale:r,width:i,height:n,useCORS:!0,allowTaint:!1},c);return R(s,a).then(l=>l.toDataURL("image/png"))},t=()=>u(this,null,function*(){const s=yield e(document.querySelector("#html2canvas-box"));console.log(s)});return(s,c)=>{const r=C,i=E,n=N;return T(),V(n,{shadow:"hover",style:{height:"100%"},"body-style":{height:"100%"}},{header:m(()=>[v("nav",D,[f(r,{type:"primary",onClick:t},{default:m(()=>[g("截屏")]),_:1}),f(i,{type:"primary",target:"_blank",href:"https://html2canvas.hertzen.com/"},{default:m(()=>[g("html2canvas")]),_:1})])]),default:m(()=>[L]),_:1})}}}));export{Z as default};
