"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[147],{4444:function(t,e,n){n.d(e,{BH:function(){return r},LL:function(){return g},ZR:function(){return p},vZ:function(){return v},m9:function(){return E},ru:function(){return c},d:function(){return u},w1:function(){return l},uI:function(){return a},b$:function(){return h},Mn:function(){return d}});
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
const s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,s=0;while(n<t.length){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")};
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
const f="FirebaseError";class p extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=f,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,g.prototype.create)}}class g{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?m(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`,a=new p(s,o,n);return a}}function m(t,e){return t.replace(y,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const y=/\{\$([^}]+)}/g;
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
 */function v(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(w(n)&&w(r)){if(!v(n,r))return!1}else if(n!==r)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function w(t){return null!==t&&"object"===typeof t}
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
function E(t){return t&&t._delegate?t._delegate:t}},5321:function(t,e,n){n.d(e,{hJ:function(){return Ru},JU:function(){return Lu},QT:function(){return bl},ad:function(){return Vu},cf:function(){return Cl},pl:function(){return Il},r7:function(){return Sl}});var s,i=n(2238),r=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},h={},u=u||{},l=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function I(){this.s=this.s,this.o=this.o}var S=0,C={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=g(this);delete C[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},N=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function k(t){t:{var e=Gn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function _(t){return Array.prototype.concat.apply([],arguments)}function D(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var R,L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=l.navigator;if(M){var V=M.userAgent;if(V){R=V;break t}}R=""}function F(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<q.length;e++)n=q[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function j(t){return j[" "](t),t}function $(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=d;var K,z=O(R,"Opera"),G=O(R,"Trident")||O(R,"MSIE"),H=O(R,"Edge"),W=H||G,Q=O(R,"Gecko")&&!(O(R.toLowerCase(),"webkit")&&!O(R,"Edge"))&&!(O(R,"Trident")||O(R,"MSIE"))&&!O(R,"Edge"),X=O(R.toLowerCase(),"webkit")&&!O(R,"Edge");function Y(){var t=l.document;return t?t.documentMode:void 0}t:{var J="",Z=function(){var t=R;return Q?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(J=Z?Z[1]:""),G){var tt=Y();if(null!=tt&&tt>parseFloat(J)){K=String(tt);break t}}K=J}var et,nt={};function st(){return $((function(){let t=0;const e=L(String(K)).split("."),n=L("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||P(0==i[2].length,0==r[2].length)||P(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(l.document&&G){var it=Y();et=it||(parseInt(K,10)||void 0)}else et=void 0;var rt=et,ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Q){t:{try{j(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ht[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},T(ct,at);var ht={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),lt=0;function dt(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++lt,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=A(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}pt.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=mt(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,s,i){if(s&&s.once)return Tt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)wt(t,e[r],n,s,i);return null}return n=_t(n),t&&t[ut]?t.N(e,n,p(s)?!!s.capture:!!s,i):Et(t,e,n,!1,s,i)}function Et(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Nt(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=bt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function Tt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Tt(t,e[r],n,s,i);return null}return n=_t(n),t&&t[ut]?t.O(e,n,p(s)?!!s.capture:!!s,i):Et(t,e,n,!0,s,i)}function It(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)It(t,e[r],n,s,i);else s=p(s)?!!s.capture:!!s,n=_t(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=mt(r,n,s,i),-1<n&&(ft(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Nt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,s,i)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])gt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ct(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Nt(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):ft(t)}}}function Ct(t){return t in vt?vt[t]:vt[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&St(t),t=n.call(s,e)}return t}function Nt(t){return t=t[yt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Dt(){I.call(this),this.i=new pt(this),this.P=this,this.I=null}function xt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(s,t),B(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Rt(o,s,!0,e)&&i}if(o=e.g=t,i=Rt(o,s,!0,e)&&i,i=Rt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Rt(o,s,!1,e)&&i}function Rt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}T(Dt,I),Dt.prototype[ut]=!0,Dt.prototype.removeEventListener=function(t,e,n,s){It(this,t,e,n,s)},Dt.prototype.M=function(){if(Dt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ft(n[s]);delete e.g[t],e.h--}}this.I=null},Dt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Dt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Lt=l.JSON.stringify;function Ot(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){l.setTimeout((()=>{throw t}),0)}function qt(t,e){Mt||Bt(),jt||(Mt(),jt=!0),$t.add(t,e)}function Bt(){var t=l.Promise.resolve(void 0);Mt=function(){t.then(Kt)}}var jt=!1,$t=new Pt;function Kt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function zt(t,e){Dt.call(this),this.h=t||1,this.g=e||l,this.j=E(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Wt(t){t.g=Ht((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(zt,Dt),s=zt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Gt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){zt.Z.M.call(this),Gt(this),delete this.g};class Qt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){I.call(this),this.h=t,this.g={}}T(Xt,I);var Yt=[];function Jt(t,e,n,s){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var i=0;i<n.length;i++){var r=wt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Zt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function se(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(s?" "+s:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Lt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Zt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Dt}function he(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();xt(e,new he(e,t))}function le(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();xt(e,new le(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",T(he,at),oe.STAT_EVENT="statevent",T(le,at),oe.Na="timingevent",T(fe,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var Ee,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Te(){at.call(this,"d")}function Ie(){at.call(this,"c")}function Se(){}function Ce(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Xt(this),this.P=Ne,t=W?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}T(Te,at),T(Ie,at),T(Se,ye),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},Ee=new Se;var Ne=45e3,ke={},_e={};function De(t,e,n){t.K=1,t.v=en(Qe(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Pe(t),t.A=Qe(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),yn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ae,t.g=Is(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Qt(E(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Le(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Oe(t,n),s==_e){4==e&&(t.o=4,de(14),i=!1),se(t.j,t.m,null,"[Incomplete Response]");break}if(s==ke){t.o=4,de(15),se(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}se(t.j,t.m,s,null),qe(t,s)}Re(t)&&s!=_e&&s!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gs(e),e.L=!0,de(11))):(se(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Fe(t))}function Oe(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?_e:(n=Number(e.substring(n,s)),isNaN(n)?ke:(s+=1,s+n>e.length?_e:(e=e.substr(s,n),t.C=s+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(E(t.eb,t),e)}function Ve(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||vs(t.l,t)}function Ue(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ys(n),rs(n)}ps(n),de(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(E(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Es(n,11)}else if((t.J||n.g==t)&&ys(n),!x(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(O(t,"spdy")||O(t,"quic")||O(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(An(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,tn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Ts(s,s.H?s.la:null,s.W),o.J){Nn(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ve(a),Pe(a)),s.g=o}else fs(s);0<n.l.length&&cs(n)}else"stop"!=h[0]&&"close"!=h[0]||Es(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Es(n,7):is(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}ue(4)}catch(h){}}function Be(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)N(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Be(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function $e(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof $e)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ze(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],ze(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ce.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const u=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Ve(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var s=Zn(this.g);t="";var i=s.length,r=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Fe(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,de(12),Ue(this),Fe(this);break t}se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qe(this,n)}this.U?(Le(this,u,o),W&&this.i&&3==u&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,o,null),qe(this,o)),4==u&&Ue(this),this.i&&!this.I&&(4==u?vs(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Ue(this),Fe(this)}}}catch(u){}},s.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),Le(this,t,e),this.i&&4!=t&&Pe(this))}},s.cancel=function(){this.I=!0,Ue(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(ue(3),de(17)),Ue(this),this.o=2,Fe(this)):Me(this,this.Y-t)},s=$e.prototype,s.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return Ke(this),this.g.concat()},s.get=function(t,e){return ze(this.h,t)?this.h[t]:e},s.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Ye(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new $e(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=rn(n[2]||""),Ye(this,n[3]||"",!0),Je(this,n[4]),this.l=rn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Qe(t){return new We(t)}function Xe(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?rn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,ln)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Qe(t):new We(t,void 0)}function sn(t,e,n,s){var i=new We(null,void 0);return t&&Xe(i,t),e&&Ye(i,e),n&&Je(i,n),s&&(i.l=s),i}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:hn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,hn=/[#\?:]/g,un=/[#\?]/g,ln=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new $e,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function mn(t,e){return pn(t),e=vn(t,e),ze(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),D(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}s=fn.prototype,s.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){pn(this),this.g.forEach((function(n,s){N(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},s.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=_(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_(e,t[n])}return e},s.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var En=class{constructor(t,e){this.h=t,this.g=e}};function bn(t){this.l=t||Tn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function In(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function Nn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return D(t.i)}function _n(){}function Dn(){this.g=new _n}function xn(t,e,n){const s=n||"";try{je(t,(function(t,n){let i=t;p(t)&&(i=Lt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Rn(t,e){const n=new te;if(l.Image){const s=new Image;s.onload=b(Ln,n,s,"TestLoadImage: loaded",!0,e),s.onerror=b(Ln,n,s,"TestLoadImage: error",!1,e),s.onabort=b(Ln,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=b(Ln,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Ln(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Dt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},_n.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},_n.prototype.parse=function(t){return l.JSON.parse(t,void 0)},T(On,ye),On.prototype.g=function(){return new Pn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),T(Pn,Dt);var Mn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Pn.prototype,s.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Un(this),3==this.readyState&&Vn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},s.Ta=function(t){this.g&&(this.response=t,Fn(this))},s.ha=function(){this.g&&Fn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var qn=l.JSON.parse;function Bn(t){Dt.call(this),this.headers=new $e,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}T(Bn,Dt);var jn="",$n=/^https?$/i,Kn=["POST","PUT"];function zn(t){return G&&st()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Xn(t)}function Wn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Qn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Ht(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var i=String(t.H).match(Ge)[1]||null;if(!i&&l.self&&l.self.location){var r=l.self.location.protocol;i=r.substr(0,r.length-1)}s=!$n.test(i?i.toLowerCase():"")}n=s}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Yn(t);const s=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||xt(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ts(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function es(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ts(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ss(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ns("baseRetryDelayMs",5e3,t),this.$a=ns("retryDelaySeedMs",1e4,t),this.Ya=ns("forwardChannelMaxRetries",2,t),this.ra=ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new Dn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function is(t){if(os(t),3==t.G){var e=t.V++,n=Qe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ls(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=en(Qe(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=Is(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}bs(t)}function rs(t){t.g&&(gs(t),t.g.cancel(),t.g=null)}function os(t){rs(t),t.u&&(l.clearTimeout(t.u),t.u=null),ys(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function as(t,e){t.l.push(new En(t.Za++,e)),3==t.G&&cs(t)}function cs(t){In(t.i)||t.m||(t.m=!0,qt(t.Ha,t),t.C=0)}function hs(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(E(t.Ha,t,e),ws(t,t.C)),t.C++,!0))}function us(t,e){var n;n=e?e.m:t.V++;const s=Qe(t.F);tn(s,"SID",t.J),tn(s,"RID",n),tn(s,"AID",t.U),ls(t,s),t.o&&t.s&&es(s,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ds(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),De(n,s,e)}function ls(t,e){t.j&&je({},(function(t,n){tn(e,n,t)}))}function ds(t,e,n){n=Math.min(t.l.length,n);var s=t.j?E(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{xn(a,t,"req"+n+"_")}catch(Ys){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function fs(t){t.g||t.u||(t.Y=1,qt(t.Ga,t),t.A=0)}function ps(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(E(t.Ga,t),ws(t,t.A)),t.A++,!0)}function gs(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function ms(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Qe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ls(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&es(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Qe(e)),n.s=null,n.U=!0,xe(n,t)}function ys(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function vs(t,e){var n=null;if(t.g==e){ys(t),gs(t),t.g=null;var s=2}else{if(!Cn(t.i,e))return;n=e.D,Nn(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ce(),xt(s,new fe(s,n,e,i)),cs(t)}else fs(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&hs(t,e)||2==s&&ps(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}function ws(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Es(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=E(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Xe(n,"https"),en(n)),Rn(n.toString(),s)}else de(2);t.G=0,t.j&&t.j.va(e),bs(t),os(t)}function bs(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,D(t.l),t.l.length=0),t.j.ua())}function Ts(t,e,n){let s=nn(n);if(""!=s.i)e&&Ye(s,e+"."+s.i),Je(s,s.m);else{const t=l.location;s=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(s,e,t)})),e=t.D,n=t.sa,e&&n&&tn(s,e,n),tn(s,"VER",t.ma),ls(t,s),s}function Is(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Bn(new On({ib:!0})):new Bn(t.qa),e.L=t.H,e}function Ss(){}function Cs(){if(G&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function As(t,e){Dt.call(this),this.g=new ss(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _s(this)}function Ns(t){Te.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ks(){Ie.call(this),this.status=1}function _s(t){this.g=t}s=Bn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ee.g(),this.C=this.u?ve(this.u):ve(Ee),this.g.onreadystatechange=E(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Hn(this,r)}t=n||"";const i=new $e(this.headers);s&&je(s,(function(t,e){i.set(e,t)})),s=k(i.T()),n=l.FormData&&t instanceof l.FormData,!(0<=A(Kn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Hn(this,r)}},s.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Xn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Bn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},s.cb=function(){Qn(this)},s.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),qn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=ss.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ce(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=U(r),B(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ds(this,i,e),n=Qe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ls(this,n),this.o&&r&&es(n,this.o,r),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,De(i,n,null)):De(i,n,e),this.G=2}}else 3==this.G&&(t?us(this,t):0==this.l.length||In(this.i)||us(this))},s.Ga=function(){if(this.u=null,ms(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(E(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),rs(this),ms(this))},s.ab=function(){null!=this.v&&(this.v=null,rs(this),ps(this),de(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},s=Ss.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Cs.prototype.g=function(t,e){return new As(t,e)},T(As,Dt),As.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),qt(E(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ts(t,null,t.W),cs(t)},As.prototype.close=function(){is(this.g)},As.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,as(this.g,e)}else this.v?(e={},e.__data__=Lt(t),as(this.g,e)):as(this.g,t)},As.prototype.M=function(){this.g.j=null,delete this.j,is(this.g),delete this.g,As.Z.M.call(this)},T(Ns,Te),T(ks,Ie),T(_s,Ss),_s.prototype.xa=function(){xt(this.g,"a")},_s.prototype.wa=function(t){xt(this.g,new Ns(t))},_s.prototype.va=function(t){xt(this.g,new ks(t))},_s.prototype.ua=function(){xt(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,As.prototype.send=As.prototype.u,As.prototype.open=As.prototype.m,As.prototype.close=As.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",Dt.prototype.listen=Dt.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Ds=h.createWebChannelTransport=function(){return new Cs},xs=h.getStatEventTarget=function(){return ce()},Rs=h.ErrorCode=ge,Ls=h.EventType=me,Os=h.Event=oe,Ps=h.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ms=h.FetchXmlHttpFactory=On,Vs=h.WebChannel=we,Fs=h.XhrIo=Bn;const Us="@firebase/firestore";
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
 */class qs{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qs.UNAUTHENTICATED=new qs(null),qs.GOOGLE_CREDENTIALS=new qs("google-credentials-uid"),qs.FIRST_PARTY=new qs("first-party-uid"),qs.MOCK_USER=new qs("mock-user");
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
let Bs="9.6.7";
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
 */const js=new o.Yd("@firebase/firestore");function $s(){return js.logLevel}function Ks(t,...e){if(js.logLevel<=o["in"].DEBUG){const n=e.map(Hs);js.debug(`Firestore (${Bs}): ${t}`,...n)}}function zs(t,...e){if(js.logLevel<=o["in"].ERROR){const n=e.map(Hs);js.error(`Firestore (${Bs}): ${t}`,...n)}}function Gs(t,...e){if(js.logLevel<=o["in"].WARN){const n=e.map(Hs);js.warn(`Firestore (${Bs}): ${t}`,...n)}}function Hs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Ws(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw zs(e),new Error(e)}function Qs(t,e){t||Ws()}function Xs(t,e){return t}
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
 */const Ys={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Js extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Zs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(qs.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=qs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zs,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ks("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ks("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zs)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ks("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Qs("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Qs(null===t||"string"==typeof t),new qs(t)}}class si{constructor(t,e,n){this.type="FirstParty",this.user=qs.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new si(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(qs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ri{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ks("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ks("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ks("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Ks("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Qs("string"==typeof t.token),this.p=t.token,new ri(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function ci(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */ai.A=-1;class hi{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=ci(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function ui(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class di{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return di.fromMillis(Date.now())}static fromDate(t){return di.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new di(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ui(this.nanoseconds,t.nanoseconds):ui(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class fi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fi(t)}static min(){return new fi(new di(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class yi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ws(),void 0===n?n=t.length-e:n>t.length-e&&Ws(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===yi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vi extends yi{construct(t,e,n){return new vi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Js(Ys.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vi(e)}static emptyPath(){return new vi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ei extends yi{construct(t,e,n){return new Ei(t,e,n)}static isValidIdentifier(t){return wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ei.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ei(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Js(Ys.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Js(Ys.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Js(Ys.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Js(Ys.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ei(e)}static emptyPath(){return new Ei([])}}
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
 */class bi{constructor(t){this.fields=t,t.sort(Ei.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return li(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Ti{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ti(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ti(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ui(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ti.EMPTY_BYTE_STRING=new Ti("");const Ii=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(Qs(!!t),"string"==typeof t){let e=0;const n=Ii.exec(t);if(Qs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ci(t.seconds),nanos:Ci(t.nanos)}}function Ci(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ai(t){return"string"==typeof t?Ti.fromBase64String(t):Ti.fromUint8Array(t)}
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
 */function Ni(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Ni(e)?ki(e):e}function _i(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new di(e.seconds,e.nanos)}
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
 */class Di{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class xi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof xi&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Ri(t){return null==t}function Li(t){return 0===t&&1/t==-1/0}function Oi(t){return"number"==typeof t&&Number.isInteger(t)&&!Li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class Pi{constructor(t){this.path=t}static fromPath(t){return new Pi(vi.fromString(t))}static fromName(t){return new Pi(vi.fromString(t).popFirst(5))}static empty(){return new Pi(vi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===vi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pi(new vi(t.slice()))}}
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
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ni(t)?4:10:Ws()}function Fi(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Si(t.timestampValue),s=Si(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ai(t.bytesValue).isEqual(Ai(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ci(t.geoPointValue.latitude)===Ci(e.geoPointValue.latitude)&&Ci(t.geoPointValue.longitude)===Ci(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ci(t.integerValue)===Ci(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ci(t.doubleValue),s=Ci(e.doubleValue);return n===s?Li(n)===Li(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(pi(n)!==pi(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Fi(n[i],s[i])))return!1;return!0}(t,e);default:return Ws()}}function Ui(t,e){return void 0!==(t.values||[]).find((t=>Fi(t,e)))}function qi(t,e){if(t===e)return 0;const n=Vi(t),s=Vi(e);if(n!==s)return ui(n,s);switch(n){case 0:return 0;case 1:return ui(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ci(t.integerValue||t.doubleValue),s=Ci(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Bi(t.timestampValue,e.timestampValue);case 4:return Bi(_i(t),_i(e));case 5:return ui(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ai(t),s=Ai(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=ui(n[i],s[i]);if(0!==t)return t}return ui(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ui(Ci(t.latitude),Ci(e.latitude));return 0!==n?n:ui(Ci(t.longitude),Ci(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=qi(n[i],s[i]);if(t)return t}return ui(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=ui(s[o],r[o]);if(0!==t)return t;const e=qi(n[s[o]],i[r[o]]);if(0!==e)return e}return ui(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Ws()}}function Bi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ui(t,e);const n=Si(t),s=Si(e),i=ui(n.seconds,s.seconds);return 0!==i?i:ui(n.nanos,s.nanos)}function ji(t){return $i(t)}function $i(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Si(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ai(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Pi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=$i(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${$i(t.fields[i])}`;return n+"}"}(t.mapValue):Ws();var e,n}function Ki(t){return!!t&&"integerValue"in t}function zi(t){return!!t&&"arrayValue"in t}function Gi(t){return!!t&&"nullValue"in t}function Hi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Qi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class Xi{constructor(t){this.value=t}static empty(){return new Xi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qi(e)}setAll(t){let e=Ei.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Qi(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){gi(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Xi(Qi(this.value))}}function Yi(t){const e=[];return gi(t.fields,((t,n)=>{const s=new Ei([t]);if(Wi(n)){const t=Yi(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new bi(e)
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
 */}class Ji{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Ji(t,0,fi.min(),fi.min(),Xi.empty(),0)}static newFoundDocument(t,e,n){return new Ji(t,1,e,fi.min(),n,0)}static newNoDocument(t,e){return new Ji(t,2,e,fi.min(),Xi.empty(),0)}static newUnknownDocument(t,e){return new Ji(t,3,e,fi.min(),Xi.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ji&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ji(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Zi{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Zi.UNKNOWN_ID=-1;
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
class tr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function er(t,e=null,n=[],s=[],i=null,r=null,o=null){return new tr(t,e,n,s,i,r,o)}function nr(t){const e=Xs(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ji(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ji(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ji(t))).join(",")),e.P=t}return e.P}function sr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ji(e.value)}`;var e})).join(", ")}]`),Ri(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ji(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ji(t))).join(",")),`Target(${e})`}function ir(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yr(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Fi(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wr(t.startAt,e.startAt)&&wr(t.endAt,e.endAt)}function rr(t){return Pi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class or extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,n):new ar(t,e,n):"array-contains"===e?new lr(t,n):"in"===e?new dr(t,n):"not-in"===e?new fr(t,n):"array-contains-any"===e?new pr(t,n):new or(t,e,n)}static v(t,e,n){return"in"===e?new cr(t,n):new hr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(qi(e,this.value)):null!==e&&Vi(this.value)===Vi(e)&&this.V(qi(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ws()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ar extends or{constructor(t,e,n){super(t,e,n),this.key=Pi.fromName(n.referenceValue)}matches(t){const e=Pi.comparator(t.key,this.key);return this.V(e)}}class cr extends or{constructor(t,e){super(t,"in",e),this.keys=ur("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hr extends or{constructor(t,e){super(t,"not-in",e),this.keys=ur("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ur(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Pi.fromName(t.referenceValue)))}class lr extends or{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zi(e)&&Ui(e.arrayValue,this.value)}}class dr extends or{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ui(this.value.arrayValue,e)}}class fr extends or{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ui(this.value.arrayValue,e)}}class pr extends or{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ui(this.value.arrayValue,t)))}}class gr{constructor(t,e){this.position=t,this.inclusive=e}}class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function yr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vr(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Pi.comparator(Pi.fromName(o.referenceValue),n.key):qi(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function wr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Er{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function br(t,e,n,s,i,r,o,a){return new Er(t,e,n,s,i,r,o,a)}function Tr(t){return new Er(t)}function Ir(t){return!Ri(t.limit)&&"F"===t.limitType}function Sr(t){return!Ri(t.limit)&&"L"===t.limitType}function Cr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ar(t){for(const e of t.filters)if(e.S())return e.field;return null}function Nr(t){return null!==t.collectionGroup}function kr(t){const e=Xs(t);if(null===e.D){e.D=[];const t=Ar(e),n=Cr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new mr(t)),e.D.push(new mr(Ei.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new mr(Ei.keyField(),t))}}}return e.D}function _r(t){const e=Xs(t);if(!e.C)if("F"===e.limitType)e.C=er(e.path,e.collectionGroup,kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of kr(e)){const e="desc"===i.dir?"asc":"desc";t.push(new mr(i.field,e))}const n=e.endAt?new gr(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new gr(e.startAt.position,!e.startAt.inclusive):null;e.C=er(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function Dr(t,e,n){return new Er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xr(t,e){return ir(_r(t),_r(e))&&t.limitType===e.limitType}function Rr(t){return`${nr(_r(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${sr(_r(t))}; limitType=${t.limitType})`}function Or(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=vr(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,kr(t),e))&&!(t.endAt&&!function(t,e,n){const s=vr(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,kr(t),e))}(t,e)}function Pr(t){return(e,n)=>{let s=!1;for(const i of kr(t)){const t=Mr(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Mr(t,e,n){const s=t.field.isKeyField()?Pi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?qi(s,i):Ws()}
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
 */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ws()}}
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
 */function Vr(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function Fr(t){return{integerValue:""+t}}function Ur(t,e){return Oi(e)?Fr(e):Vr(t,e)}
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
 */class qr{constructor(){this._=void 0}}function Br(t,e,n){return t instanceof Kr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof zr?Gr(t,e):t instanceof Hr?Wr(t,e):function(t,e){const n=$r(t,e),s=Xr(n)+Xr(t.k);return Ki(n)&&Ki(t.k)?Fr(s):Vr(t.O,s)}(t,e)}function jr(t,e,n){return t instanceof zr?Gr(t,e):t instanceof Hr?Wr(t,e):n}function $r(t,e){return t instanceof Qr?Ki(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Kr extends qr{}class zr extends qr{constructor(t){super(),this.elements=t}}function Gr(t,e){const n=Yr(e);for(const s of t.elements)n.some((t=>Fi(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Hr extends qr{constructor(t){super(),this.elements=t}}function Wr(t,e){let n=Yr(e);for(const s of t.elements)n=n.filter((t=>!Fi(t,s)));return{arrayValue:{values:n}}}class Qr extends qr{constructor(t,e){super(),this.O=t,this.k=e}}function Xr(t){return Ci(t.integerValue||t.doubleValue)}function Yr(t){return zi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function Jr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof zr&&e instanceof zr||t instanceof Hr&&e instanceof Hr?li(t.elements,e.elements,Fi):t instanceof Qr&&e instanceof Qr?Fi(t.k,e.k):t instanceof Kr&&e instanceof Kr}(t.transform,e.transform)}class Zr{constructor(t,e){this.version=t,this.transformResults=e}}class to{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new to}static exists(t){return new to(void 0,t)}static updateTime(t){return new to(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function eo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class no{}function so(t,e,n){t instanceof co?function(t,e,n){const s=t.value.clone(),i=lo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!eo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=lo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(uo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n){t instanceof co?function(t,e,n){if(!eo(t.precondition,e))return;const s=t.value.clone(),i=fo(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(ao(e),s).setHasLocalMutations()}(t,e,n):t instanceof ho?function(t,e,n){if(!eo(t.precondition,e))return;const s=fo(t.fieldTransforms,n,e),i=e.data;i.setAll(uo(t)),i.setAll(s),e.convertToFoundDocument(ao(e),i).setHasLocalMutations()}(t,e,n):function(t,e){eo(t.precondition,e)&&e.convertToNoDocument(fi.min())}(t,e)}function ro(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=$r(s.transform,t||null);null!=i&&(null==n&&(n=Xi.empty()),n.set(s.field,i))}return n||null}function oo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&li(t,e,((t,e)=>Jr(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ao(t){return t.isFoundDocument()?t.version:fi.min()}class co extends no{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class ho extends no{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function uo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function lo(t,e,n){const s=new Map;Qs(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,jr(o,a,n[i]))}return s}function fo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Br(t,r,e))}return s}class po extends no{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class go extends no{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */var yo,vo;function wo(t){switch(t){default:return Ws();case Ys.CANCELLED:case Ys.UNKNOWN:case Ys.DEADLINE_EXCEEDED:case Ys.RESOURCE_EXHAUSTED:case Ys.INTERNAL:case Ys.UNAVAILABLE:case Ys.UNAUTHENTICATED:return!1;case Ys.INVALID_ARGUMENT:case Ys.NOT_FOUND:case Ys.ALREADY_EXISTS:case Ys.PERMISSION_DENIED:case Ys.FAILED_PRECONDITION:case Ys.ABORTED:case Ys.OUT_OF_RANGE:case Ys.UNIMPLEMENTED:case Ys.DATA_LOSS:return!0}}function Eo(t){if(void 0===t)return zs("GRPC error has no .code"),Ys.UNKNOWN;switch(t){case yo.OK:return Ys.OK;case yo.CANCELLED:return Ys.CANCELLED;case yo.UNKNOWN:return Ys.UNKNOWN;case yo.DEADLINE_EXCEEDED:return Ys.DEADLINE_EXCEEDED;case yo.RESOURCE_EXHAUSTED:return Ys.RESOURCE_EXHAUSTED;case yo.INTERNAL:return Ys.INTERNAL;case yo.UNAVAILABLE:return Ys.UNAVAILABLE;case yo.UNAUTHENTICATED:return Ys.UNAUTHENTICATED;case yo.INVALID_ARGUMENT:return Ys.INVALID_ARGUMENT;case yo.NOT_FOUND:return Ys.NOT_FOUND;case yo.ALREADY_EXISTS:return Ys.ALREADY_EXISTS;case yo.PERMISSION_DENIED:return Ys.PERMISSION_DENIED;case yo.FAILED_PRECONDITION:return Ys.FAILED_PRECONDITION;case yo.ABORTED:return Ys.ABORTED;case yo.OUT_OF_RANGE:return Ys.OUT_OF_RANGE;case yo.UNIMPLEMENTED:return Ys.UNIMPLEMENTED;case yo.DATA_LOSS:return Ys.DATA_LOSS;default:return Ws()}}(vo=yo||(yo={}))[vo.OK=0]="OK",vo[vo.CANCELLED=1]="CANCELLED",vo[vo.UNKNOWN=2]="UNKNOWN",vo[vo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vo[vo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vo[vo.NOT_FOUND=5]="NOT_FOUND",vo[vo.ALREADY_EXISTS=6]="ALREADY_EXISTS",vo[vo.PERMISSION_DENIED=7]="PERMISSION_DENIED",vo[vo.UNAUTHENTICATED=16]="UNAUTHENTICATED",vo[vo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vo[vo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vo[vo.ABORTED=10]="ABORTED",vo[vo.OUT_OF_RANGE=11]="OUT_OF_RANGE",vo[vo.UNIMPLEMENTED=12]="UNIMPLEMENTED",vo[vo.INTERNAL=13]="INTERNAL",vo[vo.UNAVAILABLE=14]="UNAVAILABLE",vo[vo.DATA_LOSS=15]="DATA_LOSS";
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
class bo{constructor(t,e){this.comparator=t,this.root=e||Io.EMPTY}insert(t,e){return new bo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Io.BLACK,null,null))}remove(t){return new bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Io.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new To(this.root,t,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new To(this.root,t,this.comparator,!0)}}class To{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Io{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Io.RED,this.left=null!=s?s:Io.EMPTY,this.right=null!=i?i:Io.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Io(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Io.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Io.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Io.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Io.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ws();if(this.right.isRed())throw Ws();const t=this.left.check();if(t!==this.right.check())throw Ws();return t+(this.isRed()?0:1)}}Io.EMPTY=null,Io.RED=!0,Io.BLACK=!1,Io.EMPTY=new class{constructor(){this.size=0}get key(){throw Ws()}get value(){throw Ws()}get color(){throw Ws()}get left(){throw Ws()}get right(){throw Ws()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Io(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class So{constructor(t){this.comparator=t,this.data=new bo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(t){return new Co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof So))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new So(this.comparator);return e.data=t,e}}class Co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
const Ao=new bo(Pi.comparator);function No(){return Ao}const ko=new bo(Pi.comparator);function _o(){return ko}const Do=new bo(Pi.comparator),xo=new So(Pi.comparator);function Ro(...t){let e=xo;for(const n of t)e=e.add(n);return e}const Lo=new So(ui);function Oo(){return Lo}
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
 */class Po{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Mo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Po(fi.min(),n,Oo(),No(),Ro())}}class Mo{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Mo(Ti.EMPTY_BYTE_STRING,e,Ro(),Ro(),Ro())}}
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
 */class Vo{constructor(t,e,n,s){this.M=t,this.removedTargetIds=e,this.key=n,this.$=s}}class Fo{constructor(t,e){this.targetId=t,this.F=e}}class Uo{constructor(t,e,n=Ti.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class qo{constructor(){this.B=0,this.L=$o(),this.U=Ti.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Ro(),e=Ro(),n=Ro();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ws()}})),new Mo(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=$o()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Bo{constructor(t){this.nt=t,this.st=new Map,this.it=No(),this.rt=jo(),this.ot=new So(ui)}ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Ws()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.F.count,s=this.wt(e);if(s){const t=s.target;if(rr(t))if(0===n){const n=new Pi(t.path);this.at(e,n,Ji.newNoDocument(n,fi.min()))}else Qs(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&rr(i.target)){const e=new Pi(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.at(s,e,Ji.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=Ro();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new Po(t,e,this.ot,this.it,n);return this.it=No(),this.rt=jo(),this.ot=new So(ui),s}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new qo,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new So(ui),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Ks("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new qo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function jo(){return new bo(Pi.comparator)}function $o(){return new bo(Pi.comparator)}
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
 */const Ko=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),zo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Go{constructor(t,e){this.databaseId=t,this.N=e}}function Ho(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wo(t,e){return t.N?e.toBase64():e.toUint8Array()}function Qo(t,e){return Ho(t,e.toTimestamp())}function Xo(t){return Qs(!!t),fi.fromTimestamp(function(t){const e=Si(t);return new di(e.seconds,e.nanos)}(t))}function Yo(t,e){return function(t){return new vi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Jo(t){const e=vi.fromString(t);return Qs(ba(e)),e}function Zo(t,e){return Yo(t.databaseId,e.path)}function ta(t,e){const n=Jo(e);if(n.get(1)!==t.databaseId.projectId)throw new Js(Ys.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Js(Ys.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pi(ia(n))}function ea(t,e){return Yo(t.databaseId,e)}function na(t){const e=Jo(t);return 4===e.length?vi.emptyPath():ia(e)}function sa(t){return new vi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ia(t){return Qs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ra(t,e,n){return{name:Zo(t,e),fields:n.value.mapValue.fields}}function oa(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ws()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(Qs(void 0===e||"string"==typeof e),Ti.fromBase64String(e||"")):(Qs(void 0===e||e instanceof Uint8Array),Ti.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ys.UNKNOWN:Eo(t.code);return new Js(e,t.message||"")}(o);n=new Uo(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ta(t,s.document.name),r=Xo(s.document.updateTime),o=new Xi({mapValue:{fields:s.document.fields}}),a=Ji.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Vo(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ta(t,s.document),r=s.readTime?Xo(s.readTime):fi.min(),o=Ji.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ta(t,s.document),r=s.removedTargetIds||[];n=new Vo([],r,i,null)}else{if(!("filter"in e))return Ws();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new mo(s),r=t.targetId;n=new Fo(r,i)}}return n}function aa(t,e){let n;if(e instanceof co)n={update:ra(t,e.key,e.value)};else if(e instanceof po)n={delete:Zo(t,e.key)};else if(e instanceof ho)n={update:ra(t,e.key,e.data),updateMask:Ea(e.fieldMask)};else{if(!(e instanceof go))return Ws();n={verify:Zo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Kr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qr)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Ws()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Qo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ws()}(t,e.precondition)),n}function ca(t,e){return t&&t.length>0?(Qs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Xo(t.updateTime):Xo(e);return n.isEqual(fi.min())&&(n=Xo(e)),new Zr(n,t.transformResults||[])}(t,e)))):[]}function ha(t,e){return{documents:[ea(t,e.path)]}}function ua(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=ea(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ea(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Hi(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NAN"}};if(Gi(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Hi(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NAN"}};if(Gi(t.value))return{unaryFilter:{field:ma(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ma(t.field),op:ga(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ma(t.field),direction:pa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Ri(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function la(t){let e=na(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Qs(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=fa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new mr(ya(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ri(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new gr(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new gr(n,e)}(n.endAt)),br(e,i,o,r,a,"F",c,h)}function da(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ws()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function fa(t){return t?void 0!==t.unaryFilter?[wa(t)]:void 0!==t.fieldFilter?[va(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>fa(t))).reduce(((t,e)=>t.concat(e))):Ws():[]}function pa(t){return Ko[t]}function ga(t){return zo[t]}function ma(t){return{fieldPath:t.canonicalString()}}function ya(t){return Ei.fromServerFormat(t.fieldPath)}function va(t){return or.create(ya(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ws()}}(t.fieldFilter.op),t.fieldFilter.value)}function wa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ya(t.unaryFilter.field);return or.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ya(t.unaryFilter.field);return or.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ya(t.unaryFilter.field);return or.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ya(t.unaryFilter.field);return or.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ws()}}function Ea(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ba(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Ta(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sa(e)),e=Ia(t.get(n),e);return Sa(e)}function Ia(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Sa(t){return t+""}class Ca{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ca.store="owner",Ca.key="owner";class Aa{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Aa.store="mutationQueues",Aa.keyPath="userId";class Na{constructor(t,e,n,s,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=s,this.mutations=i}}Na.store="mutations",Na.keyPath="batchId",Na.userMutationsIndex="userMutationsIndex",Na.userMutationsKeyPath=["userId","batchId"];class ka{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Ta(e)]}static key(t,e,n){return[t,Ta(e),n]}}ka.store="documentMutations",ka.PLACEHOLDER=new ka;class _a{constructor(t,e,n,s,i,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=s,this.readTime=i,this.parentPath=r}}_a.store="remoteDocuments",_a.readTimeIndex="readTimeIndex",_a.readTimeIndexPath="readTime",_a.collectionReadTimeIndex="collectionReadTimeIndex",_a.collectionReadTimeIndexPath=["parentPath","readTime"];class Da{constructor(t){this.byteSize=t}}Da.store="remoteDocumentGlobal",Da.key="remoteDocumentGlobalKey";class xa{constructor(t,e,n,s,i,r,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=s,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=r,this.query=o}}xa.store="targets",xa.keyPath="targetId",xa.queryTargetsIndexName="queryTargetsIndex",xa.queryTargetsKeyPath=["canonicalId","targetId"];class Ra{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Ra.store="targetDocuments",Ra.keyPath=["targetId","path"],Ra.documentTargetsIndex="documentTargetsIndex",Ra.documentTargetsKeyPath=["path","targetId"];class La{constructor(t,e,n,s){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=s}}La.key="targetGlobalKey",La.store="targetGlobal";class Oa{constructor(t,e){this.collectionId=t,this.parent=e}}Oa.store="collectionParents",Oa.keyPath=["collectionId","parent"];class Pa{constructor(t,e,n,s){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=s}}Pa.store="clientMetadata",Pa.keyPath="clientId";class Ma{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Ma.store="bundles",Ma.keyPath="bundleId";class Va{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Va.store="namedQueries",Va.keyPath="name";class Fa{constructor(t,e,n){this.indexId=t,this.collectionGroup=e,this.fields=n}}Fa.store="indexConfiguration",Fa.keyPath="indexId",Fa.collectionGroupIndex="collectionGroupIndex",Fa.collectionGroupIndexPath="collectionGroup";class Ua{constructor(t,e,n,s,i,r){this.indexId=t,this.uid=e,this.sequenceNumber=n,this.readTime=s,this.documentKey=i,this.largestBatchId=r}}Ua.store="indexState",Ua.keyPath=["indexId","uid"],Ua.sequenceNumberIndex="sequenceNumberIndex",Ua.sequenceNumberIndexPath=["uid","sequenceNumber"];class qa{constructor(t,e,n,s,i){this.indexId=t,this.uid=e,this.arrayValue=n,this.directionalValue=s,this.documentKey=i}}qa.store="indexEntries",qa.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],qa.documentKeyIndex="documentKeyIndex",qa.documentKeyIndexPath=["indexId","uid","documentKey"];class Ba{constructor(t,e,n,s,i,r){this.userId=t,this.collectionPath=e,this.documentId=n,this.collectionGroup=s,this.largestBatchId=i,this.overlayMutation=r}}Ba.store="documentOverlays",Ba.keyPath=["userId","collectionPath","documentId"],Ba.collectionPathOverlayIndex="collectionPathOverlayIndex",Ba.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],Ba.collectionGroupOverlayIndex="collectionGroupOverlayIndex",Ba.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const ja=[Aa.store,Na.store,ka.store,_a.store,xa.store,Ca.store,La.store,Ra.store,Pa.store,Da.store,Oa.store,Ma.store,Va.store],$a=[...ja,Ba.store],Ka=(Fa.store,Ua.store,qa.store,"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.");
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
 */class Ga{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ws(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ga(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ga?e:Ga.resolve(e)}catch(t){return Ga.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ga.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ga.reject(e)}static resolve(t){return new Ga(((e,n)=>{e(t)}))}static reject(t){return new Ga(((e,n)=>{n(t)}))}static waitFor(t){return new Ga(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Ga.resolve(!1);for(const n of t)e=e.next((t=>t?Ga.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}
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
class Wa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&so(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&io(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&io(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(fi.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ro())}isEqual(t){return this.batchId===t.batchId&&li(this.mutations,t.mutations,((t,e)=>oo(t,e)))&&li(this.baseMutations,t.baseMutations,((t,e)=>oo(t,e)))}}class Qa{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Qs(t.mutations.length===n.length);let s=Do;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Qa(t,e,n,s)}}
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
 */class Ya{constructor(t,e,n,s,i=fi.min(),r=fi.min(),o=Ti.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ya(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ya(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ya(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ja{constructor(t){this.Ht=t}}function Za(t){const e=la({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Dr(e,e.limit,"L"):e}
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
class tc{constructor(){}Xt(t,e){this.Zt(t,e),e.te()}Zt(t,e){if("nullValue"in t)this.ee(e,5);else if("booleanValue"in t)this.ee(e,10),e.ne(t.booleanValue?1:0);else if("integerValue"in t)this.ee(e,15),e.ne(Ci(t.integerValue));else if("doubleValue"in t){const n=Ci(t.doubleValue);isNaN(n)?this.ee(e,13):(this.ee(e,15),Li(n)?e.ne(0):e.ne(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ee(e,20),"string"==typeof n?e.se(n):(e.se(`${n.seconds||""}`),e.ne(n.nanos||0))}else if("stringValue"in t)this.ie(t.stringValue,e),this.re(e);else if("bytesValue"in t)this.ee(e,30),e.oe(Ai(t.bytesValue)),this.re(e);else if("referenceValue"in t)this.ce(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ee(e,45),e.ne(n.latitude||0),e.ne(n.longitude||0)}else"mapValue"in t?Fi(t,Mi)?this.ee(e,Number.MAX_SAFE_INTEGER):(this.ue(t.mapValue,e),this.re(e)):"arrayValue"in t?(this.ae(t.arrayValue,e),this.re(e)):Ws()}ie(t,e){this.ee(e,25),this.he(t,e)}he(t,e){e.se(t)}ue(t,e){const n=t.fields||{};this.ee(e,55);for(const s of Object.keys(n))this.ie(s,e),this.Zt(n[s],e)}ae(t,e){const n=t.values||[];this.ee(e,50);for(const s of n)this.Zt(s,e)}ce(t,e){this.ee(e,37),Pi.fromName(t).path.forEach((t=>{this.ee(e,60),this.he(t,e)}))}ee(t,e){t.ne(e)}re(t){t.ne(2)}}tc.le=new tc;
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
class ec{constructor(){this.xe=new nc}addToCollectionParentIndex(t,e){return this.xe.add(e),Ga.resolve()}getCollectionParents(t,e){return Ga.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return Ga.resolve()}deleteFieldIndex(t,e){return Ga.resolve()}getDocumentsMatchingTarget(t,e,n){return Ga.resolve(Ro())}getFieldIndex(t,e){return Ga.resolve(null)}getFieldIndexes(t,e){return Ga.resolve([])}getNextCollectionGroupToUpdate(t){return Ga.resolve(null)}updateCollectionGroup(t,e,n){return Ga.resolve()}updateIndexEntries(t,e){return Ga.resolve()}}class nc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new So(vi.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new So(vi.comparator)).toArray()}}
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
 */class sc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new sc(t,sc.DEFAULT_COLLECTION_PERCENTILE,sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */sc.DEFAULT_COLLECTION_PERCENTILE=10,sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sc.DEFAULT=new sc(41943040,sc.DEFAULT_COLLECTION_PERCENTILE,sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sc.DISABLED=new sc(-1,0,0);
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
class ic{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new ic(0)}static Je(){return new ic(-1)}}
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
async function rc(t){if(t.code!==Ys.FAILED_PRECONDITION||t.message!==Ka)throw t;Ks("LocalStore","Unexpectedly lost primary lease")}
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
class oc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){gi(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return mi(this.inner)}}
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
 */class ac{constructor(){this.changes=new oc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ji.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ga.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class cc{constructor(t,e,n){this.qn=t,this.gs=e,this.indexManager=n}ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.ps(t,e,n)))}ps(t,e,n){return this.qn.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Is(t,e){t.forEach(((t,n)=>{for(const s of e)s.applyToLocalView(n)}))}Es(t,e){return this.qn.getEntries(t,e).next((e=>this.Ts(t,e).next((()=>e))))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Is(e,t)))}As(t,e,n){return function(t){return Pi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Rs(t,e.path):Nr(e)?this.Ps(t,e,n):this.bs(t,e,n)}Rs(t,e){return this.ys(t,new Pi(e)).next((t=>{let e=_o();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ps(t,e,n){const s=e.collectionGroup;let i=_o();return this.indexManager.getCollectionParents(t,s).next((r=>Ga.forEach(r,(r=>{const o=function(t,e){return new Er(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.bs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}bs(t,e,n){let s;return this.qn.getAll(t,e.path,n).next((n=>(s=n,this.gs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=Ji.newInvalidDocument(n),s=s.insert(n,i)),io(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{Or(e,n)||(s=s.remove(t))})),s)))}}
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
 */class hc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.vs=n,this.Vs=s}static Ss(t,e){let n=Ro(),s=Ro();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hc(t,e.fromCache,n,s)}}
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
 */class uc{Ds(t){this.Cs=t}As(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(fi.min())?this.Ns(t,e):this.Cs.Es(t,s).next((i=>{const r=this.xs(e,i);return(Ir(e)||Sr(e))&&this.ks(e.limitType,r,s,n)?this.Ns(t,e):($s()<=o["in"].DEBUG&&Ks("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Lr(e)),this.Cs.As(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}xs(t,e){let n=new So(Pr(t));return e.forEach(((e,s)=>{Or(t,s)&&(n=n.add(s))})),n}ks(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ns(t,e){return $s()<=o["in"].DEBUG&&Ks("QueryEngine","Using full collection scan to execute query:",Lr(e)),this.Cs.As(t,e,fi.min())}}
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
 */class lc{constructor(t,e,n,s){this.persistence=t,this.Os=e,this.O=s,this.Ms=new bo(ui),this.$s=new oc((t=>nr(t)),ir),this.Fs=fi.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(n)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new cc(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function dc(t,e,n,s){return new lc(t,e,n,s)}async function fc(t,e){const n=Xs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.gs.getAllMutationBatches(t).next((i=>(s=i,n.Ls(e),n.gs.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ro();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.Us.Es(t,o).next((t=>({qs:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function pc(t,e){const n=Xs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Ga.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Qs(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.gs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,s)))}))}function gc(t){const e=Xs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Un.getLastRemoteSnapshotVersion(t)))}function mc(t,e){const n=Xs(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Un.addMatchingKeys(t,r.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Ti.EMPTY_BYTE_STRING,fi.min()).withLastLimboFreeSnapshotVersion(fi.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,h,r)&&o.push(n.Un.updateTargetData(t,h))}));let a=No();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(yc(t,r,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(fi.min())){const e=n.Un.getLastRemoteSnapshotVersion(t).next((e=>n.Un.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ga.waitFor(o).next((()=>r.apply(t))).next((()=>n.Us.Ts(t,a))).next((()=>a))})).then((t=>(n.Ms=i,t)))}function yc(t,e,n){let s=Ro();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=No();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(fi.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Ks("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),s}))}function vc(t,e){const n=Xs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(t,e))))}function wc(t,e){const n=Xs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Un.getTargetData(t,e).next((i=>i?(s=i,Ga.resolve(s)):n.Un.allocateTargetId(t).next((i=>(s=new Ya(e,i,0,t.currentSequenceNumber),n.Un.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ms.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.$s.set(e,t.targetId)),t}))}async function Ec(t,e,n){const s=Xs(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ha(t))throw t;Ks("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ms=s.Ms.remove(e),s.$s.delete(i.target)}function bc(t,e,n){const s=Xs(t);let i=fi.min(),r=Ro();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Xs(t),i=s.$s.get(n);return void 0!==i?Ga.resolve(s.Ms.get(i)):s.Un.getTargetData(e,n)}(s,t,_r(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Os.As(t,e,n?i:fi.min(),n?r:Ro()))).next((t=>({documents:t,Ks:r})))))}
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
class Tc{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,e){return Ga.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var n;return this.Ws.set(e.id,{id:(n=e).id,version:n.version,createTime:Xo(n.createTime)}),Ga.resolve()}getNamedQuery(t,e){return Ga.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,function(t){return{name:t.name,query:Za(t.bundledQuery),readTime:Xo(t.readTime)}}(e)),Ga.resolve()}}
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
 */class Ic{constructor(){this.overlays=new bo(Pi.comparator),this.Hs=new Map}getOverlay(t,e){return Ga.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n=>{this.Yt(t,e,n)})),Ga.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Hs.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Hs.delete(n)),Ga.resolve()}getOverlaysForCollection(t,e,n){const s=new Map,i=e.length+1,r=new Pi(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ga.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new bo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=new Map,i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=new Map,a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(e,t))),o.size>=s)break;return Ga.resolve(o)}Yt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);null!==s&&this.Hs.get(s.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new Xa(e,n));let i=this.Hs.get(e);void 0===i&&(i=new Set,this.Hs.set(e,i)),i.add(n.key)}}
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
 */class Sc{constructor(){this.Js=new So(Cc.Ys),this.Xs=new So(Cc.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,e){const n=new Cc(t,e);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ei(new Cc(t,e))}ni(t,e){t.forEach((t=>this.removeReference(t,e)))}si(t){const e=new Pi(new vi([])),n=new Cc(e,t),s=new Cc(e,t+1),i=[];return this.Xs.forEachInRange([n,s],(t=>{this.ei(t),i.push(t.key)})),i}ii(){this.Js.forEach((t=>this.ei(t)))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new Pi(new vi([])),n=new Cc(e,t),s=new Cc(e,t+1);let i=Ro();return this.Xs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Cc(t,0),n=this.Js.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Cc{constructor(t,e){this.key=t,this.oi=e}static Ys(t,e){return Pi.comparator(t.key,e.key)||ui(t.oi,e.oi)}static Zs(t,e){return ui(t.oi,e.oi)||Pi.comparator(t.key,e.key)}}
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
 */class Ac{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new So(Cc.Ys)}checkEmpty(t){return Ga.resolve(0===this.gs.length)}addMutationBatch(t,e,n,s){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const r=new Wa(i,e,n,s);this.gs.push(r);for(const o of s)this.ui=this.ui.add(new Cc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ga.resolve(r)}lookupMutationBatch(t,e){return Ga.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.hi(n),i=s<0?0:s;return Ga.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return Ga.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return Ga.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Cc(e,0),s=new Cc(e,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,s],(t=>{const e=this.ai(t.oi);i.push(e)})),Ga.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new So(ui);return e.forEach((t=>{const e=new Cc(t,0),s=new Cc(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,s],(t=>{n=n.add(t.oi)}))})),Ga.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Pi.isDocumentKey(i)||(i=i.child(""));const r=new Cc(new Pi(i),0);let o=new So(ui);return this.ui.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.oi)),!0)}),r),Ga.resolve(this.li(o))}li(t){const e=[];return t.forEach((t=>{const n=this.ai(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Qs(0===this.fi(e.batchId,"removed")),this.gs.shift();let n=this.ui;return Ga.forEach(e.mutations,(s=>{const i=new Cc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ui=n}))}Qe(t){}containsKey(t,e){const n=new Cc(e,0),s=this.ui.firstAfterOrEqual(n);return Ga.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.gs.length,Ga.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}}
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
 */class Nc{constructor(t){this.di=t,this.docs=new bo(Pi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.di(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ga.resolve(n?n.document.mutableCopy():Ji.newInvalidDocument(e))}getEntries(t,e){let n=No();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ji.newInvalidDocument(t))})),Ga.resolve(n)}getAll(t,e,n){let s=No();const i=new Pi(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||i.readTime.compareTo(n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Ga.resolve(s)}_i(t,e){return Ga.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new kc(this)}getSize(t){return Ga.resolve(this.size)}}class kc extends ac{constructor(t){super(),this.Tn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Tn.addEntry(t,s)):this.Tn.removeEntry(n)})),Ga.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}}
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
 */class _c{constructor(t){this.persistence=t,this.wi=new oc((t=>nr(t)),ir),this.lastRemoteSnapshotVersion=fi.min(),this.highestTargetId=0,this.mi=0,this.gi=new Sc,this.targetCount=0,this.yi=ic.He()}forEachTarget(t,e){return this.wi.forEach(((t,n)=>e(n))),Ga.resolve()}getLastRemoteSnapshotVersion(t){return Ga.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ga.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),Ga.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.mi&&(this.mi=e),Ga.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new ic(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,Ga.resolve()}updateTargetData(t,e){return this.Ze(e),Ga.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,Ga.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.wi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.wi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ga.waitFor(i).next((()=>s))}getTargetCount(t){return Ga.resolve(this.targetCount)}getTargetData(t,e){const n=this.wi.get(e)||null;return Ga.resolve(n)}addMatchingKeys(t,e,n){return this.gi.ti(e,n),Ga.resolve()}removeMatchingKeys(t,e,n){this.gi.ni(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Ga.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),Ga.resolve()}getMatchingKeysForTargetId(t,e){const n=this.gi.ri(e);return Ga.resolve(n)}containsKey(t,e){return Ga.resolve(this.gi.containsKey(e))}}
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
 */class Dc{constructor(t,e){this.pi={},this.overlays={},this.Nn=new ai(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new _c(this),this.indexManager=new ec,this.qn=function(t){return new Nc(t)}((t=>this.referenceDelegate.Ii(t))),this.O=new Ja(e),this.Kn=new Tc(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ic,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.pi[t.toKey()];return n||(n=new Ac(e,this.referenceDelegate),this.pi[t.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,n){Ks("MemoryPersistence","Starting transaction:",t);const s=new xc(this.Nn.next());return this.referenceDelegate.Ei(),n(s).next((t=>this.referenceDelegate.Ti(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ai(t,e){return Ga.or(Object.values(this.pi).map((n=>()=>n.containsKey(t,e))))}}class xc extends za{constructor(t){super(),this.currentSequenceNumber=t}}class Rc{constructor(t){this.persistence=t,this.Ri=new Sc,this.Pi=null}static bi(t){return new Rc(t)}get vi(){if(this.Pi)return this.Pi;throw Ws()}addReference(t,e,n){return this.Ri.addReference(n,e),this.vi.delete(n.toString()),Ga.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.vi.add(n.toString()),Ga.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),Ga.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach((t=>this.vi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.vi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ga.forEach(this.vi,(n=>{const s=Pi.fromPath(n);return this.Vi(t,s).next((t=>{t||e.removeEntry(s,fi.min())}))})).next((()=>(this.Pi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Vi(t,e).next((t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())}))}Ii(t){return 0}Vi(t,e){return Ga.or([()=>Ga.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}
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
 */class Lc{constructor(){this.activeTargetIds=Oo()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Oc{constructor(){this._r=new Lc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,n){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new Lc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Mc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){Ks("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){Ks("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */class Uc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,e,n,s,i){const r=this.$r(t,e);Ks("RestConnection","Sending: ",r,n);const o={};return this.Fr(o,s,i),this.Br(t,r,o,n).then((t=>(Ks("RestConnection","Received: ",t),t)),(e=>{throw Gs("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}Lr(t,e,n,s,i){return this.Mr(t,e,n,s,i)}Fr(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Bs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}$r(t,e){const n=Vc[t];return`${this.kr}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,e,n,s){return new Promise(((i,r)=>{const o=new Fs;o.listenOnce(Ls.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rs.NO_ERROR:const e=o.getResponseJson();Ks("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Rs.TIMEOUT:Ks("Connection",'RPC "'+t+'" timed out'),r(new Js(Ys.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const n=o.getStatus();if(Ks("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ys).indexOf(e)>=0?e:Ys.UNKNOWN}(t.status);r(new Js(e,t.message))}else r(new Js(Ys.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Js(Ys.UNAVAILABLE,"Connection failed."));break;default:Ws()}}finally{Ks("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Ur(t,e,n){const s=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ds(),r=xs(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ms({})),this.Fr(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");Ks("Connection","Creating WebChannel: "+c,o);const h=i.createWebChannel(c,o);let u=!1,l=!1;const d=new Fc({Ar:t=>{l?Ks("Connection","Not sending because WebChannel is closed:",t):(u||(Ks("Connection","Opening WebChannel transport."),h.open(),u=!0),Ks("Connection","WebChannel sending:",t),h.send(t))},Rr:()=>h.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(h,Vs.EventType.OPEN,(()=>{l||Ks("Connection","WebChannel transport opened.")})),f(h,Vs.EventType.CLOSE,(()=>{l||(l=!0,Ks("Connection","WebChannel transport closed"),d.Cr())})),f(h,Vs.EventType.ERROR,(t=>{l||(l=!0,Gs("Connection","WebChannel transport errored:",t),d.Cr(new Js(Ys.UNAVAILABLE,"The operation could not be completed")))})),f(h,Vs.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Qs(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Ks("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=yo[t];if(void 0!==e)return Eo(e)}(t),n=i.message;void 0===e&&(e=Ys.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.Cr(new Js(e,n)),h.close()}else Ks("Connection","WebChannel received:",n),d.Nr(n)}})),f(r,Os.STAT_EVENT,(t=>{t.stat===Ps.PROXY?Ks("Connection","Detected buffering proxy"):t.stat===Ps.NOPROXY&&Ks("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Dr()}),0),d}}
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
 */function qc(){return"undefined"!=typeof document?document:null}
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
 */function Bc(t){return new Go(t,!0)}class jc{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Sn=t,this.timerId=e,this.qr=n,this.Kr=s,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),s=Math.max(0,e-n);s>0&&Ks("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,(()=>(this.Wr=Date.now(),t()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
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
 */class $c{constructor(t,e,n,s,i,r,o,a){this.Sn=t,this.Xr=n,this.Zr=s,this.eo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new jc(t,e)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===Ys.RESOURCE_EXHAUSTED?(zs(e.toString()),zs("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===Ys.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.no===e&&this.po(t,n)}),(e=>{t((()=>{const t=new Js(Ys.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)}))}))}po(t,e){const n=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((t=>{n((()=>this.Io(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(t){return Ks("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget((()=>this.no===t?e():(Ks("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Kc extends $c{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.O=i}Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=oa(this.O,t),n=function(t){if(!("targetChange"in t))return fi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fi.min():e.readTime?Xo(e.readTime):fi.min()}(t);return this.listener.To(e,n)}Ao(t){const e={};e.database=sa(this.O),e.addTarget=function(t,e){let n;const s=e.target;return n=rr(s)?{documents:ha(t,s)}:{query:ua(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Wo(t,e.resumeToken):e.snapshotVersion.compareTo(fi.min())>0&&(n.readTime=Ho(t,e.snapshotVersion.toTimestamp())),n}(this.O,t);const n=da(this.O,t);n&&(e.labels=n),this.fo(e)}Ro(t){const e={};e.database=sa(this.O),e.removeTarget=t,this.fo(e)}}class zc extends $c{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(Qs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const e=ca(t.writeResults,t.commitTime),n=Xo(t.commitTime);return this.listener.Vo(n,e)}return Qs(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=sa(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>aa(this.O,t)))};this.fo(e)}}
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
 */class Gc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=n,this.O=s,this.Co=!1}No(){if(this.Co)throw new Js(Ys.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.eo.Mr(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ys.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Js(Ys.UNKNOWN,t.toString())}))}Lr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.eo.Lr(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ys.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Js(Ys.UNKNOWN,t.toString())}))}terminate(){this.Co=!0}}class Hc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(zs(e),this.Oo=!1):Ks("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
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
 */class Wc{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr((t=>{n.enqueueAndForget((async()=>{sh(this)&&(Ks("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xs(t);e.Ko.add(4),await Xc(e),e.Qo.set("Unknown"),e.Ko.delete(4),await Qc(e)}(this))}))})),this.Qo=new Hc(n,s)}}async function Qc(t){if(sh(t))for(const e of t.Go)await e(!0)}async function Xc(t){for(const e of t.Go)await e(!1)}function Yc(t,e){const n=Xs(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),nh(n)?eh(n):bh(n).co()&&Zc(n,e))}function Jc(t,e){const n=Xs(t),s=bh(n);n.qo.delete(e),s.co()&&th(n,e),0===n.qo.size&&(s.co()?s.ho():sh(n)&&n.Qo.set("Unknown"))}function Zc(t,e){t.Wo.Z(e.targetId),bh(t).Ao(e)}function th(t,e){t.Wo.Z(e),bh(t).Ro(e)}function eh(t){t.Wo=new Bo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),bh(t).start(),t.Qo.Mo()}function nh(t){return sh(t)&&!bh(t).oo()&&t.qo.size>0}function sh(t){return 0===Xs(t).Ko.size}function ih(t){t.Wo=void 0}async function rh(t){t.qo.forEach(((e,n)=>{Zc(t,e)}))}async function oh(t,e){ih(t),nh(t)?(t.Qo.Bo(e),eh(t)):t.Qo.set("Unknown")}async function ah(t,e,n){if(t.Qo.set("Online"),e instanceof Uo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.qo.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.qo.delete(s),t.Wo.removeTarget(s))}(t,e)}catch(n){Ks("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ch(t,n)}else if(e instanceof Vo?t.Wo.ct(e):e instanceof Fo?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(fi.min()))try{const e=await gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Wo.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qo.get(s);i&&t.qo.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qo.get(e);if(!n)return;t.qo.set(e,n.withResumeToken(Ti.EMPTY_BYTE_STRING,n.snapshotVersion)),th(t,e);const s=new Ya(n.target,e,1,n.sequenceNumber);Zc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ks("RemoteStore","Failed to raise snapshot:",e),await ch(t,e)}}async function ch(t,e,n){if(!Ha(e))throw e;t.Ko.add(1),await Xc(t),t.Qo.set("Offline"),n||(n=()=>gc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ks("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Qc(t)}))}function hh(t,e){return e().catch((n=>ch(t,n,e)))}async function uh(t){const e=Xs(t),n=Th(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;lh(e);)try{const t=await vc(e.localStore,s);if(null===t){0===e.Uo.length&&n.ho();break}s=t.batchId,dh(e,t)}catch(t){await ch(e,t)}fh(e)&&ph(e)}function lh(t){return sh(t)&&t.Uo.length<10}function dh(t,e){t.Uo.push(e);const n=Th(t);n.co()&&n.bo&&n.vo(e.mutations)}function fh(t){return sh(t)&&!Th(t).oo()&&t.Uo.length>0}function ph(t){Th(t).start()}async function gh(t){Th(t).Do()}async function mh(t){const e=Th(t);for(const n of t.Uo)e.vo(n.mutations)}async function yh(t,e,n){const s=t.Uo.shift(),i=Qa.from(s,e,n);await hh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await uh(t)}async function vh(t,e){e&&Th(t).bo&&await async function(t,e){if(n=e.code,wo(n)&&n!==Ys.ABORTED){const n=t.Uo.shift();Th(t).ao(),await hh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await uh(t)}var n}(t,e),fh(t)&&ph(t)}async function wh(t,e){const n=Xs(t);n.asyncQueue.verifyOperationInProgress(),Ks("RemoteStore","RemoteStore received new credentials");const s=sh(n);n.Ko.add(3),await Xc(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Qc(n)}async function Eh(t,e){const n=Xs(t);e?(n.Ko.delete(2),await Qc(n)):e||(n.Ko.add(2),await Xc(n),n.Qo.set("Unknown"))}function bh(t){return t.zo||(t.zo=function(t,e,n){const s=Xs(t);return s.No(),new Kc(e,s.eo,s.authCredentials,s.appCheckCredentials,s.O,n)
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
 */}(t.datastore,t.asyncQueue,{Pr:rh.bind(null,t),vr:oh.bind(null,t),To:ah.bind(null,t)}),t.Go.push((async e=>{e?(t.zo.ao(),nh(t)?eh(t):t.Qo.set("Unknown")):(await t.zo.stop(),ih(t))}))),t.zo}function Th(t){return t.Ho||(t.Ho=function(t,e,n){const s=Xs(t);return s.No(),new zc(e,s.eo,s.authCredentials,s.appCheckCredentials,s.O,n)}(t.datastore,t.asyncQueue,{Pr:gh.bind(null,t),vr:vh.bind(null,t),So:mh.bind(null,t),Vo:yh.bind(null,t)}),t.Go.push((async e=>{e?(t.Ho.ao(),await uh(t)):(await t.Ho.stop(),t.Uo.length>0&&(Ks("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))}))),t.Ho
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
 */}class Ih{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Ih(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Js(Ys.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(zs("AsyncQueue",`${e}: ${t}`),Ha(t))return new Js(Ys.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Ch{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pi.comparator(e.key,n.key):(t,e)=>Pi.comparator(t.key,e.key),this.keyedMap=_o(),this.sortedSet=new bo(this.comparator)}static emptySet(t){return new Ch(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ch))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ch;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Ah{constructor(){this.Jo=new bo(Pi.comparator)}track(t){const e=t.doc.key,n=this.Jo.get(e);n?0!==t.type&&3===n.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==n.type?this.Jo=this.Jo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jo=this.Jo.remove(e):1===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):Ws():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Nh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Nh(t,e,Ch.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class kh{constructor(){this.Xo=void 0,this.listeners=[]}}class _h{constructor(){this.queries=new oc((t=>Rr(t)),xr),this.onlineState="Unknown",this.Zo=new Set}}async function Dh(t,e){const n=Xs(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kh),i)try{r.Xo=await n.onListen(s)}catch(t){const n=Sh(t,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&Oh(n)}async function xh(t,e){const n=Xs(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Rh(t,e){const n=Xs(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ec(i)&&(s=!0);e.Xo=i}}s&&Oh(n)}function Lh(t,e,n){const s=Xs(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Oh(t){t.Zo.forEach((t=>{t.next()}))}class Ph{constructor(t,e,n){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Nh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uc||!n)&&(!t.docs.isEmpty()||"Offline"===e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=Nh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}
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
class Mh{constructor(t){this.key=t}}class Vh{constructor(t){this.key=t}}class Fh{constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=Ro(),this.mutatedKeys=Ro(),this.mc=Pr(t),this.gc=new Ch(this.mc)}get yc(){return this.dc}Ic(t,e){const n=e?e.Ec:new Ah,s=e?e.gc:this.gc;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Ir(this.query)&&s.size===this.query.limit?s.last():null,c=Sr(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=Or(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Tc(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.mc(u,a)>0||c&&this.mc(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Ir(this.query)||Sr(this.query))for(;r.size>this.query.limit;){const t=Ir(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{gc:r,Ec:n,ks:o,mutatedKeys:i}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const i=t.Ec.Yo();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ws()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.mc(t.doc,e.doc))),this.Ac(n);const r=e?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==i.length||a?{snapshot:new Nh(this.query,t.gc,s,i,t.mutatedKeys,0===o,a,!1),Pc:r}:{Pc:r}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Ah,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach((t=>this.dc=this.dc.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.dc=this.dc.delete(t))),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=Ro(),this.gc.forEach((t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))}));const e=[];return t.forEach((t=>{this.wc.has(t)||e.push(new Vh(t))})),this.wc.forEach((n=>{t.has(n)||e.push(new Mh(n))})),e}vc(t){this.dc=t.Ks,this.wc=Ro();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return Nh.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Uh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class qh{constructor(t){this.key=t,this.Sc=!1}}class Bh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Dc={},this.Cc=new oc((t=>Rr(t)),xr),this.Nc=new Map,this.xc=new Set,this.kc=new bo(Pi.comparator),this.Oc=new Map,this.Mc=new Sc,this.$c={},this.Fc=new Map,this.Bc=ic.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function jh(t,e){const n=au(t);let s,i;const r=n.Cc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const t=await wc(n.localStore,_r(e));n.isPrimaryClient&&Yc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await $h(n,e,s,"current"===r)}return i}async function $h(t,e,n,s){t.Uc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Ic(n);i.ks&&(i=await bc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ic(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return eu(t,e.targetId,o.Pc),o.snapshot}(t,e,n,s);const i=await bc(t.localStore,e,!0),r=new Fh(e,i.Ks),o=r.Ic(i.documents),a=Mo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);eu(t,n,c.Pc);const h=new Uh(e,n,r);return t.Cc.set(e,h),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function Kh(t,e){const n=Xs(t),s=n.Cc.get(e),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter((t=>!xr(t,e)))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ec(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Jc(n.remoteStore,s.targetId),Zh(n,s.targetId)})).catch(rc)):(Zh(n,s.targetId),await Ec(n.localStore,s.targetId,!0))}async function zh(t,e,n){const s=cu(t);try{const t=await function(t,e){const n=Xs(t),s=di.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ro());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Us.Es(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=ro(t,r.get(t.key));null!=e&&o.push(new ho(t.key,e,Yi(e.value.mapValue),to.exists(!0)))}return n.gs.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.$c[t.currentUser.toKey()];s||(s=new bo(ui)),s=s.insert(e,n),t.$c[t.currentUser.toKey()]=s}(s,t.batchId,n),await iu(s,t.changes),await uh(s.remoteStore)}catch(t){const e=Sh(t,"Failed to persist write");n.reject(e)}}async function Gh(t,e){const n=Xs(t);try{const t=await mc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Oc.get(e);s&&(Qs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Sc=!0:t.modifiedDocuments.size>0?Qs(s.Sc):t.removedDocuments.size>0&&(Qs(s.Sc),s.Sc=!1))})),await iu(n,t,e)}catch(t){await rc(t)}}function Hh(t,e,n){const s=Xs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Cc.forEach(((n,s)=>{const i=s.view.tc(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Xs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.tc(e)&&(s=!0)})),s&&Oh(n)}(s.eventManager,e),t.length&&s.Dc.To(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Wh(t,e,n){const s=Xs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Oc.get(e),r=i&&i.key;if(r){let t=new bo(Pi.comparator);t=t.insert(r,Ji.newNoDocument(r,fi.min()));const n=Ro().add(r),i=new Po(fi.min(),new Map,new So(ui),t,n);await Gh(s,i),s.kc=s.kc.remove(r),s.Oc.delete(e),su(s)}else await Ec(s.localStore,e,!1).then((()=>Zh(s,e,n))).catch(rc)}async function Qh(t,e){const n=Xs(t),s=e.batch.batchId;try{const t=await pc(n.localStore,e);Jh(n,s,null),Yh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await iu(n,t)}catch(t){await rc(t)}}async function Xh(t,e,n){const s=Xs(t);try{const t=await function(t,e){const n=Xs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.gs.lookupMutationBatch(t,e).next((e=>(Qs(null!==e),s=e.keys(),n.gs.removeMutationBatch(t,e)))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,s)))}))}(s.localStore,e);Jh(s,e,n),Yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await iu(s,t)}catch(n){await rc(n)}}function Yh(t,e){(t.Fc.get(e)||[]).forEach((t=>{t.resolve()})),t.Fc.delete(e)}function Jh(t,e,n){const s=Xs(t);let i=s.$c[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.$c[s.currentUser.toKey()]=i}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach((e=>{t.Mc.containsKey(e)||tu(t,e)}))}function tu(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);null!==n&&(Jc(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),su(t))}function eu(t,e,n){for(const s of n)s instanceof Mh?(t.Mc.addReference(s.key,e),nu(t,s)):s instanceof Vh?(Ks("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||tu(t,s.key)):Ws()}function nu(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(Ks("SyncEngine","New document in limbo: "+n),t.xc.add(s),su(t))}function su(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new Pi(vi.fromString(e)),s=t.Bc.next();t.Oc.set(s,new qh(n)),t.kc=t.kc.insert(n,s),Yc(t.remoteStore,new Ya(_r(Tr(n.path)),s,2,ai.A))}}async function iu(t,e,n){const s=Xs(t),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach(((t,a)=>{o.push(s.Uc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=hc.Ss(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Dc.To(i),await async function(t,e){const n=Xs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ga.forEach(e,(e=>Ga.forEach(e.vs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ga.forEach(e.Vs,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ha(t))throw t;Ks("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ms.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ms=n.Ms.insert(t,i)}}}(s.localStore,r))}async function ru(t,e){const n=Xs(t);if(!n.currentUser.isEqual(e)){Ks("SyncEngine","User change. New user:",e.toKey());const t=await fc(n.localStore,e);n.currentUser=e,function(t,e){t.Fc.forEach((t=>{t.forEach((t=>{t.reject(new Js(Ys.CANCELLED,e))}))})),t.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await iu(n,t.qs)}}function ou(t,e){const n=Xs(t),s=n.Oc.get(e);if(s&&s.Sc)return Ro().add(s.key);{let t=Ro();const s=n.Nc.get(e);if(!s)return t;for(const e of s){const s=n.Cc.get(e);t=t.unionWith(s.view.yc)}return t}}function au(t){const e=Xs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ou.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wh.bind(null,e),e.Dc.To=Rh.bind(null,e.eventManager),e.Dc.qc=Lh.bind(null,e.eventManager),e}function cu(t){const e=Xs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xh.bind(null,e),e}class hu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=Bc(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return dc(this.persistence,new uc,t.initialUser,this.O)}jc(t){return new Dc(Rc.bi,this.O)}Gc(t){return new Oc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Hh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ru.bind(null,this.syncEngine),await Eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _h}createDatastore(t){const e=Bc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Uc(s));var s;return function(t,e,n,s){return new Gc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Hh(this.syncEngine,t,0),r=Mc.Vt()?new Mc:new Pc,new Wc(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Bh(t,e,n,s,i,r);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xs(t);Ks("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await Xc(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
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
class du{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=qs.UNAUTHENTICATED,this.clientId=hi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ks("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ks("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Js(Ys.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),Ks("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await fc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function pu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gu(t);Ks("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>wh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>wh(e.remoteStore,n))),t.onlineComponents=e}async function gu(t){return t.offlineComponents||(Ks("FirestoreClient","Using default OfflineComponentProvider"),await fu(t,new hu)),t.offlineComponents}async function mu(t){return t.onlineComponents||(Ks("FirestoreClient","Using default OnlineComponentProvider"),await pu(t,new uu)),t.onlineComponents}function yu(t){return mu(t).then((t=>t.syncEngine))}async function vu(t){const e=await mu(t),n=e.eventManager;return n.onListen=jh.bind(null,e.syncEngine),n.onUnlisten=Kh.bind(null,e.syncEngine),n}function wu(t,e,n={}){const s=new Zs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new lu({next:r=>{e.enqueueAndForget((()=>xh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Js(Ys.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Js(Ys.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Ph(Tr(n.path),r,{includeMetadataChanges:!0,uc:!0});return Dh(t,o)}(await vu(t),t.asyncQueue,e,n,s))),s.promise}const Eu=new Map;
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
 */function bu(t,e,n){if(!n)throw new Js(Ys.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tu(t,e,n,s){if(!0===e&&!0===s)throw new Js(Ys.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iu(t){if(!Pi.isDocumentKey(t))throw new Js(Ys.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Su(t){if(Pi.isDocumentKey(t))throw new Js(Ys.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ws()}function Au(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Js(Ys.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cu(t);throw new Js(Ys.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Nu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Js(Ys.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Js(Ys.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class ku{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,t instanceof xi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Js(Ys.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId)}(t))}get app(){if(!this._app)throw new Js(Ys.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Js(Ys.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Qs(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Js(Ys.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Eu.get(t);e&&(Ks("ComponentProvider","Removing Datastore"),Eu.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class _u{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _u(this.firestore,t,this._key)}}class Du{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Du(this.firestore,t,this._query)}}class xu extends Du{constructor(t,e,n){super(t,e,Tr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _u(this.firestore,null,new Pi(t))}withConverter(t){return new xu(this.firestore,t,this._path)}}function Ru(t,e,...n){if(t=(0,a.m9)(t),bu("collection","path",e),t instanceof ku){const s=vi.fromString(e,...n);return Su(s),new xu(t,null,s)}{if(!(t instanceof _u||t instanceof xu))throw new Js(Ys.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(vi.fromString(e,...n));return Su(s),new xu(t.firestore,null,s)}}function Lu(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=hi.R()),bu("doc","path",e),t instanceof ku){const s=vi.fromString(e,...n);return Iu(s),new _u(t,null,new Pi(s))}{if(!(t instanceof _u||t instanceof xu))throw new Js(Ys.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(vi.fromString(e,...n));return Iu(s),new _u(t.firestore,t instanceof xu?t.converter:null,new Pi(s))}}
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
class Ou{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new jc(this,"async_queue_retry"),this.yu=()=>{const t=qc();t&&Ks("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=qc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=qc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise((()=>{}));const e=new Zs;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.lu.push(t),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(T){if(!Ha(T))throw T;Ks("AsyncQueue","Operation failed with retryable error: "+T)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(t){const e=this.hu.then((()=>(this.wu=!0,t().catch((t=>{this._u=t,this.wu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw zs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.wu=!1,t))))));return this.hu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const s=Ih.createAndSchedule(this,t,e,n,(t=>this.Tu(t)));return this.du.push(s),s}pu(){this._u&&Ws()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()}))}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function Pu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}
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
 */(t,["next","error","complete"])}class Mu extends ku{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ou,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uu(this),this._firestoreClient.terminate()}}function Vu(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function Fu(t){return t._firestoreClient||Uu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uu(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Di(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new du(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class qu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Js(Ys.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ei(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Bu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bu(Ti.fromBase64String(t))}catch(t){throw new Js(Ys.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Bu(Ti.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class $u{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Js(Ys.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Js(Ys.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ui(this._lat,t._lat)||ui(this._long,t._long)}}
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
 */const Ku=/^__.*__$/;class zu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ho(t,this.data,this.fieldMask,e,this.fieldTransforms):new co(t,this.data,e,this.fieldTransforms)}}class Gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ho(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ws()}}class Wu{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.O=n,this.ignoreUndefinedProperties=s,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new Wu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Cu:!1});return s.Nu(t),s}xu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Cu:!1});return s.vu(),s}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return cl(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(Hu(this.Vu)&&Ku.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class Qu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=n||Bc(t)}Fu(t,e,n,s=!1){return new Wu({Vu:t,methodName:e,$u:n,path:Ei.emptyPath(),Cu:!1,Mu:s},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Xu(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new Qu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yu(t,e,n,s,i,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,i);il("Data must be an object, but it was:",o,s);const a=nl(s,o);let c,h;if(r.merge)c=new bi(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=rl(e,s,n);if(!o.contains(i))throw new Js(Ys.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);hl(t,i)||t.push(i)}c=new bi(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new zu(new Xi(a),c,h)}class Ju extends ju{_toFieldTransform(t){if(2!==t.Vu)throw 1===t.Vu?t.Ou(`${this._methodName}() can only appear at the top level of your update data`):t.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ju}}function Zu(t,e,n,s){const i=t.Fu(1,e,n);il("Data must be an object, but it was:",i,s);const r=[],o=Xi.empty();gi(s,((t,s)=>{const c=al(e,t,n);s=(0,a.m9)(s);const h=i.xu(c);if(s instanceof Ju)r.push(c);else{const t=el(s,h);null!=t&&(r.push(c),o.set(c,t))}}));const c=new bi(r);return new Gu(o,c,i.fieldTransforms)}function tl(t,e,n,s,i,r){const o=t.Fu(1,e,n),c=[rl(e,s,n)],h=[i];if(r.length%2!=0)throw new Js(Ys.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)c.push(rl(e,r[a])),h.push(r[a+1]);const u=[],l=Xi.empty();for(let f=c.length-1;f>=0;--f)if(!hl(u,c[f])){const t=c[f];let e=h[f];e=(0,a.m9)(e);const n=o.xu(t);if(e instanceof Ju)u.push(t);else{const s=el(e,n);null!=s&&(u.push(t),l.set(t,s))}}const d=new bi(u);return new Gu(l,d,o.fieldTransforms)}function el(t,e){if(sl(t=(0,a.m9)(t)))return il("Unsupported field value:",e,t),nl(t,e);if(t instanceof ju)return function(t,e){if(!Hu(e.Vu))throw e.Ou(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ou(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=el(i,e.ku(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ur(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=di.fromDate(t);return{timestampValue:Ho(e.O,n)}}if(t instanceof di){const n=new di(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ho(e.O,n)}}if(t instanceof $u)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Bu)return{bytesValue:Wo(e.O,t._byteString)};if(t instanceof _u){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yo(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou(`Unsupported field value: ${Cu(t)}`)}(t,e)}function nl(t,e){const n={};return mi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,((t,s)=>{const i=el(s,e.Du(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function sl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof di||t instanceof $u||t instanceof Bu||t instanceof _u||t instanceof ju)}function il(t,e,n){if(!sl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Cu(n);throw"an object"===s?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function rl(t,e,n){if((e=(0,a.m9)(e))instanceof qu)return e._internalPath;if("string"==typeof e)return al(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ol=new RegExp("[~\\*/\\[\\]]");function al(t,e,n){if(e.search(ol)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qu(...e.split("."))._internalPath}catch(s){throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Js(Ys.INVALID_ARGUMENT,a+t+c)}function hl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class ul{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _u(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ll extends ul{data(){return super.data()}}function dl(t,e){return"string"==typeof e?al(t,e):e instanceof qu?e._internalPath:e._delegate._internalPath}
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
 */class fl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pl extends ul{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gl extends pl{data(t={}){return super.data(t)}}class ml{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gl(this._firestore,this._userDataWriter,n.key,n,new fl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Js(Ys.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new gl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new gl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:yl(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ws()}}
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
function vl(t){if(Sr(t)&&0===t.explicitOrderBy.length)throw new Js(Ys.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class wl{convertValue(t,e="none"){switch(Vi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ci(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ai(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ws()}}convertObject(t,e){const n={};return gi(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new $u(Ci(t.latitude),Ci(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_i(t));default:return null}}convertTimestamp(t){const e=Si(t);return new di(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=vi.fromString(t);Qs(ba(n));const s=new xi(n.get(1),n.get(3)),i=new Pi(n.popFirst(5));return s.isEqual(e)||zs(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function El(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
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
function bl(t){t=Au(t,_u);const e=Au(t.firestore,Mu);return wu(Fu(e),t._key).then((n=>Nl(e,t,n)))}class Tl extends wl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _u(this.firestore,null,e)}}function Il(t,e,n){t=Au(t,_u);const s=Au(t.firestore,Mu),i=El(t.converter,e,n);return Al(s,[Yu(Xu(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,to.none())])}function Sl(t,e,n,...s){t=Au(t,_u);const i=Au(t.firestore,Mu),r=Xu(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof qu?tl(r,"updateDoc",t._key,e,n,s):Zu(r,"updateDoc",t._key,e),Al(i,[o.toMutation(t._key,to.exists(!0))])}function Cl(t,...e){var n,s,i;t=(0,a.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Pu(e[o])||(r=e[o],o++);const c={includeMetadataChanges:r.includeMetadataChanges};if(Pu(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let h,u,l;if(t instanceof _u)u=Au(t.firestore,Mu),l=Tr(t._key.path),h={next:n=>{e[o]&&e[o](Nl(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Au(t,Du);u=Au(n.firestore,Mu),l=n._query;const s=new Tl(u);h={next:t=>{e[o]&&e[o](new ml(u,s,n,t))},error:e[o+1],complete:e[o+2]},vl(t._query)}return function(t,e,n,s){const i=new lu(s),r=new Ph(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Dh(await vu(t),r))),()=>{i.Jc(),t.asyncQueue.enqueueAndForget((async()=>xh(await vu(t),r)))}}(Fu(u),l,c,h)}function Al(t,e){return function(t,e){const n=new Zs;return t.asyncQueue.enqueueAndForget((async()=>zh(await yu(t),e,n))),n.promise}(Fu(t),e)}function Nl(t,e,n){const s=n.docs.get(e._key),i=new Tl(t);return new pl(t,i,e._key,s,new fl(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){Bs=t}(i.Jn),(0,i.Xd)(new r.wA("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Mu(s,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Us,"3.4.5",t),(0,i.KN)(Us,"3.4.5","esm2017")}()},7273:function(){},8582:function(){},9846:function(t,e,n){n.d(e,{Z:function(){return o}});n(8582),n(7273);var s=n(144);function i(t){return s.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,i)}})}var r=n(6290),o=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:s}){let i;const{attrs:o}=n;return o&&(n.attrs={},i=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},6428:function(t,e,n){n.d(e,{Z:function(){return p}});var s,i=n(6210),r=n(6952),o=n(9131),a=n(8085),c=n(4589),h=n(144),u=n(3325);function l(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const f=(0,u.Z)(i.Z,r.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,c.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((e=>t[e]));return e&&s[e]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],s=this.getDefaultData();let i="material-icons";const r=t.indexOf("-"),o=r<=-1;o?n.push(t):(i=t.slice(0,r),l(i)&&(i="")),s.class[i]=!0,s.class[t]=!o;const a=this.getSize();return a&&(s.style={fontSize:a}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(n.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},s=this.getSize();s&&(n.style={fontSize:s,height:s,width:s}),this.applyColors(n);const i=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=h.Z.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(t,{data:e,children:n}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(f,e,s?[s]:n)}})},3385:function(t,e,n){n.d(e,{Z:function(){return u}});var s=n(6210),i=n(6952),r=n(3377),o=n(2529),a=n(3712),c=n(8085),h=n(3325),u=(0,h.Z)(s.Z,i.Z,r.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},8083:function(t,e,n){function s(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},c=new IntersectionObserver(((r=[],a)=>{var c;const h=null==(c=t._observe)?void 0:c[n.context._uid];if(!h)return;const u=r.some((t=>t.isIntersecting));!o||s.quiet&&!h.init||s.once&&!u&&!h.init||o(r,a,u),u&&s.once?i(t,e,n):h.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function i(t,e,n){var s;const i=null==(s=t._observe)?void 0:s[n.context._uid];i&&(i.observer.unobserve(t),delete t._observe[n.context._uid])}const r={inserted:s,unbind:i};e["Z"]=r},6210:function(t,e,n){var s=n(144);function i(t){return function(e,n){for(const s in n)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},6952:function(t,e,n){var s=n(144),i=n(1824),r=n(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,i.N6)("style must be an object",this),e):"string"===typeof e.class?((0,i.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,i.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,i.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,s]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},3377:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},2529:function(t,e,n){var s=n(4589),i=n(144);e["Z"]=i.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),n=(0,s.kb)(this.minHeight),i=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),a=(0,s.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),i&&(t.minWidth=i),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},3536:function(t,e,n){n.d(e,{d:function(){return o}});var s=n(144),i=n(4589);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return s.Z.extend({name:"positionable",props:t.length?(0,i.ji)(r,t):r})}e["Z"]=o()},3712:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},9131:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2936:function(t,e,n){n.d(e,{d:function(){return i}});var s=n(144);function i(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const r=i();e["Z"]=r},6290:function(t,e,n){n.d(e,{ZP:function(){return o},ze:function(){return c}});var s=n(4589);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const n of t.split(i.styleList)){let[t,r]=n.split(i.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,s._A)(t)]=r)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=h(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,s.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function c(t,e){return e?t&&t?(0,s.TI)(t).concat(e):e:t}function h(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const s=t[n];for(const t in s)s[t]&&(e[t]?e[t]=[].concat(s[t],e[t]):e[t]=s[t])}return e}},1618:function(t,e,n){n.d(e,{r4:function(){return l},ZP:function(){return d},PR:function(){return u}});n(1703);var s=n(2238),i="firebase",r="9.6.7";
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
(0,s.KN)(i,r,"app");var o=n(5321);const a={apiKey:"AIzaSyAgsznmWJzJZa40GYD3WRnWt7cnSDcrZXg",authDomain:"sellers-b509b.firebaseapp.com",projectId:"sellers-b509b",storageBucket:"sellers-b509b.appspot.com",messagingSenderId:"1037490411128",appId:"1:1037490411128:web:e6111f2582519628d9bf8d",measurementId:"G-65F40DR8FE"},c=(0,s.ZF)(a),h=(0,o.ad)(c);async function u(t){try{console.log("getUserCalled");const e=(0,o.JU)(h,"/users",""+t);return(await(0,o.QT)(e)).data()}catch(e){throw e}}async function l(t,e){try{console.log({payload:e});const n=(0,o.JU)(h,"/users",""+t);if((await(0,o.QT)(n)).data())throw new Error((e&&"seller"===e.type?"Seller":"User")+" already exists");return await(0,o.pl)(n,e)}catch(n){throw n}}var d=h},2238:function(t,e,n){n.d(e,{Jn:function(){return G},qX:function(){return j},Xd:function(){return B},Mq:function(){return W},ZF:function(){return H},KN:function(){return Q}});var s=n(8463),i=n(3333),r=n(4444);
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
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",h="0.7.17",u=new i.Yd("@firebase/app"),l="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",E="@firebase/functions",b="@firebase/functions-compat",T="@firebase/installations",I="@firebase/installations-compat",S="@firebase/messaging",C="@firebase/messaging-compat",A="@firebase/performance",N="@firebase/performance-compat",k="@firebase/remote-config",_="@firebase/remote-config-compat",D="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",L="@firebase/firestore-compat",O="firebase",P="9.6.7",M="[DEFAULT]",V={[c]:"fire-core",[l]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[E]:"fire-fn",[b]:"fire-fn-compat",[T]:"fire-iid",[I]:"fire-iid-compat",[S]:"fire-fcm",[C]:"fire-fcm-compat",[A]:"fire-perf",[N]:"fire-perf-compat",[k]:"fire-rc",[_]:"fire-rc-compat",[D]:"fire-gcs",[x]:"fire-gcs-compat",[R]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[O]:"fire-js-all"},F=new Map,U=new Map;function q(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())q(n,t);return!0}function j(t,e){return t.container.getProvider(e)}
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
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
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
 */const G=P;function H(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw K.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if((0,r.vZ)(t,o.options)&&(0,r.vZ)(n,o.config))return o;throw K.create("duplicate-app",{appName:i})}const a=new s.H0(i);for(const s of U.values())a.addComponent(s);const c=new z(t,n,a);return F.set(i,c),c}function W(t=M){const e=F.get(t);if(!e)throw K.create("no-app",{appName:t});return e}function Q(t,e,n){var i;let r=null!==(i=V[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}B(new s.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
function X(t){B(new s.wA("platform-logger",(t=>new o(t)),"PRIVATE")),Q(c,h,t),Q(c,h,"esm2017"),Q("fire-js","")}X("")},8463:function(t,e,n){n.d(e,{wA:function(){return i},H0:function(){return h}});var s=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&r.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class h{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){n.d(e,{in:function(){return i},Yd:function(){return h}});
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
const s=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const r={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class h{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=147.89397cce.js.map