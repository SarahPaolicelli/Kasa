//import { Link } from 'react-router-dom'

import Header from '../Components/Header.js';
import Banner from '../Components/Banner.js';
import Card from '../Components/Card.js';
import Footer from '../Components/Footer.js';
import "../Styles/Home.css"


function Home() {
    return (
        <div>     
        	<Header/>
            <Banner/>
            <div className='content-cards'>
                <Card/>
            </div>
            <Footer/>      
            
        </div>
    )
} 

export default Home;
