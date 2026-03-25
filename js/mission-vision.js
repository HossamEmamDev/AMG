/* ===== MISSION & VISION DATA LOADER ===== */

(() => {
  "use strict";

  // Default mission/vision data
  const defaultData = {
    intro: {
      sectionTagEn: "Our Journey",
      sectionTagAr: "رحلتنا",
      sectionTitleEn: "Mission & Vision",
      sectionTitleAr: "مهمتنا ورؤيتنا",
      kickerEn: "Built on purpose",
      kickerAr: "مبني على هدف",
      textEn:
        "The mission explains how AMG executes every project. The vision explains where the group is heading next.",
      textAr:
        "المهمة توضح كيف تنفذ AMG كل مشروع. والرؤية توضح الاتجاه الذي تسير إليه المجموعة في المرحلة القادمة.",
    },
    mission: {
      labelEn: "Mission",
      labelAr: "المهمة",
      icon: "fas fa-bullseye",
      titleEn: "Our Mission",
      titleAr: "مهمتنا",
      descriptionEn:
        "Our ultimate construction project is our very own. With every day of operations, Sweven is laying the stones to introduce an ultra-modern definition of the management contracting industry; one that's entirely designed for clients, result-oriented, and provides personalized solutions for a lap of luxury for every client, regardless of the size of the project at hand. With Sweven, no project is too substantial or too small-scale",
      descriptionAr:
        "مشروعنا الإنشائي النهائي هو ملكنا. مع كل يوم من العمليات، نضع الأساس لتقديم تعريف حديث للغاية لصناعة المقاولات الإدارية؛ واحد مصمم بالكامل للعملاء، موجه نحو النتائج، ويوفر حلولاً مخصصة لكل عميل، بغض النظر عن حجم المشروع. مع AMG، لا يوجد مشروع كبير جداً أو صغير جداً",
    },
    vision: {
      labelEn: "Vision",
      labelAr: "الرؤية",
      icon: "fas fa-binoculars",
      titleEn: "AMG Foresight",
      titleAr: "رؤيا AMG",
      descriptionEn:
        "We aspire to become lifelong construction partners for every client we do business with, including the customer, design professionals, sub-contractors, and tradesmen, through our sustained provision of trailblazing engineering and financial solutions and services. By heightening our capacities and capabilities, we aim to showcase the power of contracting engineers when it comes to applying technical expertise to practical problems, not only in Egypt but in the MENA region at large.",
      descriptionAr:
        "نطمح لأن نصبح شركاء بناء مدى الحياة لكل عميل نتعامل معه، بما في ذلك العميل والمتخصصون في التصميم والمقاولون من الباطن والحرفيون، من خلال توفيرنا المستمر للحل الهندسي والمالي والخدمات الرائدة. من خلال تحسين قدراتنا وإمكانياتنا، نسعى لعرض قوة مهندسي المقاولات عندما يتعلق الأمر بتطبيق الخبرة الفنية على المشاكل العملية، ليس فقط في مصر بل في منطقة الشرق الأوسط وشمال أفريقيا بأسرها.",
    },
  };

  function getMissionVisionData() {
    const stored = localStorage.getItem("amg_missionVision");
    if (!stored) return defaultData;

    try {
      const parsed = JSON.parse(stored);
      return {
        intro: { ...defaultData.intro, ...(parsed.intro || {}) },
        mission: { ...defaultData.mission, ...(parsed.mission || {}) },
        vision: { ...defaultData.vision, ...(parsed.vision || {}) },
      };
    } catch (error) {
      return defaultData;
    }
  }

  function loadMissionVision() {
    const data = getMissionVisionData();
    const lang = document.documentElement.getAttribute("data-lang") || "en";

    const introKicker = document.getElementById("mv-intro-kicker");
    const introText = document.getElementById("mv-intro-text");
    const sectionTag = document.getElementById("mv-section-tag");
    const sectionTitle = document.getElementById("mv-section-title");
    const missionLabel = document.getElementById("mission-label");
    const missionIcon = document.getElementById("mission-icon");
    const visionLabel = document.getElementById("vision-label");
    const visionIcon = document.getElementById("vision-icon");

    if (sectionTag) {
      sectionTag.textContent = lang === "ar" ? data.intro.sectionTagAr : data.intro.sectionTagEn;
    }
    if (sectionTitle) {
      sectionTitle.textContent = lang === "ar" ? data.intro.sectionTitleAr : data.intro.sectionTitleEn;
    }
    if (introKicker) {
      introKicker.textContent = lang === "ar" ? data.intro.kickerAr : data.intro.kickerEn;
    }
    if (introText) {
      introText.textContent = lang === "ar" ? data.intro.textAr : data.intro.textEn;
    }
    if (missionLabel) {
      missionLabel.textContent = lang === "ar" ? data.mission.labelAr : data.mission.labelEn;
    }
    if (missionIcon && data.mission.icon) {
      missionIcon.className = data.mission.icon;
    }
    if (visionLabel) {
      visionLabel.textContent = lang === "ar" ? data.vision.labelAr : data.vision.labelEn;
    }
    if (visionIcon && data.vision.icon) {
      visionIcon.className = data.vision.icon;
    }

    // Update Mission Page
    const missionTitle = document.getElementById("mission-title");
    const missionDesc = document.getElementById("mission-desc");

    if (missionTitle) {
      missionTitle.textContent = lang === "ar" ? data.mission.titleAr : data.mission.titleEn;
    }
    if (missionDesc) {
      missionDesc.textContent = lang === "ar" ? data.mission.descriptionAr : data.mission.descriptionEn;
    }

    // Update Vision Page
    const visionTitle = document.getElementById("vision-title");
    const visionDesc = document.getElementById("vision-desc");

    if (visionTitle) {
      visionTitle.textContent = lang === "ar" ? data.vision.titleAr : data.vision.titleEn;
    }
    if (visionDesc) {
      visionDesc.textContent = lang === "ar" ? data.vision.descriptionAr : data.vision.descriptionEn;
    }
  }

  // Load on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadMissionVision);
  } else {
    loadMissionVision();
  }

  // Listen for language changes
  const originalToggleLanguage = window.toggleLanguage;
  if (typeof originalToggleLanguage === "function") {
    window.toggleLanguage = function () {
      originalToggleLanguage.call(this);
      loadMissionVision();
    };
  }

  // Listen for storage changes (when dashboard updates data)
  window.addEventListener("storage", (e) => {
    if (e.key === "amg_missionVision") {
      loadMissionVision();
    }
  });

  // Expose function for dashboard
  window.getMissionVisionData = getMissionVisionData;
})();
