import{a as e,aT as a,n as t,aF as n,b9 as l,w as i,dZ as o,d_ as r,aE as u,az as c,ay as v,d$ as s,e0 as d,e1 as f,aL as p,ba as m,ai as g,f as y,aB as h,B as b,_ as S,aI as x,e2 as I,e3 as L,e4 as O,e5 as z,e6 as j,cd as w}from"./index-c5a6c875.js";const C=e({name:"AListItemMeta",props:{avatar:n.any,description:n.any,prefixCls:String,title:n.any},displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,n){var l=n.slots,i=a("list",e).prefixCls;return function(){var a,n,o,r,u,c,v="".concat(i.value,"-item-meta"),s=null!==(a=e.title)&&void 0!==a?a:null===(n=l.title)||void 0===n?void 0:n.call(l),d=null!==(o=e.description)&&void 0!==o?o:null===(r=l.description)||void 0===r?void 0:r.call(l),f=null!==(u=e.avatar)&&void 0!==u?u:null===(c=l.avatar)||void 0===c?void 0:c.call(l),p=t("div",{class:"".concat(i.value,"-item-meta-content")},[s&&t("h4",{class:"".concat(i.value,"-item-meta-title")},[s]),d&&t("div",{class:"".concat(i.value,"-item-meta-description")},[d])]);return t("div",{class:v},[f&&t("div",{class:"".concat(i.value,"-item-meta-avatar")},[f]),(s||d)&&p])}}});var M=Symbol("ListContextKey"),A=globalThis&&globalThis.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t};const _=e({name:"AListItem",inheritAttrs:!1,Meta:C,props:{prefixCls:String,extra:n.any,actions:n.array,grid:Object,colStyle:{type:Object,default:void 0}},slots:["actions","extra"],setup:function(e,n){var p=n.slots,m=n.attrs,g=l(M,{grid:i(),itemLayout:i()}),y=g.itemLayout,h=g.grid,b=a("list",e).prefixCls,S=function(){var a,t,n=null!==(a=e.extra)&&void 0!==a?a:null===(t=p.extra)||void 0===t?void 0:t.call(p);return"vertical"===y.value?!!n:!function(){var e,a,t=(null===(e=p.default)||void 0===e?void 0:e.call(p))||[];return t.forEach((function(e){d(e)&&!f(e)&&(a=!0)})),a&&t.length>1}()};return function(){var a,n,l,i,d,f=m.class,g=A(m,["class"]),x=b.value,I=null!==(a=e.extra)&&void 0!==a?a:null===(n=p.extra)||void 0===n?void 0:n.call(p),L=null===(l=p.default)||void 0===l?void 0:l.call(p),O=null!==(i=e.actions)&&void 0!==i?i:o(null===(d=p.actions)||void 0===d?void 0:d.call(p)),z=(O=O&&!Array.isArray(O)?[O]:O)&&O.length>0&&t("ul",{class:"".concat(x,"-item-action"),key:"actions"},[O.map((function(e,a){return t("li",{key:"".concat(x,"-item-action-").concat(a)},[e,a!==O.length-1&&t("em",{class:"".concat(x,"-item-action-split")},null)])}))]),j=h.value?"div":"li",w=t(j,u(u({},g),{},{class:c("".concat(x,"-item"),v({},"".concat(x,"-item-no-flex"),!S()),f)}),{default:function(){return["vertical"===y.value&&I?[t("div",{class:"".concat(x,"-item-main"),key:"content"},[L,z]),t("div",{class:"".concat(x,"-item-extra"),key:"extra"},[I])]:[L,z,r(I,{key:"extra"})]]}});return h.value?t(s,{flex:1,style:e.colStyle},{default:function(){return[w]}}):w}}});var k=e({name:"AList",Item:_,props:p({bordered:{type:Boolean,default:void 0},dataSource:n.array,extra:n.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:n.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:n.any,footer:n.any,locale:{type:Object}},{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,n){var l,r,c=n.slots;m(M,{grid:g(e,"grid"),itemLayout:g(e,"itemLayout")});var s={current:1,total:0},d=a("list",e),f=d.prefixCls,p=d.direction,C=d.renderEmpty,A=y((function(){return e.pagination&&"object"===h(e.pagination)?e.pagination:{}})),_=i(null!==(l=A.value.defaultCurrent)&&void 0!==l?l:1),k=i(null!==(r=A.value.defaultPageSize)&&void 0!==r?r:10);b(A,(function(){"current"in A.value&&(_.value=A.value.current),"pageSize"in A.value&&(k.value=A.value.pageSize)}));var T=[],B=function(e){return function(a,t){_.value=a,k.value=t,A.value[e]&&A.value[e](a,t)}},E=B("onChange"),K=B("onShowSizeChange"),P=y((function(){return"boolean"==typeof e.loading?{spinning:e.loading}:e.loading})),F=y((function(){return P.value&&P.value.spinning})),N=y((function(){var a="";switch(e.size){case"large":a="lg";break;case"small":a="sm"}return a})),H=y((function(){var a;return v(a={},"".concat(f.value),!0),v(a,"".concat(f.value,"-vertical"),"vertical"===e.itemLayout),v(a,"".concat(f.value,"-").concat(N.value),N.value),v(a,"".concat(f.value,"-split"),e.split),v(a,"".concat(f.value,"-bordered"),e.bordered),v(a,"".concat(f.value,"-loading"),F.value),v(a,"".concat(f.value,"-grid"),!!e.grid),v(a,"".concat(f.value,"-rtl"),"rtl"===p.value),a})),W=y((function(){var a=S(S(S({},s),{total:e.dataSource.length,current:_.value,pageSize:k.value}),e.pagination||{}),t=Math.ceil(a.total/a.pageSize);return a.current>t&&(a.current=t),a})),Z=y((function(){var a=x(e.dataSource);return e.pagination&&e.dataSource.length>(W.value.current-1)*W.value.pageSize&&(a=x(e.dataSource).splice((W.value.current-1)*W.value.pageSize,W.value.pageSize)),a})),$=I(),q=L((function(){for(var e=0;e<O.length;e+=1){var a=O[e];if($.value[a])return a}})),D=y((function(){if(e.grid){var a=q.value&&e.grid[q.value]?e.grid[q.value]:e.grid.column;return a?{width:"".concat(100/a,"%"),maxWidth:"".concat(100/a,"%")}:void 0}}));return function(){var a,n,l,i,r,s,d,p=null!==(a=e.loadMore)&&void 0!==a?a:null===(n=c.loadMore)||void 0===n?void 0:n.call(c),m=null!==(l=e.footer)&&void 0!==l?l:null===(i=c.footer)||void 0===i?void 0:i.call(c),g=null!==(r=e.header)&&void 0!==r?r:null===(s=c.header)||void 0===s?void 0:s.call(c),y=o(null===(d=c.default)||void 0===d?void 0:d.call(c)),b=!!(p||e.pagination||m),x=S(S({},H.value),v({},"".concat(f.value,"-something-after-last-item"),b)),I=e.pagination?t("div",{class:"".concat(f.value,"-pagination")},[t(z,u(u({},W.value),{},{onChange:E,onShowSizeChange:K}),null)]):null,L=F.value&&t("div",{style:{minHeight:"53px"}},null);if(Z.value.length>0){T.length=0;var O=Z.value.map((function(a,t){return function(a,t){var n,l,i=null!==(n=e.renderItem)&&void 0!==n?n:c.renderItem;if(!i)return null;var o=h(e.rowKey);return(l="function"===o?e.rowKey(a):"string"===o||"number"===o?a[e.rowKey]:a.key)||(l="list-item-".concat(t)),T[t]=l,i({item:a,index:t})}(a,t)})),M=O.map((function(e,a){return t("div",{key:T[a],style:D.value},[e])}));L=e.grid?t(j,{gutter:e.grid.gutter},{default:function(){return[M]}}):t("ul",{class:"".concat(f.value,"-items")},[O])}else y.length||F.value||(L=function(a){var n;return t("div",{class:"".concat(f.value,"-empty-text")},[(null===(n=e.locale)||void 0===n?void 0:n.emptyText)||a("List")])}(C.value));var A=W.value.position||"bottom";return t("div",{class:x},[("top"===A||"both"===A)&&I,g&&t("div",{class:"".concat(f.value,"-header")},[g]),t(w,P.value,{default:function(){return[L,y]}}),m&&t("div",{class:"".concat(f.value,"-footer")},[m]),p||("bottom"===A||"both"===A)&&I])}}});k.install=function(e){return e.component(k.name,k),e.component(k.Item.name,k.Item),e.component(k.Item.Meta.name,k.Item.Meta),e};const T=k;export{T as L};
