import { useState } from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services/>
    </>
  )
}

export default App
