'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6f89c1e131af674c3da143b3a5b0ac4a",
"assets/AssetManifest.bin.json": "f30ef5741c72c4541d97c4dae39b45a1",
"assets/AssetManifest.json": "9f027e5ad93c4df0fceb8947be799b81",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Fontspring-DEMO-lufga-black.otf": "825da4e67e7900f623af59dfa776fcd2",
"assets/assets/fonts/Fontspring-DEMO-lufga-blackitalic.otf": "084de1142d62855ca71de886bde9c7d3",
"assets/assets/fonts/Fontspring-DEMO-lufga-bold.otf": "32e02322906d657c538dcb632e3e9d0c",
"assets/assets/fonts/Fontspring-DEMO-lufga-bolditalic.otf": "4d0d792f9c923e88c5a597adc0019a07",
"assets/assets/fonts/Fontspring-DEMO-lufga-extrabold.otf": "10b8da785911754ca0e28392f81b4563",
"assets/assets/fonts/Fontspring-DEMO-lufga-extrabolditalic.otf": "e123a09a70f4cd64c3c9fd8edea48647",
"assets/assets/fonts/Fontspring-DEMO-lufga-extralight.otf": "5d0abc06065c1705c90d45f9f58e1daf",
"assets/assets/fonts/Fontspring-DEMO-lufga-extralightitalic.otf": "ddf56999fa10614a943bb580aafab26f",
"assets/assets/fonts/Fontspring-DEMO-lufga-italic.otf": "6380abd9f362f145ac20e913251b96d0",
"assets/assets/fonts/Fontspring-DEMO-lufga-light.otf": "5dd4ee08837c310589924ac3b38f0a9f",
"assets/assets/fonts/Fontspring-DEMO-lufga-lightitalic.otf": "37849fa0d556ecfa2c4854b7c25ac16e",
"assets/assets/fonts/Fontspring-DEMO-lufga-medium.otf": "7454ff6fdfae4f978cd795688794c9d8",
"assets/assets/fonts/Fontspring-DEMO-lufga-mediumitalic.otf": "efaa4e28922ef67393fab668306c98fc",
"assets/assets/fonts/Fontspring-DEMO-lufga-regular.otf": "e9ece17473ed1c1cfffd76d52952bed4",
"assets/assets/fonts/Fontspring-DEMO-lufga-semibold.otf": "c360cdd6cf0e6d1e65e7a9ff6fd1609c",
"assets/assets/fonts/Fontspring-DEMO-lufga-semibolditalic.otf": "9a74373940e402838e68af31f8eb4449",
"assets/assets/fonts/Fontspring-DEMO-lufga-thin.otf": "d0b7e9934a872f697f6bb276d5e10dc6",
"assets/assets/fonts/Fontspring-DEMO-lufga-thinitalic.otf": "7f764ca9e1749023062c3fe7b55667aa",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/adaptive_foreground_icon.png": "a34a47932bb79c7534f95fe148023919",
"assets/assets/images/app_launcher_icon.png": "a34a47932bb79c7534f95fe148023919",
"assets/assets/images/error_image.png": "02d03fded9b723209ea8f571add2cc2f",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/finass-logo.png": "7a888b35c0b10911c1c53f83ae97770e",
"assets/assets/images/Prancheta_1.png": "7a0ae60cd401401a60ad8302b23352d4",
"assets/assets/images/Prancheta_17_cpia.png": "24545dff4febce1a230399f5888adba1",
"assets/assets/images/Prancheta_18.png": "a34a47932bb79c7534f95fe148023919",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "b70cc9be5c0c460e2f6af9b6e6c1ba6b",
"assets/fonts/MaterialIcons-Regular.otf": "45930dfd8af7aa57dab30ef88ed37687",
"assets/NOTICES": "1d8ba9e11d260cb27339bbd14704913e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"Design_sem_nome-removebg-preview.png": "216d787add795513de66467aad90b3f4",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e497a84f0a97d609805df4e0a15512f8",
"icons/app_launcher_icon.png": "a34a47932bb79c7534f95fe148023919",
"icons/error_image.png": "02d03fded9b723209ea8f571add2cc2f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7c67af6593ea9ab6369d5c6e6fb11fec",
"/": "7c67af6593ea9ab6369d5c6e6fb11fec",
"main.dart.js": "93893ca6c6cae0828eb0662e8bcf7ad1",
"manifest.json": "19040c4a0a647df86eef9f7106a19d8f",
"Prancheta_17_cpia.png": "24545dff4febce1a230399f5888adba1",
"version.json": "b94cf6ed92a3fc64784b29820188cbdf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
