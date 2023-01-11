var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&r(e,a,t[a]);return e},n=(e,t,a)=>new Promise(((o,l)=>{var s=e=>{try{i(a.next(e))}catch(t){l(t)}},r=e=>{try{i(a.throw(e))}catch(t){l(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,r);i((a=a.apply(e,t)).next())}));import{y as d,a as c,w as p,k as u,f as m,o as f,j as b,H as y,E as v,G as g,i as P,n as j,ag as O}from"./index-c5a6c875.js";import{a as I,B as h}from"./index-c9e02f09.js";import{u as x,B as w}from"./useForm-76a4ff23.js";import{g as N}from"./system-54dc9bf1.js";import{g as _,s as F}from"./post-859b11b4.js";import{u as k,D as C}from"./index-2c15cc4f.js";const R=[{title:"所属租户",dataIndex:"tenantId",defaultHidden:!d.tenantMode},{title:"岗位类型",dataIndex:"categoryName"},{title:"岗位编号",dataIndex:"postCode"},{title:"岗位名称",dataIndex:"postName"},{title:"岗位排序",dataIndex:"sort"}],B=[{field:"category",label:"岗位类型",component:"ApiSelect",componentProps:{api:N,params:{code:"post_category"},labelField:"dictValue",valueField:"dictKey"},colProps:{span:8}},{field:"postCode",label:"岗位编号",component:"Input",colProps:{span:8}},{field:"postName",label:"岗位名称",component:"Input",colProps:{span:8}}],S=[{field:"category",label:"岗位类型",component:"ApiSelect",componentProps:{stringToNumber:!0,api:N,params:{code:"post_category"},labelField:"dictValue",valueField:"dictKey"},required:!0},{field:"postCode",label:"岗位编号",component:"Input",required:!0},{field:"postName",label:"岗位名称",component:"Input",required:!0},{field:"sort",label:"岗位排序",required:!0,component:"InputNumber"},{field:"remark",label:"岗位描述",component:"InputTextArea"}],q=[{field:"tenantId",label:"所属租户"},{field:"categoryName",label:"岗位类型"},{field:"postCode",label:"岗位编号"},{field:"postName",label:"岗位名称"},{field:"sort",label:"岗位排序"},{field:"remark",label:"岗位描述"}],A=c({emits:["success","register"],setup(e,{emit:o}){const l=p(!0),s=p(!0),r=p(""),[d,{setDescProps:c}]=k({schema:q}),[N,{setFieldsValue:R,resetFields:B,validate:A}]=x({labelWidth:100,schemas:S,showActionButtonGroup:!1,baseColProps:{span:24},actionColOptions:{span:23}}),[D,{setModalProps:M,closeModal:L}]=I((e=>n(this,null,(function*(){if(B(),s.value=!!(null==e?void 0:e.isUpdate),l.value=!!(null==e?void 0:e.isDetail),u(l)){const t=yield _({id:e.record.id});c({data:t})}else if(u(s)){r.value=e.record.id;const t=yield _({id:e.record.id});R(i({},t))}M({confirmLoading:!1})})))),T=m((()=>u(s)?"编辑岗位":u(l)?"岗位详情":"新增岗位"));function V(){return n(this,null,(function*(){try{const n=yield A();M({confirmLoading:!0}),u(s)&&(n.id=r.value),yield F(n),L(),o("success",{isUpdate:u(s),values:(e=i({},n),l={id:r.value},t(e,a(l)))})}finally{M({confirmLoading:!1})}var e,l}))}return(e,t)=>(f(),b(u(h),O(e.$attrs,{onRegister:u(D),title:u(T),showOkBtn:!l.value,onOk:V}),{default:y((()=>[v(P("div",null,[j(u(C),{size:"middle",onRegister:u(d),column:1},null,8,["onRegister"])],512),[[g,l.value]]),v(P("div",null,[j(u(w),{onRegister:u(N)},null,8,["onRegister"])],512),[[g,!l.value]])])),_:1},16,["onRegister","title","showOkBtn"]))}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{D as P,A as _,R as c,B as s};
