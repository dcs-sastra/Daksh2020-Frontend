import React, {Component} from 'react';
import {Link as Pink} from "react-scroll";
import {Link} from 'react-router-dom';

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

// import RainGauge from "../../assets/hackathon/events/srm.png";
// import AgriDrone from "../../assets/hackathon/events/agridrone.png";
// import GenAPI from "../../assets/hackathon/events/gen.png";

import TNIcon from "../../assets/hackathon/events/tnicon.png";
// import GenIcon from "../../assets/hackathon/events/genicon.png";

import "./Hackathon.css"

import {connect} from 'react-redux';
import {setHackathonList} from '../../actions/Thunks/thunk';

class Hackathon extends Component{

    state = {
        hackathons: []
    }

    componentDidMount() {
        this.props.setHackathonList();
    }

    render() {
        const match = this.props.match;
        let hackthonElements = [];
        if(this.props.hackathons) {
            for(let i=0; i<this.props.hackathons.length; ++i) {
                let setBg = {
                    backgroundImage: `url(${this.props.hackathons[i].poster})`
                };
                hackthonElements.push(
                        <Link to={`${match.url}/${this.props.hackathons[i]._id}`} className="my-card-link col-md-3 inlay" style = {setBg}>
                            <div class="name"><h3>{this.props.hackathons[i].title}</h3></div>
                        </Link>
                    );
            }
        }
        
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
                    <div class="row scroller"><Pink activeClass="active" to="hacklist" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt=""/></Pink></div>
                </div>
                <div class="container">
                    <div class="row justify-content-center" id="hacklist"><h1 class="display-4">Hackathons</h1></div>
                    <div class="row align-items-center justify-content-center">{hackthonElements}</div>
                </div>
                <Contact></Contact>                
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        hackathons: state.hackathon.hackathons
    }
}

export default connect(mapStateToProps, {setHackathonList})(Hackathon);