/* ============================================================
   SVG line drawings — the Orders, temple anatomy, entablatures.
   All drawn in code so the app stays fully offline / zero-dependency.
   Style: stylised engraving, the language of classical treatises.
   ============================================================ */

const SVG = (() => {

  const wrap = (viewBox, content, extra = '') =>
    `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" fill="none" ${extra}>${content}</svg>`;

  // ---------- VOLUTE SPIRAL (for Ionic & Composite) ----------
  // Archimedean-ish spiral approximation by cubic curves
  function volutePath(cx, cy, size, flip = false) {
    const s = flip ? -1 : 1;
    // two-turn spiral
    const r0 = size * 0.5;
    return `M ${cx} ${cy}
            q ${s * r0 * 0.6} ${-r0 * 0.1}, ${s * r0 * 0.9} ${-r0 * 0.4}
            q ${s * r0 * 0.4} ${-r0 * 0.4}, ${s * r0 * 0.2} ${-r0 * 0.85}
            q ${-s * r0 * 0.2} ${-r0 * 0.45}, ${-s * r0 * 0.55} ${-r0 * 0.3}
            q ${-s * r0 * 0.35} ${r0 * 0.15}, ${-s * r0 * 0.2} ${r0 * 0.55}
            q ${s * r0 * 0.15} ${r0 * 0.4}, ${s * r0 * 0.5} ${r0 * 0.2}
            q ${s * r0 * 0.3} ${-r0 * 0.15}, ${s * r0 * 0.15} ${-r0 * 0.4}
            q ${-s * r0 * 0.15} ${-r0 * 0.2}, ${-s * r0 * 0.35} ${-r0 * 0.05}`;
  }

  // ---------- THE FIVE ORDERS (capitals + shaft stub) ----------

  function tuscanCapital() {
    return wrap('0 0 200 280', `
      <!-- abacus -->
      <rect x="40" y="70" width="120" height="18"/>
      <!-- echinus (ovolo) -->
      <path d="M 52 88 Q 52 100 60 110 L 140 110 Q 148 100 148 88 Z"/>
      <!-- astragal + neck -->
      <line x1="62" y1="110" x2="138" y2="110"/>
      <rect x="62" y="114" width="76" height="6"/>
      <line x1="62" y1="125" x2="138" y2="125"/>
      <!-- shaft (no fluting — Tuscan is plain) -->
      <rect x="70" y="125" width="60" height="140"/>
      <!-- base (simple torus) -->
      <rect x="60" y="265" width="80" height="10"/>
      <line x1="50" y1="275" x2="150" y2="275"/>
    `);
  }

  function doricCapital() {
    // Greek Doric — no base, fluted shaft, plain square abacus, convex echinus
    const flutes = [];
    for (let i = 0; i < 7; i++) {
      const x = 75 + i * 7.5;
      flutes.push(`<line x1="${x}" y1="125" x2="${x}" y2="265"/>`);
    }
    return wrap('0 0 200 280', `
      <!-- abacus -->
      <rect x="40" y="72" width="120" height="16"/>
      <!-- echinus (strong convex cushion) -->
      <path d="M 60 88 Q 52 98 58 110 L 142 110 Q 148 98 140 88 Z"/>
      <!-- annulets (rings at top of shaft) -->
      <line x1="68" y1="113" x2="132" y2="113"/>
      <line x1="68" y1="118" x2="132" y2="118"/>
      <line x1="68" y1="123" x2="132" y2="123"/>
      <!-- shaft with fluting -->
      <rect x="68" y="125" width="64" height="140"/>
      ${flutes.join('')}
      <!-- Greek Doric sits directly on stylobate (no base) -->
      <line x1="55" y1="265" x2="145" y2="265"/>
    `);
  }

  function ionicCapital() {
    const flutes = [];
    for (let i = 0; i < 7; i++) {
      const x = 75 + i * 7.5;
      flutes.push(`<line x1="${x}" y1="130" x2="${x}" y2="260"/>`);
    }
    return wrap('0 0 200 280', `
      <!-- abacus (thin) -->
      <rect x="40" y="72" width="120" height="10"/>
      <!-- volute cushion (echinus) with egg-and-dart hint -->
      <line x1="55" y1="82" x2="145" y2="82"/>
      <line x1="70" y1="95" x2="130" y2="95"/>
      <circle cx="80" cy="88" r="2.5"/>
      <circle cx="100" cy="88" r="2.5"/>
      <circle cx="120" cy="88" r="2.5"/>
      <!-- LEFT volute -->
      <circle cx="58" cy="96" r="14"/>
      <circle cx="58" cy="96" r="9"/>
      <circle cx="58" cy="96" r="5"/>
      <circle cx="58" cy="96" r="1.6" fill="currentColor"/>
      <!-- RIGHT volute -->
      <circle cx="142" cy="96" r="14"/>
      <circle cx="142" cy="96" r="9"/>
      <circle cx="142" cy="96" r="5"/>
      <circle cx="142" cy="96" r="1.6" fill="currentColor"/>
      <!-- bolster below abacus between volutes -->
      <path d="M 70 98 Q 100 110 130 98"/>
      <!-- astragal -->
      <line x1="70" y1="115" x2="130" y2="115"/>
      <rect x="70" y="118" width="60" height="5"/>
      <line x1="70" y1="128" x2="130" y2="128"/>
      <!-- fluted shaft -->
      <rect x="68" y="130" width="64" height="130"/>
      ${flutes.join('')}
      <!-- base (Attic: torus, scotia, torus) -->
      <path d="M 55 260 L 145 260 L 140 268 L 60 268 Z"/>
      <path d="M 60 268 Q 100 275 140 268"/>
      <line x1="50" y1="275" x2="150" y2="275"/>
    `);
  }

  function corinthianCapital() {
    // bell shape with acanthus leaves + small volutes at corners
    const flutes = [];
    for (let i = 0; i < 7; i++) {
      const x = 75 + i * 7.5;
      flutes.push(`<line x1="${x}" y1="150" x2="${x}" y2="260"/>`);
    }
    return wrap('0 0 200 280', `
      <!-- abacus with concave sides and central fleuron (rosette) -->
      <path d="M 38 60 L 162 60 Q 158 66 155 68 L 45 68 Q 42 66 38 60 Z"/>
      <path d="M 38 60 Q 100 66 162 60"/>
      <circle cx="100" cy="62" r="3"/>
      <circle cx="100" cy="62" r="1.3" fill="currentColor"/>

      <!-- bell / calathus outline -->
      <path d="M 55 68 L 62 128 L 138 128 L 145 68"/>

      <!-- second row of acanthus leaves (upper) -->
      <path d="M 62 128 Q 58 110 66 95 Q 72 88 78 95 Q 82 110 80 125"/>
      <path d="M 80 125 Q 88 110 96 95 Q 100 88 104 95 Q 112 110 120 125"/>
      <path d="M 120 125 Q 128 110 134 95 Q 142 88 138 128"/>

      <!-- first row of acanthus leaves (lower, offset) -->
      <path d="M 56 68 Q 60 82 70 90 Q 78 82 78 68"/>
      <path d="M 78 68 Q 82 82 92 90 Q 100 82 100 68"/>
      <path d="M 100 68 Q 104 82 114 90 Q 122 82 122 68"/>
      <path d="M 122 68 Q 126 82 134 90 Q 144 82 144 68"/>

      <!-- corner helices (small volutes) -->
      <circle cx="48" cy="72" r="4.5"/>
      <circle cx="48" cy="72" r="2"/>
      <circle cx="152" cy="72" r="4.5"/>
      <circle cx="152" cy="72" r="2"/>

      <!-- astragal -->
      <line x1="62" y1="128" x2="138" y2="128"/>
      <rect x="66" y="132" width="68" height="5"/>
      <line x1="66" y1="142" x2="134" y2="142"/>

      <!-- fluted shaft -->
      <rect x="68" y="150" width="64" height="110"/>
      ${flutes.join('')}

      <!-- base -->
      <path d="M 55 260 L 145 260 L 140 268 L 60 268 Z"/>
      <path d="M 60 268 Q 100 275 140 268"/>
      <line x1="50" y1="275" x2="150" y2="275"/>
    `);
  }

  function compositeCapital() {
    const flutes = [];
    for (let i = 0; i < 7; i++) {
      const x = 75 + i * 7.5;
      flutes.push(`<line x1="${x}" y1="150" x2="${x}" y2="260"/>`);
    }
    return wrap('0 0 200 280', `
      <!-- abacus -->
      <path d="M 38 55 L 162 55 Q 158 63 155 65 L 45 65 Q 42 63 38 55 Z"/>
      <circle cx="100" cy="58" r="3"/>
      <circle cx="100" cy="58" r="1.3" fill="currentColor"/>

      <!-- LARGE Ionic volutes at top -->
      <circle cx="52" cy="80" r="15"/>
      <circle cx="52" cy="80" r="9"/>
      <circle cx="52" cy="80" r="4"/>
      <circle cx="52" cy="80" r="1.5" fill="currentColor"/>
      <circle cx="148" cy="80" r="15"/>
      <circle cx="148" cy="80" r="9"/>
      <circle cx="148" cy="80" r="4"/>
      <circle cx="148" cy="80" r="1.5" fill="currentColor"/>
      <!-- echinus between volutes -->
      <path d="M 68 78 Q 100 72 132 78"/>
      <line x1="68" y1="82" x2="132" y2="82"/>
      <circle cx="85" cy="86" r="2"/>
      <circle cx="100" cy="86" r="2"/>
      <circle cx="115" cy="86" r="2"/>

      <!-- acanthus leaves (bottom tier, Corinthian-style) -->
      <path d="M 62 95 L 65 128 L 135 128 L 138 95"/>
      <path d="M 65 128 Q 60 115 68 100 Q 75 95 82 104 Q 82 120 82 128"/>
      <path d="M 82 128 Q 86 115 95 100 Q 100 95 105 100 Q 114 115 118 128"/>
      <path d="M 118 128 Q 122 115 132 100 Q 138 95 135 128"/>

      <!-- astragal + shaft -->
      <line x1="62" y1="128" x2="138" y2="128"/>
      <rect x="66" y="132" width="68" height="5"/>
      <line x1="66" y1="142" x2="134" y2="142"/>
      <rect x="68" y="150" width="64" height="110"/>
      ${flutes.join('')}
      <!-- base -->
      <path d="M 55 260 L 145 260 L 140 268 L 60 268 Z"/>
      <line x1="50" y1="275" x2="150" y2="275"/>
    `);
  }

  // ---------- TEMPLE FRONT (labeled when labeled=true) ----------
  function templeFront(labeled = false) {
    const labels = labeled ? `
      <g font-family="Baskerville, serif" font-style="italic" font-size="11" fill="currentColor" stroke="none">
        <!-- pediment -->
        <text x="260" y="50">Pediment</text>
        <line x1="258" y1="53" x2="220" y2="75" stroke="currentColor" stroke-width="0.6"/>
        <!-- acroterion -->
        <text x="20" y="40">Acroterion</text>
        <line x1="68" y1="42" x2="100" y2="55" stroke="currentColor" stroke-width="0.6"/>
        <!-- tympanum -->
        <text x="165" y="95" text-anchor="middle">Tympanum</text>
        <!-- cornice -->
        <text x="300" y="115">Cornice</text>
        <line x1="298" y1="118" x2="262" y2="118" stroke="currentColor" stroke-width="0.6"/>
        <!-- frieze -->
        <text x="300" y="135">Frieze</text>
        <line x1="298" y1="138" x2="262" y2="138" stroke="currentColor" stroke-width="0.6"/>
        <!-- architrave -->
        <text x="300" y="155">Architrave</text>
        <line x1="298" y1="158" x2="262" y2="158" stroke="currentColor" stroke-width="0.6"/>
        <!-- entablature bracket -->
        <text x="300" y="175" font-size="10">(entablature)</text>
        <!-- capital -->
        <text x="20" y="175">Capital</text>
        <line x1="68" y1="178" x2="110" y2="175" stroke="currentColor" stroke-width="0.6"/>
        <!-- shaft -->
        <text x="20" y="240">Shaft</text>
        <line x1="60" y1="243" x2="108" y2="243" stroke="currentColor" stroke-width="0.6"/>
        <!-- base -->
        <text x="20" y="310">Base</text>
        <line x1="60" y1="313" x2="108" y2="313" stroke="currentColor" stroke-width="0.6"/>
        <!-- stylobate -->
        <text x="300" y="330">Stylobate</text>
        <line x1="298" y1="333" x2="262" y2="328" stroke="currentColor" stroke-width="0.6"/>
        <!-- stereobate -->
        <text x="300" y="348">Stereobate</text>
        <line x1="298" y1="351" x2="262" y2="345" stroke="currentColor" stroke-width="0.6"/>
      </g>
    ` : '';

    // 4 columns across a temple front, topped by entablature and pediment
    const columns = [];
    for (const x of [100, 145, 190, 235]) {
      columns.push(`
        <!-- capital -->
        <rect x="${x - 14}" y="165" width="28" height="6"/>
        <path d="M ${x - 12} 171 Q ${x - 14} 177 ${x - 10} 182 L ${x + 10} 182 Q ${x + 14} 177 ${x + 12} 171 Z"/>
        <!-- shaft with fluting -->
        <rect x="${x - 8}" y="182" width="16" height="120"/>
        <line x1="${x - 5}" y1="183" x2="${x - 5}" y2="302"/>
        <line x1="${x - 2}" y1="183" x2="${x - 2}" y2="302"/>
        <line x1="${x + 2}" y1="183" x2="${x + 2}" y2="302"/>
        <line x1="${x + 5}" y1="183" x2="${x + 5}" y2="302"/>
        <!-- base -->
        <rect x="${x - 11}" y="302" width="22" height="6"/>
      `);
    }

    return wrap('0 0 360 380', `
      <!-- acroterion (peak ornament) -->
      <path d="M 165 45 Q 170 30 175 45 Z"/>
      <!-- roof / pediment triangle -->
      <path d="M 78 110 L 170 50 L 262 110 Z"/>
      <!-- tympanum (interior field — already drawn by triangle) -->
      <line x1="95" y1="108" x2="245" y2="108"/>
      <!-- entablature band (architrave / frieze / cornice) -->
      <rect x="78" y="110" width="184" height="15"/>
      <rect x="78" y="125" width="184" height="20"/>
      <!-- triglyph-metope frieze (Doric) -->
      <g>
        ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${88 + i * 28}" y="128" width="8" height="14"/>`).join('')}
      </g>
      <rect x="78" y="145" width="184" height="20"/>
      ${columns.join('')}
      <!-- stylobate + stereobate (stepped platform) -->
      <rect x="70" y="308" width="220" height="12"/>
      <rect x="60" y="320" width="240" height="12"/>
      <rect x="50" y="332" width="260" height="12"/>
      ${labels}
    `);
  }

  // ---------- COLUMN ANATOMY (base / shaft / capital) ----------
  function columnAnatomy() {
    return wrap('0 0 300 420', `
      <!-- capital -->
      <rect x="60" y="50" width="120" height="14"/>
      <path d="M 72 64 Q 60 82 70 96 L 170 96 Q 180 82 168 64 Z"/>
      <line x1="78" y1="96" x2="162" y2="96"/>
      <rect x="78" y="100" width="84" height="6"/>
      <!-- shaft -->
      <rect x="82" y="110" width="76" height="240"/>
      <line x1="90" y1="112" x2="90" y2="348"/>
      <line x1="100" y1="112" x2="100" y2="348"/>
      <line x1="110" y1="112" x2="110" y2="348"/>
      <line x1="120" y1="112" x2="120" y2="348"/>
      <line x1="130" y1="112" x2="130" y2="348"/>
      <line x1="140" y1="112" x2="140" y2="348"/>
      <line x1="150" y1="112" x2="150" y2="348"/>
      <!-- base -->
      <rect x="72" y="352" width="96" height="10"/>
      <path d="M 66 362 Q 120 376 174 362"/>
      <rect x="60" y="374" width="120" height="10"/>

      <!-- labels -->
      <g font-family="Baskerville, serif" font-style="italic" font-size="13" fill="currentColor" stroke="none">
        <text x="210" y="60">Abacus</text>
        <line x1="208" y1="63" x2="180" y2="60" stroke="currentColor" stroke-width="0.6"/>
        <text x="210" y="85">Echinus</text>
        <line x1="208" y1="88" x2="180" y2="82" stroke="currentColor" stroke-width="0.6"/>
        <text x="210" y="105">Astragal</text>
        <line x1="208" y1="108" x2="162" y2="103" stroke="currentColor" stroke-width="0.6"/>
        <text x="210" y="135" font-size="15">CAPITAL</text>

        <text x="210" y="230" font-size="15">SHAFT</text>
        <text x="210" y="255">Fluting (grooves)</text>
        <line x1="208" y1="258" x2="160" y2="250" stroke="currentColor" stroke-width="0.6"/>
        <text x="210" y="280" font-size="11">Entasis — the subtle</text>
        <text x="210" y="295" font-size="11">swelling mid-shaft</text>

        <text x="210" y="360" font-size="15">BASE</text>
        <text x="210" y="380">Torus</text>
        <line x1="208" y1="383" x2="170" y2="378" stroke="currentColor" stroke-width="0.6"/>
      </g>
    `);
  }

  // ---------- DORIC ENTABLATURE DETAIL ----------
  function doricEntablature(labeled = false) {
    const labels = labeled ? `
      <g font-family="Baskerville, serif" font-style="italic" font-size="12" fill="currentColor" stroke="none">
        <text x="310" y="30">Cornice</text>
        <line x1="308" y1="33" x2="280" y2="38" stroke="currentColor" stroke-width="0.6"/>
        <text x="310" y="80">Frieze</text>
        <line x1="308" y1="83" x2="280" y2="90" stroke="currentColor" stroke-width="0.6"/>
        <text x="310" y="140">Architrave</text>
        <line x1="308" y1="143" x2="280" y2="150" stroke="currentColor" stroke-width="0.6"/>
        <text x="30" y="85" text-anchor="start">Triglyph</text>
        <line x1="65" y1="88" x2="85" y2="95" stroke="currentColor" stroke-width="0.6"/>
        <text x="30" y="110">Metope</text>
        <line x1="65" y1="113" x2="105" y2="110" stroke="currentColor" stroke-width="0.6"/>
      </g>
    ` : '';

    return wrap('0 0 420 200', `
      <!-- cornice (top) with dentils / mutules -->
      <rect x="70" y="20" width="230" height="10"/>
      <rect x="60" y="30" width="250" height="14"/>
      <!-- mutules (Doric — under cornice) -->
      ${[0,1,2,3,4,5].map(i => `<rect x="${75 + i * 38}" y="44" width="22" height="3"/>`).join('')}
      <rect x="60" y="48" width="250" height="6"/>
      <!-- frieze with triglyph & metope -->
      <rect x="70" y="60" width="230" height="50"/>
      ${[0,1,2,3,4,5].map(i => `<rect x="${82 + i * 38}" y="65" width="10" height="40"/>`).join('')}
      <!-- regulae (small tabs below triglyphs) -->
      ${[0,1,2,3,4,5].map(i => `<rect x="${82 + i * 38}" y="112" width="10" height="3"/>`).join('')}
      <!-- architrave (plain) -->
      <rect x="70" y="120" width="230" height="50"/>
      <line x1="70" y1="166" x2="300" y2="166"/>
      <!-- column top appearing at bottom -->
      <path d="M 110 170 Q 108 180 120 185 L 160 185 Q 172 180 170 170 Z"/>
      <rect x="125" y="185" width="30" height="12"/>
      ${labels}
    `);
  }

  // ---------- IONIC ENTABLATURE DETAIL ----------
  function ionicEntablature(labeled = false) {
    const labels = labeled ? `
      <g font-family="Baskerville, serif" font-style="italic" font-size="12" fill="currentColor" stroke="none">
        <text x="310" y="30">Cornice</text>
        <text x="310" y="55">Dentils</text>
        <line x1="308" y1="58" x2="280" y2="55" stroke="currentColor" stroke-width="0.6"/>
        <text x="310" y="90">Frieze (continuous)</text>
        <text x="310" y="140">Architrave (fasciae)</text>
      </g>
    ` : '';
    return wrap('0 0 440 200', `
      <!-- cornice -->
      <rect x="60" y="20" width="250" height="10"/>
      <rect x="50" y="30" width="270" height="14"/>
      <!-- dentils -->
      ${[...Array(20)].map((_, i) => `<rect x="${60 + i * 13}" y="46" width="8" height="10"/>`).join('')}
      <rect x="50" y="58" width="270" height="4"/>
      <!-- frieze (continuous band — often sculpted) -->
      <rect x="60" y="66" width="250" height="40"/>
      <!-- sculptural hint: wavy line like running figures -->
      <path d="M 70 95 Q 90 75 110 95 Q 130 75 150 95 Q 170 75 190 95 Q 210 75 230 95 Q 250 75 270 95 Q 290 75 300 88" stroke-opacity="0.6"/>
      <!-- architrave with three fasciae -->
      <rect x="60" y="110" width="250" height="16"/>
      <rect x="60" y="126" width="250" height="16"/>
      <rect x="60" y="142" width="250" height="18"/>
      <!-- cyma between architrave and frieze -->
      <line x1="60" y1="108" x2="310" y2="108"/>
      <!-- column top with ionic volutes -->
      <circle cx="130" cy="180" r="10"/>
      <circle cx="130" cy="180" r="5"/>
      <circle cx="230" cy="180" r="10"/>
      <circle cx="230" cy="180" r="5"/>
      <line x1="140" y1="180" x2="220" y2="180"/>
      ${labels}
    `);
  }

  // ---------- VITRUVIAN MAN (schematic) ----------
  function vitruvianMan() {
    return wrap('0 0 300 300', `
      <!-- square -->
      <rect x="40" y="40" width="220" height="220"/>
      <!-- circle -->
      <circle cx="150" cy="160" r="110"/>
      <!-- figure: head -->
      <circle cx="150" cy="70" r="18"/>
      <!-- torso -->
      <line x1="150" y1="88" x2="150" y2="180"/>
      <!-- arms (horizontal, touching square) -->
      <line x1="42" y1="120" x2="258" y2="120"/>
      <!-- arms (angled, touching circle) -->
      <line x1="150" y1="110" x2="70" y2="78"/>
      <line x1="150" y1="110" x2="230" y2="78"/>
      <!-- legs (spread, touching circle) -->
      <line x1="150" y1="180" x2="90" y2="260"/>
      <line x1="150" y1="180" x2="210" y2="260"/>
      <!-- legs (closed, touching square base) -->
      <line x1="150" y1="180" x2="130" y2="260"/>
      <line x1="150" y1="180" x2="170" y2="260"/>
    `);
  }

  // ---------- PROPORTION DIAGRAM (module system) ----------
  function moduleDiagram() {
    return wrap('0 0 280 360', `
      <!-- column with modular grid -->
      <rect x="110" y="60" width="60" height="240"/>
      <line x1="100" y1="90" x2="180" y2="90" stroke-dasharray="2,3"/>
      <line x1="100" y1="120" x2="180" y2="120" stroke-dasharray="2,3"/>
      <line x1="100" y1="150" x2="180" y2="150" stroke-dasharray="2,3"/>
      <line x1="100" y1="180" x2="180" y2="180" stroke-dasharray="2,3"/>
      <line x1="100" y1="210" x2="180" y2="210" stroke-dasharray="2,3"/>
      <line x1="100" y1="240" x2="180" y2="240" stroke-dasharray="2,3"/>
      <line x1="100" y1="270" x2="180" y2="270" stroke-dasharray="2,3"/>

      <!-- diameter marker -->
      <line x1="110" y1="320" x2="170" y2="320" stroke-width="0.8"/>
      <line x1="110" y1="315" x2="110" y2="325" stroke-width="0.8"/>
      <line x1="170" y1="315" x2="170" y2="325" stroke-width="0.8"/>

      <g font-family="Baskerville, serif" font-style="italic" font-size="12" fill="currentColor" stroke="none">
        <text x="190" y="95">8 modules</text>
        <text x="190" y="125">7</text>
        <text x="190" y="155">6</text>
        <text x="190" y="185">5</text>
        <text x="190" y="215">4</text>
        <text x="190" y="245">3</text>
        <text x="190" y="275">2</text>
        <text x="190" y="305">1 module</text>
        <text x="140" y="338" text-anchor="middle">1 diameter = 1 module</text>
        <text x="140" y="355" text-anchor="middle" font-size="10">(column height ≈ 8–10 modules)</text>
      </g>
    `);
  }

  // ---------- PEDIMENT (triangular gable) ----------
  function pediment(labeled = false) {
    const labels = labeled ? `
      <g font-family="Baskerville, serif" font-style="italic" font-size="12" fill="currentColor" stroke="none">
        <text x="170" y="20" text-anchor="middle">Acroterion</text>
        <text x="170" y="95" text-anchor="middle">Tympanum</text>
        <text x="300" y="130">Raking cornice</text>
        <line x1="298" y1="128" x2="260" y2="80" stroke="currentColor" stroke-width="0.6"/>
        <text x="300" y="155">Horizontal cornice</text>
        <line x1="298" y1="152" x2="260" y2="120" stroke="currentColor" stroke-width="0.6"/>
      </g>
    ` : '';
    return wrap('0 0 460 180', `
      <!-- acroterion peak ornament -->
      <path d="M 165 30 Q 170 18 175 30"/>
      <!-- triangle (pediment) -->
      <path d="M 60 120 L 170 40 L 280 120 Z"/>
      <!-- raking cornices (moldings) -->
      <path d="M 60 112 L 170 32 L 280 112"/>
      <!-- horizontal cornice -->
      <line x1="58" y1="120" x2="282" y2="120"/>
      <line x1="58" y1="128" x2="282" y2="128"/>
      ${labels}
    `);
  }

  // ---------- registry ----------
  const ORDERS = {
    tuscan:      tuscanCapital,
    doric:       doricCapital,
    ionic:       ionicCapital,
    corinthian:  corinthianCapital,
    composite:   compositeCapital
  };

  function byKey(key) {
    if (ORDERS[key]) return ORDERS[key]();
    if (key === 'temple')           return templeFront(false);
    if (key === 'temple-labeled')   return templeFront(true);
    if (key === 'column')           return columnAnatomy();
    if (key === 'entablature-doric-labeled') return doricEntablature(true);
    if (key === 'entablature-doric')         return doricEntablature(false);
    if (key === 'entablature-ionic-labeled') return ionicEntablature(true);
    if (key === 'entablature-ionic')         return ionicEntablature(false);
    if (key === 'vitruvian')        return vitruvianMan();
    if (key === 'module')           return moduleDiagram();
    if (key === 'pediment')         return pediment(false);
    if (key === 'pediment-labeled') return pediment(true);
    return '';
  }

  return { byKey, ORDERS };
})();
