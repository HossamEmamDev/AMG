/* ===== CONTACT.JS ===== */
'use strict';

const CONTACT_COUNTRIES = [
  { flag: '🇪🇬', code: '+20', label_en: 'Egypt', label_ar: 'مصر' },
  { flag: '🇸🇦', code: '+966', label_en: 'Saudi Arabia', label_ar: 'السعودية' },
  { flag: '🇦🇪', code: '+971', label_en: 'UAE', label_ar: 'الإمارات' },
  { flag: '🇰🇼', code: '+965', label_en: 'Kuwait', label_ar: 'الكويت' },
  { flag: '🇶🇦', code: '+974', label_en: 'Qatar', label_ar: 'قطر' },
  { flag: '🇧🇭', code: '+973', label_en: 'Bahrain', label_ar: 'البحرين' },
  { flag: '🇴🇲', code: '+968', label_en: 'Oman', label_ar: 'عُمان' },
  { flag: '🇯🇴', code: '+962', label_en: 'Jordan', label_ar: 'الأردن' },
  { flag: '🇱🇧', code: '+961', label_en: 'Lebanon', label_ar: 'لبنان' },
  { flag: '🇮🇶', code: '+964', label_en: 'Iraq', label_ar: 'العراق' },
  { flag: '🇵🇸', code: '+970', label_en: 'Palestine', label_ar: 'فلسطين' },
  { flag: '🇹🇷', code: '+90', label_en: 'Turkey', label_ar: 'تركيا' },
  { flag: '🇬🇧', code: '+44', label_en: 'United Kingdom', label_ar: 'المملكة المتحدة' },
  { flag: '🇺🇸', code: '+1', label_en: 'United States', label_ar: 'الولايات المتحدة' },
  { flag: '🇨🇦', code: '+1', label_en: 'Canada', label_ar: 'كندا' },
  { flag: '🇩🇪', code: '+49', label_en: 'Germany', label_ar: 'ألمانيا' },
  { flag: '🇫🇷', code: '+33', label_en: 'France', label_ar: 'فرنسا' },
  { flag: '🇮🇹', code: '+39', label_en: 'Italy', label_ar: 'إيطاليا' },
  { flag: '🇪🇸', code: '+34', label_en: 'Spain', label_ar: 'إسبانيا' },
  { flag: '🇳🇱', code: '+31', label_en: 'Netherlands', label_ar: 'هولندا' },
  { flag: '🇨🇭', code: '+41', label_en: 'Switzerland', label_ar: 'سويسرا' },
  { flag: '🇮🇳', code: '+91', label_en: 'India', label_ar: 'الهند' },
  { flag: '🇵🇰', code: '+92', label_en: 'Pakistan', label_ar: 'باكستان' },
  { flag: '🇧🇩', code: '+880', label_en: 'Bangladesh', label_ar: 'بنغلاديش' },
  { flag: '🇨🇳', code: '+86', label_en: 'China', label_ar: 'الصين' },
  { flag: '🇯🇵', code: '+81', label_en: 'Japan', label_ar: 'اليابان' },
  { flag: '🇦🇺', code: '+61', label_en: 'Australia', label_ar: 'أستراليا' },
];

function formatContactCountryOption(item, lang) {
  const label = lang === 'ar' ? item.label_ar || item.label_en : item.label_en || item.label_ar;
  return lang === 'ar'
    ? `${item.flag} ${label} (${item.code})`
    : `${item.flag} ${label} (${item.code})`;
}

function syncContactPhoneValue(form) {
  const country = form.querySelector('#contact-country-code');
  const local = form.querySelector('#contact-phone-local');
  const hidden = form.querySelector('#contact-phone-full');
  if (!country || !local || !hidden) return;
  const localValue = local.value.replace(/\s+/g, ' ').trim();
  hidden.value = localValue ? `${country.value} ${localValue}` : '';
}

function updateContactPhoneUi() {
  const select = document.getElementById('contact-country-code');
  if (!select) return;
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  select.setAttribute('aria-label', lang === 'ar' ? 'كود الدولة' : 'Country code');
  Array.from(select.options).forEach((option) => {
    const match = CONTACT_COUNTRIES.find((item) => item.code === option.value && item.label_en === option.dataset.labelEn);
    if (!match) return;
    option.textContent = formatContactCountryOption(match, lang);
  });
}

function initContactPhoneField() {
  const select = document.getElementById('contact-country-code');
  const local = document.getElementById('contact-phone-local');
  const form = document.getElementById('contact-form');
  if (!select || !local || !form || select.options.length) return;

  select.innerHTML = CONTACT_COUNTRIES.map((item) =>
    `<option value="${item.code}" data-label-en="${item.label_en}" ${item.code === '+20' ? 'selected' : ''}>${formatContactCountryOption(item, 'en')}</option>`
  ).join('');

  updateContactPhoneUi();
  select.addEventListener('change', () => syncContactPhoneValue(form));
  local.addEventListener('input', () => syncContactPhoneValue(form));
  syncContactPhoneValue(form);
}

function updateContactFileLabel(input) {
  const label = document.getElementById('contact-file-label');
  const required = getFormRequirements('contact').attachment;
  if (label) {
    label.textContent = input.files[0]
      ? input.files[0].name
      : (document.documentElement.getAttribute('data-lang') === 'ar'
          ? (required ? 'أرفق ملفًا مطلوبًا' : 'أرفق ملفًا اختياريًا')
          : (required ? 'Attach required file' : 'Attach file (optional)'));
  }
}

function submitContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('contact-msg');
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const settings = getData('siteSettings');
  const toEmail = settings.contactEmail || 'info@amgcontracting.com';
  const requiredConfig = getFormRequirements('contact');

  syncContactPhoneValue(form);
  const data = new FormData(form);
  data.append('to_email', toEmail);
  data.append('lang', lang);
  data.append('required_config', JSON.stringify(requiredConfig));

  const btn = form.querySelector('button[type="submit"]');
  const origText = btn.textContent;
  btn.textContent = lang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
  btn.disabled = true;

  fetch('php/send_contact.php', { method: 'POST', body: data })
    .then(r => r.json())
    .then(res => {
      if (res.success) {
        msg.textContent = lang === 'ar' ? '✅ تم إرسال رسالتك! سنتواصل معك قريباً.' : '✅ Message sent! We will get back to you soon.';
        msg.style.cssText = 'background:rgba(34,197,94,0.1);color:#15803d;border:1px solid rgba(34,197,94,0.3);padding:12px 16px;border-radius:6px;margin-top:12px;display:block';
        form.reset();
        const countrySelect = document.getElementById('contact-country-code');
        if (countrySelect) countrySelect.value = '+20';
        syncContactPhoneValue(form);
        updateContactFileLabel({ files: [] });
        updateContactPhoneUi();
      } else throw new Error();
    })
    .catch(() => {
      // Fallback: store locally
      const msgs = JSON.parse(localStorage.getItem('amg_messages') || '[]');
      msgs.push({
        name: data.get('name'), email: data.get('email'),
        phone: data.get('phone'),
        subject: data.get('subject'),
        message: data.get('message'),
        attachmentName: data.get('attachment')?.name || '',
        date: new Date().toISOString(), read: false
      });
      localStorage.setItem('amg_messages', JSON.stringify(msgs));
      msg.textContent = lang === 'ar' ? '✅ تم استلام رسالتك. سنتواصل معك قريباً.' : '✅ Message received. We will contact you soon.';
      msg.style.cssText = 'background:rgba(34,197,94,0.1);color:#15803d;border:1px solid rgba(34,197,94,0.3);padding:12px 16px;border-radius:6px;margin-top:12px;display:block';
      form.reset();
      const countrySelect = document.getElementById('contact-country-code');
      if (countrySelect) countrySelect.value = '+20';
      syncContactPhoneValue(form);
      updateContactFileLabel({ files: [] });
      updateContactPhoneUi();
    })
    .finally(() => {
      btn.textContent = origText;
      btn.disabled = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
  initContactPhoneField();
  if (typeof applyContactFormRequirements === 'function') applyContactFormRequirements();
  updateContactFileLabel({ files: [] });
});
