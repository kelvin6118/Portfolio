import React from 'react';
import background from "../../media/background-crop.gif"
import './style.css';

const Background = ({Content}) => {
    return<div  style={{ backgroundImage: `url(${background})` }}>
        <div id="home-container">
            <div id='background' style={{
                width:"50%",
                justifyContent: 'left',
                }}>
                <h1 id="name">Kelvin Wong</h1>
                <h2 id="title">Full-Stack Developer</h2>
                </div>
            <div id='content' style={{
                width:"50%"
                }}>{Content}</div>
        </div>
    </div>
}
export default Background;
