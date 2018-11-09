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
    "url": "webpack-runtime-5135940f5264859fffeb.js"
  },
  {
    "url": "app-306caa533bc7649d905d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ee66d3e9cfb40ffc8713.js"
  },
  {
    "url": "index.html",
    "revision": "3245c4ecfb786c520595ff9b46742c88"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e7f7935dff02c86ed91da80a0198b9b3"
  },
  {
    "url": "3.532791e79fc0bb23dc60.css"
  },
  {
    "url": "component---src-pages-index-js-cbee1c90bcba5ff2a642.js"
  },
  {
    "url": "0-00098139095f6425600b.js"
  },
  {
    "url": "1-2b713cde7048206409c3.js"
  },
  {
    "url": "3-71553f73821be6922651.js"
  },
  {
    "url": "2-16723b8fa1cb7075ba5c.js"
  },
  {
    "url": "static/d/908/path---index-6a9-6XeqI1XWmHpsH0p35FV0NhaHA50.json",
    "revision": "1cb16a904e3aa780599ec3939d4e76cf"
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