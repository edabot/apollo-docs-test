var plugins = [{
      plugin: require('/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":72},
    },{
      plugin: require('/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-autolink-headers","options":{"offsetY":72}},{"resolve":"gatsby-remark-copy-linked-files","options":{"ignoreFileExtensions":[]}},{"resolve":"gatsby-remark-mermaid","options":{"mermaidOptions":{"themeCSS":"\n            .node rect,\n            .node circle,\n            .node polygon {\n              stroke-width: 2px;\n              stroke: #3f20ba;\n              fill: #F4F6F8;\n            }\n            .node.secondary rect,\n            .node.secondary circle,\n            .node.secondary polygon,\n            .node.tertiary rect,\n            .node.tertiary circle,\n            .node.tertiary polygon {\n              fill: white;\n            }\n            .node.secondary rect,\n            .node.secondary circle,\n            .node.secondary polygon {\n              stroke: #f25cc1;\n            }\n            .cluster rect,\n            .node.tertiary rect,\n            .node.tertiary circle,\n            .node.tertiary polygon {\n              stroke: #41d9d3;\n            }\n            .cluster rect {\n              fill: none;\n              stroke-width: 2px;\n            }\n            .edgeLabel {\n              background-color: white;\n            }\n          "}}},"gatsby-remark-code-titles",{"resolve":"gatsby-remark-prismjs","options":{"showLineNumbers":true}},"gatsby-remark-rewrite-relative-links",{"resolve":"gatsby-remark-check-links","options":{}}],"remarkPlugins":[[null,{"wrapperComponent":"MultiCodeBlock"}]]},
    },{
      plugin: require('/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-plugin-segment-js/gatsby-ssr'),
      options: {"plugins":[],"prodKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","trackPage":true},
    },{
      plugin: require('/Users/edlewis/Sites/gatsby-apollo-docs/node_modules/gatsby-theme-apollo-docs/gatsby-ssr'),
      options: {"plugins":[],"siteName":"Apollo Docs","pageTitle":"Apollo GraphQL Docs","menuTitle":"Apollo Platform","segmentApiKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","algoliaApiKey":"768e823959d35bbd51e4b2439be13fb7","algoliaIndexName":"apollodata","baseUrl":"https://www.apollographql.com","twitterHandle":"apollographql","spectrumHandle":"apollo","youtubeUrl":"https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw","logoLink":"https://www.apollographql.com/docs/","baseDir":"docs","contentDir":"source","navConfig":{"Other site":{"url":"https://www.google.com","description":"Search on Google.","omitLandingPage":true}},"footerNavConfig":{"Blog":{"href":"https://blog.apollographql.com/","target":"_blank","rel":"noopener noreferrer"},"Contribute":{"href":"https://www.apollographql.com/docs/community/"},"GraphQL Summit":{"href":"https://summit.graphql.com/","target":"_blank","rel":"noopener noreferrer"}},"root":"/Users/edlewis/Sites/gatsby-apollo-docs","subtitle":"This Site","description":"A description of this site","defaultVersion":"2","sidebarCategories":{"null":["index","tutorial/whats-next"]}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
