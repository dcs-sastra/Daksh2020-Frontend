import React, { Component } from "react";

import { toast } from 'react-toastify';


import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";
import Doodle from "../../assets/hackInfo/Doodle.png";
import Ripple from "../../assets/hackInfo/Ripple.png";
import UpperImage from "../../assets/hackInfo/UpperImage.png";
import poster from '../../assets/shows/idp.jpeg'

class IdeaPres extends Component {

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
                                    Idea Presentation
								</div>

                            </header>
                            <p className="hack-desc">If your mind is an oasis of ideas, welcome home.
Mould the chaos in your mind to conceptual perfection. Let your ideas take the stage.
Demontrate them in the presence of an eminent panel. Walk in with ideas, walk out with glory.
</p>
                            <p></p>
                            <div className="btn-grp">
                                <a href="https://drive.google.com/a/sastra.ac.in/file/d/1QoKpgn420rbrVOXqJW3AcJ5ySSpfnlna/view?usp=drivesdk" target="_blank" className="btn btn-red">Instructions</a>
                            </div>
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




export default IdeaPres;
