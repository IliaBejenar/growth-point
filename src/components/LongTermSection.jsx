import { useLang } from '../LangContext'

export default function LongTermSection() {
  const { lang } = useLang()
  const en = lang === 'en'

  const outcomes = [
    { num: '01', value: '2–3%', title: en ? 'unemployment rate' : 'уровень безработицы', sub: en ? 'Minimum structural unemployment' : 'Минимальная структурная безработица', before: en ? 'Now 5.0%' : 'Сейчас 5,0%', after: en ? 'Year 15: 2–3%' : 'Год 15 2–3%', color: '#34d399', icon: '📉', desc: en ? 'From the initial 5% (45,000 people), the program drives unemployment down to 2–3% — the level corresponding to natural frictional unemployment in developed economies.' : 'С исходного уровня 5% (45 000 чел.) программа обеспечивает снижение до 2–3% — уровня, соответствующего естественной фрикционной безработице в развитых экономиках.' },
    { num: '02', value: '24,366 MDL', title: en ? 'average salary' : 'средняя заработная плата', sub: en ? 'Real income growth' : 'Рост реальных доходов населения', before: en ? 'Now: 15,000 MDL' : 'Сейчас 15 000 MDL', after: en ? 'Year 15: 24,366 MDL' : 'Год 15 24 366 MDL', color: '#38bdf8', icon: '💰', desc: en ? 'At a baseline 3% wage growth per year, average salary reaches 24,366 MDL by year 15 (+62% from the starting level). Purchasing power and domestic demand grow in parallel.' : 'При базовом росте зарплат 3% в год средняя заработная плата к году 15 составляет 24 366 MDL (+62% от стартового уровня). Параллельно растёт покупательская способность и внутренний спрос.' },
    { num: '03', value: '20,300', title: en ? 'active business entities' : 'активных субъектов бизнеса', sub: en ? 'Expanded entrepreneurial base' : 'Расширение предпринимательской базы', before: en ? 'Now: < 12% LLCs' : 'Сейчас < 12% юрлиц', after: en ? 'Year 15: 70% LLCs' : 'Год 15 70% юрлиц', color: '#a78bfa', icon: '🏢', desc: en ? 'By year 15 the program creates over 20,000 sustainable business units, 70% of which are legal entities under the full tax regime.' : 'К году 15 программа формирует свыше 20 000 устойчивых бизнес-единиц, 70% из которых — юридические лица с полным налоговым режимом.' },
    { num: '04', value: en ? '2.5B MDL' : '2,5 млрд MDL', title: en ? 'annual tax revenues' : 'ежегодных налоговых поступлений', sub: en ? 'Strengthened tax base' : 'Укреплённая налоговая база', before: en ? 'Now: ~0 MDL' : 'Сейчас ~0 MDL', after: en ? 'Year 15: 2,456M MDL' : 'Год 15 2 456 млн MDL', color: '#fbbf24', icon: '🏦', desc: en ? 'Cumulative annual tax revenue growth reaches 2.456 billion MDL by year 15. This is a sustainable, predictable source of budget income.' : 'Совокупный ежегодный прирост налоговых поступлений достигает 2,456 млрд MDL к году 15. Это устойчивый, предсказуемый источник бюджетных доходов.' },
    { num: '05', value: '+6.2%', title: en ? "program's contribution to GDP" : 'вклад программы в прирост ВВП', sub: en ? 'Sustainable economic growth' : 'Устойчивый экономический рост', before: en ? 'Now: baseline GDP' : 'Сейчас базовый ВВП', after: en ? 'Year 15: +6.2% from program' : 'Год 15 +6,2% от программы', color: '#34d399', icon: '📈', desc: en ? 'The cumulative program contribution to GDP growth will reach up to 6.2% by year 15. The multiplier effect from employment, entrepreneurship and reinvestment creates a positive feedback loop.' : 'Кумулятивный вклад программы в рост ВВП составит до 6,2% к году 15. Мультипликативный эффект от трудоустройства, предпринимательства и реинвестирования создаёт систему с положительной обратной связью.' },
    { num: '06', value: en ? 'Independence' : 'Независимость', title: en ? 'from external factors' : 'от внешних факторов', sub: en ? 'Reduced economic vulnerability' : 'Снижение уязвимости экономики', before: en ? 'Now: high dependence' : 'Сейчас высокая зависимость', after: en ? 'Year 15: self-sufficient model' : 'Год 15 самодостаточная модель', color: '#fb923c', icon: '🛡️', desc: en ? 'Systemic development of domestic entrepreneurship, employment growth and income diversification reduce Moldova\'s economic dependence on external remittances and aid.' : 'Системное развитие внутреннего предпринимательства, рост занятости и диверсификация доходов населения снижают зависимость экономики Молдовы от внешних переводов и помощи.' },
  ]

  const phases = en
    ? [
        { label: 'Year 1–2', title: 'Launch', desc: 'Launch of retraining centres, first 7,500 employed, tax revenues 180M MDL. The program proves the viability of the model.', color: '#38bdf8' },
        { label: 'Year 3–5', title: 'Scaling', desc: '22,000 cumulatively employed. First businesses undergo SP → LLC transformation. Program reaches self-financing.', color: '#34d399' },
        { label: 'Year 6–10', title: 'Maturity', desc: 'LLC share reaches 56%. Tax revenues exceed 1.7B MDL. Regional expansion. Unemployment falls to 3–4%.', color: '#a78bfa' },
        { label: 'Year 11–15', title: 'Sustainability', desc: 'Unemployment: 2–3%. 20,300 active businesses. 2.5B MDL in annual revenues. Self-reproducing economic system.', color: '#fbbf24' },
      ]
    : [
        { label: 'Год 1–2', title: 'Старт', desc: 'Запуск центров переквалификации, первые 7 500 трудоустроенных, налоговые поступления 180 млн MDL. Программа доказывает жизнеспособность модели.', color: '#38bdf8' },
        { label: 'Год 3–5', title: 'Масштабирование', desc: '22 000 трудоустроенных накопительно. Первые бизнесы проходят трансформацию ИП → юрлица. Программа выходит на самофинансирование.', color: '#34d399' },
        { label: 'Год 6–10', title: 'Зрелость', desc: 'Доля юрлиц достигает 56%. Налоговые поступления превышают 1,7 млрд MDL. Региональная экспансия. Безработица снижается до 3–4%.', color: '#a78bfa' },
        { label: 'Год 11–15', title: 'Устойчивость', desc: 'Безработица — 2–3%. 20 300 активных бизнесов. 2,5 млрд MDL ежегодных поступлений. Самовоспроизводящаяся экономическая система.', color: '#fbbf24' },
      ]

  return (
    <section className="section" id="longterm" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-blue" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section V — Long-Term Effect' : 'Раздел V — Долгосрочный эффект'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'What Will Change Over 15 Years' : 'Что изменится за 15 лет'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? '"Growth Point" is not a short-term measure. It is a systemic transformation of the country\'s economic structure with measurable results at every planning horizon.'
              : 'Программа «Точка Роста» — это не краткосрочная мера. Это системная трансформация экономической структуры страны с измеримыми результатами на каждом горизонте планирования.'}
          </p>
        </div>

        {/* Outcome cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 48 }}>
          {outcomes.map((o, i) => (
            <div key={i} className="card" style={{ padding: 24, position: 'relative' }}>
              <div style={{ display: 'flex', align: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 24 }}>{o.icon}</span>
                <div>
                  <div style={{ color: o.color, fontWeight: 900, fontSize: 22, lineHeight: 1 }}>{o.value}</div>
                  <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: 13 }}>{o.title}</div>
                </div>
              </div>
              <div style={{ color: 'var(--text-2)', fontWeight: 600, fontSize: 12, marginBottom: 8 }}>{o.sub}</div>
              <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, margin: '0 0 14px 0' }}>{o.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 10px', borderRadius: 6, background: 'var(--bg-el)', color: 'var(--text-2)', fontSize: 11 }}>{o.before}</span>
                <span style={{ color: '#334155', fontSize: 12 }}>→</span>
                <span style={{ padding: '4px 10px', borderRadius: 6, background: `${o.color}12`, color: o.color, fontSize: 11, fontWeight: 600 }}>{o.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Phase timeline */}
        <div>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>
            {en ? 'Phase implementation model' : 'Фазовая модель реализации'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {phases.map((phase, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ padding: 22, borderRadius: 16, background: `${phase.color}07`, border: `1px solid ${phase.color}20` }}>
                  <div style={{ color: phase.color, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{phase.label}</div>
                  <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{phase.title}</div>
                  <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
