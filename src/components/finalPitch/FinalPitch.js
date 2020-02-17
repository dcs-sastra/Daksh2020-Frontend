import React, { Component } from "react";

import { toast } from 'react-toastify';


import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";
import Doodle from "../../assets/hackInfo/Doodle.png";
import Ripple from "../../assets/hackInfo/Ripple.png";
import UpperImage from "../../assets/hackInfo/UpperImage.png";
import poster from '../../assets/shows/pitchfest.jpg';

class HackInfo extends Component {

    render() {



        return (
            <div className="hack-info-wrapper">
                <img src={UpperImage} id="upper-image" />
                <img src={Ripple} id="ripple" />
                <img src={Doodle} id="doodle" />
                <div className="my-social">
                    <a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
                    <a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
                    <div className="line" />
                </div>
                <div className="hackinfo-area">
                    <div className="top-part row">
                        <div className="hack-text col-md-8">
                            <header className="my-header">
                                <div className="my-title">
                                    Final Pitch
								</div>

                            </header>
                            <p className="hack-desc">SASTRA TBI is one among the most illustrious incubates of the decade. In their magnanimity and a ceaseless desire for pushing
limits in the technical sphere, they have thrown open their doors during Daksh. Inumerous companies and products that fall under
the domains of VR, 3D printing, IOT and Robotics are proud incubatees of SASTRA TBI. All you need is a revolutionary idea or a
cutting edge product to be a part of the squad. Do you have what it takes?</p>
                            <p></p>
                            {/* <div className="btn-grp">
                                <a target="_blank" href="https://www.google.com" className="btn btn-red" >Register</a>
                            </div> */}
                        </div>
                        <div className="col-md-4 poster-wrapper">
                            <img src={poster} className="img-fluid poster rounded" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default HackInfo;
