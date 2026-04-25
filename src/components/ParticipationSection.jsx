import { useState } from 'react'
import { useLang } from '../LangContext'

const tracks = [
  { label: 'Цифровая экономика', labelEn: 'Digital Economy', icon: '💻', color: '#38bdf8', subs: ['Программирование', 'Data / аналитика', 'Кибербезопасность', 'UX/UI дизайн', 'Digital-маркетинг', 'No-code', 'GameDev'], subsEn: ['Programming', 'Data / Analytics', 'Cybersecurity', 'UX/UI Design', 'Digital Marketing', 'No-code', 'GameDev'] },
  { label: 'Энергетика', labelEn: 'Energy', icon: '⚡', color: '#facc15', subs: ['Солнечная энергетика', 'Электросети', 'Энергоэффективность', 'Обслуживание оборудования'], subsEn: ['Solar energy', 'Power grids', 'Energy efficiency', 'Equipment maintenance'] },
  { label: 'Агросектор', labelEn: 'Agro-sector', icon: '🌾', color: '#4ade80', subs: ['Традиционное с/х', 'AgroTech', 'Переработка продукции', 'Агробизнес'], subsEn: ['Traditional farming', 'AgroTech', 'Food processing', 'Agro-business'] },
  { label: 'Логистика и торговля', labelEn: 'Logistics & Trade', icon: '🚚', color: '#fb923c', subs: ['Логистика', 'Складская деятельность', 'E-commerce', 'Закупки'], subsEn: ['Logistics', 'Warehousing', 'E-commerce', 'Procurement'] },
  { label: 'Строительство', labelEn: 'Construction', icon: '🏗️', color: '#a78bfa', subs: ['Строительство', 'Проектирование', 'Дизайн интерьера', 'Недвижимость'], subsEn: ['Construction', 'Engineering', 'Interior design', 'Real estate'] },
  { label: 'Туризм и сервис', labelEn: 'Tourism & Service', icon: '🧳', color: '#f472b6', subs: ['Гостиницы', 'Рестораны', 'Туроператоры', 'Event-менеджмент'], subsEn: ['Hotels', 'Restaurants', 'Tour operators', 'Event management'] },
  { label: 'Медицина и здоровье', labelEn: 'Medicine & Health', icon: '🏥', color: '#34d399', subs: ['Медсёстры', 'Врачи', 'Фармацевтика', 'Уход за пожилыми'], subsEn: ['Nurses', 'Doctors', 'Pharmaceuticals', 'Elderly care'] },
  { label: 'Образование', labelEn: 'Education', icon: '🎓', color: '#60a5fa', subs: ['Учителя', 'Онлайн-преподаватели', 'Тренеры / курсы'], subsEn: ['Teachers', 'Online tutors', 'Trainers / courses'] },
  { label: 'Производство', labelEn: 'Manufacturing', icon: '🏭', color: '#94a3b8', subs: ['Лёгкая промышленность', 'Пищевая промышленность', 'Сборка', 'Контроль качества'], subsEn: ['Light industry', 'Food industry', 'Assembly', 'Quality control'] },
  { label: 'Финансы и бизнес', labelEn: 'Finance & Business', icon: '💰', color: '#fbbf24', subs: ['Бухгалтерия', 'Банки', 'Финансовый анализ', 'Предпринимательство'], subsEn: ['Accounting', 'Banking', 'Financial analysis', 'Entrepreneurship'] },
  { label: 'Креативная индустрия', labelEn: 'Creative Industry', icon: '🎨', color: '#e879f9', subs: ['Дизайн', 'Фото/видео', 'Контент', 'SMM'], subsEn: ['Design', 'Photo/video', 'Content', 'SMM'] },
  { label: 'Рабочие профессии', labelEn: 'Skilled Trades', icon: '🧑‍🔧', color: '#f87171', subs: ['Электрики', 'Сантехники', 'Механики', 'Водители'], subsEn: ['Electricians', 'Plumbers', 'Mechanics', 'Drivers'] },
  { label: 'Государственный сектор', labelEn: 'Public Sector', icon: '🛡️', color: '#818cf8', subs: ['Администрация', 'Полиция', 'Социальные службы'], subsEn: ['Administration', 'Police', 'Social services'] },
]

export default function ParticipationSection({ onApply, onPartner }) {
  const [form, setForm] = useState({ name: 'Иван Дрэгой', region: 'Кишинёв', track: '' })
  const { lang } = useLang()
  const en = lang === 'en'

  const steps = [
    { num: '01', title: en ? 'Online registration' : 'Онлайн-регистрация', desc: en ? 'Fill out the participant questionnaire on the program platform. Upload documents, confirm identity. Takes no more than 15 minutes.' : 'Заполнение анкеты участника на платформе программы. Загрузка документов, подтверждение личности. Занимает не более 15 минут.', icon: '📝' },
    { num: '02', title: en ? 'Skills diagnostics' : 'Диагностика навыков', desc: en ? 'Automated testing of competencies and professional interests. The platform algorithm builds a personal participant profile.' : 'Автоматизированное тестирование компетенций и профессиональных интересов. Алгоритм платформы формирует персональный профиль участника.', icon: '🔍' },
    { num: '03', title: en ? 'Program assignment' : 'Назначение программы', desc: en ? 'Based on the profile, the system recommends the optimal educational track from 13 directions: digital economy, medicine, energy, agro-sector, manufacturing and others.' : 'На основе профиля система предлагает оптимальный образовательный трек из 13 направлений: цифровая экономика, медицина, энергетика, агросектор, производство и другие.', icon: '🎯' },
    { num: '04', title: en ? 'Training (3–6 months)' : 'Обучение (3–6 месяцев)', desc: en ? 'Accelerated professional retraining at accredited centres or remotely. Scholarship during the training period. A mentor accompanies you throughout the track.' : 'Ускоренная профессиональная переподготовка в аккредитованных центрах или дистанционно. Стипендия на период обучения. Наставник сопровождает весь трек.', icon: '📚' },
    { num: '05', title: en ? 'Employment / Business' : 'Трудоустройство / Бизнес', desc: en ? '60–70% of graduates are placed with partner employers. 30–40% choose the entrepreneurial track: sole proprietorship registration, subsidised lending, mentoring.' : '60–70% выпускников направляются к партнёрам-работодателям. 30–40% выбирают предпринимательский трек: регистрация ИП, льготное кредитование, менторство.', icon: '💼' },
    { num: '06', title: en ? 'Support 6–12 months' : 'Поддержка 6–12 месяцев', desc: en ? 'After employment or business launch, participants receive career support, access to grants and consultations throughout the first year.' : 'После трудоустройства или запуска бизнеса участник получает карьерное сопровождение, доступ к грантам и консультациям на протяжении первого года.', icon: '🤝' },
  ]

  return (
    <section className="section" id="participation" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="tag tag-green" style={{ marginBottom: 16, display: 'inline-block' }}>
            {en ? 'Section III — Program Participation' : 'Раздел III — Участие в программе'}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            {en ? 'Become a Program Participant' : 'Стать участником программы'}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
            {en
              ? 'The "Growth Point" program is open to every able-bodied citizen registered as unemployed. The entire journey is supported by a digital platform and a personal mentor.'
              : 'Программа «Точка Роста» открыта для каждого трудоспособного гражданина, зарегистрированного как безработный. Весь путь сопровождается цифровой платформой и персональным куратором.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, alignItems: 'start' }}>
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ color: 'var(--text-2)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>
              {en ? "Participant's path · Dashboard" : 'Путь участника · Личный кабинет'}
            </div>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, paddingBottom: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16
                  }}>{step.icon}</div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 6 }} />
                  )}
                </div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ color: '#3B82F6', fontSize: 11, fontWeight: 800 }}>{step.num}</span>
                    <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: 14 }}>{step.title}</span>
                  </div>
                  <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form + Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Demo form */}
            <div className="card" style={{ padding: 28 }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                  {en ? 'Take the Diagnostic' : 'Пройти диагностику'}
                </div>
                <div style={{ color: 'var(--text-2)', fontSize: 13 }}>
                  {en ? 'Digital participant questionnaire' : 'Цифровая анкета участника'}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: en ? 'Full name' : 'Имя и фамилия', key: 'name', placeholder: 'Ivan Drăgoi' },
                  { label: en ? 'Region of residence' : 'Регион проживания', key: 'region', placeholder: en ? 'Chisinau' : 'Кишинёв' },
                ].map(f => (
                  <div key={f.key}>
                    <div style={{ color: 'var(--text-3)', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>{f.label}</div>
                    <input
                      value={form[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: 10,
                        background: 'var(--bg-el)', border: '1px solid var(--border)',
                        color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                ))}
                <div>
                  <div style={{ color: 'var(--text-3)', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
                    {en ? 'Preferred track' : 'Предпочтительный трек'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {tracks.map(t => {
                      const label = en ? t.labelEn : t.label
                      return (
                        <button key={t.label} onClick={() => setForm(p => ({ ...p, track: t.label }))} style={{
                          padding: '6px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
                          background: form.track === t.label ? `${t.color}18` : 'var(--bg-el)',
                          color: form.track === t.label ? t.color : '#64748b',
                          outline: form.track === t.label ? `1px solid ${t.color}40` : '1px solid var(--border)',
                          transition: 'all 0.2s'
                        }}>
                          {t.icon} {label}
                        </button>
                      )
                    })}
                  </div>
                  {form.track && (() => {
                    const sel = tracks.find(t => t.label === form.track)
                    return sel ? (
                      <div style={{ marginTop: 10, padding: '10px 12px', borderRadius: 10, background: `${sel.color}0d`, border: `1px solid ${sel.color}25` }}>
                        <div style={{ color: sel.color, fontSize: 11, fontWeight: 700, marginBottom: 5 }}>
                          {en ? 'Specialisations:' : 'Специализации:'}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {(en ? sel.subsEn : sel.subs).map(s => (
                            <span key={s} style={{ fontSize: 11, color: 'var(--text-2)', background: 'var(--bg-el)', padding: '2px 8px', borderRadius: 6, border: '1px solid var(--border)' }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { value: '65%', label: en ? 'Placed with employers' : 'Трудоустройство к партнёрам', color: '#38bdf8' },
                { value: '35%', label: en ? 'Start own business' : 'Открытие собственного бизнеса', color: '#34d399' },
              ].map((s, i) => (
                <div key={i} className="card-highlight" style={{ padding: '18px 20px', textAlign: 'center' }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 28 }}>{s.value}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 12, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(16,185,129,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>⏱</div>
                <div>
                  <div style={{ color: '#10B981', fontWeight: 800, fontSize: 20 }}>{en ? '6 months' : '6 месяцев'}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 12 }}>
                    {en ? 'Average time from registration to employment' : 'Средний срок от регистрации до трудоустройства'}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div style={{
              padding: '28px 24px', borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.07), rgba(167,139,250,0.07))',
              border: '1px solid rgba(167,139,250,0.2)',
            }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: 'var(--text)', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>
                  {en ? 'Join the program' : 'Присоединяйтесь к программе'}
                </div>
                <div style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.55 }}>
                  {en ? 'Participate as a citizen or support as a business partner' : 'Участвуйте как гражданин или поддержите как бизнес-партнёр'}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button type="button" onClick={onApply} style={{
                  width: '100%', padding: '14px 20px', borderRadius: 14, border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
                  background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                  color: '#fff', boxShadow: '0 4px 14px rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 20 }}>🚀</span>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{en ? 'Apply' : 'Подать заявку'}</div>
                      <div style={{ fontWeight: 400, fontSize: 11, opacity: 0.8 }}>{en ? 'Become a program participant' : 'Стать участником программы'}</div>
                    </div>
                  </div>
                  <span style={{ opacity: 0.7, fontSize: 16 }}>→</span>
                </button>
                <button type="button" onClick={onPartner} style={{
                  width: '100%', padding: '14px 20px', borderRadius: 14, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
                  background: 'rgba(167,139,250,0.1)',
                  border: '1.5px solid rgba(167,139,250,0.35)',
                  color: '#a78bfa',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.1)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 20 }}>🤝</span>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{en ? 'Become a partner' : 'Стать партнёром'}</div>
                      <div style={{ fontWeight: 400, fontSize: 11, opacity: 0.7 }}>{en ? 'Employer, investor, NGO' : 'Работодатель, инвестор, НКО'}</div>
                    </div>
                  </div>
                  <span style={{ opacity: 0.5, fontSize: 16 }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
