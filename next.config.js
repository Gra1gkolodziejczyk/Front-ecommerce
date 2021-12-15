const nextConfig = {
  env: {
    LOCAL_DATA_LARAVEL: process.env.LOCAL_DATA_LARAVEL,
    LOCAL_FRONT_SERVER: process.env.LOCAL_FRONT_SERVER,
    SERVER_API_LARAVEL: process.env.SERVER_API_LARAVEL,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      });
    } else {

    }

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    )
    return config;
  },
  experimental: {
    optionalCatchAll: true,
  }
}


module.exports = {
  reactStrictMode: true,
}
