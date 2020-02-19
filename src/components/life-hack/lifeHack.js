import React from 'react'
import './lifeHack.css';
import hacks from './hacks';
import dakshLogo from '../../assets/dakshLogo.svg'
import sideImg from '../../assets/hack-side1.svg'

const LifeHack = () => {
  let index = parseInt(Math.random() * 100); // Change 1 to number of hacks
  return (
    <div className="wrapper">
      <div className="text-center"><img src={dakshLogo} alt="..." /></div>
      <div className="row hack-info">
        <div className="col-md-6 col-sm-12 text-center">
          <h1 className="title">Hack for the hour!</h1>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
          <img src={sideImg} alt=".." width="300px" />
        </div>
      </div>
      <h2 className="text-center  ">{hacks[index].title}</h2>
      <footer>
        <h3 className="text-center footer-tag">#BUILD_THINGS_THAT_MATTER</h3>
      </footer>
    </div>
  );
}

export default LifeHack;
