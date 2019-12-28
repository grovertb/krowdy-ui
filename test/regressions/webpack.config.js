const path = require('path');
const webpackBaseConfig = require('../../docs/scripts/webpackBaseConfig');

module.exports = { 
  ...webpackBaseConfig, 
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../tmp'),
    filename: 'tests.js',
  },
  module: { 
    ...webpackBaseConfig.module, 
    rules: webpackBaseConfig.module.rules.concat([
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'url-loader',
      },
    ]),
  },
};
