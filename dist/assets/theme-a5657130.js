import{l as i}from"./element-plus-cbff5993.js";function l(t){let n="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(t))return i.ElMessage.warning("输入错误的hex");t=t.replace("#",""),n=t.match(/../g);for(let e=0;e<3;e++)n[e]=parseInt(n[e],16);return n}function a(t,n,g){let e=/^\d{1,3}$/;if(!e.test(t)||!e.test(n)||!e.test(g))return i.ElMessage.warning("输入错误的rgb颜色值");let r=[t.toString(16),n.toString(16),g.toString(16)];for(let o=0;o<3;o++)r[o].length==1&&(r[o]=`0${r[o]}`);return`#${r.join("")}`}function s(t,n){if(!/^\#?[0-9A-Fa-f]{6}$/.test(t))return i.ElMessage.warning("输入错误的hex颜色值");let e=l(t);for(let r=0;r<3;r++)e[r]=Math.floor(e[r]*(1-n));return a(e[0],e[1],e[2])}function h(t,n){if(!/^\#?[0-9A-Fa-f]{6}$/.test(t))return i.ElMessage.warning("输入错误的hex颜色值");let e=l(t);for(let r=0;r<3;r++)e[r]=Math.floor((255-e[r])*n+e[r]);return a(e[0],e[1],e[2])}function u(){let t=Math.floor(Math.random()*16777216).toString(16);for(;t.length<6;)t="0"+t;return"#"+t}export{h as a,s as g,u as r};
