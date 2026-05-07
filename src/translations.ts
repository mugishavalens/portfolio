export type TranslationKeys = {
  getStarted: string;
  editFile: string;
  testHMR: string;
  documentation: string;
  docsDescription: string;
  exploreVite: string;
  learnMore: string;
  connectWithUs: string;
  joinCommunity: string;
  projects: string;
  projectsDescription: string;
  viewProject: string;
  heroTitle: string;
  heroSub: string;
  switchLanguage: string;
  skills: string;
  inProgress: string;
  visitGithub: string;
};

export const translations: Record<'en' | 'ar', TranslationKeys> = {
  en: {
    getStarted: "Get started",
    editFile: "Edit src/App.tsx and save to test HMR",
    testHMR: "Test HMR",
    documentation: "Documentation",
    docsDescription: "Your questions, answered",
    exploreVite: "Explore Vite",
    learnMore: "Learn more",
    connectWithUs: "Connect with us",
    joinCommunity: "Join the Vite community",
    projects: "Featured Projects",
    projectsDescription: "A selection of my recent work",
    viewProject: "View Deployed",
    heroTitle: "Innovating the Web",
    heroSub: "Building modern experiences with React & Vite",
    switchLanguage: "عربي",
    skills: "My Skills",
    inProgress: "This project is currently in progress and not yet deployed.",
    visitGithub: "Please visit the GitHub repository for more details: ",
  },
  ar: {
    getStarted: "ابدأ الآن",
    editFile: "قم بتحرير src/App.tsx واحفظ لاختبار HMR",
    testHMR: "اختبار HMR",
    documentation: "التوثيق",
    docsDescription: "إجابات لأسئلتك",
    exploreVite: "استكشف Vite",
    learnMore: "تعلم المزيد",
    connectWithUs: "تواصل معنا",
    joinCommunity: "انضم إلى مجتمع Vite",
    projects: "المشاريع المميزة",
    projectsDescription: "مجموعة مختارة من أعمالي الأخيرة",
    viewProject: "عرض المشروع",
    heroTitle: "ابتكار الويب",
    heroSub: "بناء تجارب حديثة باستخدام React و Vite",
    switchLanguage: "English",
    skills: "مهاراتي",
    inProgress: "هذا المشروع قيد التنفيذ حاليًا ولم يتم نشره بعد.",
    visitGithub: "يرجى زيارة مستودع GitHub لمزيد من التفاصيل: ",
  },
};

export const projects = [
  {
    id: 1,
    title: { en: "Edustat Bigdata Projection", ar: "إيدوستات إسقاط البيانات الضخمة" },
    description: { en: "A big data projection system for education statistics.", ar: "نظام إسقاط البيانات الضخمة لإحصاءات التعليم." },
    url: "https://github.com/mugishavalens/Edusta-Bigdata-Projection.git",
    githubUrl: "https://github.com/mugishavalens/Edusta-Bigdata-Projection.git",
    tags: ["Big Data", "Education", "Projection"],
    status: "in-progress",
  },
  {
    id: 2,
    title: { en: "Emergency Severity Prediction", ar: "التنبؤ بخطورة الطوارئ" },
    description: { en: "System for predicting the severity of emergency cases.", ar: "نظام للتنبؤ بخطورة حالات الطوارئ." },
    url: "https://github.com/mugishavalens/emergency-severity-prediction-system.git",
    githubUrl: "https://github.com/mugishavalens/emergency-severity-prediction-system.git",
    tags: ["Machine Learning", "Health", "Prediction"],
    status: "in-progress",
  },
  {
    id: 3,
    title: { en: "Job Application Management System", ar: "نظام إدارة طلبات الوظائف" },
    description: { 
      en: "Full-stack web application to manage and track job applications efficiently, with features for storing, retrieving and updating application statuses.", 
      ar: "تطبيق ويب كامل لإدارة وتتبع طلبات الوظائف بكفاءة، مع ميزات لتخزين واسترجاع وتحديث حالات الطلبات." 
    },
    url: "https://poetic-cassata-a21d35.netlify.app/",
    githubUrl: "https://poetic-cassata-a21d35.netlify.app/",
    tags: ["PHP", "MySQL", "Web-Development"],
  },
  {
    id: 4,
    title: { en: "Kimchi Korean Restaurant", ar: "مطعم كيمتشي الكوري" },
    description: {
      en: "A modern restaurant website for Kimchi Korean Restaurant, featuring menu, reservation, and contact sections.",
      ar: "موقع مطعم كيمتشي الكوري الحديث مع أقسام القائمة والحجز والتواصل."
    },
    url: "https://incredible-tulumba-a4e81d.netlify.app/",
    githubUrl: "https://github.com/mugishavalens/Kimchi_Korean_Restaurant.git",
    tags: ["React", "Restaurant", "Web-Development"],
  },
];

export const skillsList = [
  { name: "React", description: "https://react.dev/" },
  { name: "Vite", description: "https://vite.dev/" },
  { name: "TypeScript", description: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", description: "https://tailwindcss.com/" },
  { name: "Node.js", description: "https://nodejs.org/" },
  { name: "Big Data", description: "https://en.wikipedia.org/wiki/Big_data" },
];
