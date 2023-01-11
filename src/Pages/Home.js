
import { Link } from 'react-router-dom'

import Header from '../Components/Header.js';


function Home() {
    return (
        <div>     
        	<Header/>       
            <h1>La liste des biens</h1>
            <ul>
                <li>

                <Link to="/property/1">Bien 1</Link>
                <Link to="/property/2">Bien 2</Link>
                <Link to="/property/3">Bien 3</Link>

                </li>
            </ul>
        </div>
    )
}

export default Home;
