import React, { Component } from "react";
import { connect } from 'react-redux';

import { toast } from 'react-toastify';


import Fb from "../../../assets/fb.svg";
import Insta from "../../../assets/insta.svg";
import Doodle from "../../../assets/hackInfo/Doodle.png";
import Ripple from "../../../assets/hackInfo/Ripple.png";
import UpperImage from "../../../assets/hackInfo/UpperImage.png";


class Reverseinfo extends Component {

	render() {
		let title, description, poster, id, link, descriptionLink;
		if (this.props.Reverse) {
			for (let i = 0; i < this.props.Reverse.events.length; ++i) {
				const revItem = this.props.Reverse.events[i];

				if (revItem.id == this.props.match.params.id) {
					[title, description, poster, id, link, descriptionLink] = [revItem.title, revItem.description, revItem.imageLink, revItem.id, revItem.regLink, revItem.descriptionLink];
				}
			}

		}

		return (
			<div className="full-page">
				<img src={UpperImage} id="upper-image" />
				<img src={Ripple} id="ripple" />
				<img src={Doodle} id="doodle" />
				<div className="my-social my-social-revinfo">
					<a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
					<a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
					<div className="line" />
				</div>
				<div className="hackinfo-area">
					<center><h1 class="revinfo-title">{this.props.Reverse.title}</h1></center><br />
					<div className="top-part row">
						<div className="hack-text col-md-8">
							<header className="my-header">
								<div className="my-title">
									{title}
								</div>

							</header>
							<p className="font-weight-bold">{description}</p>
							<a target="_blank" href={descriptionLink} className="btn btn-blue">Description</a>
							<a target="_blank" href={link}><button className="btn btn-red">Register</button></a>

						</div>
						<div className="col-md-4 poster-wrapper">
							<img src={poster} className="img-fluid poster rounded" />
						</div>
					</div>
					{/* <div className="bottom-part">
						<img id="timeline" src={TimeLine} className="img-fluid" />
					</div> */}
					<br />
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		Reverse: state.otherEvents.reverse,
		authState: state.user.authStatus
	}
}

export default connect(mapStateToProps)(Reverseinfo);
