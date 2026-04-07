const CACHE_NAME = 'teletv-v1';
const assets = [
  './',
  './index.html',
  './02_TeleTV_Logo.jpg',
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Active Service Worker
self.addEventListener('activate', evt => {
  console.log('TeleTv Service Worker Activated');
});

// Fetch events
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      return res || fetch(evt.request);
    })
  );
});
