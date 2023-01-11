import{n as e,ej as t,a as n,x as o,B as a,w as i,W as l,f as r,ay as s,eD as c,aJ as p,eE as u,aT as d,_ as f,aE as v,az as y,eF as m,aB as g,aH as b,aR as h,aa as x,Z as C,aA as O,eG as w,eH as S,eI as j,af as T,eJ as k,aZ as P,O as N,as as E,eK as B,eL as D,eM as z,r as A,dA as I,bj as R,b as M,s as _,bv as H,k as L,ab as G,o as K,j as F,H as V,h as U,am as $,i as q,ae as W,K as X,t as J,l as Z,q as Y,cr as Q,cY as ee,dd as te,S as ne}from"./index-c5a6c875.js";import{L as oe}from"./index-bff5b0dc.js";const ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){le(e,t,n[t])}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(n,o){var a=ie({},n,o.attrs);return e(t,ie({},a,{icon:ae}),null)};re.displayName="EnterOutlined",re.inheritAttrs=!1;const se=re;const ce=n({name:"Editable",props:{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String},setup:function(t,n){var u=n.emit,d=n.slots,f=o({current:t.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});a((function(){return t.value}),(function(e){f.current=e}));var v=i();function y(e){v.value=e}function m(e){var t=e.target.value;f.current=t.replace(/[\r\n]/g,""),u("change",f.current)}function g(){f.inComposition=!0}function b(){f.inComposition=!1}function h(e){var t=e.keyCode;t===p.ENTER&&e.preventDefault(),f.inComposition||(f.lastKeyCode=t)}function x(e){var n=e.keyCode,o=e.ctrlKey,a=e.altKey,i=e.metaKey,l=e.shiftKey;f.lastKeyCode!==n||f.inComposition||o||a||i||l||(n===p.ENTER?(O(),u("end")):n===p.ESC&&(f.current=t.originContent,u("cancel")))}function C(){O()}function O(){u("save",f.current.trim())}l((function(){var e;if(v.value){var t=null===(e=v.value)||void 0===e?void 0:e.resizableTextArea,n=null==t?void 0:t.textArea;n.focus();var o=n.value.length;n.setSelectionRange(o,o)}}));var w=r((function(){var e;return s(e={},"".concat(t.prefixCls),!0),s(e,"".concat(t.prefixCls,"-edit-content"),!0),s(e,"".concat(t.prefixCls,"-rtl"),"rtl"===t.direction),e}));return function(){return e("div",{class:w.value},[e(c,{ref:y,maxlength:t.maxlength,value:f.current,onChange:m,onKeydown:h,onKeyup:x,onCompositionstart:g,onCompositionend:b,onBlur:C,rows:1,autoSize:void 0===t.autoSize||t.autoSize},null),d.enterIcon?d.enterIcon({className:"".concat(t.prefixCls,"-edit-content-confirm")}):e(se,{class:"".concat(t.prefixCls,"-edit-content-confirm")},null)])}}});var pe,ue={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function de(e,t){e.setAttribute("aria-hidden","true");var n,o=window.getComputedStyle(t),a=(n=o,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",a),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}const fe=function(t,n,o,a,i){pe||((pe=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(pe));var l=n.rows,r=n.suffix,s=void 0===r?"":r,c=function(e){var t=document.createElement("div");de(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}(t),p=Math.round(c*l*100)/100;de(pe,t);var d=u({render:function(){return e("div",{style:ue},[e("span",{style:ue},[o,s]),e("span",{style:ue},[a])])}});function f(){return Math.round(100*pe.getBoundingClientRect().height)/100-.1<=p}if(d.mount(pe),f())return d.unmount(),{content:o,text:pe.innerHTML,ellipsis:!1};var v=Array.prototype.slice.apply(pe.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){var t=e.nodeType,n=e.data;return 8!==t&&""!==n})),y=Array.prototype.slice.apply(pe.childNodes[0].childNodes[1].cloneNode(!0).childNodes);d.unmount();var m=[];pe.innerHTML="";var g=document.createElement("span");pe.appendChild(g);var b=document.createTextNode(i+s);function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Math.floor((n+o)/2),l=t.slice(0,i);if(e.textContent=l,n>=o-1)for(var r=o;r>=n;r-=1){var s=t.slice(0,r);if(e.textContent=s,f()||!s)return r===t.length?{finished:!1,vNode:t}:{finished:!0,vNode:s}}return f()?h(e,t,i,o,i):h(e,t,n,i,a)}function x(e){var t;if(3===e.nodeType){var n=e.textContent||"",o=document.createTextNode(n);return t=o,g.insertBefore(t,b),h(o,n)}return{finished:!1,vNode:null}}return g.appendChild(b),y.forEach((function(e){pe.appendChild(e)})),v.some((function(e){var t=x(e),n=t.finished,o=t.vNode;return o&&m.push(o),n})),{content:m,text:pe.innerHTML,ellipsis:!0}};var ve=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const ye=n({name:"ATypography",inheritAttrs:!1,props:{prefixCls:String,direction:String,component:String},setup:function(t,n){var o=n.slots,a=n.attrs,i=d("typography",t),l=i.prefixCls,r=i.direction;return function(){var n,i=f(f({},t),a);i.prefixCls,i.class,i.direction;var c=i.component,p=void 0===c?"article":c,u=ve(i,["prefixCls","class","direction","component"]);return e(p,v({class:y(l.value,s({},"".concat(l.value,"-rtl"),"rtl"===r.value),a.class)},u),{default:function(){return[null===(n=o.default)||void 0===n?void 0:n.call(o)]}})}}});const me=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}};var ge={"text/plain":"Text","text/html":"Url",default:"Text"};function be(e,t){var n,o,a,i,l,r=!1;t||(t={});t.debug;try{if(o=me(),a=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){window.clipboardData.clearData();var o=ge[t.format]||ge.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),i.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");r=!0}catch(s){try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),r=!0}catch(c){n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(a):i.removeAllRanges()),l&&document.body.removeChild(l),o()}return r}const he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Ce(e,t,n[t])}))}return e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oe=function(n,o){var a=xe({},n,o.attrs);return e(t,xe({},a,{icon:he}),null)};Oe.displayName="CopyOutlined",Oe.inheritAttrs=!1;const we=Oe;const Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Te(e,t,n[t])}))}return e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ke=function(n,o){var a=je({},n,o.attrs);return e(t,je({},a,{icon:Se}),null)};ke.displayName="EditOutlined",ke.inheritAttrs=!1;const Pe=ke;var Ne=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Ee=m("webkitLineClamp"),Be=m("textOverflow"),De=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}};const ze=n({name:"Base",inheritAttrs:!1,props:De(),setup:function(t,n){var c=n.slots,p=n.attrs,u=n.emit,y=d("typography",t),m=y.prefixCls,z=y.direction,A=o({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),I=i(),R=i(),M=r((function(){var e=t.ellipsis;return e?f({rows:1,expandable:!1},"object"===g(e)?e:null):{}}));function _(e){var t=M.value.onExpand;A.expanded=!0,null==t||t(e)}function H(e){e.preventDefault(),A.originContent=t.content,X(!0)}function L(e){G(e),X(!1)}function G(e){var n=V.value.onChange;e!==t.content&&(u("update:content",e),null==n||n(e))}function K(){var e,t;null===(t=(e=V.value).onCancel)||void 0===t||t.call(e),X(!1)}function F(e){e.preventDefault();var n,o,a=t.copyable,i=f({},"object"===g(a)?a:null);void 0===i.text&&(i.text=t.ellipsis||t.editable?t.content:null===(o=null===(n=I.value)||void 0===n?void 0:n.$el)||void 0===o?void 0:o.innerText),be(i.text||""),A.copied=!0,x((function(){i.onCopy&&i.onCopy(),A.copyId=setTimeout((function(){A.copied=!1}),3e3)}))}l((function(){A.clientRendered=!0})),b((function(){clearTimeout(A.copyId),h.cancel(A.rafId)})),a([function(){return M.value.rows},function(){return t.content}],(function(){x((function(){J()}))}),{flush:"post",deep:!0,immediate:!0}),C((function(){void 0===t.content&&(O(!t.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),O(!t.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))}));var V=r((function(){var e=t.editable;return e?f({},"object"===g(e)?e:null):{editing:!1}})),U=w(!1,{value:r((function(){return V.value.editing}))}),$=S(U,2),q=$[0],W=$[1];function X(e){var t=V.value.onStart;e&&t&&t(),W(e)}function J(){h.cancel(A.rafId),A.rafId=h((function(){Y()}))}a(q,(function(e){var t;e||null===(t=R.value)||void 0===t||t.focus()}),{flush:"post"});var Z=r((function(){var e=M.value,n=e.rows,o=e.expandable,a=e.suffix,i=e.onEllipsis,l=e.tooltip;return!a&&!l&&(!(t.editable||t.copyable||o||i)&&(1===n?Be:Ee))})),Y=function(){var e,n,o=A.ellipsisText,a=A.isEllipsis,i=M.value,l=i.rows,r=i.suffix,s=i.onEllipsis;if(l&&!(l<0)&&(null===(e=I.value)||void 0===e?void 0:e.$el)&&!A.expanded&&void 0!==t.content&&!Z.value){var c=fe(null===(n=I.value)||void 0===n?void 0:n.$el,{rows:l,suffix:r},t.content,ne(!0),"..."),p=c.content,u=c.text,d=c.ellipsis;o===u&&A.isEllipsis===d||(A.ellipsisText=u,A.ellipsisContent=p,A.isEllipsis=d,a!==d&&s&&s(d))}};function Q(t){var n=M.value,o=n.expandable,a=n.symbol;if(!o)return null;if(!t&&(A.expanded||!A.isEllipsis))return null;var i=(c.ellipsisSymbol?c.ellipsisSymbol():a)||A.expandStr;return e("a",{key:"expand",class:"".concat(m.value,"-expand"),onClick:_,"aria-label":A.expandStr},[i])}function ee(){if(t.editable){var n=t.editable,o=n.tooltip,a=n.triggerType,i=void 0===a?["icon"]:a,l=c.editableIcon?c.editableIcon():e(Pe,{role:"button"},null),r=c.editableTooltip?c.editableTooltip():A.editStr,s="string"==typeof r?r:"";return-1!==i.indexOf("icon")?e(T,{key:"edit",title:!1===o?"":r},{default:function(){return[e(j,{ref:R,class:"".concat(m.value,"-edit"),onClick:H,"aria-label":s},{default:function(){return[l]}})]}}):null}}function te(){if(t.copyable){var n=t.copyable.tooltip,o=A.copied?A.copiedStr:A.copyStr,a=c.copyableTooltip?c.copyableTooltip({copied:A.copied}):o,i="string"==typeof a?a:"",l=A.copied?e(k,null,null):e(we,null,null),r=c.copyableIcon?c.copyableIcon({copied:!!A.copied}):l;return e(T,{key:"copy",title:!1===n?"":a},{default:function(){return[e(j,{class:["".concat(m.value,"-copy"),s({},"".concat(m.value,"-copy-success"),A.copied)],onClick:F,"aria-label":i},{default:function(){return[r]}})]}})}}function ne(e){return[Q(e),ee(),te()].filter((function(e){return e}))}return function(){var n,o,a,i,l,r,u,d=V.value.triggerType,y=void 0===d?["icon"]:d,g=t.ellipsis||t.editable?void 0!==t.content?t.content:null===(n=c.default)||void 0===n?void 0:n.call(c):c.default?c.default():t.content;return q.value?(o=p.class,a=p.style,i=V.value,l=i.maxlength,r=i.autoSize,u=i.onEnd,e(ce,{class:o,style:a,prefixCls:m.value,value:t.content,originContent:A.originContent,maxlength:l,autoSize:r,onSave:L,onChange:G,onCancel:K,onEnd:u,direction:z.value},{enterIcon:c.editableEnterIcon})):e(D,{componentName:"Text",children:function(n){var o,a=f(f({},t),p),i=a.type,l=a.disabled;a.content;var r=a.class,u=a.style,d=Ne(a,["type","disabled","content","class","style"]),b=M.value,h=b.rows,x=b.suffix,C=b.tooltip,O=n.edit,w=n.copy,S=n.copied,j=n.expand;A.editStr=O,A.copyStr=w,A.copiedStr=S,A.expandStr=j;var k=P(d,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),D=Z.value,R=1===h&&D,_=h&&h>1&&D,L=g;if(h&&A.isEllipsis&&!A.expanded&&!D){var G=d.title,K=G||"";G||"string"!=typeof g&&"number"!=typeof g||(K=String(g)),K=null==K?void 0:K.slice(String(A.ellipsisContent||"").length),L=e(N,null,[E(A.ellipsisContent),e("span",{title:K,"aria-hidden":"true"},["..."]),x])}else L=e(N,null,[g,x]);L=function(t,n){var o=t.mark,a=t.code,i=t.underline,l=t.delete,r=t.strong,s=t.keyboard,c=n;function p(t,n){if(t){var o=c;c=e(n,null,{default:function(){return[o]}})}}return p(r,"strong"),p(i,"u"),p(l,"del"),p(a,"code"),p(o,"mark"),p(s,"kbd"),c}(t,L);var F=C&&h&&A.isEllipsis&&!A.expanded&&!D,V=c.ellipsisTooltip?c.ellipsisTooltip():C;return e(B,{onResize:J,disabled:!h},{default:function(){return[e(ye,v({ref:I,class:[(o={},s(o,"".concat(m.value,"-").concat(i),i),s(o,"".concat(m.value,"-disabled"),l),s(o,"".concat(m.value,"-ellipsis"),h),s(o,"".concat(m.value,"-single-line"),1===h&&!A.isEllipsis),s(o,"".concat(m.value,"-ellipsis-single-line"),R),s(o,"".concat(m.value,"-ellipsis-multiple-line"),_),o),r],style:f(f({},u),{WebkitLineClamp:_?h:void 0}),"aria-label":undefined,direction:z.value,onClick:-1!==y.indexOf("text")?H:function(){}},k),{default:function(){return[F?e(T,{title:!0===C?g:V},{default:function(){return[e("span",null,[L])]}}):L,ne()]}})]}})}},null)}}});var Ae=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Ie=function(t,n){var o=n.slots,a=n.attrs,i=f(f({},t),a),l=i.ellipsis,r=i.rel,s=Ae(i,["ellipsis","rel"]);O("object"!==g(l),"Typography.Link","`ellipsis` only supports boolean value.");var c=f(f({},s),{rel:void 0===r&&"_blank"===s.target?"noopener noreferrer":r,ellipsis:!!l,component:"a"});return delete c.navigate,e(ze,c,o)};Ie.displayName="ATypographyLink",Ie.inheritAttrs=!1,Ie.props=P(f(f({},De()),{ellipsis:{type:Boolean,default:void 0}}),["component"]);const Re=Ie;var Me=function(t,n){var o=n.slots,a=n.attrs,i=f(f(f({},t),{component:"div"}),a);return e(ze,i,o)};Me.displayName="ATypographyParagraph",Me.inheritAttrs=!1,Me.props=P(De(),["component"]);const _e=Me;var He=function(t,n){var o=n.slots,a=n.attrs,i=t.ellipsis;O("object"!==g(i)||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var l=f(f(f({},t),{ellipsis:i&&"object"===g(i)?P(i,["expandable","rows"]):i,component:"span"}),a);return e(ze,l,o)};He.displayName="ATypographyText",He.inheritAttrs=!1,He.props=f(f({},P(De(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}});const Le=He;var Ge=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Ke=z(1,2,3,4,5),Fe=function(t,n){var o,a=n.slots,i=n.attrs,l=t.level,r=void 0===l?1:l,s=Ge(t,["level"]);-1!==Ke.indexOf(r)?o="h".concat(r):(O(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),o="h1");var c=f(f(f({},s),{component:o}),i);return e(ze,c,a)};Fe.displayName="ATypographyTitle",Fe.inheritAttrs=!1,Fe.props=f(f({},P(De(),["component","strong"])),{level:Number});const Ve=Fe;ye.Text=Le,ye.Title=Ve,ye.Paragraph=_e,ye.Link=Re,ye.Base=ze,ye.install=function(e){return e.component(ye.name,ye),e.component(ye.Text.displayName,Le),e.component(ye.Title.displayName,Ve),e.component(ye.Paragraph.displayName,_e),e.component(ye.Link.displayName,Re),e};const Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){qe(e,t,n[t])}))}return e}function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var We=function(t,n){var o=$e({},t,n.attrs);return e(A,$e({},o,{icon:Ue}),null)};We.displayName="BellOutlined",We.inheritAttrs=!1;const Xe=We,Je=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}],Ze=n({components:{[I.name]:I,[oe.name]:oe,[oe.Item.name]:oe.Item,AListItemMeta:oe.Item.Meta,ATypographyParagraph:ye.Paragraph,[R.name]:R},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(e,{emit:t}){const{prefixCls:n}=M("header-notify-list"),o=i(e.currentPage||1),l=r((()=>{const{pageSize:t,list:n}=e;if(!1===t)return[];let a=H(t)?t:5;return n.slice(a*(L(o)-1),a*L(o))}));a((()=>e.currentPage),(e=>{o.value=e}));const s=r((()=>!!e.onTitleClick));return{prefixCls:n,getPagination:r((()=>{const{list:n,pageSize:a}=e;return!!(a>0&&n&&n.length>a)&&{total:n.length,pageSize:a,current:L(o),onChange(e){o.value=e,t("update:currentPage",e)}}})),getData:l,handleTitleClick:function(t){e.onTitleClick&&e.onTitleClick(t)},isTitleClickable:s}}}),Ye={class:"title"},Qe={key:0,class:"extra"},et={key:1},tt={key:0,class:"description"},nt={class:"datetime"};const ot=_(Ze,[["render",function(t,n,o,a,i,l){const r=G("a-typography-paragraph"),s=G("a-tag"),c=G("a-avatar"),p=G("a-list-item-meta"),u=G("a-list-item"),d=G("a-list");return K(),F(d,{class:Y(t.prefixCls),bordered:"",pagination:t.getPagination},{default:V((()=>[(K(!0),U(N,null,$(t.getData,(n=>(K(),F(u,{key:n.id,class:"list-item"},{default:V((()=>[e(p,null,{title:V((()=>[q("div",Ye,[e(r,{onClick:e=>t.handleTitleClick(n),style:W([{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}]),delete:!!n.titleDelete,ellipsis:!!(t.$props.titleRows&&t.$props.titleRows>0)&&{rows:t.$props.titleRows,tooltip:!!n.title},content:n.title},null,8,["onClick","style","delete","ellipsis","content"]),n.extra?(K(),U("div",Qe,[e(s,{class:"tag",color:n.color},{default:V((()=>[X(J(n.extra),1)])),_:2},1032,["color"])])):Z("",!0)])])),avatar:V((()=>[n.avatar?(K(),F(c,{key:0,class:"avatar",src:n.avatar},null,8,["src"])):(K(),U("span",et,J(n.avatar),1))])),description:V((()=>[q("div",null,[n.description?(K(),U("div",tt,[e(r,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:!!(t.$props.descRows&&t.$props.descRows>0)&&{rows:t.$props.descRows,tooltip:!!n.description},content:n.description},null,8,["ellipsis","content"])])):Z("",!0),q("div",nt,J(n.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class","pagination"])}],["__scopeId","data-v-737c3776"]]),at=n({components:{Popover:Q,BellOutlined:Xe,Tabs:ee,TabPane:ee.TabPane,Badge:te,NoticeList:ot},setup(){const{prefixCls:e}=M("header-notify"),{createMessage:t}=ne();return{prefixCls:e,listData:i(Je),count:r((()=>{let e=0;for(let t=0;t<Je.length;t++)e+=Je[t].list.length;return e})),onNoticeClick:function(e){t.success("你点击了通知，ID="+e.id),e.titleDelete=!e.titleDelete},numberStyle:{}}}}),it={key:0};const lt=_(at,[["render",function(t,n,o,a,i,l){const r=G("BellOutlined"),s=G("Badge"),c=G("NoticeList"),p=G("TabPane"),u=G("Tabs"),d=G("Popover");return K(),U("div",{class:Y(t.prefixCls)},[e(d,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:V((()=>[e(u,null,{default:V((()=>[(K(!0),U(N,null,$(t.listData,(e=>(K(),F(p,{key:e.key},{tab:V((()=>[X(J(e.name)+" ",1),0!==e.list.length?(K(),U("span",it,"("+J(e.list.length)+")",1)):Z("",!0)])),default:V((()=>["1"===e.key?(K(),F(c,{key:0,list:e.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(K(),F(c,{key:1,list:e.list},null,8,["list"]))])),_:2},1024)))),128))])),_:1})])),default:V((()=>[e(s,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:V((()=>[e(r)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)}]]);export{lt as default};
