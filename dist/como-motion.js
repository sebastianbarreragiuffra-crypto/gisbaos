/* Cómo funciona: motion de producto (una sola reproducción por sección, sin librerías) */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stages = Array.prototype.slice.call(document.querySelectorAll('[data-stage]'));
  if (!stages.length) return;

  function showAll(stage) {
    Array.prototype.forEach.call(stage.querySelectorAll('[data-s]'), function (el) { el.classList.add('on'); });
    stage.classList.add('is-in', 'is-done');
    stage.setAttribute('data-step', '9');
    stage.dispatchEvent(new CustomEvent('cx:done'));
  }

  function play(stage) {
    if (stage.__played) return;
    stage.__played = true;
    if (reduce) { showAll(stage); return; }
    var steps = (stage.getAttribute('data-steps') || '100').split(',').map(Number);
    var mobile = window.matchMedia && window.matchMedia('(max-width: 720px)').matches;
    stage.classList.add('is-in');
    steps.forEach(function (ms, i) {
      var n = i + 1;
      window.setTimeout(function () {
        stage.setAttribute('data-step', String(n));
        Array.prototype.forEach.call(stage.querySelectorAll('[data-s="' + n + '"]'), function (el) { el.classList.add('on'); });
        if (n === steps.length) {
          window.setTimeout(function () {
            Array.prototype.forEach.call(stage.querySelectorAll('[data-s]'), function (el) { el.classList.add('on'); });
            stage.classList.add('is-done');
            stage.dispatchEvent(new CustomEvent('cx:done'));
          }, mobile ? 250 : 450);
        }
      }, mobile ? Math.round(ms * 0.8) : ms);
    });
  }

  if (!('IntersectionObserver' in window)) { stages.forEach(showAll); }
  else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { play(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -8% 0px' });
    stages.forEach(function (st) { io.observe(st); });
  }

  /* ---- 02 · Detecta: foco manual opcional entre señales ---- */
  var D = {
    ladera: { av: 'L', bg: '#0B1028', name: 'Ladera', meta: 'E-commerce · Moda', chip: 'Alta prioridad', cc: 'hi', title: 'Caída en conversiones', desc: 'Se detectó una disminución significativa en las conversiones de esta campaña en los últimos 3 días.', num: '-28%', numl: 'en conversiones vs. 3 días anteriores', why: 'El CPA aumentó 42% y el volumen de conversiones cayó, afectando el ROAS de la campaña.', reco: 'Revisar segmentación y creatividades. Hay una oportunidad de recuperar rendimiento con audiencias similares.' },
    nova: { av: 'N', bg: '#1c1f3a', name: 'Nova Studio', meta: 'E-commerce · Moda', chip: 'Media', cc: 'md', title: 'Aumento en CPA', desc: 'El costo por resultado subió respecto al período anterior.', num: '', numl: '', why: 'Puede afectar la eficiencia de la inversión si se mantiene.', reco: 'Revisar audiencias y creatividades de la campaña.' },
    terramar: { av: 'T', bg: '#1e9bb8', name: 'Terramar', meta: 'Cuenta activa', chip: 'Oportunidad', cc: 'op', title: 'Oportunidad de presupuesto', desc: 'El rendimiento de la cuenta permite evaluar una mayor inversión.', num: '', numl: '', why: 'Hay margen para escalar con control.', reco: 'Evaluar un ajuste de presupuesto antes de decidir.' },
    boreal: { av: 'B', bg: '#0f4d2f', name: 'Boreal', meta: 'Cuenta activa', chip: 'Baja', cc: 'lo', title: 'Cambio en rendimiento', desc: 'Se observa una variación menor frente al período anterior.', num: '', numl: '', why: 'No requiere acción inmediata.', reco: 'Mantener seguimiento.' },
    vita: { av: 'V', bg: '#d9a98c', name: 'Vita', meta: 'Cuenta activa', chip: 'Baja', cc: 'lo', title: 'Variación en tráfico', desc: 'El tráfico muestra una variación frente al período anterior.', num: '', numl: '', why: 'No requiere acción inmediata.', reco: 'Mantener seguimiento.' }
  };
  var sg = document.querySelector('.cx-sg');
  if (sg) {
    var stage = sg.closest('[data-stage]');
    var rows = Array.prototype.slice.call(sg.querySelectorAll('.cx-sg-row'));
    var detail = sg.querySelector('.cx-sg-detail');
    var set = function (sel, txt) { var n = sg.querySelector('[data-d="' + sel + '"]'); if (n) n.textContent = txt; };
    var focusRow = function (row) {
      if (!stage.classList.contains('is-done')) return;
      var d = D[row.getAttribute('data-k')];
      if (!d || row.classList.contains('is-active')) return;
      rows.forEach(function (r) { var on = r === row; r.classList.toggle('is-active', on); r.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      detail.classList.add('swap');
      window.setTimeout(function () {
        var av = sg.querySelector('[data-d="av"]'); av.textContent = d.av; av.style.background = d.bg;
        set('name', d.name); set('meta', d.meta); set('title', d.title); set('desc', d.desc); set('why', d.why); set('reco', d.reco);
        var chip = sg.querySelector('[data-d="chip"]'); chip.textContent = d.chip; chip.className = 'cx-chip ' + d.cc;
        var num = sg.querySelector('.cx-sg-num'); num.style.display = d.num ? '' : 'none'; set('num', d.num); set('numl', d.numl);
        detail.classList.remove('swap');
      }, reduce ? 0 : 160);
    };
    rows.forEach(function (row) {
      row.addEventListener('click', function () { focusRow(row); });
      row.addEventListener('mouseenter', function () { if (window.matchMedia('(hover: hover)').matches) focusRow(row); });
      row.addEventListener('focus', function () { focusRow(row); });
    });
  }
})();
