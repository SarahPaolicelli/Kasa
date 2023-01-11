import { Link } from 'react-router-dom';
import { list } from '../Datas/list';

import Style from '../Styles/Card.css'


function Card() {
    return (
        <div className='content-card'>
            <ul className='card'>
                {list.map((appart) => (
                    <li key={appart.id}>{appart}</li>
                ))}
            </ul>
        </div>
    )
  }

  export default Card;