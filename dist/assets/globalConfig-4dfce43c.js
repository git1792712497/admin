var m=(t,a,e)=>new Promise((n,s)=>{var f=r=>{try{o(e.next(r))}catch(i){s(i)}},u=r=>{try{o(e.throw(r))}catch(i){s(i)}},o=r=>r.done?n(r.value):Promise.resolve(r.value).then(f,u);o((e=e.apply(t,a)).next())});import{_ as p}from"./preload-helper-41c905a7.js";import{d as c}from"./pinia-c63b1ff9.js";const d=c("globalConfig",{persist:!0,state:()=>({componentSize:"default",primary:"#409eff",isDark:!1,breadcrumb:!0,tabs:!0,footer:!0}),actions:{setTheme(){return m(this,null,function*(){const{useDark:t,changePrimary:a}=yield p(()=>import("./useTheme-6ef7a7a4.js"),["./useTheme-6ef7a7a4.js","./theme-c2d6d45d.js","./element-plus-3c3e7816.js","./lodash-unified-cbbf5a2b.js","./lodash-d8f670e1.js","./@amap-9fd45ac7.js","./@sxzz-ad8bfd58.js","./@vue-0bd7c233.js","./@vueuse-b3c2dc13.js","./@element-plus-9f43ecf9.js","./dayjs-604b50be.js","./async-validator-f102eabc.js","./@ctrl-83f18216.js","./escape-html-12e99df8.js","./normalize-wheel-es-c175a4cf.js","./vue-171b62d6.js","./@floating-ui-5f39704e.js","./memoize-one-0650c7b0.js","./element-plus-e4137e6d.css","./preload-helper-41c905a7.js","./pinia-c63b1ff9.js","./vue-demi-71ba0ef2.js"],import.meta.url);this.isDark&&t(),a(this.primary)})}}});export{d as g};
