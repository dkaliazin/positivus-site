import InfoSection from "../../components/InfoSection/InfoSection";
import heroimg from '../../assets/heroimg.png'
import WhiteGridList from "../../components/WhiteGridList/WhiteGridList";
import { whiteGridBlogData } from "../../assets/whiteGridBlogData";
import Article from "../../components/Article/Article";
import avatar from '../../assets/blog-avatar.png';
import { articleData } from '../../assets/articleData';
import { ppcStatsData } from "../../assets/ppcStatsData";
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
      <Article
        avatar={avatar}
        altAvatar={"Sarah Kim's Avatar"}
        headertitle={'Sarah Kim'}
        headertext={'Content Creator'}
        introtext={'In the ever-evolving digital landscape, businesses are faced with an important question: should they invest in pay-per-click (PPC) advertising or focus on organic marketing strategies? While both approaches have their merits, choosing the right one depends on your goals, budget, and timeline. Let’s dive into the strengths, challenges, and real-world applications of PPC and organic marketing to help you make an informed decision.'}
        articleData={articleData}
        ppcStatsData={ppcStatsData}
        
      />
      <WhiteGridList
        headertitle={'Explore More Insights'}
        headertext={'Discover expert tips, strategies, and stories to keep you ahead in the digital landscape.'}
        whiteGridData={whiteGridBlogData}
      />
    </>);
  };
  
  export default Blog;