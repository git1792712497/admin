var g=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(a,t,e)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,d=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&c(a,e,t[e]);if(p)for(var e of p(t))C.call(t,e)&&c(a,e,t[e]);return a},v=(a,t)=>b(a,w(t));var h=(a,t,e)=>new Promise((o,n)=>{var r=i=>{try{m(e.next(i))}catch(s){n(s)}},l=i=>{try{m(e.throw(i))}catch(s){n(s)}},m=i=>i.done?o(i.value):Promise.resolve(i.value).then(r,l);m((e=e.apply(a,t)).next())});import"./base-27e822c2.js";import{E as I}from"./el-card-e0fbc180.js";import{e as _}from"./config-7e2d851d.js";import{u as x}from"./useEcharts-b942be57.js";import{d as f,l as M,o as S,c as O,b as B,b2 as D,b1 as E,_ as k}from"./runtime-core.esm-bundler-76eda81d.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./require-bb924a95.js";import"./plugin-vue_export-helper-529fb311.js";import"./axios-a669db54.js";import"./index-fdf782ca.js";import"./index-2ac923fb.js";import"./runtime-dom.esm-bundler-eeabfc76.js";import"./index-3b581194.js";import"./index-eaab5364.js";import"./index-fb510e2d.js";import"./index-70bf8c62.js";import"./index-806b99e8.js";import"./index-c9bb1d9b.js";import"./pinia-fa254974.js";function T(){return _.get({url:"/map/chinaMapData"})}function N(){return _.get({url:"/map/yunNan"})}let U=[{name:"北京",value:0},{name:"天津",value:0},{name:"上海",value:0},{name:"重庆",value:0},{name:"河北",value:0},{name:"河南",value:0},{name:"云南",value:0},{name:"辽宁",value:0},{name:"黑龙江",value:0},{name:"湖南",value:0},{name:"安徽",value:0},{name:"山东",value:0},{name:"新疆",value:0},{name:"江苏",value:0},{name:"浙江",value:0},{name:"江西",value:0},{name:"湖北",value:0},{name:"广西",value:0},{name:"甘肃",value:0},{name:"山西",value:0},{name:"内蒙古",value:0},{name:"陕西",value:0},{name:"吉林",value:0},{name:"福建",value:0},{name:"贵州",value:0},{name:"广东",value:0},{name:"青海",value:0},{name:"西藏",value:0},{name:"四川",value:0},{name:"宁夏",value:0},{name:"海南",value:0},{name:"台湾",value:0},{name:"南海诸岛",value:0},{name:"香港",value:0},{name:"澳门",value:0}];const u={animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",grid:{right:"2%",top:"10%",bottom:"10%",width:"18%"},tooltip:{show:!0},visualMap:{min:0,max:1e4,left:26,bottom:45,showLabel:!0,text:["高","低"],pieces:[{gt:2e3,label:"> 2000 件",color:"#16dbee"},{gte:1e3,lte:2e3,label:"1000-2000 件",color:"#b7d100"},{gte:100,lt:1e3,label:"100-1000 件",color:"#75bd8a"},{gt:0,lt:100,label:"0-100 件",color:"#ffd768"}]},series:[{name:"订单销售量",type:"map",map:"china",geoIndex:0,label:{show:!0,fontSize:"14",color:"rgba(0,0,0,0.7)"},itemStyle:{shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)",borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"red"}},data:U.map(a=>({name:a.name,value:parseInt((Math.random()*3e3).toString())}))}]},j=a=>(D("data-v-526723ff"),a=a(),E(),a),z=j(()=>k("div",{class:"mapChart"},null,-1)),A=f({name:"mapChart"}),V=f(v(d({},A),{setup(a){return M(()=>h(this,null,function*(){const{setOption:t,echartsInstance:e,echarts:o}=x(".mapChart");o.registerMap("china",yield T()),e.showLoading(),t(u),setTimeout(()=>e.hideLoading(),500),setInterval(function(){r()},1e3);let n=0;function r(){n++,n>33&&(n=0),e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:n,position:"top"})}e.on("click",({name:l})=>{Object.is(l,"云南")&&N().then(m=>{console.log(m),o.getMap(l)||o.registerMap(l,m),u.series[0].map=l,e.setOption(u)})})})),(t,e)=>{const o=I;return S(),O(o,{shadow:"hover",style:{height:"100%"},"body-style":{height:"100%"}},{default:B(()=>[z]),_:1})}}}));const le=L(V,[["__scopeId","data-v-526723ff"]]);export{le as default};
