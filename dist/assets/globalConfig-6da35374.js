var m=(t,a,e)=>new Promise((n,s)=>{var f=r=>{try{o(e.next(r))}catch(i){s(i)}},u=r=>{try{o(e.throw(r))}catch(i){s(i)}},o=r=>r.done?n(r.value):Promise.resolve(r.value).then(f,u);o((e=e.apply(t,a)).next())});import{_ as p}from"./preload-helper-41c905a7.js";import{d as c}from"./pinia-b6a13eed.js";const d=c("globalConfig",{persist:!0,state:()=>({componentSize:"default",primary:"#409eff",isDark:!1,breadcrumb:!0,tabs:!0,footer:!0}),actions:{setTheme(){return m(this,null,function*(){const{useDark:t,changePrimary:a}=yield p(()=>import("./useTheme-3bdcfed4.js"),["./useTheme-3bdcfed4.js","./theme-a5657130.js","./element-plus-cbff5993.js","./lodash-unified-cbbf5a2b.js","./lodash-d8f670e1.js","./@amap-9fd45ac7.js","./@sxzz-ad8bfd58.js","./@vue-f164b9f1.js","./@vueuse-b183cf27.js","./@element-plus-296a610a.js","./dayjs-f0fd0f9b.js","./async-validator-f102eabc.js","./@ctrl-43a29356.js","./escape-html-12e99df8.js","./normalize-wheel-es-c175a4cf.js","./vue-4c7ac246.js","./@floating-ui-5f39704e.js","./memoize-one-0650c7b0.js","./element-plus-f9073272.css","./preload-helper-41c905a7.js","./pinia-b6a13eed.js","./vue-demi-68b8001f.js"],import.meta.url);this.isDark&&t(),a(this.primary)})}}});export{d as g};
