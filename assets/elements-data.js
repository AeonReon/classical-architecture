// CLASSICAL ARCHITECTURE — the Elements (the grammar of building).
// window.ARTS holds every "topic". Elements load first; styles-data.js pushes
// the styles onto the same array afterwards.
// Each entry: id, name, short, tagline, group, colour triplet, icon, blurb,
// and sections (any of: what-it-is, the-path, practice, reading, masters).
// Voice rule: present the tradition on its own terms. Reading lists put the
// primary sources first, with an honest note, then the modern on-ramps.

window.ARTS = [
  {
    id: 'foundation',
    image: 'assets/elements/foundation.jpg',
    name: 'Foundation',
    short: 'Start here',
    tagline: 'What classical architecture is, and how to begin looking',
    group: 'Start here',
    color: '#d97706', colorDeep: '#92400e', colorSoft: '#fef3c7',
    icon: 'sun',
    blurb: 'Before the styles and the orders, an orientation. What we mean by "classical" architecture, where it came from, why one language of building lasted more than two thousand years, and how to start reading it on your own street. Built for the curious adult who keeps admiring buildings without quite knowing what they are looking at.',
    sections: {
      'what-it-is': {
        title: 'What classical architecture is',
        intro: 'Classical architecture is the tradition of building that descends from the temples of ancient Greece and Rome — a shared language of columns, proportion and ornament that has been revived, argued over and rebuilt in every century since. It is not one style but a family of them, all speaking the same grammar.',
        principles: [
          { name: 'A language, not a look', image: 'assets/detail/ord-fiveorders.jpg', caption: 'The five orders are the tradition\'s letters — the same elements recombined into buildings that look nothing alike.', body: 'Classical architecture works like a language. The orders are its letters, proportion its grammar, and the building types its sentences. The same elements are recombined endlessly — a Greek temple, a Roman bath, a Palladian villa and a Victorian bank are all written in it — which is why, once you learn the grammar, you can read buildings that look nothing alike.', why: 'If you learn styles as a list of pictures, every new building is a stranger. If you learn the language, you can read a building you have never seen — including ones the tradition never built.' },
          { name: 'Firmness, commodity, delight', image: 'assets/detail/roman-vitruvius.jpg', caption: 'Vitruvius set three demands on any building: that it stand soundly, serve its use, and give delight to the eye.', body: 'The Roman architect Vitruvius set three demands on any building: firmitas, that it stand soundly; utilitas, that it serve its use; and venustas, that it give delight to the eye. Every part of the tradition is an attempt to satisfy all three at once, never sacrificing one for another.', why: 'These three words are the fastest way to judge any building, ancient or modern. Carry them, and you always have something specific to look for and to say.' },
          { name: 'The orders are its heart', image: 'assets/elements/orders.jpg', caption: 'The five orders — each a complete system of column and entablature, worked out in fixed proportion.', body: 'At the centre of the tradition stand the five orders — Tuscan, Doric, Ionic, Corinthian and Composite. Each is a complete system: a column with base, shaft and capital, carrying an entablature, all worked out in fixed proportions and ornament. To learn classical architecture is, first, to learn the orders.', why: 'Almost every classical building announces itself through an order. Name the order and you have found the key that unlocks the rest of the design.' },
          { name: 'It is built on proportion', image: 'assets/detail/prop-vitruvianman.jpg', caption: 'Beauty from ratio: Leonardo\'s Vitruvian Man, the body set in circle and square — the source of the orders\' proportions.', body: 'Classical builders held that beauty comes from ratio — the agreement of the parts with one another and with the whole. A doorway is so tall because the room is so wide; a column is so thick because it is so high. Number, made visible in stone, is what makes a classical building feel resolved rather than arbitrary.', why: 'It explains the strange calm of a good classical room. Nothing is a free choice; everything answers to something else. That hidden order is what the eye reads as "rightness".' },
          { name: 'Revival is part of the story', image: 'assets/styles/neoclassical.jpg', caption: 'The Panthéon in Paris — the tradition reborn. \'Classical\' is not only ancient but living.', body: 'The tradition has died and been reborn many times: in the Italian Renaissance reviving Rome, in Palladio reviving the ancients, in the Georgian and Greek Revivals, and in the Beaux-Arts civic buildings of the modern age. Each revival was also a fresh argument about what the past should mean.', why: 'It means "classical" is not only ancient. The bank, the museum and the city hall down the road are living chapters of the same story, and worth reading as such.' }
        ]
      },
      'the-path': {
        title: 'How to begin looking',
        intro: 'You do not need travel or a degree to start. The tradition is on the high street — banks, churches, town halls, old terraces. Here is a rough path from first glances to a reading eye.',
        heroImage: 'assets/styles/palladian.jpg',
        heroCaption: 'Chiswick House — a whole classical building to practise reading, close to home.',
        levels: [
          { stage: 'First week', items: [
            'Learn the three tests by heart: firmness, commodity, delight — and try them on one building a day.',
            'Learn to spot a column and its three parts: base, shaft, capital.',
            'Photograph one classical building near you and note what stops your eye.',
            'Read the Foundation and the Orders sections here, slowly.'
          ] },
          { stage: 'First month', items: [
            'Learn to tell the five orders apart by their capitals — the quickest tell is the top of the column.',
            'Find and name a pediment, a portico, an entablature and a pilaster in the wild.',
            'Notice symmetry: find the centre and the ends of a façade and see how ornament gathers there.',
            'Pick one style tile (Greek, Roman or Palladian) and read it end to end.'
          ] },
          { stage: 'Going deeper', items: [
            'Read Summerson\'s The Classical Language of Architecture cover to cover.',
            'Sketch an order from a real building — drawing teaches the eye faster than looking.',
            'Trace one revival: find a local Greek Revival or Gothic Revival building and work out what it was claiming.',
            'Start keeping a small notebook of buildings, with the order, the type and the century for each.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Reading buildings is a physical habit, not book-learning. A handful of things to actually do this week.',
        heroImage: 'assets/detail/mouldings.jpg',
        heroCaption: 'Look up under a cornice and count the small repeating blocks — reading buildings is a physical habit.',
        items: [
          { name: 'Run the three tests', body: 'Stand in front of any building and ask: does it stand honestly, does it serve its use, does it delight? Say why for each. Two minutes, and you have really looked.' },
          { name: 'Find the order', body: 'Look at the top of the columns or pilasters. Plain cushion? Doric. Scrolls? Ionic. Leaves? Corinthian. Name it aloud — naming fixes it in memory.' },
          { name: 'Locate the centre', body: 'Find the middle of the façade and its two ends. Notice how the important door, extra columns, or richer ornament gather at exactly those points. That is symmetry doing its quiet work.' },
          { name: 'Read the weight', body: 'Trace what carries what: columns carry the entablature, the entablature carries the pediment, the wall carries the roof. A classical façade is an argument about load — follow it downward to the ground.' },
          { name: 'Count the dentils', body: 'Look up under a cornice and find the small repeating blocks and mouldings. Count a set. The richness of the top edge tells you how much the builder cared.' },
          { name: 'Photograph and label', body: 'Take one photo a day and label one element you can now name. In a fortnight you will have a small private field guide to your own town.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Start with one clear modern guide to get the grammar, then go to the sources. The primary texts are older and harder, but they are the tradition speaking in its own voice — worth the patience.',
        heroImage: 'assets/detail/greek-antiquities.jpg',
        heroCaption: 'Start with one clear modern guide, then go to the sources — the tradition in its own voice.',
        books: [
          { title: 'The Classical Language of Architecture', author: 'John Summerson, 1963', note: 'THE way in. Short, brilliant, and exactly the "language" metaphor this app is built on. Read it first.' },
          { title: 'A History of Architecture', author: 'Sir Banister Fletcher (any modern edition)', note: 'The great reference. Not for reading through, but unmatched for looking things up with clear comparative drawings.' },
          { title: 'De Architectura (The Ten Books on Architecture)', author: 'Vitruvius, 1st c. BC', note: 'PRIMARY. The only architectural treatise to survive from antiquity, and the root of the whole tradition. Dry in places, but the source of everything. The Morgan translation is free online.' },
          { title: 'The Four Books of Architecture', author: 'Andrea Palladio, 1570', note: 'PRIMARY. Part manifesto, part pattern-book, gorgeously illustrated. The single most influential architecture book ever printed. Free scans exist.' },
          { title: 'The Seven Lamps of Architecture', author: 'John Ruskin, 1849', note: 'PRIMARY (modern). Not a how-to but a passionate argument for what building is for. Read the "Lamp of Memory" even if you read nothing else.' },
          { title: 'The Elements of Style / Ching\'s Architecture: Form, Space and Order', author: 'Francis D. K. Ching', note: 'ON-RAMP. Clear, diagram-led modern books if you want the vocabulary drawn out plainly before tackling the old texts.' }
        ]
      },
      'masters': {
        title: 'The names to know first',
        intro: 'A short roll of the figures whose ideas shaped the whole tradition. You will meet them again inside the styles.',
        figures: [
          { name: 'Vitruvius (1st c. BC)', what: 'Roman architect and engineer whose De Architectura is the founding text — firmness, commodity and delight, and the first full account of the orders.',
            works: ['<i>De Architectura</i> (The Ten Books on Architecture)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
          { name: 'Leon Battista Alberti (1404–1472)', portrait: 'assets/detail/portrait-alberti.jpg', what: 'The Renaissance humanist who recovered Vitruvius and turned building into a scholarly art, in his On the Art of Building.',
            works: ['<i>De re aedificatoria</i> (On the Art of Building)', 'The façade of Santa Maria Novella, Florence', 'Sant\'Andrea, Mantua'], link: 'https://en.wikipedia.org/wiki/Leon_Battista_Alberti' },
          { name: 'Andrea Palladio (1508–1580)', portrait: 'assets/detail/portrait-palladio.jpg', what: 'The most imitated architect in history; his villas and his Four Books carried classical proportion across Europe and to America.',
            works: ['<i>The Four Books of Architecture</i>', 'The Villa Rotonda, Vicenza', 'San Giorgio Maggiore, Venice'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
          { name: 'Sir Christopher Wren (1632–1723)', portrait: 'assets/detail/portrait-wren.jpg', what: 'Scientist turned architect who rebuilt London\'s churches and St Paul\'s after the Great Fire — English classicism at its height.',
            works: ['St Paul\'s Cathedral, London', 'The 51 City churches', 'The Sheldonian Theatre, Oxford'], link: 'https://en.wikipedia.org/wiki/Christopher_Wren' },
          { name: 'John Ruskin (1819–1900)', portrait: 'assets/detail/portrait-ruskin.jpg', what: 'The critic whose writing changed how the modern world sees old buildings, and who tied architecture to memory, labour and truth.',
            works: ['<i>The Seven Lamps of Architecture</i>', '<i>The Stones of Venice</i>'], link: 'https://en.wikipedia.org/wiki/John_Ruskin' },
          { name: 'John Summerson (1904–1992)', portrait: 'assets/detail/portrait-summerson.jpg', what: 'The modern historian who explained classical architecture as a language — the clearest guide the tradition has produced.',
            works: ['<i>The Classical Language of Architecture</i>', '<i>Georgian London</i>', '<i>Architecture in Britain 1530–1830</i>'], link: 'https://en.wikipedia.org/wiki/John_Summerson' }
        ]
      }
    }
  },

  // ---------------- THE FIVE ORDERS (category.html?id=orders) ----------------
  {
    id: 'tuscan',
    image: 'assets/orders/tuscan.jpg',
    name: 'The Tuscan Order',
    short: 'Plainest and strongest',
    tagline: 'The unadorned column — strength without ornament',
    group: 'The Orders',
    color: '#8A6D3B', colorDeep: '#5E4A28', colorSoft: '#F0E7D6',
    icon: 'column',
    blurb: 'The Tuscan is the simplest of the five orders — a sturdy, unfluted column with a plain base and capital, and a bare entablature. Essentially a Doric stripped to its bones, it was the Romans\' own plain order, descended from Etruscan temple-building, and it became the language of strength and utility: the base of a building, the gateway, the barn, the honest wall that needs no decoration.',
    sections: {
      'what-it-is': {
        title: 'What the Tuscan order is',
        intro: 'The Tuscan is Doric reduced to its essentials: a smooth, unfluted shaft, a simple base of plinth and torus, a plain cushion capital, and an entablature without carving. Its stocky proportions give it a look of solid, unpretending strength — the plainest and heaviest of the five.',
        principles: [
          { name: 'The unfluted shaft — its fastest tell', image: 'assets/orders/tuscan.jpg', caption: 'The Tuscan column: smooth and unfluted, plain from top to bottom — the order that says everything by saying nothing.', body: 'Alone among the orders, the Tuscan shaft is characteristically smooth and unfluted, with a plain cushion capital (a round echinus under a square abacus) and no carving anywhere on the entablature.', why: 'It is the quickest field-mark. A sturdy, smooth column with nothing carved on it, plain top to bottom, is almost certainly Tuscan — the order that says everything by saying nothing.' },
          { name: 'A simplified Doric, and Rome\'s own', image: 'assets/detail/tus-covent.jpg', caption: 'Inigo Jones\'s St Paul\'s, Covent Garden — a stern Tuscan portico, once called “the handsomest barn in England”.', body: 'Where the refined orders came from Greece, the Tuscan is Italic — descended from Etruscan temple-building and adopted by Rome as its plain native order, essentially a Doric with the ornament stripped off. Vitruvius describes the Etruscan temple; the Renaissance made Tuscan the first of the five.', why: 'It shows the tradition was never purely Greek. The plainest order is the home-grown one — a reminder that classical architecture always mixed the imported ideal with the local and useful.' },
          { name: 'The order of rustic strength', image: 'assets/detail/ord-rustic.jpg', caption: 'A rusticated ground floor — the Tuscan\'s stocky, grounded strength put to work.', body: 'Stocky in the rulebooks at about seven column-diameters high — the shortest and thickest of the five — the Tuscan reads as sturdy, grounded and rustic. It was the order of the utilitarian and the strong.', why: 'It shows the tradition thought about character, not just decoration. To choose Tuscan was to say "solid and dependable" before a single word of ornament was spoken.' },
          { name: 'The base of the building', image: 'assets/detail/tus-arch.jpg', caption: 'A plain rusticated gateway: the Tuscan set lowest, the strong base that carries richer orders above.', body: 'Because it is plainest and strongest, the Tuscan is often placed lowest, carrying richer orders above it — the ground floor of a palace, the base of a triumphal arch, the rusticated storey beneath the show.', why: 'It introduces the whole hierarchy of the orders: plain and strong at the bottom, rich and slender at the top, exactly as the visual weight decreases upward.' },
          { name: 'Known from the book, not the ruin', image: 'assets/detail/ord-fiveorders.jpg', caption: 'The five orders as the Renaissance arranged them — the Tuscan placed first, reconstructed as much as revived.', body: 'There is no clean surviving pure-Tuscan ancient temple to point to — the Etruscans built largely in wood and terracotta, so little survives, and later Roman work blurs Tuscan into Roman Doric. It is known chiefly from Vitruvius\'s description and Renaissance reconstruction.', why: 'It is an honest reminder that the tidy "five orders" is a Renaissance ordering of the past. The plainest order is also the least documented in antiquity — reconstructed as much as revived.' }
        ]
      },
      'practice': {
        title: 'How to spot it',
        intro: 'The Tuscan is the plain, strong order you meet on ground floors and gateways. A few ways to catch it.',
        items: [
          { name: 'Check the shaft', body: 'Is the column smooth and unfluted, with a plain cushion capital and no carving? That plainness, top to bottom, is the Tuscan signature — no other order is so bare.' },
          { name: 'Look low', body: 'Find it where strength belongs: the ground floor of a palazzo, the base of an arch, a rusticated basement carrying richer orders above. Tuscan is the foot of the building.' },
          { name: 'Don\'t confuse it with Roman Doric', body: 'Both are plain and sturdy. The tells: Tuscan has an unfluted shaft and no triglyph frieze; Roman Doric is usually fluted and keeps the triglyphs and metopes.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The orders are learned from the treatises that codified them, with a modern manual alongside. Honest notes below.',
        heroImage: 'assets/detail/roman-vitruvius.jpg',
        heroCaption: 'The orders are learned from the treatises that codified them — Vitruvius first of all.',
        books: [
          { title: 'De Architectura, Book IV', author: 'Vitruvius, 1st c. BC', note: 'PRIMARY. The ancient description of the Etruscan/Tuscan temple. Readable in the free Morgan translation, but needs a modern gloss to map onto the "five orders".' },
          { title: 'Canon of the Five Orders (Regola delli cinque ordini)', author: 'Giacomo Barozzi da Vignola, 1562', note: 'PRIMARY. The most influential rulebook of the orders ever made — Vignola\'s plates fixed the Tuscan\'s proportions for three centuries. Mostly measured drawings.' },
          { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. The clearest modern manual, with measured drawings of all five orders — the practical way to learn them by hand today.' },
          { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Short and elegant, on why an order means something — the orders as the "Latin" of the classical language.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The Tuscan is a codifiers\' order more than a designers\' — its history is largely the history of the rulebooks.',
        figures: [
          { name: 'Vitruvius (1st c. BC)', what: 'First to describe the Etruscan/Tuscan temple in writing, giving the order its ancient authority.',
            works: ['<i>De Architectura</i> (Ten Books on Architecture)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
          { name: 'Sebastiano Serlio (1475–1554)', portrait: 'assets/detail/portrait-serlio.jpg', what: 'First to picture all five orders together as a set (1537), placing the Tuscan at the head of the row.',
            works: ['<i>Tutte l\'opere d\'architettura et prospetiva</i> (the Seven Books)'], link: 'https://en.wikipedia.org/wiki/Sebastiano_Serlio' },
          { name: 'Giacomo da Vignola (1507–1573)', portrait: 'assets/detail/portrait-vignola.jpg', what: 'Whose Rule of the Five Orders fixed the Tuscan\'s proportions in the form most later builders used.',
            works: ['<i>Regola delli cinque ordini d\'architettura</i>', 'Villa Farnese, Caprarola', 'The Church of the Gesù, Rome'], link: 'https://en.wikipedia.org/wiki/Jacopo_Barozzi_da_Vignola' },
          { name: 'Inigo Jones (1573–1652)', portrait: 'assets/detail/portrait-inigojones.jpg', what: 'Who used a stern Tuscan to great effect at St Paul\'s, Covent Garden — "the handsomest barn in England".',
            works: ['St Paul\'s, Covent Garden', 'The Banqueting House, Whitehall', 'The Queen\'s House, Greenwich'], link: 'https://en.wikipedia.org/wiki/Inigo_Jones' }
        ]
      }
    }
  },
  {
    id: 'doric',
    image: 'assets/orders/doric.jpg',
    name: 'The Doric Order',
    short: 'The temple order',
    tagline: 'Grave, strong and Greek — the order of the Parthenon',
    group: 'The Orders',
    color: '#B4560F', colorDeep: '#7A360A', colorSoft: '#F7E3D2',
    icon: 'temple',
    blurb: 'The Doric is the oldest and gravest of the Greek orders — a fluted column rising without a base straight from the temple floor, crowned by a plain cushion capital, and carrying a frieze of alternating triglyphs and metopes. It is the order of the Parthenon, and it set the standard of dignified strength against which every later order was measured.',
    sections: {
      'what-it-is': {
        title: 'What the Doric order is',
        intro: 'In its Greek form the Doric has no base, a shaft cut with shallow flutes meeting in sharp edges, a simple capital of a round echinus under a square abacus, and — its signature — a frieze of triglyphs (three-grooved blocks) alternating with metopes (often carved panels). The Roman version adds a base and slims the proportions.',
        principles: [
          { name: 'No base, straight from the floor', image: 'assets/orders/doric.jpg', caption: 'Greek Doric rises straight from the platform with no base — the column as a growing thing, not a placed object.', body: 'The Greek Doric column stands directly on the temple platform without a base, its weight met by the flat stone. (The later Roman Doric adds a base and slims down.) This gives the Greek version a look of rooted, elemental strength found in no other order.', why: 'It is the fastest way to tell Greek Doric from every later order. That missing base is a whole aesthetic — the column as a growing thing, not a placed object.' },
          { name: 'The plain cushion capital', image: 'assets/quiz/doric-capital.jpg', caption: 'The Doric capital: a round cushion (echinus) under a square slab (abacus), with knife-edged flutes below.', body: 'The Doric capital is the plainest of all — a round cushion (the echinus) under a square slab (the abacus), with no scrolls and no leaves. The shaft below is fluted with shallow channels that meet in sharp ridges (arrises), with no flat band between them.', why: 'The capital is always the quickest identifier of an order, and Doric\'s is the one that is severe and bare. Plain cushion on top, knife-edged flutes below: Doric.' },
          { name: 'Triglyphs and metopes', image: 'assets/quiz/triglyph-frieze.jpg', caption: 'The Doric frieze: grooved triglyphs alternating with metope panels — the memory of timber beam-ends, in stone.', body: 'The Doric signature is its frieze: triglyphs — blocks with three vertical grooves — alternating with metopes, the panels between, often carved with battles or myths, with little peg-like guttae beneath. They are thought to remember, in stone, the beam-ends of the first timber temples.', why: 'It is the unmistakable Doric field-mark, and it reveals a deep habit of the tradition: turning the memory of older construction into ornament. The stone temple quietly quotes the wooden one it replaced.' },
          { name: 'Refinements you are not meant to see', image: 'assets/detail/greek-entasis.jpg', caption: 'The gentle swelling of the shaft (entasis) — a correction for the eye you are not meant to notice.', body: 'The Parthenon has almost no straight lines: columns lean slightly inward, swell at the middle (entasis), and the platform curves upward at the centre. These corrections counter the eye\'s tendency to read long straight lines as sagging.', why: 'It shows classical "perfection" is not rigid geometry but a subtle correction for how we actually see. The order lives in the adjustments, not the rule.' },
          { name: 'Stocky by nature', image: 'assets/detail/ord-paestum.jpg', caption: 'The heavy, primitive Doric of Paestum — the order before the rulebooks tidied its proportions.', body: 'The Renaissance rulebooks set the Doric column at about eight diameters high — but real archaic Greek Doric is far stubbier, often only four to six diameters, with swollen shafts and big capitals (as at Paestum). The neat figure is a later ideal, not what the first Doric looked like.', why: 'It is a useful honesty: the "correct" proportions are a Renaissance convention. Meet the heavy, primitive Doric of the early temples and you see the order before it was tidied up.' },
          { name: 'The order of gravity and men', image: 'assets/styles/greek.jpg', caption: 'The Parthenon — sober, muscular, unornamented: the order chosen ever after for gravity and permanence.', body: 'The ancients associated Doric with strength and the male body — Vitruvius derived its proportions from a man\'s. Sober, muscular and unornamented, it was used for temples to the sterner gods and, ever after, for buildings that wish to look grave and permanent.', why: 'It explains why banks, courts and war memorials so often choose Doric. The order carries a mood, and that mood is seriousness.' }
        ]
      },
      'the-path': {
        title: 'Learning the Doric',
        intro: 'The Doric rewards close looking more than any order, because so much of it is in refinements you must train yourself to see.',
        heroImage: 'assets/detail/greek-colonnade.jpg',
        heroCaption: 'A Doric colonnade — the order that rewards close looking more than any other.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the parts: shaft, flutes, echinus, abacus, triglyph, metope.',
            'Look at photographs of the Parthenon and find the frieze of triglyphs and metopes.',
            'Learn to tell Greek Doric (no base) from Roman Doric (with base).'
          ] },
          { stage: 'Intermediate', items: [
            'Study entasis — the swelling of the shaft — and find it in a real colonnade.',
            'Read how the corner triglyph created a famous design problem for Greek builders.',
            'Compare a Greek Revival Doric bank near you with the ancient model.'
          ] },
          { stage: 'Advanced', items: [
            'Read the optical refinements of the Parthenon in detail and why they were made.',
            'Sketch a full Doric order to scale from a measured drawing.',
            'Trace the Doric from Paestum through Rome to the Greek Revival.'
          ] }
        ]
      },
      'practice': {
        title: 'How to spot it',
        intro: 'The Doric is severe and unmistakable once you know its two signatures. A few things to check.',
        items: [
          { name: 'Find the triglyph frieze', body: 'Look at the band above the columns: alternating grooved blocks (triglyphs) and panels (metopes) means Doric, guaranteed — no other order has it.' },
          { name: 'Check the base', body: 'None at all, the shaft straight onto the platform, means Greek Doric; a moulded base means the slimmer Roman Doric.' },
          { name: 'Hunt for entasis', body: 'Sight up a big Doric shaft against a plain background and look for the gentle swelling in the middle — the correction you are not meant to notice.' },
          { name: 'Compare a revival bank with the Parthenon', body: 'Find a Greek Revival Doric bank or courthouse near you and set it beside a photograph of the Parthenon — same order, two thousand years apart.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Go to the ancient rulebooks, but for the Doric especially, look hard at good photographs and measured drawings.',
        heroImage: 'assets/detail/greek-antiquities.jpg',
        heroCaption: 'Measured drawings and good photographs teach the Doric better than any prose.',
        books: [
          { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The ancient account of the Doric and its frieze. Free online.' },
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio\'s plates of the Doric, with his proportions. Free scans.' },
          { title: 'The Stones of Athens', author: 'R. E. Wycherley', note: 'ON-RAMP. On the buildings of ancient Athens and how the Doric temple actually worked in its city.' },
          { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. Clear measured drawings for learning the order by hand.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The Greek architects are mostly anonymous, but a few are known, and the order\'s revivers are not.',
        figures: [
          { name: 'Iktinos and Kallikrates (5th c. BC)', what: 'The architects of the Parthenon, the supreme Doric temple, built under Pericles.',
            works: ['The Parthenon, Athens', 'The Temple of Apollo at Bassae (Iktinos)'], link: 'https://en.wikipedia.org/wiki/Ictinus' },
          { name: 'The builders of Paestum (6th–5th c. BC)', what: 'Whose massive, early Doric temples in southern Italy survive almost complete.',
            works: ['The Temple of Hera I ("the Basilica")', 'The Temple of Hera II ("of Neptune")'], link: 'https://en.wikipedia.org/wiki/Paestum' },
          { name: 'James "Athenian" Stuart (1713–1788)', portrait: 'assets/detail/portrait-stuart.jpg', what: 'Whose measured drawings of Athens launched the Greek Revival and put true Greek Doric into modern hands.',
            works: ['<i>The Antiquities of Athens</i> (with Revett)', 'The Doric temple at Hagley (1758)'], link: 'https://en.wikipedia.org/wiki/James_Stuart_(1713%E2%80%931788)' }
        ]
      }
    }
  },
  {
    id: 'ionic',
    image: 'assets/orders/ionic.jpg',
    name: 'The Ionic Order',
    short: 'The scrolled order',
    tagline: 'Slender and graceful — the order of the scholar',
    group: 'The Orders',
    color: '#2F7FB8', colorDeep: '#1F5480', colorSoft: '#DCEAF5',
    icon: 'capital',
    blurb: 'The Ionic is the graceful middle order — more slender than the Doric, standing on a moulded base, and known everywhere by the pair of scrolls, or volutes, that curl from its capital. If the Doric is the grave male order, the Ionic was thought of as the mature and cultivated one: the order of learning, libraries and grace.',
    sections: {
      'what-it-is': {
        title: 'What the Ionic order is',
        intro: 'The Ionic has a slimmer, taller shaft than the Doric, cut with deeper flutes separated by small flat fillets, standing on a moulded base. Its capital is unmistakable: two scrolls (volutes) linked by a shallow cushion. Its frieze is continuous rather than divided, and it often carries a row of dentils in the cornice.',
        principles: [
          { name: 'The volute', image: 'assets/quiz/ionic-capital.jpg', caption: 'The Ionic volute — a pair of scrolls; spot them and you have named the order in one glance.', body: 'The scroll capital is the Ionic\'s signature — a pair of spirals, thought to derive from a rolled cushion, a ram\'s horns or a nautilus shell, linked by a shallow cushion. It turns the top of the column into something to look at, not just a plain support.', why: 'It is the single easiest capital to recognise. Spot the scrolls and you have named the order in one glance.' },
          { name: 'A base, and filleted flutes', image: 'assets/orders/ionic.jpg', caption: 'The Ionic stands on a moulded base, its slimmer shaft cut with flutes separated by small flat fillets.', body: 'Unlike the Greek Doric, the Ionic always stands on a moulded base, and its slimmer shaft is cut with deeper flutes separated by small flat bands (fillets) rather than the sharp ridges of the Doric.', why: 'These are the confirming details below the capital. A based column with soft, fillet-separated flutes is reading as Ionic before you even reach the scrolls.' },
          { name: 'Slenderness and grace', image: 'assets/detail/ord-erechtheion.jpg', caption: 'The Erechtheion\'s Ionic porch — taller and thinner than the Doric, given a mature, graceful character.', body: 'The Ionic is proportioned taller and thinner than the Doric — about nine diameters high in the rulebooks. The ancients gave it a mature, matronly female character; Vitruvius likened its fluting to the folds of a robe and its volutes to curled hair.', why: 'It shows the orders were understood as characters. To choose Ionic was to say "civilised, learned, graceful" — which is why it clothes so many libraries and universities.' },
          { name: 'A continuous frieze and dentils', image: 'assets/detail/ord-ionicfrieze.jpg', caption: 'The Ionic entablature: a continuous frieze for a flowing procession, with a row of tooth-like dentils above.', body: 'Where the Doric frieze is broken into triglyphs and metopes, the Ionic frieze runs as one unbroken band, ideal for a continuous carved procession, and its cornice characteristically carries a row of dentils — small tooth-like blocks.', why: 'It changes what ornament can do: a continuous band lets a story flow around the whole building. The row of dentils is another quiet Ionic tell in the cornice above.' },
          { name: 'The order of the mind', image: 'assets/detail/gr-britishmuseum.jpg', caption: 'The British Museum\'s Ionic colonnade — the order chosen for libraries, museums and places of learning.', body: 'From antiquity onward the Ionic was felt to suit places of thought and refinement rather than raw strength — temples to Apollo and Athena, and later the libraries, museums and schools of the modern world.', why: 'It is why so many places of learning are Ionic. The order was chosen to set a mood of cultivated calm before you had even read the name over the door.' }
        ]
      },
      'practice': {
        title: 'How to spot it',
        intro: 'The Ionic is the graceful middle order, and its scroll gives it away instantly. A few things to do.',
        items: [
          { name: 'Find the scrolls', body: 'Look only at the top of the column: a pair of spiral volutes means Ionic. It is the fastest identification in all of classical architecture.' },
          { name: 'Confirm below', body: 'Check for a moulded base and flutes separated by little flat fillets, and look up for a row of dentils in the cornice — the supporting evidence.' },
          { name: 'Read the building\'s mood', body: 'Notice how often you find it on a library, museum, university or bank — and feel the "cultivated and calm" note the order was chosen to strike.' },
          { name: 'Watch the frieze', body: 'See whether the band above the columns is one continuous carved procession (Ionic) rather than broken into panels (Doric).' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The ancient sources plus one good look at the Erechtheion will teach the Ionic quickly.',
        heroImage: 'assets/detail/greek-antiquities.jpg',
        heroCaption: 'Stuart & Revett\'s measured plates gave Europe accurate Greek Ionic — the Erechtheion above all.',
        books: [
          { title: 'De Architectura, Books III–IV', author: 'Vitruvius', note: 'PRIMARY. The ancient rules for the Ionic and the famous story of the volute. Free online.' },
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio\'s Ionic plates and proportions. Free scans.' },
          { title: 'The Antiquities of Athens', author: 'Stuart & Revett, 1762', note: 'PRIMARY (modern). The measured drawings that gave Europe accurate Greek Ionic — the Erechtheion above all.' },
          { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Places the Ionic within the whole grammar clearly and briefly.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Ionia gave the order its home; later builders gave it its afterlife.',
        figures: [
          { name: 'The architects of the Erechtheion (5th c. BC)', what: 'Whose elegant Ionic temple on the Acropolis, with its Porch of the Maidens, is the order\'s masterpiece.',
            works: ['The Erechtheion, Acropolis, Athens'], link: 'https://en.wikipedia.org/wiki/Erechtheion' },
          { name: 'Hermogenes (2nd c. BC)', what: 'The Hellenistic architect whose refined Ionic temples Vitruvius held up as models of correct proportion.',
            works: ['The Temple of Artemis Leucophryene, Magnesia', 'The Temple of Dionysus, Teos'], link: 'https://en.wikipedia.org/wiki/Hermogenes_(architect)' },
          { name: 'Vincenzo Scamozzi (1548–1616)', portrait: 'assets/detail/portrait-scamozzi.jpg', what: 'Whose four-faced Ionic capital, with volutes turned out on every side, became a widely copied standard — "the Scamozzi Ionic".',
            works: ['<i>L\'idea della architettura universale</i>', 'The "Scamozzi Ionic" capital', 'Completion of the Teatro Olimpico, Vicenza'], link: 'https://en.wikipedia.org/wiki/Vincenzo_Scamozzi' },
          { name: 'Nicholas Revett & James Stuart', portrait: 'assets/detail/portrait-stuart.jpg', what: 'Whose Antiquities of Athens brought accurate Greek Ionic to Britain and fuelled the Greek Revival.',
            works: ['<i>The Antiquities of Athens</i>'], link: 'https://en.wikipedia.org/wiki/Nicholas_Revett' }
        ]
      }
    }
  },
  {
    id: 'corinthian',
    image: 'assets/orders/corinthian.jpg',
    name: 'The Corinthian Order',
    short: 'The richest order',
    tagline: 'Crowned with acanthus — splendour and display',
    group: 'The Orders',
    color: '#2F9E77', colorDeep: '#1F6B52', colorSoft: '#DDF1E8',
    icon: 'acanthus',
    blurb: 'The Corinthian is the most ornate of the Greek orders — the slenderest column, crowned by a tall capital of carved acanthus leaves and small scrolls. The Greeks used it sparingly, but the Romans loved its splendour and made it their favourite for the great temples and public buildings of the empire.',
    sections: {
      'what-it-is': {
        title: 'What the Corinthian order is',
        intro: 'The Corinthian shares the Ionic\'s slender, based, fluted column but replaces the scroll capital with a deep bell of acanthus leaves in two tiers, from which small volutes uncurl at the corners. It carries the richest entablature, and everything about it is tuned for display.',
        principles: [
          { name: 'The acanthus capital', image: 'assets/quiz/corinthian-capital.jpg', caption: 'The Corinthian capital: a tall bell wrapped in two tiers of carved acanthus leaves — the order\'s fingerprint.', body: 'The defining feature is a tall bell wrapped in two tiers of carved acanthus leaves, with small scrolls uncurling at the corners — the richest, most three-dimensional capital of all. According to a story told by Vitruvius, the sculptor Callimachus invented it after seeing an acanthus plant grow up around a basket left on a girl\'s grave.', why: 'It is the order\'s fingerprint: leaves at the top of a column mean Corinthian. (Treat the basket tale as the charming legend Vitruvius meant it as — the order really grew up gradually.)' },
          { name: 'The slenderest and richest', image: 'assets/detail/ord-modillions.jpg', caption: 'The richest cornice of all, dense with dentils and little scroll brackets called modillions.', body: 'The Corinthian is the tallest and thinnest of the orders — about ten diameters high in the rulebooks — and carries the most ornate entablature, its cornice dense with both dentils and little scroll brackets called modillions.', why: 'It is the order tuned entirely for display. Height, slenderness and a deeply carved cornice all say the same thing: this is the rich, important part of the building.' },
          { name: 'The order of splendour', image: 'assets/detail/ord-lysicrates.jpg', caption: 'The Choragic Monument of Lysicrates — the Corinthian\'s first great outdoor showing in Athens.', body: 'Reserved for the grandest effect — wealth, magnificence, celebration — the Corinthian was likened by Vitruvius to a slender, richly adorned young girl, the daintiest and most decorated of the three Greek orders.', why: 'It explains why Corinthian clothes opera houses, palaces and the grandest civic rooms. The order itself signals "this is the splendid place".' },
          { name: 'Rome\'s favourite', image: 'assets/detail/ord-pantheon-portico.jpg', caption: 'The Pantheon\'s Corinthian portico — the order the Romans made their imperial signature.', body: 'The Greeks used Corinthian sparingly — its first great outdoor showing was the little Choragic Monument of Lysicrates in Athens — but the Romans made it their signature, crowning the Pantheon\'s portico, the Temple of Olympian Zeus and countless imperial monuments.', why: 'It shows how a form can be adopted and transformed. The order became less Greek and more Roman — proof that the tradition is a conversation, not a fixed rule.' },
          { name: 'Height without heaviness', image: 'assets/detail/roman-pantheon-in.jpg', caption: 'Slender Corinthian columns let the Romans build tall, light and open, as inside the Pantheon.', body: 'Those slender proportions let the Corinthian rise tall and light, ideal for the many-columned interiors and lofty porticoes the Romans built at scale.', why: 'It pairs the tradition\'s love of ornament with its love of engineering — richness that also solves the problem of building high and open.' }
        ]
      },
      'practice': {
        title: 'How to spot it',
        intro: 'The Corinthian is the leafy, lavish order of the grand room. A few ways to catch it.',
        items: [
          { name: 'Look for the leaves', body: 'A capital that looks like a basket wrapped in curling acanthus foliage is Corinthian. Leaves, not scrolls or a plain cushion, are the giveaway.' },
          { name: 'Tell it from Composite', body: 'Corinthian has only small scrolls uncurling at the corners; if you also see big Ionic volutes sitting on top of the leaves, it is the Composite instead.' },
          { name: 'Read the cornice', body: 'Look up: the richest cornices, carrying both dentils and rows of little scroll brackets (modillions), belong to the Corinthian and Composite.' },
          { name: 'Find the important room', body: 'Notice how often Corinthian marks the grandest space — the main portico, the great hall — and read the "this is the splendid place" signal it was chosen to send.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Roman remains are the great teachers here; read Vitruvius for the origin story.',
        heroImage: 'assets/detail/roman-vitruvius.jpg',
        heroCaption: 'Vitruvius tells the Corinthian\'s origin story; the Roman remains are its great teachers.',
        books: [
          { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The origin story of the Corinthian capital and Callimachus. Free online.' },
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio\'s Corinthian, drawn from the Roman monuments he measured. Free scans.' },
          { title: 'Rome: An Oxford Archaeological Guide', author: 'Amanda Claridge', note: 'ON-RAMP. To see the Corinthian on the actual Roman buildings that perfected it.' },
          { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. For the measured proportions and how to draw the capital.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'A legendary inventor, and the Romans who made it their own.',
        figures: [
          { name: 'Callimachus (5th c. BC)', what: 'The Greek sculptor to whom Vitruvius credits the invention of the acanthus capital.',
            works: ['The acanthus capital (by legend)'], link: 'https://en.wikipedia.org/wiki/Callimachus_(sculptor)' },
          { name: 'The builders of the Pantheon (2nd c. AD)', what: 'Whose vast Corinthian portico fronts the greatest surviving Roman interior.',
            works: ['The Pantheon, Rome'], link: 'https://en.wikipedia.org/wiki/Pantheon,_Rome' },
          { name: 'Roman imperial architects', what: 'Who spread the Corinthian across the empire as the standard order of magnificence.',
            works: ['The Temple of Olympian Zeus, Athens (completed under Hadrian)', 'The Temple of Mars Ultor, Rome'], link: 'https://en.wikipedia.org/wiki/Corinthian_order' }
        ]
      }
    }
  },
  {
    id: 'composite',
    image: 'assets/orders/composite.jpg',
    name: 'The Composite Order',
    short: 'The Roman crown',
    tagline: 'Ionic scrolls on Corinthian leaves — the richest of all',
    group: 'The Orders',
    color: '#8A5CB4', colorDeep: '#5E3A85', colorSoft: '#ECE3F5',
    icon: 'capital',
    blurb: 'The Composite is the Romans\' own contribution to the five — a fusion that sets the large scrolls of the Ionic on top of the acanthus leaves of the Corinthian, making the tallest and most magnificent capital of all. The Renaissance theorists ranked it fifth and highest, the crown of the whole system.',
    sections: {
      'what-it-is': {
        title: 'What the Composite order is',
        intro: 'The Composite keeps the slender, based, fluted Corinthian column but crowns it with a hybrid capital: a full ring of acanthus leaves below, and prominent Ionic volutes above. It was used by the Romans on their grandest triumphal arches and, in the Renaissance, placed at the summit of the hierarchy of orders.',
        principles: [
          { name: 'A deliberate fusion', image: 'assets/quiz/composite-capital.jpg', caption: 'The Composite: big Ionic volutes set on the Corinthian\'s ring of acanthus leaves — richer than either alone.', body: 'The Composite is exactly what its name says — the large Ionic volutes set on top of the Corinthian\'s ring of acanthus leaves, in one capital richer than either alone. Big scrolls and foliage together.', why: 'It proves the "language" idea in the clearest way: a whole new order made by fusing two existing ones. The grammar is generative, not fixed.' },
          { name: 'Rome\'s grand invention', image: 'assets/detail/ord-archoftitus.jpg', caption: 'The Arch of Titus carries one of the oldest surviving uses of the Composite — the order of victory and triumph.', body: 'Where Tuscan was Rome\'s plain native order, the Composite was Rome\'s magnificent one, developed in the late first century BC. Its oldest surviving example crowns the Arch of Titus in Rome — the order of victory and triumph.', why: 'It shows the Romans as inventors, not just inheritors, of the classical language. When a triumphal arch wanted to shout, it reached for the Composite.' },
          { name: 'As tall and rich as Corinthian', image: 'assets/orders/composite.jpg', caption: 'The Composite keeps the slender, based, fluted Corinthian column, tuned for maximum splendour.', body: 'The Composite keeps the slender, based, fluted Corinthian column — about ten diameters high — and carries an entablature as ornate as any, or richer. It is tuned for maximum splendour.', why: 'It sits with the Corinthian as the most attenuated and decorated of the five: the orders at their most lavish, where the building most wants to impress.' },
          { name: 'Made the fifth order by the Renaissance', image: 'assets/detail/ord-fiveorders.jpg', caption: 'The Renaissance theorists elevated the Composite to a distinct fifth order and capped the canon with it.', body: 'The Romans treated the Composite as merely a rich variant of the Corinthian, not a separate order. It was the Renaissance theorists — Alberti, Serlio, Vignola, Palladio, Scamozzi — who elevated it to a distinct fifth order and capped the canon with it.', why: 'It is the clearest proof that the tidy "five orders" is a Renaissance codification, not an ancient law. The fifth order was, in a sense, promoted into existence.' },
          { name: 'The top of the hierarchy', image: 'assets/detail/ord-septimius.jpg', caption: 'The Arch of Septimius Severus — the Composite set at the summit, a building\'s most magnificent crown.', body: 'The theorists arranged the orders as a rising scale of richness — Tuscan, Doric, Ionic, Corinthian, Composite — and set the Composite at the very summit, the most ornate and most honoured.', why: 'It completes the ladder from plain to rich, and gives a building its most magnificent possible crown when the top storey wants to sing.' }
        ]
      },
      'practice': {
        title: 'How to spot it',
        intro: 'The Composite is the richest capital of all — learn to separate it from the Corinthian it grew out of.',
        items: [
          { name: 'Scrolls AND leaves', body: 'If you see prominent Ionic volutes sitting on top of a bed of Corinthian acanthus leaves, in one capital, it is Composite.' },
          { name: 'Tell it from its parents', body: 'Ionic has scrolls but no leaves; Corinthian has leaves with only small corner scrolls; Composite has full-blown volutes above full leaves. It is the sum of the other two.' },
          { name: 'Look high, and at arches', body: 'Find it crowning the top storey of a grand façade, or framing a triumphal or memorial arch — the places a building saved for its loudest note.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Composite is a Renaissance codification of a Roman habit — read the theorists who fixed the five.',
        heroImage: 'assets/detail/pall-plate.jpg',
        heroCaption: 'Palladio and Vignola\'s plates fixed the five orders, the Composite included, for later builders.',
        books: [
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio codifies the Composite as the fifth order. Free scans.' },
          { title: 'Regola delli cinque ordini', author: 'Vignola, 1562', note: 'PRIMARY. The rulebook that fixed all five orders, Composite included, for later builders.' },
          { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. Measured drawings of the Composite alongside the others.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'An order of builders and theorists rather than one inventor.',
        figures: [
          { name: 'The builders of the Arch of Titus (1st c. AD)', what: 'Whose triumphal arch carries one of the earliest grand uses of the Composite capital.',
            works: ['The Arch of Titus, Roman Forum'], link: 'https://en.wikipedia.org/wiki/Arch_of_Titus' },
          { name: 'Sebastiano Serlio (1475–1554)', portrait: 'assets/detail/portrait-serlio.jpg', what: 'Whose treatise helped fix the canon of five orders that placed the Composite at the summit.',
            works: ['<i>Tutte l\'opere d\'architettura et prospetiva</i>'], link: 'https://en.wikipedia.org/wiki/Sebastiano_Serlio' },
          { name: 'Andrea Palladio', portrait: 'assets/detail/portrait-palladio.jpg', what: 'Who drew and ranked the Composite as the fifth and richest order in his Four Books.',
            works: ['<i>The Four Books of Architecture</i>', 'The Villa Rotonda, Vicenza', 'San Giorgio Maggiore, Venice'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' }
        ]
      }
    }
  },

  // ---------------- THE OTHER ELEMENTS (art.html?id=...) ----------------
  {
    id: 'proportion',
    image: 'assets/elements/proportion.jpg',
    name: 'Proportion & Harmony',
    short: 'Number made visible',
    tagline: 'The ratios that make a building feel right',
    group: 'The Elements',
    color: '#3F72B8', colorDeep: '#294E85', colorSoft: '#DCE6F5',
    icon: 'compass',
    blurb: 'Classical builders held that beauty is not a matter of taste but of ratio — the measurable agreement of the parts with one another and with the whole. Proportion is the hidden mathematics that makes a good classical room feel calm and resolved, and its lack that makes a bad one feel wrong without our knowing why.',
    sections: {
      'what-it-is': {
        title: 'What proportion means',
        intro: 'Proportion is the system of ratios that governs a classical design — the height of a column to its width, a door to its room, a window to the wall. The tradition inherited from Pythagoras and Plato the conviction that the same simple ratios that sound harmonious to the ear are beautiful in space, and it built a whole art on that belief.',
        principles: [
          { name: 'Symmetria — agreement with a measure', image: 'assets/styles/palladian.jpg', caption: 'A Palladian façade: every part measured in one unit and answering to the others — commensurability, not mirror-symmetry.', body: 'The ancient word Vitruvius used, symmetria, does not mean mirror-symmetry. It means commensurability: that every part of a building is measured in the same unit and answers to the others, so nothing is an arbitrary size. Proportion is the parts sharing a common measure.', why: 'It clears up a common confusion. Classical "proportion" is not about a building matching left to right; it is about every dimension being a knowable multiple of one another, so the whole holds together.' },
          { name: 'Beauty as agreement', image: 'assets/detail/prop-alberti.jpg', caption: 'Alberti\'s Santa Maria Novella — beauty as concinnitas, the harmony from which nothing could be changed for the better.', body: 'Alberti defined beauty as concinnitas — the harmony of all the parts such that nothing could be added, taken away or altered but for the worse. Beauty is not ornament laid on top; it is the rightness of the relationships underneath.', why: 'It reframes what you are looking at, and gives you a test. A plain, unornamented classical building can be profoundly beautiful, because its beauty lives in proportion, not decoration.' },
          { name: 'Music you can see', image: 'assets/detail/prop-doublecube.jpg', caption: 'The Double Cube Room at Wilton — a room tuned like an instrument, its dimensions the consonant intervals of music.', body: 'The consonant intervals of music — the octave (2:1), the fifth (3:2), the fourth (4:3) — were used as the ratios of rooms and façades. A room might be a double cube; a window twice as tall as wide. The building is, in effect, tuned like an instrument.', why: 'It explains the strange calm of classical spaces. Your eye is reading the same harmonies your ear finds pleasing in music — an order sensed before it is understood.' },
          { name: 'The human measure', image: 'assets/detail/prop-vitruvianman.jpg', caption: 'Vitruvius set the well-formed body in a circle and a square — the image Leonardo drew, and the measure of the orders.', body: 'Vitruvius set the well-formed human body inside a circle and a square — the image Leonardo drew as Vitruvian Man — and made the body the source of the orders\' proportions. The building is scaled to us.', why: 'It is why classical buildings feel humane rather than alien. Their measure is taken from the body, so we feel addressed by them, at our own scale.' },
          { name: 'The module', image: 'assets/detail/ord-fiveorders.jpg', caption: 'One number governs all: the column\'s diameter is the module from which every other dimension is derived by ratio.', body: 'Proportion is made practical through the module — usually the diameter of the column (or, in some rulebooks, its half) — from which every other dimension is derived by ratio. Design becomes a matter of counting modules, not free invention.', why: 'It shows how a whole building could be held in the mind and coordinated by hand, long before drawings could be copied exactly. One number governs all — which is exactly how the orders work.' },
          { name: 'Palladio\'s beautiful rooms', image: 'assets/detail/pall-plate.jpg', caption: 'Palladio named his most beautiful room shapes and tuned each room\'s height to its plan — proportion made buildable.', body: 'Palladio turned the theory into usable rules, naming his most beautiful room shapes — the circle, the square, the square-and-a-half, whole-number rectangles like 4:3, 3:2 and 5:3, and the double square (2:1) — and setting a room\'s height by proportional means so the third dimension answers to the plan.', why: 'It is proportion made buildable. It is why Palladian rooms feel so composed: their dimensions are a tuned system, not free choices, and the harmony is felt even when it is not understood.' },
          { name: 'The golden-ratio myth', image: 'assets/detail/prop-golden.jpg', caption: 'The golden rectangle — often laid over classical buildings after the fact, but the real ratios the tradition used are the simple whole numbers you can hear in music.', body: 'It is often claimed that the Greeks and Renaissance architects designed on the golden ratio (about 1.618). There is little real evidence for it: the "golden Parthenon" and "golden Vitruvian Man" readings rely on selective measuring, the Parthenon\'s footprint is closer to 2.25:1, and the golden section was first set out by Euclid — after the Parthenon — as geometry, not an architectural rule.', why: 'It is worth knowing so you are not fooled. The real ratios the tradition used are simple whole numbers you can hear in music, not a mystical irrational number laid over everything after the fact.' }
        ]
      },
      'the-path': {
        title: 'Learning to see proportion',
        intro: 'Feel it first in a calm room, then learn the numbers behind the feeling, then read the theory and the debate.',
        heroImage: 'assets/detail/prop-georgianroom.jpg',
        heroCaption: 'Stand in a well-proportioned Georgian room and feel its calm before you analyse anything.',
        levels: [
          { stage: 'Beginner', items: [
            'Stand in a well-proportioned classical room — a Georgian drawing room, a temple portico — and simply feel its calm before analysing anything.',
            'Take in the big idea: the tradition held beauty to be measurable ratio, not personal taste.',
            'Learn the module — that a column\'s diameter is the unit everything else is measured in.'
          ] },
          { stage: 'Intermediate', items: [
            'Learn the musical ratios (2:1, 3:2, 4:3) and Palladio\'s recommended room shapes.',
            'Learn that ancient "symmetria" means commensurability, not mirror-symmetry.',
            'Read Palladio\'s Book I on room proportions — the theory at its most usable.'
          ] },
          { stage: 'Advanced', items: [
            'Read Alberti on concinnitas — beauty as the harmony from which nothing can be changed for the better.',
            'Engage the Wittkower debate: his musical-proportion thesis, and the studies that found it fits only some rooms.',
            'Test the golden-ratio claims sceptically by actually measuring a building said to embody them.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Proportion is invisible until you start counting. A few things to do.',
        items: [
          { name: 'Measure a room as a ratio', body: 'Pace or measure a classical room\'s length and width and reduce it to a simple ratio. Is it a square, a 3:2, a double square? The good ones usually land on a simple number.' },
          { name: 'Count in modules', body: 'On a columned building, take the column\'s diameter as "1" and estimate the other parts as multiples of it — the spacing, the height, the entablature. Feel the whole resolve into counting.' },
          { name: 'Hunt for the double cube', body: 'Look for a room twice as long as it is wide (and often as high) — the famous "double cube", a favourite of the English Palladians. Once you know it, you feel it on entering.' },
          { name: 'Test a "golden" building', body: 'Take a building someone calls golden-ratio, measure it honestly, and see whether 1.618 actually holds — or whether a simple whole-number ratio fits better.' },
          { name: 'Feel well against badly proportioned', body: 'Compare a resolved classical room with a mean, arbitrary modern one, and notice the difference in your body before you can name it. That feeling is proportion, working or missing.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'This is the most philosophical of the elements; the primary texts are essential, with the great modern study and its critics.',
        books: [
          { title: 'De Architectura, Book III', author: 'Vitruvius, 1st c. BC', note: 'PRIMARY. On symmetry, proportion and the human figure set in the circle and square. Free in the Morgan translation.' },
          { title: 'On the Art of Building, Books VI & IX', author: 'Leon Battista Alberti', note: 'PRIMARY. The fullest classical theory of proportion and of concinnitas. Dense — read the books on beauty rather than the whole.' },
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. His recommended room ratios — the theory turned into usable rules. Ware\'s 1738 English edition is free.' },
          { title: 'Architectural Principles in the Age of Humanism', author: 'Rudolf Wittkower, 1949', note: 'ON-RAMP (harder). The famous study of musical proportion in Renaissance architecture — brilliant, but its thesis is contested, so read the critiques alongside.' },
          { title: 'Proportion: Science, Philosophy, Architecture', author: 'Richard Padovan, 1999', note: 'ON-RAMP. A wide, thoughtful modern survey of proportion theory across the whole tradition.' },
          { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Short and clear, placing proportion within the whole grammar of the orders.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The theorists of ratio, ancient, Renaissance and modern.',
        figures: [
          { name: 'Pythagoras & Plato', what: 'Whose discovery of harmonic ratios in music and the cosmos gave the tradition its faith that number is beautiful.',
            works: ['The harmonic ratios of music (2:1, 3:2, 4:3)', 'Plato\'s <i>Timaeus</i> (number and the cosmos)'], link: 'https://en.wikipedia.org/wiki/Musica_universalis' },
          { name: 'Vitruvius (1st c. BC)', what: 'Who tied proportion to the human body and the module, and made it the basis of the orders.',
            works: ['<i>De Architectura</i>, Book III (symmetria and the human figure)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
          { name: 'Leon Battista Alberti (1404–1472)', portrait: 'assets/detail/portrait-alberti.jpg', what: 'Who gave proportion its fullest theory as concinnitas — the harmony of the whole.',
            works: ['<i>De re aedificatoria</i>, Books VI & IX (on beauty and concinnitas)'], link: 'https://en.wikipedia.org/wiki/Leon_Battista_Alberti' },
          { name: 'Andrea Palladio (1508–1580)', portrait: 'assets/detail/portrait-palladio.jpg', what: 'Who turned the theory into simple, repeatable room-ratios that spread across Europe.',
            works: ['<i>The Four Books of Architecture</i>, Book I (room proportions)', 'The Villa Rotonda, Vicenza'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
          { name: 'Rudolf Wittkower (1901–1971)', what: 'The modern historian who revived the reading of Renaissance proportion as musical harmony — and set off the debate that still runs.',
            works: ['<i>Architectural Principles in the Age of Humanism</i>'], link: 'https://en.wikipedia.org/wiki/Rudolf_Wittkower' }
        ]
      }
    }
  },
  {
    id: 'ornament',
    image: 'assets/elements/ornament.jpg',
    name: 'Ornament & Detail',
    short: 'The grammar of enrichment',
    tagline: 'Mouldings, capitals and carving — and what they mean',
    group: 'The Elements',
    color: '#2F9E77', colorDeep: '#1F6B52', colorSoft: '#DDF1E8',
    icon: 'acanthus',
    blurb: 'Classical ornament is not arbitrary decoration but a settled grammar of mouldings, motifs and carving, each with its place and logic. From the profile of a cornice to the egg-and-dart on a moulding, the tradition worked out a rich but disciplined vocabulary of enrichment — and held that ornament should always grow from the building, never be stuck upon it.',
    sections: {
      'what-it-is': {
        title: 'What classical ornament is',
        intro: 'Ornament in the classical tradition is governed, not free. There is a repertoire of standard mouldings, each a particular curved profile; a settled set of motifs carved upon them; and rules about where richness belongs and how much. Learning ornament is learning this vocabulary and its grammar — and then reading it everywhere.',
        principles: [
          { name: 'The mouldings — profiles that shape light', image: 'assets/detail/mouldings.jpg', caption: 'A cornice: the stacked mouldings, dentils and modillions catching light and casting shadow.', body: 'A handful of profiles do most of the work: the flat fillet, the small bead (astragal), the big torus, the deep hollow scotia, the convex ovolo, the concave cavetto, the S-curved cyma recta and cyma reversa, and the broad projecting corona of the cornice. Convex mouldings catch light, concave ones read as shadow, and the S-curves do both.', why: 'Mouldings are the smallest units of the language. Learn to read a cornice profile and you can name, date and place a building from a scrap of its edge.' },
          { name: 'Each moulding has its enrichment', image: 'assets/detail/egg-and-dart.jpg', caption: 'Egg-and-dart — the carved enrichment that conventionally belongs to the convex ovolo moulding.', body: 'The tradition pairs a given profile with a given carved motif: egg-and-dart on the ovolo, bead-and-reel on the little astragal, leaf-and-dart or water-leaf on the ogee. And in the cornice, dentils (a row of small tooth-like blocks, an Ionic tell) are distinct from modillions (larger scroll brackets, a Corinthian one).', why: 'Because the pairing is conventional, once you know it you can predict what a plain moulding "should" carry — and spot at once where a carver kept or broke the rule.' },
          { name: 'The standard motifs', image: 'assets/detail/greek-key.jpg', caption: 'The Greek key, or meander — one continuous line turning through right angles.', body: 'A shared repertoire recurs across the centuries: the acanthus leaf, the palmette and anthemion, the Greek key (meander), the plaited guilloche, the running Vitruvian wave, foliage scrollwork (rinceau), the rosette and patera, the hanging swag or festoon, and the garlanded ox-skull (bucranium).', why: 'These motifs are the tradition\'s shared words, and they travel — off the temple into furniture, silver, plasterwork and print. Recognise them once and you read them everywhere.' },
          { name: 'Ornament enriches construction', image: 'assets/detail/acanthus-scroll.jpg', caption: 'A carved acanthus scroll (rinceau) running along a frieze — ornament gathering where the eye reads the building.', body: 'Good classical ornament marks and clarifies the structure — it gathers at the capital, the cornice, the doorway and the meeting of parts, where the eye needs help understanding what is happening, and is placed by logic, not scattered evenly. As Owen Jones put it: "Construction should be decorated. Decoration should never be purposely constructed."', why: 'It gives you a test for any ornament: does it clarify the building, or merely cover a surface? The best carving tells you where you are and what is carrying what.' },
          { name: 'Decorum — the discipline of restraint', image: 'assets/detail/decorum.jpg', caption: 'A Doric temple at Paestum — massive and almost bare. The greatest classical buildings can be austere.', body: 'Classical theory holds that richness should suit a building\'s purpose and rank: a temple, a bank and a garden pavilion do not carry the same amount of ornament, and ornament in the wrong place, or too much of it, is a fault.', why: 'It explains why so many of the greatest classical buildings look austere. Knowing when NOT to enrich is as much part of the grammar as the carving itself — restraint is a positive value, not a lack.' },
          { name: 'The honesty debate', image: 'assets/detail/honesty.jpg', caption: 'Adolf Loos\'s Looshaus in Vienna — the upper floors stripped of ornament. The end of the long argument.', body: 'In the nineteenth century ornament became a moral question. Pugin demanded that all ornament be the enrichment of the essential construction, never construction dressed up as ornament; Ruskin held that true ornament comes from nature and the joy of the hand. A generation later Adolf Loos, in his lecture "Ornament and Crime", rejected applied ornament altogether — the argument that ends in the bare modern wall.', why: 'It shows the stakes: the tradition\'s ornament was not idle decoration but a claim about honesty and value, and the fight over it helped strip ornament out of building for a century.' },
          { name: 'Ornament was painted', image: 'assets/detail/polychromy.jpg', caption: 'A reconstruction of a Greek temple\'s ornament in its original colour — the mouldings picked out in blue, red and gold.', body: 'Classical ornament was not bare stone but colour: Greek and Roman mouldings, friezes and sculpture were painted in strong blues, reds and blacks, and pigment analysis has recovered the traces on the Parthenon\'s triglyphs, metopes and cornice mouldings.', why: 'It doubles the point of the carving. The mouldings were shaped to catch light AND coloured to read — the "pure white marble" ornament we picture is an accident of weathering, not the real thing.' }
        ]
      },
      'the-path': {
        title: 'Learning ornament',
        intro: 'Learn to name a few motifs first, then the mouldings and their enrichments, then the theory and the placement logic.',
        heroImage: 'assets/detail/path-ornament.jpg',
        heroCaption: 'An ornamental plaster ceiling rose — the kind of classical enrichment you are learning to read.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn four motifs by eye and name them on real buildings: egg-and-dart, the Greek key, the acanthus leaf, and a hanging swag.',
            'Notice how ornament clusters at the top of a building (the cornice) and the top of a column (the capital), not spread evenly.'
          ] },
          { stage: 'Intermediate', items: [
            'Learn the moulding profiles — fillet, astragal, ovolo, cavetto, torus, scotia, cyma recta and reversa, corona.',
            'Learn the fixed pairings: egg-and-dart on the ovolo, bead-and-reel on the astragal, leaf-and-dart on the ogee.',
            'Learn to tell dentils (little teeth) from modillions (scroll brackets) in a cornice.'
          ] },
          { stage: 'Advanced', items: [
            'Read Owen Jones\'s propositions and Ruskin\'s "Lamp of Beauty" on where ornament should come from.',
            'Understand the placement logic and decorum — why ornament gathers where it does, and why rank governs richness.',
            'Follow the moral debate from Pugin to Ruskin to Loos, and look at painted reconstructions to see ornament as colour.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Ornament is everywhere once you can name it. A few things to do.',
        items: [
          { name: 'Name the egg-and-dart', image: 'assets/detail/egg-and-dart.jpg', body: 'Find a classical cornice — a bank, a town hall, an old civic building — and pick out the row of alternating eggs and darts on the ovolo moulding. Say it aloud.' },
          { name: 'Trace a Greek key', image: 'assets/detail/greek-key.jpg', body: 'Find a meander band and follow it with your eye or finger — feel how one continuous line makes all the right-angle turns.' },
          { name: 'Dentils or modillions?', image: 'assets/detail/mouldings.jpg', body: 'Look up under a cornice: little rectangular teeth (dentils) or bigger scroll brackets (modillions)? The answer hints at the order — dentils lean Ionic, modillions Corinthian.' },
          { name: 'Apply Pugin\'s test', body: 'On any enriched surface ask: is this ornament clarifying the construction, or just covering it? You are now judging ornament the way the tradition did.' },
          { name: 'Find a motif off a building', image: 'assets/detail/acanthus-scroll.jpg', body: 'Pick one motif — acanthus, swag, patera — and spot it on furniture, silver or a printed border, to prove the vocabulary travels far beyond stone.' },
          { name: 'Put the colour back', image: 'assets/detail/polychromy.jpg', body: 'Look up a painted reconstruction of a Greek temple and re-picture a moulding you know — the egg-and-dart, say — in its original strong colour.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'For ornament, the great nineteenth-century pattern books and moral critics are the heart of it — all free and public-domain — with one clear modern dictionary.',
        heroImage: 'assets/detail/grammar-plate.jpg',
        heroCaption: 'A plate from Owen Jones\'s The Grammar of Ornament (1856) — the book to start with.',
        books: [
          { title: 'The Grammar of Ornament', author: 'Owen Jones, 1856', note: 'PRIMARY. The most beautiful survey of ornament ever printed, opening with its famous general propositions on design. A picture-book to browse; free scans exist.' },
          { title: 'The Seven Lamps of Architecture', author: 'John Ruskin, 1849', note: 'PRIMARY. Read "The Lamp of Beauty" on where ornament should come from — nature and the hand. Beautiful, demanding Victorian prose; dip in.' },
          { title: 'The True Principles of Pointed or Christian Architecture', author: 'A. W. N. Pugin, 1841', note: 'PRIMARY. The "two great rules" — that ornament should be the enrichment of the essential construction, never construction dressed as ornament. Short and fierce.' },
          { title: 'Handbook of Ornament', author: 'Franz Sales Meyer, 1888 (English 1892)', note: 'ON-RAMP. The classic illustrated reference — thousands of plates naming every motif and moulding. Public-domain; a lookup, not a read-through.' },
          { title: 'A Visual Dictionary of Architecture', author: 'Francis D. K. Ching', note: 'ON-RAMP. The fastest modern way to fix the moulding and motif names with clear drawings.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The carvers are mostly anonymous; the theorists — and one supreme carver — are not.',
        figures: [
          { name: 'Owen Jones (1809–1874)', portrait: 'assets/detail/portrait-owen-jones.jpg', what: 'Whose Grammar of Ornament codified the world\'s decorative languages and set out the propositions on design still taught today.',
            works: ['<i>The Grammar of Ornament</i> (1856) — free online, and the one to see', '<i>Plans, Elevations… of the Alhambra</i> (1842–45)', 'The colour scheme of the 1851 Crystal Palace'],
            link: 'https://en.wikipedia.org/wiki/Owen_Jones_(architect)' },
          { name: 'A. W. N. Pugin (1812–1852)', portrait: 'assets/detail/portrait-pugin.jpg', what: 'Who insisted ornament must enrich construction, not disguise it — a rule that outlived his own Gothic cause.',
            works: ['<i>The True Principles of Pointed or Christian Architecture</i> (1841)', '<i>Contrasts</i> (1836)', 'The interiors and detail of the Palace of Westminster'],
            link: 'https://en.wikipedia.org/wiki/Augustus_Pugin' },
          { name: 'John Ruskin (1819–1900)', portrait: 'assets/detail/portrait-ruskin.jpg', what: 'Who tied ornament to nature, labour and the joy of the hand, and changed how the modern age valued carving.',
            works: ['<i>The Seven Lamps of Architecture</i> (1849) — read "The Lamp of Beauty"', '<i>The Stones of Venice</i> (1851–53), esp. "The Nature of Gothic"'],
            link: 'https://en.wikipedia.org/wiki/John_Ruskin' },
          { name: 'Grinling Gibbons (1648–1721)', portrait: 'assets/detail/portrait-gibbons.jpg', what: 'The supreme carver of the English classical age, whose naturalistic limewood swags of fruit and flowers set the standard for enrichment.',
            works: ['The carvings in the choir of St Paul\'s Cathedral', 'The carvings at Hampton Court Palace', 'The Cosimo Panel (a virtuoso limewood relief)'],
            link: 'https://en.wikipedia.org/wiki/Grinling_Gibbons' },
          { name: 'Adolf Loos (1870–1933)', portrait: 'assets/detail/portrait-loos.jpg', what: 'The modernist who, in his lecture "Ornament and Crime", rejected applied ornament altogether — the end of the long argument.',
            works: ['<i>Ornament and Crime</i> (lecture 1910, published 1913)', 'The Looshaus, Vienna (1911)', 'Villa Müller, Prague (1930)'],
            link: 'https://en.wikipedia.org/wiki/Adolf_Loos' }
        ]
      }
    }
  },
  {
    id: 'building-types',
    image: 'assets/elements/building-types.jpg',
    name: 'Building Types',
    short: 'How the language is used',
    tagline: 'Temple, villa, church and civic hall',
    group: 'The Elements',
    color: '#4C63B6', colorDeep: '#33468C', colorSoft: '#E1E5F5',
    icon: 'temple',
    blurb: 'The same classical language is spoken through a set of recurring building types, each with its own conventions: the temple, the triumphal arch, the villa, the church, the palace and the civic hall. Knowing the type tells you what a building is trying to be, and lets you judge how well it plays its part.',
    sections: {
      'what-it-is': {
        title: 'The classical building types',
        intro: 'A building type is a recognised form matched to a use — a set of expectations the builder inherits and works within. The classical tradition is carried by a handful of great types, and much of its history is the story of these types being adapted to new needs.',
        principles: [
          { name: 'The temple', image: 'assets/styles/greek.jpg', caption: 'The temple: a raised platform, a columned portico and a pediment — the tradition\'s most portable image.', body: 'The origin of it all: a raised platform, a columned portico, a cella within, crowned by a pediment. The temple front — columns and pediment — became the tradition\'s most portable image, stamped onto churches, banks, houses and museums ever since.', why: 'The temple front is the single most reused motif in architecture. Learn it, and you recognise its ghost on a thousand later buildings.' },
          { name: 'The villa and the country house', image: 'assets/styles/palladian.jpg', caption: 'Palladio\'s temple-fronted villa became the country house of England, Ireland and America.', body: 'Palladio turned the working farmhouse of the Veneto into a symmetrical, temple-fronted villa, giving noble form to country living. Through him it became the country house of England, Ireland and America — the great estates you can still visit.', why: 'It is the direct root of the grand estate house. When you tour a country mansion, you are usually touring Palladio\'s idea in local dress.' },
          { name: 'The church', image: 'assets/detail/bar-stpauls.jpg', caption: 'Wren\'s St Paul\'s — the Roman basilica and the Pantheon\'s dome remade as the Christian church.', body: 'Classical builders adapted the Roman basilica and the domed Pantheon into the Christian church — the long nave for the congregation, the dome over the crossing for heaven. Wren\'s London churches and St Paul\'s are the English summit.', why: 'It shows the language bending to a use the ancients never imagined, and doing it so well that the classical church feels as natural as the temple it descends from.' },
          { name: 'The civic building', image: 'assets/detail/bt-belfast.jpg', caption: 'Belfast City Hall — the dome and temple front borrowed to say permanence, order and public trust.', body: 'Town halls, courts, museums, parliaments and banks took on classical dress to borrow its authority — the temple front and the dome saying permanence, order and public trust. Belfast City Hall and the US Capitol are of this family.', why: 'It explains why so much civic architecture is classical. The style was chosen to make citizens feel their institutions were solid, fair and lasting.' }
        ]
      },
      'the-path': {
        title: 'Learning the building types',
        intro: 'Learn to see the type first — what a building is trying to be — then how each great type was adapted, then the arguments about fitting an old form to a new use.',
        heroImage: 'assets/styles/roman.jpg',
        heroCaption: 'The Colosseum — one great classical type among many. The first skill is seeing what a building is trying to be.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the temple front by heart — columns carrying a pediment — and start spotting its ghost on churches, banks and houses.',
            'For any building, ask the first question: what type is this trying to be — temple, villa, church, civic hall?',
            'Visit one classical country house and one classical civic building, and feel how differently each addresses you.'
          ] },
          { stage: 'Intermediate', items: [
            'Trace the villa from Palladio\'s Veneto farmhouses to the country houses of Britain, Ireland and America.',
            'See how the Roman basilica and the Pantheon\'s dome were remade as the Christian church, in Wren\'s St Paul\'s above all.',
            'Notice why civic buildings reach for the temple front and the dome — the borrowed language of permanence and public trust.'
          ] },
          { stage: 'Advanced', items: [
            'Read Palladio\'s Books II–IV, which move type by type, and Alberti on the proper character of public and private buildings.',
            'Judge how well a modern building plays its inherited type — where the convention helps, and where it strains.',
            'Follow one type — the villa, say — across three centuries and three countries, and watch the same idea in local dress.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Reading a building\'s type is a quick, useful habit. A few things to do.',
        heroImage: 'assets/detail/pall-templefront.jpg',
        heroCaption: 'The temple front — columns and pediment — the single most reused motif in all of architecture.',
        items: [
          { name: 'Name the type first', body: 'Before anything else, ask what a building is trying to be — temple, villa, church, palace, civic hall. The type tells you what it is reaching for.' },
          { name: 'Find the temple front', body: 'Spot the columns-and-pediment motif on something that is not a temple — a church, a bank, a house, a museum — and you have caught the tradition\'s most portable image at work.' },
          { name: 'Read a country house as a villa', body: 'At a grand estate house, look for Palladio\'s idea underneath: symmetry, a temple-fronted centre, wings reaching out. You are usually touring his invention in local dress.' },
          { name: 'Ask what a civic building is borrowing', body: 'At a town hall, court or bank, notice the dome or portico and read the message: permanence, order, public trust — then ask whether the building earns it.' },
          { name: 'Test the fit', body: 'When an old type meets a new use — a temple made into a bank, a basilica into a church — judge how gracefully the form bends. That fit, or its strain, is the whole art of type.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The treatises organise themselves by type; a good survey ties them to real buildings.',
        heroImage: 'assets/detail/pall-plate.jpg',
        heroCaption: 'The treatises move type by type — Palladio takes houses, then public buildings, then temples.',
        books: [
          { title: 'The Four Books of Architecture, Books II–IV', author: 'Andrea Palladio', note: 'PRIMARY. Palladio moves type by type — houses, then public buildings, then temples. The clearest classical account of type. Free scans.' },
          { title: 'On the Art of Building', author: 'Leon Battista Alberti', note: 'PRIMARY. Organises architecture by public and private types and their proper character.' },
          { title: 'A History of Architecture', author: 'Banister Fletcher', note: 'ON-RAMP. Unmatched for seeing each type across periods with comparative plans.' },
          { title: 'The Classical Language of Architecture', author: 'John Summerson', note: 'ON-RAMP. Ties the grammar to the types briefly and brilliantly.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Masters associated with the great types.',
        figures: [
          { name: 'Andrea Palladio', portrait: 'assets/detail/portrait-palladio.jpg', what: 'Who perfected the classical villa and gave the country house its lasting form.',
            works: ['The Villa Rotonda, Vicenza', 'The Basilica Palladiana, Vicenza', '<i>The Four Books of Architecture</i>'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
          { name: 'Sir Christopher Wren', portrait: 'assets/detail/portrait-wren.jpg', what: 'Who reinvented the classical church for Protestant London, crowned by the dome of St Paul\'s.',
            works: ['St Paul\'s Cathedral, London', 'The 51 City churches', 'The Royal Hospital, Chelsea'], link: 'https://en.wikipedia.org/wiki/Christopher_Wren' },
          { name: 'Thomas Jefferson (1743–1826)', portrait: 'assets/detail/portrait-jefferson.jpg', what: 'Who used the temple form for a republic — the Virginia State Capitol and Monticello — founding American civic classicism.',
            works: ['The Virginia State Capitol, Richmond', 'Monticello', 'The University of Virginia, Charlottesville'], link: 'https://en.wikipedia.org/wiki/Thomas_Jefferson' },
          { name: 'Sir Edwin Lutyens (1869–1944)', portrait: 'assets/detail/portrait-lutyens.jpg', what: 'Who carried the classical country house and civic monument into the twentieth century.',
            works: ['The Cenotaph, Whitehall', 'Castle Drogo, Devon', 'The Viceroy\'s House, New Delhi'], link: 'https://en.wikipedia.org/wiki/Edwin_Lutyens' }
        ]
      }
    }
  },
  {
    id: 'materials',
    image: 'assets/elements/materials.jpg',
    name: 'Materials & Construction',
    short: 'How it stands up',
    tagline: 'Stone, brick, timber, the arch and the dome',
    group: 'The Elements',
    color: '#6B7280', colorDeep: '#404650', colorSoft: '#E7E9ED',
    icon: 'arch',
    blurb: 'Beneath the ornament, classical architecture is a set of solutions to the oldest problem in building: how to hold up a roof and span an opening. Post-and-lintel in Greek stone, the arch, vault and dome in Roman concrete — the great structural inventions are as much a part of the tradition as the orders that clothe them.',
    sections: {
      'what-it-is': {
        title: 'How classical buildings stand up',
        intro: 'The look of a classical building is inseparable from how it is built. Greek architecture is an architecture of the beam; Roman architecture adds the arch and everything the arch makes possible. Learning the construction explains why the styles look as they do.',
        principles: [
          { name: 'Post and lintel', image: 'assets/detail/greek-colonnade.jpg', caption: 'Greek building rests on posts carrying beams — and stone beams must be short, so the columns crowd close.', body: 'Greek building rests on the simplest structure: upright posts (columns) carrying horizontal beams (lintels). Stone is strong in compression but weak in bending, so beams must be short — which is why Greek temples have many closely spaced columns.', why: 'It explains the rhythm of a Greek temple. The forest of columns is not a style choice but a structural necessity of building in stone beams.' },
          { name: 'The arch, vault and dome', image: 'assets/detail/roman-vault.jpg', caption: 'The Roman arch turns bending into compression — and from it come the barrel vault and the dome.', body: 'The Romans exploited the arch — a curve of wedge-shaped stones (voussoirs) that turns bending into compression — and from it the barrel vault and the dome. Suddenly vast spaces could be spanned without a forest of columns.', why: 'It is the great divide between Greek and Roman. The arch is why Rome could build baths, basilicas and the Pantheon\'s dome — spaces Greece could never have roofed.' },
          { name: 'Roman concrete', image: 'assets/detail/roman-concrete.jpg', caption: 'Opus caementicium — lime, volcanic ash and rubble cast into vaults, then faced with brick or marble.', body: 'The Romans developed opus caementicium — a concrete of lime, volcanic ash and rubble — that could be cast into arches, vaults and domes, then faced with brick or marble. It freed building from the size of a quarried block.', why: 'It reveals the engineering hidden inside the splendour. The Pantheon\'s marble skin covers a triumph of concrete — ornament and engineering working as one.' },
          { name: 'Honesty and the facing', image: 'assets/detail/mat-facing.jpg', caption: 'A fine skin over a rough core of brick or concrete — and a centuries-long argument about how honest to be about it.', body: 'Classical buildings often wear a fine skin — marble, dressed stone, stucco — over a rougher core of brick or concrete. The tradition argued for centuries about how honest a building must be about what is structure and what is dress.', why: 'It opens the great question Ruskin and Pugin fought over: should a building show how it is made? Knowing the core beneath the facing lets you take a side.' }
        ]
      },
      'the-path': {
        title: 'Learning classical construction',
        intro: 'Learn the two great structural ideas first — the beam and the arch — then the materials that made them possible, then the long argument about honesty in building.',
        heroImage: 'assets/detail/roman-pantheon-in.jpg',
        heroCaption: 'The Pantheon\'s coffered dome — the Roman arch taken as far as it will go, in cast concrete.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the one great divide: Greek building spans with beams (post and lintel), Roman building spans with the arch.',
            'Understand why stone beams must be short — and so why Greek temples crowd their columns close.',
            'Find an arch and a beam near you, and trace how each carries its load down to the ground.'
          ] },
          { stage: 'Intermediate', items: [
            'Learn the arch, the barrel vault and the dome as one family — the curve of wedge-shaped voussoirs, extended.',
            'Grasp what Roman concrete changed: building freed from the size of a single quarried block.',
            'Look for the fine facing — marble, stucco, dressed stone — laid over the rough brick or concrete core.'
          ] },
          { stage: 'Advanced', items: [
            'Read Vitruvius\'s practical books on materials and walls, and a modern account such as Adam\'s Roman Building.',
            'Engage the honesty debate — Pugin and Ruskin against the sham — and decide how honest you think a building must be.',
            'Study one great span — the Pantheon\'s dome, or St Paul\'s triple shell — and work out exactly how it stands up.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Construction is invisible until you look for it. A few things to do.',
        heroImage: 'assets/detail/greek-kit.jpg',
        heroCaption: 'The classical kit of parts — beneath the ornament, a set of solutions for holding up a roof and spanning an opening.',
        items: [
          { name: 'Beam or arch?', body: 'At any old building, ask the first structural question: is this opening spanned by a straight beam (Greek) or a curved arch (Roman)? It sorts the whole tradition in two.' },
          { name: 'Follow the load down', body: 'Trace what carries what — roof to vault, vault to wall, wall to ground — until you reach the earth. A building is an argument about load; follow it downward.' },
          { name: 'Find the voussoirs', body: 'On an arch, pick out the wedge-shaped stones and the keystone at the top. That wedge is the trick that turns bending into compression.' },
          { name: 'Spot the facing', body: 'Look for where a fine skin — marble, ashlar, stucco — meets a rougher core of brick or rubble, at a broken edge or an unfinished side. Now you can see structure and dress apart.' },
          { name: 'Take Pugin\'s side, or Ruskin\'s', body: 'Ask whether a building is honest about how it is made, or hides its structure behind a mask. However you answer, you have joined the oldest argument in the tradition.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Vitruvius is full of practical construction; modern engineering histories make it vivid.',
        heroImage: 'assets/detail/roman-vitruvius.jpg',
        heroCaption: 'Vitruvius is full of practical construction; modern engineering histories make it vivid.',
        books: [
          { title: 'De Architectura, Books II & V', author: 'Vitruvius', note: 'PRIMARY. On materials, walls, and Roman building methods, straight from an ancient engineer. Free online.' },
          { title: 'Roman Building: Materials and Techniques', author: 'Jean-Pierre Adam', note: 'ON-RAMP. The standard modern account of how the Romans actually built — clear and richly illustrated.' },
          { title: 'Structures: Or Why Things Don\'t Fall Down', author: 'J. E. Gordon', note: 'ON-RAMP. A joyful introduction to how arches, beams and domes really work. No maths needed to enjoy it.' },
          { title: 'The Stones of Venice', author: 'John Ruskin', note: 'PRIMARY. On material, craft and the truth of construction — the moral case, beautifully argued.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Engineers and builders, ancient and modern.',
        figures: [
          { name: 'Roman engineers', what: 'The anonymous builders who perfected concrete, the arch and the dome, and roofed the ancient world.',
            works: ['The Pantheon dome, Rome', 'The great baths and basilicas', 'Aqueducts such as the Pont du Gard'], link: 'https://en.wikipedia.org/wiki/Roman_concrete' },
          { name: 'Apollodorus of Damascus (2nd c. AD)', what: 'Trajan\'s engineer, master of concrete construction and the great imperial building works.',
            works: ['Trajan\'s Forum and Markets, Rome', 'Trajan\'s Column', 'Trajan\'s Bridge over the Danube'], link: 'https://en.wikipedia.org/wiki/Apollodorus_of_Damascus' },
          { name: 'Filippo Brunelleschi (1377–1446)', portrait: 'assets/detail/portrait-brunelleschi.jpg', what: 'Who solved the dome of Florence Cathedral by studying Roman construction — the feat that opened the Renaissance.',
            works: ['The dome of Florence Cathedral', 'The Ospedale degli Innocenti', 'The Basilica of San Lorenzo, Florence'], link: 'https://en.wikipedia.org/wiki/Filippo_Brunelleschi' },
          { name: 'Sir Christopher Wren', portrait: 'assets/detail/portrait-wren.jpg', what: 'Scientist-engineer who devised the ingenious triple-shell dome of St Paul\'s.',
            works: ['The triple-shell dome of St Paul\'s Cathedral', 'The Sheldonian Theatre roof, Oxford'], link: 'https://en.wikipedia.org/wiki/Christopher_Wren' }
        ]
      }
    }
  },
  {
    id: 'architects-mind',
    image: 'assets/elements/architects-mind.jpg',
    name: "The Architect’s Mind",
    short: 'The maker behind the building',
    tagline: 'The character, discipline and belief that great building asks of a person',
    group: 'The Elements',
    color: '#7C5CC4', colorDeep: '#4B2F86', colorSoft: '#ECE5F8',
    icon: 'compass',
    blurb: 'Behind every great building stands a certain kind of person. The classical tradition never treated architecture as a merely technical trade: from Vitruvius onward it was understood as a moral and intellectual discipline — one that asked the builder to unite hand and mind, to be learned, honest, patient and humble before proportion and nature, and to build for people not yet born. This is a map of that inner life: the full spectrum of what someone must become to raise works our descendants will thank us for, and the long path by which the masters actually became capable of them. Presented as the tradition understood itself — a belief and an argument worth taking seriously — with quotations traced to their sources and the shaky ones left out.',
    sections: {
      'what-it-is': {
        title: 'The map of the architect’s mind',
        intro: 'To build greatly you must first become a certain kind of person. What follows is the fuller map — the recurring dispositions of mind and character that run from Vitruvius through Alberti, Michelangelo and Wren to Ruskin, Kahn and beyond. Take them as the tradition’s own account of the inner life the work demands: not a checklist, but a portrait of a whole formed person.',
        principles: [
          { name: 'The learned architect', image: 'assets/detail/roman-vitruvius.jpg', caption: 'Vitruvius opens the whole tradition not with a building but with the education of the architect.', body: 'Vitruvius begins his treatise not with stone but with the mind. The architect, he writes, must be lettered, skilful with the pencil, and instructed in geometry, history, philosophy, music, medicine, law and astronomy — "for it is by his judgement that all work done by the other arts is put to test" (Ten Books, I.1). The building is the visible result of a well-furnished mind.', why: 'It sets the bar for the whole tradition: architecture is not one skill but a wide, ordered understanding of the world, gathered into one judgement.' },
          { name: 'Practice and theory, made one', image: 'assets/detail/roman-vault.jpg', caption: 'Roman vaulting — the marriage of the hand that builds and the reason that proves.', body: 'Vitruvius refuses to let the architect be only a craftsman or only a thinker. Architecture is born of fabrica — the continuous exercise of the hand — and ratiocinatio, the reasoning that can demonstrate and explain what the hand makes (Ten Books, I.1). Those who pursued only one "have not been able to reach their goal"; only those who commanded both arrived.', why: 'The hand without the mind is a labourer; the mind without the hand is a critic. The architect is the rare union of the two.' },
          { name: 'Drawing is thinking', image: 'assets/detail/am-drawing.jpg', caption: 'A page of architectural study — disegno, the drawing that is really thought made visible.', body: 'The Renaissance gave this union a name: disegno — at once drawing and design, "the father of our three arts… having its origin in the intellect," in Vasari’s words, and "nothing but a visible expression of our inner conception." To draw is not to record a thought already finished; it is to think, with the hand.', why: 'The architect reasons through the pencil. What cannot yet be drawn has not yet been fully thought.' },
          { name: 'Character before commission', image: 'assets/detail/am-character.jpg', caption: 'The oldest demand in the West: good building depends on a good builder.', body: 'Vitruvius is as insistent on morals as on skill. Philosophy, he writes, makes the architect "high-minded and not self-assuming, but rather… courteous, just, and honest without avariciousness. This is very important, for no work can be rightly done without honesty and incorruptibility" (Ten Books, I.1). Freedom from greed is a professional qualification, not an extra.', why: 'It is the oldest statement in the West that good building depends on a good builder — an ethic nearly two thousand years old.' },
          { name: 'Beauty as a duty', image: 'assets/detail/prop-alberti.jpg', caption: 'Alberti’s Santa Maria Novella — beauty owed to everyone who passes.', body: 'For the tradition, beauty is not a luxury added at the end but an obligation owed to those who must use and pass the building for centuries. Vitruvius set delight (venustas) beside soundness and use; Alberti went further, defining beauty as "that reasoned harmony of all the parts within a body, so that nothing may be added, taken away, or altered, but for the worse" (On the Art of Building, VI).', why: 'It reframes beauty as service rather than vanity. To make a public thing ugly is, in this view, to do a lasting wrong to everyone who must live with it.' },
          { name: 'Decorum — the right form for the right place', image: 'assets/detail/decorum.jpg', caption: 'The austere Doric of Paestum — fitness, not display. The right form for its purpose.', body: 'Among Vitruvius’s foundations of architecture is decor, or propriety: the fitness of a work to its purpose, rank, use and nature. A temple to a stern god should not be dainty; a house should not ape a palace. Alberti agreed that everything built should be so fitting that a viewer "would not feel the expense might have been invested better elsewhere."', why: 'Beauty divorced from purpose is mere decoration; decorum is beauty that belongs — the refusal to shout where a whisper is truer.' },
          { name: 'Humility before proportion and nature', image: 'assets/detail/prop-vitruvianman.jpg', caption: 'The Vitruvian Man — the architect submits to a harmony already there in the body and in number.', body: 'The classical architect did not invent beauty freely; he submitted to a harmony he believed was already present in number, in the human body, and in nature. Alberti called this rightness concinnitas, "the absolute and fundamental rule in Nature." Palladio held that beauty results from "the correspondence of the whole to the parts, of the parts to each other, and of these again to the whole."', why: 'It is the opposite of the modern cult of self-expression. The discipline begins in obedience — the humility to serve a proportion larger than your own taste.' },
          { name: 'Imitate before you invent', image: 'assets/detail/greek-antiquities.jpg', caption: 'Measured drawings of the ancients — the grammar you must absorb before you may write.', body: 'No master began by being original. Brunelleschi went to Rome and spent years measuring the ruins, even digging out buried foundations to find their true proportions. Palladio, believing the ancients "had vastly excelled all who came after," took Vitruvius "both as my master and guide" and measured the ruins "minutely and with the greatest care." You earn the right to a new sentence only after you have learned the language.', why: 'Invention without tradition is noise. The ancients are the grammar you must first absorb.' },
          { name: 'Break the rules only once you have mastered them', image: 'assets/detail/am-laurentian.jpg', caption: 'Michelangelo’s Laurentian Library — the licence of a master who first mastered the rule.', body: 'There is a freedom on the far side of discipline. Vasari praised Michelangelo for departing, in the Laurentian Library, from "the work regulated by measure, order and rule… which other men did after Vitruvius," and so giving courage to those who saw that "he had broken the bonds and chains." But Vasari warned that imitators "lacking in disegno" who copied the licence without the judgement made "monstrous things."', why: 'Rule-breaking is a reward for mastery, not a shortcut around it. The licence is legitimate only because the master first earned it.' },
          { name: 'Vision — seeing the whole first', image: 'assets/detail/ren-stpeters.jpg', caption: 'The dome of St Peter’s — held whole in Michelangelo’s mind before a stone was laid.', body: 'The architect carries the finished building in the mind before the first foundation is dug. Michelangelo gave the truest image of it: "the best of artists hath no thought to show which the rough stone in its superfluous shell doth not include" — the form is already in the block; the hand only removes what hides it. To build well is first to see whole, then to clear away everything that is not the vision.', why: 'Without an inner image of the whole, the parts arrive by accident. Vision is the discipline of seeing the end from the beginning.' },
          { name: 'Mastery is measured in decades', image: 'assets/detail/bar-stpauls.jpg', caption: 'Wren gave St Paul’s some thirty-five years, into his late seventies.', body: 'The record is humbling and consistent. Brunelleschi was about forty-one when the dome competition opened, after fifteen years among the ruins; Palladio trained first as a stonecutter and published his Four Books at sixty-two; Michelangelo was seventy-one when made chief architect of St Peter’s; Wren gave St Paul’s some thirty-five years. The masterworks came in maturity; the forming took a lifetime.', why: 'It reframes slowness as the norm, not a failure. The great buildings were made by people who had waited to become capable of them.' },
          { name: 'The sublime — architecture that enlarges the soul', image: 'assets/detail/roman-pantheon-in.jpg', caption: 'The Pantheon — vastness and light that suspend the mind in astonishment.', body: 'Some buildings do more than shelter; they stop us. Edmund Burke traced this to the sublime: "the passion caused by the great and sublime… is astonishment; and astonishment is that state of the soul in which all its motions are suspended." Vastness, magnitude, succession and uniformity produce it, and "to the sublime in building, greatness of dimension seems requisite." A great space can make a person feel they walk beside something larger than themselves.', why: 'It names the highest ambition of architecture — not comfort but elevation. (That buildings truly ennoble us is a long, serious conviction, not a proven fact — hold it as an aim, not a law.)' },
          { name: 'Light is a material', image: 'assets/detail/am-light.jpg', caption: 'Louis Kahn’s Kimbell — light shaped, not merely admitted. "The giver of all presences."', body: 'The masters treat light as something to be shaped, not merely let in. Le Corbusier’s definition is the most famous: "architecture is the masterly, correct and magnificent play of masses brought together in light," for "our eyes are made to see forms in light." Louis Kahn made light almost sacred — "I sense Light as the giver of all presences" — and John Soane built a whole poetry of hidden, top-lit lumière mystérieuse.', why: 'A plan drawn in flat daylight forgets that people live in light and shadow. To ignore light is to design only half the building.' },
          { name: 'Consult the genius of the place', image: 'assets/detail/am-genius.jpg', caption: 'A villa answering its landscape — built in sympathy with the ground, not against it.', body: 'A building is never abstract; it stands somewhere. Alexander Pope gave the rule its enduring line in 1731: "Consult the Genius of the Place in all, that tells the waters or to rise or fall." The site has a character before you arrive — its light, its slope, its surroundings — and the wise architect listens to the ground and builds in sympathy with it.', why: 'Form imposed on a place fights it forever; form drawn from a place belongs to it.' },
          { name: 'Honesty in building', image: 'assets/detail/mat-facing.jpg', caption: 'A fine skin over a rough core — the honesty question Ruskin and Pugin made a moral test.', body: 'A recurring moral test in the tradition is truthfulness — that a building should not pretend to be what it is not. Ruskin made "Truth" one of his seven lamps: no structural deceits, no material disguised as another, no machine-made ornament passed off as hand-carved. Pugin’s rule was kin: "there should be no features about a building which are not necessary for convenience, construction, or propriety."', why: 'It treats a building as a kind of statement that can lie or tell the truth. A dishonest building was, to these writers, a small moral failure set in stone.' },
          { name: 'The long view — building for ever', image: 'assets/styles/greek.jpg', caption: 'The Parthenon, still standing after two thousand years — built for the future, not the moment.', body: 'The tradition asked the architect to think in centuries, not careers. Ruskin’s charge is the clearest statement of it: "when we build, let us think that we build for ever… let it be such work as our descendants will thank us for" (Seven Lamps, the Lamp of Memory). The building outlives its maker and becomes the inheritance and memory of a people.', why: 'It replaces the ego of the moment with responsibility to the future. A person who builds for ever cannot cut a corner or chase a fashion.' },
          { name: 'Build for the city', image: 'assets/styles/baroque.jpg', caption: 'Bernini’s colonnade at St Peter’s — "the motherly arms of the Church," a gift to strangers.', body: 'Much of what an architect makes is not private; it is a gift to strangers, and to strangers not yet born. The classical world assumed this: Vitruvius names public building — forums, colonnades, baths, theatres — as a distinct department of the art, and Bernini’s colonnade reaches out like arms to embrace the crowd. A street, a square, a façade is seen every day by thousands who never chose it.', why: 'The architect works in public. Even a private house has a public face, and the city is the sum of those faces.' },
          { name: 'Egoless making — serve the work, not the signature', image: 'assets/detail/ren-tempietto.jpg', caption: 'Bramante’s Tempietto — a small, whole, perfect thing that serves the idea, not its author.', body: 'Against the cult of the star architect, Christopher Alexander argued for the maker who disappears into the work — who lets go of "all his wilful images" and starts from a void, so the true form can emerge rather than be imposed. "My only concern," he said, "is to produce that kind of harmony." He asked of deliberately unsettling buildings: "Do you really think we need to manufacture more anxiety in the form of buildings?"', why: 'It names a moral choice at the centre of the craft — the work exists to serve the people who use it, not to advertise its author. (This is Alexander’s argued position, held against equally sincere opponents.)' },
          { name: 'The joy and freedom of the maker', image: 'assets/detail/gt-craft.jpg', caption: 'Hand-carved foliage — for Ruskin, the visible trace of a free, thinking workman.', body: 'Ruskin’s "The Nature of Gothic" argued that a building carries the state of soul of the people who made it. Gothic honours the workman by letting him think, invent and even fail; its roughness is the mark of a free, living hand. To demand machine-perfection, Ruskin warned, is to degrade the worker: "You must either make a tool of the creature, or a man of him. You cannot make both."', why: 'It widens "the architect’s mind" to every hand on the site. A building is only as humane as the labour that raised it.' }
        ]
      },
      'the-path': {
        title: 'The path — how a person becomes an architect',
        intro: 'A person does not become an architect by taking a title; they become one by passing through a series of transformations, each of which changes how they see the world. The masters did not skip these stages, and they did not rush them — Brunelleschi dug in the Roman dirt for years, Palladio cut stone before he drew, Michelangelo was seventy-one before he shaped St Peter’s dome. What follows is the honest shape of that formation: five stages, each real, each slow, each built on the one before. You do not graduate from a stage; you carry it with you into the next.',
        heroImage: 'assets/detail/am-ascend.jpg',
        heroCaption: 'The long ascent — the architect’s mind is climbed to by stages, not taken by a title.',
        levels: [
          { stage: 'One — Learning to SEE (the eye)', items: [
            'Begin by looking, not making. Most people walk through buildings without noticing them; the first task is to break that blindness.',
            'Learn to feel the difference between a space that lifts you and one that oppresses you — then ask why, in concrete terms: ceiling height, light, proportion, enclosure.',
            'Study great and mean spaces side by side. You learn as much from a room that fails as from one that soars.',
            'Watch the light move through a room across a day — where it enters, what it touches, what stays in shadow.',
            'Learn to read a plan and a façade the way a musician reads a score: see the intended experience behind the drawing.'
          ] },
          { stage: 'Two — Learning to MAKE and DRAW (the hand)', items: [
            'Draw daily. Disegno is not illustration; it is thinking made visible, and it comes only through the hand’s repetition.',
            'Learn a real material by working it a little, as Palladio cut stone — knowledge of what a material wants comes through resistance, not books.',
            'Measure real buildings, as Brunelleschi and Palladio measured the ruins; measuring teaches proportion as looking never can.',
            'Copy the masters before inventing — reproduce a great plan, a great column, a great room, until your hand knows it.',
            'Make models. Move from the flat drawing to the thing that casts a shadow and can be walked around in the mind.'
          ] },
          { stage: 'Three — Mastering the GRAMMAR (the mind)', items: [
            'Learn the tradition deeply — Vitruvius, Alberti, Palladio — not as history but as living grammar. Imitation comes before invention.',
            'Study proportion and the orders until they are instinct, not lookup; fluency, not translation, is the goal.',
            'Take in Vitruvius’s wide curriculum — geometry, history, philosophy, music, some medicine and law — for the architect judges the work of every other art.',
            'Understand decorum: why a form fits one purpose and betrays another. This is judgement, learned by seeing many cases.',
            'Only now begin to test the rules against each other, and to see where the masters bent them — and why the bending worked.'
          ] },
          { stage: 'Four — Forming the CHARACTER (the person)', items: [
            'Cultivate the virtues Vitruvius named — high-minded, courteous, just, and "honest without avariciousness," for no work is rightly done without incorruptibility.',
            'Learn patience. The masterworks came after decades; a person in a hurry cannot build for ever.',
            'Learn to serve the work above the self — the "egoless" maker who starts from a void and lets the true form emerge rather than imposing a signature.',
            'Take on the long view: build, as Ruskin urged, "such work as our descendants will thank us for."',
            'Accept responsibility for strangers. What you build will be inhabited by thousands who never chose it; that is a moral weight, not only an artistic one.'
          ] },
          { stage: 'Five — SYNTHESIS and vision (mastery)', items: [
            'Now the parts fuse: eye, hand, mind and character act as one, and the building is seen whole before it is drawn.',
            'Invention becomes legitimate — you may break the rules, because like Michelangelo you have first mastered them; the licence rests on judgement, not ignorance.',
            'Command light, mass and proportion together — Le Corbusier’s "play of masses brought together in light."',
            'Consult the genius of the place, and answer the whole city, so the work belongs where it stands and to those who pass it.',
            'Build for permanence and wholeness, so that nothing may be "added, taken away, or altered, but for the worse" — and so the work outlives its maker as a gift.'
          ] }
        ]
      },
      'practice': {
        title: 'Cultivating the architect’s mind',
        intro: 'You cannot read your way into this mind; you have to practise your way into it. What follows are concrete things a curious person can do — most of them free, all of them repeatable — the daily scales behind the grand principles. Do a few of them often, rather than all of them once.',
        heroImage: 'assets/detail/am-library.jpg',
        heroCaption: 'A great room asks something of you as you enter — begin by learning to feel what it asks.',
        items: [
          { name: 'Keep an architecture notebook', body: 'Carry one book for both words and sketches, and put something in it most days — a proportion, a doorway, a quality of light, a room that moved you and why. The habit of recording trains the eye to notice, and over years it becomes your private treatise.' },
          { name: 'Draw by hand, daily', body: 'Sketch what you see, however roughly. The point is not a pretty drawing but the thinking that only happens through the hand — the inner conception becoming an outward mark.' },
          { name: 'Sit still in a great space', body: 'Choose a building known to move people and simply stay in it for half an hour. Notice what your body does — where you look, where you want to walk, whether you speak more quietly. Great architecture is felt before it is analysed.' },
          { name: 'Sit in a mean space too', body: 'Spend time in a room that oppresses — a low, harshly-lit corridor, a bleak waiting room — and name exactly what makes it grim. You learn the rules of good space fastest from their violation.' },
          { name: 'Measure a real building', body: 'Take a tape to a room or doorway you love and write down its dimensions and proportions. Measuring turns a vague admiration into knowledge, exactly as it did for Brunelleschi and Palladio among the ruins.' },
          { name: 'Watch the light across a day', body: 'Return to one room at different hours and track how the light enters and changes the space. Light is a material; you learn it by watching it work.' },
          { name: 'Read the makers in their own words', body: 'Go to the primary sources — Vitruvius, Alberti, Palladio, Ruskin, Le Corbusier, Kahn — before the commentators. The masters are the lighthouse; read them first, then the guides who help you across the hard passages.' },
          { name: 'Copy a masterwork', body: 'Redraw a plan or a façade you admire, line for line, until you understand the decisions inside it. Imitation is not theft here; it is how the hand learns what the eye has only seen.' },
          { name: 'Study proportion deliberately', body: 'Take one system — the orders, simple whole-number ratios — and learn to see it in real buildings. Proportion is the grammar under the beauty.' },
          { name: 'Walk your town as a critic and a citizen', body: 'Look at the buildings thousands pass daily and ask what they give or take from the shared street. This trains the civic eye — architecture as a public good, not a private object.' },
          { name: 'Consult the genius of a place', body: 'Stand on a piece of ground — a slope, a shoreline, a corner — and ask what a building there would have to do to belong: which way the light falls, where the views open, what the land already wants. Design, even in imagination, from the place rather than onto it.' },
          { name: 'Practise seeing the whole first', body: 'Before sketching, try to hold the finished thing complete in your mind, then draw to uncover it — Michelangelo’s stone with the form already inside. It is hard, and that difficulty is the exercise.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The makers wrote down what they believed, and the tradition is best met in their own voice. Primary sources first — many free and public-domain — then the modern writers who deepened or contested the case. Honest notes on difficulty, and on where a text is one argued position rather than settled fact.',
        heroImage: 'assets/detail/roman-vitruvius.jpg',
        heroCaption: 'The makers wrote down what they believed; go to them first, then to the guides.',
        books: [
          { title: 'The Ten Books on Architecture (De Architectura), Book I', author: 'Vitruvius, c. 30–15 BC (Morgan translation, 1914)', note: 'PRIMARY. The foundation of the whole idea: Book I on the education and character of the architect, and the triad of durability, convenience and beauty. Free at Project Gutenberg.' },
          { title: 'On the Art of Building in Ten Books (De re aedificatoria)', author: 'Leon Battista Alberti, c. 1450', note: 'PRIMARY. The first printed book on architecture, and beauty defined as concinnitas — "nothing may be added, taken away, or altered, but for the worse." Hard. Read the Rykwert/Leach/Tavernor translation (in copyright); the older Leoni English is free but dated.' },
          { title: 'The Four Books of Architecture', author: 'Andrea Palladio, 1570 (Isaac Ware English, 1738)', note: 'PRIMARY. The most influential architecture book in English — and the mind of a man who trusted direct measurement of the ancients above textual authority. Free / public-domain (Ware 1738 on archive.org).' },
          { title: 'The Elements of Architecture', author: 'Sir Henry Wotton, 1624', note: 'PRIMARY. A short English distillation of Vitruvius and Alberti; the source of the beloved triad "Commodity, Firmness, and Delight." Brief, in 17th-century spelling. Free / public-domain.' },
          { title: 'The Seven Lamps of Architecture', author: 'John Ruskin, 1849', note: 'PRIMARY. The great statement that building is a matter of conscience — Sacrifice, Truth, Power, Beauty, Life, Memory, Obedience. Ornate Victorian prose, but the moral force still lands. Free at Project Gutenberg.' },
          { title: 'The Stones of Venice — "The Nature of Gothic"', author: 'John Ruskin, 1853', note: 'PRIMARY. One chapter on the joy and freedom of the workman — that a building carries the soul of the hands that made it. Often printed alone; the most humane thing Ruskin wrote. Free online.' },
          { title: 'The True Principles of Pointed or Christian Architecture', author: 'A. W. N. Pugin, 1841', note: 'PRIMARY. Architecture as the honest expression of a society’s faith, and the "two great rules" of truthful building. Fierce and partisan, but the moral test of building is his. Free at the Internet Archive.' },
          { title: 'The Autobiography of an Idea / Kindergarten Chats', author: 'Louis Sullivan, 1924 / 1901–02', note: 'PRIMARY. The mystic behind "form ever follows function," which he grounded in nature, not utility. The Autobiography is lyrical and readable. Public-domain in status (borrow-only scans on archive.org).' },
          { title: 'Towards a New Architecture (Vers une architecture)', author: 'Le Corbusier, 1923 (Etchells trans., 1927)', note: 'PRIMARY. The great modernist counter-statement — architecture as "the play of masses brought together in light," the house as "a machine for living." Aphoristic and provocative; read it honestly against the others. Public-domain in the US; still in copyright in the UK/EU.' },
          { title: 'Louis Kahn: Essential Texts (incl. "Silence and Light")', author: 'Louis Kahn, ed. Robert Twombly, 2003', note: 'ON-RAMP (primary voice). Kahn on light, silence, and what a material "wants to be" — poetic and elliptical. In print.' },
          { title: 'The Architecture of Humanism', author: 'Geoffrey Scott, 1914', note: 'ON-RAMP. A humanist defence of Renaissance and Baroque taste, judging a building by how our bodies and imaginations respond to its spaces. Elegant but argument-dense. Free / public-domain (archive.org).' },
          { title: 'Experiencing Architecture', author: 'Steen Eiler Rasmussen, 1959', note: 'ON-RAMP. The classic on how we actually perceive buildings — solids and cavities, scale, rhythm, texture, even sound. One of the best first reads; gentle. In print.' },
          { title: 'The Aesthetics of Architecture / Why Beauty Matters', author: 'Roger Scruton, 1979 / 2009', note: 'ON-RAMP (argued position). The philosophical case that beauty is a real, needed value and that a building owes good manners to its street. Eloquent and influential, but a contested stance — not settled fact. The 2009 BBC film is the easiest way in.' },
          { title: 'The Timeless Way of Building / A Pattern Language', author: 'Christopher Alexander (with others), 1977–79', note: 'ON-RAMP (argued position). Living places share a "quality without a name" that grows from a shared pattern-language, not from a lone genius. Warm and hypnotic; his stronger claims are his theory, not proven. In copyright.' },
          { title: 'The Architecture of Happiness', author: 'Alain de Botton, 2006', note: 'ON-RAMP (accessible). A graceful argument that buildings speak to us and that we love the ones embodying the qualities we want more of in ourselves. The gentlest entry to the whole theme. In print.' }
        ]
      },
      'masters': {
        title: 'The makers, and what they believed',
        intro: 'Not a ranking, but a gallery of the architect’s mind across the whole tradition — with, for each, a sentence on the inner conviction about why they built, and a verified word of their own where one survives. The last three are modern thinkers whose arguments about what building is for are eloquent but contested — held here as positions worth weighing, not settled fact.',
        figures: [
          { name: 'Vitruvius (1st c. BC)', what: 'A working Roman engineer who wrote the only architectural treatise to survive from antiquity, and made architecture a discipline rather than a trade. He believed the architect must be a learned, honest generalist, and that every building owes three things at once — firmitas, utilitas, venustas: to stand, to serve, to delight.', works: ['De Architectura (The Ten Books on Architecture)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
          { name: 'Filippo Brunelleschi (1377–1446)', portrait: 'assets/detail/portrait-brunelleschi.jpg', what: 'A goldsmith who reinvented himself as an architect by going to Rome to measure the ancient ruins first-hand — reverse-engineering Roman construction when no one else could. His conviction was that the ancients had solved problems his own age had forgotten, and that the architect must master the whole technical means, not merely the drawing. The dome of Florence was the proof.', works: ['The dome of Florence Cathedral', 'The Ospedale degli Innocenti', 'The Basilica of San Lorenzo'], link: 'https://en.wikipedia.org/wiki/Filippo_Brunelleschi' },
          { name: 'Leon Battista Alberti (1404–1472)', portrait: 'assets/detail/portrait-alberti.jpg', what: 'The archetypal humanist polymath, who came to architecture through scholarship and wrote the first printed book on it as a modern answer to Vitruvius. He believed beauty was objective and rational — not decoration added on, but a mathematical rightness inherent in the proportions of the whole, which he named concinnitas.', works: ['De re aedificatoria (On the Art of Building)', 'The façade of Santa Maria Novella, Florence', "Sant'Andrea, Mantua"], link: 'https://en.wikipedia.org/wiki/Leon_Battista_Alberti' },
          { name: 'Michelangelo Buonarroti (1475–1564)', portrait: 'assets/detail/portrait-michelangelo.jpg', what: 'A sculptor who always thought of a building as a body — its parts as limbs, its walls as living muscular mass. He believed the architect’s authority came from the trained inner eye and the licence of genius to break rules that lesser hands must obey; his expressive distortion of the orders is the root of Mannerism. "The greatest artist has no conception that a single block of marble does not already contain within its excess."', works: ['The vestibule and staircase of the Laurentian Library', "The dome of St Peter's", 'The Campidoglio, Rome'], link: 'https://en.wikipedia.org/wiki/Michelangelo' },
          { name: 'Andrea Palladio (1508–1580)', portrait: 'assets/detail/portrait-palladio.jpg', what: 'A stonemason educated into architecture by a humanist who took him to measure the antiquities of Rome — and measurement became his lifelong discipline. He believed the Romans had achieved a rational, universal system of proportion, and that the modern architect’s task was to recover it by combining Vitruvius’s text with painstaking survey of the actual ruins.', works: ['I Quattro Libri (The Four Books of Architecture)', 'The Villa Rotonda, Vicenza', 'San Giorgio Maggiore, Venice'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
          { name: 'Gian Lorenzo Bernini (1598–1680)', portrait: 'assets/detail/portrait-bernini.jpg', what: 'He built to move the soul, fusing sculpture, architecture and stagecraft into one unified art whose purpose was to overwhelm the viewer and draw them into drama or devotion. The colonnade of St Peter’s reaches out like the motherly arms of the Church. He held that the artist does not copy nature but improves on it, supplying what nature lacks.', works: ["The colonnade of St Peter's Square", "The Baldacchino, St Peter's", 'The Ecstasy of St Teresa'], link: 'https://en.wikipedia.org/wiki/Gian_Lorenzo_Bernini' },
          { name: 'Sir Christopher Wren (1632–1723)', portrait: 'assets/detail/portrait-wren.jpg', what: 'A scientist — astronomer and founder of the Royal Society — who brought a geometer’s mind to rebuilding London after the Great Fire. He believed public building was an instrument of civic pride answerable to permanence, not fashion: "Architecture aims at Eternity." His epitaph in St Paul’s, composed by his son: "Reader, if you seek his monument, look around you."', works: ["St Paul's Cathedral, London", 'The 51 City churches', 'The Sheldonian Theatre, Oxford'], link: 'https://en.wikipedia.org/wiki/Christopher_Wren' },
          { name: 'Sir John Soane (1753–1837)', portrait: 'assets/detail/portrait-soane.jpg', what: 'He treated light as his true building material, carving top-lit domes, hidden clerestories and coloured glass into interiors that feel weightless and charged with mystery. He believed architecture should stir feeling and imagination, not merely enclose space — "the poetry of architecture."', works: ['The Bank of England (largely lost)', 'Dulwich Picture Gallery', "Sir John Soane's Museum, London"], link: 'https://en.wikipedia.org/wiki/John_Soane' },
          { name: 'Karl Friedrich Schinkel (1781–1841)', portrait: 'assets/detail/portrait-schinkel.jpg', what: 'He gave Prussia a civic face, seeing architecture as a civilising, educating force — buildings that would raise a nation’s taste and dignity. His Altes Museum treats the public gallery as a secular temple for the citizen. His museum credo: "first delight, then instruct."', works: ['The Altes Museum, Berlin', 'The Neue Wache', 'The Konzerthaus (Schauspielhaus), Berlin'], link: 'https://en.wikipedia.org/wiki/Karl_Friedrich_Schinkel' },
          { name: 'A. W. N. Pugin (1812–1852)', portrait: 'assets/detail/portrait-pugin.jpg', what: 'He believed a building could not be honest unless the society that raised it was, and that the decline of good building mirrored a decline in faith. Building was a moral test; truthful construction, a Christian duty. He gave the Palace of Westminster its Gothic detail — his creed made visible at the heart of the state.', works: ['The True Principles of Pointed Architecture', 'Contrasts (1836)', 'The interiors and detail of the Palace of Westminster'], link: 'https://en.wikipedia.org/wiki/Augustus_Pugin' },
          { name: 'John Ruskin (1819–1900)', portrait: 'assets/detail/portrait-ruskin.jpg', what: 'The great moral critic of building, who argued that architecture is an act of conscience — sacrifice, truth, memory, obedience — and that a nation writes its character into its stones. His most radical claim: that the roughness of Gothic is evidence of human freedom, because it lets the workman think rather than be reduced to a machine.', works: ['The Seven Lamps of Architecture (1849)', 'The Stones of Venice (1851–53)', '"The Nature of Gothic"'], link: 'https://en.wikipedia.org/wiki/John_Ruskin' },
          { name: 'Louis Sullivan (1856–1924)', portrait: 'assets/detail/portrait-sullivan.jpg', what: 'The father of the skyscraper, who believed the new steel tower demanded an honest new form drawn from its own nature rather than borrowed classical dress. He read function as an almost spiritual, organic law running through all nature: "form ever follows function… this is the law." The tall building should be "a proud and soaring thing."', works: ['The Wainwright Building, St Louis', 'The Carson Pirie Scott Store, Chicago', 'Kindergarten Chats (essays)'], link: 'https://en.wikipedia.org/wiki/Louis_Sullivan' },
          { name: 'Frank Lloyd Wright (1867–1959)', portrait: 'assets/detail/portrait-wright.jpg', what: 'Sullivan’s pupil, who deepened "form follows function" into "organic architecture" — the belief that a building, its site, its materials and the life inside it should be one indivisible whole, growing like a natural organism. For Wright the true integration was spiritual: "form and function as one."', works: ['Fallingwater, Pennsylvania', 'The Guggenheim Museum, New York', 'The Robie House, Chicago'], link: 'https://en.wikipedia.org/wiki/Frank_Lloyd_Wright' },
          { name: 'Louis Kahn (1901–1974)', portrait: 'assets/detail/portrait-kahn.jpg', what: 'Modern architecture’s mystic-philosopher, who asked not what a building should do but what it "wants to be," treating materials, spaces and light as having their own will. He held that architecture begins in the immeasurable — Silence, the desire to be — and is realised through the measurable, Light: "I sense Light as the giver of all presences." "You say to a brick, ‘What do you want, brick?’ And brick says, ‘I like an arch.’"', works: ['The Salk Institute, La Jolla', 'The Kimbell Art Museum, Fort Worth', 'The National Assembly, Dhaka'], link: 'https://en.wikipedia.org/wiki/Louis_Kahn' },
          { name: 'Le Corbusier (1887–1965)', portrait: 'assets/detail/portrait-corbusier.jpg', what: 'Modernism’s manifesto-writer, and honestly a complex figure. He saw the machine age as a chance to strip architecture to pure forms revealed by light, and to rethink the house rationally as "a machine for living in" — yet the same man built the sculptural, light-carved chapel at Ronchamp. His deepest conviction: "architecture is the masterly, correct and magnificent play of masses brought together in light."', works: ['Villa Savoye, Poissy', "The Unité d'Habitation, Marseille", 'Notre-Dame du Haut, Ronchamp', 'Towards a New Architecture (1923)'], link: 'https://en.wikipedia.org/wiki/Le_Corbusier' },
          { name: 'Geoffrey Scott (1884–1929)', what: 'A modern critic, not a builder, who argued that we judge a building not by its structure, morality or fidelity to its age, but by how our own bodies and imaginations respond to its spaces, masses and proportions. His Architecture of Humanism is a polemical defence of Renaissance taste against both the Gothic moralists and the coming machine age. (An argued position, held against Ruskin and Pugin.)', works: ['The Architecture of Humanism (1914)'], link: 'https://en.wikipedia.org/wiki/Geoffrey_Scott_(author)' },
          { name: 'Sir Roger Scruton (1944–2020)', portrait: 'assets/detail/portrait-scruton.jpg', what: 'A philosopher who revived the case that beauty is a real and needed value, not mere taste, and that a building’s first duty is a kind of good manners toward its street and neighbours — to belong to a place rather than to shock. "Beauty matters… it is not just a subjective thing but a universal need of human beings." An eloquent, influential and contested position, not settled fact.', works: ['The Aesthetics of Architecture (1979)', 'Why Beauty Matters (BBC, 2009)', 'Building Better, Building Beautiful Commission'], link: 'https://en.wikipedia.org/wiki/Roger_Scruton' },
          { name: 'Christopher Alexander (1936–2022)', what: 'An architect and theorist who argued that living places possess a "quality without a name" — objective yet unnameable — which cannot be imposed by a lone genius but grows when builders share a human-scaled "pattern language." The architect, in this view, is less an author than a gardener helping a living structure emerge. An influential but argued philosophy of building.', works: ['A Pattern Language (1977)', 'The Timeless Way of Building (1979)', 'The Nature of Order (2002–05)'], link: 'https://en.wikipedia.org/wiki/Christopher_Alexander' }
        ]
      }
    }
  }
];

// Look a topic up by id (used by art.html). Reads window.ARTS lazily so it
// works whether or not styles-data.js has finished pushing the styles yet.
window.ART_BY_ID = (id) => (window.ARTS || []).find(a => a.id === id);
