import css from './FeaturedSuccess.module.css';

const FeaturedSuccess = ({header, smallheader, text, linktext, icon, alt, featuredData}) => {
    return (
        <section className={css.success}>
            <div className={css.headerbox}>
                <h2>{header}</h2>
                <h3>{smallheader}</h3>
                <p>{text}</p>
                <a href="/about"><img src={icon} alt={alt} />{linktext}</a>
            </div>
        </section>
    )
}
export default FeaturedSuccess;