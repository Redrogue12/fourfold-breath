// self.addEventListener('install', function (event) {
//   event.waitUntil(
//     caches.open('Fourfold')
//       .then(function (cache) {
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/style.css',
//           '/index.js'
//         ])
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (res) {
//         return res;
//       })
//   );
// });