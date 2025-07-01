import InfoSection from "../../components/InfoSection/InfoSection";
import heroServices from '../../assets/hero-services.png';
import greenStar from '../../assets/star-bullet-green.svg'
import SearchEngine from "../../components/SearchEngine/SearchEngine";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import howWeWorkList from "../../assets/howWeWorkList";
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import { useCasesData } from "../../assets/useCasesData";
import { otherServices } from "../../assets/otherServicesData";
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import SEOJourney from "../../components/SEOJourney/SEOJourney";
import seoImg from '../../assets/seo-image.png'
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
        titleLines={['Search engine','optimization']}
        text={<>SEO is the process of improving your website’s visibility on search engines like
          Google. By optimizing yourcontent and site structure, we help your business rank
          higher in search results, driving more organic traffic and potential customers.</>}
        btn={'Boost My Rankings'}
      />
      <HowWeWork
        headertitle={'How We Work: SEO Process'}
        headertext={'Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, and drives lasting results.'}
        howWeWorkList={howWeWorkList}
      />
      <CaseStudies
        headertitle={'Use Cases'}
        headertext={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}
        listData={useCasesData}
      />
      <ServicesSection
        headertitle={'Our Other Services'}
        headertext={'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'}
        servicesData={otherServices}
      />
      <SEOJourney 
        title={'Ready to Elevate Your Search Rankings?'}
        text={'Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we’re here to make it happen.'}
        boldtext={'Let’s work together to grow your online presence.'}
        btn={'Start My SEO Journey'}
        src={seoImg}
        alt='SEO image'
      />
    </>);
    };
  
  export default Services;