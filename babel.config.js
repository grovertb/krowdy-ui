let defaultPresets

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).

if(process.env.BABEL_ENV === 'es')
  defaultPresets = []
else
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: [ 'esm', 'production-umd' ].includes(process.env.BABEL_ENV) ? false : 'commonjs'
      }
    ]
  ]

const defaultAlias = {
  '@krowdy-ui/core'  : './packages/krowdy-ui/src',
  '@krowdy-ui/styles': './packages/krowdy-ui-styles/src'
}

const productionPlugins = [
  'babel-plugin-transform-react-constant-elements',
  'babel-plugin-transform-dev-warning',
  [ 'babel-plugin-react-remove-properties', { properties: [ 'data-mui-test', 'data-test' ] } ],
  [
    'babel-plugin-transform-react-remove-prop-types',
    {
      mode: 'unsafe-wrap'
    }
  ]
]

module.exports =  {
  env: {
    benchmark: {
      plugins: [
        ...productionPlugins,
        [
          'babel-plugin-module-resolver',
          {
            alias: defaultAlias,
            root : [ './' ]
          }
        ]
      ]
    },
    cjs: {
      plugins: productionPlugins
    },
    coverage: {
      plugins: [
        'babel-plugin-istanbul',
        [
          'babel-plugin-module-resolver',
          {
            alias: defaultAlias,
            root : [ './' ]
          }
        ]
      ]
    },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            alias: {
              modules: './modules'
            }
          }
        ]
      ]
    },
    es: {
      plugins: [ ...productionPlugins, [ '@babel/plugin-transform-runtime', { useESModules: true } ] ]
    },
    esm: {
      plugins: [ ...productionPlugins, [ '@babel/plugin-transform-runtime', { useESModules: true } ] ]
    },
    production: {
      plugins: [ ...productionPlugins, [ '@babel/plugin-transform-runtime', { useESModules: true } ] ]
    },
    'production-umd': {
      plugins: [ ...productionPlugins, [ '@babel/plugin-transform-runtime', { useESModules: true } ] ]
    },
    test: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            alias: defaultAlias,
            root : [ './' ]
          }
        ]
      ],
      sourceMaps: 'both'
    }
  },
  ignore : [ /@babel[\\|/]runtime/ ],
  plugins: [
    'babel-plugin-optimize-clsx',
    [ '@babel/plugin-proposal-class-properties', { loose: true } ],
    [ '@babel/plugin-proposal-object-rest-spread', { loose: true } ],
    '@babel/plugin-transform-runtime',
    // for IE 11 support
    '@babel/plugin-transform-object-assign'
  ], // Fix a Windows issue.
  presets: defaultPresets.concat([ '@babel/preset-react' ])
}
