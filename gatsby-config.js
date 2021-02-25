module.exports = {
  siteMetadata: {
    title: `yaf swamy`,
    description: `hola`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YDNF50Y0YK", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/AMLOVE.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1KSbiYVXgglRO498kDySG5W59JCdO2xICg5n2rVf8XKo',
        worksheetTitle: '1',
        credentials: require('./src/client_secret.json')
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDCNlcoMR3j0wGQ1swe8jq2nurriMD5qh0",
          authDomain: "yafswamy-mainsite.firebaseapp.com",
          projectId: "yafswamy-mainsite",
          storageBucket: "yafswamy-mainsite.appspot.com",
          messagingSenderId: "1049463982093",
          appId: "1:1049463982093:web:9d21758e5a9a74409d2d44"
        }
      }
    }
  ],
}
