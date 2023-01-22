import { useParams } from 'react-router-dom';
import list from '../Datas/list.json';
import Rating from './Rating';
import '../Styles/Appart.css'
import SectionValue from './SectionValue';

function AppartDetail () {

    const {id} = useParams();
    const target = list.find(appart => appart.id === id )

        return(
            <div className='container'>

                <ul className='container-pictures'>{target.pictures.map((picture, index) =>  (
                    <li key={`${picture}-${index}`}>
                        <img src={picture} alt='appart' />
                    </li>))}
                </ul>

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

                    <div>
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

                <div className='container-collapse'>

                    <div className='container-value appart-collapse'>
                        <h3 className='title-sectionValue btn'>
                            Description
                        </h3>
                        <p className="content">
                            {target.description}
                        </p>
                    </div>

                    <div className='container-value appart-collapse'>
                        <h3 className='title-sectionValue btn'>
                            Equipements
                        </h3>
                        <ul className="content">{target.equipments.map((equipment, index) =>  (
                            <li key={`${equipment}-${index}`} className='li-equip'>
                                {equipment}
                            </li>))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        )                           
            
}
        
export default AppartDetail;