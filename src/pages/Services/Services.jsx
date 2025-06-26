import InfoSection from "../../components/InfoSection/InfoSection";
import heroServices from '../../assets/hero-services.png';
import greenStar from '../../assets/star-bullet-green.svg'
import SearchEngine from "../../components/SearchEngine/SearchEngine";
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
      <SearchEngine
        icon={greenStar}
        alt={'Star icon'}
        title={<>Search engine<br/>optimization</>}
        text={<>SEO is the process of improving your website’s visibility on search engines like
          Google. By optimizing yourcontent and site structure, we help your business rank
          higher in search results, driving more organic traffic and potential customers.</>}
        btn={'Boost My Rankings'}
      />
    </>);
    };
  
  export default Services;