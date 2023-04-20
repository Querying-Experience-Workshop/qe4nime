import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Querying Experience for NIME`,
        description: `A website for the workshop on querying experience at NIME 2023`,
        twitterUsername: `@zayaseevee`,
        image: `/musician.png`,
        siteUrl: `https://qe4nime.github.io/`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-anchor-links",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Querying Experience for NIME`,
                short_name: `QE4NIME`,
                start_url: `/`,
                background_color: `#7D0B20`,
                theme_color: `#7D0B20`,
                display: `standalone`,
                icon: `src/images/thinking-face.png`,
            },
        },
        "gatsby-transformer-bibtex",
    ],
};

export default config;
