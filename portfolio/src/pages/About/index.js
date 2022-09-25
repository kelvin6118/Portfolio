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

const About = () => {
    const [information, setinformation] = useState();
    const [skills, setSkills] = useState();
    const {getSkills} = useContentful();

    const Content = (information) => {
        switch(information){
            case 'e':
                return<>
                    <div id='experience-content'>
                        {ExperienceItems.map((item) => {
                            return <Experience_Card
                            logo = {item.logo}
                            company = {item.company}
                            title = {item.title}
                            time = {item.time}
                            description= {item.description}
                            />
                        })}
                       
                        
                    </div>
                </>
            case 'h':
                return<>
                    <div id='hardskills-content'>
                        <h3 className='skills-type'>Frontend Skills</h3>
                        <div className='skills-div' id='frontend-skills'>
                            <HardSkill_Card
                            logo = {Reactlogo}
                            name = "React"
                            />
                            <HardSkill_Card
                            logo = {Reduxlogo}
                            name = "Redux"
                            />
                            <HardSkill_Card
                            logo = {HTMLlogo}
                            name = "html"
                            />
                            <HardSkill_Card
                            logo = {CSSlogo}
                            name = "CSS"
                            />
                            <HardSkill_Card
                            logo = {Bootstraplogo}
                            name = "Bootstrap"
                            />
                        </div>
                        <h3 className='skills-type'>Backend Skills</h3>
                        <div className='skills-div' id='backend-skills'>
                            
                            <HardSkill_Card
                            logo = {DJlogo}
                            name = "Django"
                            />
                            <HardSkill_Card
                            logo = {EXlogo}
                            name = "Express"
                            />
                        </div>
                        <h3 className='skills-type'>Database</h3>
                        <div className='skills-div' id='database'>
                            <HardSkill_Card
                            logo = {SQLlogo}
                            name = "PostgreSQL"
                            />
                            <HardSkill_Card
                            logo = {Mongologo}
                            name = "MongoDB"
                            />
                        </div>
                        <h3 className='skills-type'>Programming Language</h3>
                        <div className='skills-div' id='language-skills'>
                            <HardSkill_Card
                            logo = {JSlogo}
                            name = "Javascript"
                            />
                            <HardSkill_Card
                            logo = {Pythonlogo}
                            name = "Python"
                            />
                            <HardSkill_Card
                            logo = {Javalogo}
                            name = "Java"
                            />
                            <HardSkill_Card
                            logo = {Dockerlogo}
                            name = "Docker"
                            />
                        </div>
                        <h3 className='skills-type'>Testing</h3>
                        <div className='skills-div' id='testing-skills'>
                            <HardSkill_Card
                            logo = {Jestlogo}
                            name = "Jest"
                            />
                        </div>
                        <h3 className='skills-type'>Deployment</h3>
                        <div className='skills-div' id='testing-skills'>
                            <HardSkill_Card
                            logo = {Netlifylogo}
                            name = "Netlify"
                            />
                            <HardSkill_Card
                            logo = {Herokulogo}
                            name = "Heroku"
                            />
                        </div>
                    </div>
                </>
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

    const Message = () => {
        const ehandleClick = () =>{
            setinformation('e')
        }
        const hhandleClick = () =>{
            setinformation('h')
        }
        const shandleClick = () =>{
            setinformation('s')
        }
        return<>
            <p>
                I am a full-stack developer who recently trained by FutureProof.
                I am really passionate into programming. It's because I like to solve challenging problems. <br></br>
                <br></br>
                I want to be a full-stack software engineer because I like both frontend and backend. Frontend allow me to be more creative and backend is more about solving problems which I am also found interested.
            </p>
            <br></br>
            <p>What to know more about me?</p>
            <div id="about-buttons">
                
                <button onClick={ehandleClick}>Experiences</button>
                <button onClick={hhandleClick}>Hard skills</button>
                <button onClick={shandleClick}>Soft skills</button>
            </div>
        </>
    }


    return<>
    <Background Content={Content(information)} Message={Message()}/>
    </>
}
export default About;
