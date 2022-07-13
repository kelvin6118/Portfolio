import React, {useState} from 'react';
import { Background, Experience_Card, HardSkill_Card, CubeCom, SoftSkill} from '../../components';
import './style.css';
import FPlogo from "../../media/experiences/futureproof.png";
import GPlogo from "../../media/experiences/grassroots.jpg";
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

const About = () => {
    const [information, setinformation] = useState();

    const Content = (information) => {
        switch(information){
            case 'e':
                return<>
                    <div id='experience-content'>
                        <Experience_Card
                        logo = {FPlogo}
                        company = "Furureproof"
                        title = "Trainee Full-Stack Developer"
                        time = "Feb 2022 - current"
                        description= {<p className='job-description'>
                            Trained by FutureProof through intensive courses. Learnt to be a fullstack software engineer. Front-end UI, API, Database, SQL, TDD methodology, agile development, version control, Docker etc.<br></br>
                            Throughout the training, we mainly use javascript and python programming language. They have given us many opportunities to experience a full project cycle in an agile environment, from planning to presentation. I have gained numerous knowledge of software infrastructure and how to be a full-stack engineer.</p>}
                        />
                        <Experience_Card
                        company="GrassrootsWeb"
                        logo = {GPlogo}
                        title = "Volunteer web designer"
                        time = "Apr 2021 - Feb 2022"
                        description={<p className='job-description'>
                            Work as a volunteer web designer at Grassroots whos design and makes websites for different charity client. Experienced with getting client requirement, planning, teamwork, research and presentation. The tool we've use to make the website is by using Elementor.
                        </p>}
                        />
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
                return<>
                    <div id='softskills-content'>
                        <CubeCom 
                            front={
                                <SoftSkill
                                skill = "teamwork"
                                />
                            }
                            back={
                                <SoftSkill 
                                skill="teamwork"
                                />
                            }
                            left={
                                <SoftSkill skill="teamwork"/>
                            }
                            right={
                                <SoftSkill skill="teamwork"/>
                            }
                            top={
                                <SoftSkill skill="teamwork"/>
                            }
                            bottom={
                                <SoftSkill skill="teamwork"/>
                            }
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
