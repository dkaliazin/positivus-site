import css from './PricingSection.module.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
const PricingSection = ({headertitle, headertext, pricingData}) => {
    return (
        <section>
            <div className={css.header}>
                <h1>{headertitle}</h1>
                <p className={css.headertext}>{headertext}</p>
            </div>
            <ul className={css.pricelist}>
                {pricingData.map(({
                    id,
                    name,
                    price,
                    period,
                    popular,
                    buttonText,
                    quoteText,
                    features
                }) => (
                    <li key={id} className={css.listitem}>
                        <div className={css.topbox}>
                            <h3>{name}</h3>
                            <h2>${price} <span className={css.period}>/{period}</span></h2>
                            {popular === true ? <p className={css.popular}>Popular</p>:''}
                        </div>
                        <div className={css.btnbox}>
                            <button className={css.btnget}>{buttonText}</button>
                            <button className={css.btnquote}>{quoteText}</button>
                        </div>
                        <span className={css.border} />
                        <ul className={css.proslist}>
                            {features.map((feature, index) => (
                                <li key={index} className={css.prositem}> 
                                    <IoIosCheckmarkCircle className={css.icon} />
                                    <p>{feature}</p>
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