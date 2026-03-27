const CACHE_NAME = 'music-player-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './pict_stop.png',
  './pict_play.png',
  './廻廻奇譚.mp3',
  './LOST IN PARADISE.mp3',
  './青のすみか.mp3',
  './SPECIALZ.mp3',
  './AIZO.mp3',
  './好きすぎて滅！.mp3'
];

// インストール
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 有効化
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

// フェッチ
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
