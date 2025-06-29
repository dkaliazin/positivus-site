import css from './ServicesSection.module.css';
import { BiRightTopArrowCircle } from "react-icons/bi";
const ServicesSection = ({headertitle, headertext, servicesData}) => {
    return (
        <section className={css.services} id="services">
            <div className={css.headerbox}>
                <h2 className={css.headerboxheader}>{headertitle}</h2>
                <p className={css.headerboxtext}>{headertext}</p>
            </div>
            <ul className={css.servicesbox}>
            {servicesData.map((
                {
                    id,
                    titleLines,
                    bgClass,
                    titleColor, textColor, iconColor,
                    imgSrc, alt, imgClass, fontLink
                }) => (
                
                    <li key={id} className={`${css.servicesitem} ${css[bgClass]}`}>
                        <div className={css.servicesitembox}>
                            <h3>
                            {titleLines.map((line, i) => (
                                    <>
                                        <span key={i} className={`${css.servicesheader} ${css[titleColor]}`}>
                                            {line}
                                        </span>
                                         {i == 0 && <br />}
                                    </>
                                ))}
                            </h3>
                            <a href='/services' className={`${css.servicesitemlink} ${css[textColor]}`}>
                                <BiRightTopArrowCircle className={`${css.iconarrow} ${css[iconColor]}`} />
                                <span>Learn more</span>
                            </a>
                            {fontLink === 'https://fonts.google.com/specimen/Space+Grotesk'?
                                <a href="https://fonts.google.com/specimen/Space+Grotesk" className={css.servicesfontlink}>You can find font here</a> :
                                <></>
                            }
                        </div>
                        <picture>
                            <source srcSet={imgSrc} type="image/png" />
                        <img src={imgSrc} alt={alt} className={css[imgClass]} />
                        </picture>
                    </li>
                
            ))}
                </ul>     
        </section>
    )
}
export default ServicesSection;