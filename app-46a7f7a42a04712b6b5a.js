webpackJsonp([0xd2a57dc1d883],{285:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var u=[{plugin:o(1097),options:{plugins:[],trackingId:"UA-119197833-1",head:!1,anonymize:!0,respectDNT:!0,exclude:[]}},{plugin:o(1099),options:{plugins:[]}}]},721:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(1065),"component---src-templates-index-js":o(1074),"component---src-templates-blog-post-js":o(1073),"component---src-pages-about-js":o(1067),"component---src-pages-challenges-js":o(1068),"component---src-pages-github-stats-js":o(1069),"component---src-pages-index-js":o(1070),"component---src-pages-ppts-js":o(1071),"component---src-pages-publications-js":o(1072)},e.json={"layout-index.json":o(1075),"offline-plugin-app-shell-fallback.json":o(1094),"blogs.json":o(1077),"blogs-2.json":o(1078),"blogs-3.json":o(1079),"data-posts-git-stats-220318.json":o(1082),"data-posts-graphql-03122018.json":o(1083),"data-posts-redmonk-jan-18.json":o(1085),"data-posts-open-source-10-tips.json":o(1084),"data-posts-angular-js-useful-links.json":o(1081),"data-posts-whitepapge-021218.json":o(1091),"data-posts-white-paper-022018.json":o(1088),"data-posts-white-paper-02142018.json":o(1087),"data-posts-white-paper-dzone-23rd-jan.json":o(1090),"data-posts-white-paper-04.json":o(1089),"data-posts-welcome.json":o(1086),"about.json":o(1076),"challenges.json":o(1080),"github-stats.json":o(1092),"index.json":o(1093),"ppts.json":o(1095),"publications.json":o(1096)},e.layouts={"layout---index":o(1066)}},722:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(3),p=t(l),f=o(403),d=t(f),m=o(205),h=t(m),g=o(285),y=o(1348),j=t(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(o){a(this,e);var t=u(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=b,n.exports=e.default},205:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(1289),u=t(a),r=(0,u.default)();n.exports=r},723:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(153),u=o(404),r=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,r.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},724:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(337),u=t(a),r=o(285),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},1076:function(n,e,o){o(22),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1111)})})}},1078:function(n,e,o){o(22),n.exports=function(n){return o.e(83866287021767,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1112)})})}},1079:function(n,e,o){o(22),n.exports=function(n){return o.e(45332318034034,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1113)})})}},1077:function(n,e,o){o(22),n.exports=function(n){return o.e(0x7ce6c455ee4b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1114)})})}},1080:function(n,e,o){o(22),n.exports=function(n){return o.e(6981150134586,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1115)})})}},1081:function(n,e,o){o(22),n.exports=function(n){return o.e(0xdf1455e454d7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1116)})})}},1082:function(n,e,o){o(22),n.exports=function(n){return o.e(0xd8ca4a6e26fe,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1117)})})}},1083:function(n,e,o){o(22),n.exports=function(n){return o.e(0xb6affb25711a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1118)})})}},1084:function(n,e,o){o(22),n.exports=function(n){return o.e(19498042071573,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1119)})})}},1085:function(n,e,o){o(22),n.exports=function(n){return o.e(0xd2a8dd507cf7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1120)})})}},1086:function(n,e,o){o(22),n.exports=function(n){return o.e(0x5ff2bd110486,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1121)})})}},1087:function(n,e,o){o(22),n.exports=function(n){return o.e(607661089621,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1122)})})}},1088:function(n,e,o){o(22),n.exports=function(n){return o.e(0xc30350785ac8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1123)})})}},1089:function(n,e,o){o(22),n.exports=function(n){return o.e(0xc379259e62e5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1124)})})}},1090:function(n,e,o){o(22),n.exports=function(n){return o.e(0xc493372da546,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1125)})})}},1091:function(n,e,o){o(22),n.exports=function(n){return o.e(0xb7d5edc40d70,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1126)})})}},1092:function(n,e,o){o(22),n.exports=function(n){return o.e(98600764858626,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1127)})})}},1093:function(n,e,o){o(22),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1128)})})}},1075:function(n,e,o){o(22),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(342)})})}},1094:function(n,e,o){o(22),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1129)})})}},1095:function(n,e,o){o(22),n.exports=function(n){return o.e(0xe04b99f58342,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1130)})})}},1096:function(n,e,o){o(22),n.exports=function(n){return o.e(21913033840098,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1131)})})}},1066:function(n,e,o){o(22),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(725)})})}},403:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(1),u=(t(a),o(723)),r=t(u),s=o(205),i=t(s),c=o(404),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},b="",v=[],R={},C=function(n){return n&&n.default||n},N=void 0,w=!0,k=[],_={},P={},E=5;N=o(726)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){v=v.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},S=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},A=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var a=C(t());g[e]=a,o(n,a)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),_[n]||(_[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},R={},v=[],y=[],b=""},addPagesArray:function(n){y=n,b="",p=(0,r.default)(n,b)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,b);if(!y.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(S);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,v.indexOf(t.jsonName)!==-1||h[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,v.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var u=a;u.unregister()}window.location.reload()}})),w=!1;if(_[e])return T(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return T(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!t.layoutComponentChunkName||r)){m[e]={component:a,json:u,layout:r,page:t};var n={component:a,json:u,layout:r,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&T(t.path,"Loading the component for "+t.path+" failed"),a=e,s()}),A(t.jsonName,function(n,e){n&&T(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&T(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(124))},1132:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blogs.json",path:"/blogs"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blogs-2.json",path:"/blogs/2"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blogs-3.json",path:"/blogs/3"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-git-stats-220318.json",path:"/data/posts/gitStats-220318/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-graphql-03122018.json",path:"/data/posts/graphql-03122018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-redmonk-jan-18.json",path:"/data/posts/redmonkJan18/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-open-source-10-tips.json",path:"/data/posts/open-source-10-tips/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-angular-js-useful-links.json",path:"/data/posts/AngularJS_useful_links/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-whitepapge-021218.json",path:"/data/posts/whitepapge-021218/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-022018.json",path:"/data/posts/white-paper-022018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-02142018.json",path:"/data/posts/white-paper-02142018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-dzone-23rd-jan.json",path:"/data/posts/white-paper-dzone-23rdJan/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-04.json",path:"/data/posts/white-paper-04/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-welcome.json",path:"/data/posts/welcome/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-challenges-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"challenges.json",path:"/challenges/"},{componentChunkName:"component---src-pages-github-stats-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"github-stats.json",path:"/githubStats/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-ppts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ppts.json",path:"/ppts/"},{componentChunkName:"component---src-pages-publications-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"publications.json",path:"/publications/"}]},726:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],u=function(){var n=e();n&&(a.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(285),r=o(1),s=t(r),i=o(34),c=t(i),l=o(153),p=o(1103),f=o(1043),d=t(f),m=o(339),h=o(724),g=t(h),y=o(205),j=t(y),x=o(1132),b=t(x),v=o(1133),R=t(v),C=o(722),N=t(C),w=o(721),k=t(w),_=o(403),P=t(_);o(785),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(b.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(727);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(r),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(f?f:h,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,r.createElement)(N.default,a({page:!0},t)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},1133:function(n,e){n.exports=[]},727:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(205),u=t(a),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},404:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},1043:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},22:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,u=o.s;o.e=function(t,r){var s=!1,i=!0,c=function(n){r&&(r(o,n),r=null)};return!u&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},1097:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},1065:function(n,e,o){o(22),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1098)})})}},1099:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},1289:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},1348:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},1067:function(n,e,o){o(22),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(761)})})}},1068:function(n,e,o){o(22),n.exports=function(n){return o.e(0x6751b2aea2de,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(762)})})}},1069:function(n,e,o){o(22),n.exports=function(n){return o.e(4873138857156,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(763)})})}},1070:function(n,e,o){o(22),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(764)})})}},1071:function(n,e,o){o(22),n.exports=function(n){return o.e(0xfe62bebdb1fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(765)})})}},1072:function(n,e,o){o(22),n.exports=function(n){return o.e(96068746775097,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(766)})})}},1073:function(n,e,o){o(22),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(770)})})}},1074:function(n,e,o){o(22),n.exports=function(n){return o.e(0x5eadfb0a5d2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(771)})})}}});
//# sourceMappingURL=app-46a7f7a42a04712b6b5a.js.map