import React,{Component} from "react";

import Circles from "../../../assets/concentricCircles.svg"
import Daksh from "../../../assets/daksh.svg"
import Developers from "../../../assets/developers.svg"
import Matter from "../../../assets/buildThings.svg";
import Calendar from "../../../assets/calendar.svg";
import Pin from "../../../assets/pin.svg";
import Dates from "../../../assets/dates.svg"
import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
import Arrow from "../../../assets/arrow.svg"

import "./Main.css"

class Main extends Component{
    render(){
        return(
            <div class="main">
                <div class="circleWrapper"><img src={Circles} alt=""></img></div>
                <div class="shapes"><img src="" alt=""></img></div>
                <div class="container">
                    <div class="row">
                        <div class="col social">
                            <img src={Fb} alt=""/>
                            <img src={Insta} alt=""/>
                            {/* <img src={Line} alt=""/> */}
                        </div>
                        <div class="col">
                            <img src={Daksh} alt=""/>
                            <img src={Matter} alt=""></img>
                            <p>The time of the year has come back. It's time to tune your skills up! Let's change gears and suit up to build things that matter. Save the dates!</p>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <img src={Calendar} alt=""/>
                                            </div>
                                            <div class="col">
                                                <img src={Dates} alt=""/>
                                                <span>21,22 & 23</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <img src={Pin} alt=""/>
                                            </div>
                                            <div class="col">
                                                <span>Thanjavur</span>
                                                <span>SASTRA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="scroller"><img src={Arrow} alt=""/></div>
                        </div>
                        <div class="col">
                            <img src={Developers} class="dev" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;