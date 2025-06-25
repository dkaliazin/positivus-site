import css from './OurJourney.module.css';
import greenStar from '../../assets/star-bullet-green.svg';
import arrowLine from '../../assets/arrow-line.svg';
const OurJourney = () => {
    return (
        <section className={css.ourjourney}>
            <div className={css.journeyheader}>
                <h2 className={css.highlight}>Our Journey</h2>
                <p>From humble beginnings to industry leaders, discover how Positivus has <br/>evolved to drive success for businesses worldwide.</p>
            </div>
            <ul className={css.journeylist}>
                <div className={css.journeyitembox}>
                    <h1>2019</h1>
                    <li className={css.journeyitem}>
                        <img src={greenStar} alt="Star Icon" className={css.icon}/>
                        <div className={css.journeyitemtextbox}>
                            <h3 className={css.journeyitemtitle}>The Beginning</h3>
                            <p className={css.journeyitemtext}>Positivus was founded to help businesses navigate the digital world and achieve online success.</p>
                        </div>
                    </li>
                </div>
                <div className={css.journeyitemboxright}>
                    <h1>2021</h1>
                    <li className={css.journeyitem}>
                        <img src={greenStar} alt="Star Icon" className={css.icon}/>
                        <div className={css.journeyitemtextbox}>
                            <h3 className={css.journeyitemtitle}>Industry Recognition</h3>
                            <p className={css.journeyitemtext}>Positivus was named among the top 50 global digital agencies, affirming our leadership.</p>
                        </div>
                    </li>
                </div>
                <div className={css.journeyitembox}>
                    <h1>2023</h1>
                    <li className={css.journeyitem}>
                        <img src={greenStar} alt="Star Icon" className={css.icon}/>
                        <div className={css.journeyitemtextbox}>
                            <h3 className={css.journeyitemtitle}>Innovation and Growth</h3>
                            <p className={css.journeyitemtext}>With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.</p>
                        </div>
                    </li>
                </div>
                <div className={css.journeyitemboxright}>
                    <h1>2024</h1>
                    <li className={css.journeyitem}>
                        <img src={greenStar} alt="Star Icon" className={css.icon}/>
                        <div className={css.journeyitemtextbox}>
                            <h3 className={css.journeyitemtitle}>Leading the Future</h3>
                            <p className={css.journeyitemtext}>This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.</p>
                        </div>
                    </li>
                </div>
            </ul>
            <img src={arrowLine} alt="" className={css.arrowline} />
        </section>
    )
}
export default OurJourney;