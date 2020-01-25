import React, {Component} from "react";

class HackInfo extends Component{
    render(){
        return(
            <h1 class="blank">{this.props.hackName}</h1>
        )
    }
}

export default HackInfo;