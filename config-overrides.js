const { alias, configPaths } = require('react-app-rewire-alias')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    return alias(configPaths('./tsconfig.paths.json'))(config)
  },
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/app/index.tsx');
    return paths;
  },
}