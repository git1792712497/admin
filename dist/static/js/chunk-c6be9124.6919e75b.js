(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6be9124"],{"3e46":function(e,a,t){"use strict";t("8fb9")},"8fb9":function(e,a,t){},e36f:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"front"},[e._m(0),e._m(1),t("div",{staticClass:"formStyle"},[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{clickable:"",value:e.username,label:"姓名：",name:"username","input-align":"left",placeholder:"请输入姓名",rules:[{required:!0}]},nativeOn:{touchstart:function(a){a.stopPropagation(),e.isShow=!0}},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-number-keyboard",{attrs:{show:e.isShow,maxlength:14},on:{blur:function(a){e.isShow=!1}},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-row",[t("van-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{clickable:"",value:e.password,label:"身份证号码：",name:"password",placeholder:"请输入身份证号码",rules:[{required:!0}]},nativeOn:{touchstart:function(a){a.stopPropagation(),e.isMShow=!0}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("van-number-keyboard",{attrs:{show:e.isMShow,maxlength:14},on:{blur:function(a){e.isMShow=!1}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1),t("div",{staticClass:"submitStyle"},[t("van-button",{staticClass:"btnSty",attrs:{round:"",block:"","native-type":"submit"}},[e._v(" 人脸识别 ")])],1)],1)],1),t("div",[t("van-checkbox",{attrs:{"checked-color":"#DC001E","icon-size":"12px"},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}},[t("span",{staticClass:"spanStyle1"},[e._v("本人同意")]),t("span",{staticClass:"spanStyle2"},[e._v("《人脸识别隐私协议》")])])],1)])])},n=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"imgStyle"},[s("img",{staticStyle:{width:"55%"},attrs:{src:t("81a5"),alt:""}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"textStyle"},[t("span",[e._v("为确保签约人的身份是真实的，您需要先做身份认证")])])}],o=t("ade3"),r=t("2b0e"),c=t("b970");t("157a");r["default"].use(c["a"]);var i={data:function(){var e;return e={username:"",phoneNo:"17745799719",templateid:"1470102",password:"",code:"",uuid:"",codeUrl:"",panduan:0,show:!0,count:"",timer:null,isShow:!1},Object(o["a"])(e,"show",!1),Object(o["a"])(e,"isMShow",!1),Object(o["a"])(e,"value",""),Object(o["a"])(e,"checked",!1),e},methods:{onSubmit:function(){this.$router.push({path:"/verify/facesb2"})}}},l=i,u=(t("3e46"),t("0c7c")),d=Object(u["a"])(l,s,n,!1,null,null,null);a["default"]=d.exports}}]);