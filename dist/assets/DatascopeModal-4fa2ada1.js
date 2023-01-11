var e=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(o,l,a)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a,s=(e,o,l)=>new Promise(((a,t)=>{var s=e=>{try{i(l.next(e))}catch(o){t(o)}},n=e=>{try{i(l.throw(e))}catch(o){t(o)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,n);i((l=l.apply(e,o)).next())}));import{cP as n,bc as i,a as r,w as d,k as c,f as p,o as u,j as m,H as f,E as b,G as y,i as v,n as I,ag as h}from"./index-c5a6c875.js";import{u as P,B as g}from"./useForm-76a4ff23.js";import{g as x}from"./system-54dc9bf1.js";import{a as w,B as C}from"./index-c9e02f09.js";import{u as j,D as O}from"./index-2c15cc4f.js";import{d as N,e as _}from"./scope-98debdcf.js";const F=[{title:"菜单名称",dataIndex:"name",width:200,align:"left"},{title:"图标",dataIndex:"source",width:50,customRender:({record:e})=>n(i,{icon:e.source})},{title:"菜单编号",dataIndex:"code",width:180},{title:"路由地址",dataIndex:"path"},{title:"排序",dataIndex:"sort",width:50}],T=[{field:"name",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"code",label:"菜单编号",component:"Input",colProps:{span:8}}],q=[{field:"scopeName",label:"权限名称",component:"Input",colProps:{span:8}},{field:"resourceCode",label:"权限编号",component:"Input",colProps:{span:8}}],R=[{title:"权限名称",dataIndex:"scopeName"},{title:"权限编号",dataIndex:"resourceCode"},{title:"权限字段",dataIndex:"scopeColumn"},{title:"规则类型",dataIndex:"scopeTypeName"}],k=[{field:"scopeName",label:"权限名称",component:"Input",required:!0},{field:"resourceCode",label:"权限编号",component:"Input",required:!0},{field:"scopeColumn",label:"权限字段",component:"Input",required:!0},{field:"scopeType",label:"规则类型",component:"ApiSelect",componentProps:{api:x,params:{code:"data_scope_type"},labelField:"dictValue",valueField:"dictKey",getPopupContainer:()=>document.body,stringToNumber:!0},required:!0},{field:"scopeField",label:"可见字段",component:"Input",colProps:{span:24},required:!0},{field:"scopeClass",label:"权限类名",component:"Input",colProps:{span:24},required:!0},{field:"scopeValue",label:"规则值",colProps:{span:24},component:"InputTextArea",ifShow:({values:e})=>5==e.scopeType},{field:"remark",label:"备注",component:"Input",colProps:{span:24}}],S=[{field:"scopeName",label:"权限名称"},{field:"resourceCode",label:"权限编号"},{field:"scopeColumn",label:"权限字段"},{field:"scopeType",label:"规则类型"},{field:"scopeField",label:"可见字段"},{field:"scopeClass",label:"权限类名"},{field:"remark",label:"备注"}],B=r({emits:["success","register"],setup(e,{emit:n}){const i=d(!0),r=d(!0),x=d(""),F=d(""),[T,{setDescProps:q}]=j({schema:S}),[R,{resetFields:B,setFieldsValue:D,validate:A,updateSchema:L}]=P({labelWidth:100,schemas:k,showActionButtonGroup:!1,baseColProps:{span:12},actionColOptions:{span:23}}),[M,{setModalProps:V,closeModal:z}]=w((e=>s(this,null,(function*(){if(V({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),r.value=!!(null==e?void 0:e.isDetail),F.value=null==e?void 0:e.menuId,c(r)){const o=yield N({id:e.record.id});q({data:o})}else{if(B(),c(i)){x.value=e.record.id;const s=yield N({id:e.record.id});D(((e,s)=>{for(var n in s||(s={}))l.call(s,n)&&t(e,n,s[n]);if(o)for(var n of o(s))a.call(s,n)&&t(e,n,s[n]);return e})({},s))}else D({resourceCode:e.code,scopeName:e.menuName+"[暂无]",scopeField:"*"});L({field:"scopeType",componentProps:{onChange:(o,l)=>{let a="";1===o?a="-":2===o?a="create_user":(3===o||4===o)&&(a="create_dept"),D({scopeName:e.menuName+"["+l.label+"]",scopeColumn:a})}},required:!0})}})))),E=p((()=>c(i)?"编辑权限":c(r)?"权限详情":"新增权限"));function G(){return s(this,null,(function*(){try{const e=yield A();V({confirmLoading:!0}),e.menuId=F.value,c(i)&&(e.id=x.value),yield _(e),z(),n("success")}finally{V({confirmLoading:!1})}}))}return(e,o)=>(u(),m(c(C),h(e.$attrs,{onRegister:c(M),title:c(E),width:800,showOkBtn:!r.value,onOk:G}),{default:f((()=>[b(v("div",null,[I(c(O),{size:"middle",onRegister:c(T),column:2},null,8,["onRegister"])],512),[[y,r.value]]),b(v("div",null,[I(c(g),{onRegister:c(R)},null,8,["onRegister"])],512),[[y,!r.value]])])),_:1},16,["onRegister","title","showOkBtn"]))}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{D,B as _,R as a,T as b,F as c,q as s};
