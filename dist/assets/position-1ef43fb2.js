import{c as s}from"./index-e961436e.js";const l=(t,o)=>{if(!s.isClient||!t||!o)return!1;const e=t.getBoundingClientRect();let i;return o instanceof Element?i=o.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},e.top<i.bottom&&e.bottom>i.top&&e.right>i.left&&e.left<i.right},n=t=>{let o=0,e=t;for(;e;)o+=e.offsetTop,e=e.offsetParent;return o},r=(t,o)=>Math.abs(n(t)-n(o)),f=t=>{let o,e;return t.type==="touchend"?(e=t.changedTouches[0].clientY,o=t.changedTouches[0].clientX):t.type.startsWith("touch")?(e=t.touches[0].clientY,o=t.touches[0].clientX):(e=t.clientY,o=t.clientX),{clientX:o,clientY:e}};export{f as a,r as g,l as i};