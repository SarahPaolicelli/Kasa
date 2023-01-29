import React, { useState } from 'react' ;
import vectorBottom from '../Assets/vectorBottom.png'
import vectorTop from '../Assets/vectorTop.png'


function Collapse(props) {
    const section = props.value;
    const name = props.name;

    const [visibleSection, setVisibleSection] = useState(true);
    const clickBtn = entry => {
        if (entry === visibleSection) {
            setVisibleSection('')
        } else {
            setVisibleSection(entry)
        }
    }

    return (
        <div className='container-value'>
            <h3 className='title-sectionValue btn' onClick={() => clickBtn(section)} >
                {name}
                <div className='container-vector'>
                    { visibleSection === section && <img src={vectorTop} alt='une fleche' className='vector' />}
                    { visibleSection !== section && <img src={vectorBottom} alt='une fleche' className='vector' />}
                </div>
            </h3>
            { visibleSection === section && <div className="content">{section}</div>}
        </div>
    )

}

export default Collapse;