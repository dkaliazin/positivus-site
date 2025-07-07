import css from './PricingSection.module.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
const PricingSection = ({headertitle, headertext, pricingData}) => {
    return (
        <section className={css.section}>
            <div className={css.header}>
                <h1>{headertitle}</h1>
                <p className={css.headertext}>{headertext}</p>
            </div>
            <ul className={css.pricelist}>
                {pricingData.map(({
                    id,
                    name,
                    price,
                    bg,
                    period,
                    popular,
                    buttonText,
                    quoteText,
                    features
                }) => (
                    <li key={id} className={`${css.listitem} ${bg === 'black' ? css.bgblack : css.bgwhite}`}>
                        <div className={css.topbox}>
                            <h3 className={`${bg ==='black'? css.textwhite:''}`}>{name}</h3>
                            <h2 className={`${bg ==='black'? css.textwhite:''}`}>${price} <span className={` ${css.period} ${bg ==='black'? css.textwhite:'' }`}>/{period}</span></h2>
                            {popular === true ? <p className={css.popular}>Popular</p>:''}
                        </div>
                        <div className={css.btnbox}>
                            <button
                                className={`
                                    ${css.btnget} 
                                    ${bg === 'black' ?
                                        `${css.bggreen} ${css.textblack}` : ''}`}>
                                {buttonText}
                            </button>
                            <button
                                className={`
                                    ${css.btnquote} 
                                ${bg === 'black' ?
                                        `${css.bgblack} 
                                        ${css.textwhite}
                                        ${css.borderwhite}
                                        ${css.outlinewhite}` : ''}`}>
                                {quoteText}
                            </button>
                        </div>
                        <span className={bg==='black'? css.borderwhite:css.border} />
                        <ul className={css.proslist}>
                            {features.map((feature, index) => (
                                <li key={index} className={css.prositem}> 
                                    <IoIosCheckmarkCircle size={20}
                                        className={`${css.icon}`} />
                                    <p className={`${bg ==='black'? css.textwhite:''}`}>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default PricingSection;