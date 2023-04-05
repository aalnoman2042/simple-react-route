import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import ActiveLink from '../activeLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
                {/* <Link to="/friend">friend</Link> */}
        </nav>
    );
};

export default Header;