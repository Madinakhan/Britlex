import React from "react";
import "./home.scss";
import homeImg from "./Learning languages-bro 1.png";

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <div className="left">
          <h1>Learn Any Foreign Language</h1>
          <p>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button>Get started</button>
        </div>
        <div className="home-img">
          <img src={homeImg} />
        </div>
      </section>
    );
  }
}
