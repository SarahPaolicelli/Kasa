import { Link } from 'react-router-dom';
import { list } from '../Datas/list';
import '../Styles/Card.css';

function Card() {
    return (
            list.map((appart) => (
                <div key={appart.id} className='card'>
                    <Link key={appart.id} to={ '/Appart/' + appart.id }>
                        <img className="img-loc" src={appart.cover} alt="logement" />
                        <div className='title-loc'>{appart.title} </div>
                    </Link>
                </div>
            )) 
    )
  }

  export default Card;