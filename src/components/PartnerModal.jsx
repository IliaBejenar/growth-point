import { useState } from 'react'
import { useLang } from '../LangContext'

const spheres = [
  { label: 'Цифровая экономика',      labelEn: 'Digital Economy',         icon: '💻', color: '#38bdf8', subs: ['Программирование', 'Data / аналитика', 'Кибербезопасность', 'UX/UI дизайн', 'Digital-маркетинг', 'No-code / автоматизация', 'GameDev'], subsEn: ['Programming', 'Data / Analytics', 'Cybersecurity', 'UX/UI Design', 'Digital Marketing', 'No-code / Automation', 'GameDev'] },
  { label: 'Энергетика',              labelEn: 'Energy',                  icon: '⚡', color: '#facc15', subs: ['Солнечная энергетика', 'Электросети', 'Энергоэффективность', 'Обслуживание оборудования'], subsEn: ['Solar energy', 'Power grids', 'Energy efficiency', 'Equipment maintenance'] },
  { label: 'Агросектор',              labelEn: 'Agro-sector',             icon: '🌾', color: '#4ade80', subs: ['Традиционное с/х', 'AgroTech', 'Переработка продукции', 'Агробизнес'], subsEn: ['Traditional farming', 'AgroTech', 'Food processing', 'Agro-business'] },
  { label: 'Логистика и торговля',    labelEn: 'Logistics & Trade',       icon: '🚚', color: '#fb923c', subs: ['Логистика', 'Складская деятельность', 'E-commerce', 'Закупки (procurement)'], subsEn: ['Logistics', 'Warehousing', 'E-commerce', 'Procurement'] },
  { label: 'Строительство и недвижимость', labelEn: 'Construction & Real Estate', icon: '🏗️', color: '#a78bfa', subs: ['Строительство', 'Проектирование (инженеры)', 'Дизайн интерьера', 'Управление недвижимостью'], subsEn: ['Construction', 'Engineering', 'Interior design', 'Property management'] },
  { label: 'Туризм и сервис',         labelEn: 'Tourism & Service',       icon: '🧳', color: '#f472b6', subs: ['Гостиницы', 'Рестораны', 'Туроператоры', 'Event-менеджмент'], subsEn: ['Hotels', 'Restaurants', 'Tour operators', 'Event management'] },
  { label: 'Медицина и здоровье',     labelEn: 'Medicine & Health',       icon: '🏥', color: '#34d399', subs: ['Медсёстры', 'Врачи', 'Фармацевтика', 'Уход за пожилыми'], subsEn: ['Nurses', 'Doctors', 'Pharmaceuticals', 'Elderly care'] },
  { label: 'Образование',             labelEn: 'Education',               icon: '🎓', color: '#60a5fa', subs: ['Учителя', 'Онлайн-преподаватели', 'Тренеры / курсы'], subsEn: ['Teachers', 'Online tutors', 'Trainers / courses'] },
  { label: 'Производство',            labelEn: 'Manufacturing',           icon: '🏭', color: '#94a3b8', subs: ['Лёгкая промышленность', 'Пищевая промышленность', 'Сборка и производство', 'Контроль качества'], subsEn: ['Light industry', 'Food industry', 'Assembly', 'Quality control'] },
  { label: 'Финансы и бизнес',        labelEn: 'Finance & Business',      icon: '💰', color: '#fbbf24', subs: ['Бухгалтерия', 'Банки', 'Финансовый анализ', 'Предпринимательство'], subsEn: ['Accounting', 'Banking', 'Financial analysis', 'Entrepreneurship'] },
  { label: 'Креативная индустрия',    labelEn: 'Creative Industry',       icon: '🎨', color: '#e879f9', subs: ['Дизайн', 'Фото/видео', 'Контент', 'SMM'], subsEn: ['Design', 'Photo/video', 'Content', 'SMM'] },
  { label: 'Рабочие профессии',       labelEn: 'Skilled Trades',          icon: '🧑‍🔧', color: '#f87171', subs: ['Электрики', 'Сантехники', 'Механики', 'Водители'], subsEn: ['Electricians', 'Plumbers', 'Mechanics', 'Drivers'] },
  { label: 'Государственный сектор',  labelEn: 'Public Sector',           icon: '🛡️', color: '#818cf8', subs: ['Администрация', 'Полиция', 'Социальные службы'], subsEn: ['Administration', 'Police', 'Social services'] },
]

function inputStyle(error) {
  return {
    width: '100%', padding: '11px 14px', borderRadius: 11, boxSizing: 'border-box',
    border: `1.5px solid ${error ? '#f87171' : 'var(--border)'}`,
    background: 'var(--bg-el)', color: 'var(--text)', fontSize: 14,
    outline: 'none', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s',
  }
}

export default function PartnerModal({ onClose }) {
  const { lang } = useLang()
  const en = lang === 'en'

  const partnerTypes = [
    { id: 'employer', icon: '🏢', label: en ? 'Employer' : 'Работодатель',             desc: en ? 'I hire program graduates' : 'Нанимаю выпускников программы' },
    { id: 'investor', icon: '💰', label: en ? 'Investor' : 'Инвестор',                 desc: en ? 'I fund the program or startups' : 'Финансирую программу или стартапы' },
    { id: 'edu',      icon: '🎓', label: en ? 'Educational institution' : 'Учебное заведение', desc: en ? 'I provide educational resources' : 'Предоставляю образовательные ресурсы' },
    { id: 'state',    icon: '🏛️', label: en ? 'Government body' : 'Госструктура',       desc: en ? 'Government or municipal authority' : 'Государственный или муниципальный орган' },
    { id: 'ngo',      icon: '🤝', label: en ? 'NGO / Foundation' : 'НКО / Фонд',        desc: en ? 'Non-profit organisation or donor' : 'Некоммерческая организация или донор' },
    { id: 'media',    icon: '📣', label: en ? 'Media / PR' : 'Медиа / PR',              desc: en ? 'Promotion and coverage of the program' : 'Продвижение и освещение программы' },
  ]

  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    type: '', orgName: '', contactName: '', position: '',
    email: '', phone: '', sphere: '', subSphere: '', employees: '', region: '', message: '',
  })
  const [errors, setErrors] = useState({})

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const selectedSphere = spheres.find(s => s.label === form.sphere)
  const selectedType = partnerTypes.find(t => t.id === form.type)

  const validateStep = () => {
    const e = {}
    if (step === 1 && !form.type) e.type = en ? 'Select partnership type' : 'Выберите тип партнёрства'
    if (step === 2) {
      if (!form.orgName.trim()) e.orgName = en ? 'Enter organisation name' : 'Введите название организации'
      if (!form.contactName.trim()) e.contactName = en ? 'Enter contact name' : 'Введите имя контактного лица'
      if (!form.email.trim() || !form.email.includes('@')) e.email = en ? 'Enter valid email' : 'Укажите корректный email'
      if (!form.sphere) e.sphere = en ? 'Select field of activity' : 'Выберите сферу деятельности'
    }
    if (step === 3 && !form.message.trim()) e.message = en ? 'Please write a few words about partnership goals' : 'Напишите несколько слов о целях партнёрства'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => { if (validateStep()) setStep(s => s + 1) }
  const back = () => setStep(s => s - 1)
  const submit = () => { if (validateStep()) setDone(true) }

  const employeeSizes = ['1–10', '11–50', '51–200', '201–500', '500+']

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }} onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-card)', borderRadius: 22, width: '100%', maxWidth: 560,
        maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
        border: '1px solid var(--border)',
      }}>

        {done ? (
          <div style={{ padding: '52px 40px', textAlign: 'center' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 24px',
              background: 'rgba(16,185,129,0.12)', border: '2px solid rgba(52,211,153,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
            }}>✓</div>
            <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 24, margin: '0 0 12px 0' }}>
              {en ? 'Application received!' : 'Заявка принята!'}
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7, margin: '0 0 8px 0' }}>
              {en ? 'Thank you, ' : 'Спасибо, '}<strong style={{ color: 'var(--text)' }}>{form.contactName}</strong>!
            </p>
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, margin: '0 0 28px 0' }}>
              {en
                ? <>Our team will contact you within <strong style={{ color: 'var(--text)' }}>2 business days</strong> at <strong style={{ color: '#3B82F6' }}>{form.email}</strong>.</>
                : <>Наша команда свяжется с вами в течение <strong style={{ color: 'var(--text)' }}>2 рабочих дней</strong> по адресу <strong style={{ color: '#3B82F6' }}>{form.email}</strong>.</>}
            </p>
            <div style={{
              padding: '16px 20px', borderRadius: 14, marginBottom: 28,
              background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(56,189,248,0.15)', textAlign: 'left',
            }}>
              <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
                {en ? 'Your application' : 'Ваша заявка'}
              </div>
              {[
                { label: en ? 'Partnership type' : 'Тип партнёрства', value: `${selectedType?.icon} ${selectedType?.label}` },
                { label: en ? 'Organisation' : 'Организация', value: form.orgName },
                { label: en ? 'Contact' : 'Контакт', value: form.contactName },
                { label: en ? 'Field' : 'Сфера', value: `${selectedSphere?.icon || ''} ${en ? (selectedSphere?.labelEn || form.sphere) : form.sphere}${form.subSphere ? ' · ' + form.subSphere : ''}` },
                { label: en ? 'Region' : 'Регион', value: form.region || (en ? 'Not specified' : 'Не указан') },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '6px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--text-2)', fontSize: 13 }}>{r.label}</span>
                  <span style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{r.value}</span>
                </div>
              ))}
            </div>
            <button onClick={onClose} style={{
              width: '100%', padding: '14px', borderRadius: 12, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #3B82F6, #10b981)', color: '#fff',
              fontWeight: 700, fontSize: 15, fontFamily: 'Inter, sans-serif',
            }}>{en ? 'Close' : 'Закрыть'}</button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ padding: '24px 28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: 'linear-gradient(135deg, #a78bfa, #3B82F6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, color: '#fff', fontWeight: 900,
                  }}>П</div>
                  <span style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600 }}>
                    {en ? 'Partnership application' : 'Партнёрская заявка'}
                  </span>
                </div>
                <h2 style={{ color: 'var(--text)', fontWeight: 800, fontSize: 20, margin: 0 }}>
                  {step === 1
                    ? (en ? 'Partnership type' : 'Тип партнёрства')
                    : step === 2
                    ? (en ? 'About your organisation' : 'О вашей организации')
                    : (en ? 'Goals and wishes' : 'Цели и пожелания')}
                </h2>
              </div>
              <button onClick={onClose} style={{
                background: 'var(--bg-el)', border: '1px solid var(--border)', borderRadius: 8,
                width: 32, height: 32, cursor: 'pointer', color: 'var(--text-2)', fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>✕</button>
            </div>

            {/* Progress */}
            <div style={{ padding: '16px 28px 0', display: 'flex', gap: 6 }}>
              {[1,2,3].map(s => (
                <div key={s} style={{
                  flex: 1, height: 4, borderRadius: 99,
                  background: s <= step ? 'linear-gradient(90deg,#a78bfa,#3B82F6)' : 'var(--border)',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>
            <div style={{ padding: '6px 28px 0', color: 'var(--text-3)', fontSize: 12 }}>
              {en ? `Step ${step} of 3` : `Шаг ${step} из 3`}
            </div>

            <div style={{ padding: '20px 28px 28px' }}>

              {/* Step 1 — type */}
              {step === 1 && (
                <div>
                  <p style={{ color: 'var(--text-2)', fontSize: 13, margin: '0 0 16px 0' }}>
                    {en
                      ? 'How do you want to participate in the "Growth Point" program?'
                      : 'Как вы хотите участвовать в программе «Точка Роста»?'}
                  </p>
                  {errors.type && <div style={{ color: '#f87171', fontSize: 12, marginBottom: 12 }}>⚠ {errors.type}</div>}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))', gap: 10 }}>
                    {partnerTypes.map(t => (
                      <button key={t.id} onClick={() => set('type', t.id)} style={{
                        padding: '14px 12px', borderRadius: 14, border: 'none', cursor: 'pointer',
                        textAlign: 'left', fontFamily: 'Inter, sans-serif',
                        background: form.type === t.id ? 'rgba(167,139,250,0.12)' : 'var(--bg-el)',
                        outline: form.type === t.id ? '1.5px solid rgba(167,139,250,0.5)' : '1px solid var(--border)',
                        transition: 'all 0.2s',
                      }}>
                        <div style={{ fontSize: 22, marginBottom: 7 }}>{t.icon}</div>
                        <div style={{ color: form.type === t.id ? '#a78bfa' : 'var(--text)', fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{t.label}</div>
                        <div style={{ color: 'var(--text-2)', fontSize: 11, lineHeight: 1.4 }}>{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — org info + sphere */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                        {en ? 'Organisation name *' : 'Название организации *'}
                      </label>
                      <input value={form.orgName} onChange={e => set('orgName', e.target.value)} placeholder={en ? 'Ltd "Example"' : 'ООО «Пример»'} style={inputStyle(errors.orgName)} />
                      {errors.orgName && <div style={{ color: '#f87171', fontSize: 11, marginTop: 4 }}>{errors.orgName}</div>}
                    </div>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                        {en ? 'Contact person *' : 'Контактное лицо *'}
                      </label>
                      <input value={form.contactName} onChange={e => set('contactName', e.target.value)} placeholder={en ? 'First Last' : 'Имя Фамилия'} style={inputStyle(errors.contactName)} />
                      {errors.contactName && <div style={{ color: '#f87171', fontSize: 11, marginTop: 4 }}>{errors.contactName}</div>}
                    </div>
                  </div>
                  <div>
                    <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                      {en ? 'Position' : 'Должность'}
                    </label>
                    <input value={form.position} onChange={e => set('position', e.target.value)} placeholder={en ? 'Director, HR manager…' : 'Директор, HR-менеджер…'} style={inputStyle(false)} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>Email *</label>
                      <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="info@company.md" style={inputStyle(errors.email)} />
                      {errors.email && <div style={{ color: '#f87171', fontSize: 11, marginTop: 4 }}>{errors.email}</div>}
                    </div>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                        {en ? 'Phone' : 'Телефон'}
                      </label>
                      <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+373 XX XXX XXX" style={inputStyle(false)} />
                    </div>
                  </div>

                  {/* Sphere selection */}
                  <div>
                    <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 8 }}>
                      {en ? 'Field of activity *' : 'Сфера деятельности *'}
                    </label>
                    {errors.sphere && <div style={{ color: '#f87171', fontSize: 11, marginBottom: 8 }}>⚠ {errors.sphere}</div>}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {spheres.map(s => (
                        <button key={s.label} onClick={() => { set('sphere', s.label); set('subSphere', '') }} style={{
                          padding: '6px 11px', borderRadius: 8, border: 'none', cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
                          background: form.sphere === s.label ? `${s.color}18` : 'var(--bg-el)',
                          color: form.sphere === s.label ? s.color : '#64748b',
                          outline: form.sphere === s.label ? `1px solid ${s.color}45` : '1px solid var(--border)',
                          transition: 'all 0.15s',
                        }}>
                          {s.icon} {en ? s.labelEn : s.label}
                        </button>
                      ))}
                    </div>

                    {selectedSphere && (
                      <div style={{ marginTop: 12, padding: '12px 14px', borderRadius: 12, background: `${selectedSphere.color}09`, border: `1px solid ${selectedSphere.color}25` }}>
                        <div style={{ color: selectedSphere.color, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>
                          {en ? 'Specify specialisation:' : 'Уточните специализацию:'}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {(en ? selectedSphere.subsEn : selectedSphere.subs).map((sub, idx) => {
                            const subKey = selectedSphere.subs[idx]
                            return (
                              <button key={sub} onClick={() => set('subSphere', form.subSphere === subKey ? '' : subKey)} style={{
                                padding: '5px 11px', borderRadius: 7, border: 'none', cursor: 'pointer',
                                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                                background: form.subSphere === subKey ? `${selectedSphere.color}20` : 'var(--bg-el)',
                                color: form.subSphere === subKey ? selectedSphere.color : 'var(--text-2)',
                                outline: form.subSphere === subKey ? `1px solid ${selectedSphere.color}40` : '1px solid var(--border)',
                                transition: 'all 0.15s',
                              }}>
                                {form.subSphere === subKey ? '✓ ' : ''}{sub}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                        {en ? 'Number of employees' : 'Кол-во сотрудников'}
                      </label>
                      <select value={form.employees} onChange={e => set('employees', e.target.value)} style={inputStyle(false)}>
                        <option value="">{en ? 'Not specified' : 'Не указано'}</option>
                        {employeeSizes.map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                        {en ? 'Region / City' : 'Регион / Город'}
                      </label>
                      <input value={form.region} onChange={e => set('region', e.target.value)} placeholder={en ? 'Chisinau, Bălți…' : 'Кишинёв, Бельцы…'} style={inputStyle(false)} />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — goals */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{
                    padding: '14px 16px', borderRadius: 12,
                    background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)',
                    display: 'flex', gap: 10, alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 20 }}>{selectedType?.icon}</span>
                    <div>
                      <div style={{ color: '#a78bfa', fontWeight: 700, fontSize: 13 }}>{selectedType?.label}</div>
                      <div style={{ color: 'var(--text-2)', fontSize: 12 }}>
                        {form.orgName} · {selectedSphere?.icon} {en ? (selectedSphere?.labelEn || form.sphere) : form.sphere}{form.subSphere ? ` · ${form.subSphere}` : ''}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                      {en ? 'Tell us about your partnership goals *' : 'Расскажите о целях партнёрства *'}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      placeholder={
                        selectedType?.id === 'employer'
                          ? (en ? 'How many specialists you plan to hire, which profiles you need, in which region…' : 'Сколько специалистов планируете нанять, какие профили нужны, в каком регионе…')
                          : selectedType?.id === 'investor'
                          ? (en ? 'Investment direction, scale of participation, expectations…' : 'Направление инвестиций, объём участия, ожидания…')
                          : (en ? 'Describe how you want to participate in the "Growth Point" program…' : 'Опишите как вы хотите участвовать в программе «Точка Роста»…')
                      }
                      rows={5}
                      style={{ ...inputStyle(errors.message), resize: 'vertical', lineHeight: 1.6 }}
                    />
                    {errors.message && <div style={{ color: '#f87171', fontSize: 11, marginTop: 4 }}>{errors.message}</div>}
                  </div>
                  <div style={{ color: 'var(--text-3)', fontSize: 12, lineHeight: 1.6 }}>
                    {en
                      ? 'By clicking "Submit application" you consent to the processing of contact data within the "Growth Point" program.'
                      : 'Нажимая «Отправить заявку», вы соглашаетесь на обработку контактных данных в рамках программы «Точка Роста».'}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                {step > 1 && (
                  <button onClick={back} style={{
                    padding: '13px 20px', borderRadius: 12, cursor: 'pointer',
                    background: 'var(--bg-el)', border: '1px solid var(--border)',
                    color: 'var(--text-2)', fontWeight: 600, fontSize: 14, fontFamily: 'Inter, sans-serif',
                  }}>← {en ? 'Back' : 'Назад'}</button>
                )}
                <button onClick={step === 3 ? submit : next} style={{
                  flex: 1, padding: '13px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #a78bfa, #3B82F6)',
                  color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 16px rgba(167,139,250,0.35)',
                }}>
                  {step === 3 ? (en ? '🤝 Submit application' : '🤝 Отправить заявку') : (en ? 'Continue →' : 'Продолжить →')}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
