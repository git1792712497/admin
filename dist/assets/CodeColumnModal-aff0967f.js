var e=(e,a,t)=>new Promise(((l,d)=>{var o=e=>{try{n(t.next(e))}catch(a){d(a)}},i=e=>{try{n(t.throw(e))}catch(a){d(a)}},n=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);n((t=t.apply(e,a)).next())}));import{a,B as t}from"./index-c9e02f09.js";import{a as l,s as d}from"./model-0b68421a.js";import{q as o}from"./system-54dc9bf1.js";import{v as i}from"./validate-e879236f.js";import{a as n,w as u,b3 as r,k as s,ab as c,o as p,j as m,H as y,n as v,l as b,br as h,h as k,am as f,K as j,t as g,O as x,ag as I}from"./index-c5a6c875.js";import{B as w}from"./TableImg-d2c728a3.js";import"./useForm-76a4ff23.js";import{u as T}from"./useTable-0a379cac.js";import"./useWindowSizeFn-72c85a53.js";import"./FullscreenOutlined-9b414b92.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";const U=[{label:"等于",value:"equal"},{label:"不等于",value:"notequal"},{label:"大于",value:"gt"},{label:"大于等于",value:"ge"},{label:"小于",value:"lt"},{label:"小于等于",value:"le"},{label:"区间",value:"between"},{label:"模糊",value:"like"},{label:"左模糊",value:"likeleft"},{label:"右模糊",value:"likeright"}],q=[{label:"String",value:"java.lang.String"},{label:"Integer",value:"java.lang.Integer"},{label:"Long",value:"java.lang.Long"},{label:"Double",value:"java.lang.Double"},{label:"BigDecimal",value:"java.math.BigDecimal"},{label:"Boolean",value:"java.lang.Boolean"},{label:"Date",value:"java.util.Date"}],E=[{label:"单行文本",value:"input"},{label:"多行文本",value:"textarea"},{label:"下拉选项",value:"select"},{label:"树形下拉选项",value:"tree"},{label:"单选框",value:"radio"},{label:"多选框",value:"checkbox"},{label:"开关框",value:"switch"},{label:"日期框",value:"date"}],C=[{title:"id",dataIndex:"id",defaultHidden:!0},{title:"物理列名",dataIndex:"jdbcName",width:150},{title:"物理类型",dataIndex:"jdbcType",width:150},{title:"实体列名",dataIndex:"propertyName",width:150},{title:"实体类型",dataIndex:"propertyEntity",width:150},{title:"字段说明",dataIndex:"comment",width:150},{title:"列表显示",dataIndex:"isList",width:80},{title:"表单显示",dataIndex:"isForm",width:80},{title:"查询配置",dataIndex:"isQuery",width:80},{title:"必填",dataIndex:"isRequired",width:80},{title:"组件类型",dataIndex:"componentType"},{title:"字典编码",dataIndex:"dictCode"},{title:"查询类型",dataIndex:"queryType"}],D=n({emits:["success","register"],setup(n,{emit:D}){const L=u(),R=u([]),V=r.Option,[F,{setTableData:B,getDataSource:O}]=T({columns:C,showTableSetting:!1,tableSetting:{fullScreen:!0},pagination:!1}),[S,{setModalProps:N,closeModal:Q}]=a((a=>e(this,null,(function*(){N({confirmLoading:!1}),L.value=a.record.id;const e=yield l({modelId:s(L),datasourceId:a.record.datasourceId});e.forEach((e=>{e.modelId=s(L),i(e.id)&&(e.isList=1,e.isForm=1,e.isRow=0,e.isRequired=0,e.isQuery=0,e.componentType="input"),i(e.name)||(e.jdbcName=e.name,e.jdbcType=e.propertyType,"LocalDateTime"===e.propertyType?(e.propertyType="Date",e.propertyEntity="java.util.Date"):q.forEach((a=>{a.label===e.propertyType&&(e.propertyType=a.label,e.propertyEntity=a.value)})))})),B(e),R.value=yield o()}))));function _(){return e(this,null,(function*(){try{N({confirmLoading:!0});const e=O();e.forEach((e=>{q.forEach((a=>{a.value===e.propertyEntity&&(e.propertyType=a.label)}))})),yield d(e),Q(),D("success")}finally{N({confirmLoading:!1})}}))}return(e,a)=>{const l=c("a-input");return p(),m(s(t),I(e.$attrs,{onRegister:s(S),title:"数据库模型配置",onOk:_,defaultFullscreen:!0}),{default:y((()=>[v(s(w),{onRegister:s(F)},{bodyCell:y((({column:e,record:a})=>["propertyName"===e.dataIndex?(p(),m(l,{key:0,value:a.propertyName,"onUpdate:value":e=>a.propertyName=e},null,8,["value","onUpdate:value"])):b("",!0),"comment"===e.dataIndex?(p(),m(l,{key:1,value:a.comment,"onUpdate:value":e=>a.comment=e},null,8,["value","onUpdate:value"])):b("",!0),"propertyEntity"===e.dataIndex?(p(),m(s(r),{key:2,value:a.propertyEntity,"onUpdate:value":e=>a.propertyEntity=e,style:{width:"100%"},options:s(q)},null,8,["value","onUpdate:value","options"])):b("",!0),"isForm"===e.dataIndex?(p(),m(s(h),{key:3,checked:a.isForm,"onUpdate:checked":e=>a.isForm=e,checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])):b("",!0),"isList"===e.dataIndex?(p(),m(s(h),{key:4,checked:a.isList,"onUpdate:checked":e=>a.isList=e,checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])):b("",!0),"isQuery"===e.dataIndex?(p(),m(s(h),{key:5,checked:a.isQuery,"onUpdate:checked":e=>a.isQuery=e,checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])):b("",!0),"isRequired"===e.dataIndex?(p(),m(s(h),{key:6,checked:a.isRequired,"onUpdate:checked":e=>a.isRequired=e,checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])):b("",!0),"queryType"===e.dataIndex?(p(),m(s(r),{key:7,value:a.queryType,"onUpdate:value":e=>a.queryType=e,style:{width:"100%"},options:s(U)},null,8,["value","onUpdate:value","options"])):b("",!0),"componentType"===e.dataIndex?(p(),m(s(r),{key:8,value:a.componentType,"onUpdate:value":e=>a.componentType=e,style:{width:"100%"},options:s(E)},null,8,["value","onUpdate:value","options"])):b("",!0),"dictCode"===e.dataIndex?(p(),m(s(r),{key:9,value:a.dictCode,"onUpdate:value":e=>a.dictCode=e,style:{width:"100%"}},{default:y((()=>[(p(!0),k(x,null,f(R.value,(e=>(p(),m(s(V),{key:`${e.dictValue}`,value:e.code},{default:y((()=>[j(g(e.dictValue),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])):b("",!0)])),_:1},8,["onRegister"])])),_:1},16,["onRegister"])}}});export{D as default};
