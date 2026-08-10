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
    blurb: 'Greek architecture is the source. Over three centuries the builders of Greece perfected a single form — the columned temple — with such care for proportion, refinement and restraint that it became the standard of the whole Western tradition. The Doric and Ionic orders, the pediment, the fluted column and the marble frieze all begin here, on the hills of Athens and the coasts of the Greek world.',
    sections: {
      'what-it-is': {
        title: 'What Greek architecture is',
        intro: 'Greek architecture is an architecture of the perfected type rather than the new invention. Working almost entirely in post-and-lintel stone, the Greeks refined the temple endlessly — its plan, its orders, its proportions and its optical subtleties — seeking not variety but the ideal version of a single, well-understood form.',
        principles: [
          { name: 'The temple as the whole art', body: 'Greek architecture concentrates on one building type — the temple — raised on a stepped platform, ringed or fronted by columns, sheltering the god\'s image within. Almost everything the Greeks discovered about beauty in building, they discovered by perfecting this one form.', why: 'It shows a different idea of progress: not endless novelty, but the patient refinement of a single type toward its ideal. The Parthenon is the result of centuries spent improving one thing.' },
          { name: 'The orders are born here', body: 'The Doric and Ionic orders are Greek inventions, and the Corinthian too. Each is a complete system of column and entablature with fixed proportions and ornament — the alphabet that the entire later tradition would write in.', why: 'It is why Greece is the foundation. To learn the orders is to learn Greek architecture, and to learn the orders is to hold the key to two thousand years of building.' },
          { name: 'Proportion and refinement', body: 'The Greeks tuned their temples with extraordinary precision, and then corrected them for the eye: columns swell (entasis) and lean inward, platforms curve upward, corner columns thicken. The "perfect" temple is full of deliberate, invisible distortions.', why: 'It reveals that classical perfection is not rigid geometry but a subtle answer to how humans actually see. The beauty is in the corrections you are not meant to notice.' },
          { name: 'Restraint and clarity', body: 'Greek building is severe. Ornament is concentrated where structure needs explaining — capitals, friezes, cornices — and the rest is left as clear, load-bearing stone. Nothing is hidden; the structure is the architecture.', why: 'It sets the tradition\'s conscience. Ever after, the Greek example stood for honesty and restraint against the temptation to merely decorate.' },
          { name: 'Colour and life', body: 'The white marble we admire was once painted in strong colours — reds, blues, gold — on friezes, mouldings and figures. The serene white temple is an accident of time; the Greeks built in vivid polychromy.', why: 'It corrects a deep misunderstanding. The "cool white classicism" later ages imitated never existed — the originals were bright, and the tradition began in colour.' }
        ]
      },
      'the-path': {
        title: 'Learning Greek architecture',
        intro: 'Greece is best learned from the temple outward — one great building understood deeply teaches more than a survey.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the parts of a temple: stylobate, column, capital, entablature, pediment, cella.',
            'Study the Parthenon in good photographs and identify each part.',
            'Learn to tell Doric from Ionic by the capital.'
          ] },
          { stage: 'Intermediate', items: [
            'Learn the optical refinements — entasis, the curved stylobate, the inclined columns.',
            'Compare early, heavy Doric (Paestum) with mature Doric (the Parthenon).',
            'Read about the Acropolis as a planned group, not single buildings.'
          ] },
          { stage: 'Advanced', items: [
            'Study the polychromy debate and how the temples were coloured.',
            'Trace the Greek influence through Rome and into the Greek Revival.',
            'Read Vitruvius on the Greek orders and test him against the surviving temples.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Even far from Greece, the Greek temple is all around you in revival form. A few things to do.',
        items: [
          { name: 'Find a temple front near you', body: 'Almost every town has one — a bank, church, museum or memorial with columns and a pediment. Find it and identify the order.' },
          { name: 'Hunt for entasis', body: 'On any columned building, sight up the shaft. Can you see the slight swelling? Once you can, you cannot stop seeing it.' },
          { name: 'Separate Doric from Ionic', body: 'Photograph two columned buildings and sort them by their capitals — plain cushion (Doric) or scrolls (Ionic).' },
          { name: 'Imagine the colour', body: 'Stand before a "white" classical frieze and picture it painted red, blue and gold, as the Greeks left it. It changes the building.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Start with a clear modern account of Greek building, then read Vitruvius and go to the temples through good photographs.',
        books: [
          { title: 'The Antiquities of Athens', author: 'James Stuart & Nicholas Revett, 1762', note: 'PRIMARY (modern). The measured drawings that revealed true Greek architecture to Europe and launched the Greek Revival.' },
          { title: 'De Architectura', author: 'Vitruvius', note: 'PRIMARY. A Roman on the Greek orders — the nearest thing to an ancient theory of the temple. Free online.' },
          { title: 'Greek Architecture', author: 'A. W. Lawrence (rev. R. A. Tomlinson)', note: 'ON-RAMP. The standard scholarly survey — thorough and reliable.' },
          { title: 'The Parthenon', author: 'Mary Beard', note: 'ON-RAMP. A short, brilliant book on the single greatest Greek building and its afterlife.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Greek architects are often anonymous, but the greatest works have names attached.',
        figures: [
          { name: 'Iktinos & Kallikrates', what: 'Architects of the Parthenon (447–432 BC), the supreme Doric temple.' },
          { name: 'Mnesikles', what: 'Architect of the Propylaia, the monumental gateway to the Acropolis.' },
          { name: 'Kallimachos', what: 'Sculptor credited by Vitruvius with inventing the Corinthian capital.' },
          { name: 'Stuart & Revett', what: 'The 18th-century Englishmen whose accurate surveys resurrected Greek architecture for the modern age.' }
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
    blurb: 'Rome took the Greek language of the orders and married it to a genius for engineering. With the arch, the vault, the dome and concrete, the Romans built at a scale and for a range of uses the Greeks never attempted — baths, basilicas, aqueducts, amphitheatres and the Pantheon. Roman architecture is the classical tradition made practical, imperial and vast.',
    sections: {
      'what-it-is': {
        title: 'What Roman architecture is',
        intro: 'Roman architecture keeps the Greek orders but changes their job. Where the Greek column carried the building, the Roman column often decorates a wall of arches and concrete that does the real work. The result is an architecture of interior space and engineering, dressed in the classical orders.',
        principles: [
          { name: 'The arch changes everything', body: 'The Romans built the whole family of curved structures — the arch, the barrel vault, the groin vault and the dome — which carry load in compression and can span far without columns. Architecture became the shaping of great interior spaces.', why: 'It is the deep difference from Greece. The Greek temple is a sculpture you walk around; the Roman building is a space you walk into. The arch made interior architecture possible.' },
          { name: 'Concrete and scale', body: 'Roman concrete — lime, volcanic ash and rubble — could be cast into any shape and faced with brick or marble. It freed building from the size of a cut stone and let Rome build baths, basilicas and the Pantheon\'s 43-metre dome.', why: 'It reveals the engineering behind the splendour. Rome\'s grandeur is not just ambition but a material breakthrough that no earlier people possessed.' },
          { name: 'The orders as dress', body: 'Romans frequently applied the orders to arched and walled structures as decoration — engaged columns and pilasters framing arches, as on the Colosseum, which stacks Doric, Ionic and Corinthian storey by storey.', why: 'It introduces a habit that runs through all later classicism: the order as an applied language on a structural wall, rather than the structure itself. Most classical buildings since are Roman in this sense.' },
          { name: 'Architecture for a public', body: 'Rome invented the great public building types — the bath, the basilica (law court and hall), the amphitheatre, the triumphal arch, the forum. Architecture became an instrument of civic life and imperial display.', why: 'It is why our civic buildings are Roman in spirit. The idea that the state should house public life in grand classical halls begins in the Roman forum.' },
          { name: 'The Pantheon', body: 'The Pantheon fuses everything Roman: a Greek Corinthian portico fronting a vast concrete dome lit by a single open oculus. It is the best-preserved and most influential building of antiquity.', why: 'It is the one building to know above all. Almost every later dome — Florence, St Peter\'s, St Paul\'s, the US Capitol — is a descendant of this room.' }
        ]
      },
      'the-path': {
        title: 'Learning Roman architecture',
        intro: 'Rome is best learned through its structural inventions and its great surviving buildings.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the arch, vault and dome, and how each carries load.',
            'Study the Pantheon: portico, rotunda, dome, oculus.',
            'Look at the Colosseum and find the three stacked orders.'
          ] },
          { stage: 'Intermediate', items: [
            'Understand Roman concrete and how it made the vaults possible.',
            'Learn the public types: baths, basilica, amphitheatre, triumphal arch.',
            'Compare a Roman engaged-column façade with a Greek free-standing colonnade.'
          ] },
          { stage: 'Advanced', items: [
            'Read Vitruvius as a working Roman architect, not just a theorist.',
            'Trace Roman construction into Brunelleschi\'s and Wren\'s domes.',
            'Study how the Renaissance measured and revived Roman remains.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'Roman ideas are everywhere in later building. A few things to notice.',
        items: [
          { name: 'Find an applied order', body: 'Look for columns or pilasters that frame a wall or arches but clearly carry nothing. That is the Roman habit — the order as dress. Spot one near you.' },
          { name: 'Trace an arch', body: 'Find a stone arch and pick out the wedge-shaped voussoirs and the keystone at the top. Follow how the load runs down each side to the ground.' },
          { name: 'Look for a Pantheon child', body: 'Any dome on a drum with a portico in front — a domed church, library or capitol — is a descendant of the Pantheon. Find one and see the family likeness.' },
          { name: 'Read a triumphal arch', body: 'Find a triumphal or memorial arch (many war memorials are one) and read its Roman parts: engaged columns, entablature, attic, inscription.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Vitruvius is the ancient voice; modern archaeology makes the engineering vivid.',
        books: [
          { title: 'De Architectura (The Ten Books)', author: 'Vitruvius', note: 'PRIMARY. Written for Augustus by a working Roman architect — materials, orders, machines and all. The Morgan translation is free.' },
          { title: 'Roman Building: Materials and Techniques', author: 'Jean-Pierre Adam', note: 'ON-RAMP. The clearest account of how the Romans actually built. Beautifully illustrated.' },
          { title: 'Rome: An Oxford Archaeological Guide', author: 'Amanda Claridge', note: 'ON-RAMP. The best companion to the buildings themselves, ruin by ruin.' },
          { title: 'The Pantheon: From Antiquity to the Present', author: 'ed. Marder & Wilson Jones', note: 'ON-RAMP. Everything about the one building you most need to understand.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'Roman architecture is often anonymous engineering, but some names survive.',
        figures: [
          { name: 'Vitruvius (1st c. BC)', what: 'The one Roman architect whose treatise survives — the source of the whole later tradition.' },
          { name: 'Apollodorus of Damascus', what: 'Trajan\'s brilliant engineer, master of concrete vaulting and the great imperial works.' },
          { name: 'The emperor Hadrian (76–138 AD)', what: 'Patron and probable designer of the Pantheon in its surviving form, and an architect in his own right.' },
          { name: 'Marcus Agrippa', what: 'Augustus\'s deputy, whose name still stands on the Pantheon\'s portico from its first building.' }
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
    blurb: 'The Renaissance was the deliberate rebirth of classical architecture in fifteenth- and sixteenth-century Italy. Scholars recovered Vitruvius, architects measured the Roman ruins, and a new generation set out to build again in the language of antiquity — rationally, harmoniously, and to the measure of man. It is the moment the classical tradition became self-conscious and set the course for the next five hundred years.',
    sections: {
      'what-it-is': {
        title: 'What Renaissance architecture is',
        intro: 'Renaissance architecture is classical architecture recovered by study. Where medieval builders had worked by inherited craft, the Renaissance architect was a scholar-artist who read Vitruvius, measured Roman ruins, and designed by reasoned proportion — treating building as a liberal art.',
        principles: [
          { name: 'The recovery of the ancients', body: 'The rediscovery of Vitruvius\'s text and the careful measuring of Roman remains gave architects a body of ancient principle to revive. Alberti wrote the first modern treatise; the ruins became a school.', why: 'It marks the birth of the architect as a learned author. Building was no longer only a craft handed down, but an art recovered from books and stones and consciously re-founded.' },
          { name: 'Harmony and proportion restored', body: 'Renaissance builders revived the classical faith that beauty is ratio, and applied musical proportions to plans and façades. The centrally-planned church — a perfect circle or square under a dome — became the ideal.', why: 'It explains the serene rationality of a Renaissance building. Every dimension answers to a ratio; the calm you feel is mathematics made visible.' },
          { name: 'The dome reborn', body: 'Brunelleschi\'s dome for Florence Cathedral (1436), solved by studying Roman construction, announced the age. The dome became the Renaissance\'s crowning form, culminating in Michelangelo\'s St Peter\'s.', why: 'It shows revival as real invention. Brunelleschi did not copy Rome; he out-engineered it, and in doing so opened the whole era.' },
          { name: 'The palace and the façade', body: 'In the city, the Renaissance perfected the palazzo — a rusticated, symmetrical block with rhythmically ordered windows and a strong cornice — giving the classical language to private and civic urban life.', why: 'It carried classicism off the temple and onto the street. The ordered urban façade we take for granted is a Renaissance achievement.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'The Renaissance wrote its own theory — go to the treatises, then a great modern historian.',
        books: [
          { title: 'On the Art of Building in Ten Books', author: 'Leon Battista Alberti, c. 1450', note: 'PRIMARY. The first modern architectural treatise, modelled on Vitruvius. Learned and foundational.' },
          { title: 'The Lives of the Artists', author: 'Giorgio Vasari, 1550', note: 'PRIMARY. The insider\'s account of the architects themselves — Brunelleschi, Bramante, Michelangelo — by a contemporary.' },
          { title: 'Architectural Principles in the Age of Humanism', author: 'Rudolf Wittkower', note: 'ON-RAMP (scholarly). The classic study of Renaissance proportion and the centrally-planned church.' },
          { title: 'The Architecture of the Italian Renaissance', author: 'Peter Murray', note: 'ON-RAMP. A clear, well-illustrated survey — the standard first book.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The founders of the whole modern tradition.',
        figures: [
          { name: 'Filippo Brunelleschi (1377–1446)', what: 'Solved the dome of Florence and re-founded classical architecture; the age begins with him.' },
          { name: 'Leon Battista Alberti (1404–1472)', what: 'Humanist and theorist who gave the revival its intellectual programme and several great buildings.' },
          { name: 'Donato Bramante (1444–1514)', what: 'Whose Tempietto perfected the small round temple and who began new St Peter\'s.' },
          { name: 'Michelangelo (1475–1564)', what: 'Sculptor-architect of the dome of St Peter\'s and the Campidoglio, straining the classical rules toward the Baroque.' }
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
    blurb: 'Palladianism is the style built on the work of one man — Andrea Palladio, the sixteenth-century architect of the Veneto whose villas, churches and treatise became the most imitated model in architectural history. Calm, symmetrical, temple-fronted and governed by strict proportion, his manner spread through England, Ireland and America to become the classic form of the country house and the grand estate.',
    sections: {
      'what-it-is': {
        title: 'What Palladian architecture is',
        intro: 'Palladian architecture applies the harmony and orders of Rome to the ordinary business of living — above all the country villa. Its hallmarks are strict symmetry about a central axis, harmonic room proportions, a temple-front portico, and a plain, serene surface where nothing is arbitrary.',
        principles: [
          { name: 'The temple front on a house', body: 'Palladio gave the domestic villa the dignity of a temple, fronting houses with columned, pedimented porticoes. The gods\' architecture was lent to family and farm.', why: 'It is the birth of the country house as we know it. When you climb the columned steps of a grand estate, you are entering Palladio\'s idea — noble form given to private life.' },
          { name: 'Symmetry and the central axis', body: 'A Palladian building is organised around a strong central axis with matching wings, so the whole is balanced and still. Service ranges are often swept out symmetrically on colonnades to frame the main block.', why: 'It creates the calm, resolved quality of these houses. The eye finds the centre at once and everything else falls into balance around it.' },
          { name: 'Harmonic proportion', body: 'Palladio set out preferred ratios for rooms — the square, the double square, ratios of 3:4, 2:3 — so that a house is a set of harmonies, its rooms related like musical intervals.', why: 'It is why Palladian rooms feel so composed. Their dimensions are not free choices but a tuned system, and the harmony is felt even when it is not understood.' },
          { name: 'A book that built the world', body: 'Palladio\'s Four Books of Architecture (1570), with its clear plates of his own designs, could be carried anywhere and copied. Through it his manner travelled to England (Inigo Jones, Lord Burlington) and to America (Jefferson).', why: 'It shows how a style spreads: not by travel alone but by a great pattern-book. Palladianism is the first architecture designed to be reproduced from print.' }
        ]
      },
      'the-path': {
        title: 'Learning the Palladian',
        intro: 'Palladio is best learned from his own book and his villas, then traced into the country houses near you.',
        levels: [
          { stage: 'Beginner', items: [
            'Look at the Villa Rotonda and learn its symmetrical, four-fronted plan.',
            'Learn to spot a temple-front portico on a house.',
            'Find a Palladian country house in your region and identify the central block and wings.'
          ] },
          { stage: 'Intermediate', items: [
            'Read Palladio\'s recommended room proportions in Book I.',
            'Study the "Palladian window" (a central arch flanked by two flat-topped lights).',
            'Compare Palladio\'s Venetian churches (San Giorgio, the Redentore) with his villas.'
          ] },
          { stage: 'Advanced', items: [
            'Trace the English Palladian revival: Inigo Jones, Lord Burlington, Colen Campbell.',
            'Study Jefferson\'s Monticello and the American reception.',
            'Read how Palladio measured Roman remains and adapted them to the villa.'
          ] }
        ]
      },
      'practice': {
        title: 'Things to look for and do',
        intro: 'The Palladian is the style you are most likely to be able to visit. A few things to do.',
        items: [
          { name: 'Visit a country house', body: 'Most grand estates open to the public are Palladian or Palladian-descended. Walk the central axis and see how the plan balances left and right.' },
          { name: 'Find a Palladian window', body: 'Look for the distinctive three-part window — tall arched centre, flat sides. Once you know it, you will spot it on houses everywhere.' },
          { name: 'Read the portico', body: 'Stand before a temple-fronted house and identify the order, count the columns, and find the pediment. Note how it marks the important entrance.' },
          { name: 'Test the symmetry', body: 'Photograph a Palladian façade and fold it down the middle in your mind. How closely do the two halves match? That balance is the whole point.' }
        ]
      },
      'reading': {
        title: 'Where to read',
        intro: 'Go straight to Palladio\'s own book — few primary sources are so readable — then follow the revival.',
        books: [
          { title: 'The Four Books of Architecture', author: 'Andrea Palladio, 1570', note: 'PRIMARY. The most influential architecture book ever printed, illustrated with his own designs. Readable and free in scans.' },
          { title: 'Vitruvius Britannicus', author: 'Colen Campbell, 1715–25', note: 'PRIMARY (revival). The engraved survey that launched the English Palladian movement.' },
          { title: 'Palladio', author: 'James S. Ackerman', note: 'ON-RAMP. The best short life-and-work — clear, authoritative, and a pleasure to read.' },
          { title: 'The Villas of Palladio', author: 'various photographic editions', note: 'ON-RAMP. To see the buildings whole; the villas photograph as beautifully as they draw.' }
        ]
      },
      'masters': {
        title: 'The names',
        intro: 'The one master and the men who carried him across the world.',
        figures: [
          { name: 'Andrea Palladio (1508–1580)', what: 'The stonemason turned architect whose villas and Four Books founded the style and reshaped Western domestic architecture.' },
          { name: 'Inigo Jones (1573–1652)', what: 'Who brought true Palladianism to England with the Queen\'s House and the Banqueting House.' },
          { name: 'Richard Boyle, Lord Burlington (1694–1753)', what: 'The aristocrat-architect who led the 18th-century English Palladian revival; built Chiswick House.' },
          { name: 'Thomas Jefferson (1743–1826)', what: 'Who made Palladio the architecture of the young American republic at Monticello and beyond.' }
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
