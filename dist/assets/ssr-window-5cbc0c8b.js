function o(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function r(e={},n={}){Object.keys(n).forEach(t=>{typeof e[t]=="undefined"?e[t]=n[t]:o(n[t])&&o(e[t])&&Object.keys(n[t]).length>0&&r(e[t],n[t])})}const u={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function c(){const e=typeof document!="undefined"?document:{};return r(e,u),e}const i={document:u,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout=="undefined"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout!="undefined"&&clearTimeout(e)}};function s(){const e=typeof window!="undefined"?window:{};return r(e,i),e}export{c as a,s as g};