var T=Object.defineProperty,I=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))U.call(e,o)&&g(t,o,e[o]);if(h)for(var o of h(e))N.call(e,o)&&g(t,o,e[o]);return t},d=(t,e)=>I(t,B(e));import{Y as k,Z as $,_ as A,$ as P,o as R,a as z}from"./element-plus-cbff5993.js";import{useDark as L,changePrimary as X}from"./useTheme-3bdcfed4.js";import{E as Y,F as Z}from"./@element-plus-296a610a.js";import{g as w}from"./globalConfig-6da35374.js";import{g as r,o as E,ab as j,u as n,s as q,an as V,a as G,c as a,ac as c,b as i,y as C,X as b,F as H,b8 as J,b7 as K}from"./@vue-f164b9f1.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";import"./theme-a5657130.js";import"./preload-helper-41c905a7.js";import"./pinia-b6a13eed.js";import"./vue-demi-68b8001f.js";const O=r({name:"SwitchDark"}),Q=r(d(_({},O),{setup(t){const e=w();return(o,m)=>{const l=k;return E(),j(l,{modelValue:n(e).isDark,"onUpdate:modelValue":m[0]||(m[0]=p=>n(e).isDark=p),onChange:n(L),"inline-prompt":"","active-color":"#0a0a0a","inactive-color":"#dcdfe6","active-icon":n(Y),"inactive-icon":n(Z)},null,8,["modelValue","onChange","active-icon","inactive-icon"])}}})),W=["#DAA96E","#0C819F","#409EFF","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6","#00fde9"],u=t=>(J("data-v-26e66ecc"),t=t(),K(),t),ee={class:"theme-item"},oe=u(()=>i("span",null,"暗黑模式",-1)),te={class:"theme-item"},ne=u(()=>i("span",null,"主题颜色",-1)),ae={class:"theme-item"},le=u(()=>i("span",null,"标签栏",-1)),se=r({name:"Theme"}),ie=r(d(_({},se),{setup(t){let e=q(!1);const o=w();return o.setTheme(),(m,l)=>{const p=R,D=V("ColdDrink"),f=z,v=$,x=A,y=V("Setting"),S=k,F=P;return E(),G(H,null,[a(p,{content:"布局设置",effect:"dark",placement:"bottom"},{default:c(()=>[i("i",{class:"iconfont icon-clothes icon-style",onClick:l[0]||(l[0]=s=>C(e)?e.value=!0:e=!0)})]),_:1}),a(F,{modelValue:n(e),"onUpdate:modelValue":l[3]||(l[3]=s=>C(e)?e.value=s:e=s),size:"300px",title:"布局设置"},{default:c(()=>[a(v,{class:"divider","content-position":"center"},{default:c(()=>[a(f,null,{default:c(()=>[a(D)]),_:1}),b(" 全局主题 ")]),_:1}),i("div",ee,[oe,a(Q)]),i("div",te,[ne,a(x,{modelValue:n(o).primary,"onUpdate:modelValue":l[1]||(l[1]=s=>n(o).primary=s),predefine:n(W),onChange:n(X)},null,8,["modelValue","predefine","onChange"])]),a(v,{class:"divider","content-position":"center"},{default:c(()=>[a(f,null,{default:c(()=>[a(y)]),_:1}),b(" 系统设置 ")]),_:1}),i("div",ae,[le,a(S,{modelValue:n(o).tabs,"onUpdate:modelValue":l[2]||(l[2]=s=>n(o).tabs=s)},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64)}}}));const Be=M(ie,[["__scopeId","data-v-26e66ecc"]]);export{Be as default};