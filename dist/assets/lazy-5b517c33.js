var m=(t,o,e)=>new Promise((n,i)=>{var d=r=>{try{a(e.next(r))}catch(s){i(s)}},l=r=>{try{a(e.throw(r))}catch(s){i(s)}},a=r=>r.done?n(r.value):Promise.resolve(r.value).then(d,l);a((e=e.apply(t,o)).next())});import{r as E}from"./base-c9ac7f1d.js";import{E as H}from"./el-card-3d974d2a.js";import{g as N}from"./fastMock-ad533f08.js";import{i as x,n as y,d as D,Y as k,l as A,b4 as B,o as p,c as F,b as O,bl as S,Z as b,_ as z,F as V,b3 as M,u as U}from"./runtime-core.esm-bundler-763b24c9.js";import{g as Y}from"./position-c2cea7c0.js";import{t as j}from"./error-78e43d3e.js";import{g as q}from"./scroll-6da5dc64.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./require-bb924a95.js";import"./plugin-vue_export-helper-2c43b310.js";import"./config-f3305e4c.js";import"./axios-a669db54.js";import"./index-672007b4.js";import"./runtime-dom.esm-bundler-5921b3d0.js";import"./index-f7939e7d.js";import"./index-e4b86012.js";import"./index-0fe2b22d.js";import"./index-eaab5364.js";import"./index-fb510e2d.js";import"./index-70bf8c62.js";import"./index-806b99e8.js";import"./index-3a82f8c9.js";import"./pinia-ec3784b2.js";import"./style-be20bb62.js";const u="ElInfiniteScroll",P=50,R=200,Z=0,$={delay:{type:Number,default:R},distance:{type:Number,default:Z},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},h=(t,o)=>Object.entries($).reduce((e,[n,i])=>{var d,l;const{type:a,default:r}=i,s=t.getAttribute(`infinite-scroll-${n}`);let c=(l=(d=o[s])!=null?d:s)!=null?l:r;return c=c==="false"?!1:c,c=a(c),e[n]=Number.isNaN(c)?r:c,e},{}),T=t=>{const{observer:o}=t[u];o&&(o.disconnect(),delete t[u].observer)},G=(t,o)=>{const{container:e,containerEl:n,instance:i,observer:d,lastScrollTop:l}=t[u],{disabled:a,distance:r}=h(t,i),{clientHeight:s,scrollHeight:c,scrollTop:f}=n,w=f-l;if(t[u].lastScrollTop=f,d||a||w<0)return;let _=!1;if(e===t)_=c-(s+f)<=r;else{const{clientTop:I,scrollHeight:L}=t,C=Y(t,n);_=f+s>=C+I+L-r}_&&o.call(i)};function v(t,o){const{containerEl:e,instance:n}=t[u],{disabled:i}=h(t,n);i||e.clientHeight===0||(e.scrollHeight<=e.clientHeight?o.call(n):T(t))}const J={mounted(t,o){return m(this,null,function*(){const{instance:e,value:n}=o;x(n)||j(u,"'v-infinite-scroll' binding value must be a function"),yield y();const{delay:i,immediate:d}=h(t,e),l=q(t,!0),a=l===window?document.documentElement:l,r=E.throttle(G.bind(null,t,n),i);if(!!l){if(t[u]={instance:e,container:l,containerEl:a,delay:i,cb:n,onScroll:r,lastScrollTop:a.scrollTop},d){const s=new MutationObserver(E.throttle(v.bind(null,t,n),P));t[u].observer=s,s.observe(t,{childList:!0,subtree:!0}),v(t,n)}l.addEventListener("scroll",r)}})},unmounted(t){const{container:o,onScroll:e}=t[u];o==null||o.removeEventListener("scroll",e),T(t)},updated(t){return m(this,null,function*(){t[u]||(yield y());const{containerEl:o,cb:e,observer:n}=t[u];o.clientHeight&&n&&v(t,e)})}},g=J;g.install=t=>{t.directive("InfiniteScroll",g)};const Q=g;const W={class:"waterfall","infinite-scroll-immediate":!1},X={style:{width:"100%"}},tt=["src","alt"],et=D({__name:"lazy",setup(t){let o=k([]),e=0;const n=()=>{e>=5||(e+=1,i())},i=()=>m(this,null,function*(){const d=yield N(e);o.value.push(...d)});return A(()=>i()),(d,l)=>{const a=H,r=B("lazy"),s=Q;return p(),F(a,null,{default:O(()=>[S((p(),b("div",W,[z("div",X,[(p(!0),b(V,null,M(U(o),c=>S((p(),b("img",{src:c,key:c,alt:c},null,8,tt)),[[r]])),128))])])),[[s,n]])]),_:1})}}});const Ct=K(et,[["__scopeId","data-v-cf5cd487"]]);export{Ct as default};
