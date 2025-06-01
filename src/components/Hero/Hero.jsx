import css from './Hero.module.css';
import heroimg from '../../assets/heroimg.png';
const Hero =()=>{
    return (
        <div className={css.hero}>
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
        </div>
    )
}
export default Hero;