import React from 'react';
import './Home.css'


const Home = () => {
    return (
        <div className='home grid grid-rows-12 sm:grid-rows-12 md:grid-rows-6 md:flex pt-14 md:pt-24'>
            <div className="profile-img md:w-2/5   ">
                <img className='img  w-1/2 sm:w-2/6 md:w-4/6 lg:w-1/2' src="shahin.jpeg" alt="" />
            </div>
            <div className='about-me md:w-3/5 mt-6 md:mt-6 lg:mt-12 md:text-left px-12 md:pl-12 md:pr-20 lg:pr-44'>
                <h6 className='tagline'>Front-end developer</h6>
                <h1 className='name'>Mahmodul Shahin</h1>
                <p className='aboutMe-text'>Hello there. I'm a web designer and front-end developer with a strong knowledge base. I have experience in designing Websites especially for (E-Commerce). I am capable of developing and designing a website or web pages. Html, CSS(bootstrap, tailwind), JavaScript ES6, and Reactjs are among my specialties. So, yeah. That's a little about me that you need to know.</p>
                <div className='buttons'>

                    <button className='cvDownloadBtn' >Download CV</button>
                    <button className='contactBtn'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Home;