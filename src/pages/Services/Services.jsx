import InfoSection from "../../components/InfoSection/InfoSection";
import heroServices from '../../assets/hero-services.png'
const Services = () => {
    return (<>
      <InfoSection
        imgSrc={heroServices}
        alt={'Hero image'}
        title={'Expert Digital Marketing Services'}
        text={<>
          Unlock your business’s full potential with<br />
          tailored strategies designed to drive growth<br />
          and deliver results.
        </>}
      />
    </>);
    };
  
  export default Services;