const { alias, configPaths } = require('react-app-rewire-alias')
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    return alias(configPaths('./tsconfig.paths.json'))(config)
  },
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/app/index.tsx');
    return paths;
  },
}