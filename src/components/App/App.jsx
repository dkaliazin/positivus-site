import { useState } from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import CaseStudies from '../CaseStudies/CaseStudies';
import OurWorkingProcess from '../OurWorkingProcess/OurWorkingProcess';
import Team from '../Team/Team'
import Testimonials from '../Testimonials/Testimonials';
import ContactForm from '../ContactForm/ContactForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <ContactForm/>
    </>
  )
}

export default App
