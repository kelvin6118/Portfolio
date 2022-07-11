import React from 'react';
import './style.css';

const Experience_Card = ({logo, title, time, description}) => {
    return<>
    <div className='Ex_Card'>
            <div className='Ex_Card_Header'>
                <img className='job-logo' src={logo}></img>
                <div className="job">
                    <h2 className='job-title'>{title}</h2>
                    <p className='job-period'>{time}</p>
                    </div>
            </div>
            {description}
        </div>
    </>
}

export default Experience_Card;
