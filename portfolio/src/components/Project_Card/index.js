import React from 'react';
import "./style.css"
import Github from '../../media/contact/github.png';
import Link from '../../media/contact/link.png';
import HardSkill_Card from '../HardSkill_Card';



const Project_Card = ({screenShot,description, github, link, appName, techStack}) => {
    return<>
        <div className='project_card'>
            <img className='project_img' src={screenShot}/>
            <div className='overlay'>
                <div className="project_content">
                    <h2>{appName}</h2>
                    {description}
                    <a href={github}> <img className='project_link' src={Github}/></a>
                    <a href={link}> <img className='project_link' src={Link}/></a>
                </div>
            </div>
        </div>
        <h3>Tech Stack:</h3>
            <div className='techStack'>
                {techStack.map((skill)=>{
                    return<HardSkill_Card logo={skill.fields.image.fields.file.url} name={skill.fields.name}/>
                })}
            </div>
    </>
}

export default Project_Card;
