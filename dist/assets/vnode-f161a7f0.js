import{s as n,aR as r,F as o,av as u}from"./runtime-core.esm-bundler-76eda81d.js";var _=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(_||{});function L(E){return r(E)&&E.type===o}function R(E){return r(E)&&E.type===u}function m(E){return r(E)&&!L(E)&&!R(E)}const S=E=>{const N=n(E)?E:[E],T=[];return N.forEach(e=>{var A;n(e)?T.push(...S(e)):r(e)&&n(e.children)?T.push(...S(e.children)):(T.push(e),r(e)&&((A=e.component)==null?void 0:A.subTree)&&T.push(...S(e.component.subTree)))}),T};export{_ as P,m as a,S as f,L as i};
