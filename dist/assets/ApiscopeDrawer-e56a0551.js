var e=(e,i,o)=>new Promise(((t,s)=>{var a=e=>{try{n(o.next(e))}catch(i){s(i)}},r=e=>{try{n(o.throw(e))}catch(i){s(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);n((o=o.apply(e,i)).next())}));import{B as i}from"./TableImg-d2c728a3.js";import{T as o}from"./useForm-76a4ff23.js";import{u as t}from"./useTable-0a379cac.js";import{u as s,B as a}from"./index-6c947566.js";import{g as r,r as n}from"./scope-98debdcf.js";import{a as c,s as l,_ as d}from"./ApiscopeModal-8c70d329.js";import{u as m}from"./index-c9e02f09.js";import{a as u,w as p,ab as f,o as b,j,H as g,n as h,k as x,l as y,ag as v,K as w,S as C}from"./index-c5a6c875.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useWindowSizeFn-72c85a53.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./FullscreenOutlined-9b414b92.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";import"./system-54dc9bf1.js";import"./index-2c15cc4f.js";const I=w("新增"),R=u({setup(u){const w=p(""),R=p(""),{createMessage:k}=C(),{success:_}=k,[D,{openModal:F}]=m(),[M,{reload:O,setProps:P}]=t({api:r,columns:c,formConfig:{labelWidth:120,schemas:l},rowKey:"id",immediate:!1,striped:!1,useSearchForm:!0,canResize:!1,actionColumn:{width:200,title:"操作",dataIndex:"action"}}),[S,{setDrawerProps:q}]=s((i=>e(this,null,(function*(){P({searchInfo:{menuId:i.record.id}}),w.value=i.record.name,R.value=i.record.id,O(),q({confirmLoading:!1})}))));function B(){F(!0,{isUpdate:!1,isDetail:!1,menuId:R.value})}function T(e){F(!0,{record:e,isUpdate:!0,isDetail:!1,menuId:R.value})}function U(e){F(!0,{record:e,isUpdate:!1,isDetail:!0})}function z(i){return e(this,null,(function*(){yield n({ids:i.id}),_("操作成功"),O()}))}function A(){_("操作成功"),O()}return(e,t)=>{const s=f("a-button");return b(),j(x(a),v(e.$attrs,{onRegister:x(S),title:"["+w.value+"]接口权限配置",width:"1000px"}),{default:g((()=>[h(x(i),{onRegister:x(M)},{toolbar:g((()=>[h(s,{type:"primary",onClick:B},{default:g((()=>[I])),_:1})])),bodyCell:g((({column:e,record:i})=>["action"===e.dataIndex?(b(),j(x(o),{key:0,actions:[{label:"查看",color:"success",icon:"clarity:info-standard-line",onClick:U.bind(null,i)},{label:"编辑",icon:"clarity:note-edit-line",onClick:T.bind(null,i)},{label:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:z.bind(null,i)}}]},null,8,["actions"])):y("",!0)])),_:1},8,["onRegister"]),h(d,{onRegister:x(D),onSuccess:A},null,8,["onRegister"])])),_:1},16,["onRegister","title"])}}});export{R as default};
