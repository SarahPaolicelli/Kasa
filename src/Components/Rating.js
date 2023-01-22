import starPink from '../Assets/starPink.png';
import starGrey from '../Assets/starGrey.png';

function Rating(props) {
    const value = props.value;

    const range = [1, 2, 3, 4, 5];
    return (
        <div className='container-star'>
            {range.map((rangeElem) =>
                value >= rangeElem ? <div key={rangeElem.toString()} className='star'><img src={starPink} alt='étoile rose'/></div> : <div key={rangeElem.toString()}><img src={starGrey} alt='étoile grise'/></div>
            )}
        </div>
    )
}

export default Rating;