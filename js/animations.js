/* ===== ANIMATIONS.JS ===== */
'use strict';

function setupScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-stagger').forEach(el => {
    // Only observe if not already visible
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure DOM is fully rendered
  setTimeout(setupScrollReveal, 100);
});

// Re-run on dynamic content load
window.addEventListener('amg:content-updated', setupScrollReveal);
