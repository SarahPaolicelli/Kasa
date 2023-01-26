import "../Styles/Slider.css";
import vectorLeft from '../Assets/vectorLeft.png';
import vectorRight from '../Assets/vectorRight.png';

function Slider(props) {
    const pictures = props.pictures;
    let num = 0;

        const changeSlide = direction => {
            num = num + direction ;
            if (num < 0)
                num = pictures.length - 1
                console.log(num)
                console.log(pictures[num])

            if (num > pictures.length - 1)
                num = 0;
        }

    return (
        <div className="slider">
            <img className='slide' alt="logement" src = {pictures[num]} />
            <img src={vectorLeft} alt="fleche vers la gauche" className="vectorLeft" onClick={() => changeSlide(-1)} />
            <img src={vectorRight} alt="fleche vers la droite" className="vectorRight" onClick={() => changeSlide(1)} /> 
        </div>
    )
}

export default Slider;