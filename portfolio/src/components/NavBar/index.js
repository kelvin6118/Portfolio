import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const onMouseEnter = () => {
          setDropdown(true);
          setClick(false);
    }
    
    const onMouseLeave = () => {
          setDropdown(false);
    };

    const handleClick = () => setClick(!click);
    return (
        <nav>
            <ul className="nav-list">
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li className="nav-link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Projects
                    {dropdown && <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={handleClick}>
                        <li ><NavLink className="dropdown-link"  to="/projects">FutureProof</NavLink></li>
                    </ul>}
                </li>
                <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
