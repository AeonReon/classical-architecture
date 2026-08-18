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

};
