import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Wave from "../images/wave.svg";
import Img from "gatsby-image";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing__left-main">
          <div className="landing__orange-circle" />
          <StaticQuery
            query={graphql`
              query {
                file(relativePath: { eq: "daco.png" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={(data) => (
              <Img
                className="landing__daco"
                fixed={data.file.childImageSharp.fluid}
              />
            )}
          />
        </div>
        <div className="landing__right-main">
          <h1 className="landing__title">Fluent From Zero</h1>
          <h2 className="landing__description">
            Start learning Japanese with us on Discord!
          </h2>
          <a className="button-primary" href="#">
            Join Server
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
