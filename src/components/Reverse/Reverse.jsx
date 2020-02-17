import React, { Component } from 'react';
import { Link as Pink } from "react-scroll";
import { Link } from 'react-router-dom';
import prize from '../../assets/prize2.png'

import Contact from "../../components/home/contact/Contact";

import Circles from "../../assets/hackathon/circles.png"
import Arrow from "../../assets/arrow.svg";

import TCS50 from "../../assets/hackathon/tcs50.png";
import SC from "../../assets/hackathon/sc.png";
import Genesys from "../../assets/hackathon/genesys.png";
import TVS from "../../assets/hackathon/tvs.png";
import PayPal from "../../assets/hackathon/paypal.png";
import TBI from "../../assets/hackathon/tbi.png";

import { connect } from 'react-redux';

class Reverse extends Component {

    render() {

        let eventJs = [];
        if (this.props.Reverse) {
            for (let i = 0; i < this.props.Reverse.events.length; ++i) {
                let setBg = {
                    backgroundImage: `url(${this.props.Reverse.events[i].imageLink})`
                };
                eventJs.push(
                    <Link to={`/reverse/${this.props.Reverse.events[i].id}`} className="my-card-link col-md-3 inlay" style={setBg}>
                        <div class="name"><h4>{this.props.Reverse.events[i].title}</h4></div>
                    </Link>
                );
            }
        }

        return (
            <div className="hacklist-page">

                <div class="circles"><img src={Circles} alt="" id="circle-img" /></div>

                <div class="">
                    <div class="hacktitle-wrapper">
                        <img src={prize} alt="" />
                        <div class="hacktitle-inner-wrapper">
                            <div class="hackathon-title">{this.props.Reverse.title}</div>

                            <div class="subheading">{this.props.Reverse.description}</div>
                        </div>
                    </div>

                    <div className="sponsors-group-wrapper">
                        <div class="row scroller" id="hackArrow"><Pink activeClass="active" to="hacklist" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt="" /></Pink></div>
                        <div className="sponsors-group">
                            <img src={TCS50} className="img-fluid sponsor" />
                            <img src={SC} className="img-fluid sponsor" />
                            <img src={Genesys} className="img-fluid sponsor" />
                            <img src={TVS} className="img-fluid sponsor" />
                            <img src={PayPal} className="img-fluid sponsor" />
                            <img src={TBI} className="img-fluid sponsor" />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-center" id="hacklist"><h1 class="hackathon-title">{this.props.Reverse.title}</h1></div>
                    <div class="row align-items-center justify-content-center">{eventJs}</div>
                </div>
                <Contact></Contact>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Reverse: state.otherEvents.reverse
    }
}

export default connect(mapStateToProps)(Reverse);
