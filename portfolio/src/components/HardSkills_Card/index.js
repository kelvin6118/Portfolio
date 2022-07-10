import React from 'react';
import './style.css';

const HardSkills_Card = ({logo, description}) => {
    return<>
        <div className='HS_Card'>
            <img className='HS_img' src={logo}/>
            <section className='skills-description'>
                {description}
            </section>
        </div>
    </>
}

export default HardSkills_Card;
