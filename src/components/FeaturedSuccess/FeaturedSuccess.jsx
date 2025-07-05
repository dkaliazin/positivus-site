import css from './FeaturedSuccess.module.css';
import { BiRightTopArrowCircle } from "react-icons/bi";
const FeaturedSuccess = ({header, smallheader, text, linktext,featuredData}) => {
    return (
        <section className={css.success}>
            <div className={css.headerbox}>
                <h2><span className={css.highlight}>{header}</span></h2>
                <h3 className={css.textwhite}>{smallheader}</h3>
                <p className={css.textwhite}>{text}</p>
                <a href="/about" className={`${css.textgreen} ${css.link}`}>
                    <BiRightTopArrowCircle className={css.icon}></BiRightTopArrowCircle>
                    {linktext}
                </a>
            </div>
            <ul className={css.list}>
                {featuredData.map(({ id, value, description }) => (
                    <li key={id} className={css.listitem}>
                        <h2>{value}</h2>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default FeaturedSuccess;