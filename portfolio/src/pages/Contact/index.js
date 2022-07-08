import React from 'react';
import { Background } from '../../components';
import './style.css';
import github from '../../media/github.png';
import linkedin from '../../media/linkedin.png';
import gmail from '../../media/gmail.png';
import mobile from '../../media/mobile.png';



const Content = () => {
    return<>
    <div id="contact-container">
        <div className='contact-column' id="gmail">
            <img className='logo' src={gmail}/>
            <p>Gmail : kelvinwong26546@gmail.com</p>
            </div>
        <div className='contact-column' id="linkedin">
            <img className='logo' src={linkedin}/>
            <p>Linkln : <a href='https://www.linkedin.com/in/yan-lok-wong-184046220/'>https://www.linkedin.com/in/yan-lok-wong-184046220/</a></p>
        </div>
        <div className='contact-column' id="github">
            <img className='logo' src={github}/>
            <p>Github: <a href='https://github.com/kelvin6118'>https://github.com/kelvin6118</a></p>
        </div>
        <div className='contact-column' id="moblie">
            <img className='logo' src={mobile}/>
            <p>Moblie: +44 7480 299268</p>
        </div>
    </div>
    </>
}

const Contact = () => {
    return<>
    <Background Content={Content()}/>
    </>
}
export default Contact;
