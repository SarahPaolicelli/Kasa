
import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';

import Style from '../Styles/NotFound.css'

function NotFound() {
    return (
        <div>     
            <Header/>       
        	<h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to ="">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound;