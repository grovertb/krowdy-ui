const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path')

const paths = require('react-scripts/config/paths')
const aliases = {}

const _moduleAliases = {
  'containers': './containers',
  'components': './components'
}

Object.keys(_moduleAliases).forEach(key => {
  aliases[key] = _moduleAliases[key].replace('.', paths.appSrc)
})

module.exports = override(
  config => {
    const pathPackages = path.join(process.cwd(), '..', 'packages')

    config.resolve.plugins[1] = new ModuleScopePlugin([paths.appSrc, pathPackages], [paths.appPackageJson])
    config.module.rules[2].oneOf[1].include = [config.module.rules[2].oneOf[1].include, pathPackages]
    config.module.rules[2].oneOf = [
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      ...config.module.rules[2].oneOf
    ]

    return config
  },
  addWebpackAlias({
    ...aliases,
    'react-dom': '@hot-loader/react-dom',
    '@krowdy-ui/core': path.resolve(__dirname, "../packages/krowdy-ui/src"),
    '@krowdy-ui/styles': path.resolve(__dirname, "../packages/krowdy-ui-styles/src"),
    '@krowdy-ui/views': path.resolve(__dirname, "../packages/krowdy-ui-views/src")
  }),
  addBabelPlugin([
    "babel-plugin-module-resolver", {
      // "root": ["./src"],
      "alias": {
        "@krowdy-ui/core": path.resolve(__dirname, "../packages/krowdy-ui/src"),
        "@krowdy-ui/styles": path.resolve(__dirname, "../packages/krowdy-ui-styles/src"),
        "@krowdy-ui/views": path.resolve(__dirname, "../packages/krowdy-ui-views/src"),
      },
      transformFunctions: ['require', 'require.context'],
    }
  ]),
)