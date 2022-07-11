import React from 'react';
import './style.css';
import Github from '../../media/contact/github.png';



const Project_Card = ({screenShot,description, github, link, logo, appName}) => {
    return<>
        <div className='project_card'>
            <img className='project_img' src={screenShot}/>
            <div className='overlay'>
                <div className="project_content">
                    <h2>{appName}</h2>
                    {description}
                    <a href={github}> <img className='project_link' src={Github}/></a>
                    <a href={link}> <img className='project_link' src={logo}/></a>
                </div>
            </div>
        </div>
    </>
}

export default Project_Card;
