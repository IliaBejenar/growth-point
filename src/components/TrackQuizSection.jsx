import { useState } from 'react'
import { useLang } from '../LangContext'

const questions = [
  {
    id: 'activity',
    text: 'Чем тебе больше всего нравится заниматься?',
    textEn: 'What do you enjoy doing most?',
    icon: '🎯',
    options: [
      { label: 'Работать с компьютером, кодом, данными',      labelEn: 'Working with computers, code, data',            tracks: { Digital: 3, Finance: 1 } },
      { label: 'Чинить, строить, работать руками',             labelEn: 'Fixing, building, working with your hands',     tracks: { Crafts: 3, Construction: 2, Energy: 1 } },
      { label: 'Выращивать, работать на природе',              labelEn: 'Growing things, working outdoors',              tracks: { Agro: 3 } },
      { label: 'Помогать людям, лечить, учить',                labelEn: 'Helping people, healing, teaching',             tracks: { Medicine: 3, Education: 2 } },
      { label: 'Продавать, организовывать, управлять',         labelEn: 'Selling, organising, managing',                 tracks: { Logistics: 2, Finance: 2, Business: 2 } },
      { label: 'Творить — снимать, рисовать, создавать',       labelEn: 'Creating — filming, drawing, making things',    tracks: { Creative: 3, Tourism: 1 } },
    ],
  },
  {
    id: 'skill',
    text: 'Какой навык у тебя развит лучше всего?',
    textEn: 'What is your strongest skill?',
    icon: '💡',
    options: [
      { label: 'Логика, аналитика, цифры',                     labelEn: 'Logic, analytics, numbers',                    tracks: { Digital: 2, Finance: 2, Energy: 1 } },
      { label: 'Работа с техникой и оборудованием',            labelEn: 'Working with machinery and equipment',         tracks: { Crafts: 3, Energy: 2, Production: 1 } },
      { label: 'Коммуникация, убеждение, переговоры',          labelEn: 'Communication, persuasion, negotiation',       tracks: { Logistics: 2, Tourism: 2, Business: 2 } },
      { label: 'Уход, забота, внимание к людям',               labelEn: 'Care, empathy, attention to people',           tracks: { Medicine: 3, Education: 2, Government: 1 } },
      { label: 'Визуальное мышление, эстетика',                labelEn: 'Visual thinking, aesthetics',                  tracks: { Creative: 3, Construction: 1 } },
      { label: 'Физическая выносливость, практика',            labelEn: 'Physical endurance, hands-on practice',        tracks: { Crafts: 2, Agro: 2, Production: 2 } },
    ],
  },
  {
    id: 'goal',
    text: 'Какова твоя главная цель через 2 года?',
    textEn: 'What is your main goal in 2 years?',
    icon: '🏆',
    options: [
      { label: 'Работать удалённо / в IT-компании',            labelEn: 'Work remotely / in an IT company',             tracks: { Digital: 3 } },
      { label: 'Открыть своё дело',                            labelEn: 'Start my own business',                        tracks: { Business: 3, Finance: 1 } },
      { label: 'Стабильная работа в государстве или сервисе',  labelEn: 'Stable job in government or services',         tracks: { Government: 3, Medicine: 1, Education: 1 } },
      { label: 'Работать в сфере энергетики или строительства',labelEn: 'Work in energy or construction',               tracks: { Energy: 3, Construction: 2 } },
      { label: 'Вести агробизнес или работать в поле',         labelEn: 'Run an agro-business or work in the field',    tracks: { Agro: 3 } },
      { label: 'Карьера в туризме, ресторанах, ивентах',       labelEn: 'Career in tourism, restaurants, events',       tracks: { Tourism: 3, Creative: 1 } },
    ],
  },
  {
    id: 'environment',
    text: 'Где тебе комфортнее работать?',
    textEn: 'Where are you most comfortable working?',
    icon: '🏢',
    options: [
      { label: 'Дома / удалённо, за компьютером',              labelEn: 'At home / remotely, at a computer',            tracks: { Digital: 3, Creative: 1, Finance: 1 } },
      { label: 'На улице, стройке, в полях',                   labelEn: 'Outdoors, on a construction site, in fields',  tracks: { Construction: 2, Agro: 2, Energy: 2 } },
      { label: 'В больнице, школе, госучреждении',             labelEn: 'Hospital, school, government institution',     tracks: { Medicine: 3, Education: 2, Government: 2 } },
      { label: 'В магазине, складе, в дороге',                 labelEn: 'Shop, warehouse, on the road',                 tracks: { Logistics: 3, Crafts: 1 } },
      { label: 'В офисе / в команде',                          labelEn: 'Office / team environment',                    tracks: { Finance: 2, Business: 2, Government: 1 } },
      { label: 'В ресторане, отеле, на мероприятии',           labelEn: 'Restaurant, hotel, event',                     tracks: { Tourism: 3 } },
    ],
  },
  {
    id: 'income',
    text: 'Какой доход ты хочешь получать через год?',
    textEn: 'What income do you want to earn in a year?',
    icon: '💰',
    options: [
      { label: '7 000–10 000 MDL — стабильный старт',          labelEn: '7,000–10,000 MDL — stable start',              tracks: { Crafts: 2, Agro: 1, Government: 1 } },
      { label: '10 000–16 000 MDL — хороший специалист',       labelEn: '10,000–16,000 MDL — good specialist',          tracks: { Production: 2, Logistics: 2, Medicine: 1, Education: 1 } },
      { label: '16 000–25 000 MDL — высокий уровень',          labelEn: '16,000–25,000 MDL — high earner',              tracks: { Digital: 2, Finance: 2, Energy: 1 } },
      { label: '25 000+ MDL — топ-специалист',                 labelEn: '25,000+ MDL — top specialist',                 tracks: { Digital: 3, Business: 2, Finance: 2 } },
      { label: 'Хочу сам определять свой доход',               labelEn: 'I want to set my own income',                  tracks: { Business: 3, Creative: 1 } },
    ],
  },
  {
    id: 'learning',
    text: 'Как ты предпочитаешь учиться?',
    textEn: 'How do you prefer to learn?',
    icon: '📚',
    options: [
      { label: 'Онлайн-курсы, самостоятельно',                 labelEn: 'Online courses, self-paced',                   tracks: { Digital: 2, Finance: 1, Business: 1 } },
      { label: 'Практика руками — на объекте / производстве',  labelEn: 'Hands-on practice — on-site / in production',  tracks: { Crafts: 3, Energy: 2, Construction: 2, Agro: 1 } },
      { label: 'В учебном центре с наставником',               labelEn: 'Training centre with a mentor',                tracks: { Medicine: 2, Education: 2, Government: 1 } },
      { label: 'Менторство, коучинг, кейсы',                   labelEn: 'Mentoring, coaching, case studies',            tracks: { Business: 2, Finance: 1, Logistics: 1 } },
      { label: 'Творческие мастер-классы, эксперименты',       labelEn: 'Creative workshops, experiments',              tracks: { Creative: 3, Tourism: 1 } },
    ],
  },
  {
    id: 'region',
    text: 'Где ты планируешь работать?',
    textEn: 'Where do you plan to work?',
    icon: '📍',
    options: [
      { label: 'Кишинёв — столица',                            labelEn: 'Chisinau — capital',                           tracks: { Digital: 2, Finance: 2, Business: 1, Medicine: 1 } },
      { label: 'Бельцы / Север',                               labelEn: 'Bălți / North',                                tracks: { Production: 2, Agro: 1, Energy: 1 } },
      { label: 'Кагул / Юг',                                   labelEn: 'Cahul / South',                                tracks: { Agro: 2, Tourism: 1 } },
      { label: 'Малый город / регион',                         labelEn: 'Small town / region',                          tracks: { Crafts: 2, Agro: 1, Government: 1, Education: 1 } },
      { label: 'Полностью удалённо',                           labelEn: 'Fully remote',                                 tracks: { Digital: 3, Creative: 2, Business: 1 } },
    ],
  },
  {
    id: 'values',
    text: 'Что для тебя важнее всего в работе?',
    textEn: 'What matters most to you in a job?',
    icon: '⭐',
    options: [
      { label: 'Стабильность и гарантии',                      labelEn: 'Stability and security',                       tracks: { Government: 3, Medicine: 1, Education: 1 } },
      { label: 'Высокий доход и карьерный рост',               labelEn: 'High income and career growth',                tracks: { Digital: 2, Finance: 2, Business: 1 } },
      { label: 'Польза для общества / людей',                  labelEn: 'Benefit to society / people',                  tracks: { Medicine: 2, Education: 2, Government: 1 } },
      { label: 'Свобода и творчество',                         labelEn: 'Freedom and creativity',                       tracks: { Creative: 3, Business: 1, Digital: 1 } },
      { label: 'Физический результат — что-то построить/вырастить', labelEn: 'Tangible results — build or grow something', tracks: { Construction: 2, Agro: 2, Crafts: 2, Energy: 1 } },
      { label: 'Путешествия, знакомства, разнообразие',        labelEn: 'Travel, meeting people, variety',              tracks: { Tourism: 3, Logistics: 1 } },
    ],
  },
]

const tracks = {
  Digital: {
    label: 'Цифровая экономика', labelEn: 'Digital Economy',
    icon: '💻', color: '#38bdf8',
    desc: 'Программирование, Data-аналитика, UX/UI, Digital-маркетинг, No-code, кибербезопасность, GameDev. Высокий спрос, удалённая работа.',
    descEn: 'Programming, Data analytics, UX/UI, Digital marketing, No-code, cybersecurity, GameDev. High demand, remote work.',
    salary: '15 000 – 35 000 MDL', duration: '3–5 мес.', durationEn: '3–5 months',
    pros: ['Высокий доход', 'Удалённая работа', 'Глобальный рынок'],
    prosEn: ['High income', 'Remote work', 'Global market'],
  },
  Energy: {
    label: 'Энергетика', labelEn: 'Energy',
    icon: '⚡', color: '#facc15',
    desc: 'Солнечная энергетика, электросети, энергоэффективность, обслуживание оборудования. Растущая отрасль в Молдове.',
    descEn: 'Solar energy, power grids, energy efficiency, equipment maintenance. Growing sector in Moldova.',
    salary: '10 000 – 20 000 MDL', duration: '2–4 мес.', durationEn: '2–4 months',
    pros: ['Перспективная отрасль', 'EU-финансирование', 'Региональный спрос'],
    prosEn: ['Promising sector', 'EU funding', 'Regional demand'],
  },
  Agro: {
    label: 'Агросектор', labelEn: 'Agro-sector',
    icon: '🌾', color: '#4ade80',
    desc: 'Традиционное с/х, AgroTech, переработка продукции, агробизнес. Гранты EU4Moldova и ODIMM.',
    descEn: 'Traditional farming, AgroTech, food processing, agro-business. EU4Moldova and ODIMM grants.',
    salary: '8 000 – 16 000 MDL', duration: '2–4 мес.', durationEn: '2–4 months',
    pros: ['Гранты EU', 'Региональная поддержка', 'Свой бизнес'],
    prosEn: ['EU grants', 'Regional support', 'Own business'],
  },
  Logistics: {
    label: 'Логистика и торговля', labelEn: 'Logistics & Trade',
    icon: '🚚', color: '#fb923c',
    desc: 'Логистика, склады, e-commerce, закупки. Стабильный спрос во всех регионах страны.',
    descEn: 'Logistics, warehousing, e-commerce, procurement. Stable demand across all regions.',
    salary: '9 000 – 17 000 MDL', duration: '2–3 мес.', durationEn: '2–3 months',
    pros: ['Везде нужны', 'Быстрый старт', 'Рост e-commerce'],
    prosEn: ['In demand everywhere', 'Quick start', 'E-commerce growth'],
  },
  Construction: {
    label: 'Строительство и недвижимость', labelEn: 'Construction & Real Estate',
    icon: '🏗️', color: '#a78bfa',
    desc: 'Строительство, проектирование, дизайн интерьера, управление недвижимостью. Активный рынок в Молдове.',
    descEn: 'Construction, engineering, interior design, property management. Active market in Moldova.',
    salary: '9 000 – 18 000 MDL', duration: '2–4 мес.', durationEn: '2–4 months',
    pros: ['Высокий спрос', 'Разные специальности', 'Хорошая зарплата'],
    prosEn: ['High demand', 'Diverse specialisations', 'Good salary'],
  },
  Tourism: {
    label: 'Туризм и сервис', labelEn: 'Tourism & Service',
    icon: '🧳', color: '#f472b6',
    desc: 'Гостиницы, рестораны, туроператоры, event-менеджмент. Растущая отрасль с поддержкой ЕС.',
    descEn: 'Hotels, restaurants, tour operators, event management. Growing sector with EU support.',
    salary: '8 000 – 15 000 MDL', duration: '2–3 мес.', durationEn: '2–3 months',
    pros: ['Живое общение', 'Развитие туризма', 'Международный опыт'],
    prosEn: ['People contact', 'Tourism growth', 'International experience'],
  },
  Medicine: {
    label: 'Медицина и здоровье', labelEn: 'Medicine & Health',
    icon: '🏥', color: '#34d399',
    desc: 'Медсёстры, врачи, фармацевтика, уход за пожилыми. Огромный спрос в Молдове и за рубежом.',
    descEn: 'Nurses, doctors, pharmaceuticals, elderly care. Huge demand in Moldova and abroad.',
    salary: '10 000 – 22 000 MDL', duration: '3–6 мес.', durationEn: '3–6 months',
    pros: ['Востребованность', 'Экспорт кадров', 'Социальная ценность'],
    prosEn: ['High demand', 'Talent export', 'Social value'],
  },
  Education: {
    label: 'Образование', labelEn: 'Education',
    icon: '🎓', color: '#60a5fa',
    desc: 'Учителя, онлайн-преподаватели, тренеры, авторы курсов. Переход в цифровое образование.',
    descEn: 'Teachers, online tutors, trainers, course authors. Transition to digital education.',
    salary: '8 000 – 15 000 MDL', duration: '2–3 мес.', durationEn: '2–3 months',
    pros: ['Социальная миссия', 'Онлайн возможности', 'Гибкий график'],
    prosEn: ['Social mission', 'Online opportunities', 'Flexible schedule'],
  },
  Production: {
    label: 'Производство', labelEn: 'Manufacturing',
    icon: '🏭', color: '#94a3b8',
    desc: 'Лёгкая и пищевая промышленность, сборка, контроль качества. Стабильная занятость на предприятиях.',
    descEn: 'Light and food industry, assembly, quality control. Stable employment in enterprises.',
    salary: '8 000 – 14 000 MDL', duration: '2–3 мес.', durationEn: '2–3 months',
    pros: ['Стабильность', 'Офлайн работа', 'Быстрый старт'],
    prosEn: ['Stability', 'On-site work', 'Quick start'],
  },
  Finance: {
    label: 'Финансы и бизнес', labelEn: 'Finance & Business',
    icon: '💰', color: '#fbbf24',
    desc: 'Бухгалтерия, банки, финансовый анализ, предпринимательство. Ключевые навыки для любого бизнеса.',
    descEn: 'Accounting, banking, financial analysis, entrepreneurship. Key skills for any business.',
    salary: '11 000 – 24 000 MDL', duration: '3–4 мес.', durationEn: '3–4 months',
    pros: ['Карьерный рост', 'Разные отрасли', 'Высокий доход'],
    prosEn: ['Career growth', 'Cross-industry', 'High income'],
  },
  Creative: {
    label: 'Креативная индустрия', labelEn: 'Creative Industry',
    icon: '🎨', color: '#e879f9',
    desc: 'Дизайн, фото/видео, контент, SMM. Востребованность в цифровую эпоху — работа на себя или агентства.',
    descEn: 'Design, photo/video, content, SMM. In-demand in the digital age — freelance or agency work.',
    salary: '8 000 – 20 000 MDL', duration: '2–4 мес.', durationEn: '2–4 months',
    pros: ['Творческая свобода', 'Удалённая работа', 'Глобальные клиенты'],
    prosEn: ['Creative freedom', 'Remote work', 'Global clients'],
  },
  Crafts: {
    label: 'Рабочие профессии', labelEn: 'Skilled Trades',
    icon: '🧑‍🔧', color: '#f87171',
    desc: 'Электрики, сантехники, механики, водители. Реальный большой рынок с постоянным спросом.',
    descEn: 'Electricians, plumbers, mechanics, drivers. Large real market with constant demand.',
    salary: '9 000 – 18 000 MDL', duration: '1–3 мес.', durationEn: '1–3 months',
    pros: ['Быстрый доход', 'Всегда нужны', 'Свой бизнес'],
    prosEn: ['Quick income', 'Always in demand', 'Own business'],
  },
  Government: {
    label: 'Государственный сектор', labelEn: 'Public Sector',
    icon: '🛡️', color: '#818cf8',
    desc: 'Администрация, полиция, социальные службы. Стабильная занятость с социальными гарантиями.',
    descEn: 'Administration, police, social services. Stable employment with social benefits.',
    salary: '8 000 – 14 000 MDL', duration: '2–3 мес.', durationEn: '2–3 months',
    pros: ['Гарантии', 'Социальный пакет', 'Стабильность'],
    prosEn: ['Guarantees', 'Benefits package', 'Stability'],
  },
  Business: {
    label: 'Предпринимательство', labelEn: 'Entrepreneurship',
    icon: '🏢', color: '#38bdf8',
    desc: 'Свой бизнес, стартапы, акселераторы. Поддержка ИП и юрлиц через программу.',
    descEn: 'Own business, startups, accelerators. Support for sole proprietors and companies through the program.',
    salary: '10 000 – 50 000+ MDL', duration: '3–5 мес.', durationEn: '3–5 months',
    pros: ['Свобода', 'Неограниченный доход', 'Своё дело'],
    prosEn: ['Freedom', 'Unlimited income', 'Your own business'],
  },
}

function calcResult(answers) {
  const scores = Object.fromEntries(Object.keys(tracks).map(k => [k, 0]))
  Object.values(answers).forEach(opt => {
    Object.entries(opt.tracks).forEach(([k, v]) => { if (scores[k] !== undefined) scores[k] += v })
  })
  return Object.entries(scores).sort((a, b) => b[1] - a[1])
}

export default function TrackQuizSection({ onApply }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState(null)

  const currentQ = questions[step - 1]
  const isResult = step > questions.length
  const progress = step === 0 ? 0 : Math.round((step / questions.length) * 100)

  const choose = (opt) => {
    setSelected(opt)
    const newAnswers = { ...answers, [currentQ.id]: opt }
    setTimeout(() => {
      setAnswers(newAnswers)
      setSelected(null)
      setStep(s => s + 1)
    }, 300)
  }

  const ranked = isResult ? calcResult(answers) : []
  const topTrack = ranked[0] ? tracks[ranked[0][0]] : null

  return (
    <section className="section" id="quiz" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="tag tag-blue" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Career Guidance' : 'Профориентация'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Find Your Track in 2 Minutes' : 'Найди свой трек за 2 минуты'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
            {en
              ? '8 questions — discover which of the 13 program tracks suits you best'
              : '8 вопросов — и ты узнаешь какой из 13 треков программы подходит именно тебе'}
          </p>
        </div>

        <div style={{ maxWidth: 620, margin: '0 auto' }}>

          {/* Intro */}
          {step === 0 && (
            <div className="card" style={{ padding: '40px 36px', textAlign: 'center' }}>
              <div style={{ fontSize: 52, marginBottom: 20 }}>🎯</div>
              <h3 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 22, margin: '0 0 12px 0' }}>
                {en ? 'Track Matching Test' : 'Тест на подходящий трек'}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7, margin: '0 0 24px 0', maxWidth: 420, marginInline: 'auto' }}>
                {en
                  ? 'Answer 8 questions — the algorithm will find your optimal track from 13 directions based on your goals, skills and region'
                  : 'Ответь на 8 вопросов — алгоритм подберёт оптимальный трек из 13 направлений под твои цели, навыки и регион'}
              </p>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
                {Object.values(tracks).map(t => (
                  <span key={t.label} style={{
                    padding: '4px 10px', borderRadius: 20,
                    background: `${t.color}14`, color: t.color,
                    fontSize: 11, fontWeight: 600,
                  }}>{t.icon} {(en ? t.labelEn : t.label).split(' ')[0]}</span>
                ))}
              </div>
              <button onClick={() => setStep(1)} style={{
                padding: '14px 36px', borderRadius: 14, border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                color: '#fff', fontWeight: 700, fontSize: 16,
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 16px rgba(59,130,246,0.35)',
              }}>
                {en ? 'Start test →' : 'Начать тест →'}
              </button>
            </div>
          )}

          {/* Question */}
          {step >= 1 && !isResult && currentQ && (
            <div className="card" style={{ padding: '32px 28px' }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600 }}>
                    {en ? `Question ${step} of ${questions.length}` : `Вопрос ${step} из ${questions.length}`}
                  </span>
                  <span style={{ color: '#3B82F6', fontSize: 12, fontWeight: 700 }}>{progress}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 99,
                    background: 'linear-gradient(90deg, #3B82F6, #10B981)',
                    width: `${progress}%`, transition: 'width 0.4s ease',
                  }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>{currentQ.icon}</span>
                <h3 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 18, margin: 0, lineHeight: 1.3 }}>
                  {en ? currentQ.textEn : currentQ.text}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentQ.options.map((opt, i) => (
                  <button key={i} onClick={() => choose(opt)} style={{
                    padding: '13px 18px', borderRadius: 12, border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'Inter, sans-serif',
                    fontSize: 14, fontWeight: 500, lineHeight: 1.4,
                    background: selected === opt ? 'rgba(59,130,246,0.12)' : 'var(--bg-el)',
                    color: selected === opt ? '#3B82F6' : 'var(--text)',
                    outline: selected === opt ? '1.5px solid rgba(59,130,246,0.4)' : '1px solid var(--border)',
                    transition: 'all 0.15s',
                    display: 'flex', alignItems: 'center', gap: 12,
                  }}
                    onMouseEnter={e => { if (selected !== opt) { e.currentTarget.style.background = 'rgba(59,130,246,0.06)'; e.currentTarget.style.outlineColor = 'rgba(59,130,246,0.25)' } }}
                    onMouseLeave={e => { if (selected !== opt) { e.currentTarget.style.background = 'var(--bg-el)'; e.currentTarget.style.outlineColor = 'var(--border)' } }}
                  >
                    <span style={{
                      width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                      background: selected === opt ? 'rgba(59,130,246,0.15)' : 'var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 800,
                      color: selected === opt ? '#3B82F6' : 'var(--text-2)',
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {en ? opt.labelEn : opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {isResult && topTrack && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                padding: '32px 28px', borderRadius: 20, textAlign: 'center',
                background: `linear-gradient(135deg, ${topTrack.color}12, ${topTrack.color}06)`,
                border: `1.5px solid ${topTrack.color}30`,
              }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>{topTrack.icon}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  {en ? 'Your track' : 'Твой трек'}
                </div>
                <h3 style={{ color: topTrack.color, fontWeight: 900, fontSize: 'clamp(20px,4vw,28px)', margin: '0 0 10px 0' }}>
                  {en ? topTrack.labelEn : topTrack.label}
                </h3>
                <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, margin: '0 0 20px 0', maxWidth: 420, marginInline: 'auto' }}>
                  {en ? topTrack.descEn : topTrack.desc}
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
                  <div style={{ padding: '10px 18px', borderRadius: 12, background: 'var(--bg-el)', border: '1px solid var(--border)' }}>
                    <div style={{ color: topTrack.color, fontWeight: 800, fontSize: 16 }}>{topTrack.salary}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'Salary' : 'Зарплата'}</div>
                  </div>
                  <div style={{ padding: '10px 18px', borderRadius: 12, background: 'var(--bg-el)', border: '1px solid var(--border)' }}>
                    <div style={{ color: topTrack.color, fontWeight: 800, fontSize: 16 }}>{en ? topTrack.durationEn : topTrack.duration}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'Duration' : 'Длительность'}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
                  {(en ? topTrack.prosEn : topTrack.pros).map(p => (
                    <span key={p} style={{
                      padding: '5px 12px', borderRadius: 20,
                      background: `${topTrack.color}15`, color: topTrack.color,
                      fontSize: 12, fontWeight: 600,
                    }}>✓ {p}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={onApply} style={{
                    padding: '13px 28px', borderRadius: 12, border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                    color: '#fff', fontWeight: 700, fontSize: 14,
                    fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 14px rgba(59,130,246,0.3)',
                  }}>🚀 {en ? 'Apply for this track' : 'Подать заявку на этот трек'}</button>
                  <button onClick={() => { setStep(0); setAnswers({}) }} style={{
                    padding: '13px 20px', borderRadius: 12, cursor: 'pointer',
                    background: 'var(--bg-el)', border: '1px solid var(--border)',
                    color: 'var(--text-2)', fontWeight: 600, fontSize: 14,
                    fontFamily: 'Inter, sans-serif',
                  }}>↩ {en ? 'Retake quiz' : 'Пройти снова'}</button>
                </div>
              </div>

              {/* Other tracks */}
              <div className="card" style={{ padding: '20px 24px' }}>
                <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>
                  {en ? 'Also a good fit' : 'Также подходят'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {ranked.slice(1, 5).map(([key, score]) => {
                    const t = tracks[key]
                    if (!t || score === 0) return null
                    const pct = Math.round((score / ranked[0][1]) * 100)
                    return (
                      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 18, flexShrink: 0 }}>{t.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                            <span style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600 }}>{en ? t.labelEn : t.label}</span>
                            <span style={{ color: t.color, fontSize: 12, fontWeight: 700 }}>{pct}%</span>
                          </div>
                          <div style={{ height: 4, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                            <div style={{ height: '100%', borderRadius: 99, background: t.color, width: `${pct}%` }} />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
