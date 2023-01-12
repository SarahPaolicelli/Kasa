import banner from "../Assets/banner.png"
import "../Styles/Banner.css"

function Banner () {
    return (
            <div className='container-banner'>
                <img src={banner} className="banner" alt="une foret"/>
            </div>
    )
}

export default Banner;