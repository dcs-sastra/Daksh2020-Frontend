import React, { Component } from "react";
import "./Home.css";

import Main from "./main/Main";
import Contact from "./contact/Contact";
import Workshops from './workshops/workshop';
import Sponsors from './sponsors/sponsor';

class Home extends Component {
  render() {
    return (
      <div className="contain">
        <Main></Main>
        <Workshops />
        {/* <ComeSoon></ComeSoon> */}
        <Sponsors />
        <Contact />
      </div>
    );
  }
}

export default Home;
