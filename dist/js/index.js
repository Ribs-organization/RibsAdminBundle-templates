!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=60)}([function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(e,t,n){var r=n(7),o=n(17),i=n(14),u=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(e,t,n){var r=n(2),o=n(10);e.exports=n(0)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(3);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},,function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},,function(e,t,n){var g=n(1),v=n(4),y=n(19),w=n(5),b=n(6),m="prototype",T=function(e,t,n){var r,o,i,u=e&T.F,a=e&T.G,c=e&T.S,s=e&T.P,f=e&T.B,l=e&T.W,d=a?v:v[t]||(v[t]={}),p=d[m],h=a?g:c?g[t]:(g[t]||{})[m];for(r in a&&(n=t),n)(o=!u&&h&&void 0!==h[r])&&b(d,r)||(i=(o?h:n)[r],d[r]=a&&"function"!=typeof h[r]?n[r]:f&&o?y(i,g):l&&h[r]==i?function(r){function e(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)}return e[m]=r[m],e}(i):s&&"function"==typeof i?y(Function.call,i):i,s&&((d.virtual||(d.virtual={}))[r]=i,e&T.R&&p&&!p[r]&&w(p,r,i)))};T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128,e.exports=T},function(e,t,n){var r=n(3),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var o=n(3);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(29),i=(r=o)&&r.__esModule?r:{default:r};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}t.default=function(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}},function(e,t,n){e.exports=!n(0)&&!n(8)(function(){return 7!=Object.defineProperty(n(13)("div"),"a",{get:function(){return 7}}).a})},,function(e,t,n){var i=n(20);e.exports=function(r,o,e){if(i(r),void 0===o)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},,,,,,,,,function(e,t,n){e.exports={default:n(30),__esModule:!0}},function(e,t,n){n(31);var r=n(4).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(12);r(r.S+r.F*!n(0),"Object",{defineProperty:n(2).f})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(15));function r(e){return e&&e.__esModule?e:{default:e}}(0,r(n(16)).default)(i,[{key:"get",value:function(e,t){t=1<arguments.length&&void 0!==t?t:"json";return this.execRequest("GET",e,t)}},{key:"post",value:function(e,t,n){var n=2<arguments.length&&void 0!==n?n:"json",r=void 0;if(t instanceof FormData)r=t;else for(var o in r=new FormData,t)r.append(o,t[o]);return this.execRequest("POST",e,n,r)}},{key:"execRequest",value:function(e,t,n,r){var o=this,i=3<arguments.length&&void 0!==r?r:null,r=t;"/"===t[0]&&(r=t.substr(1));i=new Request(""+this.baseUrl+r,{method:e,mode:this.mode,body:i,credentials:this.credentials});return fetch(i).then(function(e){return 200!==e.status?"error":"json"===n?e.json():e.text()}).then(function(e){var t;return"html"===n&&(t=(new DOMParser).parseFromString(e,"text/html"),o.deleteScriptTagDom(),o.insertScriptTagInDom(t)),e})}},{key:"deleteScriptTagDom",value:function(){document.querySelectorAll("script[data-ribsajaxscript]").forEach(function(e){document.body.removeChild(e)})}},{key:"insertScriptTagInDom",value:function(n){n.querySelectorAll("script").forEach(function(e){var t=n.createElement("script");t.src=e.src,t.dataset.ribsajaxscript="",document.body.appendChild(t)})}}]),n=i;function i(e,t,n){(0,o.default)(this,i);var r="";"external"!==t&&(r=window.location.protocol+"//"+window.location.hostname+"/",window.origin||"cors"===t||(r=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""))),this.baseUrl=""+r+e,this.mode="external"===t?"cors":t,this.credentials=n}t.default=n},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(15)),r=u(n(16)),i=u(n(32));function u(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(a,[{key:"addClickEventOnLinks",value:function(){var t=this;("a"===this.LinksToTriggerTag.tagName.toLowerCase()?document.querySelectorAll("a:not(.ribs-no-ajax)"+this.LinksToTriggerClassString):this.LinksToTriggerTag.querySelectorAll("a:not(.ribs-no-ajax)")).forEach(function(e){e.addEventListener("click",function(e){return t.triggerLinkClick(e)})})}},{key:"triggerLinkClick",value:function(e){e.preventDefault();e=e.currentTarget.href;this.loadPage(e)}},{key:"showProgressBar",value:function(){"none"!==this.progressBarTag&&this.progressBarTag&&this.progressBarTag.classList.add("active")}},{key:"hideProgressBar",value:function(){"none"!==this.progressBarTag&&this.progressBarTag&&this.progressBarTag.classList.remove("active")}},{key:"loadPage",value:function(e){var t=this;this.showProgressBar(),this.api.get(e,"html").then(function(e){t.whereLoadTag.innerHTML=e,t.hideProgressBar()})}}]),r=a;function a(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"none",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"";(0,o.default)(this,a),this.whereLoadTag=document.querySelector(e),this.LinksToTriggerClassString=t,this.LinksToTriggerTag=document.querySelector(t),this.api=new i.default(r,"external"),this.progressBarTag="none"!==n?document.querySelector(n):"none",this.whereLoadTag&&this.progressBarTag&&this.LinksToTriggerTag||console.error("divWhereLoad or progressBar or whereLoadTag not found in DOM"),this.addClickEventOnLinks()}t.default=r},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r,o=n(40);new((r=o)&&r.__esModule?r:{default:r}).default("main","nav#left-nav","#loader","").loadPage("pages/dashboard.html")}]);