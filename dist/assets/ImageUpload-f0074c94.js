import{u as a}from"./attach-17a7a276.js";import{a as e,eg as t,ab as s,o as l,h as o,n as u,H as r,k as n,j as d,O as i,K as m,eh as p}from"./index-c5a6c875.js";import{E as c,a as y}from"./EyeOutlined-274e25e9.js";const f=m("上传"),h=e({props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:m}){let h=t(!1);const g=e=>{return t=this,s=[e],l=function*({file:e}){h.value=!0;try{const t=yield a({file:e});p.success("上传成功"),m("update:modelValue",t.data.data.link)}finally{h.value=!1}},new Promise(((a,e)=>{var o=a=>{try{r(l.next(a))}catch(t){e(t)}},u=a=>{try{r(l.throw(a))}catch(t){e(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,u);r((l=l.apply(t,s)).next())}));var t,s,l};return(a,t)=>{const m=s("a-button"),p=s("a-upload"),v=s("a-badge");return l(),o(i,null,[u(p,{accept:"image/*",customRequest:g,maxCount:1,showUploadList:!1},{default:r((()=>[u(m,{loading:n(h),ghost:"",type:"primary"},{default:r((()=>[f])),_:1},8,["loading"])])),_:1}),u(v,{count:e.modelValue?1:0},{default:r((()=>[u(m,{ghost:"",style:{"margin-left":"10px"},type:"primary"},{default:r((()=>[e.modelValue?(l(),d(n(c),{key:0})):(l(),d(n(y),{key:1}))])),_:1})])),_:1},8,["count"])],64)}}});export{h as default};
