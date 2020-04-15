module.exports = {
  pathPrefix: "Wedding salon Victoria Simak",
  siteMetadata: {
    title: `Свадебные платья от Victoria Simak`,
    description: `Свадебные платья от Victoria Simak`,
    author: `Billy Jacoby`,
    siteUrl: `https://condescending-boyd-6c281f.netlify.app`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
   

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,https://goo.gl/maps/jNDpZf2MR8Gi89GBA
  ],
}
/*
resolve: `gatsby-source-filesystem`,
options: {
    name: `contents`,
    path: `${__dirname}/contents/`
}
},*/