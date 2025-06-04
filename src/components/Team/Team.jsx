import css from './Team.module.css';
import { FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
const Team = () => {
    return (
        <div className={css.team}>
            <div className={css.teamheaderbox}>
                <h2 className={css.teamheaderboxheader}>Team</h2>
                <p className={css.teamheaderboxtext}>
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </p>
            </div>
            <div className={css.teambox}>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                    </p>
                </div>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>Jane Doe</h4>
                            <p>Director of Operations</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        7+ years of experience in project management and team leadership. Strong organizational and communication skills
                    </p>
                </div>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>Michael Brown</h4>
                            <p>Senior SEO Specialist</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
                    </p>
                </div>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>Emily Johnson</h4>
                            <p>PPC Manager</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
                    </p>
                </div>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>Brian Williams</h4>
                            <p>Social Media Specialist</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
                    </p>
                </div>
                <div className={css.teamboxitem}>
                    <div>
                        <picture></picture>
                        <div>
                            <h4>Sarah Kim</h4>
                            <p>Content Creator</p>
                        </div>
                        <FaLinkedin />
                    </div>
                    <span/>
                    <p>
                        2+ years of experience in writing and editing <br/>Skilled in creating compelling, SEO-optimized content for various industries
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Team;