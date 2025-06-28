import css from './HowWeWork.module.css';
const HowWeWork = ({headertitle, headertext, howWeWorkList}) => {
    return (
        <section className={css.section}>
            <div className={css.header}>
                <h2 ><span className={css.highlight}>{headertitle}</span></h2>
                <p className={css.headertext}>{headertext}</p>
            </div>
            <ul className={css.list}>
                {howWeWorkList.map(({ id, icon,alt, number, header, text }) => (
                    <li key={id} className={css.item}>
                        <img src={icon} alt={alt} className={css.icon}/>
                            <h1 className={css.number}>{number}</h1>
                        <div className={css.textbox}>
                            <h3>{header}</h3>
                            <p>{text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default HowWeWork;