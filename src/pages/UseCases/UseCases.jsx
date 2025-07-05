import InfoSection from "../../components/InfoSection/InfoSection";
import infoImg from '../../assets/hero-use-cases.png'
import FeaturedSuccess from "../../components/FeaturedSuccess/FeaturedSuccess";
import { performanceStats } from "../../assets/featuredData";
import WhiteGridList from "../../components/WhiteGridList/WhiteGridList";
import { allSuccessData } from "../../assets/allSuccessData";
import Testimonials from "../../components/Testimonials/Testimonials";
import testimonialsBase from '../../assets/testimonialsBase';
import ProposalSection from "../../components/ProposalSection/ProposalSection";
import proposalimg from '../../assets/proposalimage.png'
const UseCases = () => {
  return (
    <>
      <InfoSection
      imgSrc={infoImg}
      alt={'Hero image'}
      title={'Proven Success Stories'}
      text={'See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together.'}
      />
      <FeaturedSuccess
        header={'Featured Success Story'}
        smallheader={<>Scaling Success for a<br/> Leading E-Commerce Brand</>}
        text={'Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.'}
        linktext={'Read'}
        featuredData={performanceStats}
      />
      <WhiteGridList
        headertitle={'All Success Stories'}
        headertext={<>Explore Real-Life Examples of Our Proven Digital Marketing<br/> Success through Our Case Studies</>}
        whiteGridData={allSuccessData}
      />
      <Testimonials
        headertitle={'Testimonials'}
        headertext={'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'}
        testimonialsBase={testimonialsBase}
      />
      <ProposalSection
        title={'Let’s Create Your Next Success Story'}
        text={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
        link={'Get your free proposal'}
        img={proposalimg}
        alt={'Proposal image'}
        bg={'green'}
      />
    </>
  );
  };
  
  export default UseCases;