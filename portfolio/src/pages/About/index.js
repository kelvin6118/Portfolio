import React, {useState} from 'react';
import { Background } from '../../components';
import './style.css';

const About = () => {
    const [information, setinformation] = useState();

    const Content = (information) => {
        switch(information){
            case 'e':
                return<>
                    <div id='about-content'>
                        <p>my experience is </p>
                    </div>
                </>
            case 'h':
                return<>
                    <div id='about-content'>
                        <p>my hard skills are </p>
                    </div>
                </>
            case 's':
                return<>
                    <div id='about-content'>
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
