var gt=Object.defineProperty,bt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var wt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var K=(t,e,r)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Q=(t,e)=>{for(var r in e||(e={}))wt.call(e,r)&&K(t,r,e[r]);if(Z)for(var r of Z(e))Et.call(e,r)&&K(t,r,e[r]);return t},tt=(t,e)=>bt(t,mt(e));import"./base-c9ac7f1d.js";import{E as _t}from"./el-card-3d974d2a.js";import{E as Tt}from"./el-link-9662ce78.js";import{d as at,l as jt,o as Ot,c as kt,b as M,_ as s,e as Rt,aE as St,b0 as $t,a$ as At}from"./runtime-core.esm-bundler-763b24c9.js";import{_ as It}from"./_plugin-vue_export-helper-c27b6911.js";import"./require-bb924a95.js";import"./plugin-vue_export-helper-2c43b310.js";import"./index-f2930724.js";import"./style-be20bb62.js";import"./index-e4b86012.js";import"./icon-bea742d8.js";import"./index-0fe2b22d.js";function Y(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}function xt(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||Y(t[0]))}function S(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(Y);if(Y(t))return[t];if(xt(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch(i){return[]}return[]}function V(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=w();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function Pt(t,e){for(var r=V(t),i=V(e),o=[],n=0;n<4;n++)for(var a=[r[n],r[n+4],r[n+8],r[n+12]],d=0;d<4;d++){var y=d*4,l=[i[y],i[y+1],i[y+2],i[y+3]],h=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];o[n+y]=h}return o}function qt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return V(r)}}return w()}function Lt(t){var e=Math.PI/180*t,r=w();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function Mt(t){var e=Math.PI/180*t,r=w();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function Ct(t){var e=Math.PI/180*t,r=w();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function et(t,e){var r=w();return r[0]=t,r[5]=typeof e=="number"?e:t,r}function Ft(t){var e=w();return e[12]=t,e}function Nt(t){var e=w();return e[13]=t,e}var st=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return st(e)},0)}}(),Dt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||st;var ct={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function zt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Bt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var k={success:Bt,failure:zt};function q(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function c(t,e){if(q(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,o){return e(i,o,t)});throw new TypeError("Expected either an array or object literal.")}function T(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function lt(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),o=e();try{c(S("[data-sr-id]"),function(n){var a=parseInt(n.getAttribute("data-sr-id"));r.active.push(a)})}catch(n){throw n}c(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),c(r.stale,function(n){return delete t.store.elements[n]}),c(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),c(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),c(o.stale,function(n){var a=t.store.containers[n].node;a.removeEventListener("scroll",t.delegate),a.removeEventListener("resize",t.delegate),delete t.store.containers[n]}),c(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),c(i.stale,function(n){return delete t.store.sequences[n]})}var rt=function(){var t={},e=document.documentElement.style;function r(i,o){if(o===void 0&&(o=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof o[i]=="string")return t[i]=i;if(typeof o["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function Wt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,o={},n=t.node.getAttribute("style")||"",a=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=a?a.map(function(b){return b.trim()}).join("; ")+";":"",o.generated=a.some(function(b){return b.match(/visibility\s?:\s?visible/i)})?o.computed:a.concat(["visibility: visible"]).map(function(b){return b.trim()}).join("; ")+";";var d=parseFloat(e.opacity),y=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),l={computed:d!==y?"opacity: "+d+";":"",generated:d!==y?"opacity: "+y+";":""},h=[];if(parseFloat(i.distance)){var f=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var E=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=E[0],_=E[1];switch(_){case"em":p=parseInt(e.fontSize)*g;break;case"px":p=g;break;case"%":p=f==="Y"?t.node.getBoundingClientRect().height*g/100:t.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}f==="Y"?h.push(Nt(p)):h.push(Ft(p))}i.rotate.x&&h.push(Lt(i.rotate.x)),i.rotate.y&&h.push(Mt(i.rotate.y)),i.rotate.z&&h.push(Ct(i.rotate.z)),i.scale!==1&&(i.scale===0?h.push(et(2e-4)):h.push(et(i.scale)));var v={};if(h.length){v.property=rt("transform"),v.computed={raw:e[v.property],matrix:qt(e[v.property])},h.unshift(v.computed.matrix);var pt=h.reduce(Pt);v.generated={initial:v.property+": matrix3d("+pt.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var u={};if(l.generated||v.generated.initial){u.property=rt("transition"),u.computed=e[u.property],u.fragments=[];var U=i.delay,A=i.duration,I=i.easing;l.generated&&u.fragments.push({delayed:"opacity "+A/1e3+"s "+I+" "+U/1e3+"s",instant:"opacity "+A/1e3+"s "+I+" 0s"}),v.generated.initial&&u.fragments.push({delayed:v.property+" "+A/1e3+"s "+I+" "+U/1e3+"s",instant:v.property+" "+A/1e3+"s "+I+" 0s"});var yt=u.computed&&!u.computed.match(/all 0s|none 0s/);yt&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var J=u.fragments.reduce(function(b,x,G){return b.delayed+=G===0?x.delayed:", "+x.delayed,b.instant+=G===0?x.instant:", "+x.instant,b},{delayed:"",instant:""});u.generated={delayed:u.property+": "+J.delayed+";",instant:u.property+": "+J.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:o,opacity:l,position:r,transform:v,transition:u}}function O(t,e){e.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(t.style[o.trim()]=n.join(":"))})}function H(t){var e=this,r;try{c(S(t),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=e.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),O(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[o]}})}catch(i){return T.call(this,"Clean failed.",i.message)}if(r)try{lt.call(this)}catch(i){return T.call(this,"Clean failed.",i.message)}}function Yt(){var t=this;c(this.store.elements,function(e){O(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),c(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function $(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(q(t))return c(e,function(i){c(i,function(o,n){q(o)?((!t[n]||!q(t[n]))&&(t[n]={}),$(t[n],o)):t[n]=o})}),t;throw new TypeError("Target must be an object literal.")}function L(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var X=function(){var t=0;return function(){return t++}}();function ft(){var t=this;lt.call(this),c(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),O(e.node,r.filter(function(i){return i!==""}).join(" "))}),c(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function R(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,o=t.visible&&!t.revealed,n=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||o)return Vt.call(this,t,i);if(e.reset||n)return Xt.call(this,t)}function Vt(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,O(t.node,r.filter(function(i){return i!==""}).join(" ")),ut.call(this,t,e)}function Xt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,O(t.node,e.filter(function(r){return r!==""}).join(" ")),ut.call(this,t)}function ut(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,o=t.revealed?t.config.beforeReveal:t.config.beforeReset,n=t.revealed?t.config.afterReveal:t.config.afterReset,a=0;t.callbackTimer&&(a=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),o(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&H.call(r,t.node)},i-a)}}function dt(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return R.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var o=new it(r,"visible",this.store),n=new it(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var a=r.members[o.body[0]],d=this.store.elements[a];if(d)return P.call(this,r,o.body[0],-1,e),P.call(this,r,o.body[0],1,e),R.call(this,d,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return P.call(this,r,i,-1,e),R.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return P.call(this,r,i,1,e),R.call(this,t,{reveal:!0,pristine:e})}}function Ht(t){var e=Math.abs(t);if(!isNaN(e))this.id=X(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function it(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],c(t.members,function(o,n){var a=r.elements[o];a&&a[e]&&i.body.push(n)}),this.body.length&&c(t.members,function(o,n){var a=r.elements[o];a&&!a[e]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function P(t,e,r,i){var o=this,n=["head",null,"foot"][1+r],a=t.members[e+r],d=this.store.elements[a];t.blocked[n]=!0,setTimeout(function(){t.blocked[n]=!1,d&&dt.call(o,d,i)},t.interval)}function ht(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var o=[],n,a=e.interval||ct.interval;try{a&&(n=new Ht(a));var d=S(t);if(!d.length)throw new Error("Invalid reveal target.");var y=d.reduce(function(l,h){var f={},p=h.getAttribute("data-sr-id");p?($(f,i.store.elements[p]),O(f.node,f.styles.inline.computed)):(f.id=X(),f.node=h,f.seen=!1,f.revealed=!1,f.visible=!1);var E=$({},f.config||i.defaults,e);if(!E.mobile&&L()||!E.desktop&&!L())return p&&H.call(i,f),l;var g=S(E.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(h))return l;var _;return _=Ut(g,o,i.store.containers),_===null&&(_=X(),o.push({id:_,node:g})),f.config=E,f.containerId=_,f.styles=Wt(f),n&&(f.sequence={id:n.id,index:n.members.length},n.members.push(f.id)),l.push(f),l},[]);c(y,function(l){i.store.elements[l.id]=l,l.node.setAttribute("data-sr-id",l.id)})}catch(l){return T.call(this,"Reveal failed.",l.message)}c(o,function(l){i.store.containers[l.id]={id:l.id,node:l.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ft.bind(this),0))}function Ut(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return c(e,function(o){c(o,function(n){i===null&&n.node===t&&(i=n.id)})}),i}function Jt(){var t=this;c(this.store.history,function(e){ht.call(t,e.target,e.options,!0)}),ft.call(this)}var Gt=function(t){return(t>0)-(t<0)||+t},nt=Math.sign||Gt;function ot(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,o=0,n=0,a=t.node;do isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(n+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function Zt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function Kt(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(!!e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,o={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},n={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||t.styles.position==="fixed"}}function Qt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),Dt(function(){var i=t.type==="init"||t.type==="resize";c(r.store.containers,function(o){i&&(o.geometry=ot.call(r,o,!0));var n=Zt.call(r,o);o.scroll&&(o.direction={x:nt(n.left-o.scroll.left),y:nt(n.top-o.scroll.top)}),o.scroll=n}),c(e,function(o){(i||o.geometry===void 0)&&(o.geometry=ot.call(r,o)),o.visible=Kt.call(r,o)}),c(e,function(o){o.sequence?dt.call(r,o):R.call(r,o)}),r.pristine=!1})}function te(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function ee(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var re="4.0.9",C,F,N,D,z,m,B,W;function j(t){t===void 0&&(t={});var e=typeof this=="undefined"||Object.getPrototypeOf(this)!==j.prototype;if(e)return new j(t);if(!j.isSupported())return T.call(this,"Instantiation failed.","This browser is not supported."),k.failure();var r;try{r=m?$({},m,t):$({},ct,t)}catch(o){return T.call(this,"Invalid configuration.",o.message),k.failure()}try{var i=S(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return T.call(this,o.message),k.failure()}return m=r,!m.mobile&&L()||!m.desktop&&!L()?(T.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),k.failure()):(k.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,C=C||Qt.bind(this),F=F||Yt.bind(this),N=N||ht.bind(this),D=D||H.bind(this),z=z||Jt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return C}}),Object.defineProperty(this,"destroy",{get:function(){return F}}),Object.defineProperty(this,"reveal",{get:function(){return N}}),Object.defineProperty(this,"clean",{get:function(){return D}}),Object.defineProperty(this,"sync",{get:function(){return z}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return re}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}j.isSupported=function(){return te()&&ee()};Object.defineProperty(j,"debug",{get:function(){return B||!1},set:function(t){return B=typeof t=="boolean"?t:B}});j();const vt=t=>($t("data-v-098de124"),t=t(),At(),t),ie={class:"flex justify-between"},ne=vt(()=>s("strong",null,"滚动动画",-1)),oe=vt(()=>s("main",null,[s("section",{class:"wrapper"},[s("h1",null,"Font Awesome字体图标"),s("h3",null,"Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改。"),s("div",{class:"feature-list"},[s("div",{class:"feature-item"},[s("i",{class:"fa fa-flag"}),s("h4",{class:"item-tit"},"一个字库，675个图标"),s("p",null,"仅一个Font Awesome字库，就包含了与网页相关的所有形象图标。")]),s("div",{class:"feature-item"},[s("i",{class:"fa fa-ban"}),s("h4",{class:"item-tit"},"无需依赖JavaScript"),s("p",null,"Font Awesome完全不依赖JavaScript，因此无需担心兼容性。")]),s("div",{class:"feature-item"},[s("i",{class:"fa fa-arrows-alt"}),s("h4",{class:"item-tit"},"无限缩放"),s("p",null,"无论在任何尺寸下，可缩放的矢量图形都会为您呈现出完美的图标。")]),s("div",{class:"feature-item"},[s("i",{class:"fa fa-microphone"}),s("h4",{class:"item-tit"},"如言语一般自由"),s("p",null,"Font Awesome完全免费，哪怕是商业用途。请查看许可。")]),s("div",{class:"feature-item"},[s("i",{class:"fa fa-pencil"}),s("h4",{class:"item-tit"},"CSS控制"),s("p",null,"Font Awesome的矢量图标，将使您的网站在视网膜级的高分屏上大放异彩。")]),s("div",{class:"feature-item"},[s("i",{class:"fa fa-eye"}),s("h4",{class:"item-tit"},"高分屏完美呈现"),s("p",null,"Font Awesome的矢量图标，将使您的网站在视网膜级的高分屏上大放异彩。")])])]),s("section",{class:"wrapper"},[s("h1",null,"疫情速报"),s("h3",null,"记者从西宁市新冠肺炎疫情防控处置工作指挥部获悉，10月28日0时20分，西宁市新增3名新冠肺炎病毒核酸检测阳性人员")])],-1)),ae=at({name:"scrollreveal"}),se=at(tt(Q({},ae),{setup(t){return jt(()=>{j().reveal(".feature-item",{distance:"48px",duration:2e3,interval:400})}),(e,r)=>{const i=Tt,o=_t;return Ot(),kt(o,{shadow:"hover"},{header:M(()=>[s("nav",ie,[ne,Rt(i,{href:"https://github.com/jlmakes/scrollreveal",target:"_blank",type:"primary"},{default:M(()=>[St("scrollreveal.js")]),_:1})])]),default:M(()=>[oe]),_:1})}}}));const Ee=It(se,[["__scopeId","data-v-098de124"]]);export{Ee as default};
