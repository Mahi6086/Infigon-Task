import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import logo from "./logo/logo.png";
const Navber = () => {
  return (
    <div className="navber-container">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="">
          <img className="img-fluid w-50" src={logo} alt="" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto fs-6 ">
            <Link to="/home" className="nav-link mt-1 fw-bolder me-5">
              <span className="navber-style pb-1"> Home</span>
            </Link>

            <Link to="/howWeHelp" className="nav-link  mt-1 fw-bolder me-5">
              <span className="navber-style pb-1">How We Help</span>
            </Link>
            <Link to="/programs" className="nav-link mt-1 fw-bolder me-5">
              <span className="navber-style pb-1">Programs</span>
            </Link>

            <Link
              to="/faqs"
              className="nav-link mt-1 fw-bolder me-5"
              style={{ textDecoration: "none" }}
            >
              <span className="navber-style pb-1">FAQS</span>
            </Link>

            <Link to="/getInTouch" className="nav-link">
              <button className="navber-btn fw-bolder">Get In Touch</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
