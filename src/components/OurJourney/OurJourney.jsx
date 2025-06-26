import css from './OurJourney.module.css';
import arrowLine from '../../assets/arrow-line.svg';
import bgImg from '../../assets/journey-bg-img.svg';
const OurJourney = ({headertitle, headertext, journeyList}) => {
    return (
        <section className={css.ourjourney}>
            <div className={css.journeyheader}>
                <h2 className={css.highlight}>{headertitle}</h2>
                <p>{headertext}</p>
            </div>
            <ul className={css.journeylist}>
                {journeyList.map(({ id, year, side, title, text, icon, alt }) => (
                    <li key={id} className={
                        side === 'right' 
                            ? css.journeyitemboxright
                            : css.journeyitemboxleft
                    }>
                        <h1>{year}</h1>
                        <div className={css.journeyitem}>
                            <img src={icon} alt={alt} className={css.icon}/>
                            <div className={css.journeyitemtextbox}>
                                <h3 className={css.journeyitemtitle}>{title}</h3>
                                <p className={css.journeyitemtext}>{text}</p>
                            </div>
                        </div>
                    </li>
                )
                )}
            </ul>
            <img src={arrowLine} alt="Journey line" className={css.arrowline} />
            <img src={bgImg} alt="Background image" className={css.bgimgtop} />
            <img src={bgImg} alt="Background image" className={css.bgimgbottom} />
        </section>
    )
}
export default OurJourney;