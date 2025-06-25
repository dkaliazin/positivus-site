import css from './Quote.module.css';
const Quote = ({img, alt, quote, author}) => {
    return (
        <section className={css.quotesection}>
            <img src={img} alt={alt} className={css.img} />
            <div className={css.quotebox}>
                <h2 className={css.quote}>{quote}</h2>
                <p className={css.author}>{author}</p>
            </div>
        </section>
    )
}
export default Quote;