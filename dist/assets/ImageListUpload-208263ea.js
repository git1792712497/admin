import{u as a}from"./attach-17a7a276.js";import{a as e,eg as t,ab as s,o,h as u,n as l,H as r,k as n,j as c,O as i,K as p,eh as d}from"./index-c5a6c875.js";import{E as m,a as y}from"./EyeOutlined-274e25e9.js";const f=p("上传"),h=e({props:{count:{type:Number,default:0,require:!0}},emits:["uploadSuccess"],setup(e,{emit:p}){let h=t(!1);const g=e=>{return t=this,s=[e],o=function*({file:e}){h.value=!0;try{const t=yield a({file:e});d.success("上传成功"),p("uploadSuccess",t.data.data.link)}finally{h.value=!1}},new Promise(((a,e)=>{var u=a=>{try{r(o.next(a))}catch(t){e(t)}},l=a=>{try{r(o.throw(a))}catch(t){e(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(u,l);r((o=o.apply(t,s)).next())}));var t,s,o};return(a,t)=>{const p=s("a-button"),d=s("a-upload"),v=s("a-badge");return o(),u(i,null,[l(d,{accept:"image/*",customRequest:g,multiple:"",showUploadList:!1},{default:r((()=>[l(p,{loading:n(h),ghost:"",type:"primary"},{default:r((()=>[f])),_:1},8,["loading"])])),_:1}),l(v,{count:e.count},{default:r((()=>[l(p,{ghost:"",style:{"margin-left":"10px"},type:"primary"},{default:r((()=>[e.count?(o(),c(n(m),{key:0})):(o(),c(n(y),{key:1}))])),_:1})])),_:1},8,["count"])],64)}}});export{h as default};
