import { useState, useEffect } from 'react'
import { useLang } from '../LangContext'

// Логика: год 1 — 3 000 чел., 100% наёмные, 0 бизнесов.
// Далее кумулятивно +3 000/год, часть выпускников открывает бизнес.
// Год 1: зарплатный налог = 3 000 × 15 450 MDL × 12 мес × 30.5% (НДФЛ+взносы) ≈ 90 млн MDL
// Год 3: 9 000 кум., ~800 открыли ИП → bizTax появляется
const tableData = [
  { year: 'Год 1',  employed: '3 000',  businesses: '0',      ipShare: '100% найм', llcShare: '—',   salaryTax: 45,   bizTax: 0,    total: 45,   salary: '15 450', gdp: '+0,1%' },
  { year: 'Год 3',  employed: '9 000',  businesses: '800',    ipShare: '82%',       llcShare: '18%', salaryTax: 280,  bizTax: 22,   total: 302,  salary: '16 388', gdp: '+0,7%' },
  { year: 'Год 7',  employed: '24 000', businesses: '5 200',  ipShare: '58%',       llcShare: '42%', salaryTax: 620,  bizTax: 165,  total: 785,  salary: '18 936', gdp: '+1,9%' },
  { year: 'Год 10', employed: '33 000', businesses: '10 500', ipShare: '44%',       llcShare: '56%', salaryTax: 890,  bizTax: 420,  total: 1310, salary: '21 016', gdp: '+3,1%' },
  { year: 'Год 15', employed: '44 500', businesses: '20 300', ipShare: '30%',       llcShare: '70%', salaryTax: 1308, bizTax: 1148, total: 2456, salary: '24 366', gdp: '+6,2%' },
]

const milestones = [
  { label: 'Год 1',  value: 45,   gdp: '+0,1%', color: '#38bdf8' },
  { label: 'Год 3',  value: 302,  gdp: '+0,7%', color: '#38bdf8' },
  { label: 'Год 7',  value: 785,  gdp: '+1,9%', color: '#34d399' },
  { label: 'Год 10', value: 1310, gdp: '+3,1%', color: '#34d399' },
  { label: 'Год 15', value: 2456, gdp: '+6,2%', color: '#fbbf24' },
]

const ipLlcData = [
  { year: 'Год 1',  ip: 0,  llc: 0,  hired: 100 },
  { year: 'Год 3',  ip: 82, llc: 18, hired: 0 },
  { year: 'Год 7',  ip: 58, llc: 42, hired: 0 },
  { year: 'Год 10', ip: 44, llc: 56, hired: 0 },
  { year: 'Год 15', ip: 30, llc: 70, hired: 0 },
]

export default function ForecastSection() {
  const [animated, setAnimated] = useState(false)
  useEffect(() => { setTimeout(() => setAnimated(true), 400) }, [])
  const { lang } = useLang()
  const en = lang === 'en'

  const yearLabel = (ru) => {
    if (!en) return ru
    return ru.replace('Год ', 'Year ')
  }

  return (
    <section className="section" id="forecast" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-green" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section III — Economic Forecast' : 'Раздел III — Экономический прогноз'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Cumulative Growth Model' : 'Кумулятивная модель роста'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            {en
              ? 'The forecast is based on a cumulative model: every employed person stays in the system, generating an increasing tax stream.'
              : 'Прогноз рассчитан на основе кумулятивной модели: каждый трудоустроенный остаётся в системе, формируя нарастающий налоговый поток.'}
          </p>
        </div>

        {/* Tax milestone cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 36 }}>
          {milestones.map((m, i) => (
            <div key={i} className="card" style={{ padding: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`
              }} />
              <div style={{ color: 'var(--text-2)', fontSize: 12, marginBottom: 6 }}>{yearLabel(m.label)}</div>
              <div style={{ color: m.color, fontWeight: 900, fontSize: 22 }}>{m.value.toLocaleString()}</div>
              <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{en ? 'M MDL' : 'млн MDL'}</div>
              <div style={{ color: '#34d399', fontSize: 13, fontWeight: 700, marginTop: 6 }}>{m.gdp} {en ? 'GDP' : 'ВВП'}</div>
            </div>
          ))}
        </div>

        {/* Bar chart — tax growth */}
        <div className="card" style={{ padding: 28, marginBottom: 28 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 24 }}>
            {en ? 'Tax revenue growth (M MDL)' : 'Рост налоговых поступлений (млн MDL)'}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: 160, paddingBottom: 4 }}>
            {milestones.map((m, i) => {
              const h = animated ? (m.value / 2456) * 140 + 12 : 4
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ color: m.color, fontSize: 11, fontWeight: 700 }}>{m.value.toLocaleString()}</div>
                  <div style={{
                    width: '100%', height: `${h}px`,
                    background: `linear-gradient(180deg, ${m.color}, ${m.color}50)`,
                    borderRadius: '6px 6px 0 0',
                    transition: `height 1.2s ${0.1 * i}s cubic-bezier(0.4,0,0.2,1)`,
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)',
                      color: '#fff', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap'
                    }}>{m.gdp}</div>
                  </div>
                  <div style={{ color: 'var(--text-2)', fontSize: 11 }}>{yearLabel(m.label)}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* IP vs LLC transformation */}
        <div className="card" style={{ padding: 28, marginBottom: 28 }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>
            {en ? 'Business structure transformation: SP → legal entities' : 'Трансформация структуры бизнеса: ИП → юрлица'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ipLlcData.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, color: 'var(--text-3)', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{yearLabel(row.year)}</div>
                <div style={{ flex: 1, height: 28, borderRadius: 8, overflow: 'hidden', display: 'flex' }}>
                  {row.hired > 0 ? (
                    <div style={{
                      height: '100%', width: animated ? '100%' : '0%',
                      background: 'rgba(251,191,36,0.35)',
                      transition: `width 1s ${0.1 * i}s ease`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <span style={{ color: '#fbbf24', fontSize: 11, fontWeight: 700 }}>{en ? '100% Employed workers' : '100% Наёмные работники'}</span>
                    </div>
                  ) : (
                    <>
                      <div style={{
                        height: '100%', width: `${animated ? row.ip : 0}%`,
                        background: 'rgba(59,130,246,0.3)',
                        transition: `width 1s ${0.1 * i}s ease`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {row.ip >= 20 && <span style={{ color: '#38bdf8', fontSize: 11, fontWeight: 700 }}>{row.ip}% {en ? 'SP' : 'ИП'}</span>}
                      </div>
                      <div style={{
                        height: '100%', width: `${animated ? row.llc : 0}%`,
                        background: 'rgba(16,185,129,0.3)',
                        transition: `width 1s ${0.1 * i}s ease`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {row.llc >= 10 && <span style={{ color: '#34d399', fontSize: 11, fontWeight: 700 }}>{row.llc}% {en ? 'LLC' : 'Юрлица'}</span>}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 14, lineHeight: 1.6 }}>
            {en ? <>As the share of legal entities grows, the effective business tax rate rises from{' '}
              <strong style={{ color: '#3B82F6' }}>4% (SP)</strong> to <strong style={{ color: '#10B981' }}>12% (LLC)</strong>,
              delivering a multiplied increase in budget revenues without adding new entities.</> :
              <>По мере роста доли юридических лиц эффективная налоговая ставка бизнеса возрастает с{' '}
                <strong style={{ color: '#3B82F6' }}>4% (ИП)</strong> до <strong style={{ color: '#10B981' }}>12% (юрлица)</strong>,
                обеспечивая кратный рост бюджетных поступлений без увеличения количества субъектов.</>}
          </div>
        </div>

        {/* Full table */}
        <div className="card" style={{ padding: 28, overflowX: 'auto' }}>
          <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 18 }}>
            {en ? 'Forecast summary table' : 'Сводная таблица прогноза'}
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {(en
                  ? ['Period', 'Employed', 'Businesses', 'SP share', 'LLC share', 'Salary tax', 'Business tax', 'Total, M MDL', 'Avg. salary', 'GDP growth']
                  : ['Период', 'Трудоустроено', 'Бизнесов', 'Доля ИП', 'Доля юрлиц', 'Налог зарплат', 'Налог бизнеса', 'Итого, млн MDL', 'Ср. зарплата', 'Прирост ВВП']
                ).map(h => (
                  <th key={h} style={{ padding: '8px 12px', color: '#475569', fontWeight: 600, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--bg)' }}>
                  <td style={{ padding: '10px 12px', color: '#38bdf8', fontWeight: 700, whiteSpace: 'nowrap' }}>{yearLabel(row.year)}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{row.employed}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{row.businesses}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>{row.ipShare}</td>
                  <td style={{ padding: '10px 12px', color: '#10B981', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.llcShare}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>{row.salaryTax}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>{row.bizTax}</td>
                  <td style={{ padding: '10px 12px', color: '#fbbf24', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.total.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>{row.salary}</td>
                  <td style={{ padding: '10px 12px', color: '#10B981', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.gdp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
