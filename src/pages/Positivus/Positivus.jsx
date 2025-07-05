import Hero from '../../components/Hero/Hero'
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import DropDownList from '../../components/DropDownList/DropDownList'
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
import ProposalSection from '../../components/ProposalSection/ProposalSection'
import proposalimage from '../../assets/proposalimage.png'
import { caseStudiesData } from '../../assets/caseStudiesData'
import stepsOurProcess from '../../assets/stepsOurProcess'
import teamData from '../../assets/teamData'
import testimonialsBase from '../../assets/testimonialsBase'
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
        <ProposalSection
            title={'Let’s make things happen'}
            text={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
            link={'Get your free proposal'}
            img={proposalimage}
            alt={'Proposal Image'}
            bg={'grey'}
        />
        <CaseStudies
            headertitle={'Case Studies'}
            headertext={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}
            listData={caseStudiesData}
        />
        <DropDownList
            headertitle={'Our Working Process '}
            headertext={'Step-by-Step Guide to Achieving Your Business Goals'}
            steps={stepsOurProcess}
        />
        <Team
            headertitle={'Team'}
            headertext={<>Meet the skilled and experienced team behind our <br/>successful digital marketing strategies</>}
            teamData={teamData}
        />
        <Testimonials
            headertitle={'Testimonials'}
            headertext={'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'}
            testimonialsBase={testimonialsBase}
        />
        <ContactForm
            headertitle={'Contact Us'}
            headertext={'Connect with Us: Let’s Discuss Your Digital Marketing Needs'}
        />
    </>);
  };
  
  export default Positivus;