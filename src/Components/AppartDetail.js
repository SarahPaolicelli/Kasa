import { useParams } from 'react-router-dom';
import list from '../Datas/list.json';

function AppartDetail () {

    const {id} = useParams();
    const target = list.find(appart => appart.id === id )

        return(
            <div className='container'>

                <div className='container-pictures'>
                    {target.pictures.map((picture) =>  (
                        <li>
                            <img src={picture} />
                        </li>
                    ))}
                </div>

                <h1>{target.title}</h1>

                <p>{target.location}</p>

                <div>{target.tags.map((tag) =>  (<li>{tag}</li>))}</div>

                <div>{target.rating}</div>

                <div className='host'>
                    <div>{target.host.name}</div>
                    <div>
                        <img src={target.host.picture} alt='loueu.r.se du logement'/>
                    </div>
                </div>

                <div className='container-section'>
                    <h3>
                        Description
                    </h3>
                    <p>
                        {target.description}
                    </p>
                </div>

                <div className='container-section'>
                    <h3>
                        Equipements
                    </h3>
                    <ul>
                        {target.equipments.map((equipment) =>  (<li>{equipment}</li>))}
                    </ul>
                </div>
            </div>
        )                           
            
}
        
export default AppartDetail;