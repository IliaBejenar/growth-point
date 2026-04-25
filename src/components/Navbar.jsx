import { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { useLang } from '../LangContext'

const linksRu = [
  { label: 'Проблема',  icon: '⚠️', href: '#problem' },
  { label: 'Решение',   icon: '⚙️', href: '#mechanism' },
  { label: 'Участие',   icon: '🙋', href: '#participation' },
  { label: 'Тест',      icon: '🎯', href: '#quiz' },
  { label: 'Партнёры',  icon: '🤝', href: '#partners' },
  { label: 'Прогноз',   icon: '📈', href: '#forecast' },
  { label: 'Выводы',    icon: '🏁', href: '#conclusion' },
]

const linksEn = [
  { label: 'Problem',   icon: '⚠️', href: '#problem' },
  { label: 'Solution',  icon: '⚙️', href: '#mechanism' },
  { label: 'Join',      icon: '🙋', href: '#participation' },
  { label: 'Quiz',      icon: '🎯', href: '#quiz' },
  { label: 'Partners',  icon: '🤝', href: '#partners' },
  { label: 'Forecast',  icon: '📈', href: '#forecast' },
  { label: 'Conclusion',icon: '🏁', href: '#conclusion' },
]

export default function Navbar({ onApply }) {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const { lang, setLang } = useLang()
  const links = lang === 'en' ? linksEn : linksRu
  const applyLabel = lang === 'en' ? 'Apply' : 'Подать заявку'

  return (
    <nav style={{
      background: 'var(--nav-bg)',
      borderBottom: '1px solid var(--nav-border)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      {/* Main bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 52, padding: '0 16px', maxWidth: 1200, margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #3B82F6, #10b981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 14, color: '#fff', flexShrink: 0,
          }}>Т</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--text)', lineHeight: 1.1 }}>
              {lang === 'en' ? 'Growth Point' : 'Точка Роста'}
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-2)', fontWeight: 500 }}>
              {lang === 'en' ? 'Republic of Moldova' : 'Республика Молдова'}
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--text-2)',
              fontSize: 13, fontWeight: 500,
              textDecoration: 'none', padding: '6px 10px', borderRadius: 8,
              transition: 'color 0.2s, background 0.2s',
              background: 'transparent',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(59,130,246,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }}
            >{l.label}</a>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          {/* Language toggle — always visible */}
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            title={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            style={{
              height: 32, padding: '0 10px', borderRadius: 8,
              border: '1px solid var(--border)',
              background: 'var(--bg-el)', cursor: 'pointer',
              fontSize: 12, fontWeight: 700, fontFamily: 'Inter, sans-serif',
              color: 'var(--text-2)',
              display: 'flex', alignItems: 'center', gap: 4,
              flexShrink: 0, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.color = '#3B82F6' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
          >
            🌐 {lang === 'ru' ? 'EN' : 'RU'}
          </button>

          {/* Theme toggle */}
          <button onClick={toggle} title={dark ? 'Светлая тема' : 'Тёмная тема'} style={{
            width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)',
            background: 'var(--bg-el)', cursor: 'pointer', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, transition: 'all 0.2s',
          }}>
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Desktop CTA */}
          <button onClick={onApply} className="btn-primary hidden md:block" style={{
            padding: '7px 16px', borderRadius: 9, fontSize: 13, whiteSpace: 'nowrap',
          }}>{applyLabel}</button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="flex md:hidden"
            aria-label="Меню"
            style={{
              background: open ? 'rgba(59,130,246,0.10)' : 'var(--bg-el)',
              border: `1px solid ${open ? 'rgba(59,130,246,0.35)' : 'var(--border)'}`,
              borderRadius: 8, width: 32, height: 32, cursor: 'pointer',
              color: open ? '#3B82F6' : 'var(--text-2)', fontSize: 15,
              alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'var(--menu-bg)',
          borderTop: '1px solid var(--border)',
          padding: '14px 16px 16px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  padding: '10px 12px', borderRadius: 10,
                  background: 'var(--bg-el)', border: '1px solid var(--border)',
                  textDecoration: 'none', transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.07)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-el)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <span style={{ fontSize: 17, lineHeight: 1, flexShrink: 0 }}>{l.icon}</span>
                <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: 13, lineHeight: 1.2 }}>{l.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => { setOpen(false); onApply() }}
            className="btn-primary"
            style={{ width: '100%', padding: '13px', borderRadius: 11, fontSize: 14, fontWeight: 700 }}
          >
            🚀 {applyLabel}
          </button>
        </div>
      )}
    </nav>
  )
}
