import React, { useEffect, useState } from 'react';
import { Background, Project_Card} from '../../components';
import "./style.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useContentful from '../../useContentful';

const Content = () => {
    const [projects, setProjects] = useState([]);
    const {getProjects} = useContentful();

    useEffect(()=>{
        getProjects("FutureProof").then(
            (response) => {
                setProjects(response);
            }
        )
    },[])

    console.log(projects);

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
                {projects.map((item) => {
                    return <Project_Card
                    appName={item.fields.name}
                    screenShot={item.fields.screenShot.fields.file.url}
                    description={item.fields.description}
                    github={item.fields.links.github}
                    link={item.fields.links.link}
                    />
                    }
                )}
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

const FpProjects = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default FpProjects;
