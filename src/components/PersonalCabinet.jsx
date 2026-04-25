import { useState, useEffect, useCallback, useRef } from 'react'
import { useLang } from '../LangContext'

const trackData = {
  digital: {
    label: 'Цифровая экономика', labelEn: 'Digital Economy',
    icon: '💻', color: '#38bdf8',
    courses: [
      { title: 'Основы веб-разработки (HTML/CSS)', titleEn: 'Web Development Basics (HTML/CSS)', duration: '5 дней', durationEn: '5 days', progress: 60, status: 'active' },
      { title: 'JavaScript для начинающих', titleEn: 'JavaScript for Beginners', duration: '7 дней', durationEn: '7 days', progress: 0, status: 'locked' },
      { title: 'Первый проект на GitHub', titleEn: 'First Project on GitHub', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Создать лендинг для местного бизнеса', titleEn: 'Build a landing page for a local business', reward: 800, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days' },
      { title: 'Верстка по макету Figma', titleEn: 'Code a Figma design to HTML', reward: 1200, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Основы веб-разработки»', nextStepEn: 'Complete "Web Development Basics" course',
    skills: [
      { name: 'HTML/CSS', nameEn: 'HTML/CSS', pct: 60, color: '#38bdf8' },
      { name: 'JavaScript', nameEn: 'JavaScript', pct: 0, color: '#a78bfa' },
      { name: 'Git', nameEn: 'Git', pct: 10, color: '#10B981' },
    ],
  },
  energy: {
    label: 'Энергетика', labelEn: 'Energy',
    icon: '⚡', color: '#facc15',
    courses: [
      { title: 'Основы солнечной энергетики', titleEn: 'Solar Energy Basics', duration: '4 дня', durationEn: '4 days', progress: 45, status: 'active' },
      { title: 'Монтаж солнечных панелей', titleEn: 'Solar Panel Installation', duration: '7 дней', durationEn: '7 days', progress: 0, status: 'locked' },
      { title: 'Энергоаудит объекта', titleEn: 'Building Energy Audit', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Помощь монтажнику СЭС (3 дня)', titleEn: 'Assist solar panel installer (3 days)', reward: 600, difficulty: 'Легко', deadline: '3 дня', deadlineEn: '3 days' },
      { title: 'Аудит энергопотребления здания', titleEn: 'Building energy consumption audit', reward: 900, difficulty: 'Средне', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы солнечной энергетики»', nextStepEn: 'Complete "Solar Energy Basics" course',
    skills: [
      { name: 'Солнечная энергетика', nameEn: 'Solar Energy', pct: 45, color: '#facc15' },
      { name: 'Электросети', nameEn: 'Power Grids', pct: 0, color: '#fb923c' },
      { name: 'Энергоаудит', nameEn: 'Energy Audit', pct: 10, color: '#10B981' },
    ],
  },
  agro: {
    label: 'Агросектор', labelEn: 'Agriculture',
    icon: '🌾', color: '#4ade80',
    courses: [
      { title: 'Основы агрономии и почвоведения', titleEn: 'Agronomy & Soil Science Basics', duration: '5 дней', durationEn: '5 days', progress: 50, status: 'active' },
      { title: 'Работа с сельхозтехникой', titleEn: 'Operating Agricultural Equipment', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
      { title: 'Агропереработка: базовый курс', titleEn: 'Agro-processing: Basics', duration: '4 дня', durationEn: '4 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Работа на фермерском хозяйстве (3 дня)', titleEn: 'Farm work (3 days)', reward: 450, difficulty: 'Легко', deadline: '3 дня', deadlineEn: '3 days' },
      { title: 'Ассистент агронома в кластере', titleEn: 'Agronomist assistant in cluster', reward: 800, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Основы агрономии»', nextStepEn: 'Complete "Agronomy Basics" course',
    skills: [
      { name: 'Агрономия', nameEn: 'Agronomy', pct: 50, color: '#4ade80' },
      { name: 'Техника', nameEn: 'Equipment', pct: 0, color: '#10B981' },
      { name: 'Переработка', nameEn: 'Processing', pct: 0, color: '#fb923c' },
    ],
  },
  logistics: {
    label: 'Логистика и торговля', labelEn: 'Logistics & Trade',
    icon: '🚚', color: '#fb923c',
    courses: [
      { title: 'Основы логистики и складского учёта', titleEn: 'Logistics & Warehouse Basics', duration: '4 дня', durationEn: '4 days', progress: 35, status: 'active' },
      { title: 'Управление цепочками поставок', titleEn: 'Supply Chain Management', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
      { title: 'Категория C/E: подготовка', titleEn: 'Category C/E: Preparation', duration: '10 дней', durationEn: '10 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Оператор склада (1 неделя)', titleEn: 'Warehouse operator (1 week)', reward: 550, difficulty: 'Легко', deadline: '7 дней', deadlineEn: '7 days' },
      { title: 'Маршрутизация доставки (помощник)', titleEn: 'Delivery routing assistant', reward: 750, difficulty: 'Средне', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы логистики»', nextStepEn: 'Complete "Logistics Basics" course',
    skills: [
      { name: 'Складской учёт', nameEn: 'Warehouse Management', pct: 35, color: '#fb923c' },
      { name: 'Цепочки поставок', nameEn: 'Supply Chains', pct: 0, color: '#3B82F6' },
      { name: 'Вождение C/E', nameEn: 'C/E Driving', pct: 0, color: '#10B981' },
    ],
  },
  construction: {
    label: 'Строительство', labelEn: 'Construction',
    icon: '🏗️', color: '#a78bfa',
    courses: [
      { title: 'Основы строительства и материалов', titleEn: 'Construction & Materials Basics', duration: '5 дней', durationEn: '5 days', progress: 40, status: 'active' },
      { title: 'Чтение строительных чертежей', titleEn: 'Reading Construction Drawings', duration: '4 дня', durationEn: '4 days', progress: 0, status: 'locked' },
      { title: 'Дизайн интерьера: основы', titleEn: 'Interior Design: Basics', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Подсобный рабочий на стройке (3 дня)', titleEn: 'Construction helper (3 days)', reward: 500, difficulty: 'Легко', deadline: '3 дня', deadlineEn: '3 days' },
      { title: 'Помощь прорабу на объекте', titleEn: 'Site foreman assistant', reward: 850, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Основы строительства»', nextStepEn: 'Complete "Construction Basics" course',
    skills: [
      { name: 'Строительные материалы', nameEn: 'Building Materials', pct: 40, color: '#a78bfa' },
      { name: 'Чертежи/BIM', nameEn: 'Drawings/BIM', pct: 0, color: '#3B82F6' },
      { name: 'Безопасность труда', nameEn: 'Workplace Safety', pct: 15, color: '#10B981' },
    ],
  },
  tourism: {
    label: 'Туризм и сервис', labelEn: 'Tourism & Hospitality',
    icon: '🧳', color: '#f472b6',
    courses: [
      { title: 'Основы клиентского сервиса', titleEn: 'Customer Service Basics', duration: '2 дня', durationEn: '2 days', progress: 80, status: 'active' },
      { title: 'Гостиничное дело: стандарты', titleEn: 'Hotel Management Standards', duration: '4 дня', durationEn: '4 days', progress: 0, status: 'locked' },
      { title: 'Event-менеджмент: базовый курс', titleEn: 'Event Management: Basics', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Администратор ресепшн (стажировка)', titleEn: 'Receptionist internship', reward: 400, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days' },
      { title: 'Помощник организатора мероприятия', titleEn: 'Event organizer assistant', reward: 650, difficulty: 'Легко', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Основы клиентского сервиса»', nextStepEn: 'Complete "Customer Service Basics" course',
    skills: [
      { name: 'Клиентский сервис', nameEn: 'Customer Service', pct: 80, color: '#f472b6' },
      { name: 'Гостиничное дело', nameEn: 'Hotel Management', pct: 0, color: '#fb923c' },
      { name: 'Event-менеджмент', nameEn: 'Event Management', pct: 20, color: '#3B82F6' },
    ],
  },
  medicine: {
    label: 'Медицина и здоровье', labelEn: 'Medicine & Healthcare',
    icon: '🏥', color: '#34d399',
    courses: [
      { title: 'Основы медицинского ухода', titleEn: 'Medical Care Basics', duration: '5 дней', durationEn: '5 days', progress: 55, status: 'active' },
      { title: 'Первая медицинская помощь', titleEn: 'First Aid', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
      { title: 'Фармацевтика: базовый курс', titleEn: 'Pharmaceutics: Basics', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Волонтёр в больнице (1 неделя)', titleEn: 'Hospital volunteer (1 week)', reward: 0, difficulty: 'Легко', deadline: '7 дней', deadlineEn: '7 days', free: true },
      { title: 'Ассистент медсестры (стажировка)', titleEn: 'Nurse assistant internship', reward: 700, difficulty: 'Средне', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы медицинского ухода»', nextStepEn: 'Complete "Medical Care Basics" course',
    skills: [
      { name: 'Медицинский уход', nameEn: 'Medical Care', pct: 55, color: '#34d399' },
      { name: 'Первая помощь', nameEn: 'First Aid', pct: 20, color: '#3B82F6' },
      { name: 'Фармацевтика', nameEn: 'Pharmaceutics', pct: 0, color: '#a78bfa' },
    ],
  },
  education: {
    label: 'Образование', labelEn: 'Education',
    icon: '🎓', color: '#60a5fa',
    courses: [
      { title: 'Методика преподавания', titleEn: 'Teaching Methodology', duration: '4 дня', durationEn: '4 days', progress: 60, status: 'active' },
      { title: 'Создание онлайн-курса', titleEn: 'Creating an Online Course', duration: '5 дней', durationEn: '5 days', progress: 0, status: 'locked' },
      { title: 'Работа с детьми и взрослыми', titleEn: 'Working with Children & Adults', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Провести урок в школе (практика)', titleEn: 'Conduct a school lesson (practice)', reward: 0, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days', free: true },
      { title: 'Разработать план урока', titleEn: 'Develop a lesson plan', reward: 400, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Методика преподавания»', nextStepEn: 'Complete "Teaching Methodology" course',
    skills: [
      { name: 'Методика', nameEn: 'Methodology', pct: 60, color: '#60a5fa' },
      { name: 'Онлайн-обучение', nameEn: 'Online Learning', pct: 0, color: '#3B82F6' },
      { name: 'Коммуникация', nameEn: 'Communication', pct: 40, color: '#10B981' },
    ],
  },
  production: {
    label: 'Производство', labelEn: 'Manufacturing',
    icon: '🏭', color: '#94a3b8',
    courses: [
      { title: 'Основы промышленного производства', titleEn: 'Industrial Manufacturing Basics', duration: '4 дня', durationEn: '4 days', progress: 40, status: 'active' },
      { title: 'Работа с ЧПУ-станками', titleEn: 'Operating CNC Machines', duration: '8 дней', durationEn: '8 days', progress: 0, status: 'locked' },
      { title: 'Контроль качества продукции', titleEn: 'Product Quality Control', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Помощь технологу на производстве', titleEn: 'Assist production technologist', reward: 600, difficulty: 'Легко', deadline: '3 дня', deadlineEn: '3 days' },
      { title: 'Контроль линии сборки (стажировка)', titleEn: 'Assembly line inspection (internship)', reward: 1000, difficulty: 'Средне', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы промышленного производства»', nextStepEn: 'Complete "Industrial Manufacturing Basics" course',
    skills: [
      { name: 'Промышленные процессы', nameEn: 'Industrial Processes', pct: 40, color: '#94a3b8' },
      { name: 'ЧПУ-станки', nameEn: 'CNC Machines', pct: 0, color: '#3B82F6' },
      { name: 'Контроль качества', nameEn: 'Quality Control', pct: 0, color: '#fbbf24' },
    ],
  },
  finance: {
    label: 'Финансы и бизнес', labelEn: 'Finance & Business',
    icon: '💰', color: '#fbbf24',
    courses: [
      { title: 'Бухгалтерский учёт: основы', titleEn: 'Accounting: Basics', duration: '5 дней', durationEn: '5 days', progress: 50, status: 'active' },
      { title: 'Финансовый анализ для бизнеса', titleEn: 'Financial Analysis for Business', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
      { title: 'Налоги и отчётность в Молдове', titleEn: 'Taxes & Reporting in Moldova', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Составить бухгалтерский баланс', titleEn: 'Prepare an accounting balance sheet', reward: 700, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days' },
      { title: 'Финансовый аудит малого бизнеса', titleEn: 'Financial audit of a small business', reward: 1100, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Бухгалтерский учёт»', nextStepEn: 'Complete "Accounting Basics" course',
    skills: [
      { name: 'Бухгалтерия', nameEn: 'Accounting', pct: 50, color: '#fbbf24' },
      { name: 'Финансовый анализ', nameEn: 'Financial Analysis', pct: 0, color: '#fb923c' },
      { name: 'Налоги', nameEn: 'Taxes', pct: 15, color: '#10B981' },
    ],
  },
  creative: {
    label: 'Креативная индустрия', labelEn: 'Creative Industry',
    icon: '🎨', color: '#e879f9',
    courses: [
      { title: 'Основы графического дизайна', titleEn: 'Graphic Design Basics', duration: '4 дня', durationEn: '4 days', progress: 65, status: 'active' },
      { title: 'Видеомонтаж: базовый курс', titleEn: 'Video Editing: Basics', duration: '5 дней', durationEn: '5 days', progress: 0, status: 'locked' },
      { title: 'SMM и контент-маркетинг', titleEn: 'SMM & Content Marketing', duration: '4 дня', durationEn: '4 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Создать логотип для клиента', titleEn: 'Create a logo for a client', reward: 600, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days' },
      { title: 'Снять и смонтировать рекламный ролик', titleEn: 'Film and edit a promo video', reward: 1000, difficulty: 'Средне', deadline: '7 дней', deadlineEn: '7 days' },
    ],
    nextStep: 'Завершить курс «Основы графического дизайна»', nextStepEn: 'Complete "Graphic Design Basics" course',
    skills: [
      { name: 'Дизайн', nameEn: 'Design', pct: 65, color: '#e879f9' },
      { name: 'Видео', nameEn: 'Video', pct: 0, color: '#f472b6' },
      { name: 'SMM', nameEn: 'SMM', pct: 10, color: '#3B82F6' },
    ],
  },
  crafts: {
    label: 'Рабочие профессии', labelEn: 'Trade Skills',
    icon: '🧑‍🔧', color: '#f87171',
    courses: [
      { title: 'Основы электромонтажа', titleEn: 'Electrical Wiring Basics', duration: '5 дней', durationEn: '5 days', progress: 45, status: 'active' },
      { title: 'Сантехника: монтаж и обслуживание', titleEn: 'Plumbing: Installation & Maintenance', duration: '6 дней', durationEn: '6 days', progress: 0, status: 'locked' },
      { title: 'Автомеханика: базовый курс', titleEn: 'Auto Mechanics: Basics', duration: '7 дней', durationEn: '7 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Помощь электрику на объекте', titleEn: 'Electrician assistant on-site', reward: 500, difficulty: 'Легко', deadline: '3 дня', deadlineEn: '3 days' },
      { title: 'Ремонт сантехники (практика)', titleEn: 'Plumbing repair (practice)', reward: 700, difficulty: 'Средне', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы электромонтажа»', nextStepEn: 'Complete "Electrical Wiring Basics" course',
    skills: [
      { name: 'Электрика', nameEn: 'Electrical', pct: 45, color: '#f87171' },
      { name: 'Сантехника', nameEn: 'Plumbing', pct: 0, color: '#fb923c' },
      { name: 'Механика', nameEn: 'Mechanics', pct: 10, color: '#3B82F6' },
    ],
  },
  government: {
    label: 'Государственный сектор', labelEn: 'Public Sector',
    icon: '🛡️', color: '#818cf8',
    courses: [
      { title: 'Основы государственного управления', titleEn: 'Public Administration Basics', duration: '4 дня', durationEn: '4 days', progress: 50, status: 'active' },
      { title: 'Делопроизводство и документооборот', titleEn: 'Records & Document Management', duration: '3 дня', durationEn: '3 days', progress: 0, status: 'locked' },
      { title: 'Правовые основы госслужбы', titleEn: 'Legal Foundations of Civil Service', duration: '5 дней', durationEn: '5 days', progress: 0, status: 'locked' },
    ],
    tasks: [
      { title: 'Стажировка в муниципалитете', titleEn: 'Municipality internship', reward: 0, difficulty: 'Легко', deadline: '7 дней', deadlineEn: '7 days', free: true },
      { title: 'Обработка гражданских обращений', titleEn: 'Processing citizen requests', reward: 450, difficulty: 'Легко', deadline: '5 дней', deadlineEn: '5 days' },
    ],
    nextStep: 'Завершить курс «Основы государственного управления»', nextStepEn: 'Complete "Public Administration Basics" course',
    skills: [
      { name: 'Госуправление', nameEn: 'Public Admin', pct: 50, color: '#818cf8' },
      { name: 'Делопроизводство', nameEn: 'Records Mgmt', pct: 0, color: '#a78bfa' },
      { name: 'Правовая база', nameEn: 'Legal Basis', pct: 20, color: '#3B82F6' },
    ],
  },
}

const goalLabels = {
  income: 'Получить первый официальный доход',
  career: 'Построить карьеру',
  business: 'Открыть собственный бизнес',
  requalify: 'Сменить профессию',
}

const goalLabelsEn = {
  income: 'Get first official income',
  career: 'Build a career',
  business: 'Start own business',
  requalify: 'Change profession',
}

const regionTranslations = {
  'Кишинёв': 'Chisinau', 'Бельцы': 'Bălți', 'Тирасполь': 'Tiraspol',
  'Оргеев': 'Orhei', 'Унгены': 'Ungheni', 'Кагул': 'Cahul',
  'Сорока': 'Soroca', 'Хынчешть': 'Hîncești', 'Стрэшень': 'Strășeni',
  'АТО Гагаузия': 'ATU Gagauzia', 'Другой район': 'Other district',
}
const educationTranslations = {
  'Начальное образование': 'Primary education',
  'Среднее образование': 'Secondary education',
  'Среднее специальное': 'Vocational / secondary specialised',
  'Незаконченное высшее': 'Incomplete higher education',
  'Высшее образование': 'Higher education',
}

const tabsRu = [
  { label: 'Главная',          short: 'Главная',   icon: '🏠' },
  { label: 'Обучение',         short: 'Учёба',     icon: '📚' },
  { label: 'Задания',          short: 'Задания',   icon: '✅' },
  { label: 'Навыки',           short: 'Навыки',    icon: '📊' },
  { label: 'Поддержка бизнеса',short: 'Бизнес',    icon: '🚀' },
  { label: 'Найти партнёра',   short: 'Сеть',      icon: '🤝' },
  { label: 'Чаты',             short: 'Чаты',      icon: '💬' },
  { label: 'Профиль',          short: 'Профиль',   icon: '👤' },
]

const tabsEn = [
  { label: 'Home',             short: 'Home',      icon: '🏠' },
  { label: 'Learning',         short: 'Learn',     icon: '📚' },
  { label: 'Tasks',            short: 'Tasks',     icon: '✅' },
  { label: 'Skills',           short: 'Skills',    icon: '📊' },
  { label: 'Business Support', short: 'Business',  icon: '🚀' },
  { label: 'Find Partner',     short: 'Network',   icon: '🤝' },
  { label: 'Chats',            short: 'Chats',     icon: '💬' },
  { label: 'Profile',          short: 'Profile',   icon: '👤' },
]

// ── Chat data ──
function getInitialChats(en) {
  return [
    {
      id: 'support',
      name: en ? 'Project Support' : 'Поддержка программы',
      avatar: '🛡️',
      avatarColor: '#3B82F6',
      role: en ? 'Official Support' : 'Официальная поддержка',
      online: true,
      messages: [
        { from: 'them', text: en ? 'Welcome to the Growth Point program! 👋 I am your coordinator. Ready to help with any program questions.' : 'Добро пожаловать в программу «Точка Роста»! 👋 Я ваш координатор. Готов помочь с любыми вопросами по программе.', time: '09:00' },
        { from: 'them', text: en ? 'Your application has been accepted and processed. I recommend starting with the course for your track.' : 'Ваша заявка принята и обработана. Рекомендую начать с курса по вашему треку.', time: '09:01' },
      ],
    },
    {
      id: 'mentor_andrei',
      name: 'Andrei Popescu',
      avatar: 'A',
      avatarColor: '#3B82F6',
      role: en ? 'Business Consultant · Mentor' : 'Бизнес-консультант · Ментор',
      online: true,
      messages: [
        { from: 'them', text: en ? 'Hey! I can see you chose an entrepreneurship track. Great choice 💪' : 'Привет! Вижу, ты выбрал предпринимательский трек. Отличный выбор 💪', time: '10:15' },
        { from: 'them', text: en ? 'If you have questions about a business plan or registering a business — write to me, we\'ll figure it out together.' : 'Если есть вопросы по бизнес-плану или регистрации бизнеса — пиши, разберёмся вместе.', time: '10:16' },
      ],
    },
    {
      id: 'mentor_elena',
      name: 'Elena Rusu',
      avatar: 'E',
      avatarColor: '#f472b6',
      role: en ? 'Marketing Mentor' : 'Маркетинг-ментор',
      online: false,
      messages: [
        { from: 'them', text: en ? 'Hi! I\'m your marketing mentor. Let\'s get acquainted — tell me about your project?' : 'Привет! Я твой маркетинг-ментор. Давай познакомимся — расскажи о своём проекте?', time: en ? 'Yesterday' : 'Вчера' },
      ],
    },
    {
      id: 'partner_dmitry',
      name: 'Dmitry K.',
      avatar: 'D',
      avatarColor: '#3B82F6',
      role: en ? 'Program Participant · IT Track' : 'Участник программы · IT трек',
      online: true,
      messages: [
        { from: 'them', text: en ? 'Hey, saw your profile in the "Find a Partner" section. I have similar goals — want to launch a startup.' : 'Привет, увидел твой профиль в разделе «Найти партнёра». У меня похожие цели — хочу запустить стартап.', time: '14:30' },
        { from: 'them', text: en ? 'Maybe we could hop on a call and discuss potential collaboration?' : 'Может, созвонимся и обсудим потенциальное сотрудничество?', time: '14:31' },
      ],
    },
    {
      id: 'partner_anna',
      name: 'Anna M.',
      avatar: 'A',
      avatarColor: '#a78bfa',
      role: en ? 'Program Participant · Entrepreneurship' : 'Участница программы · Предпринимательство',
      online: false,
      messages: [
        { from: 'them', text: en ? 'Hello! I looked at your profile — I think we could complement each other really well.' : 'Привет! Посмотрела твой профиль — думаю, мы отлично дополним друг друга.', time: en ? 'Yesterday' : 'Вчера' },
        { from: 'them', text: en ? 'I work in SMM and sales, looking for a partner with technical skills.' : 'Я занимаюсь SMM и продажами, ищу партнёра с техническими навыками.', time: en ? 'Yesterday' : 'Вчера' },
      ],
    },
    {
      id: 'employer_tech',
      name: 'TechMoldova SRL',
      avatar: '💼',
      avatarColor: '#10B981',
      role: en ? 'Partner Employer · IT' : 'Работодатель-партнёр · IT',
      online: true,
      messages: [
        { from: 'them', text: en ? 'Hello! We reviewed your profile in the Growth Point program system.' : 'Здравствуйте! Мы ознакомились с вашим профилем в системе программы «Точка Роста».', time: '11:00' },
        { from: 'them', text: en ? 'We have an open vacancy for Junior Frontend Developer. We\'re ready to interview this week.' : 'У нас открыта вакансия Junior Frontend Developer. Готовы провести собеседование на этой неделе.', time: '11:02' },
      ],
    },
    {
      id: 'ai_assistant',
      name: 'Lumi',
      avatar: '✦',
      avatarColor: '#3B82F6',
      role: en ? 'Lumi · AI Assistant · Growth Point' : 'Lumi · ИИ-ассистент · Точка Роста',
      online: true,
      isAI: true,
      messages: [
        { from: 'them', text: en ? '👋 Hi! I\'m **Lumi** — the AI assistant of the **Growth Point** program. I can answer any question about the program, tracks, grants, employment and much more ✨' : '👋 Привет! Я **Lumi** — ИИ-ассистент программы **«Точка Роста»**. Отвечу на любой вопрос о программе, треках, грантах, трудоустройстве и многом другом ✨', time: '00:00' },
      ],
    },
  ]
}

// ── OpenAI chat ──
const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

function getChatPersonas(en) {
  const lang = en ? 'English' : 'Russian'
  return {
    support: `You are a live support coordinator for the Growth Point program (Moldova). Carefully read each user message and answer exactly what they are asking. Reply concisely and to the point, in ${lang}. The program helps unemployed citizens gain skills and find employment. If the question is not related to the program — still reply politely and help.`,
    mentor_andrei: `You are Andrei Popescu, an experienced business consultant and mentor. Carefully read each message and reply to exactly what was asked — do not ignore questions. Specialisation: entrepreneurship, business registration, business plans, fundraising. Communicate in a friendly, human way, in ${lang}.`,
    mentor_elena: `You are Elena Rusu, a marketing mentor. Carefully read each message and answer the question precisely. Specialisation: SMM, targeted advertising, content marketing, business promotion. Reply warmly and naturally, in ${lang}.`,
    partner_dmitry: `You are Dmitry, a Growth Point program participant on the IT track, developing a startup. Read each message carefully and reply like a real person. Communicate informally, like a friend and potential partner, in ${lang}.`,
    partner_anna: `You are Anna, a Growth Point program participant specialising in SMM and sales. Read each message and answer exactly what is asked. Communicate in a friendly and concrete way, in ${lang}.`,
    employer_tech: `You are an HR manager at TechMoldova SRL. Carefully read each candidate message and reply concretely. You are discussing the Junior Frontend Developer vacancy. Communicate professionally and to the point, in ${lang}.`,
    ai_assistant: `You are Lumi, the AI assistant of the Growth Point program (Moldova). Do NOT introduce yourself or say your name in replies — the user already knows who you are. Just answer directly. You know everything about the program: 13 tracks (Digital Economy, Energy, Agriculture, Logistics, Construction, Tourism, Medicine, Education, Manufacturing, Finance, Creative Industry, Trade Skills, Public Sector), grants up to 25,000 MDL, ODIMM loans at 5%, mentorship, employment, regions. Be helpful, friendly and specific. Never start with "I'm Lumi" or any self-introduction. Reply in ${lang}.`,
  }
}

async function getAIReply(chatId, messages, en, retries = 2) {
  const chatPersonas = getChatPersonas(en)
  const persona = chatPersonas[chatId] || chatPersonas.support
  const history = messages.slice(-10).map(m => ({
    role: m.from === 'me' ? 'user' : 'assistant',
    content: m.text,
  }))
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_KEY}` },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'system', content: persona }, ...history],
          max_tokens: 300,
          temperature: 0.7,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content?.trim()
      if (reply) return reply
      throw new Error('empty response')
    } catch (e) {
      if (attempt === retries) throw e
      await new Promise(r => setTimeout(r, 800 * (attempt + 1)))
    }
  }
}

// ── Business support data ──
const mentors = [
  { name: 'Andrei Popescu', role: 'Бизнес-консультант', roleEn: 'Business Consultant', spec: 'Стартапы, финансовая модель', specEn: 'Startups, financial modelling', exp: '12 лет', expEn: '12 years', rating: 4.9, slots: 3, avatar: 'A', color: '#3B82F6' },
  { name: 'Maria Lupu', role: 'Юридический советник', roleEn: 'Legal Advisor', spec: 'Регистрация ИП/ООО, договоры', specEn: 'Business registration, contracts', exp: '8 лет', expEn: '8 years', rating: 4.8, slots: 1, avatar: 'M', color: '#a78bfa' },
  { name: 'Victor Ciobanu', role: 'Финансовый наставник', roleEn: 'Finance Mentor', spec: 'Бухгалтерия, налоги, льготы', specEn: 'Accounting, taxes, benefits', exp: '15 лет', expEn: '15 years', rating: 5.0, slots: 2, avatar: 'V', color: '#10B981' },
  { name: 'Elena Rusu', role: 'Маркетинг-ментор', roleEn: 'Marketing Mentor', spec: 'Digital-маркетинг, соцсети, продажи', specEn: 'Digital marketing, social media, sales', exp: '6 лет', expEn: '6 years', rating: 4.7, slots: 4, avatar: 'E', color: '#f472b6' },
]

const grants = [
  { title: 'Стартовый грант для ИП', titleEn: 'Startup Grant for Sole Traders', amount: '25 000 MDL', amountEn: '25,000 MDL', deadline: '15 мая 2025', deadlineEn: 'May 15, 2025', tag: 'Открыт', tagEn: 'Open', tagColor: '#10B981', desc: 'Для участников программы, завершивших предпринимательский трек. Без залога.', descEn: 'For program participants who completed the entrepreneurship track. No collateral required.', icon: '💰' },
  { title: 'Льготный кредит ODIMM', titleEn: 'ODIMM Subsidized Loan', amount: 'до 150 000 MDL', amountEn: 'up to 150,000 MDL', deadline: '30 июня 2025', deadlineEn: 'June 30, 2025', tag: 'Открыт', tagEn: 'Open', tagColor: '#10B981', desc: 'Ставка 5% годовых. Для малого бизнеса в регионах Молдовы.', descEn: '5% annual rate. For small businesses across Moldova regions.', icon: '🏦' },
  { title: 'Грант «Зелёный бизнес»', titleEn: '"Green Business" Grant', amount: '40 000 MDL', amountEn: '40,000 MDL', deadline: '1 июля 2025', deadlineEn: 'July 1, 2025', tag: 'Скоро', tagEn: 'Soon', tagColor: '#fbbf24', desc: 'Поддержка экологичных и агро-проектов. Для регионов вне Кишинёва.', descEn: 'Support for eco-friendly and agro projects. For regions outside Chișinău.', icon: '🌿' },
  { title: 'EU4Moldova: поддержка МСП', titleEn: 'EU4Moldova: SME Support', amount: 'до €10 000', amountEn: 'up to €10,000', deadline: '31 августа 2025', deadlineEn: 'August 31, 2025', tag: 'Скоро', tagEn: 'Soon', tagColor: '#fbbf24', desc: 'Европейская программа для молодых предпринимателей до 35 лет.', descEn: 'European programme for young entrepreneurs under 35.', icon: '🇪🇺' },
]

const bizTools = [
  { icon: '📄', title: 'Шаблон бизнес-плана', titleEn: 'Business Plan Template', desc: 'Готовая структура под банк или инвестора', descEn: 'Ready-made structure for a bank or investor', action: 'Скачать .docx', actionEn: 'Download .docx' },
  { icon: '📊', title: 'Финансовая модель Excel', titleEn: 'Excel Financial Model', desc: 'Расчёт прибыли, точки безубыточности', descEn: 'Profit calculation and break-even analysis', action: 'Скачать .xlsx', actionEn: 'Download .xlsx' },
  { icon: '⚖️', title: 'Договор с клиентом', titleEn: 'Client Contract Template', desc: 'Юридически проверенный шаблон', descEn: 'Legally verified template', action: 'Скачать .docx', actionEn: 'Download .docx' },
  { icon: '🧾', title: 'Инструкция регистрации ИП', titleEn: 'Business Registration Guide', desc: 'Пошаговый гайд за 1 день', descEn: 'Step-by-step guide in 1 day', action: 'Открыть PDF', actionEn: 'Open PDF' },
  { icon: '📱', title: 'Чеклист запуска бизнеса', titleEn: 'Business Launch Checklist', desc: '30 шагов от идеи до первого клиента', descEn: '30 steps from idea to first client', action: 'Открыть', actionEn: 'Open' },
  { icon: '🎓', title: 'Видео: налоги для ИП', titleEn: 'Video: Taxes for Sole Traders', desc: 'Объяснение от эксперта за 15 минут', descEn: 'Expert explanation in 15 minutes', action: 'Смотреть', actionEn: 'Watch' },
]

const events = [
  { title: 'Вебинар: Как зарегистрировать ИП за 1 день', titleEn: 'Webinar: How to Register a Business in 1 Day', date: '14 апр, 18:00', dateEn: 'Apr 14, 18:00', format: 'Онлайн', formatEn: 'Online', seats: 12, color: '#3B82F6' },
  { title: 'Мастер-класс: Финансовая модель стартапа', titleEn: 'Workshop: Startup Financial Model', date: '19 апр, 14:00', dateEn: 'Apr 19, 14:00', format: 'Кишинёв', formatEn: 'Chișinău', seats: 5, color: '#a78bfa' },
  { title: 'Нетворкинг для предпринимателей', titleEn: 'Entrepreneur Networking Event', date: '26 апр, 17:00', dateEn: 'Apr 26, 17:00', format: 'Кишинёв', formatEn: 'Chișinău', seats: 20, color: '#10B981' },
]

// ── Partner search data ──
const partnerProfiles = [
  { name: 'Dmitry K.', age: 24, region: 'Chișinău', track: 'IT & Digital Services', trackRu: 'IT и цифровые услуги', trackIcon: '💻', trackColor: '#3B82F6', goal: 'Launch a startup', goalRu: 'Запустить стартап', skills: ['React', 'Node.js', 'UI/UX'], lookingFor: 'Co-founder with sales skills', lookingForRu: 'Со-основатель с навыками продаж', avatar: 'D' },
  { name: 'Anna M.', age: 27, region: 'Bălți', track: 'Entrepreneurship', trackRu: 'Предпринимательство', trackIcon: '🚀', trackColor: '#a78bfa', goal: 'Scale sole trader business', goalRu: 'Масштабировать бизнес ИП', skills: ['SMM', 'Canva', 'Продажи'], lookingFor: 'Manufacturing partner', lookingForRu: 'Партнёр в производстве', avatar: 'A' },
  { name: 'Ion B.', age: 31, region: 'Orhei', track: 'Agriculture', trackRu: 'Агросектор', trackIcon: '🌾', trackColor: '#fbbf24', goal: 'Launch an agribusiness', goalRu: 'Открыть агробизнес', skills: ['Агрономия', 'Логистика', 'Excel'], lookingFor: 'Investor or business partner', lookingForRu: 'Инвестор или бизнес-партнёр', avatar: 'I' },
  { name: 'Valentina S.', age: 22, region: 'Chișinău', track: 'IT & Digital Services', trackRu: 'IT и цифровые услуги', trackIcon: '💻', trackColor: '#3B82F6', goal: 'Freelance career', goalRu: 'Карьера фрилансера', skills: ['Python', 'Data Science', 'SQL'], lookingFor: 'Mentor or startup team', lookingForRu: 'Ментор или стартап-команда', avatar: 'V' },
  { name: 'Ruslan P.', age: 35, region: 'Cahul', track: 'Manufacturing', trackRu: 'Производство', trackIcon: '🏭', trackColor: '#10B981', goal: 'Open a workshop', goalRu: 'Открыть мастерскую', skills: ['Металлообработка', 'ЧПУ', 'Управление'], lookingFor: 'Partner with financial expertise', lookingForRu: 'Партнёр с финансовой экспертизой', avatar: 'R' },
  { name: 'Cristina D.', age: 29, region: 'Chișinău', track: 'Service Industry', trackRu: 'Сфера услуг', trackIcon: '🛎️', trackColor: '#f472b6', goal: 'Open a beauty salon', goalRu: 'Открыть салон красоты', skills: ['Управление', 'Маркетинг', 'HR'], lookingFor: 'Beauty business partner', lookingForRu: 'Партнёр в бьюти-бизнесе', avatar: 'C' },
]

const employers = [
  { name: 'TechMoldova SRL', sector: 'IT', sectorRu: 'IT', icon: '💻', vacancies: 3, location: 'Chișinău', color: '#3B82F6', desc: 'Looking for Junior developers and QA engineers. Official employment, training provided.', descRu: 'Ищем Junior-разработчиков и QA-инженеров. Официальное трудоустройство, обучение.' },
  { name: 'AgroCluster Nord', sector: 'Agriculture', sectorRu: 'Агросектор', icon: '🌾', vacancies: 8, location: 'Bălți', color: '#fbbf24', desc: 'Equipment operators and agronomists needed. Accommodation provided.', descRu: 'Требуются операторы техники и агрономы. Предоставляется жильё.' },
  { name: 'LogiTrans MD', sector: 'Logistics', sectorRu: 'Логистика', icon: '🚛', vacancies: 5, location: 'Chișinău', color: '#fb923c', desc: 'C/E drivers, warehouse operators, logisticians. Stable income.', descRu: 'Водители C/E, операторы склада, логисты. Стабильный доход.' },
  { name: 'FactoryPrime', sector: 'Manufacturing', sectorRu: 'Производство', icon: '🏭', vacancies: 12, location: 'Ungheni', color: '#10B981', desc: 'Production line operators. On-site training and benefits.', descRu: 'Операторы производственной линии. Обучение на месте и льготы.' },
]

function ProgressBar({ pct, color, height = 8 }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(pct), 300); return () => clearTimeout(t) }, [pct])
  return (
    <div style={{ background: 'var(--bg-el)', borderRadius: 99, overflow: 'hidden', height }}>
      <div style={{ height: '100%', width: `${w}%`, background: `linear-gradient(90deg,${color}88,${color})`, borderRadius: 99, transition: 'width 1s cubic-bezier(0.4,0,0.2,1)' }} />
    </div>
  )
}

export default function PersonalCabinet({ user, onLogout }) {
  const { lang } = useLang()
  const en = lang === 'en'
  const tabs = en ? tabsEn : tabsRu
  const goalLabel = en ? (goalLabelsEn[user.goal] || user.goal) : (goalLabels[user.goal] || user.goal)
  const [activeTab, setActiveTab] = useState(0)
  const [takenTasks, setTakenTasks] = useState({})
  const [bookedMentors, setBookedMentors] = useState({})
  const [registeredEvents, setRegisteredEvents] = useState({})
  const [sentRequests, setSentRequests] = useState({})
  const [filterRegion, setFilterRegion] = useState('all')
  const [filterTrack, setFilterTrack] = useState('all')
  const [chats, setChats] = useState(() => getInitialChats(lang === 'en'))
  const [activeChatId, setActiveChatId] = useState(null)
  useEffect(() => {
    setChats(getInitialChats(lang === 'en'))
    setActiveChatId(null)
  }, [lang])
  const [chatInput, setChatInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  const messagesEndRef = useRef(null)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats, activeChatId])
  const track = trackData[user.track] || trackData.digital
  const overallProgress = Math.round(track.skills.reduce((acc, s) => acc + s.pct, 0) / track.skills.length)
  const firstName = user.firstName || user.name?.split(' ')[0] || (en ? 'Participant' : 'Участник')

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Top nav */}
      <nav style={{
        background: 'var(--nav-bg)', borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, #3B82F6, #10b981)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 13, color: '#fff'
            }}>{en ? 'G' : 'Т'}</div>
            <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>{en ? 'Growth Point' : 'Точка Роста'}</span>
            <span style={{ color: 'var(--text-3)', fontSize: 13, margin: '0 2px' }} className="hidden md:inline">·</span>
            <span style={{ color: 'var(--text-2)', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="hidden md:inline">{en ? 'Dashboard' : 'Личный кабинет'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 10px', borderRadius: 10,
              background: 'var(--bg-el)', border: '1px solid var(--border)'
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg, ${track.color}40, ${track.color}20)`,
                border: `1px solid ${track.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: track.color
              }}>{firstName[0]?.toUpperCase()}</div>
              <span style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600 }}>{firstName}</span>
            </div>
            <button onClick={onLogout} className="btn-outline" style={{ padding: '5px 12px', borderRadius: 9, fontSize: 12 }}>
              {en ? 'Log out' : 'Выйти'}
            </button>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: 'flex', gap: 0, minWidth: 'max-content', padding: '0 clamp(12px,4vw,24px)' }}>
          {tabs.map((tab, i) => {
            const isActive = activeTab === i
            return (
              <button key={tab.label} onClick={() => setActiveTab(i)} style={{
                padding: isMobile ? '8px 10px' : '12px 16px',
                border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                background: 'transparent', fontWeight: 600,
                color: isActive ? 'var(--text)' : 'var(--text-2)',
                borderBottom: isActive ? `2px solid ${track.color}` : '2px solid transparent',
                borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
                display: 'flex', flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center', gap: isMobile ? 3 : 6,
              }}>
                {isMobile ? (
                  <>
                    <span style={{
                      fontSize: 18, lineHeight: 1,
                      opacity: isActive ? 1 : 0.6,
                      filter: isActive ? 'none' : 'grayscale(40%)',
                    }}>{tab.icon}</span>
                    <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 500 }}>{tab.short}</span>
                  </>
                ) : (
                  <span style={{ fontSize: 13, fontWeight: isActive ? 700 : 500 }}>{tab.label}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <main className="container" style={{ padding: 'clamp(16px,4vw,32px) clamp(12px,4vw,24px)' }}>
        {/* ── TAB 0: Главная ── */}
        {activeTab === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Welcome card */}
            <div style={{
              borderRadius: 22, padding: '28px 32px',
              background: `linear-gradient(135deg, ${track.color}12, rgba(16,185,129,0.06))`,
              border: `1px solid ${track.color}25`,
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', right: -20, top: -20, width: 150, height: 150, borderRadius: '50%',
                background: `radial-gradient(${track.color}18, transparent)`, pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ color: 'var(--text-2)', fontSize: 13, margin: '0 0 6px 0', fontWeight: 600 }}>{en ? 'Welcome' : 'Добро пожаловать'}</p>
                <h1 style={{ color: 'var(--text)', fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, margin: '0 0 8px 0' }}>
                  {en ? 'Hi, ' : 'Привет, '}<span style={{ color: track.color }}>{firstName}!</span> 👋
                </h1>
                <p style={{ color: 'var(--text-2)', fontSize: 14, margin: '0 0 20px 0' }}>
                  {user.age} {en ? 'y.o.' : 'лет'} · {en ? (regionTranslations[user.region] || user.region) : user.region} · {en ? 'Track:' : 'Трек:'} {track.icon} {en ? track.labelEn : track.label}
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                    color: '#10B981', fontSize: 12, fontWeight: 600
                  }}>✓ {en ? 'Application accepted' : 'Заявка принята'}</span>
                  <span style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: 'var(--bg-el)', border: '1px solid var(--border)',
                    color: 'var(--text-2)', fontSize: 12
                  }}>🎯 {goalLabel}</span>
                </div>
              </div>
            </div>

            {/* Progress + Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: 16 }}>
              <div className="card" style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{en ? 'Overall progress' : 'Общий прогресс'}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>{en ? 'Path to first employment' : 'Путь к первому трудоустройству'}</div>
                  </div>
                  <div style={{ color: track.color, fontWeight: 900, fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{overallProgress}%</div>
                </div>
                <ProgressBar pct={overallProgress} color={track.color} height={10} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, gap: 4 }}>
                  <span style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'Start' : 'Старт'}</span>
                  <span style={{ color: track.color, fontSize: 11, fontWeight: 600, textAlign: 'center' }}>{en ? `You're ${overallProgress}% there!` : `Ты на ${overallProgress}% пути!`}</span>
                  <span style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'Goal' : 'Цель'}</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr', gap: 10 }}>
                {[
                  { icon: '📚', label: en ? 'Courses completed' : 'Курсов пройдено', value: `1/${track.courses.length}` },
                  { icon: '⭐', label: en ? 'Level' : 'Уровень', value: '1' },
                ].map((s, i) => (
                  <div key={i} className="card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{s.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: track.color, fontWeight: 800, fontSize: 18 }}>{s.value}</div>
                      <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next step */}
            <div className="card-highlight" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{en ? 'Next step' : 'Следующий шаг'}</div>
                  <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{en ? track.nextStepEn || track.nextStep : track.nextStep}</div>
                </div>
                <button className="btn-primary" onClick={() => setActiveTab(1)} style={{ padding: '11px 24px', borderRadius: 11, fontSize: 14, whiteSpace: 'nowrap' }}>
                  {en ? 'Continue journey →' : 'Продолжить путь →'}
                </button>
              </div>
            </div>

            {/* Available tasks preview */}
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{en ? 'Available tasks' : 'Доступные задания'}</div>
                <button onClick={() => setActiveTab(2)} style={{ background: 'none', border: 'none', color: track.color, fontSize: 13, cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}>{en ? 'All →' : 'Все →'}</button>
              </div>
              {track.tasks.slice(0, 2).map((t, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 0', borderBottom: i < 1 ? '1px solid var(--border)' : 'none'
                }}>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: 14, fontWeight: 500 }}>{en ? t.titleEn : t.title}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>⏱ {en ? t.deadlineEn : t.deadline}</div>
                  </div>
                  {t.reward > 0 && <div style={{ color: '#10B981', fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{t.reward} L</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 1: Обучение ── */}
        {activeTab === 1 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 20, margin: '0 0 4px 0' }}>{en ? 'My Courses' : 'Мои курсы'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 13, margin: 0 }}>{en ? 'Track:' : 'Трек:'} {track.icon} {en ? track.labelEn : track.label}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {track.courses.map((course, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 14 }}>
                    <div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                        {course.status === 'active' && <span style={{ padding: '2px 9px', borderRadius: 20, background: 'rgba(16,185,129,0.12)', color: '#10B981', fontSize: 11, fontWeight: 700 }}>{en ? 'In progress' : 'В процессе'}</span>}
                        {course.status === 'locked' && <span style={{ padding: '2px 9px', borderRadius: 20, background: 'var(--bg-el)', color: 'var(--text-2)', fontSize: 11, fontWeight: 700 }}>🔒 {en ? 'Locked' : 'Заблокирован'}</span>}
                      </div>
                      <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16 }}>{en ? course.titleEn : course.title}</div>
                      <div style={{ color: 'var(--text-2)', fontSize: 13, marginTop: 4 }}>⏱ {en ? course.durationEn : course.duration}</div>
                    </div>
                    {course.status !== 'locked' && (
                      <button className="btn-primary" style={{ padding: '10px 22px', borderRadius: 10, fontSize: 13, flexShrink: 0 }}>
                        {course.progress > 0 ? (en ? 'Continue' : 'Продолжить') : (en ? 'Start' : 'Начать')}
                      </button>
                    )}
                  </div>
                  {course.status !== 'locked' && (
                    <>
                      <ProgressBar pct={course.progress} color={track.color} height={7} />
                      <div style={{ color: 'var(--text-2)', fontSize: 11, marginTop: 5 }}>{course.progress}% {en ? 'completed' : 'завершено'}</div>
                    </>
                  )}
                  {course.status === 'locked' && (
                    <div style={{ color: 'var(--text-3)', fontSize: 12 }}>{en ? 'Unlocks after completing the previous course' : 'Откроется после завершения предыдущего курса'}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: Задания ── */}
        {activeTab === 2 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 20, margin: '0 0 4px 0' }}>{en ? 'Available Tasks' : 'Доступные задания'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 13, margin: 0 }}>{en ? 'Real tasks for your track — real earnings' : 'Реальные задания под твой трек — реальные деньги'}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {track.tasks.map((task, i) => (
                <div key={i} style={{
                  padding: 24, borderRadius: 18,
                  background: takenTasks[i] ? `linear-gradient(135deg,${track.color}0c,rgba(16,185,129,0.05))` : 'var(--bg)',
                  border: takenTasks[i] ? `1px solid ${track.color}30` : '1px solid var(--border)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
                    <div>
                      <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16 }}>{en ? task.titleEn : task.title}</div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
                        <span style={{ color: 'var(--text-2)', fontSize: 12 }}>⏱ {en ? task.deadlineEn : task.deadline}</span>
                        <span style={{
                          padding: '2px 9px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                          background: task.difficulty === 'Легко' ? 'rgba(52,211,153,0.1)' : 'rgba(251,191,36,0.1)',
                          color: task.difficulty === 'Легко' ? '#10B981' : '#fbbf24',
                        }}>{task.difficulty === 'Легко' ? (en ? 'Easy' : 'Легко') : (en ? 'Medium' : 'Средне')}</span>
                      </div>
                    </div>
                    {task.reward > 0 && (
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: '#10B981', fontWeight: 900, fontSize: 26 }}>{task.reward}</div>
                        <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'L (lei)' : 'леев'}</div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setTakenTasks(p => ({ ...p, [i]: !p[i] }))}
                    className={takenTasks[i] ? '' : 'btn-primary'}
                    style={{
                      width: '100%', padding: '11px', borderRadius: 11, border: 'none',
                      cursor: 'pointer', fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14,
                      background: takenTasks[i] ? `${track.color}18` : undefined,
                      color: takenTasks[i] ? track.color : '#fff',
                      outline: takenTasks[i] ? `1px solid ${track.color}30` : 'none'
                    }}>
                    {takenTasks[i] ? (en ? '✓ Task accepted — working on it' : '✓ Задание взято — работаю') : (en ? 'Accept task' : 'Взять задание')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: Навыки ── */}
        {activeTab === 3 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 20, margin: '0 0 4px 0' }}>{en ? 'My Skills' : 'Мои навыки'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 13, margin: 0 }}>{en ? 'Track development progress' : 'Прогресс развития по треку'}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {track.skills.map((skill, i) => (
                <div key={i} className="card" style={{ padding: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div>
                      <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{en ? skill.nameEn : skill.name}</div>
                      <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>
                        {skill.pct === 0 ? (en ? 'Not started' : 'Не начато') : skill.pct < 40 ? (en ? 'Beginner' : 'Начальный') : skill.pct < 70 ? (en ? 'Intermediate' : 'Средний') : (en ? 'Advanced' : 'Продвинутый')}
                      </div>
                    </div>
                    <div style={{ color: skill.pct > 0 ? skill.color : 'var(--text-3)', fontWeight: 800, fontSize: 20 }}>{skill.pct}%</div>
                  </div>
                  <ProgressBar pct={skill.pct} color={skill.color} height={10} />
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 18, padding: '16px 20px', borderRadius: 14,
              background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(56,189,248,0.15)'
            }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <span style={{ color: 'var(--text-2)', fontSize: 14, marginLeft: 10 }}>
                <strong style={{ color: '#3B82F6' }}>{en ? 'Tip:' : 'Подсказка:'}</strong> {en ? 'Complete the next course to level up your skills and unlock new tasks!' : 'Завершите следующий курс, чтобы прокачать навыки и получить доступ к новым заданиям!'}
              </span>
            </div>
          </div>
        )}

        {/* ── TAB 4: Поддержка бизнеса ── */}
        {activeTab === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Header */}
            <div style={{
              borderRadius: 20, padding: '24px 28px',
              background: 'linear-gradient(135deg, rgba(167,139,250,0.1), rgba(56,189,248,0.07))',
              border: '1px solid rgba(167,139,250,0.2)'
            }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 22, margin: '0 0 6px 0' }}>🚀 {en ? 'Business Support' : 'Поддержка бизнеса'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 14, margin: 0 }}>{en ? 'Mentors, grants, tools and events — everything to launch your business' : 'Менторы, гранты, инструменты и мероприятия — всё для запуска твоего дела'}</p>
            </div>

            {/* Mentors */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17 }}>{en ? 'Mentors & Consultants' : 'Менторы и консультанты'}</div>
                <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{en ? 'Free for program participants' : 'Бесплатно для участников программы'}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 14 }}>
                {mentors.map((m, i) => (
                  <div key={i} className="card" style={{ padding: 22 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                        background: `linear-gradient(135deg,${m.color}30,${m.color}12)`,
                        border: `1.5px solid ${m.color}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, fontSize: 18, color: m.color
                      }}>{m.avatar}</div>
                      <div>
                        <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{m.name}</div>
                        <div style={{ color: m.color, fontSize: 12, fontWeight: 600 }}>{en ? m.roleEn : m.role}</div>
                      </div>
                    </div>
                    <div style={{ color: 'var(--text-2)', fontSize: 13, marginBottom: 10 }}>{en ? m.specEn : m.spec}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                      <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{en ? 'Experience:' : 'Опыт:'} <span style={{ color: 'var(--text-2)' }}>{en ? m.expEn : m.exp}</span></span>
                      <span style={{ color: '#fbbf24', fontSize: 12 }}>★ {m.rating}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                        background: m.slots > 0 ? 'rgba(16,185,129,0.10)' : 'var(--bg-el)',
                        color: m.slots > 0 ? '#10B981' : 'var(--text-3)'
                      }}>{m.slots > 0 ? (en ? `${m.slots} slots free` : `${m.slots} слота свободно`) : (en ? 'No slots' : 'Нет мест')}</span>
                      <button
                        onClick={() => setBookedMentors(p => ({ ...p, [i]: !p[i] }))}
                        style={{
                          padding: '7px 16px', borderRadius: 9, border: 'none', cursor: 'pointer',
                          fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12,
                          background: bookedMentors[i] ? 'rgba(52,211,153,0.15)' : `linear-gradient(135deg,${m.color}cc,${m.color})`,
                          color: bookedMentors[i] ? '#10B981' : '#fff',
                          outline: bookedMentors[i] ? '1px solid rgba(52,211,153,0.3)' : 'none',
                          transition: 'all 0.2s'
                        }}>
                        {bookedMentors[i] ? (en ? '✓ Booked' : '✓ Записан') : (en ? 'Book' : 'Записаться')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grants */}
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>{en ? 'Grants & Funding' : 'Гранты и финансирование'}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 14 }}>
                {grants.map((g, i) => (
                  <div key={i} className="card" style={{ padding: 22 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 24 }}>{g.icon}</span>
                        <div>
                          <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>{en ? g.titleEn : g.title}</div>
                          <div style={{ color: '#10B981', fontWeight: 800, fontSize: 18, marginTop: 2 }}>{en ? g.amountEn : g.amount}</div>
                        </div>
                      </div>
                      <span style={{
                        padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, flexShrink: 0,
                        background: `${g.tagColor}15`, color: g.tagColor
                      }}>{en ? g.tagEn : g.tag}</span>
                    </div>
                    <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: '0 0 12px 0' }}>{en ? g.descEn : g.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-2)', fontSize: 12 }}>⏳ {en ? 'Until' : 'До'} {en ? g.deadlineEn : g.deadline}</span>
                      <button style={{
                        padding: '7px 14px', borderRadius: 8, border: '1px solid rgba(56,189,248,0.25)',
                        background: 'rgba(59,130,246,0.07)', color: '#3B82F6', fontSize: 12, fontWeight: 600,
                        cursor: 'pointer', fontFamily: 'Inter,sans-serif'
                      }}>{en ? 'Apply' : 'Подать заявку'}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>{en ? 'Tools & Templates' : 'Инструменты и шаблоны'}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 12 }}>
                {bizTools.map((t, i) => (
                  <div key={i} style={{
                    padding: '18px 20px', borderRadius: 16,
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer', transition: 'border-color 0.2s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bg-el)'}
                  >
                    <span style={{ fontSize: 22 }}>{t.icon}</span>
                    <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: 14 }}>{en ? t.titleEn : t.title}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 12 }}>{en ? t.descEn : t.desc}</div>
                    <div style={{ color: '#3B82F6', fontSize: 12, fontWeight: 600, marginTop: 4 }}>{en ? t.actionEn : t.action} →</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>{en ? 'Upcoming Events' : 'Ближайшие мероприятия'}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {events.map((ev, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
                    padding: '16px 22px', borderRadius: 16,
                    background: `${ev.color}08`, border: `1px solid ${ev.color}20`
                  }}>
                    <div>
                      <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: 15 }}>{en ? ev.titleEn : ev.title}</div>
                      <div style={{ display: 'flex', gap: 14, marginTop: 5 }}>
                        <span style={{ color: 'var(--text-2)', fontSize: 12 }}>📅 {en ? ev.dateEn : ev.date}</span>
                        <span style={{ color: 'var(--text-2)', fontSize: 12 }}>📍 {en ? ev.formatEn : ev.format}</span>
                        <span style={{ color: '#fbbf24', fontSize: 12 }}>{ev.seats} {en ? 'seats' : 'мест'}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setRegisteredEvents(p => ({ ...p, [i]: !p[i] }))}
                      style={{
                        padding: '8px 20px', borderRadius: 9, border: 'none', cursor: 'pointer',
                        fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13,
                        background: registeredEvents[i] ? 'rgba(52,211,153,0.15)' : `${ev.color}22`,
                        color: registeredEvents[i] ? '#10B981' : ev.color,
                        outline: registeredEvents[i] ? '1px solid rgba(52,211,153,0.3)' : `1px solid ${ev.color}40`,
                        transition: 'all 0.2s'
                      }}>
                      {registeredEvents[i] ? (en ? '✓ Registered' : '✓ Зарегистрирован') : (en ? 'Register' : 'Зарегистрироваться')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 5: Найти партнёра ── */}
        {activeTab === 5 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Header */}
            <div style={{
              borderRadius: 20, padding: '24px 28px',
              background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(56,189,248,0.07))',
              border: '1px solid rgba(52,211,153,0.2)'
            }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 22, margin: '0 0 6px 0' }}>🤝 {en ? 'Find a Partner' : 'Найти партнёра'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 14, margin: 0 }}>{en ? 'Other program participants are looking for partners, co-founders and teams. Find yours!' : 'Другие участники программы ищут партнёров, co-founders и команды. Найди своего!'}</p>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ color: 'var(--text-2)', fontSize: 13, fontWeight: 600 }}>{en ? 'Filter:' : 'Фильтр:'}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { key: 'all', ru: 'Все', en: 'All' },
                  { key: 'Chișinău', ru: 'Кишинёв', en: 'Chișinău' },
                  { key: 'Bălți', ru: 'Бельцы', en: 'Bălți' },
                  { key: 'other', ru: 'Другой', en: 'Other' },
                ].map(r => (
                  <button key={r.key} onClick={() => setFilterRegion(r.key)} style={{
                    padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600,
                    background: filterRegion === r.key ? 'rgba(16,185,129,0.12)' : 'var(--bg-el)',
                    color: filterRegion === r.key ? '#10B981' : 'var(--text-2)',
                    outline: filterRegion === r.key ? '1px solid rgba(52,211,153,0.35)' : '1px solid var(--border)'
                  }}>{en ? r.en : r.ru}</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { key: 'all', ru: 'Все треки', en: 'All tracks' },
                  { key: 'IT', ru: 'IT', en: 'IT' },
                  { key: 'Entrepreneurship', ru: 'Предпринимательство', en: 'Entrepreneurship' },
                  { key: 'Agriculture', ru: 'Агросектор', en: 'Agriculture' },
                ].map(t => (
                  <button key={t.key} onClick={() => setFilterTrack(t.key)} style={{
                    padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600,
                    background: filterTrack === t.key ? 'rgba(59,130,246,0.12)' : 'var(--bg-el)',
                    color: filterTrack === t.key ? '#3B82F6' : 'var(--text-2)',
                    outline: filterTrack === t.key ? '1px solid rgba(56,189,248,0.35)' : '1px solid var(--border)'
                  }}>{en ? t.en : t.ru}</button>
                ))}
              </div>
            </div>

            {/* Partner cards */}
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>
                {en ? 'Participants looking for partners' : 'Участники ищут партнёров'}
                <span style={{ color: 'var(--text-2)', fontSize: 13, fontWeight: 400, marginLeft: 10 }}>{partnerProfiles.length} {en ? 'people' : 'человек'}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 16 }}>
                {partnerProfiles.map((p, i) => (
                  <div key={i} className="card" style={{ padding: 22, position: 'relative' }}>
                    {/* Top */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                        background: `linear-gradient(135deg,${p.trackColor}30,${p.trackColor}12)`,
                        border: `1.5px solid ${p.trackColor}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, fontSize: 18, color: p.trackColor
                      }}>{p.avatar}</div>
                      <div>
                        <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16 }}>{p.name}</div>
                        <div style={{ color: 'var(--text-2)', fontSize: 12 }}>{p.age} {en ? 'y.o.' : 'лет'} · {p.region}</div>
                      </div>
                      <div style={{
                        marginLeft: 'auto', padding: '3px 10px', borderRadius: 20,
                        background: `${p.trackColor}12`, color: p.trackColor, fontSize: 11, fontWeight: 700,
                        whiteSpace: 'nowrap'
                      }}>{p.trackIcon} {(en ? p.track : p.trackRu).split(' ')[0]}</div>
                    </div>

                    {/* Goal */}
                    <div style={{ marginBottom: 10 }}>
                      <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{en ? 'Goal: ' : 'Цель: '}</span>
                      <span style={{ color: 'var(--text)', fontSize: 13, fontWeight: 500 }}>{en ? p.goal : p.goalRu}</span>
                    </div>

                    {/* Skills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                      {p.skills.map(s => (
                        <span key={s} style={{
                          padding: '3px 10px', borderRadius: 7, fontSize: 11,
                          background: 'var(--border)', color: 'var(--text-2)'
                        }}>{s}</span>
                      ))}
                    </div>

                    {/* Looking for */}
                    <div style={{
                      padding: '10px 14px', borderRadius: 12, marginBottom: 14,
                      background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(52,211,153,0.15)'
                    }}>
                      <span style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{en ? 'Looking for: ' : 'Ищет: '}</span>
                      <span style={{ color: '#10B981', fontSize: 13 }}>{en ? p.lookingFor : p.lookingForRu}</span>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => setSentRequests(prev => ({ ...prev, [i]: !prev[i] }))}
                        className={sentRequests[i] ? '' : 'btn-primary'}
                        style={{
                          flex: 1, padding: '9px', borderRadius: 10, border: 'none', cursor: 'pointer',
                          fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13,
                          background: sentRequests[i] ? 'rgba(52,211,153,0.15)' : undefined,
                          color: sentRequests[i] ? '#10B981' : '#fff',
                          outline: sentRequests[i] ? '1px solid rgba(52,211,153,0.3)' : 'none',
                          transition: 'all 0.2s'
                        }}>
                        {sentRequests[i] ? (en ? '✓ Request sent' : '✓ Запрос отправлен') : (en ? 'Propose partnership' : 'Предложить партнёрство')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17 }}>{en ? 'Program Partner Employers' : 'Работодатели-партнёры программы'}</div>
                <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{en ? 'Looking for graduates right now' : 'Ищут выпускников прямо сейчас'}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 14 }}>
                {employers.map((e, i) => (
                  <div key={i} style={{
                    padding: 22, borderRadius: 18,
                    background: `${e.color}07`, border: `1px solid ${e.color}20`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 24 }}>{e.icon}</span>
                      <div>
                        <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{e.name}</div>
                        <div style={{ display: 'flex', gap: 10 }}>
                          <span style={{ color: e.color, fontSize: 11, fontWeight: 600 }}>{en ? e.sector : e.sectorRu}</span>
                          <span style={{ color: 'var(--text-2)', fontSize: 11 }}>📍 {e.location}</span>
                        </div>
                      </div>
                      <div style={{
                        marginLeft: 'auto', textAlign: 'center', flexShrink: 0
                      }}>
                        <div style={{ color: '#10B981', fontWeight: 800, fontSize: 20 }}>{e.vacancies}</div>
                        <div style={{ color: 'var(--text-2)', fontSize: 10 }}>{en ? 'vacancies' : 'вакансий'}</div>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: '0 0 14px 0' }}>{en ? e.desc : e.descRu}</p>
                    <button style={{
                      width: '100%', padding: '9px', borderRadius: 10, border: `1px solid ${e.color}30`,
                      background: `${e.color}10`, color: e.color, fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', fontFamily: 'Inter,sans-serif', transition: 'all 0.2s'
                    }}>{en ? 'Apply for vacancy' : 'Откликнуться на вакансию'}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 6: Чаты ── */}
        {activeTab === 6 && (() => {
          const activeChat = chats.find(c => c.id === activeChatId)

          const sendMessage = async () => {
            if (!chatInput.trim() || typing) return
            const text = chatInput.trim()
            const now = new Date().toLocaleTimeString(en ? 'en-GB' : 'ru', { hour: '2-digit', minute: '2-digit' })
            setChatInput('')
            // Build message history directly from current state — don't rely on setState callback
            const currentMessages = chats.find(c => c.id === activeChatId)?.messages || []
            const newMessages = [...currentMessages, { from: 'me', text, time: now }]
            setChats(prev => prev.map(c =>
              c.id === activeChatId ? { ...c, messages: newMessages } : c
            ))
            setTyping(true)
            try {
              const reply = await getAIReply(activeChatId, newMessages, en)
              setChats(prev => prev.map(c =>
                c.id === activeChatId
                  ? { ...c, messages: [...c.messages, { from: 'them', text: reply, time: new Date().toLocaleTimeString(en ? 'en-GB' : 'ru', { hour: '2-digit', minute: '2-digit' }) }] }
                  : c
              ))
            } catch (err) {
              console.error('OpenAI error:', err)
              setChats(prev => prev.map(c =>
                c.id === activeChatId
                  ? { ...c, messages: [...c.messages, { from: 'them', text: en ? 'Connection error. Please try again.' : 'Ошибка соединения. Попробуйте снова.', time: new Date().toLocaleTimeString(en ? 'en-GB' : 'ru', { hour: '2-digit', minute: '2-digit' }) }] }
                  : c
              ))
            } finally {
              setTyping(false)
            }
          }

          return (
            <div style={{ display: 'flex', gap: 0, height: 'calc(100vh - 160px)', minHeight: 460, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border)' }}>
              {/* Sidebar */}
              <div style={{
                width: isMobile ? '100%' : 260, flexShrink: 0,
                borderRight: isMobile ? 'none' : '1px solid var(--border)',
                background: 'var(--bg)', display: isMobile && activeChatId ? 'none' : 'flex',
                flexDirection: 'column', overflowY: 'auto'
              }}>
                <div style={{ padding: '18px 16px 12px', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16 }}>💬 {en ? 'Chats' : 'Чаты'}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>{en ? 'Support, mentors and partners' : 'Поддержка, менторы и партнёры'}</div>
                </div>

                {/* Groups */}
                {[
                  { label: en ? 'Lumi · AI' : 'Lumi · ИИ', ids: ['ai_assistant'] },
                  { label: en ? 'Support' : 'Поддержка', ids: ['support'] },
                  { label: en ? 'My Mentors' : 'Мои менторы', ids: ['mentor_andrei', 'mentor_elena'] },
                  { label: en ? 'Partners' : 'Партнёры', ids: ['partner_dmitry', 'partner_anna'] },
                  { label: en ? 'Employers' : 'Работодатели', ids: ['employer_tech'] },
                ].map(group => (
                  <div key={group.label}>
                    <div style={{ padding: '10px 16px 4px', color: 'var(--text-3)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {group.label}
                    </div>
                    {chats.filter(c => group.ids.includes(c.id)).map(chat => {
                      const lastMsg = chat.messages[chat.messages.length - 1]
                      const isActive = activeChatId === chat.id
                      const unread = !isActive && chat.messages.some(m => m.from === 'them')
                      return (
                        <div key={chat.id} onClick={() => { setActiveChatId(chat.id) }} style={{
                          padding: '10px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
                          background: isActive ? 'rgba(56,189,248,0.1)' : 'transparent',
                          borderLeft: isActive ? `3px solid ${chat.avatarColor}` : '3px solid transparent',
                          transition: 'all 0.15s'
                        }}>
                          <div style={{
                            width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                            background: chat.isAI
                              ? 'linear-gradient(135deg, #3B82F6, #10B981)'
                              : `linear-gradient(135deg,${chat.avatarColor}30,${chat.avatarColor}10)`,
                            border: chat.isAI ? 'none' : `1.5px solid ${chat.avatarColor}35`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: typeof chat.avatar === 'string' && chat.avatar.length > 1 ? 16 : 15,
                            fontWeight: 800, color: chat.isAI ? '#fff' : chat.avatarColor, position: 'relative'
                          }}>
                            {chat.avatar}
                            {chat.online && (
                              <div style={{
                                position: 'absolute', bottom: 1, right: 1,
                                width: 8, height: 8, borderRadius: '50%',
                                background: '#10B981', border: '1.5px solid #FFFFFF'
                              }} />
                            )}
                          </div>
                          <div style={{ flex: 1, overflow: 'hidden' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                              <span style={{ color: isActive ? 'var(--text)' : 'var(--text-2)', fontWeight: 600, fontSize: 13 }}>{chat.name}</span>
                              <span style={{ color: 'var(--text-3)', fontSize: 10 }}>{lastMsg?.time}</span>
                            </div>
                            <div style={{ color: 'var(--text-2)', fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 160 }}>
                              {lastMsg?.from === 'me' ? (en ? 'You: ' : 'Вы: ') : ''}{lastMsg?.text}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Chat window */}
              <div style={{ flex: 1, display: isMobile && !activeChatId ? 'none' : 'flex', flexDirection: 'column', background: 'var(--nav-bg)', overflow: 'hidden' }}>
                {!activeChat ? (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'var(--text-2)' }}>
                    <div style={{ fontSize: 40 }}>💬</div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{en ? 'Select a chat' : 'Выберите чат'}</div>
                    <div style={{ fontSize: 13 }}>{en ? 'Click a contact on the left' : 'Нажмите на контакт слева'}</div>
                  </div>
                ) : (<>
                {/* Chat header */}
                <div style={{
                  padding: '12px 16px', borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'var(--bg)'
                }}>
                  {isMobile && (
                    <button onClick={() => setActiveChatId(null)} style={{
                      background: 'var(--bg-el)', border: '1px solid var(--border)',
                      borderRadius: 8, padding: '6px 10px', cursor: 'pointer',
                      color: 'var(--text-2)', fontSize: 16, flexShrink: 0, fontWeight: 700
                    }}>←</button>
                  )}
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg,${activeChat.avatarColor}30,${activeChat.avatarColor}10)`,
                    border: `1.5px solid ${activeChat.avatarColor}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: typeof activeChat.avatar === 'string' && activeChat.avatar.length > 1 ? 15 : 13,
                    fontWeight: 800, color: activeChat.avatarColor
                  }}>{activeChat.avatar}</div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{activeChat.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      {activeChat.online && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />}
                      <span style={{ color: activeChat.online ? '#10B981' : 'var(--text-3)', fontSize: 11, whiteSpace: 'nowrap' }}>
                        {activeChat.online ? (en ? 'Online' : 'Онлайн') : (en ? 'Offline' : 'Не в сети')} · {activeChat.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {activeChat.messages.map((msg, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: msg.from === 'me' ? 'flex-end' : 'flex-start',
                      alignItems: 'flex-end', gap: 8
                    }}>
                      {msg.from === 'them' && (
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                          background: `linear-gradient(135deg,${activeChat.avatarColor}30,${activeChat.avatarColor}10)`,
                          border: `1px solid ${activeChat.avatarColor}30`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 800, color: activeChat.avatarColor
                        }}>{typeof activeChat.avatar === 'string' && activeChat.avatar.length === 1 ? activeChat.avatar : '●'}</div>
                      )}
                      <div style={{ maxWidth: '70%' }}>
                        <div style={{
                          padding: '10px 14px', borderRadius: msg.from === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                          background: msg.from === 'me'
                            ? `linear-gradient(135deg, ${track.color}cc, ${track.color}99)`
                            : 'var(--bg-el)',
                          color: msg.from === 'me' ? '#fff' : 'var(--text)',
                          fontSize: 14, lineHeight: 1.5,
                          boxShadow: msg.from === 'me' ? `0 4px 14px ${track.color}25` : 'none'
                        }}>
                          {msg.text}
                        </div>
                        {msg.time && <div style={{ color: 'var(--text-3)', fontSize: 10, marginTop: 3, textAlign: msg.from === 'me' ? 'right' : 'left', paddingInline: 4 }}>{msg.time}</div>}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {typing && (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: `linear-gradient(135deg,${activeChat.avatarColor}30,${activeChat.avatarColor}10)`,
                        border: `1px solid ${activeChat.avatarColor}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 800, color: activeChat.avatarColor
                      }}>{typeof activeChat.avatar === 'string' && activeChat.avatar.length === 1 ? activeChat.avatar : '●'}</div>
                      <div style={{
                        padding: '12px 16px', borderRadius: '18px 18px 18px 4px',
                        background: 'var(--bg-el)', display: 'flex', gap: 4, alignItems: 'center'
                      }}>
                        {[0, 1, 2].map(d => (
                          <div key={d} style={{
                            width: 6, height: 6, borderRadius: '50%', background: '#CBD5E1',
                            animation: `bounce 1.2s ${d * 0.2}s infinite`,
                          }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Auto-scroll anchor — always at the very bottom */}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div style={{
                  padding: '12px 16px', borderTop: '1px solid var(--border)',
                  display: 'flex', gap: 10, alignItems: 'flex-end',
                  background: 'var(--bg)'
                }}>
                  <textarea
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                    placeholder={en ? 'Write a message...' : 'Написать сообщение...'}
                    rows={1}
                    style={{
                      flex: 1, padding: '10px 14px', borderRadius: 12, resize: 'none',
                      background: 'var(--border)', border: '1px solid var(--border)',
                      color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'Inter,sans-serif',
                      lineHeight: 1.5, maxHeight: 100, overflowY: 'auto'
                    }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!chatInput.trim()}
                    style={{
                      width: 42, height: 42, borderRadius: 12, border: 'none', cursor: chatInput.trim() ? 'pointer' : 'not-allowed',
                      background: chatInput.trim() ? `linear-gradient(135deg,${track.color},${track.color}cc)` : 'var(--bg-el)',
                      color: chatInput.trim() ? '#fff' : 'var(--text-3)', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s', flexShrink: 0,
                      boxShadow: chatInput.trim() ? `0 4px 14px ${track.color}40` : 'none'
                    }}>
                    ↑
                  </button>
                </div>
                </>)}
              </div>
            </div>
          )
        })()}

        {/* ── TAB 7: Профиль ── */}
        {activeTab === 7 && (
          <div style={{ maxWidth: 520 }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 20, margin: '0 0 4px 0' }}>{en ? 'My Profile' : 'Мой профиль'}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 13, margin: 0 }}>{en ? 'Program participant details' : 'Данные участника программы'}</p>
            </div>
            {/* Avatar + name */}
            <div className="card" style={{ padding: 28, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: `linear-gradient(135deg, ${track.color}40, ${track.color}15)`,
                border: `2px solid ${track.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, fontWeight: 800, color: track.color, flexShrink: 0
              }}>{firstName[0]?.toUpperCase()}</div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 800, fontSize: 20 }}>{user.firstName} {user.lastName}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 13, marginTop: 3 }}>{en ? 'Growth Point program participant' : 'Участник программы «Точка Роста»'}</div>
                <div style={{ marginTop: 8 }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700,
                    background: `${track.color}12`, color: track.color
                  }}>{track.icon} {en ? track.labelEn : track.label}</span>
                </div>
              </div>
            </div>
            {/* Data rows */}
            <div className="card" style={{ padding: 20 }}>
              {[
                { label: en ? 'Name' : 'Имя', value: `${user.firstName} ${user.lastName}` },
                { label: en ? 'Age' : 'Возраст', value: en ? `${user.age} y.o.` : `${user.age} лет` },
                { label: en ? 'Region' : 'Регион', value: en ? (regionTranslations[user.region] || user.region) : user.region },
                { label: en ? 'Education' : 'Образование', value: en ? (educationTranslations[user.education] || user.education) : user.education },
                ...(user.phone ? [{ label: en ? 'Phone' : 'Телефон', value: user.phone }] : []),
                { label: en ? 'Track' : 'Трек', value: `${track.icon} ${en ? track.labelEn : track.label}` },
                { label: en ? 'Goal' : 'Цель', value: goalLabel },
                { label: en ? 'Level' : 'Уровень', value: en ? 'Level 1 — Beginner' : 'Уровень 1 — Новичок' },
                { label: en ? 'Status' : 'Статус', value: en ? '✓ Application accepted' : '✓ Заявка принята' },
              ].map((row, i, arr) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', padding: '12px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  flexWrap: 'wrap', gap: 6
                }}>
                  <span style={{ color: 'var(--text-2)', fontSize: 13 }}>{row.label}</span>
                  <span style={{ color: 'var(--text)', fontSize: 13, fontWeight: 500 }}>{row.value}</span>
                </div>
              ))}
            </div>
            <button onClick={onLogout} className="btn-outline" style={{
              width: '100%', padding: '13px', borderRadius: 12, fontSize: 14, marginTop: 16
            }}>
              {en ? 'Sign out' : 'Выйти из кабинета'}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
