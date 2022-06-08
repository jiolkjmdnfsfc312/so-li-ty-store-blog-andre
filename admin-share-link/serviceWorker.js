const staticDevCoffee = "solity-v2"
const assets = [
  "/",
  "../../index.html",
  "../../assets/css/styles.css",
  "../../assets/js/script.js",
  "../../assets/js/app.js",
  "/images/coffee1.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })