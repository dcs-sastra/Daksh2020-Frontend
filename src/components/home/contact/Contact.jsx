import React,{Component} from "react";

import DakshWhite from "../../../assets/dakshWhite.png";

import "./Contact.css"

class Contact extends Component{
    render(){
        return(
            <div>
                <div class="contactus container">
                    <div class="row">
                        <div class="col">
                            <img src={DakshWhite} alt=""/>
                        </div>
                        <div class="col">
                            <div class="row marbot"><span class="cus">Contact Us</span></div>
                            <div class="row marbot">
                                <div class="col flex-end">
                                    <span>Student Co-Ordinator</span>
                                    <span>coordinator.daksh@sastra.ac.in</span>
                                    <span>+91-81064-88664</span>
                                </div>
                                <div class="col flex-end">
                                    <span>Student Secretary</span>
                                    <span>chairman.daksh@sastra.ac.in</span>
                                    <span>+91-82480-18114</span>
                                </div>
                            </div>
                            <div class="row marbot">
                                <div class="col flex-end">
                                    <span>For sponsorship related queries</span>
                                    <span>marketing.daksh@sastra.ac.in</span>
                                    <span>+91-82205-91664</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Contact;