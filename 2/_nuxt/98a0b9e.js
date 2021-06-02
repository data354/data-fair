(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{521:function(t,e,o){},527:function(t){t.exports=JSON.parse('{"name":"data-fair","version":"2.29.1","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-server":"NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --config-file ${PWD}/doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","devDependencies":{"@hackmd/meta-marked":"^0.4.4","babel-eslint":"^10.1.0","coveralls":"^3.1.0","eslint":"^7.27.0","eslint-config-vuetify":"^0.6.1","eslint-plugin-no-only-tests":"^2.6.0","gh-pages-multi":"^0.2.0","http-proxy-middleware":"^1.0.6","mocha":"^7.2.0","nock":"^12.0.3","nyc":"^15.1.0","raw-loader":"^4.0.2","semver-extract":"^1.2.0","tableschema":"^1.12.4"},"dependencies":{"@digibytes/markdownit":"^1.2.2","@elastic/elasticsearch":"^7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"^0.19.2","@koumoul/sd-vue":"^0.19.2","@koumoul/v-iframe":"^0.3.2","@koumoul/vjsf":"^1.25.0-beta.12","@koumoul/vue-multianalytics":"^1.10.1","@mapbox/mbtiles":"^0.11.0","@nuxtjs/axios":"^5.13.4","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.11.2","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/rewind":"^5.1.5","@turf/turf":"^5.1.6","@turf/unkink-polygon":"^5.1.5","accept-language-parser":"^1.5.0","ajv":"^6.12.6","babel-polyfill":"^6.26.0","body-parser":"^1.19.0","byline":"^5.0.0","chardet":"^1.3.0","chart.js":"^2.9.4","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","connect-mongo":"^3.2.0","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","debug":"^4.3.1","dot-prop":"^6.0.1","easymde":"^2.14.0","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","express":"^4.17.1","express-session":"^1.17.1","fast-clone":"^1.5.13","flat":"^5.0.2","form-data":"^3.0.0","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geojson2wkt":"^1.0.0","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","iconv-lite":"^0.5.2","iframe-resizer":"^4.2.11","install":"^0.13.0","js-cookie":"^2.2.1","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","jwks-rsa":"^1.12.0","jwt-decode":"^2.2.0","less":"^3.12.2","less-loader":"^6.2.0","lucene-query-parser":"^1.2.0","mapbox-gl":"^1.13.0","marked":"^2.0.0","material-design-icons-iconfont":"^5.0.1","memoize":"^0.1.1","memoizee":"^0.4.14","mime-type-stream":"^0.1.4","moment":"^2.29.1","moment-timezone":"^0.5.32","mongo-escape":"^2.0.6","mongodb":"~3.6.4","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","node-fetch":"^2.6.1","nodemon":"^2.0.7","nuxt":"^2.14.11","nuxt-i18n":"^6.27.0","object-hash":"^2.2.0","ogr2ogr":"^2.1.2","parse5":"^6.0.1","patch-package":"^6.4.7","proj4":"^2.7.2","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.2.2","reconnecting-websocket":"^4.4.0","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.8","sanitize-html":"^1.27.5","scrolling-element":"^1.0.2","semver":"^7.3.4","shortid":"^2.2.16","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","strip-bom-stream":"^4.0.0","style-loader":"^1.3.0","stylus":"^0.54.8","stylus-loader":"^3.0.2","terraformer-wkt-parser":"^1.2.1","thumbor":"^0.1.5","tinycolor2":"^1.4.2","tmp-promise":"^2.1.1","truncate-middle":"^1.0.6","universal-analytics":"^0.4.23","uuid":"^3.4.0","vt-pbf":"3.1.1","vue-moment":"^4.1.0","vue-truncate-filter":"^1.1.7","vuedraggable":"^2.24.3","vuetify":"^2.5.3","ws":"^7.4.1","xlsx":"^0.16.9"}}')},530:function(t,e,o){var map={"./config-en.md":360,"./config-fr.md":361,"./i18n-en.md":362,"./i18n-fr.md":363,"./install-en.md":364,"./install-fr.md":365};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=530},533:function(t,e,o){"use strict";o(5),o(7),o(11),o(12);var r=o(2),n=(o(32),o(9),o(40),o(333),o(42),o(15),o(34),o(31),o(53),o(521),o(1)),c=o(83),l=o(3);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],f=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=_.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),E=_.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),v={col:Object.keys(f),offset:Object.keys(h),order:Object.keys(E)};function y(t,e,o){var r=t;if(null!=o&&!1!==o){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},E),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var m in o)l+=String(o[m]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],v)v[e].forEach((function(t){var r=o[t],n=y(e,t,r);n&&d.push(n)}));var n=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!n||!o.cols},Object(r.a)(t,"col-".concat(o.cols),o.cols),Object(r.a)(t,"offset-".concat(o.offset),o.offset),Object(r.a)(t,"order-".concat(o.order),o.order),Object(r.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),S.set(l,d)}(),t(o.tag,Object(c.a)(data,{class:d}),n)}})},534:function(t,e){function o(t){return t&&t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return t}function n(t,e){const n=(e=e||{}).delimiter||".",c=e.maxDepth,l=e.transformKey||r,output={};return function t(object,r,m){m=m||1,Object.keys(object).forEach((function(d){const _=object[d],f=e.safe&&Array.isArray(_),h=Object.prototype.toString.call(_),E=o(_),v="[object Object]"===h||"[object Array]"===h,y=r?r+n+l(d):l(d);if(!f&&!E&&v&&Object.keys(_).length&&(!e.maxDepth||m<c))return t(_,y,m+1);output[y]=_}))}(t),output}t.exports=n,n.flatten=n,n.unflatten=function t(e,c){const l=(c=c||{}).delimiter||".",m=c.overwrite||!1,d=c.transformKey||r,_={};if(o(e)||"[object Object]"!==Object.prototype.toString.call(e))return e;function f(t){const e=Number(t);return isNaN(e)||-1!==t.indexOf(".")||c.object?t:e}return e=Object.keys(e).reduce((function(t,o){const r=Object.prototype.toString.call(e[o]);return!("[object Object]"===r||"[object Array]"===r)||function(t){const e=Object.prototype.toString.call(t),o="[object Array]"===e,r="[object Object]"===e;if(!t)return!0;if(o)return!t.length;if(r)return!Object.keys(t).length}(e[o])?(t[o]=e[o],t):function(t,e,o){return Object.keys(o).reduce((function(e,r){return e[t+l+r]=o[r],e}),e)}(o,t,n(e[o],c))}),{}),Object.keys(e).forEach((function(o){const r=o.split(l).map(d);let n=f(r.shift()),h=f(r[0]),E=_;for(;void 0!==h;){if("__proto__"===n)return;const t=Object.prototype.toString.call(E[n]),e="[object Object]"===t||"[object Array]"===t;if(!m&&!e&&void 0!==E[n])return;(m&&!e||!m&&null==E[n])&&(E[n]="number"!=typeof h||c.object?{}:[]),E=E[n],r.length>0&&(n=f(r.shift()),h=f(r[0]))}E[n]=t(e[o],c)})),_}},535:function(t,e,o){t.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",masterDataPublicUrl:null,wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:"",openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongoUrl:"mongodb://localhost:27017/data-fair-production",map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4,maxShardSize:1e10,nbReplicas:1},indicesPrefix:"dataset-production",info:{termsOfService:"https://koumoul.com/term-of-service",contact:{name:"Koumoul",url:"https://koumoul.com",email:"support@koumoul.com"}},brand:{logo:null,title:"DataFair",description:"Find, Access, Interoperate, Reuse data on the Web",url:null,embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:""},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,datasetStorage:-1,attachmentStorage:1e8,attachmentIndexed:5e6,remoteServiceRate:{duration:5,nb:100,kb:4e3},apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}}},hideBrand:0,maxSpreadsheetSize:5e7},worker:{interval:500,releaseInterval:2e3,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:5e3,secretKeys:{identities:null,limits:null,notifications:null,masterData:null},globalWebhooks:{consumption:[]},locks:{ttl:60},cache:{publicMaxAge:20,timestampedPublicMaxAge:604800,size:1e3},analytics:{},browserLogLevel:"error",thumbor:{url:"http://localhost:8000",key:"thumborkey"},nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"https://spdx.org/licenses/ODbL-1.0.html#licenseText"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.5/"},{url:"https://koumoul.com/apps/infos-loc/0.9/"},{url:"https://cdn.jsdelivr.net/npm/@koumoul/data-fair-charts@0.8/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.2/"},{url:"https://koumoul.com/apps/carto-stats/0.4/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/data-fair-admin-divs/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.1/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"}],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Divisions administratives",url:"https://koumoul.com/s/insee-mapping/api/v1/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],disableSharing:!1,disableApplications:!1,disableRemoteServices:!1,proxyNuxt:!1,tippecanoe:{skip:!1,minFeatures:2e3,docker:!1,args:["-zg","--extend-zooms-if-still-dropping","--drop-densest-as-needed","--detect-shared-borders","-r1"]},ogr2ogr:{skip:!1,timeout:36e4},doc:{applications:null,datasets:null,datasetEdit:null,datasetExtend:null,datasetAttachments:null,settings:null,catalogs:null},extraNavigationItems:[],extraAdminNavigationItems:[],dateFormats:["D/M/YYYY","D/M/YY","YYYY/M/D"],dateTimeFormats:["D/M/YYYY H:m","D/M/YY H:m","D/M/YYYY, H:m","D/M/YY, H:m","D/M/YYYY H:m:s","D/M/YY H:m:s","D/M/YYYY, H:m:s","D/M/YY, H:m:s","YYYY-MM-DDTHH:mm:ss"]}},536:function(t,e){t.exports={}},537:function(t,e){t.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",masterDataPublicUrl:"MASTER_DATA_PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongoUrl:"MONGO_URL",analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"},maxShardSize:{__name:"ES_MAX_SHARD_SIZE",__format:"json"},nbReplicas:{__name:"ES_NB_REPLICAS",__format:"json"}},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS",masterData:"SECRET_MASTER_DATA"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"},maxSpreadsheetSize:{__name:"DEFAULT_LIMITS_MAX_SPREADSHEET_SIZE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},thumbor:{url:"THUMBOR_URL",key:"THUMBOR_KEY"},applications:{__name:"APPLICATIONS",__format:"json"},applicationsDirectories:{__name:"APPLICATIONS_DIRECTORIES",__format:"json"},remoteServices:{__name:"REMOTE_SERVICES",__format:"json"},catalogs:{__name:"CATALOGS",__format:"json"},disableSharing:{__name:"DISABLE_SHARING",__format:"json"},disableApplications:{__name:"DISABLE_APPLICATIONS",__format:"json"},disableRemoteServices:{__name:"DISABLE_REMOTE_SERVICES",__format:"json"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},tippecanoe:{skip:{__name:"TIPPECANOE_SKIP",__format:"json"}},ogr2ogr:{skip:{__name:"OGR2OGR_SKIP",__format:"json"},timeout:{__name:"OGR2OGR_TIMEOUT",__format:"json"}},doc:{datasetEdit:"DOC_DATASET_EDIT",datasetExtend:"DOC_DATASET_EXTEND",datasetAttachments:"DOC_DATASET_ATTACHMENTS",settings:"DOC_SETTINGS",catalogs:"DOC_CATALOGS"},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"},dateFormats:{__name:"DATE_FORMATS",__format:"json"},dateTimeFormats:{__name:"DATE_TIME_FORMATS",__format:"json"}}},539:function(t,e,o){},545:function(t,e,o){"use strict";o(539)},558:function(t,e,o){"use strict";o.r(e);var r=o(16),n=(o(9),o(41),o(40),o(38),o(7),o(15),o(34),o(35),o(31),o(17),o(332)),c=o(530),l=o(527).version,m=o(534),d=Object.assign({},o(535),o(536));var _=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(e).forEach((function(c){var l=n+c,m=l.split(".").reduce((function(a,t){return a[t]}),d);"object"===Object(r.a)(m)&&(m=JSON.stringify(m)),"string"==typeof e[c]?o.push({key:l,name:e[c],def:m}):"object"===Object(r.a)(e[c])&&e[c].__name?o.push({key:l,name:e[c].__name,def:m}):t(e[c],o,n+c+".")})),o}(o(537));var f={layout:"void",data:function(){return{version:l}},computed:{sections:function(){if(this.$route){var t=c.keys().filter((function(t){return t.includes("-fr.md")})).map((function(t){return Object.assign(n(c(t).default)||{},{id:t.split("/")[1].split(".").shift().replace("-fr","")})}));return t.sort((function(t,e){return t.meta.section<e.meta.section?-1:t.meta.section>e.meta.section?1:!t.meta.subsection||t.meta.subsection<e.meta.subsection?-1:1})),t[1].html=t[1].html.replace("{{CONFIG_VARS}}",this.configVars),t[2].html=t[2].html.replace("{{I18N_VARS}}",this.i18nVars),t}},configVars:function(){var t=this,table="<table><thead><tr><th>".concat(this.$t("pages.install.config.varKey"),"</th><th>").concat(this.$t("pages.install.config.varName"),"</th><th>").concat(this.$t("pages.install.config.varDesc"),"</th><th>").concat(this.$t("pages.install.config.varDefault"),"</th></tr></thead><tbody>\n");return _.forEach((function(e){var o=t.$te("pages.install.config.varDescriptions."+e.key)?t.$t("pages.install.config.varDescriptions."+e.key):"";table+="<tr><td>".concat(e.key,"</td><td>").concat(e.name,"</td><td>").concat(o,"</td><td>").concat(e.def,"</td></tr>\n")})),table+="</tbody></table>"},i18nVars:function(){var t=this,e=m(this.$i18n.messages[this.$i18n.locale],{delimiter:"_"}),table="<table><thead><tr><th>".concat(this.$t("pages.install.i18n.i18nKey"),"</th><th>").concat(this.$t("pages.install.i18n.i18nVar"),"</th><th>").concat(this.$t("pages.install.i18n.i18nVal"),"</th></tr></thead><tbody>\n");return table+=Object.keys(e).filter((function(t){return 0!==t.indexOf("doc_")})).map((function(o){return"<tr><td>".concat(o.replace(/_/g,"."),"</td><td>I18N_").concat(t.$i18n.locale,"_").concat(o,"</td><td><pre>").concat(("string"==typeof e[o]?e[o]:"MISSING").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),"</pre></td></tr>")})).join("\n"),table+="</tbody></table>"}},mounted:function(){var t=this,e={h2:["headline","font-weight-bold","grey--text","text--darken-3","my-4"],h3:["title","font-weight-bold","grey--text","text--darken-3","my-3"],h4:["subheading","font-weight-bold","grey--text","text--darken-3","my-2"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],code:["theme--light"],"pre code":["v-card","pt-3","mb-4"]};Object.keys(e).forEach((function(o){t.$el.querySelectorAll(o).forEach((function(t){e[o].forEach((function(e){return t.classList.add(e)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")}))}},h=(o(545),o(48)),E=o(70),v=o.n(E),y=o(533),S=o(331),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-col",{staticClass:"mt-6 pt-6 text-center"},[o("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),t._v(" "),o("h1",{staticClass:"text-h3 grey--text text--darken-3"},[t._v("\n      Data Fair\n    ")]),t._v(" "),o("h4",[t._v("\n      Version "+t._s(t.version)+"\n    ")]),t._v(" "),o("h1",{staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}},[t._v("\n      Installation et configuration\n    ")]),t._v(" "),o("h4",{staticStyle:{"margin-top":"200px!important"}},[t._v("\n      "+t._s(t._f("moment")(new Date,"DD MMMM YYYY"))+"\n    ")])],1),t._v(" "),o("div",{staticClass:"page-break"}),t._v(" "),o("h2",{staticClass:"text-h4 my-4 grey--text text--darken-3"},[t._v("\n    Table des matières\n  ")]),t._v(" "),t._l(t.sections,(function(section,i){return[section.meta.subsection?o("h5",{key:"st-"+i,staticClass:"ml-3"},[t._v("\n      "+t._s(section.meta.section)+"."+t._s(section.meta.subsection)+" - "+t._s(section.meta.title)+"\n    ")]):o("h4",{key:"st-"+i},[t._v("\n      "+t._s(section.meta.section)+" - "+t._s(section.meta.title)+"\n    ")])]})),t._v(" "),t._l(t.sections,(function(section,i){return[section.meta.subsection?t._e():o("div",{key:"pb-"+i,staticClass:"page-break"}),t._v(" "),section.meta.subsection?o("h3",{key:"t-"+i,staticClass:"text-h5 my-4 grey--text text--darken-3"},[t._v("\n      "+t._s(section.meta.section)+"."+t._s(section.meta.subsection)+" - "+t._s(section.meta.title)+"\n    ")]):o("h2",{key:"t-"+i,staticClass:"text-h4 my-4 grey--text text--darken-3"},[t._v("\n      "+t._s(section.meta.section)+" - "+t._s(section.meta.title)+"\n    ")]),t._v(" "),o("div",{key:"c-"+i,staticClass:"article",domProps:{innerHTML:t._s(section.html)}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:y.a,VImg:S.a})}}]);