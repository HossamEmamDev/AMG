/* ===== PROJECTS.JS ===== */
"use strict";

let currentSlide = 0;
let projectsData = [];
let autoPlay = null;
let touchStartX = 0;
let pointerStartX = 0;
let autoplayPausedByUser = false;
const projectExplorerState = {
  search: "",
  company: "all",
  category: "all",
  status: "all",
  sort: "featured",
};

function getOrderedProjects() {
  const settings = getData("siteSettings") || {};
  const projects = [...(getData("projects") || [])];
  const mode = settings.projectOrderMode || "manual";
  return projects.sort((a, b) => {
    if (mode === "year-desc") {
      return (Number(b.year) || 0) - (Number(a.year) || 0) ||
        (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0);
    }
    return (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0) ||
      (Number(b.year) || 0) - (Number(a.year) || 0);
  });
}

function startAutoplay() {
  if (autoplayPausedByUser) return;
  clearInterval(autoPlay);
  autoPlay = setInterval(() => goToSlide(currentSlide + 1), 6000);
}

function stopAutoplay() {
  clearInterval(autoPlay);
  autoPlay = null;
}

/* ── Render main slider ── */
function renderProjects() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  projectsData = getOrderedProjects();
  const slider = document.getElementById("projects-slider");
  const dotsWrap = document.getElementById("proj-dots");
  if (!slider) return;

  slider.innerHTML = projectsData
    .map((p, i) => {
      const img =
        p.image ||
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=75&fit=crop";
      const name = p["name_" + lang] || p.name_en || "";
      const cat = p["category_" + lang] || p.category_en || "";
      const subcat = p["subcategory_" + lang] || p.subcategory_en || "";
      const loc = p["location_" + lang] || p.location_en || "";
      const brief = p["brief_" + lang] || p.brief_en || "";
      const company = resolveProjectCompany(p, lang);
      const implementingCompany = company.name || "";
      const implementingLabel =
        lang === "ar" ? "الجهة المنفذة" : "Implementing Company";
      const pLbl = lang === "ar" ? "الإنجاز" : "Completion";
      return `
    <div class="project-slide" data-id="${p.id}" onclick="openProjectDetail(${p.id})">
      <div class="project-img-wrap">
        <img src="${img}" alt="${name}" loading="${i === 0 ? "eager" : "lazy"}" />
        ${
          company.logo && !p.logo_baked
            ? `<div class="project-company-logo-badge"><img src="${company.logo}" alt="${implementingCompany}" loading="lazy" /></div>`
            : ""
        }
      </div>
        <div class="project-info">
        <div class="project-accent-line"></div>
        <div class="project-info-top">
          <span class="project-category">${subcat || cat}</span>
          <h3 class="project-name">${name}</h3>
          <p class="project-brief">${brief}</p>
          ${
            implementingCompany
              ? `<div class="project-company-chip"><span class="project-chip-label">${implementingLabel}</span><strong>${implementingCompany}</strong></div>`
              : ""
          }
          <div class="project-meta">
            <span><i class="fa fa-location-dot"></i>${loc}</span>
            ${p.year ? `<span><i class="fa fa-calendar"></i>${p.year}</span>` : ""}
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
    })
    .join("");

  if (dotsWrap) {
    dotsWrap.innerHTML = projectsData
      .map(
        (_, i) =>
          `<button class="slider-dot ${i === 0 ? "active" : ""}" onclick="goToSlide(${i})"></button>`,
      )
      .join("");
  }
  currentSlide = 0;
  updateSlider();
  bindProjectSwipe();
  if (!autoPlay) startAutoplay();
}

function updateSlider() {
  const slider = document.getElementById("projects-slider");
  if (!slider) return;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  document
    .querySelectorAll(".slider-dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function goToSlide(n) {
  if (!projectsData.length) return;
  currentSlide =
    ((n % projectsData.length) + projectsData.length) % projectsData.length;
  updateSlider();
}

function bindProjectSwipe() {
  const slider = document.getElementById("projects-slider");
  if (!slider || slider.dataset.swipeBound === "true") return;
  slider.dataset.swipeBound = "true";

  slider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0]?.clientX || 0;
    },
    { passive: true },
  );
  slider.addEventListener("touchend", (e) => {
    const delta = (e.changedTouches[0]?.clientX || 0) - touchStartX;
    if (Math.abs(delta) < 45) return;
    autoplayPausedByUser = true;
    stopAutoplay();
    goToSlide(delta > 0 ? currentSlide - 1 : currentSlide + 1);
  });

  slider.addEventListener("pointerdown", (e) => {
    pointerStartX = e.clientX || 0;
  });
  slider.addEventListener("pointerup", (e) => {
    const delta = (e.clientX || 0) - pointerStartX;
    if (Math.abs(delta) < 45) return;
    autoplayPausedByUser = true;
    stopAutoplay();
    goToSlide(delta > 0 ? currentSlide - 1 : currentSlide + 1);
  });
}

document.getElementById("proj-prev")?.addEventListener("click", () => {
  autoplayPausedByUser = true;
  stopAutoplay();
  goToSlide(currentSlide - 1);
});
document.getElementById("proj-next")?.addEventListener("click", () => {
  autoplayPausedByUser = true;
  stopAutoplay();
  goToSlide(currentSlide + 1);
});

/* ── Project Detail Modal with image gallery ── */
function openProjectDetail(id) {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const p = (getData("projects") || []).find((x) => x.id === id);
  if (!p) return;

  const name = p["name_" + lang] || p.name_en || "";
  const cat = p["category_" + lang] || p.category_en || "";
  const subcat = p["subcategory_" + lang] || p.subcategory_en || "";
  const loc = p["location_" + lang] || p.location_en || "";
  const brief = p["brief_" + lang] || p.brief_en || "";
  const company = resolveProjectCompany(p, lang);
  const implementingCompany = company.name || "";
  const implementingLabel =
    lang === "ar" ? "الجهة المنفذة" : "Implementing Company";
  const imgs =
    p.images && p.images.length ? p.images : p.image ? [p.image] : [];

  // Image gallery HTML
  let galleryHtml = "";
  if (imgs.length > 0) {
    galleryHtml = `
      <div class="proj-gallery">
        <div class="proj-gallery-main">
          <img id="gallery-main-img" src="${imgs[0]}" alt="${name}" />
          ${
            company.logo && !p.logo_baked
              ? `<div class="project-company-logo-badge modal-logo-badge"><img src="${company.logo}" alt="${implementingCompany}" loading="lazy" /></div>`
              : ""
          }
          ${
            imgs.length > 1
              ? `
            <button class="gallery-nav prev" onclick="galleryNav(-1,${imgs.length})"><i class="fa fa-chevron-left"></i></button>
            <button class="gallery-nav next" onclick="galleryNav(1,${imgs.length})"><i class="fa fa-chevron-right"></i></button>
          `
              : ""
          }
        </div>
        ${
          imgs.length > 1
            ? `
        <div class="proj-gallery-thumbs">
          ${imgs.map((im, i) => `<img src="${im}" class="gallery-thumb ${i === 0 ? "active" : ""}" onclick="setGalleryImg('${im}',${i})" loading="lazy" />`).join("")}
        </div>`
            : ""
        }
      </div>`;
  }

  document.getElementById("project-modal-content").innerHTML = `
    ${galleryHtml}
    <div class="project-detail-header" style="margin-top:${imgs.length ? "16px" : "0"}">
      <span class="project-category">${subcat || cat}</span>
      <h2>${name}</h2>
      <div class="project-detail-meta">
        <span><i class="fa fa-location-dot"></i>${loc}</span>
        ${p.year ? `<span><i class="fa fa-calendar"></i>${p.year}</span>` : ""}
      </div>
    </div>
    <p class="project-detail-desc">${brief}</p>
    <div class="project-detail-facts">
      ${
        implementingCompany
          ? `<div class="project-fact-card"><span>${implementingLabel}</span><strong>${implementingCompany}</strong></div>`
          : ""
      }
      <div class="project-fact-card"><span>${lang === "ar" ? "التصنيف" : "Category"}</span><strong>${cat}</strong></div>
      ${
        subcat
          ? `<div class="project-fact-card"><span>${lang === "ar" ? "التصنيف الفرعي" : "Subcategory"}</span><strong>${subcat}</strong></div>`
          : ""
      }
      <div class="project-fact-card"><span>${lang === "ar" ? "الحالة" : "Status"}</span><strong>${p.progress === 100 ? (lang === "ar" ? "مكتمل" : "Completed") : (lang === "ar" ? "قيد التنفيذ" : "In Progress")}</strong></div>
    </div>
    <div class="project-detail-progress">
      <div class="project-detail-progress-label">
        <span>${lang === "ar" ? "نسبة الإنجاز" : "Completion"}</span>
        <span>${p.progress}%</span>
      </div>
      <div class="progress-bar-full">
        <div class="progress-bar-fill" style="width:0%" data-target="${p.progress}"></div>
      </div>
    </div>`;

  openModal("project-modal");
  setTimeout(() => {
    const f = document.querySelector(
      "#project-modal-content .progress-bar-fill",
    );
    if (f) f.style.width = f.dataset.target + "%";
  }, 120);
}

let galleryIdx = 0;
function setGalleryImg(src, idx) {
  const main = document.getElementById("gallery-main-img");
  if (main) {
    main.src = src;
    galleryIdx = idx;
  }
  document
    .querySelectorAll(".gallery-thumb")
    .forEach((t, i) => t.classList.toggle("active", i === idx));
}
function galleryNav(dir, total) {
  const thumbs = document.querySelectorAll(".gallery-thumb");
  const newIdx = (galleryIdx + dir + total) % total;
  if (thumbs[newIdx]) thumbs[newIdx].click();
}

/* ── All Projects Grid ── */
function bindProjectExplorerControls() {
  const bindings = [
    ["projects-filter-search", "search"],
    ["projects-filter-company", "company"],
    ["projects-filter-category", "category"],
    ["projects-filter-status", "status"],
    ["projects-sort-mode", "sort"],
  ];

  bindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.bound === "true") return;
    const eventName = key === "search" ? "input" : "change";
    el.addEventListener(eventName, () => {
      projectExplorerState[key] = el.value;
      renderAllProjects();
    });
    el.dataset.bound = "true";
  });
}

function populateProjectExplorerControls(projects, lang) {
  const companySelect = document.getElementById("projects-filter-company");
  const categorySelect = document.getElementById("projects-filter-category");
  const statusSelect = document.getElementById("projects-filter-status");
  const sortSelect = document.getElementById("projects-sort-mode");
  const searchInput = document.getElementById("projects-filter-search");
  if (!companySelect || !categorySelect || !statusSelect || !sortSelect || !searchInput) {
    return;
  }

  const companies = [];
  const categories = [];
  projects.forEach((project) => {
    const company = resolveProjectCompany(project, lang).name || "";
    const category = project["category_" + lang] || project.category_en || "";
    if (company && !companies.includes(company)) companies.push(company);
    if (category && !categories.includes(category)) categories.push(category);
  });

  searchInput.value = projectExplorerState.search;
  companySelect.innerHTML = [
    `<option value="all">${lang === "ar" ? "كل الشركات" : "All Companies"}</option>`,
    ...companies.sort().map((name) => `<option value="${name}">${name}</option>`),
  ].join("");
  if (![...companySelect.options].some((option) => option.value === projectExplorerState.company)) {
    projectExplorerState.company = "all";
  }
  companySelect.value = projectExplorerState.company;

  categorySelect.innerHTML = [
    `<option value="all">${lang === "ar" ? "كل التصنيفات" : "All Categories"}</option>`,
    ...categories.sort().map((name) => `<option value="${name}">${name}</option>`),
  ].join("");
  if (![...categorySelect.options].some((option) => option.value === projectExplorerState.category)) {
    projectExplorerState.category = "all";
  }
  categorySelect.value = projectExplorerState.category;

  statusSelect.innerHTML = `
    <option value="all">${lang === "ar" ? "كل الحالات" : "All Statuses"}</option>
    <option value="completed">${lang === "ar" ? "مكتمل" : "Completed"}</option>
    <option value="progress">${lang === "ar" ? "قيد التنفيذ" : "In Progress"}</option>`;
  statusSelect.value = projectExplorerState.status;

  sortSelect.innerHTML = `
    <option value="featured">${lang === "ar" ? "ترتيب العرض" : "Featured Order"}</option>
    <option value="year-desc">${lang === "ar" ? "الأحدث أولاً" : "Newest First"}</option>
    <option value="year-asc">${lang === "ar" ? "الأقدم أولاً" : "Oldest First"}</option>
    <option value="name-asc">${lang === "ar" ? "الاسم A-Z" : "Name A-Z"}</option>`;
  sortSelect.value = projectExplorerState.sort;
}

function getFilteredProjects(lang) {
  const searchTerm = projectExplorerState.search.trim().toLowerCase();
  const projects = getOrderedProjects().filter((project) => {
    const companyName = resolveProjectCompany(project, lang).name || "";
    const category = project["category_" + lang] || project.category_en || "";
    const status = project.progress === 100 ? "completed" : "progress";
    const haystack = [
      project["name_" + lang] || project.name_en || "",
      project["location_" + lang] || project.location_en || "",
      companyName,
      category,
    ]
      .join(" ")
      .toLowerCase();

    if (searchTerm && !haystack.includes(searchTerm)) return false;
    if (projectExplorerState.company !== "all" && companyName !== projectExplorerState.company) {
      return false;
    }
    if (projectExplorerState.category !== "all" && category !== projectExplorerState.category) {
      return false;
    }
    if (projectExplorerState.status !== "all" && status !== projectExplorerState.status) {
      return false;
    }
    return true;
  });

  if (projectExplorerState.sort === "year-desc") {
    projects.sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
  } else if (projectExplorerState.sort === "year-asc") {
    projects.sort((a, b) => (Number(a.year) || 0) - (Number(b.year) || 0));
  } else if (projectExplorerState.sort === "name-asc") {
    projects.sort((a, b) =>
      String(a["name_" + lang] || a.name_en || "").localeCompare(
        String(b["name_" + lang] || b.name_en || ""),
      ),
    );
  }
  return projects;
}

function renderAllProjects() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const allProjects = getOrderedProjects();
  const projects = getFilteredProjects(lang);
  const grid = document.getElementById("all-projects-grid");
  if (!grid) return;
  populateProjectExplorerControls(allProjects, lang);
  bindProjectExplorerControls();

  if (!projects.length) {
    grid.innerHTML = `<div class="all-projects-empty">${lang === "ar" ? "لا توجد مشاريع تطابق هذه الفلاتر." : "No projects match the current filters."}</div>`;
  } else {
    grid.innerHTML = projects
      .map((p) => {
        const company = resolveProjectCompany(p, lang);
        const companyName = company.name || "";
        const category = p["category_" + lang] || p.category_en || "";
        const subcategory = p["subcategory_" + lang] || p.subcategory_en || "";
        const location = p["location_" + lang] || p.location_en || "";
        const statusLabel = p.progress === 100
          ? (lang === "ar" ? "مكتمل" : "Completed")
          : (lang === "ar" ? "قيد التنفيذ" : "In Progress");
        return `
    <div class="proj-thumb" onclick="openProjectDetail(${p.id}); closeModal('all-projects-modal'); setTimeout(()=>openModal('project-modal'),160)">
      <div class="proj-thumb-media">
        ${p.image ? `<img src="${p.image}" alt="${p["name_" + lang] || p.name_en}" loading="lazy" />` : '<div style="height:170px;background:#f0ede8;display:flex;align-items:center;justify-content:center"><i class="fas fa-building" style="font-size:2rem;color:#ccc"></i></div>'}
        ${
          company.logo && !p.logo_baked
            ? `<div class="project-company-logo-badge thumb-logo-badge"><img src="${company.logo}" alt="${companyName}" loading="lazy" /></div>`
            : ""
        }
      </div>
      <div class="proj-thumb-body">
        <div class="proj-thumb-taxonomy">
          ${category ? `<span class="proj-thumb-chip">${category}</span>` : ""}
          ${subcategory ? `<span class="proj-thumb-chip is-secondary">${subcategory}</span>` : ""}
        </div>
        <h4>${p["name_" + lang] || p.name_en}</h4>
        <p>${p["brief_" + lang] || p.brief_en || ""}</p>
        <div class="proj-thumb-meta">
          ${companyName ? `<span><i class="fa fa-building-circle-check"></i>${companyName}</span>` : ""}
          <span><i class="fa fa-location-dot"></i>${location}</span>
          ${p.year ? `<span><i class="fa fa-calendar"></i>${p.year}</span>` : ""}
          <span><i class="fa fa-chart-line"></i>${statusLabel}</span>
        </div>
      </div>
    </div>`;
      })
      .join("");
  }

  const h2 = document.querySelector("#all-projects-modal h2");
  if (h2) h2.textContent = lang === "ar" ? "جميع المشاريع" : "All Projects";
}

/* ── Services Grid ── */
function renderServices() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const services = getData("services") || [];
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = services
    .map((s) => {
      const hasImg = !!s.image;
      return `
    <div class="service-card ${hasImg ? "" : "no-img"} reveal-up">
      ${hasImg ? `<img src="${s.image}" alt="${s["title_" + lang] || s.title_en}" loading="lazy" />` : ""}
      <div class="service-overlay">
        <div class="service-icon"><i class="${s.icon || "fas fa-building"}"></i></div>
        <h3 class="service-title">${s["title_" + lang] || s.title_en}</h3>
        <p class="service-brief">${s["brief_" + lang] || s.brief_en}</p>
      </div>
    </div>`;
    })
    .join("");

  if (typeof setupScrollReveal === "function") setupScrollReveal();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderServices();
});
