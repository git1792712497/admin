var N=Object.defineProperty,U=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))D.call(t,o)&&E(e,o,t[o]);if(b)for(var o of b(t))O.call(t,o)&&E(e,o,t[o]);return e},y=(e,t)=>U(e,F(t));var v=(e,t,o)=>new Promise((i,a)=>{var s=n=>{try{d(o.next(n))}catch(u){a(u)}},r=n=>{try{d(o.throw(n))}catch(u){a(u)}},d=n=>n.done?i(n.value):Promise.resolve(n.value).then(s,r);d((o=o.apply(e,t)).next())});import{A as T,c as I,B as M}from"./element-plus-cbff5993.js";import{T as R,E as z}from"./@wangeditor-66cc7922.js";import{g as _,s as B,f as G,G as $,o as C,a as j,ab as V,u as m,aa as q,c as p,af as A,y as k,q as H,ac as f,b as w,X as x}from"./@vue-f164b9f1.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const L=_({name:"wangEditor"}),S=_(y(h({},L),{props:{value:null,toolbarConfig:{default:()=>({excludeKeys:[]})},editorConfig:{default:()=>({placeholder:"请输入内容...",MENU_CONF:{}})},height:{default:"500px"},mode:{default:"default"},hideToolBar:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:value","check-validate"],setup(e,{expose:t,emit:o}){const i=e,a=B(),s=l=>{a.value=l},r=G({get(){return i.value},set(l){a.value.isEmpty()&&(l=""),o("update:value",l)}});i.editorConfig.MENU_CONF.uploadImage={customUpload(l,c){return v(this,null,function*(){if(!d())return;new FormData().append("file",l)})}};const d=l=>!0;i.editorConfig.MENU_CONF.uploadVideo={customUpload(l,c){return v(this,null,function*(){if(!n())return;new FormData().append("file",l),console.log(l,"视频")})}};const n=l=>!0,u=()=>{o("check-validate")};return $(()=>{!a.value||a.value.destroy()}),t({editor:a}),(l,c)=>(C(),j("div",{class:H(["editor-box",e.disabled?"editor-disabled":""])},[e.hideToolBar?q("",!0):(C(),V(m(R),{key:0,class:"editor-toolbar",editor:m(a),defaultConfig:e.toolbarConfig,mode:e.mode},null,8,["editor","defaultConfig","mode"])),p(m(z),{style:A({height:e.height}),class:"editor-content'",modelValue:m(r),"onUpdate:modelValue":c[0]||(c[0]=g=>k(r)?r.value=g:null),defaultConfig:e.editorConfig,mode:e.mode,onOnCreated:s,onOnBlur:u},null,8,["style","modelValue","defaultConfig","mode"])],2))}}));const W=K(S,[["__scopeId","data-v-3ad7ab7f"]]),X={class:"flex justify-between"},J={style:{border:"1px solid #ccc",height:"100%"}},P=_({name:"wangEditor"}),ge=_(y(h({},P),{setup(e){const t=B(""),o=()=>{console.log(t.value)};return(i,a)=>{const s=T,r=I,d=M;return C(),V(d,{shadow:"hover",style:{height:"100%"},"body-style":{height:"100%"}},{header:f(()=>[w("nav",X,[p(s,{type:"primary",onClick:o},{default:f(()=>[x("富文本编辑器")]),_:1}),p(r,{type:"primary",target:"_blank",href:"https://www.wangeditor.com/"},{default:f(()=>[x("wangEditor官网")]),_:1})])]),default:f(()=>[w("main",J,[p(W,{value:m(t),"onUpdate:value":a[0]||(a[0]=n=>k(t)?t.value=n:null)},null,8,["value"])])]),_:1})}}}));export{ge as default};