const confusingBrowserGlobals = require('confusing-browser-globals');
const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6    : true,
    node   : true
  }, // So parent files don't get applied
  // globals: {
  //   preval: false, // Used in the documentation
  // },
  'extends': [
    // 'plugin:import/recommended',
    'react-app'
    // 'airbnb',
    // 'prettier',
    // 'prettier/react'
  ],
  overrides: [
    {
      env: {
        mocha: true
      },
      files: [
        '**/test-utils/**/*.js',
        // matching the pattern of the test runner
        '*.test.js'
      ],
      rules: {
        // does not work with wildcard imports. Mistakes will throw at runtime anyway
        'import/named'              : 0, // 0 = off, 1 = warn, 2 = error
        // for expect style assertions
        'mocha/handle-done-callback': 'error',

        'mocha/no-exclusive-tests'     : 'error',
        'mocha/no-global-tests'        : 'error',
        'mocha/no-identical-title'     : 'error',
        'mocha/no-nested-tests'        : 'error',
        'mocha/no-pending-tests'       : 'error',
        'mocha/no-return-and-callback' : 'error',
        'mocha/no-sibling-hooks'       : 'error',
        'mocha/no-skipped-tests'       : 'error',
        'mocha/no-top-level-hooks'     : 'error',
        'mocha/valid-suite-description': 'error',
        'no-unused-expressions'        : 'off'
      }
    }
    // {
    //   files: ['docs/src/**/*.js'],
    //   rules: {
    //     'material-ui/no-hardcoded-labels': [
    //       'error',
    //       {
    //         allow: ['Material-UI', 'Twitter', 'GitHub', 'Spectrum', 'StackOverflow']
    //       },
    //     ],
    //   },
    // },
  ],
  parser       : 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType : 'module'
  },
  plugins: [
    // 'babel',
    'mocha',
    // 'react-hooks',
    'react',
    'sort-keys-fix'
  ], // 'material-ui',
  root : true,
  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    'array-bracket-spacing'            : [ 'error', 'always' ],
    'arrow-body-style'                 : [ 'error', 'as-needed' ],
    'comma-dangle'                     : [ 'error', 'never' ],
    'consistent-this'                  : [ 'error', 'self' ],
    'curly': [ 'error', 'multi', 'consistent' ],
    'eol-last': 'error',
    'import/namespace'                 : [ 'error', { allowComputed: true } ],
    'import/no-extraneous-dependencies': 'off',
    'import/order'                     : [
      'error',
      {
        groups            : [ [ 'index', 'sibling', 'parent', 'internal', 'external', 'builtin' ] ],
        'newlines-between': 'never'
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for'               : 'off',
    'jsx-a11y/no-autofocus'                : 'off',
    'jsx-quotes'                           : [ 'error', 'prefer-single' ], // Doesn't play nicely with Windows
    'key-spacing'                          : [
      'error',
      {
        align: 'colon'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: false
          },
          while: {
            before: true
          },
          catch: {
            before: true
          }
        }
      }
    ],
    'linebreak-style'        : 'off',
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-alert'               : 'error',
    'no-console'             : [ 'warn', { allow: [ 'warn', 'error' ] } ],
    // Airbnb use error
    'no-constant-condition'  : 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1 } ],
    // Airbnb restricts isNaN and isFinite which are necessary for IE 11
    // we have to be disciplined about the usage and ensure the Number type for its
    // arguments
    'no-param-reassign'      : 'off',
    // 'no-underscore-dangle': ['error', { allow: ['_rewriteUrlForNextExport'] }],
    'no-prototype-builtins'  : 'off',
    'no-restricted-globals'  : [ 'error' ].concat(confusingBrowserGlobals),
    'no-trailing-spaces'     : 'error', // Destructuring harm grep potential.
    'no-unused-vars'         : [
      'error',
      {
        args              : 'after-used',
        ignoreRestSiblings: true,
        vars              : 'local'
      }
    ],
    'object-curly-spacing' : [ 'error', 'always' ],
    'operator-linebreak'   : [ 'error', 'after' ],
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error',
      { 
        blankLine: 'always', 
        prev: '*', 
        next: 'return'
      }
    ],
    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true } ],
    'prefer-destructuring' : 'off', // deprecated
    'quote-props'          : [
      2,
      'as-needed',
      {
        keywords: true
      }
    ], // We are a library, people do what they want.

    // 'material-ui/docgen-ignore-before-comment': 'error',
    // 'material-ui/restricted-path-imports': 'error',

    // This rule is great for raising people awareness of what a key is and how it works.
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'react-hooks/exhaustive-deps'   : 'error',
    'react-hooks/rules-of-hooks'    : 'error',
    // It's buggy
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types'       : 'off',
    // 'react/jsx-curly-brace-presence': 'off', // airbnb is using .jsx
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never'
      }
    ],
    'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-filename-extension'  : [ 'error', { extensions: [ '.js' ] } ],
    // 'react/no-danger': 'error',
    // Strict, airbnb is using off
    'react/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
    'react/jsx-handler-names'       : [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix    : 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      { 
        maximum: 3, 
        when: 'always' 
      }
    ],
    'react/jsx-props-no-spreading'  : 'off',
    'react/jsx-sort-props'          : [ 'error', { ignoreCase: true } ],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        closingSlash: 'never',
        beforeSelfClosing: 'always'
      }
    ],
    'react/no-array-index-key'      : 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node'        : 'off',
    'react/no-multi-comp'           : 'off', // It would be better to enable this rule.
    'react/require-default-props'   : 'off',
    'react/sort-prop-types'         : 'error',
    semi                            : [ 'error', 'never' ],
    'sort-keys-fix/sort-keys-fix'   : 'error',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren'   : [
      'error',
      {
        anonymous: 'ignore',
        named    : 'never'
      }
    ],
    'spaced-comment': [ 'error', 'always' ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './scripts/webpackBaseConfig.js')
      }
    }
  }
}
