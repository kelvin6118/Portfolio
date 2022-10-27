import React from 'react';
import './style.css';

const Background = ({Content, Message}) => {
    return<div id='background'>
        <div id="main-container">
            <div style={{
                justifyContent: 'left',
                display: 'flex',
                flexDirection: 'column',
                }}
                id='intro'
                >
                </div>

            <div id='content'>
                    {Content}
                    </div>

        </div>
    </div>
}
export default Background;
