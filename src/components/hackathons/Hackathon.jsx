import React, {Component} from 'react';
import {Link as Pink} from "react-scroll";
import {Switch,Route,Link} from 'react-router-dom';

import HackInfo from "../../components/hackathons/hackInfo/HackInfo";
import Contact from "../../components/home/contact/Contact";

import Circles from "../../assets/hackathon/circles.png"
import Arrow from "../../assets/arrow.svg";
import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";

import TN from "../../assets/hackathon/tn.png";
import TCS50 from "../../assets/hackathon/tcs50.png";
import SC from "../../assets/hackathon/sc.png";
import Genesys from "../../assets/hackathon/genesys.png";
import TVS from "../../assets/hackathon/tvs.png";
import PayPal from "../../assets/hackathon/paypal.png";

import RainGauge from "../../assets/hackathon/events/srm.png";
import AgriDrone from "../../assets/hackathon/events/agridrone.png";
import GenAPI from "../../assets/hackathon/events/gen.png";

import TNIcon from "../../assets/hackathon/events/tnicon.png";
import GenIcon from "../../assets/hackathon/events/genicon.png";

import "./Hackathon.css"

class Hackathon extends Component{
    render(){
        const match = this.props.match;
        return(  
            <>
                <div class="circles"><img src={Circles} alt=""/></div>
                <div class="container-fluid">
                    <div class="row mar">
                        <div class="col flex-end">
                            <p class="display-1">Hackathons</p>
                            <p class="subheading lead right-justify">Our goal is to expose the student community to actual industry and Societal problems and equip them to solve it using cutting edge technologies. We firmly believe this will smoothen their transition from academics to industry.</p>
                        </div>
                    </div>
                    <div class="row justify">
                        <div class="col-1 social">
                            <div><img src={Fb} alt=""/></div>
                            <div><img src={Insta} alt=""/></div>
                        </div>
                        <div class="col-5">
                            <div class="container">
                                <div class="row space-evenly">
                                    <img src={TN} alt=""/>
                                    <img src={TCS50} alt=""/>
                                    <img src={SC} alt=""/>
                                </div>
                                <div class="row space-evenly">
                                    <img src={Genesys} alt=""/>
                                    <img src={TVS} alt=""/>
                                    <img src={PayPal} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row scroll"><Pink activeClass="active" to="hacklist" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt=""/></Pink></div>
                </div>
                <div class="container" id="hacklist">
                    <div class="row"><h1 class="display-4">Hackathons</h1></div>
                    <div class="row first">
                        <div class="col inlay">
                            <img src={RainGauge} alt=""/>
                            <div class="bottom-left"><img src={TNIcon} alt=""/></div>
                            <div class="name"><p class="h1">Smart Rain Gauge</p></div>
                            <Link to={`${match.url}/SmartRainGauge`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                        </div>
                        <div class="col inlay">
                            <img src={AgriDrone} alt=""/>
                            <div class="bottom-left"><img src={TNIcon} alt=""/></div>
                            <div class="name"><p class="h1">Agri Drone</p></div>
                            <Link to={`${match.url}/AgriDrone`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                        </div>
                        <div class="col inlay">
                            <img src={GenAPI} alt=""/>
                            <div class="bottom-left"><img src={GenIcon} alt=""/></div>
                            <div class="name"><p class="h1">Genesys API</p></div>
                            <Link to={`${match.url}/GenesysAPI`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                        </div>
                    </div>
                    <div class="row last">
                        <div class="col inlauseRouteMatchy">
                                <img src={RainGauge} alt=""/>
                                <div class="bottom-left"><img src={TNIcon} alt=""/></div>
                                <div class="name"><p class="h1">Smart Rain Gauge</p></div>
                                <Link to={`${match.url}/SmartRainGauge`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                            </div>
                            <div class="col inlay">
                                <img src={AgriDrone} alt=""/>
                                <div class="bottom-left"><img src={TNIcon} alt=""/></div>
                                <div class="name"><p class="h1">Agri Drone</p></div>
                                <Link to={`${match.url}/AgriDrone`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                            </div>
                            <div class="col inlay">
                                <img src={GenAPI} alt=""/>
                                <div class="bottom-left"><img src={GenIcon} alt=""/></div>
                                <div class="name"><p class="h1">Genesys API</p></div>
                                <Link to={`${match.url}/GenesysAPI`}><div class="bottom-right"><button class="btn btn-primary">Explore</button></div></Link>
                            </div>
                        </div>
                </div>
                <Switch>
                    <Route path={`${match.path}/:hackName`}><HackInfo hackName={`${match.path}/:hackName`}></HackInfo></Route>
                </Switch>   
                <Contact></Contact>                
            </>
        )
    }
}

export default Hackathon;