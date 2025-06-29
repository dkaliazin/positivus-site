import css from './ProposalSection.module.css';
const ProposalSection = ({ title, text, link, img, alt }) => {
    return (
        <section className={css.proposal}>
            <div className={css.proposal}>
                    <div className={css.proposalbox}>
                        <h2 className={css.proposalheader}>{title}</h2>
                        <p className={css.proposaltext}>{text}</p>
                        <a href="" className={css.proposallink}>{link}</a>
                     </div>
                <picture>
                    <source srcSet={img} type="image/png"></source>
                    <img src={img} alt={alt} className={css.proposalimg}></img>
                </picture>
             </div>
        </section>
    )
    
}
export default ProposalSection;