import css from './Footer.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import logowhite from '../../assets/logo-white.svg'
const Footer = () => {
    return (
        <footer className={css.footer} id="footer">
            <div className={css.header}>
                <a href="/" className={css.logolink}>
                    <img src={logowhite} alt="positivus logo" className={css.logo}></img>               
                    <h1 className={css.title}>Positivius</h1>
                </a>
                <nav className={css.anchorlist}>
                    <li className={css.anchorlistitem}>
                        <a href="/about-us" className={css.anchorlistitemlink}>About us</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="/services" className={css.anchorlistitemlink}>Services</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="/use-cases" className={css.anchorlistitemlink}>Use Cases</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="/pricing" className={css.anchorlistitemlink}>Pricing</a>

                    </li>
                    <li className={css.anchorlistitem}>
                        <a href="/blog" className={css.anchorlistitemlink}>Blog</a>
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
            <div className={css.contactbox}>
                <div className={css.addressbox}>
                    <h4 className={css.addressboxtitle}>Contact us:</h4>
                    <address className={css.addresslist}>
                        <p className={css.addresstext}>Email:
                            <a href="" className={css.addresslink}> info@positivus.com</a>
                        </p>
                        <p className={css.addresstext}>Phone:
                            <a href="" className={css.addresslink}> 555-567-8901</a>
                        </p>
                        <p className={css.addresstext}>Address:
                            <a href="" className={css.addresslink}> 1234 Main St <br />
                            Moonstone City, Stardust State 12345</a>
                        </p>
                </address>
                </div>
                <form className={css.subform} onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="email" className={css.visuallyhidden}>Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className={css.emailinput}
                    />
                    <button type="submit" className={css.subbtn}>
                        Subscride to news

                    </button>
                </form>
            </div>
            <span className={css.whiteline} />
            <div className={css.privpolbox}>
                <p className={css.addresstext}>© 2023 Positivus. All Rights Reserved.</p>
                <a href="https://www.privacypolicygenerator.info/" className={css.privpollink}>Privacy Policy</a>
            </div>
        </footer>
    )
}
export default Footer;