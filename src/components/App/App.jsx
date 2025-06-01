import { useState } from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
    </>
  )
}

export default App
