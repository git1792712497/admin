import e from"./TopQuery-b16da3fe.js";import{g as t,_ as o,a as i}from"./AddOrEditColumnPopup-e1dc08e8.js";import{F as a,B as s}from"./TableImg-d2c728a3.js";import"./useForm-76a4ff23.js";import{u as r}from"./useTable-0a379cac.js";import{a as n,eg as d,ab as m,o as l,h as p,n as c,k as u,H as f,j,l as b,O as y,K as h,eh as x}from"./index-c5a6c875.js";import{E as w}from"./EyeOutlined-274e25e9.js";import{D as k}from"./DeleteOutlined-2ff0b91d.js";import"./index-c9e02f09.js";import"./useWindowSizeFn-72c85a53.js";import"./FullscreenOutlined-9b414b92.js";import"./isEqual-f9888ec4.js";import"./_baseIsEqual-f0bca653.js";import"./ImageUpload-f0074c94.js";import"./attach-17a7a276.js";import"./index-33df9098.js";import"./onMountedOrActivated-48cd1b25.js";import"./useContentViewHeight-e138bd2a.js";import"./CheckOutlined-752df576.js";import"./uuid-f62a8acd.js";import"./merge-5148c4a3.js";import"./get-8f9589fb.js";import"./sortable.esm-7c85b602.js";import"./RedoOutlined-e07a9f51.js";import"./index-bb91fa2a.js";import"./download-0641dcf7.js";import"./index-b52e0339.js";import"./uniqBy-e29b0e8a.js";const g=[{title:"站点名称",dataIndex:"websiteName",width:250},{title:"站点域名",dataIndex:"websiteDomain",width:250},{title:"栏目名称",dataIndex:"name",width:250},{title:"栏目图标",dataIndex:"icon",width:100,key:4},{title:"操作",width:200,fixed:"right",key:99}],C=h("编辑"),O=h("删除"),E=n({setup(n){const h=d(),[E,{reload:_}]=r({api:t}),v=e=>{return t=this,o=null,a=function*(){try{yield i(e),x.success("删除成功"),_()}catch(t){}},new Promise(((e,i)=>{var s=e=>{try{n(a.next(e))}catch(t){i(t)}},r=e=>{try{n(a.throw(e))}catch(t){i(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);n((a=a.apply(t,o)).next())}));var t,o,a};return(t,i)=>{const r=m("a-image"),n=m("a-button"),d=m("a-popconfirm");return l(),p("section",null,[c(e,{onAddColumn:i[0]||(i[0]=e=>u(h).openAddOrEditColumnPopup({}))}),c(o,{onSuccess:u(_),ref_key:"addOrEditColumnPopupRef",ref:h},null,8,["onSuccess"]),c(u(s),{onRegister:u(E),title:"栏目列表",columns:u(g),rowKey:e=>e.id,striped:!1},{bodyCell:f((({text:e,record:t,index:o,column:i})=>[4===i.key?(l(),j(r,{key:0,width:40,src:e},{previewMask:f((()=>[c(u(w))])),_:2},1032,["src"])):b("",!0),99===i.key?(l(),p(y,{key:1},[c(n,{type:"link",onClick:e=>u(h).openAddOrEditColumnPopup(t)},{default:f((()=>[C,c(u(a))])),_:2},1032,["onClick"]),c(d,{onConfirm:e=>v(t.id),title:"是否确认删除?","ok-text":"确认","cancel-text":"取消"},{default:f((()=>[c(n,{type:"link",danger:""},{default:f((()=>[O,c(u(k))])),_:1})])),_:2},1032,["onConfirm"])],64)):b("",!0)])),_:1},8,["onRegister","columns","rowKey"])])}}});export{E as default};
