import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link className='navItem bg-indigo-500 shadow-lg shadow-indigo-500/50'
                        to="/">Home</Link>
                </li>
                <li>

                    <Link className='navItem bg-indigo-500 shadow-lg shadow-indigo-500/50' to='/restaurant'>Restaurant</Link>

                </li>

            </ul>

        </nav >
    );
};

export default Header;