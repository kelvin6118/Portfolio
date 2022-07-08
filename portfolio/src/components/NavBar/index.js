import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="active" to="/about">About</NavLink>
            <NavLink className="active" to="/projects">Projects</NavLink>
            <NavLink className="active" to="/contact">Contact</NavLink>
        </nav>
    );
}

export default NavBar;
