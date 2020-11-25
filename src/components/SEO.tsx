import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            lang
            color
            image
            metaImage {
              width
              height
            }
          }
        }
      }
    `
  );

  const { description } = site.siteMetadata;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  const lang = site.siteMetadata.lang;
  const title = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charSet: "utf-8",
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          name: "theme-color",
          content: site.siteMetadata.color,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat([
        {
          property: "og:image",
          content: site.siteMetadata.image,
        },
        {
          property: "og:image:width",
          content: site.siteMetadata.metaImage.width,
        },
        {
          property: "og:image:height",
          content: site.siteMetadata.metaImage.height,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ])}
    />
  );
}

export default SEO;
