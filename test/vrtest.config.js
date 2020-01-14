const path = require('path')

module.exports = {
  profiles: [
    {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      name: 'chrome',
    },
  ],
  selenium: {
    server: 'http://127.0.0.1:4444/wd/hub',
  },
  storage: {
    baseline: path.resolve(__dirname, 'regressions/screenshots'),
    output: path.resolve(__dirname, '../tmp/output'),
  },
  testUrl: process.env.DOCKER_TEST_URL || 'http://10.200.10.1:3090',
  tests: path.resolve(__dirname, '../tmp/tests.js'),
}
