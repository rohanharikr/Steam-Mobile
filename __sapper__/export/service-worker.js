!function(){"use strict";const e=["client/index.f92d8cc8.js","client/client.22c30164.js","client/profile.bbf2d1db.js","client/chat.b05487c8.js","client/Tabbar.bb05f444.js","client/support.dfcf42ea.js","client/store.d6a05b34.js","client/client.6483d945.js"].concat(["service-worker-index.html",".DS_Store","apple-brands.svg","chat.svg","chatwhite.svg","community.svg","configure.svg","dota2.svg","favicon.png","filter.svg","friendfour.png","friendone.png","friendthree.png","friendtwo.png","games.svg","global.css","gta.jpg","guard.svg","guardwhite.svg","halflifealyx.svg","images/.DS_Store","images/icons/icon-128x128.png","images/icons/icon-144x144.png","images/icons/icon-152x152.png","images/icons/icon-192x192.png","images/icons/icon-384x384.png","images/icons/icon-512x512.png","images/icons/icon-72x72.png","images/icons/icon-96x96.png","logo-192.png","logo-512.png","mac.svg","manifest.json","myaccount.svg","profile.svg","profilepicture.jpg","profilewhite.svg","purchases.svg","search.svg","stardewvalley.svg","steamlogo.svg","steamlogofull.svg","store.svg","storewhite.svg","support.svg","supportwhite.svg","trading.svg","user.svg","windows.svg"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1588930509965").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1588930509965"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588930509965").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const n=await s.match(e.request);if(n)return n;throw t}}))))})}();
