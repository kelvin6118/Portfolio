import React from 'react';
import './style.css';

const Experience_Card = ({logo, title, time, description, company}) => {
    return<>
    <div className='Ex_Card'>
            <div className='Ex_Card_Header'>
                <img className='job-logo' src={logo}></img>
                <div className="job">
                    <h2 className='company'>{company}</h2>
                    <h3 className='job-title'>{title}</h3>
                    <p className='job-period'>{time}</p>
                    </div>
            </div>
            <p className='job-description'>
                {description}
            </p>
        </div>
    </>
}

export default Experience_Card;
