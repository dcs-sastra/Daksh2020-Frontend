import React, {Component} from "react";
import {connect} from 'react-redux';
import {setHackathonList} from '../../../actions/Thunks/thunk';

import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
import TimeLine from "../../../assets/hackInfo/TimeLine.png";
import Doodle from "../../../assets/hackInfo/Doodle.png";
import Ripple from "../../../assets/hackInfo/Ripple.png";
import UpperImage from "../../../assets/hackInfo/UpperImage.png";

import './hackInfo.css';

class HackInfo extends Component {

    componentDidMount() {
        this.props.setHackathonList();
    }

    render() {

    	let title, description, poster;
    	if(this.props.hackathons) {
    		for(let i=0; i<this.props.hackathons.length; ++i) {
    			const hackItem = this.props.hackathons[i];
    			if(hackItem._id === this.props.match.params.id)
    				[title, description, poster] = [hackItem.title, hackItem.description, hackItem.poster];
    		}
    		
    	}

    	description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        return(
        	<>
        		<img src={UpperImage} id="upper-image" />
        		<img src={Ripple} id="ripple" />
        		<img src={Doodle} id="doodle" />
        		<div className="social">
        			<img src={Fb} className="social-icon" />
        			<img src={Insta}  className="social-icon" />
        			<div className="line" />
        		</div>
        		<div className="hackinfo-area">
	        		<div className="top-part row">
	        			<div className="hack-text col-md-8">
	        				<header className="my-title">{title}</header>
	        				<p className="hack-desc">{description}</p>
	        			</div>
	        			<div className="col-md-4 poster-wrapper">
	        				<img src={poster} className="img-fluid poster rounded" />
	        			</div>
	        		</div>	
	        		<div className="bottom-part">
	        			<img id="timeline" src={TimeLine} className="img-fluid" />
	        			<div className="btn-grp">
	        				<button className="btn btn-blue">Problem Statement</button>
	        				<button className="btn btn-red">Register</button>
	        			</div>
	        		</div>
	        	</div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        hackathons: state.hackathon.hackathons
    }
}

export default connect(mapStateToProps, {setHackathonList})(HackInfo);