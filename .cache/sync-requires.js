const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/edlewis/Sites/gatsby-apollo-docs/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-apollo-core-src-pages-404-js": hot(preferDefault(require("/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-theme-apollo-core/src/pages/404.js")))
}

