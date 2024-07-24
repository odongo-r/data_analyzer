import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="logo">Data Analyzer</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Create Account</Link></li>
                <li><Link to="/demo"></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

