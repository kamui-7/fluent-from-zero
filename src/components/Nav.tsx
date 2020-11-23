import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="nav-bar">
      {menuActive ? (
        <AiOutlineClose
          className="nav-bar__toggle-button"
          onClick={toggleMenu}
        />
      ) : (
        <AiOutlineMenu
          className="nav-bar__toggle-button"
          onClick={toggleMenu}
        />
      )}{" "}
      <a href="#" className="nav-bar__logo">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                  # Specify the image processing specifications right in the query.
                  # Makes it trivial to update as your page's design changes.
                  fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={(data) => <Img fixed={data.file.childImageSharp.fixed} />}
        />
        <p>FFZ</p>
      </a>
      <ul
        className={
          menuActive ? `nav-bar__menu-items` : `nav-bar__menu-items--inactive`
        }
      >
        <li className="nav-bar__menu-item">
          <a href="#">About</a>
        </li>
        <li className="nav-bar__menu-item">
          <a href="#">Benefit</a>
        </li>
        <li className="nav-bar__menu-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
