/* ===== PARTNERS.JS ===== */
'use strict';

function renderPartners() {
  const partners = getData('partners') || [];
  const track    = document.getElementById('partners-track');
  if (!track) return;

  track.innerHTML = partners.map(p => `
    <div class="partner-logo">
      ${p.logo
        ? `<img
             src="${p.logo}"
             alt="${p.name}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
           /><span class="partner-logo-text" style="display:none">${p.name}</span>`
        : `<span class="partner-logo-text">${p.name}</span>`
      }
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
