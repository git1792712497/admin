import{c as o}from"./index-e961436e.js";import{f as a,g as f}from"./runtime-core.esm-bundler-76eda81d.js";import"./base-27e822c2.js";const p=t=>t===void 0,y=t=>typeof Element=="undefined"?!1:t instanceof Element,u=t=>a(t)?!Number.isNaN(Number(t)):!1,c=(t="")=>t.split(" ").filter(r=>!!r.trim()),N=(t,r)=>{if(!t||!r)return!1;if(r.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(r)},g=(t,r)=>{!t||!r.trim()||t.classList.add(...c(r))},b=(t,r)=>{!t||!r.trim()||t.classList.remove(...c(r))},h=(t,r)=>{var i;if(!o.isClient||!t||!r)return"";let s=f(r);s==="float"&&(s="cssFloat");try{const e=t.style[s];if(e)return e;const n=(i=document.defaultView)==null?void 0:i.getComputedStyle(t,"");return n?n[s]:""}catch(e){return t.style[s]}};function C(t,r="px"){if(!t)return"";if(o.isNumber(t)||u(t))return`${t}${r}`;if(a(t))return t}export{C as a,g as b,p as c,h as g,N as h,y as i,b as r};