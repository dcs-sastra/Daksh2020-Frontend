import React, { Component } from "react";
import { Link } from "react-scroll";

import Circles from "../../../assets/concentricCircles.svg"
import Daksh from "../../../assets/daksh.svg"
import Developers from "../../../assets/developers.svg"
import Matter from "../../../assets/buildThings.svg";
import Calendar from "../../../assets/calendar.svg";
import Pin from "../../../assets/pin.svg";
import Dates from "../../../assets/dates.svg"
import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
import Arrow from "../../../assets/arrow.svg";
import Donut from "../../../assets/donutStick.svg";

import Hackathons from "../../../assets/events/hackathon.png";
import RevEngg from "../../../assets/events/revengg.png";
import TheBTD from "../../../assets/events/thebtd.png";
import FinalPitch from "../../../assets/events/finalPitch.png";
import FoxHunt from "../../../assets/events/foxHunt.png";
import IdeaPresentation from "../../../assets/events/ideaPresentation.png";

import "./Main.css"

class Main extends Component {
    render() {
        return (
            <div>
                <div className="circleWrapper"><img src={Circles} alt=""></img></div>
                <div class="shapes"><img src={Donut} alt=""></img></div>
                <div class="container">
                    <div class="main-row row">
                        <div class="main-col col social">
                            <img src={Fb} alt="" />
                            <img src={Insta} alt="" />
                        </div>
                        <div class="main-col col">
                            <img src={Daksh} alt="" />
                            <img src={Matter} alt=""></img>
                            <p>The time of the year has come back. It's time to tune your skills up! Let's change gears and suit up to build things that matter. Save the dates!</p>
                            <div class="container">
                                <div class="main-row row">
                                    <div class="main-col col">
                                        <div class="main-row row">
                                            <div class="main-col col">
                                                <img src={Calendar} alt="" />
                                            </div>
                                            <div class="main-col col">
                                                <img src={Dates} alt="" />
                                                <span>21,22 & 23</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-col col">
                                        <div class="main-row row">
                                            <div class="main-col col">
                                                <img src={Pin} alt="" />
                                            </div>
                                            <div class="main-col col">
                                                <span>Thanjavur</span>
                                                <span>SASTRA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="scroller"><Link activeClass="active" to="hackathon" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt="" /></Link></div>
                        </div>
                        <div class="col">
                            <img src={Developers} class="dev" alt="" />
                        </div>
                    </div>
                </div>
                {/* Jumbotron part */}
                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="title-wrapper">
                                {/* Text and logo part
                <div className="daksh-title">
                    <h4>hello</h4>
                </div>
            </div>
                        </div >
            <div className="col-sm-12">
                <div className="daksh-title">
                    <h4>hello</h4>
                </div>
            </div>
                    </div >
                </div >
                {/* Photo part */}

                < div id="hackathon" class="flexi" >
                    <h1 class="display-4">A Plethora of Competitions</h1>
                    <div class="card marbot">
                        <div class="card-body">
                            <div class="row container">
                                <div class="card width">
                                    <img src={Hackathons} class="card-img-top" alt="" />
                                    <h5 class="card-title">Hackathons</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                                <div class="card width">
                                    <img src={RevEngg} class="card-img-top" alt="" />
                                    <h5 class="card-title">Reverse Engineering</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                                <div class="card width">
                                    <img src={TheBTD} class="card-img-top" alt="" />
                                    <h5 class="card-title">The Big Tech Debate</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                            </div>
                            <div class="row container">
                                <div class="card width">
                                    <img src={FinalPitch} class="card-img-top" alt="" />
                                    <h5 class="card-title">The Final Pitch</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                                <div class="card width">
                                    <img src={FoxHunt} class="card-img-top" alt="" />
                                    <h5 class="card-title">Fox Hunt</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                                <div class="card width">
                                    <img src={IdeaPresentation} class="card-img-top" alt="" />
                                    <h5 class="card-title">Idea Presentation</h5>
                                    <div class="card-text lead">Coming Soon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Main;
