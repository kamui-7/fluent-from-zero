import React from "react";
import Helmet from "react-helmet";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import SEO from "./SEO";

const Layout = (props) => {
  return (
    <>
      <SEO pathname={props.pathname} />
      <main>
        {props.index ? (
          <section className="landing-section">
            <Nav path="/" />
            <Landing />
          </section>
        ) : (
          <Nav />
        )}
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
