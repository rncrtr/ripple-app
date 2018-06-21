importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.precaching.suppressWarnings();

workbox.routing.registerRoute(/.*(?:cloudflare|googleapis|gstatic|bootstrapcdn|fontawesome)\.com.*$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cdn-assets',
        plugins: [
            new workbox.expiration.Plugin({
                // Only cache requests for a day
                maxAgeSeconds: 1 * 24 * 60 * 60,
                // Only cache 10 requests.
                maxEntries: 10,
            }),
        ]
    })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "b464950fa89eae66712bc7910a839235"
  },
  {
    "url": "app.js",
    "revision": "8a51db70d193c85749bd3ee5809a42f5"
  },
  {
    "url": "assets/images/app-icon144.jpg",
    "revision": "8f61f80071340011cf7bb848948ab436"
  },
  {
    "url": "assets/images/app-icon192.jpg",
    "revision": "d894797b281b04d582856c97f89ac8dc"
  },
  {
    "url": "assets/images/app-icon48.jpg",
    "revision": "5300746a3ecf841dbac126a0bd94b4a9"
  },
  {
    "url": "assets/images/app-icon512.jpg",
    "revision": "2cea210c828fbc058642b64cacce13e1"
  },
  {
    "url": "assets/images/app-icon72.jpg",
    "revision": "41ce97b11a2bcafeea2fe91370c0f4f0"
  },
  {
    "url": "assets/images/app-icon96.jpg",
    "revision": "cdaec46976ba8a7fd928a5d4a6824b93"
  },
  {
    "url": "assets/images/discipleship/icon-download.png",
    "revision": "4e9e7ca283a3024d63ac53f47f357b8a"
  },
  {
    "url": "assets/images/discipleship/icon-outline.png",
    "revision": "c1e22505034ea0ee7482151d8494401d"
  },
  {
    "url": "assets/images/discipleship/icon-play.png",
    "revision": "3a7cfd1bfb7160ed4c641d5a277747e7"
  },
  {
    "url": "assets/images/loader.gif",
    "revision": "b2df0291708b7c0a76f129ad662eed31"
  },
  {
    "url": "assets/images/missions/betts.jpg",
    "revision": "17e7fa9e7fc404e90fb3b281f054c586"
  },
  {
    "url": "assets/images/missions/brazil.png",
    "revision": "58c23b047fb36bfbea3e4cb4b35f65c8"
  },
  {
    "url": "assets/images/missions/coupal.png",
    "revision": "b9ba9647ea3dc0624ab6f76136659b1b"
  },
  {
    "url": "assets/images/missions/fouse.jpg",
    "revision": "b0e21416aa6e2292b680f9dbc5b7dd70"
  },
  {
    "url": "assets/images/missions/fox.png",
    "revision": "1438e2ce8850b5818441bd031a84b9bb"
  },
  {
    "url": "assets/images/missions/ireland.png",
    "revision": "7c173f9652042da30c426f92cb494cce"
  },
  {
    "url": "assets/images/missions/johnsons.jpg",
    "revision": "9abdc9b7dc884304bdfbf4f1059e9acc"
  },
  {
    "url": "assets/images/missions/matthews.jpg",
    "revision": "3fad12e739a00ebee065a2b2a127aa8d"
  },
  {
    "url": "assets/images/missions/treu.jpg",
    "revision": "1e22ce6f88a527fc67483287fba20031"
  },
  {
    "url": "assets/images/missions/uganda.png",
    "revision": "21136e751f1ea573a32435808fe12aec"
  },
  {
    "url": "assets/images/missions/ukraine.png",
    "revision": "567c9f5e5ea081d910077fec4475ebcb"
  },
  {
    "url": "assets/images/missions/usa.jpg",
    "revision": "b9116db3b7da39e249d2500b4c80d9f0"
  },
  {
    "url": "assets/images/studies-banner.jpg",
    "revision": "4d52d06f01c16f6292cf42886167a457"
  },
  {
    "url": "assets/images/welcome-video-still.jpg",
    "revision": "e0787543f8cf7155f4fa6739c80c6557"
  },
  {
    "url": "assets/images/welcome-video-still2.jpg",
    "revision": "654f0f6f24df5da4eec8fd1cad8f029c"
  },
  {
    "url": "assets/images/wfc-logo.png",
    "revision": "f11812339f2ba44f22329e537025346d"
  },
  {
    "url": "assets/styles/all.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "assets/styles/bootstrap.min.css",
    "revision": "450fc463b8b1a349df717056fbb3e078"
  },
  {
    "url": "controllers.js",
    "revision": "c7fe12ccd6c04f8d32c73691f2e6d7b3"
  },
  {
    "url": "index.html",
    "revision": "cbb72acd7be0ae1be904f2993267555f"
  },
  {
    "url": "jquery.fn.js",
    "revision": "242ca3d790fa9ae3bc70555800bcd026"
  },
  {
    "url": "main.js",
    "revision": "586856b537644ec373e577dd291af1f3"
  }
]);