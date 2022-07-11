import React from 'react';
import './style.css';
const HardSkill_Card = ({logo, name}) => {
    return<>
        <div className='HS_Card'>
            <tooltip className='skill-name' title={name}>
                <img className='HS_img' src={logo}/>
            </tooltip>
        </div>
    </>
}

export default HardSkill_Card;
