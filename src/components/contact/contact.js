import React from "react";
import "./contact.scss";
import img from "./img.png";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-left">
          <img src={img} alt="" />
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Contact Us</h2>
          <p>
            Discover your current English level by taking our free online English test.Sign up to our newsletter for
            learning tips and free resources
          </p>
          <div className="inputs">
          <input type="email" className="email-input" placeholder="Enter Your E-mail" />
          <input type="button" className="submit-input" value="Subscribe" />
          </div>
        </div>
      </div>
    );
  }
}