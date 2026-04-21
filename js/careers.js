/* ===== CAREERS.JS ===== */
'use strict';

function normalizeCareerItem(career) {
  const item = career && typeof career === 'object' ? career : {};
  const normalizeText = (value) => (typeof value === 'string' ? value : '');
  const requirementsRaw = item.requirements;
  let requirements = [];

  if (Array.isArray(requirementsRaw)) {
    requirements = requirementsRaw.map((entry) => normalizeText(entry).trim()).filter(Boolean);
  } else if (typeof requirementsRaw === 'string') {
    requirements = requirementsRaw
      .split(/\r?\n|,|•|-/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  return {
    id: item.id ?? null,
    type: normalizeText(item.type) || 'full-time',
    title_en: normalizeText(item.title_en),
    title_ar: normalizeText(item.title_ar),
    desc_en: normalizeText(item.desc_en),
    desc_ar: normalizeText(item.desc_ar),
    location_en: normalizeText(item.location_en),
    location_ar: normalizeText(item.location_ar),
    active: item.active !== false,
    requirements,
  };
}

function getActiveCareers() {
  return (getData('careers') || [])
    .map(normalizeCareerItem)
    .filter((career) => career.active !== false);
}

function getCareerUiStrings(lang) {
  return {
    typeLabel: {
      'full-time': lang === 'ar' ? 'دوام كامل' : 'Full-Time',
      'part-time': lang === 'ar' ? 'دوام جزئي' : 'Part-Time',
      'contract': lang === 'ar' ? 'عقد' : 'Contract'
    },
    labels: {
      name: lang === 'ar' ? 'الاسم الكامل' : 'Full Name',
      email: lang === 'ar' ? 'البريد الإلكتروني' : 'Email',
      phone: lang === 'ar' ? 'رقم الهاتف' : 'Phone',
      linkedin: lang === 'ar' ? 'رابط لينكدإن' : 'LinkedIn Profile',
      edu: lang === 'ar' ? 'المستوى التعليمي' : 'Education',
      exp: lang === 'ar' ? 'سنوات الخبرة' : 'Years of Experience',
      cv: lang === 'ar' ? 'رفع السيرة الذاتية' : 'Upload CV / Resume',
      msg: lang === 'ar' ? 'رسالة تعريفية (اختياري)' : 'Cover Message (optional)',
      submit: lang === 'ar' ? 'إرسال الطلب' : 'Submit Application',
      applyFor: lang === 'ar' ? 'التقدم إلى' : 'Applying for',
      submitGeneral: lang === 'ar' ? 'إرسال السيرة الذاتية' : 'Submit Your CV',
      generalTitle: lang === 'ar' ? 'أرسل سيرتك الذاتية' : 'Share Your CV With HR',
      generalSubtitle: lang === 'ar' ? 'أرسل سيرتك الآن ليتم التواصل معك عند توفر الفرص المناسبة.' : 'Send your CV now and our HR team will reach out when the right opportunity opens.'
    }
  };
}

function buildCareerCard(c, lang, expanded = false) {
  const { typeLabel } = getCareerUiStrings(lang);
  const career = normalizeCareerItem(c);
  const title = career['title_' + lang] || career.title_en || (lang === 'ar' ? 'وظيفة متاحة' : 'Open Role');
  const description = career['desc_' + lang] || career.desc_en || (lang === 'ar' ? 'تفاصيل الوظيفة ستظهر هنا قريباً.' : 'Role details will appear here soon.');
  const location = career['location_' + lang] || career.location_en || (lang === 'ar' ? 'سيتم التحديد' : 'To be confirmed');
  return `
    <div class="career-card">
      <div class="career-header">
        <h3 class="career-title">${title}</h3>
        <span class="career-type ${career.type||'full-time'}">${typeLabel[career.type] || typeLabel['full-time']}</span>
      </div>
      <p class="career-desc ${expanded ? 'expanded' : ''}">${description}</p>
      <div class="career-requirements">
        <div class="career-req-title">${lang==='ar'?'المتطلبات':'Requirements'}</div>
        <ul class="career-req-list">
          ${(career.requirements||[]).map(r=>`<li>${r}</li>`).join('')}
        </ul>
      </div>
      <div class="career-footer">
        <span class="career-location"><i class="fa fa-location-dot"></i>${location}</span>
        <div class="career-actions">
          ${buildShareBtn(career, lang)}
          <button class="btn btn-primary" style="padding:7px 16px;font-size:0.78rem" onclick="openApplyModal(${career.id})">
            ${lang==='ar'?'تقدم الآن':'Apply'}
          </button>
        </div>
      </div>
    </div>`;
}

function renderCareers() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const careers = getActiveCareers();
  const grid = document.getElementById('careers-grid');
  if (!grid) return;

  if (!careers.length) {
    grid.innerHTML = `<div class="career-empty-state"><h3>${lang === 'ar' ? 'لا توجد وظائف متاحة حالياً' : 'No openings available right now'}</h3><p>${lang === 'ar' ? 'يمكنك إرسال سيرتك الذاتية من خلال الزر المخصص وسيتواصل معك فريق الموارد البشرية عند توفر فرصة مناسبة.' : 'You can submit your CV using the dedicated button and our HR team will contact you when a relevant role opens.'}</p></div>`;
    return;
  }

  grid.innerHTML = careers.map((c) => buildCareerCard(c, lang)).join('');

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
  openCareerApplicationModal(careerId, false);
}

function openGeneralCvModal() {
  openCareerApplicationModal(null, true);
}

window.openApplyModal = openApplyModal;
window.openGeneralCvModal = openGeneralCvModal;

function openCareerApplicationModal(careerId, isGeneral) {
  const lang    = document.documentElement.getAttribute('data-lang') || 'en';
  const careers = (getData('careers') || []).map(normalizeCareerItem);
  const job     = careers.find(c => c.id === careerId);
  if (!isGeneral && !job) return;
  const L = getCareerUiStrings(lang).labels;
  const title = isGeneral
    ? L.generalTitle
    : (lang==='ar' ? 'تقدم للوظيفة' : 'Apply for Position');
  const requiredConfig = getFormRequirements(isGeneral ? 'generalCv' : 'career');
  const reqAttr = (key) => requiredConfig[key] ? 'required' : '';
  const roleText = isGeneral
    ? (lang === 'ar' ? 'طلب عام لفريق الموارد البشرية' : 'General application for the HR team')
    : `${L.applyFor}: ${job['title_'+lang]||job.title_en}`;

  document.getElementById('career-modal-content').innerHTML = `
  <div class="apply-form" dir="${lang==='ar'?'rtl':'ltr'}">
    <h2>${title}</h2>
    <p class="job-role"><i class="fa ${isGeneral ? 'fa-paper-plane' : 'fa-briefcase'}"></i> ${roleText}</p>
    <form id="apply-form-inner" onsubmit="submitApplyForm(event,${careerId || 'null'},${isGeneral})">
      <div class="form-grid">
        <div class="form-group"><label>${L.name}${requiredConfig.name ? ' *' : ''}</label><input type="text" name="name" ${reqAttr('name')} /></div>
        <div class="form-group"><label>${L.email}${requiredConfig.email ? ' *' : ''}</label><input type="email" name="email" ${reqAttr('email')} /></div>
        <div class="form-group"><label>${L.phone}${requiredConfig.phone ? ' *' : ''}</label><input type="tel" name="phone" ${reqAttr('phone')} /></div>
        <div class="form-group"><label>${L.linkedin}${requiredConfig.linkedin ? ' *' : ''}</label><input type="url" name="linkedin" ${reqAttr('linkedin')} placeholder="https://linkedin.com/in/..." /></div>
        <div class="form-group">
          <label>${L.edu}${requiredConfig.education ? ' *' : ''}</label>
          <select name="education" ${reqAttr('education')}>
            <option value="bachelor">${lang==='ar'?'بكالوريوس':"Bachelor's"}</option>
            <option value="master">${lang==='ar'?'ماجستير':"Master's"}</option>
            <option value="phd">${lang==='ar'?'دكتوراه':'PhD'}</option>
            <option value="diploma">${lang==='ar'?'دبلوم':'Diploma'}</option>
          </select>
        </div>
        <div class="form-group"><label>${L.exp}${requiredConfig.experience ? ' *' : ''}</label><input type="number" name="experience" min="0" max="50" ${reqAttr('experience')} /></div>
        <div class="form-group">
          <label>${L.cv}${requiredConfig.cv ? ' *' : ''}</label>
          <label class="file-input-label" for="cv-upload">
            <i class="fas fa-file-pdf"></i>
            <span id="cv-label">${lang==='ar' ? (requiredConfig.cv ? 'اختر ملف السيرة الذاتية المطلوب' : 'اختر ملف السيرة الذاتية') : (requiredConfig.cv ? 'Choose required CV file' : 'Choose CV file')}</span>
          </label>
          <input type="file" id="cv-upload" name="cv" ${reqAttr('cv')} accept=".pdf,.doc,.docx" onchange="updateFileLabel(this, ${isGeneral})" />
        </div>
      </div>
      <div class="form-group"><label>${L.msg}${requiredConfig.message ? ' *' : ''}</label><textarea name="message" rows="3" ${reqAttr('message')}></textarea></div>
      <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">${L.submit}</button>
      <div class="form-msg" id="apply-form-msg"></div>
    </form>
  </div>`;

  openModal('career-modal');
}

window.openCareerApplicationModal = openCareerApplicationModal;

function updateFileLabel(input, isGeneral = false) {
  const lbl = document.getElementById('cv-label');
  if (!lbl) return;
  if (input.files[0]) {
    lbl.textContent = input.files[0].name;
    return;
  }
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const req = getFormRequirements(isGeneral ? 'generalCv' : 'career').cv;
  lbl.textContent = lang === 'ar'
    ? (req ? 'اختر ملف السيرة الذاتية المطلوب' : 'اختر ملف السيرة الذاتية')
    : (req ? 'Choose required CV file' : 'Choose CV file');
}

window.updateFileLabel = updateFileLabel;

function submitApplyForm(e, careerId, isGeneral = false) {
  e.preventDefault();
  const form     = e.target;
  const msg      = document.getElementById('apply-form-msg');
  const lang     = document.documentElement.getAttribute('data-lang') || 'en';
  const settings = getData('siteSettings');
  const hrEmail  = settings.hrEmail || 'hr@amgcontracting.com';
  const careers  = (getData('careers') || []).map(normalizeCareerItem);
  const job      = careers.find(c => c.id === careerId);
  const jobTitle = isGeneral
    ? (lang === 'ar' ? 'طلب عام / إرسال سيرة ذاتية' : 'General CV Submission')
    : ((job && (job['title_'+lang] || job.title_en)) || '');
  const requiredConfig = getFormRequirements(isGeneral ? 'generalCv' : 'career');

  const data = new FormData(form);
  data.append('hr_email', hrEmail);
  data.append('job_title', jobTitle);
  data.append('application_type', isGeneral ? 'general' : 'job');
  data.append('career_id', careerId || '');
  data.append('lang', lang);
  data.append('required_config', JSON.stringify(requiredConfig));

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
        updateFileLabel({ files: [] }, isGeneral);
      } else throw new Error();
    })
    .catch(() => {
      // Fallback: save locally
      const apps = JSON.parse(localStorage.getItem('amg_applications')||'[]');
      apps.push({
        careerId,
        jobTitle: isGeneral ? 'General CV Submission' : (job&&job.title_en)||'',
        type: isGeneral ? 'general' : 'job',
        name:data.get('name'),
        email:data.get('email'),
        phone:data.get('phone'),
        linkedin:data.get('linkedin'),
        date:new Date().toISOString()
      });
      localStorage.setItem('amg_applications', JSON.stringify(apps));
      msg.textContent = lang==='ar'?'✓ تم تسجيل طلبك. سنتواصل معك قريباً.':'✓ Application recorded. Our team will contact you soon.';
      msg.className = 'form-msg success';
      form.reset();
      updateFileLabel({ files: [] }, isGeneral);
    })
    .finally(() => { btn.disabled=false; btn.textContent=lang==='ar'?'إرسال الطلب':'Submit Application'; });
}

window.submitApplyForm = submitApplyForm;

document.addEventListener('DOMContentLoaded', renderCareers);
