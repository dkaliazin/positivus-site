import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services';
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import OurWorkingProcess from '../../components/OurWorkingProcess/OurWorkingProcess'
import Team from '../../components/Team/Team'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm';
import InfoSection from '../../components/InfoSection/InfoSection';
import heroAbout from '../../assets/hero-about-us.PNG'
const About = () => {
    return (
        <>
            <InfoSection
                imgSrc={heroAbout}
                alt={"About us image"}
                title={"Together for Success"}
                text={"At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."}
            />
        </>
    )
    ;
  };
  
  export default About;