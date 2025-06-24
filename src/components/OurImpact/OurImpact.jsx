import css from './OurImpact.module.css';
const impactStats = [
    { id: 1, value: '8+',    label: 'Years of Experience' },
    { id: 2, value: '50+',   label: 'Experts' },
    { id: 3, value: '100+',  label: 'Successful Campaigns' },
    { id: 4, value: '20+',   label: 'Industry Awards' },
    
];
const impactStatsLast = [{ id: 5, value: '500%', label: 'ROI for our clients' }];
const OurImpact = () => {
    return (
        <section className={css.ourimpact}>
            <div className={css.ourimpactheader}>
                <h2 className={css.title}>Our Impact in Numbers</h2>
                <p>A snapshot of the milestones and achievements<br />
                    that drive our success</p>
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