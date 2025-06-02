import css from './Services.module.css';
import magnifImage from '../../assets/tokyo-magnifier-web-search-with-elements 2.png';
import browserImage from '../../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import windowsImage from '../../assets/tokyo-many-browser-windows-with-different-information 1.png';
import messageImage from '../../assets/tokyo-sending-messages-from-one-place-to-another 1.png';
import selectImage from '../../assets/tokyo-selecting-a-value-in-the-browser-window 1.png';
import volumetricImage from '../../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';
import arrow from '../../assets/arrow.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
const Services = () => {
    return (
        <div className={css.services}>
            <div className={css.headerbox}>
                <h2 className={css.headerboxheader}>Services</h2>
                <p className={css.headerboxtext}>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className={css.servicesbox}>
                <div className={`${css.servicesitem} ${css.grey}`}>
                    <div className={css.servicesitembox}>
                        <h3>
                            <span className={`${css.servicesheader} ${css.green}`}>Search engine</span><br/>
                            <span className={`${css.servicesheader} ${css.green}`}>optimization</span>
                        </h3>
                  
                        <a href="" className={`${css.servicesitemlink}`}>
                            <ArrowIcon className={`${css.iconarrow} ${css.fillgreen}`} />
                            
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={magnifImage} type="image/png" />
                        <img src={magnifImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
                <div className={`${css.servicesitem} ${css.green}`}>
                    <div className={css.servicesitembox}>
                        <h3>
                            <span className={`${css.servicesheader} ${css.white}`}>Pay-per-click</span><br/>
                            <span className={`${css.servicesheader} ${css.white}`}>advertising</span>
                        </h3>
                        <a href="" className={`${css.servicesitemlink}`}>
                            <img src={arrow} alt="Arrow button" className={css.iconarrow} />
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={selectImage} type="image/png" />
                        <img src={selectImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
                <div className={`${css.servicesitem} ${css.black}`}>
                    <div className={css.servicesitembox}>
                        <h3>
                            <span className={`${css.servicesheader} ${css.white}`}>Social Media</span><br/>
                            <span className={`${css.servicesheader} ${css.white}`}>Marketing</span>
                        </h3>
                        <a href="" className={`${css.servicesitemlink} ${css.whitetext}`}>
                            <img src={arrow} alt="Arrow button" className={css.iconarrow} />
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={browserImage} type="image/png" />
                        <img src={browserImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
                <div className={`${css.servicesitem} ${css.grey}`}>
                    <div className={css.servicesitembox}>
                         <h3>
                            <span className={`${css.servicesheader} ${css.green}`}>Email</span><br/>
                            <span className={`${css.servicesheader} ${css.green}`}>Marketing</span>
                        </h3>
                        <a href="" className={`${css.servicesitemlink}`}>
                            <img src={arrow} alt="Arrow button" className={css.iconarrow} />
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={messageImage} type="image/png" />
                        <img src={messageImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
                <div className={`${css.servicesitem} ${css.green}`}>
                    <div className={css.servicesitembox}>
                        <h3>
                            <span className={`${css.servicesheader} ${css.white}`}>Content</span><br/>
                            <span className={`${css.servicesheader} ${css.white}`}>Creation</span>
                        </h3>
                        <a href="" className={`${css.servicesitemlink}`}>
                            <img src={arrow} alt="Arrow button" className={css.iconarrow} />
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={windowsImage} type="image/png" />
                        <img src={windowsImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
                <div className={`${css.servicesitem} ${css.black}`}>
                    <div className={css.servicesitembox}>
                        <h3>
                            <span className={`${css.servicesheader} ${css.green}`}>Analytics and</span><br/>
                            <span className={`${css.servicesheader} ${css.green}`}>Tracking</span>
                        </h3>
                        <a href="" className={`${css.servicesitemlink} ${css.whitetext}`}>
                            <img src={arrow} alt="Arrow button" className={css.iconarrow} />
                            <span>Learn more</span>
                        </a>
                    </div>
                    <picture>
                        <source srcSet={volumetricImage} type="image/png" />
                        <img src={volumetricImage} alt="" className={css.servicesimg}></img>
                    </picture>
                </div>
            </div>
            <div className={css.proposalbox}>
                
            </div>
        </div>
    )
}
export default Services;