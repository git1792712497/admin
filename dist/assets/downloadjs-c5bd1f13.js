import{c as D}from"./@amap-9fd45ac7.js";var T={exports:{}};(function(A,E){(function(g,w){A.exports=w()})(D,function(){return function g(w,U,B){var n=window,l="application/octet-stream",i=B||l,e=w,d=!U&&!B&&e,o=document.createElement("a"),h=function(t){return String(t)},a=n.Blob||n.MozBlob||n.WebKitBlob||h,c=U||"download",r,v;if(a=a.call?a.bind(n):Blob,String(this)==="true"&&(e=[e,i],i=e[0],e=e[1]),d&&d.length<2048&&(c=d.split("/").pop().split("?")[0],o.href=d,o.href.indexOf(d)!==-1)){var f=new XMLHttpRequest;return f.open("GET",d,!0),f.responseType="blob",f.onload=function(t){g(t.target.response,c,l)},setTimeout(function(){f.send()},0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(e))if(e.length>1024*1024*1.999&&a!==h)e=R(e),i=e.type||l;else return navigator.msSaveBlob?navigator.msSaveBlob(R(e),c):p(e);else if(/([\x80-\xff])/.test(e)){var u=0,y=new Uint8Array(e.length),k=y.length;for(u;u<k;++u)y[u]=e.charCodeAt(u);e=new a([y],{type:i})}r=e instanceof a?e:new a([e],{type:i});function R(t){var s=t.split(/[:;,]/),m=s[1],x=s[2]=="base64"?atob:decodeURIComponent,S=x(s.pop()),C=S.length,b=0,L=new Uint8Array(C);for(b;b<C;++b)L[b]=S.charCodeAt(b);return new a([L],{type:m})}function p(t,s){if("download"in o)return o.href=t,o.setAttribute("download",c),o.className="download-js-link",o.innerHTML="downloading...",o.style.display="none",document.body.appendChild(o),setTimeout(function(){o.click(),document.body.removeChild(o),s===!0&&setTimeout(function(){n.URL.revokeObjectURL(o.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),window.open(t)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=t),!0;var m=document.createElement("iframe");document.body.appendChild(m),!s&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),m.src=t,setTimeout(function(){document.body.removeChild(m)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(r,c);if(n.URL)p(n.URL.createObjectURL(r),!0);else{if(typeof r=="string"||r.constructor===h)try{return p("data:"+i+";base64,"+n.btoa(r))}catch(t){return p("data:"+i+","+encodeURIComponent(r))}v=new FileReader,v.onload=function(t){p(this.result)},v.readAsDataURL(r)}return!0}})})(T);const G=T.exports;export{G as d};
