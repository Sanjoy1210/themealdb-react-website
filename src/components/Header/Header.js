import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1><a href="/home">TheMealDB</a></h1>
            </div>
            <nav className="nav">
                <li><a href="/home">Home</a></li>
                <li><a href="/food">Food</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/order">Order Review</a></li>
            </nav>
        </div>
    );
};

export default Header;