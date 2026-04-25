import { useLang } from '../LangContext'

const sectors = [
  { title: 'Цифровая экономика', titleEn: 'Digital Economy', icon: '💻', demand: 'Приоритетный сектор', demandEn: 'Priority sector', demandColor: '#38bdf8', desc: 'IT-компании, аутсорсинг, стартапы. Острая нехватка Junior-специалистов — программа готовит разработчиков, аналитиков, UX/UI дизайнеров и Digital-маркетологов.', descEn: 'IT companies, outsourcing, startups. Acute shortage of Junior specialists — the program trains developers, analysts, UX/UI designers and digital marketers.', roles: ['Junior-разработчики', 'Data-аналитики', 'UX/UI дизайнеры', 'Digital-маркетологи'], rolesEn: ['Junior developers', 'Data analysts', 'UX/UI designers', 'Digital marketers'], color: '#38bdf8' },
  { title: 'Энергетика', titleEn: 'Energy', icon: '⚡', demand: 'Растущий спрос', demandEn: 'Growing demand', demandColor: '#facc15', desc: 'Компании солнечной энергетики, электросетевые организации, сервисные предприятия. Молдова активно расширяет зелёную инфраструктуру — нужны монтажники и техники.', descEn: 'Solar energy companies, grid operators, service enterprises. Moldova is actively expanding its green infrastructure — installers and technicians are needed.', roles: ['Монтажники СЭС', 'Электрики сетей', 'Энергоаудиторы'], rolesEn: ['Solar panel installers', 'Grid electricians', 'Energy auditors'], color: '#facc15' },
  { title: 'Агросектор', titleEn: 'Agro-sector', icon: '🌾', demand: 'Региональный приоритет', demandEn: 'Regional priority', demandColor: '#4ade80', desc: 'Агрохолдинги, фермерские хозяйства, перерабатывающие заводы. Основной работодатель регионов — нужны агрономы, операторы техники и технологи производства.', descEn: 'Agricultural holdings, farms, processing plants. Main regional employer — needs agronomists, machine operators and food technologists.', roles: ['Агрономы', 'Операторы AgriTech', 'Технологи пищепрома', 'Менеджеры агробизнеса'], rolesEn: ['Agronomists', 'AgriTech operators', 'Food technologists', 'Agro-business managers'], color: '#4ade80' },
  { title: 'Логистика и торговля', titleEn: 'Logistics & Trade', icon: '🚚', demand: 'Стабильный спрос', demandEn: 'Stable demand', demandColor: '#fb923c', desc: 'Транспортные и логистические компании, ритейл, e-commerce платформы. Постоянный спрос на водителей, операторов складов и специалистов по закупкам.', descEn: 'Transport and logistics companies, retail, e-commerce platforms. Constant demand for drivers, warehouse operators and procurement specialists.', roles: ['Водители CE/B', 'Операторы склада', 'E-commerce менеджеры', 'Закупщики'], rolesEn: ['CE/B drivers', 'Warehouse operators', 'E-commerce managers', 'Procurement specialists'], color: '#fb923c' },
  { title: 'Строительство и недвижимость', titleEn: 'Construction & Real Estate', icon: '🏗️', demand: 'Высокий спрос', demandEn: 'High demand', demandColor: '#a78bfa', desc: 'Строительные компании, девелоперы, проектные бюро. Активный рынок жилья и инфраструктуры создаёт постоянную потребность в инженерах, прорабах и дизайнерах.', descEn: 'Construction companies, developers, design bureaus. Active housing and infrastructure market creates constant need for engineers, foremen and designers.', roles: ['Прорабы', 'Инженеры-проектировщики', 'Дизайнеры интерьера', 'Оценщики недвижимости'], rolesEn: ['Foremen', 'Design engineers', 'Interior designers', 'Real estate appraisers'], color: '#a78bfa' },
  { title: 'Туризм и сервис', titleEn: 'Tourism & Service', icon: '🧳', demand: 'Развивающийся рынок', demandEn: 'Growing market', demandColor: '#f472b6', desc: 'Отели, рестораны, туроператоры, event-агентства. Туристическая отрасль Молдовы растёт — нужен обученный персонал для качественного сервиса.', descEn: "Hotels, restaurants, tour operators, event agencies. Moldova's tourism industry is growing — trained personnel for quality service are needed.", roles: ['Администраторы отелей', 'Повара / Бариста', 'Гиды', 'Event-менеджеры'], rolesEn: ['Hotel administrators', 'Chefs / Baristas', 'Guides', 'Event managers'], color: '#f472b6' },
  { title: 'Медицина и здоровье', titleEn: 'Medicine & Health', icon: '🏥', demand: 'Критический дефицит', demandEn: 'Critical shortage', demandColor: '#34d399', desc: 'Клиники, больницы, аптеки, службы ухода. Молдова испытывает острую нехватку медицинских кадров — спрос многократно превышает предложение.', descEn: 'Clinics, hospitals, pharmacies, care services. Moldova faces an acute shortage of medical staff — demand far exceeds supply.', roles: ['Медсёстры', 'Фельдшеры', 'Фармацевты', 'Соцработники по уходу'], rolesEn: ['Nurses', 'Paramedics', 'Pharmacists', 'Care social workers'], color: '#34d399' },
  { title: 'Образование', titleEn: 'Education', icon: '🎓', demand: 'Стабильный спрос', demandEn: 'Stable demand', demandColor: '#60a5fa', desc: 'Школы, онлайн-платформы, тренинговые центры. Цифровизация образования создаёт спрос на современных педагогов и авторов учебных программ.', descEn: 'Schools, online platforms, training centres. Digitalisation of education drives demand for modern educators and course authors.', roles: ['Учителя', 'Онлайн-тренеры', 'Методисты', 'Авторы курсов'], rolesEn: ['Teachers', 'Online trainers', 'Methodologists', 'Course authors'], color: '#60a5fa' },
  { title: 'Производство', titleEn: 'Manufacturing', icon: '🏭', demand: 'Высокий спрос', demandEn: 'High demand', demandColor: '#94a3b8', desc: 'Лёгкая и пищевая промышленность, сборочные предприятия. Стабильная занятость — нужны операторы линий, технологи и специалисты по контролю качества.', descEn: 'Light and food industry, assembly enterprises. Stable employment — needs line operators, technologists and quality control specialists.', roles: ['Операторы производства', 'Технологи', 'Контролёры качества', 'Наладчики'], rolesEn: ['Production operators', 'Technologists', 'Quality controllers', 'Adjusters'], color: '#94a3b8' },
  { title: 'Финансы и бизнес', titleEn: 'Finance & Business', icon: '💰', demand: 'Растущий спрос', demandEn: 'Growing demand', demandColor: '#fbbf24', desc: 'Банки, бухгалтерские фирмы, финтех-компании. Цифровизация финансов требует специалистов, сочетающих финансовые знания и навыки работы с данными.', descEn: 'Banks, accounting firms, fintech companies. Digitalisation of finance requires specialists combining financial knowledge and data skills.', roles: ['Бухгалтеры', 'Финансовые аналитики', 'Банковские специалисты', 'Бизнес-консультанты'], rolesEn: ['Accountants', 'Financial analysts', 'Banking specialists', 'Business consultants'], color: '#fbbf24' },
  { title: 'Креативная индустрия', titleEn: 'Creative Industry', icon: '🎨', demand: 'Нарастающий спрос', demandEn: 'Rising demand', demandColor: '#e879f9', desc: 'Агентства, студии, бренды и медиакомпании. Цифровой маркетинг и контент-экономика создают постоянный спрос на дизайнеров, SMM и видеопроизводителей.', descEn: 'Agencies, studios, brands and media companies. Digital marketing and the content economy create constant demand for designers, SMM specialists and video producers.', roles: ['Графические дизайнеры', 'Видеографы', 'SMM-специалисты', 'Контент-менеджеры'], rolesEn: ['Graphic designers', 'Videographers', 'SMM specialists', 'Content managers'], color: '#e879f9' },
  { title: 'Рабочие профессии', titleEn: 'Skilled Trades', icon: '🧑‍🔧', demand: 'Острый дефицит', demandEn: 'Acute shortage', demandColor: '#f87171', desc: 'ЖКХ, автосервисы, сервисные компании, частный сектор. Рабочие профессии — самый дефицитный сегмент рынка труда с отличным уровнем дохода.', descEn: 'Utilities, auto services, service companies, private sector. Skilled trades are the most in-demand labour market segment with excellent income levels.', roles: ['Электрики', 'Сантехники', 'Автомеханики', 'Водители'], rolesEn: ['Electricians', 'Plumbers', 'Auto mechanics', 'Drivers'], color: '#f87171' },
  { title: 'Государственный сектор', titleEn: 'Public Sector', icon: '🛡️', demand: 'Гарантированный найм', demandEn: 'Guaranteed hiring', demandColor: '#818cf8', desc: 'Министерства, муниципалитеты, социальные службы, МВД. Стабильные рабочие места с соцпакетом — госструктуры готовы принять подготовленных выпускников.', descEn: 'Ministries, municipalities, social services, interior ministry. Stable jobs with benefits — government bodies are ready to take qualified graduates.', roles: ['Госслужащие', 'Социальные работники', 'Сотрудники МВД', 'Администраторы'], rolesEn: ['Civil servants', 'Social workers', 'Law enforcement', 'Administrators'], color: '#818cf8' },
]

export default function PartnersSection({ onApply }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const benefits = [
    { icon: '🎯', title: en ? 'Trained personnel' : 'Подготовленные кадры', desc: en ? 'Graduates are retrained to match the partner profile. The company receives a specialist already familiar with sector requirements.' : 'Выпускники программы проходят целевую переподготовку под профиль партнёра. Предприятие получает специалиста, уже знакомого с требованиями сектора.' },
    { icon: '📉', title: en ? 'Lower recruitment costs' : 'Снижение затрат на подбор', desc: en ? 'The digital platform handles vacancy and profile matching. Search and onboarding costs drop 40–60% vs standard hiring.' : 'Цифровая платформа обеспечивает маппинг вакансий и профилей. Затраты на поиск и первичное обучение снижаются на 40–60% по сравнению со стандартным наймом.' },
    { icon: '📋', title: en ? 'Tax incentives' : 'Налоговые стимулы', desc: en ? 'Employers hiring program graduates receive tax preferences for the first 12 months of employment. The mechanism is legally established.' : 'Работодатели, нанимающие выпускников программы, получают налоговые преференции в первые 12 месяцев трудоустройства. Механизм закреплён нормативно.' },
    { icon: '📊', title: en ? 'Predictable talent pipeline' : 'Прогнозируемый кадровый резерв', desc: en ? 'A partnership agreement gives access to program planning data: employers know in advance how many specialists of the required profile will be prepared.' : 'Партнёрское соглашение даёт доступ к плановым показателям программы: работодатель заранее знает, сколько специалистов нужного профиля будет подготовлено.' },
  ]

  const stats = en
    ? [
        { value: '60–70%', label: 'Graduates placed with partners', color: '#38bdf8' },
        { value: '40–60%', label: 'Reduction in recruitment costs', color: '#34d399' },
        { value: '12 mo.', label: 'Tax incentives upon hiring', color: '#a78bfa' },
        { value: '13 fields', label: 'Sectors for hiring graduates', color: '#fbbf24' },
      ]
    : [
        { value: '60–70%', label: 'Выпускников идут к партнёрам', color: '#38bdf8' },
        { value: '40–60%', label: 'Снижение затрат на подбор кадров', color: '#34d399' },
        { value: '12 мес.', label: 'Налоговые стимулы при найме', color: '#a78bfa' },
        { value: '13 сфер', label: 'Отраслей для найма выпускников', color: '#fbbf24' },
      ]

  const ctaItems = en
    ? ['Direct access to graduate database', 'First-year tax incentives', 'Inclusion in the program partner registry']
    : ['Прямой доступ к базе выпускников', 'Налоговые льготы первого года', 'Включение в реестр партнёров программы']

  return (
    <section className="section" id="partners" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-purple" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section IV — Program Partners' : 'Раздел IV — Партнёры программы'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Public-Private Partnership' : 'Государственно-частное партнёрство'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? 'Employers are key participants in the program ecosystem. Business gets trained staff, the state gets employed citizens and an expanded tax base.'
              : 'Работодатели — ключевые участники экосистемы программы. Бизнес получает подготовленные кадры, государство — трудоустроенных граждан и расширенную налоговую базу.'}
          </p>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 36 }}>
          {stats.map((s, i) => (
            <div key={i} className="card" style={{ padding: '18px', textAlign: 'center' }}>
              <div style={{ color: s.color, fontWeight: 800, fontSize: 22 }}>{s.value}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            {en ? '13 hiring sectors — employer talent needs' : '13 сфер найма — кадровые потребности работодателей'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
            {sectors.map((sec, i) => (
              <div key={i} className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{sec.icon}</span>
                  <div>
                    <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14 }}>{en ? sec.titleEn : sec.title}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, background: `${sec.demandColor}15`, color: sec.demandColor }}>
                      {en ? sec.demandEn : sec.demand}
                    </span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: 12, lineHeight: 1.6, margin: '0 0 12px 0' }}>{en ? sec.descEn : sec.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {(en ? sec.rolesEn : sec.roles).map(r => (
                    <span key={r} style={{ padding: '3px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500, background: `${sec.color}10`, color: sec.color }}>{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            {en ? 'Economic benefits for business' : 'Экономический эффект для бизнеса'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ padding: 22 }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{b.icon}</div>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{b.title}</div>
                <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card-highlight" style={{ padding: '28px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#3B82F6', letterSpacing: '0.04em' }}>{en ? 'PPP' : 'ГЧП'}</span>
              <span style={{ color: 'var(--text-2)', fontSize: 13 }}>{en ? 'Public-Private Partnership' : 'Государственно-частное партнёрство'}</span>
            </div>
            <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
              {en ? 'Join as an employer' : 'Присоединиться как работодатель'}
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, maxWidth: 460, margin: 0 }}>
              {en
                ? 'Signing a partnership agreement gives access to a pool of trained candidates, tax incentives and talent need analytics.'
                : 'Подписание соглашения о партнёрстве открывает доступ к пулу подготовленных кандидатов, налоговым стимулам и аналитике кадровых потребностей.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 12 }}>
              {ctaItems.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-3)', fontSize: 13 }}>
                  <span style={{ color: '#34d399' }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
          <button onClick={onApply} className="btn-primary" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 15, whiteSpace: 'nowrap' }}>
            {en ? 'Apply for partnership' : 'Подать заявку на партнёрство'}
          </button>
        </div>
      </div>
    </section>
  )
}
