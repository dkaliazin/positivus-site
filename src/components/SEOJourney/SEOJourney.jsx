import css from './SEOJourney.module.css';
const SEOJourney = ({ title, text, boldtext, btn, src, alt }) => {
    return (
        <section className={css.seo}>
            <div>
                <div className={css.seobox}>
                    <h3 className={css.title}>{title}</h3>
                    <span className={css.seoborder} />
                    <p className={css.seotext}>{text}</p>
                </div>
                <p className={css.seoboldtext}>{boldtext}</p>
                <button className={css.btn}>{btn}</button>
            </div>
            <img src={src} alt={alt} />
        </section>
        
    )
}
export default SEOJourney;