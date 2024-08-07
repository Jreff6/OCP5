import './collapse.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <FontAwesomeIcon icon={faChevronUp} className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}/> 
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
export default Collapse;