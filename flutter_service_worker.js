'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "f4ba0a7ef393d9fa79ffe4d4eb7f3236",
"assets/AssetManifest.bin.json": "afbcdb4b8ec64d8b33c8856a926a44b6",
"assets/AssetManifest.json": "060b676d0c569310a02e9285706a4b32",
"assets/assets/0969.png": "49c6191f71a0e01f914886785cde7179",
"assets/assets/1.jpg": "042a3af46eea816a3d7b0652a84c10e6",
"assets/assets/1.png": "475454e73ffbb0db21df4449be56c4da",
"assets/assets/2.png": "1857939d35c479e8076dd47f33f38c1e",
"assets/assets/321.png": "ad26688d53f52962ea484e6d640e4f94",
"assets/assets/affinity.png": "28ac35bbb196acf53303dfefd95b13a4",
"assets/assets/align.png": "d58ef2e5304a264ce299b2e57931ea06",
"assets/assets/alignjustify.png": "d58ef2e5304a264ce299b2e57931ea06",
"assets/assets/arrow-right.png": "4716a6f0d43ae4c6dcc066c9434604a3",
"assets/assets/arrow-up-right.png": "771a3375f23a670e305c50a1915202ce",
"assets/assets/arrowright_2.png": "d394738db4fe4533bb4a5837de53e5f7",
"assets/assets/arrowupight.png": "72fe01fd0d65a0340f53312f04bf6378",
"assets/assets/arrowupright1.png": "72fe01fd0d65a0340f53312f04bf6378",
"assets/assets/arrow_lef2.png": "a4663403466bdfb3702deb6228b71bfc",
"assets/assets/arrow_up_right.png": "771a3375f23a670e305c50a1915202ce",
"assets/assets/backrounimage.png": "0d921020ebfdbbdb960c415cd3fe615d",
"assets/assets/bola.png": "062166faa1e0f5bd52cf19b3c833e750",
"assets/assets/brendlar.png": "4f2d7bd3bfba588d9a59faa3434e28c1",
"assets/assets/carlson.png": "9ff977c30d9542efa15e6200f2447a03",
"assets/assets/chevron-left.png": "abe0137225fe36a375de2af3984f1445",
"assets/assets/chevronleft.png": "830205094b9255431bd57ea239721016",
"assets/assets/chevronleft_2.png": "e580fb39ce11ac871f9efb0b5b59c999",
"assets/assets/demo.png": "74fd9e8722fe6e14eae83812fbc0a8a3",
"assets/assets/demo_vidio_icon.png": "74fd9e8722fe6e14eae83812fbc0a8a3",
"assets/assets/dumaloq.png": "daa3dba3c7528c68c368a37913635433",
"assets/assets/dush.png": "efd67d9eada68afd4e0b4e52b3a2a680",
"assets/assets/dush2.png": "8cba3511eab7afd9cf0198bfd2d9fb50",
"assets/assets/Ellipse.png": "92ae7badfd68ca7dffdb829e6e0f1161",
"assets/assets/Ellipse4.png": "9d4dc700d5ca0d39eac9f044a55a2629",
"assets/assets/Facebook.png": "ad90569a898f94942a9dc20e6159bbd1",
"assets/assets/fasbook.png": "65705ac672170d182536ad8d7c6e888c",
"assets/assets/fonrasmi2.png": "2988ced7f865301fe1aa17f73eaa9356",
"assets/assets/fon_opo.png": "e9064e42fbb7623b8251a5559a31130c",
"assets/assets/h.png": "240b1eef6fb5dd275a9e1b75674ce3d0",
"assets/assets/hofffffflooooogooo.png": "a0c60107e6b4da4af7e9ba877671d4ec",
"assets/assets/hofflogo.png": "22b8845eaf0e9fd1a7379b1993e048d8",
"assets/assets/hofflogo2.png": "4c724fe47103dbc3142fe50a002fe3e9",
"assets/assets/hofflogolari2.png": "f4cb737b5331cfac873e5e35b90dd924",
"assets/assets/HOFFlogoqora.png": "c6386e9d71945b8ad4f3fdc30d5d2b4a",
"assets/assets/HOFFrasmtext.png": "dccf77f96f73204eb71acbca41e10e70",
"assets/assets/HOFF_laziz.png": "cbf2142ec1c1186414a612663309de59",
"assets/assets/hoff_logo1234.png": "240b1eef6fb5dd275a9e1b75674ce3d0",
"assets/assets/hoff_logo3.jpg": "4fc2b794283164948f96de53f2bc45f2",
"assets/assets/hoff_logo3.png": "4fc2b794283164948f96de53f2bc45f2",
"assets/assets/HOFF_Logo7.png": "57c508395e0a4334c7d01bbec6537b50",
"assets/assets/hoff_logolari.png": "c27a4f39a3b144a550e5f19baa4ea07c",
"assets/assets/HOFF_Logotype_Element_White%25203.png": "240b1eef6fb5dd275a9e1b75674ce3d0",
"assets/assets/HOFF_Logotype_jpg.jpg": "09c53126ad1a7231931d9bb8bbb44533",
"assets/assets/Hoff_logo_5.png": "3bfcf27541e932bffd92784b3d03aec8",
"assets/assets/HOFF_svg.svg": "e204231b286783700a04b430db7a9169",
"assets/assets/home_bckgr_img.png": "0f0f853dcf9f30567c4183064d5d3f13",
"assets/assets/images/alignjustify.png": "d58ef2e5304a264ce299b2e57931ea06",
"assets/assets/images/arrowupright1.png": "72fe01fd0d65a0340f53312f04bf6378",
"assets/assets/images/backrounimage.png": "0d921020ebfdbbdb960c415cd3fe615d",
"assets/assets/images/fasbook.png": "65705ac672170d182536ad8d7c6e888c",
"assets/assets/images/hofflogo.png": "22b8845eaf0e9fd1a7379b1993e048d8",
"assets/assets/images/hofflogolari2.png": "f4cb737b5331cfac873e5e35b90dd924",
"assets/assets/images/hoff_logo1234.png": "240b1eef6fb5dd275a9e1b75674ce3d0",
"assets/assets/images/hoff_logolari.png": "c27a4f39a3b144a550e5f19baa4ea07c",
"assets/assets/images/instagram.png": "5402d59923c41982496daf78170eeefc",
"assets/assets/images/iPhone15.png": "55b4d2322859be3f1949bb78d105954c",
"assets/assets/images/iPhone_15.png": "8c196e50c8ae934058c4c4301984f705",
"assets/assets/images/kontakt_image.png": "965a8b04e1db052b0796d902302bfcf4",
"assets/assets/images/kontakt_image_bacround.png": "965a8b04e1db052b0796d902302bfcf4",
"assets/assets/images/mail.png": "dca4a7d9d6c3aa86f26ea2af4a86c4bb",
"assets/assets/images/map.png": "c525ed9faa29ccf49851ccbb283365a8",
"assets/assets/images/orqa%2520rasm%2520kantakt.png": "0d5d31a2b9ef3703a7ced7c14fa2ea57",
"assets/assets/images/phone.png": "4ce100a18fec453712feeb63bea7fc75",
"assets/assets/images/Phone15.png": "55b4d2322859be3f1949bb78d105954c",
"assets/assets/images/search_2.png": "dd83451441d870c6771e732b46cfc9d7",
"assets/assets/images/telegram.png": "dac9fa8e5ef56976f1c8112d0568ba6a",
"assets/assets/images/telofon15.png": "8c196e50c8ae934058c4c4301984f705",
"assets/assets/instagram.png": "5402d59923c41982496daf78170eeefc",
"assets/assets/iPhone15.png": "55b4d2322859be3f1949bb78d105954c",
"assets/assets/iPhone_15.png": "8c196e50c8ae934058c4c4301984f705",
"assets/assets/justify.png": "d58ef2e5304a264ce299b2e57931ea06",
"assets/assets/justify_qora.png": "099587d47233373de2c071bc8d581b25",
"assets/assets/kisspng-kitchen-sink-bowl-sink-ceramic-asphalt-8-5b4b3dba272c53%25201.png": "dc73f7d9d1fa478fd702be694a7f070e",
"assets/assets/kontakt_image.png": "965a8b04e1db052b0796d902302bfcf4",
"assets/assets/kontakt_image_bacround.png": "965a8b04e1db052b0796d902302bfcf4",
"assets/assets/kottttaaarasmm.png": "09036755f36dd715ffa915a5732fcb69",
"assets/assets/kran.png": "2f74189eae5367b90024b04bcae83156",
"assets/assets/latras.png": "b2565640c3a9026a68bc9c2c5b01ad6f",
"assets/assets/logohoff.png": "220e9013e6ac11ff719ebed80d2a2caa",
"assets/assets/loro.png": "71bd89daa1342f03bfd78a4b83e1595d",
"assets/assets/loro2.png": "1e94db65e8eeda1ad2fd74f41e1223c1",
"assets/assets/loro3.png": "d080fab0fbdc7d766520fa33d1dd7ce5",
"assets/assets/loro4.png": "9fe23a72f9959e049a5d31c5be9e370d",
"assets/assets/mail.png": "dca4a7d9d6c3aa86f26ea2af4a86c4bb",
"assets/assets/map-pin.png": "0e2a5dc6653ac96dbc11c185b4d904fb",
"assets/assets/map.png": "c525ed9faa29ccf49851ccbb283365a8",
"assets/assets/moykani.png": "dc73f7d9d1fa478fd702be694a7f070e",
"assets/assets/moykani_rasmi.png": "8fadf5e999b116fdd3a03e32e0179979",
"assets/assets/new.png": "a545895437ff74d8c81c296fc85eafca",
"assets/assets/Nur.png": "6e64a775cc29e8c9c0aca4f6313835bd",
"assets/assets/okamanda2.png": "41165e68edc68a13ab38e66dcc4b3768",
"assets/assets/okamanda3rasm.png": "41165e68edc68a13ab38e66dcc4b3768",
"assets/assets/okamandaaa.png": "10dee42bd938996a3040b222e3207b55",
"assets/assets/okoampokottarasm.png": "5e4eb3345a64ab6dfdff04f3c16d775c",
"assets/assets/orqa%2520rasm%2520kantakt.png": "0d5d31a2b9ef3703a7ced7c14fa2ea57",
"assets/assets/pastgifon3.png": "0a771907bc707ad113f9ef7885d44346",
"assets/assets/pastifon4.png": "ccf47191c3f0f8facea7b5731b5e7b17",
"assets/assets/pastkifon.png": "898883196a909d92d790d81df5d6bc7e",
"assets/assets/pastkirang.png": "77c98697ef4e222573d463d9a873a92f",
"assets/assets/pastkirasm1.png": "296aa64a7819f492ed48604cd2d2a2ba",
"assets/assets/phone.png": "4ce100a18fec453712feeb63bea7fc75",
"assets/assets/Phone15.png": "55b4d2322859be3f1949bb78d105954c",
"assets/assets/play_circle.png": "253c9f2a7a5f685ff7d47750c455ce0c",
"assets/assets/qora1.png": "e99854a5b5997ebd0eae2591c85f9709",
"assets/assets/qora2.png": "b599a402b05242f1b0f5173b6fceef45",
"assets/assets/qora3.png": "b251b7a44537fbdba29c2ea649eb7d7c",
"assets/assets/qorafon123.png": "150a9e26fac5ed1e4ae73bf7a3414e41",
"assets/assets/qoratogrichiziq.png": "1ccc301e54ae4c0de147c54922a2d940",
"assets/assets/qora_pastki_chiziq.png": "0e047aacd50519c2aa98505e667eb6bd",
"assets/assets/Rakabina3.png": "7cfcc31c0fe7cf79912dcdd82f94210b",
"assets/assets/Rakavina.png": "8d452c052f196aad9182cc7cd5039a0e",
"assets/assets/Rakavina2.png": "cef0f41914dbd7e33f82ecb5e5f838c8",
"assets/assets/Rakavinaa.png": "def0b2d34fd36ca7d18501c647826195",
"assets/assets/rasm1.png": "ee4e8af3d1f98cc2e8d169fbf526b563",
"assets/assets/rasm1new.png": "e03929265b70909c7a939aea842e4174",
"assets/assets/rasm2.png": "07799949d027a61e32cf5f3303436fba",
"assets/assets/rasm3.png": "5a828898dc8047f6263819f3785b6763",
"assets/assets/rasm4.png": "d3da4474aad5c401a7acf23e9f0860a9",
"assets/assets/rasm5.png": "5aedfb738fd1f16dac827777fa999c30",
"assets/assets/rasm_okamp.png": "1123a1813e8021f972c421a5f07dfedf",
"assets/assets/rasm_okamp1.png": "c7001cf62b8fc5c589729c1637806640",
"assets/assets/rasm_okamp2.png": "a516b1682eb69fa1b251ecab1ccba739",
"assets/assets/rasm_okamp3.png": "c2ede0657fe2a71408c8587545843983",
"assets/assets/rasm_okampaniy_6.png": "462e980f5e91022c366117db52658857",
"assets/assets/rasm_okampany_4.png": "092834e0d60674c369f859c09a9fdff9",
"assets/assets/rasm_okampany_5.png": "e40fda8fc564c7622736f9c8d7ab2dec",
"assets/assets/reacton.png": "946206b34305d34085df8f0902c3af27",
"assets/assets/Rectangle%25204.png": "2d594fc5cb07ac8c8778ea45802e193f",
"assets/assets/Rectangle%2520_449.png": "ff6f30d6deec471778fe7d00ec6b2888",
"assets/assets/Rectangle_1.png": "9949365e081bbd0aaa1306efa2829e6c",
"assets/assets/Rectangle_321.png": "6562ad40f44c2a95a60f809ab7dd95db",
"assets/assets/Rectangle_4.png": "ea28478ecc2b0f6823cccd97ad9055b8",
"assets/assets/Rectangle_55.png": "9bdcb627781c2932a53a77a1d1cc3fc6",
"assets/assets/Rectangle_9.png": "dcd7fb6f4b98fa3f4c367ca64c554d9c",
"assets/assets/Rectangle_ab.png": "b78ea5cdcdcf304f43f16734589d2341",
"assets/assets/Rectangle_as.png": "230f539ffcc9829a7bf9f81a3eb3133f",
"assets/assets/Rectangle_kotta.png": "28cec6c7f6974f9052a4d4befd749093",
"assets/assets/Rectangle_m.png": "02c2a380d7cf9c70b858f8664c687078",
"assets/assets/Rectangle_oqfon.png": "2eea626b0e362bfa2cb89d62ccaa2614",
"assets/assets/Rectangle__123.png": "6d22f47051dc3524603710e023346027",
"assets/assets/search.png": "84ae3ff8970a4d42910a059bf020523c",
"assets/assets/search_2.png": "dd83451441d870c6771e732b46cfc9d7",
"assets/assets/search_qorarasm.png": "1de7394269b3c015466feee69eeece95",
"assets/assets/smisitet.png": "9b3d920ef353da762493900af1981905",
"assets/assets/telebola.png": "121084126e3022e603a40926b5b33f64",
"assets/assets/telegram.png": "dac9fa8e5ef56976f1c8112d0568ba6a",
"assets/assets/telofon15.png": "8c196e50c8ae934058c4c4301984f705",
"assets/assets/togrichiziq.png": "c912bd34e4264baf7c1d0cfd7bb55a7e",
"assets/assets/tortburchak_rasm.png": "81b0d0e163d9a9714a84e703cc3af7df",
"assets/assets/waterrbreak.png": "f09c1bf5c7ea0e0a22f41cdb8bf86929",
"assets/assets/xpert.png": "9bed4ef99010dcf1fbdc7ee669e69e3c",
"assets/assets/yangitelefonbola.jpg": "9b135897d8b6a67257316bcb681960fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "ae30945d845c4ef11bdf49663eaf38c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "db2adf1cd488b425450f24a6f4366885",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "effbf22f93111b9eb448507eac16ea0d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "c7e8e76a29f0f696ffce03bff31943ca",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66bf1c989894dde71ec50a247a721647",
"/": "66bf1c989894dde71ec50a247a721647",
"main.dart.js": "03c168496b74fbd1859f83ccc084a79f",
"manifest.json": "7eb410a21b35e7cf75ce0865d1790e6a",
"version.json": "10d57f7073cc418bd4ad0f106790f0c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
