import { useLang } from '../LangContext'

export default function ProblemSection() {
  const { lang } = useLang()
  const en = lang === 'en'

  const losses = [
    {
      num: '01',
      title: en ? 'Direct Budget Losses' : 'Прямые потери бюджета',
      metric: '~810M MDL',
      metricLabel: en ? 'annual tax losses' : 'ежегодные налоговые потери',
      color: '#f87171',
      desc: en
        ? '45,000 unemployed citizens means 45,000 people not paying income tax. At an average salary of 15,000 MDL and a 12% rate, annual losses amount to ~810 million MDL. Tax is not collected while social payments continue.'
        : '45 000 безработных граждан — это 45 000 человек, не уплачивающих подоходный налог. При средней зарплате 15 000 MDL и ставке 12% ежегодные потери составляют порядка 810 млн MDL. Налог не поступает, социальные выплаты продолжаются.',
    },
    {
      num: '02',
      title: en ? 'Unrealized Human Capital' : 'Нереализованный человеческий капитал',
      metric: '~18–22%',
      metricLabel: en ? 'share of informally employed' : 'доля неформально занятых',
      color: '#fbbf24',
      desc: en
        ? 'Every unemployed citizen represents untapped productive and entrepreneurial potential. Without systemic support, a large share of the working-age population remains trapped in informal employment or forced migration.'
        : 'Каждый незанятый гражданин — это нераскрытый производственный и предпринимательский потенциал. Без системной поддержки значительная часть трудоспособного населения остаётся в структурной ловушке неформальной занятости или вынужденной миграции.',
    },
    {
      num: '03',
      title: en ? 'Structural Entrepreneurship Deficit' : 'Структурный дефицит предпринимательства',
      metric: '< 12%',
      metricLabel: en ? 'share of legal entities' : 'доля юрлиц от всех субъектов',
      color: '#a78bfa',
      desc: en
        ? 'The share of legal entities in employment remains low. Sole proprietorships fail to grow into sustainable companies due to lack of institutional support: no access to accelerators, credit instruments, or export channels.'
        : 'Доля юридических лиц в структуре занятости остаётся низкой. ИП не трансформируются в устойчивые компании из-за отсутствия институциональной поддержки: отсутствует доступ к акселераторам, кредитным инструментам и выходу на экспорт.',
    },
    {
      num: '04',
      title: en ? 'Regional Disparity' : 'Региональная диспропорция',
      metric: '3:1',
      metricLabel: en ? 'employment gap: capital / regions' : 'разрыв занятости: столица / регионы',
      color: '#3B82F6',
      desc: en
        ? 'The labour market is concentrated in the capital and major cities. Rural and peripheral areas systematically lose working-age population, reducing local GDP and accelerating demographic decline.'
        : 'Рынок труда сконцентрирован в столице и крупных городах. Сельские и периферийные районы системно теряют трудоспособное население, снижая локальный ВВП и ускоряя демографическую деградацию регионов.',
    },
  ]

  const annualLosses = en
    ? [
        { label: 'Direct tax losses', value: '810M MDL', color: '#f87171' },
        { label: 'Unrealized GDP', value: '~1.3B MDL', color: '#fbbf24' },
        { label: 'Social expenditures', value: '~340M MDL', color: '#a78bfa' },
      ]
    : [
        { label: 'Прямые налоговые потери', value: '810 млн MDL', color: '#f87171' },
        { label: 'Нереализованный ВВП', value: '~1,3 млрд MDL', color: '#fbbf24' },
        { label: 'Социальные расходы', value: '~340 млн MDL', color: '#a78bfa' },
      ]

  return (
    <section className="section" id="problem" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="tag tag-red" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section I — Problem Statement' : 'Раздел I — Постановка проблемы'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'What the Economy Loses Every Year' : 'Что экономика теряет каждый год'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? 'Unemployment is not only a social problem. These are measurable and predictable losses to the budget, human capital and economic activity.'
              : 'Безработица — не только социальная проблема. Это измеримые и прогнозируемые потери бюджета, человеческого капитала и экономической активности.'}
          </p>
        </div>

        {/* Annual losses strip */}
        <div className="card-highlight" style={{ padding: '24px 32px', marginBottom: 36, display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: 'var(--text-2)', fontSize: 13, fontWeight: 600 }}>
            {en ? 'Annual losses without the program' : 'Ежегодные потери без программы'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {annualLosses.map((l, i) => (
              <div key={i}>
                <div style={{ color: l.color, fontWeight: 800, fontSize: 20 }}>{l.value}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>{l.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#f87171', fontWeight: 900, fontSize: 22 }}>+2.4B MDL</div>
            <div style={{ color: 'var(--text-2)', fontSize: 12 }}>
              {en ? 'total annual damage' : 'совокупный годовой ущерб'}
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {losses.map((l, i) => (
            <div key={i} className="card" style={{ padding: 26 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ color: l.color, fontWeight: 800, fontSize: 12, letterSpacing: '0.04em' }}>{l.num}</span>
                <div style={{ height: 1, flex: 1, background: `${l.color}30` }} />
              </div>
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16, margin: '0 0 10px 0', lineHeight: 1.3 }}>{l.title}</h3>
              <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, margin: '0 0 18px 0' }}>{l.desc}</p>
              <div style={{ padding: '12px 16px', borderRadius: 12, background: `${l.color}0d`, border: `1px solid ${l.color}25` }}>
                <div style={{ color: l.color, fontWeight: 800, fontSize: 22 }}>{l.metric}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 2 }}>{l.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          marginTop: 28, padding: '20px 28px', borderRadius: 16,
          background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.15)',
          color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7
        }}>
          {en ? (
            <><strong style={{ color: 'var(--text)' }}>Cumulative effect:</strong> without structural intervention, the Republic of Moldova loses over{' '}
              <strong style={{ color: '#f87171' }}>1 billion MDL</strong> annually in direct tax revenues, potential business contributions and the multiplier effect from employment growth.</>
          ) : (
            <><strong style={{ color: 'var(--text)' }}>Совокупный эффект:</strong> при отсутствии структурного вмешательства Республика Молдова ежегодно недополучает свыше{' '}
              <strong style={{ color: '#f87171' }}>1 млрд MDL</strong> в форме прямых налоговых поступлений, потенциальных взносов предпринимателей и мультипликативного эффекта от роста занятости.</>
          )}
        </div>
      </div>
    </section>
  )
}
