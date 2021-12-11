import React from "react";
import "./Banner.css";
import img from "./images/TASK - REACT (1).jpeg";
const Banner = () => {
  return (
    <div className="Banner-container">
      <div className="Banner-box">
        <div className="row">
          <div className="col-2 col-md-2">
            <div className="vertical-line"></div>
          </div>
          <div className="col-10 col-md-10">
            <div className="row">
              <div className="col-10 col-md-5 ">
                <div
                  className="Box"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h1 className="title">How we can Help</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem nam animi non maiores recusandae id cumque assumenda
                    labore! Aliquam commodi aspernatur debitis temporibus
                    facilis id earum, consequuntur perspiciatis, consequatur
                    doloribus voluptas ut voluptatum pariatur.
                  </p>
                  <div>
                    <span className="step me-3">STEP 1</span>
                    <span className="SELF-ANALYSIS">SELF ANALYSIS</span>
                  </div>
                  <div>
                    <span className="step me-3">STEP 1</span>
                    <span className="SELF-ANALYSIS">SELF ANALYSIS</span>
                  </div>
                  <div>
                    <span className="step me-3">STEP 1</span>
                    <span className="SELF-ANALYSIS">SELF ANALYSIS</span>
                  </div>
                  <div>
                    <span className="step me-3">STEP 1</span>
                    <span className="SELF-ANALYSIS">SELF ANALYSIS</span>
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-5">
                <div
                  className="Box text-center pb-5"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img className="demo-image" src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
