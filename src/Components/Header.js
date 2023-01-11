import logo from '../Assets/logo.png'

function Header() {
    return (
        <div className='kasa-banner'>
            <img src={logo} alt='Kasa écrit en rouge avec une mpaison à la place du premier A' className='kasa-logo' />
            <ul>
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </div>
    )
  }

  export default Header;