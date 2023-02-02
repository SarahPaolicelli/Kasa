import { useParams, Navigate} from 'react-router-dom';
import list from '../Datas/list.json';
import Rating from './Rating';
import Slider from './Slider';
import Collapse from './Collapse';
import '../Styles/Appart.css';
import React from 'react';

function AppartDetail () {

    const {id} = useParams();
    const target = list.find(appart => appart.id === id )

        if (target === undefined){  
            return <Navigate to="*"/>
        }

    return(
        <div className='container'>

            <div className="container-pictures">
                <Slider pictures={target.pictures} />
            </div>
                
            <div className='container-topLevel'>

                <div className='container-mainInfo'>
                    <h1>{target.title}</h1>
                    <p>{target.location}</p>
                    <ul>{target.tags.map((tag, index) =>  (
                        <li key={`${tag}-${index}`} className='li-tag'>
                            {tag}
                        </li>))}
                    </ul>
                </div>

                <div className='hostRating'>
                    <div className='container-host'>
                        <div className='host-name'>
                            {target.host.name}
                        </div>
                        <div className='host-pic'>
                            <img src={target.host.picture} alt='loueu.r.se du logement'/>
                        </div>
                    </div>
                    <Rating value={target.rating} />
                </div>

            </div>

            <div className='appart-collapse'>
                <Collapse value={target.description} name="Description" />
                <Collapse value={target.equipments.map((equipment, index) => (<div key={`${equipment}-${index}`} className='li-equip'>{equipment}</div>))} name="Equipements"/>    
            </div>

        </div>
    )                           
            
}
        
export default AppartDetail;