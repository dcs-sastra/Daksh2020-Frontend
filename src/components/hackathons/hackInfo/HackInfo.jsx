import React, { Component } from "react";
import { connect } from 'react-redux';
import { setHackathonList } from '../../../actions/Thunks/thunk';
import Idea from '../Idea';
import { toast } from 'react-toastify';


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

		let title, description, poster, id, ps, prize;
		if (this.props.hackathons) {
			for (let i = 0; i < this.props.hackathons.length; ++i) {
				const hackItem = this.props.hackathons[i];
				console.log(hackItem);
				if (hackItem._id === this.props.match.params.id)
					[title, description, poster, id, ps, prize] = [hackItem.title, hackItem.description, hackItem.poster, hackItem._id, hackItem.problemStatement, hackItem.prize];
			}

		}

		return (
			<>
				<img src={UpperImage} id="upper-image" />
				<img src={Ripple} id="ripple" />
				<img src={Doodle} id="doodle" />
				<div className="my-social">
					<a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
					<a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
					<div className="line" />
				</div>
				<div className="hackinfo-area">
					<div className="top-part row">
						<div className="hack-text col-md-8">
							<header className="my-header">
								<div className="my-title">
									{title}
								</div>
								<div className="my-prize">
									{prize ? `Prize Pool: INR ${prize}` : ''}
								</div>
							</header>
							<p className="hack-desc">{description}</p>
							<div className="btn-grp">
								<a className="btn btn-blue" target="_blank" href={ps}>Problem Description</a>
								{
									this.props.authState
										? <button className="btn btn-red" data-toggle="modal" data-target="#hackregister">Register</button>
										: <button className="btn btn-red" onClick={() => { toast.error("Please login to register for hackathons") }}>Register</button>
								}
							</div>
						</div>
						<div className="col-md-4 poster-wrapper">
							<img src={poster} className="img-fluid poster rounded" />
						</div>
					</div>
					<div className="bottom-part">
						<img id="timeline" src={TimeLine} className="img-fluid" />
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
