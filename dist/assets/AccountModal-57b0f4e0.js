var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,d=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&i(e,l,t[l]);if(o)for(var l of o(t))n.call(t,l)&&i(e,l,t[l]);return e},s=(e,o)=>t(e,l(o)),r=(e,t,l)=>new Promise(((o,a)=>{var n=e=>{try{d(l.next(e))}catch(t){a(t)}},i=e=>{try{d(l.throw(e))}catch(t){a(t)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,i);d((l=l.apply(e,t)).next())}));import{y as p,cP as c,bj as u,a as m,w as f,k as b,f as I,o as y,j as v,H as h,E as P,G as g,i as w,n as N,M as j,ag as O}from"./index-c5a6c875.js";import{a as D,B as q}from"./index-c9e02f09.js";import{u as x,B as R}from"./useForm-76a4ff23.js";import{u as S,D as M}from"./index-2c15cc4f.js";import{g as F,b as T,p as k}from"./system-54dc9bf1.js";import{g as _,b as B,c as C}from"./user-a4458d91.js";import{c as z}from"./dept-667428a4.js";import{b as A}from"./post-859b11b4.js";const H=[{title:"登录账号",dataIndex:"account"},{title:"所属租户",dataIndex:"tenantName",defaultHidden:!p.tenantMode,customRender:({record:e})=>c(u,{color:"#108ee9"},(()=>e.tenantName))},{title:"用户姓名",dataIndex:"name"},{title:"所属角色",dataIndex:"roleName",customRender:({record:e})=>c(u,{color:"#108ee9"},(()=>e.roleName))},{title:"所属部门",dataIndex:"deptName",customRender:({record:e})=>c(u,{color:"#108ee9"},(()=>e.deptName))},{title:"用户平台",dataIndex:"userTypeName",customRender:({record:e})=>c(u,{color:"#108ee9"},(()=>e.userTypeName))}],L=[{field:"account",label:"登录账号",component:"Input",colProps:{span:8}},{field:"realName",label:"用户姓名",component:"Input",colProps:{span:8}}],Y=[{label:"基础信息",field:"Divider1",component:"Divider",colProps:{span:24}},{field:"tenantId",label:"所属租户",component:"ApiSelect",required:!0,show:p.tenantMode,colProps:{span:24},componentProps:{style:{width:"100%"}}},{field:"account",label:"登录账号",component:"Input",required:!0},{field:"userType",label:"用户平台",component:"ApiSelect",componentProps:{api:F,params:{code:"user_type"},labelField:"dictValue",valueField:"dictKey",stringToNumber:!0},required:!0},{label:"密码",field:"password",component:"Input",required:!0},{label:"确认密码",field:"password1",component:"Input",required:!0},{label:"详细信息",field:"Divider2",component:"Divider",colProps:{span:24}},{field:"name",label:"用户昵称",component:"Input",required:!0},{field:"realName",label:"用户姓名",component:"Input",required:!0},{field:"phone",label:"手机号",component:"Input"},{field:"email",label:"电子邮箱",component:"Input"},{field:"sex",label:"用户性别",component:"Select",componentProps:{options:[{label:"男",value:1},{label:"女",value:2},{label:"未知",value:3}]}},{field:"birthday",label:"用户生日",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}},{field:"statusName",label:"账号状态",component:"Input",defaultValue:!0,show:!1},{label:"职责信息",field:"Divider3",component:"Divider",colProps:{span:24}},{field:"code",label:"用户编号",component:"Input"},{label:"所属角色",field:"roleId",component:"TreeSelect",componentProps:{multiple:!0,fieldNames:{title:"title",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"deptId",label:"所属部门",component:"TreeSelect",componentProps:{multiple:!0,fieldNames:{title:"title",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"postId",label:"所属岗位",component:"Select",required:!0}],E=[{field:"tenantName",label:"所属租户",span:2},{field:"account",label:"登录账号"},{field:"userTypeName",label:"用户平台"}],V=[{field:"name",label:"用户昵称"},{field:"realName",label:"用户姓名"},{field:"phone",label:"手机号码"},{field:"email",label:"电子邮箱"},{field:"sexName",label:"用户性别"},{field:"birthday",label:"用户生日"}],G=[{field:"code",label:"用户编号"},{field:"roleName",label:"所属角色"},{field:"deptName",label:"所属部门"},{field:"postName",label:"所属岗位"}],U=m({emits:["success","register"],setup(e,{emit:t}){const l=f(!0),o=f(!0),a=f(""),[n,{setDescProps:i}]=S({schema:E}),[c,{setDescProps:u}]=S({schema:V}),[m,{setDescProps:F}]=S({schema:G}),[H,{setFieldsValue:L,updateSchema:U,validate:K,resetFields:W}]=x({labelWidth:85,schemas:Y,showActionButtonGroup:!1,baseColProps:{span:12},actionColOptions:{span:23}}),[$,{setModalProps:J,closeModal:Q}]=D((e=>r(this,null,(function*(){if(W(),J({confirmLoading:!0,loading:!0}),l.value=!!(null==e?void 0:e.isUpdate),o.value=!!(null==e?void 0:e.isDetail),b(o)){const t=yield _({id:e.record.id});i({data:t}),u({data:t}),F({data:t})}else if(p.tenantMode?(b(l)&&X(e.record.tenantId),U({field:"tenantId",componentProps:{api:T,labelField:"tenantName",valueField:"tenantId",onChange:e=>r(this,null,(function*(){X(e)}))}})):(X(p.tenantId),L({tenantId:p.tenantId})),b(l)){a.value=e.record.id,U([{field:"password",show:!1,required:!1},{field:"password1",show:!1,required:!1}]);const t=yield _({id:e.record.id});if(t.hasOwnProperty("deptId")){const e=t.deptId;t.deptId=e.split(",")}if(t.hasOwnProperty("roleId")){const e=t.roleId;t.roleId=e.split(",")}if(t.hasOwnProperty("postId")){const e=t.postId;t.postId=e.split(",")}L(d({},t))}else U([{field:"password",show:!0,required:!0},{field:"password1",show:!0,required:!0}]);J({confirmLoading:!1,loading:!1})}))));function X(e){return r(this,null,(function*(){const t=yield k({tenantId:e});U([{field:"roleId",componentProps:{treeData:t}}]);const l=yield z({tenantId:e});U([{field:"deptId",componentProps:{treeData:l}}]);const o=yield A({tenantId:e}),a=[];o.forEach((e=>a.push({label:e.postName,value:e.id}))),U([{field:"postId",componentProps:{options:a,mode:"multiple"}}])}))}const Z=I((()=>b(l)?"编辑用户":b(o)?"用户详情":"新增用户"));function ee(){return r(this,null,(function*(){try{const[e]=yield Promise.all([K()]);J({confirmLoading:!0});const o=Object.assign(e);o.roleId=o.roleId.join(","),o.deptId=o.deptId.join(","),o.postId=o.postId.join(","),b(l)?yield B(s(d({},o),{id:a.value})):yield C(d({},o)),Q(),t("success",{isUpdate:b(l),values:s(d({},o),{id:a.value})})}finally{J({confirmLoading:!1})}}))}return(e,t)=>(y(),v(b(q),O(e.$attrs,{onRegister:b($),width:900,title:b(Z),onOk:ee,showOkBtn:!o.value}),{default:h((()=>[P(w("div",null,[N(b(M),{size:"middle",title:"基础信息",onRegister:b(n),column:2},null,8,["onRegister"]),N(b(j)),N(b(M),{size:"middle",title:"详细信息",onRegister:b(c),column:2},null,8,["onRegister"]),N(b(j)),N(b(M),{size:"middle",title:"职责信息",onRegister:b(m),column:2},null,8,["onRegister"])],512),[[g,o.value]]),P(w("div",null,[N(b(R),{onRegister:b(H)},null,8,["onRegister"])],512),[[g,!o.value]])])),_:1},16,["onRegister","title","showOkBtn"]))}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{K as A,U as _,H as c,L as s};
