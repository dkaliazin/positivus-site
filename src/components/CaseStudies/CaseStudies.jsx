import css from './CaseStudies.module.css';
import proposalimage from '../../assets/proposalimage.png'
import { BiRightTopArrowCircle } from "react-icons/bi";
const CaseStudies = () => {
    return (
        <section className={css.casestudies} >
            <div className={css.proposal}>
                <div className={css.proposalbox}>
                    <h2 className={css.proposalheader}>Let’s make things happen</h2>
                    <p className={css.proposaltext}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <a href="" className={css.proposallink}>Get your free proposal</a>
                 </div>
            <picture>
                <source srcSet={proposalimage} type="image/png"></source>
                <img src={proposalimage} alt="Proposal Image" className={css.proposalimg}></img>
            </picture>
            </div>

            <div className={css.caseheaderbox} id="casestudies">
                <h2 className={css.caseheaderboxheader}>Case Studies</h2>
                <p className={css.caseheaderboxtext}>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            
            <div className={css.casebox}>
                <div className={css.caseboxitem}>
                    <p className={css.caseboxitemtext}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <a href="" className={css.caseboxitemlink}>
                        Learn more
                        <BiRightTopArrowCircle className={css.iconarrow} />
                    </a>
                </div>
                <span className={css.caseboxline}></span>
                <div className={css.caseboxitem}>
                    <p className={css.caseboxitemtext}>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <a href="" className={css.caseboxitemlink}>
                        Learn more
                        <BiRightTopArrowCircle className={css.iconarrow} />
                    </a>
                </div>
                <span className={css.caseboxline}></span>
                <div className={css.caseboxitem}>
                    <p className={css.caseboxitemtext}>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <a href="" className={css.caseboxitemlink}>
                        Learn more
                        <BiRightTopArrowCircle className={css.iconarrow} />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default CaseStudies;