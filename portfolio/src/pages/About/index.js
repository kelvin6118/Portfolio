import React from 'react';
import { Background } from '../../components';



const Content = () => {
    return<>
    </>
}
const Message = () => {
    return<>
    <p>
        I am a full-stack developer who recently trained by FutureProof.
        I am really passionate into programming. It's because I like to solve challenging problems. <br></br>
        <br></br>
        I want to be a full-stack software engineer because I like both frontend and backend. Frontend allow me to be more creative and backend is more about solving problems which I am also found interested.
    </p>
    </>
}

const About = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default About;
