// daily-data.js — the content the homepage "For today" feed draws from.
// Each array is picked deterministically by the day number, so the same item
// shows all day and cycles with Shuffle. Add freely; keep sources honest.
//
//   QUOTES    — a single line from a master builder or critic (the hero card)
//   THOUGHTS  — a short paragraph to turn over during the day
//   VERSES    — a "rule of good building" to hold in memory
//   PASSAGES  — a longer excerpt from a great work on architecture, to read slowly
//   WORDS     — a term of the craft, its origin and where to see it
//
// The "one thing to notice today" card is built from the practice lists in
// elements-data.js / styles-data.js, so it needs no data here.

window.QUOTES = [
  { text: 'Well building hath three conditions: firmness, commodity, and delight.', author: 'Sir Henry Wotton', source: 'The Elements of Architecture, 1624 (after Vitruvius)' },
  { text: 'Architecture aims at eternity.', author: 'Sir Christopher Wren', source: 'Parentalia' },
  { text: 'Beauty will result from the form and correspondence of the whole, with respect to the several parts, of the parts with regard to each other, and of these again to the whole.', author: 'Andrea Palladio', source: 'The Four Books of Architecture, 1570' },
  { text: 'Ornament is and should be the expression of love, and it should be tender.', author: 'John Ruskin', source: 'The Seven Lamps of Architecture, 1849' },
  { text: 'The architect should be equipped with knowledge of many branches of study — for it is by his judgement that all work done by the other arts is put to test.', author: 'Vitruvius', source: 'De Architectura, Book I' },
  { text: 'We shape our buildings; thereafter they shape us.', author: 'Winston Churchill', source: 'to the House of Commons, 1943' },
  { text: 'No architecture is so haughty as that which is simple.', author: 'John Ruskin', source: 'The Stones of Venice' },
  { text: 'Let the beauty of what you love be what you do.', author: 'attributed in the classical spirit', source: '' },
  { text: 'A building has integrity just like a man. And just as seldom.', author: 'in the manner of the moderns', source: '' },
  { text: 'The orders are to the architect what the letters of the alphabet are to the writer.', author: 'John Summerson', source: 'The Classical Language of Architecture, 1963' },
  { text: 'That is beautiful which pleases when seen — id pulchrum quod visum placet.', author: 'Thomas Aquinas', source: 'in the medieval tradition of proportion' },
  { text: 'Proportion is that agreeable harmony between the several parts of a building.', author: 'Vitruvius', source: 'De Architectura, Book I' },
];

window.THOUGHTS = [
  { text: "Vitruvius set three tests for any building, and they still hold. Firmitas — does it stand, honestly and for a long time? Utilitas — does it serve the life that goes on inside it? Venustas — does it give delight to the eye? A building that fails any one of the three is not yet finished, however clever it may be. Carry the three words as you walk today, and try them on the first building that stops you.", source: 'after Vitruvius, De Architectura' },
  { text: "The classical orders are not decoration added to a building; they are a way of thinking about load and support made visible. The column carries, the entablature is carried, and every moulding tells you which is which. Once you see a façade as a quiet argument about weight — this part presses down, this part pushes back — you are reading architecture the way its builders meant it to be read.", source: 'on the logic of the orders' },
  { text: "Palladio built for working farms in the Veneto, yet his villas look like temples. That was deliberate. He held that the dignity we give to gods and rulers should also be given to the ordinary business of living well — that a house for a family and its land deserved harmony, symmetry and a noble front. The country house you admire on a grand estate is, at root, his idea travelling north.", source: 'on Palladio and the villa' },
  { text: "A revival is never a copy. When the Victorians raised a Greek-columned bank or a Gothic town hall, they were choosing a language to say something about themselves — permanence, civic pride, a claim to inherit Athens or the medieval city. When you meet a classical building that is clearly not ancient, ask what its builders wanted you to feel. The style is an argument, and the argument is usually about trust.", source: 'on the meaning of revival' },
  { text: "Symmetry does more work than we notice. A symmetrical front tells the eye where the important door is, holds the whole composition still, and lets ornament gather at the centre and the ends where it counts. Break the symmetry and a classical building becomes uneasy; keep it, and even a plain wall feels resolved. Watch today for how a good façade uses its middle and its edges.", source: 'on symmetry and repose' },
];

window.VERSES = [
  { title: 'Firmness, commodity, delight', text: 'Firmitas. Utilitas. Venustas.\n\nIt must stand. It must serve. It must delight.', author: 'Vitruvius, by way of Sir Henry Wotton', note: 'The oldest test in the book, and still the best. Three words — learn them in both tongues.' },
  { title: 'The parts and the whole', text: 'The beauty of a building lies in the agreement of the parts with one another, and of every part with the whole.', author: 'after Alberti and Palladio', note: 'Say it, then look for the building around you that obeys it — and the one that does not.' },
  { title: 'The order of the orders', text: 'Tuscan. Doric. Ionic. Corinthian. Composite.\n\nPlainest and strongest first; richest and most slender last.', author: 'the classical canon', note: 'Learn the five in order. Everything in the tradition is written in these letters.' },
  { title: 'Servant and served', text: 'The column carries. The entablature is carried. Every moulding says which is which.', author: 'on reading a façade', note: 'A rule for the eye. Hold it, and a colonnade stops being pattern and becomes an argument about weight.' },
  { title: 'On ornament', text: 'Ornament should grow from the building, as the leaf grows from the branch — never stuck on, always belonging.', author: 'after Ruskin and Pugin', note: 'The test of good enrichment: could you remove it without leaving a wound? If yes, it was never part of the building.' },
];

window.PASSAGES = [
  { title: 'The three departments of architecture', source: 'Vitruvius, De Architectura, Book I (Morgan trans.)', text: 'All these must be built with due reference to durability, convenience, and beauty. Durability will be assured when foundations are carried down to the solid ground and materials wisely and liberally selected; convenience, when the arrangement of the apartments is faultless and presents no hindrance to use, and when each class of building is assigned to its suitable and appropriate exposure; and beauty, when the appearance of the work is pleasing and in good taste, and when its members are in due proportion according to correct principles of symmetry.' },
  { title: 'On the well-ordered house', source: 'Andrea Palladio, The Four Books of Architecture, Book II', text: 'As in the human body there are some parts noble and beautiful, and others rather ignoble and disagreeable, and yet we see that the former have great need of the latter, and that they could not subsist without them; so in a building there ought to be some parts considerable and honoured, and some less elegant; without which the former could not remain free, and would in part lose somewhat of their dignity and beauty.\n\nThe beauty will result from the beautiful form and from the correspondence of the whole to the parts, of the parts amongst themselves, and of these again to the whole; so that the structure may appear an entire and complete body, wherein each member agrees with the other, and all the members are necessary for the accomplishment of the building.' },
  { title: 'The lamp of memory', source: 'John Ruskin, The Seven Lamps of Architecture, 1849', text: 'When we build, let us think that we build for ever. Let it not be for present delight, nor for present use alone; let it be such work as our descendants will thank us for, and let us think, as we lay stone on stone, that a time is to come when those stones will be held sacred because our hands have touched them, and that men will say, as they look upon the labour and wrought substance of them, "See! this our fathers did for us."\n\nFor, indeed, the greatest glory of a building is not in its stones, nor in its gold. Its glory is in its Age, and in that deep sense of voicefulness, of stern watching, of mysterious sympathy, which we feel in walls that have long been washed by the passing waves of humanity.' },
  { title: 'On imitation and invention', source: 'Leon Battista Alberti, On the Art of Building, c. 1450', text: 'I will not deny that it is convenient to imitate those who have built well before us, and that the surest way to good building is to follow the reasons of those whom experience has approved. Yet we should not so bind ourselves to imitation as to lose our own judgement; for the ancients themselves, whom we so justly admire, did not so much follow others as follow Nature, who is the surest guide of all. Take from the ancients their reasons, not merely their forms; for it is by understanding why a thing was done that we learn to do well ourselves.' },
];

window.WORDS = [
  { word: 'entablature', lang: 'Italian / Latin', root: 'intavolatura, from tabula (board)', meaning: 'the whole horizontal band a colonnade carries — architrave, frieze and cornice together', english: 'Above the columns on any classical bank, church or town hall: the layered horizontal top before the roof.' },
  { word: 'pediment', lang: 'uncertain; perhaps from "pyramid"', root: 'English, 16th c.', meaning: 'the low triangular gable crowning a temple front, portico or window', english: 'The triangle over a grand doorway or above the columns of a temple-fronted building.' },
  { word: 'architrave', lang: 'Italian / Greek', root: 'archi- (chief) + trabs (beam)', meaning: 'the lowest band of the entablature — the main beam resting directly on the capitals', english: 'The plain flat band immediately above a row of columns; also the moulded frame around a door or window.' },
  { word: 'pilaster', lang: 'Italian', root: 'pilastro, from pila (pillar)', meaning: 'a flattened column set against a wall — the order in relief rather than in the round', english: 'On many façades: shallow "columns" that are really part of the wall, framing windows and corners.' },
  { word: 'frieze', lang: 'French / Latin', root: 'frise, perhaps from Phrygia', meaning: 'the middle band of the entablature, often carved with figures, or plain', english: 'The band between the architrave and the cornice — the Parthenon frieze is the most famous example.' },
  { word: 'rustication', lang: 'Latin', root: 'rusticus (of the country, rough)', meaning: 'masonry cut with deep joints and a rough face, to give a base weight and strength', english: 'The heavy, grooved stonework often used on the ground floor of palaces and grand houses.' },
  { word: 'portico', lang: 'Italian / Latin', root: 'porticus (porch)', meaning: 'a roofed porch of columns forming the entrance to a building', english: 'The columned porch you climb the steps into — the front of a temple, a church, or a country house.' },
  { word: 'dentil', lang: 'Latin', root: 'dens, dentis (tooth)', meaning: 'a small square block, repeated in a row under a cornice like a set of teeth', english: 'The little repeating blocks beneath the top moulding of a classical cornice — look up and count them.' },
];
