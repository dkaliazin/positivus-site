import css from './Header.module.css';
import logo from '../../assets/logo.svg';
const Header = () => {
    return (
        <header className={css.header} id ="header">
            <div className={css.box}>
                <img src={logo} alt="positivus logo" className={css.logo}></img>
                <h1 className={css.headerpositivus}>Positivus</h1>
            </div>
           
            <nav className={css.navigation}>
                <li className={css.navitem}>
                    <a href="" className={css.navitemlink}>About us</a>
                    </li>
                <li className={css.navitem}>
                    <a href="" className={css.navitemlink}>Services</a>
                    </li>
                <li className={css.navitem}>
                    <a href="" className={css.navitemlink}>Use Cases</a>
                    </li>
                <li className={css.navitem}>
                    <a href="" className={css.navitemlink}>Pricing</a>
                    </li>
                <li className={css.navitem}>
                    <a href="" className={css.navitemlink}>Blog</a>
                    </li>
            </nav>
        <button className={css.headerbtn}>Request a quote</button>

        </header>
    )
}
export default Header;