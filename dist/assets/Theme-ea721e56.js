var T=Object.defineProperty,I=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))U.call(e,o)&&g(t,o,e[o]);if(h)for(var o of h(e))$.call(e,o)&&g(t,o,e[o]);return t},d=(t,e)=>I(t,B(e));import{Y as b,Z as N,_ as A,$ as P,o as R,a as j}from"./element-plus-ef60ab81.js";import{useDark as z,changePrimary as L}from"./useTheme-ce503107.js";import{E as Q,F as Y}from"./@element-plus-32e4db1a.js";import{g as w}from"./globalConfig-accb715f.js";import{F as c,o as E,$ as Z,u as n,s as q,aj as V,c as G,a2 as a,a0 as r,a as i,m as C,ac as k,Q as H,b7 as J,b6 as K}from"./@vue-46cd96cd.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-c4efa120.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-bd17b2e0.js";import"./@floating-ui-5f39704e.js";import"./dayjs-7cbd9aff.js";import"./memoize-one-0650c7b0.js";import"./theme-800f6a35.js";import"./preload-helper-41c905a7.js";import"./pinia-2c3c5428.js";import"./vue-demi-71ba0ef2.js";const O=c({name:"SwitchDark"}),W=c(d(_({},O),{setup(t){const e=w();return(o,m)=>{const l=b;return E(),Z(l,{modelValue:n(e).isDark,"onUpdate:modelValue":m[0]||(m[0]=p=>n(e).isDark=p),onChange:n(z),"inline-prompt":"","active-color":"#0a0a0a","inactive-color":"#dcdfe6","active-icon":n(Q),"inactive-icon":n(Y)},null,8,["modelValue","onChange","active-icon","inactive-icon"])}}})),X=["#DAA96E","#0C819F","#409EFF","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6","#00fde9"],u=t=>(J("data-v-84771a13"),t=t(),K(),t),ee={class:"theme-item"},oe=u(()=>i("span",null,"暗黑模式",-1)),te={class:"theme-item"},ne=u(()=>i("span",null,"主题颜色",-1)),ae={class:"theme-item"},le=u(()=>i("span",null,"标签栏",-1)),se=c({name:"Theme"}),ie=c(d(_({},se),{setup(t){let e=q(!1);const o=w();return o.setTheme(),(m,l)=>{const p=R,D=V("ColdDrink"),f=j,v=N,x=A,S=V("Setting"),y=b,F=P;return E(),G(H,null,[a(p,{content:"布局设置",effect:"dark",placement:"bottom"},{default:r(()=>[i("i",{class:"iconfont icon-clothes icon-style",onClick:l[0]||(l[0]=s=>C(e)?e.value=!0:e=!0)})]),_:1}),a(F,{modelValue:n(e),"onUpdate:modelValue":l[3]||(l[3]=s=>C(e)?e.value=s:e=s),size:"300px",title:"布局设置"},{default:r(()=>[a(v,{class:"divider","content-position":"center"},{default:r(()=>[a(f,null,{default:r(()=>[a(D)]),_:1}),k(" 全局主题 ")]),_:1}),i("div",ee,[oe,a(W)]),i("div",te,[ne,a(x,{modelValue:n(o).primary,"onUpdate:modelValue":l[1]||(l[1]=s=>n(o).primary=s),predefine:n(X),onChange:n(L)},null,8,["modelValue","predefine","onChange"])]),a(v,{class:"divider","content-position":"center"},{default:r(()=>[a(f,null,{default:r(()=>[a(S)]),_:1}),k(" 系统设置 ")]),_:1}),i("div",ae,[le,a(y,{modelValue:n(o).tabs,"onUpdate:modelValue":l[2]||(l[2]=s=>n(o).tabs=s)},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64)}}}));const Be=M(ie,[["__scopeId","data-v-84771a13"]]);export{Be as default};
