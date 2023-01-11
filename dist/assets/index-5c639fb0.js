import{B as e}from"./TableImg-d2c728a3.js";import{T as t}from"./useForm-76a4ff23.js";import{u as a}from"./useTable-0a379cac.js";import{a as s,b as o}from"./flow-db406d19.js";import{s as n,a as i,ab as r,o as l,h as d,n as c,H as m,O as p,K as u,t as b,l as f,j,S as I}from"./index-c5a6c875.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useWindowSizeFn-72c85a53.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./index-c9e02f09.js";import"./FullscreenOutlined-9b414b92.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";const x=[{title:"执行id",dataIndex:"executionId"},{title:"流程key",dataIndex:"processDefinitionKey"},{title:"实例id",dataIndex:"processInstanceId"},{title:"状态",dataIndex:"suspensionState"},{title:"发起人",dataIndex:"startUser"},{title:"开始时间",dataIndex:"startTime"}],h=[{field:"paramName",label:"参数名称",component:"Input",colProps:{span:8}},{field:"paramKey",label:"参数键名",component:"Input",colProps:{span:8}}];const g=n(i({name:"FlowFollow",components:{BasicTable:e,TableAction:t},setup(){const{createMessage:e}=I(),[t,{reload:n}]=a({api:s,columns:x,formConfig:{labelWidth:120,schemas:h},useSearchForm:!0,actionColumn:{width:160,title:"操作",dataIndex:"action"}});return{registerTable:t,handleDelete:function(t){return a=this,s=null,i=function*(){yield o({processInstanceId:t.processInstanceId}),e.success("操作成功"),n()},new Promise(((e,t)=>{var o=e=>{try{r(i.next(e))}catch(a){t(a)}},n=e=>{try{r(i.throw(e))}catch(a){t(a)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,n);r((i=i.apply(a,s)).next())}));var a,s,i}}}}),[["render",function(e,t,a,s,o,n){const i=r("TableAction"),I=r("BasicTable");return l(),d("div",null,[c(I,{onRegister:e.registerTable},{bodyCell:m((({column:t,record:a})=>["suspensionState"===t.dataIndex?(l(),d(p,{key:0},[u(b(1===a.suspensionState?"激活":"挂起"),1)],64)):f("",!0),"action"===t.dataIndex?(l(),j(i,{key:1,actions:[{label:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,a)}}]},null,8,["actions"])):f("",!0)])),_:1},8,["onRegister"])])}]]);export{g as default};
