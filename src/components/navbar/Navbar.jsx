import React, { Component } from "react";
import logo from '../../assets/dakshLogo.svg';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
                <NavLink className="navbar-brand navbar__brand" to="/">
                    <img src={logo} className="navbar__logo" alt=""></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-center">
                            <NavLink to="/hackathon" className="nav-link">
                                Hackathon
                            </NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to="/contact" className="nav-link">
                                Dive In
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
