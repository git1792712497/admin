var E=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var _=(i,e,t)=>e in i?E(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,y=(i,e)=>{for(var t in e||(e={}))L.call(e,t)&&_(i,t,e[t]);if(w)for(var t of w(e))z.call(e,t)&&_(i,t,e[t]);return i},k=(i,e)=>C(i,I(e));import{A as M,B as S}from"./element-plus-60237716.js";import{g as v,o as B,ab as N,ac as p,X as l,c as m}from"./@vue-f164b9f1.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";function T(i={}){const e=document,t=`__${Math.random().toString(36).slice(2,7)}`,o={box:`msg-box${t}`,hide:`hide${t}`,text:`msg-text${t}`,icon:`msg-icon${t}`},x=e.createElement("style");x.textContent=`
  .${o.box}, .${o.icon}, .${o.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${o.box} {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: ${o.box}-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .${o.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${o.box}-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .${o.box}.${o.hide} {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .${o.icon} {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${o.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${o.icon}::after,
  .${o.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${o.box}.info .${o.icon}, .${o.box}.info::after {
    background-color: #1890ff;
  }
  .${o.box}.success .${o.icon}, .${o.box}.success::after {
    background-color: #52c41a;
  }
  .${o.box}.warning .${o.icon}, .${o.box}.warning::after {
    background-color: #faad14;
  }
  .${o.box}.error .${o.icon}, .${o.box}.error::after {
    background-color: #ff4d4f;
  }
  .${o.box}.info .${o.icon}::after,
  .${o.box}.warning .${o.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${o.box}.info .${o.icon}::before,
  .${o.box}.warning .${o.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${o.box}.error .${o.icon}::after, 
  .${o.box}.error .${o.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${o.box}.error .${o.icon}::after {
    transform: rotate(-45deg);
  }
  .${o.box}.error .${o.icon}::before {
    transform: rotate(45deg);
  }
  .${o.box}.success .${o.icon}::after {
    box-sizing: content-box;
    background-color: transparent;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 50%;
    left: 35%;
    top: 13%;
    transform: rotate(45deg);
    width: 20%;
    transform-origin: center;
  }
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),e.head.appendChild(x);let g=i.zIndex||1e3;const s=[];function c(r){let a=50;for(let d=0;d<s.length;d++){const n=s[d];if(r&&r===n)break;a+=n.clientHeight+20}return a}function $(r){for(let a=0;a<s.length;a++)if(s[a]===r){s.splice(a,1);break}r.classList.add(o.hide),s.forEach(function(a){a.style.top=`${c(a)}px`})}function f(r,a="info",d){const n=e.createElement("div");n.className=`${o.box} ${a}`,n.style.top=`${c()}px`,n.style.zIndex=g.toString(),n.innerHTML=`
    <span class="${o.icon}"></span>
    <span class="${o.text}">${r}</span>
    `,g++,s.push(n),e.body.appendChild(n);function u(){n.removeEventListener("animationend",u),setTimeout($,d||i.duration||3e3,n)}n.addEventListener("animationend",u);function h(){getComputedStyle(n).opacity==="0"&&(n.removeEventListener("transitionend",h),n.remove())}n.addEventListener("transitionend",h)}return{show:f,info(r){f(r,"info")},success(r){f(r,"success")},warning(r){f(r,"warning")},error(r){f(r,"error")}}}const b=T({duration:2e3}),H=v({name:"message"}),Z=v(k(y({},H),{setup(i){const e=()=>{b.success("success")},t=()=>{b.info("info")},o=()=>{b.warning("warning")},x=()=>{b.error("error")};return(g,s)=>{const c=M,$=S;return B(),N($,{shadow:"hover",style:{height:"100%"},"body-style":{height:"100%"}},{header:p(()=>[l("消息提示hooks")]),default:p(()=>[m(c,{type:"success",onClick:e},{default:p(()=>[l("Success")]),_:1}),m(c,{type:"info",onClick:t},{default:p(()=>[l("Info")]),_:1}),m(c,{type:"warning",onClick:o},{default:p(()=>[l("Warning")]),_:1}),m(c,{type:"danger",onClick:x},{default:p(()=>[l("error")]),_:1})]),_:1})}}}));export{Z as default};
