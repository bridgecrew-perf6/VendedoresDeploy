"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[248],{8119:function(t,e,n){var i=n(3150);e["Z"]=i.Z},7426:function(t,e,n){n.d(e,{Z:function(){return f}});var i=n(4367),r=(n(9653),n(2222),n(9826),n(1539),n(4553),n(5500)),o=n(8119),s=n(172),a=n(4622),u=a.y.extend({name:"v-window",directives:{Touch:r.Z},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return(0,i.Z)((0,i.Z)({},a.y.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,n=e?"-reverse":"";return"v-window-".concat(t).concat(n,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i,r,a,u=this,l={click:function(t){t.stopPropagation(),u.changedByDelimiters=!0,n()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},h=null!=(i=null==(r=(a=this.$scopedSlots)[t])?void 0:r.call(a,{on:l,attrs:c}))?i:[this.$createElement(o.Z,{props:{icon:!0},attrs:c,on:l},[this.$createElement(s.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},h)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var r=this.genIcon("next",i,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,i=n-1;return n<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),l=n(7420),c=a.y.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return a.y.options.computed.classes.call(this)}},methods:{genData:a.y.options.methods.genData}}),h=n(4589),d=n(1824),f=u.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},u.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&(0,d.fK)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:u.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(o.Z,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(s.Z,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(c,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(l.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=u.options.render.call(this,t);return e.data.style="height: ".concat((0,h.kb)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},4062:function(t,e,n){n.d(e,{Z:function(){return v}});var i=n(4367),r=n(8625),o=n(7352),s=n(5500),a=n(4589),u=n(3325),l=(0,u.Z)(r.Z,(0,o.d)("windowGroup","v-window-item","v-window")),c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,a.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=(0,a.kb)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),h=n(7047),d=n(6505),f=(0,u.Z)(c,d.Z),v=f.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(h.Z,{staticClass:"v-carousel__item",props:(0,i.Z)((0,i.Z)({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,a.z9)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}})},2102:function(t,e,n){var i=n(3796),r=n(4367),o=(n(1539),n(9653),n(7941),n(4916),n(5306),n(1532),n(8783),n(3948),n(6699),n(4747),n(6755),n(7273),n(144)),s=n(6290),a=n(4589),u=["sm","md","lg","xl"],l=function(){return u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),c=function(){return u.reduce((function(t,e){return t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return u.reduce((function(t,e){return t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(c),order:Object.keys(h)};function f(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["Z"]=o.Z.extend({name:"v-col",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,o=e.children,a=(e.parent,"");for(var u in n)a+=String(n[u]);var l=v.get(a);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var i=n[t],r=f(e,t,i);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},(0,i.Z)(t,"col-".concat(n.cols),n.cols),(0,i.Z)(t,"offset-".concat(n.offset),n.offset),(0,i.Z)(t,"order-".concat(n.order),n.order),(0,i.Z)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(a,l)}(),t(n.tag,(0,s.ZP)(r,{class:l}),o)}})},2877:function(t,e,n){var i=n(3796),r=n(4367),o=(n(1539),n(6699),n(2023),n(2222),n(7941),n(4916),n(5306),n(1532),n(8783),n(3948),n(4747),n(7273),n(144)),s=n(6290),a=n(4589),u=["sm","md","lg","xl"],l=["start","end","center"];function c(t,e){return u.reduce((function(n,i){return n[t+(0,a.jC)(i)]=e(),n}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=c("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=c("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=c("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},w={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var i=w[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var x=new Map;e["Z"]=o.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,r=e.data,o=e.children,a="";for(var u in n)a+=String(n[u]);var l=x.get(a);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var i=n[t],r=y(e,t,i);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},(0,i.Z)(t,"align-".concat(n.align),n.align),(0,i.Z)(t,"justify-".concat(n.justify),n.justify),(0,i.Z)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(a,l)}(),t(n.tag,(0,s.ZP)(r,{staticClass:"row",class:l}),o)}})},5500:function(t,e,n){n(1539),n(4747);var i=n(4589),r=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,r=t.touchendY,o=.5,s=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&n<e-s&&t.left(t),t.right&&n>e+s&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&r<i-s&&t.up(t),t.down&&r>i+s&&t.down(t))};function o(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function s(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}function a(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return o(t,e)},touchend:function(t){return s(t,e)},touchmove:function(t){return a(t,e)}}}function l(t,e,n){var r=e.value,o=r.parent?t.parentElement:t,s=r.options||{passive:!0};if(o){var a=u(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[n.context._uid]=a,(0,i.XP)(a).forEach((function(t){o.addEventListener(t,a[t],s)}))}}function c(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var o=r._touchHandlers[n.context._uid];(0,i.XP)(o).forEach((function(t){r.removeEventListener(t,o[t])})),delete r._touchHandlers[n.context._uid]}}var h={inserted:l,unbind:c};e["Z"]=h},920:function(t,e,n){n.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{height:"400px"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v(" "+t._s(t.text||"Loading...")+" ")]),n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{color:t.color||"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)},r=[],o={props:{text:String,color:String}},s=o,a=n(1001),u=n(3453),l=n.n(u),c=n(2102),h=n(9846),d=n(7003),f=n(2877),v=(0,a.Z)(s,i,r,!1,null,null,null),p=v.exports;l()(v,{VCol:c.Z,VContainer:h.Z,VProgressLinear:d.Z,VRow:f.Z})}}]);
//# sourceMappingURL=248-legacy.dfac9d98.js.map