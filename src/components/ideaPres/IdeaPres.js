import React, { Component } from 'react';
import { Link as Pink } from "react-scroll";
import { Link } from 'react-router-dom';

import Contact from "../../components/home/contact/Contact";

import Circles from "../../assets/hackathon/circles.png"
import Arrow from "../../assets/arrow.svg";

import TCS50 from "../../assets/hackathon/tcs50.png";
import SC from "../../assets/hackathon/sc.png";
import Genesys from "../../assets/hackathon/genesys.png";
import TVS from "../../assets/hackathon/tvs.png";
import PayPal from "../../assets/hackathon/paypal.png";
import TBI from "../../assets/hackathon/tbi.png";
import sastra from '../../assets/SASTRA_LOGO.jpg'

import IdeaPresentation from '../../assets/ideaPres.jpeg'

import { connect } from 'react-redux';

class IdeaPres extends Component {

    render() {
        // const match = this.props.match;
        // let hackthonElements = [];
        // if (this.props.hackathons) {
        //     for (let i = 0; i < this.props.hackathons.length; ++i) {
        //         let setBg = {
        //             backgroundImage: `url(${this.props.hackathons[i].poster})`
        //         };
        //         hackthonElements.push(
        //             <Link to={`/hackathon/${this.props.hackathons[i]._id}`} className="my-card-link col-md-3 inlay" style={setBg}>
        //                 <div class="name"><h4>{this.props.hackathons[i].title}</h4></div>
        //             </Link>
        //         );
        //     }
        // }

        return (
            <div className="hacklist-page">

                <div class="circles"><img src={Circles} alt="" id="circle-img" /></div>

                <div class="">
                    <div class="hacktitle-wrapper">
                        <img src={IdeaPresentation} alt="" width="600"/>
                        <div class="hacktitle-inner-wrapper">
                            <div class="hackathon-title">{this.props.ideaPres.title}</div>

                            <div class="subheading">{this.props.ideaPres.description}</div>
                            <br />
                            <a className="btn btn-danger guidelines" type="submit" href="https://drive.google.com/uc?id=1N19iRxu8UQP9zhJBFZbMv_CBRnNu_FUk" target="_blank">Guidelines</a>
                        </div>
                    </div>

                    <div className="sponsors-group-wrapper">
                    <div class="scroller-hackathon-page">
                        <Pink activeClass="active" to="hacklist" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt="" /></Pink>
                    </div>
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
                {/*<div class="container hacklist-wrapper">
                    <div class="row justify-content-center" id="hacklist"><h1 class="hackathon-title">Hackathons</h1></div>
                    <div class="row align-items-center justify-content-center">{hackthonElements}</div>
                </div>*/}
                <Contact></Contact>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ideaPres: state.otherEvents.ideaPres
    }
}

export default connect(mapStateToProps)(IdeaPres);
