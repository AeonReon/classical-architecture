/* ============================================================
   Quiz engine. Presents MCQ questions, tracks score,
   awards XP, records a pass when the learner scores >= threshold.
   ============================================================ */

const Quiz = (() => {

  const PASS_THRESHOLD = 0.7;     // 70% to unlock the next lesson
  const XP_PER_CORRECT = 10;

  // state for the current quiz session
  let state = null;

  function start(questions, onDone) {
    state = {
      questions: questions.slice(),
      index: 0,
      correct: 0,
      wrong: 0,
      answered: false,
      selected: null,
      onDone
    };
    render();
  }

  function render() {
    const el = document.getElementById('view');
    if (!el || !state) return;

    if (state.index >= state.questions.length) {
      renderResults();
      return;
    }

    const q = state.questions[state.index];
    const dots = state.questions.map((_, i) => {
      let cls = 'quiz-dot';
      if (i < state.index) cls += (state.results && state.results[i]) ? ' pass' : ' fail';
      if (i === state.index) cls += ' current';
      return `<span class="${cls}"></span>`;
    }).join('');

    const figure = q.svg ? `<div class="quiz-figure">${SVG.byKey(q.svg)}</div>` : '';

    const options = q.choices.map((choice, i) => {
      let cls = 'quiz-option';
      if (state.answered) {
        if (i === q.correct) cls += ' correct-reveal';
        if (i === state.selected && i !== q.correct) cls += ' wrong';
        if (i === state.selected && i === q.correct) cls += ' correct';
      }
      const key = String.fromCharCode(65 + i);
      return `<button class="${cls}" data-choice="${i}" ${state.answered ? 'disabled' : ''}>
                <span class="quiz-option-key">${key}.</span>
                <span>${escapeHTML(choice)}</span>
              </button>`;
    }).join('');

    const feedback = state.answered ? `
      <div class="quiz-feedback">
        <strong>${state.selected === q.correct ? '✓ Correct' : '✗ Not quite'}.</strong>
        ${q.why ? ' ' + escapeHTML(q.why) : ''}
      </div>
      <div class="quiz-next">
        <button class="btn primary" id="quiz-next">
          ${state.index === state.questions.length - 1 ? 'See results' : 'Next question →'}
        </button>
      </div>
    ` : '';

    el.innerHTML = `
      <div class="lesson-breadcrumb"><a href="#/">Paths</a> › Quiz</div>
      <div class="quiz-shell">
        <div class="quiz-progress">${dots}</div>
        <div class="quiz-prompt">${escapeHTML(q.q)}</div>
        <div class="quiz-sub">Question ${state.index + 1} of ${state.questions.length}</div>
        ${figure}
        <div class="quiz-options">${options}</div>
        ${feedback}
      </div>
    `;

    // bind clicks
    el.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.choice)));
    });
    const next = document.getElementById('quiz-next');
    if (next) next.addEventListener('click', handleNext);
  }

  function handleAnswer(choice) {
    if (!state || state.answered) return;
    const q = state.questions[state.index];
    state.answered = true;
    state.selected = choice;
    state.results = state.results || [];
    const correct = (choice === q.correct);
    state.results[state.index] = correct;
    if (correct) {
      state.correct++;
      App.addXP(XP_PER_CORRECT);
      App.bumpStreak(true);
      App.speak(q.why || 'Correct.');
    } else {
      state.wrong++;
      App.bumpStreak(false);
      App.speak('Not quite. ' + (q.why || ''));
    }
    render();
  }

  function handleNext() {
    if (!state) return;
    state.index++;
    state.answered = false;
    state.selected = null;
    render();
  }

  function renderResults() {
    const el = document.getElementById('view');
    if (!el || !state) return;
    const total = state.questions.length;
    const score = state.correct / total;
    const pass = score >= PASS_THRESHOLD;
    const pct = Math.round(score * 100);

    el.innerHTML = `
      <div class="quiz-shell quiz-done">
        <div class="muted">${pass ? 'LESSON COMPLETE' : 'TRY AGAIN'}</div>
        <h2>${pass ? 'Well done.' : 'Close — have another go.'}</h2>
        <div class="big-score">${pct}%</div>
        <div class="result-row">
          <div>${state.correct} correct</div>
          <div>${state.wrong} wrong</div>
          <div>+${state.correct * XP_PER_CORRECT} XP</div>
        </div>
        <div style="margin-top: 30px;">
          ${pass
            ? `<button class="btn primary" id="q-continue">Continue →</button>`
            : `<button class="btn" id="q-retry">Try again</button> &nbsp;
               <button class="btn ghost" id="q-back">Back to lesson</button>`}
        </div>
      </div>
    `;

    const done = state.onDone;
    if (pass) {
      document.getElementById('q-continue').addEventListener('click', () => done(true, score));
    } else {
      document.getElementById('q-retry').addEventListener('click', () => done(false, score, 'retry'));
      document.getElementById('q-back').addEventListener('click', () => done(false, score, 'back'));
    }
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // ---------------- random review (Daily) ----------------
  function buildDailyDeck(n = 10) {
    const all = [];
    CONTENT.paths.forEach(path => {
      path.lessons.forEach(lesson => {
        if (!lesson.quiz) return;
        lesson.quiz.forEach(q => all.push({ ...q, _origin: `${path.id}/${lesson.id}` }));
      });
    });
    // shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, n);
  }

  return { start, buildDailyDeck, PASS_THRESHOLD };
})();
