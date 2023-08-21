/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Xomacs`,
    description: `Leading the Digital Revolution`,
    author: `@aishakhan0925`,
    siteUrl: `https://dev.xomacs.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        plugins: [
          require(`tailwindcss`),
          // Other PostCSS plugins
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://xomacs.com/graphql",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
