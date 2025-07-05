import DropDownList from "../../components/DropDownList/DropDownList";
import { faqData } from "../../assets/faqData";
import PricingSection from "../../components/PricingSection/PricingSection";
import { pricingPlans } from "../../assets/pricingData";
const Pricing = () => {
  return (<>
    <PricingSection
      headertitle={'Pricing'}
      headertext={'Elevate Your Online Presence: Competitive Pricing for Exceptional Results'}
      pricingData={pricingPlans}
    />
    <DropDownList
      headertitle={'Frequantly Asked Questions'}
      headertext={''}
      steps={faqData}
    />
  </>);
  
  };
  
  export default Pricing;