const path = require('path')

// This module isn't used to build the documentation. We use Next.js for that.
// This module is used by the visual regression tests to run the demos.
module.exports = {
  context: path.resolve(__dirname),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
        test: /\.js$/,
      },
      {
        loader: 'raw-loader',
        test: /\.md$/,
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
  },
  resolve: {
    alias: {
      '@krowdy-ui/core': path.resolve(__dirname, '../packages/krowdy-ui/src'),
      '@krowdy-ui/styles': path.resolve(__dirname, '../packages/krowdy-ui-styles/src'),
      '@krowdy-ui/views': path.resolve(__dirname, '../packages/krowdy-ui-views/src'),
      docs: path.resolve(__dirname, '../docs'),
    },
    modules: [path.join(__dirname, '../'), 'node_modules'],
  },
}
