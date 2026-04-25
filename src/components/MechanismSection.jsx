import { useState } from 'react'
import { useLang } from '../LangContext'

export default function MechanismSection() {
  const [active, setActive] = useState(0)
  const { lang } = useLang()
  const en = lang === 'en'

  const stages = [
    {
      num: 'I',
      title: en ? 'Educational Foundation' : 'Образовательный фундамент',
      sub: en ? 'Retraining' : 'Переквалификация',
      color: '#3B82F6', icon: '🎓',
      metric: en ? 'Up to 7,500 / year' : 'До 7 500 чел./год',
      metricLabel: en ? 'complete retraining' : 'проходят переквалификацию',
      desc: en
        ? 'Targeted accelerated training programs in high-demand professions: IT, manufacturing, agro-sector, green economy. Duration 3–6 months. Funded from the state budget and reinvested tax revenues.'
        : 'Целевые программы ускоренного обучения по востребованным профессиям: IT, производство, агросектор, зелёная экономика. Продолжительность — 3–6 месяцев. Финансирование из государственного бюджета и реинвестированных налоговых поступлений.',
      points: en
        ? ['Accelerated vocational training centres', 'Digital & technical specialisations', 'Partnership with employers', 'Internationally recognised certification']
        : ['Центры ускоренного профобучения', 'Цифровые и технические специальности', 'Партнёрство с работодателями', 'Сертификация по международным стандартам'],
    },
    {
      num: 'II',
      title: en ? 'Sustainable Employment' : 'Устойчивая занятость',
      sub: en ? 'Employment' : 'Трудоустройство',
      color: '#10B981', icon: '💼',
      metric: en ? 'Cumulative model' : 'Кумулятивная модель',
      metricLabel: en ? 'employed stay in the system' : 'занятые остаются в системе',
      desc: en
        ? 'Systematic placement of program graduates into partner companies. Priority: long-term contracts with official salaries above the set threshold. Each employed person begins contributing to the tax base.'
        : 'Системное размещение выпускников программы в компании-партнёры. Приоритет — долгосрочные трудовые договоры с официальной зарплатой не ниже установленного порога. Каждый трудоустроенный начинает формировать налоговую базу.',
      points: en
        ? ['Partner employer database', 'Digital vacancy mapping', 'Support during the first 6 months', 'Guaranteed official employment']
        : ['База работодателей-партнёров', 'Цифровой маппинг вакансий', 'Сопровождение в первые 6 месяцев', 'Гарантированная официальная занятость'],
    },
    {
      num: 'III',
      title: en ? 'Entrepreneurial Launch' : 'Предпринимательский старт',
      sub: en ? 'Business launch' : 'Запуск бизнеса',
      color: '#a78bfa', icon: '🚀',
      metric: en ? '~15% of participants' : '~15% участников',
      metricLabel: en ? 'start their own business' : 'открывают собственный бизнес',
      desc: en
        ? 'Some graduates enter the entrepreneurial track: sole proprietorship registration, access to subsidised credit, mentoring support. The program lowers entry barriers and provides early-stage business support.'
        : 'Часть выпускников направляется в предпринимательский трек: регистрация ИП, доступ к льготному кредитованию, менторская поддержка. Программа снижает барьеры входа и обеспечивает первичное сопровождение бизнеса.',
      points: en
        ? ['Subsidised start-up lending', 'Tax preferences in the first 2 years', 'Consulting support', 'Access to co-working spaces and infrastructure']
        : ['Субсидированное первичное кредитование', 'Налоговые преференции в первые 2 года', 'Консалтинговое сопровождение', 'Доступ к коворкингам и инфраструктуре'],
    },
    {
      num: 'IV',
      title: en ? 'Institutional Growth' : 'Институциональный рост',
      sub: en ? 'SP → LLC transformation' : 'Трансформация ИП → юрлица',
      color: '#fbbf24', icon: '🏢',
      metric: '4% → 12%',
      metricLabel: en ? 'tax rate upon transformation' : 'ставка налога при трансформации',
      desc: en
        ? 'After 2–4 years, successful sole proprietorships become LLCs or JSCs. This raises the tax rate from 4% to 12%, expands hiring capacity and access to external markets. Growth of legal entities is a key program indicator.'
        : 'Через 2–4 года успешные ИП переходят в статус ООО и АО. Это увеличивает налоговую ставку с 4% до 12%, расширяет возможности найма и выхода на внешние рынки. Рост доли юрлиц — ключевой индикатор программы.',
      points: en
        ? ['Business scaling support', 'Access to government contracts', 'Export facilitation', 'Transition to corporate tax regime']
        : ['Поддержка масштабирования бизнеса', 'Доступ к государственным контрактам', 'Экспортное сопровождение', 'Переход на корпоративный налоговый режим'],
    },
    {
      num: 'V',
      title: en ? 'Self-Financing Cycle' : 'Самофинансируемый цикл',
      sub: en ? 'Reinvestment' : 'Реинвестирование',
      color: '#10B981', icon: '♻️',
      metric: en ? 'From year 4–5' : 'С года 4–5',
      metricLabel: en ? 'full self-financing' : 'полное самофинансирование',
      desc: en
        ? 'Growing tax revenues are reinvested in program expansion via a fixed formula: 40% retraining, 30% accelerators, 20% regions, 10% innovation. The program reaches self-financing by year 4–5.'
        : 'Растущие налоговые поступления реинвестируются в расширение программы по фиксированной формуле: 40% — переквалификация, 30% — акселераторы, 20% — регионы, 10% — инновации. Программа выходит на самофинансирование на 4–5-й год.',
      points: en
        ? ['40% — education scaling', '30% — business accelerators', '20% — regional development', '10% — analytics & innovation']
        : ['40% — масштабирование обучения', '30% — акселераторы для бизнеса', '20% — региональное развитие', '10% — аналитика и инновации'],
    },
  ]

  const s = stages[active]
  const chainSteps = en
    ? ['Unemployment', 'Retraining', 'Employment', 'Tax revenues', 'Reinvestment', 'New jobs', 'GDP growth']
    : ['Безработица', 'Переквалификация', 'Занятость', 'Налоговые поступления', 'Реинвестирование', 'Новые рабочие места', 'Рост ВВП']

  return (
    <section className="section" id="mechanism" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-blue" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section II — Implementation Mechanism' : 'Раздел II — Механизм реализации'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Five-Stage Transformation Model' : 'Пятиэтапная модель трансформации'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? 'The program is structured as a sequential chain of institutional transformations. Each stage strengthens the next, creating a cumulative effect.'
              : 'Программа выстроена как последовательная цепочка институциональных преобразований. Каждый этап усиливает следующий, формируя кумулятивный эффект.'}
          </p>
        </div>

        {/* Stage selector */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, overflowX: 'auto', paddingBottom: 4, WebkitOverflowScrolling: 'touch' }}>
          {stages.map((st, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '9px 16px', borderRadius: 10, border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: 13, fontFamily: 'Inter, sans-serif',
              background: active === i ? `${st.color}18` : 'var(--bg-el)',
              color: active === i ? st.color : 'var(--text-2)',
              outline: active === i ? `1.5px solid ${st.color}40` : '1px solid var(--border)',
              transition: 'all 0.2s', whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              {st.num} · {st.sub}
            </button>
          ))}
        </div>

        {/* Active stage detail */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, fontSize: 24,
                background: `${s.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${s.color}25`, flexShrink: 0
              }}>{s.icon}</div>
              <div>
                <div style={{ color: s.color, fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {en ? 'Stage' : 'Этап'} {s.num}
                </div>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 18 }}>{s.title}</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, margin: '0 0 20px 0' }}>{s.desc}</p>
            <div style={{ padding: '14px 18px', borderRadius: 12, background: `${s.color}0d`, border: `1px solid ${s.color}20` }}>
              <div style={{ color: s.color, fontWeight: 800, fontSize: 22 }}>{s.metric}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>{s.metricLabel}</div>
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 18 }}>
              {en ? 'Key elements' : 'Ключевые элементы'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s.points.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color, fontSize: 11, fontWeight: 800
                  }}>{i + 1}</div>
                  <span style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logic chain */}
        <div style={{
          marginTop: 28, padding: '18px 24px', borderRadius: 16,
          background: 'rgba(59,130,246,0.04)', border: '1px solid rgba(59,130,246,0.12)',
          overflowX: 'auto'
        }}>
          <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
            {en ? 'Program logic chain' : 'Логическая цепочка программы'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', rowGap: 8 }}>
            {chainSteps.map((step, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  color: i === 0 ? '#f87171' : i === arr.length - 1 ? '#34d399' : 'var(--text-2)',
                  fontSize: 13, fontWeight: 500,
                  background: i === 0 ? 'rgba(248,113,113,0.08)' : i === arr.length - 1 ? 'rgba(52,211,153,0.08)' : 'var(--bg-el)',
                  padding: '3px 8px', borderRadius: 6,
                }}>{step}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--text-3)', fontSize: 14 }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
