import css from './CaseStudies.module.css';
import React from 'react';
import { BiRightTopArrowCircle } from "react-icons/bi";
const CaseStudies = ({headertitle, headertext, listData}) => {
    return (
        <section className={css.casestudies} id="casestudies">
                <div className={css.caseheaderbox} >
                <h2 className={css.caseheaderboxheader}>{headertitle}</h2>
                <p className={css.caseheaderboxtext}>{headertext}</p>
            </div>
            
            <ul className={css.casebox}>
                {listData.map(({ id, text }) => (
                    <React.Fragment key={id}>
                        <li className={css.caseboxitem}>
                            <p className={css.caseboxitemtext}>{text}</p>
                            <a href="/use-cases" className={css.caseboxitemlink}>
                                Learn more
                                <BiRightTopArrowCircle className={css.iconarrow0}/>
                            </a>
                        </li>
                        {id < listData.length  && (
                            <span className={css.caseboxline}></span>
                        )}
                    </React.Fragment>
                ))}
                </ul>                         
        </section>
    )
}
export default CaseStudies;