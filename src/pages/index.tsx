import React from "react";
import "../scss/index.scss";
import About from "../components/About";
import Benefits from "../components/Benefits";
import CallToAction from "../components/CallToAction";
import Layout from "../components/Layout";
import Wave from "../images/wave.svg";

const Home = () => {
  return (
    <Layout index={true}>
      <img src={Wave} className="wave" alt="" />
      <About />
      <Benefits />
      <CallToAction />
    </Layout>
  );
};

export default Home;
