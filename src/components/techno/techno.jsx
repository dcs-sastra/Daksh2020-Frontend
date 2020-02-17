import React, { Component } from "react";

import { toast } from 'react-toastify';


import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";
import Doodle from "../../assets/hackInfo/Doodle.png";
import Ripple from "../../assets/hackInfo/Ripple.png";
import UpperImage from "../../assets/hackInfo/UpperImage.png";
import sherlock from '../../assets/sherlock.jpg'
import market from '../../assets/market.jpg'

class Techno extends Component {

  render() {
    return (
      <div className="hack-info-wrapper">
        <img src={UpperImage} id="upper-image" />
        <img src={Ripple} id="ripple" />
        <img src={Doodle} id="doodle" />
        <div className="my-social">
          <a target="_blank" href="https://www.facebook.com/daksh.sastra/"><img src={Fb} className="social-icon" /></a>
          <a target="_blank" href="https://www.instagram.com/daksh2k20/"><img src={Insta} className="social-icon" /></a>
          <div className="line" />
        </div>
        <div className="hackinfo-area">
          <h1 className="text-center">Technotainment</h1>
          <br /><br />
          <div className="top-part row">
            <div className="hack-text col-md-8">
              <header className="my-header">
                <div className="my-title">
                  Sherlock
								</div>

              </header>
              <p className="hack-desc">Some locks are never meant to be opened. Opening the wrong door often leads to chaos.
              Playing as Sherlock and Watson, it's your job to hunt the clues, work on finer details to flip around any mystery in the case and untangle and entangle.
              #every_detail_counts
<br /><br />
                Members per team : 2
<br /><br />
                Contact <br />
                Vinanthi    96771 86419<br />
                Kousshik  94442 18967<br />
              </p>
              <p></p>
              <div className="btn-grp">
                <a target="_blank" href="https://tinyurl.com/sherlock2020" className="btn btn-red">Register</a>
              </div>
            </div>
            <div className="col-md-4 poster-wrapper">
              <img src={sherlock} className="img-fluid poster rounded" />
            </div>
          </div>
        </div>
        <div className="hackinfo-area">
          <div className="top-part row">
            <div className="hack-text col-md-8">
              <header className="my-header">
                <div className="my-title">
                  Marketshetra
								</div>

              </header>
              <p className="hack-desc">A well engineered product deserves a well managed environment. Do you think you've got the management skills to sustain in the competitive corporate world? If you do, then hurry up and reserve a seat in Marketshetra '20 and get ready to suit up for the combat and fight the battle of minds!

</p>
              <br /><br />
              Members per team : 2
              <br /><br />
              Contact <br />
              Vinanthi    96771 86419<br />
              Kousshik  94442 18967<br />
              <div className="btn-grp">
                <a target="_blank" href=" https://tinyurl.com/marketshetra20" className="btn btn-red">Register</a>
              </div>
            </div>
            <div className="col-md-4 poster-wrapper">
              <img src={market} className="img-fluid poster rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Techno;
