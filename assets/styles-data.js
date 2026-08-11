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
          { name: 'A house for the god, read from the outside', body: 'A Greek temple was built as the dwelling of the deity and the shelter for the cult statue — not as a hall for a congregation. Worship and sacrifice happened outdoors, at an altar in front of the temple, where the crowd gathered. So the Greeks poured their whole design intelligence into the exterior: the colonnade, the sculpture, the proportions and the refinements.', why: 'It is the reverse of a Gothic cathedral, which is made to be entered. The Greek temple is made to be walked around and seen against the sky — which is why Greek architecture is really a sculpture-of-a-building, and why all its genius is on the outside.' },
          { name: 'The kit of parts', body: 'From the ground up: the stepped base (the crepidoma), whose top step — the stylobate — the columns stand on; the columns themselves; the walled inner room, the cella or naos, that housed the statue, with a front porch (pronaos) and often a matching false porch behind (opisthodomos); the colonnade wrapping the whole (the peristyle); the entablature the columns carry, in three bands — architrave, frieze, cornice; and the low triangular gable at each end, the pediment, its sculpted face the tympanum.', why: 'This fixed set of parts is the grammar of the whole tradition. Learn to name these and you can read almost any classical or classical-revival building in the world — a bank, a museum, a courthouse — because they are all assembled from this same kit.' },
          { name: 'The orders — told apart at the capital', body: 'An order is the whole coordinated system of column, entablature and proportion. The Doric is oldest and heaviest: no base, a plain cushion capital, and a frieze of alternating triglyphs and metopes. The Ionic is slimmer and elegant: it stands on a base and is crowned by the scrolled volute capital, over a continuous carved frieze. The Corinthian, slenderest of all, wears a capital of acanthus leaves — and the Greeks used it only sparingly.', why: 'The orders are the reason classical architecture reads as a language rather than a pile of shapes. The fastest tell is always the capital: a plain cushion means Doric, scrolls mean Ionic, leaves mean Corinthian. Name the order and the rest of the design opens up.' },
          { name: 'Built of beams, not arches', body: 'The Greek temple is pure post-and-lintel: uprights (columns and walls) carry horizontal beams (lintels and architraves). There is no true arch or vault. And stone, though immensely strong when pressed, is weak in bending — a stone beam cracks under its own weight if it spans too far. So the beams had to be short, and the columns close together.', why: 'The dense, measured rhythm of a Greek colonnade — that forest of closely-set columns — is not a style choice but a material fact made beautiful. The Greeks perfected refinement within a narrow structural system, rather than chasing wide open space; that leap would wait for the Roman arch.' },
          { name: 'Ornament that remembers timber', body: 'The earliest temples were built of timber and mud-brick, and when the Greeks turned to stone they kept the memory of the old woodwork in the new material. Vitruvius reads the Doric triglyphs as the stylised ends of ceiling beams, the metopes as the gaps once left open between them, and the little guttae beneath as petrified wooden pegs.', why: 'It explains the otherwise puzzling Doric frieze as fossilised carpentry — a beautiful teaching key. Hold it lightly, though: this is the traditional account handed down from Vitruvius, and scholars still argue over how neatly wood really became stone.' },
          { name: 'The temple that curves to look straight', body: 'Almost nothing in the Parthenon is truly straight. The column shafts swell very slightly in the middle (entasis); the great stone platform is not flat but rises gently toward the centre; and the columns lean a little inward, the corner ones thickened and set closer. Everything is tuned by eye to a fraction.', why: 'The traditional explanation, from Vitruvius and measured by Penrose in 1851, is optical correction: dead-straight lines and a flat platform would appear to sag or bulge, so the Greeks curved them so they look perfect. Scholars still debate the real reason — correction, or a wish to give the stone "life", or plain rain-drainage — but either way it is the summit of their craft: a building tuned like an instrument.' },
          { name: 'Beauty as measured proportion', body: 'Greek design worked from whole-number ratios and a repeated module — often the diameter of the column — so that every dimension answers to every other and the whole holds together. The Parthenon is famously governed by a recurring 4:9 relationship, and Iktinos is said to have written a (now lost) treatise on its proportions.', why: 'Beauty understood as measurable harmony is the philosophical core the entire later tradition inherited. (One caution: the popular claim that the Parthenon was set out on the "golden ratio" is not supported — the Greeks left no evidence of using it, and it was first described, by Euclid, only after the Parthenon was built.)' },
          { name: 'It was painted, not white', body: 'The marble we picture as serene and white was once brightly coloured — reds, blues, ochres and gilding laid over the friezes, mouldings and sculpture. Modern imaging recovers the traces: ultraviolet and raking light, a luminescence that makes ancient Egyptian blue glow, and X-ray fingerprints of the pigments.', why: 'This one correction changes how you imagine every Greek building. The pristine-white ideal is an accident of two thousand years of weathering plus the eighteenth-century taste of Winckelmann, who prized bare marble as "noble simplicity". Picture the paint back on, and the cool, austere temple becomes something vivid and strange — as it truly was.' }
        ]
      },
      'the-path': {
        title: 'Learning Greek architecture',
        intro: 'Greece is best learned from the temple outward — one great building understood deeply teaches more than a broad survey skimmed. Take it in three passes: the vocabulary, then the reasons, then the sources and the eye.',
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
          { name: 'Iktinos (active c. 450–420 BC)', what: 'Architect of the Parthenon (447–432 BC) with Kallikrates, under Pheidias\'s oversight. Pausanias also credits him with the Temple of Apollo at Bassae, home of the earliest known Corinthian column.' },
          { name: 'Kallikrates (active c. 470–420 BC)', what: 'Co-architect of the Parthenon, and by the usual reading of an Athenian decree the architect of the small, exquisite Temple of Athena Nike on the Acropolis.' },
          { name: 'Mnesikles (active c. 437–432 BC)', what: 'Architect of the Propylaia, the monumental columned gateway to the Acropolis — left unfinished when the Peloponnesian War broke out.' },
          { name: 'Pheidias (c. 480 – c. 430 BC)', what: 'The great sculptor and overall director of the Periklean building programme — not its architect. He made the colossal gold-and-ivory Athena inside the Parthenon and the Zeus at Olympia, one of the Seven Wonders.' },
          { name: 'Kallimachos (later 5th c. BC)', what: 'The sculptor to whom Vitruvius credits the invention of the Corinthian capital, inspired by acanthus growing round a basket on a girl\'s grave at Corinth. A lovely legend more than settled history — the order really grew up gradually.' },
          { name: 'Hermogenes (Hellenistic, prob. 2nd c. BC)', what: 'The great theorist and systematiser of the Ionic order, whose rules Vitruvius preserved. His exact dates are genuinely uncertain, but his influence on later Ionic is not.' },
          { name: 'Stuart & Revett (1713–1788; 1720–1804)', what: 'The two Englishmen whose accurate surveys of Athens (fieldwork 1751–54) resurrected Greek architecture for the modern world and set the Greek Revival in motion.' }
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
          { name: 'The arch — turning load into a curve', body: 'A Roman arch is a semicircle built of wedge-shaped stones (voussoirs) locked at the top by the keystone. Because stone is strong when pressed but weak when pulled, the arch is a way of carrying weight without a beam that would crack: the load runs around the curve as compression and down into the supports, which must resist the outward push. It spans far wider than any single flat lintel.', why: 'It is the engine of the whole style. The Romans did not invent the arch — the Etruscans and others used it first — but they exploited it everywhere, at scale, as the organising idea of a whole building culture. (Note the Roman arch is a round half-circle; the pointed arch is a much later, Gothic idea.)' },
          { name: 'The vault and the dome', body: 'Stretch an arch along a line and you get a barrel vault, a stone tunnel. Cross two barrel vaults and you get a groin vault, which throws its weight onto four corner piers and frees the walls between for windows. Spin an arch full circle and you get a dome, roofing a great space with no internal supports at all.', why: 'These are how Rome roofed vast, column-free interiors in fireproof masonry — the huge halls of the baths, the basilicas, the Pantheon. Nothing the Greeks built, with their timber-and-column roofs, could enclose space like this.' },
          { name: 'Concrete — the hidden engine', body: 'Roman concrete (opus caementicium) was lime, a volcanic ash called pozzolana, water and rubble aggregate. It set hard even under water, was laid in courses, and was almost always cast against a permanent skin of brick or small stone that also served as the finish. The brick you see on a Roman ruin is usually just that skin over a concrete core.', why: 'Concrete freed building from the size of a quarried block: it could be cast into any curve, used cheap material and less-skilled labour, and set fast. It is the real technology behind the vaults and the scale. (Its famous durability is genuine and still researched — but the viral "self-healing, better than modern" headlines overstate it; Roman concrete is unreinforced and does a different job.)' },
          { name: 'The orders as applied dress', body: 'On the Colosseum the arches and concrete do the carrying, while engaged half-columns and an entablature are laid over the wall as decoration, storey by storey — sturdy Tuscan at the bottom, then Ionic, then Corinthian, then an attic of pilasters. The order has become a prestige screen, not the structure.', why: 'This is the single most useful thing to learn for reading a building: ask whether the columns are actually holding anything up, or merely dressing a wall. From Rome onward, most classical buildings are Roman in this sense — the order is a language applied to a structure that stands on its own.' },
          { name: 'Architecture you go into', body: 'The Greek temple is a solid object to be admired from the outside; its interior is small and dark. The Roman achievement is the opposite — to shape and enclose enormous interior volumes as the main event, from the glittering bath halls to the Pantheon\'s rotunda.', why: 'This is the deepest break from Greece, and the through-line to everything after: Byzantine, Romanesque, Gothic, Renaissance and Baroque interiors all descend from Rome\'s discovery that architecture can be the sculpting of inner space.' },
          { name: 'Architecture for a public', body: 'Rome invented or perfected the great civic types: the basilica (a roofed hall for law and business), the thermae (vast public baths), the amphitheatre, the triumphal arch, the aqueduct and the planned forum. Building became an instrument of public life, infrastructure and imperial display, not just a house for a god.', why: 'It is why our own civic architecture is Roman in spirit. The conviction that the state should house public life in grand classical halls — courts, museums, parliaments, capitols — begins in the Roman forum.' },
          { name: 'The Pantheon — the synthesis', body: 'A Greek Corinthian portico of granite columns fronts a vast concrete rotunda whose dome is still the largest unreinforced concrete dome in the world. Its diameter and height are equal — about 43 metres — so a perfect sphere would fit inside; it is lightened by five rings of coffers and by concrete made progressively lighter toward the top, and lit by a single open eye, the oculus.', why: 'It is the one building to know above all — order, concrete, dome, geometry and interior space fused into a single room. Almost every later dome, from Florence to St Peter\'s to St Paul\'s to the US Capitol, is its descendant. (The inscription names Agrippa, but it belongs to his earlier Pantheon that burned; the building you visit is Hadrian\'s rebuilding.)' }
        ]
      },
      'the-path': {
        title: 'Learning Roman architecture',
        intro: 'Rome is best learned through its three structural moves and its great surviving buildings — then through the debates and the long legacy.',
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
          { name: 'Vitruvius (1st c. BC)', what: 'A military engineer under Julius Caesar, later supported by Augustus, whose treatise is the only one to survive from antiquity — the source of the whole later tradition. His one known building, a basilica at Fano, is lost.' },
          { name: 'Marcus Agrippa (c. 63–12 BC)', what: 'Augustus\'s great general and son-in-law — the patron, not the designer, who funded the first Pantheon, the Aqua Virgo aqueduct, and Rome\'s first great public baths. His name still stands on the Pantheon from that earlier building.' },
          { name: 'The emperor Hadrian (76–138 AD)', what: 'The patron under whom the Pantheon was rebuilt in its surviving form and Hadrian\'s Villa was raised. He is often called its designer — but no ancient source names the architect, so that is an informed guess, not a fact.' },
          { name: 'Apollodorus of Damascus (early 2nd c. AD)', what: 'Trajan\'s brilliant Greek engineer, designer of the Forum of Trajan and the great bridge over the Danube. The ancient story that Hadrian had him executed for insolence is doubted by most historians.' }
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
          { name: 'The recovery of antiquity', body: 'The one surviving ancient treatise, Vitruvius, had been known but garbled through the Middle Ages; in 1416 the humanist Poggio Bracciolini found a good old copy in the abbey of St Gall, and it was studied in Florence. At the same time architects went to Rome to measure the actual ruins — arches, temples, the Pantheon — first-hand.', why: 'It means the style was recovered by reading and measuring, not by copying the recent past. Architecture became evidence-based: you went to the source, the antique building itself, and worked out its rules.' },
          { name: 'The architect as scholar-artist', body: 'A genuinely new idea: the designer as a learned individual practising a liberal art, not the anonymous collective of the medieval mason\'s lodge. Leon Battista Alberti is the emblem — a humanist who wrote the theory and supplied designs, leaving the stone-cutting to master-masons.', why: 'It is why buildings now carry a name and express one educated mind, why the drawing and the model came to rule the site, and why "architecture" joined the intellectual disciplines. Our whole idea of "the architect" begins here.' },
          { name: 'Proportion, mathematics and perspective', body: 'Beauty was held to arise from commensurable, whole-number ratios governing plan and elevation, on a rational human-centred plan. Bound up with it was linear perspective, which Brunelleschi demonstrated around 1415 with a painted panel viewed through a peephole against a mirror — proving that space obeys mathematics.', why: 'Space, proportion and the drawing all became measurable and rule-governed — the calm rationality you feel in a Renaissance interior. (One honest caution: the strong claim, argued by Wittkower, that these ratios are literally musical harmonies has been challenged, and fits only some buildings.)' },
          { name: 'The centrally-planned church', body: 'Theory prized the centralised plan — a circle, square or Greek cross under a dome — as the most perfect, God-like form. Its purest built statement is Bramante\'s tiny Tempietto in Rome (about 1502), a circular temple ringed by columns; his first plan for new St Peter\'s was a colossal Greek cross under one great dome.', why: 'It is geometry as theology — the "perfect" shapes made visible. It also sets up a permanent tension: the ideal circle versus the long nave a congregation needs, which is why St Peter\'s began central and ended as a Latin cross.' },
          { name: 'The dome reborn', body: 'Brunelleschi\'s dome for Florence Cathedral (built 1420–36) reopened the age: an octagonal double shell raised without a full timber centering, held by self-keying herringbone brickwork and hidden tension chains. It is still the largest masonry dome in the world. A century later Michelangelo answered it with the dome of St Peter\'s.', why: 'It shows revival as real invention. Brunelleschi did not copy Rome — he out-engineered it. (Note the honest version: he built without a full internal falsework, not with "no scaffolding at all" — there were platforms, hoists and his famous lifting machines.)' },
          { name: 'The palazzo and the ordered façade', body: 'In the city the Renaissance created the classical street front. The Palazzo Medici stacks graded rustication — rough rock-faced stone below, smoother above, under a heavy cornice — while Alberti\'s Palazzo Rucellai maps the Colosseum\'s stacked orders onto a house as flat pilasters, storey by storey.', why: 'It carried classicism off the temple and onto the everyday street. The ordered, hierarchical urban façade we now take for granted — and imitated for four hundred years — is a Renaissance achievement.' },
          { name: 'Mannerism — bending the rules', body: 'Once the grammar was fully mastered, architects began to break it on purpose for expressive tension. Michelangelo is the pivot: his Laurentian Library in Florence recesses columns into the wall, sets brackets that support nothing, and pours a staircase into the room; Giulio Romano lets triglyphs "slip" as a learned joke.', why: 'It proves the rules had been completely internalised — you can only break the grammar knowingly once you know it cold. Mannerism is the bridge from the serene High Renaissance toward the drama of the Baroque.' }
        ]
      },
      'the-path': {
        title: 'Learning Renaissance architecture',
        intro: 'Begin in early Florence with the calm classical front, move to the theory and the applied orders, and finish in High-Renaissance Rome where the ideal is perfected and then knowingly broken.',
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
          { name: 'Filippo Brunelleschi (1377–1446)', what: 'Solved the dome of Florence, built the serene Ospedale degli Innocenti, and demonstrated linear perspective. The age begins with him.' },
          { name: 'Leon Battista Alberti (1404–1472)', what: 'The scholar-architect: author of On the Art of Building, and designer of the Palazzo Rucellai and Santa Maria Novella façades and Sant\'Andrea in Mantua. He supplied the designs and left the building to master-masons.' },
          { name: 'Michelozzo (1396–1472)', what: 'The Medici\'s architect, whose Palazzo Medici set the model for the rusticated Renaissance town palace.' },
          { name: 'Donato Bramante (c. 1444–1514)', what: 'Who founded the High Renaissance in Rome with the perfect little Tempietto and the first, Greek-cross plan for new St Peter\'s.' },
          { name: 'Michelangelo (1475–1564)', what: 'Sculptor-architect of the dome of St Peter\'s and the Campidoglio, and of the Laurentian Library that opened Mannerism and pointed toward the Baroque.' }
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
          { name: 'Symmetry and the central axis', body: 'A Palladian building is organised around one dominant central axis: a taller main block in the middle — usually crowned by a pediment or a dome — with matching wings extending symmetrically on either side, so the left half mirrors the right. Service ranges are often swept out on colonnades to frame the whole.', why: 'This "central block and balanced wings" massing is the DNA of the grand country house, and of the banks, museums and capitols that borrowed from it. Symmetry reads instantly as order, calm and authority.' },
          { name: 'The temple front on a house', body: 'Palladio put the columned, pedimented front of a Greek or Roman temple onto the entrance of a private house, lending a home the gravity of a sacred building. It became his signature and the single most-copied classical motif.', why: 'It is the birth of the country house as we know it. There is a lovely twist, though: Palladio wrongly believed ancient Roman houses had temple porticoes — the pedimented front was really a temple form. The whole fashion for columned house-fronts grew from that productive mistake.' },
          { name: 'The villa as a working farm', body: 'The Veneto villas were not idle pleasure-houses but the residential and administrative centres of working agricultural estates. The owner\'s block stood in the middle; long arcaded farm wings, the barchesse, held the stables, barns, granaries and wine-rooms, often with a dovecote at the end.', why: 'It corrects the usual myth — and explains the shape. The wide, symmetrical layout of the great estate, dignified centre and working wings, comes directly from the logic of a farm, not from decoration.' },
          { name: 'Harmonic proportion', body: 'In the Four Books Palladio names his most beautiful room shapes — the circle, the square, the square-and-a-half, and whole-number rectangles like 4:3, 3:2, 5:3 and the double square — and sets a room\'s height by proportional means, so every dimension answers to the others.', why: 'It is why Palladian rooms feel so composed — a tuned system rather than free choice. (One honest caution: the famous idea, argued by Wittkower, that these are literally musical harmonies frozen in stone is much debated; Palladio favoured small whole-number ratios that overlap with musical ones, but the strict "buildings as music" reading is contested.)' },
          { name: 'The Villa Rotonda', body: 'His purest statement: the Villa Almerico Capra, "La Rotonda", outside Vicenza — a square block with four identical temple-fronted porticoes, one on each face, around a central domed hall, so it shows the same serene face in every direction. Begun 1567, it was finished after his death by Scamozzi, who built a lower dome than Palladio had drawn.', why: 'It is the ideal Palladian building — symmetry, centrality, temple front and geometry perfected — and the single most imitated house in the world, copied directly at Mereworth and Chiswick and echoed at Jefferson\'s Monticello.' },
          { name: 'The Palladian window', body: 'A three-part opening: a round-arched central light flanked by two shorter, flat-topped side lights, the arch springing from small columns. Palladio used it so famously — above all in the arcades of the Basilica at Vicenza — that it took his name.', why: 'It is one of the highest-value things to learn to spot; once you know it you will see it on Georgian houses everywhere. And it carries a lesson: the motif is older than Palladio — Roman arches used it, Bramante used it, Serlio published it (the "Serliana") — a reminder that the famous name is not always the inventor.' },
          { name: 'A temple front for a church', body: 'In his Venetian churches — San Giorgio Maggiore and Il Redentore — Palladio solved a hard problem: a Roman temple front is one triangle, but a church has a tall central nave and lower side aisles. His answer was to interlock two temple fronts, a tall narrow one over the nave and a lower, split one behind for the aisles, so a stepped church reads as a single unified temple.', why: 'It shows Palladio as a problem-solver, not a copyist, and it became the standard model for classical church façades for centuries afterward.' },
          { name: 'The book that built a style', body: 'The Four Books of Architecture (Venice, 1570), illustrated with woodcuts from his own measured drawings, was a printed pattern-book: materials and the orders, then his houses with their plans, then public works, then the ancient temples. Any literate builder could copy it.', why: 'This is why Palladianism became a world style while other Renaissance masters stayed local. The book, as much as the buildings, is the engine — the first architecture designed to be reproduced from print.' }
        ]
      },
      'the-path': {
        title: 'Learning the Palladian',
        intro: 'Palladio is best learned from three shapes, then his logic, then his own book and the churches — and finally by tracing the style out into the country houses near you.',
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
          { name: 'Andrea Palladio (1508–1580)', what: 'Born Andrea di Pietro della Gondola, a stonemason from Padua, and renamed "Palladio" — after Pallas Athene, goddess of wisdom — by his patron, the humanist Trissino. His Veneto villas, his Vicenza buildings, his Venetian churches and his Four Books founded the style and reshaped Western domestic architecture.' },
          { name: 'Daniele Barbaro (1514–1570)', what: 'Venetian aristocrat and scholar, Palladio\'s mentor and patron, whose great edition of Vitruvius Palladio illustrated — and who, with his brother, built the Villa Barbaro at Maser.' },
          { name: 'Inigo Jones (1573–1652)', what: 'Who brought true Palladianism to England after studying the buildings in Italy — the Queen\'s House at Greenwich and the Banqueting House in Whitehall.' },
          { name: 'Lord Burlington & Colen Campbell', what: 'The leaders of the 18th-century English revival: Burlington (1694–1753), the "Architect Earl", built Chiswick House on the Rotonda\'s model; Campbell (1676–1729) produced Vitruvius Britannicus and copied the Rotonda at Mereworth.' },
          { name: 'Thomas Jefferson (1743–1826)', what: 'Who made Palladio the architecture of the young American republic at Monticello and the Virginia State Capitol. He is often said to have treated the Four Books as his architectural "bible" — a nice line, though not traceable to a documented quotation.' }
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
    blurb: 'The Baroque is the classical language made dramatic. Beginning in seventeenth-century Rome, architects kept the orders and proportions but bent them toward movement, emotion and spectacle — curved walls, swelling domes, sweeping colonnades and floods of light. It is classicism as theatre, built to move the beholder and to overwhelm.',
    sections: {
      'what-it-is': {
        title: 'What Baroque architecture is',
        intro: 'Baroque architecture uses the whole classical vocabulary but sets it in motion. Straight walls curve, façades advance and recede, columns cluster and project, and space, light and ornament are orchestrated for a single powerful effect. Where the Renaissance sought repose, the Baroque seeks drama.',
        principles: [
          { name: 'Movement and the curve', body: 'Baroque architects broke the flat Renaissance wall into curves — convex and concave façades, oval domes and plans, undulating cornices — so that the building seems to move and the eye is swept along it.', why: 'It is the quickest way to know the Baroque. When a classical wall bends and flows rather than standing flat and still, you are in the Baroque.' },
          { name: 'Theatre and emotion', body: 'The Baroque was born partly of the Counter-Reformation\'s wish to move the faithful. Architecture, sculpture and painting fuse into overwhelming spectacles of light and space designed to stir feeling, not just satisfy reason.', why: 'It explains the aim behind the drama. The Baroque church is a machine for producing awe — every effect is calculated on the beholder\'s emotions.' },
          { name: 'Light as material', body: 'Hidden windows, deep coffering and gilded surfaces make light itself a building material — dramatic shafts, glowing domes, dark and bright played against each other for theatrical effect.', why: 'It reveals a new ambition: to shape not just stone but the light within it. The Baroque interior changes with the sun as a stage changes with its lamps.' },
          { name: 'The grand ensemble', body: 'The Baroque thinks big — Bernini\'s sweeping colonnade embracing St Peter\'s Square, Versailles ordering a whole landscape. The single building expands into a total composition of space, garden and city.', why: 'It shows classicism scaling up to the absolutist age. The Baroque does not stop at the façade; it organises the whole world around it into one dramatic order.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Baroque wrote less theory and built more; go to the great modern historians and the buildings.',
        books: [
          { title: 'Art and Architecture in Italy 1600–1750', author: 'Rudolf Wittkower', note: 'ON-RAMP (scholarly). The standard, magnificent account of the Roman and Italian Baroque.' },
          { title: 'Baroque Architecture', author: 'Christian Norberg-Schulz', note: 'ON-RAMP. A clear thematic introduction to the style\'s space and meaning.' },
          { title: 'The Lives of Bernini / contemporary biographies', author: 'Filippo Baldinucci & Domenico Bernini', note: 'PRIMARY. Contemporary lives of the age\'s greatest architect-sculptor.' },
          { title: 'A History of Architecture', author: 'Banister Fletcher', note: 'ON-RAMP. For the comparative plans of the great Baroque churches and palaces.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects who set the classical language in motion.',
        figures: [
          { name: 'Gian Lorenzo Bernini (1598–1680)', what: 'Sculptor-architect of Baroque Rome — the colonnade of St Peter\'s Square and the Baldacchino within.' },
          { name: 'Francesco Borromini (1599–1667)', what: 'Bernini\'s rival, master of the curved wall and complex geometry (San Carlo alle Quattro Fontane).' },
          { name: 'Sir John Vanbrugh (1664–1726)', what: 'Who brought a massive English Baroque to Blenheim Palace and Castle Howard.' },
          { name: 'Balthasar Neumann (1687–1753)', what: 'Master of the German Baroque and Rococo, architect of the Würzburg Residence.' }
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
    blurb: 'In reaction to Baroque excess, the eighteenth century returned to the calm and correctness of antiquity. Neoclassicism — in Britain the Georgian age — prized restraint, clarity and archaeological accuracy: elegant terraces, sober public buildings, and refined interiors. It is the classicism of the Enlightenment, and the everyday classical language of the modern city.',
    sections: {
      'what-it-is': {
        title: 'What Neoclassical architecture is',
        intro: 'Neoclassicism sought to build with the purity the ancients were believed to have possessed — clear geometry, correct orders, and restrained ornament, informed by the new archaeology of Greece and Rome. In Britain the "Georgian" style gave the age its terraces, squares and public buildings.',
        principles: [
          { name: 'Return to antique purity', body: 'Reacting against Baroque theatre, Neoclassical architects sought sober correctness — clean walls, accurate orders, calm proportion — guided by fresh archaeological knowledge of the real Greek and Roman buildings.', why: 'It explains the cool restraint of the age. After the Baroque\'s drama, the eighteenth century wanted architecture to reason rather than shout.' },
          { name: 'Archaeology as authority', body: 'The excavations of Pompeii and Herculaneum and the surveys of Athens gave designers accurate ancient models. Correctness — using the orders as the ancients really had — became a serious ambition.', why: 'It marks a new seriousness about the past. The style is "neo"-classical precisely because it was trying to get antiquity right, not just evoke it.' },
          { name: 'The Georgian terrace and square', body: 'In Britain the classical language became urban and repeatable: uniform terraces, crescents and squares (Bath, Edinburgh New Town, Georgian Dublin) built to a shared, restrained classical pattern.', why: 'It is why whole city centres feel harmonious. Georgian classicism turned the single ordered façade into a template for the entire street.' },
          { name: 'Refined interiors', body: 'Designers like Robert Adam brought a light, elegant classicism indoors — delicate plasterwork, harmonised rooms, antique motifs — creating a total interior style to match the exterior order.', why: 'It shows classicism reaching the whole environment. The Adam interior is proof that the language governs not just the front but the rooms, the ceilings and the furniture.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'This age wrote sharp theory and built our cities; read the polemics and a good survey.',
        books: [
          { title: 'The Antiquities of Athens', author: 'Stuart & Revett, 1762', note: 'PRIMARY. The archaeology that armed the Greek strand of Neoclassicism.' },
          { title: 'Essay on Architecture', author: 'Marc-Antoine Laugier, 1753', note: 'PRIMARY. The "primitive hut" argument for a rational, stripped classicism — hugely influential.' },
          { title: 'Georgian London', author: 'John Summerson', note: 'ON-RAMP. The classic, delightful account of how Georgian classicism built a city.' },
          { title: 'The Works in Architecture', author: 'Robert & James Adam, 1773', note: 'PRIMARY. The Adam brothers present their own refined classical manner.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects of the age of reason.',
        figures: [
          { name: 'Robert Adam (1728–1792)', what: 'Whose elegant, unified interiors and exteriors defined British Neoclassicism.' },
          { name: 'Jacques-Germain Soufflot (1713–1780)', what: 'Architect of the Panthéon in Paris, the monument of French Neoclassicism.' },
          { name: 'Sir John Soane (1753–1837)', what: 'The idiosyncratic English master of a stripped, poetic classicism (the Bank of England).' },
          { name: 'Karl Friedrich Schinkel (1781–1841)', what: 'The great architect of Prussian Neoclassicism, whose Berlin buildings are its summit.' }
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
    blurb: 'From the late eighteenth into the nineteenth century, the accurate rediscovery of Greek architecture inspired a full revival — real Greek temples, especially the Doric, reborn as banks, museums, courthouses and homes. Charged with associations of democracy, liberty and pure taste, the Greek Revival gave the young United States and Britain some of their most dignified public buildings.',
    sections: {
      'what-it-is': {
        title: 'What the Greek Revival is',
        intro: 'The Greek Revival is the archaeologically-minded imitation of actual Greek temple architecture — its true Doric and Ionic orders, its columned porticoes and pediments — applied to modern building types and freighted with the political ideals then attached to ancient Greece.',
        principles: [
          { name: 'The real Greek orders', body: 'Armed with accurate surveys (Stuart and Revett), revival architects used genuine Greek Doric — baseless, sturdy, severe — rather than the softened Roman versions preferred earlier. Correctness to the Greek original was the point.', why: 'It marks a shift from Roman to Greek as the ideal. The heavy, baseless Doric portico is the signature — and it tells you the builder wanted Athens, not Rome.' },
          { name: 'The temple as any building', body: 'The full temple form — a columned, pedimented portico — was applied to banks, churches, museums, courthouses and even farmhouses, making the Greek temple the standard dress of serious public and private building.', why: 'It is why so many old civic buildings look like temples. The revival made the temple front a universal sign of dignity and permanence.' },
          { name: 'Politics in stone', body: 'Greece meant democracy, liberty and the birth of the West. The style carried these associations, which is why it flourished in the young American republic and in the reforming, self-improving cities of Britain.', why: 'It shows a style chosen as an argument. To build Greek was to claim descent from Athens — its freedom, its taste, its civic ideal.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Begin with the archaeology that started it, then a good history of the movement.',
        books: [
          { title: 'The Antiquities of Athens', author: 'Stuart & Revett, 1762 onward', note: 'PRIMARY. The measured drawings that made the whole revival possible.' },
          { title: 'The Greek Revival', author: 'J. Mordaunt Crook', note: 'ON-RAMP. The standard, readable history of the British movement.' },
          { title: 'Greek Revival America', author: 'Roger G. Kennedy', note: 'ON-RAMP. On why the young United States built itself in Greek dress.' },
          { title: 'The Greek Revival: Architecture and the politics of hellenism', author: 'various', note: 'ON-RAMP. On the ideas and associations the style carried.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects who brought the temple back.',
        figures: [
          { name: 'James "Athenian" Stuart (1713–1788)', what: 'Whose surveys and early Greek buildings launched the revival in Britain.' },
          { name: 'Benjamin Latrobe (1764–1820)', what: 'Father of American professional architecture; shaped the US Capitol in a Greek spirit.' },
          { name: 'Robert Smirke (1780–1867)', what: 'Architect of the British Museum, the grandest British Greek Revival building.' },
          { name: 'Alexander "Greek" Thomson (1817–1875)', what: 'The great, original Glasgow architect who pushed Greek forms into something new.' }
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
    blurb: 'Not every revival looked to Greece and Rome. The Gothic Revival returned instead to the pointed arches, soaring vaults and rich ornament of the medieval cathedral, arguing that the true, Christian and honest architecture was Gothic, not classical. Its greatest monument, the Palace of Westminster, and its fierce theory made it the classical tradition\'s most serious modern rival.',
    sections: {
      'what-it-is': {
        title: 'What the Gothic Revival is',
        intro: 'The Gothic Revival is the deliberate return, from the eighteenth century onward, to medieval Gothic forms — the pointed arch, the rib vault, the pinnacle and tracery — often argued for on moral and religious grounds as more honest and more Christian than the pagan classical orders.',
        principles: [
          { name: 'The pointed arch', body: 'Where classical building rests on the round arch and the horizontal beam, the Gothic rests on the pointed arch and the rib vault, which channel load in different ways and allow height, thin walls and great windows.', why: 'It is the visible dividing line from the classical. The pointed arch is a different structural idea, and with it comes a whole different family of forms.' },
          { name: 'A moral argument', body: 'Pugin and Ruskin argued that Gothic was truthful — its structure honestly shown, its ornament hand-made and meaningful — and that classical architecture was pagan, dishonest and mechanical. Style became a matter of conscience.', why: 'It shows architecture debated as morality, not just taste. The Gothic Revival forced the whole tradition to justify itself, which sharpened classical thought in turn.' },
          { name: 'Faith and nation', body: 'Gothic carried associations of the Christian Middle Ages and of national roots, which is why it clothed churches, universities and parliaments — the Palace of Westminster chief among them.', why: 'It explains where you find it: churches, colleges and civic buildings that wished to claim the medieval, Christian past rather than the classical, ancient one.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Gothic Revival produced the fiercest architectural writing of the age — read the polemics.',
        books: [
          { title: 'The True Principles of Pointed or Christian Architecture', author: 'A. W. N. Pugin, 1841', note: 'PRIMARY. The passionate manifesto that structure should be honest and ornament meaningful. Short and thrilling.' },
          { title: 'The Stones of Venice', author: 'John Ruskin, 1851–53', note: 'PRIMARY. Especially "The Nature of Gothic" — the greatest essay on why Gothic and craft matter. Unmissable.' },
          { title: 'The Gothic Revival', author: 'Kenneth Clark, 1928', note: 'ON-RAMP. The classic, elegant history of the movement.' },
          { title: 'God\'s Architect: Pugin', author: 'Rosemary Hill', note: 'ON-RAMP. A superb modern life of the revival\'s driving genius.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The architects and critics of the medieval revival.',
        figures: [
          { name: 'A. W. N. Pugin (1812–1852)', what: 'The revival\'s prophet; designed the detail of the Palace of Westminster and wrote its theory.' },
          { name: 'Sir Charles Barry (1795–1860)', what: 'Classical architect who, with Pugin, designed the Palace of Westminster itself.' },
          { name: 'Sir George Gilbert Scott (1811–1878)', what: 'The most prolific Gothic Revival architect — St Pancras, the Albert Memorial.' },
          { name: 'John Ruskin (1819–1900)', what: 'The critic whose writing gave the revival its moral and aesthetic case.' }
        ]
      }
    }
  }
);
