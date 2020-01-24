import React, { Component } from "react";
import "./Home.css";

import Main from "./main/Main";
import Contact from "./contact/Contact";
import ComeSoon from "./comeSoon/ComeSoon";

class Home extends Component {
  render() {
    return (
      <div className="contain">
        <Main></Main>
        <ComeSoon></ComeSoon>
        <Contact></Contact>
      </div>
    );
  }
}

export default Home;