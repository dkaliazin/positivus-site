import css from './OurWorkingProcess.module.css';
import { CiCirclePlus } from "react-icons/ci";
const OurWorkingProcess = () => {
    return (
        <section className={css.ourworkingprocess}>
            <div className={css.processheadbox}>
                <h2 className={css.processheadboxheader}>Our Working Process </h2>
                <p className={css.processheadboxtext}>
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>
            <div className={css.processbox}>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>01</h1>
                        <h3>Consultation</h3>
                    </div>
                    <CiCirclePlus className={css.iconcircle}/>
                </div>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>02</h1>
                        <h3>Research and Strategy Development</h3>
                    </div>
                    
                    <CiCirclePlus className={css.iconcircle} />
                </div>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>03</h1>
                        <h3>Implementation</h3>
                    </div>
                    <CiCirclePlus className={css.iconcircle}/>
                </div>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>04</h1>
                        <h3>Monitoring and Optimization</h3>
                    </div>
                    <CiCirclePlus className={css.iconcircle}/>
                </div>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>05</h1>
                        <h3>Reporting and Communication</h3>
                    </div>                    
                    <CiCirclePlus className={css.iconcircle}/>
                </div>
                <div className={css.processboxitem}>
                    <div className={css.processboxitemheader}>
                        <h1>06</h1>
                        <h3>Continual Improvement</h3>
                    </div> 
                    <CiCirclePlus className={css.iconcircle}/>
                </div>
            </div>
        </section>
    )
}
export default OurWorkingProcess;