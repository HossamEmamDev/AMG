/* ===== MISSION & VISION DATA LOADER ===== */

(() => {
  "use strict";

  // Default mission/vision data
  const defaultData = {
    mission: {
      titleEn: "Our Mission",
      titleAr: "مهمتنا",
      descriptionEn:
        "Our ultimate construction project is our very own. With every day of operations, Sweven is laying the stones to introduce an ultra-modern definition of the management contracting industry; one that's entirely designed for clients, result-oriented, and provides personalized solutions for a lap of luxury for every client, regardless of the size of the project at hand. With Sweven, no project is too substantial or too small-scale",
      descriptionAr:
        "مشروعنا الإنشائي النهائي هو ملكنا. مع كل يوم من العمليات، نضع الأساس لتقديم تعريف حديث للغاية لصناعة المقاولات الإدارية؛ واحد مصمم بالكامل للعملاء، موجه نحو النتائج، ويوفر حلولاً مخصصة لكل عميل، بغض النظر عن حجم المشروع. مع AMG، لا يوجد مشروع كبير جداً أو صغير جداً",
      image: "assets/images/mission.jpg",
    },
    vision: {
      titleEn: "AMG Foresight",
      titleAr: "رؤيا AMG",
      descriptionEn:
        "We aspire to become lifelong construction partners for every client we do business with, including the customer, design professionals, sub-contractors, and tradesmen, through our sustained provision of trailblazing engineering and financial solutions and services. By heightening our capacities and capabilities, we aim to showcase the power of contracting engineers when it comes to applying technical expertise to practical problems, not only in Egypt but in the MENA region at large.",
      descriptionAr:
        "نطمح لأن نصبح شركاء بناء مدى الحياة لكل عميل نتعامل معه، بما في ذلك العميل والمتخصصون في التصميم والمقاولون من الباطن والحرفيون، من خلال توفيرنا المستمر للحل الهندسي والمالي والخدمات الرائدة. من خلال تحسين قدراتنا وإمكانياتنا، نسعى لعرض قوة مهندسي المقاولات عندما يتعلق الأمر بتطبيق الخبرة الفنية على المشاكل العملية، ليس فقط في مصر بل في منطقة الشرق الأوسط وشمال أفريقيا بأسرها.",
      image: "assets/images/vision.jpg",
    },
  };

  function getMissionVisionData() {
    const stored = localStorage.getItem("amg_missionVision");
    return stored ? JSON.parse(stored) : defaultData;
  }

  function loadMissionVision() {
    const data = getMissionVisionData();
    const lang = document.documentElement.getAttribute("data-lang") || "en";

    // Update Mission Page
    const missionTitle = document.getElementById("mission-title");
    const missionDesc = document.getElementById("mission-desc");
    const missionImg = document.getElementById("mission-img");

    if (missionTitle) {
      missionTitle.textContent = lang === "ar" ? data.mission.titleAr : data.mission.titleEn;
    }
    if (missionDesc) {
      missionDesc.textContent = lang === "ar" ? data.mission.descriptionAr : data.mission.descriptionEn;
    }
    if (missionImg && data.mission.image) {
      missionImg.src = data.mission.image;
    }

    // Update Vision Page
    const visionTitle = document.getElementById("vision-title");
    const visionDesc = document.getElementById("vision-desc");
    const visionImg = document.getElementById("vision-img");

    if (visionTitle) {
      visionTitle.textContent = lang === "ar" ? data.vision.titleAr : data.vision.titleEn;
    }
    if (visionDesc) {
      visionDesc.textContent = lang === "ar" ? data.vision.descriptionAr : data.vision.descriptionEn;
    }
    if (visionImg && data.vision.image) {
      visionImg.src = data.vision.image;
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
