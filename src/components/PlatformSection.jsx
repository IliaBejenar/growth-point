import { useLang } from '../LangContext'

export default function PlatformSection() {
  const { lang } = useLang()
  const en = lang === 'en'

  const modules = [
    {
      num: '01',
      title: en ? 'Matching Platform' : 'Платформа подбора',
      metric: '< 72h',
      metricLabel: en ? 'avg time to first offer' : 'среднее время до первого предложения',
      desc: en
        ? 'Digital system for automatic matching of participant profiles with open partner vacancies. The algorithm factors in skills, region, preferences and expected salary.'
        : 'Цифровая система автоматического сопоставления профиля участника с открытыми вакансиями партнёров. Алгоритм учитывает навыки, регион, предпочтения и ожидаемый уровень оплаты.',
      tags: en ? ['Skills mapping', 'AI matching', 'Employer API'] : ['Маппинг навыков', 'AI-подбор', 'API работодателей'],
      color: '#38bdf8', icon: '🤖',
    },
    {
      num: '02',
      title: en ? 'Labour Market Analytics' : 'Аналитика рынка труда',
      metric: 'Real-time',
      metricLabel: en ? 'data refresh' : 'обновление данных',
      desc: en
        ? 'Dashboard with up-to-date data on employment levels, in-demand professions and regional workforce distribution. Updated monthly based on NBS and partner data.'
        : 'Дашборд с актуальными данными по уровню занятости, востребованным профессиям и региональному распределению рабочей силы. Обновляется ежемесячно на основе данных НБС и партнёров.',
      tags: en ? ['Employment dashboards', 'Regional breakdowns', 'Sector analytics'] : ['Дашборды занятости', 'Региональные срезы', 'Отраслевая аналитика'],
      color: '#34d399', icon: '📊',
    },
    {
      num: '03',
      title: en ? 'Profession Forecasting' : 'Прогнозирование профессий',
      metric: '–28%',
      metricLabel: en ? 'reduction in talent shortages' : 'снижение кадровых дефицитов',
      desc: en
        ? 'Shortage-profession forecasting module with a 2–5 year horizon. Enables planning retraining volumes for actual economic demand — before, not after, a shortage emerges.'
        : 'Модуль прогнозирования дефицитных специальностей на горизонте 2–5 лет. Позволяет планировать объёмы переподготовки под реальный спрос экономики — до, а не после возникновения дефицита.',
      tags: en ? ['ML forecasting', '2–5 yr horizon', 'Sector tracks'] : ['ML-прогнозирование', 'Горизонт 2–5 лет', 'Отраслевые треки'],
      color: '#a78bfa', icon: '🔮',
    },
    {
      num: '04',
      title: en ? 'Employment Monitoring' : 'Мониторинг занятости',
      metric: en ? '5 years' : '5 лет',
      metricLabel: en ? 'participant tracking horizon' : 'горизонт отслеживания участника',
      desc: en
        ? 'The data platform tracks each participant from registration to employment and beyond — for the first 5 years of their career. Builds an evidence base for program effectiveness.'
        : 'Data-платформа отслеживает каждого участника от регистрации до трудоустройства и далее — в течение первых 5 лет карьеры. Формирует доказательную базу эффективности программы.',
      tags: en ? ['Career tracking', 'Program KPIs', 'Reporting'] : ['Трекинг карьеры', 'KPI программы', 'Отчётность'],
      color: '#fbbf24', icon: '📈',
    },
  ]

  const architecture = [
    {
      level: 1,
      title: en ? 'Data Layer' : 'Уровень данных',
      items: en
        ? ['Centralised participant database', 'Employment data lake', 'Analytical warehouse']
        : ['Централизованная база участников', 'Data Lake занятости', 'Аналитическое хранилище'],
      color: '#38bdf8',
    },
    {
      level: 2,
      title: en ? 'Algorithm Layer' : 'Уровень алгоритмов',
      items: en
        ? ['ML matching model', 'Profession forecasting module', 'Participant scoring']
        : ['ML-модель подбора', 'Модуль прогнозирования профессий', 'Скоринг участников'],
      color: '#34d399',
    },
    {
      level: 3,
      title: en ? 'Interface Layer' : 'Уровень интерфейсов',
      items: en
        ? ['Participant portal', 'Employer cabinet', 'Analytics dashboard']
        : ['Портал участника', 'Кабинет работодателя', 'Аналитический дашборд'],
      color: '#a78bfa',
    },
    {
      level: 4,
      title: en ? 'Integration Layer' : 'Уровень интеграций',
      items: en
        ? ['Government registry APIs', 'Tax base integration', 'LMS connectors']
        : ['API государственных реестров', 'Интеграция с налоговой базой', 'LMS-коннекторы'],
      color: '#fbbf24',
    },
  ]

  const integrations = en
    ? [
        { name: 'State Employment Registry', type: 'Government', color: '#38bdf8' },
        { name: 'State Tax Service (SFS)', type: 'Fiscal', color: '#f87171' },
        { name: 'NBS — National Bureau of Statistics', type: 'Statistical', color: '#34d399' },
        { name: 'Legal Entities Registry', type: 'Regulatory', color: '#a78bfa' },
        { name: 'Partner Employer Databases', type: 'Partner', color: '#fbbf24' },
        { name: 'Educational Platforms (LMS)', type: 'Educational', color: '#fb923c' },
      ]
    : [
        { name: 'Государственный реестр занятости', type: 'Государственный', color: '#38bdf8' },
        { name: 'Государственный Налоговый орган (ANAF)', type: 'Фискальный', color: '#f87171' },
        { name: 'НБС — Нац. бюро статистики', type: 'Статистический', color: '#34d399' },
        { name: 'Реестр юридических лиц', type: 'Регуляторный', color: '#a78bfa' },
        { name: 'Базы данных работодателей-партнёров', type: 'Партнёрский', color: '#fbbf24' },
        { name: 'Образовательные платформы (LMS)', type: 'Образовательный', color: '#fb923c' },
      ]

  const dataFlow = en
    ? ['Participant', 'Platform', 'Registries', 'Employer', 'Analytics', 'Reporting']
    : ['Участник', 'Платформа', 'Реестры', 'Работодатель', 'Аналитика', 'Отчётность']

  const stats = en
    ? [
        { value: '1 platform', label: 'Single entry point for all participants', color: '#38bdf8' },
        { value: '4 modules', label: 'Key analytical components', color: '#34d399' },
      ]
    : [
        { value: '1 платформа', label: 'Единая точка входа для всех участников', color: '#38bdf8' },
        { value: '4 модуля', label: 'Ключевых аналитических компонента', color: '#34d399' },
      ]

  return (
    <section className="section" id="platform" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-blue" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section V — Digital Infrastructure' : 'Раздел V — Цифровая инфраструктура'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Program Digital Platform' : 'Цифровая платформа программы'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            {en
              ? '"Growth Point" is not only an institutional model, but a fully operational technology system. The digital infrastructure ensures scalability, transparency and measurability of every program component.'
              : '«Точка Роста» — это не только институциональная модель, но и действующая технологическая система. Цифровая инфраструктура обеспечивает масштабируемость, прозрачность и измеримость каждого элемента программы.'}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          {stats.map((s, i) => (
            <div key={i} className="card-highlight" style={{ padding: '18px 28px', textAlign: 'center', minWidth: 200 }}>
              <div style={{ color: s.color, fontWeight: 800, fontSize: 24 }}>{s.value}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 36 }}>
          {modules.map((m, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 11, background: `${m.color}12`,
                  border: `1px solid ${m.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0
                }}>{m.icon}</div>
                <div>
                  <div style={{ color: m.color, fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {en ? 'Module' : 'Модуль'} {m.num}
                  </div>
                  <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14 }}>{m.title}</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, margin: '0 0 14px 0' }}>{m.desc}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 12 }}>
                <span style={{ color: m.color, fontWeight: 800, fontSize: 20 }}>{m.metric}</span>
                <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{m.metricLabel}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {m.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: 6, fontSize: 11,
                    background: `${m.color}10`, color: m.color
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <div className="card" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>
            {en ? 'Platform Architecture' : 'Архитектура платформы'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {architecture.map((layer, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px',
                borderRadius: 12, background: `${layer.color}08`, border: `1px solid ${layer.color}18`
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7, background: `${layer.color}18`,
                  color: layer.color, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{layer.level}</div>
                <div>
                  <div style={{ color: layer.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{layer.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {layer.items.map(item => (
                      <span key={item} style={{ color: 'var(--text-3)', fontSize: 12 }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>
            {en ? 'Government Integrations' : 'Государственные интеграции'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
            {integrations.map((int, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
                borderRadius: 12, background: 'var(--bg)', border: '1px solid var(--border)'
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: int.color, flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 500 }}>{int.name}</div>
                  <div style={{ color: int.color, fontSize: 11, fontWeight: 600 }}>{int.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 18, padding: '12px 18px', borderRadius: 12,
            background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.12)',
            color: 'var(--text-2)', fontSize: 12, overflowX: 'auto', whiteSpace: 'nowrap'
          }}>
            <strong style={{ color: '#38bdf8' }}>{en ? 'Data flow:' : 'Поток данных:'}</strong>{' '}
            {dataFlow.map((s, i, arr) => (
              <span key={i}><span style={{ color: 'var(--text-3)' }}>{s}</span>{i < arr.length - 1 ? <span style={{ color: 'var(--text-3)', margin: '0 6px' }}>→</span> : ''}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
