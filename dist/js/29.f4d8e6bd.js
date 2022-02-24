"use strict";(self["webpackChunkvendedores"]=self["webpackChunkvendedores"]||[]).push([[29],{3099:function(t,e,s){s.d(e,{Z:function(){return u}});var r=s(6428),i=s(6952),n=s(8085),o=s(2936),a=s(6591),l=s(3536),c=s(3325),d=s(4589),u=(0,c.Z)(i.Z,(0,l.d)(["left","bottom"]),n.Z,o.Z,a.Z).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,d.kb)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),r=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r},genBadgeContent(){if(this.dot)return;const t=(0,d.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(r.Z,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],s=[(0,d.z9)(this)],{"aria-atomic":r,"aria-label":i,"aria-live":n,role:o,title:a,...l}=this.$attrs;return this.inline&&this.left?s.unshift(e):s.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},s)}})},3237:function(t,e,s){s.d(e,{Z:function(){return a}});var r=s(5648),i=s(4981),n=s(6505),o=s(3325),a=(0,o.Z)(i.Z,n.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...r.Z.options.computed.classes.call(this)}},styles(){const t={...r.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,s){s.d(e,{h7:function(){return n},ZB:function(){return a},EB:function(){return l}});var r=s(3237),i=s(4589);const n=(0,i.Ji)("v-card__actions"),o=(0,i.Ji)("v-card__subtitle"),a=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");r.Z},1058:function(t,e,s){s.d(e,{Z:function(){return a}});var r=s(6952),i=s(8085),n=s(2936),o=s(3325),a=(0,o.Z)(r.Z,i.Z,n.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},6591:function(t,e,s){var r=s(144);e["Z"]=r.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},1485:function(t,e,s){s.d(e,{bo:function(){return r},Z6:function(){return i},Zd:function(){return n},hS:function(){return o}});const r="https://picpicker.alwaysdata.net/alegra/api/v1",i="https://picpicker.alwaysdata.net/serpapi",n=2,o=10},1130:function(t,e,s){s.d(e,{p5:function(){return a},if:function(){return l}});s(1703);var r=s(1485),i=s(1618),n=s(7376),o=s(5321);async function a(t){console.log({store:n.Z}),n.Z.state.user.currentRace&&n.Z.state.user.currentRace.forEach((e=>{if(e.word===t)throw new Error("Word already exists")}));const e=(0,o.JU)(i.ZP,"/users",""+n.Z.state.common.currentUser.id);await(0,o.r7)(e,{race:[...n.Z.state.user.currentRace,{word:t,pictures:{}}]})}async function l(t,e){console.log({selected:e,selectionIndex:t});const s=(0,o.JU)(i.ZP,"/users",""+n.Z.state.common.currentUser.id);let a=n.Z.state.user.currentRace;a[t].selected=e;let l=n.Z.state.common.currentUser.sellers;Object.entries(a[t].pictures).forEach((t=>{l[t[0]].proposals-=1})),l[e.user].score+=3;let c=null;l[e.user].score>=r.hS&&(c={sellers:l,winner:e.user,timestamp:Date.now()},setTimeout((()=>a.forEach((async t=>{try{let e=(0,o.JU)(i.ZP,"/users",t.user);await(0,o.r7)(e,{raceDone:c})}catch(e){console.error("Failed to notify end of race to "+t.user)}}))))),console.log({newRaceInfo:a,sellers:l});let d={race:a,sellers:l};c&&(d.raceDone=c),await(0,o.r7)(s,d)}},4562:function(t,e,s){s.r(e),s.d(e,{default:function(){return X}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.currentRace?s("div",[t.loading?s("v-overlay",{attrs:{absolute:t.absolute,value:t.loading}},[s("loading")],1):t._e(),s("div",[s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-col",{attrs:{md:"8",sm:"12"}},[s("v-text-field",{attrs:{label:"WORD"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSelection.apply(null,arguments)}},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}},[s("template",{slot:"append"},[s("tooltip",{attrs:{text:"Create quiz"}},[s("v-btn",{attrs:{icon:"",disabled:!t.word},on:{click:t.addSelection}},[s("v-icon",[t._v("mdi-plus")])],1)],1),s("tooltip",{attrs:{text:"Create quiz and open"}},[s("v-btn",{attrs:{icon:"",disabled:!t.word},on:{click:t.addAndMove2Selection}},[s("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],2)],1)],1),s("v-row",{attrs:{dense:""}},t._l(t.currentRaceSorted,(function(t,e){return s("v-col",{key:e},[s("selection-card",{attrs:{selection:t,index:+t.index}})],1)})),1)],1)],1):s("loading")],1)},i=[],n=s(920),o=s(629),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-btn",{staticClass:"add-card",attrs:{color:"primary","min-height":"60px","min-width":"200px"}},[s("v-card-text",[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-plus")])],1)],1)},l=[],c={},d=c,u=s(1001),h=s(3453),p=s.n(h),v=s(3150),m=s(7118),g=s(6428),f=(0,u.Z)(d,a,l,!1,null,null,null),b=f.exports;p()(f,{VBtn:v.Z,VCardText:m.ZB,VIcon:g.Z});var y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{class:"all-card "+(t.done?"selected-card":"selection-card"),attrs:{"min-width":"300px","max-width":"300px",elevation:"5"},on:{click:t.openSelection}},[s("v-card-title",{staticStyle:{padding:"20px"}},[s("v-row",[t.selection.selected?s("v-icon",{attrs:{outlined:"",color:"green"}},[t._v("mdi-check")]):t._e(),s("div",[t._v(t._s(t.selection.word))]),s("v-spacer"),t.selection.selected?s("div",{staticClass:"winner-info"},[t._v(" by "+t._s(t.selection.selected.user)+" ")]):s("v-badge",{attrs:{color:t.pictsLength>2?"green":"red",content:+t.pictsLength||"0"}},[s("v-icon",[t._v(" mdi-image ")])],1)],1)],1),s("v-card-text",[t.selection.selected?s("v-img",{attrs:{src:t.selection.selected.thumbnail,"lazy-src":t.selection.selected.thumbnail,contain:"","max-height":"100px","min-height":"100px"}},[s("template",{slot:"placeholder"},[s("img-placeholder")],1)],2):t.pictsLength?s("div",[s("v-carousel",{attrs:{"hide-delimiters":"","show-arrows-on-hover":"",cycle:"",interval:t.slideInterval,"hide-delimiter-background":"",height:"100px"}},t._l(t.selection.pictures,(function(t,e){return s("div",{key:e,attrs:{text:t.title}},[s("v-carousel-item",[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-img",{staticClass:"my-3",attrs:{contain:"",src:t.thumbnail,"lazy-src":t.thumbnail,height:"100%"}},[s("template",{slot:"placeholder"},[s("img-placeholder")],1)],2)],1)],1)],1)})),0)],1):s("h4",[t._v("Awaiting proposals...")])],1)],1)},Z=[],w=s(7873),_={components:{ImgPlaceholder:w.Z},props:{selection:Object,index:{type:Number,requied:!0}},methods:{openSelection(){this.$router.push("/user/selection/"+(this.index+1))}},computed:{pictsLength(){return Object.entries(this.selection.pictures).length},slideInterval(){return 1300+400*Math.random()},done(){return Boolean(this.selection.selected)}}},x=_,C=s(3099),B=s(3237),k=s(7426),S=s(4062),$=s(7047),R=s(2877),V=s(9762),O=(0,u.Z)(x,y,Z,!1,null,null,null),E=O.exports;p()(O,{VBadge:C.Z,VCard:B.Z,VCardText:m.ZB,VCardTitle:m.EB,VCarousel:k.Z,VCarouselItem:S.Z,VIcon:g.Z,VImg:$.Z,VRow:R.Z,VSpacer:V.Z});var I=s(1130),A=s(5418),P={components:{SelectionCard:E,AddCard:b,Loading:n.Z,Tooltip:A.Z},computed:{...(0,o.rn)("user",["currentRace"]),currentRaceSorted(){if(Array.isArray(this.currentRace))return this.currentRace&&this.currentRace.map(((t,e)=>({...t,index:e}))).sort(((t,e)=>Boolean(t.selected)-+Boolean(e.selected)||+Object.entries(e.pictures).length-+Object.entries(t.pictures).length))}},data(){return{word:"",loading:!1}},methods:{async addSelection(){this.word||this.$toast.error("Word must not be void");try{return await(0,I.p5)(this.word),this.$toast.success(`Added ${this.word} quest`),this.word="",!0}catch(t){return this.$toast.error(t.message),!1}},async addAndMove2Selection(){this.loading=!0,await this.addSelection()&&this.$router.push("/user/selection/"+this.currentRace.length),this.loading=!1}}},z=P,L=s(2102),T=s(9846),j=s(1058),J=s(314),N=(0,u.Z)(z,r,i,!1,null,null,null),X=N.exports;p()(N,{VBtn:v.Z,VCol:L.Z,VContainer:T.Z,VIcon:g.Z,VOverlay:j.Z,VRow:R.Z,VTextField:J.Z})}}]);
//# sourceMappingURL=29.f4d8e6bd.js.map