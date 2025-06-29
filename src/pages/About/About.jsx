import Hero from '../../components/Hero/Hero'
import Services from '../../components/ServicesSection/ServicesSection';
import CaseStudies from '../../components/CaseStudies/CaseStudies'
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
import JoinOurTeam from '../../components/JoinOurTeam/JoinOurTeam';
import joinOurTeamImg from '../../assets/join-our-team-img.png';
import impactStats from '../../assets/impactStats';
import impactStatsLast from '../../assets/impactStatsLast';
import journeyList from '../../assets/journeyList';
const About = () => {
    return (
        <>
            <InfoSection
                imgSrc={heroAbout}
                alt={"About us image"}
                title={"Together for Success"}
                text={"At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."}
            />
            <OurImpact
                impactStats={impactStats}
                impactStatsLast={impactStatsLast}
                headertitle={"Our Impact in Numbers"}
                headertext={<>A snapshot of the milestones and achievements<br />
                    that drive our success</>}
            />
            <OurJourney
                headertitle={"Our Journey"}
                headertext={<>
                From humble beginnings to industry leaders, discover how Positivus has <br />
                                    evolved to drive success for businesses worldwide.
                </>}
                journeyList={journeyList}
            />
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
            <JoinOurTeam
                img={joinOurTeamImg}
                alt={"Join our team image"}
                title={"Join Our Team"}
                text={<>At Positivus, we thrive on innovation and collaboration. We’re always<br />
                looking for passionate individuals to join our team and help<br />
                businesses grow. Ready to make an impact?</>}
                btn={"Explore Careers"}
            />
        </>
    )
    ;
  };
  
  export default About;