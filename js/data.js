/* ===== DATA.JS — Default Site Data ===== */
/* Initializes localStorage with default content if not set */

const DEFAULT_DATA = {
  // ── Site Settings ──
  siteSettings: {
    logo: "assets/images/amg-logo.jpeg",
    favicon: "assets/images/amg-logo.jpeg",
    siteName: "AMG Main Contracting",
    defaultLang: "auto", // 'auto' | 'en' | 'ar'
    primaryColor: "#C99664",
    secondaryColor: "#2B2B2B",
    bgColor: "#FAFAF8",
    fontEn: "Manrope",
    fontAr: "IBM Plex Sans Arabic",
    fontHeadingEn: "Oswald",
    fontHeadingAr: "IBM Plex Sans Arabic",
    heroVideo: "",
    heroTitle_en: "We Build|Iconic Landmarks|With Precision & Integrity",
    heroTitle_ar: "نحن نبني|معالم أيقونية|بدقة ومصداقية",
    heroSubtitle_en:
      "AMG Main Contracting Group delivers premium construction, civil, and electromechanical solutions across Egypt and Saudi Arabia.",
    heroSubtitle_ar:
      "مجموعة AMG للمقاولات الرئيسية تقدم حلول إنشائية ومدنية وكهروميكانيكية متميزة في مصر والمملكة العربية السعودية.",
    heroStats: [
      { value: "250", suffix: "+", label_en: "Projects", label_ar: "مشروع" },
      { value: "15", suffix: "+", label_en: "Years", label_ar: "سنة" },
      { value: "2", suffix: "", label_en: "Countries", label_ar: "دول" },
      { value: "500", suffix: "+", label_en: "Experts", label_ar: "خبير" },
    ],
    formRequirements: {
      contact: {
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
        attachment: false,
      },
      career: {
        name: true,
        email: true,
        phone: true,
        linkedin: false,
        education: false,
        experience: true,
        cv: false,
        message: false,
      },
      generalCv: {
        name: true,
        email: true,
        phone: true,
        linkedin: false,
        education: false,
        experience: false,
        cv: true,
        message: false,
      },
    },
    navBg: "#fbfbfb",
    navText: "#1A1A1A",
    contactEmail: "info@amgcontracting.com",
    hrEmail: "hr@amgcontracting.com",
    phone: "+20 100 000 0000",
    manualCompanyProfile: "",
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

  seoSettings: {
    defaultTitle: "AMG Main Contracting Group | Premium Construction in Egypt & Saudi Arabia",
    defaultTitle_ar: "مجموعة AMG للمقاولات الرئيسية | مقاولات وإنشاءات متميزة في مصر والسعودية",
    defaultDescription:
      "AMG Main Contracting Group delivers premium construction, civil, MEP, and infrastructure solutions across Egypt and Saudi Arabia.",
    defaultDescription_ar:
      "تقدم مجموعة AMG للمقاولات الرئيسية حلولاً متميزة في الإنشاءات والأعمال المدنية والكهروميكانيكا والبنية التحتية في مصر والمملكة العربية السعودية.",
    defaultKeywords:
      "AMG Main Contracting, construction company Egypt, construction company Saudi Arabia, MEP contractor, infrastructure contractor, premium contracting",
    defaultKeywords_ar:
      "AMG للمقاولات الرئيسية، شركة مقاولات مصر، شركة مقاولات السعودية، مقاول كهروميكانيكا، مقاول بنية تحتية، مقاولات متميزة",
    ogImage: "assets/images/amg-logo.jpeg",
    robots: "index, follow",
    canonicalBase: "",
    googleSiteVerification: "",
    bingSiteVerification: "",
    googleAnalyticsId: "",
    googleTagManagerId: "",
    schemaType: "Organization",
    schemaName: "AMG Main Contracting Group",
    schemaName_ar: "مجموعة AMG للمقاولات الرئيسية",
    homeTitle: "AMG Main Contracting Group | Premium Construction in Egypt & Saudi Arabia",
    homeTitle_ar: "مجموعة AMG للمقاولات الرئيسية | مقاولات وإنشاءات متميزة في مصر والسعودية",
    homeDescription:
      "Explore AMG Main Contracting Group, delivering premium construction, MEP, infrastructure, and fit-out projects across Egypt and Saudi Arabia.",
    homeDescription_ar:
      "اكتشف مجموعة AMG للمقاولات الرئيسية التي تقدم مشاريع متميزة في الإنشاءات وMEP والبنية التحتية والتشطيبات في مصر والمملكة العربية السعودية.",
    homeKeywords:
      "AMG Main Contracting, premium construction Egypt, premium construction Saudi Arabia, MEP Egypt, MEP Saudi Arabia, contracting group",
    homeKeywords_ar:
      "AMG للمقاولات الرئيسية، مقاولات متميزة مصر، مقاولات متميزة السعودية، MEP مصر، MEP السعودية، مجموعة مقاولات",
    careersTitle: "Careers at AMG Main Contracting Group | Engineering & Construction Opportunities",
    careersTitle_ar: "وظائف مجموعة AMG للمقاولات الرئيسية | فرص هندسية وإنشائية",
    careersDescription:
      "Discover career opportunities at AMG Main Contracting Group and submit your CV to join premium construction, engineering, and project delivery teams.",
    careersDescription_ar:
      "اكتشف الفرص الوظيفية في مجموعة AMG للمقاولات الرئيسية وأرسل سيرتك الذاتية للانضمام إلى فرق الإنشاءات والهندسة وإدارة التنفيذ.",
    careersKeywords:
      "construction jobs Egypt, construction jobs Saudi Arabia, engineering careers, AMG careers, MEP jobs, civil engineer jobs",
    careersKeywords_ar:
      "وظائف مقاولات مصر، وظائف مقاولات السعودية، وظائف هندسية، وظائف AMG، وظائف MEP، وظائف مهندس مدني",
  },

  // ── Sections Visibility ──
  sections: {
    "our-group": { visible: true, inNav: true },
    "mission-vision": { visible: true, inNav: true },
    services: { visible: true, inNav: true },
    projects: { visible: true, inNav: true },
    careers: { visible: true, inNav: true },
    partners: { visible: true, inNav: true },
    contact: { visible: true, inNav: true },
  },
  sectionOrder: [
    "our-group",
    "mission-vision",
    "services",
    "projects",
    "careers",
    "partners",
    "contact",
  ],

  missionVision: {
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

  projectCompanies: [
    {
      id: 1,
      name_en: "AMG Main Contracting",
      name_ar: "AMG للمقاولات الرئيسية",
      logo: "assets/images/amg-logo.jpeg",
    },
    {
      id: 2,
      name_en: "Amjaad Construction",
      name_ar: "أمجاد للإنشاءات",
      logo: "assets/images/amjaad.avif",
    },
    {
      id: 3,
      name_en: "Electrocivic",
      name_ar: "إلكتروسيفيك",
      logo: "assets/images/electrocivic.avif",
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
      company_id: 2,
      implementing_company_en: "Amjaad Construction",
      implementing_company_ar: "أمجاد للإنشاءات",
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
      company_id: 3,
      implementing_company_en: "Electrocivic",
      implementing_company_ar: "إلكتروسيفيك",
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
      company_id: 2,
      implementing_company_en: "Amjaad Construction",
      implementing_company_ar: "أمجاد للإنشاءات",
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
      company_id: 3,
      implementing_company_en: "Electrocivic",
      implementing_company_ar: "إلكتروسيفيك",
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
      company_id: 2,
      implementing_company_en: "Amjaad Construction",
      implementing_company_ar: "أمجاد للإنشاءات",
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
    { id: 1, name: "Arby's", logo: "assets/images/partner/arbys.avif" },
    { id: 2, name: "Baja", logo: "assets/images/partner/baja.png" },
    { id: 3, name: "BLBN", logo: "assets/images/partner/blbn.avif" },
    { id: 4, name: "Coffee", logo: "assets/images/partner/coffe.avif" },
    { id: 5, name: "Danken", logo: "assets/images/partner/danken.avif" },
    { id: 6, name: "Ibrahem", logo: "assets/images/partner/ibrahem.avif" },
    { id: 7, name: "K", logo: "assets/images/partner/k.avif" },
    { id: 8, name: "Print", logo: "assets/images/partner/print.avif" },
    { id: 9, name: "Samsung", logo: "assets/images/partner/samsung_logo.svg-AGBzqaB3BQfzPKg0.avif" },
    { id: 10, name: "Semsema", logo: "assets/images/partner/semsema.avif" },
    { id: 11, name: "White", logo: "assets/images/partner/white.avif" },
    { id: 12, name: "Zed", logo: "assets/images/partner/zed.avif" },
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
      profile: "",
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
      profile: "",
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

function ensureDefaultKeys() {
  Object.keys(DEFAULT_DATA).forEach((key) => {
    if (!localStorage.getItem("amg_" + key)) {
      localStorage.setItem("amg_" + key, JSON.stringify(DEFAULT_DATA[key]));
    }
  });
}

function cleanupLegacyGroupCompanies() {
  const companies = getData("groupCompanies") || [];
  const cleaned = companies.map(({ url, ...company }) => ({
    ...company,
    profile: company.profile || "",
  }));
  setData("groupCompanies", cleaned);
}

function migrateLegacyBranding() {
  const settings = getData("siteSettings") || {};
  if (settings.primaryColor === "#B8860B") {
    settings.primaryColor = "#C99664";
  }
  if (typeof settings.manualCompanyProfile !== "string") {
    settings.manualCompanyProfile = "";
  }
  if (settings.heroTitle_en === "Building Tomorrow's World") {
    settings.heroTitle_en = DEFAULT_DATA.siteSettings.heroTitle_en;
  }
  if (settings.heroTitle_ar === "نبني مستقبل الغد") {
    settings.heroTitle_ar = DEFAULT_DATA.siteSettings.heroTitle_ar;
  }
  if (Object.prototype.hasOwnProperty.call(settings, "companyProfileMode")) {
    delete settings.companyProfileMode;
  }
  if (!Array.isArray(settings.heroStats) || !settings.heroStats.length) {
    settings.heroStats = DEFAULT_DATA.siteSettings.heroStats;
  }
  if (!settings.formRequirements || typeof settings.formRequirements !== "object") {
    settings.formRequirements = DEFAULT_DATA.siteSettings.formRequirements;
  } else {
    settings.formRequirements = {
      contact: {
        ...DEFAULT_DATA.siteSettings.formRequirements.contact,
        ...(settings.formRequirements.contact || {}),
      },
      career: {
        ...DEFAULT_DATA.siteSettings.formRequirements.career,
        ...(settings.formRequirements.career || {}),
      },
      generalCv: {
        ...DEFAULT_DATA.siteSettings.formRequirements.generalCv,
        ...(settings.formRequirements.generalCv || {}),
      },
    };
  }
  setData("siteSettings", settings);

  const seo = getData("seoSettings") || {};
  setData("seoSettings", {
    ...DEFAULT_DATA.seoSettings,
    ...seo,
  });

  const sectionOrder = getData("sectionOrder");
  if (!Array.isArray(sectionOrder) || !sectionOrder.length) {
    setData("sectionOrder", DEFAULT_DATA.sectionOrder);
  }
}

function migrateProjectCompanyAssignments() {
  const projects = getData("projects") || [];
  const companies = getProjectCompanies();
  let changed = false;

  const normalized = projects.map((project) => {
    if (project.company_id && getProjectCompanyById(project.company_id)) {
      return project;
    }

    const match = companies.find((company) =>
      [company.name_en, company.name_ar].filter(Boolean).some((name) =>
        name === project.implementing_company_en || name === project.implementing_company_ar,
      ),
    );

    if (!match) return project;
    changed = true;
    return {
      ...project,
      company_id: match.id,
      implementing_company_en: match.name_en || project.implementing_company_en || "",
      implementing_company_ar: match.name_ar || project.implementing_company_ar || "",
      company_logo: match.logo || project.company_logo || "",
    };
  });

  if (changed) setData("projects", normalized);
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
ensureDefaultKeys();
cleanupLegacyGroupCompanies();
migrateLegacyBranding();

function getProjectCompanies() {
  return getData("projectCompanies") || [];
}

function getProjectCompanyById(id) {
  if (!id) return null;
  return getProjectCompanies().find((company) => String(company.id) === String(id)) || null;
}

function resolveProjectCompany(project, lang) {
  let company = getProjectCompanyById(project?.company_id);
  if (!company && project) {
    company = getProjectCompanies().find((item) =>
      [item.name_en, item.name_ar].filter(Boolean).some((name) =>
        name === project.implementing_company_en || name === project.implementing_company_ar,
      ),
    ) || null;
  }
  if (company) {
    return {
      id: company.id,
      name: company["name_" + lang] || company.name_en || "",
      name_en: company.name_en || "",
      name_ar: company.name_ar || "",
      logo: company.logo || "",
    };
  }

  return {
    id: null,
    name: project?.["implementing_company_" + lang] || project?.implementing_company_en || "",
    name_en: project?.implementing_company_en || "",
    name_ar: project?.implementing_company_ar || "",
    logo: project?.company_logo || "",
  };
}
migrateProjectCompanyAssignments();

// Inject Google Font dynamically
function _loadGoogleFont(name) {
  if (
    !name ||
    name === "Barlow" ||
    name === "Barlow Condensed" ||
    name === "Cairo" ||
    name === "Tajawal" ||
    name === "Manrope" ||
    name === "Oswald" ||
    name === "IBM Plex Sans Arabic" ||
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
  root.style.setProperty("--color-primary", s.primaryColor || "#C99664");
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
  if (s.fontEn) {
    root.style.setProperty("--font-body-en", `'${s.fontEn}', Georgia, serif`);
    // Reload the computed var used by current lang if EN is active
    if (root.getAttribute("data-lang") === "en") {
      root.style.setProperty("--font-body", `'${s.fontEn}', Georgia, serif`);
    }
  }
  if (s.fontAr) {
    root.style.setProperty("--font-body-ar", `'${s.fontAr}', Georgia, serif`);
    if (!s.fontHeadingAr) {
      root.style.setProperty("--font-heading-ar", `'${s.fontAr}', Georgia, serif`);
    }
    if (root.getAttribute("data-lang") === "ar") {
      root.style.setProperty("--font-body", `'${s.fontAr}', Georgia, serif`);
      if (!s.fontHeadingAr) {
        root.style.setProperty("--font-heading", `'${s.fontAr}', Georgia, serif`);
      }
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
  if (s.fontHeadingAr) {
    root.style.setProperty(
      "--font-heading-ar",
      `'${s.fontHeadingAr}', Georgia, serif`,
    );
    if (root.getAttribute("data-lang") === "ar") {
      root.style.setProperty(
        "--font-heading",
        `'${s.fontHeadingAr}', Georgia, serif`,
      );
    }
  }
  // Dynamically inject Google Fonts link if needed
  _loadGoogleFont(s.fontEn || "Manrope");
  _loadGoogleFont(s.fontAr || "IBM Plex Sans Arabic");
  _loadGoogleFont(s.fontHeadingEn || "Oswald");
  _loadGoogleFont(s.fontHeadingAr || s.fontAr || "IBM Plex Sans Arabic");

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

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    const rawTitle = s["heroTitle_" + lang] || s.heroTitle_en || "";
    const parts = rawTitle.split("|").map((part) => part.trim()).filter(Boolean);
    const heroParts = parts.length === 3
      ? parts
      : (lang === "ar"
          ? ["نحن نبني", "معالم أيقونية", "بدقة ومصداقية"]
          : ["We Build", "Iconic Landmarks", "With Precision & Integrity"]);
    heroTitle.innerHTML = `
      <span>${heroParts[0]}</span>
      <span class="accent">${heroParts[1]}</span>
      <span>${heroParts[2]}</span>
    `;
  }
  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent = s["heroSubtitle_" + lang] || s.heroSubtitle_en || "";
  }
  renderHeroStats();
  applyContactFormRequirements();

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

function getFormRequirements(formType) {
  const settings = getData("siteSettings") || {};
  return (
    settings.formRequirements?.[formType] ||
    DEFAULT_DATA.siteSettings.formRequirements[formType] ||
    {}
  );
}

function renderHeroStats() {
  const wrap = document.querySelector(".hero-stats");
  if (!wrap) return;
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const stats = (getData("siteSettings") || {}).heroStats || DEFAULT_DATA.siteSettings.heroStats;
  wrap.innerHTML = stats
    .map(
      (item) => `
        <div class="stat-item">
          <div class="stat-num-wrap">
            <span class="stat-num" data-count="${parseInt(item.value, 10) || 0}">0</span>
            ${item.suffix ? `<span class="stat-suffix">${item.suffix}</span>` : ""}
          </div>
          <span class="stat-label">${item["label_" + lang] || item.label_en || ""}</span>
        </div>`,
    )
    .join("");
  if (typeof refreshHeroStatsCounters === "function") {
    refreshHeroStatsCounters();
  }
}

function getSectionOrder() {
  const sectionOrder = getData("sectionOrder");
  const fallback = [...DEFAULT_DATA.sectionOrder];
  if (!Array.isArray(sectionOrder) || !sectionOrder.length) return fallback;
  const validIds = Object.keys(getData("sections") || {});
  const ordered = sectionOrder.filter((id) => validIds.includes(id));
  validIds.forEach((id) => {
    if (!ordered.includes(id)) ordered.push(id);
  });
  return ordered;
}

function setFieldRequiredState(field, required, label) {
  if (!field) return;
  field.required = Boolean(required);
  field.toggleAttribute("aria-required", Boolean(required));
  if (label) {
    const base = label.getAttribute("data-base-text") || label.textContent.replace(/\s*\*$/, "");
    label.setAttribute("data-base-text", base);
    label.textContent = required ? `${base} *` : base;
  }
}

function applyContactFormRequirements() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const config = getFormRequirements("contact");
  setFieldRequiredState(form.querySelector('input[name="name"]'), config.name, form.querySelector('label[for="contact-name"], input[name="name"]')?.closest(".form-group")?.querySelector("label"));
  setFieldRequiredState(form.querySelector('input[name="email"]'), config.email, form.querySelector('input[name="email"]')?.closest(".form-group")?.querySelector("label"));
  setFieldRequiredState(document.getElementById("contact-phone-local"), config.phone, document.getElementById("contact-phone-local")?.closest(".form-group")?.querySelector("label"));
  setFieldRequiredState(form.querySelector('input[name="subject"]'), config.subject, form.querySelector('input[name="subject"]')?.closest(".form-group")?.querySelector("label"));
  setFieldRequiredState(form.querySelector('textarea[name="message"]'), config.message, form.querySelector('textarea[name="message"]')?.closest(".form-group")?.querySelector("label"));
  setFieldRequiredState(form.querySelector('input[name="attachment"]'), config.attachment, form.querySelector('input[name="attachment"]')?.closest(".form-group")?.querySelector("label"));
}

function applySeoSettings() {
  const seo = getData("seoSettings") || {};
  const page = document.body?.getAttribute("data-page") || "home";
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const localized = (baseKey) => {
    const localizedKey = lang === "ar" ? `${baseKey}_ar` : baseKey;
    return seo[localizedKey] || seo[baseKey] || "";
  };
  const title = page === "careers" ? localized("careersTitle") || localized("defaultTitle") : localized("homeTitle") || localized("defaultTitle");
  const description = page === "careers" ? localized("careersDescription") || localized("defaultDescription") : localized("homeDescription") || localized("defaultDescription");
  const keywords = page === "careers" ? localized("careersKeywords") || localized("defaultKeywords") : localized("homeKeywords") || localized("defaultKeywords");
  const ogImage = seo.ogImage || "assets/images/amg-logo.jpeg";
  const robots = seo.robots || "index, follow";
  const canonicalBase = seo.canonicalBase || "";
  const canonicalHref = canonicalBase
    ? `${canonicalBase.replace(/\/$/, "")}/${page === "careers" ? "careers.html" : ""}`.replace(/\/$/, "")
    : "";

  const setAttr = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.setAttribute(attr, value);
  };
  const ensureMeta = (selector, attrs) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      document.head.appendChild(el);
    }
    return el;
  };
  ensureMeta('meta[name="author"]', { name: "author" }).setAttribute("content", seo.schemaName || DEFAULT_DATA.seoSettings.schemaName);
  ensureMeta('meta[name="application-name"]', { name: "application-name" }).setAttribute("content", lang === "ar" ? localized("defaultTitle") : seo.defaultTitle || DEFAULT_DATA.seoSettings.defaultTitle);
  ensureMeta('meta[name="theme-color"]', { name: "theme-color" }).setAttribute("content", (getData("siteSettings") || {}).primaryColor || "#C99664");
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", seo.schemaName || DEFAULT_DATA.seoSettings.schemaName);
  ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).setAttribute("content", lang === "ar" ? "ar_AR" : "en_US");

  if (document.title !== undefined && title) document.title = title;
  setAttr('meta[name="description"]', "content", description);
  setAttr('meta[name="keywords"]', "content", keywords);
  setAttr('meta[name="robots"]', "content", robots);
  setAttr('meta[property="og:title"]', "content", title);
  setAttr('meta[property="og:description"]', "content", description);
  setAttr('meta[property="og:image"]', "content", ogImage);
  setAttr('meta[property="og:url"]', "content", canonicalHref || window.location.href);
  setAttr('meta[name="twitter:title"]', "content", title);
  setAttr('meta[name="twitter:description"]', "content", description);
  setAttr('meta[name="twitter:image"]', "content", ogImage);
  setAttr('meta[name="twitter:card"]', "content", "summary_large_image");
  setAttr('meta[name="google-site-verification"]', "content", seo.googleSiteVerification || "");
  setAttr('meta[name="msvalidate.01"]', "content", seo.bingSiteVerification || "");
  setAttr('link[rel="canonical"]', "href", canonicalHref || window.location.href);

  const schemaId = "dynamic-seo-schema";
  const existingSchema = document.getElementById(schemaId);
  if (existingSchema) existingSchema.remove();
  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.id = schemaId;
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": seo.schemaType || "Organization",
    name:
      (lang === "ar" ? seo.schemaName_ar : seo.schemaName) ||
      seo.schemaName ||
      DEFAULT_DATA.seoSettings.schemaName,
    url: canonicalBase || window.location.origin,
    logo: ogImage,
    description,
  });
  document.head.appendChild(schema);

  if (seo.googleAnalyticsId && !document.getElementById("ga-script")) {
    const gaScript = document.createElement("script");
    gaScript.id = "ga-script";
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(seo.googleAnalyticsId)}`;
    document.head.appendChild(gaScript);

    const gaInline = document.createElement("script");
    gaInline.id = "ga-inline-script";
    gaInline.textContent = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${seo.googleAnalyticsId}');`;
    document.head.appendChild(gaInline);
  }

  if (seo.googleTagManagerId && !document.getElementById("gtm-script")) {
    const gtmScript = document.createElement("script");
    gtmScript.id = "gtm-script";
    gtmScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${seo.googleTagManagerId}');`;
    document.head.appendChild(gtmScript);
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
  applySectionOrder();
}

function applySectionOrder() {
  const order = getSectionOrder();
  const footer = document.getElementById("footer");
  if (footer) {
    order.forEach((id) => {
      const section = document.getElementById(id);
      if (section) footer.parentNode.insertBefore(section, footer);
    });
  }

  const nav = document.getElementById("nav-links");
  if (!nav) return;
  order.forEach((id) => {
    const link = nav.querySelector(`a[href="#${id}"]`);
    const item = link?.closest("li");
    if (item) nav.appendChild(item);
  });
}

function renderGroup() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const companies = getData("groupCompanies") || [];
  const grid = document.getElementById("group-grid");
  if (!grid) return;

  const settings = getData("siteSettings") || {};
  const profileLabel =
    lang === "ar" ? "تحميل بروفايل الشركة" : "Download Company Profile";
  const manualUrl = settings.manualCompanyProfile || "";
  const profileHref = manualUrl;
  const profileName = "amg-company-profile.pdf";
  const commonLinkAttrs = profileHref
    ? `href="${profileHref}" target="_blank" download="${profileName}"`
    : `href="javascript:void(0)" aria-disabled="true"`;
  const headerCta = document.getElementById("company-profile-entry-cta");
  if (headerCta) {
    headerCta.textContent = profileLabel;
    headerCta.setAttribute("href", profileHref || "javascript:void(0)");
    if (profileHref) {
      headerCta.setAttribute("target", "_blank");
      headerCta.setAttribute("download", profileName);
    } else {
      headerCta.removeAttribute("target");
      headerCta.removeAttribute("download");
    }
  }

  grid.innerHTML = companies
    .map(
      (c) => {
        return `
    <div class="group-card reveal-zoom">
      <div class="group-card-image">
        <img src="${c.image || ""}" alt="${c["name_" + lang] || c.name_en}"
             onerror="this.style.background='#1a1a1a';this.style.display='block'" loading="lazy" />
        <div class="group-card-overlay">
          <a ${commonLinkAttrs} class="btn btn-primary">${profileLabel}</a>
        </div>
      </div>
      <div class="group-card-body">
        <div class="group-card-flag"><i class="fa fa-location-dot"></i> ${c["location_" + lang] || c.location_en}</div>
        <h3>${c["name_" + lang] || c.name_en}</h3>
        <p>${c["desc_" + lang] || c.desc_en}</p>
        <a ${commonLinkAttrs} class="group-link">${profileLabel}<i class="fa fa-file-arrow-down"></i></a>
      </div>
    </div>`;
      },
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
        cleanupLegacyGroupCompanies();
      }
    })
    .catch(() => {}) // if fetch fails, fall back to localStorage silently
    .finally(() => {
      applySettings();
      applySeoSettings();
      applySectionVisibility();
      renderGroup();
    });
});
