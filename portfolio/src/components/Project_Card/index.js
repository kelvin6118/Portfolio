import React from 'react';
import './style.css';



const Project_Card = ({screenShot,description, github, link}) => {
    return<>
        <div className='project_card'>
            <img className='project_img' src={screenShot}/>
            <div className='overlay'>
                <div className="project_content">
                    {description}
                    <a className='project_link' href={github}> git repo</a>
                    <a className='project_link' href={link}> app link</a>
                </div>
            </div>
        </div>
    </>
}

export default Project_Card;
