import React from 'react';
import { Background, Email_Message } from '../../components';
import './style.css';
import github from '../../media/contact/github.png';
import linkedin from '../../media/contact/linkedin.png';
import gmail from '../../media/contact/gmail.png';
import mobile from '../../media/contact/mobile.png';



const Content = () => {
    return<div id='contact-container'>
    <div id="contact-content">
        <div className='contact-row' id="gmail">
            <img className='contact-logo' src={gmail}/>
            <p className='platform'>Gmail :</p>
            <p a className='contact'>kelvinwong26546@gmail.com</p>
            </div>
        <div className='contact-row' id="linkedin">
            <img className='contact-logo' src={linkedin}/>
            <p className='platform'>Linkedln :</p>
            <p className='contact'>
                <a className='contact' href='https://www.linkedin.com/in/yan-lok-wong-184046220/'>https://www.linkedin.com/in/yan-lok-wong-184046220/</a>
                </p>
        </div>
        <div className='contact-row' id="github">
            <img className='contact-logo' src={github}/>
            <p className='platform'>Github :</p>
            <p className='contact' >
                <a className='contact' href='https://github.com/kelvin6118'>https://github.com/kelvin6118</a>
                </p>
        </div>
        <div className='contact-row' id="moblie">
            <img className='contact-logo' src={mobile}/>
            <p className='platform'>Moblie :</p>
            <p a className='contact'>+44 7480 299268</p>
        </div>
    </div>
    <Email_Message/>
    </div>
}

const Message = () => {
    return<>
        <p id='contact-message'>
            Thesea are my contact details<br></br>
            Feel free to drop me a message if you are interested
        </p>
    </>
}

const Contact = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default Contact;
