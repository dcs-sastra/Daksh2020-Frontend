import React, { Component } from "react";

import DakshWhite from "../../../assets/dakshWhite.png";
import fbWhite from "../../../assets/fbWhite.png";
import instaWhite from "../../../assets/instaWhite.png";
import DSC from "../../../assets/dsc.svg"
import DevLove from "../../../assets/devLove.png"

import "./Contact.css"

class Contact extends Component {
    render() {
        return (
            <div className="footer">

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="logo-wrapper text-left">
                            <img src={DakshWhite} alt="..." id="ft-daksh" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="text-right contact-title">
                            <h2>Contact Us</h2>
                            <div className="line-contact"></div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col text-right with-line">
                                <h4>Student Coordinator</h4>
                                <p>coordinator.daksh@sastra.ac.in</p>
                                <p>+91-81064-88664</p>
                            </div>
                            <div className="col text-right">
                                <h4>Student Secretary</h4>
                                <p>chairman.daksh@sastra.ac.in</p>
                                <p>+91-82480-18114</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="text-right">
                            <h2>For sponsorship related queries</h2>
                            <p>marketing.daksh@sastra.edu</p>
                            <p>+91-8220591664</p>
                        </div>
                        <div className="text-right contact-social">
                            <span>
                                <img src={instaWhite} width="20px" /> &nbsp; @daksh2k20
                            </span>
                            <span>
                                <img src={fbWhite} width="20px" /> &nbsp; Daksh - SASTRA University
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col dsc-credits">
                        <div className="center-image"><img src={DevLove} id="devlove" /></div>
                        <div className="center-image">
                            <img className="dsc-logo-footer" src={DSC} />
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Contact;
