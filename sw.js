self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('simple-dtmf-tone-generator-web-app').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/sw.js',
        '/1.png',
        '/2.png',
        '/3.png',
        '/4.png',
        '/5.png',
        '/6.png',
        '/7.png',
        '/8.png',
        '/9.png',
        '/0.png',
        '/about-icon.png',
        '/blobs-l.svg',
        '/call.png',
        '/dialer-background-image.png',
        '/end_call.png',
        '/hash.png',
        '/hold.png',
        '/transfer.png',
        '/star.png',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
