webpackJsonp([0xd2a57dc1d883],{277:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var u=[{plugin:o(1062),options:{plugins:[],trackingId:"UA-119197833-1",head:!1,anonymize:!0,respectDNT:!0,exclude:[]}},{plugin:o(1064),options:{plugins:[]}}]},658:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(1030),"component---src-templates-index-js":o(1039),"component---src-templates-blog-post-js":o(1038),"component---src-pages-about-js":o(1032),"component---src-pages-challenges-js":o(1033),"component---src-pages-github-stats-js":o(1034),"component---src-pages-ppts-js":o(1035),"component---src-pages-projects-js":o(1036),"component---src-pages-publications-js":o(1037)},e.json={"layout-index.json":o(1040),"offline-plugin-app-shell-fallback.json":o(1058),"index.json":o(1057),"2.json":o(1041),"3.json":o(1042),"data-posts-git-stats-220318.json":o(1046),"data-posts-graphql-03122018.json":o(1047),"data-posts-redmonk-jan-18.json":o(1049),"data-posts-open-source-10-tips.json":o(1048),"data-posts-angular-js-useful-links.json":o(1045),"data-posts-whitepapge-021218.json":o(1055),"data-posts-white-paper-022018.json":o(1052),"data-posts-white-paper-02142018.json":o(1051),"data-posts-white-paper-dzone-23rd-jan.json":o(1054),"data-posts-white-paper-04.json":o(1053),"data-posts-welcome.json":o(1050),"about.json":o(1043),"challenges.json":o(1044),"github-stats.json":o(1056),"ppts.json":o(1059),"projects.json":o(1060),"publications.json":o(1061)},e.layouts={"layout---index":o(1031)}},659:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(2),p=t(l),f=o(422),d=t(f),m=o(208),h=t(m),g=o(277),y=o(1478),j=t(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(o){a(this,e);var t=u(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},208:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(1338),u=t(a),r=(0,u.default)();n.exports=r},660:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(136),u=o(423),r=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,r.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},661:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(331),u=t(a),r=o(277),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},1041:function(n,e,o){o(20),n.exports=function(n){return o.e(0x8f0ce58d3892,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1075)})})}},1042:function(n,e,o){o(20),n.exports=function(n){return o.e(0xa66b96fba949,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1076)})})}},1043:function(n,e,o){o(20),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1077)})})}},1044:function(n,e,o){o(20),n.exports=function(n){return o.e(6981150134586,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1078)})})}},1045:function(n,e,o){o(20),n.exports=function(n){return o.e(0xdf1455e454d7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1079)})})}},1046:function(n,e,o){o(20),n.exports=function(n){return o.e(0xd8ca4a6e26fe,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1080)})})}},1047:function(n,e,o){o(20),n.exports=function(n){return o.e(0xb6affb25711a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1081)})})}},1048:function(n,e,o){o(20),n.exports=function(n){return o.e(19498042071573,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1082)})})}},1049:function(n,e,o){o(20),n.exports=function(n){return o.e(0xd2a8dd507cf7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1083)})})}},1050:function(n,e,o){o(20),n.exports=function(n){return o.e(0x5ff2bd110486,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1084)})})}},1051:function(n,e,o){o(20),n.exports=function(n){return o.e(607661089621,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1085)})})}},1052:function(n,e,o){o(20),n.exports=function(n){return o.e(0xc30350785ac8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1086)})})}},1053:function(n,e,o){o(20),n.exports=function(n){return o.e(0xc379259e62e5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1087)})})}},1054:function(n,e,o){o(20),n.exports=function(n){return o.e(0xc493372da546,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1088)})})}},1055:function(n,e,o){o(20),n.exports=function(n){return o.e(0xb7d5edc40d70,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1089)})})}},1056:function(n,e,o){o(20),n.exports=function(n){return o.e(98600764858626,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1090)})})}},1057:function(n,e,o){o(20),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1091)})})}},1040:function(n,e,o){o(20),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(336)})})}},1058:function(n,e,o){o(20),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1092)})})}},1059:function(n,e,o){o(20),n.exports=function(n){return o.e(0xe04b99f58342,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1093)})})}},1060:function(n,e,o){o(20),n.exports=function(n){return o.e(97786326051841,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1094)})})}},1061:function(n,e,o){o(20),n.exports=function(n){return o.e(21913033840098,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1095)})})}},1031:function(n,e,o){o(20),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(662)})})}},422:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(1),u=(t(a),o(660)),r=t(u),s=o(208),i=t(s),c=o(423),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,w=!0,k=[],_={},P={},E=5;N=o(663)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},S=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},A=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var a=C(t());g[e]=a,o(n,a)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),_[n]||(_[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},R={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="",p=(0,r.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(S);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var u=a;u.unregister()}window.location.reload()}})),w=!1;if(_[e])return T(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return T(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!t.layoutComponentChunkName||r)){m[e]={component:a,json:u,layout:r,page:t};var n={component:a,json:u,layout:r,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&T(t.path,"Loading the component for "+t.path+" failed"),a=e,s()}),A(t.jsonName,function(n,e){n&&T(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&T(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(72))},1096:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2.json",path:"/2"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"3.json",path:"/3"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-git-stats-220318.json",path:"/data/posts/gitStats-220318/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-graphql-03122018.json",path:"/data/posts/graphql-03122018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-redmonk-jan-18.json",path:"/data/posts/redmonkJan18/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-open-source-10-tips.json",path:"/data/posts/open-source-10-tips/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-angular-js-useful-links.json",path:"/data/posts/AngularJS_useful_links/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-whitepapge-021218.json",path:"/data/posts/whitepapge-021218/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-022018.json",path:"/data/posts/white-paper-022018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-02142018.json",path:"/data/posts/white-paper-02142018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-dzone-23rd-jan.json",path:"/data/posts/white-paper-dzone-23rdJan/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-white-paper-04.json",path:"/data/posts/white-paper-04/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"data-posts-welcome.json",path:"/data/posts/welcome/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-challenges-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"challenges.json",path:"/challenges/"},{componentChunkName:"component---src-pages-github-stats-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"github-stats.json",path:"/githubStats/"},{componentChunkName:"component---src-pages-ppts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ppts.json",path:"/ppts/"},{componentChunkName:"component---src-pages-projects-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-publications-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"publications.json",path:"/publications/"}]},663:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],u=function(){var n=e();n&&(a.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(277),r=o(1),s=t(r),i=o(33),c=t(i),l=o(136),p=o(1068),f=o(991),d=t(f),m=o(333),h=o(661),g=t(h),y=o(208),j=t(y),x=o(1096),v=t(x),b=o(1097),R=t(b),C=o(659),N=t(C),w=o(658),k=t(w),_=o(422),P=t(_);o(713),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(664);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(r),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(f?f:h,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,r.createElement)(N.default,a({page:!0},t)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},1097:function(n,e){n.exports=[]},664:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(208),u=t(a),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},423:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},991:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},20:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,u=o.s;o.e=function(t,r){var s=!1,i=!0,c=function(n){r&&(r(o,n),r=null)};return!u&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},1062:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},1030:function(n,e,o){o(20),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(1063)})})}},1064:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},1338:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},1478:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},1032:function(n,e,o){o(20),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(690)})})}},1033:function(n,e,o){o(20),n.exports=function(n){return o.e(0x6751b2aea2de,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(691)})})}},1034:function(n,e,o){o(20),n.exports=function(n){return o.e(4873138857156,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(692)})})}},1035:function(n,e,o){o(20),n.exports=function(n){return o.e(0xfe62bebdb1fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(693)})})}},1036:function(n,e,o){o(20),n.exports=function(n){return o.e(0xc260c743ec7c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(694)})})}},1037:function(n,e,o){o(20),n.exports=function(n){return o.e(96068746775097,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(695)})})}},1038:function(n,e,o){o(20),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(696)})})}},1039:function(n,e,o){o(20),n.exports=function(n){return o.e(0x5eadfb0a5d2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(697)})})}}});
//# sourceMappingURL=app-16a181c8d1c805fad5eb.js.map