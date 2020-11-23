import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Img from "gatsby-image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql, Link } from "gatsby";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav id="nav-bar">
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
      )}
      <a href="/" className="nav-bar__logo">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
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
          <AnchorLink offset="150" href="#about">
            About
          </AnchorLink>
        </li>
        <li className="nav-bar__menu-item">
          <AnchorLink offset="150" href="#benefits">
            Benefits
          </AnchorLink>
        </li>
        <li className="nav-bar__menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
