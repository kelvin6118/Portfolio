import React from 'react';
import './style.css';

const Background = ({Content, Message}) => {
    return<div id='background'>
        <div id="home-container">
            <div style={{
                width:"50%",
                justifyContent: 'left',
                display: 'flex',
                flexDirection: 'column',
                }}>
                    <div id='myself'>
                        <h1 id="name">Kelvin Wong</h1>
                        <h2 id="title">Full-Stack Developer</h2>
                    </div>
                    <div id='messagediv'>
                        <div id='message'>
                            {Message}
                        </div>
                    </div>
                </div>

            <div id='content' style={{
                width:"50%"
                }}>
                    {Content}
                    </div>

        </div>
    </div>
}
export default Background;
