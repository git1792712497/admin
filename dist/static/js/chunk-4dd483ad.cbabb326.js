(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd483ad"],{"14c8":function(t,e,n){},a623:function(t,e,n){"use strict";n("14c8")},ad9d:function(t,e,n){"use strict";var s=n("23e7"),a=n("1d80"),r=n("44e7"),i=n("ad6d"),o=n("b622"),u=n("c430"),c=o("replace"),d=RegExp.prototype;s({target:"String",proto:!0},{replaceAll:function t(e,n){var s,o,l,h,f,p,m,v,g,w=a(this);if(null!=e){if(s=r(e),s&&(o=String(a("flags"in d?e.flags:i.call(e))),!~o.indexOf("g")))throw TypeError("`.replaceAll` does not allow non-global regexes");if(l=e[c],void 0!==l)return l.call(e,w,n);if(u&&s)return String(w).replace(e,n)}if(h=String(w),f=String(e),""===f)return t.call(h,/(?:)/g,n);if(p=h.split(f),"function"!==typeof n)return p.join(String(n));for(m=p[0],v=m.length,g=1;g<p.length;g++)m+=String(n(f,v,h)),v+=f.length+p[g].length,m+=p[g];return m}})},c0c7:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"p",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"m",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return v})),n.d(e,"o",(function(){return g})),n.d(e,"s",(function(){return w})),n.d(e,"j",(function(){return b})),n.d(e,"n",(function(){return y})),n.d(e,"i",(function(){return O})),n.d(e,"e",(function(){return S})),n.d(e,"f",(function(){return j}));var s=n("b775"),a=n("4918");function r(t){return Object(s["a"])({url:"/system/user/list",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/system/user/pick",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/system/user/"+Object(a["f"])(t),method:"get"})}function u(t){return Object(s["a"])({url:"/system/user",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/system/user",method:"put",data:t})}function d(t){return Object(s["a"])({url:"/system/user/"+t,method:"delete"})}function l(t){return Object(s["a"])({url:"/system/user/export",method:"get",params:t})}function h(t,e){var n={userId:t,password:e};return Object(s["a"])({url:"/system/user/resetPwd",method:"put",data:n})}function f(t,e){var n={userId:t,status:e};return Object(s["a"])({url:"/system/user/changeStatus",method:"put",data:n})}function p(){return Object(s["a"])({url:"/system/user/profile",method:"get"})}function m(t){return Object(s["a"])({url:"/system/user/profile",method:"put",data:t})}function v(t,e){var n={oldPassword:t,newPassword:e};return Object(s["a"])({url:"/system/user/profile/updatePwd",method:"put",params:n})}function g(t,e){var n={oldPassword:t,newPassword:e};return Object(s["a"])({url:"/system/user/profile/updateSignPwd",method:"put",params:n})}function w(t){return Object(s["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}function b(){return Object(s["a"])({url:"/system/user/importTemplate",method:"get"})}function y(t){return Object(s["a"])({url:"/system/user/authentication",method:"post",params:t})}function O(t){return Object(s["a"])({url:"/system/user/queryfacerecord",method:"get",params:t})}function S(t){return Object(s["a"])({url:"/system/user/facerecordsucess/"+t,method:"get"})}function j(){return Object(s["a"])({url:"/system/user/selfuser",method:"get"})}},f7d8:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("div",{staticClass:"front"},[t._m(0),n("div",[n("van-card",{directives:[{name:"show",rawName:"v-show",value:1==t.shifou,expression:"shifou == 1"}],staticClass:"cardStyle",scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"title"},[t._v(" "+t._s(t.contractList.name)+" ")]),n("div",{staticClass:"titleStyle"},[t._v("发起方："+t._s(t.contractList.contractOwner))]),n("div",{staticClass:"titleStyle"},[t._v("接收方："+t._s(t.contractList.names))]),n("div",{staticClass:"titleStyle"},[t._v("签约截至时间："+t._s(t.parseTime(t.contractList.signEndDate,"{y}年{m}月{d}日{h}:{m}")))])]},proxy:!0}])})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.shifou,expression:"shifou == 1"}],staticClass:"textStyle"},[n("span",[t._v("请输入"+t._s(0==t.panduan?"验证码":"密码")+"后查看或签署文件")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.shifou,expression:"shifou == 0"}],staticClass:"tishi"},[n("span",[t._v(t._s(0==t.panduan?"验证码":"密码")+"登陆")])]),n("div",{staticClass:"formStyle"},[n("van-form",{on:{submit:t.onSubmit}},[n("van-field",{attrs:{clickable:"",value:t.username,name:"username","input-align":"left",placeholder:"请输入账号",rules:[{required:!0}]},nativeOn:{touchstart:function(e){e.stopPropagation(),t.isShow=!0}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",{staticClass:"vantF"},[t._v("账号：")])])]),0==t.panduan?n("van-row",[n("van-row"),n("van-col",{attrs:{span:"16"}},[n("van-field",{attrs:{clickable:"",value:t.code,type:"number",name:"code",placeholder:"请输入验证码",rules:[{required:!1}]},on:{focus:t.a,"safe-area-inset-bottom":!1},nativeOn:{touchstart:function(e){e.stopPropagation(),t.show=!0}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",{staticClass:"vantG"},[t._v("短信验证码：")])])]),n("van-number-keyboard",{attrs:{show:t.show,maxlength:6},on:{blur:t.onBlur,input:t.onInput,close:t.onClose,show:t.onShow},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("van-col",{attrs:{span:"8"}},[n("div",{staticClass:"codeSty",on:{click:t.getCodes}},[t._v(t._s(t.codeBtnWord))])])],1):t._e(),1==t.panduan?n("van-row",[n("van-row",[n("van-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{clickable:"",value:t.password,type:"password",name:"password",placeholder:"请输入登陆密码",rules:[{required:!0}]},nativeOn:{touchstart:function(e){e.stopPropagation(),t.isMShow=!0}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",{staticClass:"vantG"},[t._v("密码：")])])])],1),n("van-row",[n("van-col",{attrs:{span:"16"}},[n("van-field",{attrs:{name:"code",placeholder:"验证码",rules:[{required:!0}]},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("span",{staticClass:"vantG"},[t._v("验证码：")])])])],1),n("van-col",{attrs:{span:"7"}},[n("img",{staticStyle:{height:"2rem",width:"5rem","margin-right":"1rem","margin-top":"0.4rem"},attrs:{src:t.codeUrl},on:{click:t.getCode}})]),n("van-col",{attrs:{span:"1"}})],1)],1):t._e(),n("van-row"),n("div",{staticClass:"submitStyle"},[n("van-button",{staticClass:"btnSty",attrs:{round:"",block:"","native-type":"submit"}},[t._v("登陆")])],1)],1)],1),n("div",{staticClass:"wayStyle"},[n("div",{on:{click:t.dianji}},[t._v(t._s(0==t.panduan?"密码登陆":"验证码登陆"))])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"imgStyle"},[s("img",{staticStyle:{width:"55%"},attrs:{src:n("81a5"),alt:""}})])}],r=(n("d3b7"),n("159b"),n("ac1f"),n("1276"),n("5319"),n("ad9d"),n("2b0e")),i=n("b970"),o=(n("157a"),n("7ded")),u=(n("c0c7"),n("d399"));r["default"].use(u["a"]),r["default"].use(i["a"]);var c={data:function(){return{shifou:"",username:"",phoneNo:"",templateid:"1633289",password:"",code:"",uuid:"",codeUrl:"",panduan:0,timer:null,isShow:!1,show:!1,isMShow:!1,value:"",waitTime:61,codeBtnWord:"获取验证码",redirect:void 0,contract_id:"",contractId:"",contractList:[],divXS:!1}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getRouter(),this.getClientHeight()},methods:{getClientHeight:function(){window.onresize=function(){}},toOrganization:function(t){var e=t;return this.organizationList.length>0&&this.organizationList.forEach((function(n,s){s>=0&&n.deptId==t&&(e=n.deptName)})),e},onInput:function(){},onShow:function(){console.log("2"),this.divXS=!0},onBlur:function(){console.log("3"),this.show=!1},onClose:function(){},getCodes:function(){var t=this;this.show=!1,this.isShow=!0,console.log(this.username),""!=this.username?Object(o["b"])({phoneNoSet:["+86"+this.username],templateid:this.templateid}).then((function(e){t.getDaojishi()})).catch((function(t){})):Object(u["a"])("请正确输入账号/手机号")},getDaojishi:function(){var t=this;t.waitTime--,t.getCodeBtnDisable=!0,this.codeBtnWord="".concat(this.waitTime,"s后重新获取");var e=setInterval((function(){t.waitTime>1?(t.waitTime--,t.codeBtnWord="".concat(t.waitTime,"s后重新获取")):(clearInterval(e),t.codeBtnWord="获取验证码",t.getCodeBtnDisable=!1,t.waitTime=61)}),1e3)},getRouter:function(){var t=this,e=decodeURI(window.location.href.split("=")[1]);e=e.replaceAll("%2F","/"),e=decodeURI(e.split("/")[3]),"undefined"==e?this.shifou=0:(this.contract_id=e,this.shifou=1,Object(o["f"])(this.contract_id).then((function(e){console.log("response",e),t.contractList=e.data})))},toOrganizations:function(t){var e="";if(t){var n=t.split(",");if(this.userOptions.length>0)for(var s=0;s<n.length;s++)for(var a=0;a<this.userOptions.length;a++)if(n[s]==this.userOptions[a].userName){s<n.length-1?e+=this.userOptions[a].nickName+",  ":e+=this.userOptions[a].nickName+"  ";break}}return e},dianji:function(){0==this.panduan?(this.panduan=1,this.rest()):(this.panduan=0,this.rest())},rest:function(){this.username=void 0,this.code=void 0,this.password=void 0},getCode:function(){var t=this;Object(o["a"])().then((function(e){t.codeUrl="data:image/gif;base64,"+e.img,t.uuid=e.uuid}))},onSubmit:function(t){var e=this;if(0==this.panduan){var n={phoneNo:this.username,templateid:this.templateid,code:this.code};0!=this.username.length&&this.$store.dispatch("smsLogin",n).then((function(){Object(o["d"])().then((function(t){0==t.ishaspassword?e.$router.push({path:e.redirect||"/mobile/password"}):1==t.ishaspassword&&e.$router.push({path:e.redirect||"/"})}))}))}else{var s={username:this.username,password:this.password,code:this.code,uuid:this.uuid};0!=this.username.length&&this.$store.dispatch("Login",s).then((function(){e.$router.push({path:e.redirect||"/"})})).catch((function(t){e.getCode(),e.code=""}))}},a:function(){document.activeElement.blur()}}},d=c,l=(n("a623"),n("0c7c")),h=Object(l["a"])(d,s,a,!1,null,"2930b6fe",null);e["default"]=h.exports}}]);