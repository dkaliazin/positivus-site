import css from './ProposalSection.module.css';
const ProposalSection = ({ title, text, bg, link, img, alt }) => {
    return (
        <section className={`${css.proposal} ${css[bg]}`}>
            
                    <div className={css.proposalbox}>
                        <h2 className={css.proposalheader}>{title}</h2>
                        <p className={css.proposaltext}>{text}</p>
                        <a href="" className={css.proposallink}>{link}</a>
                     </div>
                <picture className={css.proposalpicture}>
                    <source srcSet={img} type="image/png"></source>
                    <img src={img} alt={alt} className={css.proposalimg}></img>
                </picture>
             
        </section>
    )
    
}
export default ProposalSection;