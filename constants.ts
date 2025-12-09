import { SectionContent, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/iwmhrab2", iconName: "Github" },
  { platform: "Telegram", url: "https://t.me/masluom", iconName: "Send" },
  { platform: "Instagram", url: "https://instagram.com/iw_mehrab", iconName: "Instagram" },
  { platform: "Email", url: "mailto:info@mehrabapi.ir", iconName: "Mail" },
];

export const CONTENT: Record<'fa' | 'en', SectionContent> = {
  fa: {
    nav: {
      brand: "مهراب",
      home: "خانه",
      experience: "سوابق",
      services: "خدمات",
      contact: "ارتباط",
    },
    hero: {
      greeting: "سلام، من",
      name: "مهراب",
      role: "مهندس نرم‌افزار & توسعه‌دهنده API",
      description: "متخصص در معماری سیستم‌های توزیع‌شده و طراحی زیرساخت‌های بک‌اند با پرفورمنس بالا. تمرکز من بر خلق راهکارهای امن و مقیاس‌پذیر است.",
      ctaPrimary: "دانلود رزومه",
      ctaSecondary: "تماس با من"
    },
    stats: {
      items: [
        { label: "سال تجربه", value: "+۴", description: "فعالیت حرفه‌ای" },
        { label: "پروژه موفق", value: "+۳۵", description: "در سطح سازمانی" },
        { label: "رضایت", value: "۱۰۰٪", description: "بازخورد مشتریان" },
        { label: "تکنولوژی", value: "+۱۵", description: "استک‌های مدرن" },
      ]
    },
    services: {
      title: "خدمات تخصصی",
      items: [
        { 
          title: "توسعه Backend & API", 
          description: "طراحی و پیاده‌سازی RESTful API و GraphQL با معماری میکروسرویس، بهینه‌سازی شده برای ترافیک بالا.",
          icon: "Server"
        },
        { 
          title: "توسعه ربات‌های هوشمند", 
          description: "ساخت ربات‌های پیشرفته تلگرام و دیسکورد با قابلیت‌های هوش مصنوعی و اتوماسیون فرآیندها.",
          icon: "Bot"
        },
        { 
          title: "طراحی دیتابیس و معماری", 
          description: "طراحی اسکیماهای پیچیده SQL و NoSQL، بهینه‌سازی کوئری‌ها و مدیریت داده‌های حجیم.",
          icon: "Database"
        },
        { 
          title: "توسعه پنل‌های تحت وب", 
          description: "ساخت داشبوردهای مدیریتی مدرن و ریسپانسیو با React و Next.js با رابط کاربری جذاب.",
          icon: "Layout"
        }
      ]
    },
    workflow: {
      title: "روند اجرای پروژه",
      items: [
        {
          step: "۰۱",
          title: "نیازسنجی و تحلیل",
          description: "بررسی دقیق نیازمندی‌ها، چالش‌ها و اهداف پروژه برای انتخاب بهترین استک تکنولوژی.",
          icon: "Search"
        },
        {
          step: "۰۲",
          title: "معماری و طراحی",
          description: "طراحی دیتابیس، ساختار API و سیستم‌های ارتباطی بر اساس اصول مقیاس‌پذیری.",
          icon: "PenTool"
        },
        {
          step: "۰۳",
          title: "توسعه چابک",
          description: "کدنویسی تمیز و ماژولار با تست‌های خودکار و گزارش‌دهی منظم پیشرفت کار.",
          icon: "Code"
        },
        {
          step: "۰۴",
          title: "استقرار و پشتیبانی",
          description: "راه‌اندازی روی سرورهای عملیاتی، تنظیم CI/CD و مانیتورینگ عملکرد سیستم.",
          icon: "Rocket"
        }
      ]
    },
    experience: {
      title: "سوابق شغلی و حرفه‌ای",
      items: [
        {
          role: "توسعه‌دهنده ارشد بک‌اند",
          company: "فریلنسر / پروژه‌های بین‌المللی",
          period: "۱۴۰۱ - اکنون",
          description: "رهبری تیم‌های کوچک فنی، طراحی معماری پروژه‌های مقیاس‌پذیر و توسعه سرویس‌های مالی و فروشگاهی.",
          current: true
        },
        {
          role: "توسعه‌دهنده Full Stack",
          company: "استارتاپ‌های فین‌تک",
          period: "۱۳۹۹ - ۱۴۰۱",
          description: "توسعه درگاه‌های پرداخت، پیاده‌سازی سیستم‌های احراز هویت (SSO) و طراحی رابط کاربری پنل‌ها.",
          current: false
        },
        {
          role: "توسعه‌دهنده پایتون",
          company: "پروژه‌های اوپن سورس",
          period: "۱۳۹۸ - ۱۳۹۹",
          description: "مشارکت در پروژه‌های گیت‌هاب، توسعه ابزارهای اتوماسیون و اسکریپت‌نویسی سیستمی.",
          current: false
        }
      ]
    },
    education: {
      title: "تحصیلات و گواهینامه‌ها",
      items: [
        {
          degree: "کارشناسی مهندسی کامپیوتر",
          institution: "دانشگاه آزاد اسلامی",
          year: "۱۳۹۷ - ۱۴۰۱",
          description: "تمرکز بر مهندسی نرم‌افزار، الگوریتم‌های پیشرفته و سیستم‌های عامل."
        },
        {
          degree: "گواهینامه Professional Data Engineer",
          institution: "Google Cloud",
          year: "۱۴۰۲",
          description: "تخصص در طراحی سیستم‌های پردازش داده و بیگ دیتا بر بستر ابری."
        }
      ]
    },
    skills: {
      title: "جعبه ابزار فنی",
      items: [
        { name: "Python / Django", level: 95, icon: "Code" },
        { name: "React / Next.js", level: 85, icon: "Layout" },
        { name: "Node.js / Express", level: 90, icon: "Server" },
        { name: "PostgreSQL / Redis", level: 80, icon: "Database" },
        { name: "Docker / CI/CD", level: 75, icon: "Container" },
        { name: "Linux / Security", level: 85, icon: "Terminal" },
      ],
      more: "و بیشتر..."
    },
    contact: {
      title: "آغاز همکاری",
      description: "آماده‌ام تا دانش و تجربه‌ام را در پروژه بعدی شما به کار بگیرم. برای مشاوره یا شروع پروژه تماس بگیرید.",
      copyright: "توسعه داده شده با ❤️ توسط مهراب"
    }
  },
  en: {
    nav: {
      brand: "Mehrab",
      home: "Home",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      name: "Mehrab",
      role: "Software Engineer & API Expert",
      description: "Specialized in distributed system architecture and high-performance backend infrastructure. Focused on creating secure and scalable solutions.",
      ctaPrimary: "Download CV",
      ctaSecondary: "Contact Me"
    },
    stats: {
      items: [
        { label: "Years Exp", value: "+4", description: "Professional Work" },
        { label: "Projects", value: "+35", description: "Enterprise Level" },
        { label: "Satisfaction", value: "100%", description: "Client Feedback" },
        { label: "Tech Stack", value: "+15", description: "Modern Tools" },
      ]
    },
    services: {
      title: "Specialized Services",
      items: [
        { 
          title: "Backend & API Dev", 
          description: "Design and implementation of RESTful APIs and GraphQL with microservices architecture, optimized for high traffic.",
          icon: "Server"
        },
        { 
          title: "Smart Bot Development", 
          description: "Building advanced Telegram and Discord bots with AI capabilities and process automation.",
          icon: "Bot"
        },
        { 
          title: "Database Architecture", 
          description: "Designing complex SQL and NoSQL schemas, query optimization, and big data management.",
          icon: "Database"
        },
        { 
          title: "Web Panel Development", 
          description: "Creating modern, responsive admin dashboards using React and Next.js with stunning UI.",
          icon: "Layout"
        }
      ]
    },
    workflow: {
      title: "My Workflow",
      items: [
        {
          step: "01",
          title: "Discovery & Analysis",
          description: "Deep dive into project requirements, challenges, and goals to select the best tech stack.",
          icon: "Search"
        },
        {
          step: "02",
          title: "Architecture & Design",
          description: "Designing database schemas, API structures, and communication systems based on scalability principles.",
          icon: "PenTool"
        },
        {
          step: "03",
          title: "Agile Development",
          description: "Clean, modular coding with automated testing and regular progress reporting.",
          icon: "Code"
        },
        {
          step: "04",
          title: "Deploy & Support",
          description: "Launching on production servers, setting up CI/CD pipelines, and performance monitoring.",
          icon: "Rocket"
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          role: "Senior Backend Developer",
          company: "Freelance / Global Projects",
          period: "2022 - Present",
          description: "Leading technical teams, designing scalable project architectures, and developing e-commerce and financial services.",
          current: true
        },
        {
          role: "Full Stack Developer",
          company: "Fintech Startups",
          period: "2020 - 2022",
          description: "Developed payment gateways, implemented SSO authentication systems, and designed dashboard UIs.",
          current: false
        },
        {
          role: "Python Developer",
          company: "Open Source Community",
          period: "2019 - 2020",
          description: "Contributed to GitHub projects, developed automation tools, and system scripting.",
          current: false
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      items: [
        {
          degree: "B.S. Computer Engineering",
          institution: "Azad University",
          year: "2018 - 2022",
          description: "Focused on software engineering, advanced algorithms, and operating systems."
        },
        {
          degree: "Professional Data Engineer",
          institution: "Google Cloud",
          year: "2023",
          description: "Specialized in designing data processing systems and big data on cloud infrastructure."
        }
      ]
    },
    skills: {
      title: "Technical Arsenal",
      items: [
        { name: "Python / Django", level: 95, icon: "Code" },
        { name: "React / Next.js", level: 85, icon: "Layout" },
        { name: "Node.js / Express", level: 90, icon: "Server" },
        { name: "PostgreSQL / Redis", level: 80, icon: "Database" },
        { name: "Docker / CI/CD", level: 75, icon: "Container" },
        { name: "Linux / Security", level: 85, icon: "Terminal" },
      ],
      more: "And more..."
    },
    contact: {
      title: "Let's Work Together",
      description: "Ready to apply my knowledge and experience to your next project. Contact me for consultation.",
      copyright: "Developed with ❤️ by Mehrab"
    }
  }
};