import React from 'react'
import './styles/index.scss'
import { HeaderSection } from './components/HeaderSection/HeaderSection'
import { MainSection } from './components/MainSection/MainSection'
import { FooterSection } from './components/FooterSection/FooterSection.jsx'

function App() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  )
}

export default App
