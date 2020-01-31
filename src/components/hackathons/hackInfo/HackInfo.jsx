import React, { Component } from "react";
import { connect } from 'react-redux';
import { setHackathonList } from '../../../actions/Thunks/thunk';
import Idea from '../Idea';


import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
import TimeLine from "../../../assets/hackInfo/timeline.png";
import Doodle from "../../../assets/hackInfo/Doodle.png";
import Ripple from "../../../assets/hackInfo/Ripple.png";
import UpperImage from "../../../assets/hackInfo/UpperImage.png";

import './hackInfo.css';

class HackInfo extends Component {

	componentDidMount() {
		this.props.setHackathonList();
	}

	render() {

		let title, description, poster, id, ps;
		if (this.props.hackathons) {
			for (let i = 0; i < this.props.hackathons.length; ++i) {
				const hackItem = this.props.hackathons[i];
				console.log(hackItem);
				if (hackItem._id === this.props.match.params.id)
					[title, description, poster, id, ps] = [hackItem.title, hackItem.description, hackItem.poster, hackItem._id, hackItem.problemStatement];
			}

		}

		return (
			<>
				<img src={UpperImage} id="upper-image" />
				<img src={Ripple} id="ripple" />
				<img src={Doodle} id="doodle" />
				<div className="social">
					<a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
					<a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
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
							<a className="btn btn-blue" target="_blank" href={ps}>Problem Statement</a>
							{this.props.authState && <button className="btn btn-red" data-toggle="modal" data-target="#hackregister">Register</button>}
							{!this.props.authState && <span> Please Login to Register</span>}							
						</div>
					</div>
				</div>
				<Idea title={title} id={id} />
			</>
		)
	}
}


const mapStateToProps = state => {
	return {
		hackathons: state.hackathon.hackathons,
		authState: state.user.authStatus
	}
}

export default connect(mapStateToProps, { setHackathonList })(HackInfo);
