// profiles.js — the single-page "read it all in one place" entries.
//
// When a topic id has a PROFILE here, art.html renders ONE rich scrolling page
// (overview → at a glance → key features → how to spot it → memory aids →
// famous buildings → the architects → FAQ → reading) instead of the older
// tap-into-five-sub-tiles landing. Topics without a profile still fall back to
// the sub-tile landing, so this can be rolled out one topic at a time.
//
// Schema (every field optional except essence + overview):
//   essence     — one strong line shown under the name
//   atGlance[]  — { label, value } quick-fact chips
//   overview[]  — paragraphs of flowing prose (the "by the end you get it" read)
//   overviewImage — { src, caption } one hero figure inside the overview
//   features[]  — { name, body, image?, caption? } the key parts
//   spot[]      — bullet strings; wrap key terms in <u>…</u>
//   memory[]    — { kick, text } memory aids / mnemonics
//   examples[]  — { name, where, image, note } famous buildings to go and see
//   architects[]— { name, portrait?, what, works?[], link? }
//   faq[]       — { q, a } shown as tap-open drop-downs
//   books[]     — { title, author, note }  (PRIMARY sources first)

window.PROFILES = {

  doric: {
    essence: 'The oldest and gravest of the Greek orders — the order of the Parthenon, and the standard of dignified strength every later order was measured against.',
    atGlance: [
      { label: 'Where it began', value: 'Greek mainland & the western colonies, from the 7th century BC' },
      { label: 'Its great age', value: '5th-century Athens (the Parthenon), reborn in the Greek Revival c.1750–1850' },
      { label: 'Tell it by', value: 'No base, and a frieze of triglyphs and metopes' },
      { label: 'Its character', value: 'Grave, muscular, plain — the order of strength' },
    ],
    overview: [
      'The Doric is the first and simplest of the three Greek orders: a fluted column that rises without any base straight from the temple floor, crowned by a plain cushion capital, carrying a frieze of alternating triglyphs and metopes. It is the order of the Parthenon, and for two and a half thousand years it has stood for dignified, unshowy strength.',
      'The ancients read it as the order of the male body — Vitruvius derived its sturdy proportions from a man — and so it was given to temples of the sterner gods. Ever since, builders who want a wall to look grave and permanent have reached for Doric: it is why so many banks, courthouses and war memorials wear plain columns and a triglyph frieze.',
      'There are really two Dorics. Greek Doric has no base, stands straight on the platform and is often stocky, even heavy. Roman Doric adds a moulded base, slims the column and tidies the details. The missing base is the fastest way to tell the two apart.',
    ],
    overviewImage: { src: 'assets/styles/greek.jpg', caption: 'The Parthenon, Athens — the supreme Doric temple, and the model for the whole order.' },
    features: [
      { name: 'No base — straight from the floor', image: 'assets/orders/doric.jpg', caption: 'Greek Doric rises with no base — the column as a growing thing, not a placed object.',
        body: 'The Greek Doric column meets the temple platform directly, with no base between shaft and stone. It gives the order a look of rooted, elemental strength found nowhere else. (The later Roman Doric adds a base and a slimmer profile.)' },
      { name: 'The plain cushion capital', image: 'assets/quiz/doric-capital.jpg', caption: 'A round cushion (echinus) under a square slab (abacus) — no scrolls, no leaves.',
        body: 'The Doric capital is the plainest of all: a round cushion, the echinus, under a square slab, the abacus. Below it the shaft is cut with shallow flutes that meet in sharp ridges, with no flat band between them. Plain cap, knife-edged flutes: Doric.' },
      { name: 'Triglyphs and metopes', image: 'assets/quiz/triglyph-frieze.jpg', caption: 'Grooved triglyphs alternating with metope panels — the memory of timber beam-ends, in stone.',
        body: 'The Doric signature is its frieze: triglyphs, blocks cut with three vertical grooves, alternating with metopes, the panels between, often carved with battle and myth. They are thought to remember, in stone, the projecting beam-ends of the first timber temples. No other order has them.' },
      { name: 'Corrections you are not meant to see', image: 'assets/detail/greek-entasis.jpg', caption: 'The gentle swelling of the shaft (entasis) — a correction made for the eye.',
        body: 'The Parthenon has almost no truly straight lines: the columns lean slightly inward, swell at the middle (entasis), and the platform curves gently upward. These adjustments counter the eye’s tendency to read long straight lines as sagging. The order lives in the refinements, not the ruler.' },
    ],
    spot: [
      'The band above the columns alternates grooved <u>triglyphs</u> with panel <u>metopes</u> — guaranteed Doric, no other order has it.',
      'No base at all, the shaft straight onto the platform, means <u>Greek Doric</u>; a moulded base means the slimmer <u>Roman Doric</u>.',
      'The capital is a plain round cushion (the <u>echinus</u>) under a square slab (the <u>abacus</u>) — never scrolls, never leaves.',
      'Sight up a large shaft against the sky and look for the faint swelling in the middle — the <u>entasis</u> you are not meant to notice.',
    ],
    memory: [
      { kick: 'The five, in order', text: 'Plainest to richest: Tuscan, Doric, Ionic, Corinthian, Composite. Doric is second — one plain step up from bare Tuscan.' },
      { kick: 'Doric in three marks', text: 'No base. Knife-edged flutes. A triglyph-and-metope frieze. See those three together and you are looking at Greek Doric.' },
      { kick: 'Read capitals like haircuts', text: 'Doric wears a plain cap, Ionic a pair of rolled scrolls, Corinthian a crown of leaves. The plainer the head, the older and graver the order.' },
      { kick: 'Vitruvius’s three people', text: 'The ancients pictured Doric as a strong man, Ionic as a matron with scrolled hair, Corinthian as a slender girl. Sturdy and unadorned? It is thinking of the man.' },
    ],
    examples: [
      { name: 'The Parthenon', where: 'Athens · 447–432 BC', image: 'assets/detail/greek-colonnade.jpg', note: 'The supreme Doric temple, built under Pericles by Iktinos and Kallikrates — and the model for every later revival.' },
      { name: 'Temple of Hephaestus', where: 'Athens · c.449 BC', image: 'assets/detail/greek-hephaestus.jpg', note: 'The best-preserved of all Greek temples, standing almost whole above the ancient market of Athens.' },
      { name: 'The temples at Paestum', where: 'Campania, Italy · 6th–5th c. BC', image: 'assets/detail/ord-paestum.jpg', note: 'Massive, stubby early Doric with swollen shafts — the order before the rulebooks tidied its proportions.' },
      { name: 'Walhalla', where: 'Regensburg, Germany · 1842', image: 'assets/detail/gr-walhalla.jpg', note: 'A full-size Parthenon rebuilt on the Danube by Leo von Klenze — Greek Revival Doric at its most literal.' },
      { name: 'Second Bank of the United States', where: 'Philadelphia · 1824', image: 'assets/detail/gr-secondbank.jpg', note: 'A Doric temple-front bank — proof of how the order came to mean solidity and trust.' },
    ],
    architects: [
      { name: 'Iktinos & Kallikrates', what: 'The architects of the Parthenon, the supreme Doric temple, built under Pericles in 5th-century Athens.',
        works: ['The Parthenon, Athens', 'The Temple of Apollo at Bassae (Iktinos)'], link: 'https://en.wikipedia.org/wiki/Ictinus' },
      { name: 'The builders of Paestum', what: 'The anonymous masters whose massive early Doric temples in southern Italy survive almost complete.',
        works: ['Temple of Hera I (“the Basilica”)', 'Temple of Hera II (“of Neptune”)'], link: 'https://en.wikipedia.org/wiki/Paestum' },
      { name: 'James “Athenian” Stuart', portrait: 'assets/detail/portrait-stuart.jpg', what: 'Whose measured drawings of Athens launched the Greek Revival and put true Greek Doric into modern hands.',
        works: ['<i>The Antiquities of Athens</i> (with Revett)', 'The Doric temple at Hagley, 1758'], link: 'https://en.wikipedia.org/wiki/James_Stuart_(1713%E2%80%931788)' },
      { name: 'Leo von Klenze', portrait: 'assets/detail/portrait-klenze.jpg', what: 'The Bavarian architect who rebuilt the Parthenon as the Walhalla, the high-water mark of Doric revival.',
        works: ['Walhalla, Regensburg', 'The Glyptothek, Munich'], link: 'https://en.wikipedia.org/wiki/Leo_von_Klenze' },
    ],
    faq: [
      { q: 'What is the difference between Greek and Roman Doric?', a: 'Greek Doric has no base, stands straight on the temple platform and is often stocky. Roman Doric adds a moulded base, slims the column and tidies the ancient details. The quickest test is simply to look for a base — no base means Greek.' },
      { q: 'Why do Greek Doric columns have no base?', a: 'It is the order at its most elemental: the fluted shaft rising straight from the floor like a growing thing rather than an object set down. Roman builders later added a base for a lighter, more regular look, but the Greek original went without.' },
      { q: 'What are triglyphs and metopes?', a: 'The triglyph is the block cut with three vertical grooves; the metope is the panel between, often carved. They run in an alternating band — the frieze — above the columns, and are thought to remember, in stone, the beam-ends of the first timber temples.' },
      { q: 'What is the famous “Doric corner problem”?', a: 'The rules say a triglyph should sit over the centre of each column and each gap, and that the frieze should also end with a triglyph at the very corner. Both cannot be true at once, so Greek builders quietly adjusted the spacing near the corners. The awkwardness is one reason some later architects preferred the more forgiving Ionic.' },
      { q: 'Is Doric older than Ionic?', a: 'They arose at about the same time, in the 7th century BC, but in different places — Doric on the mainland and the western colonies, Ionic in the Greek east. Doric is the plainer of the two and feels the more primitive.' },
      { q: 'Where can I see Doric near me?', a: 'Look for Greek Revival banks, courthouses, museums and war memorials built roughly between 1780 and 1850. Many wear plain columns and a triglyph frieze copied straight from Athens.' },
    ],
    books: [
      { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The ancient account of the Doric and its frieze. Free online.' },
      { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio’s plates of the Doric, with his proportions. Free scans.' },
      { title: 'The Stones of Athens', author: 'R. E. Wycherley', note: 'ON-RAMP. How the Doric temple actually worked inside its ancient city.' },
      { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. Clear measured drawings for learning the order by hand.' },
    ],
  },

  tuscan: {
    essence: 'The plainest and strongest of the five — an unfluted column stripped to its bones. Rome’s own home-grown order of solidity and utility.',
    atGlance: [
      { label: 'Where it began', value: 'Italy — descended from Etruscan temple-building, adopted by Rome' },
      { label: 'Its great age', value: 'Roman practice; codified and named by the Renaissance rulebooks from the 1500s' },
      { label: 'Tell it by', value: 'A smooth, unfluted shaft with no carving anywhere — plain top to bottom' },
      { label: 'Its character', value: 'Sturdy, grounded, rustic — solid and dependable' },
    ],
    overview: [
      'The Tuscan is the simplest of the five orders: a sturdy, unfluted column on a plain base, a plain cushion capital, and a bare entablature with nothing carved on it. It is essentially the Doric stripped to its bones.',
      'Where the refined orders came from Greece, the Tuscan is Italic — descended from Etruscan temple-building and adopted by Rome as its plain native order. Vitruvius describes the Etruscan temple; the Renaissance theorists then placed the Tuscan first in the row of five.',
      'Because it is plainest and strongest, it is the order of the base and the gateway: the rusticated ground floor that carries richer orders above, the foot of a triumphal arch, the honest wall that needs no decoration. To choose Tuscan was to say “solid and dependable” before a word of ornament was spoken.',
    ],
    overviewImage: { src: 'assets/orders/tuscan.jpg', caption: 'The Tuscan column — smooth and unfluted, plain from top to bottom.' },
    features: [
      { name: 'The unfluted shaft — its fastest tell', image: 'assets/orders/tuscan.jpg', caption: 'Smooth and unfluted, with a plain cushion capital and no carving.',
        body: 'Alone among the orders, the Tuscan shaft is characteristically smooth and unfluted, with a plain cushion capital (a round echinus under a square abacus) and no carving anywhere on the entablature. A sturdy, smooth column, plain top to bottom, is almost certainly Tuscan.' },
      { name: 'A simplified Doric, and Rome’s own', image: 'assets/detail/tus-covent.jpg', caption: 'Inigo Jones’s St Paul’s, Covent Garden — a stern Tuscan portico.',
        body: 'Where the refined orders came from Greece, the Tuscan is Italic — descended from Etruscan temple-building and adopted by Rome, essentially a Doric with the ornament stripped off. It is a reminder that the tradition was never purely Greek: the plainest order is the home-grown one.' },
      { name: 'The order of rustic strength', image: 'assets/detail/ord-rustic.jpg', caption: 'A rusticated ground floor — the Tuscan’s stocky, grounded strength put to work.',
        body: 'Stocky in the rulebooks at about seven column-diameters high — the shortest and thickest of the five — the Tuscan reads as sturdy, grounded and rustic. To choose it was to say “solid and dependable” before a single word of ornament.' },
      { name: 'The base of the building', image: 'assets/detail/tus-arch.jpg', caption: 'A plain rusticated gateway: Tuscan set lowest, carrying richer orders above.',
        body: 'Because it is plainest and strongest, the Tuscan is often placed lowest, carrying richer orders above it — the ground floor of a palace, the base of a triumphal arch, the rusticated storey beneath the show. It introduces the whole hierarchy: plain and strong at the bottom, rich and slender at the top.' },
    ],
    spot: [
      'The shaft is smooth and <u>unfluted</u>, the capital a plain cushion, and nothing is carved on the entablature — that bareness, top to bottom, is the Tuscan signature.',
      'Look low: the ground floor of a palazzo, the base of an arch, a <u>rusticated</u> basement carrying richer orders above. Tuscan is the foot of the building.',
      'Don’t confuse it with <u>Roman Doric</u>: Tuscan has an unfluted shaft and no triglyph frieze; Roman Doric is usually fluted and keeps its triglyphs and metopes.',
    ],
    memory: [
      { kick: 'The five, in order', text: 'Tuscan, Doric, Ionic, Corinthian, Composite — plainest to richest. Tuscan comes first: barer even than Doric.' },
      { kick: 'Tuscan is “Doric shaved”', text: 'Take a Doric column, smooth off the flutes and strip away the triglyph frieze, and you have the Tuscan. Plain where Doric is merely simple.' },
      { kick: 'Plain, strong, low', text: 'The barer the order, the stronger it reads and the lower it sits. Tuscan — the barest — belongs at the bottom of the building.' },
    ],
    examples: [
      { name: 'St Paul’s, Covent Garden', where: 'London · 1633', image: 'assets/detail/tus-covent.jpg', note: 'Inigo Jones’s stern Tuscan portico, once called “the handsomest barn in England” — the order used for calm, unpretending dignity.' },
      { name: 'The rusticated palace base', where: 'A habit, not one building', image: 'assets/detail/ord-rustic.jpg', note: 'Not a single building but a rule: the plain Tuscan storey, often rusticated, carrying richer Ionic and Corinthian above it on palaces across Europe.' },
      { name: 'The gateway and the arch', where: 'Wherever strength must show', image: 'assets/detail/tus-arch.jpg', note: 'Tuscan’s grounded strength suits the gate and the base of the triumphal arch — the places that must simply look solid.' },
    ],
    architects: [
      { name: 'Vitruvius', what: 'First to describe the Etruscan/Tuscan temple in writing, giving the order its ancient authority.',
        works: ['<i>De Architectura</i> (Ten Books on Architecture)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
      { name: 'Sebastiano Serlio', portrait: 'assets/detail/portrait-serlio.jpg', what: 'First to picture all five orders together as a set (1537), placing the Tuscan at the head of the row.',
        works: ['<i>Tutte l’opere d’architettura et prospetiva</i>'], link: 'https://en.wikipedia.org/wiki/Sebastiano_Serlio' },
      { name: 'Giacomo da Vignola', portrait: 'assets/detail/portrait-vignola.jpg', what: 'Whose Rule of the Five Orders fixed the Tuscan’s proportions in the form most later builders used.',
        works: ['<i>Regola delli cinque ordini</i>', 'Villa Farnese, Caprarola', 'The Church of the Gesù, Rome'], link: 'https://en.wikipedia.org/wiki/Jacopo_Barozzi_da_Vignola' },
      { name: 'Inigo Jones', portrait: 'assets/detail/portrait-inigojones.jpg', what: 'Who used a stern Tuscan to great effect at St Paul’s, Covent Garden — “the handsomest barn in England”.',
        works: ['St Paul’s, Covent Garden', 'The Banqueting House, Whitehall', 'The Queen’s House, Greenwich'], link: 'https://en.wikipedia.org/wiki/Inigo_Jones' },
    ],
    faq: [
      { q: 'What is the difference between Tuscan and Doric?', a: 'Both are plain and sturdy, but the Tuscan is plainer still: its shaft is smooth and unfluted and it has no triglyph-and-metope frieze. Doric is usually fluted and keeps that frieze. Think of Tuscan as Doric with the flutes and the frieze removed.' },
      { q: 'Why are there so few ancient Tuscan buildings?', a: 'The Etruscans built largely in wood and terracotta, so little survives, and later Roman work blurs the Tuscan into Roman Doric. The order is known chiefly from Vitruvius’s written description and Renaissance reconstruction — it was reconstructed as much as revived.' },
      { q: 'Where do I usually see the Tuscan?', a: 'At the bottom. It is the classic choice for a rusticated ground floor, a gateway, or the base of a triumphal arch — anywhere the job is strength rather than display, carrying richer orders above.' },
      { q: 'Is Tuscan a Greek order?', a: 'No — it is the one order that is not Greek. It is Italic, descended from Etruscan temple-building and made Rome’s own plain order: a reminder that the classical tradition always mixed the imported ideal with the local and useful.' },
    ],
    books: [
      { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The ancient description of the Etruscan/Tuscan temple. Free in the Morgan translation; needs a modern gloss to map onto the five orders.' },
      { title: 'Regola delli cinque ordini', author: 'Giacomo da Vignola, 1562', note: 'PRIMARY. The most influential rulebook of the orders ever made — Vignola’s plates fixed the Tuscan’s proportions for three centuries.' },
      { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. The clearest modern manual, with measured drawings of all five.' },
      { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Short and elegant, on why an order means something.' },
    ],
  },

  ionic: {
    essence: 'The graceful middle order — slender, standing on a moulded base, known everywhere by the pair of scrolls that curl from its capital. The order of learning and grace.',
    atGlance: [
      { label: 'Where it began', value: 'Ionia and the Greek east, from the 6th century BC' },
      { label: 'Its great age', value: 'Classical Athens (the Erechtheion); revived across the museums and libraries of the modern age' },
      { label: 'Tell it by', value: 'A pair of scrolls (volutes) on the capital, a moulded base, a continuous frieze' },
      { label: 'Its character', value: 'Slender, cultivated, graceful — the order of the mind' },
    ],
    overview: [
      'The Ionic is the graceful order that sits between the grave Doric and the ornate Corinthian. Its shaft is slimmer and taller than the Doric, it stands on a moulded base, and it is known everywhere by the pair of spiral scrolls — volutes — that curl from its capital.',
      'The ancients read it as a mature, cultivated character; Vitruvius likened its fluting to the folds of a robe and its volutes to curled hair. Where the Doric is the order of strength, the Ionic is the order of learning and grace.',
      'Its frieze runs as one unbroken band rather than being divided into panels, ideal for a continuous carved procession, and its cornice often carries a row of small tooth-like blocks called dentils. From antiquity onward it was felt to suit places of thought — temples to Apollo and Athena, and later the libraries, museums and schools of the modern world.',
    ],
    overviewImage: { src: 'assets/detail/gr-britishmuseum.jpg', caption: 'The British Museum’s Ionic colonnade — the order chosen for places of learning.' },
    features: [
      { name: 'The volute', image: 'assets/quiz/ionic-capital.jpg', caption: 'A pair of scrolls — spot them and you have named the order in one glance.',
        body: 'The scroll capital is the Ionic’s signature — a pair of spirals, thought to derive from a rolled cushion, a ram’s horns or a nautilus shell, linked by a shallow cushion. It is the single easiest capital to recognise.' },
      { name: 'A base, and filleted flutes', image: 'assets/orders/ionic.jpg', caption: 'The Ionic stands on a moulded base, its slimmer shaft cut with fillet-separated flutes.',
        body: 'Unlike the Greek Doric, the Ionic always stands on a moulded base, and its slimmer shaft is cut with deeper flutes separated by small flat bands (fillets) rather than the sharp ridges of the Doric. These are the confirming details below the capital.' },
      { name: 'Slenderness and grace', image: 'assets/detail/ord-erechtheion.jpg', caption: 'The Erechtheion’s Ionic porch — taller and thinner than the Doric.',
        body: 'The Ionic is proportioned taller and thinner than the Doric — about nine diameters high in the rulebooks. The ancients gave it a mature, matronly character; to choose it was to say “civilised, learned, graceful”, which is why it clothes so many libraries and universities.' },
      { name: 'A continuous frieze and dentils', image: 'assets/detail/ord-ionicfrieze.jpg', caption: 'A continuous frieze for a flowing procession, with a row of tooth-like dentils above.',
        body: 'Where the Doric frieze is broken into triglyphs and metopes, the Ionic frieze runs as one unbroken band, ideal for a continuous carved procession, and its cornice characteristically carries a row of dentils — small tooth-like blocks. A story can flow around the whole building.' },
    ],
    spot: [
      'Look only at the top of the column: a pair of spiral <u>volutes</u> means Ionic — the fastest identification in all of classical architecture.',
      'Confirm below with a moulded <u>base</u> and flutes separated by little flat <u>fillets</u>, and look up for a row of <u>dentils</u> in the cornice.',
      'See whether the band above the columns is one continuous carved procession (Ionic) rather than broken into panels (Doric).',
      'Notice the building — a library, museum, university or bank — and feel the “cultivated and calm” note the order was chosen to strike.',
    ],
    memory: [
      { kick: 'Read capitals like haircuts', text: 'Doric a plain cap, Ionic a pair of rolled scrolls, Corinthian a crown of leaves. Scrolls at the top = Ionic.' },
      { kick: 'Ionic = ram’s horns', text: 'Picture two ram’s horns, or a sheet of paper rolled at both ends, resting on the column. That is the volute — the Ionic in one image.' },
      { kick: 'The order of the mind', text: 'When a library, museum or school wears columns, they are usually Ionic. Learning chose the graceful middle order.' },
      { kick: 'Vitruvius’s three people', text: 'Doric a strong man, Ionic a mature matron with scrolled hair, Corinthian a slender girl. The Ionic is the matron.' },
    ],
    examples: [
      { name: 'The Erechtheion', where: 'Athens · 421–406 BC', image: 'assets/detail/ord-erechtheion.jpg', note: 'The elegant Ionic temple on the Acropolis, with its famous Porch of the Maidens — the order’s Greek masterpiece.' },
      { name: 'The British Museum', where: 'London · 1852', image: 'assets/detail/gr-britishmuseum.jpg', note: 'Robert Smirke’s great Ionic colonnade — the Greek Revival choosing the order of learning for the nation’s museum.' },
    ],
    architects: [
      { name: 'The architects of the Erechtheion', what: 'Whose elegant Ionic temple on the Acropolis, with its Porch of the Maidens, is the order’s masterpiece.',
        works: ['The Erechtheion, Acropolis, Athens'], link: 'https://en.wikipedia.org/wiki/Erechtheion' },
      { name: 'Hermogenes', what: 'The Hellenistic architect whose refined Ionic temples Vitruvius held up as models of correct proportion.',
        works: ['The Temple of Artemis Leucophryene, Magnesia', 'The Temple of Dionysus, Teos'], link: 'https://en.wikipedia.org/wiki/Hermogenes_(architect)' },
      { name: 'Vincenzo Scamozzi', portrait: 'assets/detail/portrait-scamozzi.jpg', what: 'Whose four-faced Ionic capital, with volutes turned out on every side, became a widely copied standard — “the Scamozzi Ionic”.',
        works: ['<i>L’idea della architettura universale</i>', 'The “Scamozzi Ionic” capital', 'Teatro Olimpico, Vicenza (completion)'], link: 'https://en.wikipedia.org/wiki/Vincenzo_Scamozzi' },
      { name: 'Nicholas Revett & James Stuart', portrait: 'assets/detail/portrait-stuart.jpg', what: 'Whose Antiquities of Athens brought accurate Greek Ionic to Britain and fuelled the Greek Revival.',
        works: ['<i>The Antiquities of Athens</i>'], link: 'https://en.wikipedia.org/wiki/Nicholas_Revett' },
    ],
    faq: [
      { q: 'How do I tell Ionic from the other orders?', a: 'Look at the capital. A pair of spiral scrolls (volutes) is Ionic. A plain cushion is Doric or Tuscan; a bell of leaves is Corinthian; scrolls sitting on top of leaves is Composite. The scroll is the Ionic’s one unmistakable mark.' },
      { q: 'What is a volute, and where does it come from?', a: 'The volute is the spiral scroll of the Ionic capital. Its origin was romanticised even in antiquity — explained variously as a rolled cushion, a ram’s horns, a nautilus shell or curled hair. Vitruvius likened it to the ringlets of a woman’s hairstyle.' },
      { q: 'Why is Ionic used on libraries and museums?', a: 'The ancients gave each order a character, and the Ionic’s was cultivated grace rather than raw strength. When the modern age built temples to learning, it reached for the order that already meant refinement and calm.' },
      { q: 'What are dentils?', a: 'Dentils are the little square tooth-like blocks set in a row under the cornice. They are a common Ionic (and Corinthian) tell: glance up at the top moulding and count the small repeating teeth.' },
    ],
    books: [
      { title: 'De Architectura, Books III–IV', author: 'Vitruvius', note: 'PRIMARY. The ancient rules for the Ionic and the famous story of the volute. Free online.' },
      { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio’s Ionic plates and proportions. Free scans.' },
      { title: 'The Antiquities of Athens', author: 'Stuart & Revett, 1762', note: 'PRIMARY (modern). The measured drawings that gave Europe accurate Greek Ionic — the Erechtheion above all.' },
      { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Places the Ionic within the whole grammar clearly and briefly.' },
    ],
  },

  corinthian: {
    essence: 'The most ornate of the Greek orders — the slenderest column, crowned by a tall capital of carved acanthus leaves. The Greeks used it sparingly; Rome made it the signature of empire.',
    atGlance: [
      { label: 'Where it began', value: 'Greece — first outdoor use the Monument of Lysicrates, 334 BC; then embraced by Rome' },
      { label: 'Its great age', value: 'Imperial Rome — the Pantheon, the Temple of Olympian Zeus and beyond' },
      { label: 'Tell it by', value: 'A tall bell of carved acanthus leaves, with small scrolls at the corners' },
      { label: 'Its character', value: 'Slender, lavish, splendid — the order of magnificence' },
    ],
    overview: [
      'The Corinthian is the richest of the Greek orders. It shares the Ionic’s slender, based, fluted column, but replaces the scroll capital with a deep bell wrapped in two tiers of carved acanthus leaves, from which small scrolls uncurl at the corners. Everything about it is tuned for display.',
      'By a story Vitruvius tells, the sculptor Callimachus invented the capital after seeing an acanthus plant grow up around a basket left on a girl’s grave — a charming legend for an order that in truth grew up gradually. The Greeks used it sparingly; its first great outdoor showing was the little Choragic Monument of Lysicrates in Athens.',
      'It was Rome that fell in love with the Corinthian and made it the standard order of imperial magnificence — the Pantheon’s portico, the Temple of Olympian Zeus, countless temples and public buildings. Its slender proportions also let it rise tall and light, ideal for the lofty porticoes and many-columned halls the Romans built at scale.',
    ],
    overviewImage: { src: 'assets/detail/ord-pantheon-portico.jpg', caption: 'The Pantheon’s Corinthian portico, Rome — the order the Romans made their imperial signature.' },
    features: [
      { name: 'The acanthus capital', image: 'assets/quiz/corinthian-capital.jpg', caption: 'A tall bell wrapped in two tiers of carved acanthus leaves — the order’s fingerprint.',
        body: 'The defining feature is a tall bell wrapped in two tiers of carved acanthus leaves, with small scrolls uncurling at the corners — the richest, most three-dimensional capital of all. Leaves at the top of a column mean Corinthian.' },
      { name: 'The slenderest and richest', image: 'assets/detail/ord-modillions.jpg', caption: 'The richest cornice of all, dense with dentils and little scroll brackets called modillions.',
        body: 'The Corinthian is the tallest and thinnest of the orders — about ten diameters high in the rulebooks — and carries the most ornate entablature, its cornice dense with both dentils and little scroll brackets called modillions. Everything says: this is the rich, important part of the building.' },
      { name: 'The order of splendour', image: 'assets/detail/ord-lysicrates.jpg', caption: 'The Choragic Monument of Lysicrates — the Corinthian’s first great outdoor showing.',
        body: 'Reserved for the grandest effect — wealth, magnificence, celebration — the Corinthian was likened by Vitruvius to a slender, richly adorned young girl, the daintiest of the three Greek orders. It is why Corinthian clothes opera houses, palaces and the grandest civic rooms.' },
      { name: 'Height without heaviness', image: 'assets/detail/roman-pantheon-in.jpg', caption: 'Slender Corinthian columns let the Romans build tall, light and open.',
        body: 'Those slender proportions let the Corinthian rise tall and light, ideal for the many-columned interiors and lofty porticoes the Romans built at scale — richness that also solves the problem of building high and open.' },
    ],
    spot: [
      'A capital like a basket wrapped in curling <u>acanthus</u> leaves is Corinthian — leaves, not scrolls or a plain cushion, are the giveaway.',
      'Tell it from the Composite: Corinthian has only small scrolls at the corners; if big Ionic <u>volutes</u> sit on top of the leaves, it is the Composite instead.',
      'Look up at the cornice: the richest, carrying both <u>dentils</u> and rows of little scroll brackets (<u>modillions</u>), belong to the Corinthian.',
      'Find the important room — the main portico, the great hall — and read the “this is the splendid place” signal the order was chosen to send.',
    ],
    memory: [
      { kick: 'Read capitals like haircuts', text: 'Doric a plain cap, Ionic scrolls, Corinthian a crown of leaves. Leaves at the top = Corinthian.' },
      { kick: 'The basket of Callimachus', text: 'Picture a basket left on a grave with an acanthus plant growing up and curling over its rim. That is the Corinthian capital — and the legend Vitruvius told for it.' },
      { kick: 'Slenderest and richest', text: 'The Corinthian is the tallest, thinnest and most decorated of the three Greek orders. Height and leaves together always mean the grand, important part of the building.' },
      { kick: 'Vitruvius’s three people', text: 'Doric a strong man, Ionic a matron, Corinthian a slender, richly adorned young girl — the daintiest of the three.' },
    ],
    examples: [
      { name: 'The Monument of Lysicrates', where: 'Athens · 334 BC', image: 'assets/detail/ord-lysicrates.jpg', note: 'The Corinthian’s first great outdoor showing — a small, exquisite monument that fixed the order’s reputation for elegance.' },
      { name: 'The Pantheon portico', where: 'Rome · c. 126 AD', image: 'assets/detail/ord-pantheon-portico.jpg', note: 'Sixteen towering Corinthian columns front the greatest surviving Roman interior — the order at imperial scale.' },
      { name: 'The United States Capitol', where: 'Washington · 19th c.', image: 'assets/detail/gr-capitol.jpg', note: 'The Corinthian carried into the modern republic as the order of civic grandeur and dignity.' },
    ],
    architects: [
      { name: 'Callimachus', what: 'The Greek sculptor to whom Vitruvius credits the invention of the acanthus capital.',
        works: ['The acanthus capital (by legend)'], link: 'https://en.wikipedia.org/wiki/Callimachus_(sculptor)' },
      { name: 'The builders of the Pantheon', what: 'Whose vast Corinthian portico fronts the greatest surviving Roman interior.',
        works: ['The Pantheon, Rome'], link: 'https://en.wikipedia.org/wiki/Pantheon,_Rome' },
      { name: 'Roman imperial architects', what: 'Who spread the Corinthian across the empire as the standard order of magnificence.',
        works: ['The Temple of Olympian Zeus, Athens (completed under Hadrian)', 'The Temple of Mars Ultor, Rome'], link: 'https://en.wikipedia.org/wiki/Corinthian_order' },
    ],
    faq: [
      { q: 'How do I recognise the Corinthian order?', a: 'By its capital: a tall bell wrapped in two tiers of carved acanthus leaves, with small scrolls uncurling at the corners. Leaves at the top of a slender, fluted column mean Corinthian.' },
      { q: 'What is acanthus?', a: 'Acanthus is a spiny Mediterranean plant whose deeply cut, curling leaves were stylised into the Corinthian capital. The same foliage runs through classical ornament far beyond the column.' },
      { q: 'What is the difference between Corinthian and Composite?', a: 'They share the same leafy, slender column. The Corinthian keeps only small scrolls at the corners of its capital; the Composite adds full, prominent Ionic volutes above the leaves. Big scrolls on top of the leaves means Composite.' },
      { q: 'Did the Greeks or the Romans use it more?', a: 'The Greeks invented it but used it sparingly, mostly indoors or on small monuments. It was the Romans who embraced the Corinthian and made it their favourite order for the great temples and public buildings of the empire.' },
    ],
    books: [
      { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The origin story of the Corinthian capital and Callimachus. Free online.' },
      { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio’s Corinthian, drawn from the Roman monuments he measured. Free scans.' },
      { title: 'Rome: An Oxford Archaeological Guide', author: 'Amanda Claridge', note: 'ON-RAMP. To see the Corinthian on the actual Roman buildings that perfected it.' },
      { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. For the measured proportions and how to draw the capital.' },
    ],
  },

  composite: {
    essence: 'Rome’s own crowning order — the large scrolls of the Ionic set upon the acanthus leaves of the Corinthian, making the tallest and most magnificent capital of all.',
    atGlance: [
      { label: 'Where it began', value: 'Imperial Rome, late 1st century BC (earliest survivor: the Arch of Titus)' },
      { label: 'Its great age', value: 'Roman triumphal arches; ranked fifth and highest by the Renaissance theorists' },
      { label: 'Tell it by', value: 'Big Ionic volutes sitting on top of a full ring of Corinthian acanthus leaves' },
      { label: 'Its character', value: 'The richest and most honoured — the crown of the system' },
    ],
    overview: [
      'The Composite is Rome’s own contribution to the five orders — a deliberate fusion that sets the large scrolls of the Ionic on top of the acanthus leaves of the Corinthian, in one capital richer than either alone. It keeps the slender, based, fluted Corinthian column and carries an entablature as ornate as any.',
      'Where the Tuscan was Rome’s plain native order, the Composite was its magnificent one, developed in the late first century BC. Its oldest surviving example crowns the Arch of Titus in the Roman Forum — from the start, the order of victory and triumph.',
      'The Romans treated it merely as a rich variant of the Corinthian. It was the Renaissance theorists — Alberti, Serlio, Vignola, Palladio, Scamozzi — who elevated it to a distinct fifth order and placed it at the very summit of the hierarchy, from plain Tuscan up to rich Composite. The fifth order was, in a sense, promoted into existence.',
    ],
    overviewImage: { src: 'assets/detail/ord-archoftitus.jpg', caption: 'The Arch of Titus, Rome — its Composite capitals are among the oldest to survive.' },
    features: [
      { name: 'A deliberate fusion', image: 'assets/quiz/composite-capital.jpg', caption: 'Big Ionic volutes set on the Corinthian’s ring of acanthus leaves — richer than either alone.',
        body: 'The Composite is exactly what its name says — the large Ionic volutes set on top of the Corinthian’s ring of acanthus leaves, in one capital richer than either alone. It proves the “language” idea in the clearest way: a whole new order made by fusing two existing ones.' },
      { name: 'Rome’s grand invention', image: 'assets/detail/ord-archoftitus.jpg', caption: 'The Arch of Titus carries one of the oldest surviving uses of the Composite.',
        body: 'Where Tuscan was Rome’s plain native order, the Composite was its magnificent one, developed in the late first century BC. Its oldest surviving example crowns the Arch of Titus — the order of victory and triumph. The Romans were inventors, not just inheritors, of the classical language.' },
      { name: 'As tall and rich as Corinthian', image: 'assets/orders/composite.jpg', caption: 'The Composite keeps the slender, based, fluted Corinthian column, tuned for maximum splendour.',
        body: 'The Composite keeps the slender, based, fluted Corinthian column — about ten diameters high — and carries an entablature as ornate as any, or richer. It sits with the Corinthian as the most attenuated and decorated of the five: the orders at their most lavish.' },
      { name: 'Made the fifth order by the Renaissance', image: 'assets/detail/ord-septimius.jpg', caption: 'The Arch of Septimius Severus — the Composite set at the summit.',
        body: 'The Romans treated the Composite as merely a rich variant of the Corinthian. It was the Renaissance theorists who elevated it to a distinct fifth order and capped the canon with it — the clearest proof that the tidy “five orders” is a Renaissance codification, not an ancient law.' },
    ],
    spot: [
      'If prominent Ionic <u>volutes</u> sit on top of a bed of Corinthian <u>acanthus</u> leaves, in one capital, it is Composite.',
      'Tell it from its parents: Ionic has scrolls but no leaves; Corinthian has leaves with only small corner scrolls; Composite has full volutes above full leaves — the sum of the other two.',
      'Look high, and at arches: it crowns the top storey of a grand façade, or frames a <u>triumphal</u> or memorial arch — the loudest note a building saved for itself.',
    ],
    memory: [
      { kick: 'The name says it', text: '“Composite” means composed of two. Ionic scrolls + Corinthian leaves, fused in one capital. Scrolls AND leaves together.' },
      { kick: 'The five, in order', text: 'Tuscan, Doric, Ionic, Corinthian, Composite — plainest to richest. The Composite is fifth and highest: the crown of the ladder.' },
      { kick: 'The order of triumph', text: 'When you meet a Roman triumphal arch, look for the Composite. It was Rome’s most magnificent order, saved for victory.' },
    ],
    examples: [
      { name: 'The Arch of Titus', where: 'Rome · c. 81 AD', image: 'assets/detail/ord-archoftitus.jpg', note: 'The triumphal arch that carries one of the oldest surviving Composite capitals — the order born for victory.' },
      { name: 'The Arch of Septimius Severus', where: 'Rome · 203 AD', image: 'assets/detail/ord-septimius.jpg', note: 'The Composite set at the summit of a great triumphal arch, a building’s most magnificent crown.' },
    ],
    architects: [
      { name: 'The builders of the Arch of Titus', what: 'Whose triumphal arch carries one of the earliest grand uses of the Composite capital.',
        works: ['The Arch of Titus, Roman Forum'], link: 'https://en.wikipedia.org/wiki/Arch_of_Titus' },
      { name: 'Sebastiano Serlio', portrait: 'assets/detail/portrait-serlio.jpg', what: 'Whose treatise helped fix the canon of five orders that placed the Composite at the summit.',
        works: ['<i>Tutte l’opere d’architettura et prospetiva</i>'], link: 'https://en.wikipedia.org/wiki/Sebastiano_Serlio' },
      { name: 'Andrea Palladio', portrait: 'assets/detail/portrait-palladio.jpg', what: 'Who drew and ranked the Composite as the fifth and richest order in his Four Books.',
        works: ['<i>The Four Books of Architecture</i>', 'The Villa Rotonda, Vicenza', 'San Giorgio Maggiore, Venice'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
    ],
    faq: [
      { q: 'What makes the Composite order “composite”?', a: 'It is composed of two earlier orders: it takes the large scrolls (volutes) of the Ionic and sets them on top of the ring of acanthus leaves of the Corinthian. The result is one capital that combines both — richer than either on its own.' },
      { q: 'How do I tell Composite from Corinthian?', a: 'Both have leafy capitals on slender columns. The difference is at the corners of the capital: the Corinthian has only small scrolls, while the Composite has full, prominent Ionic volutes riding above the leaves. Big scrolls on top of leaves means Composite.' },
      { q: 'Is the Composite an ancient order?', a: 'The form is Roman, from the late first century BC, but the Romans thought of it only as a rich variant of the Corinthian. Its status as a separate fifth order is a Renaissance idea — the theorists of the 1500s codified the tidy “five orders” we use today.' },
      { q: 'Where was it used?', a: 'On the grandest, loudest places: Roman triumphal and memorial arches above all, and later the top storeys of grand Renaissance and Baroque façades, where a building wanted its most magnificent crown.' },
    ],
    books: [
      { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio codifies the Composite as the fifth order. Free scans.' },
      { title: 'Regola delli cinque ordini', author: 'Vignola, 1562', note: 'PRIMARY. The rulebook that fixed all five orders, Composite included, for later builders.' },
      { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. Measured drawings of the Composite alongside the others.' },
    ],
  },

};
