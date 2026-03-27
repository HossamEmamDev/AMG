/* ===== PARTNERS.JS ===== */
'use strict';

const PARTNER_ACCENT_PRESETS = [
  {
    value: 'radial-gradient(circle at 30% 30%, rgba(201,150,100,0.62), rgba(120,68,42,0.22))',
    label: 'Copper Gold',
  },
  {
    value: 'radial-gradient(circle at 35% 30%, rgba(88,160,184,0.58), rgba(36,72,102,0.24))',
    label: 'Ocean Blue',
  },
  {
    value: 'radial-gradient(circle at 30% 35%, rgba(221,120,120,0.56), rgba(126,42,56,0.24))',
    label: 'Rose Brick',
  },
  {
    value: 'radial-gradient(circle at 30% 30%, rgba(132,182,113,0.58), rgba(56,97,54,0.22))',
    label: 'Olive Green',
  },
  {
    value: 'radial-gradient(circle at 30% 30%, rgba(170,143,223,0.56), rgba(78,58,122,0.22))',
    label: 'Royal Violet',
  },
];

function renderPartners() {
  const partners = getData('partners') || [];
  const track    = document.getElementById('partners-track');
  if (!track) return;

  track.innerHTML = partners.map((p, i) => `
    <div class="partner-logo" style="--partner-accent:${p.accent || PARTNER_ACCENT_PRESETS[i % PARTNER_ACCENT_PRESETS.length].value}">
      <div class="partner-logo-core">
        ${p.logo
          ? `<img
               src="${p.logo}"
               alt="${p.name}"
               loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
             /><span class="partner-logo-text" style="display:none">${p.name}</span>`
          : `<span class="partner-logo-text">${p.name}</span>`
        }
      </div>
    </div>`).join('');

  renderTestimonials();
}

function renderTestimonials() {
  const lang         = document.documentElement.getAttribute('data-lang') || 'en';
  const testimonials = getData('testimonials') || [];
  const grid         = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal-up">
      <div class="testimonial-stars">
        ${'<i class="fas fa-star"></i>'.repeat(Math.min(t.stars||5, 5))}
      </div>
      <p class="testimonial-text">${t['text_'+lang] || t.text_en}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${(t.author||'?').charAt(0).toUpperCase()}</div>
        <div>
          <div class="testimonial-name">${t.author}</div>
          <div class="testimonial-company">${t.company}</div>
        </div>
      </div>
    </div>`).join('');

  if (typeof setupScrollReveal === 'function') setupScrollReveal();
}

document.addEventListener('DOMContentLoaded', renderPartners);
