import css from './Article.module.css';

const Article = ({avatar, altAvatar,introtext, headertext,headertitle,articleData,ppcStatsData}) => {
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
            <p className={css.introtext}>
                {introtext}
            </p>
            <div className={css.articletext}>
                {articleData.map(({ id, title, text,quote }) => (
                    <div key={id} className={css.articletextitem}>
                    { id <= 2 || id == 5 || id == 7 ?
                            (<>
                                <h3>{title}</h3>
                                 {text.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </>) :
                            id == 3 ? 
                                
                                (<>
                                    <h3>{title}</h3>
                                    <div className={css.quotebox}>
                                        <span className={css.greenline}/>
                                        <p className={css.quote}>{quote}</p>
                                    </div>
                                    {text.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </>) :
                                id == 4 ? 
                                    (<div className={css.ppcbox}>
                                        <h3>{title}</h3>
                                        <ul>
                                            {ppcStatsData.map(({ id, title, text }) => (
                                                <li key={id}>
                                                    {id === 1 || id === 4 ? 
                                                        <>
                                                            <p>{text[0]}</p>
                                                            <h3>{title}</h3>
                                                            <p>{text[1]}</p>
                                                        </> : 
                                                        id === 2 ?
                                                            <>
                                                                <h3>{title}</h3>
                                                                <p>{text}</p>
                                                            </> :
                                                            id === 3 ?
                                                                <>
                                                                    <p>{text[0]}</p>
                                                                    <h3>{title}</h3>
                                                                    <p>{text[1]}</p>
                                                                </>:<></>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>) : 
                                    id == 6 ? 
                                        (<>
                                            <h3>{title}</h3>
                                            <ul className={css.list}>
                                                {Array.isArray(text) && text.map((item, index) => (
                                                    <li key={index} className={css.listitem}>{item}</li>
                                                ))}
                                            </ul>
                                        </>) :
                                        (<>
                                            <li>
                                                <h3>{title}</h3>
                                                <p>{quote}</p>
                                                {text.split('\n').map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </li>
                                        </>)
                        }
                        
                    </div>
                ))}
                </div>
        </section>
    )
}
export default Article;