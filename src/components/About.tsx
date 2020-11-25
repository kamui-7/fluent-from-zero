import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery, Link } from "gatsby";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <article className="about__andreu-card">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "andreu_pfp.webp" }) {
                childImageSharp {
                  fixed(width: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Img
              className="about__discord-icon"
              fixed={data.file.childImageSharp.fixed}
            />
          )}
        />

        <div className="about__andreu-bio">
          <FaQuoteLeft />
          <p>
            As someone who's a polyglot, I believe anyone can learn a language
            to a high-level of fluency and I want to help you achieve this
          </p>
          <FaQuoteRight />
        </div>
        <div className="about__andreu-title">
          <h3 className="about__andreu-tag">Andreu</h3>
          <h4 className="about__andreu-role">
            Main teacher of Fluent From Zero
          </h4>
        </div>
      </article>
      <div className="about__company">
        <h4 className="about__label">ABOUT US</h4>
        <h2 className="about__title">The right way to learn Japanese</h2>
        <p className="about__desc">
          Here at Fluent from Zero, we are focused on the needs of students who
          wish to reach a high level of fluency in Japanese. We are a group of
          committed language enthusiasts, dedicated to helping you learn
          Japanese quickly and efficiently. Our way of teaching has been tried
          and tested on hundreds of other learners, always providing great
          results. And you can be next!
        </p>

        <a href="mailto:fluentfromzero@gmail.com" className="button-secondary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
