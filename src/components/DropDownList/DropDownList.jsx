import css from './DropDownList.module.css';
import { useState } from 'react';
import { CiCirclePlus, CiCircleMinus} from "react-icons/ci";
const DropDownList = ({headertitle, headertext, steps}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
            setActiveIndex(prev => prev === index ? null : index);
    }
      
    return (
        <section className={css.ourworkingprocess}>
            <div className={css.processheadbox}>
                <h2 className={css.processheadboxheader}>{headertitle}</h2>
                <p className={css.processheadboxtext}>{headertext}</p>
            </div>
            <ul className={css.processbox}>
                {steps.map(({id,number,title,description}) => (
                    <li
                        key={id}
                        className={`${css.processboxitem} ${activeIndex === id ? css.activeboxitem : ''}`}
                         >
                        <div className={`${css.processboxitemheader} ${activeIndex === id? css.activeitemheader:''}`}>
                            <h1 className={`${css.processnumber} ${css[number ===""? "none":""]}`}>{ number }</h1>
                            <div className={css.processtitlebox}>
                                <h3 className={`${css.title}`}>
                                    {title}
                                </h3>
                                <div onClick={() => handleToggle(id)} style={{ cursor: 'pointer' }}>
                                    {activeIndex === id ? (
                                     <CiCircleMinus className={css.iconcircle} />
                                    ) : (
                                    <CiCirclePlus className={css.iconcircle} />
                                     )}
                                </div>
                            </div>
                        </div>

                        {activeIndex === id && (
                            <>
                                <span className={css.processitemline}></span> 
                                <p className={css.processdesc}>{description}</p>
                            </>
                    )}

                        
                    </li>
                ))}
                </ul>
                
        </section>
    )
}
export default DropDownList;