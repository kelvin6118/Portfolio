import React, {useState} from 'react';
import { Background, Experience_Card, HardSkills_Card } from '../../components';
import './style.css';
import FPlogo from "../../media/futureproof.png";
import GPlogo from "../../media/grassroots.jpg";
import Reactlogo from "../../media/react.png";
import SQLlogo from "../../media/postgresql.png";
import HTMLlogo from "../../media/html.png";
import CSSlogo from "../../media/css.png";
import JSlogo from "../../media/javascript.png";
import DJlogo from "../../media/django.png";
import EXlogo from "../../media/express.png"
import Jestlogo from "../../media/jest.png"
import Pythonlogo from "../../media/python.png"
import Javalogo from "../../media/java.png"

const About = () => {
    const [information, setinformation] = useState();

    const Content = (information) => {
        switch(information){
            case 'e':
                return<>
                    <div id='experience-content'>
                        <Experience_Card
                        logo = {FPlogo}
                        title = "Trainee Full-Stack Developer"
                        time = "Feb 2022 - current"
                        description= {<p className='job-description'>
                            Trained by FutureProof through intensive courses. Learnt to be a fullstack software engineer. Front-end UI, API, Database, SQL, TDD methodology, agile development, version control, Docker etc.<br></br>
                            Throughout the training, we mainly use javascript and python programming language. They have given us many opportunities to experience a full project cycle in an agile environment, from planning to presentation. I have gained numerous knowledge of software infrastructure and how to be a full-stack engineer.</p>}
                        />
                        <Experience_Card
                        logo = {GPlogo}
                        title = "Volunteer web designer"
                        time = "Apr 2021 - Feb 2022"
                        description={<p className='job-description'>
                            Work as a volunteer web designer at Grassroot whos design and makes websites for different charity client. Experienced with getting client requirement, planning, teamwork, research and presentation. The tool we've use to make the website is by using Elementor.
                        </p>}
                        />
                    </div>
                </>
            case 'h':
                return<>
                    <div id='hardskills-content'>
                        <HardSkills_Card
                        logo = {Reactlogo}
                        name = "React"
                        />
                        <HardSkills_Card
                        logo = {SQLlogo}
                        name = "PostgreSQL"
                        />
                        <HardSkills_Card
                        logo = {HTMLlogo}
                        name = "html"
                        />
                        <HardSkills_Card
                        logo = {CSSlogo}
                        name = "CSS"
                        />
                        <HardSkills_Card
                        logo = {JSlogo}
                        name = "Javascript"
                        />
                        <HardSkills_Card
                        logo = {DJlogo}
                        name = "Django"
                        />
                        <HardSkills_Card
                        logo = {EXlogo}
                        name = "Express"
                        />
                        <HardSkills_Card
                        logo = {Jestlogo}
                        name = "Jest"
                        />
                        <HardSkills_Card
                        logo = {Pythonlogo}
                        name = "Python"
                        />
                        <HardSkills_Card
                        logo = {Javalogo}
                        name = "Java"
                        />
                    </div>
                </>
            case 's':
                return<>
                    <div id='softskills-content'>
                    <p>my soft skills are </p>
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
