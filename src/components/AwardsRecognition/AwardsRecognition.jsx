import css from './AwardsRecognition.module.css';
const AwardsRecognition = ({ headertitle, headertext, awardsRecognitionList }) => {
    return (
        <section className={css.awardssection}>
            <div className={css.headerbox}>
                <h2 className={css.highlight}>{headertitle}</h2>
                <p>{headertext}</p>
            </div>
            <ul className={css.list}>
                {awardsRecognitionList.map(({id, img, alt, title, text}) => (
                    <li key={id} className={css.listitem}>
                        <img src={img} alt={alt} className={css.img} />
                        
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </li>
            
                ))}
            </ul>
        </section>
    )
}
export default AwardsRecognition;