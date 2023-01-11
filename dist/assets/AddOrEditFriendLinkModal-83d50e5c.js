var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},s=(e,a,t)=>new Promise(((l,r)=>{var n=e=>{try{i(t.next(e))}catch(a){r(a)}},o=e=>{try{i(t.throw(e))}catch(a){r(a)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,o);i((t=t.apply(e,a)).next())}));import{bo as u,a as d,eg as c,w as p,ab as m,o as f,j as v,H as b,n as g,k as y,h,am as _,K as w,t as O,O as j,as as L,eh as k,ct as P}from"./index-c5a6c875.js";import{u as A,B as I}from"./index-c9e02f09.js";import x from"./ImageUpload-f0074c94.js";const U={name:[{required:!0,message:"友情链接名称是必填项",trigger:"blur",whitespace:!0}],websiteId:[{required:!0,message:"站点是必选项",trigger:"blur",whitespace:!0}],url:[{required:!0,message:"url地址是必填项",trigger:"blur",whitespace:!0}]};function R(e){return u.post({url:"/link/save",params:e})}function q(e){return u.post({url:"/link/query",params:(l=i({pagination:{size:e.size,current:e.current}},e),r={size:void 0,current:void 0},a(l,t(r)))});var l,r}function z(e){return u.get({url:"/link/tree",params:e})}function E(e){return u.delete({url:`/link/destroy/${e}`})}const F=Object.freeze(Object.defineProperty({__proto__:null,getAddOrEditFriendLinkApi:R,getFriendLinkListApi:q,getFriendLinkTreeApi:z,getFriendLinkDeleteApi:E,getWebsiteListApi:function(e){return u.post({url:"/website/query",params:e})}},Symbol.toStringTag,{value:"Module"})),S=d({emits:["success"],setup(e,{expose:a,emit:t}){const[l,{openModal:r}]=A();let n=c(!1),o=p({});const i=c(),u=()=>s(this,null,(function*(){yield i.value.validate();const e=L(y(o.value));n.value=!0;try{yield R(e),k.success("操作成功"),t("success"),r(!1)}finally{n.value=!1}})),d=c([]);let q=c([]);const E=e=>{const a=q.value.find((a=>a.id===e));o.value.websiteName=a.name,o.value.websiteDomain=a.domain};return a({openAddOrEditFriendLinkPopup:e=>s(this,null,(function*(){o.value=e,r(),z().then((e=>{d.value=e.nodes}));const{getWebsiteListApi:a}=yield P((()=>Promise.resolve().then((()=>F))),void 0,import.meta.url),t=yield a({});q.value=t.records}))}),(e,a)=>{const t=m("a-select-option"),r=m("a-select"),s=m("a-form-item"),c=m("a-input"),p=m("a-tree-select"),L=m("a-form");return f(),v(y(I),{confirmLoading:y(n),forceRender:"",title:y(o).id?"编辑友情链接":"新增友情链接",onOk:u,onRegister:y(l)},{default:b((()=>[g(L,{ref_key:"formRef",ref:i,"label-col":{span:4},model:y(o),rules:y(U)},{default:b((()=>[g(s,{label:"站点名称",name:"websiteId"},{default:b((()=>[g(r,{onChange:E,value:y(o).websiteId,"onUpdate:value":a[0]||(a[0]=e=>y(o).websiteId=e),placeholder:"请选择站点"},{default:b((()=>[(f(!0),h(j,null,_(y(q),(e=>(f(),v(t,{value:e.id},{default:b((()=>[w(O(e.name),1)])),_:2},1032,["value"])))),256))])),_:1},8,["value"])])),_:1}),g(s,{label:"链接名称",name:"name"},{default:b((()=>[g(c,{value:y(o).name,"onUpdate:value":a[1]||(a[1]=e=>y(o).name=e),"allow-clear":"",placeholder:"请输入站点名称"},null,8,["value"])])),_:1}),g(s,{label:"URL地址",name:"url"},{default:b((()=>[g(c,{value:y(o).url,"onUpdate:value":a[2]||(a[2]=e=>y(o).url=e),"allow-clear":"",placeholder:"请输入URL地址"},null,8,["value"])])),_:1}),g(s,{label:"所属类目",name:"parentId"},{default:b((()=>[g(p,{value:y(o).parentId,"onUpdate:value":a[3]||(a[3]=e=>y(o).parentId=e),fieldNames:{children:"children",label:"name",value:"id"},"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"请选择所属栏目名称","allow-clear":"","tree-data":y(d)},null,8,["value","tree-data"])])),_:1}),g(s,{label:"友联图标",name:"icon"},{default:b((()=>[g(x,{modelValue:y(o).icon,"onUpdate:modelValue":a[4]||(a[4]=e=>y(o).icon=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["confirmLoading","title","onRegister"])}}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{D as A,S as _,E as a,q as g};
