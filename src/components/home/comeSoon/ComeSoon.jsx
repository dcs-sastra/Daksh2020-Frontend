import React, { Component } from "react";
import "./comeSoon.css"

import redDot from "../../../assets/redDot.png";

class ComeSoon extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="cs">
                        <div>
                            <div class="cs-content">
                                <div className="red-dot"></div>
                                <p class="clusters">Workshops</p>
                            </div>
                        </div>
                        <div>
                            <div class="cs-content">
                                <div className="red-dot"></div>
                                <p class="clusters">Powertalks</p>
                            </div>
                        </div>
                        <div>
                            <div class="cs-content">
                                <div className="red-dot"></div>
                                <p class="clusters">Shows</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span>Coming</span>
                    <span>Soon!</span>
                    <br />
                    <p class="text-secondary">Hey, with Daksh around the corner, don't waste time looking up for the site. Type in your email and we'll keep you posted. </p>
                    <br />
                    <div class="container subscribe-form">
                        <div class="col-9"><input type="email" className="subscribe" placeholder="Your email" size="35" /></div>
                        <div class="col-3"><button type="submit" className="subscribe-btn">Subscribe</button></div>
                    </div>
                    <br /> <br /><br />
                </div>
            </div>
        )
    }
}

export default ComeSoon;
