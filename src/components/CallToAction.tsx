import React from "react";
// import "../scss/callToAction";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <p className="call-to-action__top-text">IMPRESSED</p>
      <h2 className="call-to-action__title">
        Curious yet?<br></br> Start learning Japanese today.
      </h2>
      <p className="call-to-action__desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
        magni!
      </p>
      <div className="call-to-action__buttons">
        <a href="#" className="button-primary">
          Join Server
        </a>
        <a href="#" className="button-secondary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
