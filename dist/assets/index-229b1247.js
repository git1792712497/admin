var e=(e,o,t)=>new Promise(((i,s)=>{var n=e=>{try{c(t.next(e))}catch(o){s(o)}},a=e=>{try{c(t.throw(e))}catch(o){s(o)}},c=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,a);c((t=t.apply(e,o)).next())}));import{B as o}from"./TableImg-d2c728a3.js";import{T as t}from"./useForm-76a4ff23.js";import{u as i}from"./useTable-0a379cac.js";import{g as s,c as n,s as a,_ as c,a as l,r,b as d}from"./CodeModal-2ecf3ac2.js";import{g as u}from"./datasource-efce687f.js";import{u as m}from"./index-c9e02f09.js";import{a as p,w as f,ab as b,ac as j,o as h,h as y,n as g,H as w,E as C,j as v,k as x,l as k,K as _,S as R}from"./index-c5a6c875.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useWindowSizeFn-72c85a53.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./FullscreenOutlined-9b414b92.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";import"./system-54dc9bf1.js";import"./model-0b68421a.js";import"./validate-e879236f.js";const S=_(" 新增 "),I=_(" 生成 "),F=p({setup(p){let _=f({});!function(){e(this,null,(function*(){_.value.source=yield u()}))}();const{createMessage:F}=R(),[M,{openModal:O}]=m(),[T,{reload:q,getRowSelection:D}]=i({api:s,rowKey:"id",columns:n,clickToRowSelect:!1,rowSelection:{type:"checkbox"},formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,actionColumn:{width:300,title:"操作",dataIndex:"action"}});function E(){O(!0,{isDetail:!1,isUpdate:!1})}function K(){return e(this,null,(function*(){const e=D().selectedRowKeys;0!=(null==e?void 0:e.length)?(yield l({ids:e,system:"lemon"}),F.success("生成成功")):F.error("请至少选择一条数据")}))}function U(e){O(!0,{record:e,isUpdate:!1,isDetail:!0})}function B(e){O(!0,{record:e,isDetail:!1,isUpdate:!0})}function H(o){return e(this,null,(function*(){yield r({ids:o.id}),F.success("操作成功"),q()}))}function P(o){return e(this,null,(function*(){yield d({id:o.id}),F.success("操作成功"),q()}))}function W(){F.success("操作成功"),q()}return(e,i)=>{const s=b("a-button"),n=j("auth");return h(),y("div",null,[g(x(o),{onRegister:x(T)},{toolbar:w((()=>[C((h(),v(s,{type:"primary",onClick:E,preIcon:"ant-design:plus-outlined"},{default:w((()=>[S])),_:1})),[[n,"code_add"]]),g(s,{type:"success",onClick:K,preIcon:"ant-design:rocket-outlined"},{default:w((()=>[I])),_:1})])),bodyCell:w((({column:e,record:o})=>["action"===e.dataIndex?(h(),v(x(t),{key:0,actions:[{auth:"code_view",label:"查看",color:"success",icon:"clarity:info-standard-line",onClick:U.bind(null,o)},{auth:"code_edit",label:"编辑",icon:"clarity:note-edit-line",onClick:B.bind(null,o)},{auth:"code_delete",label:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:H.bind(null,o)}},{auth:"code_edit",label:"复制",icon:"ant-design:copy-outlined",popConfirm:{title:"是否确认复制",confirm:P.bind(null,o)}}]},null,8,["actions"])):k("",!0)])),_:1},8,["onRegister"]),g(c,{onRegister:x(M),onSuccess:W},null,8,["onRegister"])])}}});export{F as default};
