/* ============================================================
   The Orders — app logic, routing, progress tracking, narration.
   ============================================================ */

const App = (() => {

  const STORAGE_KEY = 'the_orders_v1';

  // ---------- persistent state ----------
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return { ...defaultState(), ...JSON.parse(raw) };
    } catch (e) { return defaultState(); }
  }
  function defaultState() {
    return {
      xp: 0,
      streak: 0,
      completed: {},       // { "pathId/lessonId": score }
      knownTerms: {},      // { termKey: true }
      audio: false
    };
  }
  let state = loadState();
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function lessonKey(pathId, lessonId) { return pathId + '/' + lessonId; }
  function isDone(pathId, lessonId)   { return !!state.completed[lessonKey(pathId, lessonId)]; }

  function pathProgress(path) {
    const total = path.lessons.length;
    const done = path.lessons.filter(l => isDone(path.id, l.id)).length;
    return { done, total };
  }

  function isLessonUnlocked(path, lessonIndex) {
    if (lessonIndex === 0) return true;
    const prev = path.lessons[lessonIndex - 1];
    return isDone(path.id, prev.id);
  }

  // All paths are browsable. Lesson ordering within a path is gated.
  function isPathUnlocked() { return true; }

  // ---------- HUD ----------
  function updateHUD() {
    document.getElementById('hud-xp').textContent = state.xp;
    document.getElementById('hud-streak').textContent = state.streak;
    const btn = document.getElementById('btn-audio');
    btn.classList.toggle('on', state.audio);
  }

  function addXP(n) { state.xp += n; save(); updateHUD(); }
  function bumpStreak(correct) {
    state.streak = correct ? state.streak + 1 : 0;
    save(); updateHUD();
  }

  // ---------- narration ----------
  function speak(text) {
    if (!state.audio) return;
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(stripHTML(text));
    u.rate = 1.02; u.pitch = 1.0; u.volume = 0.9;
    // Try to pick a classical-voice: any "Daniel", "Alex", or English voice
    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v => /Daniel|Alex|Serena|Samantha|Karen/i.test(v.name)) ||
                      voices.find(v => /en-GB|en_GB|en-US/i.test(v.lang));
    if (preferred) u.voice = preferred;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
  function stripHTML(s) {
    const tmp = document.createElement('div'); tmp.innerHTML = s; return tmp.textContent || tmp.innerText || '';
  }
  function toggleAudio() {
    state.audio = !state.audio;
    save(); updateHUD();
    if (state.audio) speak('Narration on.');
    else speechSynthesis && speechSynthesis.cancel();
  }

  // ---------- term discovery ----------
  function learnTerms(termList) {
    if (!termList) return;
    let learned = 0;
    termList.forEach(t => {
      const k = t.toLowerCase();
      if (!state.knownTerms[k] && CONTENT.glossary[k]) {
        state.knownTerms[k] = true;
        learned++;
      }
    });
    if (learned > 0) save();
  }

  // ---------- ROUTING ----------
  function parseHash() {
    const h = location.hash.replace(/^#\//, '');
    const parts = h.split('/');
    return { parts };
  }

  function navigate(path) {
    location.hash = '#/' + path;
  }

  function render() {
    const { parts } = parseHash();
    const [first, second, third, fourth] = parts;

    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));

    if (!first || first === '') {
      highlight('Paths'); renderHome();
    } else if (first === 'notebook') {
      highlight('Field Notebook'); renderNotebook();
    } else if (first === 'daily') {
      highlight('Daily Review'); renderDaily();
    } else if (first === 'about') {
      highlight('About'); renderAbout();
    } else if (first === 'path' && second) {
      highlight('Paths'); renderPath(second);
    } else if (first === 'lesson' && second && third) {
      highlight('Paths'); renderLesson(second, third, parseInt(fourth || '0'));
    } else if (first === 'quiz' && second && third) {
      highlight('Paths'); runQuiz(second, third);
    } else {
      highlight('Paths'); renderHome();
    }

    window.scrollTo(0, 0);
  }

  function highlight(label) {
    document.querySelectorAll('.nav-link').forEach(a => {
      if (a.textContent.trim() === label) a.classList.add('active');
    });
  }

  // ---------- HOME ----------
  function renderHome() {
    const el = document.getElementById('view');
    el.innerHTML = `
      <div class="hero">
        <h1>The Orders</h1>
        <div class="subtitle">A study guide to classical architecture — the grammar the Greeks invented, the Romans extended, the Renaissance rediscovered, and the Beaux-Arts carried to the new world.</div>
        <div class="epigraph">— <em>Firmitas · Utilitas · Venustas</em> —</div>
      </div>

      <div class="paths-grid">
        ${CONTENT.paths.map((path) => {
          const prog = pathProgress(path);
          const pct = prog.total ? Math.round(100 * prog.done / prog.total) : 0;
          const unlocked = isPathUnlocked();
          return `
            <div class="path-card ${unlocked ? '' : 'locked'}" data-path="${path.id}">
              <div class="path-roman">PATH ${path.roman}</div>
              <h2>${path.title}</h2>
              <p>${path.subtitle}</p>
              <div class="path-progress">
                <span>${prog.done} / ${prog.total} lessons</span>
                <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    el.querySelectorAll('.path-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('locked')) return;
        navigate('path/' + card.dataset.path);
      });
    });
  }

  // ---------- PATH (lesson list) ----------
  function renderPath(pathId) {
    const path = CONTENT.paths.find(p => p.id === pathId);
    if (!path) return renderHome();
    const el = document.getElementById('view');
    el.innerHTML = `
      <div class="path-header">
        <div class="breadcrumb"><a href="#/">Paths</a> › Path ${path.roman}</div>
        <div class="path-roman">PATH ${path.roman}</div>
        <h1>${path.title}</h1>
        <p class="subtitle" style="font-style: italic; color: var(--ink-soft);">${path.subtitle}</p>
      </div>
      <div class="lesson-list">
        ${path.lessons.map((lesson, i) => {
          const done = isDone(path.id, lesson.id);
          const unlocked = isLessonUnlocked(path, i);
          return `
            <div class="lesson-row ${done ? 'done' : ''} ${unlocked ? '' : 'locked'}"
                 data-path="${path.id}" data-lesson="${lesson.id}">
              <div class="lesson-num">${done ? '✓' : i + 1}</div>
              <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-sub">${done ? 'Completed' : unlocked ? (lesson.slides ? `${lesson.slides.length} slide${lesson.slides.length>1?'s':''}` : 'Lesson') : 'Locked — complete the previous lesson first'}</div>
              </div>
              <div class="lesson-arrow">→</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    el.querySelectorAll('.lesson-row').forEach(row => {
      row.addEventListener('click', () => {
        if (row.classList.contains('locked')) return;
        navigate(`lesson/${row.dataset.path}/${row.dataset.lesson}/0`);
      });
    });
  }

  // ---------- LESSON (slide view) ----------
  function renderLesson(pathId, lessonId, slideIdx) {
    const path = CONTENT.paths.find(p => p.id === pathId);
    const lesson = path && path.lessons.find(l => l.id === lessonId);
    if (!lesson) return renderHome();
    const slides = lesson.slides || [];
    const i = Math.max(0, Math.min(slideIdx, slides.length - 1));
    const slide = slides[i];

    const el = document.getElementById('view');

    const svgBlock = slide.svg ? `
      <figure>${SVG.byKey(slide.svg)}
        <figcaption>${slide.svg.replace(/-/g, ' ')}</figcaption>
      </figure>
    ` : '';

    const quoteBlock = slide.quote ? `
      <blockquote class="pull-quote">
        "${slide.quote.text}"
        <cite>— ${slide.quote.cite}</cite>
      </blockquote>
    ` : '';

    const afterQuote = slide.afterQuote || '';

    const isLast = (i === slides.length - 1);
    const hasQuiz = lesson.quiz && lesson.quiz.length;

    el.innerHTML = `
      <div class="lesson-breadcrumb">
        <a href="#/">Paths</a> › <a href="#/path/${path.id}">${path.title}</a> › ${lesson.title}
      </div>
      <div class="slide-shell">
        <div class="slide-count">${i + 1} / ${slides.length}</div>
        <div class="slide-content">
          <h2>${slide.heading || lesson.title}</h2>
          ${svgBlock}
          ${slide.body || ''}
          ${quoteBlock}
          ${afterQuote}
        </div>
        <div class="slide-actions">
          <button class="btn ghost" id="slide-prev" ${i === 0 ? 'disabled' : ''}>← Previous</button>
          ${isLast
            ? (hasQuiz
                ? `<button class="btn primary" id="slide-quiz">Take the quiz →</button>`
                : `<button class="btn primary" id="slide-finish">Mark complete</button>`)
            : `<button class="btn primary" id="slide-next">Next →</button>`}
        </div>
      </div>
    `;

    document.getElementById('slide-prev')?.addEventListener('click',
      () => navigate(`lesson/${pathId}/${lessonId}/${i - 1}`));
    document.getElementById('slide-next')?.addEventListener('click',
      () => navigate(`lesson/${pathId}/${lessonId}/${i + 1}`));
    document.getElementById('slide-quiz')?.addEventListener('click',
      () => navigate(`quiz/${pathId}/${lessonId}`));
    document.getElementById('slide-finish')?.addEventListener('click', () => {
      markComplete(pathId, lessonId, 1.0);
      navigate('path/' + pathId);
    });

    // narrate
    if (state.audio) speak((slide.heading ? slide.heading + '. ' : '') + (slide.body || ''));

    // discover terms inside glossary that show up in this slide
    discoverTermsFromSlide(slide);
  }

  function discoverTermsFromSlide(slide) {
    const haystack = ((slide.heading || '') + ' ' + (slide.body || '') + ' ' + (slide.afterQuote || '')).toLowerCase();
    const learned = [];
    Object.keys(CONTENT.glossary).forEach(term => {
      // match as whole word-ish
      const re = new RegExp('\\b' + term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
      if (re.test(haystack)) learned.push(term);
    });
    if (learned.length) {
      let any = false;
      learned.forEach(t => {
        if (!state.knownTerms[t]) { state.knownTerms[t] = true; any = true; }
      });
      if (any) save();
    }
  }

  // ---------- QUIZ ----------
  function runQuiz(pathId, lessonId) {
    const path = CONTENT.paths.find(p => p.id === pathId);
    const lesson = path && path.lessons.find(l => l.id === lessonId);
    if (!lesson || !lesson.quiz) return renderHome();

    Quiz.start(lesson.quiz, (passed, score, action) => {
      if (passed) {
        markComplete(pathId, lessonId, score);
        navigate('path/' + pathId);
      } else if (action === 'retry') {
        runQuiz(pathId, lessonId);
      } else {
        navigate(`lesson/${pathId}/${lessonId}/0`);
      }
    });
  }

  function markComplete(pathId, lessonId, score) {
    state.completed[lessonKey(pathId, lessonId)] = score;
    save();
    updateHUD();
  }

  // ---------- NOTEBOOK ----------
  function renderNotebook() {
    const allTerms = Object.keys(CONTENT.glossary).sort();
    const known = allTerms.filter(t => state.knownTerms[t]);
    const locked = allTerms.filter(t => !state.knownTerms[t]);

    const el = document.getElementById('view');
    el.innerHTML = `
      <div class="path-header">
        <h1>Field Notebook</h1>
        <p class="subtitle" style="font-style: italic; color: var(--ink-soft);">
          Every term you have met in the lessons — your working vocabulary.
          ${known.length} of ${allTerms.length} discovered.
        </p>
      </div>
      ${known.length === 0 ? `
        <div class="notebook-intro">
          Your notebook is empty. Begin <a href="#/path/orders">Path I: The Five Orders</a> — terms are added here automatically as you meet them.
        </div>
      ` : ''}

      ${known.length > 0 ? `
        <h2 style="margin-top: 20px;">Discovered (${known.length})</h2>
        <table class="term-table">
          <thead><tr><th>Term</th><th>Definition</th></tr></thead>
          <tbody>
            ${known.map(t => `
              <tr>
                <td>${t}</td>
                <td>${CONTENT.glossary[t].def}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : ''}

      ${locked.length > 0 ? `
        <h2 style="margin-top: 40px;">Still to discover (${locked.length})</h2>
        <table class="term-table">
          <tbody>
            ${locked.map(t => `
              <tr class="locked-term">
                <td>${t}</td>
                <td>—</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : ''}
    `;
  }

  // ---------- DAILY REVIEW ----------
  function renderDaily() {
    const completedAny = Object.keys(state.completed).length > 0;
    const el = document.getElementById('view');

    if (!completedAny) {
      el.innerHTML = `
        <div class="path-header">
          <h1>Daily Review</h1>
          <p class="subtitle" style="font-style: italic; color: var(--ink-soft);">
            Complete at least one lesson first, then return here.
            Daily Review picks 10 random questions from everything you have studied —
            a <em>spaced-repetition</em> tune-up.
          </p>
        </div>
        <div class="text-center">
          <a href="#/" class="btn primary" style="display: inline-block; text-decoration: none; border-bottom: none;">Back to Paths</a>
        </div>
      `;
      return;
    }

    el.innerHTML = `
      <div class="path-header">
        <h1>Daily Review</h1>
        <p class="subtitle" style="font-style: italic; color: var(--ink-soft);">
          10 random questions from the full study guide. Build your streak.
        </p>
      </div>
      <div class="text-center">
        <button class="btn primary" id="daily-start">Start review →</button>
      </div>
    `;
    document.getElementById('daily-start').addEventListener('click', () => {
      const deck = Quiz.buildDailyDeck(10);
      Quiz.start(deck, () => {
        renderDaily();
      });
    });
  }

  // ---------- ABOUT ----------
  function renderAbout() {
    const el = document.getElementById('view');
    el.innerHTML = `
      <div class="about-page">
        <h1>About</h1>
        <p><strong>The Orders</strong> is a study guide to classical architecture for the hobbyist
        who wants to recognise, name, and appreciate classical buildings — state capitols,
        European civic architecture before World War I, and the long 2500-year conversation
        running through them.</p>

        <h2>How it works</h2>
        <p>There are six <em>paths</em>, each a sequence of short lessons followed by a quiz.
        You need to score 70% or better on a quiz to unlock the next lesson. Daily Review
        draws from everything you have studied.</p>

        <h2>Your Field Notebook</h2>
        <p>Every term you meet in the lessons is quietly added to your Field Notebook
        (the glossary). Visit it any time to see what you have learned so far.</p>

        <h2>Narration</h2>
        <p>The ♪ button toggles narration on and off. Narration uses your browser's built-in
        speech synthesis — no internet connection or API required. It reads slide content and
        quiz feedback aloud.</p>

        <h2>What this app is not</h2>
        <p>It is not comprehensive — architecture is an ocean, and this is a drinking cup.
        It is not academic — the aim is the well-furnished amateur eye, not a doctorate.
        Every source cited is in the public domain.</p>

        <h2>Sources</h2>
        <ul>
          <li>Vitruvius, <em>Ten Books on Architecture</em> (c. 25 BCE) — Morgan translation, 1914, public domain</li>
          <li>Andrea Palladio, <em>The Four Books of Architecture</em> (1570) — public domain</li>
          <li>Vignola, <em>The Five Orders of Architecture</em> (1562) — public domain</li>
          <li>Sir Henry Wotton, <em>The Elements of Architecture</em> (1624) — public domain</li>
          <li>John Summerson, <em>The Classical Language of Architecture</em> (1963) — referenced, not quoted</li>
        </ul>

        <p class="muted" style="margin-top: 40px;">
          Firmitas — this will stand.<br>
          Utilitas — it will be useful.<br>
          Venustas — it will be beautiful.
        </p>
      </div>
    `;
  }

  // ---------- INIT ----------
  function init() {
    document.getElementById('btn-audio').addEventListener('click', toggleAudio);
    window.addEventListener('hashchange', render);
    // populate speech voices list on some browsers
    if ('speechSynthesis' in window) {
      speechSynthesis.onvoiceschanged = () => { /* voices now available */ };
    }
    updateHUD();
    render();
  }

  return {
    init,
    addXP,
    bumpStreak,
    speak,
    learnTerms
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
