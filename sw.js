// sw.js

const CACHE_NAME = 'simple-dtmf-dialer-cache';
const urlsToCache = [
  '/',
  'about-icon.png',
  'blobs-l.svg',
  'dialer-background-image.png',
  '1.png',
  '2.png',
  '3.png',
  'call.png',
  '4.png',
  '5.png',
  '6.png',
  'end_call.png',
  '7.png',
  '8.png',
  '9.png',
  'hold.png',
  'star.png',
  '0.png',
  'hash.png',
  'transfer.png',
  'icon.png',
  'index.html',
  'sw.js',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
