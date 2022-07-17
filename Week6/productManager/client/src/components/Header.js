import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return <header className='header'>
        <h1>Product Manager</h1>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='/new'>Add a new product</NavLink>
    </header>
}

