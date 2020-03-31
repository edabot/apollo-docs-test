const themeOptions = require("gatsby-theme-apollo-docs/theme-options");

module.exports = {
  pathPrefix: "/docs/apollo-server",
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: "Apollo Server",
        description: "A guide to using Apollo Server",
        githubRepo: "edabot/apollo-docs-test",
        defaultVersion: "1",
        sidebarCategories: {
          null: ["index", "tutorial/whats-next"]
        }
      }
    }
  ]
};
