import { useLang } from '../LangContext'

export default function InvestmentSection() {
  const { lang } = useLang()
  const en = lang === 'en'
  const maxVal = 103.4

  const budgetItems = en
    ? [
        { label: 'Training 3,000 participants', value: '€1,800,000', pct: 72, color: '#38bdf8' },
        { label: 'Program administration', value: '€400,000', pct: 16, color: '#34d399' },
        { label: 'Marketing & communications', value: '€200,000', pct: 8, color: '#a78bfa' },
        { label: 'Digital platform development', value: '€85,000', pct: 3.4, color: '#fbbf24' },
      ]
    : [
        { label: 'Обучение 3 000 участников', value: '1 800 000 €', pct: 72, color: '#38bdf8' },
        { label: 'Администрирование программы', value: '400 000 €', pct: 16, color: '#34d399' },
        { label: 'Маркетинг и коммуникации', value: '200 000 €', pct: 8, color: '#a78bfa' },
        { label: 'Разработка цифровой платформы', value: '85 000 €', pct: 3.4, color: '#fbbf24' },
      ]

  const roiItems = en
    ? [
        { num: '01', label: 'Employed in year 1', value: '3,000 people', sub: '100% — hired workers', color: '#38bdf8' },
        { num: '02', label: 'Average annual tax per participant', value: '≈ €833', sub: '½ year working — first 6 months training', color: '#34d399' },
        { num: '03', label: 'Total tax revenue — year 1', value: '≈ €2.5M', sub: '3,000 × €833 (6 months employment)', color: '#a78bfa' },
      ]
    : [
        { num: '01', label: 'Трудоустроено в год 1', value: '3 000 человек', sub: '100% — наёмные работники', color: '#38bdf8' },
        { num: '02', label: 'Средний годовой налог с одного участника', value: '≈ 833 €', sub: '½ года работы — первые 6 мес обучение', color: '#34d399' },
        { num: '03', label: 'Совокупный налоговый доход — год 1', value: '≈ 2,5 млн €', sub: '3 000 × 833 € (полгода занятости)', color: '#a78bfa' },
      ]

  const highlights = en
    ? [
        { icon: '⚡', label: 'Payback period', value: '≈ 1 year', desc: '€2.5M in revenue covers €2.5M investment by end of year 1', color: '#fbbf24' },
        { icon: '♻️', label: 'Self-financing', value: 'from year 2', desc: 'Full tax stream from year 2, no repeat investment needed', color: '#34d399' },
        { icon: '📈', label: 'ROI in year 1', value: '≈ 100%', desc: '€2.5M revenue on €2.5M investment', color: '#38bdf8' },
        { icon: '🏛', label: 'Tax effect', value: '€100M+', desc: 'Annual revenues by year 15 of the program', color: '#a78bfa' },
      ]
    : [
        { icon: '⚡', label: 'Срок окупаемости', value: '≈ 1 год', desc: '2,5 млн € дохода покрывают 2,5 млн € вложений к концу года 1', color: '#fbbf24' },
        { icon: '♻️', label: 'Самофинансирование', value: 'с года 2', desc: 'Полный налоговый поток — с года 2, без повторных вложений', color: '#34d399' },
        { icon: '📈', label: 'ROI в год 1', value: '≈ 100%', desc: '2,5 млн € дохода при 2,5 млн € инвестиций', color: '#38bdf8' },
        { icon: '🏛', label: 'Налоговый эффект', value: '100+ млн €', desc: 'Ежегодные поступления к году 15 программы', color: '#a78bfa' },
      ]

  const comparison = en
    ? [
        { label: 'Initial investment', value: 2.5, display: '€2.5M', color: '#f87171' },
        { label: 'Tax revenue — year 1', value: 2.5, display: '€2.5M', color: '#38bdf8' },
        { label: 'Tax revenue — year 3', value: 16.8, display: '€16.8M', color: '#34d399' },
        { label: 'Tax revenue — year 7', value: 43.6, display: '€43.6M', color: '#a78bfa' },
        { label: 'Tax revenue — year 15', value: 103.4, display: '€103.4M', color: '#fbbf24' },
      ]
    : [
        { label: 'Стартовые инвестиции', value: 2.5, display: '2.5 млн €', color: '#f87171' },
        { label: 'Налоговый доход — год 1', value: 2.5, display: '2.5 млн €', color: '#38bdf8' },
        { label: 'Налоговый доход — год 3', value: 16.8, display: '16.8 млн €', color: '#34d399' },
        { label: 'Налоговый доход — год 7', value: 43.6, display: '43.6 млн €', color: '#a78bfa' },
        { label: 'Налоговый доход — год 15', value: 103.4, display: '103.4 млн €', color: '#fbbf24' },
      ]

  return (
    <section className="section" id="investment" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-el)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-yellow" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section — Investment & ROI' : 'Раздел — Инвестиции и окупаемость'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Initial Investment and Return on Investment' : 'Стартовые вложения и возврат инвестиций'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? 'The program requires a one-time initial investment. Already in the first year, tax revenues fully cover the investment — the program reaches self-financing.'
              : 'Программа требует однократных стартовых инвестиций. Уже в первый год налоговые поступления полностью покрывают вложения — программа выходит на самофинансирование.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 28 }}>
          {/* Budget breakdown */}
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
              <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16 }}>
                {en ? 'Initial investment' : 'Первоначальные инвестиции'}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {budgetItems.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ color: 'var(--text-3)', fontSize: 13 }}>{item.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</span>
                      <span style={{ color: '#475569', fontSize: 11, marginLeft: 6 }}>{item.pct}%</span>
                    </div>
                  </div>
                  <div className="progress-bg" style={{ height: 6 }}>
                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: `linear-gradient(90deg, ${item.color}88, ${item.color})` }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: '14px 18px', borderRadius: 12, background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginBottom: 2 }}>{en ? 'Total startup budget' : 'Общий стартовый бюджет'}</div>
              <div style={{ color: '#3B82F6', fontWeight: 900, fontSize: 26 }}>≈ €2.5M</div>
            </div>
          </div>

          {/* ROI */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {en ? 'Return on investment' : 'Окупаемость'}
            </div>
            {roiItems.map((item, i) => (
              <div key={i} className="card" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ color: item.color, fontWeight: 800, fontSize: 11, letterSpacing: '0.04em', marginTop: 1 }}>{item.num}</span>
                  <div>
                    <div style={{ color: 'var(--text-2)', fontSize: 12, marginBottom: 3 }}>{item.label}</div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 20 }}>{item.value}</div>
                    <div style={{ color: '#475569', fontSize: 11 }}>{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 28 }}>
          {highlights.map((h, i) => (
            <div key={i} className="card" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{h.icon}</div>
              <div style={{ color: h.color, fontWeight: 800, fontSize: 22 }}>{h.value}</div>
              <div style={{ color: 'var(--text-3)', fontSize: 13, fontWeight: 600, marginTop: 2 }}>{h.label}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 4 }}>{h.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison bar chart */}
        <div className="card" style={{ padding: 28 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>
            {en ? 'Comparison: investment vs. revenue' : 'Сравнение: инвестиции vs. доходы'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {comparison.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 200, color: 'var(--text-3)', fontSize: 13, flexShrink: 0 }}>{c.label}</div>
                <div style={{ flex: 1, height: 28, borderRadius: 6, background: 'var(--border)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${(c.value / maxVal) * 100}%`,
                    background: `linear-gradient(90deg, ${c.color}80, ${c.color})`,
                    borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 10,
                    minWidth: 60
                  }}>
                    <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>{c.display}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: '#475569', fontSize: 11, marginTop: 12 }}>
            {en
              ? '* Year 1: first 6 months — training, next 6 months — employment. 3,000 × €833 = €2.5M. Then cumulatively: +3,000 people/year, some start businesses. Tax revenue — cumulative.'
              : '* Год 1: первые 6 мес — обучение, вторые 6 мес — занятость. 3 000 × 833 € = 2,5 млн €. Далее кумулятивно: +3 000 чел./год, часть открывает бизнес. Налоговый доход — нарастающим итогом.'}
          </div>
        </div>
      </div>
    </section>
  )
}
