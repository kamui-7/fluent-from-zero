import React from "react";
import Helmet from "react-helmet";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Helmet
        title="Fluent From Zero"
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            charSet: "utf-8",
          },
          {
            name: "description",
            content:
              "Fluent From Zero is a Japanese learning service, that will help you reach a high level of fluency in Japanese.",
          },
          {
            name: "keywords",
            content: "FFZ",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>

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
