import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {

    return (
        <nav>
            <ul className="nav-list">
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
