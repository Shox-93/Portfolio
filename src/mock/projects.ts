export type ProjectPage = {
  title: string;
  href: string;
};

export type ProjectItem = {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  modalDescription: string;
  tech: string[];
  demoUrl: string;
  siteUrl: string;
  githubUrl: string;
  pages: ProjectPage[];
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "IT Market Platform",
    image: "/projects/localhost_3001_.png",
    shortDescription:
      "Многостраничная IT-платформа с каталогами компаний, специалистов, вакансий и заказов.",
    modalDescription:
      "Полноценная платформа в сфере IT с продуманной архитектурой и масштабируемой структурой. Реализованы основные разделы: компании, специалисты, вакансии и заказы. Используется компонентный подход, адаптивная верстка и mock-данные. Проект демонстрирует навыки построения сложных интерфейсов и организации frontend-архитектуры.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS v4",
      "GitHub",
      "Netlify",
    ],
    demoUrl: "https://example.com/demo-it-market",
    siteUrl: "https://example.com/site-it-market",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-it-market" },
      { title: "IT-компании", href: "https://example.com/companies" },
      { title: "IT-специалисты", href: "https://example.com/specialists" },
      { title: "IT-вакансии", href: "https://example.com/vacancies" },
      { title: "IT-заказы", href: "https://example.com/orders" },
    ],
  },
  {
    id: 2,
    title: "Catalog",
    image: "/projects/catalog.png",
    shortDescription:
      "Интернет-магазин с авторизацией, каталогом товаров и системой избранного.",
    modalDescription:
      "Frontend-часть маркетплейса с реализованными страницами товаров, авторизацией, логикой избранного и слайдерами. Проект построен с учётом дальнейшей интеграции backend-части. Демонстрирует навыки разработки интерактивных UI и работы с состоянием приложения.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS v4",
      "GitHub",
      "Netlify",
    ],
    demoUrl: "https://example.com/demo-marketplace",
    siteUrl: "https://example.com/site-marketplace",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-marketplace" },
      { title: "Каталог товаров", href: "https://example.com/products" },
      { title: "Избранное", href: "https://example.com/favorites" },
      { title: "Карточка товара", href: "https://example.com/product" },
      { title: "Авторизация", href: "https://example.com/login" },
    ],
  },
  {
    id: 3,
    title: "Invest Club logo",
    image: "/projects/Invest Club logo.png",
    shortDescription:
      "Job-портал для публикации вакансий и поиска кандидатов.",
    modalDescription:
      "Веб-приложение в формате job portal с разделением ролей работодателя и кандидата. Реализованы страницы вакансий, фильтрация, поиск и структура личных кабинетов. Проект показывает умение проектировать сложную бизнес-логику и интерфейсы под реальные сценарии использования.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS v4",
      "GitHub",
      "Netlify",
    ],
    demoUrl: "https://example.com/demo-job-portal",
    siteUrl: "https://example.com/site-job-portal",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-job-portal" },
      { title: "Вакансии", href: "https://example.com/jobs" },
      { title: "Компании", href: "https://example.com/companies" },
      { title: "Профиль кандидата", href: "https://example.com/candidate" },
      { title: "Панель работодателя", href: "https://example.com/employer" },
    ],
  },
  {
    id: 4,
    title: "Ресторан",
    image: "/projects/restauran.png",
    shortDescription:
      "Адаптивный сайт ресторана с современным интерфейсом и удобной навигацией.",
    modalDescription:
      "Frontend-проект сайта ресторана с акцентом на визуальную подачу, адаптивность и удобство пользователя. Реализованы основные секции, навигация, адаптивная верстка и современный пользовательский интерфейс. Проект демонстрирует навыки качественной frontend-разработки и аккуратной работы с UI.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS v4",
      "GitHub",
      "Netlify",
    ],
    demoUrl: "https://example.com/demo-support-system",
    siteUrl: "https://example.com/site-support-system",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-support-system" },
      { title: "Меню", href: "https://example.com/menu" },
      { title: "О ресторане", href: "https://example.com/about" },
      { title: "Контакты", href: "https://example.com/contact" },
    ],
  },
];