"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[621],{2877:function(n,t,e){var r=e(3796),a=e(4367),i=(e(1539),e(6699),e(2023),e(2222),e(7941),e(4916),e(5306),e(1532),e(8783),e(3948),e(4747),e(7273),e(144)),o=e(6290),u=e(4589),l=["sm","md","lg","xl"],c=["start","end","center"];function s(n,t){return l.reduce((function(e,r){return e[n+(0,u.jC)(r)]=t(),e}),{})}var d=function(n){return[].concat(c,["baseline","stretch"]).includes(n)},f=s("align",(function(){return{type:String,default:null,validator:d}})),p=function(n){return[].concat(c,["space-between","space-around"]).includes(n)},v=s("justify",(function(){return{type:String,default:null,validator:p}})),g=function(n){return[].concat(c,["space-between","space-around","stretch"]).includes(n)},m=s("alignContent",(function(){return{type:String,default:null,validator:g}})),y={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},Z={align:"align",justify:"justify",alignContent:"align-content"};function j(n,t,e){var r=Z[n];if(null!=e){if(t){var a=t.replace(n,"");r+="-".concat(a)}return r+="-".concat(e),r.toLowerCase()}}var w=new Map;t["Z"]=i.Z.extend({name:"v-row",functional:!0,props:(0,a.Z)((0,a.Z)((0,a.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:g}},m),render:function(n,t){var e=t.props,a=t.data,i=t.children,u="";for(var l in e)u+=String(e[l]);var c=w.get(u);return c||function(){var n,t;for(t in c=[],y)y[t].forEach((function(n){var r=e[n],a=j(t,n,r);a&&c.push(a)}));c.push((n={"no-gutters":e.noGutters,"row--dense":e.dense},(0,r.Z)(n,"align-".concat(e.align),e.align),(0,r.Z)(n,"justify-".concat(e.justify),e.justify),(0,r.Z)(n,"align-content-".concat(e.alignContent),e.alignContent),n)),w.set(u,c)}(),n(e.tag,(0,o.ZP)(a,{staticClass:"row",class:c}),i)}})},9762:function(n,t,e){e(8582);var r=e(4589);t["Z"]=(0,r.Ji)("spacer","div","v-spacer")},494:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Welcome"+n._s(n.currentUser?", "+n.currentUser.id:"")+" !!")]),e("br"),e("article",[n._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam praesentium commodi, dolore sequi minus facilis illo iste perferendis dolores odio officia nisi laudantium voluptas. Impedit fugiat iste fuga provident?")]),e("br"),e("v-row",[e("v-spacer"),e("v-btn",{staticStyle:{margin:"15px"},attrs:{color:"primary",link:"",to:"/user"}},[n._v("Get started")])],1)],1)},a=[],i=e(4367),o=e(629),u={name:"HomeView",computed:(0,i.Z)({},(0,o.rn)("common",["currentUser"]))},l=u,c=e(1001),s=e(3453),d=e.n(s),f=e(3150),p=e(9846),v=e(2877),g=e(9762),m=(0,c.Z)(l,r,a,!1,null,null,null),y=m.exports;d()(m,{VBtn:f.Z,VContainer:p.Z,VRow:v.Z,VSpacer:g.Z})}}]);
//# sourceMappingURL=621-legacy.90e15d8b.js.map