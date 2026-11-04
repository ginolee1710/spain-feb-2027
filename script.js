(function () {
  'use strict';
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) {}

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    function syncThemeLabel() {
      var dark = root.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    syncThemeLabel();
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeLabel();
    });
  }

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Day-nav active state from scroll
  var dayLinks = Array.prototype.slice.call(document.querySelectorAll('.day-nav a[href^="#day-"]'));
  var daySections = dayLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  function setActiveDay() {
    var y = window.scrollY + 120;
    var current = daySections[0];
    daySections.forEach(function (sec) {
      if (sec.offsetTop <= y) current = sec;
    });
    if (!current) return;
    dayLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }
  if (daySections.length) {
    window.addEventListener('scroll', setActiveDay, { passive: true });
    setActiveDay();
  }

  // Pending checklist persistence (local only — not shared)
  var checks = document.querySelectorAll('.check-list input[type="checkbox"][data-key]');
  checks.forEach(function (box) {
    var key = 'spain27-' + box.getAttribute('data-key');
    try {
      if (localStorage.getItem(key) === '1') box.checked = true;
    } catch (e) {}
    box.addEventListener('change', function () {
      try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (e) {}
    });
  });
})();
