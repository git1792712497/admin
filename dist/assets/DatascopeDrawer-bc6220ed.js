var e=(e,a,i)=>new Promise(((o,t)=>{var s=e=>{try{n(i.next(e))}catch(a){t(a)}},r=e=>{try{n(i.throw(e))}catch(a){t(a)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,r);n((i=i.apply(e,a)).next())}));import{B as a}from"./TableImg-d2c728a3.js";import{T as i}from"./useForm-76a4ff23.js";import{u as o}from"./useTable-0a379cac.js";import{B as t,u as s}from"./index-6c947566.js";import{b as r,c as n}from"./scope-98debdcf.js";import{_ as l,a as c,s as d}from"./DatascopeModal-4fa2ada1.js";import{u as m}from"./index-c9e02f09.js";import{s as u,a as p,w as f,ab as b,o as j,j as h,H as g,n as w,l as C,ag as D,K as v,S as x}from"./index-c5a6c875.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useWindowSizeFn-72c85a53.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./FullscreenOutlined-9b414b92.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";import"./system-54dc9bf1.js";import"./index-2c15cc4f.js";const y=p({name:"ApiscopeDrawer",components:{BasicDrawer:t,BasicTable:a,TableAction:i,DatascopeModal:l},emits:["register"],setup(a){const i=f(""),t=f(""),l=f(""),{createMessage:u}=x(),{success:p}=u,[b,{openModal:j}]=m(),[h,{reload:g,setProps:w}]=o({api:r,columns:c,formConfig:{labelWidth:120,schemas:d},rowKey:"id",immediate:!1,striped:!1,useSearchForm:!0,canResize:!1,actionColumn:{width:200,title:"操作",dataIndex:"action"}}),[C,{setDrawerProps:D}]=s((a=>e(this,null,(function*(){w({searchInfo:{menuId:a.record.id}}),i.value=a.record.name,t.value=a.record.id,l.value=a.record.code,g(),D({confirmLoading:!1})}))));return{registerDrawer:C,registerModal:b,dataConfigTable:h,handleCreate:function(){j(!0,{isUpdate:!1,isDetail:!1,menuId:t.value,code:l.value,menuName:i.value})},handleEdit:function(e){j(!0,{record:e,isUpdate:!0,isDetail:!1,menuId:t.value})},handleView:function(e){j(!0,{record:e,isUpdate:!1,isDetail:!0})},handleDelete:function(a){return e(this,null,(function*(){yield n({ids:a.id}),p("操作成功"),g()}))},handleSuccess:function(){p("操作成功"),g()},menuName:i}}}),T=v("新增");const I=u(y,[["render",function(e,a,i,o,t,s){const r=b("a-button"),n=b("TableAction"),l=b("BasicTable"),c=b("DatascopeModal"),d=b("BasicDrawer");return j(),h(d,D(e.$attrs,{onRegister:e.registerDrawer,title:"["+e.menuName+"]接口权限配置",width:"1000px"}),{default:g((()=>[w(l,{onRegister:e.dataConfigTable},{toolbar:g((()=>[w(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[T])),_:1},8,["onClick"])])),bodyCell:g((({column:a,record:i})=>["action"===a.dataIndex?(j(),h(n,{key:0,actions:[{label:"查看",color:"success",icon:"clarity:info-standard-line",onClick:e.handleView.bind(null,i)},{label:"编辑",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{label:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])):C("",!0)])),_:1},8,["onRegister"]),w(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},16,["onRegister","title"])}]]);export{I as default};
