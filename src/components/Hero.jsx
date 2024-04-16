import React from 'react';
import video from '../assets/LandingPageVideo.mp4'; // replace with your video file path

export const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">WELCOME</h1>
            {/* add autoPlay to play */}
            <video loop muted className="hero-background">
                <source src={video} type="video/mp4" />
            </video>
            <div className='navigation'>
                <button className="nav-button active-link">home</button>
                <button className="nav-button">projects</button>
                <button className="nav-button">photography</button>
                <button className="nav-button">cinematography</button>
                <button className="nav-button">artwork</button>
            </div>
        </div>
    )
}

export default Hero;