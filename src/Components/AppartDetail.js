import { useParams } from 'react-router-dom';
import list from '../Datas/list.json';
import Rating from './Rating';
import Slider from './Slider';
import '../Styles/Appart.css';
import React, { useState } from 'react' ;
import vectorBottom from '../Assets/vectorBottom.png'
import vectorTop from '../Assets/vectorTop.png'

function AppartDetail () {

    const [visibleSection, setVisibleSection] = useState(true);
    const clickBtn = entry => {
        if (entry === visibleSection) {
            setVisibleSection('')
        } else {
            setVisibleSection(entry)
        }
    }

    const {id} = useParams();
    const target = list.find(appart => appart.id === id )

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

                <div className='container-collapse'>

                    <div className='container-value appart-collapse'>
                        <h3 className='title-sectionValue btn desc' onClick={() => clickBtn(target.description)} >
                            Description
                            <div className='container-vector'>
                                { visibleSection === target.description && <img src={vectorTop} alt='une fleche' className='vector' />}
                                { visibleSection !== target.description && <img src={vectorBottom} alt='une fleche' className='vector' />}
                            </div>
                        </h3>
                        { visibleSection === target.description && <p className="content">
                            {target.description}
                        </p>}
                    </div>

                    <div className='container-value appart-collapse'>
                        <h3 className='title-sectionValue btn equip' onClick={() => clickBtn(target.equipments)}>
                            Equipements
                            <div className='container-vector'>
                                { visibleSection === target.equipments && <img src={vectorTop} alt='une fleche' className='vector' />}
                                { visibleSection !== target.equipments && <img src={vectorBottom} alt='une fleche' className='vector' />}
                            </div>
                        </h3>
                        { visibleSection === target.equipments && <ul className="content">{target.equipments.map((equipment, index) =>  (
                            <li key={`${equipment}-${index}`} className='li-equip'>
                                {equipment}
                            </li>))}
                        </ul>}
                    </div>
                    
                </div>
            </div>
        )                           
            
}
        
export default AppartDetail;