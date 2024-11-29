import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

// Header component. This component contains the site title and the Navigation component.
const Header = () => {
    return (
        <header>
            <h1>Hayden Cook</h1>
            <Navigation />
        </header>
    );
};

export default Header;