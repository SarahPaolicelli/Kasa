import { useParams } from 'react-router-dom'
//import React, { useState } from 'react' ;
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import '../Styles/Appart.css'

function Appart() {
    const {id} = useParams()
    return (
        <div>     
        	<Header/>
            {id}
            <Footer/>
        </div>
    )
}



export default Appart;