const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path')

const paths = require('react-scripts/config/paths')

module.exports = override(
  config => {
    const pathPackages = path.join(process.cwd(), '..', 'packages')

    config.resolve.plugins[1] = new ModuleScopePlugin([paths.appSrc, pathPackages], [paths.appPackageJson])

    config.module.rules[2].oneOf[1].include = [config.module.rules[2].oneOf[1].include, pathPackages]
    
    return config
  },
  addWebpackAlias({
    '@krowdy-ui/core': path.resolve(__dirname, "../packages/krowdy-ui/src"),
    '@krowdy-ui/styles': path.resolve(__dirname, "../packages/krowdy-ui-styles/src")
  }),
  addBabelPlugin([
    "babel-plugin-module-resolver", {
      // "root": ["./src"],
      "alias": {
        "@krowdy-ui/core": path.resolve(__dirname, "../packages/krowdy-ui/src"),
        "@krowdy-ui/styles": path.resolve(__dirname, "../packages/krowdy-ui-styles/src"),
      },
      transformFunctions: ['require', 'require.context'],
    }
  ]),
)