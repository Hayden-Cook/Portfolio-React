import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

// Navigation component. This component contains the navigation links, and will be used in the Header component.
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to ="/" end>About Me</NavLink></li>
                <li><NavLink to ="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to ="/contact">Contact</NavLink></li>
                <li><NavLink to ="/resume">Resume</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;