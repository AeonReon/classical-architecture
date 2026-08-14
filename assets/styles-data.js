// styles-data.js — the great styles, appended to the window.ARTS array.
// Loaded AFTER elements-data.js so window.ARTS already exists. index.html,
// art.html and category.html all include this. Each style is the same
// sub-tile shape as the elements, plus an `image` for the photo tile.
// Voice rule: present each style as its own builders understood it — not
// ranked, but read. Reading lists put primary sources first.

window.ARTS.push(
  {
    id: 'greek',
    image: 'assets/styles/greek.jpg',
    name: 'Greek',
    short: 'The temple and the orders',
    tagline: 'Where the language began — clarity, order, restraint',
    group: 'The Styles',
    color: '#3F72B8', colorDeep: '#294E85', colorSoft: '#DCE6F5',
    icon: 'temple',
    blurb: 'Greek architecture is the source. Over three centuries the builders of Greece perfected a single form — the columned temple — with such care for proportion, refinement and restraint that it became the standard of the whole Western tradition. The Doric and Ionic orders, the pediment, the fluted column and the marble frieze all begin here, on the hills of Athens and the coasts of the Greek world. And they began not in cool white marble but in bright paint, tuned by the eye of builders who treated a building as a living thing.',
    sections: {
      'what-it-is': {
        title: 'What Greek architecture is',
        intro: 'Greek architecture is an architecture of the perfected type rather than the endless new invention. Working almost entirely in post-and-lintel stone, and over some three centuries (roughly 700 to 300 BC), the Greeks refined one form — the temple — again and again: its plan, its orders, its proportions and its optical subtleties, seeking not variety but the ideal version of a single, well-understood thing. Everything the later tradition would build with was first worked out here.',
        principles: [
          { name: 'A house for the god, read from the outside', image: 'assets/styles/greek.jpg', caption: 'The Parthenon — the temple as an object to be seen from the outside.', body: 'A Greek temple was built as the dwelling of the deity and the shelter for the cult statue — not as a hall for a congregation. Worship and sacrifice happened outdoors, at an altar in front of the temple, where the crowd gathered. So the Greeks poured their whole design intelligence into the exterior: the colonnade, the sculpture, the proportions and the refinements.', why: 'It is the reverse of a Gothic cathedral, which is made to be entered. The Greek temple is made to be walked around and seen against the sky — which is why Greek architecture is really a sculpture-of-a-building, and why all its genius is on the outside.' },
          { name: 'The kit of parts', image: 'assets/detail/greek-kit.jpg', caption: 'The parts of a temple, named — from the stylobate up to the pediment.', body: 'From the ground up: the stepped base (the crepidoma), whose top step — the stylobate — the columns stand on; the columns themselves; the walled inner room, the cella or naos, that housed the statue, with a front porch (pronaos) and often a matching false porch behind (opisthodomos); the colonnade wrapping the whole (the peristyle); the entablature the columns carry, in three bands — architrave, frieze, cornice; and the low triangular gable at each end, the pediment, its sculpted face the tympanum.', why: 'This fixed set of parts is the grammar of the whole tradition. Learn to name these and you can read almost any classical or classical-revival building in the world — a bank, a museum, a courthouse — because they are all assembled from this same kit.' },
          { name: 'The orders — told apart at the capital', image: 'assets/detail/greek-orders.jpg', caption: 'Doric, Ionic and Corinthian — told apart at a glance by the capital.', body: 'An order is the whole coordinated system of column, entablature and proportion. The Doric is oldest and heaviest: no base, a plain cushion capital, and a frieze of alternating triglyphs and metopes. The Ionic is slimmer and elegant: it stands on a base and is crowned by the scrolled volute capital, over a continuous carved frieze. The Corinthian, slenderest of all, wears a capital of acanthus leaves — and the Greeks used it only sparingly.', why: 'The orders are the reason classical architecture reads as a language rather than a pile of shapes. The fastest tell is always the capital: a plain cushion means Doric, scrolls mean Ionic, leaves mean Corinthian. Name the order and the rest of the design opens up.' },
          { name: 'Built of beams, not arches', image: 'assets/detail/greek-colonnade.jpg', caption: 'Columns carrying the entablature — post-and-lintel, the whole of Greek structure.', body: 'The Greek temple is pure post-and-lintel: uprights (columns and walls) carry horizontal beams (lintels and architraves). There is no true arch or vault. And stone, though immensely strong when pressed, is weak in bending — a stone beam cracks under its own weight if it spans too far. So the beams had to be short, and the columns close together.', why: 'The dense, measured rhythm of a Greek colonnade — that forest of closely-set columns — is not a style choice but a material fact made beautiful. The Greeks perfected refinement within a narrow structural system, rather than chasing wide open space; that leap would wait for the Roman arch.' },
          { name: 'Ornament that remembers timber', image: 'assets/quiz/triglyph-frieze.jpg', caption: 'The Doric frieze — triglyphs and metopes, read as stone memories of timber beam-ends.', body: 'The earliest temples were built of timber and mud-brick, and when the Greeks turned to stone they kept the memory of the old woodwork in the new material. Vitruvius reads the Doric triglyphs as the stylised ends of ceiling beams, the metopes as the gaps once left open between them, and the little guttae beneath as petrified wooden pegs.', why: 'It explains the otherwise puzzling Doric frieze as fossilised carpentry — a beautiful teaching key. Hold it lightly, though: this is the traditional account handed down from Vitruvius, and scholars still argue over how neatly wood really became stone.' },
          { name: 'The temple that curves to look straight', image: 'assets/detail/greek-entasis.jpg', caption: 'Great Doric columns — which swell and lean by fractions so that they look perfectly straight.', body: 'Almost nothing in the Parthenon is truly straight. The column shafts swell very slightly in the middle (entasis); the great stone platform is not flat but rises gently toward the centre; and the columns lean a little inward, the corner ones thickened and set closer. Everything is tuned by eye to a fraction.', why: 'The traditional explanation, from Vitruvius and measured by Penrose in 1851, is optical correction: dead-straight lines and a flat platform would appear to sag or bulge, so the Greeks curved them so they look perfect. Scholars still debate the real reason — correction, or a wish to give the stone "life", or plain rain-drainage — but either way it is the summit of their craft: a building tuned like an instrument.' },
          { name: 'Beauty as measured proportion', body: 'Greek design worked from whole-number ratios and a repeated module — often the diameter of the column — so that every dimension answers to every other and the whole holds together. The Parthenon is famously governed by a recurring 4:9 relationship, and Iktinos is said to have written a (now lost) treatise on its proportions.', why: 'Beauty understood as measurable harmony is the philosophical core the entire later tradition inherited. (One caution: the popular claim that the Parthenon was set out on the "golden ratio" is not supported — the Greeks left no evidence of using it, and it was first described, by Euclid, only after the Parthenon was built.)' },
          { name: 'It was painted, not white', image: 'assets/detail/polychromy.jpg', caption: 'A Greek temple\'s ornament reconstructed in its original strong colour.', body: 'The marble we picture as serene and white was once brightly coloured — reds, blues, ochres and gilding laid over the friezes, mouldings and sculpture. Modern imaging recovers the traces: ultraviolet and raking light, a luminescence that makes ancient Egyptian blue glow, and X-ray fingerprints of the pigments.', why: 'This one correction changes how you imagine every Greek building. The pristine-white ideal is an accident of two thousand years of weathering plus the eighteenth-century taste of Winckelmann, who prized bare marble as "noble simplicity". Picture the paint back on, and the cool, austere temple becomes something vivid and strange — as it truly was.' }
        ]
      },
      'the-path': {
        title: 'Learning Greek architecture',
        intro: 'Greece is best learned from the temple outward — one great building understood deeply teaches more than a broad survey skimmed. Take it in three passes: the vocabulary, then the reasons, then the sources and the eye.',
        heroImage: 'assets/detail/greek-hephaestus.jpg',
        heroCaption: 'The Temple of Hephaestus in Athens — the best-preserved Greek temple, and a fine one to learn from.',
        levels: [
          { stage: 'Beginner — the vocabulary and the reveal', items: [
            'Learn the kit of parts cold: stylobate, column and capital, cella, pronaos, peristyle, entablature, pediment.',
            'Learn the three orders by their capitals — plain cushion (Doric), scrolls (Ionic), acanthus leaves (Corinthian).',
            'Take in the two great mind-shifts: the temple is a house for the god, seen from outside; and it was painted, not white.',
            'Get to know a few buildings by name: the Parthenon (the Doric icon), the heavy early Doric of Paestum and Olympia, and the elegant Ionic of the Erechtheion and the Temple of Athena Nike.'
          ] },
          { stage: 'Intermediate — the "why"', items: [
            'Understand post-and-lintel building and its span limit, and petrification — why the Doric frieze looks like fossilised carpentry.',
            'Study the optical refinements on the Parthenon and the module-and-ratio system of proportion (including why the golden-ratio story is a myth).',
            'Learn the Periklean Acropolis as a single programme — Parthenon, Propylaia, Erechtheion, Athena Nike — and who built each.',
            'Begin a modern survey: Mary Beard\'s The Parthenon first, then Lawrence and Tomlinson\'s Greek Architecture.'
          ] },
          { stage: 'Advanced — the sources, the debates, the eye', items: [
            'Go to the primary sources: Vitruvius, Book IV, on the orders (free online); Pausanias on the sites; the plates of Stuart & Revett.',
            'Engage the real arguments — the true purpose of the refinements, and the disputed origin of the Doric frieze.',
            'Read Coulton on how the buildings were actually set out, and Korres on how the marble was quarried and moved.',
            'Train the eye on Greek Revival buildings near you, and — if you can — on the sites themselves and the Acropolis Museum in Athens.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Even far from Greece, the Greek temple is all around you in revival form — banks, courthouses, museums, memorials. Northern Ireland and Britain are rich in Greek Revival stone. A few things to actually do.',
        heroImage: 'assets/styles/greek-revival.jpg',
        heroCaption: 'A Greek Revival building — the temple front reborn on a modern street, waiting to be read.',
        items: [
          { name: 'Name the order by its capital', body: 'On any columned building near you, look only at the top of the column: plain cushion = Doric, scrolls = Ionic, acanthus leaves = Corinthian. Say it aloud — naming fixes it in the eye.' },
          { name: 'Hunt for entasis', body: 'Stand at the base of a large column and sight up the shaft against a plain background. Look for the gentle swelling in the middle. Once you can see it, you cannot un-see it — and cheap modern columns, which are dead-straight cylinders, will start to look wrong.' },
          { name: 'Read a Doric frieze as carpentry', body: 'Find the triglyphs (the grooved blocks — beam-ends) and the metopes (the panels between), and the little guttae "pegs" beneath. Tell yourself the petrification story as you look: this stone remembers wood.' },
          { name: 'Put the colour back', body: 'Photograph a "white" classical front, then in your mind\'s eye — or an image editor — paint the triglyphs, mouldings and sculpture in red, blue and gold. This is closer to what the Greeks actually saw.' },
          { name: 'Test the "no straight lines" idea', body: 'On a long colonnade, crouch and sight along the stylobate to sense any curve, and check whether the end columns lean inward. You are looking for the tuning the builders hid.' },
          { name: 'Sketch the kit from memory', body: 'Draw a labelled temple section from stylobate to pediment, and a Doric and an Ionic capital, without reference — until you can. Drawing teaches the eye faster than looking.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The primary sources are old and uneven, but they are the tradition in its own voice — begin with a clear modern guide, then go to them. Honest notes on difficulty below.',
        heroImage: 'assets/detail/greek-antiquities.jpg',
        heroCaption: 'A measured plate from Stuart & Revett\'s Antiquities of Athens (from 1762) — the drawings that launched the Greek Revival.',
        books: [
          { title: 'The Ten Books on Architecture (De Architectura)', author: 'Vitruvius, c. 30–20 BC (Morgan translation, Harvard 1914)', note: 'PRIMARY. A Roman writing after the Greeks, but our main surviving ancient source on the orders — Book IV is the one for their origins. A genuine technical treatise: dip in for reference, don\'t read cover to cover. Free at Project Gutenberg.' },
          { title: 'The Antiquities of Athens', author: 'James Stuart & Nicholas Revett, 1762–1816', note: 'PRIMARY. The first accurate measured survey of the Greek monuments, and the book that launched the whole Greek Revival. A historical folio — its value is in the superb measured plates rather than the prose.' },
          { title: 'Description of Greece', author: 'Pausanias, 2nd c. AD', note: 'PRIMARY. An ancient traveller\'s eyewitness guide to the temples and sanctuaries, site by site. Readable but long — use it selectively. Free on the Perseus digital library.' },
          { title: 'The Parthenon', author: 'Mary Beard, 2002 (rev. 2010)', note: 'ON-RAMP. Witty, scholarly and short — the best general-reader way into Greek architecture and its afterlife. Start here.' },
          { title: 'Greek Architecture', author: 'A. W. Lawrence, rev. R. A. Tomlinson (Yale, 1996)', note: 'ON-RAMP. The standard authoritative survey — university-level but clear and well-ordered.' },
          { title: 'Ancient Greek Architects at Work', author: 'J. J. Coulton, 1977', note: 'ON-RAMP (deeper). On how the temples were actually designed and set out — the problems of structure and proportion, solved on the ground.' },
          { title: 'The Earth, the Temple, and the Gods', author: 'Vincent Scully, 1962', note: 'ON-RAMP. The famous, readable essay on how Greek temples were placed in dialogue with their landscape and site.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Greek architects are often anonymous, and even for the famous ones only rough working dates survive. But the greatest works carry names — and it is worth knowing exactly what each did.',
        figures: [
          { name: 'Iktinos (active c. 450–420 BC)', what: 'Architect of the Parthenon (447–432 BC) with Kallikrates, under Pheidias\'s oversight. Pausanias also credits him with the Temple of Apollo at Bassae, home of the earliest known Corinthian column.',
            works: ['The Parthenon (447–432 BC), with Kallikrates', 'The Temple of Apollo Epicurius at Bassae'], link: 'https://en.wikipedia.org/wiki/Ictinus' },
          { name: 'Kallikrates (active c. 470–420 BC)', what: 'Co-architect of the Parthenon, and by the usual reading of an Athenian decree the architect of the small, exquisite Temple of Athena Nike on the Acropolis.',
            works: ['The Parthenon (with Iktinos)', 'The Temple of Athena Nike'], link: 'https://en.wikipedia.org/wiki/Callicrates' },
          { name: 'Mnesikles (active c. 437–432 BC)', what: 'Architect of the Propylaia, the monumental columned gateway to the Acropolis — left unfinished when the Peloponnesian War broke out.',
            works: ['The Propylaia — the gateway to the Acropolis'], link: 'https://en.wikipedia.org/wiki/Mnesikles' },
          { name: 'Pheidias (c. 480 – c. 430 BC)', what: 'The great sculptor and overall director of the Periklean building programme — not its architect. He made the colossal gold-and-ivory Athena inside the Parthenon and the Zeus at Olympia, one of the Seven Wonders.',
            works: ['The Athena Parthenos (inside the Parthenon)', 'The Zeus at Olympia', 'Directed the Parthenon\'s sculptures'], link: 'https://en.wikipedia.org/wiki/Phidias' },
          { name: 'Kallimachos (later 5th c. BC)', what: 'The sculptor to whom Vitruvius credits the invention of the Corinthian capital, inspired by acanthus growing round a basket on a girl\'s grave at Corinth. A lovely legend more than settled history — the order really grew up gradually.',
            works: ['Credited by Vitruvius with the first Corinthian capital'], link: 'https://en.wikipedia.org/wiki/Callimachus_(sculptor)' },
          { name: 'Hermogenes (Hellenistic, prob. 2nd c. BC)', what: 'The great theorist and systematiser of the Ionic order, whose rules Vitruvius preserved. His exact dates are genuinely uncertain, but his influence on later Ionic is not.',
            works: ['The Temple of Artemis Leukophryene, Magnesia', 'The Temple of Dionysus, Teos'], link: 'https://en.wikipedia.org/wiki/Hermogenes_(architect)' },
          { name: 'Stuart & Revett (1713–1788; 1720–1804)', what: 'The two Englishmen whose accurate surveys of Athens (fieldwork 1751–54) resurrected Greek architecture for the modern world and set the Greek Revival in motion.',
            works: ['<i>The Antiquities of Athens</i> (from 1762) — the measured drawings that launched the Greek Revival'], link: 'https://en.wikipedia.org/wiki/The_Antiquities_of_Athens' }
        ]
      }
    }
  },
  {
    id: 'roman',
    image: 'assets/styles/roman.jpg',
    name: 'Roman',
    short: 'The arch and the empire',
    tagline: 'Engineering and grandeur — the classical language at scale',
    group: 'The Styles',
    color: '#B4560F', colorDeep: '#7A360A', colorSoft: '#F7E3D2',
    icon: 'arch',
    blurb: 'Rome took the Greek language of the orders and married it to a genius for engineering. With the arch, the vault, the dome and concrete, the Romans built at a scale and for a range of uses the Greeks never attempted — baths, basilicas, aqueducts, amphitheatres and the Pantheon. Where the Greek temple is a sculpture seen from outside, the Roman building is a great interior you walk into. Roman architecture is the classical tradition made practical, civic and vast — and it is the architecture our banks, museums and city halls still borrow from.',
    sections: {
      'what-it-is': {
        title: 'What Roman architecture is',
        intro: 'Roman architecture keeps the Greek orders but changes their job. Where the Greek column carried the roof, the Roman column is often a decorative screen over a wall of arches and concrete that does the real work. The result is an architecture of engineering and enclosed space — the same classical vocabulary, put to entirely new and public ends.',
        principles: [
          { name: 'The arch — turning load into a curve', image: 'assets/quiz/round-arch.jpg', caption: 'A Roman arch — wedge-shaped voussoirs locked at the top by the keystone.', body: 'A Roman arch is a semicircle built of wedge-shaped stones (voussoirs) locked at the top by the keystone. Because stone is strong when pressed but weak when pulled, the arch is a way of carrying weight without a beam that would crack: the load runs around the curve as compression and down into the supports, which must resist the outward push. It spans far wider than any single flat lintel.', why: 'It is the engine of the whole style. The Romans did not invent the arch — the Etruscans and others used it first — but they exploited it everywhere, at scale, as the organising idea of a whole building culture. (Note the Roman arch is a round half-circle; the pointed arch is a much later, Gothic idea.)' },
          { name: 'The vault and the dome', image: 'assets/detail/roman-vault.jpg', caption: 'A vast vaulted Roman hall — the column-free space the vault made possible.', body: 'Stretch an arch along a line and you get a barrel vault, a stone tunnel. Cross two barrel vaults and you get a groin vault, which throws its weight onto four corner piers and frees the walls between for windows. Spin an arch full circle and you get a dome, roofing a great space with no internal supports at all.', why: 'These are how Rome roofed vast, column-free interiors in fireproof masonry — the huge halls of the baths, the basilicas, the Pantheon. Nothing the Greeks built, with their timber-and-column roofs, could enclose space like this.' },
          { name: 'Concrete — the hidden engine', image: 'assets/detail/roman-concrete.jpg', caption: 'Roman brick and stone facing — a thin skin over a concrete core.', body: 'Roman concrete (opus caementicium) was lime, a volcanic ash called pozzolana, water and rubble aggregate. It set hard even under water, was laid in courses, and was almost always cast against a permanent skin of brick or small stone that also served as the finish. The brick you see on a Roman ruin is usually just that skin over a concrete core.', why: 'Concrete freed building from the size of a quarried block: it could be cast into any curve, used cheap material and less-skilled labour, and set fast. It is the real technology behind the vaults and the scale. (Its famous durability is genuine and still researched — but the viral "self-healing, better than modern" headlines overstate it; Roman concrete is unreinforced and does a different job.)' },
          { name: 'The orders as applied dress', image: 'assets/styles/roman.jpg', caption: 'The Colosseum — the orders applied as decoration over an arched, structural wall.', body: 'On the Colosseum the arches and concrete do the carrying, while engaged half-columns and an entablature are laid over the wall as decoration, storey by storey — sturdy Tuscan at the bottom, then Ionic, then Corinthian, then an attic of pilasters. The order has become a prestige screen, not the structure.', why: 'This is the single most useful thing to learn for reading a building: ask whether the columns are actually holding anything up, or merely dressing a wall. From Rome onward, most classical buildings are Roman in this sense — the order is a language applied to a structure that stands on its own.' },
          { name: 'Architecture you go into', image: 'assets/detail/roman-pantheon-in.jpg', caption: 'Inside the Pantheon — the great enclosed interior that is the Roman achievement.', body: 'The Greek temple is a solid object to be admired from the outside; its interior is small and dark. The Roman achievement is the opposite — to shape and enclose enormous interior volumes as the main event, from the glittering bath halls to the Pantheon\'s rotunda.', why: 'This is the deepest break from Greece, and the through-line to everything after: Byzantine, Romanesque, Gothic, Renaissance and Baroque interiors all descend from Rome\'s discovery that architecture can be the sculpting of inner space.' },
          { name: 'Architecture for a public', image: 'assets/detail/roman-forum.jpg', caption: 'The Roman Forum — architecture as civic life, infrastructure and public display.', body: 'Rome invented or perfected the great civic types: the basilica (a roofed hall for law and business), the thermae (vast public baths), the amphitheatre, the triumphal arch, the aqueduct and the planned forum. Building became an instrument of public life, infrastructure and imperial display, not just a house for a god.', why: 'It is why our own civic architecture is Roman in spirit. The conviction that the state should house public life in grand classical halls — courts, museums, parliaments, capitols — begins in the Roman forum.' },
          { name: 'The Pantheon — the synthesis', image: 'assets/elements/foundation.jpg', caption: 'The Pantheon — a Greek portico fronting a vast concrete dome lit by a single oculus.', body: 'A Greek Corinthian portico of granite columns fronts a vast concrete rotunda whose dome is still the largest unreinforced concrete dome in the world. Its diameter and height are equal — about 43 metres — so a perfect sphere would fit inside; it is lightened by five rings of coffers and by concrete made progressively lighter toward the top, and lit by a single open eye, the oculus.', why: 'It is the one building to know above all — order, concrete, dome, geometry and interior space fused into a single room. Almost every later dome, from Florence to St Peter\'s to St Paul\'s to the US Capitol, is its descendant. (The inscription names Agrippa, but it belongs to his earlier Pantheon that burned; the building you visit is Hadrian\'s rebuilding.)' }
        ]
      },
      'the-path': {
        title: 'Learning Roman architecture',
        intro: 'Rome is best learned through its three structural moves and its great surviving buildings — then through the debates and the long legacy.',
        heroImage: 'assets/daily/do.jpg',
        heroCaption: 'Looking up into the Pantheon\'s dome and open oculus — begin with Rome\'s greatest room.',
        levels: [
          { stage: 'Beginner — the three moves', items: [
            'Learn the arch, the vault and the dome, and the words voussoir, keystone and thrust.',
            'Fix the one big contrast: Greek is exterior, post-and-lintel, stone; Rome is interior, arch-and-vault, concrete.',
            'Anchor on three monuments you can picture instantly: the Colosseum, an aqueduct (the Pont du Gard), and the Pantheon.',
            'On the Colosseum, prove to yourself the columns are decoration and the arches do the work.'
          ] },
          { stage: 'Intermediate — materials, types, plans', items: [
            'Learn what Roman concrete is, and read a ruin\'s brick "skin" against its rubble "core".',
            'Learn the public building types — basilica, baths, amphitheatre, forum, triumphal arch — and what each was for.',
            'Study the Pantheon closely: portico, rotunda, coffered dome, lightweight aggregate, oculus.',
            'Read Vitruvius, Book I, for the firmness–commodity–delight triad in its own words.'
          ] },
          { stage: 'Advanced — intention, debate, legacy', items: [
            'Study the groin-vaulted bath halls (Caracalla, Diocletian) and how they win vast span and light.',
            'Read the imperial complexes as designed experiences — the Forum of Trajan, Hadrian\'s Villa.',
            'Engage the live debates: who designed the Pantheon and when, and how far to trust the "self-healing concrete" story.',
            'Trace the legacy: basilica into the church, the Pantheon dome into St Peter\'s and the Capitol, the triumphal arch into the Arc de Triomphe and the war memorial.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Roman ideas are hiding in plain sight in later building. A few things to actually do.',
        heroImage: 'assets/quiz/round-arch.jpg',
        heroCaption: 'A Roman triumphal arch — the form behind countless war memorials and city gates.',
        items: [
          { name: 'Separate the order from the structure', body: 'On any classical façade — a ruin, a bank, a courthouse — ask whether the columns are really carrying something or are engaged/pilasters glued to a wall that stands on its own. On the Colosseum, they carry nothing.' },
          { name: 'Trace the voussoirs and find the keystone', body: 'On any arch — a bridge, a gateway, an aqueduct — follow the wedge stones up to the central keystone, and note the round Roman semicircle against a pointed Gothic arch.' },
          { name: 'Read the wall\'s skin', body: 'On Roman brick ruins, remember the brick is usually a thin facing over a concrete core. Look for spots where the skin has fallen and the rough rubble core shows through.' },
          { name: 'Spot the basilica in a church', body: 'A tall central nave, lower side aisles, and an apse at the end is the Roman basilica plan, adopted wholesale by Christianity. Test it in any traditional church.' },
          { name: 'Find a Pantheon child', body: 'A dome on a drum with a columned portico in front — a domed church, library, museum or capitol — is a descendant of the Pantheon. Find one and see the family likeness.' },
          { name: 'Read a memorial arch as Roman', body: 'Many war memorials and city gates are triumphal arches: a single or triple opening, an attic for the inscription, and an applied order. Read its parts the Roman way.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Two genuine Roman voices survive; the modern books make the engineering and the monuments vivid. Honest difficulty notes below.',
        heroImage: 'assets/detail/roman-vitruvius.jpg',
        heroCaption: 'Vitruvius\'s Ten Books on Architecture — the one architectural treatise to survive from antiquity.',
        books: [
          { title: 'The Ten Books on Architecture (De Architectura)', author: 'Vitruvius, 1st c. BC (Morgan translation, 1914)', note: 'PRIMARY. The only architectural treatise to survive from antiquity — but written under Augustus, before the Pantheon and Colosseum, so it is the theory, not a tour of the famous buildings. Free at Project Gutenberg.' },
          { title: 'On the Water-Supply of Rome (De Aquaeductu)', author: 'Frontinus, c. AD 97', note: 'PRIMARY. A report by Rome\'s actual water commissioner on the aqueducts — short, practical and surprisingly readable for an ancient text. Free on LacusCurtius.' },
          { title: 'Roman Imperial Architecture', author: 'J. B. Ward-Perkins (Yale/Pelican History of Art)', note: 'ON-RAMP. The standard scholarly survey of the great Imperial-period buildings.' },
          { title: 'Roman Building: Materials and Techniques', author: 'Jean-Pierre Adam', note: 'ON-RAMP. The clearest account of how the Romans actually built — richly illustrated and very readable if the engineering intrigues you.' },
          { title: 'The Pantheon: Design, Meaning, and Progeny', author: 'William L. MacDonald (Harvard)', note: 'ON-RAMP. The classic deep-dive into the one building you most need to understand, and its long afterlife.' },
          { title: 'Rome: An Oxford Archaeological Guide', author: 'Amanda Claridge', note: 'ON-RAMP. The best companion to the buildings themselves, ruin by ruin, with plans.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'A recurring Roman truth: the name attached to a building is usually the patron or emperor who paid for it, while the designer or engineer is anonymous. "Architect" in the modern sense is often unknowable.',
        figures: [
          { name: 'Vitruvius (1st c. BC)', what: 'A military engineer under Julius Caesar, later supported by Augustus, whose treatise is the only one to survive from antiquity — the source of the whole later tradition. His one known building, a basilica at Fano, is lost.',
            works: ['<i>De Architectura</i> (The Ten Books on Architecture)', 'A basilica at Fano (now lost)'], link: 'https://en.wikipedia.org/wiki/Vitruvius' },
          { name: 'Marcus Agrippa (c. 63–12 BC)', what: 'Augustus\'s great general and son-in-law — the patron, not the designer, who funded the first Pantheon, the Aqua Virgo aqueduct, and Rome\'s first great public baths. His name still stands on the Pantheon from that earlier building.',
            works: ['The first Pantheon (his name survives on it)', 'The Aqua Virgo aqueduct', 'The Baths of Agrippa'], link: 'https://en.wikipedia.org/wiki/Marcus_Vipsanius_Agrippa' },
          { name: 'The emperor Hadrian (76–138 AD)', portrait: 'assets/detail/portrait-hadrian.jpg', what: 'The patron under whom the Pantheon was rebuilt in its surviving form and Hadrian\'s Villa was raised. He is often called its designer — but no ancient source names the architect, so that is an informed guess, not a fact.',
            works: ['The Pantheon, in its surviving form', 'Hadrian\'s Villa at Tivoli', 'The Temple of Venus and Roma'], link: 'https://en.wikipedia.org/wiki/Hadrian' },
          { name: 'Apollodorus of Damascus (early 2nd c. AD)', what: 'Trajan\'s brilliant Greek engineer, designer of the Forum of Trajan and the great bridge over the Danube. The ancient story that Hadrian had him executed for insolence is doubted by most historians.',
            works: ['The Forum of Trajan', 'The great bridge over the Danube', 'Trajan\'s Column (attributed)'], link: 'https://en.wikipedia.org/wiki/Apollodorus_of_Damascus' }
        ]
      }
    }
  },
  {
    id: 'renaissance',
    image: 'assets/styles/renaissance.jpg',
    name: 'Renaissance',
    short: 'Antiquity reborn',
    tagline: 'Italy rediscovers Rome — order, harmony, the human measure',
    group: 'The Styles',
    color: '#C08A2E', colorDeep: '#8A5F16', colorSoft: '#F5E9CE',
    icon: 'dome',
    blurb: 'The Renaissance was the deliberate rebirth of classical architecture in fifteenth- and sixteenth-century Italy. Scholars recovered Vitruvius, architects measured the Roman ruins first-hand, and a new kind of designer — the learned scholar-artist — set out to build again in the language of antiquity: rationally, harmoniously, and to the measure of man. It is the moment the classical tradition became self-conscious, and it set the course of Western building for the next five hundred years.',
    sections: {
      'what-it-is': {
        title: 'What Renaissance architecture is',
        intro: 'Renaissance architecture is classical architecture recovered by study. Where the medieval mason worked by inherited craft, the Renaissance architect was a scholar-artist who read Vitruvius, measured the Roman ruins, and designed by reasoned proportion — treating building as a liberal art, and antiquity as a school to be learned from the ground up.',
        principles: [
          { name: 'The recovery of antiquity', image: 'assets/detail/roman-forum.jpg', caption: 'The ruins of Rome — the school the Renaissance measured itself from, stone by stone.', body: 'The one surviving ancient treatise, Vitruvius, had been known but garbled through the Middle Ages; in 1416 the humanist Poggio Bracciolini found a good old copy in the abbey of St Gall, and it was studied in Florence. At the same time architects went to Rome to measure the actual ruins — arches, temples, the Pantheon — first-hand.', why: 'It means the style was recovered by reading and measuring, not by copying the recent past. Architecture became evidence-based: you went to the source, the antique building itself, and worked out its rules.' },
          { name: 'The architect as scholar-artist', image: 'assets/detail/portrait-alberti.jpg', caption: 'Leon Battista Alberti (self-portrait medal) — the humanist who wrote the theory and left the building to master-masons.', body: 'A genuinely new idea: the designer as a learned individual practising a liberal art, not the anonymous collective of the medieval mason\'s lodge. Leon Battista Alberti is the emblem — a humanist who wrote the theory and supplied designs, leaving the stone-cutting to master-masons.', why: 'It is why buildings now carry a name and express one educated mind, why the drawing and the model came to rule the site, and why "architecture" joined the intellectual disciplines. Our whole idea of "the architect" begins here.' },
          { name: 'Proportion, mathematics and perspective', image: 'assets/elements/proportion.jpg', caption: 'Vitruvian Man — the well-formed body set in a circle and a square, drawn by Leonardo.', body: 'Beauty was held to arise from commensurable, whole-number ratios governing plan and elevation, on a rational human-centred plan. Bound up with it was linear perspective, which Brunelleschi demonstrated around 1415 with a painted panel viewed through a peephole against a mirror — proving that space obeys mathematics.', why: 'Space, proportion and the drawing all became measurable and rule-governed — the calm rationality you feel in a Renaissance interior. (One honest caution: the strong claim, argued by Wittkower, that these ratios are literally musical harmonies has been challenged, and fits only some buildings.)' },
          { name: 'The centrally-planned church', image: 'assets/detail/ren-tempietto.jpg', caption: 'Bramante\'s Tempietto — the centralised ideal: a perfect circle of columns under a dome.', body: 'Theory prized the centralised plan — a circle, square or Greek cross under a dome — as the most perfect, God-like form. Its purest built statement is Bramante\'s tiny Tempietto in Rome (about 1502), a circular temple ringed by columns; his first plan for new St Peter\'s was a colossal Greek cross under one great dome.', why: 'It is geometry as theology — the "perfect" shapes made visible. It also sets up a permanent tension: the ideal circle versus the long nave a congregation needs, which is why St Peter\'s began central and ended as a Latin cross.' },
          { name: 'The dome reborn', image: 'assets/styles/renaissance.jpg', caption: 'Brunelleschi\'s dome of Florence — raised without a full timber centering, still the largest masonry dome in the world.', body: 'Brunelleschi\'s dome for Florence Cathedral (built 1420–36) reopened the age: an octagonal double shell raised without a full timber centering, held by self-keying herringbone brickwork and hidden tension chains. It is still the largest masonry dome in the world. A century later Michelangelo answered it with the dome of St Peter\'s.', why: 'It shows revival as real invention. Brunelleschi did not copy Rome — he out-engineered it. (Note the honest version: he built without a full internal falsework, not with "no scaffolding at all" — there were platforms, hoists and his famous lifting machines.)' },
          { name: 'The palazzo and the ordered façade', image: 'assets/detail/ren-palazzo.jpg', caption: 'Palazzo Rucellai — the Colosseum\'s stacked orders mapped onto a house as flat pilasters.', body: 'In the city the Renaissance created the classical street front. The Palazzo Medici stacks graded rustication — rough rock-faced stone below, smoother above, under a heavy cornice — while Alberti\'s Palazzo Rucellai maps the Colosseum\'s stacked orders onto a house as flat pilasters, storey by storey.', why: 'It carried classicism off the temple and onto the everyday street. The ordered, hierarchical urban façade we now take for granted — and imitated for four hundred years — is a Renaissance achievement.' },
          { name: 'Mannerism — bending the rules', image: 'assets/detail/ren-laurentian.jpg', caption: 'Michelangelo\'s Laurentian Library — the classical rules deliberately broken by a man who knew them cold.', body: 'Once the grammar was fully mastered, architects began to break it on purpose for expressive tension. Michelangelo is the pivot: his Laurentian Library in Florence recesses columns into the wall, sets brackets that support nothing, and pours a staircase into the room; Giulio Romano lets triglyphs "slip" as a learned joke.', why: 'It proves the rules had been completely internalised — you can only break the grammar knowingly once you know it cold. Mannerism is the bridge from the serene High Renaissance toward the drama of the Baroque.' }
        ]
      },
      'the-path': {
        title: 'Learning Renaissance architecture',
        intro: 'Begin in early Florence with the calm classical front, move to the theory and the applied orders, and finish in High-Renaissance Rome where the ideal is perfected and then knowingly broken.',
        heroImage: 'assets/detail/ren-stpeters.jpg',
        heroCaption: 'The dome of St Peter\'s — the summit of the High Renaissance, and the goal to work toward.',
        levels: [
          { stage: 'Beginner — the classical front (Florence)', items: [
            'Learn the five orders as vocabulary, and the big shift: round arch, column, symmetry and proportion, in reaction to Gothic points and verticality.',
            'Study Brunelleschi\'s Ospedale degli Innocenti (begun 1419) — the first calm Renaissance loggia of round arches on slender columns.',
            'Read a rusticated palazzo (Palazzo Medici) from the ground up: rough base, smoother top, crowning cornice.'
          ] },
          { stage: 'Intermediate — proportion and the orders', items: [
            'Spot Alberti\'s superimposed pilaster orders on the Palazzo Rucellai — the façade as a grid.',
            'Study Alberti\'s church fronts — Santa Maria Novella and Sant\'Andrea in Mantua — where a temple front and triumphal arch are applied to a church.',
            'Learn the harmonic-ratio idea, and the perspective story (Brunelleschi\'s demonstration, Alberti\'s writing).'
          ] },
          { stage: 'Advanced — the High Renaissance and Mannerism (Rome)', items: [
            'Study Bramante\'s Tempietto (the centralised ideal in miniature) and his Greek-cross plan for St Peter\'s.',
            'Follow Michelangelo — the dome of St Peter\'s, the Campidoglio, and the Laurentian Library as the doorway to Mannerism.',
            'Finish with Mannerism proper (Giulio Romano) and the turn toward Palladio and the Baroque.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Renaissance front is all around us in later imitation. A few things to actually do.',
        heroImage: 'assets/detail/ren-palazzo.jpg',
        heroCaption: 'A Renaissance palazzo — start here: read the rustication and the applied orders.',
        items: [
          { name: 'Read the rustication gradient', body: 'On a palazzo or a bank, check whether the ground floor is rough rock-faced stone and the upper floors get smoother — that heavy-to-light stacking under a strong cornice is the Renaissance signature.' },
          { name: 'Spot applied superimposed orders', body: 'Look for flat pilasters dividing a façade into a grid, changing order storey by storey (Tuscan, then Ionic, then Corinthian). Ask: are they carrying anything, or mapping the classical system as decoration? Usually the latter.' },
          { name: 'Central or longitudinal?', body: 'Standing at a church door, ask: does the space radiate equally around a central point under a dome, or pull you down a long nave to an altar? Note the ones, like St Peter\'s, that try to be both.' },
          { name: 'Compare a dome to the Pantheon', body: 'Set a Renaissance dome against the Pantheon: pointed, double-shelled, ribbed brick (Florence) versus a single coffered concrete shell with an open oculus (Rome). The profile and the material tell the story.' },
          { name: 'Read a pedimented window', body: 'Find windows framed by little columns carrying a triangular or segmental pediment — a miniature temple front on an opening. Alternating triangular and segmental pediments in a row is a Mannerist move.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Renaissance wrote its own theory — go to the treatises (with honest difficulty notes), then the best modern historians.',
        heroImage: 'assets/detail/ren-vasari.jpg',
        heroCaption: 'Vasari\'s Lives of the Artists — the contemporary insider on the architects, and the origin of the word "Renaissance".',
        books: [
          { title: 'On the Art of Building in Ten Books', author: 'Leon Battista Alberti, c. 1450 (printed 1485)', note: 'PRIMARY. The first modern architectural treatise, modelled on Vitruvius, and the source of "concinnitas" (beauty as harmony). Dense — read Books VI and IX on beauty rather than cover to cover. The Rykwert–Leach–Tavernor MIT edition is standard.' },
          { title: 'Sebastiano Serlio on Architecture', author: 'Serlio, books from 1537 (Hart & Hicks, Yale)', note: 'PRIMARY. The first practical, illustrated rulebook of the five orders — browse the plates even if you never read it through. It spread the style across Europe.' },
          { title: 'Lives of the Most Excellent Painters, Sculptors and Architects', author: 'Giorgio Vasari, 1550 / 1568', note: 'PRIMARY. The contemporary insider on the architects — and the origin of the "rebirth" idea. Readable but Florence-biased and fond of legend, so enjoy the flavour and verify the facts. Free online.' },
          { title: 'The Architecture of the Italian Renaissance', author: 'Peter Murray', note: 'ON-RAMP. The best single-volume introduction, clear and well-illustrated. Start here.' },
          { title: 'Brunelleschi\'s Dome', author: 'Ross King, 2000', note: 'ON-RAMP. A gripping popular narrative of how the Florence dome was raised. Engaging; cross-check the finer technical claims.' },
          { title: 'Architectural Principles in the Age of Humanism', author: 'Rudolf Wittkower, 1949', note: 'ON-RAMP (harder). The famous study of Renaissance proportion and the central plan — brilliant, but its musical-ratio thesis is contested, so read the critiques alongside.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The founders of the whole modern tradition — and the layered authorship shows how the age worked, one hand taking over from the last.',
        figures: [
          { name: 'Filippo Brunelleschi (1377–1446)', portrait: 'assets/detail/portrait-brunelleschi.jpg', what: 'Solved the dome of Florence, built the serene Ospedale degli Innocenti, and demonstrated linear perspective. The age begins with him.',
            works: ['The dome of Florence Cathedral', 'The Ospedale degli Innocenti', 'Demonstrated linear perspective'], link: 'https://en.wikipedia.org/wiki/Filippo_Brunelleschi' },
          { name: 'Leon Battista Alberti (1404–1472)', portrait: 'assets/detail/portrait-alberti.jpg', what: 'The scholar-architect: author of On the Art of Building, and designer of the Palazzo Rucellai and Santa Maria Novella façades and Sant\'Andrea in Mantua. He supplied the designs and left the building to master-masons.',
            works: ['<i>On the Art of Building</i> (De re aedificatoria)', 'The Palazzo Rucellai & Santa Maria Novella façades', 'Sant\'Andrea, Mantua'], link: 'https://en.wikipedia.org/wiki/Leon_Battista_Alberti' },
          { name: 'Michelozzo (1396–1472)', what: 'The Medici\'s architect, whose Palazzo Medici set the model for the rusticated Renaissance town palace.',
            works: ['The Palazzo Medici Riccardi, Florence'], link: 'https://en.wikipedia.org/wiki/Michelozzo' },
          { name: 'Donato Bramante (c. 1444–1514)', portrait: 'assets/detail/portrait-bramante.jpg', what: 'Who founded the High Renaissance in Rome with the perfect little Tempietto and the first, Greek-cross plan for new St Peter\'s.',
            works: ['The Tempietto, Rome', 'The first plan for new St Peter\'s'], link: 'https://en.wikipedia.org/wiki/Donato_Bramante' },
          { name: 'Michelangelo (1475–1564)', portrait: 'assets/detail/portrait-michelangelo.jpg', what: 'Sculptor-architect of the dome of St Peter\'s and the Campidoglio, and of the Laurentian Library that opened Mannerism and pointed toward the Baroque.',
            works: ['The dome of St Peter\'s', 'The Laurentian Library', 'The Campidoglio'], link: 'https://en.wikipedia.org/wiki/Michelangelo' }
        ]
      }
    }
  },
  {
    id: 'palladian',
    image: 'assets/styles/palladian.jpg',
    name: 'Palladian',
    short: 'The villa and the estate',
    tagline: 'Palladio\'s harmony — the root of the country house',
    group: 'The Styles',
    color: '#2F9E77', colorDeep: '#1F6B52', colorSoft: '#DDF1E8',
    icon: 'temple',
    blurb: 'Palladianism is the style built on the work of one man — Andrea Palladio, the sixteenth-century architect of the Veneto whose villas, churches and treatise became the most imitated model in architectural history. Calm, symmetrical, temple-fronted and governed by proportion, his manner spread through England, Ireland and America to become the classic form of the country house and the grand estate. Its great engine was not travel but a book: the Four Books of Architecture, a printed pattern any gentleman could copy without ever seeing Italy.',
    sections: {
      'what-it-is': {
        title: 'What Palladian architecture is',
        intro: 'Palladian architecture applies the harmony and orders of Rome to the ordinary business of living — above all the country villa. Its hallmarks are strict symmetry about a central axis, harmonic room proportions, a temple-front portico, and a plain, serene surface where nothing is arbitrary. It began on the working farms of the Venetian mainland and, through Palladio\'s book, became a language spoken across the world.',
        principles: [
          { name: 'Symmetry and the central axis', image: 'assets/styles/palladian.jpg', caption: 'Chiswick House — a central block balanced by matching wings about one axis.', body: 'A Palladian building is organised around one dominant central axis: a taller main block in the middle — usually crowned by a pediment or a dome — with matching wings extending symmetrically on either side, so the left half mirrors the right. Service ranges are often swept out on colonnades to frame the whole.', why: 'This "central block and balanced wings" massing is the DNA of the grand country house, and of the banks, museums and capitols that borrowed from it. Symmetry reads instantly as order, calm and authority.' },
          { name: 'The temple front on a house', image: 'assets/detail/pall-templefront.jpg', caption: 'A columned, pedimented temple front lent to a private house.', body: 'Palladio put the columned, pedimented front of a Greek or Roman temple onto the entrance of a private house, lending a home the gravity of a sacred building. It became his signature and the single most-copied classical motif.', why: 'It is the birth of the country house as we know it. There is a lovely twist, though: Palladio wrongly believed ancient Roman houses had temple porticoes — the pedimented front was really a temple form. The whole fashion for columned house-fronts grew from that productive mistake.' },
          { name: 'The villa as a working farm', image: 'assets/detail/pall-farm.jpg', caption: 'Villa Barbaro at Maser — the owner\'s block at the centre, working farm wings sweeping out on either side.', body: 'The Veneto villas were not idle pleasure-houses but the residential and administrative centres of working agricultural estates. The owner\'s block stood in the middle; long arcaded farm wings, the barchesse, held the stables, barns, granaries and wine-rooms, often with a dovecote at the end.', why: 'It corrects the usual myth — and explains the shape. The wide, symmetrical layout of the great estate, dignified centre and working wings, comes directly from the logic of a farm, not from decoration.' },
          { name: 'Harmonic proportion', body: 'In the Four Books Palladio names his most beautiful room shapes — the circle, the square, the square-and-a-half, and whole-number rectangles like 4:3, 3:2, 5:3 and the double square — and sets a room\'s height by proportional means, so every dimension answers to the others.', why: 'It is why Palladian rooms feel so composed — a tuned system rather than free choice. (One honest caution: the famous idea, argued by Wittkower, that these are literally musical harmonies frozen in stone is much debated; Palladio favoured small whole-number ratios that overlap with musical ones, but the strict "buildings as music" reading is contested.)' },
          { name: 'The Villa Rotonda', image: 'assets/elements/building-types.jpg', caption: 'The Villa Rotonda — four identical temple fronts around a central domed hall.', body: 'His purest statement: the Villa Almerico Capra, "La Rotonda", outside Vicenza — a square block with four identical temple-fronted porticoes, one on each face, around a central domed hall, so it shows the same serene face in every direction. Begun 1567, it was finished after his death by Scamozzi, who built a lower dome than Palladio had drawn.', why: 'It is the ideal Palladian building — symmetry, centrality, temple front and geometry perfected — and the single most imitated house in the world, copied directly at Mereworth and Chiswick and echoed at Jefferson\'s Monticello.' },
          { name: 'The Palladian window', image: 'assets/detail/pall-window.jpg', caption: 'A Palladian (Venetian) window — an arched centre flanked by two flat-topped side lights.', body: 'A three-part opening: a round-arched central light flanked by two shorter, flat-topped side lights, the arch springing from small columns. Palladio used it so famously — above all in the arcades of the Basilica at Vicenza — that it took his name.', why: 'It is one of the highest-value things to learn to spot; once you know it you will see it on Georgian houses everywhere. And it carries a lesson: the motif is older than Palladio — Roman arches used it, Bramante used it, Serlio published it (the "Serliana") — a reminder that the famous name is not always the inventor.' },
          { name: 'A temple front for a church', image: 'assets/detail/pall-church.jpg', caption: 'San Giorgio Maggiore — two interlocking temple fronts fitted over a church\'s nave and aisles.', body: 'In his Venetian churches — San Giorgio Maggiore and Il Redentore — Palladio solved a hard problem: a Roman temple front is one triangle, but a church has a tall central nave and lower side aisles. His answer was to interlock two temple fronts, a tall narrow one over the nave and a lower, split one behind for the aisles, so a stepped church reads as a single unified temple.', why: 'It shows Palladio as a problem-solver, not a copyist, and it became the standard model for classical church façades for centuries afterward.' },
          { name: 'The book that built a style', image: 'assets/daily/passage.jpg', caption: 'The Four Books of Architecture (1570) — the printed pattern-book that carried Palladio across the world.', body: 'The Four Books of Architecture (Venice, 1570), illustrated with woodcuts from his own measured drawings, was a printed pattern-book: materials and the orders, then his houses with their plans, then public works, then the ancient temples. Any literate builder could copy it.', why: 'This is why Palladianism became a world style while other Renaissance masters stayed local. The book, as much as the buildings, is the engine — the first architecture designed to be reproduced from print.' }
        ]
      },
      'the-path': {
        title: 'Learning the Palladian',
        intro: 'Palladio is best learned from three shapes, then his logic, then his own book and the churches — and finally by tracing the style out into the country houses near you.',
        heroImage: 'assets/detail/pall-house.jpg',
        heroCaption: 'An English Palladian country house — Palladio\'s manner carried to Britain, and then across the world.',
        levels: [
          { stage: 'Beginner — see the composition', items: [
            'Learn three shapes only: the central block with balanced wings; the temple-front portico; the Palladian (Venetian) window.',
            'Anchor on the Villa Rotonda — four identical temple fronts, one dome, total symmetry. Everything else is a variation.',
            'Find a grand country house near you and pick out the central axis and the pediment.'
          ] },
          { stage: 'Intermediate — the logic', items: [
            'Learn the villa-farm idea (the barchesse) — that the wide symmetrical layout came from a working estate.',
            'Learn the seven room shapes and the musical-ratio claim — and that its strict form is disputed.',
            'Trace the spread: Palladio to Inigo Jones, to Burlington\'s Chiswick and Campbell\'s Mereworth, to Jefferson\'s Monticello.'
          ] },
          { stage: 'Advanced — the treatise and the debates', items: [
            'Read the Four Books themselves (Ware\'s 1738 English text is free online) — the plans and the orders in his own words.',
            'Study the Venetian churches and the interlocking-pediments solution.',
            'Engage the disputes: the Wittkower proportion controversy, and how accurate Palladio\'s measurements of Roman ruins really were.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Palladian is the style you are most likely to be able to visit in person. A few things to do.',
        heroImage: 'assets/elements/building-types.jpg',
        heroCaption: 'The Villa Rotonda — the model against which to read every Palladian house you visit.',
        items: [
          { name: 'Visit a country house', body: 'Most grand estates open to the public are Palladian or Palladian-descended. Go, and consciously read it: walk the central axis and watch the plan balance left and right.' },
          { name: 'Find the central axis', body: 'Stand square-on to the front, locate the middle (usually the door or portico), and check that the left half mirrors the right — same windows, same spacing. Note where later additions break the symmetry.' },
          { name: 'Read the portico', body: 'Before a temple-fronted house, name the order, count the columns, and find the pediment — and remember you are looking at a temple front on a home.' },
          { name: 'Spot a Palladian window', body: 'Hunt for the three-part window: arched centre, two flat-topped sides. Georgian houses, libraries and country churches are full of them. Once you know it, you cannot stop seeing it.' },
          { name: 'Trace the wings', body: 'Pick out the central block and its flanking wings, and ask what the wings were for — stables, service, a farm origin. The estate\'s working past is written in its shape.' },
          { name: 'Compare a copy to the Rotonda', body: 'Photograph a domed, porticoed house and line it up against the Villa Rotonda to see exactly what was borrowed.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Go to Palladio\'s own book — few primary sources are so usable — then a warm modern guide, then the revival and the theory. Honest notes below.',
        heroImage: 'assets/detail/pall-plate.jpg',
        heroCaption: 'A villa plate from Palladio\'s Four Books — plan and elevation together, ready to copy.',
        books: [
          { title: 'The Four Books of Architecture', author: 'Andrea Palladio, Venice 1570', note: 'PRIMARY. The most influential architecture book ever printed, illustrated with his own designs. Dip into the plans and the room-proportion passages. Isaac Ware\'s 1738 English edition is free online; the modern Tavernor & Schofield translation (MIT, 1997) is the most accurate.' },
          { title: 'Vitruvius Britannicus', author: 'Colen Campbell, 1715–1725', note: 'PRIMARY (revival). The engraved survey of British classical houses that launched the English Palladian revival. A plate-book to browse, free in scans.' },
          { title: 'The Perfect House', author: 'Witold Rybczynski, 2002', note: 'ON-RAMP. A warm travel-narrative through the villas — the easiest and most enjoyable way in for a non-specialist. Start here.' },
          { title: 'Palladio', author: 'James S. Ackerman, 1966', note: 'ON-RAMP. The classic short scholarly introduction — clear, authoritative, the standard first serious book.' },
          { title: 'Palladio and Palladianism', author: 'Robert Tavernor, 1991', note: 'ON-RAMP. A concise survey of both Palladio and the later movement — good on the spread to England and America.' },
          { title: 'Architectural Principles in the Age of Humanism', author: 'Rudolf Wittkower, 1949', note: 'ON-RAMP (hardest). The source of the musical-proportion thesis. Read it for the argument — and read the modern critiques alongside, since the thesis is contested.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The one master, his patron, and the men who carried him across the world.',
        figures: [
          { name: 'Andrea Palladio (1508–1580)', portrait: 'assets/detail/portrait-palladio.jpg', what: 'Born Andrea di Pietro della Gondola, a stonemason from Padua, and renamed "Palladio" — after Pallas Athene, goddess of wisdom — by his patron, the humanist Trissino. His Veneto villas, his Vicenza buildings, his Venetian churches and his Four Books founded the style and reshaped Western domestic architecture.',
            works: ['<i>The Four Books of Architecture</i> (1570)', 'The Villa Rotonda, Vicenza', 'San Giorgio Maggiore & Il Redentore, Venice'], link: 'https://en.wikipedia.org/wiki/Andrea_Palladio' },
          { name: 'Daniele Barbaro (1514–1570)', what: 'Venetian aristocrat and scholar, Palladio\'s mentor and patron, whose great edition of Vitruvius Palladio illustrated — and who, with his brother, built the Villa Barbaro at Maser.',
            works: ['His illustrated edition of Vitruvius (1556)', 'The Villa Barbaro at Maser (with Palladio)'], link: 'https://en.wikipedia.org/wiki/Daniele_Barbaro' },
          { name: 'Inigo Jones (1573–1652)', portrait: 'assets/detail/portrait-inigojones.jpg', what: 'Who brought true Palladianism to England after studying the buildings in Italy — the Queen\'s House at Greenwich and the Banqueting House in Whitehall.',
            works: ['The Queen\'s House, Greenwich', 'The Banqueting House, Whitehall'], link: 'https://en.wikipedia.org/wiki/Inigo_Jones' },
          { name: 'Lord Burlington & Colen Campbell', what: 'The leaders of the 18th-century English revival: Burlington (1694–1753), the "Architect Earl", built Chiswick House on the Rotonda\'s model; Campbell (1676–1729) produced Vitruvius Britannicus and copied the Rotonda at Mereworth.',
            works: ['Chiswick House (Burlington)', '<i>Vitruvius Britannicus</i> & Mereworth Castle (Campbell)'], link: 'https://en.wikipedia.org/wiki/Richard_Boyle,_3rd_Earl_of_Burlington' },
          { name: 'Thomas Jefferson (1743–1826)', portrait: 'assets/detail/portrait-jefferson.jpg', what: 'Who made Palladio the architecture of the young American republic at Monticello and the Virginia State Capitol. He is often said to have treated the Four Books as his architectural "bible" — a nice line, though not traceable to a documented quotation.',
            works: ['Monticello', 'The Virginia State Capitol', 'The University of Virginia'], link: 'https://en.wikipedia.org/wiki/Thomas_Jefferson' }
        ]
      }
    }
  },
  {
    id: 'baroque',
    image: 'assets/styles/baroque.jpg',
    name: 'Baroque',
    short: 'Drama and movement',
    tagline: 'The classical language set in motion — grandeur and theatre',
    group: 'The Styles',
    color: '#A23B5A', colorDeep: '#6E2540', colorSoft: '#F3DAE2',
    icon: 'dome',
    blurb: 'The Baroque is the classical language made dramatic. Beginning in seventeenth-century Rome, architects kept the orders and proportions but bent them toward movement, emotion and spectacle — curved walls, oval domes, sweeping colonnades and floods of hidden light. It is classicism as theatre, built to move the beholder and to overwhelm. (The name itself began as an insult — probably from the Portuguese for a misshapen pearl — a mockery of art thought excessive; the architects never called their work "Baroque".)',
    sections: {
      'what-it-is': {
        title: 'What Baroque architecture is',
        intro: 'Baroque architecture uses the whole classical vocabulary but sets it in motion. Straight walls curve, façades advance and recede, columns cluster and project, and space, light and ornament are orchestrated for a single powerful effect. Where the Renaissance sought repose and balance, the Baroque seeks movement and drama — and it does so for a reason: to move the heart.',
        principles: [
          { name: 'Movement and the curved wall', image: 'assets/detail/bar-sancarlo.jpg', caption: 'Borromini\'s San Carlo alle Quattro Fontane — the front wall waving in and out like a curtain.', body: 'The defining Baroque move: the wall stops being a flat plane and begins to undulate. Façades ripple in and out — convex bulging toward you, concave scooping away — and plans and domes become ovals and complex figures instead of the calm Renaissance circle and square. The touchstone is Borromini\'s tiny San Carlo alle Quattro Fontane, whose front waves like a curtain.', why: 'It is the fastest way to tell Baroque from Renaissance. A Renaissance front is a grid at rest; a Baroque one looks alive, caught mid-motion. Once you can see the wall "breathing", you have the whole style.' },
          { name: 'Theatre, emotion and the Counter-Reformation', image: 'assets/detail/bar-gesu.jpg', caption: 'A Baroque church ceiling dissolving into painted heaven — architecture built to overwhelm and move.', body: 'The Baroque was born as the visual language of the Catholic Church answering the Reformation. The Council of Trent reaffirmed that sacred images belonged in churches — to teach and to move worshippers to devotion — and architects turned that charge into buildings designed to overwhelm the senses and stir the heart.', why: 'It explains why the style exists. The Baroque is not just ornate Renaissance; every device — light, motion, gilding — is aimed at persuasion and awe. Knowing the purpose lets you read the intention behind the drama.' },
          { name: 'The fusion of the arts', image: 'assets/detail/bar-cornaro.jpg', caption: 'Bernini\'s Cornaro Chapel — architecture, sculpture, painting and hidden light fused into one staged vision.', body: 'Architecture, sculpture and painting are merged into one seamless effect, so you cannot tell where one art ends and the next begins — what scholars call Bernini\'s bel composto, the "beautiful whole". His Cornaro Chapel, framing the Ecstasy of Saint Teresa, stages architecture, hidden light, gilded rays, painted ceiling and marble "theatre boxes" as a single vision.', why: 'It changes how you look. A Baroque interior is not a room full of separate objects but one designed experience — a total work of art meant to be felt all at once.' },
          { name: 'Light as a building material', image: 'assets/detail/bar-cathedra.jpg', caption: 'Bernini\'s Cathedra Petri — light appears to burst from the Holy Spirit through a hidden yellow-glass window.', body: 'Baroque architects sculpt daylight. Windows are hidden from view so light seems to pour from a mysterious, divine source, and gilded surfaces catch and throw it. Over the Ecstasy of St Teresa a concealed window sends light down bronze rays; behind the Cathedra Petri in St Peter\'s, a window of yellow glass makes light appear to burst from the Holy Spirit.', why: 'Light is invisible until it strikes something — so the key question in any Baroque interior is "where is this glow coming from, and why can\'t I see the window?" Answer it and you have found the machinery of the miracle.' },
          { name: 'The giant order and monumental scale', body: 'The Baroque loves the giant, or colossal, order — columns and pilasters that rise through two or more storeys in a single sweep — and sheer bigness as a rhetorical device: scale that dwarfs the visitor and proclaims the power of Church or Crown.', why: 'It marks the difference from the human-scaled, storey-by-storey rhythm of much Renaissance work. Learning to spot the order that spans the whole height lets you read ambition and power directly in the stone.' },
          { name: 'The grand ensemble', image: 'assets/styles/baroque.jpg', caption: 'Bernini\'s colonnade — the "maternal arms" reaching out from St Peter\'s to gather the crowd.', body: 'The Baroque thinks beyond the single building to the whole setting — squares, avenues, gardens and sightlines. Bernini\'s oval colonnade reaches out from St Peter\'s to gather the crowd; he said the mother church of all churches needed a portico that gave "an open-armed, maternal welcome" to the faithful. At Versailles, Louis XIV\'s architects ordered a whole landscape into one axial system.', why: 'Baroque space is choreographed: the building stage-manages how you approach and what you feel. It is the seed of modern axial town planning — architecture that arranges the world around itself.' },
          { name: 'Rich materials and dynamic ornament', image: 'assets/detail/bar-baldacchino.jpg', caption: 'Bernini\'s Baldacchino — twisting Solomonic columns of bronze, the icon of Baroque material spectacle.', body: 'Coloured marbles, gilt bronze, stucco and deep undercut carving make surfaces of shifting richness, and the ornament itself is restless — broken pediments, scrolls, cartouches, swags. Bernini\'s Baldacchino over the high altar of St Peter\'s, with its twisting Solomonic columns, is the icon of this material spectacle.', why: 'Ornament here is not decoration for its own sake but energy made solid — motion frozen in bronze and marble, reinforcing the sense of a building in movement.' },
          { name: 'The English Baroque — a soberer strand', image: 'assets/detail/bar-stpauls.jpg', caption: 'Wren\'s St Paul\'s Cathedral — the English Baroque: grandeur and mass over swirling emotion.', body: 'England came to the Baroque late and kept it restrained: less swirling emotion, more grandeur and mass. Wren rebuilt St Paul\'s and the City churches after the Great Fire of 1666; Vanbrugh and Hawksmoor raised the massive, dramatic Blenheim Palace and Castle Howard.', why: 'It proves the Baroque is not one thing. Setting Roman exuberance beside English weight — and beside the light, dancing Rococo of the German churches — teaches you to read regional temperament in architecture.' }
        ]
      },
      'the-path': {
        title: 'Learning the Baroque',
        intro: 'Feel the motion and the drama first, then learn to name the devices, then follow the style out of Rome across Europe.',
        heroImage: 'assets/detail/bar-gesu.jpg',
        heroCaption: 'A Baroque church interior — absorb the overwhelming whole before you start naming its parts.',
        levels: [
          { stage: 'Beginner — see the motion, feel the drama', items: [
            'Learn the one big contrast: Renaissance is calm and balanced; Baroque is moving and emotional (this is exactly Wölfflin\'s method).',
            'Look at one curving façade — Borromini\'s San Carlo alle Quattro Fontane — and watch the wall wave in and out.',
            'Absorb one theatrical interior — Bernini\'s Cornaro Chapel with the Ecstasy of St Teresa — as a whole before analysing it.',
            'Learn the origin story: Counter-Reformation Rome, architecture built to move the faithful.'
          ] },
          { stage: 'Intermediate — name the devices', items: [
            'Tell convex from concave in a façade, and find an oval plan or dome (Bernini\'s Sant\'Andrea al Quirinale).',
            'Trace concealed light: find the hidden window behind a glowing altar.',
            'Recognise the giant order and the twisting Solomonic column of the Baldacchino.',
            'Meet the three Roman rivals — Bernini, Borromini and Pietro da Cortona — and start telling their temperaments apart.'
          ] },
          { stage: 'Advanced — the regions and the geometry', items: [
            'Follow the style out of Rome: Guarini\'s dizzying rib-domes in Turin, and the Central-European Baroque and Rococo of Balthasar Neumann.',
            'Contrast the sober English Baroque (Wren, Vanbrugh, Hawksmoor) with Roman exuberance.',
            'Read the Baroque-to-Rococo transition and argue where the line falls — scholars still do.',
            'Go to the two contemporary lives of Bernini to hear how the age itself spoke of its greatest architect.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Baroque is best learned by chasing its effects. A few things to actually do.',
        heroImage: 'assets/detail/bar-sancarlo.jpg',
        heroCaption: 'San Carlo\'s undulating front — the first thing to learn to spot: the wall that moves.',
        items: [
          { name: 'Spot the undulating wall', body: 'Trace a façade left to right and ask whether it bulges toward you (convex) then scoops away (concave). If the wall waves, you are looking at the Baroque.' },
          { name: 'Find an oval', body: 'Look for oval plans and oval domes in place of the Renaissance circle or square — a clean example is Bernini\'s Sant\'Andrea al Quirinale.' },
          { name: 'Trace the hidden light', body: 'In a glowing chapel, hunt for the light source. If the altar shines but you cannot see the window, you have found a Baroque light-well doing its theatrical work.' },
          { name: 'Read the interior as theatre', body: 'Ask where the "stage" is, where the audience would sit, and where the sculpted "cast" appears. The Cornaro Chapel is literally built as a theatre with opera boxes.' },
          { name: 'Recognise the giant order', body: 'Count the storeys, then check whether a single column or pilaster runs unbroken through two or more of them. One order spanning the whole height is the giant order.' },
          { name: 'Compare calm with restless', body: 'Set a serene Renaissance front beside a Baroque one and name three visible differences. That side-by-side is Wölfflin\'s whole method in miniature.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Baroque built more than it wrote, so start with the two contemporary lives of Bernini, then the great modern historians. Honest notes below.',
        heroImage: 'assets/detail/portrait-bernini.jpg',
        heroCaption: 'Bernini in his own self-portrait — begin with the two contemporary lives written of him.',
        books: [
          { title: 'The Life of Gian Lorenzo Bernini', author: 'Domenico Bernini, c. 1713 (Mormando translation, 2011)', note: 'PRIMARY. The fuller, more intimate of the two contemporary lives, written by Bernini\'s son. Mormando\'s edition adds hundreds of clarifying notes.' },
          { title: 'The Life of Bernini', author: 'Filippo Baldinucci, 1682 (Enggass translation)', note: 'PRIMARY. The first stand-alone biography, begun while Bernini still lived — short and readable, but adulatory; read it as a period document.' },
          { title: 'Bernini: His Life and His Rome', author: 'Franco Mormando, 2011', note: 'ON-RAMP. A modern, very readable narrative biography — the easiest way into Bernini and his city.' },
          { title: 'Renaissance and Baroque', author: 'Heinrich Wölfflin, 1888', note: 'ON-RAMP. The foundational study that turned "Baroque" from an insult into a serious category, on the calm-versus-movement contrast. The German original is free online.' },
          { title: 'Art and Architecture in Italy 1600–1750', author: 'Rudolf Wittkower', note: 'ON-RAMP (demanding). The standard scholarly survey of the Italian Baroque, now revised into three volumes.' },
          { title: 'Architecture in Britain 1530–1830', author: 'John Summerson', note: 'ON-RAMP. The authoritative account of the English strand — Wren and the Baroque, Vanbrugh and Hawksmoor.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects who set the classical language in motion — the Roman rivals first, then the men who carried it across Europe.',
        figures: [
          { name: 'Gian Lorenzo Bernini (1598–1680)', portrait: 'assets/detail/portrait-bernini.jpg', what: 'The towering figure of the Roman Baroque — sculptor, architect and showman. The colonnade of St Peter\'s Square, the Baldacchino, the Cornaro Chapel and the Cathedra Petri, and the oval church of Sant\'Andrea al Quirinale. Master of the fusion of the arts.',
            works: ['The colonnade of St Peter\'s Square', 'The Baldacchino & Cathedra Petri', 'The Cornaro Chapel (Ecstasy of St Teresa)'], link: 'https://en.wikipedia.org/wiki/Gian_Lorenzo_Bernini' },
          { name: 'Francesco Borromini (1599–1667)', portrait: 'assets/detail/portrait-borromini.jpg', what: 'The master of the curved wall and of architecture built from geometry rather than the human body — San Carlo alle Quattro Fontane and Sant\'Ivo alla Sapienza. A tormented genius, Bernini\'s bitter rival, who died by his own sword.',
            works: ['San Carlo alle Quattro Fontane', 'Sant\'Ivo alla Sapienza'], link: 'https://en.wikipedia.org/wiki/Francesco_Borromini' },
          { name: 'Pietro da Cortona (1596–1669)', what: 'The great painter-architect of Baroque Rome, whose church of Santi Luca e Martina was among the first fully Baroque façades.',
            works: ['Santi Luca e Martina, Rome', 'The Allegory of Divine Providence (Palazzo Barberini ceiling)'], link: 'https://en.wikipedia.org/wiki/Pietro_da_Cortona' },
          { name: 'Guarino Guarini (1624–1683)', what: 'Priest, mathematician and architect in Turin, who built the most daring geometric domes of the age — interlacing rib-arches opening to the sky, as in the Chapel of the Holy Shroud.',
            works: ['The Chapel of the Holy Shroud, Turin', 'San Lorenzo, Turin'], link: 'https://en.wikipedia.org/wiki/Guarino_Guarini' },
          { name: 'Sir Christopher Wren (1632–1723)', portrait: 'assets/detail/portrait-wren.jpg', what: 'Astronomer turned architect and the leading figure of the English Baroque, who rebuilt St Paul\'s Cathedral and the City of London churches after the Great Fire. His epitaph there reads: "Reader, if you seek his monument, look around you."',
            works: ['St Paul\'s Cathedral', 'The City of London churches', 'The Sheldonian Theatre, Oxford'], link: 'https://en.wikipedia.org/wiki/Christopher_Wren' },
          { name: 'Vanbrugh & Hawksmoor', portrait: 'assets/detail/portrait-vanbrugh.jpg', what: 'The pair who brought the English Baroque to its massive climax — Blenheim Palace and Castle Howard — with Vanbrugh (1664–1726) the visionary and Hawksmoor (c. 1661–1736), Wren\'s former pupil, the technical master and builder of his own powerful London churches.',
            works: ['Blenheim Palace & Castle Howard', 'Hawksmoor\'s London churches (e.g. Christ Church, Spitalfields)'], link: 'https://en.wikipedia.org/wiki/John_Vanbrugh' }
        ]
      }
    }
  },
  {
    id: 'neoclassical',
    image: 'assets/styles/neoclassical.jpg',
    name: 'Neoclassical & Georgian',
    short: 'Restraint returns',
    tagline: 'Order, calm and correctness — the age of reason builds',
    group: 'The Styles',
    color: '#6B7A8F', colorDeep: '#45536A', colorSoft: '#E4E9F0',
    icon: 'column',
    blurb: 'In reaction to Baroque theatre and Rococo frivolity, the eighteenth century returned to the calm and correctness of antiquity. Neoclassicism prized restraint, clarity, symmetry and the orders used exactly as the ancients had used them — armed, for the first time, with real archaeological evidence. It is the classicism of the Enlightenment: elegant Georgian terraces, sober civic buildings, and refined interiors, and the everyday classical language of the modern city. (A word on labels: "Georgian" is the British period, 1714–1830, spanning both the earlier Palladian and the later Neoclassical phases; "Regency" is its late chapter; "Neoclassical" is the international style itself.)',
    sections: {
      'what-it-is': {
        title: 'What Neoclassical architecture is',
        intro: 'Neoclassicism sought to build with the purity the ancients were believed to have possessed — clear geometry, correct orders, and restrained ornament — but now informed by the new science of archaeology rather than by Renaissance interpretation. It is the calm, rational classicism of the age of reason, and it became the natural language of the Enlightenment city and the new republics.',
        principles: [
          { name: 'A return to antique purity', image: 'assets/styles/neoclassical.jpg', caption: 'The Panthéon in Paris — cool, correct and calm after the drama of the Baroque.', body: 'By the mid-eighteenth century, educated taste turned hard against the movement, gilt and illusion of the Baroque and the light frivolity of the Rococo, and reached back for calm, clarity, symmetry and correctness — the orders used soberly and "by the book".', why: 'It reframes ornament as almost a moral question: restraint and reason read as virtue, excess as decadence. That shift in feeling is the engine of the whole style.' },
          { name: 'Archaeology as authority', image: 'assets/detail/neo-pompeii.jpg', caption: 'Pompeii, coming out of the ground — for the first time, real ancient rooms to measure and copy.', body: 'For the first time architects had accurate, measured evidence of antiquity. The buried Roman towns were dug — Herculaneum from 1738, Pompeii from 1748 — and Stuart and Revett surveyed Athens and published their measured Antiquities from 1762.', why: 'Design shifted from building "in the spirit of the antique" to copying the real, measured thing. The style is "neo"-classical precisely because its authority now came from the ground, not from Vitruvius or Palladio alone.' },
          { name: 'Noble simplicity and quiet grandeur', image: 'assets/detail/neo-apollo.jpg', caption: 'The Apollo Belvedere — the serene white-marble ideal Winckelmann prized (though the ancients painted their marbles).', body: 'The critic Winckelmann gave the movement its creed — edle Einfalt und stille Größe, "noble simplicity and quiet grandeur" — making a serene, restrained, white-marble Greece the standard of beauty, and shaping a whole generation\'s taste.', why: 'It is the aesthetic soul of the style. But it carries a famous error worth knowing: that pristine-white antiquity was partly an eighteenth-century preference. The ancients painted their temples and statues in strong colour; Winckelmann canonised a whiteness that was never quite real.' },
          { name: 'Reason and the primitive hut', image: 'assets/detail/neo-laugier.jpg', caption: 'Laugier\'s primitive hut — four tree-trunk columns, beams and a pediment: everything else is a fault.', body: 'The Abbé Laugier argued that all true architecture descends from the simplest natural structure — four tree-trunk columns carrying beams under a pitched, pediment-like roof. Column, entablature and pediment are essential and honest; pilasters, engaged columns and arches-on-columns are faults to be pruned away.', why: 'It gives Neoclassicism a rational test, not just a nostalgic one: is each part doing honest structural work? This "structural rationalism" runs on, remarkably, all the way to modernism.' },
          { name: 'The Georgian terrace, square and crescent', image: 'assets/detail/neo-crescent.jpg', caption: 'The Royal Crescent, Bath — thirty houses behind one unbroken sweep of 114 Ionic columns.', body: 'Britain\'s great contribution was less the single monument than the classically ordered street. The terrace, square and crescent applied one restrained, proportioned façade across many houses — Bath\'s Royal Crescent is thirty houses behind a single sweep of 114 Ionic columns; Edinburgh laid out a whole classical New Town.', why: 'It turned classicism into an urban system — beauty by uniformity and proportion at the scale of a city, not by individual show. It is why whole Georgian city centres still feel so harmonious.' },
          { name: 'The refined interior', image: 'assets/detail/neo-adam.jpg', caption: 'A Robert Adam interior — delicate plasterwork, urns and swags on pastel grounds, every part designed as one whole.', body: 'Robert Adam, with his brother James, created a delicate, unified interior style — low-relief plasterwork, arabesques, urns, swags and pastel grounds drawn from the newly excavated Roman rooms — designing every element, down to the carpets and door-handles, as one antique-inspired whole.', why: 'It shows the style was never only façades. The Adam interior is the intimate, elegant face of Neoclassicism, and proof that the classical language could govern a whole room, not just a front.' },
          { name: 'Pure geometry and the visionaries', image: 'assets/detail/neo-boullee.jpg', caption: 'Boullée\'s Cenotaph for Newton — a sphere some 150 metres high; pure geometry at overwhelming, unbuildable scale.', body: 'The French "visionaries" pushed reason to a sublime extreme — pure solids, spheres, cubes and endless colonnades at overwhelming scale. Boullée\'s vast spherical Cenotaph for Newton and Ledoux\'s work embody "architecture parlante", speaking architecture whose bare form declares its purpose.', why: 'It reveals the movement\'s other pole: not only archaeological correctness but abstract, awe-inducing geometry — an imaginative reach far beyond what could ever be built.' },
          { name: 'An international style of reason', body: 'Neoclassicism became the shared language of Enlightenment Europe and beyond — Britain, France, Schinkel\'s Prussia, imperial Russia, and the new United States, where Jefferson gave the young republic a temple-form Capitol.', why: 'The calm, rational classical vocabulary was adopted as the natural style for reason, civic virtue and new republics — which is exactly why so many parliaments, museums, banks and courthouses still look this way.' }
        ]
      },
      'the-path': {
        title: 'Learning the Neoclassical',
        intro: 'Learn to see calm and correctness first, then the reasoning and the interior, then the theory, the visionaries and the national schools.',
        heroImage: 'assets/detail/neo-crescent.jpg',
        heroCaption: 'The Royal Crescent, Bath — a whole city built to one calm classical pattern.',
        levels: [
          { stage: 'Beginner — see the calm', items: [
            'Learn the silhouette: rectilinear, symmetrical, low-key, with the temple-front portico as the signature move.',
            'Learn the three orders at a glance — Doric plain, Ionic scrolled, Corinthian leafy — enough to name a portico.',
            'Study the Royal Crescent in Bath and a Georgian terrace near you: is it symmetrical, is the ornament restrained, do the proportions repeat house to house?'
          ] },
          { stage: 'Intermediate — the reasoning and the room', items: [
            'Do the contrast drill: set a calm Neoclassical portico beside a restless Baroque façade and name the differences.',
            'Study an Adam interior (Syon, Osterley, Kedleston) as a single designed system.',
            'Learn the urban idea by comparing Bath with Edinburgh New Town — and meet Laugier\'s primitive hut as the "why".'
          ] },
          { stage: 'Advanced — theory, visionaries, nations', items: [
            'Read the theorists — Laugier and Winckelmann — and grasp archaeology-as-authority through Stuart and Revett.',
            'Study the French civic strand (Soufflot\'s Panthéon) and the visionary strand (Boullée and Ledoux).',
            'Study the national summits — Schinkel\'s Berlin and Soane\'s idiosyncratic classicism — then place the boundary with the Greek Revival (its own tile here).'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Neoclassicism built our city centres, so it is the easiest style to practise on. A few things to do.',
        heroImage: 'assets/detail/neo-adam.jpg',
        heroCaption: 'An Adam interior — look up: the whole environment, ceiling to floor, designed as one.',
        items: [
          { name: 'Read a Georgian terrace', body: 'Stand before one and check the uniform proportion: the same window rhythm, floor heights and cornice line running unbroken across many front doors. Notice the windows getting shorter floor by floor going up — the storey hierarchy.' },
          { name: 'Spot the correct, restrained order', body: 'Find the portico or pilasters, name the order, and note that it is used sparingly and by the book — no twisting, no piling-up. Restraint is the point.' },
          { name: 'Find an Adam interior', body: 'In a historic house, look up: fine low-relief ceilings with swags, urns and medallions on pastel grounds — and see how ceiling, walls, floor and furniture all rhyme.' },
          { name: 'Compare calm with restless', body: 'Put a Neoclassical portico beside a Baroque façade and tally the differences — straight lines versus curves, flat wall versus deep shadow, one clear order versus theatrical layering. This one drill teaches the whole reaction.' },
          { name: 'Recognise a Panthéon child', body: 'Learn the type — a great dome on a columned drum over a symmetrical, temple-fronted body — and then spot its descendants in civic domes, libraries and capitols.' },
          { name: 'Run the primitive-hut test', body: 'Ask of any classical building: are the columns, beams and pediment doing honest structural work, or merely stuck on? Laugier would approve of the first and frown at the second.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'This age argued sharply on paper and built our cities in stone — read the polemics (all free and public-domain), then the best surveys. Honest notes below.',
        heroImage: 'assets/detail/neo-laugier.jpg',
        heroCaption: 'Laugier\'s primitive-hut frontispiece — the image that argued a whole rational architecture.',
        books: [
          { title: 'An Essay on Architecture', author: 'Marc-Antoine Laugier, 1753 (2nd ed. 1755)', note: 'PRIMARY. The "primitive hut" argument for a rational, stripped classicism — short, vivid and hugely influential. The best single primary entry point; free online.' },
          { title: 'Reflections on the Imitation of Greek Works / History of the Art of Antiquity', author: 'J. J. Winckelmann, 1755 / 1764', note: 'PRIMARY. The source of "noble simplicity and quiet grandeur". The 1755 essay is short and quotable; the 1764 History is long and dense — dip rather than read through.' },
          { title: 'The Antiquities of Athens', author: 'Stuart & Revett, from 1762', note: 'PRIMARY. The accurate measured drawings that were the archaeological "evidence" itself. Browse the plates.' },
          { title: 'The Works in Architecture of Robert and James Adam', author: 'Robert & James Adam, 1773–1779', note: 'PRIMARY. The Adams presenting their own refined manner, room by room.' },
          { title: 'Neo-classicism', author: 'Hugh Honour, 1968', note: 'ON-RAMP. The best short thematic introduction to the whole movement. Start here.' },
          { title: 'Georgian London', author: 'John Summerson', note: 'ON-RAMP. The classic, delightful account of how Georgian classicism built a city — perfect for the terrace-and-square idea.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects of the age of reason, across its national schools.',
        figures: [
          { name: 'Robert Adam (1728–1792)', portrait: 'assets/detail/portrait-adam.jpg', what: 'Who, with his brother James, created the elegant, unified "Adam style" — his great interiors at Syon, Kedleston and Osterley are its intimate face.',
            works: ['Syon House, Kedleston Hall & Osterley Park', '<i>The Works in Architecture</i> (1773–79)'], link: 'https://en.wikipedia.org/wiki/Robert_Adam' },
          { name: 'Sir William Chambers (1723–1796)', what: 'Adam\'s soberer, more Franco-Roman rival, architect of Somerset House and author of an influential treatise on the orders.',
            works: ['Somerset House, London', '<i>A Treatise on Civil Architecture</i> (1759)'], link: 'https://en.wikipedia.org/wiki/William_Chambers_(architect)' },
          { name: 'Jacques-Germain Soufflot (1713–1780)', portrait: 'assets/detail/portrait-soufflot.jpg', what: 'Architect of the Panthéon in Paris (begun as the church of Sainte-Geneviève) — the great monument of French Neoclassicism, completed after his death.',
            works: ['The Panthéon, Paris (Sainte-Geneviève)'], link: 'https://en.wikipedia.org/wiki/Jacques-Germain_Soufflot' },
          { name: 'Boullée & Ledoux', what: 'The French visionaries: Étienne-Louis Boullée (1728–1799), of the colossal, unbuilt Cenotaph for Newton, and Claude-Nicolas Ledoux (1736–1806), of the Royal Saltworks — pioneers of pure geometry and "speaking architecture".',
            works: ['The Cenotaph for Newton (Boullée, unbuilt)', 'The Royal Saltworks at Arc-et-Senans (Ledoux)'], link: 'https://en.wikipedia.org/wiki/%C3%89tienne-Louis_Boull%C3%A9e' },
          { name: 'Sir John Soane (1753–1837)', portrait: 'assets/detail/portrait-soane.jpg', what: 'The idiosyncratic English master of a stripped, poetic classicism — the Bank of England (long since demolished) and his own house, now Sir John Soane\'s Museum.',
            works: ['The Bank of England (demolished)', 'Sir John Soane\'s Museum, London'], link: 'https://en.wikipedia.org/wiki/John_Soane' },
          { name: 'Karl Friedrich Schinkel (1781–1841)', portrait: 'assets/detail/portrait-schinkel.jpg', what: 'The summit of Prussian Neoclassicism, whose Altes Museum and theatre gave Berlin its serene classical face.',
            works: ['The Altes Museum, Berlin', 'The Schauspielhaus (Konzerthaus), Berlin'], link: 'https://en.wikipedia.org/wiki/Karl_Friedrich_Schinkel' }
        ]
      }
    }
  },
  {
    id: 'greek-revival',
    image: 'assets/styles/greek-revival.jpg',
    name: 'Greek Revival',
    short: 'The temple returns',
    tagline: 'Democracy and the Doric — the temple as a modern building',
    group: 'The Styles',
    color: '#4F6D7A', colorDeep: '#2F4550', colorSoft: '#E1E9EC',
    icon: 'temple',
    blurb: 'From the late eighteenth into the nineteenth century, the accurate rediscovery of Greek architecture inspired a full revival — real Greek temples, above all the sturdy baseless Doric, reborn as banks, museums, courthouses and homes. Charged with the ideals of democracy, liberty and pure taste, the Greek Revival gave the young United States and Britain some of their most dignified public buildings. (It is usually seen as the later, specifically-Greek and more archaeological phase of Neoclassicism — a convention rather than a hard line; see the Neoclassical tile.)',
    sections: {
      'what-it-is': {
        title: 'What the Greek Revival is',
        intro: 'The Greek Revival is the archaeologically-minded imitation of actual ancient Greek temple architecture — its true orders, its columned porticoes and pediments — applied to modern building types and freighted with the political ideals then attached to ancient Greece. It began the moment architects could measure Greece rather than merely imagine it.',
        principles: [
          { name: 'Measuring Greece, not imagining it', image: 'assets/detail/greek-antiquities.jpg', caption: 'A measured plate from Stuart & Revett\'s Antiquities of Athens — the exact drawings that made the revival possible.', body: 'Earlier classicism was Roman-derived and second-hand. The revival began when accurate measured drawings of real Greek buildings appeared — above all Stuart and Revett\'s Antiquities of Athens, from 1762 — backed by the sustained survey-and-publish effort of the Society of Dilettanti.', why: 'It is why this revival could be exact where earlier ones only evoked. Authority now came from the actual stones of Athens, put into architects\' hands, not from Vitruvius or Palladio.' },
          { name: 'The real Greek orders — the baseless Doric', image: 'assets/quiz/doric-capital.jpg', caption: 'Greek Doric — plain cushion capital, and (in the Greek form) no base at all: the revival\'s clearest field-mark.', body: 'The signature is the Greek Doric order: a sturdy, primitive-looking column with no base, its fluted shaft rising straight from the platform, the flutes meeting at sharp ridges. This contrasts sharply with Roman Doric, which stands on a base and is more slender.', why: 'That missing base is the single clearest field-mark of a true Greek Revival building. See it and you know the builder wanted Athens, not Rome — and the "primitive strength" of Greek Doric was prized as honest and manly.' },
          { name: 'The temple front for any building', image: 'assets/detail/gr-britishmuseum.jpg', caption: 'The British Museum — a Greek temple front stretched across a modern museum.', body: 'Revivalists took the ancient temple form — a columned portico crowned by a triangular pediment — and applied it to every serious modern type: banks, museums, courthouses, churches, universities, even farmhouses.', why: 'A religious form for a dead pagan cult became the default dress of seriousness for civic and commercial life. It is why so many old banks and courthouses are, quite literally, temples.' },
          { name: 'Politics in stone', image: 'assets/detail/gr-capitol.jpg', caption: 'The US Capitol — the young republic reaching for the architecture of the first democracy.', body: 'Ancient Greece stood for democracy, liberty and the cradle of the West, and the style carried that charge — sharpened by philhellenism and the Greek War of Independence (1821–1832), which made Greek forms feel like solidarity with a living fight for freedom.', why: 'It shows a style chosen as an argument. A Greek-fronted courthouse or capitol was making a claim about democratic legitimacy — which is exactly why it suited the young American republic and reforming British cities.' },
          { name: 'Correctness — and the colour it uncovered', image: 'assets/detail/polychromy.jpg', caption: 'A painted reconstruction — the revival\'s pursuit of accuracy uncovered that Greek temples were never white.', body: 'The revival prized archaeological accuracy, but accuracy cut against its own taste. From the 1820s scholars such as Hittorff argued, from surviving paint traces on Sicilian temples, that Greek temples had been brightly painted — overturning the serene white-marble ideal the revival loved.', why: 'It exposed a gap between the cool white Greece the age imagined and the gaudier ancient reality. The white stone we admire is a modern ideal, not what the Greeks actually built — the same correction that haunts the Greek tile.' },
          { name: 'America\'s near-national style', image: 'assets/detail/gr-secondbank.jpg', caption: 'The Second Bank of the United States — a marble Greek temple built to house a bank.', body: 'In the United States the Greek Revival became almost a national style from about 1820 to 1850 — state capitols, banks, courthouses, churches and Southern plantation houses — carried to ordinary carpenters by pattern books, and riding a wave of classical town names across the interior (Athens, Sparta, Ithaca, Syracuse).', why: 'It is why the American civic landscape is so full of white columns. A young republic reached for the architecture of the first democracy to give itself a face — and it stuck.' },
          { name: 'The limits of a temple', image: 'assets/detail/gr-walhalla.jpg', caption: 'Klenze\'s Walhalla — a full Parthenon transplanted to a hill above the Danube: the temple form pushed to its limit.', body: 'The style\'s strength was also its trap. Forcing a windowless temple form onto a working modern building — an office needing daylight, a bank needing security — was awkward, and Pugin attacked the misuse of pagan temples for Christian and everyday purposes.', why: 'It explains why the revival faded: one noble form could not bend to every use. That very rigidity helped provoke the Gothic Revival, which promised a more flexible, more "honest" and Christian alternative.' }
        ]
      },
      'the-path': {
        title: 'Learning the Greek Revival',
        intro: 'Learn one field-mark and the temple silhouette first, then the orders and the political reading, then the sources, the controversies and the great originals.',
        heroImage: 'assets/styles/greek-revival.jpg',
        heroCaption: 'A Greek Revival temple front — the whole silhouette to learn to spot on a modern street.',
        levels: [
          { stage: 'Beginner — the field-mark', items: [
            'Learn to see the pedimented portico — columns plus a triangular gable — as one recognisable shape.',
            'Learn the killer test: Greek Doric has NO base (shaft straight onto the platform); Roman Doric has one. Practise on photographs.',
            'Anchor on the Second Bank of the United States in Philadelphia — the first American building explicitly modelled on the Parthenon.'
          ] },
          { stage: 'Intermediate — orders, types, message', items: [
            'Tell the three revived Greek orders apart: baseless Doric, scrolled Ionic (the British Museum, the US Treasury), leafy Corinthian (Girard College).',
            'Learn the type-spread — bank, museum, courthouse, church, university, house — all in the same temple dress.',
            'Start reading the message: why the style of the first democracy suited banks and capitols. Anchors: the British Museum, Downing College, the Royal High School in Edinburgh.'
          ] },
          { stage: 'Advanced — sources, controversy, originality', items: [
            'Go to the primary source, Stuart and Revett, to see how measured drawings drove the whole revival.',
            'Engage the polychromy debate (Hittorff) and the tension between archaeology and the white-marble ideal.',
            'Study the critique — windowless temples for functional buildings, Pugin, the Gothic reaction — and then the great originals who pushed past copying: "Greek" Thomson in Glasgow, and Klenze\'s Walhalla, a full Parthenon on the Danube.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Greek Revival is on almost every old high street. A few things to actually do.',
        heroImage: 'assets/detail/gr-capitol.jpg',
        heroCaption: 'A Greek-columned capitol — ask what a building is claiming by dressing as a temple.',
        items: [
          { name: 'Check for the missing base', body: 'Find a fluted Doric column and look at the bottom: straight onto the platform means Greek, a ring-like base means Roman. This one check sorts most classical buildings at a glance.' },
          { name: 'Find a temple-fronted civic building', body: 'Hunt for a bank, county courthouse or nineteenth-century museum with a columned portico and pediment. These are the richest hunting grounds for the style.' },
          { name: 'Read the political message', body: 'Ask what a Greek-columned civic building is claiming by dressing as a temple — democratic legitimacy, permanence, seriousness. The columns are an argument.' },
          { name: 'Spot it on a house', body: 'Look for the columned porch and low-pitched pediment gable on nineteenth-century farmhouses and Southern plantation houses — the temple form come home.' },
          { name: 'Put the colour back', body: 'Remember the plain white stone is a modern ideal; look up a painted reconstruction of a Greek temple and notice how alien the real, coloured original looks against the "pure white" expectation.' },
          { name: 'Count and name the order', body: 'Count the columns and name the order — Doric, Ionic or Corinthian — to practise seeing exactly which Greek model a building is copying.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Begin with the archaeology that started it, then the standard histories of the British and American movements.',
        heroImage: 'assets/detail/greek-antiquities.jpg',
        heroCaption: 'Stuart & Revett\'s Antiquities of Athens — the measured drawings that armed the whole revival.',
        books: [
          { title: 'The Antiquities of Athens', author: 'Stuart & Revett, several volumes 1762–1816', note: 'PRIMARY. The measured-drawing sourcebook that made the whole revival possible. Browse the plates; it is a reference, not a read. Free on archive.org.' },
          { title: 'The Greek Revival', author: 'J. Mordaunt Crook, 1972', note: 'ON-RAMP. The standard scholarly history of the British movement — serious but readable.' },
          { title: 'Greek Revival America', author: 'Roger G. Kennedy, 1989', note: 'ON-RAMP. A lavishly illustrated survey of the American style — the friendliest starting point.' },
          { title: 'Greek Revival Architecture in America', author: 'Talbot Hamlin, 1944', note: 'ON-RAMP. The classic, still-cited American study — denser older scholarship, but foundational.' },
          { title: 'Architecture in Britain 1530–1830', author: 'John Summerson', note: 'ON-RAMP. Places the British Greek Revival in the long sweep of British classicism ("Greek and Gothic after Waterloo").' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects who brought the temple back, in Britain, America and Germany.',
        figures: [
          { name: 'James "Athenian" Stuart (1713–1788)', portrait: 'assets/detail/portrait-stuart.jpg', what: 'Co-author of the Antiquities of Athens, whose surveys launched the revival; his Doric temple at Hagley (1758) is often called the first Greek Revival building.',
            works: ['<i>The Antiquities of Athens</i> (with Revett)', 'The Doric temple at Hagley (1758)'], link: 'https://en.wikipedia.org/wiki/James_Stuart_(1713%E2%80%931788)' },
          { name: 'William Strickland (1788–1854)', what: 'Architect of the Second Bank of the United States in Philadelphia — the first American building explicitly modelled on the Parthenon.',
            works: ['The Second Bank of the United States', 'The Merchants\' Exchange, Philadelphia', 'The Tennessee State Capitol'], link: 'https://en.wikipedia.org/wiki/William_Strickland_(architect)' },
          { name: 'Robert Smirke (1780–1867)', what: 'Architect of the British Museum, with its great Ionic colonnade — the grandest British Greek Revival building.',
            works: ['The British Museum'], link: 'https://en.wikipedia.org/wiki/Robert_Smirke_(architect)' },
          { name: 'Benjamin Latrobe (1764–1820)', portrait: 'assets/detail/portrait-latrobe.jpg', what: 'The English-born "father of American architecture", who worked on the US Capitol and designed the Bank of Pennsylvania, the first Greek Revival building in America.',
            works: ['The Bank of Pennsylvania (first US Greek Revival)', 'Work on the US Capitol'], link: 'https://en.wikipedia.org/wiki/Benjamin_Henry_Latrobe' },
          { name: 'Leo von Klenze (1784–1864)', portrait: 'assets/detail/portrait-klenze.jpg', what: 'Architect of the Walhalla near Regensburg — a full-scale Parthenon built as a German hall of fame on a hill above the Danube.',
            works: ['The Walhalla, near Regensburg', 'The Glyptothek, Munich'], link: 'https://en.wikipedia.org/wiki/Leo_von_Klenze' },
          { name: 'Alexander "Greek" Thomson (1817–1875)', portrait: 'assets/detail/portrait-thomson.jpg', what: 'Glasgow\'s great original, who pushed Greek forms into something genuinely new in his churches and villas.',
            works: ['St Vincent Street Church, Glasgow', 'Holmwood House, Glasgow'], link: 'https://en.wikipedia.org/wiki/Alexander_Thomson' }
        ]
      }
    }
  },
  {
    id: 'gothic-revival',
    image: 'assets/styles/gothic-revival.jpg',
    name: 'Gothic Revival',
    short: 'The medieval answer',
    tagline: 'Pointed arches and faith — the great rival of the classical',
    group: 'The Styles',
    color: '#6B4A8A', colorDeep: '#452F5E', colorSoft: '#E9E1F2',
    icon: 'arch',
    blurb: 'Not every revival looked to Greece and Rome. The Gothic Revival returned instead to the pointed arches, soaring vaults and rich ornament of the medieval cathedral, and argued fiercely that the true, honest and Christian architecture was Gothic, not classical. It is the one style in this app that is not classical at all — the classical tradition\'s great rival — and its greatest monument, the Palace of Westminster, is a modern parliament dressed in the medieval past. It is here so you can see what the classical tradition was arguing against.',
    sections: {
      'what-it-is': {
        title: 'What the Gothic Revival is',
        intro: 'The Gothic Revival is the deliberate return, from the eighteenth century onward, to medieval Gothic forms — the pointed arch, the rib vault, the pinnacle and tracery — and above all to the belief that these were more honest, more Christian and more truthful than the "pagan" classical orders. It is presented here on its own terms, as the great alternative the classical tradition had to answer.',
        principles: [
          { name: 'The pointed arch and the Gothic skeleton', body: 'Classical building rests on post-and-lintel and the round arch, which push their load outward and so need thick walls and small windows. Gothic replaces them with three linked devices — the pointed arch (which drives its thrust more steeply downward), the rib vault (which gathers the roof onto slender piers), and the flying buttress (which carries the remaining outward push across open air to a pier outside). The wall stops carrying weight and becomes a thin screen of stained glass.', why: 'It is the deepest contrast with classicism. Where the classical is balanced mass, the horizontal, and the module of the column, Gothic is a skeleton of thrusts and counter-thrusts, verticality, and a wall dissolved into coloured light. The revivalists argued this made Gothic the more structurally expressive architecture — you can read the forces at work.' },
          { name: 'The moral argument', body: 'Pugin turned Gothic from a style into a conscience. His "two great rules" were that a building should have no feature not needed for use, construction or propriety, and that all ornament should enrich the essential construction. On that test classical architecture failed — its columns that carry nothing and its temple-front shams were, to him, dishonest, and being descended from pagan Greece and Rome, un-Christian too.', why: 'It is the hinge of the whole rivalry. It reframed a choice of style as a choice between honesty and deceit, faith and paganism — and it forced the classical tradition to defend itself, which sharpened classical thinking in turn.' },
          { name: 'Ruskin and the joy of the workman', body: 'John Ruskin, a critic rather than an architect, gave the movement its other great text in "The Nature of Gothic". He located Gothic\'s worth not in geometry but in the free medieval craftsman: its roughness and variety — its "savageness" — are the visible trace of a human being thinking for himself, and ornament is the workman\'s joy. He set this against industrial perfection: "You must either make a tool of the creature, or a man of him."', why: 'It turned Gothic into a social and ethical creed, feeding William Morris and the Arts and Crafts movement. It also sharpens the classical contrast: the exact repetition and machine-smooth finish the classical prizes is precisely what Ruskin distrusted as inhuman.' },
          { name: 'Faith and nation', body: 'Gothic carried two associations classicism could not match in the nineteenth century: it was felt to be intrinsically Christian — the architecture of the medieval Church — and to be the national, home-grown medieval past rather than an import from the pagan Mediterranean.', why: 'It explains exactly where you find it: churches, colleges and civic buildings that wished to claim the Christian, medieval, national past. It is why a modern parliament at Westminster reached for the pointed arch instead of the portico.' },
          { name: 'The correct church', body: 'The Cambridge Camden Society, through its journal The Ecclesiologist, told Anglicans precisely what a "correct" church should be — modelled on fourteenth-century "Middle Pointed" Gothic and laid out for proper worship, with a deep chancel and a real altar.', why: 'It took the moral argument and made it a rulebook. A church could now be judged right or wrong against a doctrine, which drove an enormous wave of new and restored parish churches across the English-speaking world.' },
          { name: 'Colour built into the stone', body: 'At mid-century the revival grew muscular and colourful. William Butterfield\'s All Saints, Margaret Street pioneered structural polychromy — colour built into the fabric itself in permanent materials, banded red and black brick, stone and patterned tile, rather than painted on.', why: 'It is Pugin\'s honesty principle carried to the very surface: the colour is a true property of the material, not a fake finish. It produced the aggressive, unmistakable "High Victorian" look — the polar opposite of cool, pale classical stone.' },
          { name: 'Gothic as reason, and the restorers', body: 'In France, Viollet-le-Duc argued that Gothic was above all a rational structural system — every rib and buttress doing a job — a model even for modern iron construction. He was also France\'s great restorer, at Notre-Dame and Carcassonne, but his restorations were conjectural: he aimed to return a building to an ideal "complete state which may never have existed".', why: 'It is the strand of the revival that points forward to modern structural honesty rather than back to medieval faith — and it set off the great conservation quarrel, between restoring to an imagined ideal and Ruskin and Morris\'s "anti-scrape" plea to conserve honestly and never fake a lost original.' }
        ]
      },
      'the-path': {
        title: 'Learning the Gothic Revival',
        intro: 'Learn the one visual test first, then the argument that made it a crusade, then the nuance, the structure and the great conservation quarrel.',
        levels: [
          { stage: 'Beginner — see the difference', items: [
            'Learn the single most useful test: pointed arch versus round arch. Round is classical or Romanesque; the tent-like point is Gothic. Practise on any doorway or window.',
            'Start with the light-hearted early phase — Horace Walpole\'s Strawberry Hill — where "Gothick" was romantic fashion, before it turned serious and moral.',
            'Grasp the big idea: after centuries of classicism, people deliberately went back to the pointed Middle Ages, then argued it was morally better.'
          ] },
          { stage: 'Intermediate — the argument', items: [
            'Read Pugin\'s two great rules and look at a Puginian church (St Giles, Cheadle), asking whether every part does a job and the ornament decorates real structure.',
            'Understand the Ecclesiological rulebook — why so many Victorian churches look fourteenth-century.',
            'Meet the rivalry head-on: compare a Greek Revival "temple for a bank" with a Gothic church or town hall, and read the opposing messages.'
          ] },
          { stage: 'Advanced — nuance, structure, controversy', items: [
            'Study structural polychromy at All Saints, Margaret Street, and the rational-structure argument of Viollet-le-Duc.',
            'Engage the restoration controversy — restore-to-an-ideal versus Ruskin and Morris\'s "conserve, don\'t fake" — and the founding of the SPAB in 1877.',
            'Trace the spread: Collegiate Gothic on campuses, wooden Carpenter Gothic in America, and Cologne Cathedral finally completed in 1880 to its surviving medieval plans.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Gothic Revival is on every high street and in every old churchyard. A few things to actually do.',
        items: [
          { name: 'Pointed or round?', body: 'The fastest single skill: a round-topped arch is classical or Romanesque; the tent-like point is Gothic. Test it on windows, doorways and arcades wherever you go.' },
          { name: 'Look up for the ribs', body: 'Inside, do slender stone ribs spring from the piers and cross the ceiling like the spokes of an umbrella? That is a Gothic rib vault. A smooth round tunnel is Romanesque; a flat or coffered ceiling is classical.' },
          { name: 'Find a flying buttress', body: 'From outside, look for the half-arch "flyers" leaping from the upper wall to a free-standing pier — the trick that lets the wall be thin and full of glass. Small parish churches are too low to need them, so absence is not failure.' },
          { name: 'Test a church for honesty', body: 'Ask Pugin\'s two questions: is every feature needed for use, construction or propriety, or is something there purely for show? And does the ornament enrich real structure, or disguise it? A sheltering porch passes; a buttress that carries nothing fails.' },
          { name: 'Is the colour built in?', body: 'Where a Gothic Revival building is coloured, check whether the colour is bands of different brick, stone and tile built into the wall, or merely paint on the surface. Built-in is the honest, Butterfield way.' },
          { name: 'Read the two messages', body: 'Set a Gothic Revival building beside a classical one and read what each says: the temple-front says order, reason and ancient authority; the Gothic says faith, nation, the medieval past and honest craft. That is the whole rivalry made visible.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Gothic Revival produced the fiercest architectural writing of the age — read the polemics first (all free and public-domain), then the modern histories.',
        books: [
          { title: 'The True Principles of Pointed or Christian Architecture', author: 'A. W. N. Pugin, 1841', note: 'PRIMARY. The manifesto of the "two great rules" — that structure should be honest and ornament should enrich it. Short, clear and thrilling. Free online.' },
          { title: 'Contrasts', author: 'A. W. N. Pugin, 1836', note: 'PRIMARY. His satirical paired engravings setting a noble medieval town against its shabby modern self — the "temples for banks" critique made vivid. Free online.' },
          { title: 'The Stones of Venice', author: 'John Ruskin, 1851–1853', note: 'PRIMARY. Read the one chapter "The Nature of Gothic" (vol. 2, 1853) even if nothing else — the greatest essay on why Gothic and honest craft matter. Free online.' },
          { title: 'A History of the Gothic Revival', author: 'Charles L. Eastlake, 1872', note: 'PRIMARY. The movement\'s first history, written from the inside by a contemporary — invaluable and readable. Free online.' },
          { title: 'The Gothic Revival', author: 'Kenneth Clark, 1928', note: 'ON-RAMP. The classic, elegant history of the movement — the traditional starting point.' },
          { title: 'God\'s Architect: Pugin and the Building of Romantic Britain', author: 'Rosemary Hill, 2007', note: 'ON-RAMP. A superb, immersive, prize-winning life of Pugin — the best narrative way into the whole movement.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects and critics of the medieval revival — the prophet, his classical partner, the great critic, and the men who built it.',
        figures: [
          { name: 'A. W. N. Pugin (1812–1852)', what: 'The revival\'s prophet: a Catholic convert who wrote its theory (Contrasts, The True Principles), designed the Gothic detail of the Palace of Westminster, and built St Giles, Cheadle — packing several careers into twenty years before breaking down and dying at forty.' },
          { name: 'Sir Charles Barry (1795–1860)', what: 'The classically-trained architect who won the competition for the Palace of Westminster and set its plan and massing, with Pugin supplying the Gothic detail. Pugin\'s own verdict on Barry\'s classicism: "All Grecian, Sir; Tudor details on a classic body." The exact split of credit between them is still debated.' },
          { name: 'John Ruskin (1819–1900)', what: 'The critic, not an architect, whose Seven Lamps and Stones of Venice gave the movement its moral and social conscience — and, through "The Nature of Gothic", inspired William Morris and the Arts and Crafts movement.' },
          { name: 'Sir George Gilbert Scott (1811–1878)', what: 'The most prolific Gothic Revival architect — hundreds of churches, the Midland Grand Hotel at St Pancras, and the Albert Memorial — and a great, if controversial, restorer of cathedrals.' },
          { name: 'William Butterfield (1814–1900)', what: 'The master of High Victorian Gothic and structural polychromy, above all at All Saints, Margaret Street, and Keble College, Oxford.' },
          { name: 'Eugène Viollet-le-Duc (1814–1879)', what: 'The French rationalist and restorer — of Notre-Dame de Paris and the walls of Carcassonne — who read Gothic as pure structural logic and pointed it toward the modern age.' }
        ]
      }
    }
  }
);
