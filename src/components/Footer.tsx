import React from "react";
import { FaDiscord, FaPatreon } from "react-icons/fa";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <div className="seperator"></div>
      <footer id="footer">
        <div className="footer__social-media">
          <a
            href="https://www.patreon.com/FluentFromZero"
            aria-label="Link to fluent from zero discord"
            target="_blank"
            rel="noopener"
          >
            <FaPatreon className="footer__patreon" />

          </a>

          <a
            href="https://discord.gg/YyjBw3ZW3T"
            aria-label="Link to fluent from zero patreon"
            target="_blank"
            rel="noopener"
          >
            <FaDiscord className="footer__discord" />

          </a>
        </div>
        <ul className="footer__links">
          <li>&copy; 2020, Fluent From Zero</li>
          <li>
            <a
              href="https://github.com/kamui-7/Fluent-From-Zero/blob/main/LICENSE"
              target="_blank"
              rel="noopener"
            >
              License
            </a>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact Us</Link>
          </li> */}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
