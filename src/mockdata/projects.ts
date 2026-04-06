import type { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "IT Market",
    image: "/projects/it-market.uz_.png",
    shortDescription:
      "Многостраничная платформа в сфере IT с разделами компаний, специалистов, вакансий и заказов.",
    modalDescription:
      "Современная web-платформа в IT-направлении, разработанная с акцентом на удобный интерфейс, адаптивность и масштабируемую структуру. Проект включает публичную главную страницу, секции с компаниями, специалистами, вакансиями и заказами.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
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
    title: "Marketplace Web App",
    image: "/projects/project-2.png",
    shortDescription:
      "Интернет-магазин с авторизацией, товарами, избранным и адаптивным интерфейсом.",
    modalDescription:
      "Полноценное web-приложение в формате маркетплейса с современным frontend-интерфейсом. Реализованы страницы товаров, логика избранного, слайдеры, адаптивная верстка и структура для дальнейшей backend-интеграции.",
    tech: ["Next.js", "React", "TypeScript", "JavaScript"],
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
    title: "Catalog",
    image: "/projects/catalog.png",
    shortDescription:
      "Платформа для публикации вакансий, поиска кандидатов и работы с резюме.",
    modalDescription:
      "Проект job portal с разделами для работодателей и кандидатов. Реализована структура вакансий, фильтрация, поиск, интерфейс кабинетов и архитектура для дальнейшей backend-интеграции.",
    tech: ["Next.js", "React", "TypeScript", "Zustand"],
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
    title: "Django Support System",
    image: "/projects/project-4.png",
    shortDescription:
      "Система заявок в техподдержку со статусами, приоритетами и фильтрацией.",
    modalDescription:
      "Web-приложение на Django для работы с заявками в службу поддержки. Реализованы модели, админ-панель, работа со статусами, приоритетами и пользовательской логикой.",
    tech: ["Python", "Django", "SQL", "SQLite"],
    demoUrl: "https://example.com/demo-support-system",
    siteUrl: "https://example.com/site-support-system",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-support-system" },
      { title: "Список заявок", href: "https://example.com/tickets" },
      { title: "Создание заявки", href: "https://example.com/create-ticket" },
      { title: "Админ-панель", href: "https://example.com/admin" },
    ],
  },
  {
    id: 5,
    title: "FastAPI Marketplace Backend",
    image: "/projects/project-5.png",
    shortDescription:
      "Backend для маркетплейса с товарами, заказами, пользователями и API.",
    modalDescription:
      "Серверная часть маркетплейса, построенная на FastAPI с подключением базы данных. Реализована логика работы с товарами, заказами, пользователями и REST API для интеграции с frontend-приложением.",
    tech: ["Python", "FastAPI", "MySQL", "SQL", "API"],
    demoUrl: "https://example.com/demo-fastapi-market",
    siteUrl: "https://example.com/site-fastapi-market",
    githubUrl: "https://github.com/",
    pages: [
      { title: "API Overview", href: "https://example.com/demo-fastapi-market" },
      { title: "Товары", href: "https://example.com/api/products" },
      { title: "Заказы", href: "https://example.com/api/orders" },
      { title: "Пользователи", href: "https://example.com/api/users" },
    ],
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    image: "/projects/project-6.png",
    shortDescription:
      "Персональный сайт-портфолио с проектами, стеком и адаптивным дизайном.",
    modalDescription:
      "Персональный сайт-портфолио, созданный для презентации навыков, проектов и технологического стека. В проекте использованы современные подходы к компонентной архитектуре, адаптивной верстке и работе с UI.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com/demo-portfolio",
    siteUrl: "https://example.com/site-portfolio",
    githubUrl: "https://github.com/",
    pages: [
      { title: "Главная", href: "https://example.com/demo-portfolio" },
      { title: "Обо мне", href: "https://example.com/about" },
      { title: "Навыки", href: "https://example.com/skills" },
      { title: "Портфолио", href: "https://example.com/portfolio" },
      { title: "Контакты", href: "https://example.com/contacts" },
    ],
  },
];