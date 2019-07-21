importScripts("cache-polyfill.js");

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("IT-Future").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/index.html?homescreen=1",
        "/materialize.min.js",
        "/main.css",
        "/materialize.min.css",
        "/error.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
