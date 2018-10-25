/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d6f2e2e33d36a1517f4d.js"
  },
  {
    "url": "app-c623fff098f585a8e571.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ee66d3e9cfb40ffc8713.js"
  },
  {
    "url": "index.html",
    "revision": "1a0e92a82e9a9d6d3f85bc955e351a87"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b5fb6ad226e9f68d669547e3aff3fe73"
  },
  {
    "url": "3.532791e79fc0bb23dc60.css"
  },
  {
    "url": "component---src-pages-index-js-04f9d4bb6f9ef3a39a5f.js"
  },
  {
    "url": "0-fc57aa1be120b4975341.js"
  },
  {
    "url": "1-27cd5a2bccf764cfa638.js"
  },
  {
    "url": "3-a6dc7c191bd75fd0e5b8.js"
  },
  {
    "url": "2-f2db314256364475eda4.js"
  },
  {
    "url": "static/d/162/path---index-6a9-VcEb1rzoxgu8ipUMceZsbXzCk.json",
    "revision": "bceb57c4e5ed535b4f6a7e896df84c44"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a1153fda830c2f1f6f502c35b0e09834"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});