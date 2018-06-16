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

workbox.precaching.precacheAndRoute([]);