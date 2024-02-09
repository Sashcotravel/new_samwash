const withVideos = require('next-videos')

const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp4$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'video',
                    },
                },
            ],
        });
        return config;
    },
};

const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
);


module.exports = withVideos(withNextIntl(nextConfig));
