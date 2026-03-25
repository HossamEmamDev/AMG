/* ===== DATA.JS — Default Site Data ===== */
/* Initializes localStorage with default content if not set */

const DEFAULT_DATA = {
  // ── Site Settings ──
  siteSettings: {
    logo: "assets/images/amg-logo.jpeg",
    favicon: "assets/images/amg-logo.jpeg",
    siteName: "AMG Main Contracting",
    defaultLang: "auto", // 'auto' | 'en' | 'ar'
    primaryColor: "#B8860B",
    secondaryColor: "#2B2B2B",
    bgColor: "#FAFAF8",
    fontEn: "Barlow",
    fontAr: "Cairo",
    heroVideo: "",
    heroTitle_en: "Building Tomorrow's World",
    heroTitle_ar: "نبني مستقبل الغد",
    heroSubtitle_en:
      "AMG Main Contracting Group delivers premium construction, civil, and electromechanical solutions across Egypt and Saudi Arabia.",
    heroSubtitle_ar:
      "مجموعة AMG للمقاولات الرئيسية تقدم حلول إنشائية ومدنية وكهروميكانيكية متميزة في مصر والمملكة العربية السعودية.",
    navBg: "#fbfbfb",
    navText: "#1A1A1A",
    contactEmail: "info@amgcontracting.com",
    hrEmail: "hr@amgcontracting.com",
    phone: "+20 100 000 0000",
    address_en: "Cairo, Egypt & Riyadh, KSA",
    address_ar: "القاهرة، مصر والرياض، المملكة العربية السعودية",
    footerDesc_en:
      "Building a better world through innovation, quality, and commitment.",
    footerDesc_ar: "بناء عالم أفضل من خلال الابتكار والجودة والالتزام.",
    footerCopy_en: "© 2025 AMG Main Contracting. All Rights Reserved.",
    footerCopy_ar: "© 2025 AMG للمقاولات الرئيسية. جميع الحقوق محفوظة.",
    socialLinks: [
      { icon: "fab fa-facebook", url: "#", label: "Facebook" },
      { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
      { icon: "fab fa-instagram", url: "#", label: "Instagram" },
      {
        icon: "fab fa-whatsapp",
        url: "https://wa.me/011124711154",
        label: "WhatsApp",
      },
      { icon: "fab fa-youtube", url: "#", label: "YouTube" },
    ],
  },

  // ── Sections Visibility ──
  sections: {
    "our-group": { visible: true, inNav: true },
    services: { visible: true, inNav: true },
    projects: { visible: true, inNav: true },
    careers: { visible: true, inNav: true },
    partners: { visible: true, inNav: true },
    contact: { visible: true, inNav: true },
  },

  missionVision: {
    intro: {
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
  },

  // ── Services ──
  services: [
    {
      id: 1,
      title_en: "Civil Construction",
      title_ar: "الإنشاء المدني",
      brief_en:
        "Large-scale civil engineering including residential complexes, commercial towers, and public facilities.",
      brief_ar:
        "هندسة مدنية واسعة النطاق تشمل المجمعات السكنية والأبراج التجارية والمرافق العامة.",
      icon: "fas fa-building",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75&fit=crop",
    },
    {
      id: 2,
      title_en: "Electromechanical (MEP)",
      title_ar: "كهروميكانيك (MEP)",
      brief_en:
        "Complete MEP solutions: HVAC, plumbing, fire systems, and electrical installations.",
      brief_ar: "حلول MEP متكاملة: تكييف وسباكة وأنظمة حريق وتركيبات كهربائية.",
      icon: "fas fa-bolt",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=75&fit=crop",
    },
    {
      id: 3,
      title_en: "Infrastructure",
      title_ar: "البنية التحتية",
      brief_en:
        "Roads, bridges, utilities, and urban infrastructure development.",
      brief_ar: "الطرق والجسور والمرافق وتطوير البنية التحتية الحضرية.",
      icon: "fas fa-road",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=75&fit=crop",
    },
    {
      id: 4,
      title_en: "Interior Finishing",
      title_ar: "التشطيبات الداخلية",
      brief_en:
        "Premium interior fit-out, finishing, and design execution for all project types.",
      brief_ar:
        "تجهيز داخلي متميز وتشطيبات وتنفيذ تصميمي لجميع أنواع المشاريع.",
      icon: "fas fa-paint-roller",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75&fit=crop",
    },
    {
      id: 5,
      title_en: "Project Management",
      title_ar: "إدارة المشاريع",
      brief_en:
        "End-to-end project management, supervision, and quality control services.",
      brief_ar:
        "إدارة المشاريع من البداية إلى النهاية والإشراف وخدمات ضبط الجودة.",
      icon: "fas fa-chart-gantt",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=75&fit=crop",
    },
    {
      id: 6,
      title_en: "Industrial Facilities",
      title_ar: "المنشآت الصناعية",
      brief_en:
        "Construction and fit-out of factories, warehouses, and industrial zones.",
      brief_ar: "إنشاء وتجهيز المصانع والمستودعات والمناطق الصناعية.",
      icon: "fas fa-industry",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=75&fit=crop",
    },
    {
      id: 7,
      title_en: "Renovation",
      title_ar: "الترميم والتجديد",
      brief_en:
        "Restoration, renovation, and upgrade of existing structures and facades.",
      brief_ar: "ترميم وتجديد وتطوير الهياكل والواجهات القائمة.",
      icon: "fas fa-hammer",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=75&fit=crop",
    },
    {
      id: 8,
      title_en: "Consultancy",
      title_ar: "الاستشارات الهندسية",
      brief_en:
        "Technical consultancy, feasibility studies, and engineering supervision.",
      brief_ar: "الاستشارات التقنية ودراسات الجدوى والإشراف الهندسي.",
      icon: "fas fa-drafting-compass",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75&fit=crop",
    },
  ],

  // ── Projects — image + images[] for gallery ──
  projects: [
    {
      id: 1,
      name_en: "Al Nakheel Towers",
      name_ar: "أبراج النخيل",
      category_en: "Residential",
      category_ar: "سكني",
      location_en: "Riyadh, KSA",
      location_ar: "الرياض، المملكة العربية السعودية",
      brief_en:
        "A landmark twin-tower residential complex featuring 320 luxury units with premium amenities and smart home technology.",
      brief_ar:
        "مجمع سكني بارز يتكون من برجين توأمين يضمان 320 وحدة فاخرة مع مرافق متميزة وتكنولوجيا المنزل الذكي.",
      progress: 100,
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop",
      ],
    },
    {
      id: 2,
      name_en: "New Cairo Commercial Hub",
      name_ar: "مركز القاهرة الجديدة التجاري",
      category_en: "Commercial",
      category_ar: "تجاري",
      location_en: "Cairo, Egypt",
      location_ar: "القاهرة، مصر",
      brief_en:
        "A mixed-use commercial development housing offices, retail, and entertainment across 85,000 sqm.",
      brief_ar:
        "تطوير تجاري متعدد الاستخدامات يضم مكاتب ومتاجر وترفيه على مساحة 85,000 متر مربع.",
      progress: 85,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1421986527537-888d998adb74?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80&fit=crop",
      ],
    },
    {
      id: 3,
      name_en: "Jeddah Industrial Complex",
      name_ar: "المجمع الصناعي بجدة",
      category_en: "Industrial",
      category_ar: "صناعي",
      location_en: "Jeddah, KSA",
      location_ar: "جدة، المملكة العربية السعودية",
      brief_en:
        "State-of-the-art manufacturing and logistics facility serving the Red Sea industrial corridor.",
      brief_ar: "منشأة تصنيع ولوجستيات متطورة تخدم الممر الصناعي للبحر الأحمر.",
      progress: 70,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80&fit=crop",
      ],
    },
    {
      id: 4,
      name_en: "Smart Village MEP",
      name_ar: "مشروع MEP القرية الذكية",
      category_en: "MEP",
      category_ar: "كهروميكانيك",
      location_en: "6th October, Egypt",
      location_ar: "السادس من أكتوبر، مصر",
      brief_en:
        "Complete electromechanical systems for the Smart Village technology park expansion.",
      brief_ar:
        "أنظمة كهروميكانيكية متكاملة لتوسعة حديقة تكنولوجيا القرية الذكية.",
      progress: 92,
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&fit=crop",
      ],
    },
    {
      id: 5,
      name_en: "Riyadh Metro Station",
      name_ar: "محطة مترو الرياض",
      category_en: "Infrastructure",
      category_ar: "بنية تحتية",
      location_en: "Riyadh, KSA",
      location_ar: "الرياض، المملكة العربية السعودية",
      brief_en:
        "Civil works and finishing for two metro stations on Riyadh Metro Line 4.",
      brief_ar: "أعمال مدنية وتشطيبات لمحطتين على خط مترو الرياض رقم 4.",
      progress: 100,
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fit=crop",
      ],
    },
  ],

  // ── Careers ──
  careers: [
    {
      id: 1,
      title_en: "Senior Civil Engineer",
      title_ar: "مهندس مدني أول",
      type: "full-time",
      location_en: "Cairo, Egypt",
      location_ar: "القاهرة، مصر",
      desc_en:
        "Lead structural design and site supervision for major construction projects across Egypt.",
      desc_ar:
        "قيادة التصميم الإنشائي والإشراف الميداني للمشاريع الإنشائية الكبرى في مصر.",
      requirements: [
        "B.Sc. Civil Engineering",
        "8+ years experience",
        "AutoCAD & Revit",
        "PMP certified preferred",
      ],
      active: true,
    },
    {
      id: 2,
      title_en: "MEP Project Manager",
      title_ar: "مدير مشروع كهروميكانيك",
      type: "full-time",
      location_en: "Riyadh, KSA",
      location_ar: "الرياض، المملكة العربية السعودية",
      desc_en:
        "Oversee MEP installation, commissioning, and coordination for large-scale commercial projects.",
      desc_ar:
        "الإشراف على تركيب وتشغيل وتنسيق أعمال MEP للمشاريع التجارية الكبرى.",
      requirements: [
        "B.Sc. Mechanical or Electrical",
        "10+ years MEP",
        "Experience in Saudi projects",
        "English & Arabic",
      ],
      active: true,
    },
    {
      id: 3,
      title_en: "Interior Design Lead",
      title_ar: "قائد التصميم الداخلي",
      type: "full-time",
      location_en: "Cairo, Egypt",
      location_ar: "القاهرة، مصر",
      desc_en:
        "Develop innovative interior design concepts and oversee execution for high-end residential & commercial spaces.",
      desc_ar:
        "تطوير مفاهيم التصميم الداخلي المبتكرة والإشراف على التنفيذ للمساحات السكنية والتجارية الراقية.",
      requirements: [
        "B.Sc. Interior Design",
        "6+ years experience",
        "3DS Max & SketchUp",
        "Strong portfolio",
      ],
      active: true,
    },
  ],

  // ── Partners & Testimonials ──
  partners: [
    {
      id: 1,
      name: "Orascom Construction",
      logo: "https://logo.clearbit.com/orascomconstruction.com",
    },
    { id: 2, name: "BESIX Group", logo: "https://logo.clearbit.com/besix.com" },
    { id: 3, name: "AECOM", logo: "https://logo.clearbit.com/aecom.com" },
    {
      id: 4,
      name: "Parsons Corporation",
      logo: "https://logo.clearbit.com/parsons.com",
    },
    { id: 5, name: "Dar Al Riyadh", logo: "https://logo.clearbit.com/dar.com" },
    { id: 6, name: "WSP Global", logo: "https://logo.clearbit.com/wsp.com" },
    {
      id: 7,
      name: "Hill International",
      logo: "https://logo.clearbit.com/hillintl.com",
    },
    {
      id: 8,
      name: "Turner Construction",
      logo: "https://logo.clearbit.com/turnerconstruction.com",
    },
  ],
  // ── Group Companies ──
  groupCompanies: [
    {
      id: 1,
      name_en: "Amjaad Construction",
      name_ar: "أمجاد للإنشاء",
      location_en: "Saudi Arabia",
      location_ar: "المملكة العربية السعودية",
      desc_en:
        "A leading construction force in the Kingdom of Saudi Arabia, specializing in large-scale residential, commercial, and infrastructure projects with a commitment to Vision 2030.",
      desc_ar:
        "قوة إنشائية رائدة في المملكة العربية السعودية، متخصصة في المشاريع السكنية والتجارية والبنية التحتية الكبيرة بالتزام برؤية 2030.",
      url: "https://amjaad-sa.com/",
      image: "assets/images/amjaad.avif",
    },
    {
      id: 2,
      name_en: "Electrocivic",
      name_ar: "إلكتروسيفيك",
      location_en: "Egypt",
      location_ar: "مصر",
      desc_en:
        "Egypt's premier electromechanical and civil contracting company, delivering integrated MEP solutions, industrial facilities, and advanced infrastructure.",
      desc_ar:
        "شركة مصر الرائدة في المقاولات الكهروميكانيكية والمدنية، تقدم حلول MEP المتكاملة والمنشآت الصناعية والبنية التحتية المتقدمة.",
      url: "https://electrocivic.com/",
      image: "assets/images/electrocivic.avif",
    },
  ],

  testimonials: [
    {
      id: 1,
      text_en:
        "AMG delivered our residential complex on time and to the highest standards. Their team is truly professional and dedicated.",
      text_ar:
        "AMG سلّمت مجمعنا السكني في الوقت المحدد وبأعلى المعايير. فريقهم محترف ومتفانٍ حقاً.",
      author: "Eng. Khalid Al-Rashid",
      company: "Saudi Development Corp",
      stars: 5,
    },
    {
      id: 2,
      text_en:
        "The MEP systems installed by Electrocivic have been running flawlessly for 2 years. Excellent engineering and commissioning.",
      text_ar:
        "أنظمة MEP التي نفذتها إلكتروسيفيك تعمل بشكل مثالي منذ عامين. هندسة وتشغيل ممتازين.",
      author: "Eng. Ahmed Mostafa",
      company: "Cairo Tech Park",
      stars: 5,
    },
    {
      id: 3,
      text_en:
        "AMG's project management is second to none. They handled our complex industrial project with great precision.",
      text_ar:
        "إدارة مشاريع AMG لا مثيل لها. تعاملوا مع مشروعنا الصناعي المعقد بدقة عالية.",
      author: "Mr. Hassan Al-Qahtani",
      company: "Jeddah Industrial Co.",
      stars: 5,
    },
  ],
};

// ── Initialize Storage ──
function initData() {
  if (!localStorage.getItem("amg_initialized")) {
    Object.keys(DEFAULT_DATA).forEach((key) => {
      if (!localStorage.getItem("amg_" + key)) {
        localStorage.setItem("amg_" + key, JSON.stringify(DEFAULT_DATA[key]));
      }
    });
    localStorage.setItem("amg_initialized", "1");
  }
}

// ── Get / Set helpers ──
function getData(key) {
  try {
    const raw = localStorage.getItem("amg_" + key);
    return raw ? JSON.parse(raw) : DEFAULT_DATA[key];
  } catch (e) {
    return DEFAULT_DATA[key];
  }
}

function setData(key, value) {
  localStorage.setItem("amg_" + key, JSON.stringify(value));
}

// Run on load
initData();

// Inject Google Font dynamically
function _loadGoogleFont(name) {
  if (
    !name ||
    name === "Barlow" ||
    name === "Cairo" ||
    name === "Playfair Display"
  )
    return; // already loaded
  const id = "gf-" + name.replace(/\s+/g, "-");
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@300;400;500;600;700;900&display=swap`;
  document.head.appendChild(link);
}

// Apply dynamic CSS variables from settings
function applySettings() {
  const s = getData("siteSettings");
  const root = document.documentElement;

  // Colors
  root.style.setProperty("--color-primary", s.primaryColor || "#B8860B");
  root.style.setProperty("--color-secondary", s.secondaryColor || "#2B2B2B");
  root.style.setProperty("--color-bg", s.bgColor || "#FAFAF8");
  // Navbar colors
  const _navBg = s.navBg || "#fbfbfb";
  const _navText = s.navText || "#1A1A1A";
  const _hexRgba = (hex, a) => {
    try {
      const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      return isNaN(r) ? `rgba(251,251,251,${a})` : `rgba(${r},${g},${b},${a})`;
    } catch (e) {
      return `rgba(251,251,251,${a})`;
    }
  };
  root.style.setProperty("--nav-bg", _hexRgba(_navBg, 0.97));
  root.style.setProperty("--nav-bg-scrolled", _hexRgba(_navBg, 0.99));
  root.style.setProperty("--nav-text-color", _navText);

  // Fonts — update the source variables; html[data-lang] rules pick them up automatically
  // Dashboard stores fontEn (body) and fontAr (body). Heading font changes separately.
  if (s.fontEn) {
    root.style.setProperty("--font-body-en", `'${s.fontEn}', Georgia, serif`);
    // Reload the computed var used by current lang if EN is active
    if (root.getAttribute("data-lang") === "en") {
      root.style.setProperty("--font-body", `'${s.fontEn}', Georgia, serif`);
    }
  }
  if (s.fontAr) {
    root.style.setProperty("--font-body-ar", `'${s.fontAr}', Georgia, serif`);
    root.style.setProperty(
      "--font-heading-ar",
      `'${s.fontAr}', Georgia, serif`,
    );
    if (root.getAttribute("data-lang") === "ar") {
      root.style.setProperty("--font-body", `'${s.fontAr}', Georgia, serif`);
      root.style.setProperty("--font-heading", `'${s.fontAr}', Georgia, serif`);
    }
  }
  if (s.fontHeadingEn) {
    root.style.setProperty(
      "--font-heading-en",
      `'${s.fontHeadingEn}', Georgia, serif`,
    );
    if (root.getAttribute("data-lang") === "en") {
      root.style.setProperty(
        "--font-heading",
        `'${s.fontHeadingEn}', Georgia, serif`,
      );
    }
  }
  // Dynamically inject Google Fonts link if needed
  _loadGoogleFont(s.fontEn || "Barlow");
  _loadGoogleFont(s.fontAr || "Cairo");

  // Logo
  document
    .querySelectorAll("#site-logo, #footer-logo, #dash-logo")
    .forEach((el) => {
      if (el && s.logo) el.src = s.logo;
    });

  // Favicon
  const fav = document.getElementById("favicon-link");
  if (fav && s.favicon) fav.href = s.favicon;

  // Social links in footer
  renderFooterSocial();

  // Contact info
  const lang = root.getAttribute("data-lang") || "en";
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt("contact-phone", s.phone || "");
  setTxt("contact-email-display", s.contactEmail || "");
  setTxt("footer-email", s.contactEmail || "");
  setTxt("footer-phone", s.phone || "");
  setTxt("footer-email", s.contactEmail || "");

  const addr = s["address_" + lang] || s.address_en || "";
  setTxt("contact-address", addr);
  setTxt("footer-address", addr);
  setTxt("footer-desc", s["footerDesc_" + lang] || s.footerDesc_en || "");
  setTxt("footer-copy", s["footerCopy_" + lang] || s.footerCopy_en || "");

  // Hero video
  const vid = document.getElementById("hero-video");
  if (vid && s.heroVideo) {
    const src = vid.querySelector("source");
    if (src) {
      src.src = s.heroVideo;
      vid.load();
    }
  }
}

function renderFooterSocial() {
  const s = getData("siteSettings");
  const el = document.getElementById("footer-social");
  if (!el) return;
  el.innerHTML = (s.socialLinks || [])
    .map(
      (sl) =>
        `<a href="${sl.url}" target="_blank" title="${sl.label}"><i class="${sl.icon}"></i></a>`,
    )
    .join("");
}

// Apply section visibility
function applySectionVisibility() {
  const sections = getData("sections");
  Object.entries(sections).forEach(([id, cfg]) => {
    const el = document.getElementById(id);
    if (el) el.style.display = cfg.visible ? "" : "none";
    // Nav link
    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navLink) navLink.parentElement.style.display = cfg.inNav ? "" : "none";
  });
}

function renderGroup() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const companies = getData("groupCompanies") || [];
  const grid = document.getElementById("group-grid");
  if (!grid) return;

  const visitLabel = lang === "ar" ? "زيارة الموقع" : "Visit Website";

  grid.innerHTML = companies
    .map(
      (c) => `
    <div class="group-card reveal-left">
      <div class="group-card-image">
        <img src="${c.image || ""}" alt="${c["name_" + lang] || c.name_en}"
             onerror="this.style.background='#1a1a1a';this.style.display='block'" loading="lazy" />
        <div class="group-card-overlay">
          <a href="${c.url}" target="_blank" class="btn btn-primary">${visitLabel}</a>
        </div>
      </div>
      <div class="group-card-body">
        <div class="group-card-flag"><i class="fa fa-location-dot"></i> ${c["location_" + lang] || c.location_en}</div>
        <h3>${c["name_" + lang] || c.name_en}</h3>
        <p>${c["desc_" + lang] || c.desc_en}</p>
        <a href="${c.url}" target="_blank" class="group-link">${c.url.replace("https://", "").replace("/", "")}<i class="fa fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>`,
    )
    .join("");

  if (typeof setupScrollReveal === "function")
    setTimeout(setupScrollReveal, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  // Try to load settings from server first
  fetch("php/load_settings.php")
    .then((r) => r.json())
    .then((serverData) => {
      if (serverData) {
        // Server has data — save it to localStorage then apply
        Object.keys(serverData).forEach((key) => {
          localStorage.setItem("amg_" + key, JSON.stringify(serverData[key]));
        });
      }
    })
    .catch(() => {}) // if fetch fails, fall back to localStorage silently
    .finally(() => {
      applySettings();
      applySectionVisibility();
      renderGroup();
    });
});
