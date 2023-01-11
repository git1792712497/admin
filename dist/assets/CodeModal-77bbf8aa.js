var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,i=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&n(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&n(e,a,t[a]);return e},r=(e,t,a)=>new Promise(((l,o)=>{var s=e=>{try{i(a.next(e))}catch(t){o(t)}},n=e=>{try{i(a.throw(e))}catch(t){o(t)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,n);i((a=a.apply(e,t)).next())}));import{a as d,w as c,k as p,f as u,o as f,j as m,H as b,E as y,G as v,i as g,n as I,ag as h}from"./index-c5a6c875.js";import{a as O,B as P}from"./index-c9e02f09.js";import{u as x,k as j,B as w,s as K}from"./useForm-76a4ff23.js";import{u as k,D as R}from"./index-2c15cc4f.js";const C=[{title:"分类",dataIndex:"category",format:e=>"1"==e?"minio":"2"==e?"七牛云":"3"==e?"阿里云":"4"==e?"腾讯云":"未知"},{title:"资源编号",dataIndex:"ossCode"},{title:"资源地址",dataIndex:"endpoint"},{title:"空间名",dataIndex:"bucketName"},{title:"accessKey",dataIndex:"accessKey"},{title:"secretKey",dataIndex:"secretKey"},{title:"是否启用",dataIndex:"status"}],_=[{field:"datasourceId",label:"数据源",component:"Input",colProps:{span:8}},{field:"codeName",label:"模块名",component:"Input",colProps:{span:8}},{field:"serviceName",label:"服务名",component:"Input",colProps:{span:8}}],q=[{field:"category",component:"RadioGroup",label:"分类",componentProps:{options:[{label:"minio",value:1},{label:"七牛云",value:2},{label:"阿里云",value:3},{label:"腾讯云",value:4}]}},{field:"ossCode",label:"资源编号",component:"Input",required:!0},{field:"endpoint",label:"资源地址",component:"Input",required:!0},{field:"bucketName",label:"空间名",component:"Input",required:!0},{field:"accessKey",label:"accessKey",component:"Input",required:!0},{field:"secretKey",label:"secretKey",component:"Input",required:!0},{field:"appId",label:"appId",component:"Input",show:({model:e})=>4===e.category},{field:"region",label:"region",component:"Input",show:({model:e})=>4===e.category},{field:"remark",label:"备注",component:"InputTextArea"}],B=[{field:"ossCode",label:"资源编号"},{field:"endpoint",label:"资源地址"},{field:"bucketName",label:"空间名"},{field:"accessKey",label:"accessKey"},{field:"secretKey",label:"secretKey"},{field:"appId",label:"appId"},{field:"region",label:"region"},{field:"remark",label:"备注"}],N=d({emits:["success","register"],setup(e,{emit:l}){const o=c(!0),s=c(!0),n=c(""),[d,{setDescProps:C}]=k({schema:B}),[_,{setFieldsValue:N,resetFields:D,validate:F}]=x({labelWidth:100,schemas:q,showActionButtonGroup:!1,baseColProps:{span:24},actionColOptions:{span:23}}),[G,{setModalProps:L,closeModal:M}]=O((e=>r(this,null,(function*(){if(D(),L({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),o.value=!!(null==e?void 0:e.isDetail),p(o)){const t=yield j({id:e.record.id});C({data:t})}else if(p(s)){n.value=e.record.id;const t=yield j({id:e.record.id});N(i({},t))}})))),S=u((()=>p(s)?"编辑":p(o)?"详情":"新增"));function z(){return r(this,null,(function*(){try{const r=yield F();L({confirmLoading:!0}),p(s)&&(r.id=n.value),yield K(r),M(),l("success",{isUpdate:p(s),values:(e=i({},r),o={id:n.value},t(e,a(o)))})}finally{L({confirmLoading:!1})}var e,o}))}return(e,t)=>(f(),m(p(P),h(e.$attrs,{onRegister:p(G),title:p(S),onOk:z,showOkBtn:!o.value,width:900}),{default:b((()=>[y(g("div",null,[I(p(R),{size:"middle",onRegister:p(d),column:1},null,8,["onRegister"])],512),[[v,o.value]]),y(g("div",null,[I(p(w),{onRegister:p(_)},null,8,["onRegister"])],512),[[v,!o.value]])])),_:1},16,["onRegister","title","showOkBtn"]))}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{D as C,N as _,C as c,_ as s};
