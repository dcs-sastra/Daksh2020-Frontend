import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavLink as Linker } from 'react-router-dom';
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
import sastra_logo from '../../../assets/SASTRA_LOGO.jpg'
import Hackathons from "../../../assets/events/hackathon.png";
import RevEngg from "../../../assets/events/revengg.png";
import TheBTD from "../../../assets/events/thebtd.png";
import FinalPitch from "../../../assets/events/finalPitch.png";
import FoxHunt from "../../../assets/events/foxHunt.png";
import IdeaPresentation from "../../../assets/events/ideaPresentation.png";
import techno from '../../../assets/techno.png'

import "./Main.css"

class Main extends Component {
    constructor(props) {
        super(props)
        this.myDivToFocus = React.createRef();
    }
    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if (this.myDivToFocus.current) {
            this.myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    render() {
        return (
            <div>
                <div className="circleWrapper"><img src={Circles} alt=""></img></div>
                {/* <div className="shapes"><img src={Donut} alt=""></img></div> */}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="container">
                            <div className="daksh-title">
                                <img src={Daksh} alt="" />
                                <h4>Build things that matter</h4>
                                <p>That time of the year is back. It's time to tune your skills up! Let's change gears and suit up to build things that matter. Save the dates!</p>
                                <div className="timings-block" >
                                    <div className="social-logo">
                                        <a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} alt="" className="insta" /></a>
                                        <a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} alt="" className="insta" /></a>
                                        <div className="line main-line" />
                                    </div>
                                    <div id="styleRow">
                                        <div id="box1">
                                            <img src={Calendar} alt="" className="icons" />
                                        </div>
                                        <div className="details" id="box2">
                                            <p>February 2020</p>
                                            <p>21,22 & 23</p>
                                        </div>
                                        <a target="_blank" href="https://goo.gl/maps/D9i434fLiXbLMG149">
                                            <div id="box3">
                                                <img src={Pin} alt="" className="icons" />
                                            </div>
                                            <div className="details text-decor" id="box4">
                                                <p>Thanjavur</p>
                                                <p>SASTRA</p>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>
                            <div className="scrollwrapper ">
                                <a className="scroller" onClick={this.handleOnClick}><img src={Arrow} alt="" /></a>
                            </div>
                        </div>
                        {/*
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <img src={Calendar} alt="" />
                                        </div>
                                        <div class="col">
                                            <img src={Dates} alt="" />
                                            <span>21,22 & 23</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <img src={Pin} alt="" />
                                        </div>
                                        <div class="col">
                                            <span>Thanjavur</span>
                                            <span>SASTRA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         */}

                    </div>
                    <div className="col-sm-6">
                        <div className="dev-wrapper">
                            <img src={Developers} className="dev" alt="" />
                        </div>

                    </div>

                </div>

                <div className="events" id="hackathon" ref={this.myDivToFocus}>
                    <h1 className="text-center" id="plethora">A Plethora of Competitions</h1>
                    <div className="container">

                        <div className="row text-center">
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/hackathon">
                                    <img src={Hackathons} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">Hackathons</h5>
                                    {/* <div class="card-text lead">A series of mind boggling competitions involving creative and scientific thinking fusion to produce disruptive  innovative results</div> */}
                                </Linker>
                            </div>

                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/reverse">
                                    <img src={RevEngg} className="card-img-top" alt="" />
                                    <br /><br />
                                    <h5 class="card-title">Reverse Engineering</h5>
                                    {/* <div class="card-text lead">Coming Soon</div> */}
                                </Linker>
                            </div>
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/techDebate">
                                    <img src={TheBTD} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">The Big Tech Debate</h5>
                                    {/* <div class="card-text lead">Coming Soon</div> */}
                                </Linker>
                            </div>
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/finalPitch">
                                    <img src={FinalPitch} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">The Final Pitch</h5>
                                    {/* <div class="card-text lead">Coming Soon</div> */}
                                </Linker>
                            </div>
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/foxHunt">
                                    <img src={FoxHunt} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">Fox Hunt</h5>
                                    {/* <div class="card-text lead">Coming Soon</div> */}
                                </Linker>
                            </div>
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/ideaPres">
                                    <img src={IdeaPresentation} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">Idea Presentation</h5>
                                    {/* <div class="card-text lead">Coming Soon</div> */}
                                </Linker>
                            </div>
                            <div className="col-md-4 col-sm-6">

                            </div>
                            <div className="col-md-4 col-sm-6 all-events">
                                <Linker className="hackathon-link" to="/techno">
                                    <img src={techno} className="card-img-top" alt="" /><br /><br />
                                    <h5 class="card-title">Technotainment</h5>
                                    {/* <div class="card-text lead">A series of mind boggling competitions involving creative and scientific thinking fusion to produce disruptive  innovative results</div> */}
                                </Linker>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Main;
