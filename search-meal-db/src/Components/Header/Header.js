import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className='bg-slate-800	 py-2.5'>
            <ul>
                <li className='text-1xl text-sky-600 font-bold'><Link to='/restaurant'>Restaurant</Link></li>

            </ul>

        </nav >
    );
};

export default Header;