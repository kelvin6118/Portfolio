import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>
    );
}

export default NavBar;
