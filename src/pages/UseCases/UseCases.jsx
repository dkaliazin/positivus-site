import InfoSection from "../../components/InfoSection/InfoSection";
import infoImg from '../../assets/hero-use-cases.png'
const UseCases = () => {
  return (
    <InfoSection
      imgSrc={infoImg}
      alt={'Hero image'}
      title={'Proven Success Stories'}
      text={'See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together.'}
    />
  );
  };
  
  export default UseCases;