import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="active" to="/about">About</NavLink>
            <NavLink className="active" to="/contact">Contact</NavLink>
            <button>Back</button>
        </nav>
    );
}

export default NavBar;
