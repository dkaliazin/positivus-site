import { useState } from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import CaseStudies from '../Case Studies/Case studies';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CaseStudies/>
    </>
  )
}

export default App
