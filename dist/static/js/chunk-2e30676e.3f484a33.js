(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e30676e"],{"1e4b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",[a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"active",staticStyle:{"border-radius":"15px",height:"200px"},attrs:{shadow:"always"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-image",{staticStyle:{width:"90%",height:"90%","margin-left":"50px"},attrs:{src:n("ef33")}})],1),a("el-col",{attrs:{span:16}},[a("table",{attrs:{width:"100%"}},[a("tr",{staticStyle:{"text-align":"right"}},[a("td",{staticStyle:{width:"15%"}},[a("li",{staticStyle:{"font-size":"11px",color:"#2fca34","margin-top":"8px"}},[t._v("已认证")])])])])])],1),a("el-row",[a("table",[a("tr",[a("td",{staticStyle:{"text-align":"left","padding-top":"2px"}},[a("span",{staticStyle:{"font-size":"13px","font-weight":"550"}},[t._v("北京立夏智能科技有限公司")])])]),a("tr",[a("td",{staticStyle:{color:"black","font-size":"10px","padding-top":"8px"}},[t._v("统一社会代码：91110108MA01EJU4XJ ")])]),a("tr",[a("td",{staticStyle:{color:"black","font-size":"10px","padding-top":"8px"}},[t._v("认证人：李美丽")])])])])],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"active",staticStyle:{"overflow-y":"auto","overflow-x":"hidden","border-radius":"15px",height:"200px"},attrs:{shadow:"always"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-image",{staticStyle:{width:"90px",height:"70px","margin-left":"50%"},attrs:{src:t.baseurl+t.form.avatar}})],1),a("el-col",{attrs:{span:16}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"text-align":"right","margin-top":"15px"}},[0==t.form.authentication?a("li",{staticStyle:{"font-size":"11px",color:"#2fca34","margin-top":"8px"}},[t._v("已认证")]):a("li",{staticStyle:{"font-size":"11px",color:"#db5879","margin-top":"8px"}},[t._v("未认证")])])])])])],1),a("el-row",[a("table",[a("tr",[a("td",{staticStyle:{"text-align":"left","padding-top":"2px"}},[a("span",{staticStyle:{"font-size":"13px","font-weight":"550","margin-bottom":"20px"}},[t._v(t._s(this.form.nickName))])])]),a("tr",[a("td",{staticStyle:{color:"black","font-size":"10px","padding-top":"8px"}},[t._v(t._s(t.getRolesName(this.form.roles))+" ")])])])])],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"active",staticStyle:{"border-radius":"15px",height:"200px"},attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",staticStyle:{"padding-bottom":"6px"},attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"clearfix_sty"},[t._v("签约小结")])]),a("el-tabs",{staticStyle:{"margin-top":"-15px"},attrs:{stretch:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"本周",name:"first"}},[a("div",{staticClass:"number_sty"},[t._v("4")])]),a("el-tab-pane",{attrs:{label:"本月",name:"second"}},[a("div",{staticClass:"number_sty"},[t._v("12")])]),a("el-tab-pane",{attrs:{label:"本年",name:"third"}},[a("div",{staticClass:"number_sty"},[t._v("75")])])],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-button",{staticClass:"dianziqianyue",attrs:{type:"primary",size:"medium"},on:{click:t.toSign}},[t._v("电子签约")])],1)],1),a("div",{staticClass:"div_sty"},[a("table",{attrs:{width:"100%"}},[t._m(0),a("tbody",t._l(t.infoList,(function(e,n){return a("tr",{key:n},[a("el-row",{staticStyle:{padding:"10px 0px 5px 10px"}},[a("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:.1}},[a("li",{class:"0"==e.status?"liStyle_blue":"1"==e.status?"liStyle_green":""})]),a("el-row",{staticClass:"row_sty",staticStyle:{"margin-left":"20px"}},[a("el-col",{attrs:{span:22}},[a("div",{staticClass:"name_sty"},[t._v(t._s(e.name))]),a("div",{staticClass:"names_sty"},[t._v(t._s(t.toOrganization(e.createBy))+"在"+t._s(t.parseTime(e.signStartDate,"{y}年{m}月{d}日{h}:{m}:{s}"))+"发起的"+t._s(e.name))])]),a("el-col",{attrs:{span:1.9}},["0"==e.status?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["evidence:audio:edit"],expression:"['evidence:audio:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit-outline"}},[t._v("重新发起")]):t._e(),"1"==e.status?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["evidence:audio:edit"],expression:"['evidence:audio:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"}},[t._v("去签约")]):t._e(),"2"==e.status?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["evidence:audio:edit"],expression:"['evidence:audio:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-view"}},[t._v("查 看")]):t._e()],1)],1)],1)],1)})),0)])])],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("div",{staticClass:"titleSty"},[t._v("我的待办")])])}],s=n("c0c7"),i=n("adc1"),c=n("30c2"),o={name:"Index",components:{},data:function(){return{baseurl:"/prod-api",activeName:"first",form:{},queryParams:{pageNum:1,pageSize:"",contractIdentifier:null,evid:null,name:null,signEndDate:null,contractEndDate:null,status:null,createTime:null,updateTime:null,deletedtime:null,contractRule:null,contractLabel:null,contractType:null,createby:null,contractOwner:null,contractEdition:null,isSeq:null,arrList:[]},infoList:[],userOptions:[]}},created:function(){var t=this;Object(s["l"])().then((function(e){t.userOptions=e.data})),this.getSelf(),this.getList()},methods:{getSelf:function(){var t=this;Object(s["f"])().then((function(e){t.form=e.data}))},getRolesName:function(t){var e="";if(t){for(var n=0;n<t.length;n++){var a=t[n];e=e+a.roleName+"、"}return e.substring(0,e.length-1)}return e},toSign:function(){this.$router.push("/signviews")},handleUpdate:function(t){var e=this,n=t.id||this.ids;"0"==t.status?this.$router.push("/sign/signviews/"+n):"1"==t.status?Object(c["e"])(n).then((function(t){if(200===t.code){var a=t.buttonType;"1"==a?e.$router.push("/sign/editparams/"+n):"2"==a?e.$router.push("/sign/send/"+n):e.$router.push("/contact/info/infoXq/"+n)}})):"2"!=t.status&&"3"!=t.status||this.$router.push("/contact/info/infoXq/"+n)},getList:function(){var t=this;this.loading=!0,Object(i["f"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(e){t.infoList=e.rows,console.log("this.infoList",t.infoList),t.total=e.total,t.loading=!1}))},toOrganization:function(t){var e="";if(t)for(var n=0;n<this.userOptions.length;n++)t==this.userOptions[n].userName&&(e=this.userOptions[n].nickName);return e}}},u=o,l=(n("ed0f"),n("0c7c")),d=Object(l["a"])(u,a,r,!1,null,"62261d6f",null);e["default"]=d.exports},"30c2":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"h",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return d}));var a=n("b775");function r(t){return Object(a["a"])({url:"/contract/attach/getinfo/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/contract/sign",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/contract/attach/param",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/contract/attach",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/contract/attach",method:"put",data:t})}function u(t){return Object(a["a"])({url:"/sign/seal/getSealList",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/contract/attach/getPic/"+t,method:"get"})}function d(t){return Object(a["a"])({url:"/contract/attach/perfect/"+t,method:"get"})}},"7c48":function(t,e,n){},adc1:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return d}));var a=n("b775");function r(t){return Object(a["a"])({url:"/contract/info/list",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/contract/info/"+t,method:"get"})}function i(t){return Object(a["a"])({url:"/contract/info",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/contract/info",method:"put",data:t})}function o(t){return Object(a["a"])({url:"/contract/info/"+t,method:"delete"})}function u(t){return Object(a["a"])({url:"/contract/info/export",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/contract/info/sendContract",method:"put",data:t})}function d(t){return Object(a["a"])({url:"/contract/info/count",method:"Get",data:t})}},c0c7:function(t,e,n){"use strict";n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"p",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"h",(function(){return h})),n.d(e,"q",(function(){return b})),n.d(e,"r",(function(){return m})),n.d(e,"o",(function(){return g})),n.d(e,"s",(function(){return y})),n.d(e,"j",(function(){return v})),n.d(e,"n",(function(){return x})),n.d(e,"i",(function(){return w})),n.d(e,"e",(function(){return S})),n.d(e,"f",(function(){return O}));var a=n("b775"),r=n("4918");function s(t){return Object(a["a"])({url:"/system/user/list",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/system/user/pick",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/system/user/"+Object(r["f"])(t),method:"get"})}function o(t){return Object(a["a"])({url:"/system/user",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/system/user",method:"put",data:t})}function l(t){return Object(a["a"])({url:"/system/user/"+t,method:"delete"})}function d(t){return Object(a["a"])({url:"/system/user/export",method:"get",params:t})}function f(t,e){var n={userId:t,password:e};return Object(a["a"])({url:"/system/user/resetPwd",method:"put",data:n})}function p(t,e){var n={userId:t,status:e};return Object(a["a"])({url:"/system/user/changeStatus",method:"put",data:n})}function h(){return Object(a["a"])({url:"/system/user/profile",method:"get"})}function b(t){return Object(a["a"])({url:"/system/user/profile",method:"put",data:t})}function m(t,e){var n={oldPassword:t,newPassword:e};return Object(a["a"])({url:"/system/user/profile/updatePwd",method:"put",params:n})}function g(t,e){var n={oldPassword:t,newPassword:e};return Object(a["a"])({url:"/system/user/profile/updateSignPwd",method:"put",params:n})}function y(t){return Object(a["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}function v(){return Object(a["a"])({url:"/system/user/importTemplate",method:"get"})}function x(t){return Object(a["a"])({url:"/system/user/authentication",method:"post",params:t})}function w(t){return Object(a["a"])({url:"/system/user/queryfacerecord",method:"get",params:t})}function S(t){return Object(a["a"])({url:"/system/user/facerecordsucess/"+t,method:"get"})}function O(){return Object(a["a"])({url:"/system/user/selfuser",method:"get"})}},ed0f:function(t,e,n){"use strict";n("7c48")},ef33:function(t,e){t.exports="data:image/png;base64,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"}}]);