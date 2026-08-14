const CACHE = 'classical-architecture-v30';
const ASSETS = [
  './',
  './index.html',
  './art.html',
  './category.html',
  './random.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/style.css',
  './assets/app.js',
  './assets/reader.js',
  './assets/elements-data.js',
  './assets/styles-data.js',
  './assets/tryit-data.js',
  './assets/daily-data.js',
  './credits.html',
  './assets/image-credits.json',
  './assets/styles/greek.jpg',
  './assets/styles/roman.jpg',
  './assets/styles/renaissance.jpg',
  './assets/styles/palladian.jpg',
  './assets/styles/baroque.jpg',
  './assets/styles/neoclassical.jpg',
  './assets/styles/greek-revival.jpg',
  './assets/styles/gothic-revival.jpg',
  './assets/orders/tuscan.jpg',
  './assets/orders/doric.jpg',
  './assets/orders/ionic.jpg',
  './assets/orders/corinthian.jpg',
  './assets/orders/composite.jpg',
  './assets/elements/foundation.jpg',
  './assets/elements/orders.jpg',
  './assets/elements/proportion.jpg',
  './assets/elements/ornament.jpg',
  './assets/elements/building-types.jpg',
  './assets/elements/materials.jpg',
  './assets/daily/quote.jpg',
  './assets/daily/think.jpg',
  './assets/daily/do.jpg',
  './assets/daily/verse.jpg',
  './assets/daily/passage.jpg',
  './assets/daily/word.jpg',
  './assets/detail/mouldings.jpg',
  './assets/detail/egg-and-dart.jpg',
  './assets/detail/greek-key.jpg',
  './assets/detail/polychromy.jpg',
  './assets/detail/portrait-loos.jpg',
  './assets/detail/portrait-gibbons.jpg',
  './assets/detail/portrait-ruskin.jpg',
  './assets/detail/portrait-pugin.jpg',
  './assets/detail/portrait-owen-jones.jpg',
  './assets/detail/grammar-plate.jpg',
  './assets/detail/honesty.jpg',
  './assets/detail/decorum.jpg',
  './assets/detail/acanthus-scroll.jpg',
  './library.html',
  './assets/reading-list.json',
  './assets/detail/path-ornament.jpg',
  './assets/detail/greek-hephaestus.jpg',
  './assets/detail/portrait-hadrian.jpg',
  './assets/detail/portrait-jefferson.jpg',
  './assets/detail/portrait-michelangelo.jpg',
  './assets/detail/portrait-wren.jpg',
  './assets/detail/portrait-soufflot.jpg',
  './assets/detail/portrait-soane.jpg',
  './assets/detail/portrait-schinkel.jpg',
  './assets/detail/portrait-adam.jpg',
  './assets/detail/neo-pompeii.jpg',
  './assets/detail/neo-laugier.jpg',
  './assets/detail/neo-crescent.jpg',
  './assets/detail/neo-boullee.jpg',
  './assets/detail/neo-apollo.jpg',
  './assets/detail/neo-adam.jpg',
  './assets/detail/portrait-vanbrugh.jpg',
  './assets/detail/portrait-borromini.jpg',
  './assets/detail/portrait-bernini.jpg',
  './assets/detail/bar-stpauls.jpg',
  './assets/detail/bar-sancarlo.jpg',
  './assets/detail/bar-gesu.jpg',
  './assets/detail/bar-cornaro.jpg',
  './assets/detail/bar-cathedra.jpg',
  './assets/detail/bar-baldacchino.jpg',
  './assets/detail/portrait-bramante.jpg',
  './assets/detail/portrait-alberti.jpg',
  './assets/detail/portrait-brunelleschi.jpg',
  './assets/detail/ren-vasari.jpg',
  './assets/detail/ren-stpeters.jpg',
  './assets/detail/ren-tempietto.jpg',
  './assets/detail/ren-palazzo.jpg',
  './assets/detail/ren-laurentian.jpg',
  './assets/detail/portrait-inigojones.jpg',
  './assets/detail/portrait-palladio.jpg',
  './assets/detail/pall-plate.jpg',
  './assets/detail/pall-window.jpg',
  './assets/detail/pall-templefront.jpg',
  './assets/detail/pall-house.jpg',
  './assets/detail/pall-farm.jpg',
  './assets/detail/pall-church.jpg',
  './assets/detail/roman-vitruvius.jpg',
  './assets/detail/roman-pantheon-in.jpg',
  './assets/detail/roman-vault.jpg',
  './assets/detail/roman-forum.jpg',
  './assets/detail/roman-concrete.jpg',
  './assets/detail/greek-antiquities.jpg',
  './assets/detail/greek-entasis.jpg',
  './assets/detail/greek-colonnade.jpg',
  './assets/detail/greek-orders.jpg',
  './assets/detail/greek-kit.jpg',
  './assets/detail/gr-secondbank.jpg',
  './assets/detail/gr-capitol.jpg',
  './assets/detail/gr-britishmuseum.jpg',
  './assets/detail/gr-walhalla.jpg',
  './assets/detail/portrait-stuart.jpg',
  './assets/detail/portrait-latrobe.jpg',
  './assets/detail/portrait-klenze.jpg',
  './assets/detail/portrait-thomson.jpg',
  './assets/detail/gt-contrasts.jpg',
  './assets/detail/gt-craft.jpg',
  './assets/detail/gt-church.jpg',
  './assets/detail/gt-allsaints.jpg',
  './assets/detail/gt-carcassonne.jpg',
  './assets/detail/gt-strawberry.jpg',
  './assets/detail/gt-vault.jpg',
  './assets/detail/portrait-pugin.jpg',
  './assets/detail/portrait-barry.jpg',
  './assets/detail/portrait-ruskin.jpg',
  './assets/detail/portrait-scott.jpg',
  './assets/detail/portrait-butterfield.jpg',
  './assets/detail/portrait-violletleduc.jpg',
  './assets/detail/ord-fiveorders.jpg',
  './assets/detail/ord-rustic.jpg',
  './assets/detail/ord-paestum.jpg',
  './assets/detail/ord-erechtheion.jpg',
  './assets/detail/ord-lysicrates.jpg',
  './assets/detail/ord-pantheon-portico.jpg',
  './assets/detail/ord-modillions.jpg',
  './assets/detail/ord-archoftitus.jpg',
  './assets/detail/ord-septimius.jpg',
  './assets/detail/ord-ionicfrieze.jpg',
  './assets/detail/tus-covent.jpg',
  './assets/detail/tus-arch.jpg',
  './assets/detail/portrait-serlio.jpg',
  './assets/detail/portrait-vignola.jpg',
  './assets/detail/portrait-scamozzi.jpg',
  './assets/detail/prop-vitruvianman.jpg',
  './assets/detail/prop-doublecube.jpg',
  './assets/detail/prop-golden.jpg',
  './assets/detail/prop-alberti.jpg',
  './assets/detail/prop-georgianroom.jpg',
  './assets/detail/bt-belfast.jpg',
  './assets/detail/mat-facing.jpg',
  './assets/detail/portrait-summerson.jpg',
  './assets/detail/portrait-lutyens.jpg',
  './quiz.html',
  './assets/quiz-data.js',
  './assets/quiz/doric-capital.jpg',
  './assets/quiz/ionic-capital.jpg',
  './assets/quiz/corinthian-capital.jpg',
  './assets/quiz/composite-capital.jpg',
  './assets/quiz/triglyph-frieze.jpg',
  './assets/quiz/pediment.jpg',
  './assets/quiz/round-arch.jpg',
  './assets/quiz/pointed-arch.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
    // Force any open window still running the OLD shell to reload into this
    // fresh network-first worker — breaks a stuck cache-first install without
    // needing a manual force-quit.
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) {
      try { await client.navigate(client.url); } catch (_) {}
    }
  })());
});

// NETWORK-FIRST for the app shell (HTML / JS / CSS / JSON) so a new deploy is
// picked up the moment the device is online — no more stale versions. Images
// stay CACHE-FIRST for speed and offline. Everything still falls back to cache
// when the network is unavailable, so the app keeps working offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isShell =
    e.request.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    /\.(?:html|js|css|json)$/.test(url.pathname);

  if (isShell) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for images / icons / other static assets.
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit ||
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
    )
  );
});
