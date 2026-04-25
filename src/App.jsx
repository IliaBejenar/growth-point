import { useState } from 'react'
import './index.css'
import { ThemeProvider } from './ThemeContext'
import { LangProvider } from './LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import MechanismSection from './components/MechanismSection'
import ParticipationSection from './components/ParticipationSection'
import PartnersSection from './components/PartnersSection'
import PlatformSection from './components/PlatformSection'
import InvestmentSection from './components/InvestmentSection'
import ForecastSection from './components/ForecastSection'
import ReinvestmentSection from './components/ReinvestmentSection'
import LongTermSection from './components/LongTermSection'
import ConclusionSection from './components/ConclusionSection'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import PartnerModal from './components/PartnerModal'
import PersonalCabinet from './components/PersonalCabinet'
import AIAssistant from './components/AIAssistant'
import TrackQuizSection from './components/TrackQuizSection'

function AppInner() {
  const [showForm, setShowForm] = useState(false)
  const [showPartnerForm, setShowPartnerForm] = useState(false)
  const [user, setUser] = useState(null)

  const handleRegistered = (userData) => {
    setUser(userData)
    setShowForm(false)
  }

  if (user) {
    return <PersonalCabinet user={user} onLogout={() => setUser(null)} />
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar onApply={() => setShowForm(true)} />
      <Hero onApply={() => setShowForm(true)} onPartner={() => setShowPartnerForm(true)} />
      <ProblemSection />
      <MechanismSection />
      <ParticipationSection onApply={() => setShowForm(true)} onPartner={() => setShowPartnerForm(true)} />
      <TrackQuizSection onApply={() => setShowForm(true)} />
      <PartnersSection onApply={() => setShowPartnerForm(true)} />
      <PlatformSection />
      <InvestmentSection />
      <ForecastSection />
      <ReinvestmentSection />
      <LongTermSection />
      <ConclusionSection onApply={() => setShowForm(true)} onPartner={() => setShowPartnerForm(true)} />
      <Footer onApply={() => setShowForm(true)} onPartner={() => setShowPartnerForm(true)} />

      {showForm && (
        <RegistrationModal
          onClose={() => setShowForm(false)}
          onSubmit={handleRegistered}
        />
      )}
      {showPartnerForm && (
        <PartnerModal onClose={() => setShowPartnerForm(false)} />
      )}
      <AIAssistant hidden={showForm || showPartnerForm} />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppInner />
      </LangProvider>
    </ThemeProvider>
  )
}
