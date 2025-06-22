import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services';
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import OurWorkingProcess from '../../components/OurWorkingProcess/OurWorkingProcess'
import Team from '../../components/Team/Team'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm';
const About = () => {
    return (
        <>
            <Hero />
            <Services/>
            <CaseStudies />
            <OurWorkingProcess />
            <Team />
            <Testimonials />
            <ContactForm/>
        </>
    )
    ;
  };
  
  export default About;