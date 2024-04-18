import RollingHeader from "../components/RollingHeader";

import fenty1 from '../assets/fenty/1.png';
import fenty2 from '../assets/fenty/8.jpg';
import fenty3 from '../assets/fenty/17.jpg';
import fenty4 from '../assets/fenty/23.jpg';
import fenty5 from '../assets/fenty/37.jpg';
import fenty6 from '../assets/fenty/18.jpg';
import fenty7 from '../assets/fenty/4.jpg';
import fenty8 from '../assets/fenty/7.jpg';

export const Photography = () => {
    return (
        <>
            <div className="photography page">
                <RollingHeader />
                <div className="photography-project container">
                    <div className="photography-details">
                        <h1 className="photography-header">FENTY</h1>
                        <p className="photography-p">Product photoshoot for Fenty Beauty Ambassador, Maxine Alba to endorse the brand’s “Gloss Bomb Universal Lip Luminizer” and “Plush Puddin’ Intensive Recovery Lip Mask.”</p>
                    </div>
                    <div className="gallery">
                        <div className="gallery-double">
                            <img src={fenty1} className="gallery-double-image"></img>
                            <img src={fenty2} className="gallery-double-image"></img>
                        </div>

                        <div className="gallery-horizontal">
                            <img src={fenty3} className="gallery-horizontal-image"></img>
                        </div>

                        <div className="gallery-double">
                            <img src={fenty4} className="gallery-double-image"></img>
                            <img src={fenty5} className="gallery-double-image"></img>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Photography;