var u=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var s=(e,o,t)=>o in e?u(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,c=(e,o)=>{for(var t in o||(o={}))b.call(o,t)&&s(e,t,o[t]);if(a)for(var t of a(o))g.call(o,t)&&s(e,t,o[t]);return e},n=(e,o)=>f(e,h(o));import{c as k,J as w,B as x}from"./element-plus-60237716.js";import{b as y}from"./qrcode-0d75182d.js";import{g as p,s as B,o as q,ab as v,ac as r,b as i,c as m,X as C,u as E}from"./@vue-f164b9f1.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";import"./encode-utf8-f813de00.js";import"./dijkstrajs-c101bb87.js";const N={class:"flex justify-between"},V=i("strong",null,"二维码",-1),I=p({name:"qrcode"}),Z=p(n(c({},I),{setup(e){let o=B();return y.toDataURL("I am a pony!").then(t=>{o.value=t}).catch(t=>{console.error(t)}),(t,L)=>{const l=k,_=w,d=x;return q(),v(d,{shadow:"hover"},{header:r(()=>[i("nav",N,[V,m(l,{href:"https://github.com/soldair/node-qrcode",target:"_blank",type:"primary"},{default:r(()=>[C("qrcode")]),_:1})])]),default:r(()=>[m(_,{src:E(o)},null,8,["src"])]),_:1})}}}));export{Z as default};