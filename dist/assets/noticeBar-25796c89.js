var b=Object.defineProperty,w=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))W.call(t,o)&&f(e,o,t[o]);if(p)for(var o of p(t))k.call(t,o)&&f(e,o,t[o]);return e},u=(e,t)=>w(e,B(t));import{B as $}from"./element-plus-ef60ab81.js";import{F as d,e as h,q as O,d as S,o as s,c as n,a as l,T as c,Z as _,_ as T,a4 as N,a5 as g,bz as z,$ as C,a0 as v,a2 as I}from"./@vue-46cd96cd.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-c4efa120.js";import"./@element-plus-32e4db1a.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-bd17b2e0.js";import"./@floating-ui-5f39704e.js";import"./dayjs-7cbd9aff.js";import"./memoize-one-0650c7b0.js";const F={key:0,class:"notice-bar-warp-left-icon"},R={key:0,class:"notice-bar-warp-slot"},E={key:1,class:"notice-bar-warp-right-icon"},M=d({name:"noticeBar"}),q=d(u(m({},M),{props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--el-color-primary)"},background:{type:String,default:()=>"var(--el-color-primary-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:Number,default:()=>40},speed:{type:Number,default:()=>100},scrollable:{type:Boolean,default:()=>!1}},setup(e){const t=e;z(r=>({"3b431c1e":a.textOWidth,"7c7dc1a6":a.oneTime,"55126c75":a.start,"2b490f0c":a.warpOWidth,d6351ae8:a.twoTime}));const o=h(),i=h(),a=O({flag:!0,oneTime:"0s",twoTime:"0s",warpOWidth:"0px",textOWidth:"0px",start:"running"});S(()=>{t.scrollable||(a.warpOWidth=o.value.offsetWidth+"px",a.textOWidth=-i.value.offsetWidth+"px",a.oneTime=-parseFloat(a.textOWidth)/t.speed+"s",a.twoTime=(-parseFloat(a.textOWidth)+parseFloat(a.warpOWidth))/t.speed+"s",i.value.addEventListener("animationend",()=>{a.flag=!1},!1))});const x=()=>a.start="paused",y=()=>a.start="running";return(r,Z)=>(s(),n("nav",{style:g({background:e.background,height:`${e.height}px`}),class:"notice-bar",onMouseenter:x,onMouseleave:y},[l("div",{style:g({color:e.color,fontSize:`${e.size}px`}),class:"notice-bar-warp"},[r.$slots.leftIcon?(s(),n("div",F,[c(r.$slots,"leftIcon",{},void 0,!0)])):_("",!0),l("div",{ref_key:"noticeBarWarpRef",ref:o,class:"notice-bar-warp-text-box"},[e.scrollable?(s(),n("div",R,[c(r.$slots,"default",{},void 0,!0)])):(s(),n("div",{key:1,ref_key:"noticeBarTextRef",ref:i,class:T([a.flag?"one":"two","notice-bar-warp-text"])},N(e.text),3))],512),r.$slots.rightIcon?(s(),n("div",E,[c(r.$slots,"rightIcon",{},void 0,!0)])):_("",!0)],4)],36))}}));const D=V(q,[["__scopeId","data-v-88e40c80"]]),L=l("strong",null,"通告栏",-1),ne=d({__name:"noticeBar",setup(e){return(t,o)=>{const i=$;return s(),C(i,{shadow:"hover"},{header:v(()=>[L]),default:v(()=>[I(D,{text:"已删除非当前页 tagsView 演示，后续有时间可以再加回来！，tagsview 支持多标签（参数不同）、单标签共用（参数不同）"})]),_:1})}}});export{ne as default};
