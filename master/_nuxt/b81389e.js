(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{546:function(e,t,r){},547:function(e,t,r){},556:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{sponsors:[{name:"Koumoul",description:"Visualisez, exploitez et partagez vos données en quelques clics !",img:"https://koumoul.com/static/logo-slogan.png",link:"https://koumoul.com",thanks:"Koumoul développe l'écosystème Data Fair et l'héberge comme service en ligne."},{name:"Dawizz",description:"Outil de cartographie et de catalogage de vos données.",img:"https://www.dawizz.fr/wp-content/uploads/2018/04/logo-Dawizz-all-about-your-data-home.png",link:"https://dawizz.fr",thanks:"Dawizz intègre Data Fair dans sa plateforme et soutient son développement."}]}}},o=r(48),l=r(70),c=r.n(l),d=r(522),v=(r(9),r(5),r(7),r(11),r(12),r(2)),h=(r(32),r(546),r(528)),m=r(1),f=(r(151),r(547),r(325)),_=r(153),y=r(29),O=r(152),w=r(187),x=r(23),C=r(3),k=r(10);function z(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var j=Object(k.a)(y.a,Object(O.b)(["absolute","fixed","top","bottom"]),w.a,x.a).extend({name:"v-progress-linear",directives:{intersect:_.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(C.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(C.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(v.a)(e,this.isReversed?"right":"left",Object(C.f)(this.normalizedValue,"%")),Object(v.a)(e,"width",Object(C.f)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):z(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?f.b:f.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(C.f)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(C.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(v.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(C.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),B=m.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(j,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),P=r(114);function V(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(k.a)(B,P.a,h.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return S(S({"v-card":!0},P.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},h.a.options.computed.classes.call(this))},styles:function(){var style=S({},h.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=B.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),D=Object(C.g)("v-card__actions"),E=Object(C.g)("v-card__subtitle"),A=Object(C.g)("v-card__text"),I=(Object(C.g)("v-card__title"),r(535)),L=r(571),T=r(143),F=r(333),N=r(554),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"pt-6 pb-3",attrs:{align:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h2",{staticClass:"text-h3 font-weight-bold grey--text text--darken-3 mb-4"},[e._v("\n        Data Fair\n      ")]),e._v(" "),r("p",{staticClass:"text-h5 font-weight-regular grey--text text--darken-1 font-italic"},[e._v("\n        Visualisez, exploitez et partagez vos données en quelques clics !\n      ")]),e._v(" "),r("div",[r("v-btn",{staticClass:"ml-2 pl-3",staticStyle:{"text-transform":"none","font-weight":"bold"},attrs:{href:"https://github.com/sponsors/koumoul-dev",outlined:"",rounded:"",color:"primary"}},[r("v-icon",{attrs:{color:"pink"}},[e._v("\n            mdi-heart-outline\n          ")]),e._v("  Sponsor\n        ")],1),e._v(" "),r("v-btn",{staticClass:"ml-2 pl-2",staticStyle:{"text-transform":"none","font-weight":"bold"},attrs:{href:"https://github.com/koumoul-dev/data-fair",rounded:"",color:"primary"}},[r("v-icon",[e._v("\n            mdi-github\n          ")]),e._v("  GitHub\n        ")],1),e._v(" "),r("v-btn",{staticClass:"ml-2",attrs:{href:"https://twitter.com/data_fair",icon:"",large:"",color:"#1DA1F2"}},[r("v-icon",[e._v("\n            mdi-twitter\n          ")])],1)],1)])],1),e._v(" "),r("v-row",{staticClass:"pb-3",attrs:{justify:"center"}},[r("iframe",{attrs:{width:e.$vuetify.breakpoint.lgAndUp?800:560,height:e.$vuetify.breakpoint.lgAndUp?450:315,sandbox:"allow-same-origin allow-scripts allow-popups",src:"https://videos.koumoul.com/videos/embed/88b39efd-2023-4f5e-84f4-748cb22c56f1?title=0&warningTitle=0&peertubeLink=0&autoplay=1",frameborder:"0",allowfullscreen:""}})]),e._v(" "),r("v-row",{staticClass:"my-3 flex-row-reverse",attrs:{align:"center"}},[r("v-col",{attrs:{md:"6",sm:"12"}},[r("h3",{staticClass:"text-h5 grey--text text--darken-3 mb-2"},[e._v("\n        Gérez vos sources de données\n      ")]),e._v(" "),r("p",[e._v("Chargez directement vos fichiers avec l'interface. Une "),r("strong",[e._v("grande variété de formats")]),e._v(" est supportée (XLS,CSV,SHP,...)")]),e._v(" "),r("p",[e._v("Configurez des collecteurs permettant les "),r("strong",[e._v("mises à jour automatiques")]),e._v(" des données et l'intégration des données issues l'IOT.")]),e._v(" "),r("p",[e._v("Mettez en place, facilement et progressivement, une "),r("strong",[e._v("stratégie data-driven")]),e._v(" au sein de votre organisation.")])]),e._v(" "),r("v-col",{attrs:{md:"6",sm:"12"}},[r("v-img",{attrs:{"aspect-ratio":2,alt:"Accès par API",src:"./home/undraw_uploading_go67.svg",contain:""}})],1)],1),e._v(" "),r("v-row",{staticClass:"my-3",attrs:{align:"center"}},[r("v-col",{attrs:{md:"6",sm:"12"}},[r("h3",{staticClass:"text-h5 grey--text text--darken-3 mb-2"},[e._v("\n        Enrichissez et structurez\n      ")]),e._v(" "),r("p",[e._v("Accédez aux données issues de l'opendata, enrichissez vos données pour leur donner encore plus de valeur et les rendre "),r("strong",[e._v("hautement réutilisables")]),e._v(".")]),e._v(" "),r("p",[e._v("Les données sont "),r("strong",[e._v("normalisées, accessibles par API")]),e._v(", sous forme structurée ou de fonds de cartes vectoriels.")])]),e._v(" "),r("v-col",{attrs:{md:"6",sm:"12"}},[r("v-img",{attrs:{"aspect-ratio":2,alt:"Accès par API",src:"./home/data_process.svg",contain:""}})],1)],1),e._v(" "),r("v-row",{staticClass:"my-3 flex-row-reverse",attrs:{align:"center"}},[r("v-col",{attrs:{md:"6",sm:"12"}},[r("h3",{staticClass:"text-h5 grey--text text--darken-3 mb-2"},[e._v("\n        Visualisez dynamiquement\n      ")]),e._v(" "),r("p",[e._v("Configurez des visualisations de données interactives en quelques clics, "),r("strong",[e._v("sans avoir besoin de programmer")]),e._v(".")]),e._v(" "),r("p",[e._v("Vous pouvez "),r("strong",[e._v("explorer des données volumineuses")]),e._v(" en temps réel, avec des cartes, des graphiques, ou des visualisations textuelles.")]),e._v(" "),r("p",[e._v("Nous réalisons au besoin des "),r("strong",[e._v("visualisations personnalisées")]),e._v(" pour correspondre au mieux à votre métier")])]),e._v(" "),r("v-col",{attrs:{md:"6",sm:"12"}},[r("v-img",{attrs:{"aspect-ratio":2,alt:"Accès par API",src:"./home/data_processing_.svg",contain:""}})],1)],1),e._v(" "),r("v-row",{staticClass:"my-3",attrs:{align:"center"}},[r("v-col",{attrs:{md:"6",sm:"12"}},[r("h3",{staticClass:"text-h5 grey--text text--darken-3 mb-2"},[e._v("\n        Partagez en interne / opendata\n      ")]),e._v(" "),r("p",[r("strong",[e._v("Contrôlez finement les accès")]),e._v(" aux données et aux visualisations pour les partager en interne ou les ouvrir vers l'extérieur.")]),e._v(" "),r("p",[e._v("Vos données sont téléchargeables dans plusieurs formats et vous pouvez les présenter dans un "),r("strong",[e._v("portail de données personnalisable")]),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("Intégrez")]),e._v(" vos visualisations dans votre site web.")])]),e._v(" "),r("v-col",{attrs:{md:"6",sm:"12"}},[r("v-img",{attrs:{"aspect-ratio":2,alt:"Accès par API",src:"./home/undraw_mobile_testing_reah.svg",contain:""}})],1)],1),e._v(" "),r("h3",{staticClass:"text-h5 grey--text text--darken-3 mb-2 mt-6"},[e._v("\n    Soutiens\n  ")]),e._v(" "),r("v-row",e._l(e.sponsors,(function(t){return r("v-col",{key:t.name,attrs:{cols:"6",xl:"4"}},[r("v-card",{attrs:{outlined:"",href:t.link}},[r("v-row",{staticClass:"ma-0 pt-2 px-3"},[r("v-img",{attrs:{color:"blue",src:t.img,"max-width":"250","min-height":"70",contain:""}})],1),e._v(" "),r("v-card-text",[r("p",{staticClass:"text-caption"},[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),r("p",{staticClass:"mb-0 text-body-2"},[e._v("\n            "+e._s(t.thanks)+"\n          ")])])],1),e._v(" "),r("v-col")],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:$,VCardText:A,VCol:I.a,VContainer:L.a,VIcon:T.a,VImg:F.a,VRow:N.a})}}]);