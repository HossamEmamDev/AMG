/* ===== PROJECTS.JS ===== */
'use strict';

let currentSlide = 0;
let projectsData = [];

/* ── Render main slider ── */
function renderProjects() {
  const lang     = document.documentElement.getAttribute('data-lang') || 'en';
  projectsData   = getData('projects') || [];
  const slider   = document.getElementById('projects-slider');
  const dotsWrap = document.getElementById('proj-dots');
  if (!slider) return;

  slider.innerHTML = projectsData.map((p, i) => {
    const img     = p.image || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=75&fit=crop';
    const name    = p['name_'+lang]     || p.name_en    || '';
    const cat     = p['category_'+lang] || p.category_en|| '';
    const loc     = p['location_'+lang] || p.location_en|| '';
    const brief   = p['brief_'+lang]    || p.brief_en   || '';
    const pLbl    = lang === 'ar' ? 'الإنجاز' : 'Completion';
    return `
    <div class="project-slide" data-id="${p.id}" onclick="openProjectDetail(${p.id})">
      <div class="project-img-wrap">
        <img src="${img}" alt="${name}" loading="${i===0?'eager':'lazy'}" />
      </div>
      <div class="project-info">
        <div class="project-info-top">
          <span class="project-category">${cat}</span>
          <h3 class="project-name">${name}</h3>
          <p class="project-brief">${brief}</p>
          <div class="project-meta">
            <span><i class="fa fa-location-dot"></i>${loc}</span>
            ${p.year?`<span><i class="fa fa-calendar"></i>${p.year}</span>`:''}
          </div>
        </div>
        <div class="project-info-bottom">
          <div class="project-progress-label">
            <span>${pLbl}</span><span>${p.progress}%</span>
          </div>
          <div class="project-progress-bar">
            <div class="project-progress-fill" style="width:${p.progress}%"></div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  if (dotsWrap) {
    dotsWrap.innerHTML = projectsData.map((_,i) =>
      `<button class="slider-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></button>`
    ).join('');
  }
  currentSlide = 0;
  updateSlider();
}

function updateSlider() {
  const slider = document.getElementById('projects-slider');
  if (!slider) return;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d,i) => d.classList.toggle('active', i===currentSlide));
}

function goToSlide(n) {
  if (!projectsData.length) return;
  currentSlide = ((n % projectsData.length) + projectsData.length) % projectsData.length;
  updateSlider();
}

let autoPlay = setInterval(() => goToSlide(currentSlide+1), 6000);
function resetAutoplay() { clearInterval(autoPlay); autoPlay = setInterval(()=>goToSlide(currentSlide+1),6000); }

document.getElementById('proj-prev')?.addEventListener('click', () => { goToSlide(currentSlide-1); resetAutoplay(); });
document.getElementById('proj-next')?.addEventListener('click', () => { goToSlide(currentSlide+1); resetAutoplay(); });

/* ── Project Detail Modal with image gallery ── */
function openProjectDetail(id) {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const p    = (getData('projects')||[]).find(x=>x.id===id);
  if (!p) return;

  const name  = p['name_'+lang]     || p.name_en    || '';
  const cat   = p['category_'+lang] || p.category_en|| '';
  const loc   = p['location_'+lang] || p.location_en|| '';
  const brief = p['brief_'+lang]    || p.brief_en   || '';
  const imgs  = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);

  // Image gallery HTML
  let galleryHtml = '';
  if (imgs.length > 0) {
    galleryHtml = `
      <div class="proj-gallery">
        <div class="proj-gallery-main">
          <img id="gallery-main-img" src="${imgs[0]}" alt="${name}" />
          ${imgs.length > 1 ? `
            <button class="gallery-nav prev" onclick="galleryNav(-1,${imgs.length})"><i class="fa fa-chevron-left"></i></button>
            <button class="gallery-nav next" onclick="galleryNav(1,${imgs.length})"><i class="fa fa-chevron-right"></i></button>
          ` : ''}
        </div>
        ${imgs.length > 1 ? `
        <div class="proj-gallery-thumbs">
          ${imgs.map((im,i)=>`<img src="${im}" class="gallery-thumb ${i===0?'active':''}" onclick="setGalleryImg('${im}',${i})" loading="lazy" />`).join('')}
        </div>` : ''}
      </div>`;
  }

  document.getElementById('project-modal-content').innerHTML = `
    ${galleryHtml}
    <div class="project-detail-header" style="margin-top:${imgs.length?'16px':'0'}">
      <span class="project-category">${cat}</span>
      <h2>${name}</h2>
      <div class="project-detail-meta">
        <span><i class="fa fa-location-dot"></i>${loc}</span>
        ${p.year?`<span><i class="fa fa-calendar"></i>${p.year}</span>`:''}
      </div>
    </div>
    <p class="project-detail-desc">${brief}</p>
    <div class="project-detail-progress">
      <div class="project-detail-progress-label">
        <span>${lang==='ar'?'نسبة الإنجاز':'Completion'}</span>
        <span>${p.progress}%</span>
      </div>
      <div class="progress-bar-full">
        <div class="progress-bar-fill" style="width:0%" data-target="${p.progress}"></div>
      </div>
    </div>`;

  openModal('project-modal');
  setTimeout(()=>{ const f=document.querySelector('#project-modal-content .progress-bar-fill'); if(f) f.style.width=f.dataset.target+'%'; },120);
}

let galleryIdx = 0;
function setGalleryImg(src, idx) {
  const main = document.getElementById('gallery-main-img');
  if (main) { main.src = src; galleryIdx = idx; }
  document.querySelectorAll('.gallery-thumb').forEach((t,i) => t.classList.toggle('active', i===idx));
}
function galleryNav(dir, total) {
  const thumbs = document.querySelectorAll('.gallery-thumb');
  const newIdx = ((galleryIdx + dir) + total) % total;
  if (thumbs[newIdx]) thumbs[newIdx].click();
}

/* ── All Projects Grid ── */
function renderAllProjects() {
  const lang     = document.documentElement.getAttribute('data-lang') || 'en';
  const projects = getData('projects') || [];
  const grid     = document.getElementById('all-projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <div class="proj-thumb" onclick="openProjectDetail(${p.id}); closeModal('all-projects-modal'); setTimeout(()=>openModal('project-modal'),160)">
      ${p.image ? `<img src="${p.image}" alt="${p['name_'+lang]||p.name_en}" loading="lazy" />` : '<div style="height:170px;background:#f0ede8;display:flex;align-items:center;justify-content:center"><i class="fas fa-building" style="font-size:2rem;color:#ccc"></i></div>'}
      <div class="proj-thumb-body">
        <h4>${p['name_'+lang]||p.name_en}</h4>
        <p><i class="fa fa-location-dot" style="color:var(--color-primary);margin-right:4px"></i>${p['location_'+lang]||p.location_en} · ${p.progress}%</p>
      </div>
    </div>`).join('');

  const h2 = document.querySelector('#all-projects-modal h2');
  if (h2) h2.textContent = lang==='ar'?'جميع المشاريع':'All Projects';
}

/* ── Services Grid ── */
function renderServices() {
  const lang     = document.documentElement.getAttribute('data-lang') || 'en';
  const services = getData('services') || [];
  const grid     = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = services.map(s => {
    const hasImg = !!s.image;
    return `
    <div class="service-card ${hasImg?'':'no-img'} reveal-up">
      ${hasImg ? `<img src="${s.image}" alt="${s['title_'+lang]||s.title_en}" loading="lazy" />` : ''}
      <div class="service-overlay">
        <div class="service-icon"><i class="${s.icon||'fas fa-building'}"></i></div>
        <h3 class="service-title">${s['title_'+lang]||s.title_en}</h3>
        <p class="service-brief">${s['brief_'+lang]||s.brief_en}</p>
      </div>
    </div>`;
  }).join('');

  if (typeof setupScrollReveal === 'function') setupScrollReveal();
}

document.addEventListener('DOMContentLoaded', () => { renderProjects(); renderServices(); });
