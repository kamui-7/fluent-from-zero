import React from "react";
import { Helmet } from "react-helmet";
import "../scss/index.scss";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import CallToAction from "../components/CallToAction";
import Wave from "../images/wave.svg";

const Home = () => {
  return (
    <>
      <Helmet
        title="Fluent From Zero"
        meta={[
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            {
              charSet: "utf-8",
            },
            {
              name: "description",
              content:
                "Fluent From Zero is a Japanese learning service, that will help you reach a high level of fluency in Japanese.",
            },
            {
              name: "keywords",
              content: "FFZ",
            },
          ]}
        >
        <html lang="en" />
      </Helmet>
      <main>
        <section className="landing-section">
          <Nav path="/"/>
          <Landing />
        </section>
        <img src={Wave} className="wave" alt="" />
        <About />
        <Benefits />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
};

export default Home;
