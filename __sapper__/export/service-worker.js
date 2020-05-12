!(function () {
  'use strict'
  const e = [
      'client/stores.e90cc3d3.js',
      'client/index.29f82212.js',
      'client/client.a2d7c62a.js',
      'client/profile.ee3110ac.js',
      'client/Tabbar.2448f4e0.js',
      'client/support.039d087f.js',
      'client/chat.0f7245f4.js',
      'client/client.17c49226.js',
      'client/store.76bd8298.js',
    ].concat([
      'service-worker-index.html',
      '.DS_Store',
      'apple-brands.svg',
      'chat-active.svg',
      'chat.svg',
      'community.svg',
      'configure.svg',
      'dota2.svg',
      'favicon.png',
      'filter.svg',
      'friendfour.png',
      'friendone.png',
      'friendthree.png',
      'friendtwo.png',
      'games.svg',
      'global.css',
      'gta.jpg',
      'guard-active.svg',
      'guard.svg',
      'halflifealyx.svg',
      'logo-192.png',
      'logo-512.png',
      'mac.svg',
      'myaccount.svg',
      'profile-active.svg',
      'profile.svg',
      'profilepicture.jpg',
      'purchases.svg',
      'search.svg',
      'stardewvalley.svg',
      'steam mobile.sketch',
      'steambrand.svg',
      'steamlogo.svg',
      'steamlogofull.svg',
      'steammusic.svg',
      'store-active.svg',
      'store.svg',
      'support-active.svg',
      'support.svg',
      'trading.svg',
      'user.svg',
      'windows.svg',
    ]),
    t = new Set(e)
  self.addEventListener('install', (t) => {
    t.waitUntil(
      caches
        .open('cache1589314998998')
        .then((t) => t.addAll(e))
        .then(() => {
          self.skipWaiting()
        })
    )
  }),
    self.addEventListener('activate', (e) => {
      e.waitUntil(
        caches.keys().then(async (e) => {
          for (const t of e)
            'cache1589314998998' !== t && (await caches.delete(t))
          self.clients.claim()
        })
      )
    }),
    self.addEventListener('fetch', (e) => {
      if ('GET' !== e.request.method || e.request.headers.has('range')) return
      const s = new URL(e.request.url)
      s.protocol.startsWith('http') &&
        ((s.hostname === self.location.hostname &&
          s.port !== self.location.port) ||
          (s.host === self.location.host && t.has(s.pathname)
            ? e.respondWith(caches.match(e.request))
            : 'only-if-cached' !== e.request.cache &&
              e.respondWith(
                caches.open('offline1589314998998').then(async (t) => {
                  try {
                    const s = await fetch(e.request)
                    return t.put(e.request, s.clone()), s
                  } catch (s) {
                    const a = await t.match(e.request)
                    if (a) return a
                    throw s
                  }
                })
              )))
    })
})()
