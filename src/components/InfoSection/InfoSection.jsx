import css from './InfoSection.module.css'
const InfoSection = ({ imgSrc, alt, title, text, strat, strattext}) => {
    return(
    <section className={css.infosection}>
        <img src={imgSrc} alt={alt} className={css.infoimg}/>
            <div className={css.textbox}>
                <p className={strat === true? css.strat : css.none}>{strattext}</p>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </section>
        )
}
export default InfoSection;