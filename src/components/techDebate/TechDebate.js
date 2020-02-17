import React, { Component } from "react";
import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";
import Doodle from "../../assets/hackInfo/Doodle.png";
import Ripple from "../../assets/hackInfo/Ripple.png";
import UpperImage from "../../assets/hackInfo/UpperImage.png";
import poster from '../../assets/shows/debate.jpg'

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
                                    Big Tech Debate
								</div>

                            </header>
                            <p>We give you the dais. We ask you to take a stand.
Join the consortium of corporates or public integrating sectors. Discuss problems which need immediate attention in the
industry. Listen to what your comrades have to say and make your voice heard as well.</p>
                            <p>
                                <div className="btn-grp">
                                    <a target="_blank" href="https://docs.google.com/document/d/1G4yJ4tUQ3AP6knPOmUav94QKSwncGJnjGFGl6h1G2FM/edit?usp=sharing
" className="btn btn-blue">Guidelines</a>
                                    <a href=" https://forms.gle/7ocepqPPKDe93YPP7"
                                        target="_blank"
                                        className="btn btn-red" >Register</a>
                                </div>
                            </p>
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
