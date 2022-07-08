import React from 'react';
import background from "../../media/background-crop.gif"
import './style.css';


const Home = () => {
    return<div style={{ backgroundImage: `url(${background})` }}>
        <h1>Kelvin Wong</h1>
    </div>
}
export default Home;
