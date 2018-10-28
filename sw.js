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
    "url": "webpack-runtime-7d86c02b887572bd56d9.js"
  },
  {
    "url": "app-3d5d6f452f85e0358c6d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ee66d3e9cfb40ffc8713.js"
  },
  {
    "url": "index.html",
    "revision": "e47b50a5a72f3c82525664a2c550847b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d0a11ef05c4072baae18eeae248b821a"
  },
  {
    "url": "3.532791e79fc0bb23dc60.css"
  },
  {
    "url": "component---src-pages-index-js-6412d2b247a3a9a389a5.js"
  },
  {
    "url": "0-a531ecd37fb98e871da5.js"
  },
  {
    "url": "1-5fc373df3207ae89655d.js"
  },
  {
    "url": "3-71553f73821be6922651.js"
  },
  {
    "url": "2-f6a94e7f3d5b001e3010.js"
  },
  {
    "url": "static/d/861/path---index-6a9-XKdT4aKLX9cCOPMzvvy1uoW9Pg.json",
    "revision": "1de884677b5f1ed50a794ea5382ee683"
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