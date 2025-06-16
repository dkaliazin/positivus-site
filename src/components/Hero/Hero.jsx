import css from './Hero.module.css';
import heroimg from '../../assets/heroimg.png';
import heroAmazon from '../../assets/heroAmazon.svg';
import heroDribbble from '../../assets/heroDribbble.svg';
import heroHubspot from '../../assets/heroHubspot.svg';
import heroNetflix from '../../assets/heroNetflix.svg';
import heroNotion from '../../assets/heroNotion.svg';
import heroZoom from '../../assets/heroZoom.svg';
const Hero =()=>{
    return (
        <section className={css.hero} id="hero">
            <div className={css.textimgbox}>
                <div className={css.textbox}>
                    <h1>Navigating the digital landscape for success</h1>
                    <p>
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className={css.herobtn}>Book a consultation</button>
                </div>
                <picture>
                    <source srcSet={heroimg} type="image/png" />
                    <img src={heroimg} alt="Hero Image" className={css.heroimg}></img>
                </picture>
            </div> 
            <div className={css.iconbox}> 
                <img src={heroAmazon} alt="Icon Amazon" className={css.icon}></img>
                <img src={heroDribbble} alt="Icon Amazon" className={css.icon}></img>
                <img src={heroHubspot} alt="Icon Amazon" className={css.icon}></img>
                <img src={heroNetflix} alt="Icon Amazon" className={css.icon}></img>
                <img src={heroNotion} alt="Icon Amazon" className={css.icon}></img>
                <img src={heroZoom} alt="Icon Amazon" className={css.icon}></img>
            </div>
        </section>
    )
}
export default Hero;