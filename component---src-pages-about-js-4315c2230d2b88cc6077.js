webpackJsonp([0xefeaa6d1881d],{425:function(e,t,a){(function(r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),d=(n(l),a(106)),u=a(89),i=n(u),o=function(e){return r.createElement(d.Card,null,r.createElement(d.CardHeader,{title:e.data.name,subtitle:e.data.maintainedBy,avatar:e.data.avatarUrl}),r.createElement(d.CardText,null,r.createElement("p",null,"Powered by: ",e.data.poweredBy),r.createElement("p",null,e.data.description)),r.createElement(d.CardActions,null,r.createElement(i.default,{href:e.data.githubProject,target:"_blank",label:"GITHUB LINK",secondary:!0})))};t.default=o,e.exports=t.default}).call(t,a(18))},437:function(e,t,a){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(1),l=(r(n),a(705)),d=r(l),u=a(425),i=r(u);t.default=function(t){var a=t.data,r=a.allGithubData.edges[0].node.data.organization,n={description:r.description,websiteUrl:r.websiteUrl,avatarUrl:r.avatarUrl,name:r.name,maintainedBy:a.site.siteMetadata.maintainedBy,poweredBy:a.site.siteMetadata.poweredBy,githubProject:a.site.siteMetadata.githubProject};return e.createElement("div",{className:d.default.About},e.createElement(i.default,{data:n}))};t.query="** extracted graphql fragment **"}).call(t,a(18))},705:function(e,t){e.exports={About:"src-pages----about-module---About---3r6ms"}}});
//# sourceMappingURL=component---src-pages-about-js-4315c2230d2b88cc6077.js.map