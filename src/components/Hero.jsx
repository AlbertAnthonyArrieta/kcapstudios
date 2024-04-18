import React from 'react';
import { motion } from 'framer-motion';

import NavButton from './NavButton.jsx';

import video from '../assets/LandingPageVideo.mp4'; // replace with your video file path


export const Hero = ( {changePage} ) => {



    return (
        <div className="hero">
            <h1 className="hero-title">WELCOME</h1>
            {/* add autoPlay to play */}
            <video autoPlay loop muted className="hero-background">
                <source src={video} type="video/mp4" />
            </video>
            <div className='navigation'>
               <NavButton onClick={() => changePage('home')} label="home" />
               <NavButton onClick={() => changePage('projects')} label="projects" />
               <NavButton onClick={() => changePage('photography')} label="photography" />
               <NavButton onClick={() => changePage('cinematography')} label="cinematography" />
               <NavButton onClick={() => changePage('artwork')} label="artwork" />
            </div>
        </div>
    )
}

export default Hero;