import Hero from '../../components/Hero/Hero'
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import OurWorkingProcess from '../../components/OurWorkingProcess/OurWorkingProcess'
import Team from '../../components/Team/Team'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm';
import heroimg from '../../assets/heroimg.png';
import heroAmazon from '../../assets/heroAmazon.svg';
import heroDribbble from '../../assets/heroDribbble.svg';
import heroHubspot from '../../assets/heroHubspot.svg';
import heroNetflix from '../../assets/heroNetflix.svg';
import heroNotion from '../../assets/heroNotion.svg';
import heroZoom from '../../assets/heroZoom.svg';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import servicesData from '../../assets/servicesDataHome';
const Positivus = () => {
    return (<>
        <Hero
            headertitle={'Navigating the digital landscape for success'}
            headertext={'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.'}
            btn={'Book a consultation'}
            heroimg={heroimg}
            heroalt={"Hero Image"}
            iconAmazon={heroAmazon}
            altAmazon={"Icon Amazon"}
            iconDribbble={heroDribbble}
            altDribble={"Icon Dribbble"}
            iconHubspot={heroHubspot}
            altHubspot={"Icon Hubspot"}
            iconNetflix={heroNetflix}
            altNetflix={"Icon Netflix"}
            iconNotion={heroNotion}
            altNotion={"Icon Notion"}
            iconZoom={heroZoom}
            altZoom={"Icon Zoom"}

        />
        <ServicesSection
            headertitle={'Services'}
            headertext={'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'}
            servicesData={servicesData}
        />
        <CaseStudies />
        <OurWorkingProcess />
        <Team />
        <Testimonials />
        <ContactForm />
    </>);
  };
  
  export default Positivus;