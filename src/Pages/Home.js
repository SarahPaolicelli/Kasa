import { Link } from 'react-router-dom'

import Header from '../Components/Header.js';
import Banner from '../Components/Banner.js';
import Card from '../Components/Card.js';


function Home() {
    return (
        <div>     
        	<Header/>
            <Banner/>      
            <Card/>
        </div>
    )
}

export default Home;
