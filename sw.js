const CACHE_NAME = 'music-player-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './pict_stop.png',
  './pict_play.png',
  './bgm1.mp3',
  './bgm2.mp3',
  './bgm3.mp3',
  './bgm4.mp3',
  './bgm5.mp3',
  './bgm6.mp3',
  './bgm7.mp3'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// オフライン時はキャッシュから応答
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
