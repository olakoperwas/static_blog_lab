module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sharp`,  
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-remark',
      {
        resolve: `gatsby-source-filesystem`,
        options:{
        name: `src`,
        path: `${__dirname}/src`
        }
        }, 
      {
      resolve: `gatsby-source-filesystem`,
      options:{
      name: `pages`,
      path: `${__dirname}/src/pages`
      }
      }, 
      {
        resolve: `gatsby-source-filesystem`,
        options:{
        name: `images`,
        path: `${__dirname}/src/images`
        }
        }, 
        {
          resolve: `gatsby-source-filesystem`,
          options:{
          name: `blog-posts`,
          path: `${__dirname}/src/blog-posts`
          }
          }, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      
      },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
