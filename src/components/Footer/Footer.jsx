import css from './Footer.module.css';
import logo from '../../assets/logo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <section className={css.footer} id="footer">
            <div className={css.header}>
                 <img src={logo} alt="positivus logo" className={css.logo}></img>
                <h1 className={css.title}>Positivius</h1>
                <nav className={css.anchorlist}>
                    <li className={css.anchorlistitem}>
                        <a href="" className={css.anchorlistitemlink}>About us</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="" className={css.anchorlistitemlink}>Services</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="" className={css.anchorlistitemlink}>Use Cases</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="" className={css.anchorlistitemlink}>Pricing</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="" className={css.anchorlistitemlink}>Blog</a>
                    </li>    
                </nav>
                <ul className={css.socials}>
                    <li className={css.socialsitem}>
                        <a href="https://www.linkedin.com/" className={css.socialsitemlink}>
                            <FaLinkedin className={css.socialicon}/>
                        </a>
                    </li>
                    <li className={css.socialsitem}>
                        <a href="https://www.facebook.com/" className={css.socialsitemlink}>
                            <FaFacebookSquare className={css.socialicon}/>
                        </a>
                    </li>
                    <li className={css.socialsitem}>
                        <a href="https://x.com/" className={css.socialsitemlink}>
                            <FaTwitterSquare className={css.socialicon}/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Footer;