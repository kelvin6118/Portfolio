import React from 'react';
import { Background, Project_Card} from '../../components';
import "./style.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import squiz from "../../media/projects/squiz_project.PNG"
import habbitTracker from "../../media/projects/habbitTracker.PNG"
import sqiozLogo from "../../media/projects/squizLogo.png"
import habbitTrackerLogo from "../../media/projects/habitrackLogo.png"
import fpSecrets from "../../media/projects/fpSecrets.PNG"
import fpSecretsLogo from "../../media/projects/fpSecretsLogo.png"
import bullHorn from "../../media/projects/bullHorn.PNG"
import bullHornLogo from "../../media/projects/bullHornLogo.png"

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
                appName="Squiz"
                screenShot={squiz}
                description={<p className='project_description'>Online quiz game where users can start a quiz and compete with other players to see who knows the most trivia<br></br>The host creates the game, choosing player number, question category, question number, and difficulty level</p>}
                github="https://github.com/kelvin6118/squiz"
                link="https://squiz-your-brain.netlify.app/"
                logo={sqiozLogo}
                />
                <Project_Card
                appName="Habbit Tracker"
                screenShot={habbitTracker}
                description={<p className='project_description'>User can register and login to a personal dashboard. In the dashboard, user can define what habit to track with a given time and period. Once the user have completed a habit they can record on the dashboard and it will marked on the calendar.<br></br>
                <br></br>
                *note that the deployed link is not functional since we haven't successfully deploy the backend service. Therefore if you want to experience the full functional app please clone the git repo and follow the instruction.
                </p>}
                github="https://github.com/kelvin6118/D-WAG-Project"
                link="https://whimsical-sundae-fe27ab.netlify.app/"
                logo={habbitTrackerLogo}
                />
                <Project_Card
                appName="Futureproof Secrets"
                screenShot={fpSecrets}
                description={<p className='project_description'>User create post anonymously, with a post title, description and a giphy choice.
                <br></br>
                This post is visible to all other user on the site. Other user can comment under the post and give emoji reaction to the post.
                </p>}
                github="https://github.com/rakib2067/rook-journal-app"
                link="https://futureproof-secrets.netlify.app/"
                logo={fpSecretsLogo}
                />
                <Project_Card
                appName="BullHorn"
                screenShot={bullHorn}
                description={<p className='project_description'>A Twitter like app, where user are able to post audio media instead of text messages.
                <br></br>
                User are able to follow each others, add friends so that their most updated post will show on the home feed.
                </p>}
                github="https://github.com/Graingertom/LAP4Project"
                link="https://vast-tundra-28650.herokuapp.com/"
                logo={bullHornLogo}
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
