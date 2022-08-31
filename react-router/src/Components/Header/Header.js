import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='navlinks'>

                {/*akane <Link> tag use kore navbar make korar kotha. but custom akta tag CustomLink diye kora hoice karon . jei active navbar er jonno */}
                <ul className='ul'>
                    <li className='li'> <CustomLink className='navlink' to="/">Home</CustomLink></li>

                    <li className='li'> <CustomLink className='navlink' to='/friends'>Friends</ CustomLink></li>

                    <li className='li'> <CustomLink className='navlink' to='/posts'>Posts</CustomLink></li>

                    <li className='li'> <CustomLink className='navlink' to="/about">About</CustomLink></li>

                    <li className='li'> <CustomLink className='navlink' to="/countries">Countries</CustomLink></li>
                </ul>






            </nav>
        </div>
    );
};

export default Header;