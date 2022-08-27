import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='navlinks'>

                {/*akane <Link> tag use kore navbar make korar kotha. but custom akta tag CustomLink diye kora hoice karon . jei active navbar er jonno */}

                <CustomLink className='navlink' to="/">Home</CustomLink>
                <CustomLink className='navlink' to='/friends'>Friends</ CustomLink>
                <CustomLink className='navlink' to="/about">About</CustomLink>


            </nav>
        </div>
    );
};

export default Header;