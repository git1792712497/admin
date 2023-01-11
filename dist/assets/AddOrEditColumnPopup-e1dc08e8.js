var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,s=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&n(e,t,a[t]);return e},u=(e,l)=>a(e,t(l)),i=(e,a,t)=>new Promise(((l,r)=>{var o=e=>{try{s(t.next(e))}catch(a){r(a)}},n=e=>{try{s(t.throw(e))}catch(a){r(a)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,n);s((t=t.apply(e,a)).next())}));import{bo as c,a as d,eg as m,w as p,ab as f,o as v,j as b,H as g,n as y,k as _,h,am as w,K as O,t as j,O as P,as as A,eh as I,ct as x}from"./index-c5a6c875.js";import{u as z,B as C}from"./index-c9e02f09.js";import L from"./ImageUpload-f0074c94.js";const E={name:[{required:!0,message:"栏目名称是必填项",trigger:"blur",whitespace:!0}],websiteId:[{required:!0,message:"站点名称是必选项",trigger:"blur",whitespace:!0}]};function R(e){return c.post({url:"/column/save",params:e})}function S(e){return c.post({url:"/column/query",params:u(s({pagination:{size:e.size,current:e.current}},e),{size:void 0,current:void 0})})}function U(e){return c.get({url:"/column/tree",params:e})}function q(e){return c.delete({url:`/column/destroy/${e}`})}const D=Object.freeze(Object.defineProperty({__proto__:null,getAddOrEditColumnApi:R,getColumnListApi:S,getWebsiteListApi:function(e){return c.post({url:"/website/query",params:u(s({pagination:{size:e.size,current:e.current}},e),{size:void 0,current:void 0})})},getColumnTreeApi:U,getColumnDeleteApi:q},Symbol.toStringTag,{value:"Module"})),T=d({emits:["success"],setup(e,{expose:a,emit:t}){const[l,{openModal:r}]=z();let o=m(!1),n=p({});const s=m(),u=()=>i(this,null,(function*(){yield s.value.validate();const e=A(_(n.value));o.value=!0;try{yield R(e),I.success("操作成功"),t("success"),r(!1)}finally{o.value=!1}})),c=m([]);let d=m([]);const S=e=>{const a=d.value.find((a=>a.id===e));n.value.websiteName=a.name,n.value.websiteDomain=a.domain};return a({openAddOrEditColumnPopup:e=>i(this,null,(function*(){n.value=e,r(),U().then((e=>{c.value=e.nodes}));const{getWebsiteListApi:a}=yield x((()=>Promise.resolve().then((()=>D))),void 0,import.meta.url),t=yield a({});d.value=t.records}))}),(e,a)=>{const t=f("a-select-option"),r=f("a-select"),i=f("a-form-item"),m=f("a-input"),p=f("a-tree-select"),A=f("a-form");return v(),b(_(C),{confirmLoading:_(o),forceRender:"",title:"新增栏目",onOk:u,onRegister:_(l)},{default:g((()=>[y(A,{ref_key:"formRef",ref:s,"label-col":{span:4},model:_(n),rules:_(E)},{default:g((()=>[y(i,{label:"站点名称",name:"websiteId"},{default:g((()=>[y(r,{onChange:S,value:_(n).websiteId,"onUpdate:value":a[0]||(a[0]=e=>_(n).websiteId=e),placeholder:"请选择站点"},{default:g((()=>[(v(!0),h(P,null,w(_(d),(e=>(v(),b(t,{value:e.id},{default:g((()=>[O(j(e.name),1)])),_:2},1032,["value"])))),256))])),_:1},8,["value"])])),_:1}),y(i,{label:"栏目名称",name:"name"},{default:g((()=>[y(m,{value:_(n).name,"onUpdate:value":a[1]||(a[1]=e=>_(n).name=e),"allow-clear":"",placeholder:"请输入站点名称"},null,8,["value"])])),_:1}),y(i,{label:"所属栏目",name:"parentId"},{default:g((()=>[y(p,{value:_(n).parentId,"onUpdate:value":a[2]||(a[2]=e=>_(n).parentId=e),fieldNames:{children:"children",label:"name",value:"id"},"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"请选择所属栏目名称","allow-clear":"","tree-data":_(c)},null,8,["value","tree-data"])])),_:1}),y(i,{label:"站点图标",name:"icon"},{default:g((()=>[y(L,{modelValue:_(n).icon,"onUpdate:modelValue":a[3]||(a[3]=e=>_(n).icon=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["confirmLoading","onRegister"])}}}),V=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{V as A,T as _,q as a,S as g};
