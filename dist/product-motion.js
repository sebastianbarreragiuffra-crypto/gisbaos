/* Producto: tabs Agencia/Cliente con pill deslizante + narrativa de GISBA Pulse (una sola vez). */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-pr-tab]'));
  var states = Array.prototype.slice.call(document.querySelectorAll('[data-pr-state]'));
  var stage = document.getElementById('pr-stage');
  var seg = document.querySelector('.pr-seg');
  var pill = null, current = 'agency', token = 0;
  if (tabs.length) {
    if (seg) {
      pill = document.createElement('span');
      pill.className = 'pr-seg-pill'; pill.setAttribute('aria-hidden', 'true'); pill.setAttribute('data-pos', 'agency');
      seg.insertBefore(pill, seg.firstChild); seg.classList.add('has-pill');
    }
    var show = function (name) {
      states.forEach(function (el) {
        var on = el.dataset.prState === name;
        el.classList.remove('pr-out');
        if (on) { el.hidden = false; el.classList.remove('pr-in'); void el.offsetWidth; el.classList.add('pr-in'); }
        else { el.hidden = true; el.classList.remove('pr-in'); }
      });
    };
    var select = function (name, focus) {
      tabs.forEach(function (t) {
        var on = t.dataset.prTab === name;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      if (pill) pill.setAttribute('data-pos', name);
      if (stage) stage.setAttribute('aria-labelledby', 'pr-tab-' + name);
      if (name === current) return;
      current = name;
      var my = ++token;
      var old = states.filter(function (el) { return !el.hidden && el.dataset.prState !== name; })[0];
      if (reduce || !old) { show(name); return; }
      old.classList.add('pr-out');
      window.setTimeout(function () { if (my === token) show(name); }, 100);
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t.dataset.prTab, false); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, next = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
        else if (k === 'ArrowLeft' || k === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (k === 'Home') next = tabs[0];
        else if (k === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next.dataset.prTab, true); }
      });
    });
  }

  /* ---------- GISBA Pulse: Señal -> Detecta -> Explica -> Recomienda -> Decide ---------- */
  var sec = document.getElementById('gisba-pulse');
  if (!sec || reduce || !('IntersectionObserver' in window)) return;
  var steps = sec.querySelector('.pr-steps'), items = sec.querySelectorAll('.pr-step');
  if (!steps || items.length < 3) return;
  sec.setAttribute('data-pp', '0');
  var add = function (c) { sec.classList.add(c); };
  var at = function (ms, fn) { window.setTimeout(fn, ms); };
  var focusOn = function (i) { Array.prototype.forEach.call(items, function (s, n) { s.classList.toggle('is-focus', n === i); }); };
  var ready = false, stepsSeen = false, started = false;

  function tail() {
    if (started) return; started = true;
    add('is-s1'); focusOn(0);
    at(650, function () { add('is-s2'); focusOn(1); });
    at(800, function () { add('is-bars'); });
    at(1300, function () { add('is-s3'); focusOn(2); });
    at(1400, function () { add('is-recs'); });
    at(1950, function () { add('is-end'); focusOn(-1); });
  }
  function head() {
    add('is-sig');
    at(350, function () { add('is-hl'); });
    at(700, function () { ready = true; if (stepsSeen) tail(); });
  }
  /* una sola vez: la cabecera arranca la historia; el detalle espera a que los pasos estén a la vista */
  var ioHead = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { ioHead.disconnect(); head(); } });
  }, { threshold: 0.2 });
  var ioSteps = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { ioSteps.disconnect(); stepsSeen = true; if (ready) tail(); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' });
  ioHead.observe(sec); ioSteps.observe(steps);
})();
