import React, { useState } from 'react';
import './Header.css'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Countries', link: '/countries' },
        { id: 3, name: 'Resume', link: '/resume' },
        { id: 4, name: 'Contact', link: '/contact' },

    ]
    return (


        <nav className='navbar flex px-6 py-3 lg:pt-8 lg:px-12'>
            <p className='navbar-brand w-2/4'>Mahmodul Shahin</p>
            <div onClick={() => { setOpen(!open) }} className="navbar-icon w-7 h-7  md:hidden text-slate-900">

                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={` navbar-itmes md:flex pt-2 pb-5 md:pt-0 md:pb-0  w-11/12	 rounded-lg justify-center md:bg-transparent	 md: absolute md:static    duration-500 ease-out ${open ? 'top-12' : 'top-[-500px]'}`}>
                {
                    routes.map(route => <Navbar route={route} key={route.id}></Navbar>)
                }
            </ul>

        </nav>

        // <div className='header px-6 py-3 lg:pt-12 lg:px-12'>

        //     <div className='navbar-brand'>
        //         <p >Personal website</p>
        //     </div>

        //     <div className='navbar'>
        //         <Link to='/'><p className='navbar-item ' >Home</p></Link>
        //         <Link to='/countries'><p className='navbar-item ' >Countries</p></Link>
        //         <Link to='/resume'><p className='navbar-item ' >Resume</p></Link>
        //         <Link to='/contact'><p className='navbar-item ' >Contact</p></Link>
        //     </div>

        // </div>
    );
};

export default Header;