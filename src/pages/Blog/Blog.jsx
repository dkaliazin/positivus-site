import InfoSection from "../../components/InfoSection/InfoSection";
import heroimg from '../../assets/heroimg.png'
import WhiteGridList from "../../components/WhiteGridList/WhiteGridList";
import { whiteGridBlogData } from "../../assets/whiteGridBlogData";
const Blog = () => {
  return (
    <>
      <InfoSection
        imgSrc={heroimg}
        alt={'Hero Image'}
        strat={true}
        strattext={'Marketing Strategies'}
        text={'PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance.'}
        title={'PPC vs. Organic Marketing: Which One Is Right for Your Business?'}
      />
      <WhiteGridList
        headertitle={'Explore More Insights'}
        headertext={'Discover expert tips, strategies, and stories to keep you ahead in the digital landscape.'}
        whiteGridData={whiteGridBlogData}
      />
    </>);
  };
  
  export default Blog;