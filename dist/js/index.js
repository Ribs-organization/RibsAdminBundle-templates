!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}([function(e,t,n){e.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(10),i=(r=o)&&r.__esModule?r:{default:r};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}t.default=function(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(17),o=n(18),i=n(20),u=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var r,o=n(9),i=(r=o)&&r.__esModule?r:{default:r};n(24),new i.default("main","nav#left-nav").loadPage("pages/dashboard.html")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(2)),r=u(n(3)),i=u(n(23));function u(e){return e&&e.__esModule?e:{default:e}}var a=((0,r.default)(c,[{key:"addClickEventOnLinks",value:function(){var t=this;this.LinksToTriggerTag.querySelectorAll("a:not(.ribs-no-ajax)").forEach(function(e){e.addEventListener("click",function(e){return t.triggerLinkClick(e)})})}},{key:"triggerLinkClick",value:function(e){var t=this;e.preventDefault();var n=e.currentTarget.href;this.api.get(n,"html").then(function(e){t.whereLoadTag.innerHTML=e})}},{key:"loadPage",value:function(e){var t=this;this.api.get(e,"html").then(function(e){t.whereLoadTag.innerHTML=e})}}]),c);function c(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"none";(0,o.default)(this,c),this.whereLoadTag=document.querySelector(e),this.LinksToTriggerTag=document.querySelector(t),this.api=new i.default(n),this.progressBarTag="none"!==r?document.querySelector(r):"none",this.whereLoadTag&&this.progressBarTag&&this.LinksToTriggerTag||console.error("divWhereLoad or progressBar or whereLoadTag not found in DOM"),this.addClickEventOnLinks()}t.default=a},function(e,t,n){e.exports={default:n(11),__esModule:!0}},function(e,t,n){n(12);var r=n(5).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(13);r(r.S+r.F*!n(0),"Object",{defineProperty:n(6).f})},function(e,t,n){var h=n(4),y=n(5),g=n(14),b=n(16),w=n(22),m="prototype",T=function(e,t,n){var r,o,i,u=e&T.F,a=e&T.G,c=e&T.S,f=e&T.P,l=e&T.B,s=e&T.W,d=a?y:y[t]||(y[t]={}),p=d[m],v=a?h:c?h[t]:(h[t]||{})[m];for(r in a&&(n=t),n)(o=!u&&v&&void 0!==v[r])&&w(d,r)||(i=o?v[r]:n[r],d[r]=a&&"function"!=typeof v[r]?n[r]:l&&o?g(i,h):s&&v[r]==i?function(r){function e(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)}return e[m]=r[m],e}(i):f&&"function"==typeof i?g(Function.call,i):i,f&&((d.virtual||(d.virtual={}))[r]=i,e&T.R&&p&&!p[r]&&b(p,r,i)))};T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128,e.exports=T},function(e,t,n){var i=n(15);e.exports=function(r,o,e){if(i(r),void 0===o)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(6),o=n(21);e.exports=n(0)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(1);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(0)&&!n(7)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(1),o=n(4).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var o=n(1);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}var i=((0,r(n(3)).default)(u,[{key:"get",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:"json";return this.execRequest("GET",e,n)}},{key:"post",value:function(e,t,n){var r=2<arguments.length&&void 0!==n?n:"json",o=void 0;if(t instanceof FormData)o=t;else for(var i in o=new FormData,t)o.append(i,t[i]);return this.execRequest("POST",e,r,o)}},{key:"execRequest",value:function(e,t,n,r){var o=this,i=3<arguments.length&&void 0!==r?r:null,u=t;"/"===t[0]&&(u=t.substr(1));var a=new Request(""+this.baseUrl+u,{method:e,mode:this.mode,body:i,credentials:this.credentials});return fetch(a).then(function(e){return 200!==e.status?"error":"json"===n?e.json():e.text()}).then(function(e){if("html"===n){var t=(new DOMParser).parseFromString(e,"text/html");o.deleteScriptTagDom(),o.insertScriptTagInDom(t)}return e})}},{key:"deleteScriptTagDom",value:function(){document.querySelectorAll("script[data-ribsajaxscript]").forEach(function(e){document.body.removeChild(e)})}},{key:"insertScriptTagInDom",value:function(n){n.querySelectorAll("script").forEach(function(e){var t=n.createElement("script");t.src=e.src,t.dataset.ribsajaxscript="",document.body.appendChild(t)})}}]),u);function u(e,t,n){(0,o.default)(this,u);var r="";window.origin||"cors"===t||(r=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),this.baseUrl=""+r+e,this.mode=t,this.credentials=n}t.default=i},function(e,t,n){}]);