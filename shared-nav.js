(function () {
  /* Year */
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

  /* Mobile nav toggle */
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
  }

  /* Language switch */
  const STORAGE_KEY = 'am_lang';
  const RTL = new Set(['ar']);

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.has(lang) ? 'rtl' : 'ltr';
    document.querySelectorAll('.cap').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.cap-' + lang).forEach(el => el.classList.add('active'));
    document.querySelectorAll('.js-lang').forEach(sel => { if (sel.value !== lang) sel.value = lang; });
  }

  function initLang() {
    let saved = 'en';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.js-lang').forEach(sel => {
      sel.addEventListener('change', e => {
        applyLang(e.target.value);
        try { localStorage.setItem(STORAGE_KEY, e.target.value); } catch (e) {}
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();