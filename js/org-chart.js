/* ===== ORGANIZATIONAL CHART DATA LOADER ===== */

(() => {
  "use strict";

  const defaultData = {
    intro: {
      sectionTagEn: "Leadership Structure",
      sectionTagAr: "الهيكل القيادي",
      sectionTitleEn: "Organizational Chart",
      sectionTitleAr: "الهيكل التنظيمي",
      subtitleEn:
        "A premium snapshot of AMG's leadership structure, designed to clarify accountability, delivery flow, and executive oversight.",
      subtitleAr:
        "لقطة احترافية للهيكل القيادي في AMG توضح مسارات المسؤولية والتنفيذ والإشراف التنفيذي.",
      descriptionEn:
        "Our organizational structure is shaped around precision, ownership, and disciplined execution. Each function is positioned to support clear decision-making, dependable delivery, and long-term operational excellence across every project lifecycle.\n\nFrom executive leadership to technical and commercial functions, the model emphasizes coordination, speed, and accountability without compromising premium quality standards.",
      descriptionAr:
        "تم تصميم هيكلنا التنظيمي حول الدقة والمسؤولية والانضباط في التنفيذ. كل وظيفة موضوعة لدعم وضوح القرار واعتمادية التسليم والتميّز التشغيلي المستدام عبر جميع مراحل المشروع.\n\nمن القيادة التنفيذية إلى الوظائف الفنية والتجارية، يركز هذا النموذج على التنسيق والسرعة والمساءلة دون المساس بمعايير الجودة الراقية.",
    },
    nodes: [],
  };

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getOrgChartData() {
    const stored = localStorage.getItem("amg_orgChart");
    if (!stored) return defaultData;

    try {
      const parsed = JSON.parse(stored);
      return {
        intro: { ...defaultData.intro, ...(parsed.intro || {}) },
        nodes: Array.isArray(parsed.nodes) ? parsed.nodes : [],
      };
    } catch (error) {
      return defaultData;
    }
  }

  function getBuiltInOverrides() {
    try {
      const stored = JSON.parse(localStorage.getItem("amg_builtInSectionContent") || "{}");
      return stored["organizational-chart"] || {};
    } catch (error) {
      return {};
    }
  }

  function getNodeTitle(node, lang) {
    if (lang === "ar") {
      return node.titleAr || node.roleAr || node.titleEn || node.roleEn || "";
    }
    return node.titleEn || node.roleEn || node.titleAr || node.roleAr || "";
  }

  function buildNodeMarkup(node, lang, childrenMap, ancestors = new Set()) {
    if (ancestors.has(node.id)) return "";

    const nextAncestors = new Set(ancestors);
    nextAncestors.add(node.id);

    const title = getNodeTitle(node, lang);
    const children = childrenMap.get(String(node.id)) || [];
    const branchClass = children.length > 1 ? " has-many" : "";
    const kicker = !node.parentId
      ? lang === "ar" ? "المستوى الأعلى" : "Executive Tier"
      : lang === "ar" ? "دور قيادي" : "Leadership Role";

    return `
      <li class="org-chart-node">
        <article class="org-chart-card${node.parentId ? "" : " is-root"}">
          <span class="org-chart-node-kicker">${escapeHtml(kicker)}</span>
          <h3 class="org-chart-title">${escapeHtml(title)}</h3>
        </article>
        ${children.length
          ? `<ul class="org-chart-children${branchClass}">${children
              .map((child) => buildNodeMarkup(child, lang, childrenMap, nextAncestors))
              .join("")}</ul>`
          : ""}
      </li>`;
  }

  function getHierarchyDepth(nodes) {
    const byParent = new Map();
    nodes.forEach((node) => {
      const key = node.parentId || "";
      if (!byParent.has(key)) byParent.set(key, []);
      byParent.get(key).push(node);
    });

    const walk = (parentId) => {
      const children = byParent.get(parentId) || [];
      if (!children.length) return 0;
      return 1 + Math.max(...children.map((child) => walk(child.id)));
    };

    return walk("");
  }

  function renderOrgChart() {
    const data = getOrgChartData();
    const overrides = getBuiltInOverrides();
    const lang = document.documentElement.getAttribute("data-lang") || "en";
    const tree = document.getElementById("org-chart-tree");
    const modalTree = document.getElementById("org-chart-modal-tree");
    if (!tree && !modalTree) return;

    const sectionTag = document.getElementById("org-chart-tag");
    const sectionTitle = document.getElementById("org-chart-title");
    const sectionSubtitle = document.getElementById("org-chart-subtitle");
    const sectionDescription = document.getElementById("org-chart-description");
    const modalTag = document.getElementById("org-chart-modal-tag");
    const modalTitle = document.getElementById("org-chart-modal-title");
    const modalSubtitle = document.getElementById("org-chart-modal-subtitle");
    const totalCount = document.getElementById("org-chart-total-count");
    const levelCount = document.getElementById("org-chart-level-count");

    if (sectionTag) {
      sectionTag.textContent = lang === "ar"
        ? overrides.tagAr || data.intro.sectionTagAr
        : overrides.tagEn || data.intro.sectionTagEn;
    }
    if (sectionTitle) {
      sectionTitle.textContent =
        lang === "ar"
          ? overrides.titleAr || data.intro.sectionTitleAr
          : overrides.titleEn || data.intro.sectionTitleEn;
    }
    if (sectionSubtitle) {
      sectionSubtitle.textContent =
        lang === "ar"
          ? overrides.subtitleAr || data.intro.subtitleAr
          : overrides.subtitleEn || data.intro.subtitleEn;
    }
    if (modalTag) {
      modalTag.textContent = lang === "ar"
        ? overrides.tagAr || data.intro.sectionTagAr
        : overrides.tagEn || data.intro.sectionTagEn;
    }
    if (modalTitle) {
      modalTitle.textContent =
        lang === "ar"
          ? overrides.titleAr || data.intro.sectionTitleAr
          : overrides.titleEn || data.intro.sectionTitleEn;
    }
    if (modalSubtitle) {
      modalSubtitle.textContent =
        lang === "ar"
          ? "استعرض الهيكل الإداري الكامل في عرض مركز وجاهز للتقديم."
          : "Explore the complete reporting structure in a focused, presentation-ready view.";
    }
    if (sectionDescription) {
      const text = lang === "ar" ? data.intro.descriptionAr : data.intro.descriptionEn;
      sectionDescription.innerHTML = String(text || "")
        .split(/\n{2,}/)
        .filter(Boolean)
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
    }

    if (!Array.isArray(data.nodes) || !data.nodes.length) {
      const emptyMarkup = `<div class="org-chart-empty">${
        lang === "ar" ? "لم يتم إضافة عناصر للهيكل التنظيمي بعد." : "No organizational chart members added yet."
      }</div>`;
      if (tree) tree.innerHTML = emptyMarkup;
      if (modalTree) modalTree.innerHTML = emptyMarkup;
      if (totalCount) totalCount.textContent = "0";
      if (levelCount) levelCount.textContent = "0";
      return;
    }

    const indexedNodes = data.nodes.map((node, index) => ({
      ...node,
      id: String(node.id || `org-${index + 1}`),
      parentId: node.parentId ? String(node.parentId) : "",
      _index: index,
    }));
    const nodeIds = new Set(indexedNodes.map((node) => node.id));
    const sortedNodes = [...indexedNodes].sort((a, b) => {
      const aOrder = Number.isFinite(Number(a.sortOrder)) ? Number(a.sortOrder) : a._index + 1;
      const bOrder = Number.isFinite(Number(b.sortOrder)) ? Number(b.sortOrder) : b._index + 1;
      return aOrder - bOrder || a._index - b._index;
    });
    const childrenMap = new Map();

    sortedNodes.forEach((node) => {
      const key = node.parentId && nodeIds.has(node.parentId) ? node.parentId : "";
      if (!childrenMap.has(key)) childrenMap.set(key, []);
      childrenMap.get(key).push(node);
    });

    const roots = childrenMap.get("") || [];
    const markup = roots.length
      ? `<ul class="org-chart-list org-chart-root">${roots
          .map((node) => buildNodeMarkup(node, lang, childrenMap))
          .join("")}</ul>`
      : `<div class="org-chart-empty">${
          lang === "ar" ? "يرجى تحديد عنصر رئيسي واحد على الأقل." : "Please assign at least one top-level chart member."
        }</div>`;
    if (tree) tree.innerHTML = markup;
    if (modalTree) modalTree.innerHTML = markup;
    if (totalCount) totalCount.textContent = String(indexedNodes.length);
    if (levelCount) levelCount.textContent = String(getHierarchyDepth(indexedNodes));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderOrgChart);
  } else {
    renderOrgChart();
  }

  window.addEventListener("storage", (e) => {
    if (e.key === "amg_orgChart") {
      renderOrgChart();
    }
  });

  window.getOrgChartData = getOrgChartData;
  window.renderOrgChart = renderOrgChart;
})();
