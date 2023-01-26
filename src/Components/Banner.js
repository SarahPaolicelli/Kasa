import banner from "../Assets/banner.png"
import "../Styles/Banner.css"

function Banner () {
    return (
        <div className="container-banner">
            <img src={banner} alt="des montagnes" className="banner"/>
            <div className="banner-txt">Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default Banner;