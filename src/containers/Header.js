import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';

const Header = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <img src={Logo} alt="Logo" height='63px' width='70px'/>
                <Link to='/' className="brand-logo">Train Tracks</Link>
            </div>
        </nav>
    )
}

export default Header;