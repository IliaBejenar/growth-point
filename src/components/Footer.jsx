import { useLang } from '../LangContext'

export default function Footer({ onApply, onPartner }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const sections = en
    ? [
        { num: 'I', label: 'Problem Statement', href: '#problem' },
        { num: 'II', label: 'Implementation Mechanism', href: '#mechanism' },
        { num: 'III', label: 'Become a Participant', href: '#participation' },
        { num: 'IV', label: 'Program Partners', href: '#partners' },
        { num: 'V', label: 'Digital Platform', href: '#platform' },
        { num: 'VI', label: 'Investment & ROI', href: '#investment' },
        { num: 'VII', label: 'Economic Forecast', href: '#forecast' },
        { num: 'VIII', label: 'Reinvestment System', href: '#reinvestment' },
        { num: 'IX', label: 'Long-Term Effect', href: '#longterm' },
        { num: 'X', label: 'Strategic Conclusion', href: '#conclusion' },
      ]
    : [
        { num: 'I', label: 'Постановка проблемы', href: '#problem' },
        { num: 'II', label: 'Механизм реализации', href: '#mechanism' },
        { num: 'III', label: 'Стать участником', href: '#participation' },
        { num: 'IV', label: 'Партнёры программы', href: '#partners' },
        { num: 'V', label: 'Цифровая платформа', href: '#platform' },
        { num: 'VI', label: 'Инвестиции и окупаемость', href: '#investment' },
        { num: 'VII', label: 'Экономический прогноз', href: '#forecast' },
        { num: 'VIII', label: 'Система реинвестирования', href: '#reinvestment' },
        { num: 'IX', label: 'Долгосрочный эффект', href: '#longterm' },
        { num: 'X', label: 'Стратегический вывод', href: '#conclusion' },
      ]

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      {/* CTA */}
      <div style={{ padding: 'clamp(40px,8vw,72px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="tag tag-green" style={{ marginBottom: 22, display: 'inline-block' }}>
            {en ? 'Apply Now' : 'Подать заявку'}
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 52px)', fontWeight: 900, color: 'var(--text)', margin: '0 0 18px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
            {en
              ? <>Join <span className="gradient-text">Growth Point</span></>
              : <>Присоединяйтесь к<br /><span className="gradient-text">Точке Роста</span></>}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 'clamp(14px, 2vw, 16px)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
            {en
              ? 'The national program is open to every able-bodied citizen registered as unemployed. Digital platform is active. Registration is open.'
              : 'Национальная программа открыта для каждого трудоспособного гражданина, зарегистрированного как безработный. Цифровая платформа активна. Регистрация открыта.'}
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" onClick={onApply} style={{
              padding: 'clamp(13px,3vw,16px) clamp(22px,5vw,38px)', borderRadius: 14,
              fontSize: 'clamp(14px,3.5vw,16px)', border: 'none', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontWeight: 700,
              background: 'linear-gradient(135deg, #3B82F6, #10B981)',
              color: '#fff', boxShadow: '0 4px 18px rgba(16,185,129,0.35)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              🚀 {en ? 'Submit participant application' : 'Подать заявку участника'}
            </button>
            <button type="button" onClick={onPartner} style={{
              padding: 'clamp(13px,3vw,16px) clamp(18px,4vw,30px)', borderRadius: 14,
              fontSize: 'clamp(13px,3vw,15px)', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontWeight: 700,
              background: 'rgba(167,139,250,0.1)',
              border: '1.5px solid rgba(167,139,250,0.4)',
              color: '#a78bfa',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.1)' }}
            >
              🤝 {en ? 'Become a partner' : 'Стать партнёром'}
            </button>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* Footer content */}
      <div style={{ padding: 'clamp(28px,5vw,40px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,5vw,40px)', justifyContent: 'space-between' }}>
            {/* Brand */}
            <div style={{ maxWidth: 280, minWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: 'linear-gradient(135deg, #3B82F6, #10b981)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: 16, color: '#fff', flexShrink: 0
                }}>Т</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>
                    {en ? 'Growth Point' : 'Точка Роста'}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-2)' }}>
                    {en ? 'National Economic Program' : 'Национальная экономическая программа'}
                  </div>
                </div>
              </div>
              <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, margin: '0 0 12px 0' }}>
                {en ? '"Every person is a point of economic growth"' : '«Каждый человек — точка роста экономики»'}
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
                {en
                  ? 'Systemic unemployment reduction. Entrepreneurship development. Tax base expansion. GDP growth.'
                  : 'Системное снижение безработицы. Развитие предпринимательства. Расширение налоговой базы. Рост ВВП.'}
              </p>
            </div>

            {/* Sections nav */}
            <div>
              <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>
                {en ? 'Sections' : 'Разделы'}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '6px 20px' }}>
                {sections.map(s => (
                  <a key={s.num} href={s.href} style={{
                    color: 'var(--text-2)', fontSize: 13, textDecoration: 'none',
                    display: 'flex', gap: 6, alignItems: 'baseline',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                  >
                    <span style={{ color: 'var(--text-3)', fontSize: 10, fontWeight: 700 }}>{s.num}.</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />
      <div style={{ padding: '18px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12 }}>
            {en ? 'Growth Point · Republic of Moldova · 2025–2040' : 'Точка Роста · Республика Молдова · 2025–2040'}
          </div>
          <div style={{ color: 'var(--text-2)', fontSize: 11, maxWidth: 400, textAlign: 'right' }} className="hidden md:block">
            {en
              ? 'The "Growth Point" national program is a strategic economic planning document. All calculations are based on open statistical data.'
              : 'Национальная программа «Точка Роста» — стратегический документ экономического планирования. Все расчёты выполнены на основе открытых статистических данных.'}
          </div>
        </div>
      </div>
    </footer>
  )
}
