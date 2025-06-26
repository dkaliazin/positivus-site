import css from './OurImpact.module.css';
const OurImpact = ({impactStats, impactStatsLast, headertitle, headertext}) => {
    return (
        <section className={css.ourimpact}>
            <div className={css.ourimpactheader}>
                <h2 className={css.title}>{headertitle}</h2>
                <p>{headertext}</p>
            </div>
            <ul className={css.numbers}>
                {impactStats.map(({ id, value, label }) => (
                    <li key={id} className={css.numbersitem}>
                        <div className={css.numbertextbox}>
                            <h2>{value}</h2>
                            <p>{label}</p>
                        </div>
                        
                        <span className={css.border} />
                    </li>
                )
                )}
                {impactStatsLast.map(({ id, value, label }) => (
                    <li key={id} className={css.numbersitem}>
                        <div className={css.numbertextbox}>
                            <h2>{value}</h2>
                            <p>{label}</p>
                        </div>
                    </li>
                ))}
            </ul>        
        </section>
    )
}
export default OurImpact;