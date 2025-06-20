import css from './OurWorkingProcess.module.css';
import { useState } from 'react';
import { CiCirclePlus, CiCircleMinus} from "react-icons/ci";
const OurWorkingProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
        },
        {
          number: '02',
          title: 'Research and Strategy Development',
          description: 'We analyze your market and create a data-driven strategy tailored to your objectives.',
        },
        {
          number: '03',
          title: 'Implementation',
          description: 'We execute the agreed-upon plan using proven techniques and modern tools.',
        },
        {
            number: '04',
            
          title: 'Monitoring and Optimization',
          description: 'We constantly monitor performance and refine campaigns to ensure the best results.',
        },
        {
          number: '05',
          title: 'Reporting and Communication',
          description: 'We provide transparent reports and maintain regular communication with stakeholders.',
        },
        {
          number: '06',
          title: 'Continual Improvement',
          description: 'We keep analyzing and improving processes to sustain growth and efficiency.',
        }
      ];

    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
            setActiveIndex(prev => prev === index ? null : index);
    }
      
    return (
        <section className={css.ourworkingprocess} id="ourworkingprocess">
            <div className={css.processheadbox}>
                <h2 className={css.processheadboxheader}>Our Working Process </h2>
                <p className={css.processheadboxtext}>
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>
            <div className={css.processbox}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`${css.processboxitem} ${activeIndex === index ? css.activeboxitem : ''}`}
                         >
                        <div className={`${css.processboxitemheader} ${activeIndex === index ? css.activeitemheader:''}`}>
                            <h1 className={css.processnumber}>{step.number}</h1>
                            <div className={css.processtitlebox}>
                                <h3 className={css.title}>{step.title}</h3>
                                <div onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }}>
                                    {activeIndex === index ? (
                                     <CiCircleMinus className={css.iconcircle} />
                                    ) : (
                                    <CiCirclePlus className={css.iconcircle} />
                                     )}
                                </div>
                            </div>
                        </div>

                        {activeIndex === index && (
                            <>
                                <span className={css.processitemline}></span> 
                                <p className={css.processdesc}>{step.description}</p>
                            </>
                    )}

                        
                    </div>
                ))}
                </div>
                
        </section>
    )
}
export default OurWorkingProcess;