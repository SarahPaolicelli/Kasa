//import { Link } from 'react-router-dom';
import { list } from '../Datas/list';
import '../Styles/Card.css';

function Card() {
    return (
        <div className='content-cards'>
            <ul className='list-cards'>
                {list.map((appart) => (
                    <li key={appart.id} class='card'>
                        <img className="img-loc" src={appart.cover} alt="logement" />
                        <div className='title-loc'>{appart.title} </div>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

  export default Card;