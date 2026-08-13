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
          { name: 'A language, not a look', body: 'Classical architecture works like a language. The orders are its letters, proportion its grammar, and the building types its sentences. The same elements are recombined endlessly — a Greek temple, a Roman bath, a Palladian villa and a Victorian bank are all written in it — which is why, once you learn the grammar, you can read buildings that look nothing alike.', why: 'If you learn styles as a list of pictures, every new building is a stranger. If you learn the language, you can read a building you have never seen — including ones the tradition never built.' },
          { name: 'Firmness, commodity, delight', body: 'The Roman architect Vitruvius set three demands on any building: firmitas, that it stand soundly; utilitas, that it serve its use; and venustas, that it give delight to the eye. Every part of the tradition is an attempt to satisfy all three at once, never sacrificing one for another.', why: 'These three words are the fastest way to judge any building, ancient or modern. Carry them, and you always have something specific to look for and to say.' },
          { name: 'The orders are its heart', body: 'At the centre of the tradition stand the five orders — Tuscan, Doric, Ionic, Corinthian and Composite. Each is a complete system: a column with base, shaft and capital, carrying an entablature, all worked out in fixed proportions and ornament. To learn classical architecture is, first, to learn the orders.', why: 'Almost every classical building announces itself through an order. Name the order and you have found the key that unlocks the rest of the design.' },
          { name: 'It is built on proportion', body: 'Classical builders held that beauty comes from ratio — the agreement of the parts with one another and with the whole. A doorway is so tall because the room is so wide; a column is so thick because it is so high. Number, made visible in stone, is what makes a classical building feel resolved rather than arbitrary.', why: 'It explains the strange calm of a good classical room. Nothing is a free choice; everything answers to something else. That hidden order is what the eye reads as "rightness".' },
          { name: 'Revival is part of the story', body: 'The tradition has died and been reborn many times: in the Italian Renaissance reviving Rome, in Palladio reviving the ancients, in the Georgian and Greek Revivals, and in the Beaux-Arts civic buildings of the modern age. Each revival was also a fresh argument about what the past should mean.', why: 'It means "classical" is not only ancient. The bank, the museum and the city hall down the road are living chapters of the same story, and worth reading as such.' }
        ]
      },
      'the-path': {
        title: 'How to begin looking',
        intro: 'You do not need travel or a degree to start. The tradition is on the high street — banks, churches, town halls, old terraces. Here is a rough path from first glances to a reading eye.',
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
          { name: 'Vitruvius (1st c. BC)', what: 'Roman architect and engineer whose De Architectura is the founding text — firmness, commodity and delight, and the first full account of the orders.' },
          { name: 'Leon Battista Alberti (1404–1472)', what: 'The Renaissance humanist who recovered Vitruvius and turned building into a scholarly art, in his On the Art of Building.' },
          { name: 'Andrea Palladio (1508–1580)', what: 'The most imitated architect in history; his villas and his Four Books carried classical proportion across Europe and to America.' },
          { name: 'Sir Christopher Wren (1632–1723)', what: 'Scientist turned architect who rebuilt London\'s churches and St Paul\'s after the Great Fire — English classicism at its height.' },
          { name: 'John Ruskin (1819–1900)', what: 'The critic whose writing changed how the modern world sees old buildings, and who tied architecture to memory, labour and truth.' },
          { name: 'John Summerson (1904–1992)', what: 'The modern historian who explained classical architecture as a language — the clearest guide the tradition has produced.' }
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
          { name: 'The unfluted shaft — its fastest tell', body: 'Alone among the orders, the Tuscan shaft is characteristically smooth and unfluted, with a plain cushion capital (a round echinus under a square abacus) and no carving anywhere on the entablature.', why: 'It is the quickest field-mark. A sturdy, smooth column with nothing carved on it, plain top to bottom, is almost certainly Tuscan — the order that says everything by saying nothing.' },
          { name: 'A simplified Doric, and Rome\'s own', body: 'Where the refined orders came from Greece, the Tuscan is Italic — descended from Etruscan temple-building and adopted by Rome as its plain native order, essentially a Doric with the ornament stripped off. Vitruvius describes the Etruscan temple; the Renaissance made Tuscan the first of the five.', why: 'It shows the tradition was never purely Greek. The plainest order is the home-grown one — a reminder that classical architecture always mixed the imported ideal with the local and useful.' },
          { name: 'The order of rustic strength', body: 'Stocky in the rulebooks at about seven column-diameters high — the shortest and thickest of the five — the Tuscan reads as sturdy, grounded and rustic. It was the order of the utilitarian and the strong.', why: 'It shows the tradition thought about character, not just decoration. To choose Tuscan was to say "solid and dependable" before a single word of ornament was spoken.' },
          { name: 'The base of the building', body: 'Because it is plainest and strongest, the Tuscan is often placed lowest, carrying richer orders above it — the ground floor of a palace, the base of a triumphal arch, the rusticated storey beneath the show.', why: 'It introduces the whole hierarchy of the orders: plain and strong at the bottom, rich and slender at the top, exactly as the visual weight decreases upward.' },
          { name: 'Known from the book, not the ruin', body: 'There is no clean surviving pure-Tuscan ancient temple to point to — the Etruscans built largely in wood and terracotta, so little survives, and later Roman work blurs Tuscan into Roman Doric. It is known chiefly from Vitruvius\'s description and Renaissance reconstruction.', why: 'It is an honest reminder that the tidy "five orders" is a Renaissance ordering of the past. The plainest order is also the least documented in antiquity — reconstructed as much as revived.' }
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
          { name: 'Vitruvius (1st c. BC)', what: 'First to describe the Etruscan/Tuscan temple in writing, giving the order its ancient authority.' },
          { name: 'Sebastiano Serlio (1475–1554)', what: 'First to picture all five orders together as a set (1537), placing the Tuscan at the head of the row.' },
          { name: 'Giacomo da Vignola (1507–1573)', what: 'Whose Rule of the Five Orders fixed the Tuscan\'s proportions in the form most later builders used.' },
          { name: 'Inigo Jones (1573–1652)', what: 'Who used a stern Tuscan to great effect at St Paul\'s, Covent Garden — "the handsomest barn in England".' }
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
          { name: 'No base, straight from the floor', body: 'The Greek Doric column stands directly on the temple platform without a base, its weight met by the flat stone. (The later Roman Doric adds a base and slims down.) This gives the Greek version a look of rooted, elemental strength found in no other order.', why: 'It is the fastest way to tell Greek Doric from every later order. That missing base is a whole aesthetic — the column as a growing thing, not a placed object.' },
          { name: 'The plain cushion capital', body: 'The Doric capital is the plainest of all — a round cushion (the echinus) under a square slab (the abacus), with no scrolls and no leaves. The shaft below is fluted with shallow channels that meet in sharp ridges (arrises), with no flat band between them.', why: 'The capital is always the quickest identifier of an order, and Doric\'s is the one that is severe and bare. Plain cushion on top, knife-edged flutes below: Doric.' },
          { name: 'Triglyphs and metopes', body: 'The Doric signature is its frieze: triglyphs — blocks with three vertical grooves — alternating with metopes, the panels between, often carved with battles or myths, with little peg-like guttae beneath. They are thought to remember, in stone, the beam-ends of the first timber temples.', why: 'It is the unmistakable Doric field-mark, and it reveals a deep habit of the tradition: turning the memory of older construction into ornament. The stone temple quietly quotes the wooden one it replaced.' },
          { name: 'Refinements you are not meant to see', body: 'The Parthenon has almost no straight lines: columns lean slightly inward, swell at the middle (entasis), and the platform curves upward at the centre. These corrections counter the eye\'s tendency to read long straight lines as sagging.', why: 'It shows classical "perfection" is not rigid geometry but a subtle correction for how we actually see. The order lives in the adjustments, not the rule.' },
          { name: 'Stocky by nature', body: 'The Renaissance rulebooks set the Doric column at about eight diameters high — but real archaic Greek Doric is far stubbier, often only four to six diameters, with swollen shafts and big capitals (as at Paestum). The neat figure is a later ideal, not what the first Doric looked like.', why: 'It is a useful honesty: the "correct" proportions are a Renaissance convention. Meet the heavy, primitive Doric of the early temples and you see the order before it was tidied up.' },
          { name: 'The order of gravity and men', body: 'The ancients associated Doric with strength and the male body — Vitruvius derived its proportions from a man\'s. Sober, muscular and unornamented, it was used for temples to the sterner gods and, ever after, for buildings that wish to look grave and permanent.', why: 'It explains why banks, courts and war memorials so often choose Doric. The order carries a mood, and that mood is seriousness.' }
        ]
      },
      'the-path': {
        title: 'Learning the Doric',
        intro: 'The Doric rewards close looking more than any order, because so much of it is in refinements you must train yourself to see.',
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
          { name: 'Iktinos and Kallikrates (5th c. BC)', what: 'The architects of the Parthenon, the supreme Doric temple, built under Pericles.' },
          { name: 'The builders of Paestum (6th–5th c. BC)', what: 'Whose massive, early Doric temples in southern Italy survive almost complete.' },
          { name: 'James "Athenian" Stuart (1713–1788)', what: 'Whose measured drawings of Athens launched the Greek Revival and put true Greek Doric into modern hands.' }
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
          { name: 'The volute', body: 'The scroll capital is the Ionic\'s signature — a pair of spirals, thought to derive from a rolled cushion, a ram\'s horns or a nautilus shell, linked by a shallow cushion. It turns the top of the column into something to look at, not just a plain support.', why: 'It is the single easiest capital to recognise. Spot the scrolls and you have named the order in one glance.' },
          { name: 'A base, and filleted flutes', body: 'Unlike the Greek Doric, the Ionic always stands on a moulded base, and its slimmer shaft is cut with deeper flutes separated by small flat bands (fillets) rather than the sharp ridges of the Doric.', why: 'These are the confirming details below the capital. A based column with soft, fillet-separated flutes is reading as Ionic before you even reach the scrolls.' },
          { name: 'Slenderness and grace', body: 'The Ionic is proportioned taller and thinner than the Doric — about nine diameters high in the rulebooks. The ancients gave it a mature, matronly female character; Vitruvius likened its fluting to the folds of a robe and its volutes to curled hair.', why: 'It shows the orders were understood as characters. To choose Ionic was to say "civilised, learned, graceful" — which is why it clothes so many libraries and universities.' },
          { name: 'A continuous frieze and dentils', body: 'Where the Doric frieze is broken into triglyphs and metopes, the Ionic frieze runs as one unbroken band, ideal for a continuous carved procession, and its cornice characteristically carries a row of dentils — small tooth-like blocks.', why: 'It changes what ornament can do: a continuous band lets a story flow around the whole building. The row of dentils is another quiet Ionic tell in the cornice above.' },
          { name: 'The order of the mind', body: 'From antiquity onward the Ionic was felt to suit places of thought and refinement rather than raw strength — temples to Apollo and Athena, and later the libraries, museums and schools of the modern world.', why: 'It is why so many places of learning are Ionic. The order was chosen to set a mood of cultivated calm before you had even read the name over the door.' }
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
          { name: 'The architects of the Erechtheion (5th c. BC)', what: 'Whose elegant Ionic temple on the Acropolis, with its Porch of the Maidens, is the order\'s masterpiece.' },
          { name: 'Hermogenes (2nd c. BC)', what: 'The Hellenistic architect whose refined Ionic temples Vitruvius held up as models of correct proportion.' },
          { name: 'Vincenzo Scamozzi (1548–1616)', what: 'Whose four-faced Ionic capital, with volutes turned out on every side, became a widely copied standard — "the Scamozzi Ionic".' },
          { name: 'Nicholas Revett & James Stuart', what: 'Whose Antiquities of Athens brought accurate Greek Ionic to Britain and fuelled the Greek Revival.' }
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
          { name: 'The acanthus capital', body: 'The defining feature is a tall bell wrapped in two tiers of carved acanthus leaves, with small scrolls uncurling at the corners — the richest, most three-dimensional capital of all. According to a story told by Vitruvius, the sculptor Callimachus invented it after seeing an acanthus plant grow up around a basket left on a girl\'s grave.', why: 'It is the order\'s fingerprint: leaves at the top of a column mean Corinthian. (Treat the basket tale as the charming legend Vitruvius meant it as — the order really grew up gradually.)' },
          { name: 'The slenderest and richest', body: 'The Corinthian is the tallest and thinnest of the orders — about ten diameters high in the rulebooks — and carries the most ornate entablature, its cornice dense with both dentils and little scroll brackets called modillions.', why: 'It is the order tuned entirely for display. Height, slenderness and a deeply carved cornice all say the same thing: this is the rich, important part of the building.' },
          { name: 'The order of splendour', body: 'Reserved for the grandest effect — wealth, magnificence, celebration — the Corinthian was likened by Vitruvius to a slender, richly adorned young girl, the daintiest and most decorated of the three Greek orders.', why: 'It explains why Corinthian clothes opera houses, palaces and the grandest civic rooms. The order itself signals "this is the splendid place".' },
          { name: 'Rome\'s favourite', body: 'The Greeks used Corinthian sparingly — its first great outdoor showing was the little Choragic Monument of Lysicrates in Athens — but the Romans made it their signature, crowning the Pantheon\'s portico, the Temple of Olympian Zeus and countless imperial monuments.', why: 'It shows how a form can be adopted and transformed. The order became less Greek and more Roman — proof that the tradition is a conversation, not a fixed rule.' },
          { name: 'Height without heaviness', body: 'Those slender proportions let the Corinthian rise tall and light, ideal for the many-columned interiors and lofty porticoes the Romans built at scale.', why: 'It pairs the tradition\'s love of ornament with its love of engineering — richness that also solves the problem of building high and open.' }
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
          { name: 'Callimachus (5th c. BC)', what: 'The Greek sculptor to whom Vitruvius credits the invention of the acanthus capital.' },
          { name: 'The builders of the Pantheon (2nd c. AD)', what: 'Whose vast Corinthian portico fronts the greatest surviving Roman interior.' },
          { name: 'Roman imperial architects', what: 'Who spread the Corinthian across the empire as the standard order of magnificence.' }
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
          { name: 'A deliberate fusion', body: 'The Composite is exactly what its name says — the large Ionic volutes set on top of the Corinthian\'s ring of acanthus leaves, in one capital richer than either alone. Big scrolls and foliage together.', why: 'It proves the "language" idea in the clearest way: a whole new order made by fusing two existing ones. The grammar is generative, not fixed.' },
          { name: 'Rome\'s grand invention', body: 'Where Tuscan was Rome\'s plain native order, the Composite was Rome\'s magnificent one, developed in the late first century BC. Its oldest surviving example crowns the Arch of Titus in Rome — the order of victory and triumph.', why: 'It shows the Romans as inventors, not just inheritors, of the classical language. When a triumphal arch wanted to shout, it reached for the Composite.' },
          { name: 'As tall and rich as Corinthian', body: 'The Composite keeps the slender, based, fluted Corinthian column — about ten diameters high — and carries an entablature as ornate as any, or richer. It is tuned for maximum splendour.', why: 'It sits with the Corinthian as the most attenuated and decorated of the five: the orders at their most lavish, where the building most wants to impress.' },
          { name: 'Made the fifth order by the Renaissance', body: 'The Romans treated the Composite as merely a rich variant of the Corinthian, not a separate order. It was the Renaissance theorists — Alberti, Serlio, Vignola, Palladio, Scamozzi — who elevated it to a distinct fifth order and capped the canon with it.', why: 'It is the clearest proof that the tidy "five orders" is a Renaissance codification, not an ancient law. The fifth order was, in a sense, promoted into existence.' },
          { name: 'The top of the hierarchy', body: 'The theorists arranged the orders as a rising scale of richness — Tuscan, Doric, Ionic, Corinthian, Composite — and set the Composite at the very summit, the most ornate and most honoured.', why: 'It completes the ladder from plain to rich, and gives a building its most magnificent possible crown when the top storey wants to sing.' }
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
          { name: 'The builders of the Arch of Titus (1st c. AD)', what: 'Whose triumphal arch carries one of the earliest grand uses of the Composite capital.' },
          { name: 'Sebastiano Serlio (1475–1554)', what: 'Whose treatise helped fix the canon of five orders that placed the Composite at the summit.' },
          { name: 'Andrea Palladio', what: 'Who drew and ranked the Composite as the fifth and richest order in his Four Books.' }
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
          { name: 'Symmetria — agreement with a measure', body: 'The ancient word Vitruvius used, symmetria, does not mean mirror-symmetry. It means commensurability: that every part of a building is measured in the same unit and answers to the others, so nothing is an arbitrary size. Proportion is the parts sharing a common measure.', why: 'It clears up a common confusion. Classical "proportion" is not about a building matching left to right; it is about every dimension being a knowable multiple of one another, so the whole holds together.' },
          { name: 'Beauty as agreement', body: 'Alberti defined beauty as concinnitas — the harmony of all the parts such that nothing could be added, taken away or altered but for the worse. Beauty is not ornament laid on top; it is the rightness of the relationships underneath.', why: 'It reframes what you are looking at, and gives you a test. A plain, unornamented classical building can be profoundly beautiful, because its beauty lives in proportion, not decoration.' },
          { name: 'Music you can see', body: 'The consonant intervals of music — the octave (2:1), the fifth (3:2), the fourth (4:3) — were used as the ratios of rooms and façades. A room might be a double cube; a window twice as tall as wide. The building is, in effect, tuned like an instrument.', why: 'It explains the strange calm of classical spaces. Your eye is reading the same harmonies your ear finds pleasing in music — an order sensed before it is understood.' },
          { name: 'The human measure', body: 'Vitruvius set the well-formed human body inside a circle and a square — the image Leonardo drew as Vitruvian Man — and made the body the source of the orders\' proportions. The building is scaled to us.', why: 'It is why classical buildings feel humane rather than alien. Their measure is taken from the body, so we feel addressed by them, at our own scale.' },
          { name: 'The module', body: 'Proportion is made practical through the module — usually the diameter of the column (or, in some rulebooks, its half) — from which every other dimension is derived by ratio. Design becomes a matter of counting modules, not free invention.', why: 'It shows how a whole building could be held in the mind and coordinated by hand, long before drawings could be copied exactly. One number governs all — which is exactly how the orders work.' },
          { name: 'Palladio\'s beautiful rooms', body: 'Palladio turned the theory into usable rules, naming his most beautiful room shapes — the circle, the square, the square-and-a-half, whole-number rectangles like 4:3, 3:2 and 5:3, and the double square (2:1) — and setting a room\'s height by proportional means so the third dimension answers to the plan.', why: 'It is proportion made buildable. It is why Palladian rooms feel so composed: their dimensions are a tuned system, not free choices, and the harmony is felt even when it is not understood.' },
          { name: 'The golden-ratio myth', body: 'It is often claimed that the Greeks and Renaissance architects designed on the golden ratio (about 1.618). There is little real evidence for it: the "golden Parthenon" and "golden Vitruvian Man" readings rely on selective measuring, the Parthenon\'s footprint is closer to 2.25:1, and the golden section was first set out by Euclid — after the Parthenon — as geometry, not an architectural rule.', why: 'It is worth knowing so you are not fooled. The real ratios the tradition used are simple whole numbers you can hear in music, not a mystical irrational number laid over everything after the fact.' }
        ]
      },
      'the-path': {
        title: 'Learning to see proportion',
        intro: 'Feel it first in a calm room, then learn the numbers behind the feeling, then read the theory and the debate.',
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
          { name: 'Pythagoras & Plato', what: 'Whose discovery of harmonic ratios in music and the cosmos gave the tradition its faith that number is beautiful.' },
          { name: 'Vitruvius (1st c. BC)', what: 'Who tied proportion to the human body and the module, and made it the basis of the orders.' },
          { name: 'Leon Battista Alberti (1404–1472)', what: 'Who gave proportion its fullest theory as concinnitas — the harmony of the whole.' },
          { name: 'Andrea Palladio (1508–1580)', what: 'Who turned the theory into simple, repeatable room-ratios that spread across Europe.' },
          { name: 'Rudolf Wittkower (1901–1971)', what: 'The modern historian who revived the reading of Renaissance proportion as musical harmony — and set off the debate that still runs.' }
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
          { name: 'The temple', body: 'The origin of it all: a raised platform, a columned portico, a cella within, crowned by a pediment. The temple front — columns and pediment — became the tradition\'s most portable image, stamped onto churches, banks, houses and museums ever since.', why: 'The temple front is the single most reused motif in architecture. Learn it, and you recognise its ghost on a thousand later buildings.' },
          { name: 'The villa and the country house', body: 'Palladio turned the working farmhouse of the Veneto into a symmetrical, temple-fronted villa, giving noble form to country living. Through him it became the country house of England, Ireland and America — the great estates you can still visit.', why: 'It is the direct root of the grand estate house. When you tour a country mansion, you are usually touring Palladio\'s idea in local dress.' },
          { name: 'The church', body: 'Classical builders adapted the Roman basilica and the domed Pantheon into the Christian church — the long nave for the congregation, the dome over the crossing for heaven. Wren\'s London churches and St Paul\'s are the English summit.', why: 'It shows the language bending to a use the ancients never imagined, and doing it so well that the classical church feels as natural as the temple it descends from.' },
          { name: 'The civic building', body: 'Town halls, courts, museums, parliaments and banks took on classical dress to borrow its authority — the temple front and the dome saying permanence, order and public trust. Belfast City Hall and the US Capitol are of this family.', why: 'It explains why so much civic architecture is classical. The style was chosen to make citizens feel their institutions were solid, fair and lasting.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The treatises organise themselves by type; a good survey ties them to real buildings.',
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
          { name: 'Andrea Palladio', what: 'Who perfected the classical villa and gave the country house its lasting form.' },
          { name: 'Sir Christopher Wren', what: 'Who reinvented the classical church for Protestant London, crowned by the dome of St Paul\'s.' },
          { name: 'Thomas Jefferson (1743–1826)', what: 'Who used the temple form for a republic — the Virginia State Capitol and Monticello — founding American civic classicism.' },
          { name: 'Sir Edwin Lutyens (1869–1944)', what: 'Who carried the classical country house and civic monument into the twentieth century.' }
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
          { name: 'Post and lintel', body: 'Greek building rests on the simplest structure: upright posts (columns) carrying horizontal beams (lintels). Stone is strong in compression but weak in bending, so beams must be short — which is why Greek temples have many closely spaced columns.', why: 'It explains the rhythm of a Greek temple. The forest of columns is not a style choice but a structural necessity of building in stone beams.' },
          { name: 'The arch, vault and dome', body: 'The Romans exploited the arch — a curve of wedge-shaped stones (voussoirs) that turns bending into compression — and from it the barrel vault and the dome. Suddenly vast spaces could be spanned without a forest of columns.', why: 'It is the great divide between Greek and Roman. The arch is why Rome could build baths, basilicas and the Pantheon\'s dome — spaces Greece could never have roofed.' },
          { name: 'Roman concrete', body: 'The Romans developed opus caementicium — a concrete of lime, volcanic ash and rubble — that could be cast into arches, vaults and domes, then faced with brick or marble. It freed building from the size of a quarried block.', why: 'It reveals the engineering hidden inside the splendour. The Pantheon\'s marble skin covers a triumph of concrete — ornament and engineering working as one.' },
          { name: 'Honesty and the facing', body: 'Classical buildings often wear a fine skin — marble, dressed stone, stucco — over a rougher core of brick or concrete. The tradition argued for centuries about how honest a building must be about what is structure and what is dress.', why: 'It opens the great question Ruskin and Pugin fought over: should a building show how it is made? Knowing the core beneath the facing lets you take a side.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Vitruvius is full of practical construction; modern engineering histories make it vivid.',
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
          { name: 'Roman engineers', what: 'The anonymous builders who perfected concrete, the arch and the dome, and roofed the ancient world.' },
          { name: 'Apollodorus of Damascus (2nd c. AD)', what: 'Trajan\'s engineer, master of concrete construction and the great imperial building works.' },
          { name: 'Filippo Brunelleschi (1377–1446)', what: 'Who solved the dome of Florence Cathedral by studying Roman construction — the feat that opened the Renaissance.' },
          { name: 'Sir Christopher Wren', what: 'Scientist-engineer who devised the ingenious triple-shell dome of St Paul\'s.' }
        ]
      }
    }
  }
];

// Look a topic up by id (used by art.html). Reads window.ARTS lazily so it
// works whether or not styles-data.js has finished pushing the styles yet.
window.ART_BY_ID = (id) => (window.ARTS || []).find(a => a.id === id);
