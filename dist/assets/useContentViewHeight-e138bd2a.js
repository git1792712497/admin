import{a5 as e,w as t,f as n,k as i}from"./index-c5a6c875.js";import{u as o}from"./useWindowSizeFn-72c85a53.js";const a=Symbol();const r=t(0),s=t(0);function u(){return{headerHeightRef:r,footerHeightRef:s,setHeaderHeight:function(e){r.value=e},setFooterHeight:function(e){s.value=e}}}function c(){const u=t(window.innerHeight),c=t(window.innerHeight),h=n((()=>i(u)-i(r)-i(s)||0));o((()=>{u.value=window.innerHeight}),100,{immediate:!0}),e({contentHeight:h,setPageHeight:function(e){return t=this,n=null,i=function*(){c.value=e},new Promise(((e,o)=>{var a=e=>{try{s(i.next(e))}catch(t){o(t)}},r=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,r);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:c},a,{native:!0})}export{u as a,c as u};
