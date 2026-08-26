const CACHE = 'costa-viva-v6'
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './LICENSE',
  './CONTENT-LICENSE.md',
  './PROJECT.md'
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)

  if (url.hostname === 'tile.openstreetmap.org') {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })))
    return
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (url.origin === self.location.origin) {
        const clone = response.clone()
        caches.open(CACHE).then(cache => cache.put(event.request, clone))
      }
      return response
    }).catch(() => caches.match('./index.html')))
  )
})
