var ee=Object.defineProperty,te=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var A=(l,t,e)=>t in l?ee(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,g=(l,t)=>{for(var e in t||(t={}))ne.call(t,e)&&A(l,e,t[e]);if(z)for(var e of z(t))ae.call(t,e)&&A(l,e,t[e]);return l},y=(l,t)=>te(l,oe(t));import{a as q,b as se,c as D,d as le,e as _e,f as N,g as ce,h as P,i as R,j as H,k as U,m as re,n as ue,o as j,p as ie,q as pe,s as de,t as me,u as fe,v as he}from"./element-plus-cbff5993.js";import{_ as ve}from"./logo-db47c297.js";import{g as p,an as O,o as s,a as m,ah as S,F as C,ab as h,ac as o,c as n,ad as I,b as f,ae as k,aa as L,X as w,u,af as be,b8 as G,b7 as K,k as Q,f as ge,Q as ye,q as X,j as $e,s as E,r as ke,P as J,S as B,V as xe,y as F,as as Ce,aU as we,aL as Se}from"./@vue-f164b9f1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{m as M,u as Ee}from"./menu-b7fe4809.js";import{g as V}from"./globalConfig-6da35374.js";import{u as W,b as Ie}from"./vue-router-bc8ea068.js";import{t as Le,s as Me}from"./index-58c9d9d2.js";import{_ as Te}from"./preload-helper-41c905a7.js";import{d as Ve}from"./@element-plus-296a610a.js";import{k as ze}from"./@vueuse-b183cf27.js";import{F as Ae}from"./fuse.js-4b516751.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";import"./pinia-b6a13eed.js";import"./vue-demi-68b8001f.js";import"./axios-226f391c.js";import"./qs-b010a38c.js";import"./side-channel-a082fe58.js";import"./get-intrinsic-5660d814.js";import"./has-symbols-8f82dcae.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-75c15918.js";import"./object-inspect-4572ba77.js";import"./nprogress-57f984c9.js";import"./lodash-es-ca3eac7d.js";import"./pinia-plugin-persistedstate-8fef1859.js";const Be={key:1},Fe=p({name:"SubItem"}),qe=p(y(g({},Fe),{props:{menuList:{type:Array,default:[]}},setup(l){return(t,e)=>{const a=q,r=O("SubItem",!0),c=se,d=D,i=le;return s(!0),m(C,null,S(l.menuList,_=>(s(),m(C,{key:_.path},[_.meta.type===1?(s(),h(c,{key:0,index:_.path},{title:o(()=>[n(a,null,{default:o(()=>[(s(),h(I(_.meta.icon)))]),_:2},1024),f("span",null,k(_.meta.title),1)]),default:o(()=>[n(r,{menuList:_.children},null,8,["menuList"])]),_:2},1032,["index"])):L("",!0),_.meta.type===2&&_.meta.hidden?(s(),h(i,{key:1,index:_.meta.isLink?"/":_.path},{default:o(()=>[n(a,null,{default:o(()=>[(s(),h(I(_.meta.icon)))]),_:2},1024),_.meta.isLink?(s(),h(d,{key:0,type:"primary",href:_.path,target:"_blank"},{default:o(()=>[f("span",null,k(_.meta.title),1)]),_:2},1032,["href"])):(s(),m("span",Be,k(_.meta.title),1))]),_:2},1032,["index"])):L("",!0)],64))),128)}}}));const De=x(qe,[["__scopeId","data-v-73f1ebf9"]]),Ne=l=>(G("data-v-3b8b9eb9"),l=l(),K(),l),Pe={class:"logo"},Re=Ne(()=>f("img",{alt:"logo",src:ve},null,-1)),He={key:0},Ue=p({name:"Menus"}),je=p(y(g({},Ue),{setup(l){const t=V(),e=M();return(a,r)=>{const c=_e,d=N;return s(),m("aside",{style:be({width:u(e).isCollapse?"65px":"220px"}),class:"menu"},[f("nav",Pe,[Re,w(),u(e).isCollapse?L("",!0):(s(),m("span",He,"Vue3"))]),n(d,null,{default:o(()=>{var i;return[n(c,{collapse:u(e).isCollapse,"default-active":(i=a.$route.meta.activePath)!=null?i:a.$route.path,"unique-opened":!0,"active-text-color":u(t).primary,"background-color":"#191a20",router:"","text-color":"#bdbdc0"},{default:o(()=>[n(De,{menuList:u(e).menuList},null,8,["menuList"])]),_:1},8,["collapse","default-active","active-text-color"])]}),_:1})],4)}}}));const Oe=x(je,[["__scopeId","data-v-3b8b9eb9"]]),Ge={key:0,class:"tabs-view"},Ke=p({name:"index"}),Qe=p(y(g({},Ke),{setup(l){const t=W(),e=Le(),a=V();Q(()=>t.path,()=>{const{meta:c,path:d}=t;c.title&&d&&e.addTabs({title:c.title,path:d})},{immediate:!0});const r=c=>e.removeTabs(c);return(c,d)=>{const i=ce,_=P;return u(a).tabs?(s(),m("nav",Ge,[n(_,null,{default:o(()=>[(s(!0),m(C,null,S(u(e).tabsViewList,(v,b)=>(s(),h(i,{key:v.path,type:c.$route.path===v.path?"":"info",closable:"",onClick:T=>c.$router.push(v.path),onClose:T=>r(b)},{default:o(()=>[w(k(v.title),1)]),_:2},1032,["type","onClick","onClose"]))),128))]),_:1})])):L("",!0)}}}));const Xe=x(Qe,[["__scopeId","data-v-decfe085"]]),Je={class:"avatar"},We=["src"],Ye={class:"username"},Ze=p({name:"Avatar"}),et=p(y(g({},Ze),{setup(l){const t=Ee(),e=Ie(),a=()=>{t.clearUser(),e.push("/login")};return(r,c)=>{const d=D,i=R,_=H,v=U;return s(),m(C,null,[n(v,{trigger:"hover"},{dropdown:o(()=>[n(_,null,{default:o(()=>[n(i,{divided:""},{default:o(()=>[n(d,{type:"primary",target:"_blank",href:"https://support.qq.com/product/442929"},{default:o(()=>[w("立即反馈")]),_:1})]),_:1}),n(i,{divided:"",onClick:a},{default:o(()=>[w("退出登录")]),_:1})]),_:1})]),default:o(()=>[f("div",Je,[f("img",{alt:"avatar",src:u(t).avatar},null,8,We)])]),_:1}),f("span",Ye,k(u(t).username),1)],64)}}}));const tt=x(et,[["__scopeId","data-v-00c0ca72"]]),ot=p({name:"CollapseIcon"}),nt=p(y(g({},ot),{setup(l){return(t,e)=>{const a=q;return s(),h(a,{class:"collapse-icon",onClick:e[0]||(e[0]=r=>u(M)().setCollapse())},{default:o(()=>[(s(),h(I(u(M)().isCollapse?"expand":"fold")))]),_:1})}}})),at=f("strong",null,"首页",-1),st=p({name:"Breadcrumb"}),lt=p(y(g({},st),{setup(l){const t=W(),e=ge(()=>t.matched.filter(a=>a.meta.title&&a.meta.title!=="首页"));return(a,r)=>{const c=re,d=ue;return s(),h(d,{"separator-icon":u(Ve)},{default:o(()=>[n(ye,{name:"el-fade-in-linear",mode:"out-in"},{default:o(()=>[n(c,{to:{path:"/home"},key:"/home"},{default:o(()=>[at]),_:1}),(s(!0),m(C,null,S(u(e),i=>(s(),h(c,{key:i.path,to:{path:i.path}},{default:o(()=>[w(k(i.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["separator-icon"])}}})),_t={class:"fullscreen"},ct=p({name:"Fullscreen"}),rt=p(y(g({},ct),{setup(l){const{isFullscreen:t,toggle:e}=ze();return(a,r)=>{const c=j;return s(),m("div",_t,[n(c,{effect:"dark",content:u(t)?"退出全屏":"全屏",placement:"bottom"},{default:o(()=>[f("i",{class:X([["iconfont",u(t)?"icon-quxiaoquanping_o":"icon-quanping_o"],"icon-style"]),onClick:r[0]||(r[0]=(...d)=>u(e)&&u(e)(...d))},null,2)]),_:1},8,["content"])])}}}));const ut=x(rt,[["__scopeId","data-v-60a5e60c"]]),it=p({name:"ComponentSize"}),pt=p(y(g({},it),{setup(l){const t=V();let e=[{value:"large",label:"大型"},{value:"default",label:"默认"},{value:"small",label:"小型"}];const a=r=>t.componentSize=e.find(c=>r===c.label).value;return(r,c)=>{const d=j,i=R,_=H,v=U;return s(),h(v,{trigger:"click",onCommand:a},{dropdown:o(()=>[n(_,null,{default:o(()=>[(s(!0),m(C,null,S(u(e),b=>(s(),h(i,{key:b.value,command:b.label,disabled:u(t).componentSize===b.value},{default:o(()=>[w(k(b.label),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:o(()=>[f("span",null,[n(d,{content:"组件大小",effect:"dark",placement:"bottom"},{default:o(()=>[f("i",{class:X(["iconfont icon-wenzidaxiao","icon-style"])})]),_:1})])]),_:1})}}}));const dt=x(pt,[["__scopeId","data-v-aabea7e7"]]);function Y(l,t=[]){let e=[];return l.forEach(a=>{const r={title:[...t],path:a.path};if(a.meta&&a.meta.title&&(r.title=[...r.title,a.meta.title],e.push(r)),a.children){const c=Y(a.children,r.title);c.length>0&&(e=[...e,...c])}}),e}const mt=l=>(G("data-v-fb0c4a6b"),l=l(),K(),l),ft={class:"header-search"},ht={class:"form"},vt=mt(()=>f("span",{class:"input-border"},null,-1)),bt=["onClick"],gt=["onClick"],yt=p({name:"Search"}),$t=p(y(g({},yt),{setup(l){const{menuStore:t}=Me();$e(()=>{e.value.addEventListener("focus",()=>{i.value.length&&(_.value=!0)}),e.value.addEventListener("blur",()=>{_.value=!1})});const e=E(),a=E("");let r=E(!1);const c=()=>{r.value=!r.value},d=new Ae(Y(t.menuList),{shouldSort:!0,threshold:.4,minMatchCharLength:1,keys:[{name:"title",weight:.7},{name:"path",weight:.3}]});let i=ke([]),_=E(!1);return Q(a,v=>{i.value=d.search(v).map(b=>b.item),console.log(d.search(v)),i.value.length?_.value=!0:_.value=!1}),(v,b)=>{const T=ie;return s(),m("nav",ft,[f("i",{class:"iconfont icon-search",onClick:c}),n(T,{visible:u(_),"onUpdate:visible":b[1]||(b[1]=$=>F(_)?_.value=$:_=$),width:200,placement:"bottom","popper-class":"popover",trigger:"contextmenu"},{reference:o(()=>[n(J,{"enter-active-class":"in","leave-active-class":"out"},{default:o(()=>[B(f("div",ht,[B(f("input",{ref_key:"searchInput",ref:e,"onUpdate:modelValue":b[0]||(b[0]=$=>F(a)?a.value=$:null),class:"input",placeholder:"菜单搜索",type:"text"},null,512),[[Ce,u(a)]]),w(),vt],512),[[xe,u(r)]])]),_:1})]),default:o(()=>[(s(!0),m(C,null,S(u(i),$=>(s(),m("div",{key:$.path,class:"hover-active"},[$.title.length>1?(s(),m("strong",{key:0,onClick:Z=>v.$router.push($.path)},k($.title[0])+" > "+k($.title.at(-1)),9,bt)):(s(),m("strong",{key:1,onClick:Z=>v.$router.push($.path)},k($.title[0]),9,gt))]))),128))]),_:1},8,["visible"])])}}}));const kt=x($t,[["__scopeId","data-v-fb0c4a6b"]]),xt={class:"header"},Ct={class:"header-left"},wt={class:"header-right"},St=p({name:"Header"}),Et=p(y(g({},St),{setup(l){const t=we(()=>Te(()=>import("./Theme-70989ec8.js"),["./Theme-70989ec8.js","./element-plus-cbff5993.js","./lodash-unified-cbbf5a2b.js","./lodash-d8f670e1.js","./@amap-9fd45ac7.js","./@sxzz-ad8bfd58.js","./@vue-f164b9f1.js","./@vueuse-b183cf27.js","./@element-plus-296a610a.js","./dayjs-f0fd0f9b.js","./async-validator-f102eabc.js","./@ctrl-43a29356.js","./escape-html-12e99df8.js","./normalize-wheel-es-c175a4cf.js","./vue-4c7ac246.js","./@floating-ui-5f39704e.js","./memoize-one-0650c7b0.js","./element-plus-f9073272.css","./useTheme-3bdcfed4.js","./globalConfig-6da35374.js","./preload-helper-41c905a7.js","./pinia-b6a13eed.js","./vue-demi-68b8001f.js","./theme-a5657130.js","./_plugin-vue_export-helper-c27b6911.js","./Theme-61a2b445.css"],import.meta.url));return(e,a)=>{const r=P;return s(),m("header",xt,[f("div",Ct,[n(nt),n(lt)]),f("div",wt,[n(r,{size:15},{default:o(()=>[n(kt),n(dt),n(ut),n(u(t))]),_:1}),n(tt)])])}}}));const It=x(Et,[["__scopeId","data-v-0877c4f8"]]),Lt=p({name:"AppMain"}),Mt=p(y(g({},Lt),{setup(l){const t=M();return(e,a)=>{const r=O("router-view"),c=N;return s(),h(c,{noresize:""},{default:o(()=>[n(r,null,{default:o(({Component:d,route:i})=>[n(J,{appear:"",mode:"out-in",name:"el-fade-in"},{default:o(()=>[(s(),h(Se,{include:u(t).keepAliveRouter},[(s(),h(I(d)))],1032,["include"]))]),_:2},1024)]),_:1})]),_:1})}}})),Tt={};function Vt(l,t){return s(),m("footer")}const zt=x(Tt,[["render",Vt]]),At=p({name:"Layout"}),Bt=p(y(g({},At),{setup(l){return(t,e)=>{const a=pe,r=de,c=me,d=fe,i=he;return s(),h(i,null,{default:o(()=>[n(a,null,{default:o(()=>[n(Oe)]),_:1}),n(i,null,{default:o(()=>[n(r,null,{default:o(()=>[n(It),n(Xe)]),_:1}),n(c,null,{default:o(()=>[n(Mt)]),_:1}),n(d,null,{default:o(()=>[n(zt)]),_:1})]),_:1})]),_:1})}}}));const ko=x(Bt,[["__scopeId","data-v-1764cc5f"]]);export{ko as default};
