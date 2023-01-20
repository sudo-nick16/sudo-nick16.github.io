/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    webpack: (config) => {
        if (!config.experiments) {
            config.experiments = {};
        }
        config.experiments.topLevelAwait = true;
        // config.resolve.fallback = {
        //     ...config.resolve.fallback,
        //     fs: false,
        // };

        return config;
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // experimental: {
        // externalDir: true,
        // appDir: true,
    // },
}

module.exports = nextConfig
