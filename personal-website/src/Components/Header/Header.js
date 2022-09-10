import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <div className='header px-6 py-3 lg:pt-12 lg:px-12'>

            <div className='navbar-brand'>
                <p >Mahomodul Shahin</p>
            </div>

            <div className='navbar'>
                <Link to='/'><p className='navbar-item ' >Home</p></Link>
                <Link to='/countries'><p className='navbar-item ' >Countries</p></Link>
            </div>

        </div>
    );
};

export default Header;