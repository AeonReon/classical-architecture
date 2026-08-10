# Classical Architecture — Project Rules

A standalone PWA that teaches an adult to *read* classical buildings — the orders, proportion, ornament, the building types, and the great styles from Greek and Roman through Palladian, Baroque, Neoclassical and the 19th-century revivals. Cloned from the Classical Mind shell (same design language, same daily-feed mechanism).

## Voice and content rule

Present each style and element **on its own terms**, as its own builders and defenders understood it — not ranked, not judged. Cite the primary sources first in every reading list (Vitruvius, Alberti, Palladio, Ruskin, Pugin, Summerson…), with an honest one-line note when a text is hard, then the modern on-ramps. Assume the reader is serious and curious. Never state contested history as settled fact.

## Structure

- **Foundation** — what classical architecture is, and how to begin looking.
- **The Elements** (the grammar): The Orders (Tuscan/Doric/Ionic/Corinthian/Composite, via `category.html?id=orders`), Proportion & Harmony, Ornament & Detail, Building Types, Materials & Construction.
- **The Styles** (via `category.html?id=styles`): Greek, Roman, Renaissance, Palladian, Baroque, Neoclassical & Georgian, Greek Revival, Gothic Revival.
- **For today** feed: quote / a thought / one thing to notice / a rule of good building / passage / word of the day. The "notice" card is built from the `practice` lists in the data files.
- **Tools**: Surprise me (`random.html`).

Every topic has up to 5 sub-tiles: `what-it-is` · `the-path` · `practice` · `reading` · `masters` (+ optional `try-it`).

## Data files

- `assets/elements-data.js` — `window.ARTS = [...]` (Foundation, the 5 Orders, and the 4 other Elements).
- `assets/styles-data.js` — `window.ARTS.push(...)` the styles (group `'The Styles'`).
- `assets/daily-data.js` — `QUOTES / THOUGHTS / VERSES / PASSAGES / WORDS` for the feed.
- `assets/tryit-data.js` — optional beginner exercises keyed by topic id.

## Images (NOT done yet — the next wave)

No photos are sourced yet; tiles degrade to a clean gradient badge. Per section, pull the **best real photo via the browser engine** (`image-engine/google-pass`, Google Images) — the same method used for Days Out. Save to:
`assets/styles/<id>.jpg`, `assets/orders/<id>.jpg`, `assets/elements/<id>.jpg`, `assets/daily/<type>.jpg`, `assets/sub/<key>.jpg`.
Register every new image path in `sw.js` ASSETS so it caches offline.

## Content status (Wave 1 = structure)

Fully written: Foundation, Doric, Ionic, Corinthian (+ Tuscan/Composite lighter), Proportion, Ornament, Building Types, Materials, and the Greek / Roman / Palladian styles (all 5 sub-tiles). The other styles (Renaissance, Baroque, Neoclassical, Greek Revival, Gothic Revival) have `what-it-is` + `reading` + `masters`; add `the-path` + `practice` in Wave 2. Expand `tryit-data.js` too.

## Stack & deploy

- Plain HTML/CSS/JS, no build step. PWA via `manifest.json` + `sw.js` (network-first shell, cache-first images). Bump `APP_VERSION` in `assets/app.js` and the `CACHE` name in `sw.js` on every ship.
- Deploy: GitHub **AeonReon** → Vercel **aeonreon** (static site). Git push only.

## Design

Same vocabulary as Classical Mind / New Beginnings: warm cream ground, sky-blue app bar, system sans heavy weights, gradient-outline tiles in each topic's colour, read-aloud via system voice (Daniel on iOS, Google UK English Male on Android).
