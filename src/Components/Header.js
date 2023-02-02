import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png'

import '../Styles/Header.css'

function Header() {
    return (
        <div className='kasa-banner'>
            <img src={logo} alt='Kasa écrit en rouge avec une maison à la place du premier A' className='kasa-logo' />
            <ul className='menuNav'>
                <li className='menuPuce'><NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : "nonActiveLink"}>Accueil</NavLink></li>
                <li className='menuPuce'><NavLink to="/About" className={({ isActive }) => isActive ? "activeLink" : "nonActiveLink"}>A Propos</NavLink></li>
            </ul>
        </div>
    )
  }

  export default Header;