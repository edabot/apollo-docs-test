module.exports = [{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[],"offsetY":72},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-autolink-headers","options":{"offsetY":72}},{"resolve":"gatsby-remark-copy-linked-files","options":{"ignoreFileExtensions":[]}},{"resolve":"gatsby-remark-mermaid","options":{"mermaidOptions":{"themeCSS":"\n            .node rect,\n            .node circle,\n            .node polygon {\n              stroke-width: 2px;\n              stroke: #3f20ba;\n              fill: #F4F6F8;\n            }\n            .node.secondary rect,\n            .node.secondary circle,\n            .node.secondary polygon,\n            .node.tertiary rect,\n            .node.tertiary circle,\n            .node.tertiary polygon {\n              fill: white;\n            }\n            .node.secondary rect,\n            .node.secondary circle,\n            .node.secondary polygon {\n              stroke: #f25cc1;\n            }\n            .cluster rect,\n            .node.tertiary rect,\n            .node.tertiary circle,\n            .node.tertiary polygon {\n              stroke: #41d9d3;\n            }\n            .cluster rect {\n              fill: none;\n              stroke-width: 2px;\n            }\n            .edgeLabel {\n              background-color: white;\n            }\n          "}}},"gatsby-remark-code-titles",{"resolve":"gatsby-remark-prismjs","options":{"showLineNumbers":true}},"gatsby-remark-rewrite-relative-links",{"resolve":"gatsby-remark-check-links","options":{}}],"remarkPlugins":[[null,{"wrapperComponent":"MultiCodeBlock"}]]},
    },{
      plugin: require('../node_modules/gatsby-plugin-segment-js/gatsby-browser.js'),
      options: {"plugins":[],"prodKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","trackPage":true},
    },{
      plugin: require('../node_modules/gatsby-theme-apollo-docs/gatsby-browser.js'),
      options: {"plugins":[],"siteName":"Apollo Docs","pageTitle":"Apollo GraphQL Docs","menuTitle":"Apollo Platform","segmentApiKey":"wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg","algoliaApiKey":"768e823959d35bbd51e4b2439be13fb7","algoliaIndexName":"apollodata","baseUrl":"https://www.apollographql.com","twitterHandle":"apollographql","spectrumHandle":"apollo","youtubeUrl":"https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw","logoLink":"https://www.apollographql.com/docs/","baseDir":"docs","contentDir":"source","navConfig":{"Apollo Basics":{"url":"https://www.apollographql.com/docs","description":"Learn about each part of the Apollo platform and how they all work together.","omitLandingPage":true},"Apollo Server":{"url":"https://www.apollographql.com/docs/apollo-server","description":"Configure a production-ready GraphQL server to fetch and combine data from multiple sources."},"Apollo Client (React)":{"url":"https://www.apollographql.com/docs/react","description":"Manage the entirety of your React app's state and seamlessly execute GraphQL operations."},"Apollo Graph Manager":{"url":"https://www.apollographql.com/docs/graph-manager","description":"Integrate with Apollo's cloud service for schema versioning, metrics, and enhanced security."},"Apollo Client (iOS)":{"url":"https://www.apollographql.com/docs/ios","description":"Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."},"Apollo Link":{"url":"https://www.apollographql.com/docs/link","description":"Define a custom chain of actions that your client performs with each GraphQL operation.","omitLandingPage":true}},"footerNavConfig":{"Blog":{"href":"https://blog.apollographql.com/","target":"_blank","rel":"noopener noreferrer"},"Contribute":{"href":"https://www.apollographql.com/docs/community/"},"GraphQL Summit":{"href":"https://summit.graphql.com/","target":"_blank","rel":"noopener noreferrer"}},"root":"/Users/edlewis/Sites/gatsby-apollo-docs","subtitle":"Apollo Server","description":"A guide to using Apollo Server","githubRepo":"apollographql/apollo-server","sidebarCategories":{"null":["index"]}},
    }]
