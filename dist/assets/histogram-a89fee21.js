var g=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(r,t,o)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,c=(r,t)=>{for(var o in t||(t={}))b.call(t,o)&&l(r,o,t[o]);if(m)for(var o of m(t))x.call(t,o)&&l(r,o,t[o]);return r},d=(r,t)=>f(r,y(t));var p=(r,t,o)=>new Promise((i,n)=>{var u=e=>{try{a(o.next(e))}catch(s){n(s)}},_=e=>{try{a(o.throw(e))}catch(s){n(s)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(u,_);a((o=o.apply(r,t)).next())});import{B as w}from"./element-plus-3c3e7816.js";import{a as S}from"./fastMock-363d1544.js";import{u as v}from"./useEcharts-4e62d437.js";import{F as h,h as C,o as k,$ as I,a0 as L,b7 as B,b6 as z,a as A}from"./@vue-0bd7c233.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-unified-cbbf5a2b.js";import"./lodash-d8f670e1.js";import"./@amap-9fd45ac7.js";import"./@sxzz-ad8bfd58.js";import"./@vueuse-b3c2dc13.js";import"./@element-plus-9f43ecf9.js";import"./dayjs-604b50be.js";import"./async-validator-f102eabc.js";import"./@ctrl-83f18216.js";import"./escape-html-12e99df8.js";import"./normalize-wheel-es-c175a4cf.js";import"./vue-171b62d6.js";import"./@floating-ui-5f39704e.js";import"./memoize-one-0650c7b0.js";import"./menu-2a3ae1f5.js";import"./pinia-c63b1ff9.js";import"./vue-demi-71ba0ef2.js";import"./axios-226f391c.js";import"./qs-b010a38c.js";import"./side-channel-a082fe58.js";import"./get-intrinsic-5660d814.js";import"./has-symbols-8f82dcae.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-75c15918.js";import"./object-inspect-4572ba77.js";import"./preload-helper-41c905a7.js";import"./vue-router-169b55e4.js";import"./nprogress-57f984c9.js";import"./lodash-es-81e82e73.js";import"./echarts-1cced66d.js";import"./zrender-64700203.js";import"./tslib-ca4cd265.js";function O(){return p(this,null,function*(){const{data:r}=yield S();return{backgroundColor:"rgba(55,0,0,0.1)",title:{text:"ECharts 配置"},tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:"<div>tooltip</div>"},grid:{left:"8%",top:"10%",right:"5%",bottom:"15%",show:!0,backgroundColor:"rgba(255,0,0,0.1)",containLabel:!0},dataZoom:[{show:!0,height:12,xAxisIndex:[0],bottom:"8%",start:10,end:90,handleSize:"110%",handleStyle:{color:"#292a2d"},textStyle:{color:"#292a2d"},borderColor:"#292a2d"},{type:"inside",show:!0,height:15,start:1,end:35}],xAxis:{show:!0,name:"类目坐标",type:"category",data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],axisLine:{show:!0,lineStyle:{color:"red",width:3}},axisLabel:{show:!0,color:"green",fontSize:26},axisTick:{show:!0,length:10,lineStyle:{color:"blue",width:3}},splitLine:{show:!0,lineStyle:{color:"orange",width:1}}},yAxis:{name:"数量(件)",axisLabel:{formatter:function(t,o){return t+"kg"+o}}},legend:{data:[{name:"销量",icon:"circle",textStyle:{color:"red"}}]},series:[{name:"销量",type:"bar",data:r,barWidth:50,label:{show:!0,position:"top",color:"red",fontSize:16,formatter:function(t){return"自定义"}},itemStyle:{borderColor:"orange",borderWidth:4,opacity:.4,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"red"},{offset:1,color:"blue"}]}}}]}})}const W=r=>(B("data-v-6da20bc5"),r=r(),z(),r),D=W(()=>A("div",{class:"histogram"},null,-1)),F=h({name:"histogram"}),H=h(d(c({},F),{setup(r){return C(()=>p(this,null,function*(){const{setOption:t}=v(".histogram"),o=yield O();t(o)})),(t,o)=>{const i=w;return k(),I(i,{"body-style":{height:"100%"},shadow:"hover",style:{height:"100%"}},{default:L(()=>[D]),_:1})}}}));const St=E(H,[["__scopeId","data-v-6da20bc5"]]);export{St as default};
