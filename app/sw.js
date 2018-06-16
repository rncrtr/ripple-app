// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

// workbox.precaching.suppressWarnings();

// workbox.routing.registerRoute(/.*(?:cloudflare|googleapis|gstatic|bootstrapcdn|fontawesome)\.com.*$/,
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'cdn-assets',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 // Only cache requests for a day
//                 maxAgeSeconds: 1 * 24 * 60 * 60,
//                 // Only cache 10 requests.
//                 maxEntries: 10,
//             }),
//         ]
//     })
// );

// workbox.precaching.precacheAndRoute([]);

self.addEventListener('install',function (event) {
  console.log('[SW] Installing SW...', event);
  event.waitUntil(
    caches.open('static')
    .then(function(){
      console.log('[SW] Precaching App Shell');  
    });
  );
});

self.addEventListener('activate',function (event) {
  console.log('[SW] Activating SW...',event);
  return self.clients.claim();
});

self.addEventListener('activate', function (event) {
  event.respondWith(fetch(event.request));
});