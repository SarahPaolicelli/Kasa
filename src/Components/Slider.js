import "../Styles/Slider.css";
import React, { useState } from 'react' ;
import vectorLeft from '../Assets/vectorLeft.png';
import vectorRight from '../Assets/vectorRight.png';

function Slider(props) {
    const pictures = props.pictures;
    const [num, setNum] = useState(0);

        const changeSlide = direction => {
            let number = num + direction ;
            if (number < 0){
                number = pictures.length - 1
            }

            if (number > pictures.length - 1){
                number = 0;
            }
            setNum (number)
        }

    return (
        <div className="slider">
            <img className='slide' alt="logement" src={pictures[num]} />
            <img src={vectorLeft} alt="fleche vers la gauche" className="vectorLeft" onClick={() => changeSlide(-1)} />
            <img src={vectorRight} alt="fleche vers la droite" className="vectorRight" onClick={() => changeSlide(1)} />
            <div className="compteur">{num + 1}/{pictures.length}</div> 
        </div>
    )
}

export default Slider;