import React from 'react';
import { Background } from '../../components';
import $ from 'jquery'
import 'jquery.ripples'



const Content = () => {
    let ripple = () => {$(document).ready(function(){
        $("#home-content-container").ripples({
            resolution: 400
        })
    })}

    return<>
    <div id='home-content-container'>
        {ripple()}
    </div>
    </>
}

const Message = () => {
    return<>
        <p>
            Hi, Welcome to my portfolio<br></br>
            At here, you can know more about me and have a look at some of my work.<br></br>
            <br></br>
            If you are interested about me and want to give me some opportunity to work as a developer, feel free to go to the contact pages and drop me a message.
        </p>
    </>
}

const Home = () => {
    return<>
    <Background Content={Content()} Message={Message()}/>
    </>
}
export default Home;
