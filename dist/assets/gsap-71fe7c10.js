var $=Object.defineProperty,L=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(a,o,e)=>o in a?$(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,v=(a,o)=>{for(var e in o||(o={}))A.call(o,e)&&b(a,e,o[e]);if(g)for(var e of g(o))F.call(o,e)&&b(a,e,o[e]);return a},y=(a,o)=>L(a,j(o));import{c as H,H as T,A as D,I as G,B as P}from"./element-plus-3c3e7816.js";import{_ as Q}from"./index.vue_vue_type_script_name_svgIcon_setup_true_lang-925113c7.js";import{F as z,s as w,o as u,$ as W,a0 as r,a as t,a2 as c,ac as k,c as x,ab as Z,Q as q,a6 as J,u as C,p as K,Z as M,b7 as U,b6 as ee,a5 as te,a4 as oe}from"./@vue-0bd7c233.js";import{g as i}from"./gsap-063c4a49.js";import{r as ae}from"./theme-c2d6d45d.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b3c2dc13.js";import"./@element-plus-9f43ecf9.js";import"./dayjs-604b50be.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-171b62d6.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const S=a=>(U("data-v-213d025d"),a=a(),ee(),a),re={class:"flex justify-between"},le=S(()=>t("strong",null,"gsap动画库",-1)),ce={class:"main"},ne=["onClick"],ie={key:0,class:"fixed top-0 left-0 w-screen h-screen bg-amber-100 z-10"},de=S(()=>t("div",{class:"flex justify-center"},[t("svg",{id:"scooter",height:"512",viewBox:"0 0 512.004 512.004",width:"512",xmlns:"http://www.w3.org/2000/svg"},[t("path",{id:"footer-block",d:"m175.669 463.803c-8.283 0-15-6.716-15-15 0-53.743-43.723-97.467-97.467-97.467-14.622 0-28.673 3.153-41.762 9.371-7.483 3.555-16.432.371-19.986-7.112-3.555-7.482-.37-16.431 7.113-19.985 17.143-8.143 35.525-12.273 54.635-12.273 70.286 0 127.467 57.182 127.467 127.467 0 8.283-6.714 14.999-15 14.999z",fill:"#c5e1e6"}),t("path",{id:"footboard2",d:"m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-210.801c-8.285 0-15 6.716-15 15s6.715 15 15 15h224.932c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z",fill:"#008adf"}),t("path",{id:"footboard1",d:"m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-66.204v30h80.335c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z",fill:"#0065a3"}),t("path",{id:"scooter-head",d:"m448.787 415.604c-7.721 0-14.279-5.923-14.932-13.755l-28.796-345.572c-1.291-15.484-11.852-26.275-20.521-26.275-8.283 0-15-6.716-15-15s6.717-15 15-15c12.9 0 25.295 5.971 34.9 16.811 8.852 9.99 14.361 23.12 15.518 36.972l28.797 345.573c.688 8.256-5.447 15.506-13.703 16.194-.425.035-.847.052-1.263.052z",fill:"#8db9c4"}),t("circle",{id:"wheel4",cx:"63.203",cy:"448.803",fill:"#c5e1e6",r:"48.2"}),t("path",{id:"wheel3",d:"m63.203 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.306 0-33.199 14.893-33.199 33.199 0 18.307 14.894 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z",fill:"#1d4659"}),t("circle",{id:"wheel2",cx:"448.803",cy:"448.803",fill:"#8db9c4",r:"48.2"}),t("g",{fill:"#0e232c"},[t("path",{id:"wheel1",d:"m448.803 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.307 0-33.199 14.893-33.199 33.199 0 18.307 14.893 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z"}),t("path",{id:"head-block",d:"m352.402.002c-8.283 0-15 6.716-15 15s6.717 15 15 15h32.135v-30h-32.135z"})])])],-1)),me=z({name:"gsap"}),pe=z(y(v({},me),{setup(a){const o=w();let e=w(!1),d,m;const B=s=>{e.value=!0;const l=o.value[s],{x:p,y:_,width:n,height:f}=l.getBoundingClientRect();d=n/2+p,m=f/2+_},E=s=>{i.set(s,{scaleX:0,scaleY:0,transformOrigin:"0 0",translateX:d,translateY:m,opacity:0})},X=(s,l)=>{i.to(s,{duration:.3,scaleX:1,scaleY:1,opacity:1,translateX:0,translateY:0,onComplete:l})},Y=(s,l)=>{i.to(s,{duration:.6,scaleX:0,scaleY:0,x:d,y:m,opacity:0})},I=i.timeline({repeat:2,yoyo:!0}),O=()=>{I.from(["#wheel1","#wheel2","#wheel3","#wheel4"],{scaleY:0,scaleX:0,transformOrigin:"center",duration:1,ease:"bounce.out",stagger:.2}).from(["#footboard1","#footboard2"],{scaleX:0,transformOrigin:"left",duration:1,ease:"bounce.out",stagger:0}).from("#scooter-head",{scaleY:0,transformOrigin:"bottom",duration:1,ease:"bounce.out",stagger:0}).from(["#head-block","#footer-block"],{scaleX:0,transformOrigin:"right",duration:1,ease:"bounce.out",stagger:0})};return(s,l)=>{const p=H,_=Q,n=T,f=D,R=G,N=P;return u(),W(N,{shadow:"hover"},{header:r(()=>[t("nav",re,[le,c(p,{href:"https://github.com/greensock/GSAP",target:"_blank",type:"primary"},{default:r(()=>[k("gsap")]),_:1})])]),default:r(()=>[c(R,{"model-value":"2"},{default:r(()=>[c(n,{name:"1",title:"动画弹层"},{default:r(()=>[t("main",ce,[(u(),x(q,null,Z(12,(h,V)=>t("div",{key:h,ref_for:!0,ref_key:"boxRef",ref:o,style:te({background:C(ae)()}),class:"box",onClick:_e=>B(V)},oe(h),13,ne)),64))]),c(J,{css:!1,onEnter:X,onLeave:Y,onBeforeEnter:E},{default:r(()=>[C(e)?(u(),x("div",ie,[c(_,{class:"absolute top-5 right-1",name:"close",onClick:l[0]||(l[0]=h=>K(e)?e.value=!1:e=!1)})])):M("",!0)]),_:1})]),_:1}),c(n,{name:"2",title:"动画时间线"},{default:r(()=>[de,c(f,{type:"primary",onClick:O},{default:r(()=>[k("开始动画")]),_:1})]),_:1})]),_:1})]),_:1})}}}));const Ve=se(pe,[["__scopeId","data-v-213d025d"]]);export{Ve as default};
