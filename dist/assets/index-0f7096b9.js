var A=Object.defineProperty,F=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var W=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&W(e,n,t[n]);if(w)for(var n of w(t))V.call(t,n)&&W(e,n,t[n]);return e},y=(e,t)=>F(e,H(t));import{i as b,r as j}from"./isObject-909534d5.js";import{i as P}from"./isSymbol-1fd09750.js";import{d as p,Y as U,l as X,o as M,Z as Y,r as q,as as G,c as J,b as K,b2 as Q,b1 as ee,_ as c}from"./runtime-core.esm-bundler-76eda81d.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";var te=/\s/;function ne(e){for(var t=e.length;t--&&te.test(e.charAt(t)););return t}var ie=/^\s+/;function re(e){return e&&e.slice(0,ne(e)+1).replace(ie,"")}var C=0/0,ae=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,se=/^0o[0-7]+$/i,ce=parseInt;function L(e){if(typeof e=="number")return e;if(P(e))return C;if(b(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=b(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=re(e);var n=oe.test(e);return n||se.test(e)?ce(e.slice(2),n?2:8):ae.test(e)?C:+e}var de=function(){return j.Date.now()};const I=de;var fe="Expected a function",ue=Math.max,le=Math.min;function $(e,t,n){var a,o,f,s,r,u,l=0,T=!1,m=!1,g=!0;if(typeof e!="function")throw new TypeError(fe);t=L(t)||0,b(n)&&(T=!!n.leading,m="maxWait"in n,f=m?ue(L(n.maxWait)||0,t):f,g="trailing"in n?!!n.trailing:g);function v(i){var d=a,_=o;return a=o=void 0,l=i,s=e.apply(_,d),s}function R(i){return l=i,r=setTimeout(h,t),T?v(i):s}function Z(i){var d=i-u,_=i-l,k=t-d;return m?le(k,f-_):k}function E(i){var d=i-u,_=i-l;return u===void 0||d>=t||d<0||m&&_>=f}function h(){var i=I();if(E(i))return B(i);r=setTimeout(h,Z(i))}function B(i){return r=void 0,g&&a?v(i):(a=o=void 0,s)}function z(){r!==void 0&&clearTimeout(r),l=0,a=u=o=r=void 0}function N(){return r===void 0?s:B(I())}function x(){var i=I(),d=E(i);if(a=arguments,o=this,u=i,d){if(r===void 0)return R(u);if(m)return clearTimeout(r),r=setTimeout(h,t),v(u)}return r===void 0&&(r=setTimeout(h,t)),s}return x.cancel=z,x.flush=N,x}const me=p({name:"BigScreenZoom"}),_e=p(y(S({},me),{props:{width:{default:1920},height:{default:1080},rootValue:null},setup(e){const t=e,n=U(),a=()=>{const o=document.documentElement.clientWidth,f=document.documentElement.clientHeight,s=(o/t.width).toFixed(10),r=(f/t.height).toFixed(10);n.value.style.zoom=s<r?s:r};return X(()=>{a(),window.addEventListener("resize",$(a,100),!1),document.addEventListener("DOMContentLoaded",$(a,100),!1)}),(o,f)=>(M(),Y("div",{ref_key:"zoomRef",ref:n,class:"bigScreenZoom",style:G({width:e.width+"px",height:e.height+"px"})},[q(o.$slots,"default",{},void 0,!0)],4))}}));const he=O(_e,[["__scopeId","data-v-0712736f"]]),pe=e=>(Q("data-v-036eae3f"),e=e(),ee(),e),ge=pe(()=>c("main",{class:"screen-bg"},[c("header",{class:"header"}),c("aside",{class:"left-top"}),c("aside",{class:"left-bottom"}),c("aside",{class:"right-top"}),c("div",{class:"right-center"}),c("div",{class:"right-bottom"}),c("div",{class:"center"}),c("footer",{class:"bottom"})],-1)),ve=p({name:"BigScreenZoom"}),xe=p(y(S({},ve),{setup(e){return(t,n)=>(M(),J(he,null,{default:K(()=>[ge]),_:1}))}}));const Ee=O(xe,[["__scopeId","data-v-036eae3f"]]);export{Ee as default};