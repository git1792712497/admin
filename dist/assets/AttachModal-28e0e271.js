var s=(s,e,t)=>new Promise(((a,o)=>{var r=s=>{try{n(t.next(s))}catch(e){o(e)}},i=s=>{try{n(t.throw(s))}catch(e){o(e)}},n=s=>s.done?a(s.value):Promise.resolve(s.value).then(r,i);n((t=t.apply(s,e)).next())}));import{a as e,B as t}from"./index-c9e02f09.js";import{u as a,B as o}from"./useForm-76a4ff23.js";import{u as r}from"./attach-17a7a276.js";import{a as i,o as n,j as l,H as c,n as u,k as p,ag as m,S as d}from"./index-c5a6c875.js";import"./useWindowSizeFn-72c85a53.js";import"./FullscreenOutlined-9b414b92.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./index-bb91fa2a.js";import"./get-8f9589fb.js";import"./uuid-f62a8acd.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";const f=i({emits:["success"],setup(i,{emit:f}){const j=[{field:"backgroundUrl",component:"Upload",label:"上传附件",rules:[{required:!0,message:"请选择上传文件"}],componentProps:()=>({api:r,multiple:!1})}],{createMessage:b}=d(),{success:g}=b,[h,{resetFields:x,getFieldsValue:w}]=a({labelWidth:100,schemas:j,showActionButtonGroup:!1,baseColProps:{span:24},actionColOptions:{span:23}}),[v,{setModalProps:F}]=e((()=>s(this,null,(function*(){x(),F({confirmLoading:!1})}))));function P(){return s(this,null,(function*(){const s=w();g("获取到图片地址【"+s.backgroundUrl[0]+"】"),f("success")}))}return(s,e)=>(n(),l(p(t),m(s.$attrs,{onRegister:p(v),title:"调试上传",onOk:P,width:900}),{default:c((()=>[u(p(o),{onRegister:p(h)},null,8,["onRegister"])])),_:1},16,["onRegister"]))}});export{f as default};
