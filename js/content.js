/* ============================================================
   Lesson content for The Orders.
   Written as a re-expression of the classical canon
   (Vitruvius, Palladio, Vignola, Summerson) — no copyrighted text.
   ============================================================ */

const CONTENT = {

  paths: [

    // =====================================================
    // PATH I — THE FIVE ORDERS
    // =====================================================
    {
      id: 'orders',
      roman: 'I',
      title: 'The Five Orders',
      subtitle: 'The alphabet of the classical tradition. Before anything else, learn these.',
      lessons: [
        {
          id: 'intro',
          title: 'What is an Order?',
          slides: [
            {
              heading: 'What is an Order?',
              body: `<p>An <strong>order</strong> is a complete system: the column (with base, shaft, capital) together with everything it carries above (the entablature), and everything it stands on (the platform). It governs <em>proportion</em>, <em>ornament</em>, and <em>character</em>.</p>
                     <p>Think of an order as a <strong>personality</strong>. The Greeks associated Doric with the male body, Ionic with the matronly, Corinthian with the maidenly. Change the order and you change the mood of the building — the way a room full of basses sounds different from a room full of sopranos.</p>`,
            },
            {
              heading: 'The Five',
              body: `<p>There are five orders in the Western canon, usually presented from <em>plainest and sturdiest</em> to <em>most slender and ornate</em>:</p>
                     <div class="term-list">
                       <span class="term-chip">Tuscan</span>
                       <span class="term-chip">Doric</span>
                       <span class="term-chip">Ionic</span>
                       <span class="term-chip">Corinthian</span>
                       <span class="term-chip">Composite</span>
                     </div>
                     <p>Tuscan and Composite are Roman additions. The Greeks had Doric, Ionic, and (rarely) Corinthian. The five were codified in the Italian Renaissance — especially by <em>Vignola</em> and <em>Serlio</em> — and became the common grammar that every classical building since has spoken.</p>`,
            },
            {
              heading: 'How to Tell Them Apart',
              body: `<p>A quick rule that will get you 95% of the way:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Tuscan</div><div class="fact-value">Plain. Unfluted shaft. Ring + cushion + slab. No ornament.</div>
                       <div class="fact-label">Doric</div><div class="fact-value">Fluted shaft. Plain cushion + square slab on top. Above: <em>triglyphs</em> and <em>metopes</em>.</div>
                       <div class="fact-label">Ionic</div><div class="fact-value">Two <em>volutes</em> (scrolls) curling at the corners of the capital.</div>
                       <div class="fact-label">Corinthian</div><div class="fact-value">A basket of <em>acanthus leaves</em>. Most ornate.</div>
                       <div class="fact-label">Composite</div><div class="fact-value">Acanthus leaves below, large Ionic volutes above. Roman, grand.</div>
                     </div>`,
            },
            {
              heading: 'The Order as a Language',
              body: `<p>The orders are not rules that constrain — they are <em>words</em> that let you speak. A bank in Corinthian says: <em>I am opulent and established</em>. A courthouse in Doric says: <em>I am incorruptible</em>. A farmhouse porch in Tuscan says: <em>I am honest and plain</em>.</p>`,
              quote: {
                text: 'All architecture is a question of character, and to give it character one must understand the Orders.',
                cite: 'after John Summerson'
              }
            }
          ],
          quiz: [
            { q: 'Which order is the simplest and heaviest-looking?', choices: ['Tuscan','Corinthian','Ionic','Composite'], correct: 0, why: 'Tuscan has no fluting and no ornament. It is the Roman simplification of Doric.' },
            { q: 'Which two orders are Roman additions?', choices: ['Doric & Ionic','Tuscan & Composite','Corinthian & Ionic','Tuscan & Doric'], correct: 1, why: 'The Greeks had Doric, Ionic, and (rarely) Corinthian. Tuscan and Composite were codified by the Romans.' },
            { q: 'The signature feature of the Ionic capital is:', choices: ['Acanthus leaves','A plain square slab','Two spiral volutes','A fluted neck'], correct: 2, why: 'The volutes — curling scrolls on either side — are unmistakable.' },
            { q: 'Which order is most ornate?', choices: ['Corinthian','Tuscan','Doric','Composite'], correct: 0, why: 'Corinthian wraps the capital in acanthus leaves. Composite is grand but simpler in ornament.' }
          ]
        },

        {
          id: 'tuscan',
          title: 'The Tuscan Order',
          svgKey: 'tuscan',
          slides: [
            {
              heading: 'The Tuscan Order',
              svg: 'tuscan',
              body: `<p>The Tuscan is the <strong>simplest and most solemn</strong> of the orders — described by Palladio as <em>"the plainest and most solid."</em> It has a plain base, an unfluted shaft, and a capital of three pieces: a ring (astragal), a cushion (echinus), and a square slab (abacus).</p>
                     <p>Its character is <strong>rustic strength</strong>. Where Doric is a soldier, Tuscan is a farmer.</p>`
            },
            {
              heading: 'Proportions',
              body: `<div class="fact-grid">
                       <div class="fact-label">Height</div><div class="fact-value">~7 column diameters (stocky)</div>
                       <div class="fact-label">Shaft</div><div class="fact-value">Unfluted, smooth</div>
                       <div class="fact-label">Capital</div><div class="fact-value">Plain — astragal, echinus, square abacus</div>
                       <div class="fact-label">Base</div><div class="fact-value">Simple: plinth + single torus</div>
                       <div class="fact-label">Feeling</div><div class="fact-value">Heavy, honest, rural</div>
                     </div>`
            },
            {
              heading: 'When to Recognise It',
              body: `<p>Tuscan appears on farmhouses, gatehouses, military buildings, warehouses, and early American porches. Inigo Jones' <em>Covent Garden Piazza</em> (1631) used it famously to give a sober tone. You'll also find it on many American state capitol porticoes where the architect wanted <em>gravity without ornament</em>.</p>
                     <p>If a column has <em>no fluting and no decoration</em> and looks like it could hold up a barn — you're looking at Tuscan.</p>`
            }
          ],
          quiz: [
            { q: 'Which feature tells you a column is Tuscan?', svg: 'tuscan', choices: ['Volutes at the corners','Acanthus leaves','An unfluted shaft with plain capital','Triglyphs on the frieze'], correct: 2, why: 'Tuscan is defined by its plainness — no fluting, no ornament.' },
            { q: 'How tall is a Tuscan column, in diameters?', choices: ['4–5','~7','~9','~10'], correct: 1, why: 'Tuscan is the stockiest proportion — about 7 diameters. That short ratio gives it its rustic, solid look.' },
            { q: 'Which building type suits the Tuscan mood?', choices: ['A triumphal arch','A luxury opera house','A farmhouse porch','A royal chapel'], correct: 2, why: 'Tuscan speaks of honest, utilitarian work — farmhouses, gatehouses, warehouses.' }
          ]
        },

        {
          id: 'doric',
          title: 'The Doric Order',
          svgKey: 'doric',
          slides: [
            {
              heading: 'The Doric Order',
              svg: 'doric',
              body: `<p>Doric is the <strong>first great Greek order</strong>. Vitruvius tells us it was invented when the Dorians of the Peloponnese built a temple to Apollo and wanted proportions worthy of a man's strength. The capital is a bare cushion (echinus) and a square slab (abacus) — no ornament. The shaft is fluted with <em>sharp arrises</em> (no flat fillet between flutes).</p>`
            },
            {
              heading: 'Greek vs Roman Doric',
              body: `<p>A key distinction worth burning in:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Greek Doric</div><div class="fact-value">No base. Column sits directly on the stylobate. Squat — ~5.5 diameters.</div>
                       <div class="fact-label">Roman Doric</div><div class="fact-value">Has a base. Taller (~7 diameters). Sometimes smooth shaft.</div>
                     </div>
                     <p>If you see a <em>baseless</em>, <em>fluted</em> column with a plain capital, you are almost certainly looking at Greek Doric.</p>`
            },
            {
              heading: 'The Doric Frieze',
              svg: 'entablature-doric-labeled',
              body: `<p>The Doric entablature has a famously legible rhythm: <strong>triglyphs</strong> (three vertical grooves) alternating with <strong>metopes</strong> (usually sculpted square panels). Each triglyph sits above a column — with one extra at the corner, which creates the classic <em>corner triglyph problem</em> that occupied architects for 2000 years.</p>
                     <p>Below each triglyph you'll often see <strong>regulae</strong> — short bands with little peg-like <em>guttae</em>, the decorative descendants of wooden pegs in the ancestral timber original.</p>`
            },
            {
              heading: 'The Mood',
              body: `<p>Doric says: <em>I am strong. I am grave. I do not adorn myself.</em> It is the order of Hercules, of courthouses, of war memorials.</p>
                     <p>The <strong>Parthenon</strong> (Athens, 447–432 BCE) is the pinnacle of Doric — so finely tuned that every visible line curves ever so slightly to correct optical illusions.</p>`,
              quote: {
                text: 'The Doric order gained the proportion, strength, and beauty of the body of a man.',
                cite: 'Vitruvius, Book IV'
              }
            }
          ],
          quiz: [
            { q: 'Which frieze feature is Doric?', choices: ['Dentils','Triglyphs and metopes','A continuous sculpted band','Acanthus scroll'], correct: 1, why: 'The alternating triglyph–metope rhythm is unique to Doric.' },
            { q: 'Greek Doric columns have...', choices: ['No base','An Attic base','A pedestal','An astragal base'], correct: 0, why: 'Greek Doric sits directly on the stylobate. Roman Doric adds a base.' },
            { q: 'The Parthenon is which order?', choices: ['Ionic','Doric','Corinthian','Tuscan'], correct: 1, why: 'The Parthenon is the canonical Doric temple — strict, severe, refined to the millimetre.' },
            { q: 'Which capital is Doric?', svg: 'doric', choices: ['This one','Ionic','Corinthian','Composite'], correct: 0, why: 'Doric capital: plain convex echinus + square abacus, fluted shaft.' }
          ]
        },

        {
          id: 'ionic',
          title: 'The Ionic Order',
          svgKey: 'ionic',
          slides: [
            {
              heading: 'The Ionic Order',
              svg: 'ionic',
              body: `<p>The Ionic was born on the east side of the Aegean — <strong>Ionia</strong> (western Turkey) and the islands — and brought back to mainland Greece. Its signature: <strong>two volutes</strong>, paired scroll-like spirals, hanging below a thin abacus. Between them sits an <em>echinus</em> carved with the <em>egg-and-dart</em> molding.</p>
                     <p>Vitruvius called Ionic the order of the <em>matron</em> — more slender, more learned, more nuanced than Doric. It is the order of libraries, of academies, of Athena as scholar rather than warrior.</p>`
            },
            {
              heading: 'Proportions and Details',
              body: `<div class="fact-grid">
                       <div class="fact-label">Height</div><div class="fact-value">~8–9 column diameters</div>
                       <div class="fact-label">Shaft</div><div class="fact-value">Fluted — 24 flutes, with flat <em>fillets</em> between them</div>
                       <div class="fact-label">Base</div><div class="fact-value">Attic base: torus–scotia–torus</div>
                       <div class="fact-label">Frieze</div><div class="fact-value">Continuous, often sculpted (no triglyphs)</div>
                       <div class="fact-label">Cornice</div><div class="fact-value">Features <em>dentils</em> — a row of tooth-like blocks</div>
                     </div>`
            },
            {
              heading: 'The Ionic Entablature',
              svg: 'entablature-ionic-labeled',
              body: `<p>Where Doric talks in strong beats (triglyph–metope, triglyph–metope), Ionic speaks in flowing prose: a <strong>continuous frieze</strong> that can tell a story. The <em>Parthenon frieze</em> — its procession of horsemen and maidens — is Ionic, even though the building is Doric. (A famous mixing.)</p>
                     <p>Above, the <strong>dentils</strong> — little blocks spaced like teeth — are the Ionic calling card of the cornice.</p>`
            },
            {
              heading: 'Famous Ionic',
              body: `<p>The <em>Erechtheion</em> in Athens is the classic — including its famous <strong>Caryatid Porch</strong> where columns are replaced by draped female figures. The <em>Temple of Athena Nike</em> on the Acropolis is a small Ionic gem. In the United States, look at the <em>Treasury Building</em> in Washington DC — its long colonnade is Ionic.</p>`
            }
          ],
          quiz: [
            { q: 'Which feature marks the Ionic capital?', svg: 'ionic', choices: ['Acanthus leaves','Triglyphs','Two volutes','A plain cushion'], correct: 2, why: 'The paired spiral volutes are Ionic\'s signature.' },
            { q: 'How many flutes does a typical Ionic shaft have?', choices: ['20','24','16','32'], correct: 1, why: '24 flutes is the canonical Ionic count — and each is separated by a flat fillet, unlike Doric\'s sharp arrises.' },
            { q: 'The row of small tooth-like blocks in an Ionic cornice is called:', choices: ['Triglyphs','Modillions','Dentils','Mutules'], correct: 2, why: 'Dentils — from the Latin for "teeth" — run along the underside of the cornice.' },
            { q: 'Ionic friezes are usually:', choices: ['Divided by triglyphs','Left plain','Continuous and often sculpted','Filled with acanthus'], correct: 2, why: 'Ionic has a continuous frieze — perfect for a narrative procession.' }
          ]
        },

        {
          id: 'corinthian',
          title: 'The Corinthian Order',
          svgKey: 'corinthian',
          slides: [
            {
              heading: 'The Corinthian Order',
              svg: 'corinthian',
              body: `<p>The most <strong>ornate</strong> and <strong>slender</strong> of the orders. The capital is a bell-shaped basket (<em>calathus</em>) wrapped in two rows of <strong>acanthus leaves</strong>, with small volutes curling at each corner, and — very often — a central <em>fleuron</em> (rosette) on the abacus.</p>`
            },
            {
              heading: 'The Invention Story',
              body: `<p>Vitruvius tells a charming origin tale: a young girl of Corinth died, and her nurse placed a basket of her belongings on her grave, covering it with a tile. An acanthus plant grew up around the basket, its leaves curling as they hit the tile. The sculptor <strong>Callimachus</strong> passed by, saw the form, and carved it into a capital.</p>
                     <p>Whether true or not, the story captures the feeling: Corinthian is <em>nature transformed into geometry</em>.</p>`,
              quote: {
                text: 'The third order, called Corinthian, imitates the slender figure of a young girl; for the limbs of young girls, by reason of their tender age, can be treated with still greater slenderness.',
                cite: 'Vitruvius, Book IV, Ch. 1'
              }
            },
            {
              heading: 'Proportions',
              body: `<div class="fact-grid">
                       <div class="fact-label">Height</div><div class="fact-value">~10 column diameters — the most slender</div>
                       <div class="fact-label">Shaft</div><div class="fact-value">Fluted, 24 flutes with fillets (as Ionic)</div>
                       <div class="fact-label">Capital</div><div class="fact-value">Two rows of acanthus + 8 small volutes + rosette</div>
                       <div class="fact-label">Greek use</div><div class="fact-value">Rare — Temple of Olympian Zeus, Tower of the Winds</div>
                       <div class="fact-label">Roman use</div><div class="fact-value">Dominant — the Romans loved it</div>
                     </div>`
            },
            {
              heading: 'The Mood',
              body: `<p>Corinthian says: <em>I am refined. I am civilised. I am the culmination of the arts.</em> It is the order of banks, of wealthy churches, of Washington's grand federal buildings, of the <em>Capitol rotunda</em>.</p>`
            }
          ],
          quiz: [
            { q: 'The Corinthian capital is defined by...', choices: ['Volutes alone','Acanthus leaves','A plain cushion','A crown of gold'], correct: 1, why: 'Two rows of acanthus leaves wrap the bell-shaped capital. Small volutes emerge at the corners, and a rosette sits on the abacus.' },
            { q: 'Who, in legend, invented the Corinthian capital?', choices: ['Vitruvius','Palladio','Callimachus','Phidias'], correct: 2, why: 'Vitruvius credits Callimachus, who saw an acanthus growing up around a basket on a girl\'s grave.' },
            { q: 'Corinthian column height is roughly:', choices: ['5 diameters','7 diameters','10 diameters','14 diameters'], correct: 2, why: '~10 diameters — the most slender of the orders.' },
            { q: 'Which capital is Corinthian?', svg: 'corinthian', choices: ['This one','Doric','Ionic','Composite'], correct: 0, why: 'Corinthian: bell of acanthus leaves, corner helices, abacus with concave sides and central rosette.' }
          ]
        },

        {
          id: 'composite',
          title: 'The Composite Order',
          svgKey: 'composite',
          slides: [
            {
              heading: 'The Composite Order',
              svg: 'composite',
              body: `<p>A <strong>Roman invention</strong>, late (~1st century CE): take the acanthus leaves of Corinthian, pile <strong>large Ionic volutes</strong> above them, and you have the Composite. It is grander than Corinthian — the volutes are bigger and bolder.</p>
                     <p>You see it on the great Roman triumphal arches — the <em>Arch of Titus</em> in Rome is the textbook example. When Romans wanted a column that shouted <em>imperial triumph</em>, they chose Composite.</p>`
            },
            {
              heading: 'When to Use It',
              body: `<p>Vignola, in the Renaissance, placed the Composite at the <strong>top</strong> of the hierarchy of orders, reserved for the most honorable uses. Serlio called it <em>la mistolinea</em> — the mixed line.</p>
                     <p>On multi-storey classical façades (think Colosseum, or a Beaux-Arts palace), the orders rise from heavy to light: <em>Tuscan → Doric → Ionic → Corinthian → Composite</em>. The Composite, if used, sits on top.</p>`
            },
            {
              heading: 'How to Tell It from Corinthian',
              body: `<p>Look at the <strong>top</strong> of the capital. Both have acanthus leaves at the bottom. But:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Corinthian</div><div class="fact-value">Small helices / volutes at the corners, set within the leaves</div>
                       <div class="fact-label">Composite</div><div class="fact-value">Large, prominent Ionic-style volutes sitting above the leaves</div>
                     </div>`
            }
          ],
          quiz: [
            { q: 'The Composite order combines which two orders?', choices: ['Doric and Ionic','Ionic and Corinthian','Tuscan and Doric','Corinthian and Doric'], correct: 1, why: 'Ionic volutes (large) + Corinthian acanthus leaves = Composite.' },
            { q: 'Composite is an invention of:', choices: ['The Greeks','The Etruscans','The Romans','The Renaissance Italians'], correct: 2, why: 'The Romans created Composite — the Arch of Titus is the classic early example.' },
            { q: 'Which capital is Composite?', svg: 'composite', choices: ['This one','Doric','Ionic','Tuscan'], correct: 0, why: 'Note the large Ionic volutes SITTING ABOVE a ring of acanthus — the combination is the clue.' }
          ]
        },

        {
          id: 'review',
          title: 'Review — Name the Order',
          slides: [
            {
              heading: 'Name the Order',
              body: `<p>Put your eye to the test. The quiz that follows shows capitals one at a time. Name each order. If you can do this quickly and confidently, you've learned the alphabet of classical architecture — and every other lesson becomes easier from here.</p>`
            }
          ],
          quiz: [
            { q: 'Name this order.', svg: 'tuscan',      choices: ['Tuscan','Doric','Ionic','Corinthian'],    correct: 0, why: 'Unfluted shaft, plain capital — Tuscan.' },
            { q: 'Name this order.', svg: 'doric',       choices: ['Tuscan','Doric','Ionic','Composite'],     correct: 1, why: 'Fluted shaft, plain convex echinus, square abacus — Doric.' },
            { q: 'Name this order.', svg: 'ionic',       choices: ['Ionic','Corinthian','Doric','Tuscan'],    correct: 0, why: 'Two volutes at the corners — Ionic.' },
            { q: 'Name this order.', svg: 'corinthian',  choices: ['Composite','Corinthian','Ionic','Doric'], correct: 1, why: 'Bell of acanthus leaves, small corner helices, rosette — Corinthian.' },
            { q: 'Name this order.', svg: 'composite',   choices: ['Composite','Corinthian','Ionic','Tuscan'], correct: 0, why: 'Large Ionic volutes above acanthus leaves — Composite.' }
          ]
        }
      ]
    },

    // =====================================================
    // PATH II — ANATOMY OF A TEMPLE
    // =====================================================
    {
      id: 'anatomy',
      roman: 'II',
      title: 'Anatomy of a Temple',
      subtitle: 'The words. Without them you cannot describe what you are looking at.',
      lessons: [
        {
          id: 'overview',
          title: 'The Temple Front',
          slides: [
            {
              heading: 'The Three Horizontal Bands',
              svg: 'temple-labeled',
              body: `<p>Every classical façade stacks three zones, bottom to top:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Platform</div><div class="fact-value"><em>stereobate</em> (foundation) + <em>stylobate</em> (top step, where columns stand)</div>
                       <div class="fact-label">Columns</div><div class="fact-value">base + shaft + capital — the vertical support</div>
                       <div class="fact-label">Entablature</div><div class="fact-value">the horizontal beam the columns carry: architrave, frieze, cornice</div>
                     </div>
                     <p>Above the entablature at each short end sits the <strong>pediment</strong> — the triangular gable that gives a classical building its distinctive "roof-line."</p>`
            }
          ],
          quiz: [
            { q: 'What sits directly on top of the columns?', choices: ['The pediment','The stylobate','The entablature','The tympanum'], correct: 2, why: 'Columns carry the entablature. The pediment sits above the entablature at the short ends.' },
            { q: 'The top step of the platform — where columns stand — is the:', choices: ['Stylobate','Stereobate','Architrave','Plinth'], correct: 0, why: 'Stylobate is the top step. Stereobate is the masonry foundation below it.' },
            { q: 'The three parts of the entablature, bottom to top, are:', choices: ['Cornice, frieze, architrave','Architrave, frieze, cornice','Frieze, cornice, architrave','Plinth, shaft, capital'], correct: 1, why: 'Architrave (bottom) → frieze (middle) → cornice (top, projecting).' }
          ]
        },

        {
          id: 'column',
          title: 'The Column',
          slides: [
            {
              heading: 'Base, Shaft, Capital',
              svg: 'column',
              body: `<p>A column is not a single thing — it is three things carefully joined.</p>
                     <div class="fact-grid">
                       <div class="fact-label">Base</div><div class="fact-value">The foot. Usually a <em>plinth</em> (square block), a <em>torus</em> (convex ring), sometimes a <em>scotia</em> (concave ring) between two tori.</div>
                       <div class="fact-label">Shaft</div><div class="fact-value">The body. Fluted or smooth. Subtly tapered, with a gentle convex swelling called <em>entasis</em>.</div>
                       <div class="fact-label">Capital</div><div class="fact-value">The head. Its ornament identifies the order.</div>
                     </div>
                     <p><strong>Greek Doric has no base</strong> — the shaft sits directly on the stylobate. Every other order has a base.</p>`
            },
            {
              heading: 'Entasis — the subtle swelling',
              body: `<p>If you build a column with perfectly straight sides, a curious thing happens: it looks <em>waisted</em> — pinched in the middle. The Greeks noticed this and corrected it by giving the shaft a very subtle convex swelling, peaking about a third of the way up.</p>
                     <p>This is <strong>entasis</strong>, and it is one of the most famous examples of <em>optical correction</em> in architecture. At the Parthenon the swell is less than 2 cm over 10 metres — you cannot see it; but if it were missing, the columns would look weak.</p>`,
              quote: {
                text: 'The human eye, always seeking beauty, must be indulged — and where truth of shape would look wrong, truth must yield to appearance.',
                cite: 'paraphrase of Vitruvius, Book III'
              }
            },
            {
              heading: 'Fluting',
              body: `<p>The vertical grooves on a shaft are <strong>flutes</strong>. The sharp ridges between them are <strong>arrises</strong>; the flat strips (when they exist) are <strong>fillets</strong>.</p>
                     <div class="fact-grid">
                       <div class="fact-label">Doric</div><div class="fact-value">20 flutes, sharp arrises, no fillets</div>
                       <div class="fact-label">Ionic</div><div class="fact-value">24 flutes, flat fillets between them</div>
                       <div class="fact-label">Corinthian</div><div class="fact-value">24 flutes with fillets (like Ionic)</div>
                       <div class="fact-label">Tuscan</div><div class="fact-value">Unfluted — the shaft is smooth</div>
                     </div>
                     <p>Why flute at all? Fluting plays with light: it turns a flat cylinder into a column that <em>plays</em>, with shadows sliding around it as the sun moves.</p>`
            }
          ],
          quiz: [
            { q: 'The subtle convex swelling of a column shaft is called:', choices: ['Entasis','Flute','Astragal','Dentil'], correct: 0, why: 'Entasis — an optical correction so the shaft does not appear waisted.' },
            { q: 'A Doric shaft has how many flutes, typically?', choices: ['16','20','24','32'], correct: 1, why: '20 flutes with sharp arrises (no fillets).' },
            { q: 'Which order has NO base?', choices: ['Tuscan','Roman Doric','Ionic','Greek Doric'], correct: 3, why: 'Greek Doric stands directly on the stylobate. Every other order has a base.' }
          ]
        },

        {
          id: 'entablature',
          title: 'The Entablature',
          slides: [
            {
              heading: 'Architrave, Frieze, Cornice',
              svg: 'entablature-doric-labeled',
              body: `<p>The entablature is <strong>everything the column carries</strong>. Three bands, bottom to top:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Architrave</div><div class="fact-value">The main beam, spanning column to column. Plain in Doric; in Ionic divided into three fasciae (stepped bands).</div>
                       <div class="fact-label">Frieze</div><div class="fact-value">The middle band. In Doric: <em>triglyphs</em> (three-grooved blocks) alternating with <em>metopes</em> (sculpted panels). In Ionic and Corinthian: a continuous band, often sculpted.</div>
                       <div class="fact-label">Cornice</div><div class="fact-value">The projecting crown. Casts the deep shadow that gives the building its upper horizon. Often has <em>dentils</em> (Ionic) or <em>modillions</em> (Corinthian/Composite) under it.</div>
                     </div>`
            },
            {
              heading: 'Why a Cornice Projects',
              body: `<p>The cornice juts out on purpose — it's a <em>weather-stop</em>. A projecting cornice throws rain clear of the wall below, keeps the frieze in shadow (protecting its sculpture), and crowns the building with a strong horizontal line.</p>
                     <p>Walk past any classical building in a city rainstorm and watch where the water falls. That drip-line is the cornice doing its 2500-year-old job.</p>`
            }
          ],
          quiz: [
            { q: 'The middle band of the entablature is the:', choices: ['Architrave','Cornice','Frieze','Abacus'], correct: 2, why: 'Frieze — between architrave (below) and cornice (above).' },
            { q: 'Alternating triglyphs and metopes appear on the frieze of which order?', choices: ['Ionic','Doric','Corinthian','Composite'], correct: 1, why: 'The triglyph–metope rhythm is Doric\'s signature.' },
            { q: 'A projecting cornice serves what practical purpose?', choices: ['To hide the columns','To throw rain clear of the wall','To support the roof directly','To hold up the pediment'], correct: 1, why: 'The cornice is both ornament AND a weather-stop — its projection keeps water off the wall below.' }
          ]
        },

        {
          id: 'pediment',
          title: 'The Pediment',
          slides: [
            {
              heading: 'The Triangular Gable',
              svg: 'pediment-labeled',
              body: `<p>The <strong>pediment</strong> is the triangular gable that sits above the entablature at the short end of a temple. Its parts:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Tympanum</div><div class="fact-value">The flat triangular field inside — often the site of the grandest sculpture</div>
                       <div class="fact-label">Raking cornice</div><div class="fact-value">The two angled edges of the triangle</div>
                       <div class="fact-label">Horizontal cornice</div><div class="fact-value">The base of the triangle — continuous with the main cornice</div>
                       <div class="fact-label">Acroterion</div><div class="fact-value">Ornament at the peak and the two lower corners</div>
                     </div>
                     <p>Greek pediments are <em>low</em> — the slope is shallow, around 12–15°. Gothic "pediments" (which are really gables) are much steeper; a very steep triangle usually means you are <em>not</em> looking at classical.</p>`
            },
            {
              heading: 'Variations: Broken, Segmental, Open',
              body: `<p>The Renaissance and Baroque enjoyed <em>breaking</em> the pediment: leaving a gap at the peak, or curving it into a segment (a shallow arc) rather than a triangle. These variations are later inventions — strict Greek and Roman pediments are always plain triangles, unbroken.</p>
                     <div class="fact-grid">
                       <div class="fact-label">Triangular</div><div class="fact-value">Classical — the default</div>
                       <div class="fact-label">Segmental</div><div class="fact-value">Shallow arc — Roman & Renaissance</div>
                       <div class="fact-label">Broken</div><div class="fact-value">Peak cut open — Baroque</div>
                       <div class="fact-label">Open-bed</div><div class="fact-value">Base cut open — Baroque</div>
                     </div>`
            }
          ],
          quiz: [
            { q: 'The flat triangular field inside a pediment is the:', choices: ['Abacus','Architrave','Tympanum','Entablature'], correct: 2, why: 'Tympanum — often where the main sculptural program lived.' },
            { q: 'An ornament at the peak or corners of a pediment is called:', choices: ['An acroterion','A volute','A dentil','A gutta'], correct: 0, why: 'Acroteria mark the three corners of the pediment.' },
            { q: 'A pediment whose triangular peak is left unclosed is called:', choices: ['Segmental','Broken','Open-bed','Modillioned'], correct: 1, why: 'A broken pediment leaves a gap at the top — a Baroque favourite.' }
          ]
        },

        {
          id: 'refinements',
          title: 'Optical Refinements',
          slides: [
            {
              heading: 'The Greeks and the Seeing Eye',
              body: `<p>The Greek masters knew that what the eye <em>sees</em> is not what a measuring rod records. A perfectly straight horizontal line looks sagged. A perfectly vertical column looks to lean outward. A row of evenly spaced columns looks unevenly spaced at the corners.</p>
                     <p>So they corrected — subtly, invisibly — so that the building, once built, <em>looks</em> right.</p>`
            },
            {
              heading: 'The Parthenon\'s Secret Geometry',
              body: `<p>On the Parthenon, not a single major line is truly straight. Every refinement is small enough to escape notice, and every one of them conspires toward serenity:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Stylobate curves up</div><div class="fact-value">The platform rises ~6 cm in the middle — so it doesn't look sagged</div>
                       <div class="fact-label">Columns lean inward</div><div class="fact-value">A few centimetres off vertical — so they don't look splayed</div>
                       <div class="fact-label">Corner columns thicker</div><div class="fact-value">Seen against bright sky, columns look thinner. Corner columns are fattened to compensate</div>
                       <div class="fact-label">Entasis</div><div class="fact-value">Convex swelling of the shaft — so the shaft doesn't look waisted</div>
                       <div class="fact-label">Column spacing varied</div><div class="fact-value">Corner intercolumniations narrowed — so the corners don't look empty</div>
                     </div>`,
              quote: {
                text: 'Nothing in architecture is more wonderful than the discovery, by a people who could not yet measure in millimetres, of the exact amount of crookedness which the eye demands in order to see straightness.',
                cite: 'after Vitruvius and Banister Fletcher'
              }
            }
          ],
          quiz: [
            { q: 'Why does the Parthenon\'s stylobate curve upward in the middle?', choices: ['For drainage','To correct the optical illusion of a sagging horizontal','Because of settling over time','To make the columns appear taller'], correct: 1, why: 'A perfectly flat long horizontal looks sagged. The curve compensates so it reads as level.' },
            { q: 'Corner columns at the Parthenon are slightly thicker than the others. Why?', choices: ['For extra structural support','So they look equal in brightness against the sky','To mark the entrance corners','For drainage'], correct: 1, why: 'Seen against bright sky, a column reads as thinner. Fattening the corner columns makes them appear equal to the others.' }
          ]
        }
      ]
    },

    // =====================================================
    // PATH III — PROPORTION & VITRUVIUS
    // =====================================================
    {
      id: 'proportion',
      roman: 'III',
      title: 'Proportion & Vitruvius',
      subtitle: 'How the ancients made beauty measurable — and why every part is sized by one unit.',
      lessons: [
        {
          id: 'triad',
          title: 'Firmitas · Utilitas · Venustas',
          slides: [
            {
              heading: 'The Vitruvian Triad',
              body: `<p>In the first book of his <em>Ten Books on Architecture</em> (written around 25 BCE), <strong>Marcus Vitruvius Pollio</strong> gave Western architecture its lasting creed:</p>
                     <div class="term-list">
                       <span class="term-chip">Firmitas</span>
                       <span class="term-chip">Utilitas</span>
                       <span class="term-chip">Venustas</span>
                     </div>
                     <p>A building, he said, must have all three. Miss one, and it fails as architecture.</p>`,
              quote: {
                text: 'All these [buildings] must be built with due reference to durability, convenience, and beauty.',
                cite: 'Vitruvius, Book I, Ch. III'
              }
            },
            {
              heading: 'What Each Word Means',
              body: `<div class="fact-grid">
                       <div class="fact-label">Firmitas</div><div class="fact-value">Firmness / durability. It must stand. Good foundations, good materials, honest construction.</div>
                       <div class="fact-label">Utilitas</div><div class="fact-value">Usefulness. The rooms must serve the purposes they are for. Light where you need it, space where it is needed.</div>
                       <div class="fact-label">Venustas</div><div class="fact-value">Beauty. "When the appearance of the work is pleasing and in good taste, and when its members are in due proportion according to correct principles of symmetry."</div>
                     </div>
                     <p>The famous English rendering, by Sir Henry Wotton in 1624, is the one most architects learn:</p>`,
              quote: { text: 'Firmness, Commodity, and Delight.', cite: 'Sir Henry Wotton, 1624' }
            },
            {
              heading: 'Why This Order Matters',
              body: `<p>Vitruvius listed them <em>firmitas, utilitas, venustas</em> — and the order is not arbitrary. A beautiful building that falls down is not architecture; it is sculpture that collapsed. A sturdy, beautiful building that does not serve its users is a folly. Beauty comes last not because it is least, but because it is built <em>upon</em> the first two.</p>
                     <p>When you evaluate a building — any building — run this triad through your mind: <em>Does it stand well? Does it work well? Does it please well?</em> Three questions. A lifetime of noticing.</p>`
            }
          ],
          quiz: [
            { q: 'Which word means "beauty" in the Vitruvian triad?', choices: ['Firmitas','Utilitas','Venustas','Symmetria'], correct: 2, why: 'Venustas — the third of the three. Firmitas = firmness, utilitas = usefulness.' },
            { q: 'In the 1624 English rendering, utilitas is translated as:', choices: ['Sturdiness','Commodity','Delight','Symmetry'], correct: 1, why: 'Wotton: "Firmness, Commodity, and Delight."' },
            { q: 'Why does firmitas come first?', choices: ['Because it is more important than beauty','Because beauty cannot exist on a building that falls down','Because the Romans were builders not artists','Because Vitruvius was an engineer'], correct: 1, why: 'Beauty depends on firmness — a collapsed structure cannot be beautiful as architecture.' }
          ]
        },

        {
          id: 'module',
          title: 'The Module',
          slides: [
            {
              heading: 'One Measure to Rule Them All',
              svg: 'module',
              body: `<p>The orders are not drawn to absolute dimensions. They are drawn to a <strong>module</strong> — and every part of a column, entablature, and base is sized in terms of that one unit.</p>
                     <p>The module is simply <strong>the diameter of the column at its base</strong>. Or sometimes, its radius.</p>
                     <p>Pick any module — 30 cm, 3 m, 30 m — and the orders scale with you. A Doric column is about 8 modules tall. Its capital is about 1 module high. The entablature is about 2 modules. Everything is a <em>ratio</em>.</p>`
            },
            {
              heading: 'What This Means in Practice',
              body: `<p>Classical proportion is not about size. It is about <em>relation</em>. A tiny garden pavilion and a huge capitol building can use the same orders in the same proportions, and both can be correct.</p>
                     <p>This is why Palladio's pocket-sized Four Books could teach a Virginia planter like Thomas Jefferson to build Monticello: Jefferson just picked his module and multiplied.</p>`,
              quote: {
                text: 'Symmetry is a proper agreement between the members of the work itself, and a relation between the different parts and the whole.',
                cite: 'Vitruvius, Book I, Ch. II'
              }
            }
          ],
          quiz: [
            { q: 'The "module" in classical proportion is:', choices: ['The height of a column','The diameter of a column at its base','The width of a triglyph','The length of a metope'], correct: 1, why: 'The module is the column\'s base diameter. Every other dimension is a multiple of it.' },
            { q: 'Why does classical proportion not specify absolute sizes?', choices: ['The Romans hadn\'t invented rulers','Because beauty is about relation, not size','Because stone varied too much','For religious reasons'], correct: 1, why: 'Proportion is relational. The same orders work at any scale.' }
          ]
        },

        {
          id: 'principles',
          title: 'The Six Principles',
          slides: [
            {
              heading: 'Vitruvius\' Six Principles of Good Design',
              body: `<p>In Book I, Chapter II, Vitruvius lays out six terms that together compose good architecture. The Latin terms are worth knowing — they hide in every later treatise for two thousand years:</p>`
            },
            {
              heading: 'The Six',
              body: `<div class="fact-grid">
                       <div class="fact-label">Ordinatio</div><div class="fact-value"><em>Order</em>. The giving of the right size to every detail — each part proportioned <em>in itself</em>.</div>
                       <div class="fact-label">Dispositio</div><div class="fact-value"><em>Arrangement</em>. The putting of things in their proper places — plans, elevations, sections. The design on paper.</div>
                       <div class="fact-label">Eurythmia</div><div class="fact-value"><em>Beauty of rhythm</em>. When the parts agree — when height answers to breadth, breadth to length, and all with the whole.</div>
                       <div class="fact-label">Symmetria</div><div class="fact-value"><em>Commensurability</em>. A proper agreement between parts — the relation of the whole to a fixed standard of measure.</div>
                       <div class="fact-label">Decor</div><div class="fact-value"><em>Propriety</em>. The building suits its purpose and character. A Doric temple to Mars; a Corinthian temple to Venus. Nothing "overdressed."</div>
                       <div class="fact-label">Distributio</div><div class="fact-value"><em>Economy</em>. Materials and site used well. No waste, no showing off.</div>
                     </div>`
            },
            {
              heading: 'The Difference Between Symmetry and Eurythmy',
              body: `<p>Modern English has collapsed <em>symmetry</em> into a single idea: mirror-image. Vitruvius meant something bigger — a <strong>commensurability of parts with a standard</strong>. If the column is 8 modules tall, the stylobate 1 module thick, the entablature 2 modules deep — then all the parts are <em>symmetric</em> in his sense.</p>
                     <p><strong>Eurythmia</strong> is the <em>felt</em> result: the building looks harmonious, rhythmic, easy. Symmetria is the grammar; eurythmy is the music.</p>`
            }
          ],
          quiz: [
            { q: 'Vitruvius\' term for "propriety" — the building suiting its character — is:', choices: ['Symmetria','Decor','Eurythmia','Ordinatio'], correct: 1, why: 'Decor: a Doric temple for a warrior god, a Corinthian temple for a love god. Fitness to purpose.' },
            { q: 'Eurythmia is best described as:', choices: ['Mirror-image balance','Rhythmic harmony — the felt result of good proportion','The list of materials','A type of frieze'], correct: 1, why: 'Eurythmy is the beauty you feel when everything "flows." Symmetria (commensurability of parts) produces it.' },
            { q: 'Which principle concerns the economical use of materials and site?', choices: ['Distributio','Ordinatio','Decor','Dispositio'], correct: 0, why: 'Distributio — "distribution" — is the Vitruvian word for economy.' }
          ]
        },

        {
          id: 'vitruvian-man',
          title: 'The Vitruvian Man',
          slides: [
            {
              heading: 'Man as the Measure',
              svg: 'vitruvian',
              body: `<p>In Book III, Vitruvius sets out the proportions of a well-formed human body — the face is a tenth of the height, the head an eighth, the navel the centre. Then comes his famous claim:</p>`,
              quote: {
                text: 'If a man lies on his back with hands and feet outspread, and a pair of compasses be centred at his navel, the circle described will touch his fingers and toes. And as the body yields a circular outline, so too a square figure may be found from it.',
                cite: 'Vitruvius, Book III, Ch. I'
              }
            },
            {
              heading: 'Why the Human Body?',
              body: `<p>For Vitruvius, proportion is not an abstract mathematical game. It is <strong>anthropomorphic</strong>: the rules of a beautiful building are the same rules as the rules of a beautiful body. The temple is, in some sense, <em>a body</em>: with a foot, a waist, a head.</p>
                     <p>Leonardo da Vinci's 1490 drawing — the most famous image of this idea — is <em>not an illustration of Vitruvius</em>. It is Leonardo working out, with his own measurements, whether Vitruvius' claim is true. (He found that Vitruvius was almost right, but the centre of the circle and the centre of the square are not the same point.)</p>`
            },
            {
              heading: 'Why This Still Matters',
              body: `<p>When Vitruvius anchors proportion to the body, he does something radical: he says <strong>architecture is for humans because architecture is <em>of</em> humans</strong>. A column is tall like a standing person. A doorway is tall like a person walking through. A seat is the height that lets a person sit.</p>
                     <p>Walk into a modern office tower with nothing body-scaled about it, and you may notice what Vitruvius would have felt: <em>it does not love me</em>. Walk into a Palladian villa, and you will feel the opposite. That is the Vitruvian man at work.</p>`
            }
          ],
          quiz: [
            { q: 'Vitruvius derives architectural proportion from:', choices: ['The stars','The human body','The Pythagorean theorem','The movement of water'], correct: 1, why: 'The human body — Book III opens with a description of perfect bodily proportions as the ground for architectural ones.' },
            { q: 'Who drew the famous 1490 "Vitruvian Man"?', choices: ['Michelangelo','Palladio','Leonardo da Vinci','Raphael'], correct: 2, why: 'Leonardo — who was actually testing whether Vitruvius\' claim about the circle-and-square was geometrically true.' }
          ]
        }
      ]
    },

    // =====================================================
    // PATH IV — STYLES ACROSS TIME
    // =====================================================
    {
      id: 'styles',
      roman: 'IV',
      title: 'Styles Across Time',
      subtitle: 'From the archaic Greeks to the last of the Beaux-Arts. A 2500-year conversation.',
      lessons: [
        {
          id: 'greek',
          title: 'Greek — the Source',
          slides: [
            {
              heading: 'Three Greek Periods',
              body: `<div class="fact-grid">
                       <div class="fact-label">Archaic</div><div class="fact-value">c. 700–480 BCE. Heavy, experimental Doric. Temple of Hera I at Paestum — columns that bulge like jars.</div>
                       <div class="fact-label">Classical</div><div class="fact-value">c. 480–323 BCE. The Parthenon (447–432 BCE) and the Athenian refinements. The high-water mark.</div>
                       <div class="fact-label">Hellenistic</div><div class="fact-value">c. 323–31 BCE. Scale grows; Corinthian begins to be used more widely. Pergamon, the Altar of Zeus.</div>
                     </div>
                     <p>Greek architecture is overwhelmingly <em>temple</em> architecture in the surviving record — and it is overwhelmingly Doric or Ionic in those temples. Corinthian is rare until late.</p>`
            }
          ],
          quiz: [
            { q: 'The Parthenon belongs to which Greek period?', choices: ['Archaic','Classical','Hellenistic','Byzantine'], correct: 1, why: 'Parthenon (447–432 BCE) is the centrepiece of the Classical period.' },
            { q: 'Which order was rare in Greek temple architecture until very late?', choices: ['Doric','Ionic','Corinthian','Tuscan'], correct: 2, why: 'Corinthian was uncommon in Greece; it became dominant under the Romans.' }
          ]
        },
        {
          id: 'roman',
          title: 'Roman — the Builders',
          slides: [
            {
              heading: 'What the Romans Added',
              body: `<p>The Greeks invented the orders. The <strong>Romans systematised them, scaled them up, and bolted them onto arches and domes</strong>.</p>
                     <div class="fact-grid">
                       <div class="fact-label">The arch</div><div class="fact-value">Rome borrowed the arch from the Etruscans and used it everywhere: aqueducts, basilicas, arches of triumph.</div>
                       <div class="fact-label">Concrete</div><div class="fact-value">Roman concrete (<em>opus caementicium</em>) made vast unsupported spaces possible — the Pantheon\'s dome is still the largest unreinforced concrete dome in the world.</div>
                       <div class="fact-label">The engaged column</div><div class="fact-value">Romans attached half-columns to walls as decoration — the orders became <em>applied</em> rather than structural.</div>
                       <div class="fact-label">Composite & Tuscan</div><div class="fact-value">Two more orders added to the canon.</div>
                     </div>`
            }
          ],
          quiz: [
            { q: 'Roman "opus caementicium" is:', choices: ['A kind of marble','Roman concrete','A type of mortar joint','A brick-laying pattern'], correct: 1, why: 'Opus caementicium — the concrete that built the Pantheon\'s dome.' },
            { q: 'An "engaged column" is:', choices: ['A column married to another','A column partly attached to a wall','A column with a metal core','A broken column'], correct: 1, why: 'Engaged (half-)columns decorate walls without being freestanding.' }
          ]
        },
        {
          id: 'renaissance',
          title: 'Renaissance — the Rebirth',
          slides: [
            {
              heading: 'Florence, 1420: A Dome That Shouldn\'t Exist',
              body: `<p>For a thousand years after Rome fell, classical architecture slept in Europe. It woke in 15th-century Italy when <strong>Filippo Brunelleschi</strong> walked in Rome, measured the ruins, and came back to build a dome on Florence Cathedral that nobody else could figure out how to build.</p>
                     <p>The Renaissance recovered the orders, proportion, and the ideal of the architect as a <em>learned</em> profession. Key figures:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Brunelleschi</div><div class="fact-value">The dome of Florence. Pazzi Chapel. Pioneer.</div>
                       <div class="fact-label">Alberti</div><div class="fact-value">Wrote the first Renaissance treatise on architecture (1452). Santa Maria Novella façade.</div>
                       <div class="fact-label">Bramante</div><div class="fact-value">Tempietto (1502) — a jewel; the purest Renaissance building. Original plan for St. Peter\'s.</div>
                       <div class="fact-label">Palladio</div><div class="fact-value">Late Renaissance. His Four Books (1570) became the most copied treatise in history. Villa Rotonda, Il Redentore.</div>
                     </div>`
            }
          ],
          quiz: [
            { q: 'Whose Four Books of Architecture (1570) became the most influential treatise in Western architecture?', choices: ['Alberti','Bramante','Vitruvius','Palladio'], correct: 3, why: 'Palladio\'s Four Books reached Britain, Virginia, and Russia — and shaped neoclassical design for 300 years.' },
            { q: 'Which building was Brunelleschi\'s breakthrough?', choices: ['St. Peter\'s in Rome','Florence Cathedral\'s dome','The Pantheon','The Tempietto'], correct: 1, why: 'The Florence Cathedral dome (completed 1436) — the engineering triumph that opened the Renaissance.' }
          ]
        },
        {
          id: 'later',
          title: 'Baroque → Neoclassical → Beaux-Arts',
          slides: [
            {
              heading: 'The Last Four Hundred Years of Classicism',
              body: `<div class="fact-grid">
                       <div class="fact-label">Baroque</div><div class="fact-value">c. 1600–1750. Classical grammar, <em>loudly</em>. Curved walls, broken pediments, swelling drama. Bernini, Borromini.</div>
                       <div class="fact-label">Neoclassical</div><div class="fact-value">c. 1750–1850. A return to strict proportion and restraint, fuelled by the excavation of Pompeii and Herculaneum. Jefferson, Soane, Schinkel.</div>
                       <div class="fact-label">Greek Revival</div><div class="fact-value">c. 1820–1860. A purist return to Greek Doric and Ionic — especially for civic buildings. Many US state capitols.</div>
                       <div class="fact-label">Beaux-Arts</div><div class="fact-value">c. 1885–1930. Grand, eclectic classical language taught at the École des Beaux-Arts in Paris. American railroad stations, libraries, museums, capitols. McKim Mead & White, Cass Gilbert.</div>
                     </div>`
            },
            {
              heading: 'How to Tell Them Apart',
              body: `<p>A rough field guide:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Restrained + severe</div><div class="fact-value">Neoclassical or Greek Revival. Feels "schoolmasterly."</div>
                       <div class="fact-label">Dramatic curves + broken pediments</div><div class="fact-value">Baroque. Feels theatrical.</div>
                       <div class="fact-label">Grand + eclectic + heavy ornament</div><div class="fact-value">Beaux-Arts. Feels like a civic statement — and usually is one.</div>
                       <div class="fact-label">Temple front on a non-temple</div><div class="fact-value">Greek Revival. Feels like a courthouse. Often is a courthouse.</div>
                     </div>`
            }
          ],
          quiz: [
            { q: 'Broken pediments and dramatic curves are signatures of which period?', choices: ['Neoclassical','Baroque','Renaissance','Greek Revival'], correct: 1, why: 'Baroque — classical grammar pushed to theatrical extremes.' },
            { q: 'Beaux-Arts takes its name from:', choices: ['A French king','The École des Beaux-Arts in Paris','The Louvre','A Baroque architect'], correct: 1, why: 'The École des Beaux-Arts taught the grand classical style that dominated late 19th / early 20th century civic building.' },
            { q: 'Many US state capitols built after 1890 are in which style?', choices: ['Greek Revival','Baroque','Beaux-Arts','Gothic'], correct: 2, why: 'Beaux-Arts dominated civic commissions in this period — Minnesota, Rhode Island, Wisconsin, and more.' }
          ]
        }
      ]
    },

    // =====================================================
    // PATH V — GREAT BUILDINGS
    // =====================================================
    {
      id: 'buildings',
      roman: 'V',
      title: 'Great Buildings',
      subtitle: 'Anchors for your memory. Learn these and you have pins to hang every other building on.',
      lessons: [
        {
          id: 'parthenon',
          title: 'The Parthenon',
          slides: [
            {
              heading: 'The Parthenon (447–432 BCE, Athens)',
              body: `<div class="fact-grid">
                       <div class="fact-label">Architects</div><div class="fact-value">Iktinos and Kallikrates; sculptor Phidias</div>
                       <div class="fact-label">Commissioner</div><div class="fact-value">Pericles, as the centrepiece of the Acropolis rebuilding after the Persian Wars</div>
                       <div class="fact-label">Order</div><div class="fact-value">Doric — the greatest Doric temple ever built</div>
                       <div class="fact-label">Plan</div><div class="fact-value">Peripteral: 8 columns at the ends, 17 along the sides (the famous 8×17)</div>
                       <div class="fact-label">Signature</div><div class="fact-value">Every optical refinement imaginable — entasis, stylobate curvature, column inclination, corner thickening</div>
                     </div>
                     <p>Built of Pentelic marble, the Parthenon was a <em>showpiece</em>: an argument in stone about what Athens was and what culture could be.</p>`
            },
            {
              heading: 'What to Look For',
              body: `<p>Some things to hunt for in any Parthenon photograph:</p>
                     <ul><li>The slightly <em>swelling</em> columns (entasis)</li>
                         <li>The <em>bulging</em> platform — the stylobate rises in the middle</li>
                         <li>The slight inward <em>lean</em> of the columns</li>
                         <li>Thicker corner columns</li>
                         <li>Triglyphs + metopes on the frieze (external)</li>
                         <li>The famous <em>continuous Ionic frieze</em> running around the inner cella wall (the Elgin Marbles in the British Museum)</li></ul>`
            }
          ],
          quiz: [
            { q: 'The Parthenon\'s exterior is in which order?', choices: ['Doric','Ionic','Corinthian','Composite'], correct: 0, why: 'Doric outside. But: it has an Ionic continuous frieze on the inner cella wall — a famous mixing.' },
            { q: 'The Parthenon column count is:', choices: ['6 × 13','8 × 17','6 × 11','10 × 19'], correct: 1, why: '8 × 17 — the canonical Parthenon proportion, one column short of the "n × 2n+1" rule and all the better for it.' }
          ]
        },
        {
          id: 'pantheon',
          title: 'The Pantheon',
          slides: [
            {
              heading: 'The Pantheon (118–128 CE, Rome)',
              body: `<div class="fact-grid">
                       <div class="fact-label">Commissioner</div><div class="fact-value">Emperor Hadrian (rebuild of an earlier temple by Agrippa)</div>
                       <div class="fact-label">Plan</div><div class="fact-value">Temple front (Corinthian portico) grafted onto a circular rotunda</div>
                       <div class="fact-label">Dome</div><div class="fact-value">43.3 m diameter. Still the largest unreinforced concrete dome in the world. The interior height equals the diameter: a perfect sphere would fit inside.</div>
                       <div class="fact-label">Oculus</div><div class="fact-value">9 m circular opening at the centre. The only light source. Rain falls through; drainage channels in the floor carry it away.</div>
                     </div>
                     <p>The Pantheon does what no Greek temple does: it makes <em>interior space</em> the main event. You enter a classical portico and find yourself inside a planet.</p>`
            }
          ],
          quiz: [
            { q: 'The Pantheon\'s interior height equals:', choices: ['Its length','Its dome diameter','Its portico width','Its wall thickness'], correct: 1, why: 'Diameter = height. A perfect sphere fits exactly inside.' },
            { q: 'The Pantheon\'s dome is made of:', choices: ['Cut stone','Brick','Unreinforced concrete','Wood covered with lead'], correct: 2, why: 'Roman concrete — still unmatched for an unreinforced dome of that size.' }
          ]
        },
        {
          id: 'capitols',
          title: 'American State Capitols',
          slides: [
            {
              heading: 'The American Classical Tradition',
              body: `<p>The founders were Palladians. Jefferson copied Palladio\'s designs (and sometimes his books, verbatim) to build Monticello and the Virginia State Capitol. Classical architecture was the <strong>visual language of republican virtue</strong> — borrowed from Greece and Rome because the Americans wanted, visibly, to inherit Greek and Roman ideas.</p>
                     <p>A few to know:</p>`
            },
            {
              heading: 'The US Capitol',
              body: `<div class="fact-grid">
                       <div class="fact-label">Architects</div><div class="fact-value">Thornton, Latrobe, Bulfinch, Walter (each added a piece)</div>
                       <div class="fact-label">Order</div><div class="fact-value">Corinthian exterior</div>
                       <div class="fact-label">Dome</div><div class="fact-value">Cast iron, by Thomas U. Walter (1855–1866). Painted to look like stone — an engineering feat disguised as masonry</div>
                     </div>`
            },
            {
              heading: 'Three Great State Capitols',
              body: `<div class="fact-grid">
                       <div class="fact-label">Minnesota (St Paul, 1905)</div><div class="fact-value">Cass Gilbert. Beaux-Arts. The white marble dome is the largest unsupported marble dome in the world.</div>
                       <div class="fact-label">Rhode Island (Providence, 1904)</div><div class="fact-value">McKim, Mead & White. Beaux-Arts with a self-supporting marble dome.</div>
                       <div class="fact-label">Texas (Austin, 1888)</div><div class="fact-value">Elijah E. Myers. Renaissance Revival. Pink Texas granite; dome modelled on the US Capitol.</div>
                     </div>
                     <p>Many more — California, Wisconsin, Nebraska (a striking modern-classical outlier by Bertram Goodhue), Virginia (Jefferson\'s masterpiece) — reward the same kind of attention.</p>`
            }
          ],
          quiz: [
            { q: 'The US Capitol\'s dome is made of:', choices: ['Stone','Brick','Cast iron','Timber'], correct: 2, why: 'Cast iron, by Thomas U. Walter, painted to resemble stone.' },
            { q: 'Cass Gilbert designed the state capitol of:', choices: ['Texas','Minnesota','Rhode Island','California'], correct: 1, why: 'Minnesota State Capitol (1905), with the world\'s largest self-supporting marble dome.' }
          ]
        }
      ]
    },

    // =====================================================
    // PATH VI — THE ARCHITECT'S MIND
    // =====================================================
    {
      id: 'mind',
      roman: 'VI',
      title: 'The Architect\'s Mind',
      subtitle: 'Why the old treatises begin with character, not drawing. The psychology of the classical architect.',
      lessons: [
        {
          id: 'polymath',
          title: 'The Polymath',
          slides: [
            {
              heading: 'What Vitruvius Says in Chapter I',
              body: `<p>Book I, Chapter I of the Ten Books is not about stones, columns, or proportions. It is about <strong>the mind of the architect</strong>.</p>`,
              quote: {
                text: 'The architect should be equipped with knowledge of many branches of study and varied kinds of learning, for it is by his judgement that all work done by the other arts is put to test.',
                cite: 'Vitruvius, Book I, Ch. I'
              },
              afterQuote: `<p>He then lists eleven branches:</p>
                <div class="term-list">
                  <span class="term-chip">letters</span>
                  <span class="term-chip">drawing</span>
                  <span class="term-chip">geometry</span>
                  <span class="term-chip">optics</span>
                  <span class="term-chip">arithmetic</span>
                  <span class="term-chip">history</span>
                  <span class="term-chip">philosophy</span>
                  <span class="term-chip">music</span>
                  <span class="term-chip">medicine</span>
                  <span class="term-chip">law</span>
                  <span class="term-chip">astronomy</span>
                </div>`
            },
            {
              heading: 'Why Eleven?',
              body: `<p>Take them one at a time and the logic reveals itself:</p>
                     <div class="fact-grid">
                       <div class="fact-label">Letters</div><div class="fact-value">So he can read, write, record, remember</div>
                       <div class="fact-label">Drawing</div><div class="fact-value">So he can show what he intends</div>
                       <div class="fact-label">Geometry & arithmetic</div><div class="fact-value">So he can prove his proportions</div>
                       <div class="fact-label">Optics</div><div class="fact-value">So he understands how the eye corrects and deceives</div>
                       <div class="fact-label">History</div><div class="fact-value">So he knows what a Caryatid means before he uses one</div>
                       <div class="fact-label">Philosophy</div><div class="fact-value">So he is not vain, petty, or dishonest</div>
                       <div class="fact-label">Music</div><div class="fact-value">So he understands harmony — and so he can tune catapults, too</div>
                       <div class="fact-label">Medicine</div><div class="fact-value">So he can site a house where the air is healthy</div>
                       <div class="fact-label">Law</div><div class="fact-value">So he writes contracts honestly</div>
                       <div class="fact-label">Astronomy</div><div class="fact-value">So he can orient the building, design its sundials, plan its light</div>
                     </div>`
            },
            {
              heading: 'The Modern Echo',
              body: `<p>This ideal — the architect as <em>the one with the whole picture</em> — has never left the profession. It is why an architect today is (in principle) both artist and engineer, both humanist and technician. Vitruvius' eleven have shifted shape, but the demand is the same: the architect must know enough about everything to decide when the experts disagree.</p>`
            }
          ],
          quiz: [
            { q: 'In Vitruvius\' list, why must the architect know medicine?', choices: ['To treat injured workers','To site a healthy building','To understand stone cutting','Because doctors designed early Roman houses'], correct: 1, why: 'Vitruvius is specific: so the architect can place a house where the air and water are wholesome.' },
            { q: 'The core claim of Book I, Chapter I is:', choices: ['Architecture is a trade','Architecture requires broad learning — the architect must be a polymath','Architecture is primarily mathematical','Architecture depends on divine inspiration'], correct: 1, why: 'The architect must know enough of many arts to judge the work of specialists. That is the whole point.' }
          ]
        },
        {
          id: 'character',
          title: 'The Architect\'s Character',
          slides: [
            {
              heading: 'Something Surprising',
              body: `<p>Vitruvius argues that the architect must be, above all, <strong>not greedy and not vain</strong>. The technical gifts come second. It is almost startling how much of the opening chapters are about the architect\'s <em>moral</em> qualifications — how to conduct himself with clients, with rivals, with the public.</p>`,
              quote: {
                text: 'He must neither be greedy, nor have his mind preoccupied with the idea of receiving presents, but with the serious dignity of his position preserve his good name.',
                cite: 'Vitruvius, Book I, Ch. I'
              }
            },
            {
              heading: 'The Reason',
              body: `<p>A building outlasts its architect by centuries. A cheaply built temple standing for six months before it cracks brings shame on the architect for as long as its stones are seen. <em>The public is betrayed silently and for ages.</em></p>
                     <p>And because the architect alone coordinates so many specialists, he has endless opportunities to cheat: to take bribes from suppliers, to overcharge clients, to inflate estimates. Vitruvius says: <em>don't</em>. Be the one person in the chain who can be trusted without supervision, and history will love you.</p>`
            },
            {
              heading: 'The Lesson for the Hobbyist',
              body: `<p>You are not an architect. But you can learn to look at buildings the way a good architect looks at them: <em>asking what is honest, what is bluff, what is done for show, what is done for purpose</em>.</p>
                     <p>Walk past a building and ask: <em>Would Vitruvius approve? Would Palladio? Would a craftsman 500 years from now look at this and think — a good person made this?</em></p>
                     <p>This is the psychology of classical architecture: the conviction that <strong>a building is a permanent statement of its maker\'s character</strong>.</p>`
            }
          ],
          quiz: [
            { q: 'Why did Vitruvius spend so much of his opening on the architect\'s character?', choices: ['Because architects were often criminals','Because a building outlives its maker and can betray the public silently for centuries','To fill space','Because Romans were unusually moralistic'], correct: 1, why: 'A shoddy or dishonest building shames its architect for as long as it stands. The ethical stakes are enormous.' }
          ]
        },
        {
          id: 'seeing',
          title: 'How to Look at a Building',
          slides: [
            {
              heading: 'A Method',
              body: `<p>A practice that will serve you on every walk from now on. When you pass a classical building, spend one minute running this checklist through your head:</p>
                     <div class="fact-grid">
                       <div class="fact-label">1. Order</div><div class="fact-value">Name it. Tuscan? Doric? Ionic? Corinthian? Composite?</div>
                       <div class="fact-label">2. Anatomy</div><div class="fact-value">Find the architrave, frieze, cornice. Is there a pediment? Is it broken, segmental, or plain?</div>
                       <div class="fact-label">3. Decorum</div><div class="fact-value">Does the order <em>suit</em> the purpose of the building? Corinthian on an opera house: yes. Corinthian on a prison: odd.</div>
                       <div class="fact-label">4. Proportion</div><div class="fact-value">Does it feel right? Heavy? Light? Stretched?</div>
                       <div class="fact-label">5. Period</div><div class="fact-value">Restrained? Neoclassical. Theatrical? Baroque. Eclectic & grand? Beaux-Arts.</div>
                       <div class="fact-label">6. Honest?</div><div class="fact-value">Does the decoration serve structure and function, or is it bluff?</div>
                     </div>
                     <p>Do this for a month on every walk and you will have a new eye.</p>`
            },
            {
              heading: 'The Reward',
              body: `<p>Buildings stop being scenery. They become company: old friends you recognise, old strangers you can now introduce yourself to. The civic city — the part of any city that tried, at least once, to be noble — opens up as a conversation that has been going on for 2500 years, and which you can finally follow.</p>
                     <p>That is the joy of it, and it is why this study has pleased hobbyists for longer than any other branch of the humanities.</p>`,
              quote: {
                text: 'Well-building hath three Conditions: Commodity, Firmness, and Delight.',
                cite: 'Sir Henry Wotton, 1624'
              }
            }
          ],
          quiz: [
            { q: 'What is the first thing the "how to look" checklist asks you to do?', choices: ['Identify the period','Name the order','Count the columns','Check the dome'], correct: 1, why: 'Name the order first. It tells you almost everything else.' }
          ]
        }
      ]
    }
  ],

  // ---------------------------------------------------
  // GLOSSARY — every term that appears in the paths,
  // for the Field Notebook.
  // ---------------------------------------------------
  glossary: {
    abacus:        { def: 'The square or moulded slab at the top of a capital, directly under the architrave.' },
    acanthus:      { def: 'A Mediterranean plant whose stylised leaves form the signature ornament of the Corinthian and Composite capitals.' },
    acroterion:    { def: 'An ornament placed at the peak or outer corners of a pediment.' },
    annulets:      { def: 'The small horizontal rings at the top of a Doric shaft, just below the echinus.' },
    apophyge:      { def: 'A small concave moulding where the shaft of a column flares out into its base or its capital.' },
    architrave:    { def: 'The lowest band of the entablature — the main beam resting directly on the capitals.' },
    arris:         { def: 'The sharp ridge between two adjacent flutes on a Doric shaft.' },
    astragal:      { def: 'A small convex moulding, often decorated with bead-and-reel ornament. Common at the neck of a column.' },
    base:          { def: 'The foot of a column, between the shaft and the platform.' },
    caryatid:      { def: 'A sculpted female figure used in place of a column to support an entablature.' },
    calathus:      { def: 'The bell-shaped core of a Corinthian or Composite capital, around which the acanthus leaves are carved.' },
    capital:       { def: 'The decorated top of a column; its ornament identifies the order.' },
    column:        { def: 'A vertical support of a classical order: base + shaft + capital.' },
    cornice:       { def: 'The uppermost and usually projecting band of the entablature. Crowns the wall and throws off rainwater.' },
    composite:     { def: 'A Roman order combining the acanthus leaves of Corinthian with the volutes of Ionic.' },
    corinthian:    { def: 'The most slender and ornate of the Greek orders, with a capital wrapped in acanthus leaves.' },
    dentils:       { def: 'A row of small tooth-like blocks under an Ionic or Corinthian cornice.' },
    'decorum':     { def: 'Vitruvius\' principle of propriety: a building\'s style and ornament must suit its purpose.' },
    'dispositio':  { def: 'Vitruvius\' term for arrangement — the planning of a building in plan, section, and elevation.' },
    'distributio': { def: 'Vitruvius\' term for economy — the proper use of materials and site.' },
    doric:         { def: 'The earliest Greek order. Fluted shaft, plain convex-cushion capital, triglyph-and-metope frieze.' },
    echinus:       { def: 'The convex cushion-shaped moulding of a Doric or Tuscan capital, below the abacus.' },
    entablature:   { def: 'The horizontal mass carried by columns: architrave, frieze, cornice.' },
    entasis:       { def: 'The subtle convex swelling of a column shaft — an optical correction so the shaft doesn\'t look waisted.' },
    'eurythmia':   { def: 'Vitruvius\' term for the felt harmony of parts — the rhythmic beauty that arises from right proportion.' },
    fascia:        { def: 'One of the stepped flat bands of an Ionic architrave.' },
    fillet:        { def: 'The flat narrow strip between adjacent flutes on an Ionic or Corinthian shaft.' },
    'firmitas':    { def: 'Vitruvius\' first virtue: durability, firmness of construction. A building must stand.' },
    fleuron:       { def: 'A central floral ornament on the abacus of a Corinthian or Composite capital.' },
    fluting:       { def: 'Vertical grooves carved into a column shaft. 20 in Doric, 24 in Ionic and Corinthian.' },
    frieze:        { def: 'The middle band of the entablature. Doric: triglyphs + metopes. Ionic/Corinthian: continuous, often sculpted.' },
    gutta:         { def: 'A small conical or cylindrical peg-ornament, found beneath a Doric triglyph or under the mutules of a cornice.' },
    helix:         { def: 'One of the small spiral volutes at the corners of a Corinthian capital.' },
    ionic:         { def: 'The Greek order distinguished by twin volutes on the capital, a continuous frieze, and dentils in the cornice.' },
    metope:        { def: 'The flat (often sculpted) panel between two triglyphs in a Doric frieze.' },
    modillion:     { def: 'A small bracket or console found under the cornice of the Corinthian and Composite orders.' },
    module:        { def: 'The unit of proportion in classical design: the diameter (or radius) of the column at its base.' },
    mutule:        { def: 'A flat projecting block under the soffit of a Doric cornice, often bearing guttae.' },
    'ordinatio':   { def: 'Vitruvius\' term for the correct sizing of each detail — order in the strict sense.' },
    oculus:        { def: 'A circular opening, as at the top of the Pantheon\'s dome.' },
    pediment:      { def: 'The triangular gable above the entablature at the short end of a temple.' },
    pilaster:      { def: 'A flat, rectangular vertical projection that mimics a column attached to a wall.' },
    plinth:        { def: 'The square block at the foot of a column base.' },
    portico:       { def: 'A covered porch with columns at the entrance of a building.' },
    raking:        { def: '"Raking cornice" = the angled cornice running along the two slopes of a pediment.' },
    regula:        { def: 'A small flat band under a triglyph in a Doric frieze; guttae hang from its underside.' },
    rotunda:       { def: 'A circular building, or a circular hall covered by a dome — as at the Pantheon or the US Capitol.' },
    shaft:         { def: 'The main cylindrical body of a column, between base and capital.' },
    stereobate:    { def: 'The masonry foundation beneath the stylobate — the lower steps of the platform.' },
    stylobate:     { def: 'The top step of the platform, on which the columns stand directly.' },
    symmetria:     { def: 'Vitruvius\' term for commensurability — the parts of a building in fixed relation to a standard measure (the module).' },
    torus:         { def: 'A large convex ring-moulding at a column base.' },
    triglyph:      { def: 'A block in a Doric frieze with three vertical grooves (two full, two half). Alternates with metopes.' },
    tuscan:        { def: 'A Roman order, plainest of the five. Unfluted shaft, simple capital, plain base.' },
    tympanum:      { def: 'The flat triangular wall within a pediment, often carrying the main sculpture of the building.' },
    'utilitas':    { def: 'Vitruvius\' second virtue: usefulness. A building must serve the people who use it.' },
    'venustas':    { def: 'Vitruvius\' third virtue: beauty. A building must please the eye and the spirit.' },
    volute:        { def: 'A spiral scroll-ornament. The twin large volutes of the Ionic capital are its signature.' }
  }
};
