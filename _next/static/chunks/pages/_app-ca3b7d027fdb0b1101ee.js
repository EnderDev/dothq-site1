(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9328:function(t,e,r){"use strict";r.d(e,{UF:function(){return lt},AK:function(){return dt},eh:function(){return tt},xf:function(){return ut}});var n=r(4184),o=r.n(n),i=r(7294),a=r.t(i,2),u=r(3935);const f={prefix:Math.round(1e10*Math.random()),current:0},s=i.createContext(f);function c(t){let e=(0,i.useContext)(s),r=(0,i.useMemo)((()=>({prefix:e===f?0:++e.prefix,current:0})),[e]);return i.createElement(s.Provider,{value:r},t.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let h=new Map,p=new Set;function l(){if("undefined"===typeof window)return;let t=e=>{let r=h.get(e.target);if(r&&(r.delete(e.propertyName),0===r.size&&(e.target.removeEventListener("transitioncancel",t),h.delete(e.target)),0===h.size)){for(let t of p)t();p.clear()}};document.body.addEventListener("transitionrun",(e=>{let r=h.get(e.target);r||(r=new Set,h.set(e.target,r),e.target.addEventListener("transitioncancel",t)),r.add(e.propertyName)})),document.body.addEventListener("transitionend",t)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function d(t){return"undefined"!==typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function y(){return d(/^Mac/)}function g(t){return!(0!==t.mozInputSource||!t.isTrusted)||0===t.detail&&!t.pointerType}const v=i.createContext(null);v.displayName="PressResponderContext";let w=null,m=new Set,b=!1,E=!1,A=!1;function O(t,e){for(let r of m)r(t,e)}function B(t){E=!0,function(t){return!(t.metaKey||!y()&&t.altKey||t.ctrlKey||"keyup"===t.type&&("Control"===t.key||"Shift"===t.key))}(t)&&(w="keyboard",O("keyboard",t))}function S(t){w="pointer","mousedown"!==t.type&&"pointerdown"!==t.type||(E=!0,O("pointer",t))}function j(t){g(t)&&(E=!0,w="virtual")}function L(t){t.target!==window&&t.target!==document&&(E||A||(w="virtual",O("virtual",t)),E=!1,A=!1)}function C(){E=!1,A=!0}function U(){if("undefined"===typeof window||b)return;let t=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){E=!0,t.apply(this,arguments)},document.addEventListener("keydown",B,!0),document.addEventListener("keyup",B,!0),document.addEventListener("click",j,!0),window.addEventListener("focus",L,!0),window.addEventListener("blur",C,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),b=!0}"undefined"!==typeof document&&("loading"!==document.readyState?U():document.addEventListener("DOMContentLoaded",U));new Set;const T=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];T.join(":not([hidden]),");T.push('[tabindex]:not([tabindex="-1"]):not([disabled])');T.join(':not([hidden]):not([tabindex="-1"]),');r(8764).Buffer;function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function I(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function M(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"===typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function P(t){return null!=t}function R(t){if(0===Object.keys(t).length)return t;for(var e={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++){var u=a[i];u in t&&(e[u]=t[u])}return e}function _(t){if(0===Object.keys(t).length)return t;for(var e={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=Object.keys(t);i<a.length;i++){var u=a[i];n.includes(u)||(e[u]=t[u])}return e}function N(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(0!==e.length)return function(t){for(var r,n=t,o=M(e);!(r=o()).done;){n=(0,r.value)(n)}return n}}var z="undefined"!==typeof window,D=Symbol("NONE");z?i.useLayoutEffect:i.useEffect;function F(t,e,r){return Array.isArray(r)?i.createElement.apply(i,[t,e].concat(r)):r||"children"in e?i.createElement(t,e,r):i.createElement(t,e)}function Y(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(r.every((function(t){return 0===Object.keys(t).length})))return t;for(var o=x({},t),i=0,a=r;i<a.length;i++)for(var u=a[i],f=0,s=Object.keys(u);f<s.length;f++){var c=s[f];o[c]=K(c,o[c],u[c])}return o}function V(t,e){t&&("function"===typeof t?t(e):Object.isFrozen(t)||(t.current=e))}function G(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){for(var r,n=M(e);!(r=n()).done;){V(r.value,t)}}}function K(t,e,r){return e===D||r===D?null:null==e?r:null==r?e:"className"===t?o()(e,r):"style"===t?x({},e,r):"ref"===t?G(e,r):typeof e!==typeof r?r:t.startsWith("on")&&"function"===typeof e?function(){var t;return"function"===typeof e&&(t=e.apply(void 0,arguments)),"function"===typeof r&&(t=r.apply(void 0,arguments)),t}:r}function W(t,e,r,n){var o=e.children,i=I(e,["children"]),a=Z(o,null!=r&&r);return F(t,x({ref:n},i),a)}function X(t,e){var r=t.as,n=t.hasGap;return W(null!=r?r:"div",I(t,["as","hasGap"]),n,e)}var q=(0,i.forwardRef)(X),H=function(t){return(0,i.forwardRef)((function(e,r){var n=e.hasGap,o=I(e,["hasGap"]);return W(t,o,n,r)}))},J=Object.assign(q,{div:H("div"),a:H("a"),button:H("button"),h1:H("h1"),h2:H("h2"),h3:H("h3"),h4:H("h4"),h5:H("h5"),h6:H("h6"),label:H("label"),form:H("form"),section:H("section"),head:H("head"),main:H("main"),nav:H("nav")});function Z(t,e){var r=e?"__wab_flex-container":"__wab_passthrough";return t?Array.isArray(t)?i.createElement.apply(a,["div",{className:r}].concat(t)):(0,i.createElement)("div",{className:r},t):null}function $(t,e,r,n){if(!t||0===Object.keys(t).length)return F(e,r,r.children);var o=ot(t),a=nt(r,o.props);if("render"===o.type)return o.render(a,e);var u=e;"as"===o.type&&o.as&&(e===J?a.as=o.as:u=o.as);var f=a.children;o.wrapChildren&&(f=o.wrapChildren(function(t){return Array.isArray(t)?1===t.length?t[0]:i.createElement.apply(i,[i.Fragment,{}].concat(t)):t}(f))),n&&(f=Z(f,!0));var s=F(u,a,f);return o.wrap&&(s=o.wrap(s)),s}var Q=new Map;function tt(t,e){null==e&&(e={});var r=e["data-plasmic-name"],n=e["data-plasmic-root"],o=e["data-plasmic-for-node"];delete e["data-plasmic-name"],delete e["data-plasmic-root"],delete e["data-plasmic-for-node"];for(var i=arguments.length,a=new Array(i>2?i-2:0),u=2;u<i;u++)a[u-2]=arguments[u];var f=et.apply(void 0,[t,e].concat(a));if(r&&Q.set(r,f),n){var s,c=o?null!=(s=Q.get(o))?s:null:f;return Q.clear(),c}return f}function et(t,e){var r,n=e["data-plasmic-override"],o=e["data-plasmic-wrap-flex-child"],i=null!=(r=e["data-plasmic-trigger-props"])?r:[];delete e["data-plasmic-override"],delete e["data-plasmic-wrap-flex-child"],delete e["data-plasmic-trigger-props"];for(var a=arguments.length,u=new Array(a>2?a-2:0),f=2;f<a;f++)u[f-2]=arguments[f];return $(n,t,Y.apply(void 0,[e,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(i)),o)}var rt=Symbol("UNSET");function nt(t,e){if(!e)return t;for(var r=x({},t),n=0,o=Object.keys(e);n<o.length;n++){var i=o[n],a=t[i],u=e[i];u===rt?delete r[i]:(null!=u||"className"===i||"style"===i||i.startsWith("on")&&"function"===typeof a||(u=D),r[i]=K(i,a,u))}return r}function ot(t){if(!t)return{type:"default",props:{}};if(function(t){return"string"===typeof t||"number"===typeof t||i.isValidElement(t)}(t))return{type:"default",props:{children:t}};if("object"===typeof t)return"as"in t?x({},t,{props:t.props||{},type:"as"}):"render"in t?x({},t,{type:"render"}):"props"in t?x({},t,{props:t.props||{},type:"default"}):(e=Object.keys(t),r=["wrap","wrapChildren"],e.every((function(t){return r.includes(t)}))?x({},t,{props:{},type:"default"}):{type:"default",props:t});if("function"===typeof t)return{type:"render",render:t};var e,r;throw new Error("Unexpected override: "+t)}function it(t,e){if(!e)return t;for(var r={},n=0,o=Array.from(new Set([].concat(Object.keys(t),Object.keys(e))));n<o.length;n++){var i=o[n];r[i]=at(t[i],e[i])}return r}function at(t,e){var r,n;if(!t)return e;if(!e)return t;var o=ot(t),i=ot(e),a=N.apply(void 0,[o.wrap,i.wrap].filter(P)),u=N.apply(void 0,[o.wrapChildren,i.wrapChildren].filter(P)),f=nt(null!=(r=o.props)?r:{},i.props);if("render"===i.type)return{render:i.render,props:f,wrap:a,wrapChildren:u};if("render"===o.type)return{render:o.render,props:f,wrap:a,wrapChildren:u};var s=null!=(n="as"===i.type?i.as:void 0)?n:"as"===o.type?o.as:void 0;return x({props:f,wrap:a,wrapChildren:u},s?{as:s}:{})}function ut(t,e){var r,n,o,i,a,u=e.name,f=e.descendantNames,s=e.internalVariantPropNames,c=e.internalArgPropNames,h=["variants","args","overrides"],p=(r=_.apply(void 0,[R.apply(void 0,[t].concat(s))].concat(h)),n=t.variants,r&&n?x({},r,n):r||n||{}),l=(o=_.apply(void 0,[R.apply(void 0,[t].concat(c))].concat(h)),i=t.args,o&&i?x({},o,i):o||i||{}),d=it(_.apply(void 0,[R.apply(void 0,[t].concat(f))].concat(c,s,h)),t.overrides),y=_.apply(void 0,[t,"variants","args","overrides"].concat(f,s,c));Object.keys(y).length>0&&(d=it(d,((a={})[u]={props:y},a)));return{variants:p,args:l,overrides:d}}var ft=[],st={};function ct(){return z?Object.entries(st).filter((function(t){var e=t[1];return window.matchMedia(e).matches})).map((function(t){return t[0]})):[]}var ht=void 0;z&&window.addEventListener("resize",(function(){var t=ct();ht&&t.join("")===ht.join("")||(ht=t,u.unstable_batchedUpdates((function(){return ft.forEach((function(t){return t()}))})))}));var pt=(0,i.createContext)(void 0);function lt(t){var e=t.platform,r=t.children,n=(0,i.useMemo)((function(){return{platform:e}}),[e]);return(0,i.createElement)(pt.Provider,{value:n},(0,i.createElement)(c,null,r))}var dt=o()},9742:function(t,e){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=f(t),a=i[0],u=i[1],s=new o(function(t,e,r){return 3*(e+r)/4-r}(0,a,u)),c=0,h=u>0?a-4:a;for(r=0;r<h;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],s[c++]=e>>16&255,s[c++]=e>>8&255,s[c++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,s[c++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,s[c++]=e>>8&255,s[c++]=255&e);return s},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],a=16383,u=0,f=n-o;u<f;u+=a)i.push(s(t,u,u+a>f?f:u+a));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=i.length;a<u;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function s(t,e,n){for(var o,i,a=[],u=e;u<n;u+=3)o=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:function(t,e,r){"use strict";var n=r(9742),o=r(645),i="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50;var a=2147483647;function u(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return s(t,e,r)}function s(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|y(t,e),n=u(r),o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return p(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Y(t,ArrayBuffer)||t&&Y(t.buffer,ArrayBuffer))return l(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(Y(t,SharedArrayBuffer)||t&&Y(t.buffer,SharedArrayBuffer)))return l(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);var o=function(t){if(f.isBuffer(t)){var e=0|d(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||V(t.length)?u(0):p(t);if("Buffer"===t.type&&Array.isArray(t.data))return p(t.data)}(t);if(o)return o;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return c(t),u(t<0?0:0|d(t))}function p(t){for(var e=t.length<0?0:0|d(t.length),r=u(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function l(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function d(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function y(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Y(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return D(t).length;default:if(o)return n?-1:z(t).length;e=(""+e).toLowerCase(),o=!0}}function g(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,e,r);case"utf8":case"utf-8":return L(this,e,r);case"ascii":return U(this,e,r);case"latin1":case"binary":return T(this,e,r);case"base64":return j(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,o){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),V(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){var i,a=1,u=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;a=2,u/=2,f/=2,r/=2}function s(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var c=-1;for(i=r;i<u;i++)if(s(t,i)===s(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===f)return c*a}else-1!==c&&(i-=i-c),c=-1}else for(r+f>u&&(r=u-f),i=r;i>=0;i--){for(var h=!0,p=0;p<f;p++)if(s(t,i+p)!==s(e,p)){h=!1;break}if(h)return i}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var u=parseInt(e.substr(2*a,2),16);if(V(u))return a;t[r+a]=u}return a}function E(t,e,r,n){return F(z(e,t.length-r),t,r,n)}function A(t,e,r,n){return F(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function O(t,e,r,n){return A(t,e,r,n)}function B(t,e,r,n){return F(D(e),t,r,n)}function S(t,e,r,n){return F(function(t,e){for(var r,n,o,i=[],a=0;a<t.length&&!((e-=2)<0);++a)n=(r=t.charCodeAt(a))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function j(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function L(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,a,u,f,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=r)switch(h){case 1:s<128&&(c=s);break;case 2:128===(192&(i=t[o+1]))&&(f=(31&s)<<6|63&i)>127&&(c=f);break;case 3:i=t[o+1],a=t[o+2],128===(192&i)&&128===(192&a)&&(f=(15&s)<<12|(63&i)<<6|63&a)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:i=t[o+1],a=t[o+2],u=t[o+3],128===(192&i)&&128===(192&a)&&128===(192&u)&&(f=(15&s)<<18|(63&i)<<12|(63&a)<<6|63&u)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var e=t.length;if(e<=C)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=C));return r}(n)}e.kMaxLength=a,f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(r){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return s(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?u(t):void 0!==e?"string"===typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},f.allocUnsafe=function(t){return h(t)},f.allocUnsafeSlow=function(t){return h(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(Y(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),Y(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(Y(i,Uint8Array)&&(i=f.from(i)),!f.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},f.byteLength=y,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},f.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?L(this,0,t):g.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(f.prototype[i]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,o){if(Y(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0),u=Math.min(i,a),s=this.slice(n,o),c=t.slice(e,r),h=0;h<u;++h)if(s[h]!==c[h]){i=s[h],a=c[h];break}return i<a?-1:a<i?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return A(this,t,e,r);case"latin1":case"binary":return O(this,t,e,r);case"base64":return B(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function U(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function T(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function x(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=G[t[i]];return o}function I(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function k(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function M(t,e,r,n,o,i){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function P(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function R(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function _(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,8),o.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||k(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||k(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},f.prototype.readUInt8=function(t,e){return t>>>=0,e||k(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||k(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||k(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||k(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||k(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},f.prototype.readInt8=function(t,e){return t>>>=0,e||k(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||k(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||k(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return t>>>=0,e||k(t,4,this.length),o.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||k(t,4,this.length),o.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||k(t,8,this.length),o.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||k(t,8,this.length),o.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);M(this,t,e,r,o-1,-o)}var i=0,a=1,u=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);M(this,t,e,r,o-1,-o)}var i=r-1,a=1,u=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||M(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeFloatLE=function(t,e,r){return R(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return R(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return _(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return _(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var i=o-1;i>=0;--i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},f.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{var a=f.isBuffer(t)?t:f.from(t,n),u=a.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=a[i%u]}return this};var N=/[^+/0-9A-Za-z-_]/g;function z(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function D(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(N,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function F(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function Y(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function V(t){return t!==t}var G=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()},4184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},645:function(t,e){e.read=function(t,e,r,n,o){var i,a,u=8*o-n-1,f=(1<<u)-1,s=f>>1,c=-7,h=r?o-1:0,p=r?-1:1,l=t[e+h];for(h+=p,i=l&(1<<-c)-1,l>>=-c,c+=u;c>0;i=256*i+t[e+h],h+=p,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=n;c>0;a=256*a+t[e+h],h+=p,c-=8);if(0===i)i=1-s;else{if(i===f)return a?NaN:1/0*(l?-1:1);a+=Math.pow(2,n),i-=s}return(l?-1:1)*a*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var a,u,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-a))<1&&(a--,f*=2),(e+=a+h>=1?p/f:p*Math.pow(2,1-h))*f>=2&&(a++,f/=2),a+h>=c?(u=0,a=c):a+h>=1?(u=(e*f-1)*Math.pow(2,o),a+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),a=0));o>=8;t[r+l]=255&u,l+=d,u/=256,o-=8);for(a=a<<o|u,s+=o;s>0;t[r+l]=255&a,l+=d,a/=256,s-=8);t[r+l-d]|=128*y}},2620:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,{default:function(){return f}});var o=r(5893),i=(r(3146),r(9328));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){var e=t.Component,r=t.pageProps;return(0,o.jsx)(i.UF,{children:(0,o.jsx)(e,u({},r))})}},1780:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2620)}])},3146:function(){}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1780),e(4651)}));var r=t.O();_N_E=r}]);