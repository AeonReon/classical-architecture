// tryit-data.js — optional beginner "Try it" exercises, keyed by topic id.
// art.html attaches window.TRYIT[id] as a 6th sub-section when present.
// Exercise types: choice (q, options[], answer index, explain), reveal
// (q, hint, reveal), memorise (text, source). Seed a few; expand in Wave 2.

window.TRYIT = {
  foundation: {
    title: 'Try it',
    intro: 'A few quick things to fix the basics in your eye. Do them now — it takes two minutes.',
    exercises: [
      { type: 'choice',
        q: 'Vitruvius set three tests for any building. Which is NOT one of them?',
        options: ['Firmness (it stands)', 'Commodity (it serves its use)', 'Delight (it pleases the eye)', 'Economy (it was cheap to build)'],
        answer: 3,
        explain: 'The three are firmitas, utilitas, venustas — firmness, commodity and delight. Cost never made the list.' },
      { type: 'choice',
        q: 'You look up at a column and see two carved scrolls at the top. Which order is it?',
        options: ['Doric', 'Ionic', 'Corinthian', 'Tuscan'],
        answer: 1,
        explain: 'Scrolls (volutes) mean Ionic. Plain cushion = Doric; acanthus leaves = Corinthian; plainest of all = Tuscan.' },
      { type: 'reveal',
        q: 'In one sentence, why is classical architecture called a "language"?',
        hint: 'Think about letters, grammar and sentences.',
        reveal: 'Because the same small set of elements — the orders as letters, proportion as grammar, the building types as sentences — is recombined endlessly, so once you learn the grammar you can read buildings you have never seen.' },
      { type: 'memorise',
        text: 'Firmness, commodity, and delight.',
        source: 'Sir Henry Wotton, after Vitruvius' }
    ]
  }
};
