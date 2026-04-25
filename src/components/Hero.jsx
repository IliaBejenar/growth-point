import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'

const topStats = [
  { value: '3 тыс.', valueEn: '3K', label: 'Г.1', labelEn: 'Y.1' },
  { value: '9 тыс.', valueEn: '9K', label: 'Г.3', labelEn: 'Y.3' },
  { value: '15 тыс.', valueEn: '15K', label: 'Г.5', labelEn: 'Y.5' },
  { value: '21 тыс.', valueEn: '21K', label: 'Г.7', labelEn: 'Y.7' },
  { value: '30 тыс.', valueEn: '30K', label: 'Г.10', labelEn: 'Y.10' },
  { value: '45 тыс.', valueEn: '45K', label: 'Г.15', labelEn: 'Y.15' },
]

export default function Hero({ onApply, onPartner }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])
  const { lang } = useLang()
  const en = lang === 'en'

  const kpis = [
    { value: '45 000', label: en ? 'Unemployed citizens' : 'Безработных граждан', color: '#f87171' },
    { value: '900 000', label: en ? 'Working-age population' : 'Трудоспособное население', color: '#3B82F6' },
    { value: en ? '15 years' : '15 лет', label: en ? 'Program horizon' : 'Горизонт программы', color: '#10B981' },
    { value: '2–3%', label: en ? 'Target unemployment rate' : 'Целевой уровень безработицы', color: '#a78bfa' },
    { value: '2025', label: en ? 'Launch year' : 'Год запуска', color: '#CA8A04' },
  ]

  return (
    <section style={{ padding: 'clamp(40px,8vw,80px) 0 clamp(32px,6vw,60px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 800, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span className="tag tag-blue" style={{ textAlign: 'center', lineHeight: 1.4 }}>
            {en ? 'National Economic Program · 2025–2040' : 'Национальная экономическая программа · 2025–2040'}
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          textAlign: 'center', fontSize: 'clamp(40px, 10vw, 72px)',
          fontWeight: 900, color: 'var(--text)', margin: '0 0 20px 0',
          lineHeight: 1.08, letterSpacing: '-1.5px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease'
        }}>
          {en ? <><span className="gradient-text">Growth</span> Point</> : <>Точка <span className="gradient-text">Роста</span></>}
        </h1>

        <p style={{
          textAlign: 'center', fontSize: 'clamp(14px, 3.5vw, 18px)',
          color: 'var(--text-2)', maxWidth: 640, margin: '0 auto 12px',
          lineHeight: 1.65,
          opacity: visible ? 1 : 0, transition: 'all 0.7s 0.15s ease',
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
        }}>
          {en
            ? 'A state program for the systemic transformation of unemployment into sustainable economic capital for Moldova.'
            : 'Государственная программа системной трансформации безработицы в устойчивый экономический капитал страны.'}
        </p>
        <p style={{
          textAlign: 'center', fontSize: 'clamp(12px, 3vw, 14px)',
          color: 'var(--text-3)', maxWidth: 520, margin: '0 auto 32px',
          lineHeight: 1.7, fontStyle: 'italic',
          opacity: visible ? 1 : 0, transition: 'all 0.7s 0.25s ease',
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
        }}>
          {en ? '"Every person is a point of economic growth"' : '«Каждый человек — точка роста экономики»'}
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: 40,
          opacity: visible ? 1 : 0, transition: 'all 0.7s 0.35s ease',
        }}>
          <button onClick={onApply} className="btn-primary" style={{ padding: '13px 28px', borderRadius: 12, fontSize: 15 }}>
            🚀 {en ? 'Apply Now' : 'Подать заявку'}
          </button>
          <button onClick={onPartner} style={{
            padding: '13px 24px', borderRadius: 12, fontSize: 15, cursor: 'pointer',
            border: '1.5px solid rgba(167,139,250,0.45)',
            background: 'rgba(167,139,250,0.08)', color: '#a78bfa',
            fontWeight: 600, fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.08)' }}
          >
            🤝 {en ? 'Become a Partner' : 'Стать партнёром'}
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('forecast')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '13px 24px', borderRadius: 12, fontSize: 15 }}>
            {en ? 'Economic Model ↓' : 'Экономическая модель ↓'}
          </button>
        </div>

        {/* Employment forecast chart */}
        <div className="card" style={{ padding: 'clamp(16px,4vw,28px) clamp(16px,4vw,32px)', marginBottom: 16 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
            {en ? 'Employment Forecast · 2025–2040' : 'Прогноз занятости · 2025–2040'}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', justifyContent: 'space-around' }}>
            {topStats.map((s, i) => {
              const heights = [28, 48, 64, 76, 90, 100]
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
                  <div style={{ color: '#10B981', fontWeight: 700, fontSize: 'clamp(9px,2.5vw,12px)', whiteSpace: 'nowrap' }}>{en ? s.valueEn : s.value}</div>
                  <div style={{
                    width: '100%', maxWidth: 36,
                    height: visible ? `${heights[i]}px` : '4px',
                    background: 'linear-gradient(180deg, #10B981, #3B82F6)',
                    borderRadius: '5px 5px 0 0',
                    transition: `height 1.2s ${0.1 * i}s cubic-bezier(0.4,0,0.2,1)`
                  }} />
                  <div style={{ color: '#3B82F6', fontSize: 'clamp(9px,2.5vw,11px)', fontWeight: 700 }}>{en ? s.labelEn : s.label}</div>
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: 14, color: 'var(--text-2)', fontSize: 12, textAlign: 'center' }}>
            {en
              ? <>Cumulative: <span style={{ color: '#10B981', fontWeight: 700 }}>44,500 people by year 15</span></>
              : <>Кумулятивно: <span style={{ color: '#10B981', fontWeight: 700 }}>44 500 чел. к году 15</span></>}
          </div>
        </div>

        {/* KPI strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 10, marginBottom: 10 }}>
          {kpis.map((k, i) => (
            <div key={i} className="card" style={{ padding: '14px 12px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(16px,4vw,22px)', fontWeight: 800, color: k.color, lineHeight: 1 }}>{k.value}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 'clamp(10px,2.5vw,12px)', marginTop: 5, lineHeight: 1.3 }}>{k.label}</div>
            </div>
          ))}
        </div>

        {/* Highlight KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[
            { value: '2–3%', label: en ? 'Unemployment' : 'Безработица', color: '#10B981' },
            { value: '2.5B', label: en ? 'MDL taxes/year' : 'MDL налогов/год', color: '#3B82F6' },
            { value: '+6.2%', label: en ? 'GDP contribution' : 'Вклад в ВВП', color: '#a78bfa' },
          ].map((k, i) => (
            <div key={i} className="card-highlight" style={{ padding: 'clamp(12px,3vw,18px) 12px', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(18px,5vw,26px)', fontWeight: 800, color: k.color }}>{k.value}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 'clamp(10px,2.5vw,13px)', marginTop: 4, lineHeight: 1.3 }}>{k.label}</div>
            </div>
          ))}
        </div>

        {/* Live status */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 14px', borderRadius: 99,
            background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)'
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%', background: '#10B981',
              boxShadow: '0 0 8px #10B981', flexShrink: 0
            }} />
            <span style={{ color: '#10B981', fontSize: 'clamp(10px,2.8vw,12px)', fontWeight: 600 }}>
              {en ? 'Platform active · Registration open' : 'Платформа активна · Регистрация открыта'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
