const themeOptions = require("gatsby-theme-apollo-docs/theme-options");

module.exports = {
  pathPrefix: "/docs/apollo-server",
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: "This Site",
        description: "A description of this site",
        // githubRepo: "apollographql/apollo-server",
        defaultVersion: "2",
        sidebarCategories: {
          null: ["index", "tutorial/whats-next"]
        },
        navConfig: {
          "Other site": {
            url: "https://www.google.com",
            description: "Search on Google.",
            omitLandingPage: true
          }
        }
      }
    }
  ]
};
