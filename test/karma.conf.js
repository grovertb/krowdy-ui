const webpack = require('webpack')

const browserStack = {
  accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
  build    : `material-ui-${new Date().toISOString()}`,
  username : process.env.BROWSERSTACK_USERNAME
}

process.env.CHROME_BIN = require('puppeteer').executablePath()

// Karma configuration
module.exports = function setKarmaConfig(config) {
  const baseConfig = {
    basePath                  : '../',
    browserDisconnectTimeout  : 120000,
    browserDisconnectTolerance: 1, // default 2000
    browserNoActivityTimeout  : 300000, // default 0
    browsers                  : [ 'ChromeHeadlessNoSandbox' ], // default 10000
    colors                    : true,
    customLaunchers           : {
      ChromeHeadlessNoSandbox: {
        base : 'ChromeHeadless',
        flags: [ '--no-sandbox' ]
      }
    },
    files: [
      {
        included: true,
        pattern : 'test/karma.tests.js',
        served  : true,
        watched : true
      }
    ],
    frameworks: [ 'mocha' ],
    /**
     * possible values:
     * - config.LOG_DISABLE
     * - config.LOG_ERROR
     * - config.LOG_WARN
     * - config.LOG_INFO
     * - config.LOG_DEBUG
     */
    logLevel  : config.LOG_INFO,
    plugins   : [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    port         : 9876,
    preprocessors: {
      'test/karma.tests.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: Boolean(process.env.CI),
    webpack  : {
      devtool: 'inline-source-map',
      mode   : 'development',
      module : {
        rules: [
          {
            exclude: /node_modules/,
            loader : 'babel-loader',
            test   : /\.js$/
          }
        ]
      },
      node: {
        // Some tests import fs
        fs: 'empty'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('test')
          }
        })
      ],
      resolve: {
        alias: {
          // https://github.com/sinonjs/sinon/issues/1951
          // use the cdn main field. Neither module nor main are supported for browserbuilds
          '@testing-library/react/pure':
            '@testing-library/react/dist/@testing-library/react.pure.esm',
          // https://github.com/testing-library/react-testing-library/issues/486
          // "default" bundles are not browser compatible
          sinon: 'sinon/pkg/sinon.js'
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  }

  let newConfig = baseConfig

  if(browserStack.accessKey)
    newConfig = Object.assign({}, baseConfig, {
      browserStack,
      browsers: baseConfig.browsers.concat([
        'BrowserStack_Chrome',
        'BrowserStack_Firefox',
        'BrowserStack_Safari',
        'BrowserStack_Edge'
      ]),
      customLaunchers: Object.assign({}, baseConfig.customLaunchers, {
        BrowserStack_Chrome: {
          base           : 'BrowserStack',
          browser        : 'Chrome',
          browser_version: '49.0',
          os             : 'OS X',
          os_version     : 'Sierra'
        },
        BrowserStack_Edge: {
          base           : 'BrowserStack',
          browser        : 'Edge',
          browser_version: '14.0',
          os             : 'Windows',
          os_version     : '10'
        },
        BrowserStack_Firefox: {
          base           : 'BrowserStack',
          browser        : 'Firefox',
          browser_version: '52.0',
          os             : 'Windows',
          os_version     : '10'
        },
        BrowserStack_Safari: {
          base           : 'BrowserStack',
          browser        : 'Safari',
          browser_version: '10.1',
          os             : 'OS X',
          os_version     : 'Sierra'
        }
      }),
      plugins: baseConfig.plugins.concat([ 'karma-browserstack-launcher' ])
    })

  config.set(newConfig)
}
