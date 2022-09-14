import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = ({ route }) => {
    const { name, link } = route;
    return (
        <div>
            <li className=' navbar-item mt-4 md:mt-0'>
                <Link to={link}> {name}</Link>
            </li>
        </div>
    );
};

export default Navbar;