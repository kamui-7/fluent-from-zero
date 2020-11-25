import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const Landing = () => {
  return (
    <>
      <section id="landing">
        <div className="landing__left-main">
          <div className="landing__orange-circle" />
          <StaticQuery
            query={graphql`
              query {
                file(relativePath: { eq: "daco.webp" }) {
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
                fluid={data.file.childImageSharp.fluid}
              />
            )}
          />
        </div>
        <div className="landing__right-main">
          <h1 className="landing__title">Fluent From Zero</h1>
          <h2 className="landing__description">
            Start learning Japanese with us on Discord!
          </h2>
          <a
            className="button-primary"
            target="_blank"
            href="https://discord.gg/YyjBw3ZW3T"
            rel="noopener"
          >
            Join Server
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
