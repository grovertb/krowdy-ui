const path = require('path')
const webpackBaseConfig = require('../../docs/scripts/webpackBaseConfig')

module.exports = { 
  ...webpackBaseConfig, 
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  module: { 
    ...webpackBaseConfig.module, 
    rules: webpackBaseConfig.module.rules.concat([
      {
        loader: 'url-loader',
        test: /\.(jpg|gif|png)$/,
      },
    ]),
  },
  output: {
    filename: 'tests.js',
    path: path.resolve(__dirname, '../../tmp'),
  },
}
