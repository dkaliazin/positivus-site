import css from './Team.module.css';
import { FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";


const Team = ({headertitle,headertext,teamData}) => {
    return (
        <section className={css.team} id="team">
            <div className={css.teamheaderbox}>
                <h2 className={css.teamheaderboxheader}>{headertitle}</h2>
                <p className={css.teamheaderboxtext}>{headertext}</p>
            </div>
            <ul className={css.teambox}>
                {teamData.map(({ id, memberName, role, photo, alt, bio }) => (
                    <li key={id} className={css.teamboxitem}>
                        <div className={css.teamboxitemtop}>
                            <img src={photo} alt={alt} className={css.teamphoto} />
                            <div className={css.textbox}>
                                <h4>{memberName}</h4>
                                <p>{role}</p>
                            </div>                            
                            <a href="https://www.linkedin.com/"><FaLinkedin className={css.icon} /> </a>                         
                        </div>
                        <span className={css.span} />
                        <p>{bio}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Team;