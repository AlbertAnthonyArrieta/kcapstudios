import React from 'react';
import NavButton from './NavButton.jsx';
import video from '../assets/LandingPageVideo.mp4'; 


export const Hero = ({ changePage }) => {



    return (
        <div className="hero">
            <div></div>
            <div></div>
            <div className='hero-container'>
                <div className='hero-background'>
                    <div className='hero-header'>
                        <div>LOGO</div>
                        <h1 className="hero-title">WELCOME</h1>
                        <a href="#about">contact me</a>
                    </div>
                    {/* add autoPlay to play */}
                    <video loop muted className='hero-video'>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='navigation'>
                    <NavButton onClick={() => changePage('home')} label="home" />
                    <NavButton onClick={() => changePage('projects')} label="projects" />
                    <NavButton onClick={() => changePage('photography')} label="photography" />
                    <NavButton onClick={() => changePage('cinematography')} label="cinematography" />
                    <NavButton onClick={() => changePage('artwork')} label="artwork" />
                </div>
            </div>
        </div>
    )
}

export default Hero;