import '../Styles/SectionValue.css'
import { values } from '../Datas/values';
import Collapse from './Collapse';

function SectionValue() {   
    return(        
        values.map((value) => (
            <Collapse value={value.description} name={value.title} key={value.title}/>))
    )
}

export default SectionValue;