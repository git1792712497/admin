(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f206b8d"],{"14d6":function(t,e,o){"use strict";o("6667")},2806:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageContent_2lAGg",attrs:{id:"pageContent"}},[o("div",{staticClass:"leftContent_2NoKi"},[o("div",{staticClass:"doc-list-context"},[o("el-row",[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"doc-list-title"})]),o("el-col",{attrs:{span:18}},[o("div",{staticClass:"doc-list-title"},[t._v("文件列表"),o("span",[t._v("("+t._s(this.contract_attach.length)+"份)")])])]),o("el-col",{attrs:{span:1}},[o("el-popover",{attrs:{placement:"right-start",width:"280",trigger:"hover"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("div",{staticStyle:{"text-align":"left",margin:"0"}},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"text",size:"mini"},on:{click:function(e){return t.downcontact(t.contract_info)}}},[t._v("下载")]),o("div",{staticStyle:{"font-size":"11px",color:"#333","margin-bottom":"5px"}},[t._v(t._s(this.contract_info.name))]),o("el-row",[o("div",{staticStyle:{"font-size":"11px",color:"#333"}},[t._v("于"+t._s(t.parseTime(this.contract_info.updateTime,"{y}年{m}月{d}日{h}:{m}:{s}")+t.statusdict[this.contract_info.status]))])])],1),o("svg-icon",{staticStyle:{"font-size":"22px","margin-left":"0px"},attrs:{slot:"reference","class-name":"search-icon","icon-class":"shudian"},slot:"reference"})],1)],1)],1),o("div",{staticClass:"doc-list"},[o("div",{staticClass:"doc-item"},[o("div",{staticClass:"doc-img"},[o("el-carousel",{attrs:{height:"200px",type:"card",autoplay:!1},on:{change:t.handelChange}},t._l(t.contract_attach,(function(e,n){return o("el-carousel-item",{key:n},[o("div",{staticClass:"doc-name"},[t._v(t._s(e.contractDocName))]),o("el-image",{attrs:{src:t.baseurl+e.contractImgList[0].contractImgUrl,alt:""},nativeOn:{click:function(o){return t.jump(1,e.id)}}})],1)})),1)],1)]),o("div",{staticClass:"componentArea"},[t._m(0),o("p",[t._v("个人签字 位置")]),t._m(1),o("div",{staticClass:"text_delete",on:{click:function(e){return e.stopPropagation(),t.TextDeleteIt(e)}}},[t._v("删除")])]),o("div",{staticClass:"componentSign"},[t._m(2),t._m(3),o("div",{staticClass:"text_delete",on:{click:function(e){return e.stopPropagation(),t.TextDeleteIt(e)}}},[t._v("删除")])]),o("div",{staticClass:"componentTime"},[t._m(4),o("p",[t._v("签署时间 位置")]),t._m(5),o("div",{staticClass:"text_delete",on:{click:function(e){return e.stopPropagation(),t.TextDeleteIt(e)}}},[t._v("删除")])])])],1)]),o("div",{staticClass:"pdfContent_1PW2f"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.isShow,expression:"!isShow"}],ref:"pdfBox",staticClass:"pdf-container",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.1)"}},[o("div",{staticClass:"pdf-box",style:{width:t.pdfWidth/2+"px",left:t.showEdges?"-60px":""}},t._l(t.page_count,(function(e){return o("div",{key:e,staticClass:"pdfPage_1yRne",style:{width:t.pdfWidth/2+"px",height:t.pdfHeight/2+"px"}},[o("canvas",{staticClass:"pdf-item",style:{width:t.pdfWidth/2+"px",height:t.pdfHeight/2+"px"},attrs:{id:"the-canvas"+e}}),t.refresh?o("div",{staticClass:"dragLayer_3ccsq",attrs:{id:"can"+e}}):t._e(),o("transition",{attrs:{name:"slide-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdges,expression:"showEdges"}],staticClass:"es-pdf-page__edges",class:{"es-pdf-page__edges--visible":t.signEdges},staticStyle:{width:"120px"},style:{width:t.slideWidth+"px",height:t.pdfHeight/2+"px"},attrs:{id:"edge_"+e}})])],1)})),0),o("div",{staticClass:"bottom-btn"},[o("span",[t._v("页码："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.page_num,expression:"page_num"}],staticClass:"input-text",attrs:{type:"text",placeholder:"1"},domProps:{value:t.page_num},on:{input:function(e){e.target.composing||(t.page_num=e.target.value)}}}),t._v(" / "+t._s(t.page_count)+" ")]),o("el-button",{staticStyle:{"padding-left":"10px"},attrs:{type:"text",size:"mini"},on:{click:function(e){return t.jump(t.page_num,t.attach_id)}}},[t._v("跳转")])],1)])]),o("div",{staticClass:"taskInfoArea_3ThxW"},[o("div",{staticClass:"tab-context"},[o("div",{directives:[{name:"show",rawName:"v-show",value:2==t.activeName,expression:"activeName == 2"}],staticClass:"locationitem"},[o("div",{staticClass:"componentsList_1OIrB"},[o("p",{staticClass:"titleh2_3zdht"},[t._v("可用印章")]),t._l(t.signatory,(function(e){return o("div",{key:e.id},[1==e.signatoryType?o("div",{staticClass:"seal-location-item"},[1==e.signatoryType?o("p",{staticStyle:{"font-weight":"bold","font-size":"12px"}},[t._v(t._s(e.name))]):t._e(),o("div",{staticClass:"componentArea-show",attrs:{id:e.id},on:{mousedown:t.signText}},[o("p",[t._v("个人签字 位置")]),t._m(6,!0)]),o("div",{staticClass:"componentArea-show",attrs:{id:e.id},on:{mousedown:t.signTime}},[o("p",[t._v("签署时间 位置")]),t._m(7,!0)])]):t._e(),0==e.signatoryType||2==e.signatoryType?o("div",{staticClass:"seal-location-item"},[o("p",{staticStyle:{"font-weight":"bold","font-size":"12px"}},[t._v(t._s(e.companyName))]),o("div",{staticClass:"componentSign-show",attrs:{id:e.id},on:{mousedown:t.signSeal}},[o("p",{staticStyle:{"font-size":"8px"}},[t._v("企业签章 位置")]),t._m(8,!0)]),o("div",{staticClass:"componentArea-show",attrs:{id:e.id},on:{mousedown:t.signTime}},[o("p",[t._v("签署时间 位置")]),t._m(9,!0)])]):t._e()])}))],2),o("div",[o("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[o("el-row",[o("el-button",{staticClass:"Btn",staticStyle:{padding:"13px 25px 13px 25px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.showEdges=!t.showEdges}}},[t._v(t._s(t.showEdges?"清除骑缝章":"加盖骑缝章"))])],1),o("el-row",[o("el-button",{staticClass:"Btn",staticStyle:{padding:"12px 20px 12px 20px","margin-top":"20px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.saveLocation()}}},[t._v("完成指定位置")])],1),o("el-row",[o("el-button",{staticClass:"Btn",staticStyle:{padding:"12px 44px 12px 44px","margin-top":"20px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.goback()}}},[t._v("返回")])],1)],1)])])])])])},c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"itemConentStyle"},[o("span",{staticClass:"need"},[t._v("*")]),o("span",[t._v("签署方")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-kc_mulu"}),o("i",{staticClass:"iconfont icon-pm_auction_success"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"sealCompInfo_3v9iQ"},[o("span",{staticClass:"need"},[t._v("*")]),o("span",[t._v("签署方")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"itemConentStyle_2MWEL"},[o("div",{staticClass:"infoMsg_3NkPg"},[t._v("企业签章 位置")]),o("i",{staticClass:"iconfont icon-pm_auction_success"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"itemConentStyle"},[o("span",{staticClass:"need"},[t._v("*")]),o("span",[t._v("签署方")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-kc_mulu"}),o("i",{staticClass:"iconfont icon-pm_auction_success"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-all_sign"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-all_sign"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-all_sign"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"iconfont icon-all_sign"})])}],s=(o("d3b7"),o("159b"),o("b0c0"),o("ac1f"),o("1276"),o("caad"),o("25f0"),o("4ec9"),o("3ca3"),o("ddb0"),o("30c2")),i=o("4d5c"),a=o("adc1"),r=!1,l=0,u=0,d={data:function(){return{showEdges:!1,slideWidth:120,signEdges:!1,baseurl:"/prod-api",activeNameLeft:"1",showType:"template",isShow:!1,refresh:!0,signatory:[],role_id:"119",id:"",hasChoose2:!1,hasChoose:!1,dom:null,scrollTop:0,activeName:"2",pageNum:1,scale:1,page_num:0,page_count:0,maxscale:2,minscale:.5,pdfWidth:0,pdfHeight:0,right:!0,left:!0,code:"",commonStructsList:[],contract_info:{},contract_attach:[],attach_id:"",contract_img:[],attach_idArr:"",contractId:"",arry:[],visible:!1,statusdict:["保存草稿","签约发起","签约完成","签约终止","签约终止"]}},created:function(){this.contractId=this.$route.params.id,this.mobile=localStorage.getItem("siteMobile"),this.getData()},beforeRouteLeave:function(t,e,o){o()},mounted:function(){this.$nextTick((function(){this.$refs.pdfBox.addEventListener("scroll",this.handleScroll,!0)}))},watch:{scale:function(t,e){document.querySelectorAll(".mark").forEach((function(o){o.style.left=parseInt(o.style.left)/(e/t)+"px",o.style.top=parseInt(o.style.top)/(e/t)+"px",o.style.height=100*t+"px",o.style.width=100*t+"px"})),document.querySelectorAll(".text_mark").forEach((function(o){o.style.left=parseInt(o.style.left)/(e/t)+"px",o.style.top=parseInt(o.style.top)/(e/t)+"px",o.style.height=28*t+"px",o.style.width=o.offsetWidth/(e/t)+"px"})),document.querySelectorAll(".text_mark2").forEach((function(o){o.style.left=parseInt(o.style.left)/(e/t)+"px",o.style.top=parseInt(o.style.top)/(e/t)+"px",o.style.height=100*t+"px",o.style.width=100*t+"px"}))},role_id:function(t,e){var o=this.idConvName(t);document.querySelector(".choose2")?(document.querySelector(".choose2").setAttribute("role_id",this.role_id),document.querySelector(".choose2").childNodes[0].childNodes[1].innerText=o):document.querySelector(".choose")&&(document.querySelector(".choose").setAttribute("role_id",this.role_id),document.querySelector(".choose").childNodes[0].childNodes[1].innerText=o)},showEdges:function(t,e){t||this.deleteIt3()}},methods:{handelChange:function(t){var e=this;0==this.arry.length&&this.contract_attach.forEach((function(t,o){e.arry.push(t.contractImgList.length)}));var o=0;if(t){for(var n=0;n<t;n++)o+=this.arry[n];this.jump(o+1)}else this.jump(1)},nameConvId:function(t){for(var e="",o=0;o<this.signatory.length;o++)if(this.signatory[o].name==t){e=this.signatory[o].id;break}return e},downcontact:function(t){var e=this.contractId;this.zipdownload(e,t.name)},idConvName:function(t){for(var e="",o=0;o<this.signatory.length;o++)if(this.signatory[o].id==t){e="1"==this.signatory[o].signatoryType?this.signatory[o].name:this.signatory[o].companyName;break}return e},setTemplate:function(){for(var t=this,e=0;e<t.commonStructsList.length;e++)if("paging"==t.commonStructsList[e].docPage){t.showEdges=!0;var o=document.querySelector(".componentSign").cloneNode(!0);o.style.left=t.commonStructsList[e].posX+"px",o.style.top=t.commonStructsList[e].posY+"px",document.onmousemove=null,document.onmouseup=null;for(var n=1;n<=t.page_count;n++){var c=o.cloneNode(!0);document.querySelector("#edge_"+n).appendChild(c),c.setAttribute("page",n),c.setAttribute("uuid",t.commonStructsList[e].uuid),c.setAttribute("id",t.commonStructsList[e].signatoryId),c.className="componentSign text_mark2 slide-sign",c.style.display="flex",c.onmousedown=t.moveTo2,c.onmouseenter=t.sealMouseenter,c.onmouseleave=t.sealMouseleave,c.childNodes[2].onclick=t.deleteIt2,c.childNodes[0].childNodes[1].innerText=t.idConvName(t.commonStructsList[e].signatoryId)}}else if(1==t.commonStructsList[e].formType){var s=document.querySelector(".componentArea").cloneNode(!0);document.querySelector("#can"+t.commonStructsList[e].docPage).appendChild(s),s.style.left=t.commonStructsList[e].posX+"px",s.style.top=t.commonStructsList[e].posY+"px",s.style.width="100px",s.style.display="flex",s.classList.add("text_mark"),s.onmouseenter=t.TextMouseenter,s.onmouseleave=t.TextMouseleave,s.onclick=t.textClick,s.onmousedown=t.moveTo,s.setAttribute("page",t.commonStructsList[e].docPage),s.setAttribute("id",t.commonStructsList[e].signatoryId),s.childNodes[0].childNodes[1].innerText=this.idConvName(t.commonStructsList[e].signatoryId),s.childNodes[3].onclick=t.TextDeleteIt}else if(3==t.commonStructsList[e].formType){var i=document.querySelector(".componentTime").cloneNode(!0);document.querySelector("#can"+t.commonStructsList[e].docPage).appendChild(i),i.style.left=t.commonStructsList[e].posX+"px",i.style.top=t.commonStructsList[e].posY+"px",i.style.width="100px",i.style.display="flex",i.classList.add("text_mark"),i.onmouseenter=t.TextMouseenter,i.onmouseleave=t.TextMouseleave,i.onclick=t.textClick,i.onmousedown=t.moveTo,i.setAttribute("page",t.commonStructsList[e].docPage),i.setAttribute("id",t.commonStructsList[e].signatoryId),i.childNodes[0].childNodes[1].innerText=this.idConvName(t.commonStructsList[e].signatoryId),i.childNodes[3].onclick=t.TextDeleteIt}else{var a=document.querySelector(".componentSign").cloneNode(!0);document.querySelector("#can"+t.commonStructsList[e].docPage).appendChild(a),a.style.left=t.commonStructsList[e].posX+"px",a.style.top=t.commonStructsList[e].posY+"px",a.style.display="flex",a.classList.add("text_mark2"),a.onmouseenter=t.sealMouseenter,a.onmouseleave=t.sealMouseleave,a.onclick=t.sealClick,a.onmousedown=t.sealMoveTo,a.setAttribute("page",t.commonStructsList[e].docPage),a.setAttribute("id",t.commonStructsList[e].signatoryId),a.childNodes[0].childNodes[1].innerText=this.idConvName(t.commonStructsList[e].signatoryId),a.childNodes[2].onclick=t.sealDeleteIt}},saveLocation:function(){var t=this,e=[],o=[];document.querySelectorAll(".text_mark").forEach((function(o){var n=o.className,c=parseInt(o.getAttribute("page")),s=1;n.indexOf("componentTime")>=0&&(s=3);var i=t.attach_idArr.get(c).split("||")[0],a=t.attach_idArr.get(c).split("||")[1],r={contractId:t.contractId,formType:s,signatoryId:o.id,posX:parseInt(o.style.left)/t.scale,posY:parseInt(o.style.top)/t.scale,docPage:c,attachid:i,seq:a};e.push(r)})),document.querySelectorAll(".text_mark2").forEach((function(n){var c=n.className,s=parseInt(n.getAttribute("page")),i=t.attach_idArr.get(s).split("||")[0],a=t.attach_idArr.get(s).split("||")[1];if(c.indexOf("slide-sign")>0){var r=parseInt(n.style.top)/t.scale;if(o.includes(r))return;o.push(r);var l={contractId:t.contractId,signatoryId:n.id,posX:parseInt(n.style.left)/t.scale,posY:parseInt(n.style.top)/t.scale,docPage:"paging",attachid:i,seq:a,uuid:n.getAttribute("uuid")};e.push(l)}else{var u={contractId:t.contractId,formType:2,signatoryId:n.id,posX:parseInt(n.style.left)/t.scale,posY:parseInt(n.style.top)/t.scale,docPage:s,attachid:i,seq:a,uuid:n.getAttribute("uuid")};e.push(u)}})),0!=e.length?Object(s["h"])(e).then((function(e){200===e.code&&t.goback()})):this.$message({message:"请先指定签署位置！",type:"warning"})},getData:function(){var t=this;Object(i["c"])(this.contractId).then((function(e){200===e.code&&(t.signatory=e.data,Object(a["e"])(t.contractId).then((function(e){200===e.code&&(t.contract_info=e.data)})))})),this.page_count=0,Object(s["d"])(this.contractId).then((function(e){if(200===e.code){t.contract_attach=e.data,t.attach_id=t.contract_attach[0].id,t.commonStructsList=[];for(var o=0;o<t.contract_attach.length;o++)if(t.page_count=t.page_count+t.contract_attach[o].contractImgList.length,t.contract_attach[o].signLocation)for(var n=JSON.parse(t.contract_attach[o].signLocation),c=0;c<n.length;c++)t.commonStructsList.push(n[c]);t.loadFile()}}))},signSeal:function(t){var e=this,o=t.currentTarget.cloneNode(!0).getAttribute("id"),n=document.querySelector(".componentSign").cloneNode(!0),c=0;document.querySelector("#app").clientWidth>1026&&(c=document.querySelector(".el-scrollbar__view").clientWidth),this.signEdges=!0,document.onmousemove=function(t){document.querySelector("#pageContent").appendChild(n),n.style.display="flex",n.style.left=e.getPos(t).x-parseInt(n.clientWidth/2)-c+"px",n.style.top=e.getPos(t).y-100+"px",n.className="componentSign text_mark2"},document.onmouseup=function(t){var s=e.getPos(t).x+e.$refs.pdfBox.scrollLeft-parseInt(n.clientWidth/2)-document.querySelector(".pdf-box").offsetLeft-c,i=e.getPos(t).y+e.scrollTop-parseInt(n.clientHeight/2)-100,a=!1;e.showEdges?(s<0?s=0:s>document.querySelector(".pdf-box").clientWidth-100*e.scale&&(s=document.querySelector(".pdf-box").clientWidth,a=!0),i<0?i=0:i>document.querySelector(".pdf-box").clientHeight-100*e.scale&&(i=document.querySelector(".pdf-box").clientHeight-100*e.scale)):(s<0?s=0:s>document.querySelector(".pdf-box").clientWidth-100*e.scale&&(s=document.querySelector(".pdf-box").clientWidth-100*e.scale),i<0?i=0:i>document.querySelector(".pdf-box").clientHeight-100*e.scale&&(i=document.querySelector(".pdf-box").clientHeight-100*e.scale));var r=0;if(i>e.pdfHeight/2*e.page_num&&parseInt(e.page_num)<parseInt(e.page_count)?(i-=e.pdfHeight/2*e.page_num,r=e.page_num+1):(i-=e.pdfHeight/2*(e.page_num-1),r=e.page_num),i-=10*(r-1),n.style.left=s+"px",n.style.top=i+"px",n.style.height=100*e.scale+"px",n.style.width=100*e.scale+"px",document.querySelector("#pageContent").removeChild(n),e.showEdges&&a){n.style.left=s-e.pdfWidth/2+"px",n.style.top=i+"px",document.onmousemove=null,document.onmouseup=null;for(var l=e.getUUID(),u=1;u<=e.page_count;u++){var d=n.cloneNode(!0);document.querySelector("#edge_"+u).appendChild(d),d.setAttribute("page",u),d.setAttribute("id",o),d.setAttribute("uuid",l),d.className="componentSign text_mark2 slide-sign",d.onmousedown=e.moveTo2,d.onmouseenter=e.sealMouseenter,d.onmouseleave=e.sealMouseleave,d.childNodes[2].onclick=e.deleteIt2,d.childNodes[0].childNodes[1].innerText=e.idConvName(o)}e.signEdges=!1}else{var p=e.getUUID();document.querySelector("#can"+r).appendChild(n),document.onmousemove=null,document.onmouseup=null,n.onmousedown=e.sealMoveTo,n.onmouseenter=e.sealMouseenter,n.onmouseleave=e.sealMouseleave,n.childNodes[2].onclick=e.sealDeleteIt,n.setAttribute("page",r),n.setAttribute("id",o),n.setAttribute("uuid",p),n.childNodes[0].childNodes[1].innerText=e.idConvName(o)}}},getUUID:function(){return Math.random().toString(36).substr(3,10)},sealDeleteIt:function(t){return this.hasChoose2=!1,this.hasChoose=!1,t.currentTarget.parentNode.parentNode.removeChild(t.currentTarget.parentNode),t.stopPropagation(),t.preventDefault(),!1},sealClick:function(t){for(var e=this,o=0;o<document.querySelectorAll(".text_mark").length;o++)document.querySelectorAll(".text_mark")[o].childNodes[0].style.display="none",document.querySelectorAll(".text_mark")[o].childNodes[3].style.display="none",document.querySelectorAll(".text_mark")[o].onmouseleave=e.TextMouseleave,document.querySelectorAll(".text_mark")[o].classList.remove("choose");for(var n=0;n<document.querySelectorAll(".text_mark2").length;n++)document.querySelectorAll(".text_mark2")[n].childNodes[0].style.display="none",document.querySelectorAll(".text_mark2")[n].childNodes[2].style.display="none",document.querySelectorAll(".text_mark2")[n].onmouseleave=e.sealMouseleave,document.querySelectorAll(".text_mark2")[n].classList.remove("choose2");return t.currentTarget.childNodes[0].style.display="flex",t.currentTarget.childNodes[2].style.display="block",t.currentTarget.classList.add("choose2"),t.currentTarget.onmouseleave=null,this.role_id=this.nameConvId(document.querySelector(".choose2").childNodes[0].childNodes[1].innerText),this.hasChoose2=!0,this.hasChoose=!1,r&&(r=!1),t.stopPropagation(),t.preventDefault(),!1},sealMouseenter:function(t){t.currentTarget.childNodes[0].style.display="flex",t.currentTarget.childNodes[2].style.display="block"},sealMouseleave:function(t){t.currentTarget.childNodes[0].style.display="none",t.currentTarget.childNodes[2].style.display="none"},sealMoveTo:function(t){var e=this;l=(new Date).getTime();var o=t.currentTarget,n=t.clientX-o.offsetLeft,c=t.clientY-o.offsetTop;document.onmousemove=function(t){var s=t.clientX-n,i=t.clientY-c;s<=0?s=0:s>=document.querySelector(".pdf-box").clientWidth-o.clientWidth&&(s=document.querySelector(".pdf-box").clientWidth-o.clientWidth),i<=0?i=0:i>=e.pdfHeight-o.clientHeight&&(i=e.pdfHeight-o.clientHeight),o.style.left=s+"px",o.style.top=i+"px"},document.onmouseup=function(t){u=(new Date).getTime(),u-l<400&&(r=!0),document.onmousemove=null,document.onmouseup=null}},signText:function(t){var e=this,o=t.currentTarget.cloneNode(!0).getAttribute("id"),n=document.querySelector(".componentArea").cloneNode(!0),c=0;document.querySelector("#app").clientWidth>1026&&(c=document.querySelector(".el-scrollbar__view").clientWidth),document.onmousemove=function(t){document.querySelector("#pageContent").appendChild(n),n.style.left=e.getPos(t).x-parseInt(n.clientWidth/2)-c+"px",n.style.top=e.getPos(t).y-65+"px",n.className="componentArea text_mark",n.style.display="flex"},document.onmouseup=function(t){var s=e.getPos(t).x+e.$refs.pdfBox.scrollLeft-parseInt(n.clientWidth/2)-document.querySelector(".pdf-box").offsetLeft-c,i=e.getPos(t).y+e.scrollTop-parseInt(n.clientHeight/2)-100;s<0?s=0:s>document.querySelector(".pdf-box").clientWidth-n.clientWidth*e.scale&&(s=document.querySelector(".pdf-box").clientWidth-n.clientWidth*e.scale),i<0?i=0:i>document.querySelector(".pdf-box").clientHeight-50*e.scale&&(i=document.querySelector(".pdf-box").clientHeight-50*e.scale);var a=0;i>e.pdfHeight/2*e.page_num&&parseInt(e.page_num)<parseInt(e.page_count)?(i-=e.pdfHeight/2*e.page_num,a=e.page_num+1):(i-=e.pdfHeight/2*(e.page_num-1),a=e.page_num),i-=10*(a-1),n.style.left=s+"px",n.style.top=i+"px",n.style.height=50*e.scale+"px",n.style.width=100*e.scale+"px",document.querySelector("#pageContent").removeChild(n);var r=e.getUUID();document.querySelector("#can"+a).appendChild(n),document.onmousemove=null,document.onmouseup=null,n.onmousedown=e.moveTo,n.onmouseenter=e.TextMouseenter,n.onmouseleave=e.TextMouseleave,n.childNodes[3].onclick=e.TextDeleteIt,n.setAttribute("page",a),n.setAttribute("id",o),n.setAttribute("uuid",r),n.childNodes[0].childNodes[1].innerText=e.idConvName(o)}},signTime:function(t){var e=this,o=t.currentTarget.cloneNode(!0).getAttribute("id"),n=document.querySelector(".componentTime").cloneNode(!0),c=0;document.querySelector("#app").clientWidth>1026&&(c=document.querySelector(".el-scrollbar__view").clientWidth),document.onmousemove=function(t){document.querySelector("#pageContent").appendChild(n),n.style.left=e.getPos(t).x-parseInt(n.clientWidth/2)-c+"px",n.style.top=e.getPos(t).y-65+"px",n.className="componentTime text_mark",n.style.display="flex"},document.onmouseup=function(t){var s=e.getPos(t).x+e.$refs.pdfBox.scrollLeft-parseInt(n.clientWidth/2)-document.querySelector(".pdf-box").offsetLeft-c,i=e.getPos(t).y+e.scrollTop-parseInt(n.clientHeight/2)-100;s<0?s=0:s>document.querySelector(".pdf-box").clientWidth-n.clientWidth*e.scale&&(s=document.querySelector(".pdf-box").clientWidth-n.clientWidth*e.scale),i<0?i=0:i>document.querySelector(".pdf-box").clientHeight-50*e.scale&&(i=document.querySelector(".pdf-box").clientHeight-50*e.scale);var a=0;i>e.pdfHeight/2*e.page_num&&parseInt(e.page_num)<parseInt(e.page_count)?(i-=e.pdfHeight/2*e.page_num,a=e.page_num+1):(i-=e.pdfHeight/2*(e.page_num-1),a=e.page_num),i-=10*(a-1),n.style.left=s+"px",n.style.top=i+"px",n.style.height=30*e.scale+"px",n.style.width=100*e.scale+"px",document.querySelector("#pageContent").removeChild(n);var r=e.getUUID();document.querySelector("#can"+a).appendChild(n),document.onmousemove=null,document.onmouseup=null,n.onmousedown=e.moveTo,n.onmouseenter=e.TextMouseenter,n.onmouseleave=e.TextMouseleave,n.childNodes[3].onclick=e.TextDeleteIt,n.setAttribute("page",a),n.setAttribute("id",o),n.setAttribute("uuid",r),n.childNodes[0].childNodes[1].innerText=e.idConvName(o)}},TextDeleteIt:function(t){return this.hasChoose2=!1,this.hasChoose=!1,t.currentTarget.parentNode.parentNode.removeChild(t.currentTarget.parentNode),t.stopPropagation(),t.preventDefault(),!1},textClick:function(t){},TextMouseenter:function(t){t.currentTarget.childNodes[0].style.display="flex",t.currentTarget.childNodes[3].style.display="block"},TextMouseleave:function(t){t.currentTarget.childNodes[0].style.display="none",t.currentTarget.childNodes[3].style.display="none"},moveTo:function(t){var e=this;l=(new Date).getTime();var o=t.currentTarget,n=t.clientX-o.offsetLeft,c=t.clientY-o.offsetTop;document.onmousemove=function(t){var s=t.clientX-n,i=t.clientY-c;s<=0?s=0:s>=document.querySelector(".pdf-box").clientWidth-o.clientWidth&&(s=document.querySelector(".pdf-box").clientWidth-o.clientWidth),i<=0?i=0:i>=e.pdfHeight-o.clientHeight&&(i=e.pdfHeight-o.clientHeight),o.style.left=s+"px",o.style.top=i+"px"},document.onmouseup=function(t){u=(new Date).getTime(),u-l<400&&(r=!0),document.onmousemove=null,document.onmouseup=null}},moveTo2:function(t){var e=this,o=t.currentTarget,n=t.clientX-o.offsetLeft,c=t.clientY-o.offsetTop;document.onmousemove=function(t){var s=t.clientX-n,i=t.clientY-c;s<=0?s=0:s>=120*e.scale-o.clientWidth&&(s=120*e.scale-o.clientWidth),i<=0?i=0:i>=e.pdfHeight-o.clientHeight&&(i=e.pdfHeight-o.clientHeight),o.style.left=s+"px",o.style.top=i+"px"},document.onmouseup=function(t){document.querySelectorAll(".slide-sign").forEach((function(t){t.getAttribute("uuid")==o.getAttribute("uuid")&&(t.style.left=o.style.left,t.style.top=o.style.top)})),document.onmousemove=null,document.onmouseup=null}},deleteIt2:function(t){var e=t.currentTarget;document.querySelectorAll(".slide-sign").forEach((function(t){t.getAttribute("uuid")==e.parentNode.getAttribute("uuid")&&t.parentNode.removeChild(t)}))},deleteIt3:function(){document.querySelectorAll(".slide-sign").forEach((function(t){t.parentNode.removeChild(t)}))},getPos:function(t){return{x:t.clientX,y:t.clientY}},toGetReal:function(){this.$router.push({path:"/accredited_institution",query:{productId:this.$route.query.productId,order_sn:this.$route.query.order_sn}})},handleClick:function(t,e){},handleScroll:function(t){var e=this;this.scrollTop=t.target.scrollTop;var o=document.querySelectorAll(".pdfPage_1yRne"),n=[];o.forEach((function(t,o){e.scrollTop>=t.offsetTop&&n.push(o)})),this.page_num=Math.max.apply(null,n)+1;var c=0;this.contract_attach.forEach((function(t,o){c+=t.contractImgList.length,e.page_num>=c-t.contractImgList.length+1&&(e.isActive=o)}))},jump:function(t,e,o){var n=0;this.contract_attach.forEach((function(o,c){o.id!=e?n+=o.contractImgList.length:t=n+t}));var c=this,s=this.page_num-1;if(t&&(s=t-1),s>this.page_count)this.$message.error("请输入有效范围内的数字");else{var i=document.querySelectorAll(".pdfPage_1yRne"),a=i[s].offsetTop,r=this.scrollTop,l=a/30>>0;if(a>r)d();else{var u=r-a;l=u/30>>0,p()}}function d(){r<a?(r+=l,c.$refs.pdfBox.scrollTop=r,setTimeout(d,10)):c.$refs.pdfBox.scrollTop=a}function p(){r>a?(r-=l,c.$refs.pdfBox.scrollTop=r,setTimeout(p,10)):c.$refs.pdfBox.scrollTop=a}},renderPage:function(t,e){var o=document.getElementById("the-canvas"+t),n=o.getContext("2d"),c=new Image;c.onload=function(){n.drawImage(c,0,0,o.width,o.height);var t=n.createPattern(c,"no-repeat");n.fillStyle=t,n.fillRect(10,10,o.width,o.height)},c.src=this.baseurl+e,this.pdfHeight=o.height=1682,this.pdfWidth=o.width=1190},loadFile:function(){var t=this;this.$nextTick((function(){t.pageNum=1,t.page_num=1,t.attach_idArr=new Map;for(var e=0;e<t.contract_attach.length;e++){var o=t.contract_attach[e].contractImgList;t.isShow=!0;for(var n=1;n<=o.length;n++){var c=o[n-1].contractImgUrl,s=o[n-1].seq;t.attach_idArr.set(t.pageNum,t.contract_attach[e].id+"||"+s),t.renderPage(t.pageNum,c),t.pageNum++}}t.setTemplate()}))},goback:function(){this.$router.push("/sign/signviews/"+this.contractId)}}},p=d,m=(o("14d6"),o("0c7c")),h=Object(m["a"])(p,n,c,!1,null,"014dc19f",null);e["default"]=h.exports},"30c2":function(t,e,o){"use strict";o.d(e,"b",(function(){return c})),o.d(e,"g",(function(){return s})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return a})),o.d(e,"h",(function(){return r})),o.d(e,"f",(function(){return l})),o.d(e,"d",(function(){return u})),o.d(e,"e",(function(){return d}));var n=o("b775");function c(t){return Object(n["a"])({url:"/contract/attach/getinfo/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/contract/sign",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/contract/attach/param",method:"get",params:t})}function a(t){return Object(n["a"])({url:"/contract/attach",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/contract/attach",method:"put",data:t})}function l(t){return Object(n["a"])({url:"/sign/seal/getSealList",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/contract/attach/getPic/"+t,method:"get"})}function d(t){return Object(n["a"])({url:"/contract/attach/perfect/"+t,method:"get"})}},"4d5c":function(t,e,o){"use strict";o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return i})),o.d(e,"e",(function(){return a})),o.d(e,"a",(function(){return r}));var n=o("b775");function c(t){return Object(n["a"])({url:"/contract/signatory/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/contract/signatory/getSignatory/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/contract/signatory",method:"put",data:t})}function a(t){return Object(n["a"])({url:"/contract/signatory/updatebyone",method:"put",data:t})}function r(t){return Object(n["a"])({url:"/contract/signatory/getInfoSelf/"+t,method:"get"})}},"4ec9":function(t,e,o){"use strict";var n=o("6d61"),c=o("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),c)},6667:function(t,e,o){},adc1:function(t,e,o){"use strict";o.d(e,"f",(function(){return c})),o.d(e,"e",(function(){return s})),o.d(e,"a",(function(){return i})),o.d(e,"h",(function(){return a})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return l})),o.d(e,"g",(function(){return u})),o.d(e,"d",(function(){return d}));var n=o("b775");function c(t){return Object(n["a"])({url:"/contract/info/list",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/contract/info/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/contract/info",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/contract/info",method:"put",data:t})}function r(t){return Object(n["a"])({url:"/contract/info/"+t,method:"delete"})}function l(t){return Object(n["a"])({url:"/contract/info/export",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/contract/info/sendContract",method:"put",data:t})}function d(t){return Object(n["a"])({url:"/contract/info/count",method:"Get",data:t})}}}]);