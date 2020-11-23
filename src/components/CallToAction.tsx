import React from "react";

const CallToAction = () => {
  return (
    <section id="call-to-action">
      <p className="call-to-action__top-text">IMPRESSED</p>
      <h2 className="call-to-action__title">
        Curious yet?<br></br> Start learning Japanese today.
      </h2>
      <div className="call-to-action__buttons">
        <a
          href="https://discord.gg/QgYDuYCWux"
          target="_blank"
          className="button-primary"
          rel="noopener"
        >
          Join Server
        </a>
        <a
          href="https://www.patreon.com/FluentFromZero"
          rel="noopener"
          target="_blank"
          className="button-brown"
        >
          Our Patreon
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
