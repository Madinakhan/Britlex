import React from "react";
import "./home.scss";
import img from "./img.png";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home-left">
          <h1>
            Learn Any <br /> Foreign <br />
            Language
          </h1>
          <p>
            With our teachers who write a program for each student, you will be
            able to make yourfirst sketch after the first lesson.
          </p>
          <div className="get-started">Get started</div>
        </div>
        <div className="home-right">
          <img src={img} alt="Home image" />
        </div>
      </div>
    );
  }
}