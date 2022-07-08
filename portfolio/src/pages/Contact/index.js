import React from 'react';
import background from "../../media/background-crop.gif"
import { Background } from '../../components';
import './style.css';



const Content = () => {
    return<>
    <div id="contact-container">
        <div id="gmail">
            <p>Gmail : kelvinwong26546@gmail.com</p>
            </div>
        <div id="linkln">
            <p>Linkln : <a href='https://www.linkedin.com/in/yan-lok-wong-184046220/'>https://www.linkedin.com/in/yan-lok-wong-184046220/</a></p>
        </div>
        <div id="github">
            <p>Github: <a href='https://github.com/kelvin6118'>https://github.com/kelvin6118</a></p>
        </div>
        <div id="moblie">
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
