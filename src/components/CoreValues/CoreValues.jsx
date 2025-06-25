import css from './CoreValues.module.css';

const CoreValues = ({coreValuesList, headertitle, headertext}) => {
    return (
        <section className={css.section}>
            <div className={css.headerbox}>
                <h2 className={css.highlight}>{headertitle}</h2>
                <p>{headertext}</p>
            </div>
            <ul className={css.list}>
                {coreValuesList.map(({ id, title, text, img, alt }) => (
                    <li key={id} className={css.listitem}>
                        <div className={css.listitembox}>
                            <h3>{title}</h3>
                            <span className={css.underline} />
                            <p>{text}</p>
                        </div>    
                        {img && <img src={img} alt={alt} className={css.image} />}
                    </li>
  ))}
            </ul>
        </section>
    )
}
export default CoreValues;