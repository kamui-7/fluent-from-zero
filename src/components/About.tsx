import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const About = () => {
  return (
    <section className="about">
      <article className="about__andreu-card">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "andreu_pfp.png" }) {
                childImageSharp {
                  # Specify the image processing specifications right in the query.
                  # Makes it trivial to update as your page's design changes.
                  fixed(width: 128, height: 128) {
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

        <p className="about__andreu-bio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          consectetur provident itaque modi rem quas quasi officiis quam nisi
        </p>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          fugit dolores reiciendis, commodi aliquid minus cum doloremque ipsa,
          sapiente expedita iste dignissimos fuga molestiae soluta tenetur earum
          error a quasi perferendis? Ipsam fuga, odit temporibus inventore
          consequatur distinctio maiores dolorum animi reiciendis aspernatur
          harum fugiat, nesciunt incidunt ipsa labore deserunt.
        </p>
        <a href="#" className="button-secondary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
