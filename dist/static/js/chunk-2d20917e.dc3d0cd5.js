(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20917e"],{a81b:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("正在跳转。。。")])},n=[],s=(r("ac1f"),r("841c"),r("1276"),{components:{},data:function(){return{code:"",loginForm:{username:void 0,password:void 0},routerpath:""}},created:function(){this.loginForm.username=this.getQueryVariable("username"),this.loginForm.password=this.getQueryVariable("password"),this.routerpath=decodeURIComponent(this.getQueryVariable("routerpath")),console.log(this.routerpath),0!=this.loginForm.username.length?this.sso():this.$router.push({path:"index"})},methods:{sso:function(){var t=this;this.$store.dispatch("ssoLogin",this.loginForm).then((function(){t.$router.push({path:t.routerpath||"/"})})).catch((function(){t.$router.push({path:"index"})}))},getQueryVariable:function(t){for(var e=window.location.search.substring(1),r=e.split("&"),o=0;o<r.length;o++){var n=r[o].split("=");if(n[0]===t)return n[1]}return 1===r.length&&r[0],""}}}),i=s,a=r("0c7c"),u=Object(a["a"])(i,o,n,!1,null,null,null);e["default"]=u.exports}}]);