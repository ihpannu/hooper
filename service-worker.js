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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3f686ccbc5426886b1e7a3386342a19d"
  },
  {
    "url": "api.html",
    "revision": "75cf06fdf5ada677f5cb637de4e4f25d"
  },
  {
    "url": "assets/css/0.styles.e95674e1.css",
    "revision": "1f377936f711fec19251ff9d139d38b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.39f5fd0c.js",
    "revision": "8ac94c699dd7b378e3998b695f9db84f"
  },
  {
    "url": "assets/js/3.106196a2.js",
    "revision": "446579dd1c41ced831fc8e03833712b8"
  },
  {
    "url": "assets/js/4.93479cf9.js",
    "revision": "4c048ef06becbf241612eeb5061fff68"
  },
  {
    "url": "assets/js/5.59999568.js",
    "revision": "0be7245a290478c4060e57c30cedbf54"
  },
  {
    "url": "assets/js/6.fe950e9f.js",
    "revision": "ec9b39bf374a674e3b513e5693dcf63f"
  },
  {
    "url": "assets/js/7.5cef7884.js",
    "revision": "87b7c1ecd34ba2d55f2465b46ecb77e6"
  },
  {
    "url": "assets/js/app.3d8a21b4.js",
    "revision": "15a6b1814864d3ba42188b18974c575b"
  },
  {
    "url": "examples.html",
    "revision": "35627c3e0ecfb34626af1e2a7967aad1"
  },
  {
    "url": "getting-started.html",
    "revision": "c3e49493b550a9bbb20ab0ad2b7b7e0f"
  },
  {
    "url": "hooper.svg",
    "revision": "e138dfdb27cd6a48518049a5571ce28d"
  },
  {
    "url": "index.html",
    "revision": "b5fffe3c618be1f541ea073fa567ddf9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
