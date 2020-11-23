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
      <section className="benefits">
        <div className="benefits__left-side">
          <h2 className="benefits__title">
            Optimize your store for the search engines and gain the edge
          </h2>
          <p className="benefits__features-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            voluptatum aliquam earum nostrum eaque nihil rem libero
            exercitationem, aperiam repellat quam esse voluptates, ut ipsa a!
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
                  # Specify the image processing specifications right in the query.
                  # Makes it trivial to update as your page's design changes.
                  # 500
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
