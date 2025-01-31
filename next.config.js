module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/onboarding",
                permanent: true,
            },
        ];
    },
    experimental: { esmExternals: true },
    // Support MDX files as pages:
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    // Support loading `.md`, `.mdx`:
    webpack(config, options) {
        // MDX
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                // The default `babel-loader` used by Next:
                options.defaultLoaders.babel,
                {
                    loader: "@mdx-js/loader",
                    /** @type {import('@mdx-js/loader').Options} */
                    options: {
                        /* jsxImportSource: …, otherOptions… */
                    },
                },
            ],
        });

        return config;
    },
};
