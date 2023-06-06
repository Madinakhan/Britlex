import React from "react";
import "./header.scss";
import logo from "./logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" />
        <nav className="nav">
          <div className="menu">Home</div>
          <div className="menu">Skills</div>
          <div className="menu">About us</div>
          <div className="menu">Pricing</div>
          <div className="menu">Contacts</div>
          <div className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </nav>
        <div className="talk-btn">Let's Talk</div>
        <div className="menu-icon menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    );
  }
}
