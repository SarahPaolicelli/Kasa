import '../Styles/SectionValue.css'
import React, { useState } from 'react' ;
import { values } from '../Datas/values';
import vectorBottom from '../Assets/vectorBottom.png'

function SectionValue() {

    const [isContentVisible, setIsContentVisible] = useState(true);
    const clickBtn = entry => {
    	if (isContentVisible === true) {
      		setIsContentVisible(false) 
    	} else {
      		setIsContentVisible(true)  
    	}
}
    
    return(
        values.map((value) => (
            <div key={value.title} className='container-value'>
                <h3 className='title-sectionValue btn' >{value.title}
                    <div className='container-vector'>
                        <img src={vectorBottom} alt='une fleche' className='vector' onClick={() => clickBtn()}/>
                    </div>
                </h3>
                { isContentVisible && <div className="content">{value.description}</div>}
            </div>
    )))
}

export default SectionValue;