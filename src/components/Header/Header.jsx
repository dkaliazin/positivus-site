import css from './Header.module.css';
import logo from '../../assets/logo.svg';
const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} alt="positivus logo" className={css.logo}></img>
            <h1 className={css.headerpositivus}>Positivus</h1>
            <ul className={css.navigation}>
                <li className={css.navitem}>About us</li>
                <li className={css.navitem}>Services</li>
                <li className={css.navitem}>Use Cases</li>
                <li className={css.navitem}>Pricing</li>
                <li className={css.navitem}>Blog</li>
            </ul>
        <button>Request a quote</button>

        </header>
    )
}
export default Header;