(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{524:function(e,t,n){},530:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"2.28.0","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-server":"NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --config-file ${PWD}/doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","devDependencies":{"@hackmd/meta-marked":"^0.4.4","babel-eslint":"^10.1.0","coveralls":"^3.1.0","eslint":"^6.8.0","eslint-config-standard":"^14.1.1","eslint-config-vuetify":"^0.6.1","eslint-loader":"^4.0.2","eslint-plugin-html":"^6.1.1","eslint-plugin-import":"^2.22.1","eslint-plugin-no-only-tests":"^2.4.0","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.1.0","eslint-plugin-vue":"^6.2.2","eslint-plugin-vuetify":"^1.0.0-beta.7","gh-pages-multi":"^0.2.0","http-proxy-middleware":"^1.0.6","mocha":"^7.2.0","nock":"^12.0.3","nyc":"^15.1.0","raw-loader":"^4.0.2","semver-extract":"^1.2.0","tableschema":"^1.12.4"},"dependencies":{"@digibytes/markdownit":"^1.2.2","@elastic/elasticsearch":"^7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"^0.19.2","@koumoul/sd-vue":"^0.19.2","@koumoul/v-iframe":"^0.3.2","@koumoul/vjsf":"^1.25.0-beta.7","@koumoul/vue-multianalytics":"^1.10.1","@mapbox/mbtiles":"^0.11.0","@nuxtjs/axios":"^5.12.3","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.11.2","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/rewind":"^5.1.5","@turf/turf":"^5.1.6","@turf/unkink-polygon":"^5.1.5","accept-language-parser":"^1.5.0","ajv":"^6.12.6","babel-polyfill":"^6.26.0","body-parser":"^1.19.0","byline":"^5.0.0","chardet":"^1.3.0","chart.js":"^2.9.4","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","connect-mongo":"^3.2.0","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","debug":"^4.3.1","dot-prop":"^6.0.1","easymde":"^2.14.0","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","express":"^4.17.1","express-session":"^1.17.1","fast-clone":"^1.5.13","flat":"^5.0.2","form-data":"^3.0.0","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geojson2wkt":"^1.0.0","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","iconv-lite":"^0.5.2","iframe-resizer":"^4.2.11","install":"^0.13.0","js-cookie":"^2.2.1","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","jwks-rsa":"^1.12.0","jwt-decode":"^2.2.0","less":"^3.12.2","less-loader":"^6.2.0","lucene-query-parser":"^1.2.0","mapbox-gl":"^1.13.0","marked":"^2.0.0","material-design-icons-iconfont":"^5.0.1","memoize":"^0.1.1","memoizee":"^0.4.14","mime-type-stream":"^0.1.4","moment":"^2.29.1","moment-timezone":"^0.5.32","mongo-escape":"^2.0.6","mongodb":"~3.6.4","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","node-fetch":"^2.6.1","nodemon":"^2.0.6","npm":"^7.6.0","nuxt":"^2.14.11","nuxt-i18n":"^6.16.0","object-hash":"^2.0.3","ogr2ogr":"^2.1.0","parse5":"^6.0.1","patch-package":"^6.2.2","proj4":"^2.6.3","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.1.13","reconnecting-websocket":"^4.4.0","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.6","sanitize-html":"^1.27.5","scrolling-element":"^1.0.2","semver":"^7.3.4","shortid":"^2.2.16","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","strip-bom-stream":"^4.0.0","style-loader":"^1.3.0","stylus":"^0.54.8","stylus-loader":"^3.0.2","terraformer-wkt-parser":"^1.2.1","thumbor":"^0.1.5","tinycolor2":"^1.4.2","tmp-promise":"^2.1.1","truncate-middle":"^1.0.6","universal-analytics":"^0.4.23","uuid":"^3.4.0","vt-pbf":"3.1.1","vue-moment":"^4.1.0","vue-truncate-filter":"^1.1.7","vuedraggable":"^2.24.3","vuetify":"^2.3.21","ws":"^7.4.1","xlsx":"^0.16.9"}}')},534:function(e,t,n){var map={"./api-en.md":360,"./api-fr.md":361,"./applications-en.md":362,"./applications-fr.md":363,"./collectors-en.md":364,"./collectors-fr.md":365,"./connectors-en.md":366,"./connectors-fr.md":367,"./services-en.md":368,"./services-fr.md":369};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=534},536:function(e,t,n){"use strict";n(14),n(8),n(67),n(33),n(34);var r=n(3),o=(n(45),n(327),n(38),n(7),n(6),n(12),n(30),n(524),n(1)),c=n(80),l=n(4);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],v=f.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=f.reduce((function(e,t){return e["offset"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),h=f.reduce((function(e,t){return e["order"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),x={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(h)};function k(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var j=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in n)l+=String(n[d]);var m=j.get(l);return m||function(){var e,t;for(t in m=[],x)x[t].forEach((function(e){var r=n[e],o=k(t,e,r);o&&m.push(o)}));var o=m.some((function(e){return e.startsWith("col-")}));m.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),j.set(l,m)}(),e(n.tag,Object(c.a)(data,{class:m}),o)}})},543:function(e,t,n){},549:function(e,t,n){"use strict";n(543)},561:function(e,t,n){"use strict";n.r(t);n(12),n(35),n(38),n(33),n(34),n(7),n(6);var r=n(326),o=n(534),c=n(530).version,l={layout:"void",data:function(){return{version:c}},computed:{sections:function(){if(this.$route){var e=o.keys().filter((function(e){return e.includes("-fr.md")})).map((function(e){return Object.assign(r(o(e).default)||{},{id:e.split("/")[1].split(".").shift().replace("-fr","")})}));return e.sort((function(e,t){return e.meta.section<t.meta.section?-1:e.meta.section>t.meta.section?1:!e.meta.subsection||e.meta.subsection<t.meta.subsection?-1:1})),e}}},mounted:function(){var e=this,t={h2:["headline","font-weight-bold","grey--text","text--darken-3","my-4"],h3:["title","font-weight-bold","grey--text","text--darken-3","my-3"],h4:["subheading","font-weight-bold","grey--text","text--darken-3","my-2"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],code:["theme--light"],"pre code":["v-card","pt-3","mb-4"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")}))}},d=(n(549),n(44)),m=n(66),f=n.n(m),v=n(536),y=n(325),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-col",{staticClass:"mt-6 pt-6 text-center"},[n("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),n("h1",{staticClass:"display-2 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),n("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),n("h1",{staticClass:"display-2 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}},[e._v("\n      Interopérer\n    ")]),e._v(" "),n("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))+"\n    ")])],1),e._v(" "),n("div",{staticClass:"page-break"}),e._v(" "),n("h2",{staticClass:"display-1 my-4 grey--text text--darken-3"},[e._v("\n    Table des matières\n  ")]),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?n("h5",{key:"st-"+i,staticClass:"ml-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):n("h4",{key:"st-"+i},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")])]})),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?e._e():n("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.meta.subsection?n("h3",{key:"t-"+i,staticClass:"headline my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):n("h2",{key:"t-"+i,staticClass:"display-1 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")]),e._v(" "),n("div",{key:"c-"+i,staticClass:"article",domProps:{innerHTML:e._s(section.html)}})]}))],2)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:v.a,VImg:y.a})}}]);