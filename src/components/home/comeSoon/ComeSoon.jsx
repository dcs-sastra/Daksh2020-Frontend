import React, { Component } from "react";
import "./comeSoon.css"
import { subscribe } from '../../../actions/Thunks/thunk';
import { connect } from 'react-redux';

class ComeSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
            this.props.subscribe(this.state.email);
            this.setState({email:''})
         }
        // this.handleSubmit = (e) => async() => {
        //     e.preventDefault();
            
            
        // }
        this.handleChange = (e) => {
            this.setState({
              email: e.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <div class="container">
                    <div class="cs" >
                        <div>
                            <div class="cs-content"  >
                                <div className="red-dot"></div>
                                <p class="clusters">Workshops</p>
                            </div>
                        </div>
                        <div>
                            <div class="cs-content" >
                                <div className="red-dot"></div>
                                <p class="clusters">Powertalks</p>
                            </div>
                        </div>
                        <div>
                            <div class="cs-content" >
                                <div className="red-dot"></div>
                                <p class="clusters">Shows</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span>Coming</span>
                    <span>Soon!</span>
                    <br />
                    <p class="text-secondary">Hey, with Daksh around the corner, don't waste time looking up for the site. Type in your email and we'll keep you posted. </p>
                    <br />
                    <div class="container subscribe-form" >
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" name="email" className="subscribe" placeholder="Your email" id="inputB1" onChange={this.handleChange} value={this.state.email} required/>
                            <button type="submit" className="subscribe-btn" id="inputB2">Subscribe</button>
                        </form>
                    </div>
                    <br /> <br /><br />
                </div>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//         email: state.email
//     }
// }


export default connect(null, { subscribe })(ComeSoon);
// export default ComeSoon;
