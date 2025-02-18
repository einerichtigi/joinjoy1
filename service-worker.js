const CACHE_NAME = "offline-cache-v1";
const urlsToCache = [
  "home.html",
  "index.html",
  "la.html",
  "ne.html",
  "s2.html",
  "index2.html",
  "manifest.json",
  "123.png",
  "bild1.png",
  "bild2.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
