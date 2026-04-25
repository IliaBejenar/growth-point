import { useState } from 'react'
import { useLang } from '../LangContext'

const tracks = [
  { id: 'digital',      label: 'Цифровая экономика',     labelEn: 'Digital Economy',         icon: '💻', desc: 'Программирование, Data, UX/UI, Digital-маркетинг', descEn: 'Programming, Data, UX/UI, Digital marketing', color: '#38bdf8', subs: ['Программирование', 'Data / аналитика', 'Кибербезопасность', 'UX/UI дизайн', 'Digital-маркетинг', 'No-code / автоматизация', 'GameDev'], subsEn: ['Programming', 'Data / Analytics', 'Cybersecurity', 'UX/UI Design', 'Digital Marketing', 'No-code / Automation', 'GameDev'] },
  { id: 'energy',       label: 'Энергетика',              labelEn: 'Energy',                  icon: '⚡', desc: 'Солнечная энергетика, электросети, энергоэффективность', descEn: 'Solar energy, power grids, energy efficiency', color: '#facc15', subs: ['Солнечная энергетика', 'Электросети', 'Энергоэффективность', 'Обслуживание оборудования'], subsEn: ['Solar energy', 'Power grids', 'Energy efficiency', 'Equipment maintenance'] },
  { id: 'agro',         label: 'Агросектор',              labelEn: 'Agro-sector',             icon: '🌾', desc: 'Традиционное с/х, AgroTech, переработка', descEn: 'Traditional farming, AgroTech, food processing', color: '#4ade80', subs: ['Традиционное с/х', 'AgroTech', 'Переработка продукции', 'Агробизнес'], subsEn: ['Traditional farming', 'AgroTech', 'Food processing', 'Agro-business'] },
  { id: 'logistics',    label: 'Логистика и торговля',    labelEn: 'Logistics & Trade',       icon: '🚚', desc: 'Логистика, склад, e-commerce, закупки', descEn: 'Logistics, warehousing, e-commerce, procurement', color: '#fb923c', subs: ['Логистика', 'Складская деятельность', 'E-commerce', 'Закупки'], subsEn: ['Logistics', 'Warehousing', 'E-commerce', 'Procurement'] },
  { id: 'construction', label: 'Строительство',           labelEn: 'Construction',            icon: '🏗️', desc: 'Строительство, проектирование, дизайн интерьера', descEn: 'Construction, engineering, interior design', color: '#a78bfa', subs: ['Строительство', 'Проектирование (инженеры)', 'Дизайн интерьера', 'Управление недвижимостью'], subsEn: ['Construction', 'Engineering', 'Interior design', 'Property management'] },
  { id: 'tourism',      label: 'Туризм и сервис',         labelEn: 'Tourism & Service',       icon: '🧳', desc: 'Гостиницы, рестораны, туроператоры, ивенты', descEn: 'Hotels, restaurants, tour operators, events', color: '#f472b6', subs: ['Гостиницы', 'Рестораны', 'Туроператоры', 'Event-менеджмент'], subsEn: ['Hotels', 'Restaurants', 'Tour operators', 'Event management'] },
  { id: 'medicine',     label: 'Медицина и здоровье',     labelEn: 'Medicine & Health',       icon: '🏥', desc: 'Медсёстры, врачи, фармацевтика, уход', descEn: 'Nurses, doctors, pharmaceuticals, care', color: '#34d399', subs: ['Медсёстры', 'Врачи', 'Фармацевтика', 'Уход за пожилыми'], subsEn: ['Nurses', 'Doctors', 'Pharmaceuticals', 'Elderly care'] },
  { id: 'education',    label: 'Образование',             labelEn: 'Education',               icon: '🎓', desc: 'Учителя, онлайн-преподаватели, тренеры', descEn: 'Teachers, online tutors, trainers', color: '#60a5fa', subs: ['Учителя', 'Онлайн-преподаватели', 'Тренеры / курсы'], subsEn: ['Teachers', 'Online tutors', 'Trainers / courses'] },
  { id: 'production',   label: 'Производство',            labelEn: 'Manufacturing',           icon: '🏭', desc: 'Лёгкая и пищевая промышленность, сборка', descEn: 'Light and food industry, assembly', color: '#94a3b8', subs: ['Лёгкая промышленность', 'Пищевая промышленность', 'Сборка и производство', 'Контроль качества'], subsEn: ['Light industry', 'Food industry', 'Assembly', 'Quality control'] },
  { id: 'finance',      label: 'Финансы и бизнес',        labelEn: 'Finance & Business',      icon: '💰', desc: 'Бухгалтерия, банки, финанализ, предпринимательство', descEn: 'Accounting, banking, financial analysis', color: '#fbbf24', subs: ['Бухгалтерия', 'Банки', 'Финансовый анализ', 'Предпринимательство'], subsEn: ['Accounting', 'Banking', 'Financial analysis', 'Entrepreneurship'] },
  { id: 'creative',     label: 'Креативная индустрия',    labelEn: 'Creative Industry',       icon: '🎨', desc: 'Дизайн, фото/видео, контент, SMM', descEn: 'Design, photo/video, content, SMM', color: '#e879f9', subs: ['Дизайн', 'Фото/видео', 'Контент', 'SMM'], subsEn: ['Design', 'Photo/video', 'Content', 'SMM'] },
  { id: 'crafts',       label: 'Рабочие профессии',       labelEn: 'Skilled Trades',          icon: '🧑‍🔧', desc: 'Электрики, сантехники, механики, водители', descEn: 'Electricians, plumbers, mechanics, drivers', color: '#f87171', subs: ['Электрики', 'Сантехники', 'Механики', 'Водители'], subsEn: ['Electricians', 'Plumbers', 'Mechanics', 'Drivers'] },
  { id: 'government',   label: 'Государственный сектор',  labelEn: 'Public Sector',           icon: '🛡️', desc: 'Администрация, полиция, социальные службы', descEn: 'Administration, police, social services', color: '#818cf8', subs: ['Администрация', 'Полиция', 'Социальные службы'], subsEn: ['Administration', 'Police', 'Social services'] },
]

const regions = ['Кишинёв', 'Бельцы', 'Тирасполь', 'Оргеев', 'Унгены', 'Кагул', 'Сорока', 'Хынчешть', 'Стрэшень', 'АТО Гагаузия', 'Другой район']
const regionsEn = ['Chisinau', 'Bălți', 'Tiraspol', 'Orhei', 'Ungheni', 'Cahul', 'Soroca', 'Hîncești', 'Strășeni', 'ATU Gagauzia', 'Other district']

const educations = ['Начальное образование', 'Среднее образование', 'Среднее специальное', 'Незаконченное высшее', 'Высшее образование']
const educationsEn = ['Primary education', 'Secondary education', 'Vocational / secondary specialised', 'Incomplete higher education', 'Higher education']

export default function RegistrationModal({ onClose, onSubmit }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ firstName: '', lastName: '', age: '', region: '', education: '', phone: '', track: '', subTrack: '', goal: '' })
  const [errors, setErrors] = useState({})

  const goals = [
    { id: 'income',     label: en ? 'Get first official income' : 'Получить первый официальный доход',         icon: '💰' },
    { id: 'career',     label: en ? 'Build a career in chosen field' : 'Построить карьеру в выбранной сфере',   icon: '📈' },
    { id: 'business',   label: en ? 'Start my own business' : 'Открыть собственный бизнес',                     icon: '🏢' },
    { id: 'requalify',  label: en ? 'Change profession' : 'Сменить профессию',                                   icon: '🔄' },
  ]

  const STEPS = [
    { num: 1, label: en ? 'Info' : 'Данные' },
    { num: 2, label: en ? 'Track' : 'Трек' },
    { num: 3, label: en ? 'Goal' : 'Цель' },
  ]

  const set = (key, val) => {
    setForm(p => ({ ...p, [key]: val }))
    setErrors(p => ({ ...p, [key]: '' }))
  }

  const validateStep1 = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = en ? 'Enter first name' : 'Введите имя'
    if (!form.lastName.trim()) e.lastName = en ? 'Enter last name' : 'Введите фамилию'
    if (!form.age || isNaN(form.age) || +form.age < 16 || +form.age > 65) e.age = en ? 'Age 16–65' : 'Возраст 16–65'
    if (!form.region) e.region = en ? 'Select region' : 'Выберите регион'
    if (!form.education) e.education = en ? 'Select education level' : 'Выберите уровень образования'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    if (!form.track) { setErrors({ track: en ? 'Select a track' : 'Выберите трек' }); return false }
    return true
  }

  const validateStep3 = () => {
    if (!form.goal) { setErrors({ goal: en ? 'Select a goal' : 'Выберите цель' }); return false }
    return true
  }

  const next = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    if (step === 3) {
      if (!validateStep3()) return
      onSubmit({ ...form, name: `${form.firstName} ${form.lastName}` })
      return
    }
    setStep(s => s + 1)
  }

  const selectedTrack = tracks.find(t => t.id === form.track)
  const handleTrackSelect = (id) => { set('track', id); set('subTrack', '') }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '12px', overflowY: 'auto'
    }} onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 560, marginTop: 'auto', marginBottom: 'auto',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 24, overflow: 'hidden',
        boxShadow: '0 32px 80px var(--shadow-modal)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: 'clamp(16px,4vw,24px) clamp(16px,4vw,28px) 0',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(16,185,129,0.03))',
          borderBottom: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: 'linear-gradient(135deg, #3B82F6, #10b981)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 14, color: '#fff'
              }}>Т</div>
              <div>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14 }}>
                  {en ? 'Growth Point' : 'Точка Роста'}
                </div>
                <div style={{ color: 'var(--text-2)', fontSize: 11 }}>
                  {en ? 'Submit application' : 'Подача заявки'}
                </div>
              </div>
            </div>
            <button onClick={onClose} style={{
              background: 'var(--bg-el)', border: '1px solid var(--border)',
              borderRadius: 8, width: 32, height: 32, cursor: 'pointer', color: 'var(--text-2)',
              fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
          </div>

          {/* Step indicators */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: step > s.num ? 'linear-gradient(135deg, #0ea5e9, #10b981)'
                      : step === s.num ? 'rgba(59,130,246,0.1)'
                        : 'var(--bg-el)',
                    border: step >= s.num ? '1.5px solid rgba(59,130,246,0.5)' : '1.5px solid var(--border)',
                    color: step > s.num ? '#fff' : step === s.num ? '#3B82F6' : '#94A3B8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, transition: 'all 0.3s'
                  }}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <div style={{ color: step >= s.num ? '#94a3b8' : '#475569', fontSize: 11 }}>{s.label}</div>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    height: 1, width: 32, flexShrink: 0, marginBottom: 18,
                    background: step > s.num ? 'linear-gradient(90deg,#3B82F6,#10b981)' : 'var(--border)'
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 'clamp(12px,3vw,20px) clamp(16px,4vw,28px)' }}>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, margin: '0 0 4px 0' }}>
                {en ? 'Personal details' : 'Личные данные'}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 12, margin: '0 0 16px 0' }}>
                {en ? 'Tell us a bit about yourself to build your profile' : 'Расскажите немного о себе для формирования профиля'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
                  <Field label={en ? 'First name *' : 'Имя *'} error={errors.firstName}>
                    <input value={form.firstName} onChange={e => set('firstName', e.target.value)}
                      placeholder={en ? 'Ivan' : 'Иван'} style={inputStyle(errors.firstName)} />
                  </Field>
                  <Field label={en ? 'Last name *' : 'Фамилия *'} error={errors.lastName}>
                    <input value={form.lastName} onChange={e => set('lastName', e.target.value)}
                      placeholder="Drăgoi" style={inputStyle(errors.lastName)} />
                  </Field>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
                  <Field label={en ? 'Age *' : 'Возраст *'} error={errors.age}>
                    <input value={form.age} onChange={e => set('age', e.target.value)}
                      placeholder="27" type="number" min="16" max="65" style={inputStyle(errors.age)} />
                  </Field>
                  <Field label={en ? 'Region *' : 'Регион *'} error={errors.region}>
                    <select value={form.region} onChange={e => set('region', e.target.value)} style={inputStyle(errors.region, true)}>
                      <option value="">{en ? '— Select region —' : '— Выберите регион —'}</option>
                      {(en ? regionsEn : regions).map((r, i) => <option key={i} value={regions[i]}>{r}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label={en ? 'Education level *' : 'Уровень образования *'} error={errors.education}>
                  <select value={form.education} onChange={e => set('education', e.target.value)} style={inputStyle(errors.education, true)}>
                    <option value="">{en ? '— Select —' : '— Выберите —'}</option>
                    {(en ? educationsEn : educations).map((e, i) => <option key={i} value={educations[i]}>{e}</option>)}
                  </select>
                </Field>
                <Field label={en ? 'Phone (optional)' : 'Телефон (необязательно)'} error={errors.phone}>
                  <input value={form.phone} onChange={e => set('phone', e.target.value)}
                    placeholder="+373 XX XXX XXX" style={inputStyle(errors.phone)} />
                </Field>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, margin: '0 0 4px 0' }}>
                {en ? 'Choose your field' : 'Выберите сферу'}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 12, margin: '0 0 12px 0' }}>
                {en ? 'Which direction do you want to develop in?' : 'В каком направлении хотите развиваться?'}
              </p>
              {errors.track && <div style={{ color: '#f87171', fontSize: 12, marginBottom: 8 }}>⚠ {errors.track}</div>}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tracks.map(t => (
                  <button key={t.id} onClick={() => handleTrackSelect(t.id)} style={{
                    padding: '7px 12px', borderRadius: 10, border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 5,
                    background: form.track === t.id ? `${t.color}16` : 'var(--bg-el)',
                    color: form.track === t.id ? t.color : 'var(--text-2)',
                    outline: form.track === t.id ? `1.5px solid ${t.color}55` : '1px solid var(--border)',
                    transition: 'all 0.15s',
                  }}>
                    <span style={{ fontSize: 14 }}>{t.icon}</span>
                    {en ? t.labelEn : t.label}
                    {form.track === t.id && <span style={{ fontSize: 10, marginLeft: 2 }}>✓</span>}
                  </button>
                ))}
              </div>

              {selectedTrack && (
                <div style={{ marginTop: 12, padding: '10px 12px', borderRadius: 10, background: `${selectedTrack.color}09`, border: `1px solid ${selectedTrack.color}22` }}>
                  <div style={{ color: selectedTrack.color, fontSize: 11, fontWeight: 700, marginBottom: 7 }}>
                    {selectedTrack.icon} {en ? selectedTrack.labelEn : selectedTrack.label} — {en ? 'choose specialisation:' : 'уточните специализацию:'}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                    {(en ? selectedTrack.subsEn : selectedTrack.subs).map((sub, idx) => {
                      const subKey = selectedTrack.subs[idx]
                      return (
                        <button key={sub} onClick={() => set('subTrack', form.subTrack === subKey ? '' : subKey)} style={{
                          padding: '6px 10px', borderRadius: 7, border: 'none', cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                          textAlign: 'left',
                          background: form.subTrack === subKey ? `${selectedTrack.color}18` : 'var(--bg-el)',
                          color: form.subTrack === subKey ? selectedTrack.color : 'var(--text-2)',
                          outline: form.subTrack === subKey ? `1px solid ${selectedTrack.color}45` : '1px solid var(--border)',
                          transition: 'all 0.15s',
                        }}>
                          {form.subTrack === subKey ? '✓ ' : ''}{sub}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: 17, margin: '0 0 4px 0' }}>
                {en ? 'Your main goal' : 'Ваша главная цель'}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 12, margin: '0 0 14px 0' }}>
                {en ? 'This helps your mentor build the optimal plan' : 'Это поможет куратору подобрать оптимальный план'}
              </p>
              {errors.goal && <div style={{ color: '#f87171', fontSize: 12, marginBottom: 12 }}>⚠ {errors.goal}</div>}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {goals.map(g => (
                  <button key={g.id} onClick={() => set('goal', g.id)} style={{
                    padding: '14px 18px', borderRadius: 14, border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'Inter, sans-serif',
                    display: 'flex', alignItems: 'center', gap: 14,
                    background: form.goal === g.id ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(16,185,129,0.06))' : 'var(--bg-el)',
                    outline: form.goal === g.id ? '1.5px solid rgba(59,130,246,0.4)' : '1px solid var(--border)',
                    transition: 'all 0.2s'
                  }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{g.icon}</span>
                    <span style={{ color: form.goal === g.id ? 'var(--text)' : 'var(--text-2)', fontWeight: 600, fontSize: 14 }}>{g.label}</span>
                    {form.goal === g.id && (
                      <span style={{ marginLeft: 'auto', color: '#10B981', fontSize: 16, flexShrink: 0 }}>✓</span>
                    )}
                  </button>
                ))}
              </div>

              {form.track && (
                <div style={{
                  marginTop: 20, padding: '14px 18px', borderRadius: 14,
                  background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.15)'
                }}>
                  <div style={{ color: 'var(--text-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                    {en ? 'Your profile' : 'Ваш профиль'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    <Chip label={`${form.firstName} ${form.lastName}`} color="var(--text)" />
                    <Chip label={en ? `${form.age} y.o.` : `${form.age} лет`} color="#64748B" />
                    <Chip label={form.region} color="#64748B" />
                    {selectedTrack && <Chip label={`${selectedTrack.icon} ${en ? selectedTrack.labelEn : selectedTrack.label}`} color={selectedTrack.color} />}
                    {form.subTrack && <Chip label={form.subTrack} color={selectedTrack?.color || '#64748b'} />}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '0 clamp(16px,4vw,28px) clamp(12px,3vw,20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12
        }}>
          {step > 1 ? (
            <button onClick={() => setStep(s => s - 1)} className="btn-outline" style={{
              padding: '12px 24px', borderRadius: 12, fontSize: 14
            }}>← {en ? 'Back' : 'Назад'}</button>
          ) : (
            <div />
          )}
          <button onClick={next} className="btn-primary" style={{
            padding: '13px 32px', borderRadius: 12, fontSize: 15, flex: step === 1 ? 1 : 'unset'
          }}>
            {step === 3 ? (en ? '🚀 Submit application' : '🚀 Подать заявку') : (en ? 'Continue →' : 'Продолжить →')}
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <div style={{ color: 'var(--text-3)', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {children}
      {error && <div style={{ color: '#f87171', fontSize: 11, marginTop: 4 }}>⚠ {error}</div>}
    </div>
  )
}

function Chip({ label, color }) {
  return (
    <span style={{
      padding: '4px 10px', borderRadius: 8, fontSize: 12, fontWeight: 500,
      background: 'var(--bg-el)', color
    }}>{label}</span>
  )
}

function inputStyle(error, isSelect = false) {
  return {
    width: '100%', padding: '10px 14px', borderRadius: 10, fontSize: 14,
    background: 'var(--bg-el)',
    border: error ? '1px solid rgba(248,113,113,0.5)' : '1px solid var(--border)',
    color: 'var(--text)', outline: 'none', fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box',
    ...(isSelect ? { appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' } : {})
  }
}
