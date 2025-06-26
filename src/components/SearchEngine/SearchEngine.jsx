import css from './SearchEngine.module.css';
const SearchEngine = ({icon,alt,title,text,btn}) => {
    return (
        <section className={css.section}>
            <div className={css.titlebox}>
                <img src={icon} alt={alt} className={css.icon}/>
                <h3 className={css.title}>
                    <span className={css.highlight}>Search engine</span><br />
                    <span className={css.highlight}>optimization</span>
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