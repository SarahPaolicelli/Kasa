import Header from '../Components/Header.js';
import BannerBis from '../Components/BannerBis.js';
import SectionValue from '../Components/SectionValue.js';
import Footer from '../Components/Footer.js';

function About() {
    return (
        <div className="app-container">     
        	<Header/>
            <main>
                <BannerBis/>
                <SectionValue/>
            </main>
            <Footer/>
        </div>
    )
}

export default About;