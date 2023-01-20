/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    webpack: (config) => {
        if (!config.experiments) {
            config.experiments = {};
        }
        config.experiments.topLevelAwait = true;
        return config;
    },
    typescript: {
        ignoreBuildErrors: true,
      },
    // experimental: {
    //   externalDir: true,
    // },
}

module.exports = nextConfig
