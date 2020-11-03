/*!
* pippa-js v0.2.0
* (c) 2020 Pippa <hello@onpippa.com> (https://www.onpippa.com/)
*/
import t from"cross-fetch";function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,r){return(f=s()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,u(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,t)})(t)}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=s();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}!function(t,e,r){t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=c(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function l(){}function h(){}var p={};p[o]=function(){return this};var y=Object.getPrototypeOf,d=y&&y(y(E([])));d&&d!==e&&r.call(d,o)&&(p=d);var v=h.prototype=f.prototype=Object.create(p);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var s=c(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return l.prototype=v.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));var g=function(t){a(r,l(Error));var e=p(r);function r(t){var o;n(this,r);var i="Unknown error";return t.body&&t.body.message?i=t.body.message:t.data&&t.data.message?i=t.data.message:t.data.errors&&t.data.errors.length>0&&t.data.errors[0].message&&(i=t.data.errors[0].message),(o=e.call(this,i)).status=t.status,o}return r}(),b=function(t){a(r,l(Error));var e=p(r);function r(t){var o;return n(this,r),(o=e.call(this,"Query error")).errors=t.data.errors,o.status=t.status,o}return r}(),w=function(){function t(){n(this,t),this.handlers=[]}return i(t,[{key:"use",value:function(t){return this.handlers.push(t),this.handlers.length-1}},{key:"forEach",value:function(t){var e,r=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=v(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(this.handlers);try{for(r.s();!(e=r.n()).done;){(0,e.value)(t)}}catch(t){r.e(t)}finally{r.f()}}}]),t}(),x=function(){function e(){n(this,e),this.options={timeout:6e3,headers:{"Pippa-Agent":"pippa.js-".concat("0.2.0"),"Content-Type":"application/json; charset=utf-8"}},this.interceptors={request:new w,fulfilled:new w,rejected:new w}}var o,a,u,c,s,f,l,h;return i(e,[{key:"setTimeout",value:function(t){this.options.timeout=t}},{key:"setOption",value:function(t,e){this.options[t]=e}},{key:"setApi",value:function(t){this.url=t}},{key:"getUrl",value:function(){return this.url}},{key:"getVersion",value:function(){return"pippa.js-".concat("0.2.0")}},{key:"setToken",value:function(t){if(null!=t){if(this.token=t,t.indexOf("__")>-1&&t.indexOf("__")<40){var e=t.split("__")[0];this.url=e.indexOf("localhost")>-1?"http://".concat(e):"https://".concat(e)}this.options.headers["x-auth"]=t}}},{key:"setHeader",value:function(t,e){this.options.headers[t]=e}},{key:"buildUrl",value:function(t,e){var r="";for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];r+="".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(o),"&")}return r.length>0&&(r=r.substring(0,r.length-1),t="".concat(t,"?").concat(r)),t}},{key:"requiresToken",value:function(){if(void 0===this.token||null===this.token)throw new Error("Where's the key?")}},{key:"ping",value:(h=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("".concat(this.url,"/ping"),Object.assign(this.options,{method:"GET"}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"get",value:(l=r(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.buildUrl("".concat(this.url).concat(e),r),t.next=3,this.request(n,Object.assign({},this.options,{method:"GET",body:void 0}));case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"post",value:(f=r(regeneratorRuntime.mark((function t(e,r,n,o){var i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.buildUrl("".concat(this.url).concat(e),r),t.next=3,this.request(i,Object.assign({},this.options,{method:"POST",body:n?JSON.stringify(n):null},o));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n){return f.apply(this,arguments)})},{key:"put",value:(s=r(regeneratorRuntime.mark((function t(e,r,n){var o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.requiresToken(),o=this.buildUrl("".concat(this.url).concat(e),r),t.next=4,this.request(o,Object.assign({},this.options,{method:"PUT",body:n?JSON.stringify(n):null}));case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return s.apply(this,arguments)})},{key:"delete",value:(c=r(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.requiresToken(),n=this.buildUrl("".concat(this.url).concat(e),r),t.next=4,this.request(n,Object.assign({},this.options,{method:"DELETE"}));case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"blockInsert",value:(u=r(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.query("mutation blockInsert($repository: String!, $data: JSON!, $status: String) { \n            blockInsert(repository: $repository, data: $data, status: $status) {\n                id\n                data\n                status\n            }\n        }",{repository:e,data:r,status:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return u.apply(this,arguments)})},{key:"query",value:(a=r(regeneratorRuntime.mark((function t(e,r){var n,o,i,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:"/query",o=this.buildUrl("".concat(this.url).concat(n)),t.next=4,this.request(o,Object.assign({},this.options,{method:"POST",body:JSON.stringify({query:e,variables:r})}));case 4:if(!((i=t.sent)&&i.data.errors&&i.data.errors.length>0)){t.next=7;break}throw new b(i);case 7:return i.data=i.data.data,t.abrupt("return",i);case 9:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})},{key:"request",value:(o=r(regeneratorRuntime.mark((function e(n,o){var i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=r(regeneratorRuntime.mark((function e(r,a){var u,c,s,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=setTimeout((function(){a(new Error("Request timed out"))}),o.timeout),e.prev=1,i.interceptors.request.forEach(o),e.next=5,t(n,o);case 5:return c=e.sent,e.next=8,c.json();case 8:if(s=e.sent,clearTimeout(u),f={},d(c.headers.entries()).forEach((function(t){var e=y(t,2),r=e[0],n=e[1];f[r]=n})),!((l={headers:f,status:c.status,data:s}).status>=400)){e.next=18;break}throw new g(l);case 18:i.interceptors.fulfilled.forEach(l);case 19:r(l),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),i.interceptors.rejected.forEach(e.t0),a(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(t,e){return o.apply(this,arguments)})}]),e}();export default x;
