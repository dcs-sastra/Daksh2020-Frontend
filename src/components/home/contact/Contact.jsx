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
            <div class="contactus">
                <div class="row center-align">
                    <div class="col">
                        <img src={DakshWhite} alt="" />
                    </div>
                    <div class="col flex-end">
                        <div class="row marbot"><span class="cus">Contact Us</span></div>
                        <div class="row marbot">
                            <div class="col flex-end right-border">
                                <span>Student Co-Ordinator</span>
                                <span>coordinator.daksh@sastra.ac.in</span>
                                <span>+91-81064-88664</span>
                            </div>
                            <div class="col flex-end">
                                <span>Student Secretary</span>
                                <span>chairman.daksh@sastra.ac.in</span>
                                <span>+91-82480-18114</span>
                            </div>
                        </div>
                        <div class="row marbot ">
                            <div class="col flex-end">
                                <span>For sponsorship related queries</span>
                                <span>marketing.daksh@sastra.ac.in</span>
                                <span>+91-82205-91664</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col flex-end">
                        <div class="row">
                            <div class="col">
                                <img src={instaWhite} alt="" />
                            </div>
                            <div class="col">
                                <p>@daksh2k20</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 flex-end">
                        <div class="row">
                            <div class="col flex-end">
                                <img src={fbWhite} alt="" />
                            </div>
                            <div class="col flex-end">
                                <p>Daksh - SASTRA University</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row marbot">
                            <img src={DevLove} alt="" />
                        </div>
                        <div class="row">
                            <img src={DSC} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
