import{h as O}from"./has-symbols-8f82dcae.js";import{f as G}from"./function-bind-22e7ee79.js";import{s as T}from"./has-26d28e02.js";var r,P=SyntaxError,N=Function,A=TypeError,U=function(y){try{return N('"use strict"; return ('+y+").constructor;")()}catch(t){}},f=Object.getOwnPropertyDescriptor;if(f)try{f({},"")}catch(y){f=null}var w=function(){throw new A},k=f?function(){try{return arguments.callee,w}catch(y){try{return f(arguments,"callee").get}catch(t){return w}}}():w,l=O(),c=Object.getPrototypeOf||function(y){return y.__proto__},u={},_=typeof Uint8Array=="undefined"?r:c(Uint8Array),d={"%AggregateError%":typeof AggregateError=="undefined"?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?r:ArrayBuffer,"%ArrayIteratorPrototype%":l?c([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":u,"%AsyncGenerator%":u,"%AsyncGeneratorFunction%":u,"%AsyncIteratorPrototype%":u,"%Atomics%":typeof Atomics=="undefined"?r:Atomics,"%BigInt%":typeof BigInt=="undefined"?r:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?r:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?r:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?r:FinalizationRegistry,"%Function%":N,"%GeneratorFunction%":u,"%Int8Array%":typeof Int8Array=="undefined"?r:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?r:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l?c(c([][Symbol.iterator]())):r,"%JSON%":typeof JSON=="object"?JSON:r,"%Map%":typeof Map=="undefined"?r:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!l?r:c(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?r:Promise,"%Proxy%":typeof Proxy=="undefined"?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?r:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?r:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!l?r:c(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l?c(""[Symbol.iterator]()):r,"%Symbol%":l?Symbol:r,"%SyntaxError%":P,"%ThrowTypeError%":k,"%TypedArray%":_,"%TypeError%":A,"%Uint8Array%":typeof Uint8Array=="undefined"?r:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?r:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?r:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?r:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?r:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?r:WeakSet},C=function y(t){var o;if(t==="%AsyncFunction%")o=U("async function () {}");else if(t==="%GeneratorFunction%")o=U("function* () {}");else if(t==="%AsyncGeneratorFunction%")o=U("async function* () {}");else if(t==="%AsyncGenerator%"){var e=y("%AsyncGeneratorFunction%");e&&(o=e.prototype)}else if(t==="%AsyncIteratorPrototype%"){var n=y("%AsyncGenerator%");n&&(o=c(n.prototype))}return d[t]=o,o},x={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},g=G,F=T,M=g.call(Function.call,Array.prototype.concat),$=g.call(Function.apply,Array.prototype.splice),B=g.call(Function.call,String.prototype.replace),b=g.call(Function.call,String.prototype.slice),j=g.call(Function.call,RegExp.prototype.exec),W=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,D=/\\(\\)?/g,J=function(t){var o=b(t,0,1),e=b(t,-1);if(o==="%"&&e!=="%")throw new P("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&o!=="%")throw new P("invalid intrinsic syntax, expected opening `%`");var n=[];return B(t,W,function(i,s,a,S){n[n.length]=a?B(S,D,"$1"):s||i}),n},V=function(t,o){var e=t,n;if(F(x,e)&&(n=x[e],e="%"+n[0]+"%"),F(d,e)){var i=d[e];if(i===u&&(i=C(e)),typeof i=="undefined"&&!o)throw new A("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:n,name:e,value:i}}throw new P("intrinsic "+t+" does not exist!")},Y=function(t,o){if(typeof t!="string"||t.length===0)throw new A("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof o!="boolean")throw new A('"allowMissing" argument must be a boolean');if(j(/^%?[^%]*%?$/,t)===null)throw new P("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=J(t),n=e.length>0?e[0]:"",i=V("%"+n+"%",o),s=i.name,a=i.value,S=!1,R=i.alias;R&&(n=R[0],$(e,M([0,1],R)));for(var m=1,v=!0;m<e.length;m+=1){var p=e[m],E=b(p,0,1),h=b(p,-1);if((E==='"'||E==="'"||E==="`"||h==='"'||h==="'"||h==="`")&&E!==h)throw new P("property names with quotes must have matching quotes");if((p==="constructor"||!v)&&(S=!0),n+="."+p,s="%"+n+"%",F(d,s))a=d[s];else if(a!=null){if(!(p in a)){if(!o)throw new A("base intrinsic for "+t+" exists, but the property is not available.");return}if(f&&m+1>=e.length){var I=f(a,p);v=!!I,v&&"get"in I&&!("originalValue"in I.get)?a=I.get:a=a[p]}else v=F(a,p),a=a[p];v&&!S&&(d[s]=a)}}return a};export{Y as g};