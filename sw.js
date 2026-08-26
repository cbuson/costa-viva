const CACHE = 'costa-viva-v13'
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
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE)
    await Promise.all(APP_SHELL.map(async path => {
      const response = await fetch(path, { cache: 'reload' })
      if (response.ok) await cache.put(path, response)
    }))
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)

  if (url.hostname === 'tile.openstreetmap.org' || url.hostname === 'server.arcgisonline.com') {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })))
    return
  }

  if (url.origin !== self.location.origin) return

  // Online first for the app itself. This prevents an old installed/cache-first
  // version from hiding new interface controls after an update.
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request, { cache: 'no-cache' })
      if (response && response.ok) {
        const cache = await caches.open(CACHE)
        cache.put(event.request, response.clone())
      }
      return response
    } catch (error) {
      const cached = await caches.match(event.request, { ignoreSearch: true })
      if (cached) return cached
      if (event.request.mode === 'navigate') {
        return (await caches.match('./index.html')) || (await caches.match('./'))
      }
      throw error
    }
  })())
})
