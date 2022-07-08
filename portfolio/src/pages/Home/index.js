import React from 'react';
import background from "../../media/background-crop.gif"
import './style.css';


const Home = () => {
    return<div style={{ backgroundImage: `url(${background})` }}>
        <div id="home-container">
            <div style={{
                width:"50%"
                }}>
                <h1 style={{
                    color: 'white'
                }}>Kelvin Wong</h1>
                </div>
            <div></div>
        </div>
        
    </div>
}
export default Home;
