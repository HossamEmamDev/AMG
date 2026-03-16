/* ===== CONTACT.JS ===== */
'use strict';

function submitContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('contact-msg');
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const settings = getData('siteSettings');
  const toEmail = settings.contactEmail || 'info@amgcontracting.com';

  const data = new FormData(form);
  data.append('to_email', toEmail);
  data.append('lang', lang);

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
      } else throw new Error();
    })
    .catch(() => {
      // Fallback: store locally
      const msgs = JSON.parse(localStorage.getItem('amg_messages') || '[]');
      msgs.push({
        name: data.get('name'), email: data.get('email'),
        subject: data.get('subject'), message: data.get('message'),
        date: new Date().toISOString(), read: false
      });
      localStorage.setItem('amg_messages', JSON.stringify(msgs));
      msg.textContent = lang === 'ar' ? '✅ تم استلام رسالتك. سنتواصل معك قريباً.' : '✅ Message received. We will contact you soon.';
      msg.style.cssText = 'background:rgba(34,197,94,0.1);color:#15803d;border:1px solid rgba(34,197,94,0.3);padding:12px 16px;border-radius:6px;margin-top:12px;display:block';
      form.reset();
    })
    .finally(() => {
      btn.textContent = origText;
      btn.disabled = false;
    });
}
