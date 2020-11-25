/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Fluent From Zero`,
    description: `Fluent From Zero is a Japanese learning service, that will help you reach a high level of fluency in Japanese.`,
    author: `@Luck`,
    keywords: [
      "Fluent From Zero",
      "Learn Japanese",
      "Japanese",
      "Hiragana",
      "Katakana",
      "Japanese Language",
      "Immersion",
      "Study Japanese",
    ],
    siteUrl: "https://fluentzero.com",
    lang: "en",
    image:
      "https://media.discordapp.net/attachments/699703291629535344/781261389879705670/discord-banner.jpg",
    metaImage: {
      width: "1177",
      height: "662",
    },
    color: "#f7a207",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      jsxPragma: `jsx`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fluent From Zero`,
        short_name: `FFZ`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#f7a207`,
        display: `standalone`,
        icon: "src/images/favicon.png",
        icon_options: {
          purpose: "maskable",
        },
      },
    },
  ],
};
