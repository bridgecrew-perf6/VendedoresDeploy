(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[171],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return r},LL:function(){return g},ZR:function(){return p},vZ:function(){return v},m9:function(){return E},ru:function(){return c},d:function(){return u},w1:function(){return l},uI:function(){return a},b$:function(){return h},Mn:function(){return d}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function a(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function c(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function u(){return o().indexOf("Electron/")>=0}function l(){const t=o();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d(){return o().indexOf("MSAppHost/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const f="FirebaseError";class p extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=f,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,g.prototype.create)}}class g{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?m(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new p(i,o,n);return a}}function m(t,e){return t.replace(y,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(w(n)&&w(r)){if(!v(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function w(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(t){return t&&t._delegate?t._delegate:t}},5321:function(t,e,n){"use strict";n.d(e,{hJ:function(){return Lu},JU:function(){return Ru},QT:function(){return bl},ad:function(){return Vu},cf:function(){return Cl},pl:function(){return Il},r7:function(){return Sl}});var i,s=n(2238),r=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},h={},u=u||{},l=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function I(){this.s=this.s,this.o=this.o}var S=0,C={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=g(this);delete C[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},A=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function k(t){t:{var e=Gn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function N(t){return Array.prototype.concat.apply([],arguments)}function D(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var L,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=l.navigator;if(M){var V=M.userAgent;if(V){L=V;break t}}L=""}function F(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function j(t){return j[" "](t),t}function $(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=d;var K,z=O(L,"Opera"),G=O(L,"Trident")||O(L,"MSIE"),H=O(L,"Edge"),W=H||G,Q=O(L,"Gecko")&&!(O(L.toLowerCase(),"webkit")&&!O(L,"Edge"))&&!(O(L,"Trident")||O(L,"MSIE"))&&!O(L,"Edge"),X=O(L.toLowerCase(),"webkit")&&!O(L,"Edge");function Y(){var t=l.document;return t?t.documentMode:void 0}t:{var Z="",J=function(){var t=L;return Q?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(Z=J?J[1]:""),G){var tt=Y();if(null!=tt&&tt>parseFloat(Z)){K=String(tt);break t}}K=Z}var et,nt={};function it(){return $((function(){let t=0;const e=R(String(K)).split("."),n=R("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=P(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||P(0==s[2].length,0==r[2].length)||P(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(l.document&&G){var st=Y();et=st||(parseInt(K,10)||void 0)}else et=void 0;var rt=et,ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Q){t:{try{j(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ht[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},T(ct,at);var ht={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),lt=0;function dt(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++lt,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=_(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}pt.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=mt(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,i,s){if(i&&i.once)return Tt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)wt(t,e[r],n,i,s);return null}return n=Nt(n),t&&t[ut]?t.N(e,n,p(i)?!!i.capture:!!i,s):Et(t,e,n,!1,i,s)}function Et(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=At(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=bt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ot||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=_t;return t}function Tt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Tt(t,e[r],n,i,s);return null}return n=Nt(n),t&&t[ut]?t.O(e,n,p(i)?!!i.capture:!!i,s):Et(t,e,n,!0,i,s)}function It(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)It(t,e[r],n,i,s);else i=p(i)?!!i.capture:!!i,n=Nt(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=mt(r,n,i,s),-1<n&&(ft(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=At(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,i,s)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])gt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ct(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=At(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):ft(t)}}}function Ct(t){return t in vt?vt[t]:vt[t]="on"+t}function _t(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&St(t),t=n.call(i,e)}return t}function At(t){return t=t[yt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Dt(){I.call(this),this.i=new pt(this),this.P=this,this.I=null}function xt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(i,t),q(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Lt(o,i,!0,e)&&s}if(o=e.g=t,s=Lt(o,i,!0,e)&&s,s=Lt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Lt(o,i,!1,e)&&s}function Lt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}T(Dt,I),Dt.prototype[ut]=!0,Dt.prototype.removeEventListener=function(t,e,n,i){It(this,t,e,n,i)},Dt.prototype.M=function(){if(Dt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ft(n[i]);delete e.g[t],e.h--}}this.I=null},Dt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Dt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Rt=l.JSON.stringify;function Ot(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){l.setTimeout((()=>{throw t}),0)}function Bt(t,e){Mt||qt(),jt||(Mt(),jt=!0),$t.add(t,e)}function qt(){var t=l.Promise.resolve(void 0);Mt=function(){t.then(Kt)}}var jt=!1,$t=new Pt;function Kt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function zt(t,e){Dt.call(this),this.h=t||1,this.g=e||l,this.j=E(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Wt(t){t.g=Ht((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(zt,Dt),i=zt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Gt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){zt.Z.M.call(this),Gt(this),delete this.g};class Qt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){I.call(this),this.h=t,this.g={}}T(Xt,I);var Yt=[];function Zt(t,e,n,i){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var s=0;s<n.length;s++){var r=wt(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Jt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ie(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(i?" "+i:"")}))}function se(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Rt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Jt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Dt}function he(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();xt(e,new he(e,t))}function le(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();xt(e,new le(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",T(he,at),oe.STAT_EVENT="statevent",T(le,at),oe.Na="timingevent",T(fe,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var Ee,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Te(){at.call(this,"d")}function Ie(){at.call(this,"c")}function Se(){}function Ce(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Xt(this),this.P=Ae,t=W?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}T(Te,at),T(Ie,at),T(Se,ye),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},Ee=new Se;var Ae=45e3,ke={},Ne={};function De(t,e,n){t.K=1,t.v=en(Qe(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Pe(t),t.A=Qe(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),yn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new _e,t.g=Ii(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Qt(E(t.Ia,t,t.g),t.O)),Zt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Re(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Oe(t,n),i==Ne){4==e&&(t.o=4,de(14),s=!1),ie(t.j,t.m,null,"[Incomplete Response]");break}if(i==ke){t.o=4,de(15),ie(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}ie(t.j,t.m,i,null),Be(t,i)}Le(t)&&i!=Ne&&i!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gi(e),e.L=!0,de(11))):(ie(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Fe(t))}function Oe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ne:(n=Number(e.substring(n,i)),isNaN(n)?ke:(i+=1,i+n>e.length?Ne:(e=e.substr(i,n),t.C=i+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(E(t.eb,t),e)}function Ve(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||vi(t.l,t)}function Ue(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(h){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yi(n),ri(n)}pi(n),de(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(E(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Ei(n,11)}else if((t.J||n.g==t)&&yi(n),!x(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(O(t,"spdy")||O(t,"quic")||O(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(_n(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,tn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Ti(i,i.H?i.la:null,i.W),o.J){An(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ve(a),Pe(a)),i.g=o}else fi(i);0<n.l.length&&ci(n)}else"stop"!=h[0]&&"close"!=h[0]||Ei(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Ei(n,7):si(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}ue(4)}catch(h){}}function qe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)A(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=qe(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function $e(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof $e)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ze(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],ze(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Ce.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Zn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const u=Zn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||W||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Ve(this);var n=this.g.ba();this.N=n;e:if(Le(this)){var i=Jn(this.g);t="";var s=i.length,r=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Fe(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,de(12),Ue(this),Fe(this);break t}ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.U?(Re(this,u,o),W&&this.i&&3==u&&(Zt(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,o,null),Be(this,o)),4==u&&Ue(this),this.i&&!this.I&&(4==u?vi(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Ue(this),Fe(this)}}}catch(u){}},i.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),Re(this,t,e),this.i&&4!=t&&Pe(this))}},i.cancel=function(){this.I=!0,Ue(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(se(this.j,this.A),2!=this.K&&(ue(3),de(17)),Ue(this),this.o=2,Fe(this)):Me(this,this.Y-t)},i=$e.prototype,i.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ke(this),this.g.concat()},i.get=function(t,e){return ze(this.h,t)?this.h[t]:e},i.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Ye(this,t.i),Ze(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new $e(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=rn(n[2]||""),Ye(this,n[3]||"",!0),Ze(this,n[4]),this.l=rn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Qe(t){return new We(t)}function Xe(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?rn(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof fn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,ln)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Qe(t):new We(t,void 0)}function sn(t,e,n,i){var s=new We(null,void 0);return t&&Xe(s,t),e&&Ye(s,e),n&&Ze(s,n),i&&(s.l=i),s}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:hn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,hn=/[#\?:]/g,un=/[#\?]/g,ln=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new $e,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function mn(t,e){return pn(t),e=vn(t,e),ze(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),D(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}i=fn.prototype,i.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){pn(this),this.g.forEach((function(n,i){A(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},i.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=N(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=N(e,t[n])}return e},i.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};var En=class{constructor(t,e){this.h=t,this.g=e}};function bn(t){this.l=t||Tn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function In(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _n(t,e){t.g?t.g.add(e):t.h=e}function An(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return D(t.i)}function Nn(){}function Dn(){this.g=new Nn}function xn(t,e,n){const i=n||"";try{je(t,(function(t,n){let s=t;p(t)&&(s=Rt(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ln(t,e){const n=new te;if(l.Image){const i=new Image;i.onload=b(Rn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=b(Rn,n,i,"TestLoadImage: error",!1,e),i.onabort=b(Rn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=b(Rn,n,i,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Rn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(r){}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Dt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Nn.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},Nn.prototype.parse=function(t){return l.JSON.parse(t,void 0)},T(On,ye),On.prototype.g=function(){return new Pn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),T(Pn,Dt);var Mn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Pn.prototype,i.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Un(this),3==this.readyState&&Vn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},i.Ta=function(t){this.g&&(this.response=t,Fn(this))},i.ha=function(){this.g&&Fn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=l.JSON.parse;function qn(t){Dt.call(this),this.headers=new $e,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}T(qn,Dt);var jn="",$n=/^https?$/i,Kn=["POST","PUT"];function zn(t){return G&&it()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Xn(t)}function Wn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Qn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Zn(t)||2!=t.ba()))if(t.v&&4==Zn(t))Ht(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Zn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var s=String(t.H).match(Ge)[1]||null;if(!s&&l.self&&l.self.location){var r=l.self.location.protocol;s=r.substr(0,r.length-1)}i=!$n.test(s?s.toLowerCase():"")}n=i}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Yn(t);const i=t.g,s=t.C[0]?d:null;t.g=null,t.C=null,e||xt(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ti(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ii(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new Dn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function si(t){if(oi(t),3==t.G){var e=t.V++,n=Qe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),li(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=en(Qe(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ii(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}bi(t)}function ri(t){t.g&&(gi(t),t.g.cancel(),t.g=null)}function oi(t){ri(t),t.u&&(l.clearTimeout(t.u),t.u=null),yi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function ai(t,e){t.l.push(new En(t.Za++,e)),3==t.G&&ci(t)}function ci(t){In(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function hi(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(E(t.Ha,t,e),wi(t,t.C)),t.C++,!0))}function ui(t,e){var n;n=e?e.m:t.V++;const i=Qe(t.F);tn(i,"SID",t.J),tn(i,"RID",n),tn(i,"AID",t.U),li(t,i),t.o&&t.s&&ei(i,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=di(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_n(t.i,n),De(n,i,e)}function li(t,e){t.j&&je({},(function(t,n){tn(e,n,t)}))}function di(t,e,n){n=Math.min(t.l.length,n);var i=t.j?E(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{xn(a,t,"req"+n+"_")}catch(Yi){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function fi(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function pi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(E(t.Ga,t),wi(t,t.A)),t.A++,!0)}function gi(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function mi(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Qe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),li(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Qe(e)),n.s=null,n.U=!0,xe(n,t)}function yi(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function vi(t,e){var n=null;if(t.g==e){yi(t),gi(t),t.g=null;var i=2}else{if(!Cn(t.i,e))return;n=e.D,An(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=ce(),xt(i,new fe(i,n,e,s)),ci(t)}else fi(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==i&&hi(t,e)||2==i&&pi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ei(t,5);break;case 4:Ei(t,10);break;case 3:Ei(t,6);break;default:Ei(t,2)}}function wi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ei(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=E(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Xe(n,"https"),en(n)),Ln(n.toString(),i)}else de(2);t.G=0,t.j&&t.j.va(e),bi(t),oi(t)}function bi(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,D(t.l),t.l.length=0),t.j.ua())}function Ti(t,e,n){let i=nn(n);if(""!=i.i)e&&Ye(i,e+"."+i.i),Ze(i,i.m);else{const t=l.location;i=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(i,e,t)})),e=t.D,n=t.sa,e&&n&&tn(i,e,n),tn(i,"VER",t.ma),li(t,i),i}function Ii(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qn(new On({ib:!0})):new qn(t.qa),e.L=t.H,e}function Si(){}function Ci(){if(G&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function _i(t,e){Dt.call(this),this.g=new ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ni(this)}function Ai(t){Te.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ki(){Ie.call(this),this.status=1}function Ni(t){this.g=t}i=qn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ee.g(),this.C=this.u?ve(this.u):ve(Ee),this.g.onreadystatechange=E(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Hn(this,r)}t=n||"";const s=new $e(this.headers);i&&je(i,(function(t,e){s.set(e,t)})),i=k(s.T()),n=l.FormData&&t instanceof l.FormData,!(0<=_(Kn,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Hn(this,r)}},i.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Xn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),qn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},i.cb=function(){Qn(this)},i.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ce(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=U(r),q(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=di(this,s,e),n=Qe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),li(this,n),this.o&&r&&ei(n,this.o,r),_n(this.i,s),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),s.$=!0,De(s,n,null)):De(s,n,e),this.G=2}}else 3==this.G&&(t?ui(this,t):0==this.l.length||In(this.i)||ui(this))},i.Ga=function(){if(this.u=null,mi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(E(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),ri(this),mi(this))},i.ab=function(){null!=this.v&&(this.v=null,ri(this),pi(this),de(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},i=Si.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ci.prototype.g=function(t,e){return new _i(t,e)},T(_i,Dt),_i.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(E(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ti(t,null,t.W),ci(t)},_i.prototype.close=function(){si(this.g)},_i.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ai(this.g,e)}else this.v?(e={},e.__data__=Rt(t),ai(this.g,e)):ai(this.g,t)},_i.prototype.M=function(){this.g.j=null,delete this.j,si(this.g),delete this.g,_i.Z.M.call(this)},T(Ai,Te),T(ki,Ie),T(Ni,Si),Ni.prototype.xa=function(){xt(this.g,"a")},Ni.prototype.wa=function(t){xt(this.g,new Ai(t))},Ni.prototype.va=function(t){xt(this.g,new ki(t))},Ni.prototype.ua=function(){xt(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,_i.prototype.send=_i.prototype.u,_i.prototype.open=_i.prototype.m,_i.prototype.close=_i.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",Dt.prototype.listen=Dt.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Di=h.createWebChannelTransport=function(){return new Ci},xi=h.getStatEventTarget=function(){return ce()},Li=h.ErrorCode=ge,Ri=h.EventType=me,Oi=h.Event=oe,Pi=h.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=h.FetchXmlHttpFactory=On,Vi=h.WebChannel=we,Fi=h.XhrIo=qn;const Ui="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bi.UNAUTHENTICATED=new Bi(null),Bi.GOOGLE_CREDENTIALS=new Bi("google-credentials-uid"),Bi.FIRST_PARTY=new Bi("first-party-uid"),Bi.MOCK_USER=new Bi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qi="9.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new o.Yd("@firebase/firestore");function $i(){return ji.logLevel}function Ki(t,...e){if(ji.logLevel<=o["in"].DEBUG){const n=e.map(Hi);ji.debug(`Firestore (${qi}): ${t}`,...n)}}function zi(t,...e){if(ji.logLevel<=o["in"].ERROR){const n=e.map(Hi);ji.error(`Firestore (${qi}): ${t}`,...n)}}function Gi(t,...e){if(ji.logLevel<=o["in"].WARN){const n=e.map(Hi);ji.warn(`Firestore (${qi}): ${t}`,...n)}}function Hi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw zi(e),new Error(e)}function Qi(t,e){t||Wi()}function Xi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class es{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Bi.UNAUTHENTICATED)))}shutdown(){}}class ns{constructor(t){this.t=t,this.currentUser=Bi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ji,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ki("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ki("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ji)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ki("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Qi("string"==typeof e.accessToken),new ts(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Qi(null===t||"string"==typeof t),new Bi(t)}}class is{constructor(t,e,n){this.type="FirstParty",this.user=Bi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ss{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new is(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Bi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class os{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ki("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ki("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ki("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Ki("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Qi("string"==typeof t.token),this.p=t.token,new rs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.A=-1;class hs{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=cs(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function us(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Zi(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Zi(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Zi(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Zi(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ds.fromMillis(Date.now())}static fromDate(t){return ds.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ds(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?us(this.nanoseconds,t.nanoseconds):us(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fs(t)}static min(){return new fs(new ds(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ms(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wi(),void 0===n?n=t.length-e:n>t.length-e&&Wi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ys.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ys?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vs extends ys{construct(t,e,n){return new vs(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Zi(Yi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vs(e)}static emptyPath(){return new vs([])}}const ws=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Es extends ys{construct(t,e,n){return new Es(t,e,n)}static isValidIdentifier(t){return ws.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Es.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Es(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Zi(Yi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Zi(Yi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Zi(Yi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Zi(Yi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Es(e)}static emptyPath(){return new Es([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.fields=t,t.sort(Es.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ls(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ts(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ts(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return us(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ts.EMPTY_BYTE_STRING=new Ts("");const Is=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(t){if(Qi(!!t),"string"==typeof t){let e=0;const n=Is.exec(t);if(Qi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Cs(t.seconds),nanos:Cs(t.nanos)}}function Cs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function _s(t){return"string"==typeof t?Ts.fromBase64String(t):Ts.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ks(t){const e=t.mapValue.fields.__previous_value__;return As(e)?ks(e):e}function Ns(t){const e=Ss(t.mapValue.fields.__local_write_time__.timestampValue);return new ds(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class xs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof xs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){return null==t}function Rs(t){return 0===t&&1/t==-1/0}function Os(t){return"number"==typeof t&&Number.isInteger(t)&&!Rs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t){this.path=t}static fromPath(t){return new Ps(vs.fromString(t))}static fromName(t){return new Ps(vs.fromString(t).popFirst(5))}static empty(){return new Ps(vs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===vs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ps(new vs(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?As(t)?4:10:Wi()}function Fs(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ss(t.timestampValue),i=Ss(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return _s(t.bytesValue).isEqual(_s(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Cs(t.geoPointValue.latitude)===Cs(e.geoPointValue.latitude)&&Cs(t.geoPointValue.longitude)===Cs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Cs(t.integerValue)===Cs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Cs(t.doubleValue),i=Cs(e.doubleValue);return n===i?Rs(n)===Rs(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],Fs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ps(n)!==ps(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Fs(n[s],i[s])))return!1;return!0}(t,e);default:return Wi()}}function Us(t,e){return void 0!==(t.values||[]).find((t=>Fs(t,e)))}function Bs(t,e){if(t===e)return 0;const n=Vs(t),i=Vs(e);if(n!==i)return us(n,i);switch(n){case 0:return 0;case 1:return us(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Cs(t.integerValue||t.doubleValue),i=Cs(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return qs(t.timestampValue,e.timestampValue);case 4:return qs(Ns(t),Ns(e));case 5:return us(t.stringValue,e.stringValue);case 6:return function(t,e){const n=_s(t),i=_s(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=us(n[s],i[s]);if(0!==t)return t}return us(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=us(Cs(t.latitude),Cs(e.latitude));return 0!==n?n:us(Cs(t.longitude),Cs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Bs(n[s],i[s]);if(t)return t}return us(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=us(i[o],r[o]);if(0!==t)return t;const e=Bs(n[i[o]],s[r[o]]);if(0!==e)return e}return us(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Wi()}}function qs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return us(t,e);const n=Ss(t),i=Ss(e),s=us(n.seconds,i.seconds);return 0!==s?s:us(n.nanos,i.nanos)}function js(t){return $s(t)}function $s(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ss(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ps.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=$s(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${$s(t.fields[s])}`;return n+"}"}(t.mapValue):Wi();var e,n}function Ks(t){return!!t&&"integerValue"in t}function zs(t){return!!t&&"arrayValue"in t}function Gs(t){return!!t&&"nullValue"in t}function Hs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ws(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Qs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.value=t}static empty(){return new Xs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ws(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qs(e)}setAll(t){let e=Es.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Qs(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Ws(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ws(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){gs(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Xs(Qs(this.value))}}function Ys(t){const e=[];return gs(t.fields,((t,n)=>{const i=new Es([t]);if(Ws(n)){const t=Ys(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new bs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zs{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new Zs(t,0,fs.min(),fs.min(),Xs.empty(),0)}static newFoundDocument(t,e,n){return new Zs(t,1,e,fs.min(),n,0)}static newNoDocument(t,e){return new Zs(t,2,e,fs.min(),Xs.empty(),0)}static newUnknownDocument(t,e){return new Zs(t,3,e,fs.min(),Xs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Js{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Js.UNKNOWN_ID=-1;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function er(t,e=null,n=[],i=[],s=null,r=null,o=null){return new tr(t,e,n,i,s,r,o)}function nr(t){const e=Xi(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+js(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>js(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>js(t))).join(",")),e.P=t}return e.P}function ir(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${js(e.value)}`;var e})).join(", ")}]`),Ls(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>js(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>js(t))).join(",")),`Target(${e})`}function sr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!yr(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Fs(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wr(t.startAt,e.startAt)&&wr(t.endAt,e.endAt)}function rr(t){return Ps.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class or extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,n):new ar(t,e,n):"array-contains"===e?new lr(t,n):"in"===e?new dr(t,n):"not-in"===e?new fr(t,n):"array-contains-any"===e?new pr(t,n):new or(t,e,n)}static v(t,e,n){return"in"===e?new cr(t,n):new hr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(Bs(e,this.value)):null!==e&&Vs(this.value)===Vs(e)&&this.V(Bs(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wi()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ar extends or{constructor(t,e,n){super(t,e,n),this.key=Ps.fromName(n.referenceValue)}matches(t){const e=Ps.comparator(t.key,this.key);return this.V(e)}}class cr extends or{constructor(t,e){super(t,"in",e),this.keys=ur("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hr extends or{constructor(t,e){super(t,"not-in",e),this.keys=ur("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ur(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ps.fromName(t.referenceValue)))}class lr extends or{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zs(e)&&Us(e.arrayValue,this.value)}}class dr extends or{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Us(this.value.arrayValue,e)}}class fr extends or{constructor(t,e){super(t,"not-in",e)}matches(t){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Us(this.value.arrayValue,e)}}class pr extends or{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Us(this.value.arrayValue,t)))}}class gr{constructor(t,e){this.position=t,this.inclusive=e}}class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function yr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vr(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Ps.comparator(Ps.fromName(o.referenceValue),n.key):Bs(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function wr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function br(t,e,n,i,s,r,o,a){return new Er(t,e,n,i,s,r,o,a)}function Tr(t){return new Er(t)}function Ir(t){return!Ls(t.limit)&&"F"===t.limitType}function Sr(t){return!Ls(t.limit)&&"L"===t.limitType}function Cr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _r(t){for(const e of t.filters)if(e.S())return e.field;return null}function Ar(t){return null!==t.collectionGroup}function kr(t){const e=Xi(t);if(null===e.D){e.D=[];const t=_r(e),n=Cr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new mr(t)),e.D.push(new mr(Es.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new mr(Es.keyField(),t))}}}return e.D}function Nr(t){const e=Xi(t);if(!e.C)if("F"===e.limitType)e.C=er(e.path,e.collectionGroup,kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of kr(e)){const e="desc"===s.dir?"asc":"desc";t.push(new mr(s.field,e))}const n=e.endAt?new gr(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new gr(e.startAt.position,!e.startAt.inclusive):null;e.C=er(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Dr(t,e,n){return new Er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xr(t,e){return sr(Nr(t),Nr(e))&&t.limitType===e.limitType}function Lr(t){return`${nr(Nr(t))}|lt:${t.limitType}`}function Rr(t){return`Query(target=${ir(Nr(t))}; limitType=${t.limitType})`}function Or(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ps.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=vr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,kr(t),e))&&!(t.endAt&&!function(t,e,n){const i=vr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,kr(t),e))}(t,e)}function Pr(t){return(e,n)=>{let i=!1;for(const s of kr(t)){const t=Mr(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Mr(t,e,n){const i=t.field.isKeyField()?Ps.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Bs(i,s):Wi()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Wi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Fr(t){return{integerValue:""+t}}function Ur(t,e){return Os(e)?Fr(e):Vr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this._=void 0}}function qr(t,e,n){return t instanceof Kr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof zr?Gr(t,e):t instanceof Hr?Wr(t,e):function(t,e){const n=$r(t,e),i=Xr(n)+Xr(t.k);return Ks(n)&&Ks(t.k)?Fr(i):Vr(t.O,i)}(t,e)}function jr(t,e,n){return t instanceof zr?Gr(t,e):t instanceof Hr?Wr(t,e):n}function $r(t,e){return t instanceof Qr?Ks(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Kr extends Br{}class zr extends Br{constructor(t){super(),this.elements=t}}function Gr(t,e){const n=Yr(e);for(const i of t.elements)n.some((t=>Fs(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Hr extends Br{constructor(t){super(),this.elements=t}}function Wr(t,e){let n=Yr(e);for(const i of t.elements)n=n.filter((t=>!Fs(t,i)));return{arrayValue:{values:n}}}class Qr extends Br{constructor(t,e){super(),this.O=t,this.k=e}}function Xr(t){return Cs(t.integerValue||t.doubleValue)}function Yr(t){return zs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof zr&&e instanceof zr||t instanceof Hr&&e instanceof Hr?ls(t.elements,e.elements,Fs):t instanceof Qr&&e instanceof Qr?Fs(t.k,e.k):t instanceof Kr&&e instanceof Kr}(t.transform,e.transform)}class Jr{constructor(t,e){this.version=t,this.transformResults=e}}class to{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new to}static exists(t){return new to(void 0,t)}static updateTime(t){return new to(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function eo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class no{}function io(t,e,n){t instanceof co?function(t,e,n){const i=t.value.clone(),s=lo(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!eo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=lo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(uo(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function so(t,e,n){t instanceof co?function(t,e,n){if(!eo(t.precondition,e))return;const i=t.value.clone(),s=fo(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(ao(e),i).setHasLocalMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!eo(t.precondition,e))return;const i=fo(t.fieldTransforms,n,e),s=e.data;s.setAll(uo(t)),s.setAll(i),e.convertToFoundDocument(ao(e),s).setHasLocalMutations()}(t,e,n):function(t,e){eo(t.precondition,e)&&e.convertToNoDocument(fs.min())}(t,e)}function ro(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=$r(i.transform,t||null);null!=s&&(null==n&&(n=Xs.empty()),n.set(i.field,s))}return n||null}function oo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ls(t,e,((t,e)=>Zr(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ao(t){return t.isFoundDocument()?t.version:fs.min()}class co extends no{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class ho extends no{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function uo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function lo(t,e,n){const i=new Map;Qi(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,jr(o,a,n[s]))}return i}function fo(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,qr(t,r,e))}return i}class po extends no{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class go extends no{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo,vo;function wo(t){switch(t){default:return Wi();case Yi.CANCELLED:case Yi.UNKNOWN:case Yi.DEADLINE_EXCEEDED:case Yi.RESOURCE_EXHAUSTED:case Yi.INTERNAL:case Yi.UNAVAILABLE:case Yi.UNAUTHENTICATED:return!1;case Yi.INVALID_ARGUMENT:case Yi.NOT_FOUND:case Yi.ALREADY_EXISTS:case Yi.PERMISSION_DENIED:case Yi.FAILED_PRECONDITION:case Yi.ABORTED:case Yi.OUT_OF_RANGE:case Yi.UNIMPLEMENTED:case Yi.DATA_LOSS:return!0}}function Eo(t){if(void 0===t)return zi("GRPC error has no .code"),Yi.UNKNOWN;switch(t){case yo.OK:return Yi.OK;case yo.CANCELLED:return Yi.CANCELLED;case yo.UNKNOWN:return Yi.UNKNOWN;case yo.DEADLINE_EXCEEDED:return Yi.DEADLINE_EXCEEDED;case yo.RESOURCE_EXHAUSTED:return Yi.RESOURCE_EXHAUSTED;case yo.INTERNAL:return Yi.INTERNAL;case yo.UNAVAILABLE:return Yi.UNAVAILABLE;case yo.UNAUTHENTICATED:return Yi.UNAUTHENTICATED;case yo.INVALID_ARGUMENT:return Yi.INVALID_ARGUMENT;case yo.NOT_FOUND:return Yi.NOT_FOUND;case yo.ALREADY_EXISTS:return Yi.ALREADY_EXISTS;case yo.PERMISSION_DENIED:return Yi.PERMISSION_DENIED;case yo.FAILED_PRECONDITION:return Yi.FAILED_PRECONDITION;case yo.ABORTED:return Yi.ABORTED;case yo.OUT_OF_RANGE:return Yi.OUT_OF_RANGE;case yo.UNIMPLEMENTED:return Yi.UNIMPLEMENTED;case yo.DATA_LOSS:return Yi.DATA_LOSS;default:return Wi()}}(vo=yo||(yo={}))[vo.OK=0]="OK",vo[vo.CANCELLED=1]="CANCELLED",vo[vo.UNKNOWN=2]="UNKNOWN",vo[vo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vo[vo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vo[vo.NOT_FOUND=5]="NOT_FOUND",vo[vo.ALREADY_EXISTS=6]="ALREADY_EXISTS",vo[vo.PERMISSION_DENIED=7]="PERMISSION_DENIED",vo[vo.UNAUTHENTICATED=16]="UNAUTHENTICATED",vo[vo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vo[vo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vo[vo.ABORTED=10]="ABORTED",vo[vo.OUT_OF_RANGE=11]="OUT_OF_RANGE",vo[vo.UNIMPLEMENTED=12]="UNIMPLEMENTED",vo[vo.INTERNAL=13]="INTERNAL",vo[vo.UNAVAILABLE=14]="UNAVAILABLE",vo[vo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(t,e){this.comparator=t,this.root=e||Io.EMPTY}insert(t,e){return new bo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Io.BLACK,null,null))}remove(t){return new bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Io.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new To(this.root,t,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new To(this.root,t,this.comparator,!0)}}class To{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Io{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Io.RED,this.left=null!=i?i:Io.EMPTY,this.right=null!=s?s:Io.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Io(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Io.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Io.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Io.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Io.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wi();if(this.right.isRed())throw Wi();const t=this.left.check();if(t!==this.right.check())throw Wi();return t+(this.isRed()?0:1)}}Io.EMPTY=null,Io.RED=!0,Io.BLACK=!1,Io.EMPTY=new class{constructor(){this.size=0}get key(){throw Wi()}get value(){throw Wi()}get color(){throw Wi()}get left(){throw Wi()}get right(){throw Wi()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Io(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t){this.comparator=t,this.data=new bo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(t){return new Co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof So))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new So(this.comparator);return e.data=t,e}}class Co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _o=new bo(Ps.comparator);function Ao(){return _o}const ko=new bo(Ps.comparator);function No(){return ko}const Do=new bo(Ps.comparator),xo=new So(Ps.comparator);function Lo(...t){let e=xo;for(const n of t)e=e.add(n);return e}const Ro=new So(us);function Oo(){return Ro}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Mo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Po(fs.min(),n,Oo(),Ao(),Lo())}}class Mo{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Mo(Ts.EMPTY_BYTE_STRING,e,Lo(),Lo(),Lo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,n,i){this.M=t,this.removedTargetIds=e,this.key=n,this.$=i}}class Fo{constructor(t,e){this.targetId=t,this.F=e}}class Uo{constructor(t,e,n=Ts.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Bo{constructor(){this.B=0,this.L=$o(),this.U=Ts.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Lo(),e=Lo(),n=Lo();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Wi()}})),new Mo(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=$o()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class qo{constructor(t){this.nt=t,this.st=new Map,this.it=Ao(),this.rt=jo(),this.ot=new So(us)}ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Wi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.F.count,i=this.wt(e);if(i){const t=i.target;if(rr(t))if(0===n){const n=new Ps(t.path);this.at(e,n,Zs.newNoDocument(n,fs.min()))}else Qi(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&rr(s.target)){const e=new Ps(s.target.path);null!==this.it.get(e)||this.It(i,e)||this.at(i,e,Zs.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}}));let n=Lo();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new Po(t,e,this.ot,this.it,n);return this.it=Ao(),this.rt=jo(),this.ot=new So(us),i}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Bo,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new So(us),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Ki("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new Bo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function jo(){return new bo(Ps.comparator)}function $o(){return new bo(Ps.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),zo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Go{constructor(t,e){this.databaseId=t,this.N=e}}function Ho(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wo(t,e){return t.N?e.toBase64():e.toUint8Array()}function Qo(t,e){return Ho(t,e.toTimestamp())}function Xo(t){return Qi(!!t),fs.fromTimestamp(function(t){const e=Ss(t);return new ds(e.seconds,e.nanos)}(t))}function Yo(t,e){return function(t){return new vs(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Zo(t){const e=vs.fromString(t);return Qi(ba(e)),e}function Jo(t,e){return Yo(t.databaseId,e.path)}function ta(t,e){const n=Zo(e);if(n.get(1)!==t.databaseId.projectId)throw new Zi(Yi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Zi(Yi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ps(sa(n))}function ea(t,e){return Yo(t.databaseId,e)}function na(t){const e=Zo(t);return 4===e.length?vs.emptyPath():sa(e)}function ia(t){return new vs(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sa(t){return Qi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ra(t,e,n){return{name:Jo(t,e),fields:n.value.mapValue.fields}}function oa(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wi()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.N?(Qi(void 0===e||"string"==typeof e),Ts.fromBase64String(e||"")):(Qi(void 0===e||e instanceof Uint8Array),Ts.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Yi.UNKNOWN:Eo(t.code);return new Zi(e,t.message||"")}(o);n=new Uo(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ta(t,i.document.name),r=Xo(i.document.updateTime),o=new Xs({mapValue:{fields:i.document.fields}}),a=Zs.newFoundDocument(s,r,o),c=i.targetIds||[],h=i.removedTargetIds||[];n=new Vo(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ta(t,i.document),r=i.readTime?Xo(i.readTime):fs.min(),o=Zs.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ta(t,i.document),r=i.removedTargetIds||[];n=new Vo([],r,s,null)}else{if(!("filter"in e))return Wi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new mo(i),r=t.targetId;n=new Fo(r,s)}}return n}function aa(t,e){let n;if(e instanceof co)n={update:ra(t,e.key,e.value)};else if(e instanceof po)n={delete:Jo(t,e.key)};else if(e instanceof ho)n={update:ra(t,e.key,e.data),updateMask:Ea(e.fieldMask)};else{if(!(e instanceof go))return Wi();n={verify:Jo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Kr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qr)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Wi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Qo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wi()}(t,e.precondition)),n}function ca(t,e){return t&&t.length>0?(Qi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Xo(t.updateTime):Xo(e);return n.isEqual(fs.min())&&(n=Xo(e)),new Jr(n,t.transformResults||[])}(t,e)))):[]}function ha(t,e){return{documents:[ea(t,e.path)]}}function ua(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ea(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ea(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Hs(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NAN"}};if(Gs(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Hs(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NAN"}};if(Gs(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ma(t.field),op:ga(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ma(t.field),direction:pa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Ls(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function la(t){let e=na(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Qi(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=fa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new mr(ya(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ls(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new gr(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new gr(n,e)}(n.endAt)),br(e,s,o,r,a,"F",c,h)}function da(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function fa(t){return t?void 0!==t.unaryFilter?[wa(t)]:void 0!==t.fieldFilter?[va(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>fa(t))).reduce(((t,e)=>t.concat(e))):Wi():[]}function pa(t){return Ko[t]}function ga(t){return zo[t]}function ma(t){return{fieldPath:t.canonicalString()}}function ya(t){return Es.fromServerFormat(t.fieldPath)}function va(t){return or.create(ya(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wi()}}(t.fieldFilter.op),t.fieldFilter.value)}function wa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ya(t.unaryFilter.field);return or.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ya(t.unaryFilter.field);return or.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ya(t.unaryFilter.field);return or.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ya(t.unaryFilter.field);return or.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Wi()}}function Ea(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ba(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sa(e)),e=Ia(t.get(n),e);return Sa(e)}function Ia(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Sa(t){return t+""}class Ca{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ca.store="owner",Ca.key="owner";class _a{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}_a.store="mutationQueues",_a.keyPath="userId";class Aa{constructor(t,e,n,i,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=s}}Aa.store="mutations",Aa.keyPath="batchId",Aa.userMutationsIndex="userMutationsIndex",Aa.userMutationsKeyPath=["userId","batchId"];class ka{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Ta(e)]}static key(t,e,n){return[t,Ta(e),n]}}ka.store="documentMutations",ka.PLACEHOLDER=new ka;class Na{constructor(t,e,n,i,s,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=r}}Na.store="remoteDocuments",Na.readTimeIndex="readTimeIndex",Na.readTimeIndexPath="readTime",Na.collectionReadTimeIndex="collectionReadTimeIndex",Na.collectionReadTimeIndexPath=["parentPath","readTime"];class Da{constructor(t){this.byteSize=t}}Da.store="remoteDocumentGlobal",Da.key="remoteDocumentGlobalKey";class xa{constructor(t,e,n,i,s,r,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=r,this.query=o}}xa.store="targets",xa.keyPath="targetId",xa.queryTargetsIndexName="queryTargetsIndex",xa.queryTargetsKeyPath=["canonicalId","targetId"];class La{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}La.store="targetDocuments",La.keyPath=["targetId","path"],La.documentTargetsIndex="documentTargetsIndex",La.documentTargetsKeyPath=["path","targetId"];class Ra{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}Ra.key="targetGlobalKey",Ra.store="targetGlobal";class Oa{constructor(t,e){this.collectionId=t,this.parent=e}}Oa.store="collectionParents",Oa.keyPath=["collectionId","parent"];class Pa{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}Pa.store="clientMetadata",Pa.keyPath="clientId";class Ma{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Ma.store="bundles",Ma.keyPath="bundleId";class Va{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Va.store="namedQueries",Va.keyPath="name";class Fa{constructor(t,e,n){this.indexId=t,this.collectionGroup=e,this.fields=n}}Fa.store="indexConfiguration",Fa.keyPath="indexId",Fa.collectionGroupIndex="collectionGroupIndex",Fa.collectionGroupIndexPath="collectionGroup";class Ua{constructor(t,e,n,i,s,r){this.indexId=t,this.uid=e,this.sequenceNumber=n,this.readTime=i,this.documentKey=s,this.largestBatchId=r}}Ua.store="indexState",Ua.keyPath=["indexId","uid"],Ua.sequenceNumberIndex="sequenceNumberIndex",Ua.sequenceNumberIndexPath=["uid","sequenceNumber"];class Ba{constructor(t,e,n,i,s){this.indexId=t,this.uid=e,this.arrayValue=n,this.directionalValue=i,this.documentKey=s}}Ba.store="indexEntries",Ba.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],Ba.documentKeyIndex="documentKeyIndex",Ba.documentKeyIndexPath=["indexId","uid","documentKey"];class qa{constructor(t,e,n,i,s,r){this.userId=t,this.collectionPath=e,this.documentId=n,this.collectionGroup=i,this.largestBatchId=s,this.overlayMutation=r}}qa.store="documentOverlays",qa.keyPath=["userId","collectionPath","documentId"],qa.collectionPathOverlayIndex="collectionPathOverlayIndex",qa.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],qa.collectionGroupOverlayIndex="collectionGroupOverlayIndex",qa.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const ja=[_a.store,Aa.store,ka.store,Na.store,xa.store,Ca.store,Ra.store,La.store,Pa.store,Da.store,Oa.store,Ma.store,Va.store],$a=[...ja,qa.store],Ka=(Fa.store,Ua.store,Ba.store,"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ga(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ga?e:Ga.resolve(e)}catch(t){return Ga.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ga.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ga.reject(e)}static resolve(t){return new Ga(((e,n)=>{e(t)}))}static reject(t){return new Ga(((e,n)=>{n(t)}))}static waitFor(t){return new Ga(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=Ga.resolve(!1);for(const n of t)e=e.next((t=>t?Ga.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&io(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&so(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&so(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(fs.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Lo())}isEqual(t){return this.batchId===t.batchId&&ls(this.mutations,t.mutations,((t,e)=>oo(t,e)))&&ls(this.baseMutations,t.baseMutations,((t,e)=>oo(t,e)))}}class Qa{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Qi(t.mutations.length===n.length);let i=Do;const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Qa(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e,n,i,s=fs.min(),r=fs.min(),o=Ts.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ya(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ya(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ya(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.Ht=t}}function Ja(t){const e=la({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Dr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(){}Xt(t,e){this.Zt(t,e),e.te()}Zt(t,e){if("nullValue"in t)this.ee(e,5);else if("booleanValue"in t)this.ee(e,10),e.ne(t.booleanValue?1:0);else if("integerValue"in t)this.ee(e,15),e.ne(Cs(t.integerValue));else if("doubleValue"in t){const n=Cs(t.doubleValue);isNaN(n)?this.ee(e,13):(this.ee(e,15),Rs(n)?e.ne(0):e.ne(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ee(e,20),"string"==typeof n?e.se(n):(e.se(`${n.seconds||""}`),e.ne(n.nanos||0))}else if("stringValue"in t)this.ie(t.stringValue,e),this.re(e);else if("bytesValue"in t)this.ee(e,30),e.oe(_s(t.bytesValue)),this.re(e);else if("referenceValue"in t)this.ce(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ee(e,45),e.ne(n.latitude||0),e.ne(n.longitude||0)}else"mapValue"in t?Fs(t,Ms)?this.ee(e,Number.MAX_SAFE_INTEGER):(this.ue(t.mapValue,e),this.re(e)):"arrayValue"in t?(this.ae(t.arrayValue,e),this.re(e)):Wi()}ie(t,e){this.ee(e,25),this.he(t,e)}he(t,e){e.se(t)}ue(t,e){const n=t.fields||{};this.ee(e,55);for(const i of Object.keys(n))this.ie(i,e),this.Zt(n[i],e)}ae(t,e){const n=t.values||[];this.ee(e,50);for(const i of n)this.Zt(i,e)}ce(t,e){this.ee(e,37),Ps.fromName(t).path.forEach((t=>{this.ee(e,60),this.he(t,e)}))}ee(t,e){t.ne(e)}re(t){t.ne(2)}}tc.le=new tc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(){this.xe=new nc}addToCollectionParentIndex(t,e){return this.xe.add(e),Ga.resolve()}getCollectionParents(t,e){return Ga.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return Ga.resolve()}deleteFieldIndex(t,e){return Ga.resolve()}getDocumentsMatchingTarget(t,e,n){return Ga.resolve(Lo())}getFieldIndex(t,e){return Ga.resolve(null)}getFieldIndexes(t,e){return Ga.resolve([])}getNextCollectionGroupToUpdate(t){return Ga.resolve(null)}updateCollectionGroup(t,e,n){return Ga.resolve()}updateIndexEntries(t,e){return Ga.resolve()}}class nc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new So(vs.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new So(vs.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ic(t,ic.DEFAULT_COLLECTION_PERCENTILE,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ic.DEFAULT_COLLECTION_PERCENTILE=10,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ic.DEFAULT=new ic(41943040,ic.DEFAULT_COLLECTION_PERCENTILE,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ic.DISABLED=new ic(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new sc(0)}static Je(){return new sc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rc(t){if(t.code!==Yi.FAILED_PRECONDITION||t.message!==Ka)throw t;Ki("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){gs(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return ms(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.changes=new oc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Zs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ga.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{constructor(t,e,n){this.qn=t,this.gs=e,this.indexManager=n}ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.ps(t,e,n)))}ps(t,e,n){return this.qn.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Is(t,e){t.forEach(((t,n)=>{for(const i of e)i.applyToLocalView(n)}))}Es(t,e){return this.qn.getEntries(t,e).next((e=>this.Ts(t,e).next((()=>e))))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Is(e,t)))}As(t,e,n){return function(t){return Ps.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Rs(t,e.path):Ar(e)?this.Ps(t,e,n):this.bs(t,e,n)}Rs(t,e){return this.ys(t,new Ps(e)).next((t=>{let e=No();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ps(t,e,n){const i=e.collectionGroup;let s=No();return this.indexManager.getCollectionParents(t,i).next((r=>Ga.forEach(r,(r=>{const o=function(t,e){return new Er(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.bs(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}bs(t,e,n){let i;return this.qn.getAll(t,e.path,n).next((n=>(i=n,this.gs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=i.get(n);null==s&&(s=Zs.newInvalidDocument(n),i=i.insert(n,s)),so(t,s,e.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((t,n)=>{Or(e,n)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.vs=n,this.Vs=i}static Ss(t,e){let n=Lo(),i=Lo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hc(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{Ds(t){this.Cs=t}As(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(fs.min())?this.Ns(t,e):this.Cs.Es(t,i).next((s=>{const r=this.xs(e,s);return(Ir(e)||Sr(e))&&this.ks(e.limitType,r,i,n)?this.Ns(t,e):($i()<=o["in"].DEBUG&&Ki("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Rr(e)),this.Cs.As(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}xs(t,e){let n=new So(Pr(t));return e.forEach(((e,i)=>{Or(t,i)&&(n=n.add(i))})),n}ks(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ns(t,e){return $i()<=o["in"].DEBUG&&Ki("QueryEngine","Using full collection scan to execute query:",Rr(e)),this.Cs.As(t,e,fs.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e,n,i){this.persistence=t,this.Os=e,this.O=i,this.Ms=new bo(us),this.$s=new oc((t=>nr(t)),sr),this.Fs=fs.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(n)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new cc(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function dc(t,e,n,i){return new lc(t,e,n,i)}async function fc(t,e){const n=Xi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.gs.getAllMutationBatches(t).next((s=>(i=s,n.Ls(e),n.gs.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Lo();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.Us.Es(t,o).next((t=>({qs:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function pc(t,e){const n=Xi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=Ga.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Qi(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.gs.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,i)))}))}function gc(t){const e=Xi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Un.getLastRemoteSnapshotVersion(t)))}function mc(t,e){const n=Xi(t),i=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Un.addMatchingKeys(t,r.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Ts.EMPTY_BYTE_STRING,fs.min()).withLastLimboFreeSnapshotVersion(fs.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,i)),s=s.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,h,r)&&o.push(n.Un.updateTargetData(t,h))}));let a=Ao();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(yc(t,r,e.documentUpdates).next((t=>{a=t}))),!i.isEqual(fs.min())){const e=n.Un.getLastRemoteSnapshotVersion(t).next((e=>n.Un.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Ga.waitFor(o).next((()=>r.apply(t))).next((()=>n.Us.Ts(t,a))).next((()=>a))})).then((t=>(n.Ms=s,t)))}function yc(t,e,n){let i=Lo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Ao();return n.forEach(((n,s)=>{const r=t.get(n);s.isNoDocument()&&s.version.isEqual(fs.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Ki("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version)})),i}))}function vc(t,e){const n=Xi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(t,e))))}function wc(t,e){const n=Xi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Un.getTargetData(t,e).next((s=>s?(i=s,Ga.resolve(i)):n.Un.allocateTargetId(t).next((s=>(i=new Ya(e,s,0,t.currentSequenceNumber),n.Un.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ms.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.$s.set(e,t.targetId)),t}))}async function Ec(t,e,n){const i=Xi(t),s=i.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Ha(t))throw t;Ki("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ms=i.Ms.remove(e),i.$s.delete(s.target)}function bc(t,e,n){const i=Xi(t);let s=fs.min(),r=Lo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Xi(t),s=i.$s.get(n);return void 0!==s?Ga.resolve(i.Ms.get(s)):i.Un.getTargetData(e,n)}(i,t,Nr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Un.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Os.As(t,e,n?s:fs.min(),n?r:Lo()))).next((t=>({documents:t,Ks:r})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,e){return Ga.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var n;return this.Ws.set(e.id,{id:(n=e).id,version:n.version,createTime:Xo(n.createTime)}),Ga.resolve()}getNamedQuery(t,e){return Ga.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,function(t){return{name:t.name,query:Ja(t.bundledQuery),readTime:Xo(t.readTime)}}(e)),Ga.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.overlays=new bo(Ps.comparator),this.Hs=new Map}getOverlay(t,e){return Ga.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n=>{this.Yt(t,e,n)})),Ga.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Hs.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Hs.delete(n)),Ga.resolve()}getOverlaysForCollection(t,e,n){const i=new Map,s=e.length+1,r=new Ps(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ga.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new bo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=new Map,s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=new Map,a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(e,t))),o.size>=i)break;return Ga.resolve(o)}Yt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);null!==i&&this.Hs.get(i.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new Xa(e,n));let s=this.Hs.get(e);void 0===s&&(s=new Set,this.Hs.set(e,s)),s.add(n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Js=new So(Cc.Ys),this.Xs=new So(Cc.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,e){const n=new Cc(t,e);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ei(new Cc(t,e))}ni(t,e){t.forEach((t=>this.removeReference(t,e)))}si(t){const e=new Ps(new vs([])),n=new Cc(e,t),i=new Cc(e,t+1),s=[];return this.Xs.forEachInRange([n,i],(t=>{this.ei(t),s.push(t.key)})),s}ii(){this.Js.forEach((t=>this.ei(t)))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new Ps(new vs([])),n=new Cc(e,t),i=new Cc(e,t+1);let s=Lo();return this.Xs.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Cc(t,0),n=this.Js.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Cc{constructor(t,e){this.key=t,this.oi=e}static Ys(t,e){return Ps.comparator(t.key,e.key)||us(t.oi,e.oi)}static Zs(t,e){return us(t.oi,e.oi)||Ps.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new So(Cc.Ys)}checkEmpty(t){return Ga.resolve(0===this.gs.length)}addMutationBatch(t,e,n,i){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const r=new Wa(s,e,n,i);this.gs.push(r);for(const o of i)this.ui=this.ui.add(new Cc(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ga.resolve(r)}lookupMutationBatch(t,e){return Ga.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.hi(n),s=i<0?0:i;return Ga.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return Ga.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return Ga.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Cc(e,0),i=new Cc(e,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([n,i],(t=>{const e=this.ai(t.oi);s.push(e)})),Ga.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new So(us);return e.forEach((t=>{const e=new Cc(t,0),i=new Cc(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,i],(t=>{n=n.add(t.oi)}))})),Ga.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Ps.isDocumentKey(s)||(s=s.child(""));const r=new Cc(new Ps(s),0);let o=new So(us);return this.ui.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.oi)),!0)}),r),Ga.resolve(this.li(o))}li(t){const e=[];return t.forEach((t=>{const n=this.ai(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Qi(0===this.fi(e.batchId,"removed")),this.gs.shift();let n=this.ui;return Ga.forEach(e.mutations,(i=>{const s=new Cc(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ui=n}))}Qe(t){}containsKey(t,e){const n=new Cc(e,0),i=this.ui.firstAfterOrEqual(n);return Ga.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.gs.length,Ga.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t){this.di=t,this.docs=new bo(Ps.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.di(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ga.resolve(n?n.document.mutableCopy():Zs.newInvalidDocument(e))}getEntries(t,e){let n=Ao();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Zs.newInvalidDocument(t))})),Ga.resolve(n)}getAll(t,e,n){let i=Ao();const s=new Ps(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||s.readTime.compareTo(n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return Ga.resolve(i)}_i(t,e){return Ga.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new kc(this)}getSize(t){return Ga.resolve(this.size)}}class kc extends ac{constructor(t){super(),this.Tn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Tn.addEntry(t,i)):this.Tn.removeEntry(n)})),Ga.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.persistence=t,this.wi=new oc((t=>nr(t)),sr),this.lastRemoteSnapshotVersion=fs.min(),this.highestTargetId=0,this.mi=0,this.gi=new Sc,this.targetCount=0,this.yi=sc.He()}forEachTarget(t,e){return this.wi.forEach(((t,n)=>e(n))),Ga.resolve()}getLastRemoteSnapshotVersion(t){return Ga.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ga.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),Ga.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.mi&&(this.mi=e),Ga.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new sc(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,Ga.resolve()}updateTargetData(t,e){return this.Ze(e),Ga.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,Ga.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.wi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.wi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ga.waitFor(s).next((()=>i))}getTargetCount(t){return Ga.resolve(this.targetCount)}getTargetData(t,e){const n=this.wi.get(e)||null;return Ga.resolve(n)}addMatchingKeys(t,e,n){return this.gi.ti(e,n),Ga.resolve()}removeMatchingKeys(t,e,n){this.gi.ni(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),Ga.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),Ga.resolve()}getMatchingKeysForTargetId(t,e){const n=this.gi.ri(e);return Ga.resolve(n)}containsKey(t,e){return Ga.resolve(this.gi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e){this.pi={},this.overlays={},this.Nn=new as(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new Nc(this),this.indexManager=new ec,this.qn=function(t){return new Ac(t)}((t=>this.referenceDelegate.Ii(t))),this.O=new Za(e),this.Kn=new Tc(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ic,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.pi[t.toKey()];return n||(n=new _c(e,this.referenceDelegate),this.pi[t.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,n){Ki("MemoryPersistence","Starting transaction:",t);const i=new xc(this.Nn.next());return this.referenceDelegate.Ei(),n(i).next((t=>this.referenceDelegate.Ti(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ai(t,e){return Ga.or(Object.values(this.pi).map((n=>()=>n.containsKey(t,e))))}}class xc extends za{constructor(t){super(),this.currentSequenceNumber=t}}class Lc{constructor(t){this.persistence=t,this.Ri=new Sc,this.Pi=null}static bi(t){return new Lc(t)}get vi(){if(this.Pi)return this.Pi;throw Wi()}addReference(t,e,n){return this.Ri.addReference(n,e),this.vi.delete(n.toString()),Ga.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.vi.add(n.toString()),Ga.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),Ga.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach((t=>this.vi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.vi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ga.forEach(this.vi,(n=>{const i=Ps.fromPath(n);return this.Vi(t,i).next((t=>{t||e.removeEntry(i,fs.min())}))})).next((()=>(this.Pi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Vi(t,e).next((t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())}))}Ii(t){return 0}Vi(t,e){return Ga.or([()=>Ga.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.activeTargetIds=Oo()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Oc{constructor(){this._r=new Rc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,n){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new Rc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{mr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){Ki("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){Ki("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,e,n,i,s){const r=this.$r(t,e);Ki("RestConnection","Sending: ",r,n);const o={};return this.Fr(o,i,s),this.Br(t,r,o,n).then((t=>(Ki("RestConnection","Received: ",t),t)),(e=>{throw Gi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}Lr(t,e,n,i,s){return this.Mr(t,e,n,i,s)}Fr(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+qi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}$r(t,e){const n=Vc[t];return`${this.kr}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,e,n,i){return new Promise(((s,r)=>{const o=new Fi;o.listenOnce(Ri.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Li.NO_ERROR:const e=o.getResponseJson();Ki("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Li.TIMEOUT:Ki("Connection",'RPC "'+t+'" timed out'),r(new Zi(Yi.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const n=o.getStatus();if(Ki("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Yi).indexOf(e)>=0?e:Yi.UNKNOWN}(t.status);r(new Zi(e,t.message))}else r(new Zi(Yi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Zi(Yi.UNAVAILABLE,"Connection failed."));break;default:Wi()}}finally{Ki("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}Ur(t,e,n){const i=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Di(),r=xi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mi({})),this.Fr(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");Ki("Connection","Creating WebChannel: "+c,o);const h=s.createWebChannel(c,o);let u=!1,l=!1;const d=new Fc({Ar:t=>{l?Ki("Connection","Not sending because WebChannel is closed:",t):(u||(Ki("Connection","Opening WebChannel transport."),h.open(),u=!0),Ki("Connection","WebChannel sending:",t),h.send(t))},Rr:()=>h.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(h,Vi.EventType.OPEN,(()=>{l||Ki("Connection","WebChannel transport opened.")})),f(h,Vi.EventType.CLOSE,(()=>{l||(l=!0,Ki("Connection","WebChannel transport closed"),d.Cr())})),f(h,Vi.EventType.ERROR,(t=>{l||(l=!0,Gi("Connection","WebChannel transport errored:",t),d.Cr(new Zi(Yi.UNAVAILABLE,"The operation could not be completed")))})),f(h,Vi.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Qi(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Ki("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=yo[t];if(void 0!==e)return Eo(e)}(t),n=s.message;void 0===e&&(e=Yi.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,d.Cr(new Zi(e,n)),h.close()}else Ki("Connection","WebChannel received:",n),d.Nr(n)}})),f(r,Oi.STAT_EVENT,(t=>{t.stat===Pi.PROXY?Ki("Connection","Detected buffering proxy"):t.stat===Pi.NOPROXY&&Ki("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Dr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new Go(t,!0)}class jc{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Sn=t,this.timerId=e,this.qr=n,this.Kr=i,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),i=Math.max(0,e-n);i>0&&Ki("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,(()=>(this.Wr=Date.now(),t()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,n,i,s,r,o,a){this.Sn=t,this.Xr=n,this.Zr=i,this.eo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new jc(t,e)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===Yi.RESOURCE_EXHAUSTED?(zi(e.toString()),zi("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===Yi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.no===e&&this.po(t,n)}),(e=>{t((()=>{const t=new Zi(Yi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)}))}))}po(t,e){const n=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((t=>{n((()=>this.Io(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(t){return Ki("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget((()=>this.no===t?e():(Ki("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Kc extends $c{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.O=s}Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=oa(this.O,t),n=function(t){if(!("targetChange"in t))return fs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fs.min():e.readTime?Xo(e.readTime):fs.min()}(t);return this.listener.To(e,n)}Ao(t){const e={};e.database=ia(this.O),e.addTarget=function(t,e){let n;const i=e.target;return n=rr(i)?{documents:ha(t,i)}:{query:ua(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Wo(t,e.resumeToken):e.snapshotVersion.compareTo(fs.min())>0&&(n.readTime=Ho(t,e.snapshotVersion.toTimestamp())),n}(this.O,t);const n=da(this.O,t);n&&(e.labels=n),this.fo(e)}Ro(t){const e={};e.database=ia(this.O),e.removeTarget=t,this.fo(e)}}class zc extends $c{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(Qi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const e=ca(t.writeResults,t.commitTime),n=Xo(t.commitTime);return this.listener.Vo(n,e)}return Qi(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=ia(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>aa(this.O,t)))};this.fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=n,this.O=i,this.Co=!1}No(){if(this.Co)throw new Zi(Yi.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.eo.Mr(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Zi(Yi.UNKNOWN,t.toString())}))}Lr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.eo.Lr(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Zi(Yi.UNKNOWN,t.toString())}))}terminate(){this.Co=!0}}class Hc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(zi(e),this.Oo=!1):Ki("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr((t=>{n.enqueueAndForget((async()=>{ih(this)&&(Ki("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xi(t);e.Ko.add(4),await Xc(e),e.Qo.set("Unknown"),e.Ko.delete(4),await Qc(e)}(this))}))})),this.Qo=new Hc(n,i)}}async function Qc(t){if(ih(t))for(const e of t.Go)await e(!0)}async function Xc(t){for(const e of t.Go)await e(!1)}function Yc(t,e){const n=Xi(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),nh(n)?eh(n):bh(n).co()&&Jc(n,e))}function Zc(t,e){const n=Xi(t),i=bh(n);n.qo.delete(e),i.co()&&th(n,e),0===n.qo.size&&(i.co()?i.ho():ih(n)&&n.Qo.set("Unknown"))}function Jc(t,e){t.Wo.Z(e.targetId),bh(t).Ao(e)}function th(t,e){t.Wo.Z(e),bh(t).Ro(e)}function eh(t){t.Wo=new qo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),bh(t).start(),t.Qo.Mo()}function nh(t){return ih(t)&&!bh(t).oo()&&t.qo.size>0}function ih(t){return 0===Xi(t).Ko.size}function sh(t){t.Wo=void 0}async function rh(t){t.qo.forEach(((e,n)=>{Jc(t,e)}))}async function oh(t,e){sh(t),nh(t)?(t.Qo.Bo(e),eh(t)):t.Qo.set("Unknown")}async function ah(t,e,n){if(t.Qo.set("Online"),e instanceof Uo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.qo.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.qo.delete(i),t.Wo.removeTarget(i))}(t,e)}catch(n){Ki("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ch(t,n)}else if(e instanceof Vo?t.Wo.ct(e):e instanceof Fo?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(fs.min()))try{const e=await gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Wo.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.qo.get(i);s&&t.qo.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qo.get(e);if(!n)return;t.qo.set(e,n.withResumeToken(Ts.EMPTY_BYTE_STRING,n.snapshotVersion)),th(t,e);const i=new Ya(n.target,e,1,n.sequenceNumber);Jc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ki("RemoteStore","Failed to raise snapshot:",e),await ch(t,e)}}async function ch(t,e,n){if(!Ha(e))throw e;t.Ko.add(1),await Xc(t),t.Qo.set("Offline"),n||(n=()=>gc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ki("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Qc(t)}))}function hh(t,e){return e().catch((n=>ch(t,n,e)))}async function uh(t){const e=Xi(t),n=Th(e);let i=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;lh(e);)try{const t=await vc(e.localStore,i);if(null===t){0===e.Uo.length&&n.ho();break}i=t.batchId,dh(e,t)}catch(t){await ch(e,t)}fh(e)&&ph(e)}function lh(t){return ih(t)&&t.Uo.length<10}function dh(t,e){t.Uo.push(e);const n=Th(t);n.co()&&n.bo&&n.vo(e.mutations)}function fh(t){return ih(t)&&!Th(t).oo()&&t.Uo.length>0}function ph(t){Th(t).start()}async function gh(t){Th(t).Do()}async function mh(t){const e=Th(t);for(const n of t.Uo)e.vo(n.mutations)}async function yh(t,e,n){const i=t.Uo.shift(),s=Qa.from(i,e,n);await hh(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await uh(t)}async function vh(t,e){e&&Th(t).bo&&await async function(t,e){if(n=e.code,wo(n)&&n!==Yi.ABORTED){const n=t.Uo.shift();Th(t).ao(),await hh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await uh(t)}var n}(t,e),fh(t)&&ph(t)}async function wh(t,e){const n=Xi(t);n.asyncQueue.verifyOperationInProgress(),Ki("RemoteStore","RemoteStore received new credentials");const i=ih(n);n.Ko.add(3),await Xc(n),i&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Qc(n)}async function Eh(t,e){const n=Xi(t);e?(n.Ko.delete(2),await Qc(n)):e||(n.Ko.add(2),await Xc(n),n.Qo.set("Unknown"))}function bh(t){return t.zo||(t.zo=function(t,e,n){const i=Xi(t);return i.No(),new Kc(e,i.eo,i.authCredentials,i.appCheckCredentials,i.O,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Pr:rh.bind(null,t),vr:oh.bind(null,t),To:ah.bind(null,t)}),t.Go.push((async e=>{e?(t.zo.ao(),nh(t)?eh(t):t.Qo.set("Unknown")):(await t.zo.stop(),sh(t))}))),t.zo}function Th(t){return t.Ho||(t.Ho=function(t,e,n){const i=Xi(t);return i.No(),new zc(e,i.eo,i.authCredentials,i.appCheckCredentials,i.O,n)}(t.datastore,t.asyncQueue,{Pr:gh.bind(null,t),vr:vh.bind(null,t),So:mh.bind(null,t),Vo:yh.bind(null,t)}),t.Go.push((async e=>{e?(t.Ho.ao(),await uh(t)):(await t.Ho.stop(),t.Uo.length>0&&(Ki("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))}))),t.Ho
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ih{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Ih(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Zi(Yi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(zi("AsyncQueue",`${e}: ${t}`),Ha(t))return new Zi(Yi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ps.comparator(e.key,n.key):(t,e)=>Ps.comparator(t.key,e.key),this.keyedMap=No(),this.sortedSet=new bo(this.comparator)}static emptySet(t){return new Ch(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ch))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ch;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.Jo=new bo(Ps.comparator)}track(t){const e=t.doc.key,n=this.Jo.get(e);n?0!==t.type&&3===n.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==n.type?this.Jo=this.Jo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jo=this.Jo.remove(e):1===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):Wi():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ah{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Ah(t,e,Ch.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.Xo=void 0,this.listeners=[]}}class Nh{constructor(){this.queries=new oc((t=>Lr(t)),xr),this.onlineState="Unknown",this.Zo=new Set}}async function Dh(t,e){const n=Xi(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new kh),s)try{r.Xo=await n.onListen(i)}catch(t){const n=Sh(t,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&Oh(n)}async function xh(t,e){const n=Xi(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Lh(t,e){const n=Xi(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ec(s)&&(i=!0);e.Xo=s}}i&&Oh(n)}function Rh(t,e,n){const i=Xi(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Oh(t){t.Zo.forEach((t=>{t.next()}))}class Ph{constructor(t,e,n){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ah(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uc||!n)&&(!t.docs.isEmpty()||"Offline"===e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=Ah.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(t){this.key=t}}class Vh{constructor(t){this.key=t}}class Fh{constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=Lo(),this.mutatedKeys=Lo(),this.mc=Pr(t),this.gc=new Ch(this.mc)}get yc(){return this.dc}Ic(t,e){const n=e?e.Ec:new _h,i=e?e.gc:this.gc;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Ir(this.query)&&i.size===this.query.limit?i.last():null,c=Sr(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const h=i.get(t),u=Or(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Tc(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.mc(u,a)>0||c&&this.mc(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Ir(this.query)||Sr(this.query))for(;r.size>this.query.limit;){const t=Ir(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{gc:r,Ec:n,ks:o,mutatedKeys:s}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const s=t.Ec.Yo();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.mc(t.doc,e.doc))),this.Ac(n);const r=e?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==s.length||a?{snapshot:new Ah(this.query,t.gc,i,s,t.mutatedKeys,0===o,a,!1),Pc:r}:{Pc:r}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new _h,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach((t=>this.dc=this.dc.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.dc=this.dc.delete(t))),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=Lo(),this.gc.forEach((t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))}));const e=[];return t.forEach((t=>{this.wc.has(t)||e.push(new Vh(t))})),this.wc.forEach((n=>{t.has(n)||e.push(new Mh(n))})),e}vc(t){this.dc=t.Ks,this.wc=Lo();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return Ah.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Uh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Bh{constructor(t){this.key=t,this.Sc=!1}}class qh{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Dc={},this.Cc=new oc((t=>Lr(t)),xr),this.Nc=new Map,this.xc=new Set,this.kc=new bo(Ps.comparator),this.Oc=new Map,this.Mc=new Sc,this.$c={},this.Fc=new Map,this.Bc=sc.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function jh(t,e){const n=au(t);let i,s;const r=n.Cc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Vc();else{const t=await wc(n.localStore,Nr(e));n.isPrimaryClient&&Yc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await $h(n,e,i,"current"===r)}return s}async function $h(t,e,n,i){t.Uc=(e,n,i)=>async function(t,e,n,i){let s=e.view.Ic(n);s.ks&&(s=await bc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ic(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return eu(t,e.targetId,o.Pc),o.snapshot}(t,e,n,i);const s=await bc(t.localStore,e,!0),r=new Fh(e,s.Ks),o=r.Ic(s.documents),a=Mo.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);eu(t,n,c.Pc);const h=new Uh(e,n,r);return t.Cc.set(e,h),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function Kh(t,e){const n=Xi(t),i=n.Cc.get(e),s=n.Nc.get(i.targetId);if(s.length>1)return n.Nc.set(i.targetId,s.filter((t=>!xr(t,e)))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ec(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Zc(n.remoteStore,i.targetId),Jh(n,i.targetId)})).catch(rc)):(Jh(n,i.targetId),await Ec(n.localStore,i.targetId,!0))}async function zh(t,e,n){const i=cu(t);try{const t=await function(t,e){const n=Xi(t),i=ds.now(),s=e.reduce(((t,e)=>t.add(e.key)),Lo());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Us.Es(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=ro(t,r.get(t.key));null!=e&&o.push(new ho(t.key,e,Ys(e.value.mapValue),to.exists(!0)))}return n.gs.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.$c[t.currentUser.toKey()];i||(i=new bo(us)),i=i.insert(e,n),t.$c[t.currentUser.toKey()]=i}(i,t.batchId,n),await su(i,t.changes),await uh(i.remoteStore)}catch(t){const e=Sh(t,"Failed to persist write");n.reject(e)}}async function Gh(t,e){const n=Xi(t);try{const t=await mc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Oc.get(e);i&&(Qi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Sc=!0:t.modifiedDocuments.size>0?Qi(i.Sc):t.removedDocuments.size>0&&(Qi(i.Sc),i.Sc=!1))})),await su(n,t,e)}catch(t){await rc(t)}}function Hh(t,e,n){const i=Xi(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Cc.forEach(((n,i)=>{const s=i.view.tc(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Xi(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.tc(e)&&(i=!0)})),i&&Oh(n)}(i.eventManager,e),t.length&&i.Dc.To(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Wh(t,e,n){const i=Xi(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Oc.get(e),r=s&&s.key;if(r){let t=new bo(Ps.comparator);t=t.insert(r,Zs.newNoDocument(r,fs.min()));const n=Lo().add(r),s=new Po(fs.min(),new Map,new So(us),t,n);await Gh(i,s),i.kc=i.kc.remove(r),i.Oc.delete(e),iu(i)}else await Ec(i.localStore,e,!1).then((()=>Jh(i,e,n))).catch(rc)}async function Qh(t,e){const n=Xi(t),i=e.batch.batchId;try{const t=await pc(n.localStore,e);Zh(n,i,null),Yh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await su(n,t)}catch(t){await rc(t)}}async function Xh(t,e,n){const i=Xi(t);try{const t=await function(t,e){const n=Xi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.gs.lookupMutationBatch(t,e).next((e=>(Qi(null!==e),i=e.keys(),n.gs.removeMutationBatch(t,e)))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,i)))}))}(i.localStore,e);Zh(i,e,n),Yh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await su(i,t)}catch(n){await rc(n)}}function Yh(t,e){(t.Fc.get(e)||[]).forEach((t=>{t.resolve()})),t.Fc.delete(e)}function Zh(t,e,n){const i=Xi(t);let s=i.$c[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.$c[i.currentUser.toKey()]=s}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Nc.get(e))t.Cc.delete(i),n&&t.Dc.qc(i,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach((e=>{t.Mc.containsKey(e)||tu(t,e)}))}function tu(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);null!==n&&(Zc(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),iu(t))}function eu(t,e,n){for(const i of n)i instanceof Mh?(t.Mc.addReference(i.key,e),nu(t,i)):i instanceof Vh?(Ki("SyncEngine","Document no longer in limbo: "+i.key),t.Mc.removeReference(i.key,e),t.Mc.containsKey(i.key)||tu(t,i.key)):Wi()}function nu(t,e){const n=e.key,i=n.path.canonicalString();t.kc.get(n)||t.xc.has(i)||(Ki("SyncEngine","New document in limbo: "+n),t.xc.add(i),iu(t))}function iu(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new Ps(vs.fromString(e)),i=t.Bc.next();t.Oc.set(i,new Bh(n)),t.kc=t.kc.insert(n,i),Yc(t.remoteStore,new Ya(Nr(Tr(n.path)),i,2,as.A))}}async function su(t,e,n){const i=Xi(t),s=[],r=[],o=[];i.Cc.isEmpty()||(i.Cc.forEach(((t,a)=>{o.push(i.Uc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=hc.Ss(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Dc.To(s),await async function(t,e){const n=Xi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ga.forEach(e,(e=>Ga.forEach(e.vs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ga.forEach(e.Vs,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Ha(t))throw t;Ki("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ms.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ms=n.Ms.insert(t,s)}}}(i.localStore,r))}async function ru(t,e){const n=Xi(t);if(!n.currentUser.isEqual(e)){Ki("SyncEngine","User change. New user:",e.toKey());const t=await fc(n.localStore,e);n.currentUser=e,function(t,e){t.Fc.forEach((t=>{t.forEach((t=>{t.reject(new Zi(Yi.CANCELLED,e))}))})),t.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await su(n,t.qs)}}function ou(t,e){const n=Xi(t),i=n.Oc.get(e);if(i&&i.Sc)return Lo().add(i.key);{let t=Lo();const i=n.Nc.get(e);if(!i)return t;for(const e of i){const i=n.Cc.get(e);t=t.unionWith(i.view.yc)}return t}}function au(t){const e=Xi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ou.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wh.bind(null,e),e.Dc.To=Lh.bind(null,e.eventManager),e.Dc.qc=Rh.bind(null,e.eventManager),e}function cu(t){const e=Xi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xh.bind(null,e),e}class hu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=qc(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return dc(this.persistence,new uc,t.initialUser,this.O)}jc(t){return new Dc(Lc.bi,this.O)}Gc(t){return new Oc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Hh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ru.bind(null,this.syncEngine),await Eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Nh}createDatastore(t){const e=qc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Uc(i));var i;return function(t,e,n,i){return new Gc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Hh(this.syncEngine,t,0),r=Mc.Vt()?new Mc:new Pc,new Wc(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new qh(t,e,n,i,s,r);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xi(t);Ki("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await Xc(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class du{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Bi.UNAUTHENTICATED,this.clientId=hs.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ki("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ki("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Zi(Yi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),Ki("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await fc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function pu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gu(t);Ki("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>wh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>wh(e.remoteStore,n))),t.onlineComponents=e}async function gu(t){return t.offlineComponents||(Ki("FirestoreClient","Using default OfflineComponentProvider"),await fu(t,new hu)),t.offlineComponents}async function mu(t){return t.onlineComponents||(Ki("FirestoreClient","Using default OnlineComponentProvider"),await pu(t,new uu)),t.onlineComponents}function yu(t){return mu(t).then((t=>t.syncEngine))}async function vu(t){const e=await mu(t),n=e.eventManager;return n.onListen=jh.bind(null,e.syncEngine),n.onUnlisten=Kh.bind(null,e.syncEngine),n}function wu(t,e,n={}){const i=new Ji;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new lu({next:r=>{e.enqueueAndForget((()=>xh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Zi(Yi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Zi(Yi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new Ph(Tr(n.path),r,{includeMetadataChanges:!0,uc:!0});return Dh(t,o)}(await vu(t),t.asyncQueue,e,n,i))),i.promise}const Eu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e,n){if(!n)throw new Zi(Yi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tu(t,e,n,i){if(!0===e&&!0===i)throw new Zi(Yi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iu(t){if(!Ps.isDocumentKey(t))throw new Zi(Yi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Su(t){if(Ps.isDocumentKey(t))throw new Zi(Yi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wi()}function _u(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Zi(Yi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cu(t);throw new Zi(Yi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Zi(Yi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Zi(Yi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Au({}),this._settingsFrozen=!1,t instanceof xs?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Zi(Yi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(t.options.projectId)}(t))}get app(){if(!this._app)throw new Zi(Yi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Zi(Yi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Au(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new es;switch(t.type){case"gapi":const e=t.client;return Qi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ss(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Zi(Yi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Eu.get(t);e&&(Ki("ComponentProvider","Removing Datastore"),Eu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nu(this.firestore,t,this._key)}}class Du{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Du(this.firestore,t,this._query)}}class xu extends Du{constructor(t,e,n){super(t,e,Tr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nu(this.firestore,null,new Ps(t))}withConverter(t){return new xu(this.firestore,t,this._path)}}function Lu(t,e,...n){if(t=(0,a.m9)(t),bu("collection","path",e),t instanceof ku){const i=vs.fromString(e,...n);return Su(i),new xu(t,null,i)}{if(!(t instanceof Nu||t instanceof xu))throw new Zi(Yi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(vs.fromString(e,...n));return Su(i),new xu(t.firestore,null,i)}}function Ru(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=hs.R()),bu("doc","path",e),t instanceof ku){const i=vs.fromString(e,...n);return Iu(i),new Nu(t,null,new Ps(i))}{if(!(t instanceof Nu||t instanceof xu))throw new Zi(Yi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(vs.fromString(e,...n));return Iu(i),new Nu(t.firestore,t instanceof xu?t.converter:null,new Ps(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new jc(this,"async_queue_retry"),this.yu=()=>{const t=Bc();t&&Ki("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=Bc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=Bc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise((()=>{}));const e=new Ji;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.lu.push(t),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(T){if(!Ha(T))throw T;Ki("AsyncQueue","Operation failed with retryable error: "+T)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(t){const e=this.hu.then((()=>(this.wu=!0,t().catch((t=>{this._u=t,this.wu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw zi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.wu=!1,t))))));return this.hu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const i=Ih.createAndSchedule(this,t,e,n,(t=>this.Tu(t)));return this.du.push(i),i}pu(){this._u&&Wi()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()}))}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function Pu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Mu extends ku{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ou,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uu(this),this._firestoreClient.terminate()}}function Vu(t=(0,s.Mq)()){return(0,s.qX)(t,"firestore").getImmediate()}function Fu(t){return t._firestoreClient||Uu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uu(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Ds(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new du(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Zi(Yi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Es(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qu(Ts.fromBase64String(t))}catch(t){throw new Zi(Yi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new qu(Ts.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Zi(Yi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Zi(Yi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return us(this._lat,t._lat)||us(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=/^__.*__$/;class zu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ho(t,this.data,this.fieldMask,e,this.fieldTransforms):new co(t,this.data,e,this.fieldTransforms)}}class Gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ho(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wi()}}class Wu{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.O=n,this.ignoreUndefinedProperties=i,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new Wu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Su({path:n,Cu:!1});return i.Nu(t),i}xu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Su({path:n,Cu:!1});return i.vu(),i}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return cl(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(Hu(this.Vu)&&Ku.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class Qu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=n||qc(t)}Fu(t,e,n,i=!1){return new Wu({Vu:t,methodName:e,$u:n,path:Es.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Xu(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new Qu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yu(t,e,n,i,s,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,s);sl("Data must be an object, but it was:",o,i);const a=nl(i,o);let c,h;if(r.merge)c=new bs(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=rl(e,i,n);if(!o.contains(s))throw new Zi(Yi.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);hl(t,s)||t.push(s)}c=new bs(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new zu(new Xs(a),c,h)}class Zu extends ju{_toFieldTransform(t){if(2!==t.Vu)throw 1===t.Vu?t.Ou(`${this._methodName}() can only appear at the top level of your update data`):t.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zu}}function Ju(t,e,n,i){const s=t.Fu(1,e,n);sl("Data must be an object, but it was:",s,i);const r=[],o=Xs.empty();gs(i,((t,i)=>{const c=al(e,t,n);i=(0,a.m9)(i);const h=s.xu(c);if(i instanceof Zu)r.push(c);else{const t=el(i,h);null!=t&&(r.push(c),o.set(c,t))}}));const c=new bs(r);return new Gu(o,c,s.fieldTransforms)}function tl(t,e,n,i,s,r){const o=t.Fu(1,e,n),c=[rl(e,i,n)],h=[s];if(r.length%2!=0)throw new Zi(Yi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)c.push(rl(e,r[a])),h.push(r[a+1]);const u=[],l=Xs.empty();for(let f=c.length-1;f>=0;--f)if(!hl(u,c[f])){const t=c[f];let e=h[f];e=(0,a.m9)(e);const n=o.xu(t);if(e instanceof Zu)u.push(t);else{const i=el(e,n);null!=i&&(u.push(t),l.set(t,i))}}const d=new bs(u);return new Gu(l,d,o.fieldTransforms)}function el(t,e){if(il(t=(0,a.m9)(t)))return sl("Unsupported field value:",e,t),nl(t,e);if(t instanceof ju)return function(t,e){if(!Hu(e.Vu))throw e.Ou(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ou(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=el(s,e.ku(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ur(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ds.fromDate(t);return{timestampValue:Ho(e.O,n)}}if(t instanceof ds){const n=new ds(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ho(e.O,n)}}if(t instanceof $u)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qu)return{bytesValue:Wo(e.O,t._byteString)};if(t instanceof Nu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yo(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou(`Unsupported field value: ${Cu(t)}`)}(t,e)}function nl(t,e){const n={};return ms(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,((t,i)=>{const s=el(i,e.Du(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function il(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ds||t instanceof $u||t instanceof qu||t instanceof Nu||t instanceof ju)}function sl(t,e,n){if(!il(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Cu(n);throw"an object"===i?e.Ou(t+" a custom object"):e.Ou(t+" "+i)}}function rl(t,e,n){if((e=(0,a.m9)(e))instanceof Bu)return e._internalPath;if("string"==typeof e)return al(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ol=new RegExp("[~\\*/\\[\\]]");function al(t,e,n){if(e.search(ol)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bu(...e.split("."))._internalPath}catch(i){throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Zi(Yi.INVALID_ARGUMENT,a+t+c)}function hl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ll extends ul{data(){return super.data()}}function dl(t,e){return"string"==typeof e?al(t,e):e instanceof Bu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pl extends ul{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gl extends pl{data(t={}){return super.data(t)}}class ml{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new fl(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gl(this._firestore,this._userDataWriter,n.key,n,new fl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Zi(Yi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new gl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new gl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:yl(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vl(t){if(Sr(t)&&0===t.explicitOrderBy.length)throw new Zi(Yi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{convertValue(t,e="none"){switch(Vs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Cs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_s(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wi()}}convertObject(t,e){const n={};return gs(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new $u(Cs(t.latitude),Cs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ks(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ns(t));default:return null}}convertTimestamp(t){const e=Ss(t);return new ds(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=vs.fromString(t);Qi(ba(n));const i=new xs(n.get(1),n.get(3)),s=new Ps(n.popFirst(5));return i.isEqual(e)||zi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bl(t){t=_u(t,Nu);const e=_u(t.firestore,Mu);return wu(Fu(e),t._key).then((n=>Al(e,t,n)))}class Tl extends wl{constructor(t){super(),this.firestore=t}convertBytes(t){return new qu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nu(this.firestore,null,e)}}function Il(t,e,n){t=_u(t,Nu);const i=_u(t.firestore,Mu),s=El(t.converter,e,n);return _l(i,[Yu(Xu(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,to.none())])}function Sl(t,e,n,...i){t=_u(t,Nu);const s=_u(t.firestore,Mu),r=Xu(s);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Bu?tl(r,"updateDoc",t._key,e,n,i):Ju(r,"updateDoc",t._key,e),_l(s,[o.toMutation(t._key,to.exists(!0))])}function Cl(t,...e){var n,i,s;t=(0,a.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Pu(e[o])||(r=e[o],o++);const c={includeMetadataChanges:r.includeMetadataChanges};if(Pu(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let h,u,l;if(t instanceof Nu)u=_u(t.firestore,Mu),l=Tr(t._key.path),h={next:n=>{e[o]&&e[o](Al(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=_u(t,Du);u=_u(n.firestore,Mu),l=n._query;const i=new Tl(u);h={next:t=>{e[o]&&e[o](new ml(u,i,n,t))},error:e[o+1],complete:e[o+2]},vl(t._query)}return function(t,e,n,i){const s=new lu(i),r=new Ph(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Dh(await vu(t),r))),()=>{s.Jc(),t.asyncQueue.enqueueAndForget((async()=>xh(await vu(t),r)))}}(Fu(u),l,c,h)}function _l(t,e){return function(t,e){const n=new Ji;return t.asyncQueue.enqueueAndForget((async()=>zh(await yu(t),e,n))),n.promise}(Fu(t),e)}function Al(t,e,n){const i=n.docs.get(e._key),s=new Tl(t);return new pl(t,s,e._key,i,new fl(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){qi=t}(s.Jn),(0,s.Xd)(new r.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Mu(i,new ns(t.getProvider("auth-internal")),new os(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,s.KN)(Ui,"3.4.5",t),(0,s.KN)(Ui,"3.4.5","esm2017")}()},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",a=s.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function h(t,e,n,i){var s=e&&e.prototype instanceof m?e:m,r=Object.create(s.prototype),o=new N(i||[]);return r._invoke=C(t,n,o),r}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=h;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function y(){}function v(){}var w={};c(w,r,(function(){return this}));var E=Object.getPrototypeOf,b=E&&E(E(D([])));b&&b!==n&&i.call(b,r)&&(w=b);var T=v.prototype=m.prototype=Object.create(w);function I(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(s,r,o,a){var c=u(t[s],t,r);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"===typeof l&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(l).then((function(t){h.value=t,o(h)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var s;function r(t,i){function r(){return new e((function(e,s){n(t,i,e,s)}))}return s=s?s.then(r,r):r()}this._invoke=r}function C(t,e,n){var i=l;return function(s,r){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===s)throw r;return x()}n.method=s,n.arg=r;while(1){var o=n.delegate;if(o){var a=_(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===l)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function _(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var s=u(i,t.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,g;var r=s.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function D(t){if(t){var n=t[r];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function n(){while(++s<t.length)if(i.call(t,s))return n.value=t[s],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:e,done:!0}}return y.prototype=v,c(T,"constructor",v),c(v,"constructor",y),y.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},I(S.prototype),c(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,i,s,r){void 0===r&&(r=Promise);var o=new S(h(e,n,i,s),r);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},I(T),c(T,a,"Generator"),c(T,r,(function(){return this})),c(T,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function s(i,s){return a.type="throw",a.arg=t,n.next=i,s&&(n.method="next",n.arg=e),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),h=i.call(o,"finallyLoc");if(c&&h){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&i.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var s=i.arg;k(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:D(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},6428:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i,s=n(4367),r=(n(7268),n(1539),n(6699),n(2023),n(4916),n(7601),n(9653),n(3210),n(9826),n(7042),n(6210)),o=n(6952),a=n(9131),c=n(8085),h=n(4589),u=n(144),l=n(3325);function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=(0,l.Z)(r.Z,o.Z,a.Z,c.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,h.RB)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,h.XP)(t).find((function(e){return t[e]}));return e&&i[e]||(0,h.kb)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:(0,s.Z)({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=(0,s.Z)((0,s.Z)({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=(0,s.Z)((0,s.Z)({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),s="material-icons",r=t.indexOf("-"),o=r<=-1;o?n.push(t):(s=t.slice(0,r),d(s)&&(s="")),i.class[s]=!0,i.class[t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var s=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),g=u.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,s="";return n.domProps&&(s=n.domProps.textContent||n.domProps.innerHTML||s,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,s?[s]:i)}})},172:function(t,e,n){"use strict";var i=n(6428);e["Z"]=i.Z},7003:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(4367),s=n(3796),r=(n(9653),n(9253),n(5827)),o=n(8083),a=n(6952),c=n(3536),h=n(1431),u=n(8085),l=n(4589),d=n(3325),f=(0,d.Z)(a.Z,(0,c.d)(["absolute","fixed","top","bottom"]),h.Z,u.Z),p=f.extend({name:"v-progress-linear",directives:{intersect:o.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,l.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,l.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},(0,s.Z)(t,this.isReversed?"right":"left",(0,l.kb)(this.normalizedValue,"%")),(0,s.Z)(t,"width",(0,l.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return(0,i.Z)({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?r.Z5:r.Qn},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,l.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=(0,l.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:(0,s.Z)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},onObserve:function(t,e,n){this.isVisible=n},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,l.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},7420:function(t,e,n){"use strict";var i=n(7003);e["Z"]=i.Z},5827:function(t,e,n){"use strict";n.d(e,{Fx:function(){return d},Zq:function(){return f},Z5:function(){return u},Qn:function(){return l}});n(2222);var i=n(6290);function s(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return(t=Array()).concat.apply(t,[e].concat(i))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=s(o.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,s=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=s+"px"})),o.on.afterLeave=s(o.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,s=e.left,r=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=s||"",t.style.width=r||"",t.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=s(o.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(r,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,s){return n("transition",(0,i.ZP)(s.data,{props:{name:t},on:e}),s.children)}}}var a=n(3796),c=n(4589);function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat((0,c.jC)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=(0,a.Z)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var r="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=(0,a.Z)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition");var u=r("fade-transition"),l=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),d=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),o("expand-transition",h())),f=o("expand-x-transition",h("",!0))},1431:function(t,e,n){"use strict";var i=n(3796),s=n(144);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return s.Z.extend({name:"proxyable",model:{prop:t,event:e},props:(0,i.Z)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:(0,i.Z)({},t,(function(t){this.internalLazyValue=t}))})}var o=r();e["Z"]=o},1618:function(t,e,n){"use strict";n.d(e,{r4:function(){return f},ZP:function(){return g},PR:function(){return l}});var i=n(6198),s=(n(1703),n(5666),n(2238)),r="firebase",o="9.6.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.KN)(r,o,"app");var a=n(5321),c={apiKey:"AIzaSyAgsznmWJzJZa40GYD3WRnWt7cnSDcrZXg",authDomain:"sellers-b509b.firebaseapp.com",projectId:"sellers-b509b",storageBucket:"sellers-b509b.appspot.com",messagingSenderId:"1037490411128",appId:"1:1037490411128:web:e6111f2582519628d9bf8d",measurementId:"G-65F40DR8FE"},h=(0,s.ZF)(c),u=(0,a.ad)(h);function l(t){return d.apply(this,arguments)}function d(){return d=(0,i.Z)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("getUserCalled"),n=(0,a.JU)(u,"/users",""+e),t.next=5,(0,a.QT)(n);case 5:return t.abrupt("return",t.sent.data());case 8:throw t.prev=8,t.t0=t["catch"](0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),d.apply(this,arguments)}function f(t,e){return p.apply(this,arguments)}function p(){return p=(0,i.Z)(regeneratorRuntime.mark((function t(e,n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log({payload:n}),i=(0,a.JU)(u,"/users",""+e),t.next=5,(0,a.QT)(i);case 5:if(!t.sent.data()){t.next=7;break}throw new Error((n&&"seller"===n.type?"Seller":"User")+" already exists");case 7:return t.next=9,(0,a.pl)(i,n);case 9:return t.abrupt("return",t.sent);case 12:throw t.prev=12,t.t0=t["catch"](0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),p.apply(this,arguments)}var g=u},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return G},qX:function(){return j},Xd:function(){return q},Mq:function(){return W},ZF:function(){return H},KN:function(){return Q}});var i=n(8463),s=n(3333),r=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",h="0.7.17",u=new s.Yd("@firebase/app"),l="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",E="@firebase/functions",b="@firebase/functions-compat",T="@firebase/installations",I="@firebase/installations-compat",S="@firebase/messaging",C="@firebase/messaging-compat",_="@firebase/performance",A="@firebase/performance-compat",k="@firebase/remote-config",N="@firebase/remote-config-compat",D="@firebase/storage",x="@firebase/storage-compat",L="@firebase/firestore",R="@firebase/firestore-compat",O="firebase",P="9.6.7",M="[DEFAULT]",V={[c]:"fire-core",[l]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[E]:"fire-fn",[b]:"fire-fn-compat",[T]:"fire-iid",[I]:"fire-iid-compat",[S]:"fire-fcm",[C]:"fire-fcm-compat",[_]:"fire-perf",[A]:"fire-perf-compat",[k]:"fire-rc",[N]:"fire-rc-compat",[D]:"fire-gcs",[x]:"fire-gcs-compat",[L]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[O]:"fire-js-all"},F=new Map,U=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(U.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())B(n,t);return!0}function j(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new r.LL("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=P;function H(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw K.create("bad-app-name",{appName:String(s)});const o=F.get(s);if(o){if((0,r.vZ)(t,o.options)&&(0,r.vZ)(n,o.config))return o;throw K.create("duplicate-app",{appName:s})}const a=new i.H0(s);for(const i of U.values())a.addComponent(i);const c=new z(t,n,a);return F.set(s,c),c}function W(t=M){const e=F.get(t);if(!e)throw K.create("no-app",{appName:t});return e}function Q(t,e,n){var s;let r=null!==(s=V[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}q(new i.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){q(new i.wA("platform-logger",(t=>new o(t)),"PRIVATE")),Q(c,h,t),Q(c,h,"esm2017"),Q("fire-js","")}X("")},8463:function(t,e,n){"use strict";n.d(e,{wA:function(){return s},H0:function(){return h}});var i=n(4444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{in:function(){return s},Yd:function(){return h}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class h{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},6198:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(1539);function i(t,e,n,i,s,r,o){try{var a=t[r](o),c=a.value}catch(h){return void n(h)}a.done?e(c):Promise.resolve(c).then(i,s)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(s,r){var o=t.apply(e,n);function a(t){i(o,s,r,a,c,"next",t)}function c(t){i(o,s,r,a,c,"throw",t)}a(void 0)}))}}}}]);
//# sourceMappingURL=171-legacy.e40ebe85.js.map