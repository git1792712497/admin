var x=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(r,l,o)=>l in r?x(r,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[l]=o,f=(r,l)=>{for(var o in l||(l={}))U.call(l,o)&&i(r,o,l[o]);if(m)for(var o of m(l))g.call(l,o)&&i(r,o,l[o]);return r},c=(r,l)=>y(r,E(l));import{w as k,x as h,N as v,O as F,y as N}from"./element-plus-cbff5993.js";import{I as R}from"./index-a56e33e9.js";import{b as a,c as B,a as L}from"./rules-b9e771ba.js";import{g as _,r as S,o as j,ab as O,ac as s,c as u,u as e,i as T}from"./@vue-f164b9f1.js";const $=_({name:"Catalogue"}),J=_(c(f({},$),{setup(r,{expose:l}){const o=S(),V=T("menuList");function b(){return L(o)}return l({validate:b}),(q,t)=>{const d=k,p=h,I=v,w=F,C=N;return j(),O(C,{ref_key:"formRef",ref:o,model:e(a),"status-icon":"",rules:e(B),"label-width":"80px"},{default:s(()=>[u(p,{label:"目录名称",prop:"title"},{default:s(()=>[u(d,{modelValue:e(a).title,"onUpdate:modelValue":t[0]||(t[0]=n=>e(a).title=n),clearable:"",autofocus:"",placeholder:"请输入目录标题"},null,8,["modelValue"])]),_:1}),u(p,{label:"父级目录",prop:"parentId"},{default:s(()=>[u(I,{onClear:t[1]||(t[1]=n=>e(a).path=""),onCurrentChange:t[2]||(t[2]=({path:n})=>e(a).path=n),modelValue:e(a).parentId,"onUpdate:modelValue":t[3]||(t[3]=n=>e(a).parentId=n),data:e(V),"check-strictly":"",clearable:"",props:{label:"title",children:"children",value:"id"},style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),u(p,{label:"目录路由",prop:"path"},{default:s(()=>[u(d,{modelValue:e(a).path,"onUpdate:modelValue":t[4]||(t[4]=n=>e(a).path=n),clearable:"",placeholder:"请输入路由路径"},null,8,["modelValue"])]),_:1}),u(p,{label:"目录图标",prop:"icon"},{default:s(()=>[u(R,{class:"w-full",modelValue:e(a).icon,"onUpdate:modelValue":t[5]||(t[5]=n=>e(a).icon=n)},null,8,["modelValue"])]),_:1}),u(p,{label:"目录排序",prop:"sort"},{default:s(()=>[u(w,{modelValue:e(a).sort,"onUpdate:modelValue":t[6]||(t[6]=n=>e(a).sort=n),placeholder:"目录序号",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}));export{J as _};
