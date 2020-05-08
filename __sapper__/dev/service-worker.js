(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1588930509965;

	const files = [
		"service-worker-index.html",
		".DS_Store",
		"apple-brands.svg",
		"chat.svg",
		"chatwhite.svg",
		"community.svg",
		"configure.svg",
		"dota2.svg",
		"favicon.png",
		"filter.svg",
		"friendfour.png",
		"friendone.png",
		"friendthree.png",
		"friendtwo.png",
		"games.svg",
		"global.css",
		"gta.jpg",
		"guard.svg",
		"guardwhite.svg",
		"halflifealyx.svg",
		"images/.DS_Store",
		"images/icons/icon-128x128.png",
		"images/icons/icon-144x144.png",
		"images/icons/icon-152x152.png",
		"images/icons/icon-192x192.png",
		"images/icons/icon-384x384.png",
		"images/icons/icon-512x512.png",
		"images/icons/icon-72x72.png",
		"images/icons/icon-96x96.png",
		"logo-192.png",
		"logo-512.png",
		"mac.svg",
		"manifest.json",
		"myaccount.svg",
		"profile.svg",
		"profilepicture.jpg",
		"profilewhite.svg",
		"purchases.svg",
		"search.svg",
		"stardewvalley.svg",
		"steamlogo.svg",
		"steamlogofull.svg",
		"store.svg",
		"storewhite.svg",
		"support.svg",
		"supportwhite.svg",
		"trading.svg",
		"user.svg",
		"windows.svg"
	];

	const shell = [
		"client/index.f92d8cc8.js",
		"client/client.22c30164.js",
		"client/profile.bbf2d1db.js",
		"client/chat.b05487c8.js",
		"client/Tabbar.bb05f444.js",
		"client/support.dfcf42ea.js",
		"client/store.d6a05b34.js",
		"client/client.6483d945.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU4ODkzMDUwOTk2NTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIuRFNfU3RvcmVcIixcblx0XCJhcHBsZS1icmFuZHMuc3ZnXCIsXG5cdFwiY2hhdC5zdmdcIixcblx0XCJjaGF0d2hpdGUuc3ZnXCIsXG5cdFwiY29tbXVuaXR5LnN2Z1wiLFxuXHRcImNvbmZpZ3VyZS5zdmdcIixcblx0XCJkb3RhMi5zdmdcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImZpbHRlci5zdmdcIixcblx0XCJmcmllbmRmb3VyLnBuZ1wiLFxuXHRcImZyaWVuZG9uZS5wbmdcIixcblx0XCJmcmllbmR0aHJlZS5wbmdcIixcblx0XCJmcmllbmR0d28ucG5nXCIsXG5cdFwiZ2FtZXMuc3ZnXCIsXG5cdFwiZ2xvYmFsLmNzc1wiLFxuXHRcImd0YS5qcGdcIixcblx0XCJndWFyZC5zdmdcIixcblx0XCJndWFyZHdoaXRlLnN2Z1wiLFxuXHRcImhhbGZsaWZlYWx5eC5zdmdcIixcblx0XCJpbWFnZXMvLkRTX1N0b3JlXCIsXG5cdFwiaW1hZ2VzL2ljb25zL2ljb24tMTI4eDEyOC5wbmdcIixcblx0XCJpbWFnZXMvaWNvbnMvaWNvbi0xNDR4MTQ0LnBuZ1wiLFxuXHRcImltYWdlcy9pY29ucy9pY29uLTE1MngxNTIucG5nXCIsXG5cdFwiaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmdcIixcblx0XCJpbWFnZXMvaWNvbnMvaWNvbi0zODR4Mzg0LnBuZ1wiLFxuXHRcImltYWdlcy9pY29ucy9pY29uLTUxMng1MTIucG5nXCIsXG5cdFwiaW1hZ2VzL2ljb25zL2ljb24tNzJ4NzIucG5nXCIsXG5cdFwiaW1hZ2VzL2ljb25zL2ljb24tOTZ4OTYucG5nXCIsXG5cdFwibG9nby0xOTIucG5nXCIsXG5cdFwibG9nby01MTIucG5nXCIsXG5cdFwibWFjLnN2Z1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJteWFjY291bnQuc3ZnXCIsXG5cdFwicHJvZmlsZS5zdmdcIixcblx0XCJwcm9maWxlcGljdHVyZS5qcGdcIixcblx0XCJwcm9maWxld2hpdGUuc3ZnXCIsXG5cdFwicHVyY2hhc2VzLnN2Z1wiLFxuXHRcInNlYXJjaC5zdmdcIixcblx0XCJzdGFyZGV3dmFsbGV5LnN2Z1wiLFxuXHRcInN0ZWFtbG9nby5zdmdcIixcblx0XCJzdGVhbWxvZ29mdWxsLnN2Z1wiLFxuXHRcInN0b3JlLnN2Z1wiLFxuXHRcInN0b3Jld2hpdGUuc3ZnXCIsXG5cdFwic3VwcG9ydC5zdmdcIixcblx0XCJzdXBwb3J0d2hpdGUuc3ZnXCIsXG5cdFwidHJhZGluZy5zdmdcIixcblx0XCJ1c2VyLnN2Z1wiLFxuXHRcIndpbmRvd3Muc3ZnXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvaW5kZXguZjkyZDhjYzguanNcIixcblx0XCJjbGllbnQvY2xpZW50LjIyYzMwMTY0LmpzXCIsXG5cdFwiY2xpZW50L3Byb2ZpbGUuYmJmMmQxZGIuanNcIixcblx0XCJjbGllbnQvY2hhdC5iMDU0ODdjOC5qc1wiLFxuXHRcImNsaWVudC9UYWJiYXIuYmIwNWY0NDQuanNcIixcblx0XCJjbGllbnQvc3VwcG9ydC5kZmNmNDJlYS5qc1wiLFxuXHRcImNsaWVudC9zdG9yZS5kNmEwNWIzNC5qc1wiLFxuXHRcImNsaWVudC9jbGllbnQuNjQ4M2Q5NDUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9wcm9maWxlXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdXBwb3J0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdG9yZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvY2hhdFxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsLCByb3V0ZXMgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3BlbihBU1NFVFMpXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XG5cdFx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XG5cdFx0fSlcblx0KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuXHRpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybjtcblxuXHQvLyBpZ25vcmUgZGV2IHNlcnZlciByZXF1ZXN0c1xuXHRpZiAodXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnQpIHJldHVybjtcblxuXHQvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZVxuXHRpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcblx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XG5cdC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuXHQvKlxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Ki9cblxuXHRpZiAoZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJykgcmV0dXJuO1xuXG5cdC8vIGZvciBldmVyeXRoaW5nIGVsc2UsIHRyeSB0aGUgbmV0d29yayBmaXJzdCwgZmFsbGluZyBiYWNrIHRvXG5cdC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3Vcblx0Ly8gbWlnaHQgcHJlZmVyIGEgY2FjaGUtZmlyc3QgYXBwcm9hY2ggdG8gYSBuZXR3b3JrLWZpcnN0IG9uZS4pXG5cdGV2ZW50LnJlc3BvbmRXaXRoKFxuXHRcdGNhY2hlc1xuXHRcdFx0Lm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKVxuXHRcdFx0LnRoZW4oYXN5bmMgY2FjaGUgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0Y2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG5cdFx0XHRcdFx0dGhyb3cg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
