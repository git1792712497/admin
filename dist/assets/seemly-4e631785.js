const l={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},a="^\\s*",x="\\s*$",u="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",c="([0-9A-Fa-f])",f="([0-9A-Fa-f]{2})",w=new RegExp(`${a}rgb\\s*\\(${u},${u},${u}\\)${x}`),A=new RegExp(`${a}rgba\\s*\\(${u},${u},${u},${u}\\)${x}`),m=new RegExp(`${a}#${c}${c}${c}${x}`),b=new RegExp(`${a}#${f}${f}${f}${x}`),E=new RegExp(`${a}#${c}${c}${c}${c}${x}`),y=new RegExp(`${a}#${f}${f}${f}${f}${x}`);function $(n){return parseInt(n,16)}function g(n){try{let e;if(e=b.exec(n))return[$(e[1]),$(e[2]),$(e[3]),1];if(e=w.exec(n))return[r(e[1]),r(e[5]),r(e[9]),1];if(e=A.exec(n))return[r(e[1]),r(e[5]),r(e[9]),o(e[13])];if(e=m.exec(n))return[$(e[1]+e[1]),$(e[2]+e[2]),$(e[3]+e[3]),1];if(e=y.exec(n))return[$(e[1]),$(e[2]),$(e[3]),o($(e[4])/255)];if(e=E.exec(n))return[$(e[1]+e[1]),$(e[2]+e[2]),$(e[3]+e[3]),o($(e[4]+e[4])/255)];if(n in l)return g(l[n]);throw new Error(`[seemly/rgba]: Invalid color value ${n}.`)}catch(e){throw e}}function C(n){return n>1?1:n<0?0:n}function d(n,e,s,t){return`rgba(${r(n)}, ${r(e)}, ${r(s)}, ${C(t)})`}function h(n,e,s,t,i){return r((n*e*(1-t)+s*t)/i)}function I(n,e){Array.isArray(n)||(n=g(n)),Array.isArray(e)||(e=g(e));const s=n[3],t=e[3],i=o(s+t-s*t);return d(h(n[0],s,e[0],t,i),h(n[1],s,e[1],t,i),h(n[2],s,e[2],t,i),i)}function M(n,e){const[s,t,i,F=1]=Array.isArray(n)?n:g(n),{lightness:p=1,alpha:R=1}=e;return H([s*p,t*p,i*p,F*R])}function o(n){const e=Math.round(Number(n)*100)/100;return e>1?1:e<0?0:e}function r(n){const e=Math.round(Number(n));return e>255?255:e<0?0:e}function H(n){const[e,s,t]=n;return 3 in n?`rgba(${r(e)}, ${r(s)}, ${r(t)}, ${o(n[3])})`:`rgba(${r(e)}, ${r(s)}, ${r(t)}, 1)`}export{I as c,g as r,M as s};
