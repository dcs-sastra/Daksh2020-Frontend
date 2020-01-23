import React, { Component } from "react";
import "./Home.css";

import Main from "./main/Main";
import Contact from "./contact/Contact";

class Home extends Component {
  render() {
    return (
      <div className="contain">
        <Main></Main>
        <Contact></Contact>
      </div>
    );
  }
}

export default Home;