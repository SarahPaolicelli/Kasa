import logoWhite from '../Assets/logoWhite.png'

import '../Styles/Footer.css'

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logoWhite} alt='Kasa écrit en blanc avec une maison à la place du premier A' className='kasa-logoWhite' />
            <p className="footer-right">© 2020 Kasa. All rights reserved</p>
        </div>
    )
  }

  export default Footer;