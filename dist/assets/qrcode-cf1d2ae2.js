var vt=Object.defineProperty,zt=Object.defineProperties;var Vt=Object.getOwnPropertyDescriptors;var ft=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable;var dt=(e,t,o)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,gt=(e,t)=>{for(var o in t||(t={}))Ht.call(t,o)&&dt(e,o,t[o]);if(ft)for(var o of ft(t))Kt.call(t,o)&&dt(e,o,t[o]);return e},ht=(e,t)=>zt(e,Vt(t));import"./base-27e822c2.js";import{E as Jt}from"./el-card-e0fbc180.js";import{E as Yt}from"./el-image-viewer-8b1a44c6.js";import{E as $t}from"./el-link-57a2dc56.js";import{d as Ct,T as Ot,o as jt,c as Gt,b as W,_ as pt,e as mt,aG as qt,u as Qt}from"./runtime-core.esm-bundler-76eda81d.js";import"./require-bb924a95.js";import"./plugin-vue_export-helper-529fb311.js";import"./index-e961436e.js";import"./index-2ac923fb.js";import"./runtime-dom.esm-bundler-eeabfc76.js";import"./index-99ad55f3.js";import"./style-e1000a00.js";import"./index-3b581194.js";import"./typescript-defaf979.js";import"./index-10373a61.js";import"./index-f12c72ea.js";import"./position-1ef43fb2.js";import"./scroll-38214788.js";import"./icon-6077fbcf.js";var V={},Wt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Bt={},N={};let st;const Zt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Zt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');st=t};N.isKanjiModeEnabled=function(){return typeof st!="undefined"};N.toSJIS=function(t){return st(t)};var O={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch(n){return r}}})(O);function At(){this.buffer=[],this.length=0}At.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let o=0;o<t;o++)this.putBit((e>>>t-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Xt=At;function H(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}H.prototype.set=function(e,t,o,i){const r=e*this.size+t;this.data[r]=o,i&&(this.reservedBit[r]=!0)};H.prototype.get=function(e,t){return this.data[e*this.size+t]};H.prototype.xor=function(e,t,o){this.data[e*this.size+t]^=o};H.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var xt=H,It={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,n=t(i),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let u=1;u<r-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(i){const r=[],n=e.getRowColCoords(i),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||r.push([n[a],n[u]]);return r}})(It);var Nt={};const te=N.getSymbolSize,wt=7;Nt.getPositions=function(t){const o=te(t);return[[0,0],[o-wt,0],[0,o-wt]]};var Tt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,u=0,c=null,l=null;for(let p=0;p<n;p++){a=u=0,c=l=null;for(let m=0;m<n;m++){let f=r.get(p,m);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=r.get(m,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=r.get(a,u)+r.get(a,u+1)+r.get(a+1,u)+r.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|r.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|r.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function o(i,r,n){switch(i){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,o(r,u,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),l<u&&(u=l,a=c)}return a}})(Tt);var j={};const _=O,K=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],J=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,o){switch(o){case _.L:return K[(t-1)*4+0];case _.M:return K[(t-1)*4+1];case _.Q:return K[(t-1)*4+2];case _.H:return K[(t-1)*4+3];default:return}};j.getTotalCodewordsCount=function(t,o){switch(o){case _.L:return J[(t-1)*4+0];case _.M:return J[(t-1)*4+1];case _.Q:return J[(t-1)*4+2];case _.H:return J[(t-1)*4+3];default:return}};var Mt={},G={};const v=new Uint8Array(512),Y=new Uint8Array(256);(function(){let t=1;for(let o=0;o<255;o++)v[o]=t,Y[t]=o,t<<=1,t&256&&(t^=285);for(let o=255;o<512;o++)v[o]=v[o-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return Y[t]};G.exp=function(t){return v[t]};G.mul=function(t,o){return t===0||o===0?0:v[Y[t]+Y[o]]};(function(e){const t=G;e.mul=function(i,r){const n=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(i[s],r[a]);return n},e.mod=function(i,r){let n=new Uint8Array(i);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let n=0;n<i;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Mt);const bt=Mt;function ut(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ut.prototype.initialize=function(t){this.degree=t,this.genPoly=bt.generateECPolynomial(this.degree)};ut.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(t.length+this.degree);o.set(t);const i=bt.mod(o,this.genPoly),r=this.degree-i.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(i,r),n}return i};var ee=ut,Pt={},R={},at={};at.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var b={};const St="[0-9]+",ne="[A-Z $%*+\\-./:]+";let z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";z=z.replace(/u/g,"\\u");const re="(?:(?![A-Z0-9 $%*+\\-./:]|"+z+`)(?:.|[\r
]))+`;b.KANJI=new RegExp(z,"g");b.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");b.BYTE=new RegExp(re,"g");b.NUMERIC=new RegExp(St,"g");b.ALPHANUMERIC=new RegExp(ne,"g");const oe=new RegExp("^"+z+"$"),ie=new RegExp("^"+St+"$"),se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");b.testKanji=function(t){return oe.test(t)};b.testNumeric=function(t){return ie.test(t)};b.testAlphanumeric=function(t){return se.test(t)};(function(e){const t=at,o=b;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return o.testNumeric(n)?e.NUMERIC:o.testAlphanumeric(n)?e.ALPHANUMERIC:o.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return i(n)}catch(a){return s}}})(R);(function(e){const t=N,o=j,i=O,r=R,n=at,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(m,f,w){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,w,m))return y}function c(m,f){return r.getCharCountIndicator(m,f)+4}function l(m,f){let w=0;return m.forEach(function(y){const I=c(y.mode,f);w+=I+y.getBitsLength()}),w}function p(m,f){for(let w=1;w<=40;w++)if(l(m,w)<=e.getCapacity(w,f,r.MIXED))return w}e.from=function(f,w){return n.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=r.BYTE);const I=t.getSymbolTotalCodewords(f),h=o.getTotalCodewordsCount(f,w),E=(I-h)*8;if(y===r.MIXED)return E;const g=E-c(y,f);switch(y){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let y;const I=i.from(w,i.M);if(Array.isArray(f)){if(f.length>1)return p(f,I);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),I)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(Pt);var _t={};const nt=N,Rt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ue=1<<14|1<<12|1<<10|1<<4|1<<1,yt=nt.getBCHDigit(Rt);_t.getEncodedBits=function(t,o){const i=t.bit<<3|o;let r=i<<10;for(;nt.getBCHDigit(r)-yt>=0;)r^=Rt<<nt.getBCHDigit(r)-yt;return(i<<10|r)^ue};var Lt={};const ae=R;function L(e){this.mode=ae.NUMERIC,this.data=e.toString()}L.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};L.prototype.getLength=function(){return this.data.length};L.prototype.getBitsLength=function(){return L.getBitsLength(this.data.length)};L.prototype.write=function(t){let o,i,r;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),r=parseInt(i,10),t.put(r,10);const n=this.data.length-o;n>0&&(i=this.data.substr(o),r=parseInt(i,10),t.put(r,n*3+1))};var ce=L;const le=R,Z=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(e){this.mode=le.ALPHANUMERIC,this.data=e}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let o;for(o=0;o+2<=this.data.length;o+=2){let i=Z.indexOf(this.data[o])*45;i+=Z.indexOf(this.data[o+1]),t.put(i,11)}this.data.length%2&&t.put(Z.indexOf(this.data[o]),6)};var fe=D,de=function(t){for(var o=[],i=t.length,r=0;r<i;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&i>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){o.push(n);continue}if(n<2048){o.push(n>>6|192),o.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){o.push(n>>12|224),o.push(n>>6&63|128),o.push(n&63|128);continue}if(n>=65536&&n<=1114111){o.push(n>>18|240),o.push(n>>12&63|128),o.push(n>>6&63|128),o.push(n&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer};const ge=de,he=R;function U(e){this.mode=he.BYTE,typeof e=="string"&&(e=ge(e)),this.data=new Uint8Array(e)}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,o=this.data.length;t<o;t++)e.put(this.data[t],8)};var me=U;const we=R,ye=N;function F(e){this.mode=we.KANJI,this.data=e}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let o=ye.toSJIS(this.data[t]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),e.put(o,13)}};var Ee=F,Dt={exports:{}};(function(e){var t={single_source_shortest_paths:function(o,i,r){var n={},s={};s[i]=0;var a=t.PriorityQueue.make();a.push(i,0);for(var u,c,l,p,m,f,w,y,I;!a.empty();){u=a.pop(),c=u.value,p=u.cost,m=o[c]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],w=p+f,y=s[l],I=typeof s[l]=="undefined",(I||y>w)&&(s[l]=w,a.push(l,w),n[l]=c))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var h=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(o,i){for(var r=[],n=i;n;)r.push(n),o[n],n=o[n];return r.reverse(),r},find_path:function(o,i,r){var n=t.single_source_shortest_paths(o,i,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(o){var i=t.PriorityQueue,r={},n;o=o||{};for(n in i)i.hasOwnProperty(n)&&(r[n]=i[n]);return r.queue=[],r.sorter=o.sorter||i.default_sorter,r},default_sorter:function(o,i){return o.cost-i.cost},push:function(o,i){var r={value:o,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Dt);(function(e){const t=R,o=ce,i=fe,r=me,n=Ee,s=b,a=N,u=Dt.exports;function c(h){return unescape(encodeURIComponent(h)).length}function l(h,E,g){const d=[];let C;for(;(C=h.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:E,length:C[0].length});return d}function p(h){const E=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,C;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),C=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),C=[]),E.concat(g,d,C).sort(function(A,T){return A.index-T.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function m(h,E){switch(E){case t.NUMERIC:return o.getBitsLength(h);case t.ALPHANUMERIC:return i.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return r.getBitsLength(h)}}function f(h){return h.reduce(function(E,g){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===g.mode?(E[E.length-1].data+=g.data,E):(E.push(g),E)},[])}function w(h){const E=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return E}function y(h,E){const g={},d={start:{}};let C=["start"];for(let B=0;B<h.length;B++){const A=h[B],T=[];for(let S=0;S<A.length;S++){const M=A[S],k=""+B+S;T.push(k),g[k]={node:M,lastCount:0},d[k]={};for(let Q=0;Q<C.length;Q++){const P=C[Q];g[P]&&g[P].node.mode===M.mode?(d[P][k]=m(g[P].lastCount+M.length,M.mode)-m(g[P].lastCount,M.mode),g[P].lastCount+=M.length):(g[P]&&(g[P].lastCount=M.length),d[P][k]=m(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,E))}}C=T}for(let B=0;B<C.length;B++)d[C[B]].end=0;return{map:d,table:g}}function I(h,E){let g;const d=t.getBestModeForData(h);if(g=t.from(E,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new o(h);case t.ALPHANUMERIC:return new i(h);case t.KANJI:return new n(h);case t.BYTE:return new r(h)}}e.fromArray=function(E){return E.reduce(function(g,d){return typeof d=="string"?g.push(I(d,null)):d.data&&g.push(I(d.data,d.mode)),g},[])},e.fromString=function(E,g){const d=p(E,a.isKanjiModeEnabled()),C=w(d),B=y(C,g),A=u.find_path(B.map,"start","end"),T=[];for(let S=1;S<A.length-1;S++)T.push(B.table[A[S]].node);return e.fromArray(f(T))},e.rawSplit=function(E){return e.fromArray(p(E,a.isKanjiModeEnabled()))}})(Lt);const q=N,X=O,Ce=Xt,pe=xt,Be=It,Ae=Nt,rt=Tt,ot=j,Ie=ee,$=Pt,Ne=_t,Te=R,x=Lt;function Me(e,t){const o=e.size,i=Ae.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],s=i[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||o<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||o<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function be(e){const t=e.size;for(let o=8;o<t-8;o++){const i=o%2===0;e.set(o,6,i,!0),e.set(6,o,i,!0)}}function Pe(e,t){const o=Be.getPositions(t);for(let i=0;i<o.length;i++){const r=o[i][0],n=o[i][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function Se(e,t){const o=e.size,i=$.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+o-8-3,s=(i>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function tt(e,t,o){const i=e.size,r=Ne.getEncodedBits(t,o);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(i-15+n,8,s,!0),n<8?e.set(8,i-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(i-8,8,1,!0)}function _e(e,t){const o=e.size;let i=-1,r=o-1,n=7,s=0;for(let a=o-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-u,c),n--,n===-1&&(s++,n=7)}if(r+=i,r<0||o<=r){r-=i,i=-i;break}}}function Re(e,t,o){const i=new Ce;o.forEach(function(u){i.put(u.mode.bit,4),i.put(u.getLength(),Te.getCharCountIndicator(u.mode,e)),u.write(i)});const r=q.getSymbolTotalCodewords(e),n=ot.getTotalCodewordsCount(e,t),s=(r-n)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(s-i.getLengthInBits())/8;for(let u=0;u<a;u++)i.put(u%2?17:236,8);return Le(i,e,t)}function Le(e,t,o){const i=q.getSymbolTotalCodewords(t),r=ot.getTotalCodewordsCount(t,o),n=i-r,s=ot.getBlocksCount(t,o),a=i%s,u=s-a,c=Math.floor(i/s),l=Math.floor(n/s),p=l+1,m=c-l,f=new Ie(m);let w=0;const y=new Array(s),I=new Array(s);let h=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const T=A<u?l:p;y[A]=E.slice(w,w+T),I[A]=f.encode(y[A]),w+=T,h=Math.max(h,T)}const g=new Uint8Array(i);let d=0,C,B;for(C=0;C<h;C++)for(B=0;B<s;B++)C<y[B].length&&(g[d++]=y[B][C]);for(C=0;C<m;C++)for(B=0;B<s;B++)g[d++]=I[B][C];return g}function De(e,t,o,i){let r;if(Array.isArray(e))r=x.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=x.rawSplit(e);c=$.getBestVersionForData(l,o)}r=x.fromString(e,c||40)}else throw new Error("Invalid data");const n=$.getBestVersionForData(r,o);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Re(t,o,r),a=q.getSymbolSize(t),u=new pe(a);return Me(u,t),be(u),Pe(u,t),tt(u,o,0),t>=7&&Se(u,t),_e(u,s),isNaN(i)&&(i=rt.getBestMask(u,tt.bind(null,u,o))),rt.applyMask(i,u),tt(u,o,i),{modules:u,version:t,errorCorrectionLevel:o,maskPattern:i,segments:r}}Bt.create=function(t,o){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=X.M,r,n;return typeof o!="undefined"&&(i=X.from(o.errorCorrectionLevel,X.M),r=$.from(o.version),n=rt.from(o.maskPattern),o.toSJISFunc&&q.setToSJISFunction(o.toSJISFunc)),De(t,r,i,n)};var Ut={},ct={};(function(e){function t(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let i=o.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+o);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,n=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const n=e.getScale(i,r);return Math.floor((i+r.margin*2)*n)},e.qrToImageData=function(i,r,n){const s=r.modules.size,a=r.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,p=[n.color.light,n.color.dark];for(let m=0;m<c;m++)for(let f=0;f<c;f++){let w=(m*c+f)*4,y=n.color.light;if(m>=l&&f>=l&&m<c-l&&f<c-l){const I=Math.floor((m-l)/u),h=Math.floor((f-l)/u);y=p[a[I*s+h]?1:0]}i[w++]=y.r,i[w++]=y.g,i[w++]=y.b,i[w]=y.a}}})(ct);(function(e){const t=ct;function o(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch(r){throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=i()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),p=c.getContext("2d"),m=p.createImageData(l,l);return t.qrToImageData(m.data,n,u),o(p,c,l),p.putImageData(m,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return c.toDataURL(l,p.quality)}})(Ut);var Ft={};const Ue=ct;function Et(e,t){const o=e.a/255,i=t+'="'+e.hex+'"';return o<1?i+" "+t+'-opacity="'+o.toFixed(2).slice(1)+'"':i}function et(e,t,o){let i=e+t;return typeof o!="undefined"&&(i+=" "+o),i}function Fe(e,t,o){let i="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(i+=n?et("M",u+o,.5+c+o):et("m",r,0),r=0,n=!1),u+1<t&&e[a+1]||(i+=et("h",s),s=0)):r++}return i}Ft.render=function(t,o,i){const r=Ue.getOptions(o),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,u=r.color.light.a?"<path "+Et(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Et(r.color.dark,"stroke")+' d="'+Fe(s,n,r.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof i=="function"&&i(null,m),m};const ke=Wt,it=Bt,kt=Ut,ve=Ft;function lt(e,t,o,i,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!ke())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=o,o=t,t=i=void 0):s===3&&(t.getContext&&typeof r=="undefined"?(r=i,i=void 0):(r=i,i=o,o=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=t,t=i=void 0):s===2&&!t.getContext&&(i=o,o=t,t=void 0),new Promise(function(u,c){try{const l=it.create(o,i);u(e(l,t,i))}catch(l){c(l)}})}try{const u=it.create(o,i);r(null,e(u,t,i))}catch(u){r(u)}}V.create=it.create;V.toCanvas=lt.bind(null,kt.render);V.toDataURL=lt.bind(null,kt.renderToDataURL);V.toString=lt.bind(null,function(e,t,o){return ve.render(e,o)});const ze={class:"flex justify-between"},Ve=pt("strong",null,"二维码",-1),He=Ct({name:"qrcode"}),an=Ct(ht(gt({},He),{setup(e){let t=Ot();return V.toDataURL("I am a pony!").then(o=>{t.value=o}).catch(o=>{console.error(o)}),(o,i)=>{const r=$t,n=Yt,s=Jt;return jt(),Gt(s,{shadow:"hover"},{header:W(()=>[pt("nav",ze,[Ve,mt(r,{href:"https://github.com/soldair/node-qrcode",target:"_blank",type:"primary"},{default:W(()=>[qt("qrcode")]),_:1})])]),default:W(()=>[mt(n,{src:Qt(t)},null,8,["src"])]),_:1})}}}));export{an as default};