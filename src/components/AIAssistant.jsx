import { useState, useEffect, useRef } from 'react'
import { useLang } from '../LangContext'

const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

const SYSTEM_PROMPT_RU = `Ты — Lumi, ИИ-ассистент программы «Точка Роста» (Молдова). Твоё имя — Lumi. НЕ представляйся и не называй своё имя в ответах — пользователь уже знает, кто ты. Просто отвечай на вопрос.

О программе:
- «Точка Роста» — национальная программа снижения безработицы в Молдове
- Помогает безработным гражданам получить профессию и трудоустройство за 3–6 месяцев
- Треки: IT, Производство, Агросектор, Сфера услуг, Предпринимательство
- Поддержка: гранты до 25 000 MDL, кредиты ODIMM под 5%, менторы, стажировки
- Целевой результат: снижение безработицы с 14% до 2–3% за 15 лет
- Для партнёров (работодатели, инвесторы, НКО): отдельная форма партнёрства

Правила общения:
- Отвечай кратко, по делу, на русском языке
- Будь дружелюбным и мотивирующим
- Никогда не начинай ответ с «Я Lumi» или любого другого представления
- Если не знаешь ответа — предложи связаться с поддержкой
- Помогай пользователю сориентироваться на сайте`

const SYSTEM_PROMPT_EN = `You are Lumi, the AI assistant of the Growth Point program (Moldova). Your name is Lumi. Do NOT introduce yourself or mention your name in replies — the user already knows who you are. Just answer the question directly.

About the program:
- Growth Point is a national unemployment reduction program in Moldova
- Helps unemployed citizens gain a profession and find employment in 3–6 months
- Tracks: IT, Manufacturing, Agriculture, Services, Entrepreneurship
- Support: grants up to 25,000 MDL, ODIMM loans at 5%, mentors, internships
- Target: reducing unemployment from 14% to 2–3% over 15 years
- For partners (employers, investors, NGOs): a separate partnership form is available

Communication rules:
- Reply concisely and to the point, in English
- Be friendly and motivating
- Never start a reply with "I'm Lumi" or any other self-introduction
- If you don't know the answer — suggest contacting support
- Help the user navigate the website`

const SUGGESTIONS_RU = [
  'Как подать заявку?',
  'Какие треки доступны?',
  'Есть ли гранты?',
  'Как стать партнёром?',
  'Сколько длится обучение?',
]

const SUGGESTIONS_EN = [
  'How to apply?',
  'What tracks are available?',
  'Are there any grants?',
  'How to become a partner?',
  'How long does training take?',
]

async function askAI(messages, systemPrompt, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-12),
          ],
          max_tokens: 350,
          temperature: 0.65,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content?.trim()
      if (reply) return reply
      throw new Error('empty response')
    } catch (e) {
      if (attempt === retries) throw e
      await new Promise(r => setTimeout(r, 800 * (attempt + 1)))
    }
  }
}

export default function AIAssistant({ hidden }) {
  const { lang } = useLang()
  const en = lang === 'en'
  const SUGGESTIONS = en ? SUGGESTIONS_EN : SUGGESTIONS_RU
  const systemPrompt = en ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_RU
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [pulse, setPulse] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  // Stop pulse after first open
  useEffect(() => {
    if (open) setPulse(false)
  }, [open])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const send = async (text) => {
    const trimmed = (text || input).trim()
    if (!trimmed || typing) return
    setInput('')
    const userMsg = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setTyping(true)
    try {
      const reply = await askAI(newMessages, systemPrompt)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: en ? 'Connection error. Please try again.' : 'Ошибка соединения. Попробуйте снова.' }])
    } finally {
      setTyping(false)
    }
  }

  const isEmpty = messages.length === 0

  if (hidden) return null

  return (
    <>
      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 88, right: 20, zIndex: 9999,
          width: 'min(380px, calc(100vw - 32px))',
          height: 'min(520px, calc(100vh - 120px))',
          background: 'var(--bg-card)',
          borderRadius: 22,
          boxShadow: '0 24px 80px rgba(0,0,0,0.25), 0 0 0 1px var(--border)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'aiSlideUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}>

          {/* Header */}
          <div style={{
            padding: '16px 18px',
            background: 'linear-gradient(135deg, #3B82F6, #10B981)',
            display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, flexShrink: 0,
            }}>✦</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Lumi</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>{en ? 'AI Assistant · Growth Point' : 'ИИ-ассистент · Точка Роста'}</div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: 8,
              width: 30, height: 30, cursor: 'pointer', color: '#fff', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Welcome */}
            {isEmpty && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{
                  background: 'var(--bg-el)', borderRadius: '16px 16px 16px 4px',
                  padding: '12px 14px', maxWidth: '85%',
                }}>
                  <p style={{ color: 'var(--text)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                    {en ? (
                      <>👋 Hi! I'm <strong>Lumi</strong> — the AI assistant of <strong>Growth Point</strong>.<br />I'll help you navigate the program, tracks, grants and everything else.</>
                    ) : (
                      <>👋 Привет! Я <strong>Lumi</strong> — ИИ-ассистент программы <strong>«Точка Роста»</strong>.<br />Помогу разобраться с программой, треками, грантами и всем остальным.</>
                    )}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => send(s)} style={{
                      padding: '7px 12px', borderRadius: 20, border: '1px solid var(--border)',
                      background: 'var(--bg-el)', color: 'var(--text-2)',
                      fontSize: 12, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.15s', fontWeight: 500,
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.color = '#3B82F6' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
                    >{s}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Message list */}
            {messages.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '10px 14px',
                  borderRadius: m.role === 'user'
                    ? '16px 16px 4px 16px'
                    : '16px 16px 16px 4px',
                  background: m.role === 'user'
                    ? 'linear-gradient(135deg, #3B82F6, #10B981)'
                    : 'var(--bg-el)',
                  color: m.role === 'user' ? '#fff' : 'var(--text)',
                  fontSize: 14, lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {/* Typing */}
            {typing && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: 'var(--bg-el)', borderRadius: '16px 16px 16px 4px',
                  padding: '12px 16px', display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  {[0, 1, 2].map(d => (
                    <div key={d} style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#94a3b8',
                      animation: `bounce 1.2s ${d * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 14px',
            borderTop: '1px solid var(--border)',
            display: 'flex', gap: 8, alignItems: 'flex-end',
            background: 'var(--bg)', flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder={en ? 'Write your question...' : 'Напишите вопрос...'}
              rows={1}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: 12, resize: 'none',
                background: 'var(--bg-el)', border: '1px solid var(--border)',
                color: 'var(--text)', fontSize: 14, outline: 'none',
                fontFamily: 'Inter, sans-serif', lineHeight: 1.5,
                maxHeight: 80, overflowY: 'auto',
              }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || typing}
              style={{
                width: 40, height: 40, borderRadius: 12, border: 'none',
                cursor: input.trim() && !typing ? 'pointer' : 'default',
                background: input.trim() && !typing
                  ? 'linear-gradient(135deg, #3B82F6, #10B981)'
                  : 'var(--bg-el)',
                color: input.trim() && !typing ? '#fff' : '#64748b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, transition: 'all 0.2s', flexShrink: 0,
              }}
            >↑</button>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 24, right: 20, zIndex: 9999,
          width: 56, height: 56, borderRadius: 18, border: 'none',
          cursor: 'pointer',
          background: open ? 'var(--bg-el)' : 'linear-gradient(135deg, #3B82F6, #10B981)',
          boxShadow: open ? '0 4px 16px rgba(0,0,0,0.15)' : '0 8px 24px rgba(59,130,246,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: open ? 20 : 24,
          transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          transform: open ? 'scale(0.9)' : 'scale(1)',
        }}
        title={en ? 'Lumi — AI Assistant' : 'Lumi — ИИ-ассистент'}
      >
        {open ? '✕' : '✦'}
        {/* Pulse ring */}
        {pulse && !open && (
          <span style={{
            position: 'absolute', inset: -4, borderRadius: 22,
            border: '2px solid rgba(59,130,246,0.5)',
            animation: 'aiPulse 2s ease-out infinite',
            pointerEvents: 'none',
          }} />
        )}
      </button>

      <style>{`
        @keyframes aiSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes aiPulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  )
}
