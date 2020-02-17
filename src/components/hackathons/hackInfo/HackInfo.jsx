import React, { Component } from "react";
import { connect } from 'react-redux';
import { setHackathonList } from '../../../actions/Thunks/thunk';
import Idea from '../Idea';
import { toast } from 'react-toastify';


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
								{/* <div className="my-prize">
									{prize ? `Prize Pool: INR ${prize}` : ''}
								</div> */}
							</header>
							<p>
								Calling out all tech-enthusiasts to the most-awaited Genesys Daksh Hackathon - an event organized
for passionate programmers, in Sastra University, by Genesys - a market leader in omni channel
customer experience! <br /><br /> Are you interested in applying technology to innovate? If yes, you're invited
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																to participate in this Hackathon!
							</p>
							<p className="font-weight-bold">Who is eligible to participate?</p>
							<p>
								<ul>
									<li>All students currently pursuing an engineering degree preferably in CSE/ECE/IT.</li>
									<li> Students across all graduation years. </li>
								</ul>
							</p>
							<p className="font-weight-bold">What is the theme of the Hackathon?</p>
							<p>Genesys provides a rich set of open APIs around Contact Centre technology.  As a part of the hackathon, we offer you the below services (in the form of APIs):
</p>
							<p>
								<ol>
									<li> Knowledge Service:
Knowledge Search Service is an AI-powered service that enables you to build sophisticated knowledge bases that can be intelligently searched using APIs.
</li>
									<li> Named Entity Resolver (NER) Service:
Named Entity Resolver is a service that takes a text input and identifies nouns (entities) such as name, place, organization, and date contained in the text.
</li>
								</ol>
							</p>
							<p>Genesys Hackathon is a great opportunity to apply your creativity to build innovative/fun/mind-blowing solutions, preferably in the Contact Centre domain, using the above mentioned Genesys Services (optionally with the help of other open technologies/services).
Who knows? <br />Your Crazy Idea might become something real and potentially profitable to Genesys and/or its customers.</p>
							<p className="font-weight-bold">What can you build?</p>
							<p>You can build almost anything (Ex: website, web application, Chrome extension, mobile application or whatnot?) in any programming language, using fully secured and versioned Public REST API that Genesys developers use for building Contact Centre solutions.
</p>
							<p className="font-weight-bold">Why should you participate?</p>
							<p>
								<ul>
									<li>You will gain valuable knowledge.</li>
									<li>You can win amazing prizes.</li>
									<li>Thanks to your innovative solution - the usage of Genesys products and services will become more effective!</li>
									<li>You will meet fantastic people.</li>
									<li>You will enrich your CV with this outstanding experience.</li>
									<li>Become a Purple Cow 😊</li>
								</ul>
							</p>
							<p className="font-weight-bold">How can you participate?</p>
							<p>
								<ul>
									<li>Register a team, brainstorm and build on an innovative idea, submit your abstract (refer to the timeline section)
</li>
									<li>If shortlisted, build a working prototype of your idea during the Hackathon days of Daksh (refer to the timeline section)
</li>
									<li>Present a working demo to the Genesys panel of juries.</li>
								</ul>
								<p className="font-weight-bold">Note: The Genesys APIs will be made accessible to the shortlisted teams a couple of days before the Hackathon. A separate email will be sent to each team with the instructions for accessing the platform</p>
							</p>
							<p className="font-weight-bold">What should be your team composition?</p>
							<p>
								<ul>
									<li>
										A minimum of 3 members and a maximum of 5 members.
									</li>
									<li>
										A participating student is eligible to be part of only one team.
									</li>
									<li>
										<span className="highlight">Special rewards will be given to the winning team comprising of a female member.</span>
									</li>
								</ul>
							</p>
							<p className="font-weight-bold">What are the Judging Criteria?</p>
							<p>
								<ul>
									<li>
										Innovation
										<ol>
											<li>How creative and innovative the idea is within the hackathon context?</li>
											<li>Has this been done before, or is this something new and original?</li>
										</ol>
									</li>
									<li>
										Technology
										<ol>
											<li>How technically impressive is the hack? </li>
											<li>Does it use a particularly clever technique?</li>
										</ol>
									</li>
									<li>
										Prototype Completion
									<ol>
											<li>Does the hack work? </li>
											<li>Did the team achieve everything they wanted?</li>
										</ol>
									</li>
								</ul>
							</p>
							<p className="font-weight-bold">How do you submit your abstract?</p>
							<p>A one-page document covering the following</p>
							<p>
								<ul>
									<li>Team details: Team name and team members</li>
									<li>Problem statement: What are you trying to solve?</li>
									<li>Description of the idea: What are you building in order to solve the big problem?</li>
									<li>Use cases / user scenarios: High-level description of a few core user scenarios where your product can fit</li>
									<li>Tech Stack: Your choice of language, frameworks, technology, and platforms</li>
								</ul>
							</p>
							<p className="font-weight-bold">Sample Use Cases</p>
							<p>Use Case - 1</p>
							<p>You can build Alexa skill “Banking BOT” that uses Knowledge Service & NER for Banking Services.</p>
							<p>Sample Flow</p>
							<p>

								<pre>
									User: What is the interest rate for Home loan?<br />
									BOT: Home Loan interest rate is xx.<br />
									(BOT can use Knowledge Service to get the answer)<br />
									User: What are the documents needed for Home loan?<br />
									BOT: PAN card, Sale Agreement, etc.,<br />
									(BOT can use Knowledge Service to get the answer)<br />
									User: Register my contact number 9739485581 to my account.<br />
									BOT: Your contact number is registered successfully.<br />
									(BOT could use NER to identify the entities such as Phone Number and use Banking Service to complete the request) <br />
									User: What is my account balance as on 1 st Feb?<br />
									BOT: ???<br />
									(Hope you found the way....Enjoy the hacking...😊 )<br />
								</pre>
							</p>
							<p>How to Build?</p>
							<p>
								<ul>
									<li>Create a Knowledge Base with lot of banking queries so that it can answer queries related to banking.</li>
									<li>Create Banking Service.Transfer: Deduct the amount from the host and add it to the requested party’s account.
									Balance: Return the balance amount for a given date.
									<br /><span className="font-weight-bold">NOTE: You can create as many services as you can think and use it for servicing the user.</span>
									</li>
									<li>Create a skill in Alex that collects the user query and use Knowledge base/NER or Banking Service to respond.</li>
								</ul>
							</p>
							<p>Use Case - 2</p>
							<p>You can build an “Image Wiki” that pulls you more information by just clicking snap of it.</p>
							<p>Sample Flow</p>
							<p>
								<pre>
									You can build a model to identify the objects in the image.<br />The object could be a person, animal or commercial product. <br />Pass on the identified object to Knowledge Service and get more details of that object.<br />For ex:- Click the image of famous person in your college, get the details of the person by using your trained knowledge base.
								</pre>
							</p>
							<p className="font-weight-bold">How do you present to the final judging panel?</p>
							<p>You will present live to a judging panel. Your presentation must include an explanation about the idea and a live demo of a working prototype. You can use any supporting materials (PPT, DOC, and/or Video).
Each team presentation should be no longer than 7 mins (including the live demo). This will be followed by Q&A for 8 mins.
</p>
							<p className="font-weight-bold">What is the winning Prize?</p>
							<p>
								<ul>
									<li>1st prize: INR 25,000</li>
									<li>2nd prize: INR 15,000</li>
									<li>3rd prize: INR 10,000</li>
								</ul>
							</p>
							<p className="font-weight-bold">About Genesys</p>
							<p>Genesys® powers more than 25 billion of the world’s best customer experiences each year. Genesys is the market leader in omnichannel customer experience and Contact Centre solutions. Top-industry analysts agree that Genesys is the only leader in both cloud and on-premises customer experience solutions. Genesys’ solutions have consistently led the industry with Gartner recognizing the company as a leader in its Magic Quadrant for Contact Centre Infrastructure.Our success comes from connecting employee and customer conversations on any channel. Every day, 11,000 companies in more than 100 countries trust our #1 customer experience platform to drive great business outcomes and create lasting relationships. Combining the best of technology and human ingenuity, we build solutions that mirror natural communication and work the way you think.  Helping companies deliver seamless omnichannel customer journeys and build lasting relationships is what we do.  Our industry-leading solutions foster true omnichannel engagement because they perform equally well across channels, on-premise and in the cloud. Experience communication as it should be: fluid, instinctive and profoundly empowering
</p>
							<p>Genesys is headquartered at Daly City, California, and offices are in over 100 countries across the globe. As a globally diverse company, Genesys gives employees opportunities to contribute in a fast-paced environment, with supportive, sincere, authentic, and fun people. Ideas and suggestions are valued, diversity is embraced, and successes are celebrated. Together, we’re defining the future of customer experience while building our careers and forging lifetime connections. Genesys has a strong employee base of more than 5000 across all these global locations. In India, Genesys has over 600 employees with offices in Chennai, Hyderabad, Bangalore, Mumbai, and Gurgaon. Outside North America, India is the largest R & D base for Genesys. Some of our key customers are Paypal, T Mobile, British Telecom, and Emirates Airlines.
</p>
							<p>We work on a wide range of development and automation technologies, some of which are, C/C++, Java, and Kotlin for backend development; React JS, Vue JS, Ember, and Knockout for front end development; Selenium, Python, Chef, and Cucumber for automation; Kubernetes, Docker, and Jenkins for deployment.  Amazon Web Services (AWS) is our primary partner for delivering our products in a Software as a Service model. We are also moving towards other cloud platforms like Microsoft Azure and Google Cloud. There is also an increasing focus towards usage of Artificial Intelligence in the solutions that we offer. There are innovation workshops that happen each year, through which new innovative solutions are added to our repository.
</p>
							<p>Visit <a href="https://www.genesys.com" target="_blank">genesys.com</a> on <a href="https://twitter.com/Genesys" target="_blank">Twitter</a>,<a href="https://www.facebook.com/Genesys/" target="_blank">Facebook</a>, <a href="https://www.youtube.com/Genesys" target="_blank">Youtube</a>, <a href="https://www.linkedin.com/company/genesys" target="_blank">LinkedIn</a> and the <a href="http://blog.genesys.com/https:/www.genesys.com/company?utm_source=prnewswire&utm_medium=pr&utm_campaign=pr_ExecAppointments_20190918" target="_blank">Genesys Blog</a>
							</p>
							<p className="font-weight-bold">For any questions / comments / clarifications, please contact </p>
							<p><a href="mailto:Genesys-Daksh-Hackathon@genesys.com">Genesys-Daksh-Hackathon@genesys.com</a></p>
						</div>
						<div className="col-md-4 poster-wrapper">
							<img src={poster} className="poster rounded" />
							<p className="note"> Note : Please Read the API Docs</p>
							<div className="btn-grp">
								<a className="btn btn-blue" target="_blank" href={ps}>API Docs</a>
								{
									this.props.authState
										? <button className="btn btn-red" data-toggle="modal" data-target="#hackregister">Register</button>
										: <button className="btn btn-red" onClick={() => { toast.error("Please login to register for hackathons") }}>Register</button>
								}
							</div>
						</div>
					</div>
					{/* <div className="bottom-part">
						<img id="timeline" src={TimeLine} className="img-fluid" />
					</div> */}
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
