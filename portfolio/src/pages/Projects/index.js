import React from 'react';
import { Background, Project_Card} from '../../components';
import squiz from "../../media/projects/squiz_project.PNG"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                description={<p>test description</p>}
                github="https://github.com/kelvin6118/squiz"
                link="https://squiz-your-brain.netlify.app/"
                />
                <Project_Card
                screenShot={squiz}
                description={<p>test description</p>}
                github="https://github.com/kelvin6118/squiz"
                link="https://squiz-your-brain.netlify.app/"
                />
            </Carousel>
            
        </div>
    </>
}

const Message = () => {
    return<>

    </>
}

const Projects = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default Projects;
