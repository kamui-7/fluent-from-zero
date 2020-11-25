import React, { Fragment, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Img from "gatsby-image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql, Link } from "gatsby";
import { useStaticQuery } from "gatsby";

const Nav = (props) => {
  const { path } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
        <Img fixed={data.file.childImageSharp.fixed} />
        <p>FFZ</p>
      </a>
      <ul
        className={
          menuActive ? `nav-bar__menu-items` : `nav-bar__menu-items--inactive`
        }
      >
        {path == "/" ? (
          <Fragment>
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
          </Fragment>
        ) :
          <Fragment>
            <li className="nav-bar__menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-bar__menu-item">
              <a 
                href="https://www.patreon.com/FluentFromZero"
                target="_blank"
                rel="noopener"
              >
                Support Us
              </a>
            </li>
          </Fragment>
        }
        <li className="nav-bar__menu-item">
          <a 
            href="https://discord.gg/YyjBw3ZW3T"
            target="_blank"
            rel="noopener"
          >
            Join Server
          </a>
          {/* <Link to="/contact">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
