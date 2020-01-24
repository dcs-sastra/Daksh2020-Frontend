import React, {Component} from "react";
import "./comeSoon.css"

import redDot from "../../../assets/redDot.png";

class ComeSoon extends Component{
    render(){
        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <img src={redDot} class="dot" alt=""/>
                                <p class="clusters">Workshops</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <img src={redDot} class="dot" alt=""/>
                                <p class="clusters">Power Talks</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <img src={redDot} class="dot" alt=""/>
                                <p class="clusters">Shows</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span>Coming</span>
                    <span>Soon!</span>
                    <p class="muted">Hey, with Daksh around the corner, don't waste time looking up for the site. Type in your email and we'll keep you posted. </p>
                    <div class="row">
                        <div class="col-9"><input type="email" class="form-control-lg" placeholder="Your email" size="35"/></div>
                        <div class="col-3"><button type="submit" class="btn btn-danger btn-lg">Subscribe</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComeSoon;