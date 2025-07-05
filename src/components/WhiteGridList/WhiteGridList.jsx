import css from './WhiteGridList.module.css';
import { BiRightTopArrowCircle } from 'react-icons/bi';
const WhiteGridList = ({headertitle,headertext,whiteGridData}) => {
    return (
        <section className={css.section}>
            <div className={css.headerbox}>
                <h2 className={css.highlight}>{headertitle}</h2>
                <p>{headertext}</p>
            </div>
            <ul className={css.grid}>
                {whiteGridData.map(({ id, title, description, linktext, link }) => (
                    <li key={id} className={css.griditem}>
                        <h3>{title}</h3>
                        <p className={css.description}>{description}</p>
                        <a href={link} className={css.link}>
                            <BiRightTopArrowCircle className={css.icon}/>
                            {linktext}
                        </a>
                    </li>
                ))}                
            </ul>
        </section>
    )
}
export default WhiteGridList;