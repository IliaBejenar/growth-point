import { useLang } from '../LangContext'

const reinvestTable = [
  { period: 'Год 1',  periodEn: 'Year 1',  tax: 45,   edu: 18,  acc: 14,  reg: 9,   inn: 4 },
  { period: 'Год 3',  periodEn: 'Year 3',  tax: 302,  edu: 121, acc: 91,  reg: 60,  inn: 30 },
  { period: 'Год 7',  periodEn: 'Year 7',  tax: 785,  edu: 314, acc: 236, reg: 157, inn: 78 },
  { period: 'Год 10', periodEn: 'Year 10', tax: 1726, edu: 690, acc: 518, reg: 345, inn: 173 },
  { period: 'Год 15', periodEn: 'Year 15', tax: 2456, edu: 982, acc: 737, reg: 491, inn: 246 },
]

export default function ReinvestmentSection() {
  const { lang } = useLang()
  const en = lang === 'en'

  const reinvestItems = [
    {
      pct: '40%',
      title: en ? 'Retraining scale-up' : 'Масштабирование переквалификации',
      color: '#38bdf8', icon: '🎓',
      metric: en ? 'Up to 12,000 people/year by year 7' : 'До 12 000 чел./год к году 7',
      points: en
        ? ['Expansion of programs: IT, manufacturing, green economy', 'Accelerated vocational training centres in regions', 'Training for digital services export', 'International certification and university partnerships']
        : ['Расширение образовательных программ: IT, производство, зелёная экономика', 'Центры ускоренного профессионального обучения в регионах', 'Подготовка кадров для экспорта цифровых услуг', 'Международная сертификация и партнёрство с вузами'],
    },
    {
      pct: '30%',
      title: en ? 'Graduate accelerators' : 'Акселераторы для выпускников',
      color: '#34d399', icon: '🚀',
      metric: en ? 'LLC share growth: 8% → 70%' : 'Рост доли юрлиц: с 8% до 70%',
      points: en
        ? ['Business incubators with operational support', 'Subsidised tech startup funding', 'Export entry support', 'Scaling and corporate governance consulting']
        : ['Бизнес-инкубаторы с операционной поддержкой', 'Субсидирование технологических стартапов', 'Сопровождение при выходе на экспорт', 'Консалтинг по масштабированию и корпоративному управлению'],
    },
    {
      pct: '20%',
      title: en ? 'Regional development' : 'Региональное развитие',
      color: '#a78bfa', icon: '🌍',
      metric: en ? 'Gap reduction 3:1 → 1.5:1' : 'Сокращение разрыва 3:1 → 1,5:1',
      points: en
        ? ['Support for rural areas and small towns', 'Local production cluster creation', 'Agro, logistics, crafts and tourism tracks', 'Jobs outside Chisinau — reducing migration']
        : ['Поддержка сельских территорий и малых городов', 'Создание локальных производственных кластеров', 'Агро, логистика, ремесленные и туристические направления', 'Рабочие места вне Кишинёва — снижение миграции'],
    },
    {
      pct: '10%',
      title: en ? 'Innovation & analytics' : 'Инновации и аналитика',
      color: '#fbbf24', icon: '🔬',
      metric: en ? '+30% resource allocation efficiency' : '+30% эффективность распределения ресурсов',
      points: en
        ? ['Real-time employment monitoring data platform', 'Future profession forecasting (AI models)', 'Automated matching of workers and employers', 'Public program progress dashboard']
        : ['Data-платформа мониторинга занятости в реальном времени', 'Прогнозирование профессий будущего (AI-модели)', 'Автоматизация подбора работников и работодателей', 'Публичный дашборд прогресса программы'],
    },
  ]

  const chainSteps = en
    ? ['Employment growth', 'Tax growth', 'Reinvestment', 'New jobs', 'GDP growth']
    : ['Рост занятости', 'Рост налогов', 'Реинвестирование', 'Новые рабочие места', 'Рост ВВП']

  const tableHeaders = en
    ? ['Period', 'Tax revenues', '40% — Training', '30% — Accelerators', '20% — Regions', '10% — Innovation']
    : ['Период', 'Налоговые поступления', '40% — Обучение', '30% — Акселераторы', '20% — Регионы', '10% — Инновации']

  return (
    <section className="section" id="reinvestment" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-green" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section IV — Reinvestment System' : 'Раздел IV — Система реинвестирования'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Self-Financing Cycle' : 'Самофинансируемый цикл'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 580, margin: '0 auto' }}>
            {en
              ? 'Growing tax revenues are reinvested according to a fixed formula, ensuring exponential program reach without increasing budget expenditures.'
              : 'Растущие налоговые поступления реинвестируются по фиксированной формуле, обеспечивая экспоненциальный охват программы без увеличения бюджетных расходов.'}
          </p>
        </div>

        {/* Mechanism strip */}
        <div style={{ padding: '18px 24px', borderRadius: 16, marginBottom: 36, background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)', overflowX: 'auto' }}>
          <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
            {en ? 'Self-reproduction mechanism' : 'Механизм самовоспроизводства'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {chainSteps.map((step, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  padding: '7px 14px', borderRadius: 8,
                  background: i === arr.length - 1 ? 'rgba(16,185,129,0.12)' : 'var(--bg-el)',
                  border: i === arr.length - 1 ? '1px solid rgba(16,185,129,0.3)' : '1px solid var(--border)',
                  color: i === arr.length - 1 ? '#10B981' : '#64748B', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap'
                }}>{step}</div>
                {i < arr.length - 1 && <span style={{ color: 'var(--text-3)', fontSize: 18 }}>→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* 4 allocation cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 36 }}>
          {reinvestItems.map((item, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, fontSize: 20, background: `${item.color}12`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ color: item.color, fontWeight: 900, fontSize: 22, lineHeight: 1 }}>{item.pct}</div>
                  <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 13, marginTop: 2 }}>{item.title}</div>
                </div>
              </div>
              <ul style={{ margin: '0 0 14px 0', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {item.points.map((p, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: item.color, marginTop: 2, fontSize: 10 }}>◆</span>
                    <span style={{ color: 'var(--text-2)', fontSize: 12, lineHeight: 1.5 }}>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{ padding: '10px 14px', borderRadius: 10, background: `${item.color}0d`, border: `1px solid ${item.color}18` }}>
                <div style={{ color: item.color, fontSize: 12, fontWeight: 700 }}>{item.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reinvestment table */}
        <div className="card" style={{ padding: 28, overflowX: 'auto' }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 18 }}>
            {en ? 'Reinvestment volumes by year (M MDL)' : 'Объём реинвестирования по годам (млн MDL)'}
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {tableHeaders.map(h => (
                  <th key={h} style={{ padding: '8px 12px', color: '#475569', fontWeight: 600, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reinvestTable.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--bg)' }}>
                  <td style={{ padding: '10px 12px', color: '#38bdf8', fontWeight: 700 }}>{en ? row.periodEn : row.period}</td>
                  <td style={{ padding: '10px 12px', color: '#34d399', fontWeight: 700 }}>{row.tax.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)' }}>{row.edu}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)' }}>{row.acc}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)' }}>{row.reg}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)' }}>{row.inn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
