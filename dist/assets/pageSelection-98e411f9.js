var j=Object.defineProperty,A=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,b=(t,e)=>{for(var o in e||(e={}))P.call(e,o)&&w(t,o,e[o]);if(g)for(var o of g(e))T.call(e,o)&&w(t,o,e[o]);return t},v=(t,e)=>A(t,I(e));var C=(t,e,o)=>new Promise((d,p)=>{var _=l=>{try{i(o.next(l))}catch(c){p(c)}},s=l=>{try{i(o.throw(l))}catch(c){p(c)}},i=l=>l.done?d(l.value):Promise.resolve(l.value).then(_,s);i((o=o.apply(t,e)).next())});import{H as V,I as X,X as q,B as F,S as H}from"./element-plus-ef60ab81.js";import{F as x,s as y,q as L,t as M,d as O,o as S,$ as k,a0 as h,X as $,u as m,a2 as n,a as u}from"./@vue-46cd96cd.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-c4efa120.js";import"./@element-plus-32e4db1a.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-bd17b2e0.js";import"./@floating-ui-5f39704e.js";import"./dayjs-7cbd9aff.js";import"./memoize-one-0650c7b0.js";const G=u("strong",null,"element-plus 分页选择",-1),J=u("br",null,null,-1),K={class:"flex justify-end"},Q=x({name:"pageSelection"}),he=x(v(b({},Q),{setup(t){let e=y(!1);const o=y(null);let d=L({total:0,data:[]});const{total:p,data:_}=M(d),s=()=>C(this,null,function*(){e.value=!0,e.value=!1});O(s);const i=a=>{s(),console.log(a)},l=a=>{s()},c=(a,f)=>{console.log(a),console.log(f)},z=a=>{},B=a=>{console.log(a)};return(a,f)=>{const r=V,D=X,E=q,R=F,N=H;return S(),k(R,{shadow:"hover","body-style":{height:"100%"}},{header:h(()=>[G]),default:h(()=>[$((S(),k(D,{ref_key:"tableRef",ref:o,onSelectionChange:B,onSelectAll:z,onSelect:c,size:"large",data:m(_),"row-key":"id",border:"","highlight-current-row":"",stripe:""},{default:h(()=>[n(r,{type:"selection","reserve-selection":!0,width:"45"}),n(r,{label:"订单编号",prop:"orderNo","show-overflow-tooltip":"",width:"250"}),n(r,{label:"下单时间",prop:"orderDate","show-overflow-tooltip":"",width:"180"}),n(r,{label:"详细地址",prop:"address","show-overflow-tooltip":"",width:"350"}),n(r,{label:"收件人",prop:"receiver","show-overflow-tooltip":""}),n(r,{label:"收件人电话",prop:"receiverPhone","show-overflow-tooltip":""})]),_:1},8,["data"])),[[N,m(e)]]),J,u("footer",K,[n(E,{onSizeChange:l,onCurrentChange:i,total:m(p),background:"",layout:"total, sizes, prev, pager, next, jumper"},null,8,["total"])])]),_:1})}}}));export{he as default};
