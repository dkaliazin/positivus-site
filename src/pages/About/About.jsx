import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services';
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import OurWorkingProcess from '../../components/OurWorkingProcess/OurWorkingProcess'
import Team from '../../components/Team/Team'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactForm from '../../components/ContactForm/ContactForm';
import InfoSection from '../../components/InfoSection/InfoSection';
import heroAbout from '../../assets/hero-about-us.PNG'
import OurImpact from '../../components/OurImpact/OurImpact';
import OurJourney from '../../components/OurJourney/OurJourney';
import CoreValues from '../../components/CoreValues/CoreValues';
import coreValuesList from '../../assets/coreValuesList';
import Quote from '../../components/Quote/Quote';
import quoteImg from '../../assets/quote-img.png';
import AwardsRecognition from '../../components/AwardsRecognition/AwardsRecognition';
import awardsRecognitionList from '../../assets/awardsRecognitionList';
const About = () => {
    return (
        <>
            <InfoSection
                imgSrc={heroAbout}
                alt={"About us image"}
                title={"Together for Success"}
                text={"At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."}
            />
            <OurImpact />
            <OurJourney />
            <CoreValues
                coreValuesList={coreValuesList}
                headertitle={"Core Values"}
                headertext={
                    <>
                      At the heart of everything we do<br />
                      are our core values:
                    </>
                  }
            />
            <Quote
                img={quoteImg}
                alt={"Quote Image"}
                quote={ "“At Positivus, we believe that success is built on innovation, collaboration, and a relentless focus on delivering results.”"}
                author={"— John Smith, Founder of Positivus"}
            />
            <AwardsRecognition
                headertitle={"Awards & Recognition"}
                headertext={<>At Positivus, our commitment to excellence has been recognized<br/>
                 by industry leaders. Here are some of our proudest achievements:</>}
                awardsRecognitionList={awardsRecognitionList}
            />
        </>
    )
    ;
  };
  
  export default About;