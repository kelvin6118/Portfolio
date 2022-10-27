import React, {useEffect, useState} from 'react';
import { Background, Experience_Card, HardSkill_Card, CubeCom, SoftSkill} from '../../components';
import useContentful from '../../useContentful';
import './style.css';
import Reactlogo from "../../media/hardskills/react.png";
import SQLlogo from "../../media/hardskills/postgresql.png";
import HTMLlogo from "../../media/hardskills/html.png";
import CSSlogo from "../../media/hardskills/css.png";
import JSlogo from "../../media/hardskills/javascript.png";
import DJlogo from "../../media/hardskills/django.png";
import EXlogo from "../../media/hardskills/express.png"
import Jestlogo from "../../media/hardskills/jest.png"
import Pythonlogo from "../../media/hardskills/python.png"
import Javalogo from "../../media/hardskills/java.png"
import Dockerlogo from "../../media/hardskills/docker.png"
import Mongologo from "../../media/hardskills/mongodb.png"
import Reduxlogo from "../../media/hardskills/redux.png"
import Bootstraplogo from "../../media/hardskills/bootstrap.png"
import Netlifylogo from "../../media/hardskills/netlify.png"
import Herokulogo from "../../media/hardskills/heroku.png"
import { ExperienceItems } from './ExperienceItems';

const Message = () => {
    return<div className='message' id='about-message'>
        <p>
            I am a full-stack developer who recently trained by FutureProof.
            I am really passionate into programming. It's because I like to solve challenging problems. <br></br>
            <br></br>
            I want to be a full-stack software engineer because I like both frontend and backend. Frontend allow me to be more creative and backend is more about solving problems which I am also found interested.
        </p>
        <br></br>
        <p>What to know more about me?</p>
        <div id="about-buttons">
            <a href='#skills-section' id='about-button'>Experiences</a>
            <a href='#skills-section' id='about-button'>Hard skills</a>
            <a href='#skills-section' id='about-button'>Soft skills</a>
        </div>
    </div>
}

const Skills = (skills) => {
    return <section id='skills-section'>
        {
            skills.skills.map(item => {
                let image = item.fields.image.fields.file.url;
                let name = item.fields.name;
                return <HardSkill_Card logo={image} name={name}/>
            })
        }
    </section>
}

const Experience = () => {
    return <section id='experience-section'>
            {ExperienceItems.map((item) => {
                return <Experience_Card
                logo = {item.logo}
                company = {item.company}
                title = {item.title}
                time = {item.time}
                description= {item.description}
                />
            })}
        </section>

}



const About = (skills) => {

    const Content = (information) => {
        switch(information){
            case 's':
                let front = () => {
                    return<>
                    <h1 className='softSkill-type'>Time management</h1>
                    <SoftSkill skill="Stress Management"/>
                    <SoftSkill skill="Multitasking"/>
                    <SoftSkill skill="Planning"/>
                    <SoftSkill skill="Meeting deadlines"/>
                    </>
                }
                let back = () => {
                    return<>
                    <h1 className='softSkill-type'>Communication</h1>
                    <SoftSkill skill="Active Listening"/>
                    <SoftSkill skill="Feedback"/>
                    <SoftSkill skill="Respect"/>
                    <SoftSkill skill="Honesty"/>
                    <SoftSkill skill="Presentation"/>
                    </>
                }
                let left = () => {
                    return<>
                    <h1 className='softSkill-type'>Problems Solving</h1>
                    <SoftSkill skill="Analysis"/>
                    <SoftSkill skill="Strategic thinking"/>
                    <SoftSkill skill="Research"/>
                    <SoftSkill skill="Observation"/>
                    <SoftSkill skill="Decision making"/>
                    </>
                }
                let right = () => {
                    return<>
                    <h1 className='softSkill-type'>Project Management</h1>
                    <SoftSkill skill="Goal setting"/>
                    <SoftSkill skill="Prioritizing"/>
                    <SoftSkill skill="Resource management"/>
                    <SoftSkill skill="Agile"/>
                    </>
                }
                let top = () => {
                    return<>
                    <h1 className='softSkill-type'>Teamwork</h1>
                    <SoftSkill skill="Collaboration"/>
                    <SoftSkill skill="Coordination"/>
                    <SoftSkill skill="Self-awareness"/>
                    <SoftSkill skill="Pair-Programming"/>
                    </>
                }
                let bottom = () => {
                    return<>
                    <h1 className='softSkill-type'>Work Ethic </h1>
                    <SoftSkill skill="Responsibility"/>
                    <SoftSkill skill="Discipline"/>
                    <SoftSkill skill="Commitment"/>
                    <SoftSkill skill="Professionalism"/>
                    </>
                }
                return<>
                    <div id='softskills-content'>
                        <CubeCom 
                            front={front()}
                            back={back()}
                            left={left()}
                            right={right()}
                            top={top()}
                            bottom={bottom()}
                        />
                        
                    </div>
                 </>
        }
    }


    return<main id='about-container'>
    {Message()}
    {Skills(skills)}
    {Experience()}
    </main>
}
export default About;
