const CACHE_NAME = 'music-player-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './pict_stop.png',
  './pict_play.png',
  './IRIS OUT.mp3',
  './カリスマックス.mp3',
  './シルエット.mp3',
  './ライラック.mp3',
  './唱.mp3',
  './夜に駆ける.mp3'
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
