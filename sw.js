var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    'Torakichin.github.io/pwa/',
    'Torakichin.github.io/pwa/app.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
