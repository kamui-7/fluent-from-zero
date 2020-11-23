import React from "react";
import { FiBook } from "react-icons/fi";
import {
  AiOutlineDollarCircle,
  AiOutlineFire,
  AiOutlineCheck,
} from "react-icons/ai";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Benefits = () => {
  return (
    <div className="container">
      <section id="benefits">
        <div className="benefits__left-side">
          <h2 className="benefits__title">
            What We Offer For Teaching Japanese
          </h2>
          <p className="benefits__features-desc">
            We provide a learning pace to fit everyone's needs. This is what we
            offer with our service:
          </p>
          <ul className="benefits__benefits-list">
            <li className="benefits__benefit">
              <div className="benefits__circle">
                <FiBook size={25} />
              </div>
              <p className="benefits__desc">
                3-hour weekly lessons w/ tutoring included
              </p>
            </li>
            <li className="benefits__benefit">
              <div className="benefits__circle">
                <AiOutlineDollarCircle size={25} />
              </div>
              <p className="benefits__desc">
                Extremely cheap prices (5x cheaper than other tutors)
              </p>
            </li>
            <li className="benefits__benefit">
              <div className="benefits__circle">
                <AiOutlineFire size={25} />
              </div>
              <p className="benefits__desc">
                Fast-paced and innovative learning
              </p>
            </li>
            <li className="benefits__benefit">
              <div className="benefits__circle">
                <AiOutlineCheck size={25} />
              </div>
              <p className="benefits__desc">Assignments for the whole week </p>
            </li>
          </ul>
        </div>
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "pros.webp" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Img
              className="benefits__right-side"
              fluid={data.file.childImageSharp.fluid}
            />
          )}
        />
      </section>
    </div>
  );
};

export default Benefits;
