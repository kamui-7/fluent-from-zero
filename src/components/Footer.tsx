import React from "react";
import { FaDiscord, FaPatreon } from "react-icons/fa";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <div className="seperator"></div>
      <footer id="footer">
        <div className="footer__social-media">
          <a href="https://discord.gg/QgYDuYCWux">
            <FaPatreon className="footer__discord" />
          </a>

          <a href="https://www.patreon.com/FluentFromZero">
            <FaDiscord className="footer__patreon" />
          </a>
        </div>
        <ul className="footer__links">
          <li>&copy; 2020, Fluent From Zero</li>
          <li>
            <a href="https://github.com/kamui-7/Fluent-From-Zero/blob/main/LICENSE">
              License
            </a>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
