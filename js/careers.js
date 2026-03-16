/* ===== CAREERS.JS ===== */
'use strict';

function renderCareers() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const careers = getData('careers') || [];
  const grid = document.getElementById('careers-grid');
  if (!grid) return;

  const active = careers.filter(c => c.active !== false).slice(0, 3);
  const typeLabel = {
    'full-time': lang === 'ar' ? 'دوام كامل' : 'Full-Time',
    'part-time': lang === 'ar' ? 'دوام جزئي' : 'Part-Time',
    'contract':  lang === 'ar' ? 'عقد'       : 'Contract'
  };

  grid.innerHTML = active.map(c => `
    <div class="career-card reveal-up">
      <div class="career-header">
        <h3 class="career-title">${c['title_'+lang] || c.title_en}</h3>
        <span class="career-type ${c.type||'full-time'}">${typeLabel[c.type] || typeLabel['full-time']}</span>
      </div>
      <p class="career-desc">${c['desc_'+lang] || c.desc_en}</p>
      <div class="career-requirements">
        <div class="career-req-title">${lang==='ar'?'المتطلبات':'Requirements'}</div>
        <ul class="career-req-list">
          ${(c.requirements||[]).map(r=>`<li>${r}</li>`).join('')}
        </ul>
      </div>
      <div class="career-footer">
        <span class="career-location"><i class="fa fa-location-dot"></i>${c['location_'+lang]||c.location_en}</span>
        <div class="career-actions">
          ${buildShareBtn(c, lang)}
          <button class="btn btn-primary" style="padding:7px 16px;font-size:0.78rem" onclick="openApplyModal(${c.id})">
            ${lang==='ar'?'تقدم الآن':'Apply'}
          </button>
        </div>
      </div>
    </div>`).join('');

  // Wire up share popovers
  wireShareBtns();
  if (typeof setupScrollReveal === 'function') setupScrollReveal();
}

function buildShareBtn(c, lang) {
  const url   = encodeURIComponent(window.location.href.split('#')[0] + '#careers');
  const title = encodeURIComponent((c['title_'+lang]||c.title_en) + ' — AMG Main Contracting');
  return `
  <div class="share-btn-wrap">
    <button class="share-trigger" title="${lang==='ar'?'مشاركة':'Share'}">
      <i class="fas fa-share-alt"></i>
    </button>
    <div class="share-popover">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="share-pop-fb" title="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" class="share-pop-li" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://wa.me/?text=${title}%20${url}" target="_blank" class="share-pop-wa" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="https://twitter.com/intent/tweet?url=${url}&text=${title}" target="_blank" class="share-pop-tw" title="X / Twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" class="share-pop-cp" title="${lang==='ar'?'نسخ الرابط':'Copy link'}" onclick="copyShareLink(event,'${decodeURIComponent(url)}')"><i class="fas fa-link"></i></a>
    </div>
  </div>`;
}

function wireShareBtns() {
  document.querySelectorAll('.share-btn-wrap').forEach(wrap => {
    const trigger = wrap.querySelector('.share-trigger');
    if (!trigger) return;
    trigger.onclick = (e) => {
      e.stopPropagation();
      const wasOpen = wrap.classList.contains('open');
      document.querySelectorAll('.share-btn-wrap.open').forEach(w => w.classList.remove('open'));
      if (!wasOpen) wrap.classList.add('open');
    };
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.share-btn-wrap.open').forEach(w => w.classList.remove('open'));
  }, { capture: true });
}

function copyShareLink(e, url) {
  e.preventDefault();
  navigator.clipboard?.writeText(url).then(() => {
    const el = e.currentTarget;
    el.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => { el.innerHTML = '<i class="fas fa-link"></i>'; }, 1500);
  });
}

/* ── Apply Modal ── */
function openApplyModal(careerId) {
  const lang    = document.documentElement.getAttribute('data-lang') || 'en';
  const careers = getData('careers') || [];
  const job     = careers.find(c => c.id === careerId);
  if (!job) return;

  const L = {
    en: { name:'Full Name',email:'Email',phone:'Phone',edu:'Education',exp:'Years of Experience',cv:'Upload CV (PDF)',msg:'Cover Message (optional)',submit:'Submit Application',applyFor:'Applying for' },
    ar: { name:'الاسم الكامل',email:'البريد الإلكتروني',phone:'رقم الهاتف',edu:'المستوى التعليمي',exp:'سنوات الخبرة',cv:'رفع السيرة الذاتية',msg:'رسالة تغطية (اختياري)',submit:'إرسال الطلب',applyFor:'التقدم لوظيفة' }
  }[lang] || {};

  document.getElementById('career-modal-content').innerHTML = `
  <div class="apply-form" dir="${lang==='ar'?'rtl':'ltr'}">
    <h2>${lang==='ar'?'تقدم للوظيفة':'Apply for Position'}</h2>
    <p class="job-role"><i class="fa fa-briefcase"></i> ${L.applyFor}: ${job['title_'+lang]||job.title_en}</p>
    <form id="apply-form-inner" onsubmit="submitApplyForm(event,${careerId})">
      <div class="form-grid">
        <div class="form-group"><label>${L.name}</label><input type="text" name="name" required /></div>
        <div class="form-group"><label>${L.email}</label><input type="email" name="email" required /></div>
        <div class="form-group"><label>${L.phone}</label><input type="tel" name="phone" required /></div>
        <div class="form-group">
          <label>${L.edu}</label>
          <select name="education">
            <option value="bachelor">${lang==='ar'?'بكالوريوس':"Bachelor's"}</option>
            <option value="master">${lang==='ar'?'ماجستير':"Master's"}</option>
            <option value="phd">${lang==='ar'?'دكتوراه':'PhD'}</option>
            <option value="diploma">${lang==='ar'?'دبلوم':'Diploma'}</option>
          </select>
        </div>
        <div class="form-group"><label>${L.exp}</label><input type="number" name="experience" min="0" max="50" required /></div>
        <div class="form-group">
          <label>${L.cv}</label>
          <label class="file-input-label" for="cv-upload">
            <i class="fas fa-file-pdf"></i>
            <span id="cv-label">${lang==='ar'?'اختر ملف PDF':'Choose PDF file'}</span>
          </label>
          <input type="file" id="cv-upload" name="cv" accept=".pdf,.doc,.docx" onchange="updateFileLabel(this)" />
        </div>
      </div>
      <div class="form-group"><label>${L.msg}</label><textarea name="message" rows="3"></textarea></div>
      <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">${L.submit}</button>
      <div class="form-msg" id="apply-form-msg"></div>
    </form>
  </div>`;

  openModal('career-modal');
}

function updateFileLabel(input) {
  const lbl = document.getElementById('cv-label');
  if (lbl && input.files[0]) lbl.textContent = input.files[0].name;
}

function submitApplyForm(e, careerId) {
  e.preventDefault();
  const form     = e.target;
  const msg      = document.getElementById('apply-form-msg');
  const lang     = document.documentElement.getAttribute('data-lang') || 'en';
  const settings = getData('siteSettings');
  const hrEmail  = settings.hrEmail || 'hr@amgcontracting.com';
  const careers  = getData('careers') || [];
  const job      = careers.find(c => c.id === careerId);

  const data = new FormData(form);
  data.append('hr_email', hrEmail);
  data.append('job_title', (job && (job['title_'+lang] || job.title_en)) || '');
  data.append('lang', lang);

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = lang==='ar'?'جاري الإرسال...':'Sending...';

  fetch('php/send_apply.php', { method:'POST', body:data })
    .then(r=>r.json())
    .then(res => {
      if (res.success) {
        msg.textContent = lang==='ar'?'✓ تم إرسال طلبك بنجاح!':'✓ Application submitted successfully!';
        msg.className = 'form-msg success';
        form.reset();
      } else throw new Error();
    })
    .catch(() => {
      // Fallback: save locally
      const apps = JSON.parse(localStorage.getItem('amg_applications')||'[]');
      apps.push({ careerId, jobTitle:(job&&job.title_en)||'', name:data.get('name'), email:data.get('email'), phone:data.get('phone'), date:new Date().toISOString() });
      localStorage.setItem('amg_applications', JSON.stringify(apps));
      msg.textContent = lang==='ar'?'✓ تم تسجيل طلبك. سنتواصل معك قريباً.':'✓ Application recorded. Our team will contact you soon.';
      msg.className = 'form-msg success';
      form.reset();
    })
    .finally(() => { btn.disabled=false; btn.textContent=lang==='ar'?'إرسال الطلب':'Submit Application'; });
}

document.addEventListener('DOMContentLoaded', renderCareers);
