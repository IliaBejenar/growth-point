import { useLang } from '../LangContext'

export default function ConclusionSection({ onApply, onPartner }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const principles = [
    { num: 'I', title: en ? 'Cumulative Employment' : 'Кумулятивная занятость', desc: en ? 'Employed individuals accumulate annually — they do not rotate. Each new year adds a new flow to those already employed, building an increasing tax base.' : 'Трудоустроенные накапливаются ежегодно — не ротируются. Каждый новый год добавляет к уже занятым новый поток, формируя нарастающую налоговую базу.', color: '#38bdf8', icon: '📈' },
    { num: 'II', title: en ? 'Structural Transformation' : 'Структурная трансформация', desc: en ? 'Transition of sole proprietorships to legal entities triples the tax return from each entity — from 4% to 12% — without creating new enterprises.' : 'Переход ИП в юрлица трёхкратно увеличивает налоговую отдачу от каждого субъекта — с 4% до 12% — без создания новых предприятий.', color: '#34d399', icon: '🔄' },
    { num: 'III', title: en ? 'Self-Financing' : 'Самофинансирование', desc: en ? 'From year 4–5 the program requires no external budget injections. Tax revenues fully cover expenses and finance expansion.' : 'Начиная с года 4–5 программа не требует внешних бюджетных вливаний. Налоговые поступления полностью покрывают расходы и финансируют расширение.', color: '#a78bfa', icon: '♻️' },
    { num: 'IV', title: en ? 'Regional Integration' : 'Региональная интеграция', desc: en ? '20% of reinvestment goes to the periphery, reducing disparities and creating jobs outside the capital — a key condition for sustainable demographic balance.' : '20% реинвестирования направляется в периферию, снижая диспропорции и создавая рабочие места вне столицы — ключевое условие устойчивого демографического баланса.', color: '#fbbf24', icon: '🌍' },
  ]

  const finalKPIs = [
    { value: '44 500', label: en ? 'Citizens employed cumulatively' : 'Трудоустроено граждан кумулятивно', color: '#34d399' },
    { value: '2–3%', label: en ? 'Unemployment rate — target' : 'Уровень безработицы — целевой показатель', color: '#38bdf8' },
    { value: '2.5B MDL', label: en ? 'tax revenues annually by year 15' : 'налоговых поступлений ежегодно к году 15', color: '#fbbf24' },
    { value: '+6.2%', label: en ? 'GDP contribution by year 15' : 'Вклад в рост ВВП к году 15', color: '#a78bfa' },
  ]

  const fourSystems = [
    { title: en ? 'National Personnel System' : 'Национальная кадровая система', desc: en ? 'Unified registry of participants, programs and results at the state level.' : 'Единый реестр участников, программ и результатов на уровне государства.', icon: '🏛️', color: '#38bdf8' },
    { title: en ? 'Unemployment Reduction Tool' : 'Инструмент снижения безработицы', desc: en ? 'Systemic, measurable and scalable model with a proven cumulative effect.' : 'Системная, измеримая и масштабируемая модель с доказанным кумулятивным эффектом.', icon: '📉', color: '#34d399' },
    { title: en ? 'Business Growth Engine' : 'Механизм роста бизнеса', desc: en ? 'The entrepreneurial track creates a sustainable flow of new sole proprietorships and legal entities into the economy.' : 'Предпринимательский трек формирует устойчивый поток новых ИП и юрлиц в экономику.', icon: '🚀', color: '#a78bfa' },
    { title: en ? 'PPP Platform' : 'Платформа ГЧП', desc: en ? 'Employers, the state and participants operate in a unified digital ecosystem.' : 'Работодатели, государство и участники функционируют в единой цифровой экосистеме.', icon: '🤝', color: '#fbbf24' },
  ]

  return (
    <section className="section" id="conclusion" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-blue" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section VI — Strategic Conclusion' : 'Раздел VI — Стратегический вывод'}
          </span>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 20px 0', letterSpacing: '-0.5px', maxWidth: 700, marginInline: 'auto', lineHeight: 1.25 }}>
            {en
              ? 'A Long-Term National Strategy for Transforming Unemployment into Sustainable State Capital'
              : 'Долгосрочная национальная стратегия трансформации безработицы в устойчивый капитал государства'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 700, margin: '0 auto', lineHeight: 1.75 }}>
            {en
              ? '"Growth Point" is not a traditional employment tool. It is a long-term economic strategy that systematically transforms structural unemployment — a passive budget expense — into an active source of tax revenue, entrepreneurial growth and GDP expansion.'
              : 'Программа «Точка Роста» — это не инструмент занятости в традиционном понимании. Это долгосрочная экономическая стратегия, которая системно превращает структурную безработицу — пассивную статью расходов бюджета — в активный источник налоговых доходов, предпринимательского роста и расширения ВВП.'}
          </p>
          <p style={{ color: 'var(--text-2)', fontSize: 14, maxWidth: 660, margin: '16px auto 0', lineHeight: 1.7 }}>
            {en
              ? 'The model demonstrates: with cumulative employment mechanics, progressive transformation of sole proprietorships into legal entities and disciplined reinvestment of tax revenues — the system achieves self-financing and sustainable growth without chronic dependence on external funding.'
              : 'Модель доказывает: при кумулятивной механике трудоустройства, прогрессирующей трансформации ИП в юридические лица и дисциплинированном реинвестировании налоговых поступлений — система достигает самофинансирования и устойчивого роста без хронической зависимости от внешних источников финансирования.'}
          </p>
        </div>

        {/* Four systems */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16, textAlign: 'center' }}>
            {en ? '"Growth Point" is four systems in one' : '«Точка Роста» — это четыре системы в одной'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {fourSystems.map((sys, i) => (
              <div key={i} className="card" style={{ padding: 22, textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{sys.icon}</div>
                <div style={{ color: sys.color, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{sys.title}</div>
                <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            {en ? 'Four systemic principles of the program' : 'Четыре системных принципа программы'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {principles.map((p, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 18, background: `${p.color}07`, border: `1px solid ${p.color}20` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <div>
                    <span style={{ color: p.color, fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{en ? 'Principle' : 'Принцип'} {p.num}</span>
                    <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 15 }}>{p.title}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final KPIs */}
        <div className="card-highlight" style={{ padding: '36px 32px' }}>
          <div style={{ color: 'var(--text-2)', fontSize: 13, fontWeight: 600, textAlign: 'center', marginBottom: 28 }}>
            {en ? 'Final program indicators for a 15-year horizon' : 'Итоговые показатели программы на горизонте 15 лет'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {finalKPIs.map((kpi, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: kpi.color, fontWeight: 900, fontSize: 28, lineHeight: 1 }}>{kpi.value}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 6, lineHeight: 1.5 }}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
