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
    projectOrderMode: "manual",
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
    showWhoWeAreProfileCta: true,
    whoWeAreLogo: "assets/images/amg-logo.jpeg",
    whoWeAreBrief_en:
      "AMG Main Contracting Group delivers integrated construction, civil, MEP, and fit-out capabilities through a multi-company structure built for dependable execution and premium project delivery.",
    whoWeAreBrief_ar:
      "تقدم مجموعة AMG للمقاولات الرئيسية قدرات متكاملة في الإنشاءات والأعمال المدنية وMEP والتشطيبات من خلال هيكل متعدد الشركات مصمم للتنفيذ الموثوق وتسليم المشاريع بمعايير احترافية.",
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
    ogImage: "https://amg-main.com/assets/images/og/amg-og-cover.png",
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
    "who-we-are": { visible: true, inNav: true },
    "our-group": { visible: true, inNav: true },
    "organizational-chart": { visible: true, inNav: true },
    "mission-vision": { visible: true, inNav: true },
    services: { visible: true, inNav: true },
    projects: { visible: true, inNav: true },
    careers: { visible: true, inNav: true },
    partners: { visible: true, inNav: true },
    contact: { visible: true, inNav: true },
  },
  sectionOrder: [
    "who-we-are",
    "our-group",
    "mission-vision",
    "services",
    "projects",
    "organizational-chart",
    "careers",
    "partners",
    "contact",
  ],

  customSections: [],

  builtInSectionContent: {
    "who-we-are": {
      navEn: "Who We Are",
      navAr: "من نحن",
      tagEn: "Who We Are",
      tagAr: "من نحن",
      titleEn: "AMG Main Contracting Group",
      titleAr: "مجموعة AMG للمقاولات الرئيسية",
      subtitleEn:
        "A concise introduction to the group, its positioning, and a premium company profile entry point.",
      subtitleAr:
        "نبذة مختصرة عن المجموعة ومكانتها ونقطة دخول احترافية إلى بروفايل الشركة.",
    },
    "our-group": {
      navEn: "Our Group",
      navAr: "مجموعتنا",
      tagEn: "Our Group",
      tagAr: "مجموعتنا",
      titleEn: "Group Companies",
      titleAr: "شركات المجموعة",
      subtitleEn:
        "Discover the specialist companies that expand the group's reach across construction, MEP, and integrated project delivery.",
      subtitleAr:
        "اكتشف الشركات المتخصصة التي توسع نطاق المجموعة عبر المقاولات وMEP والتنفيذ المتكامل للمشاريع.",
    },
    "mission-vision": {
      navEn: "Our Journey",
      navAr: "رحلتنا",
      tagEn: "Our Journey",
      tagAr: "رحلتنا",
      titleEn: "Mission & Vision",
      titleAr: "مهمتنا ورؤيتنا",
      subtitleEn:
        "The mission explains how AMG executes every project. The vision explains where the group is heading next.",
      subtitleAr:
        "المهمة توضح كيف تنفذ AMG كل مشروع. والرؤية توضح الاتجاه الذي تسير إليه المجموعة في المرحلة القادمة.",
      kickerEn: "Built on purpose",
      kickerAr: "مبني على هدف",
    },
    services: {
      navEn: "Services",
      navAr: "خدماتنا",
      tagEn: "What We Do",
      tagAr: "ما نقدمه",
      titleEn: "Our Services",
      titleAr: "خدماتنا",
    },
    projects: {
      navEn: "Projects",
      navAr: "مشاريعنا",
      tagEn: "Our Work",
      tagAr: "أعمالنا",
      titleEn: "Featured Projects",
      titleAr: "المشاريع المميزة",
    },
    "organizational-chart": {
      navEn: "Org Chart",
      navAr: "الهيكل التنظيمي",
      tagEn: "Leadership Structure",
      tagAr: "الهيكل القيادي",
      titleEn: "Organizational Chart",
      titleAr: "الهيكل التنظيمي",
      subtitleEn:
        "A premium snapshot of AMG's leadership structure, designed to clarify accountability, delivery flow, and executive oversight.",
      subtitleAr:
        "لقطة احترافية للهيكل القيادي في AMG توضح مسارات المسؤولية والتنفيذ والإشراف التنفيذي.",
    },
    careers: {
      navEn: "Careers",
      navAr: "الوظائف",
      tagEn: "Join Our Team",
      tagAr: "انضم لفريقنا",
      titleEn: "Career Opportunities",
      titleAr: "الفرص الوظيفية",
      subtitleEn:
        "Join a team delivering landmark construction, MEP, and infrastructure work across Egypt and Saudi Arabia, or share your CV for future premium opportunities.",
      subtitleAr:
        "انضم إلى فريق ينفذ مشاريع إنشائية وكهروميكانيكية وبنية تحتية بارزة في مصر والسعودية، أو شارك سيرتك الذاتية لفرص نوعية مستقبلية.",
      kickerEn: "Craft Your Next Chapter",
      kickerAr: "ابدأ فصلك المهني القادم",
    },
    partners: {
      navEn: "Partners",
      navAr: "شركاؤنا",
      tagEn: "Trusted By",
      tagAr: "يثق بنا",
      titleEn: "Our Partners",
      titleAr: "شركاؤنا",
      subtitleEn:
        "A selected network of brands and institutions that trust AMG across construction, fit-out, MEP, and large-scale delivery.",
      subtitleAr:
        "شبكة مختارة من العلامات التجارية والمؤسسات التي تثق في AMG عبر المقاولات والتشطيبات وأعمال MEP والتنفيذ واسع النطاق.",
    },
    contact: {
      navEn: "Contact",
      navAr: "تواصل معنا",
      tagEn: "Get In Touch",
      tagAr: "تواصل معنا",
      titleEn: "Contact Us",
      titleAr: "اتصل بنا",
    },
  },
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

  orgChart: {
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
    nodes: [
      {
        id: "org-1",
        parentId: "",
        sortOrder: 1,
        titleEn: "Chairman",
        titleAr: "رئيس مجلس الإدارة",
      },
      {
        id: "org-2",
        parentId: "org-1",
        sortOrder: 1,
        titleEn: "COO",
        titleAr: "المدير التنفيذي للعمليات",
      },
      {
        id: "org-3",
        parentId: "org-1",
        sortOrder: 2,
        titleEn: "CEO",
        titleAr: "الرئيس التنفيذي",
      },
      {
        id: "org-4",
        parentId: "org-2",
        sortOrder: 1,
        titleEn: "Site Management",
        titleAr: "إدارة المواقع",
      },
      {
        id: "org-5",
        parentId: "org-2",
        sortOrder: 2,
        titleEn: "Projects Management",
        titleAr: "إدارة المشروعات",
      },
      {
        id: "org-6",
        parentId: "org-2",
        sortOrder: 3,
        titleEn: "Technical Office Management",
        titleAr: "إدارة المكتب الفني",
      },
      {
        id: "org-7",
        parentId: "org-3",
        sortOrder: 1,
        titleEn: "Development Management",
        titleAr: "إدارة التطوير",
      },
      {
        id: "org-8",
        parentId: "org-3",
        sortOrder: 2,
        titleEn: "Finance Management",
        titleAr: "الإدارة المالية",
      },
      {
        id: "org-9",
        parentId: "org-4",
        sortOrder: 1,
        titleEn: "Site Management Director",
        titleAr: "مدير إدارة المواقع",
      },
      {
        id: "org-10",
        parentId: "org-9",
        sortOrder: 1,
        titleEn: "Projects Manager",
        titleAr: "مدير المشروعات",
      },
      {
        id: "org-11",
        parentId: "org-10",
        sortOrder: 1,
        titleEn: "Team Leader",
        titleAr: "قائد الفريق",
      },
      {
        id: "org-12",
        parentId: "org-11",
        sortOrder: 1,
        titleEn: "Site Engineers",
        titleAr: "مهندسو الموقع",
      },
      {
        id: "org-13",
        parentId: "org-12",
        sortOrder: 1,
        titleEn: "Supervisors Arch & MEP",
        titleAr: "مشرفو المعماري وMEP",
      },
      {
        id: "org-14",
        parentId: "org-13",
        sortOrder: 1,
        titleEn: "Foremen",
        titleAr: "الفورمان",
      },
      {
        id: "org-15",
        parentId: "org-5",
        sortOrder: 1,
        titleEn: "Projects Management Manager",
        titleAr: "مدير إدارة المشروعات",
      },
      {
        id: "org-16",
        parentId: "org-15",
        sortOrder: 1,
        titleEn: "Planning Engineer",
        titleAr: "مهندس التخطيط",
      },
      {
        id: "org-17",
        parentId: "org-16",
        sortOrder: 1,
        titleEn: "Tendering Engineer",
        titleAr: "مهندس العطاءات",
      },
      {
        id: "org-18",
        parentId: "org-17",
        sortOrder: 1,
        titleEn: "Procurement & Subcontractor",
        titleAr: "المشتريات والمقاولون",
      },
      {
        id: "org-19",
        parentId: "org-18",
        sortOrder: 1,
        titleEn: "Cost Control Engineer",
        titleAr: "مهندس ضبط التكاليف",
      },
      {
        id: "org-20",
        parentId: "org-19",
        sortOrder: 1,
        titleEn: "MEP Engineer",
        titleAr: "مهندس MEP",
      },
      {
        id: "org-21",
        parentId: "org-6",
        sortOrder: 1,
        titleEn: "Technical Office Manager",
        titleAr: "مدير المكتب الفني",
      },
      {
        id: "org-22",
        parentId: "org-21",
        sortOrder: 1,
        titleEn: "Coordination",
        titleAr: "التنسيق",
      },
      {
        id: "org-23",
        parentId: "org-22",
        sortOrder: 1,
        titleEn: "Shop Drawings Engineer",
        titleAr: "مهندس الرسومات التنفيذية",
      },
      {
        id: "org-24",
        parentId: "org-23",
        sortOrder: 1,
        titleEn: "QS Engineer & Close Out",
        titleAr: "مهندس الحصر والإقفال",
      },
      {
        id: "org-25",
        parentId: "org-7",
        sortOrder: 1,
        titleEn: "QC & QA Engineer",
        titleAr: "مهندس الجودة وضبط الجودة",
      },
      {
        id: "org-26",
        parentId: "org-25",
        sortOrder: 1,
        titleEn: "HSE Engineer",
        titleAr: "مهندس السلامة",
      },
      {
        id: "org-27",
        parentId: "org-26",
        sortOrder: 1,
        titleEn: "Marketing & Sales",
        titleAr: "التسويق والمبيعات",
      },
      {
        id: "org-28",
        parentId: "org-27",
        sortOrder: 1,
        titleEn: "HR Management",
        titleAr: "إدارة الموارد البشرية",
      },
      {
        id: "org-29",
        parentId: "org-28",
        sortOrder: 1,
        titleEn: "Office Management",
        titleAr: "إدارة المكتب",
      },
      {
        id: "org-30",
        parentId: "org-29",
        sortOrder: 1,
        titleEn: "IT Management",
        titleAr: "إدارة تقنية المعلومات",
      },
      {
        id: "org-31",
        parentId: "org-30",
        sortOrder: 1,
        titleEn: "Client Care",
        titleAr: "خدمة العملاء",
      },
      {
        id: "org-32",
        parentId: "org-8",
        sortOrder: 1,
        titleEn: "Financial Audit",
        titleAr: "المراجعة المالية",
      },
      {
        id: "org-33",
        parentId: "org-32",
        sortOrder: 1,
        titleEn: "Legal Accounting",
        titleAr: "المحاسبة القانونية",
      },
      {
        id: "org-34",
        parentId: "org-32",
        sortOrder: 2,
        titleEn: "Financial Accounting",
        titleAr: "المحاسبة المالية",
      },
      {
        id: "org-35",
        parentId: "org-34",
        sortOrder: 1,
        titleEn: "Storekeeper",
        titleAr: "أمين المخزن",
      },
    ],
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
      subcategory_en: "Luxury Towers",
      subcategory_ar: "أبراج فاخرة",
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
      subcategory_en: "Mixed Use",
      subcategory_ar: "متعدد الاستخدامات",
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
      subcategory_en: "Logistics Complex",
      subcategory_ar: "مجمع لوجستي",
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
      subcategory_en: "Technology Campus",
      subcategory_ar: "حرم تقني",
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
      subcategory_en: "Transit Hub",
      subcategory_ar: "مركز نقل",
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
      website: "https://amjaad-sa.com/",
      showProfileButton: true,
      showWebsiteButton: true,
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
      website: "https://electrocivic.com/",
      showProfileButton: true,
      showWebsiteButton: true,
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

  careersPageContent: {
    heroKicker_en: "Built For People Who Deliver At Scale",
    heroKicker_ar: "مبني للمحترفين القادرين على التنفيذ على نطاق واسع",
    heroTitle_en: "Careers Crafted For Builders, Leaders, And High-Performance Teams",
    heroTitle_ar: "فرص مهنية مصممة للبنّائين والقادة وفرق الأداء العالي",
    heroText_en:
      "Join AMG Main Contracting Group and work across landmark construction, MEP, infrastructure, and delivery operations in Egypt and Saudi Arabia. Explore live openings or send your CV directly to our HR team.",
    heroText_ar:
      "انضم إلى مجموعة AMG للمقاولات الرئيسية واعمل عبر مشاريع الإنشاءات وMEP والبنية التحتية وعمليات التنفيذ في مصر والسعودية. استعرض الوظائف المتاحة الآن أو أرسل سيرتك الذاتية مباشرة إلى فريق الموارد البشرية.",
    panelLabel_en: "Talent Standards",
    panelLabel_ar: "معايير الكفاءات",
    panelTitle_en:
      "We hire for ownership, site readiness, precision, and calm execution under pressure.",
    panelTitle_ar:
      "نحن نوظف على أساس المسؤولية والجاهزية الميدانية والدقة والقدرة على التنفيذ الهادئ تحت الضغط.",
    panelPoint1_en: "Engineering, site, commercial, and support functions",
    panelPoint1_ar: "وظائف هندسية وميدانية وتجارية وداعمة",
    panelPoint2_en: "Structured review with direct HR visibility",
    panelPoint2_ar: "مراجعة منظمة مع وصول مباشر من الموارد البشرية",
    panelPoint3_en: "Open applications accepted for future opportunities",
    panelPoint3_ar: "قبول الطلبات العامة للفرص الحالية والمستقبلية",
    panelMini1_en: "Share your CV for current openings or future talent pools.",
    panelMini1_ar: "أرسل سيرتك الذاتية للوظائف الحالية أو لمجموعة المواهب المستقبلية.",
    panelMini2_en: "Expect a premium, direct, and professional review experience.",
    panelMini2_ar: "توقع تجربة مراجعة احترافية ومباشرة وعالية الجودة.",
    highlight1Title_en: "Projects With Real Scale",
    highlight1Title_ar: "مشاريع ذات نطاق حقيقي",
    highlight1Text_en:
      "Work on landmark delivery environments where timelines, quality, and accountability matter every day.",
    highlight1Text_ar:
      "اعمل ضمن بيئات تنفيذ بارزة حيث يهم الالتزام بالجدول والجودة والمسؤولية يومياً.",
    highlight2Title_en: "A Clear Delivery Culture",
    highlight2Title_ar: "ثقافة تنفيذ واضحة",
    highlight2Text_en:
      "Our teams operate with structured ownership, disciplined communication, and premium client-facing standards.",
    highlight2Text_ar:
      "تعمل فرقنا بمسؤوليات واضحة وتواصل منضبط ومعايير احترافية عالية في التعامل مع العملاء.",
    highlight3Title_en: "Regional Exposure",
    highlight3Title_ar: "تعرض إقليمي",
    highlight3Text_en:
      "Build your career across Egypt and Saudi Arabia with opportunities tied to real business growth.",
    highlight3Text_ar:
      "طوّر مسارك المهني عبر مصر والسعودية من خلال فرص مرتبطة بنمو الأعمال الفعلي.",
    openingsKicker_en: "Open Opportunities",
    openingsKicker_ar: "الفرص المتاحة",
    openingsTitle_en: "Find The Right Role Or Submit A General Application",
    openingsTitle_ar: "اعثر على الوظيفة المناسبة أو أرسل طلباً عاماً",
    openingsText_en:
      "Every role below is managed from the dashboard. New jobs added by your team now refresh correctly on both the homepage and this page after the site loads server data.",
    openingsText_ar:
      "جميع الوظائف أدناه تتم إدارتها من لوحة التحكم. والآن يتم تحديث الوظائف الجديدة بشكل صحيح على الصفحة الرئيسية وهذه الصفحة بعد تحميل بيانات الخادم.",
    summaryLabel_en: "Live Listing Status",
    summaryLabel_ar: "حالة الوظائف الحالية",
    summaryText_en: "Use the filters below or send your CV directly to HR.",
    summaryText_ar: "استخدم الفلاتر أدناه أو أرسل سيرتك الذاتية مباشرة إلى الموارد البشرية.",
    filtersLabel_en: "Role Filters",
    filtersLabel_ar: "فلاتر الوظائف",
    filtersText_en: "Switch between all positions and contract types.",
    filtersText_ar: "بدّل بين جميع الوظائف وأنواع التعاقد المختلفة.",
  },
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
    website: company.website || url || "",
    showProfileButton: company.showProfileButton !== false,
    showWebsiteButton: company.showWebsiteButton !== false,
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
  if (typeof settings.whoWeAreProfile === "string" && settings.whoWeAreProfile.trim() && !settings.manualCompanyProfile) {
    settings.manualCompanyProfile = settings.whoWeAreProfile;
  }
  if (Object.prototype.hasOwnProperty.call(settings, "whoWeAreProfile")) {
    delete settings.whoWeAreProfile;
  }
  if (typeof settings.showWhoWeAreProfileCta !== "boolean") {
    settings.showWhoWeAreProfileCta = DEFAULT_DATA.siteSettings.showWhoWeAreProfileCta;
  }
  if (typeof settings.whoWeAreBrief_en !== "string") {
    settings.whoWeAreBrief_en = DEFAULT_DATA.siteSettings.whoWeAreBrief_en;
  }
  if (typeof settings.whoWeAreBrief_ar !== "string") {
    settings.whoWeAreBrief_ar = DEFAULT_DATA.siteSettings.whoWeAreBrief_ar;
  }
  if (typeof settings.whoWeAreLogo !== "string" || !settings.whoWeAreLogo.trim()) {
    settings.whoWeAreLogo = settings.logo || DEFAULT_DATA.siteSettings.whoWeAreLogo;
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

  const builtInSectionContent = getData("builtInSectionContent") || {};
  const normalizedBuiltInSectionContent = {};
  Object.keys(DEFAULT_DATA.builtInSectionContent || {}).forEach((id) => {
    normalizedBuiltInSectionContent[id] = {
      ...DEFAULT_DATA.builtInSectionContent[id],
      ...(builtInSectionContent[id] || {}),
    };
  });
  setData("builtInSectionContent", normalizedBuiltInSectionContent);

  const sectionOrder = getData("sectionOrder");
  if (!Array.isArray(sectionOrder) || !sectionOrder.length) {
    setData("sectionOrder", DEFAULT_DATA.sectionOrder);
  }

  const careersPageContent = getData("careersPageContent") || {};
  setData("careersPageContent", {
    ...DEFAULT_DATA.careersPageContent,
    ...careersPageContent,
  });
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
migrateCustomSections();

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

  // Social links
  renderFooterSocial();
  renderContactSocial();

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
  applyBuiltInSectionContent();
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

function getBuiltInSectionContent() {
  const stored = getData("builtInSectionContent") || {};
  const defaults = DEFAULT_DATA.builtInSectionContent || {};
  const next = {};
  Object.keys(defaults).forEach((id) => {
    next[id] = {
      ...defaults[id],
      ...(stored[id] || {}),
    };
  });
  return next;
}

function applyBuiltInSectionContent() {
  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const content = getBuiltInSectionContent();
  const setLocalized = (id, enValue, arValue) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof enValue === "string") el.setAttribute("data-en", enValue);
    if (typeof arValue === "string") el.setAttribute("data-ar", arValue);
    el.textContent = lang === "ar" ? arValue || enValue || "" : enValue || arValue || "";
  };

  Object.entries(content).forEach(([sectionId, entry]) => {
    setLocalized(`nav-label-${sectionId}`, entry.navEn, entry.navAr);
    setLocalized(`${sectionId}-tag`, entry.tagEn, entry.tagAr);
    setLocalized(`${sectionId}-title`, entry.titleEn, entry.titleAr);
    setLocalized(`${sectionId}-subtitle`, entry.subtitleEn, entry.subtitleAr);
    setLocalized(`${sectionId}-kicker`, entry.kickerEn, entry.kickerAr);
  });
}

function getBuiltInSectionIds() {
  return Object.keys(DEFAULT_DATA.sections || {});
}

function getCustomSections() {
  const stored = getData("customSections");
  if (!Array.isArray(stored)) return [];
  return stored
    .filter((section) => section && section.id)
    .map((section, index) => ({
      id: String(section.id || `custom-section-${index + 1}`),
      navLabelEn: section.navLabelEn || section.sectionTitleEn || "New Section",
      navLabelAr: section.navLabelAr || section.sectionTitleAr || "قسم جديد",
      sectionTagEn: section.sectionTagEn || "",
      sectionTagAr: section.sectionTagAr || "",
      sectionTitleEn: section.sectionTitleEn || "New Section",
      sectionTitleAr: section.sectionTitleAr || "قسم جديد",
      subtitleEn: section.subtitleEn || "",
      subtitleAr: section.subtitleAr || "",
      theme: section.theme || "light",
      mediaAlign: section.mediaAlign || "right",
      blocks: Array.isArray(section.blocks) ? section.blocks : [],
    }));
}

function syncSectionRegistry() {
  const builtInIds = getBuiltInSectionIds();
  const customSections = getCustomSections();
  const customIds = customSections.map((section) => section.id);
  const currentSections = getData("sections") || {};
  const nextSections = {};

  builtInIds.forEach((id) => {
    nextSections[id] = {
      ...DEFAULT_DATA.sections[id],
      ...(currentSections[id] || {}),
    };
  });

  customSections.forEach((section) => {
    nextSections[section.id] = {
      visible: currentSections[section.id]?.visible ?? true,
      inNav: currentSections[section.id]?.inNav ?? true,
    };
  });

  const currentOrder = Array.isArray(getData("sectionOrder")) ? getData("sectionOrder") : [];
  const validIds = [...builtInIds, ...customIds];
  const nextOrder = currentOrder.filter((id) => validIds.includes(id));
  validIds.forEach((id) => {
    if (!nextOrder.includes(id)) nextOrder.push(id);
  });

  setData("sections", nextSections);
  setData("sectionOrder", nextOrder);
}

function escapeCustomSectionHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function customSectionParagraphs(text) {
  return String(text || "")
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeCustomSectionHtml(paragraph)}</p>`)
    .join("");
}

function renderCustomSectionBlock(block, lang) {
  const title = lang === "ar" ? block.titleAr || block.titleEn : block.titleEn || block.titleAr;
  const text = lang === "ar" ? block.textAr || block.textEn : block.textEn || block.textAr;
  const label = lang === "ar" ? block.labelAr || block.labelEn : block.labelEn || block.labelAr;
  const alt = lang === "ar" ? block.altAr || block.altEn : block.altEn || block.altAr;
  const caption = lang === "ar" ? block.captionAr || block.captionEn : block.captionEn || block.captionAr;
  const icon = block.icon || "fas fa-star";
  const buttonClass = block.style === "secondary" ? "btn btn-outline" : "btn btn-primary";

  switch (block.type) {
    case "title":
      return `
        <article class="custom-block custom-block-title">
          <h3>${escapeCustomSectionHtml(title)}</h3>
          ${text ? `<div class="custom-block-copy">${customSectionParagraphs(text)}</div>` : ""}
        </article>`;
    case "text":
      return `
        <article class="custom-block custom-block-text">
          ${title ? `<h3>${escapeCustomSectionHtml(title)}</h3>` : ""}
          <div class="custom-block-copy">${customSectionParagraphs(text)}</div>
        </article>`;
    case "image":
      return `
        <figure class="custom-block custom-block-image">
          <img src="${escapeCustomSectionHtml(block.image || "")}" alt="${escapeCustomSectionHtml(alt || title || "AMG section image")}" loading="lazy" />
          ${caption ? `<figcaption>${escapeCustomSectionHtml(caption)}</figcaption>` : ""}
        </figure>`;
    case "stat":
      return `
        <article class="custom-block custom-block-stat">
          <strong>${escapeCustomSectionHtml(block.value || "0")}${block.suffix ? `<span>${escapeCustomSectionHtml(block.suffix)}</span>` : ""}</strong>
          <p>${escapeCustomSectionHtml(label || title)}</p>
        </article>`;
    case "button":
      return `
        <article class="custom-block custom-block-button">
          <a class="${buttonClass}" href="${escapeCustomSectionHtml(block.url || "#")}">${escapeCustomSectionHtml(label || "Learn More")}</a>
        </article>`;
    case "icon":
    default:
      return `
        <article class="custom-block custom-block-icon">
          <div class="custom-block-icon-badge"><i class="${escapeCustomSectionHtml(icon)}"></i></div>
          ${title ? `<h3>${escapeCustomSectionHtml(title)}</h3>` : ""}
          ${text ? `<div class="custom-block-copy">${customSectionParagraphs(text)}</div>` : ""}
        </article>`;
  }
}

function renderCustomSections() {
  const root = document.getElementById("dynamic-sections-root");
  const nav = document.getElementById("nav-links");
  if (!root || !nav) return;

  const lang = document.documentElement.getAttribute("data-lang") || "en";
  const customSections = getCustomSections();

  root.innerHTML = customSections
    .map((section) => {
      const themeClass = `custom-admin-section--${section.theme || "light"}`;
      const mediaClass = section.mediaAlign === "left" ? "media-left" : "media-right";
      const tag = lang === "ar" ? section.sectionTagAr || section.sectionTagEn : section.sectionTagEn || section.sectionTagAr;
      const title = lang === "ar" ? section.sectionTitleAr || section.sectionTitleEn : section.sectionTitleEn || section.sectionTitleAr;
      const subtitle = lang === "ar" ? section.subtitleAr || section.subtitleEn : section.subtitleEn || section.subtitleAr;
      const blocks = (section.blocks || []).map((block) => renderCustomSectionBlock(block, lang)).join("");

      return `
        <section id="${escapeCustomSectionHtml(section.id)}" class="section custom-admin-section ${themeClass} reveal-up" data-custom-section="true">
          <div class="container">
            <div class="custom-admin-shell ${mediaClass}">
              <div class="custom-admin-header">
                ${tag ? `<span class="section-tag">${escapeCustomSectionHtml(tag)}</span>` : ""}
                <h2>${escapeCustomSectionHtml(title)}</h2>
                ${subtitle ? `<p class="custom-admin-subtitle">${escapeCustomSectionHtml(subtitle)}</p>` : ""}
              </div>
              <div class="custom-admin-grid">
                ${blocks || '<div class="custom-block custom-block-text"><div class="custom-block-copy"><p>Content will appear here after the admin adds blocks from the dashboard.</p></div></div>'}
              </div>
            </div>
          </div>
        </section>`;
    })
    .join("");

  nav.querySelectorAll(".custom-nav-item").forEach((item) => item.remove());
  customSections.forEach((section) => {
    const navLabel = lang === "ar" ? section.navLabelAr || section.navLabelEn : section.navLabelEn || section.navLabelAr;
    const item = document.createElement("li");
    item.className = "custom-nav-item";
    item.innerHTML = `<a href="#${escapeCustomSectionHtml(section.id)}">${escapeCustomSectionHtml(navLabel || "Section")}</a>`;
    nav.appendChild(item);
  });

  if (typeof setupScrollReveal === "function") {
    setTimeout(setupScrollReveal, 60);
  }
  if (typeof updateNavbarState === "function") {
    setTimeout(updateNavbarState, 0);
  }
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
  const ogImage = seo.ogImage || "https://amg-main.com/assets/images/og/amg-og-cover.png";
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

function renderContactSocial() {
  const s = getData("siteSettings");
  const el = document.getElementById("contact-social");
  if (!el) return;
  el.innerHTML = (s.socialLinks || [])
    .map(
      (sl) =>
        `<a href="${sl.url}" class="soc-link" target="_blank" rel="noopener noreferrer" title="${sl.label}" aria-label="${sl.label}"><i class="${sl.icon}"></i></a>`,
    )
    .join("");
}

// Apply section visibility
function applySectionVisibility() {
  syncSectionRegistry();
  renderCustomSections();
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

  const getDownloadName = (path, fallback) => {
    const cleanPath = String(path || "").split("?")[0];
    const parts = cleanPath.split("/");
    const lastPart = parts[parts.length - 1] || "";
    return lastPart || fallback;
  };

  const settings = getData("siteSettings") || {};
  const profileLabel =
    lang === "ar" ? "تحميل بروفايل الشركة" : "Download Company Profile";
  const websiteLabel = lang === "ar" ? "زيارة الموقع" : "Visit Website";
  const profileHref = settings.manualCompanyProfile || "";
  const profileName = getDownloadName(profileHref, "amg-company-profile.pdf");
  const whoWeAreBrief = settings[`whoWeAreBrief_${lang}`] || settings.whoWeAreBrief_en || "";
  const whoWeAreBriefEl = document.getElementById("who-we-are-brief");
  if (whoWeAreBriefEl) whoWeAreBriefEl.textContent = whoWeAreBrief;
  const whoWeAreLogo = settings.whoWeAreLogo || settings.logo || "assets/images/amg-logo.jpeg";
  const whoWeAreLogoLarge = document.getElementById("who-we-are-logo-large");
  if (whoWeAreLogoLarge) whoWeAreLogoLarge.src = whoWeAreLogo;

  const whoWeAreCta = document.getElementById("who-we-are-profile-cta");
  if (whoWeAreCta) {
    whoWeAreCta.textContent = profileLabel;
    if (settings.showWhoWeAreProfileCta !== false) {
      whoWeAreCta.style.display = "";
      if (profileHref) {
        whoWeAreCta.setAttribute("href", profileHref);
        whoWeAreCta.setAttribute("target", "_blank");
        whoWeAreCta.setAttribute("download", profileName);
        whoWeAreCta.removeAttribute("aria-disabled");
      } else {
        whoWeAreCta.setAttribute("href", "javascript:void(0)");
        whoWeAreCta.removeAttribute("target");
        whoWeAreCta.removeAttribute("download");
        whoWeAreCta.setAttribute("aria-disabled", "true");
      }
    } else {
      whoWeAreCta.style.display = "none";
      whoWeAreCta.setAttribute("href", "javascript:void(0)");
      whoWeAreCta.removeAttribute("target");
      whoWeAreCta.removeAttribute("download");
      whoWeAreCta.setAttribute("aria-disabled", "true");
    }
  }

  const dropdown = document.getElementById("our-group-dropdown");
  if (dropdown) {
    const websiteItems = companies.filter((company) => company.website);
    dropdown.innerHTML = websiteItems
      .map((company) => `
        <li>
          <a href="${company.website}" target="_blank" rel="noopener noreferrer">
            ${company["name_" + lang] || company.name_en}
          </a>
        </li>`)
      .join("");
    dropdown.style.display = websiteItems.length ? "" : "none";
  }

  grid.innerHTML = companies
    .map(
      (c) => {
        const companyName = c["name_" + lang] || c.name_en;
        const profileLink = c.profile || profileHref;
        const companyProfileName = getDownloadName(
          profileLink,
          `${String(companyName || "company").trim().replace(/\s+/g, "-").toLowerCase()}-profile.pdf`,
        );
        const profileAttrs = profileLink
          ? `href="${profileLink}" target="_blank" download="${companyProfileName}"`
          : `href="javascript:void(0)" aria-disabled="true"`;
        const websiteAttrs = c.website
          ? `href="${c.website}" target="_blank" rel="noopener noreferrer"`
          : `href="javascript:void(0)" aria-disabled="true"`;
        const overlayWebsiteCta = c.showWebsiteButton !== false
          ? `<a ${websiteAttrs} class="btn btn-primary group-card-cta">${websiteLabel}</a>`
          : "";
        const footerLinks = [
          c.showWebsiteButton !== false
            ? `<a ${websiteAttrs} class="group-link">${websiteLabel}<i class="fa fa-arrow-up-right-from-square"></i></a>`
            : "",
          c.showProfileButton !== false
            ? `<a ${profileAttrs} class="group-link">${profileLabel}<i class="fa fa-file-arrow-down"></i></a>`
            : "",
        ]
          .filter(Boolean)
          .join("");
        return `
    <div class="group-card reveal-zoom">
      <div class="group-card-image">
        <img src="${c.image || ""}" alt="${companyName}"
             onerror="this.style.background='#1a1a1a';this.style.display='block'" loading="lazy" />
        ${overlayWebsiteCta ? `<div class="group-card-overlay">${overlayWebsiteCta}</div>` : ""}
      </div>
      <div class="group-card-body">
        <div class="group-card-flag"><i class="fa fa-location-dot"></i> ${c["location_" + lang] || c.location_en}</div>
        <h3>${companyName}</h3>
        <p>${c["desc_" + lang] || c.desc_en}</p>
        <div class="group-links">${footerLinks}</div>
      </div>
    </div>`;
      },
    )
    .join("");

  if (typeof setupScrollReveal === "function")
    setTimeout(setupScrollReveal, 50);
}

function loadServerSiteData() {
  const version = encodeURIComponent(window.__assetVersion || Date.now());
  const tryLoad = (url) =>
    fetch(`${url}?v=${version}`, { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.json();
    });

  return tryLoad("php/load_settings.php").catch(() => tryLoad("data/settings.json"));
}

function initSiteData() {
  // Try to load settings from server first, then fall back to the saved JSON file.
  loadServerSiteData()
    .then((serverData) => {
      if (serverData) {
        Object.keys(serverData).forEach((key) => {
          localStorage.setItem("amg_" + key, JSON.stringify(serverData[key]));
        });
        cleanupLegacyGroupCompanies();
      }
    })
    .catch(() => {})
    .finally(() => {
      syncSectionRegistry();
      applySettings();
      applySeoSettings();
      applySectionVisibility();
      renderGroup();
      if (typeof renderServices === "function") renderServices();
      if (typeof renderProjects === "function") renderProjects();
      if (typeof renderCareers === "function") renderCareers();
      if (typeof applyCareersPageContent === "function") applyCareersPageContent();
      if (typeof renderAllCareers === "function") renderAllCareers();
      if (typeof renderPartners === "function") renderPartners();
      if (typeof renderCustomSections === "function") renderCustomSections();
      if (typeof renderOrgChart === "function") renderOrgChart();
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteData);
} else {
  initSiteData();
}

function migrateCustomSections() {
  syncSectionRegistry();
}
