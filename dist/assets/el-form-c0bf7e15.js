var ke=Object.defineProperty,Te=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ne=(l,o,e)=>o in l?ke(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,x=(l,o)=>{for(var e in o||(o={}))ue.call(o,e)&&ne(l,e,o[e]);if(z)for(var e of z(o))de.call(o,e)&&ne(l,e,o[e]);return l},q=(l,o)=>Te(l,De(o));var ce=(l,o)=>{var e={};for(var a in l)ue.call(l,a)&&o.indexOf(a)<0&&(e[a]=l[a]);if(l!=null&&z)for(var a of z(l))o.indexOf(a)<0&&de.call(l,a)&&(e[a]=l[a]);return e};var B=(l,o,e)=>new Promise((a,t)=>{var d=b=>{try{c(e.next(b))}catch(h){t(h)}},n=b=>{try{c(e.throw(b))}catch(h){t(h)}},c=b=>b.done?a(b.value):Promise.resolve(b.value).then(d,n);c((e=e.apply(l,o)).next())});import{b as be,d as J,r as $,g as Z,w as Ue,c as Ke}from"./base-c9ac7f1d.js";import{c as ye,a as _e,d as re,f as Q}from"./index-17e0c752.js";import{s as Ge,f as ee,Y as V,U as v,d as R,w as T,X as Se,V as Fe,a9 as We,o as te,Z as we,r as k,ao as O,u as f,i as Ee,W as D,l as Ie,aU as xe,D as Xe,e as U,F as Ye,n as Ce,bf as Ze,b as H,c as He,b5 as Je,aq as fe,aE as Qe,ar as me,aB as ve,_ as pe}from"./runtime-core.esm-bundler-763b24c9.js";import{a1 as Le,V as et}from"./index-e4b86012.js";import{u as le,_ as Me}from"./plugin-vue_export-helper-2c43b310.js";import{d as tt,t as rt}from"./error-78e43d3e.js";import{T as lt}from"./runtime-dom.esm-bundler-5921b3d0.js";import{S as ot}from"./index-806b99e8.js";import{b as at}from"./index-f7939e7d.js";import{u as st}from"./index-cfc72b3d.js";import{a as he}from"./style-be20bb62.js";const it=be({model:Object,rules:{type:J(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:ye},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),nt={validate:(l,o,e)=>(Ge(l)||ee(l))&&Le(o)&&ee(e)};function ut(){const l=V([]),o=v(()=>{if(!l.value.length)return"0";const d=Math.max(...l.value);return d?`${d}px`:""});function e(d){const n=l.value.indexOf(d);return n===-1&&o.value,n}function a(d,n){if(d&&n){const c=e(n);l.value.splice(c,1,d)}else d&&l.value.push(d)}function t(d){const n=e(d);n>-1&&l.value.splice(n,1)}return{autoLabelWidth:o,registerLabelWidth:a,deregisterLabelWidth:t}}const j=(l,o)=>{const e=$.castArray(o);return e.length>0?l.filter(a=>a.prop&&e.includes(a.prop)):l},dt="ElForm",ct=R({name:dt}),ft=R(q(x({},ct),{props:it,emits:nt,setup(l,{expose:o,emit:e}){const a=l,t=[],d=_e(),n=le("form"),c=v(()=>{const{labelPosition:i,inline:m}=a;return[n.b(),n.m(d.value||"default"),{[n.m(`label-${i}`)]:i,[n.m("inline")]:m}]}),b=i=>{t.push(i)},h=i=>{i.prop&&t.splice(t.indexOf(i),1)},u=(i=[])=>{!a.model||j(t,i).forEach(m=>m.resetField())},y=(i=[])=>{j(t,i).forEach(m=>m.clearValidate())},S=v(()=>!!a.model),C=i=>{if(t.length===0)return[];const m=j(t,i);return m.length?m:[]},M=i=>B(this,null,function*(){return w(void 0,i)}),W=(...m)=>B(this,[...m],function*(i=[]){if(!S.value)return!1;const A=C(i);if(A.length===0)return!0;let L={};for(const _ of A)try{yield _.validate("")}catch(E){L=x(x({},L),E)}return Object.keys(L).length===0?!0:Promise.reject(L)}),w=(...A)=>B(this,[...A],function*(i=[],m){const L=!Ee(m);try{const _=yield W(i);return _===!0&&(m==null||m(_)),_}catch(_){if(_ instanceof Error)throw _;const E=_;return a.scrollToError&&P(Object.keys(E)[0]),m==null||m(!1,E),L&&Promise.reject(E)}}),P=i=>{var m;const A=j(t,i)[0];A&&((m=A.$el)==null||m.scrollIntoView())};return T(()=>a.rules,()=>{a.validateOnRuleChange&&M().catch(i=>tt())},{deep:!0}),Se(re,Fe(x(q(x({},We(a)),{emit:e,resetFields:u,clearValidate:y,validateField:w,addField:b,removeField:h}),ut()))),o({validate:M,validateField:w,resetFields:u,clearValidate:y,scrollToField:P}),(i,m)=>(te(),we("form",{class:O(f(c))},[k(i.$slots,"default")],2))}}));var mt=Me(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);const vt=["","error","validating","success"],pt=be({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:J([String,Array])},required:{type:Boolean,default:void 0},rules:{type:J([Object,Array])},error:String,validateStatus:{type:String,values:vt},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:ye}}),ge="ElLabelWrap";var ht=R({name:ge,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(l,{slots:o}){const e=D(re,void 0),a=D(Q);a||rt(ge,"usage: <el-form-item><label-wrap /></el-form-item>");const t=le("form"),d=V(),n=V(0),c=()=>{var u;if((u=d.value)!=null&&u.firstElementChild){const y=window.getComputedStyle(d.value.firstElementChild).width;return Math.ceil(Number.parseFloat(y))}else return 0},b=(u="update")=>{Ce(()=>{o.default&&l.isAutoWidth&&(u==="update"?n.value=c():u==="remove"&&(e==null||e.deregisterLabelWidth(n.value)))})},h=()=>b("update");return Ie(()=>{h()}),xe(()=>{b("remove")}),Xe(()=>h()),T(n,(u,y)=>{l.updateAll&&(e==null||e.registerLabelWidth(u,y))}),at(v(()=>{var u,y;return(y=(u=d.value)==null?void 0:u.firstElementChild)!=null?y:null}),h),()=>{var u,y;if(!o)return null;const{isAutoWidth:S}=l;if(S){const C=e==null?void 0:e.autoLabelWidth,M=a==null?void 0:a.hasLabel,W={};if(M&&C&&C!=="auto"){const w=Math.max(0,Number.parseInt(C,10)-n.value),P=e.labelPosition==="left"?"marginRight":"marginLeft";w&&(W[P]=`${w}px`)}return U("div",{ref:d,class:[t.be("item","label-wrap")],style:W},[(u=o.default)==null?void 0:u.call(o)])}else return U(Ye,{ref:d},[(y=o.default)==null?void 0:y.call(o)])}}});const gt=["role","aria-labelledby"],bt=R({name:"ElFormItem"}),yt=R(q(x({},bt),{props:pt,setup(l,{expose:o}){const e=l,a=Ze(),t=D(re,void 0),d=D(Q,void 0),n=_e(void 0,{formItem:!1}),c=le("form-item"),b=st().value,h=V([]),u=V(""),y=et(u,100),S=V(""),C=V();let M,W=!1;const w=v(()=>{if((t==null?void 0:t.labelPosition)==="top")return{};const r=he(e.labelWidth||(t==null?void 0:t.labelWidth)||"");return r?{width:r}:{}}),P=v(()=>{if((t==null?void 0:t.labelPosition)==="top"||(t==null?void 0:t.inline))return{};if(!e.label&&!e.labelWidth&&Be)return{};const r=he(e.labelWidth||(t==null?void 0:t.labelWidth)||"");return!e.label&&!a.label?{marginLeft:r}:{}}),i=v(()=>[c.b(),c.m(n.value),c.is("error",u.value==="error"),c.is("validating",u.value==="validating"),c.is("success",u.value==="success"),c.is("required",Ne.value||e.required),c.is("no-asterisk",t==null?void 0:t.hideRequiredAsterisk),(t==null?void 0:t.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[c.m("feedback")]:t==null?void 0:t.statusIcon}]),m=v(()=>Le(e.inlineMessage)?e.inlineMessage:(t==null?void 0:t.inlineMessage)||!1),A=v(()=>[c.e("error"),{[c.em("error","inline")]:m.value}]),L=v(()=>e.prop?ee(e.prop)?e.prop:e.prop.join("."):""),_=v(()=>!!(e.label||a.label)),E=v(()=>e.for||h.value.length===1?h.value[0]:void 0),K=v(()=>!E.value&&_.value),Be=!!d,oe=v(()=>{const r=t==null?void 0:t.model;if(!(!r||!e.prop))return Z(r,e.prop).value}),G=v(()=>{const{required:r}=e,s=[];e.rules&&s.push(...$.castArray(e.rules));const g=t==null?void 0:t.rules;if(g&&e.prop){const p=Z(g,e.prop).value;p&&s.push(...$.castArray(p))}if(r!==void 0){const p=s.map((F,I)=>[F,I]).filter(([F])=>Object.keys(F).includes("required"));if(p.length>0)for(const[F,I]of p)F.required!==r&&(s[I]=q(x({},F),{required:r}));else s.push({required:r})}return s}),Ve=v(()=>G.value.length>0),Pe=r=>G.value.filter(g=>!g.trigger||!r?!0:Array.isArray(g.trigger)?g.trigger.includes(r):g.trigger===r).map(F=>{var I=F,{trigger:g}=I,p=ce(I,["trigger"]);return p}),Ne=v(()=>G.value.some(r=>r.required)),qe=v(()=>{var r;return y.value==="error"&&e.showMessage&&((r=t==null?void 0:t.showMessage)!=null?r:!0)}),ae=v(()=>`${e.label||""}${(t==null?void 0:t.labelSuffix)||""}`),N=r=>{u.value=r},$e=r=>{var s,g;const{errors:p,fields:F}=r;(!p||!F)&&console.error(r),N("error"),S.value=p?(g=(s=p==null?void 0:p[0])==null?void 0:s.message)!=null?g:`${e.prop} is required`:"",t==null||t.emit("validate",e.prop,!1,S.value)},Oe=()=>{N("success"),t==null||t.emit("validate",e.prop,!0,"")},Re=r=>B(this,null,function*(){const s=L.value;return new ot({[s]:r}).validate({[s]:oe.value},{firstFields:!0}).then(()=>(Oe(),!0)).catch(p=>($e(p),Promise.reject(p)))}),se=(r,s)=>B(this,null,function*(){if(W||!e.prop)return!1;const g=Ee(s);if(!Ve.value)return s==null||s(!1),!1;const p=Pe(r);return p.length===0?(s==null||s(!0),!0):(N("validating"),Re(p).then(()=>(s==null||s(!0),!0)).catch(F=>{const{fields:I}=F;return s==null||s(!1,I),g?!1:Promise.reject(I)}))}),X=()=>{N(""),S.value="",W=!1},ie=()=>B(this,null,function*(){const r=t==null?void 0:t.model;if(!r||!e.prop)return;const s=Z(r,e.prop);W=!0,s.value=$.clone(M),yield Ce(),X(),W=!1}),ze=r=>{h.value.includes(r)||h.value.push(r)},je=r=>{h.value=h.value.filter(s=>s!==r)};T(()=>e.error,r=>{S.value=r||"",N(r?"error":"")},{immediate:!0}),T(()=>e.validateStatus,r=>N(r||""));const Y=Fe(q(x({},We(e)),{$el:C,size:n,validateState:u,labelId:b,inputIds:h,isGroup:K,hasLabel:_,addInputId:ze,removeInputId:je,resetField:ie,clearValidate:X,validate:se}));return Se(Q,Y),Ie(()=>{e.prop&&(t==null||t.addField(Y),M=$.clone(oe.value))}),xe(()=>{t==null||t.removeField(Y)}),o({size:n,validateMessage:S,validateState:u,validate:se,clearValidate:X,resetField:ie}),(r,s)=>{var g;return te(),we("div",{ref_key:"formItemRef",ref:C,class:O(f(i)),role:f(K)?"group":void 0,"aria-labelledby":f(K)?f(b):void 0},[U(f(ht),{"is-auto-width":f(w).width==="auto","update-all":((g=f(t))==null?void 0:g.labelWidth)==="auto"},{default:H(()=>[f(_)?(te(),He(Je(f(E)?"label":"div"),{key:0,id:f(b),for:f(E),class:O(f(c).e("label")),style:fe(f(w))},{default:H(()=>[k(r.$slots,"label",{label:f(ae)},()=>[Qe(me(f(ae)),1)])]),_:3},8,["id","for","class","style"])):ve("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),pe("div",{class:O(f(c).e("content")),style:fe(f(P))},[k(r.$slots,"default"),U(lt,{name:`${f(c).namespace.value}-zoom-in-top`},{default:H(()=>[f(qe)?k(r.$slots,"error",{key:0,error:S.value},()=>[pe("div",{class:O(f(A))},me(S.value),3)]):ve("v-if",!0)]),_:3},8,["name"])],6)],10,gt)}}}));var Ae=Me(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Bt=Ue(mt,{FormItem:Ae}),Vt=Ke(Ae);export{Bt as E,Vt as a};
