// videos-data.js — one curated video per topic, shown in a "Watch" block on
// the topic overview page (art.html?id=…).
//
// THE JOB: after five to ten minutes, the viewer should KNOW what this style,
// order or element is. Not be persuaded to like it — know it. A video that
// only admires a building without teaching how to read one does not qualify,
// however beautiful.
//
// THE SELECTION RULE:
//   1. Explains. It must answer "what is this and how do I recognise it".
//   2. From inside. Each style presented on its own terms, at full strength.
//      No "the problem with Baroque". Even the revivals get their own case.
//   3. Watchable. Popularity and production quality count.
//   4. Verified. Every id checked live: transcript read for framing and
//      accuracy, video confirmed public and embeddable, real view counts.
//   5. Honest about gaps. Some topics have nothing good and get nothing.
//
// `start` (optional, seconds) deep-links into a longer video. The five orders
// all use one film in which a practising classical architect draws each order
// in turn — so each order page opens at its own section rather than making
// you scrub for it.
//
// Run `node scripts/check-videos.mjs` to re-verify and refresh view counts.

window.VIDEOS = {

  foundation: {
    id: 'nrRJkzXl4a4', title: 'The classical orders', channel: 'Smarthistory', mins: '11:07', views: 1279935,
    why: 'If you watch one thing before anything else on this app, watch this. The orders are the grammar of every classical building — once you can tell a Doric from an Ionic from a Corinthian, you can read a bank, a church, a town hall or a terrace anywhere in the world. Filmed at the buildings themselves by two art historians talking to each other, which is far easier to follow than a lecture.',
    checked: '2026-08-20'
  },

  // ── The Orders ── one film, five sections. George Saumarez Smith is a
  // working classical architect; he draws each order at the board and talks
  // through its proportions as he goes, which is the only way this really
  // lands. Each page starts at its own order.
  tuscan: {
    id: 'neHUbqzyNXU', start: 25, title: 'Drawing the Five Orders — the Tuscan', channel: 'ADAMarchitecture', mins: '20:56', views: 55808,
    why: 'A practising classical architect draws the Tuscan at the board, and starts here because it is the plainest of the five. Watch how everything is measured in one unit — the diameter of the column at its base — and how the shaft is seven of them tall, straight for the first third and then tapering with the slight swell called entasis, put there purely so the eye reads it as graceful.',
    note: 'The film draws all five orders in turn; this opens at the Tuscan. The other four order pages open at their own section.',
    checked: '2026-08-20'
  },
  doric: {
    id: 'neHUbqzyNXU', start: 275, title: 'Drawing the Five Orders — the Doric', channel: 'ADAMarchitecture', mins: '20:56', views: 55808,
    why: 'The Doric drawn at the board, with the two things that give it away: the fluting cut straight into the shaft, and the frieze above alternating triglyphs and metopes. Seeing it drawn rather than photographed is what makes the rules stick.',
    note: 'The film draws all five orders in turn; this opens at the Doric.',
    checked: '2026-08-20'
  },
  ionic: {
    id: 'neHUbqzyNXU', start: 568, title: 'Drawing the Five Orders — the Ionic', channel: 'ADAMarchitecture', mins: '20:56', views: 55808,
    why: 'The volute — the scroll that everyone recognises and almost nobody can draw — set out step by step, along with the slimmer proportions that go with it. The Ionic is the order to learn second, because once you have it the Corinthian makes sense.',
    note: 'The film draws all five orders in turn; this opens at the Ionic.',
    checked: '2026-08-20'
  },
  corinthian: {
    id: 'neHUbqzyNXU', start: 668, title: 'Drawing the Five Orders — the Corinthian', channel: 'ADAMarchitecture', mins: '20:56', views: 55808,
    why: 'The most ornate of the five, and the one Rome loved most. Watch the acanthus leaves built up in two rows with the small volutes above, and note how much taller and more slender the whole order becomes as the decoration increases.',
    note: 'The film draws all five orders in turn; this opens at the Corinthian.',
    checked: '2026-08-20'
  },
  composite: {
    id: 'neHUbqzyNXU', start: 1034, title: 'Drawing the Five Orders — the Composite', channel: 'ADAMarchitecture', mins: '20:56', views: 55808,
    why: 'The Roman invention that bolts the Ionic volute onto the Corinthian acanthus — the richest of the five, and the last to be codified. Coming at the end of the film, it also lets you see all five standing side by side on the same page for comparison.',
    note: 'The film draws all five orders in turn; this opens at the Composite.',
    checked: '2026-08-20'
  },

  // ── The Elements ──
  proportion: {
    id: 'sgyMZApnwSE', title: 'Understanding Classical Proportions', channel: 'THISisCarpentry', mins: '9:25', views: 150784,
    why: 'The single idea that makes classical architecture make sense: nothing is measured in feet or metres, everything is measured in diameters — the width of the column at its base. The Doric column is eight of them tall; its base and capital are half a diameter each; the entablature above is two. Change the diameter and the whole building rescales in proportion. Nine minutes and the system clicks.',
    checked: '2026-08-20'
  },

  // ── The Styles ──
  greek: {
    id: 'KSpR6vi3kkA', title: 'The Development of Ancient Greek Architecture', channel: 'World History Encyclopedia', mins: '11:14', views: 58501,
    why: 'How the temple got its shape — from timber and mud brick to marble, and how the form settled into the thing every later century would copy. Good on the refinements you would never notice and could not unsee afterwards: columns that lean slightly inwards, a floor that curves upward at the centre, all of it correcting what the eye would otherwise get wrong.',
    checked: '2026-08-20'
  },
  roman: {
    id: 'JW5-7qGPl6U', title: 'The Roman Pantheon Explained', channel: 'Manuel Bravo', mins: '13:46', views: 1148173,
    why: 'An architect taking apart the building that shows what Rome added to Greece. The Greeks worked in columns and beams and built outward; Rome had concrete and the arch, and so could build the inside — a dome 43 metres across, unreinforced, still the largest of its kind after nineteen centuries, with a hole open to the sky at the top of it.',
    checked: '2026-08-20'
  },
  renaissance: {
    id: 'wLHBHA0sVgE', title: 'Renaissance Architecture', channel: 'Encyclopaedia Britannica', mins: '3:58', views: 205154,
    why: 'Four minutes, and precise. Florence in the early 1400s, architects reading Vitruvius and measuring Roman ruins to work out the rules again; the column and round arch and dome coming back; and the one thing that separates it from the Gothic it replaced — beauty pursued through proportion rather than height.',
    checked: '2026-08-20'
  },
  palladian: {
    id: 'rUOvFGh0l4Y', title: 'Andrea Palladio', channel: 'The School of Life', mins: '5:24', views: 300765,
    why: 'The best five minutes on Palladio anywhere, because it explains what he was FOR rather than only what he built. He held that architecture exists to help us become better people, and designed for three states of mind — calm, harmony and dignity — then shows you exactly which moves in a room produce each one.',
    checked: '2026-08-20'
  },
  baroque: {
    id: 'EFHPAbHaoqk', title: 'How to recognize Baroque art', channel: 'Smarthistory', mins: '9:31', views: 602806,
    why: 'Teaches the Baroque instinct better than any of the architecture videos do: the Renaissance held a body still and balanced, and the Baroque catches it at the split second of maximum tension, wound up like a spring about to release. Once you have that in your eye you can see the same thing happening in a façade — the movement, the drama, the deliberate refusal to sit still.',
    note: 'It teaches through sculpture and painting rather than buildings. There is no good short English explainer on Baroque architecture specifically; this gets you the sensibility, and the reading above applies it to the buildings.',
    checked: '2026-08-20'
  },
  neoclassical: {
    id: '4WJparOD6H8', title: 'History Summarized: Neoclassical Architecture', channel: 'Overly Sarcastic Productions', mins: '11:36', views: 487001,
    why: 'Fast, funny and genuinely well-informed on how Palladio\'s rulebook became the default style of banks, museums, courthouses and country houses across Europe and America. The enthusiasm is the point — it argues for the style rather than filing it away as a period.',
    note: 'One mild swear in the opening minute.',
    checked: '2026-08-20'
  },
  'gothic-revival': {
    id: '7oBUIo5R5qg', title: 'Barry and Pugin, the Palace of Westminster', channel: 'Smarthistory', mins: '6:28', views: 113450,
    why: 'The whole Gothic Revival argument in one building. After the old palace burned in 1834 the competition for its replacement required entries to be Gothic or Elizabethan — nothing classical — and Pugin\'s case was that Gothic was not a style you picked but the honest, native, Christian way to build. This is why the seat of a Victorian empire looks medieval.',
    checked: '2026-08-20'
  }

  // NO VIDEO, on purpose — nothing good enough exists:
  //   greek-revival   — covered only in passing inside general style round-ups.
  //   ornament        — no explainer on classical mouldings and detail.
  //   building-types  — no explainer on temple / basilica / villa as types.
  //   materials       — searches return survival and DIY content, not classical
  //                     construction.
  //   architects-mind — a category this app invented; no video matches it.

};
