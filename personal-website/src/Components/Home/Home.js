import React from 'react';
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <div className="profile-img">

            </div>
            <div className='about-me'>
                <h6>Front-end web developer</h6>
                <p>Hello there. I'm a web designer and front-end developer with a strong knowledge base. I have experience in designing Websites especially for (E-Commerce). I am capable of developing and designing a website or web pages. Html, CSS(bootstrap, tailwind), JavaScript ES6, and Reactjs are among my specialties. So, yeah. That's a little about me that you need to know.</p>
                <div className='buttons'>
                    <button>Download CV</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Home;