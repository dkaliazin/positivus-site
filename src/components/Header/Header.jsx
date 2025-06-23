import css from './Header.module.css';
import logo from '../../assets/logo.svg';
const Header = () => {
    return (
        <header className={css.header} id ="header">
            <div className={css.box}>
                <a href="/" className={css.logolink}>
                    <img src={logo} alt="positivus logo" className={css.logo}></img>
                    <h1 className={css.headerpositivus}>Positivus</h1>
                </a>
                
            </div>
           
            <nav className={css.navigation}>
                <li className={css.navitem}>
                    <a href="/about-us" className={css.navitemlink}>About us</a>
                    </li>
                <li className={css.navitem}>
                    <a href="/services" className={css.navitemlink}>Services</a>
                    </li>
                <li className={css.navitem}>
                    <a href="/use-cases" className={css.navitemlink}>Use Cases</a>
                    </li>
                <li className={css.navitem}>
                    <a href="/pricing" className={css.navitemlink}>Pricing</a>
                    </li>
                <li className={css.navitem}>
                    <a href="/blog" className={css.navitemlink}>Blog</a>
                    </li>
            </nav>
        <button className={css.headerbtn}>Request a quote</button>

        </header>
    )
}
export default Header;