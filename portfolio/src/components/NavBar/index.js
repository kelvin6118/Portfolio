import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false);
    const onMouseEnter = () => {
          setDropdown(true);
          setClick(false);
    }
    
    const onMouseLeave = () => {
          setDropdown(false);
    };

    const handleClick = () => {
        setClick(!click);
        setActive(true);
    }

    const handleNotActive = () =>{
        setActive(false);
    }

    return (
        <nav>
            <ul className="nav-list">
                <li onClick={handleNotActive}><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li onClick={handleNotActive}><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><a className={active ? "nav-link active" : "nav-link"}>Projects</a>
                    {dropdown && <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={handleClick}>
                        <li ><NavLink className="dropdown-link"  to="/futureproof_projects">FutureProof</NavLink></li>
                    </ul>}
                </li>
                <li onClick={handleNotActive}><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
