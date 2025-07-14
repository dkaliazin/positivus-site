import css from './Article.module.css';
const Article = ({avatar, altAvatar, headertext,headertitle}) => {
    return (
        <section className={css.article}>
            <div className={css.header}>
                <div className={css.personbox}>
                    <img src={avatar} alt={altAvatar} className={css.img} />
                    <div>
                        <h4>{headertitle}</h4>
                        <p>{headertext}</p>
                    </div>
                </div>
                    <div className={css.ticker}>
                        <span>A</span>
                        <span>A</span>
                        <span>A</span>
                    </div> 
                
            </div>
            <span className={css.border} />
            <div>
                
            </div>
        </section>
    )
}
export default Article;