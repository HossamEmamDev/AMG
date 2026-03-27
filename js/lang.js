/* ===== LANG.JS — Bilingual System ===== */

function detectDefaultLang() {
  const s = getData('siteSettings');
  if (s.defaultLang && s.defaultLang !== 'auto') return s.defaultLang;
  const nav = navigator.language || navigator.userLanguage || 'en';
  return nav.startsWith('ar') ? 'ar' : 'en';
}

function toggleLanguage() {
  const current = document.documentElement.getAttribute('data-lang') || 'en';
  setLang(current === 'en' ? 'ar' : 'en');
}

function setLang(lang) {
  const html = document.documentElement;
  html.setAttribute('data-lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('lang', lang);
  localStorage.setItem('amg_lang', lang);

  /* Button label:
     When site is English  → show "ع" (click to switch to Arabic)
     When site is Arabic   → show "EN" (click to switch to English)  */
  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'en' ? 'ع' : 'EN';

  /* Translate elements with data-en / data-ar attributes */
  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if (txt !== null) el.textContent = txt;
  });

  /* Placeholders */
  document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-' + lang) || '';
  });

  /* Re-apply dynamic settings with correct language */
  if (typeof applySettings === 'function') applySettings();
  if (typeof applySeoSettings === 'function') applySeoSettings();

  /* Re-render dynamic sections */
  if (typeof renderProjects  === 'function') renderProjects();
  if (typeof renderCareers   === 'function') renderCareers();
  if (typeof renderAllCareers === 'function') renderAllCareers();
  if (typeof renderServices  === 'function') renderServices();
  if (typeof renderPartners  === 'function') renderPartners();
  if (typeof renderGroup     === 'function') renderGroup();
  if (typeof updateContactPhoneUi === 'function') updateContactPhoneUi();
  if (typeof updateContactFileLabel === 'function') updateContactFileLabel({ files: [] });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('amg_lang') || detectDefaultLang();
  setLang(saved);
});
