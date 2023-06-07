import React from "react";
import "./about.scss";
import aboutImg from "./Business competition-bro 1.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="left">
          <h3>About Us</h3>
          <p>
            The model offers a framework for discussing problems related to the
            user's experience, as well as possible ways and means of solving
            them. Application development begins at the top level (strategy),
            where the future software product is described quite abstractly from
            the point of view of the expectations of both users and the
            customer.
          </p>
          <div className="left-bottom">
            <div>
              <span>800</span>
              <p>Pupils</p>
            </div>
            <div>
              <span>18</span>
              <p>Teachers</p>
            </div>
            <div>
              <span>6</span>
              <p>Foreign languages</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={aboutImg} />
        </div>
      </div>
    );
  }
}
