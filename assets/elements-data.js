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
    blurb: 'The Tuscan is the simplest of the orders — a sturdy, unfluted column with a plain base and capital, and a bare entablature. The Romans took it from the Etruscans as their own native order, and it became the language of strength and utility: the base of a building, the gateway, the barn, the honest wall that needs no decoration.',
    sections: {
      'what-it-is': {
        title: 'What the Tuscan order is',
        intro: 'The Tuscan is Doric stripped to its essentials: a smooth (unfluted) shaft, a simple round base, a plain cushion capital, and an entablature without carving. Robust proportions — the column is short and thick — give it a look of solid, unpretending strength.',
        principles: [
          { name: 'The order of strength', body: 'With its stocky proportions (about seven column-diameters tall) and absence of ornament, the Tuscan reads as the strongest and most masculine of the orders. It is used where a building must look grounded and secure.', why: 'It tells you the tradition thought about character, not just decoration. Choosing Tuscan was choosing to say "solid and dependable" before a single word of ornament was spoken.' },
          { name: 'Rome\'s own order', body: 'Where the other refined orders came from Greece, the Tuscan was claimed by the Romans as their native Italian order, descended from Etruscan temple-building. Vitruvius describes it, and the Renaissance theorists made it the first of the five.', why: 'It shows the tradition was never purely Greek. The plainest order is the local one — a reminder that classical architecture always mixed the imported ideal with the home-grown.' },
          { name: 'The base of the building', body: 'Because it is plainest and strongest, the Tuscan is often placed lowest, carrying richer orders above it — the ground floor of a palace, the base of a triumphal arch, the rusticated storey beneath the show.', why: 'It introduces the idea of a hierarchy of orders: plain and strong at the bottom, rich and slender at the top, exactly as weight decreases upward.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The orders are best learned from the treatises that codified them, with a modern guide alongside.',
        books: [
          { title: 'De Architectura, Book IV', author: 'Vitruvius', note: 'PRIMARY. The ancient description of the Tuscan temple. Free online.' },
          { title: 'Regola delli cinque ordini d\'architettura', author: 'Giacomo Barozzi da Vignola, 1562', note: 'PRIMARY. The most influential rulebook of the five orders ever made — Vignola\'s plates set the standard proportions for centuries.' },
          { title: 'The Classical Orders of Architecture', author: 'Robert Chitham', note: 'ON-RAMP. A clear modern manual with measured drawings of all five orders — the practical way to learn them today.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The Tuscan is a codifiers\' order more than a designers\' — its history is the history of the rulebooks.',
        figures: [
          { name: 'Vitruvius', what: 'First to describe the Tuscan temple in writing, giving the order its ancient authority.' },
          { name: 'Giacomo da Vignola (1507–1573)', what: 'His Rule of the Five Orders fixed the Tuscan\'s proportions in the form most builders after him would use.' },
          { name: 'Inigo Jones (1573–1652)', what: 'Used a stern Tuscan to powerful effect at St Paul\'s, Covent Garden — "the handsomest barn in England".' }
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
          { name: 'No base, straight from the floor', body: 'The Greek Doric column stands directly on the temple platform without a base, its weight met by the flat stone. This gives it a look of rooted, elemental strength found in no other order.', why: 'It is the fastest way to tell Greek Doric from every later order. That missing base is a whole aesthetic — the column as a growing thing, not a placed object.' },
          { name: 'Triglyphs and metopes', body: 'The Doric frieze alternates triglyphs — blocks with three vertical grooves — and metopes, the panels between, often carved with battles or myths. They are thought to remember, in stone, the ends of the wooden beams of the first timber temples.', why: 'It reveals a deep habit of the tradition: turning the memory of older construction into ornament. The stone temple quietly quotes the wooden one it replaced.' },
          { name: 'Refinements you are not meant to see', body: 'The Parthenon has almost no straight lines: columns lean slightly inward, swell at the middle (entasis), and the platform curves upward at the centre. These corrections counter the eye\'s tendency to see long straight lines as sagging.', why: 'It shows classical "perfection" is not rigid geometry but a subtle correction for how we actually see. The order lives in the adjustments, not the rule.' },
          { name: 'The order of gravity and men', body: 'The ancients associated Doric with strength and the male body — sober, muscular, unornamented. It was used for temples to the sterner gods and, ever after, for buildings that wish to look grave and permanent.', why: 'It explains why banks, courts and war memorials so often choose Doric. The order carries a mood, and that mood is seriousness.' }
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
          { name: 'The volute', body: 'The scroll capital is the Ionic\'s signature — a pair of spirals thought to derive from a rolled cushion, a ram\'s horns, or a nautilus shell. It turns the top of the column into something to look at, not just a plain support.', why: 'It is the single easiest capital to recognise. Spot the scrolls and you have named the order in one glance.' },
          { name: 'Slenderness and grace', body: 'The Ionic is proportioned taller and thinner than the Doric (about nine diameters high). The ancients associated it with the mature female form and with cultivated grace — dignified, but lighter and more decorative than the Doric.', why: 'It shows the orders were understood as characters. Choosing Ionic said "civilised, learned, graceful" — which is why it clothes so many libraries and universities.' },
          { name: 'A continuous frieze', body: 'Unlike the Doric\'s interrupted triglyphs and metopes, the Ionic frieze runs as one unbroken band, ideal for a continuous carved procession — as on the Erechtheion and, in Ionic spirit, the Parthenon\'s inner frieze.', why: 'It changes what ornament can do. A continuous band lets a story flow around the whole building instead of being boxed into panels.' },
          { name: 'The order of the mind', body: 'From antiquity onward the Ionic was felt to suit places of thought and refinement rather than raw strength — temples to Apollo and Athena, and later the libraries, museums and schools of the modern world.', why: 'It is why so many places of learning are Ionic. The order was chosen to set a mood of cultivated calm before you even read the name over the door.' }
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
          { name: 'The acanthus capital', body: 'The defining feature is the basket of acanthus leaves. Vitruvius tells the story of the sculptor Callimachus, who saw a basket of offerings on a girl\'s grave overgrown by an acanthus plant, and turned the sight into a capital.', why: 'It is the order\'s fingerprint. Leaves at the top of the column means Corinthian — and it carries a story about beauty born from grief, which is very classical.' },
          { name: 'The order of splendour', body: 'As the slenderest and most decorated order, the Corinthian was reserved for the grandest effect — wealth, magnificence, celebration. The ancients linked it to a slender, richly adorned young woman.', why: 'It explains why Corinthian clothes opera houses, palaces and the grandest civic rooms. The order itself signals "this is the important, splendid place".' },
          { name: 'Rome\'s favourite', body: 'The Greeks used Corinthian rarely; the Romans made it their signature, crowning the temples of the Forum, the Pantheon\'s portico and countless imperial monuments with it. Roman engineering and Corinthian splendour became the empire\'s public face.', why: 'It shows how a style can be adopted and transformed. The order became less Greek and more Roman — proof that the tradition is a conversation, not a fixed rule.' },
          { name: 'Height without heaviness', body: 'Its slender proportions (about ten diameters) let the Corinthian rise tall and light, ideal for the many-columned interiors and lofty porticoes the Romans built at scale.', why: 'It pairs the tradition\'s love of ornament with its love of engineering — richness that also solves the problem of building high and open.' }
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
          { name: 'A deliberate fusion', body: 'The Composite is exactly what its name says — the Ionic and the Corinthian combined into one capital, richer than either alone. It is the tradition consciously recombining its own letters into a new one.', why: 'It proves the "language" idea in the clearest way: a whole new order made by fusing two existing ones. The grammar is generative, not fixed.' },
          { name: 'The Roman order', body: 'Where Tuscan was Rome\'s plain native order, the Composite was Rome\'s grand invention — first seen on imperial triumphal arches like the Arch of Titus, announcing victory and magnificence.', why: 'It shows the Romans as inventors, not just inheritors, of the classical language — and that the orders kept growing.' },
          { name: 'The top of the hierarchy', body: 'Renaissance theorists arranged the five orders as a rising scale of richness — Tuscan, Doric, Ionic, Corinthian, Composite — and put the Composite at the very top, the most ornate and honoured.', why: 'It completes the ladder of the orders, plain to rich, and gives a building its most magnificent possible crown when the top storey wants to sing.' }
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
        intro: 'Proportion is the system of ratios that governs a classical design: the height of a column to its width, a door to its room, a window to the wall. The tradition inherited from Pythagoras and Plato the belief that the same simple ratios that sound harmonious in music are beautiful in space.',
        principles: [
          { name: 'Beauty as agreement', body: 'Alberti defined beauty as concinnitas — the harmony of all the parts, such that nothing could be added, taken away or altered but for the worse. Beauty is not ornament laid on top; it is the rightness of the relationships underneath.', why: 'It reframes what you are looking at. A plain, unornamented classical building can be profoundly beautiful, because its beauty lives in proportion, not decoration.' },
          { name: 'Music you can see', body: 'The consonant intervals of music — the octave (2:1), the fifth (3:2), the fourth (4:3) — were used as the ratios of rooms and façades. A room might be a "double cube"; a window twice as tall as wide. The building is tuned like an instrument.', why: 'It explains the strange calm of classical spaces. Your eye is reading the same harmonies your ear finds pleasing in music — order sensed before it is understood.' },
          { name: 'The human measure', body: 'Vitruvius set the well-formed human body inside a circle and a square — the image Leonardo drew as Vitruvian Man — and made the body the source of the orders\' proportions. The building is scaled to us.', why: 'It is why classical buildings feel humane rather than alien. Their measure is taken from the body, so we feel addressed by them, at our own scale.' },
          { name: 'The module', body: 'Proportion is made practical through the module — usually the radius or diameter of the column — from which every other dimension is derived by ratio. Design becomes a matter of counting modules, not free invention.', why: 'It shows how a whole building could be held in the mind and coordinated by hand, long before drawings could be copied exactly. One number governs all.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'This is the most philosophical of the elements; the primary texts are essential, with one great modern study.',
        books: [
          { title: 'On the Art of Building, Books VI & IX', author: 'Leon Battista Alberti', note: 'PRIMARY. The fullest classical theory of proportion and concinnitas. Dense but foundational.' },
          { title: 'The Four Books of Architecture, Book I', author: 'Andrea Palladio', note: 'PRIMARY. Palladio\'s recommended room ratios — the theory turned into usable rules. Free scans.' },
          { title: 'Architectural Principles in the Age of Humanism', author: 'Rudolf Wittkower, 1949', note: 'ON-RAMP (scholarly). The classic modern study of musical proportion in Renaissance architecture. Changed the field.' },
          { title: 'The Geometry of Art and Life', author: 'Matila Ghyka', note: 'ON-RAMP. On ratio, the golden section and proportion across art and nature.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The theorists of ratio, ancient and Renaissance.',
        figures: [
          { name: 'Pythagoras & Plato', what: 'Whose discovery of harmonic ratios in music and cosmos gave the tradition its faith that number is beautiful.' },
          { name: 'Vitruvius', what: 'Who tied proportion to the human body and made it the basis of the orders.' },
          { name: 'Leon Battista Alberti', what: 'Who gave proportion its fullest theory as concinnitas — the harmony of the whole.' },
          { name: 'Andrea Palladio', what: 'Who turned the theory into simple, repeatable room-ratios that spread across Europe.' }
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
        intro: 'Ornament in the classical tradition is governed, not free. There is a repertoire of standard mouldings (each a particular curved profile), standard motifs carved upon them, and rules about where richness belongs. Learning ornament is learning this vocabulary and its grammar.',
        principles: [
          { name: 'The mouldings', body: 'A handful of profiles do most of the work: the ovolo, cyma, cavetto, torus, scotia and fillet. Each catches light differently — some bold and shadow-casting, some delicate — and each has a traditional carved enrichment (egg-and-dart on the ovolo, leaf-and-dart on the cyma).', why: 'Mouldings are the smallest units of the language. Learn to read a cornice profile and you can date and place a building from a scrap of its edge.' },
          { name: 'Enrichment belongs to structure', body: 'Good classical ornament marks and explains the construction — it gathers at capitals, cornices, doorways and the meeting of parts, where the eye needs help understanding what is happening. It is placed by logic, not scattered.', why: 'It gives you a test for ornament: does it clarify the building or merely cover it? The best carving tells you where you are and what is carrying what.' },
          { name: 'The standard motifs', body: 'A shared alphabet of motifs recurs across centuries: acanthus, egg-and-dart, bead-and-reel, the Greek key (meander), guilloche, palmette, rosette and swag. They travel from the orders into furniture, silver and print.', why: 'These motifs are the tradition\'s shared words. Recognising them ties a doorway, a picture frame and a temple into one continuous language.' },
          { name: 'Restraint is a rule', body: 'The tradition prized decorum — richness suited to the building\'s purpose and rank. Too much ornament, or ornament in the wrong place, was a fault. Ruskin and Pugin later insisted, too, that ornament be honest and hand-made.', why: 'It explains why the greatest classical buildings can look austere. Knowing when NOT to enrich is as much part of the grammar as the carving itself.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'For ornament, the great 19th-century pattern books and the moral critics are the heart of it.',
        books: [
          { title: 'The Grammar of Ornament', author: 'Owen Jones, 1856', note: 'PRIMARY (modern). The most beautiful survey of ornament ever printed, with its famous propositions on design. Free scans exist.' },
          { title: 'The Seven Lamps of Architecture', author: 'John Ruskin, 1849', note: 'PRIMARY. The "Lamp of Beauty" on where ornament comes from and what makes it true. Passionate and unforgettable.' },
          { title: 'The True Principles of Pointed or Christian Architecture', author: 'A. W. N. Pugin, 1841', note: 'PRIMARY. Pugin\'s demand that ornament be honest — decoration OF construction, never construction hidden by decoration.' },
          { title: 'A Visual Dictionary of Architecture', author: 'Francis D. K. Ching', note: 'ON-RAMP. The quickest way to put names to the mouldings and motifs you see.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The carvers are mostly anonymous; the theorists of ornament are not.',
        figures: [
          { name: 'Owen Jones (1809–1874)', what: 'Whose Grammar of Ornament codified the world\'s decorative languages and set out principles still taught today.' },
          { name: 'John Ruskin', what: 'Who tied ornament to labour, love and truth, and changed how the modern age valued carving.' },
          { name: 'A. W. N. Pugin', what: 'Who insisted ornament must reveal construction, not disguise it — a rule that outlived his own Gothic cause.' },
          { name: 'Grinling Gibbons (1648–1721)', what: 'The supreme carver of the English classical age, whose limewood swags set the standard for enrichment.' }
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
