import css from './SearchEngine.module.css';
const SearchEngine = ({ icon, alt, titleLines, text, btn }) => {
    const line1 = titleLines[0] || '';   
    const line2 = titleLines[1] || '';
    return (
        <section className={css.section}>
            <div className={css.titlebox}>
                <img src={icon} alt={alt} className={css.icon}/>
                <h3 className={css.title}>
                    <span className={css.highlight}>{line1}</span><br />
                    <span className={css.highlight}>{line2}</span>
                </h3>
            </div>
            <div className={css.textbox}>
                <p className={css.text}>{text}</p>
                <button className={css.btn}>{btn}</button>
            </div>
                
           
        </section>
    )
}
export default SearchEngine;