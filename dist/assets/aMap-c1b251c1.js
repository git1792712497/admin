var C=Object.defineProperty,v=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))x.call(e,o)&&g(t,o,e[o]);if(_)for(var o of _(e))B.call(e,o)&&g(t,o,e[o]);return t},w=(t,e)=>v(t,k(e));var y=(t,e,o)=>new Promise((s,d)=>{var f=n=>{try{l(o.next(n))}catch(c){d(c)}},a=n=>{try{l(o.throw(n))}catch(c){d(c)}},l=n=>n.done?s(n.value):Promise.resolve(n.value).then(f,a);l((o=o.apply(t,e)).next())});import{W as L,B as V}from"./element-plus-cbff5993.js";import{A as I}from"./@amap-9fd45ac7.js";import{g as M,s as z,j as G,o as T,ab as E,ac as A,c as P,u as R,y as j,b8 as D,b7 as K,b as N}from"./@vue-f164b9f1.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b183cf27.js";import"./@element-plus-296a610a.js";import"./dayjs-f0fd0f9b.js";import"./async-validator-f102eabc.js";import"./@ctrl-43a29356.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-4c7ac246.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";const F=t=>(D("data-v-53448947"),t=t(),K(),t),H=F(()=>N("main",{id:"container"},null,-1)),J=M({name:"aMap"}),U=M(w(h({},J),{setup(t){window._AMapSecurityConfig={securityJsCode:"f86c6dbb0585f5df290482f25aee1ed7"};let e=z(),o,s;G(()=>y(this,null,function*(){const a=yield I.load({key:"ca5fdff50eb80a3399c114cde9ebf1cc",version:"2.0",plugins:["AMap.Scale"],Loca:{version:"2.0"}});s=new a.Map("container",{viewMode:"3D",zoom:5,center:[105.602725,37.076636]}),s.setDefaultCursor("pointer"),s.plugin(["AMap.ToolBar","AMap.Scale","AMap.Geocoder","AMap.Geolocation","AMap.PlaceSearch"],()=>{s.addControl(new a.ToolBar),s.addControl(new a.Scale),s.addControl(new a.Geolocation({enableHighAccuracy:!0,timeout:1e4,position:"RT",buttonOffset:new a.Pixel(10,20),zoomToAccuracy:!0}))});const l=new a.Geocoder({city:"全国"});let n=[];s.on("click",c=>{const r=c.lnglat.lat,i=c.lnglat.lng;l.getAddress([i,r],(m,p)=>{if(m==="complete"&&p.info==="OK"){const{addressComponent:S,formattedAddress:b}=p.regeocode;console.log(S),console.log(b);const u=new a.Marker({position:new a.LngLat(i,r),title:"北京"});s.remove(n),s.add([u]),n.push(u)}else console.log(p)})}),o=new a.PlaceSearch({map:s,city:"",pageSize:30,pageIndex:1,citylimit:!1,autoFitView:!0})}));const d=(a,l)=>{console.log(a),console.log(l),o.search(a,(n,c)=>{if(c&&typeof c=="object"&&c.poiList){const r=c.poiList.pois;r.forEach(i=>{i.value=i.name,i.label=i.name}),l(r)}else l([])})};function f(a){const{pname:l,cityname:n,adname:c,address:r,name:i}=a,{lng:m,lat:p}=a.location;console.log({longitude:m,latitude:p,address:r,zone:[l,n,c],name:i}),s.setZoomAndCenter(16,[m,p])}return(a,l)=>{const n=L,c=V;return T(),E(c,{"body-style":{height:"100%"},shadow:"hover",style:{height:"100%"}},{header:A(()=>[P(n,{modelValue:R(e),"onUpdate:modelValue":l[0]||(l[0]=r=>j(e)?e.value=r:e=r),"fetch-suggestions":d,"trigger-on-focus":!1,clearable:"",placeholder:"输入城市+关键字搜索",onSelect:f},null,8,["modelValue"])]),default:A(()=>[H]),_:1})}}}));const de=O(U,[["__scopeId","data-v-53448947"]]);export{de as default};
