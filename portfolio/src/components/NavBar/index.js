import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import useContentful from '../../useContentful';

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false);
    const [companies, setCompanies] = useState();
    const {getCompanies} = useContentful();
  
    useEffect(()=>{
      getCompanies().then(
        (response)=>{
          setCompanies(response);
        }
      )
    },[])

    const onOpen = () => {
          setDropdown(true);
          setClick(false);
    }
    
    const onClose = () => {
          setDropdown(false);
    };

    const handleClick = () => {
        setClick(!click);
        setActive(true);
    }

    const handleOtherPage = () =>{
        setActive(false);
        setDropdown(false);
    }

    return (
        <nav>
            <ul className="nav-list">
                <li onClick={handleOtherPage}><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li onClick={handleOtherPage}><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li onClick={dropdown ? onClose : onOpen}><a className={active ? "nav-link active" : "nav-link"}>Projects</a>
                    {dropdown && <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                        {companies.map((company)=>{
                            const path = company.fields.name.toLowerCase();
                            return <li onClick={handleClick}><NavLink className="dropdown-link"  to={`/project/${path}`}>{company.fields.name}</NavLink></li>
                        })}
                    </ul>}
                </li>
                <li onClick={handleOtherPage}><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
