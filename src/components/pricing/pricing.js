import React from "react";
import "./pricing.scss";
import pricingImg1 from "./Online test-bro 1.png";
import pricingImg2 from "./Lesson-bro 1.png";
import pricingImg3 from "./Webinar-bro 2.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="pricing" id="pricing">
        <h3>Pricing</h3>
        <div className="pricing-box">
          <div className="box">
            <div className="pricing-img">
              <img src={pricingImg1} />
            </div>
            <span>Self-study online course</span>
            <p>
              Start learning English online in live classes with qualified EC
              teachers.
            </p>
            <div className="price">
              <h4> £5.99</h4>
              <p> per month</p>
            </div>
          </div>
          <div className="box">
            <div className="pricing-img">
              <img src={pricingImg2} />
            </div>
            <span>Live online classes</span>
            <p>
              Interactive group classes with expert teachers. Free 7-day trial
            </p>
            <div className="price">
              <h4> £12.99</h4>
              <p> per month</p>
            </div>
          </div>
          <div className="box">
            <div className="pricing-img">
              <img src={pricingImg3} />
            </div>
            <span>Personal Tuition</span>
            <p>
              Online one-to-one English tutoring – enjoy our first session for
              only $1
            </p>
            <div className="price">
              <h4> £20.99</h4>
              <p> per month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
