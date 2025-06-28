import css from './Hero.module.css';
const Hero = ({
    headertitle, headertext, btn,
    heroimg, heroalt,
    iconAmazon, altAmazon,
    iconDribbble, altDribble,
    iconHubspot, altHubspot,
    iconNetflix, altNetflix,
    iconNotion, altNotion,
    iconZoom, altZoom
}) => {
    return (
        <section className={css.hero} id="hero">
            <div className={css.textimgbox}>
                <div className={css.textbox}>
                    <h1>{headertitle}</h1>
                    <p>
                        {headertext}
                    </p>
                    <button className={css.herobtn}>{btn}</button>
                </div>
                <picture>
                    <source srcSet={heroimg} type="image/png" />
                    <img src={heroimg} alt={heroalt} className={css.heroimg}></img>
                </picture>
            </div> 
            <div className={css.iconbox}> 
                <img src={iconAmazon} alt={altAmazon} className={css.icon}></img>
                <img src={iconDribbble} alt={altDribble} className={css.icon}></img>
                <img src={iconHubspot} alt={altHubspot} className={css.icon}></img>
                <img src={iconNetflix} alt={altNetflix} className={css.icon}></img>
                <img src={iconNotion} alt={altNotion} className={css.icon}></img>
                <img src={iconZoom} alt={altZoom} className={css.icon}></img>
            </div>
        </section>
    )
}
export default Hero;