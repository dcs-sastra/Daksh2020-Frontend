import React, { Component } from "react";
import "./Home.css";

import Main from "./main/Main";

class Home extends Component {
  render() {
    return (
      <div className="contain">
        <Main></Main>
        <div className="text-center">
          Developed with &#9829; by DSC
        </div>
      </div>
    );
  }
}

export default Home;