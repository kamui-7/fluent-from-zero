import React from "react";
import { FaDiscord, FaPatreon } from "react-icons/fa";
// import "../scss/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="seperator"></div>
      <footer className="footer">
        <div className="footer__social-media">
          <a href="#">
            <FaPatreon className="footer__discord" />
          </a>

          <a href="#">
            <FaDiscord className="footer__patreon" />
          </a>
        </div>
        <ul className="footer__links">
          <li>&copy; 2020, Fluent From Zero</li>
          <li>
            <a href="#">License</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
