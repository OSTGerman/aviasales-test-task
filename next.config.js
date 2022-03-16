const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    optimizedImages,
    {
        basePath: '',
        distDir: 'build',
        reactStrictMode: true,
        trailingSlash: true,
        webpack: (config, { isServer }) => {
            // Fixes npm packages that depend on `fs` module
            if (!isServer) {
                config.resolve.fallback.fs = false;
            }
            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
            return config;
        },
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
    },
]);
