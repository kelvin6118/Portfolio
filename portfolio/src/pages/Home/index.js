import React from 'react';
import './style.css';
import { Background } from '../../components';
import WaterWaver from 'react-water-wave';

const Content = () => {
    return <></>
    /*return<>
    <WaterWaver
    interactive={true}
    resolution={500}
    >
    {() => (
        <div className="home-container">
          
        </div>
    )}
    </WaterWaver>
    </>*/
}

const Home = () => {
    return<main id='home-container'>
            <header id='home-header'>
                <h1 id="name">Kelvin Wong</h1>
                <h2 id="title">Full-Stack Developer</h2>
            </header>
            <article className='message'>
                <p>
                Hi, Welcome to my portfolio<br/>
                At here, you can know more about me and have a look at some of my work.<br/>
                If you are interested about me and want to give me some opportunity to work as a developer, feel free to go to the contact pages and drop me a message.
                </p>
            </article>
    </main>
}
export default Home;
