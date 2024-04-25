import { React, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Rellax from 'rellax';

import RollingHeader from "../components/RollingHeader";

import fenty1 from '../assets/fenty/1.png';
import fenty2 from '../assets/fenty/8.jpg';
import fenty3 from '../assets/fenty/17.jpg';
import fenty4 from '../assets/fenty/23.jpg';
import fenty5 from '../assets/fenty/37.jpg';
import fenty6 from '../assets/fenty/18.jpg';
import fenty7 from '../assets/fenty/4.jpg';
import fenty8 from '../assets/fenty/7.jpg';

import nike1 from '../assets/nike/nike1.png';
import nike2 from '../assets/nike/nike2.jpg';
import nike3 from '../assets/nike/nike3.jpg';
import nike4 from '../assets/nike/nike4.jpg';
import nike5 from '../assets/nike/nike5.jpg';
import nike6 from '../assets/nike/nike6.png';
import nike7 from '../assets/nike/nike7.jpg';
import nike8 from '../assets/nike/nike8.png';
import nike9 from '../assets/nike/nike9.jpg';

export const Photography = () => {

    useEffect(() => {
        new Rellax('.gallery-overlapper-text', {
          speed: -4,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
      }, []);
    

    return (
        <>
            <div className="photography page">
                <RollingHeader title="SOME PHOTOS" />
                {/* Fenty */}
                <div className="photography-project">
                    <div className="photography-details">
                        <Fade triggerOnce direction="right">
                            <h1 className="photography-header">FENTY</h1>
                        </Fade>
                        <Fade triggerOnce direction="down" delay="50">
                            <p className="photography-p">Product photoshoot for Fenty Beauty Ambassador, Maxine Alba to endorse the brand’s “Gloss Bomb Universal Lip Luminizer” and “Plush Puddin’ Intensive Recovery Lip Mask.”</p>
                        </Fade>
                    </div>
                    <div className="gallery container">
                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={fenty1} className="gallery-double-image"></img>
                                <img src={fenty2} className="gallery-double-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-horizontal">
                            <Fade triggerOnce>
                                <img src={fenty3} className="gallery-horizontal-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={fenty4} className="gallery-double-image"></img>
                                <img src={fenty5} className="gallery-double-image"></img>
                            </Fade>
                        </div>

                        <Fade triggerOnce cascade>
                            <div className="gallery-overlapper">
                                <img src={fenty6} className="gallery-overlapper-image"></img>
                                <div className="gallery-overlapper-text-container">
                                    <h2 className="gallery-overlapper-text">con-cept</h2>
                                </div>
                            </div>
                        </Fade>

                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={fenty7} className="gallery-double-image"></img>
                                <img src={fenty8} className="gallery-double-image"></img>
                            </Fade>
                        </div>
                    </div>
                </div>

                <RollingHeader title="SOME PHOTOS" />
                
                {/* Nike */}
                <div className="photography-project">
                    <div className="photography-details">
                        <Fade triggerOnce direction="right">
                            <h1 className="photography-header">NIKE</h1>
                        </Fade>
                        <Fade triggerOnce direction="down" delay="50">
                            <p className="photography-p">A personal passion project. Model: Jessica Lei Womp Womp.</p>
                        </Fade>
                    </div>
                    <div className="gallery container">
                        <div className="gallery-horizontal">
                            <Fade triggerOnce>
                                <img src={nike1} className="gallery-horizontal-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={nike2} className="gallery-double-image"></img>
                                <img src={nike3} className="gallery-double-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={nike4} className="gallery-double-image"></img>
                                <img src={nike5} className="gallery-double-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-vertical">
                            <Fade triggerOnce cascade>
                                <img src={nike6} className="gallery-vertical-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-double-ll">
                            <Fade triggerOnce cascade>
                                <img src={nike7} className="gallery-double-ll-l-image"></img>
                                <img src={nike9} className="gallery-double-ll-s-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-double">
                            <Fade triggerOnce cascade>
                                <img src={nike6} className="gallery-double-image"></img>
                                <img src={nike8} className="gallery-double-image"></img>
                            </Fade>
                        </div>

                        <div className="gallery-vertical">
                            <Fade triggerOnce cascade>
                                <img src={nike8} className="gallery-vertical-image"></img>
                            </Fade>
                        </div>


                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Photography;