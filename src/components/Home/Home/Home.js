import React from "react";
import Navber from "../../Share/Navber/Navber";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Navber></Navber>
      <Banner></Banner>
    </div>
  );
};

export default Home;
