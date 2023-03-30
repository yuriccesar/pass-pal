import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `PassPal`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-federation',
    options: {
      "name": "images",
      "path": "./src/images/",
      ssr: false, // Remotes will be fetched during SSG (SSR)
      federationConfig: {
        // A. For your Remote
        name: 'passPal',
        exposes: {
          './Home': './src/pages/index.js',
        },
      }
    },
    __key: "images"
  }]
};

export default config;
