import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import '../Styles/NotFound.css'

function NotFound() {
    return (
        <div>     
            <Header/>       
        	<h1>404</h1>
            <p className="notfound">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to ="/" className="link-back">Retourner sur la page d'accueil</Link>
            <Footer/>
        </div>
    )
}

export default NotFound;