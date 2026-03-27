/* ===== DASHBOARD.JS ===== */
"use strict";

// ── Auth ──
const SUPER_ADMIN = {
  username: "admin",
  password: "987654321*",
  role: "Super Admin",
};

const PARTNER_ACCENT_PRESETS = [
  {
    value:
      "radial-gradient(circle at 30% 30%, rgba(201,150,100,0.62), rgba(120,68,42,0.22))",
    label: "Copper Gold",
  },
  {
    value:
      "radial-gradient(circle at 35% 30%, rgba(88,160,184,0.58), rgba(36,72,102,0.24))",
    label: "Ocean Blue",
  },
  {
    value:
      "radial-gradient(circle at 30% 35%, rgba(221,120,120,0.56), rgba(126,42,56,0.24))",
    label: "Rose Brick",
  },
  {
    value:
      "radial-gradient(circle at 30% 30%, rgba(132,182,113,0.58), rgba(56,97,54,0.22))",
    label: "Olive Green",
  },
  {
    value:
      "radial-gradient(circle at 30% 30%, rgba(170,143,223,0.56), rgba(78,58,122,0.22))",
    label: "Royal Violet",
  },
];

function getSuperAdmin() {
  return JSON.parse(localStorage.getItem("amg_super_admin") || JSON.stringify(SUPER_ADMIN));
}

function setSuperAdmin(admin) {
  localStorage.setItem("amg_super_admin", JSON.stringify(admin));
}

function getTeam() {
  return JSON.parse(localStorage.getItem("amg_team") || "[]");
}
function setTeam(t) {
  localStorage.setItem("amg_team", JSON.stringify(t));
}

function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById("login-user").value.trim();
  const p = document.getElementById("login-pass").value;
  const err = document.getElementById("login-error");

  let user = null;
  const superAdmin = getSuperAdmin();
  if (u === superAdmin.username && p === superAdmin.password) {
    user = { username: u, role: superAdmin.role };
  } else {
    user = getTeam().find((m) => m.username === u && m.password === p);
  }

  if (user) {
    sessionStorage.setItem("amg_session", JSON.stringify(user));
    err.textContent = "";
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("current-user-label").textContent =
      user.role || "Sub-Admin";
    initDashboard();
  } else {
    err.textContent = "Invalid credentials. Please try again.";
  }
}

function logout() {
  sessionStorage.removeItem("amg_session");
  location.reload();
}

function togglePass() {
  const inp = document.getElementById("login-pass");
  const eye = document.getElementById("pass-eye");
  if (inp.type === "password") {
    inp.type = "text";
    eye.className = "fas fa-eye-slash";
  } else {
    inp.type = "password";
    eye.className = "fas fa-eye";
  }
}

// Check session on load
window.addEventListener("DOMContentLoaded", () => {
  const sess = sessionStorage.getItem("amg_session");
  if (sess) {
    const user = JSON.parse(sess);
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("current-user-label").textContent =
      user.role || "Sub-Admin";
    initDashboard();
  }
});

// ── Init ──
function initDashboard() {
  renderOurGroupList();
  loadSettings();
  loadSeoSettings();
  renderOverview();
  renderSectionsManager();
  renderServicesList();
  renderProjectCompaniesList();
  renderProjectsList();
  renderCareersList();
  renderPartnersList();
  renderTestimonialsList();
  renderMessagesList();
  renderApplicationsList();
  renderTeamList();

  // Sidebar toggle
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
  document.getElementById("sidebar-close").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
  });

  // Tab switching
  document.querySelectorAll(".nav-item[data-tab]").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(item.getAttribute("data-tab"));
    });
  });
}

function switchTab(tab) {
  document
    .querySelectorAll(".nav-item")
    .forEach((i) => i.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  const navEl = document.querySelector(`.nav-item[data-tab="${tab}"]`);
  const panEl = document.getElementById("tab-" + tab);
  if (navEl) navEl.classList.add("active");
  if (panEl) panEl.classList.add("active");
  document.getElementById("topbar-title").textContent =
    navEl?.querySelector("span")?.textContent?.replace(/\d+/, "").trim() || tab;
  document.getElementById("sidebar").classList.remove("open");

  // Load tab-specific data
  if (tab === "settings") loadSettings();
  if (tab === "seo") loadSeoSettings();
  if (tab === "mission-vision") loadMissionVision();
}

// ── Settings ──
function loadSettings() {
  const s = getData("siteSettings");
  const setVal = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };
  document.getElementById("s-primary-color").value =
    s.primaryColor || "#C99664";
  document.getElementById("s-secondary-color").value =
    s.secondaryColor || "#2B2B2B";
  document.getElementById("s-bg-color").value = s.bgColor || "#FAFAF8";
  const nb = document.getElementById("s-nav-bg");
  if (nb) nb.value = s.navBg || "#FFFFFF";
  const nt = document.getElementById("s-nav-text");
  if (nt) nt.value = s.navText || "#1A1A1A";
  document.getElementById("s-font-en").value = s.fontEn || "Manrope";
  document.getElementById("s-font-ar").value = s.fontAr || "IBM Plex Sans Arabic";
  const fhe = document.getElementById("s-font-heading-en");
  if (fhe) fhe.value = s.fontHeadingEn || "Oswald";
  const fha = document.getElementById("s-font-heading-ar");
  if (fha) fha.value = s.fontHeadingAr || s.fontAr || "IBM Plex Sans Arabic";
  document.getElementById("s-default-lang").value = s.defaultLang || "auto";
  setVal("s-hero-video", s.heroVideo);
  setVal("s-hero-title-en", s.heroTitle_en);
  setVal("s-hero-title-ar", s.heroTitle_ar);
  setVal("s-hero-sub-en", s.heroSubtitle_en);
  setVal("s-hero-sub-ar", s.heroSubtitle_ar);
  (s.heroStats || []).slice(0, 4).forEach((stat, index) => {
    const i = index + 1;
    setVal(`s-hero-stat-${i}-value`, stat.value);
    setVal(`s-hero-stat-${i}-suffix`, stat.suffix);
    setVal(`s-hero-stat-${i}-label-en`, stat.label_en);
    setVal(`s-hero-stat-${i}-label-ar`, stat.label_ar);
  });
  document.getElementById("s-contact-email").value = s.contactEmail || "";
  document.getElementById("s-hr-email").value = s.hrEmail || "";
  document.getElementById("s-phone").value = s.phone || "";
  document.getElementById("s-whatsapp-number").value = s.whatsappNumber || "+201124711154";
  document.getElementById("s-manual-company-profile").value =
    s.manualCompanyProfile || "";
  document.getElementById("s-address-en").value = s.address_en || "";
  document.getElementById("s-address-ar").value = s.address_ar || "";
  document.getElementById("s-footer-desc-en").value = s.footerDesc_en || "";
  document.getElementById("s-footer-desc-ar").value = s.footerDesc_ar || "";
  document.getElementById("s-footer-copy-en").value = s.footerCopy_en || "";
  document.getElementById("s-footer-copy-ar").value = s.footerCopy_ar || "";
  const logoP = document.getElementById("logo-preview");
  if (logoP && s.logo) logoP.src = s.logo;
  loadFormRequirementSettings(s.formRequirements || {});
  renderSocialLinks();
}

function previewFont(type, name) {
  const box = document.getElementById("font-preview-box");
  if (!box) return;
  // Load font if not built-in
  const id = "gf-prev-" + name.replace(/\s+/g, "-");
  if (
    !document.getElementById(id) &&
    ![
      "Barlow",
      "Barlow Condensed",
      "Cairo",
      "Tajawal",
      "Manrope",
      "Oswald",
      "IBM Plex Sans Arabic",
    ].includes(name)
  ) {
    const lk = document.createElement("link");
    lk.id = id;
    lk.rel = "stylesheet";
    lk.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@400;700&display=swap`;
    document.head.appendChild(lk);
  }
  if (type === "ar" || type === "heading-ar") box.style.fontFamily = `'${name}', serif`;
  if (type === "en" || type === "heading-en")
    box.style.fontFamily = `'${name}', serif`;
}

function saveSettings() {
  const s = getData("siteSettings");
  s.primaryColor = document.getElementById("s-primary-color").value;
  s.secondaryColor = document.getElementById("s-secondary-color").value;
  s.bgColor = document.getElementById("s-bg-color").value;
  const nb2 = document.getElementById("s-nav-bg");
  if (nb2) s.navBg = nb2.value;
  const nt2 = document.getElementById("s-nav-text");
  if (nt2) s.navText = nt2.value;
  s.fontEn = document.getElementById("s-font-en").value;
  s.fontAr = document.getElementById("s-font-ar").value;
  const fhe2 = document.getElementById("s-font-heading-en");
  if (fhe2) s.fontHeadingEn = fhe2.value;
  const fha2 = document.getElementById("s-font-heading-ar");
  if (fha2) s.fontHeadingAr = fha2.value;
  s.defaultLang = document.getElementById("s-default-lang").value;
  s.heroVideo = document.getElementById("s-hero-video").value;
  s.heroTitle_en = document.getElementById("s-hero-title-en").value;
  s.heroTitle_ar = document.getElementById("s-hero-title-ar").value;
  s.heroSubtitle_en = document.getElementById("s-hero-sub-en").value;
  s.heroSubtitle_ar = document.getElementById("s-hero-sub-ar").value;
  s.heroStats = Array.from({ length: 4 }, (_, index) => {
    const i = index + 1;
    return {
      value: document.getElementById(`s-hero-stat-${i}-value`).value,
      suffix: document.getElementById(`s-hero-stat-${i}-suffix`).value,
      label_en: document.getElementById(`s-hero-stat-${i}-label-en`).value,
      label_ar: document.getElementById(`s-hero-stat-${i}-label-ar`).value,
    };
  });
  s.formRequirements = collectFormRequirementSettings();
  s.contactEmail = document.getElementById("s-contact-email").value;
  s.hrEmail = document.getElementById("s-hr-email").value;
  s.phone = document.getElementById("s-phone").value;
  s.whatsappNumber = document.getElementById("s-whatsapp-number").value;
  s.manualCompanyProfile = document.getElementById("s-manual-company-profile").value;
  s.address_en = document.getElementById("s-address-en").value;
  s.address_ar = document.getElementById("s-address-ar").value;
  s.footerDesc_en = document.getElementById("s-footer-desc-en").value;
  s.footerDesc_ar = document.getElementById("s-footer-desc-ar").value;
  s.footerCopy_en = document.getElementById("s-footer-copy-en").value;
  s.footerCopy_ar = document.getElementById("s-footer-copy-ar").value;
  // Save social links from the live socialTemp array
  s.socialLinks = JSON.parse(JSON.stringify(socialTemp));
  setData("siteSettings", s);
  // Apply color/font preview in dashboard itself
  document.documentElement.style.setProperty(
      "--dash-accent",
    s.primaryColor || "#C99664",
  );
  showMsg("settings-msg", "✓ Settings saved successfully!", true);
  // Push all data to server so other visitors see changes
  pushToServer();
}

function getCheckboxValue(id) {
  return Boolean(document.getElementById(id)?.checked);
}

function setCheckboxValue(id, checked) {
  const el = document.getElementById(id);
  if (el) el.checked = Boolean(checked);
}

function loadFormRequirementSettings(formRequirements) {
  const defaults = DEFAULT_DATA.siteSettings.formRequirements;
  ["contact", "career", "generalCv"].forEach((group) => {
    const fields = { ...defaults[group], ...(formRequirements[group] || {}) };
    Object.entries(fields).forEach(([field, value]) => {
      setCheckboxValue(`req-${group}-${field}`, value);
    });
  });
}

function collectFormRequirementSettings() {
  const defaults = DEFAULT_DATA.siteSettings.formRequirements;
  const result = {};
  ["contact", "career", "generalCv"].forEach((group) => {
    result[group] = {};
    Object.keys(defaults[group]).forEach((field) => {
      result[group][field] = getCheckboxValue(`req-${group}-${field}`);
    });
  });
  return result;
}

function loadSeoSettings() {
  const seo = getData("seoSettings") || {};
  const setVal = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };
  setVal("seo-default-title", seo.defaultTitle);
  setVal("seo-default-title-ar", seo.defaultTitle_ar);
  setVal("seo-default-description", seo.defaultDescription);
  setVal("seo-default-description-ar", seo.defaultDescription_ar);
  setVal("seo-default-keywords", seo.defaultKeywords);
  setVal("seo-default-keywords-ar", seo.defaultKeywords_ar);
  setVal("seo-og-image", seo.ogImage);
  setVal("seo-robots", seo.robots);
  setVal("seo-canonical-base", seo.canonicalBase);
  setVal("seo-google-verification", seo.googleSiteVerification);
  setVal("seo-bing-verification", seo.bingSiteVerification);
  setVal("seo-ga-id", seo.googleAnalyticsId);
  setVal("seo-gtm-id", seo.googleTagManagerId);
  setVal("seo-schema-type", seo.schemaType);
  setVal("seo-schema-name", seo.schemaName);
  setVal("seo-schema-name-ar", seo.schemaName_ar);
  setVal("seo-home-title", seo.homeTitle);
  setVal("seo-home-title-ar", seo.homeTitle_ar);
  setVal("seo-home-description", seo.homeDescription);
  setVal("seo-home-description-ar", seo.homeDescription_ar);
  setVal("seo-home-keywords", seo.homeKeywords);
  setVal("seo-home-keywords-ar", seo.homeKeywords_ar);
  setVal("seo-careers-title", seo.careersTitle);
  setVal("seo-careers-title-ar", seo.careersTitle_ar);
  setVal("seo-careers-description", seo.careersDescription);
  setVal("seo-careers-description-ar", seo.careersDescription_ar);
  setVal("seo-careers-keywords", seo.careersKeywords);
  setVal("seo-careers-keywords-ar", seo.careersKeywords_ar);
}

function saveSeoSettings() {
  const seo = {
    defaultTitle: document.getElementById("seo-default-title").value,
    defaultTitle_ar: document.getElementById("seo-default-title-ar").value,
    defaultDescription: document.getElementById("seo-default-description").value,
    defaultDescription_ar: document.getElementById("seo-default-description-ar").value,
    defaultKeywords: document.getElementById("seo-default-keywords").value,
    defaultKeywords_ar: document.getElementById("seo-default-keywords-ar").value,
    ogImage: document.getElementById("seo-og-image").value,
    robots: document.getElementById("seo-robots").value,
    canonicalBase: document.getElementById("seo-canonical-base").value,
    googleSiteVerification: document.getElementById("seo-google-verification").value,
    bingSiteVerification: document.getElementById("seo-bing-verification").value,
    googleAnalyticsId: document.getElementById("seo-ga-id").value,
    googleTagManagerId: document.getElementById("seo-gtm-id").value,
    schemaType: document.getElementById("seo-schema-type").value,
    schemaName: document.getElementById("seo-schema-name").value,
    schemaName_ar: document.getElementById("seo-schema-name-ar").value,
    homeTitle: document.getElementById("seo-home-title").value,
    homeTitle_ar: document.getElementById("seo-home-title-ar").value,
    homeDescription: document.getElementById("seo-home-description").value,
    homeDescription_ar: document.getElementById("seo-home-description-ar").value,
    homeKeywords: document.getElementById("seo-home-keywords").value,
    homeKeywords_ar: document.getElementById("seo-home-keywords-ar").value,
    careersTitle: document.getElementById("seo-careers-title").value,
    careersTitle_ar: document.getElementById("seo-careers-title-ar").value,
    careersDescription: document.getElementById("seo-careers-description").value,
    careersDescription_ar: document.getElementById("seo-careers-description-ar").value,
    careersKeywords: document.getElementById("seo-careers-keywords").value,
    careersKeywords_ar: document.getElementById("seo-careers-keywords-ar").value,
  };
  setData("seoSettings", seo);
  showMsg("seo-msg", "✓ SEO settings saved successfully!", true);
  pushToServer();
}

function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const src = e.target.result;
    document.getElementById("logo-preview").src = src;
    document.getElementById("dash-logo").src = src;
    const s = getData("siteSettings");
    s.logo = src;
    setData("siteSettings", s);
  };
  reader.readAsDataURL(file);
}

function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById("fav-preview").src = e.target.result;
    const s = getData("siteSettings");
    s.favicon = e.target.result;
    setData("siteSettings", s);
  };
  reader.readAsDataURL(file);
}

// Social links
let socialTemp = [];

function renderSocialLinks() {
  const s = getData("siteSettings");
  socialTemp = JSON.parse(JSON.stringify(s.socialLinks || []));
  _paintSocialLinks();
}

function _paintSocialLinks() {
  const wrap = document.getElementById("social-links-manager");
  if (!wrap) return;
  const iconOptions = [
    "fab fa-facebook",
    "fab fa-linkedin",
    "fab fa-instagram",
    "fab fa-whatsapp",
    "fab fa-twitter",
    "fab fa-youtube",
    "fab fa-tiktok",
    "fab fa-telegram",
    "fab fa-snapchat",
  ];
  wrap.innerHTML = socialTemp
    .map(
      (sl, i) => `
    <div class="social-row" data-idx="${i}">
      <select data-field="icon" data-idx="${i}" onchange="updateSocial(${i},'icon',this.value)">
        ${iconOptions.map((ic) => `<option value="${ic}" ${sl.icon === ic ? "selected" : ""}>${ic.replace("fab fa-", "")}</option>`).join("")}
      </select>
      <input type="text" value="${sl.url || ""}" placeholder="https://..." data-field="url" data-idx="${i}" oninput="updateSocial(${i},'url',this.value)" />
      <input type="text" value="${sl.label || ""}" placeholder="Label" style="max-width:100px" data-field="label" data-idx="${i}" oninput="updateSocial(${i},'label',this.value)" />
      <button class="btn-del" onclick="removeSocialLink(${i})" title="Remove"><i class="fas fa-trash"></i></button>
    </div>`,
    )
    .join("");
}

function updateSocial(i, field, val) {
  if (socialTemp[i]) socialTemp[i][field] = val;
}

function addSocialLink() {
  socialTemp.push({ icon: "fab fa-facebook", url: "#", label: "Social" });
  _paintSocialLinks();
}

function removeSocialLink(i) {
  socialTemp.splice(i, 1);
  _paintSocialLinks();
}

// ── Sections ──
let sectionOrderTemp = [];

function renderSectionsManager(nextOrder = null) {
  const sections = getData("sections");
  sectionOrderTemp = Array.isArray(nextOrder) ? [...nextOrder] : getSectionOrder();
  const wrap = document.getElementById("sections-manager");
  if (!wrap) return;
  const names = {
    "our-group": "Our Group",
    "mission-vision": "Our Journey",
    services: "Services",
    projects: "Projects",
    careers: "Careers",
    partners: "Partners",
    contact: "Contact",
  };
  wrap.innerHTML = sectionOrderTemp
    .map(
      (id) => `
    <div class="section-row" data-section-id="${id}">
      <button class="section-row-drag" type="button" draggable="true" aria-label="Drag ${names[id] || id}"><i class="fas fa-grip-vertical"></i></button>
      <span class="section-row-name">${names[id] || id}</span>
      <div class="section-controls">
        <div class="toggle-wrap">
          <span class="toggle-label">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" ${(sections[id] || {}).visible ? "checked" : ""} onchange="updateSection('${id}','visible',this.checked)" />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="toggle-wrap">
          <span class="toggle-label">In Nav</span>
          <label class="toggle-switch">
            <input type="checkbox" ${(sections[id] || {}).inNav ? "checked" : ""} onchange="updateSection('${id}','inNav',this.checked)" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>`,
    )
    .join("");
  bindSectionDragAndDrop();
}

function updateSection(id, key, val) {
  const sections = getData("sections");
  if (sections[id]) sections[id][key] = val;
  setData("sections", sections);
}

function bindSectionDragAndDrop() {
  const rows = document.querySelectorAll("#sections-manager .section-row");
  const handles = document.querySelectorAll("#sections-manager .section-row-drag");
  let draggedId = null;
  handles.forEach((handle) => {
    handle.addEventListener("dragstart", (e) => {
      const row = handle.closest(".section-row");
      if (!row) return;
      draggedId = row.dataset.sectionId;
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", draggedId);
      }
      row.classList.add("dragging");
    });
    handle.addEventListener("dragend", () => {
      const row = handle.closest(".section-row");
      if (!row) return;
      row.classList.remove("dragging");
    });
  });
  rows.forEach((row) => {
    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      row.classList.add("drag-over");
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
    });
    row.addEventListener("dragleave", () => {
      row.classList.remove("drag-over");
    });
    row.addEventListener("drop", (e) => {
      e.preventDefault();
      row.classList.remove("drag-over");
      const transferredId = e.dataTransfer?.getData("text/plain");
      if (transferredId) draggedId = transferredId;
      const targetId = row.dataset.sectionId;
      if (!draggedId || draggedId === targetId) return;
      const next = [...sectionOrderTemp];
      const fromIndex = next.indexOf(draggedId);
      const toIndex = next.indexOf(targetId);
      if (fromIndex === -1 || toIndex === -1) return;
      next.splice(toIndex, 0, next.splice(fromIndex, 1)[0]);
      sectionOrderTemp = next;
      renderSectionsManager(next);
    });
  });
}

function saveSections() {
  setData("sectionOrder", sectionOrderTemp);
  showMsg("sections-msg", "Section settings saved!", true);
  pushToServer();
}

// ── Overview ──
function renderOverview() {
  const projects = getData("projects") || [];
  const services = getData("services") || [];
  const careers = getData("careers") || [];
  const messages = JSON.parse(localStorage.getItem("amg_messages") || "[]");
  const apps = JSON.parse(localStorage.getItem("amg_applications") || "[]");
  const unread = messages.filter((m) => !m.read).length;

  document.getElementById("stat-projects").textContent = projects.length;
  document.getElementById("stat-services").textContent = services.length;
  document.getElementById("stat-careers").textContent = careers.length;
  document.getElementById("stat-messages").textContent = unread;

  const badge = document.getElementById("msg-badge");
  if (badge) badge.textContent = unread > 0 ? unread : "";

  const recentMsgs = document.getElementById("recent-msgs");
  if (recentMsgs) {
    if (!messages.length) {
      recentMsgs.innerHTML =
        '<div class="empty-state"><i class="fas fa-inbox"></i>No messages yet</div>';
    } else
      recentMsgs.innerHTML = messages
        .slice(-4)
        .reverse()
        .map(
          (m) => `
      <div class="msg-row ${m.read ? "" : "unread"}">
        <div class="msg-row-header"><span class="msg-row-name">${m.name}</span><span class="msg-row-date">${new Date(m.date).toLocaleDateString()}</span></div>
        <div class="msg-row-email">${m.email}</div>
        <div class="msg-row-subject">${m.subject || "—"}</div>
      </div>`,
        )
        .join("");
  }

  const recentApps = document.getElementById("recent-apps");
  if (recentApps) {
    if (!apps.length) {
      recentApps.innerHTML =
        '<div class="empty-state"><i class="fas fa-user-tie"></i>No applications yet</div>';
    } else
      recentApps.innerHTML = apps
        .slice(-4)
        .reverse()
        .map(
          (a) => `
      <div class="msg-row">
        <div class="msg-row-header"><span class="msg-row-name">${a.name}</span><span class="msg-row-date">${new Date(a.date).toLocaleDateString()}</span></div>
        <div class="msg-row-email">${a.email}</div>
        <div class="msg-row-subject">${a.jobTitle || "Open Application"}</div>
      </div>`,
        )
        .join("");
  }
}

// ── Services ──
const ICONS = [
  "fas fa-building",
  "fas fa-bolt",
  "fas fa-road",
  "fas fa-paint-roller",
  "fas fa-chart-gantt",
  "fas fa-industry",
  "fas fa-hammer",
  "fas fa-drafting-compass",
  "fas fa-hard-hat",
  "fas fa-wrench",
  "fas fa-fire",
  "fas fa-water",
  "fas fa-wind",
  "fas fa-solar-panel",
  "fas fa-tools",
  "fas fa-ruler-combined",
  "fas fa-sitemap",
  "fas fa-network-wired",
  "fas fa-tower-broadcast",
  "fas fa-bridge",
  "fas fa-city",
  "fas fa-warehouse",
  "fas fa-home",
  "fas fa-hotel",
  "fas fa-mosque",
  "fas fa-hospital",
  "fas fa-school",
  "fas fa-leaf",
  "fas fa-recycle",
  "fas fa-shield-alt",
];

function renderServicesList() {
  const services = getData("services") || [];
  const list = document.getElementById("services-list");
  if (!list) return;
  if (!services.length) {
    list.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-tools"></i>No services yet</div>';
    return;
  }
  list.innerHTML = services
    .map(
      (s) => `
    <div class="item-card">
      <div class="item-card-header">
        <div>
          <i class="${s.icon || "fas fa-building"}" style="color:var(--dash-accent);margin-right:6px"></i>
          <span class="item-card-title">${s.title_en}</span>
        </div>
      </div>
      <div class="item-card-meta"><span>${s.title_ar || ""}</span></div>
      <p style="font-size:.78rem;color:var(--dash-muted);line-height:1.5;margin-top:4px">${(s.brief_en || "").substring(0, 80)}...</p>
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openServiceModal(${s.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItem('services',${s.id})"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>`,
    )
    .join("");
}

function openServiceModal(id) {
  const services = getData("services") || [];
  const s = id ? services.find((x) => x.id === id) : null;
  openDashModal(`
    <h3>${s ? "Edit Service" : "Add Service"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Title (EN)</label><input id="m-title-en" value="${s?.title_en || ""}" /></div>
      <div class="form-field"><label>Title (AR)</label><input id="m-title-ar" value="${s?.title_ar || ""}" dir="rtl" /></div>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Brief (EN)</label><textarea id="m-brief-en" rows="3">${s?.brief_en || ""}</textarea></div>
      <div class="form-field"><label>Brief (AR)</label><textarea id="m-brief-ar" rows="3" dir="rtl">${s?.brief_ar || ""}</textarea></div>
    </div>
    <div class="form-field"><label>Icon (click to select)</label><div class="icon-picker">${ICONS.map((ic) => `<button class="icon-btn ${s?.icon === ic ? "selected" : ""}" onclick="selectIcon(this,'${ic}')"><i class="${ic}"></i></button>`).join("")}</div><input type="hidden" id="m-icon" value="${s?.icon || "fas fa-building"}" /></div>
    <div class="form-field"><label>Image URL</label><input id="m-image" value="${s?.image || ""}" placeholder="https://... or leave empty" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveService(${id || "null"})">Save Service</button>
    </div>`);
}

function selectIcon(btn, icon) {
  document
    .querySelectorAll(".icon-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  const inp = document.getElementById("m-icon");
  if (inp) inp.value = icon;
}

function saveService(id) {
  const services = getData("services") || [];
  const item = {
    id: id || Date.now(),
    title_en: document.getElementById("m-title-en").value,
    title_ar: document.getElementById("m-title-ar").value,
    brief_en: document.getElementById("m-brief-en").value,
    brief_ar: document.getElementById("m-brief-ar").value,
    icon: document.getElementById("m-icon").value || "fas fa-building",
    image: document.getElementById("m-image").value,
  };
  if (id) {
    const idx = services.findIndex((x) => x.id === id);
    if (idx > -1) services[idx] = item;
  } else services.push(item);
  setData("services", services);
  closeDashModal();
  renderServicesList();
  pushToServer();
}

// ── Projects ──
function renderProjectsList() {
  const projects = getData("projects") || [];
  const projectCompanies = getData("projectCompanies") || [];
  const list = document.getElementById("projects-list");
  if (!list) return;
  if (!projects.length) {
    list.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-building"></i>No projects yet</div>';
    return;
  }
  list.innerHTML = projects
    .map(
      (p) => {
        const company =
          projectCompanies.find((item) => String(item.id) === String(p.company_id)) ||
          null;
        return `
    <div class="item-card">
      <div class="item-card-header"><span class="item-card-title">${p.name_en}</span></div>
      <div class="item-card-meta">
        <span><i class="fas fa-building-circle-check"></i> ${company?.name_en || p.implementing_company_en || "No company selected"}</span>
        <span><i class="fas fa-location-dot"></i> ${p.location_en}</span>
        <span><i class="fas fa-calendar"></i> ${p.year || ""}</span>
        <span><i class="fas fa-percent"></i> ${p.progress}%</span>
      </div>
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openProjectModal(${p.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItem('projects',${p.id})"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>`;
      },
    )
    .join("");
}

function renderProjectCompaniesList() {
  const companies = getData("projectCompanies") || [];
  const list = document.getElementById("project-companies-list");
  if (!list) return;
  if (!companies.length) {
    list.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-building-circle-check"></i>No implementing companies yet</div>';
    return;
  }
  list.innerHTML = companies
    .map(
      (company) => `
    <div class="item-card">
      <div class="item-card-header"><span class="item-card-title">${company.name_en}</span></div>
      <div class="item-card-meta">
        <span><i class="fas fa-language"></i> ${company.name_ar || "—"}</span>
      </div>
      ${company.logo ? `<img src="${company.logo}" alt="${company.name_en}" style="width:100%;height:72px;object-fit:contain;background:var(--dash-surface2);border:1px solid var(--dash-border);border-radius:8px;padding:12px;margin-top:8px;" />` : ""}
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openProjectCompanyModal(${company.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItem('projectCompanies',${company.id})"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>`,
    )
    .join("");
}

function openProjectCompanyModal(id) {
  const companies = getData("projectCompanies") || [];
  const company = id ? companies.find((item) => item.id === id) : null;
  openDashModal(`
    <h3>${company ? "Edit Implementing Company" : "Add Implementing Company"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Name (EN)</label><input id="m-pc-name-en" value="${company?.name_en || ""}" /></div>
      <div class="form-field"><label>Name (AR)</label><input id="m-pc-name-ar" value="${company?.name_ar || ""}" dir="rtl" /></div>
    </div>
    <div class="form-field"><label>Logo Path / URL</label><input id="m-pc-logo" value="${company?.logo || ""}" placeholder="assets/images/logo.avif or https://..." /></div>
    <div class="form-field"><label>Upload Logo</label><input type="file" accept="image/*" onchange="previewUpload(this,'m-pc-logo')" style="color:var(--dash-muted)" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveProjectCompany(${id || "null"})">Save Company</button>
    </div>`);
}

function saveProjectCompany(id) {
  const companies = getData("projectCompanies") || [];
  const item = {
    id: id || Date.now(),
    name_en: document.getElementById("m-pc-name-en").value,
    name_ar: document.getElementById("m-pc-name-ar").value,
    logo: document.getElementById("m-pc-logo").value,
  };
  if (id) {
    const idx = companies.findIndex((company) => company.id === id);
    if (idx > -1) companies[idx] = item;
  } else {
    companies.push(item);
  }
  setData("projectCompanies", companies);
  closeDashModal();
  renderProjectCompaniesList();
  renderProjectsList();
  pushToServer();
}

// Extra images temp array for project modal
let projectImagesTemp = [];

function openProjectModal(id) {
  const projects = getData("projects") || [];
  const projectCompanies = getData("projectCompanies") || [];
  const p = id ? projects.find((x) => x.id === id) : null;
  projectImagesTemp = p?.images ? [...p.images] : p?.image ? [p.image] : [];

  openDashModal(`
    <h3>${p ? "Edit Project" : "Add Project"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Name (EN)</label><input id="m-name-en" value="${p?.name_en || ""}" /></div>
      <div class="form-field"><label>Name (AR)</label><input id="m-name-ar" value="${p?.name_ar || ""}" dir="rtl" /></div>
      <div class="form-field"><label>Category (EN)</label><input id="m-cat-en" value="${p?.category_en || ""}" /></div>
      <div class="form-field"><label>Category (AR)</label><input id="m-cat-ar" value="${p?.category_ar || ""}" dir="rtl" /></div>
      <div class="form-field">
        <label>Implementing Company</label>
        <select id="m-company-id">
          <option value="">Select company...</option>
          ${projectCompanies.map((company) => `<option value="${company.id}" ${String(p?.company_id || "") === String(company.id) ? "selected" : ""}>${company.name_en}</option>`).join("")}
        </select>
      </div>
      <div class="form-field" style="display:flex;align-items:flex-end">
        <button class="btn-add" type="button" onclick="openProjectCompanyModal()"><i class="fas fa-plus"></i> Add New Company</button>
      </div>
      <div class="form-field"><label>Location (EN)</label><input id="m-loc-en" value="${p?.location_en || ""}" /></div>
      <div class="form-field"><label>Location (AR)</label><input id="m-loc-ar" value="${p?.location_ar || ""}" dir="rtl" /></div>
      <div class="form-field"><label>Year</label><input id="m-year" type="number" value="${p?.year || new Date().getFullYear()}" /></div>
      <div class="form-field">
        <label>Completion %</label>
        <div class="progress-input">
          <input id="m-progress" type="range" min="0" max="100" value="${p?.progress || 0}" oninput="document.getElementById('prog-val').textContent=this.value+'%'" />
          <span id="prog-val">${p?.progress || 0}%</span>
        </div>
      </div>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Brief (EN)</label><textarea id="m-brief-en" rows="3">${p?.brief_en || ""}</textarea></div>
      <div class="form-field"><label>Brief (AR)</label><textarea id="m-brief-ar" rows="3" dir="rtl">${p?.brief_ar || ""}</textarea></div>
    </div>

    <div class="form-field">
      <label>Project Images <span class="badge-info">First image = cover</span></label>
      <div id="proj-imgs-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px"></div>
      <div style="display:flex;gap:8px;align-items:center">
        <input id="m-img-url" placeholder="Paste image URL..." style="flex:1;background:var(--dash-surface2);border:1px solid var(--dash-border);border-radius:6px;padding:8px 12px;color:var(--dash-text);font-family:inherit;font-size:0.85rem" />
        <button class="btn-add" style="padding:8px 14px;font-size:0.78rem" onclick="addProjectImage()"><i class="fas fa-plus"></i> Add URL</button>
      </div>
      <div style="margin-top:8px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.78rem;color:var(--dash-muted)">
          <i class="fas fa-upload" style="color:var(--dash-accent)"></i> Upload image file
          <input type="file" accept="image/*" onchange="uploadProjectImage(this)" style="display:none" />
        </label>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveProject(${id || "null"})">Save Project</button>
    </div>`);

  renderProjectImgList();
}

function renderProjectImgList() {
  const wrap = document.getElementById("proj-imgs-list");
  if (!wrap) return;
  if (!projectImagesTemp.length) {
    wrap.innerHTML =
      '<span style="font-size:0.75rem;color:var(--dash-muted);padding:4px">No images yet — add URLs or upload files</span>';
    return;
  }
  wrap.innerHTML = projectImagesTemp
    .map(
      (src, i) => `
    <div style="position:relative;flex-shrink:0">
      <img src="${src}" style="width:80px;height:56px;object-fit:cover;border-radius:6px;border:2px solid ${i === 0 ? "var(--dash-accent)" : "var(--dash-border)"}" />
      ${i === 0 ? '<span style="position:absolute;bottom:2px;left:2px;background:var(--dash-accent);color:#fff;font-size:0.55rem;padding:1px 4px;border-radius:2px;font-weight:700">COVER</span>' : ""}
      <button onclick="removeProjectImg(${i})" style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;border-radius:50%;background:#ef4444;border:none;color:#fff;font-size:0.55rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1">×</button>
    </div>`,
    )
    .join("");
}

function addProjectImage() {
  const inp = document.getElementById("m-img-url");
  if (!inp || !inp.value.trim()) return;
  projectImagesTemp.push(inp.value.trim());
  inp.value = "";
  renderProjectImgList();
}

function uploadProjectImage(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    projectImagesTemp.push(e.target.result);
    renderProjectImgList();
  };
  reader.readAsDataURL(file);
}

function removeProjectImg(i) {
  projectImagesTemp.splice(i, 1);
  renderProjectImgList();
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (!String(src || "").startsWith("data:")) img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function normalizeImageSource(src) {
  if (!src) return src;
  if (String(src).startsWith("data:")) return src;

  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error("Fetch failed");
    const blob = await response.blob();
    return await blobToDataUrl(blob);
  } catch (_) {
    return src;
  }
}

async function composeProjectCoverWithLogo(imageSrc, logoSrc) {
  if (!imageSrc || !logoSrc) return imageSrc;

  try {
    const [safeImageSrc, safeLogoSrc] = await Promise.all([
      normalizeImageSource(imageSrc),
      normalizeImageSource(logoSrc),
    ]);
    const [baseImage, logoImage] = await Promise.all([
      loadImageElement(safeImageSrc),
      loadImageElement(safeLogoSrc),
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = baseImage.naturalWidth || baseImage.width || 1600;
    canvas.height = baseImage.naturalHeight || baseImage.height || 1000;

    const ctx = canvas.getContext("2d");
    if (!ctx) return imageSrc;

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    const logoSize = Math.max(canvas.width * 0.14, 120);
    const inset = Math.max(canvas.width * 0.035, 26);
    const badgeX = canvas.width - logoSize - inset;
    const badgeY = canvas.height - logoSize - inset;
    const radius = logoSize / 2;

    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.24)";
    ctx.shadowBlur = Math.max(canvas.width * 0.015, 16);
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.beginPath();
    ctx.arc(badgeX + radius, badgeY + radius, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(badgeX + radius, badgeY + radius, radius * 0.84, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(
      logoImage,
      badgeX + logoSize * 0.16,
      badgeY + logoSize * 0.16,
      logoSize * 0.68,
      logoSize * 0.68,
    );
    ctx.restore();

    ctx.save();
    const stroke = ctx.createLinearGradient(
      badgeX,
      badgeY,
      badgeX + logoSize,
      badgeY + logoSize,
    );
    stroke.addColorStop(0, "rgba(255,255,255,0.95)");
    stroke.addColorStop(1, "rgba(201,150,100,0.92)");
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(canvas.width * 0.005, 6);
    ctx.beginPath();
    ctx.arc(badgeX + radius, badgeY + radius, radius * 0.9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    return canvas.toDataURL("image/jpeg", 0.92);
  } catch (_) {
    return imageSrc;
  }
}

async function prepareProjectImagesForSaving(images, logoSrc) {
  if (!images.length || !logoSrc) return images;
  const bakedCover = await composeProjectCoverWithLogo(images[0], logoSrc);
  return [bakedCover, ...images.slice(1)];
}

async function saveProject(id) {
  const projects = getData("projects") || [];
  const projectCompanies = getData("projectCompanies") || [];
  const imgs = [...projectImagesTemp];
  const companyId = document.getElementById("m-company-id").value;
  const company =
    projectCompanies.find((item) => String(item.id) === String(companyId)) || null;
  const normalizedImages = await prepareProjectImagesForSaving(imgs, company?.logo);
  const item = {
    id: id || Date.now(),
    name_en: document.getElementById("m-name-en").value,
    name_ar: document.getElementById("m-name-ar").value,
    category_en: document.getElementById("m-cat-en").value,
    category_ar: document.getElementById("m-cat-ar").value,
    company_id: company?.id || "",
    implementing_company_en: company?.name_en || "",
    implementing_company_ar: company?.name_ar || "",
    company_logo: company?.logo || "",
    location_en: document.getElementById("m-loc-en").value,
    location_ar: document.getElementById("m-loc-ar").value,
    year:
      parseInt(document.getElementById("m-year").value) ||
      new Date().getFullYear(),
    progress: parseInt(document.getElementById("m-progress").value) || 0,
    brief_en: document.getElementById("m-brief-en").value,
    brief_ar: document.getElementById("m-brief-ar").value,
    logo_baked:
      Boolean(company?.logo) &&
      Boolean(normalizedImages[0]) &&
      normalizedImages[0] !== imgs[0],
    image: normalizedImages[0] || "", // first image = cover
    images: normalizedImages,
  };
  if (id) {
    const idx = projects.findIndex((x) => x.id === id);
    if (idx > -1) projects[idx] = item;
  } else projects.push(item);
  setData("projects", projects);
  closeDashModal();
  renderProjectsList();
  renderProjectCompaniesList();
  pushToServer();
}

// ── Careers ──
let reqTags = [];
function renderCareersList() {
  const careers = getData("careers") || [];
  const list = document.getElementById("careers-list");
  if (!list) return;
  if (!careers.length) {
    list.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-briefcase"></i>No job postings yet</div>';
    return;
  }
  list.innerHTML = careers
    .map(
      (c) => `
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">${c.title_en}</span>
        <span class="btn-toggle ${c.active !== false ? "on" : ""}" onclick="toggleCareer(${c.id})">${c.active !== false ? "Active" : "Hidden"}</span>
      </div>
      <div class="item-card-meta">
        <span><i class="fas fa-location-dot"></i> ${c.location_en}</span>
        <span><i class="fas fa-clock"></i> ${c.type || "full-time"}</span>
      </div>
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openCareerModal(${c.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItem('careers',${c.id})"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>`,
    )
    .join("");
}

function toggleCareer(id) {
  const careers = getData("careers") || [];
  const c = careers.find((x) => x.id === id);
  if (c) {
    c.active = !c.active;
    setData("careers", careers);
    renderCareersList();
  }
}

function openCareerModal(id) {
  const careers = getData("careers") || [];
  const c = id ? careers.find((x) => x.id === id) : null;
  reqTags = c?.requirements ? [...c.requirements] : [];

  openDashModal(`
    <h3>${c ? "Edit Job Posting" : "Add Job Posting"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Title (EN)</label><input id="m-title-en" value="${c?.title_en || ""}" /></div>
      <div class="form-field"><label>Title (AR)</label><input id="m-title-ar" value="${c?.title_ar || ""}" dir="rtl" /></div>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Location (EN)</label><input id="m-loc-en" value="${c?.location_en || ""}" /></div>
      <div class="form-field"><label>Location (AR)</label><input id="m-loc-ar" value="${c?.location_ar || ""}" dir="rtl" /></div>
    </div>
    <div class="form-field">
      <label>Job Type</label>
      <select id="m-type">
        <option value="full-time" ${c?.type === "full-time" ? "selected" : ""}>Full-Time</option>
        <option value="part-time" ${c?.type === "part-time" ? "selected" : ""}>Part-Time</option>
        <option value="contract" ${c?.type === "contract" ? "selected" : ""}>Contract</option>
      </select>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Description (EN)</label><textarea id="m-desc-en" rows="3">${c?.desc_en || ""}</textarea></div>
      <div class="form-field"><label>Description (AR)</label><textarea id="m-desc-ar" rows="3" dir="rtl">${c?.desc_ar || ""}</textarea></div>
    </div>
    <div class="form-field">
      <label>Requirements</label>
      <div class="req-tags" id="req-tags-display">${reqTags.map((r, i) => `<span class="req-tag">${r}<button onclick="removeReqTag(${i})">×</button></span>`).join("")}</div>
      <div class="req-tag-input">
        <input id="req-input" placeholder="Add requirement..." onkeydown="if(event.key==='Enter'){event.preventDefault();addReqTag();}" />
        <button class="btn-add" style="padding:8px 14px;font-size:.8rem" onclick="addReqTag()"><i class="fas fa-plus"></i></button>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveCareer(${id || "null"})">Save Job</button>
    </div>`);
}

function addReqTag() {
  const inp = document.getElementById("req-input");
  if (!inp || !inp.value.trim()) return;
  reqTags.push(inp.value.trim());
  inp.value = "";
  updateReqDisplay();
}

function removeReqTag(i) {
  reqTags.splice(i, 1);
  updateReqDisplay();
}

function updateReqDisplay() {
  const el = document.getElementById("req-tags-display");
  if (el)
    el.innerHTML = reqTags
      .map(
        (r, i) =>
          `<span class="req-tag">${r}<button onclick="removeReqTag(${i})">×</button></span>`,
      )
      .join("");
}

function saveCareer(id) {
  const careers = getData("careers") || [];
  const item = {
    id: id || Date.now(),
    title_en: document.getElementById("m-title-en").value,
    title_ar: document.getElementById("m-title-ar").value,
    location_en: document.getElementById("m-loc-en").value,
    location_ar: document.getElementById("m-loc-ar").value,
    type: document.getElementById("m-type").value,
    desc_en: document.getElementById("m-desc-en").value,
    desc_ar: document.getElementById("m-desc-ar").value,
    requirements: reqTags,
    active: true,
  };
  if (id) {
    const idx = careers.findIndex((x) => x.id === id);
    if (idx > -1) careers[idx] = item;
  } else careers.push(item);
  setData("careers", careers);
  closeDashModal();
  renderCareersList();
  pushToServer();
}

// ── Partners ──
function renderPartnersList() {
  const partners = getData("partners") || [];
  const list = document.getElementById("partners-list");
  if (!list) return;
  list.innerHTML =
    partners
      .map(
        (p) => `
    <div class="item-card" style="margin-bottom:10px">
      <div class="item-card-header"><span class="item-card-title">${p.name}</span></div>
      ${p.logo ? `<img src="${p.logo}" alt="${p.name}" style="width:100%;height:72px;object-fit:contain;background:var(--dash-surface2);border:1px solid var(--dash-border);border-radius:6px;padding:12px;margin:8px 0;" />` : ""}
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openPartnerModal(${p.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItemFrom('partners',${p.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`,
      )
      .join("") ||
    '<div class="empty-state"><i class="fas fa-handshake"></i>No partners yet</div>';
}

function openPartnerModal(id) {
  const partners = getData("partners") || [];
  const p = id ? partners.find((x) => x.id === id) : null;
  openDashModal(`
    <h3>${p ? "Edit Partner" : "Add Partner"}</h3>
    <div class="form-field"><label>Partner Name</label><input id="m-pname" value="${p?.name || ""}" /></div>
    <div class="form-field"><label>Logo Path / URL</label><input id="m-plogo" value="${p?.logo || ""}" placeholder="assets/images/partner/logo.avif or https://..." /></div>
    <div class="form-field">
      <label>Accent Background</label>
      <select id="m-paccent">
        ${PARTNER_ACCENT_PRESETS.map((accent) => `<option value="${accent.value}" ${accent.value === (p?.accent || PARTNER_ACCENT_PRESETS[0].value) ? "selected" : ""}>${accent.label}</option>`).join("")}
      </select>
    </div>
    <div class="form-field"><small style="color:var(--dash-muted)">Recommended: use local files from <code>assets/images/partner</code> for the new luxury logo wall.</small></div>
    <div class="form-field"><input type="file" accept="image/*" onchange="previewUpload(this,'m-plogo')" style="color:var(--dash-muted)" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="savePartner(${id || "null"})">Save Partner</button>
    </div>`);
}

function savePartner(id) {
  const partners = getData("partners") || [];
  const item = {
    id: id || Date.now(),
    name: document.getElementById("m-pname").value,
    logo: document.getElementById("m-plogo").value,
    accent: document.getElementById("m-paccent").value,
  };
  if (id) {
    const idx = partners.findIndex((x) => x.id === id);
    if (idx > -1) partners[idx] = item;
  } else partners.push(item);
  setData("partners", partners);
  closeDashModal();
  renderPartnersList();
}

function deleteItemFrom(key, id) {
  if (!confirm("Delete this item?")) return;
  const arr = getData(key) || [];
  setData(
    key,
    arr.filter((x) => x.id !== id),
  );
  if (key === "partners") renderPartnersList();
  if (key === "testimonials") renderTestimonialsList();
}

// ── Testimonials ──
function renderTestimonialsList() {
  const testimonials = getData("testimonials") || [];
  const list = document.getElementById("testimonials-list");
  if (!list) return;
  list.innerHTML =
    testimonials
      .map(
        (t) => `
    <div class="item-card" style="margin-bottom:10px">
      <div class="item-card-header"><span class="item-card-title">${t.author}</span></div>
      <div class="item-card-meta"><span>${t.company}</span><span>${"★".repeat(t.stars || 5)}</span></div>
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openTestimonialModal(${t.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del" onclick="deleteItemFrom('testimonials',${t.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`,
      )
      .join("") ||
    '<div class="empty-state"><i class="fas fa-star"></i>No testimonials yet</div>';
}

function openTestimonialModal(id) {
  const testimonials = getData("testimonials") || [];
  const t = id ? testimonials.find((x) => x.id === id) : null;
  openDashModal(`
    <h3>${t ? "Edit Testimonial" : "Add Testimonial"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Author Name</label><input id="m-author" value="${t?.author || ""}" /></div>
      <div class="form-field"><label>Company</label><input id="m-company" value="${t?.company || ""}" /></div>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Text (EN)</label><textarea id="m-text-en" rows="3">${t?.text_en || ""}</textarea></div>
      <div class="form-field"><label>Text (AR)</label><textarea id="m-text-ar" rows="3" dir="rtl">${t?.text_ar || ""}</textarea></div>
    </div>
    <div class="form-field"><label>Stars (1-5)</label><input id="m-stars" type="number" min="1" max="5" value="${t?.stars || 5}" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveTestimonial(${id || "null"})">Save</button>
    </div>`);
}

function saveTestimonial(id) {
  const testimonials = getData("testimonials") || [];
  const item = {
    id: id || Date.now(),
    author: document.getElementById("m-author").value,
    company: document.getElementById("m-company").value,
    text_en: document.getElementById("m-text-en").value,
    text_ar: document.getElementById("m-text-ar").value,
    stars: parseInt(document.getElementById("m-stars").value) || 5,
  };
  if (id) {
    const idx = testimonials.findIndex((x) => x.id === id);
    if (idx > -1) testimonials[idx] = item;
  } else testimonials.push(item);
  setData("testimonials", testimonials);
  closeDashModal();
  renderTestimonialsList();
}

// ── Messages ──
function renderMessagesList() {
  const messages = JSON.parse(localStorage.getItem("amg_messages") || "[]");
  const list = document.getElementById("messages-list");
  if (!list) return;
  if (!messages.length) {
    list.innerHTML =
      '<div class="empty-state"><i class="fas fa-inbox"></i><p>No messages received yet</p></div>';
    return;
  }
  list.innerHTML = messages
    .reverse()
    .map(
      (m, i) => `
    <div class="msg-row ${m.read ? "" : "unread"}" onclick="markMsgRead(${messages.length - 1 - i})">
      <div class="msg-row-header"><span class="msg-row-name">${m.name}</span><span class="msg-row-date">${new Date(m.date).toLocaleString()}</span></div>
      <div class="msg-row-email">${m.email}${m.phone ? ` &nbsp;|&nbsp; 📞 ${m.phone}` : ""}</div>
      <div class="msg-row-subject">${m.subject || "—"}</div>
      <div class="msg-row-body">${m.message || ""}</div>
      ${m.attachmentName ? `<div class="msg-row-subject">Attachment: <strong>${m.attachmentName}</strong></div>` : ""}
    </div>`,
    )
    .join("");
}

function markMsgRead(i) {
  const msgs = JSON.parse(localStorage.getItem("amg_messages") || "[]");
  if (msgs[i]) msgs[i].read = true;
  localStorage.setItem("amg_messages", JSON.stringify(msgs));
  renderMessagesList();
  renderOverview();
}

// ── Applications ──
function renderApplicationsList() {
  const apps = JSON.parse(localStorage.getItem("amg_applications") || "[]");
  const list = document.getElementById("applications-list");
  if (!list) return;
  if (!apps.length) {
    list.innerHTML =
      '<div class="empty-state"><i class="fas fa-user-tie"></i><p>No applications received yet</p></div>';
    return;
  }
  list.innerHTML = apps
    .reverse()
    .map(
      (a) => `
    <div class="msg-row">
      <div class="msg-row-header"><span class="msg-row-name">${a.name}</span><span class="msg-row-date">${new Date(a.date).toLocaleString()}</span></div>
      <div class="msg-row-email">${a.email} &nbsp;|&nbsp; 📞 ${a.phone || ""}</div>
      <div class="msg-row-subject">${a.type === "general" ? "General CV:" : "Applied for:"} <strong>${a.jobTitle || "Open Application"}</strong></div>
    </div>`,
    )
    .join("");
}

// ── Team ──
function renderTeamList() {
  const team = getTeam();
  const list = document.getElementById("team-list");
  if (!list) return;
  const currentUser = JSON.parse(sessionStorage.getItem("amg_session") || "null");
  const superAdminAccount = getSuperAdmin();

  const superAdminCard = `
    <div class="team-card">
      <div class="team-avatar">A</div>
      <div class="team-info"><div class="team-username">${superAdminAccount.username}</div><div class="team-role">Super Admin (cannot be deleted)</div></div>
      ${currentUser ? `<button class="btn-edit" onclick="openPasswordModal()" style="margin-left:auto"><i class="fas fa-key"></i> Change Password</button>` : ""}
    </div>`;

  if (!team.length) {
    list.innerHTML =
      superAdminCard +
      '<div class="empty-state" style="margin-top:20px"><i class="fas fa-users"></i><p>No sub-admins yet</p></div>';
    return;
  }
  list.innerHTML =
    superAdminCard +
    team
      .map(
        (m, i) => `
    <div class="team-card">
      <div class="team-avatar">${m.username.charAt(0).toUpperCase()}</div>
      <div class="team-info"><div class="team-username">${m.username}</div><div class="team-role">${m.role || "Sub-Admin"}</div></div>
      <button class="btn-del" onclick="deleteTeamMember(${i})" style="margin-left:auto"><i class="fas fa-trash"></i></button>
    </div>`,
      )
      .join("");
}

function openTeamModal() {
  openDashModal(`
    <h3>Add Sub-Admin</h3>
    <div class="form-field"><label>Username</label><input id="m-team-user" /></div>
    <div class="form-field"><label>Password</label><input id="m-team-pass" type="password" /></div>
    <div class="form-field"><label>Role Label</label><input id="m-team-role" placeholder="e.g. Content Manager" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveTeamMember()">Add Member</button>
    </div>`);
}

function openPasswordModal() {
  openDashModal(`
    <h3>Change Password</h3>
    <div class="form-field"><label>Current Password</label><input id="m-current-pass" type="password" /></div>
    <div class="form-field"><label>New Password</label><input id="m-new-pass" type="password" /></div>
    <div class="form-field"><label>Confirm New Password</label><input id="m-confirm-pass" type="password" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="savePasswordChange()">Update Password</button>
    </div>`);
}

function savePasswordChange() {
  const session = JSON.parse(sessionStorage.getItem("amg_session") || "null");
  if (!session) return;
  const current = document.getElementById("m-current-pass")?.value || "";
  const next = document.getElementById("m-new-pass")?.value || "";
  const confirm = document.getElementById("m-confirm-pass")?.value || "";
  if (!current || !next || !confirm) return alert("All password fields are required");
  if (next !== confirm) return alert("New password confirmation does not match");

  if (session.username === getSuperAdmin().username) {
    const superAdmin = getSuperAdmin();
    if (current !== superAdmin.password) return alert("Current password is incorrect");
    superAdmin.password = next;
    setSuperAdmin(superAdmin);
  } else {
    const team = getTeam();
    const index = team.findIndex((member) => member.username === session.username);
    if (index === -1) return alert("User not found");
    if (team[index].password !== current) return alert("Current password is incorrect");
    team[index].password = next;
    setTeam(team);
  }

  closeDashModal();
  alert("Password updated successfully");
}

function saveTeamMember() {
  const u = document.getElementById("m-team-user")?.value.trim();
  const p = document.getElementById("m-team-pass")?.value;
  const r = document.getElementById("m-team-role")?.value.trim();
  if (!u || !p) return alert("Username and password required");
  if (u === "admin") return alert('Username "admin" is reserved');
  const team = getTeam();
  if (team.find((x) => x.username === u))
    return alert("Username already exists");
  team.push({ username: u, password: p, role: r || "Sub-Admin" });
  setTeam(team);
  closeDashModal();
  renderTeamList();
}

function deleteTeamMember(i) {
  if (!confirm("Delete this sub-admin?")) return;
  const team = getTeam();
  team.splice(i, 1);
  setTeam(team);
  renderTeamList();
}

// ── Our Group ──
function renderOurGroupList() {
  const companies = getData("groupCompanies") || [];
  const list = document.getElementById("ourgroup-list");
  if (!list) return;
  if (!companies.length) {
    list.innerHTML =
      '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-city"></i>No companies yet</div>';
    return;
  }
  list.innerHTML = companies
    .map(
      (c) => `
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-card-title">${c.name_en}</span>
      </div>
      <div class="item-card-meta">
        <span><i class="fas fa-location-dot"></i> ${c.location_en}</span>
        <span><i class="fas fa-file-lines"></i> Uses global company profile settings</span>
      </div>
      ${c.image ? `<img src="${c.image}" alt="" style="width:100%;height:80px;object-fit:cover;border-radius:6px;margin-top:8px;" />` : ""}
      <div class="item-card-actions">
        <button class="btn-edit" onclick="openGroupModal(${c.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn-del"  onclick="deleteItem('groupCompanies',${c.id})"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>`,
    )
    .join("");
}

function openGroupModal(id) {
  const companies = getData("groupCompanies") || [];
  const c = id ? companies.find((x) => x.id === id) : null;
  openDashModal(`
    <h3>${c ? "Edit Company" : "Add Company"}</h3>
    <div class="form-grid-2">
      <div class="form-field"><label>Name (EN)</label><input id="m-gname-en" value="${c?.name_en || ""}" /></div>
      <div class="form-field"><label>Name (AR)</label><input id="m-gname-ar" value="${c?.name_ar || ""}" dir="rtl" /></div>
      <div class="form-field"><label>Location (EN)</label><input id="m-gloc-en" value="${c?.location_en || ""}" /></div>
      <div class="form-field"><label>Location (AR)</label><input id="m-gloc-ar" value="${c?.location_ar || ""}" dir="rtl" /></div>
    </div>
    <div class="form-grid-2">
      <div class="form-field"><label>Description (EN)</label><textarea id="m-gdesc-en" rows="3">${c?.desc_en || ""}</textarea></div>
      <div class="form-field"><label>Description (AR)</label><textarea id="m-gdesc-ar" rows="3" dir="rtl">${c?.desc_ar || ""}</textarea></div>
    </div>
    <div class="form-field"><label>Image URL</label><input id="m-gimage" value="${c?.image || ""}" placeholder="https://... or upload below" /></div>
    <div class="form-field"><label>Upload Image</label><input type="file" accept="image/*" onchange="previewUpload(this,'m-gimage')" style="color:var(--dash-muted)" /></div>
    <div class="modal-actions">
      <button class="btn-modal-cancel" onclick="closeDashModal()">Cancel</button>
      <button class="btn-modal-save" onclick="saveGroup(${id || "null"})">Save Company</button>
    </div>`);
}

function saveGroup(id) {
  const companies = getData("groupCompanies") || [];
  const item = {
    id: id || Date.now(),
    name_en: document.getElementById("m-gname-en").value,
    name_ar: document.getElementById("m-gname-ar").value,
    location_en: document.getElementById("m-gloc-en").value,
    location_ar: document.getElementById("m-gloc-ar").value,
    desc_en: document.getElementById("m-gdesc-en").value,
    desc_ar: document.getElementById("m-gdesc-ar").value,
    image: document.getElementById("m-gimage").value,
    profile: id ? companies.find((x) => x.id === id)?.profile || "" : "",
  };
  if (id) {
    const idx = companies.findIndex((x) => x.id === id);
    if (idx > -1) companies[idx] = item;
  } else {
    companies.push(item);
  }
  setData("groupCompanies", companies);
  closeDashModal();
  renderOurGroupList();
  pushToServer();
}

// ── Generic delete (extended to groupCompanies) ──
function deleteItem(key, id) {
  if (!confirm("Delete this item? This cannot be undone.")) return;
  const arr = getData(key) || [];
  setData(
    key,
    arr.filter((x) => x.id !== id),
  );
  if (key === "services") renderServicesList();
  if (key === "projectCompanies") {
    renderProjectCompaniesList();
    renderProjectsList();
  }
  if (key === "projects") renderProjectsList();
  if (key === "careers") renderCareersList();
  if (key === "groupCompanies") renderOurGroupList();
}

// ── Helpers ──
function openDashModal(html) {
  document.getElementById("dash-modal-content").innerHTML = html;
  document.getElementById("dash-modal").classList.add("open");
}

function closeDashModal() {
  document.getElementById("dash-modal").classList.remove("open");
}

document.getElementById("dash-modal")?.addEventListener("click", (e) => {
  if (e.target === document.getElementById("dash-modal")) closeDashModal();
});

function previewUpload(input, targetId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const el = document.getElementById(targetId);
    if (el) el.value = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showMsg(id, text, success) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = "save-msg " + (success ? "show-success" : "show-error");
  setTimeout(() => (el.className = "save-msg"), 3500);
}
function pushToServer() {
  // Collect all AMG data from localStorage
  const allData = {};
  const keys = [
    "siteSettings",
    "seoSettings",
    "sections",
    "services",
    "projectCompanies",
    "projects",
    "careers",
    "partners",
    "testimonials",
    "groupCompanies",
  ];
  keys.forEach((k) => {
    const val = localStorage.getItem("amg_" + k);
    if (val) allData[k] = JSON.parse(val);
  });

  const formData = new FormData();
  formData.append("secret", "amg_admin_2025");
  formData.append("data", JSON.stringify(allData));

  fetch("../php/save_settings.php", { method: "POST", body: formData })
    .then((r) => r.json())
    .then((res) => {
      if (res.success) console.log("✅ Settings saved to server");
      else console.warn("⚠️ Server save failed:", res.message);
    })
    .catch((err) => console.warn("⚠️ Could not reach server:", err));
}

// ===== MISSION & VISION =====
function loadMissionVision() {
  const data = getData("missionVision") || {
    intro: {
      sectionTagEn: "Our Journey",
      sectionTagAr: "رحلتنا",
      sectionTitleEn: "Mission & Vision",
      sectionTitleAr: "مهمتنا ورؤيتنا",
      kickerEn: "Built on purpose",
      kickerAr: "مبني على هدف",
      textEn: "",
      textAr: "",
    },
    mission: {
      labelEn: "Mission",
      labelAr: "المهمة",
      icon: "fas fa-bullseye",
      titleEn: "Our Mission",
      titleAr: "مهمتنا",
      descriptionEn: "",
      descriptionAr: "",
    },
    vision: {
      labelEn: "Vision",
      labelAr: "الرؤية",
      icon: "fas fa-binoculars",
      titleEn: "AMG Foresight",
      titleAr: "رؤيا AMG",
      descriptionEn: "",
      descriptionAr: "",
    },
  };

  document.getElementById("mv-section-tag-en").value = data.intro?.sectionTagEn || "";
  document.getElementById("mv-section-tag-ar").value = data.intro?.sectionTagAr || "";
  document.getElementById("mv-section-title-en").value = data.intro?.sectionTitleEn || "";
  document.getElementById("mv-section-title-ar").value = data.intro?.sectionTitleAr || "";
  document.getElementById("mv-intro-kicker-en").value = data.intro?.kickerEn || "";
  document.getElementById("mv-intro-kicker-ar").value = data.intro?.kickerAr || "";
  document.getElementById("mv-intro-text-en").value = data.intro?.textEn || "";
  document.getElementById("mv-intro-text-ar").value = data.intro?.textAr || "";

  document.getElementById("mv-mission-label-en").value = data.mission.labelEn || "";
  document.getElementById("mv-mission-label-ar").value = data.mission.labelAr || "";
  document.getElementById("mv-mission-icon").value = data.mission.icon || "fas fa-bullseye";
  document.getElementById("mv-mission-title-en").value = data.mission.titleEn;
  document.getElementById("mv-mission-title-ar").value = data.mission.titleAr;
  document.getElementById("mv-mission-desc-en").value = data.mission.descriptionEn;
  document.getElementById("mv-mission-desc-ar").value = data.mission.descriptionAr;

  document.getElementById("mv-vision-label-en").value = data.vision.labelEn || "";
  document.getElementById("mv-vision-label-ar").value = data.vision.labelAr || "";
  document.getElementById("mv-vision-icon").value = data.vision.icon || "fas fa-binoculars";
  document.getElementById("mv-vision-title-en").value = data.vision.titleEn;
  document.getElementById("mv-vision-title-ar").value = data.vision.titleAr;
  document.getElementById("mv-vision-desc-en").value = data.vision.descriptionEn;
  document.getElementById("mv-vision-desc-ar").value = data.vision.descriptionAr;
}

function saveMissionVision() {
  const data = {
    intro: {
      sectionTagEn: document.getElementById("mv-section-tag-en").value,
      sectionTagAr: document.getElementById("mv-section-tag-ar").value,
      sectionTitleEn: document.getElementById("mv-section-title-en").value,
      sectionTitleAr: document.getElementById("mv-section-title-ar").value,
      kickerEn: document.getElementById("mv-intro-kicker-en").value,
      kickerAr: document.getElementById("mv-intro-kicker-ar").value,
      textEn: document.getElementById("mv-intro-text-en").value,
      textAr: document.getElementById("mv-intro-text-ar").value,
    },
    mission: {
      labelEn: document.getElementById("mv-mission-label-en").value,
      labelAr: document.getElementById("mv-mission-label-ar").value,
      icon: document.getElementById("mv-mission-icon").value,
      titleEn: document.getElementById("mv-mission-title-en").value,
      titleAr: document.getElementById("mv-mission-title-ar").value,
      descriptionEn: document.getElementById("mv-mission-desc-en").value,
      descriptionAr: document.getElementById("mv-mission-desc-ar").value,
    },
    vision: {
      labelEn: document.getElementById("mv-vision-label-en").value,
      labelAr: document.getElementById("mv-vision-label-ar").value,
      icon: document.getElementById("mv-vision-icon").value,
      titleEn: document.getElementById("mv-vision-title-en").value,
      titleAr: document.getElementById("mv-vision-title-ar").value,
      descriptionEn: document.getElementById("mv-vision-desc-en").value,
      descriptionAr: document.getElementById("mv-vision-desc-ar").value,
    },
  };

  setData("missionVision", data);
  showMsg("mission-vision-msg", "✓ Mission & Vision saved successfully!", true);
  pushToServer();
}

// Add mission-vision to pushToServer data collection
const originalPushToServer = pushToServer;
pushToServer = function pushToServerWithMissionVision() {
  const allData = {};
  const keys = [
    "siteSettings",
    "seoSettings",
    "sections",
    "services",
    "projectCompanies",
    "projects",
    "careers",
    "partners",
    "testimonials",
    "groupCompanies",
    "missionVision",
  ];
  keys.forEach((k) => {
    const val = localStorage.getItem("amg_" + k);
    if (val) allData[k] = JSON.parse(val);
  });

  const formData = new FormData();
  formData.append("secret", "amg_admin_2025");
  formData.append("data", JSON.stringify(allData));

  fetch("../php/save_settings.php", { method: "POST", body: formData })
    .then((r) => r.json())
    .then((res) => {
      if (res.success) console.log("✅ Settings saved to server");
      else console.warn("⚠️ Server save failed:", res.message);
    })
    .catch((err) => console.warn("⚠️ Could not reach server:", err));
}
