import { Link } from 'react-router-dom';
import '../Styles/Card.css';

const Card = ({ appart }) => {
    return (
        <Link key={appart.id} to={ '/Appart/' + appart.id } className="link">
            <div key={appart.id} className='card'>
                <img className="img-loc" src={appart.cover} alt="logement" />
                <div className='title-loc'>{appart.title} </div>
            </div>
        </Link>        
    )
}
        
export default Card;