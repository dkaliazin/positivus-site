import InfoSection from "../../components/InfoSection/InfoSection";
import infoImg from '../../assets/hero-use-cases.png'
import FeaturedSuccess from "../../components/FeaturedSuccess/FeaturedSuccess";
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
        smallheader={'Scaling Success for a Leading E-Commerce Brand'}
        text={'Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.'}
        linktext={'Read'}
                
      />
    </>
  );
  };
  
  export default UseCases;