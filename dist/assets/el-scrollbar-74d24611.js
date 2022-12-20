var Ze=Object.defineProperty,Qe=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var ie=Math.pow,Ce=(o,t,e)=>t in o?Ze(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,R=(o,t)=>{for(var e in t||(t={}))et.call(t,e)&&Ce(o,e,t[e]);if(Ee)for(var e of Ee(t))tt.call(t,e)&&Ce(o,e,t[e]);return o},z=(o,t)=>Qe(o,xe(t));import{c as O}from"./index-e961436e.js";import{m as Be,T as Ie}from"./runtime-dom.esm-bundler-eeabfc76.js";import{a as Ne,d as P,u as ot,b as F,w as ge,r as ze}from"./base-27e822c2.js";import{d as rt,u as Q,_ as j}from"./plugin-vue_export-helper-529fb311.js";import{t as nt}from"./error-78e43d3e.js";import{U as E,i as ue,w as I,l as fe,A as st,aV as lt,u as s,X as re,d as M,W as G,Y as y,aW as le,ao as oe,o as $,c as U,b as K,bn as be,_ as ve,aq as V,as as pe,Z as ne,e as Z,F as $e,n as Se,V as at,D as it,r as J,b7 as ut,aD as se,q as Le,a2 as me,aB as pt,az as ct,av as ft,aT as He,s as dt,ay as vt,ak as mt,aY as gt,at as bt}from"./runtime-core.esm-bundler-76eda81d.js";import{a as _e,i as ce}from"./style-e1000a00.js";import{r as yt}from"./index-eaab5364.js";import{a as ht,E as Pe}from"./index-10373a61.js";import{a as wt,u as Tt}from"./index-35e23b9e.js";import{f as ke}from"./index-56996fd0.js";import{E as Et}from"./focus-trap-f8c43f49.js";const Y=(o,t,{checkForDefaultPrevented:e=!0}={})=>i=>{const d=o==null?void 0:o(i);if(e===!1||!d)return t==null?void 0:t(i)},Vo=o=>t=>t.pointerType==="mouse"?o(t):void 0,Fe=Symbol("scrollbarContextKey"),ye=Symbol("popper"),De=Symbol("popperContent"),he=Symbol("elTooltip"),Ct=Ne({type:P(Boolean),default:null}),St=Ne({type:P(Function)}),_t=o=>{const t=`update:${o}`,e=`onUpdate:${o}`,r=[t],i={[o]:Ct,[e]:St};return{useModelToggle:({indicator:c,toggleReason:f,shouldHideWhenRouteChanges:u,shouldProceed:v,onShow:m,onHide:p})=>{const g=st(),{emit:w}=g,b=g.props,B=E(()=>ue(b[e])),A=E(()=>b[o]===null),n=l=>{c.value!==!0&&(c.value=!0,f&&(f.value=l),ue(m)&&m(l))},_=l=>{c.value!==!1&&(c.value=!1,f&&(f.value=l),ue(p)&&p(l))},N=l=>{if(b.disabled===!0||ue(v)&&!v())return;const C=B.value&&O.isClient;C&&w(t,!0),(A.value||!C)&&n(l)},S=l=>{if(b.disabled===!0||!O.isClient)return;const C=B.value&&O.isClient;C&&w(t,!1),(A.value||!C)&&_(l)},L=l=>{!O.isBoolean(l)||(b.disabled&&l?B.value&&w(t,!1):c.value!==l&&(l?n():_()))},h=()=>{c.value?S():N()};return I(()=>b[o],L),u&&g.appContext.config.globalProperties.$route!==void 0&&I(()=>R({},g.proxy.$route),()=>{u.value&&c.value&&S()}),fe(()=>{L(b[o])}),{hide:S,show:N,toggle:h,hasUpdateHandler:B}},useModelToggleProps:i,useModelToggleEmits:r}};function Pt(){let o;const t=(r,i)=>{e(),o=window.setTimeout(r,i)},e=()=>window.clearTimeout(o);return O.tryOnScopeDispose(()=>e()),{registerTimeout:t,cancelTimeout:e}}let Re;const Ke=()=>{const o=ot("namespace",rt),t=wt(),e=E(()=>`${o.value}-popper-container-${t.prefix}`),r=E(()=>`#${e.value}`);return{id:e,selector:r}},kt=o=>{const t=document.createElement("div");return t.id=o,document.body.appendChild(t),t},Rt=()=>{lt(()=>{if(!O.isClient)return;const{id:o,selector:t}=Ke();!Re&&!document.body.querySelector(t.value)&&(Re=kt(o.value))})},Ot=F({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),At=({showAfter:o,hideAfter:t,open:e,close:r})=>{const{registerTimeout:i}=Pt();return{onOpen:f=>{i(()=>{e(f)},s(o))},onClose:f=>{i(()=>{r(f)},s(t))}}},je=Symbol("elForwardRef"),Mt=o=>{re(je,{setForwardRef:e=>{o.value=e}})},Bt=o=>({mounted(t){o(t)},updated(t){o(t)},unmounted(){o(null)}}),te=4,It={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Nt=({move:o,size:t,bar:e})=>({[e.size]:t,transform:`translate${e.axis}(${o}%)`}),zt=F({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),$t="Thumb",Lt=M({__name:"thumb",props:zt,setup(o){const t=o,e=G(Fe),r=Q("scrollbar");e||nt($t,"can not inject scrollbar context");const i=y(),d=y(),c=y({}),f=y(!1);let u=!1,v=!1,m=O.isClient?document.onselectstart:null;const p=E(()=>It[t.vertical?"vertical":"horizontal"]),g=E(()=>Nt({size:t.size,move:t.move,bar:p.value})),w=E(()=>ie(i.value[p.value.offset],2)/e.wrapElement[p.value.scrollSize]/t.ratio/d.value[p.value.offset]),b=h=>{var l;if(h.stopPropagation(),h.ctrlKey||[1,2].includes(h.button))return;(l=window.getSelection())==null||l.removeAllRanges(),A(h);const C=h.currentTarget;!C||(c.value[p.value.axis]=C[p.value.offset]-(h[p.value.client]-C.getBoundingClientRect()[p.value.direction]))},B=h=>{if(!d.value||!i.value||!e.wrapElement)return;const l=Math.abs(h.target.getBoundingClientRect()[p.value.direction]-h[p.value.client]),C=d.value[p.value.offset]/2,D=(l-C)*100*w.value/i.value[p.value.offset];e.wrapElement[p.value.scroll]=D*e.wrapElement[p.value.scrollSize]/100},A=h=>{h.stopImmediatePropagation(),u=!0,document.addEventListener("mousemove",n),document.addEventListener("mouseup",_),m=document.onselectstart,document.onselectstart=()=>!1},n=h=>{if(!i.value||!d.value||u===!1)return;const l=c.value[p.value.axis];if(!l)return;const C=(i.value.getBoundingClientRect()[p.value.direction]-h[p.value.client])*-1,D=d.value[p.value.offset]-l,W=(C-D)*100*w.value/i.value[p.value.offset];e.wrapElement[p.value.scroll]=W*e.wrapElement[p.value.scrollSize]/100},_=()=>{u=!1,c.value[p.value.axis]=0,document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",_),L(),v&&(f.value=!1)},N=()=>{v=!1,f.value=!!t.size},S=()=>{v=!0,f.value=u};le(()=>{L(),document.removeEventListener("mouseup",_)});const L=()=>{document.onselectstart!==m&&(document.onselectstart=m)};return O.useEventListener(oe(e,"scrollbarElement"),"mousemove",N),O.useEventListener(oe(e,"scrollbarElement"),"mouseleave",S),(h,l)=>($(),U(Ie,{name:s(r).b("fade"),persisted:""},{default:K(()=>[be(ve("div",{ref_key:"instance",ref:i,class:V([s(r).e("bar"),s(r).is(s(p).key)]),onMousedown:B},[ve("div",{ref_key:"thumb",ref:d,class:V(s(r).e("thumb")),style:pe(s(g)),onMousedown:b},null,38)],34),[[Be,h.always||f.value]])]),_:1},8,["name"]))}});var Oe=j(Lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Ht=F({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ft=M({__name:"bar",props:Ht,setup(o,{expose:t}){const e=o,r=y(0),i=y(0);return t({handleScroll:c=>{if(c){const f=c.offsetHeight-te,u=c.offsetWidth-te;i.value=c.scrollTop*100/f*e.ratioY,r.value=c.scrollLeft*100/u*e.ratioX}}}),(c,f)=>($(),ne($e,null,[Z(Oe,{move:r.value,ratio:c.ratioX,size:c.width,always:c.always},null,8,["move","ratio","size","always"]),Z(Oe,{move:i.value,ratio:c.ratioY,size:c.height,vertical:"",always:c.always},null,8,["move","ratio","size","always"])],64))}});var Dt=j(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Kt=F({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:P([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),jt={scroll:({scrollTop:o,scrollLeft:t})=>[o,t].every(O.isNumber)},Wt="ElScrollbar",Yt=M({name:Wt}),Ut=M(z(R({},Yt),{props:Kt,emits:jt,setup(o,{expose:t,emit:e}){const r=o,i=Q("scrollbar");let d,c;const f=y(),u=y(),v=y(),m=y("0"),p=y("0"),g=y(),w=y(1),b=y(1),B=E(()=>{const l={};return r.height&&(l.height=_e(r.height)),r.maxHeight&&(l.maxHeight=_e(r.maxHeight)),[r.wrapStyle,l]}),A=E(()=>[r.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!r.native}]),n=E(()=>[i.e("view"),r.viewClass]),_=()=>{var l;u.value&&((l=g.value)==null||l.handleScroll(u.value),e("scroll",{scrollTop:u.value.scrollTop,scrollLeft:u.value.scrollLeft}))};function N(l,C){Le(l)?u.value.scrollTo(l):O.isNumber(l)&&O.isNumber(C)&&u.value.scrollTo(l,C)}const S=l=>{!O.isNumber(l)||(u.value.scrollTop=l)},L=l=>{!O.isNumber(l)||(u.value.scrollLeft=l)},h=()=>{if(!u.value)return;const l=u.value.offsetHeight-te,C=u.value.offsetWidth-te,D=ie(l,2)/u.value.scrollHeight,W=ie(C,2)/u.value.scrollWidth,X=Math.max(D,r.minSize),q=Math.max(W,r.minSize);w.value=D/(l-D)/(X/(l-X)),b.value=W/(C-W)/(q/(C-q)),p.value=X+te<l?`${X}px`:"",m.value=q+te<C?`${q}px`:""};return I(()=>r.noresize,l=>{l?(d==null||d(),c==null||c()):({stop:d}=O.useResizeObserver(v,h),c=O.useEventListener("resize",h))},{immediate:!0}),I(()=>[r.maxHeight,r.height],()=>{r.native||Se(()=>{var l;h(),u.value&&((l=g.value)==null||l.handleScroll(u.value))})}),re(Fe,at({scrollbarElement:f,wrapElement:u})),fe(()=>{r.native||Se(()=>{h()})}),it(()=>h()),t({wrapRef:u,update:h,scrollTo:N,setScrollTop:S,setScrollLeft:L,handleScroll:_}),(l,C)=>($(),ne("div",{ref_key:"scrollbarRef",ref:f,class:V(s(i).b())},[ve("div",{ref_key:"wrapRef",ref:u,class:V(s(A)),style:pe(s(B)),onScroll:_},[($(),U(ut(l.tag),{ref_key:"resizeRef",ref:v,class:V(s(n)),style:pe(l.viewStyle)},{default:K(()=>[J(l.$slots,"default")]),_:3},8,["class","style"]))],38),l.native?se("v-if",!0):($(),U(Dt,{key:0,ref_key:"barRef",ref:g,height:p.value,width:m.value,always:l.always,"ratio-x":b.value,"ratio-y":w.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}));var Xt=j(Ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Go=ge(Xt),qt=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],We=F({role:{type:String,values:qt,default:"tooltip"}}),Vt=M({name:"ElPopperRoot",inheritAttrs:!1}),Gt=M(z(R({},Vt),{props:We,setup(o,{expose:t}){const e=o,r=y(),i=y(),d=y(),c=y(),f=E(()=>e.role),u={triggerRef:r,popperInstanceRef:i,contentRef:d,referenceRef:c,role:f};return t(u),re(ye,u),(v,m)=>J(v.$slots,"default")}}));var Jt=j(Gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Ye=F({arrowOffset:{type:Number,default:5}}),Zt=M({name:"ElPopperArrow",inheritAttrs:!1}),Qt=M(z(R({},Zt),{props:Ye,setup(o,{expose:t}){const e=o,r=Q("popper"),{arrowOffset:i,arrowRef:d}=G(De,void 0);return I(()=>e.arrowOffset,c=>{i.value=c}),le(()=>{d.value=void 0}),t({arrowRef:d}),(c,f)=>($(),ne("span",{ref_key:"arrowRef",ref:d,class:V(s(r).e("arrow")),"data-popper-arrow":""},null,2))}}));var xt=j(Qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const eo="ElOnlyChild",to=M({name:eo,setup(o,{slots:t,attrs:e}){var r;const i=G(je),d=Bt((r=i==null?void 0:i.setForwardRef)!=null?r:me);return()=>{var c;const f=(c=t.default)==null?void 0:c.call(t,e);if(!f||f.length>1)return null;const u=Ue(f);return u?be(pt(u,e),[[d]]):null}}});function Ue(o){if(!o)return null;const t=o;for(const e of t){if(Le(e))switch(e.type){case ft:continue;case ct:case"svg":return Ae(e);case $e:return Ue(e.children);default:return e}return Ae(e)}return null}function Ae(o){const t=Q("only-child");return Z("span",{class:t.e("content")},[o])}const Xe=F({virtualRef:{type:P(Object)},virtualTriggering:Boolean,onMouseenter:{type:P(Function)},onMouseleave:{type:P(Function)},onClick:{type:P(Function)},onKeydown:{type:P(Function)},onFocus:{type:P(Function)},onBlur:{type:P(Function)},onContextmenu:{type:P(Function)},id:String,open:Boolean}),oo=M({name:"ElPopperTrigger",inheritAttrs:!1}),ro=M(z(R({},oo),{props:Xe,setup(o,{expose:t}){const e=o,{role:r,triggerRef:i}=G(ye,void 0);Mt(i);const d=E(()=>f.value?e.id:void 0),c=E(()=>{if(r&&r.value==="tooltip")return e.open&&e.id?e.id:void 0}),f=E(()=>{if(r&&r.value!=="tooltip")return r.value}),u=E(()=>f.value?`${e.open}`:void 0);let v;return fe(()=>{I(()=>e.virtualRef,m=>{m&&(i.value=O.unrefElement(m))},{immediate:!0}),I(i,(m,p)=>{v==null||v(),v=void 0,ce(m)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(g=>{var w;const b=e[g];b&&(m.addEventListener(g.slice(2).toLowerCase(),b),(w=p==null?void 0:p.removeEventListener)==null||w.call(p,g.slice(2).toLowerCase(),b))}),v=I([d,c,f,u],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((w,b)=>{ze.isNil(g[b])?m.removeAttribute(w):m.setAttribute(w,g[b])})},{immediate:!0})),ce(p)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>p.removeAttribute(g))},{immediate:!0})}),le(()=>{v==null||v(),v=void 0}),t({triggerRef:i}),(m,p)=>m.virtualTriggering?se("v-if",!0):($(),U(s(to),He({key:0},m.$attrs,{"aria-controls":s(d),"aria-describedby":s(c),"aria-expanded":s(u),"aria-haspopup":s(f)}),{default:K(()=>[J(m.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}));var no=j(ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),qe=yt();const so=["fixed","absolute"],lo=F({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:P(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:qe.placements,default:"bottom"},popperOptions:{type:P(Object),default:()=>({})},strategy:{type:String,values:so,default:"absolute"}}),Ve=F(z(R({},lo),{id:String,style:{type:P([String,Array,Object])},className:{type:P([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:P([String,Array,Object])},popperStyle:{type:P([String,Array,Object])},referenceEl:{type:P(Object)},triggerTargetEl:{type:P(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number})),ao={mouseenter:o=>o instanceof MouseEvent,mouseleave:o=>o instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},Me=(o,t)=>{const{placement:e,strategy:r,popperOptions:i}=o,d=z(R({placement:e,strategy:r},i),{modifiers:uo(o)});return po(d,t),co(d,i==null?void 0:i.modifiers),d},io=o=>{if(!!O.isClient)return O.unrefElement(o)};function uo(o){const{offset:t,gpuAcceleration:e,fallbackPlacements:r}=o;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:e}}]}function po(o,{arrowEl:t,arrowOffset:e}){o.modifiers.push({name:"arrow",options:{element:t,padding:e!=null?e:5}})}function co(o,t){t&&(o.modifiers=[...o.modifiers,...t!=null?t:[]])}const fo=M({name:"ElPopperContent"}),vo=M(z(R({},fo),{props:Ve,emits:ao,setup(o,{expose:t,emit:e}){const r=o,{popperInstanceRef:i,contentRef:d,triggerRef:c,role:f}=G(ye,void 0),u=G(ke,void 0),{nextZIndex:v}=ht(),m=Q("popper"),p=y(),g=y("first"),w=y(),b=y();re(De,{arrowRef:w,arrowOffset:b}),u&&(u.addInputId||u.removeInputId)&&re(ke,z(R({},u),{addInputId:me,removeInputId:me}));const B=y(r.zIndex||v()),A=y(!1);let n;const _=E(()=>io(r.referenceEl)||s(c)),N=E(()=>[{zIndex:s(B)},r.popperStyle]),S=E(()=>[m.b(),m.is("pure",r.pure),m.is(r.effect),r.popperClass]),L=E(()=>f&&f.value==="dialog"?"false":void 0),h=({referenceEl:T,popperContentEl:a,arrowEl:k})=>{const H=Me(r,{arrowEl:k,arrowOffset:s(b)});return qe.createPopper(T,a,H)},l=(T=!0)=>{var a;(a=s(i))==null||a.update(),T&&(B.value=r.zIndex||v())},C=()=>{var T,a;const k={name:"eventListeners",enabled:r.visible};(a=(T=s(i))==null?void 0:T.setOptions)==null||a.call(T,H=>z(R({},H),{modifiers:[...H.modifiers||[],k]})),l(!1),r.visible&&r.focusOnShow?A.value=!0:r.visible===!1&&(A.value=!1)},D=()=>{e("focus")},W=T=>{var a;((a=T.detail)==null?void 0:a.focusReason)!=="pointer"&&(g.value="first",e("blur"))},X=T=>{r.visible&&!A.value&&(T.target&&(g.value=T.target),A.value=!0)},q=T=>{r.trapping||(T.detail.focusReason==="pointer"&&T.preventDefault(),A.value=!1)},de=()=>{A.value=!1,e("close")};return fe(()=>{let T;I(_,a=>{var k;T==null||T();const H=s(i);if((k=H==null?void 0:H.destroy)==null||k.call(H),a){const x=s(p);d.value=x,i.value=h({referenceEl:a,popperContentEl:x,arrowEl:s(w)}),T=I(()=>a.getBoundingClientRect(),()=>l(),{immediate:!0})}else i.value=void 0},{immediate:!0}),I(()=>r.triggerTargetEl,(a,k)=>{n==null||n(),n=void 0;const H=s(a||p.value),x=s(k||p.value);ce(H)&&(n=I([f,()=>r.ariaLabel,L,()=>r.id],ae=>{["role","aria-label","aria-modal","id"].forEach((we,Te)=>{ze.isNil(ae[Te])?H.removeAttribute(we):H.setAttribute(we,ae[Te])})},{immediate:!0})),x!==H&&ce(x)&&["role","aria-label","aria-modal","id"].forEach(ae=>{x.removeAttribute(ae)})},{immediate:!0}),I(()=>r.visible,C,{immediate:!0}),I(()=>Me(r,{arrowEl:s(w),arrowOffset:s(b)}),a=>{var k;return(k=i.value)==null?void 0:k.setOptions(a)})}),le(()=>{n==null||n(),n=void 0}),t({popperContentRef:p,popperInstanceRef:i,updatePopper:l,contentStyle:N}),(T,a)=>($(),ne("div",{ref_key:"popperContentRef",ref:p,style:pe(s(N)),class:V(s(S)),tabindex:"-1",onMouseenter:a[0]||(a[0]=k=>T.$emit("mouseenter",k)),onMouseleave:a[1]||(a[1]=k=>T.$emit("mouseleave",k))},[Z(s(Et),{trapped:A.value,"trap-on-focus-in":!0,"focus-trap-el":p.value,"focus-start-el":g.value,onFocusAfterTrapped:D,onFocusAfterReleased:W,onFocusin:X,onFocusoutPrevented:q,onReleaseRequested:de},{default:K(()=>[J(T.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}}));var mo=j(vo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const go=ge(Jt),bo=Q("tooltip"),Ge=F(z(R(R({},Ot),Ve),{appendTo:{type:P([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:P(Boolean),default:null},transition:{type:String,default:`${bo.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}})),Je=F(z(R({},Xe),{disabled:Boolean,trigger:{type:P([String,Array]),default:"hover"},triggerKeys:{type:P(Array),default:()=>[Pe.enter,Pe.space]}})),{useModelToggleProps:yo,useModelToggleEmits:ho,useModelToggle:wo}=_t("visible"),To=F(z(R(R(R(R(R({},We),yo),Ge),Je),Ye),{showArrow:{type:Boolean,default:!0}})),Eo=[...ho,"before-show","before-hide","show","hide","open","close"],Co=(o,t)=>dt(o)?o.includes(t):o===t,ee=(o,t,e)=>r=>{Co(s(o),t)&&e(r)},So=M({name:"ElTooltipTrigger"}),_o=M(z(R({},So),{props:Je,setup(o,{expose:t}){const e=o,r=Q("tooltip"),{controlled:i,id:d,open:c,onOpen:f,onClose:u,onToggle:v}=G(he,void 0),m=y(null),p=()=>{if(s(i)||e.disabled)return!0},g=oe(e,"trigger"),w=Y(p,ee(g,"hover",f)),b=Y(p,ee(g,"hover",u)),B=Y(p,ee(g,"click",S=>{S.button===0&&v(S)})),A=Y(p,ee(g,"focus",f)),n=Y(p,ee(g,"focus",u)),_=Y(p,ee(g,"contextmenu",S=>{S.preventDefault(),v(S)})),N=Y(p,S=>{const{code:L}=S;e.triggerKeys.includes(L)&&(S.preventDefault(),v(S))});return t({triggerRef:m}),(S,L)=>($(),U(s(no),{id:s(d),"virtual-ref":S.virtualRef,open:s(c),"virtual-triggering":S.virtualTriggering,class:V(s(r).e("trigger")),onBlur:s(n),onClick:s(B),onContextmenu:s(_),onFocus:s(A),onMouseenter:s(w),onMouseleave:s(b),onKeydown:s(N)},{default:K(()=>[J(S.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}));var Po=j(_o,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const ko=M({name:"ElTooltipContent",inheritAttrs:!1}),Ro=M(z(R({},ko),{props:Ge,setup(o,{expose:t}){const e=o,{selector:r}=Ke(),i=y(null),d=y(!1),{controlled:c,id:f,open:u,trigger:v,onClose:m,onOpen:p,onShow:g,onHide:w,onBeforeShow:b,onBeforeHide:B}=G(he,void 0),A=E(()=>e.persistent);le(()=>{d.value=!0});const n=E(()=>s(A)?!0:s(u)),_=E(()=>e.disabled?!1:s(u)),N=E(()=>e.appendTo||r.value),S=E(()=>{var a;return(a=e.style)!=null?a:{}}),L=E(()=>!s(u)),h=()=>{w()},l=()=>{if(s(c))return!0},C=Y(l,()=>{e.enterable&&s(v)==="hover"&&p()}),D=Y(l,()=>{s(v)==="hover"&&m()}),W=()=>{var a,k;(k=(a=i.value)==null?void 0:a.updatePopper)==null||k.call(a),b==null||b()},X=()=>{B==null||B()},q=()=>{g(),T=O.onClickOutside(E(()=>{var a;return(a=i.value)==null?void 0:a.popperContentRef}),()=>{if(s(c))return;s(v)!=="hover"&&m()})},de=()=>{e.virtualTriggering||m()};let T;return I(()=>s(u),a=>{a||T==null||T()},{flush:"post"}),I(()=>e.content,()=>{var a,k;(k=(a=i.value)==null?void 0:a.updatePopper)==null||k.call(a)}),t({contentRef:i}),(a,k)=>($(),U(vt,{disabled:!a.teleported,to:s(N)},[Z(Ie,{name:a.transition,onAfterLeave:h,onBeforeEnter:W,onAfterEnter:q,onBeforeLeave:X},{default:K(()=>[s(n)?be(($(),U(s(mo),He({key:0,id:s(f),ref_key:"contentRef",ref:i},a.$attrs,{"aria-label":a.ariaLabel,"aria-hidden":s(L),"boundaries-padding":a.boundariesPadding,"fallback-placements":a.fallbackPlacements,"gpu-acceleration":a.gpuAcceleration,offset:a.offset,placement:a.placement,"popper-options":a.popperOptions,strategy:a.strategy,effect:a.effect,enterable:a.enterable,pure:a.pure,"popper-class":a.popperClass,"popper-style":[a.popperStyle,s(S)],"reference-el":a.referenceEl,"trigger-target-el":a.triggerTargetEl,visible:s(_),"z-index":a.zIndex,onMouseenter:s(C),onMouseleave:s(D),onBlur:de,onClose:s(m)}),{default:K(()=>[d.value?se("v-if",!0):J(a.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Be,s(_)]]):se("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}}));var Oo=j(Ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Ao=["innerHTML"],Mo={key:1},Bo=M({name:"ElTooltip"}),Io=M(z(R({},Bo),{props:To,emits:Eo,setup(o,{expose:t,emit:e}){const r=o;Rt();const i=Tt(),d=y(),c=y(),f=()=>{var n;const _=s(d);_&&((n=_.popperInstanceRef)==null||n.update())},u=y(!1),v=y(),{show:m,hide:p,hasUpdateHandler:g}=wo({indicator:u,toggleReason:v}),{onOpen:w,onClose:b}=At({showAfter:oe(r,"showAfter"),hideAfter:oe(r,"hideAfter"),open:m,close:p}),B=E(()=>O.isBoolean(r.visible)&&!g.value);re(he,{controlled:B,id:i,open:mt(u),trigger:oe(r,"trigger"),onOpen:n=>{w(n)},onClose:n=>{b(n)},onToggle:n=>{s(u)?b(n):w(n)},onShow:()=>{e("show",v.value)},onHide:()=>{e("hide",v.value)},onBeforeShow:()=>{e("before-show",v.value)},onBeforeHide:()=>{e("before-hide",v.value)},updatePopper:f}),I(()=>r.disabled,n=>{n&&u.value&&(u.value=!1)});const A=()=>{var n,_;const N=(_=(n=c.value)==null?void 0:n.contentRef)==null?void 0:_.popperContentRef;return N&&N.contains(document.activeElement)};return gt(()=>u.value&&p()),t({popperRef:d,contentRef:c,isFocusInsideContent:A,updatePopper:f,onOpen:w,onClose:b,hide:p}),(n,_)=>($(),U(s(go),{ref_key:"popperRef",ref:d,role:n.role},{default:K(()=>[Z(Po,{disabled:n.disabled,trigger:n.trigger,"trigger-keys":n.triggerKeys,"virtual-ref":n.virtualRef,"virtual-triggering":n.virtualTriggering},{default:K(()=>[n.$slots.default?J(n.$slots,"default",{key:0}):se("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Z(Oo,{ref_key:"contentRef",ref:c,"aria-label":n.ariaLabel,"boundaries-padding":n.boundariesPadding,content:n.content,disabled:n.disabled,effect:n.effect,enterable:n.enterable,"fallback-placements":n.fallbackPlacements,"hide-after":n.hideAfter,"gpu-acceleration":n.gpuAcceleration,offset:n.offset,persistent:n.persistent,"popper-class":n.popperClass,"popper-style":n.popperStyle,placement:n.placement,"popper-options":n.popperOptions,pure:n.pure,"raw-content":n.rawContent,"reference-el":n.referenceEl,"trigger-target-el":n.triggerTargetEl,"show-after":n.showAfter,strategy:n.strategy,teleported:n.teleported,transition:n.transition,"virtual-triggering":n.virtualTriggering,"z-index":n.zIndex,"append-to":n.appendTo},{default:K(()=>[J(n.$slots,"content",{},()=>[n.rawContent?($(),ne("span",{key:0,innerHTML:n.content},null,8,Ao)):($(),ne("span",Mo,bt(n.content),1))]),n.showArrow?($(),U(s(xt),{key:0,"arrow-offset":n.arrowOffset},null,8,["arrow-offset"])):se("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}}));var No=j(Io,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Jo=ge(No);export{Go as E,to as O,Ge as a,Jo as b,Y as c,qe as d,Je as u,Vo as w};
