import React from 'react';
import { Background, Project_Card} from '../../components';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import squiz from "../../media/projects/squiz_project.PNG"
import habbitTracker from "../../media/projects/habbitTracker.PNG"
import sqiozLogo from "../../media/projects/squizLogo.png"
import habbitTrackerLogo from "../../media/projects/habitrackLogo.png"

const Content = () => {
    const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

    return<>
        <div id='project-container'>
            <Carousel responsive={responsive} itemClass="carousel-item">
                <Project_Card
                screenShot={squiz}
                description={<p className='project_description'>Online quiz game where users can start a quiz and compete with other players to see who knows the most trivia<br></br>The host creates the game, choosing player number, question category, question number, and difficulty level</p>}
                github="https://github.com/kelvin6118/squiz"
                link="https://squiz-your-brain.netlify.app/"
                logo={sqiozLogo}
                />
                <Project_Card
                screenShot={habbitTracker}
                description={<p>User can register and login to a personal dashboard. In the dashboard, user can define what habit to track with a given time and period. Once the user have completed a habit they can record on the dashboard and it will marked on the calendar.<br></br>
                <br></br>
                *note that the deployed link is not functional since we haven't successfully deploy the backend service. Therefore if you want to experience the full functional app please clone the git repo and follow the instruction.
                </p>}
                github="https://github.com/kelvin6118/D-WAG-Project"
                link="https://whimsical-sundae-fe27ab.netlify.app/"
                logo={habbitTrackerLogo}
                />
            </Carousel>
            
        </div>
    </>
}

const Message = () => {
    return<>
    <p>
        Welcome to my project collection.<br></br>
        I've display some of my previous project for you to take a look.
        <br></br><br></br>
        Hover on the image and you will see the app description along with two icon which takes you to the project git repository and the app.
        <br></br><br></br>
        Have fun!
    </p>
    </>
}

const Projects = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default Projects;
