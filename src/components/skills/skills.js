import React from "react";
import "./skills.scss";
import skillsImg1 from "./Shared goals-bro 1.png";
import skillsImg2 from "./Typewriter-bro 1.png";
import skillsImg3 from "./House bookshelves-bro 1.png";
import skillsImg4 from "./Podcast audience-bro 1.png";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="box">
          <div className="left">
            <img src={skillsImg1} />
            <span>Speaking</span>
            <p>
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only
            </p>
            <p>
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </p>
            <button>Learn more</button>
          </div>
          <div className="right">
            <div className="top">
              <div className="top-left">
                <img src={skillsImg2} />
                <span>Writing</span>
                <p>
                  One of the most important and extensive areas of natural
                  science, the science that studies substances, also their
                  composition
                </p>
                <button>Learn more</button>
              </div>
              <div className="top-right">
                <img src={skillsImg3} />
                <span>Reading</span>
                <p>
                  perception and response actions of the user resulting from the
                  use and/or upcoming use of the product, system or service
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-left">
                <span>Listening</span>
                <p>
                  Here you can find activities to practise your listening
                  skills. Listening will help you to improve your understanding
                </p>
                <button>Learn more</button>
              </div>
              <div className="bottom-rigth">
                <img src={skillsImg4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
