import React from 'react';
import './Navbar.css'
const Navbar = ({ route }) => {
    const { name, link } = route;
    return (
        <div>
            <li className=' navbar-item mt-4 md:mt-0'>
                <a href={link}>{name}</a>
            </li>
        </div>
    );
};

export default Navbar;