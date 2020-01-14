import LZString from 'lz-string'

const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/
// const titleRegExp = /# (.*)[\r\n]/;
// const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g
const emptyRegExp = /^\s*$/

export const demoRegexp = /^"demo": "(.*)"/
export const SOURCE_CODE_ROOT_URL = 'https://github.com/grovertb/krowdy-ui/blob/master/docs/src'
export const CODE_VARIANTS = {
  JS: 'JS',
  TS: 'TS',
}

export function getContents(markdown) {
  return markdown
    .replace(headerRegExp, '') // Remove header information
    .split(/^{{("demo":[^}]*)}}$/gm) // Split markdown into an array, separating demos
    .filter(content => !emptyRegExp.test(content)) // Remove empty lines
}

export function getHeaders(markdown) {
  let header = markdown.match(headerRegExp)

  if (!header) {
    return {
      components: [],
    }
  }

  header = header[1]

  let regexMatches
  const headers = {}

  // eslint-disable-next-line no-cond-assign
  while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
    headers[regexMatches[1]] = regexMatches[2]
  }

  if (headers.components) {
    headers.components = headers.components
      .split(',')
      .map(x => x.trim())
      .sort()
  } else {
    headers.components = []
  }

  return headers
}

export function addHiddenInput(form, name, value) {
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = name
  input.value = value
  form.appendChild(input)
}

const translations = {
  adblock: "If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.",
  albumDescr: 'A responsive album / gallery page layout with a hero unit and footer.',
  albumTitle: 'Album',
  blogDescr: 'A sophisticated blog page layout. Markdown support is courtesy of markdown-to-jsx but is easily replaced.',
  blogTitle: 'Blog',
  cdn: 'or use a CDN.',
  changeLanguage: 'Change language',
  checkoutDescr: 'A step-by-step checkout page layout. Adapt the number of steps to suit your needs, or make steps optional.',
  checkoutTitle: 'Checkout',
  close: 'Close',
  codesandbox: 'Edit in CodeSandbox',
  copySource: 'Copy the source',
  copySourceLinkJS: 'Copy link to JavaScript source',
  copySourceLinkTS: 'Copy link to TypeScript source',
  dashboardDescr: 'A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.',
  dashboardTitle: 'Dashboard',
  decreaseSpacing: 'decrease spacing',
  diamondSponsors: 'Diamond Sponsors',
  editPage: 'Edit this page',
  editWebsiteColors: 'Edit website colors',
  emojiLove: 'Love',
  emoojiWarning: 'Warning',
  expandAll: 'Expand all',
  footerCommunity: 'Community',
  footerResources: 'Resources',
  getProfessionalSupport: 'Get Professional Support',
  getStarted: 'Get Started',
  github: 'GitHub repository',
  headTitle: 'Material-UI: A popular React UI framework',
  helpToTranslate: 'Help to translate',
  hideFullSource: 'Hide the full source',
  hideSource: 'Hide the source',
  homeFooterRelease: 'Currently {{versionNumber}}. Released under the {{license}}.',
  homeQuickWord: 'A quick word from our sponsors:',
  increaseSpacing: 'increase spacing',
  installButton: 'Read installation docs',
  installDescr: "Install Krowdy-UI's source files via npm. We take care of injecting the CSS needed.",
  installation: 'Installation',
  joinThese: 'Join these and other great organisations!',
  letUsKnow: 'Let us know!',
  license: 'MIT License',
  likeMui: 'Help us keep running',
  loadFont: 'Load the default Roboto font.',
  mainNavigation: 'Main navigation',
  newest: 'Newest',
  openDrawer: 'Open main navigation',
  pageTOC: 'Page table of contents',
  pages: {
    '/component/about': 'About The Lab',
    '/components': 'Components',
    '/components/about-the-lab': 'About The Lab',
    '/components/app-bar': 'App Bar',
    '/components/autocomplete': 'Autocomplete',
    '/components/avatars': 'Avatars',
    '/components/badges': 'Badges',
    '/components/basic-inputs': 'Basic Inputs',
    '/components/bottom-navigation': 'Bottom Navigation',
    '/components/box': 'Box',
    '/components/breadcrumbs': 'Breadcrumbs',
    '/components/buttons': 'Buttons',
    '/components/cards': 'Cards',
    '/components/checkboxes': 'Checkboxes',
    '/components/chips': 'Chips',
    '/components/click-away-listener': 'Click Away Listener',
    '/components/container': 'Container',
    '/components/content': 'Content',
    '/components/css-baseline': 'CSS Baseline',
    '/components/data-display': 'Data Display',
    '/components/dialogs': 'Dialogs',
    '/components/dividers': 'Dividers',
    '/components/drawers': 'Drawers',
    '/components/expansion-panels': 'Expansion Panels',
    '/components/feedback': 'Feedback',
    '/components/grid': 'Grid',
    '/components/grid-list': 'Grid List',
    '/components/hidden': 'Hidden',
    '/components/icons': 'Icons',
    '/components/inputs': 'Inputs',
    '/components/lab': 'Lab',
    '/components/layout': 'Layout',
    '/components/links': 'Links',
    '/components/lists': 'Lists',
    '/components/material-icons': 'Material Icons',
    '/components/menus': 'Menus',
    '/components/modal': 'Modal',
    '/components/navigation': 'Navigation',
    '/components/no-ssr': 'No SSR',
    '/components/other': 'Other',
    '/components/paper': 'Paper',
    '/components/pickers': 'Date / Time',
    '/components/popover': 'Popover',
    '/components/popper': 'Popper',
    '/components/portal': 'Portal',
    '/components/progress': 'Progress',
    '/components/progress-validation': 'Feedback',
    '/components/radio-buttons': 'Radio Buttons',
    '/components/rating': 'Rating',
    '/components/selection-controls': 'Selection Controls',
    '/components/selects': 'Selects',
    '/components/skeleton': 'Skeleton',
    '/components/slider': 'Slider',
    '/components/snackbars': 'Snackbars',
    '/components/speed-dial': 'Speed Dial',
    '/components/steppers': 'Steppers',
    '/components/surfaces': 'Surfaces',
    '/components/switches': 'Switches',
    '/components/tables': 'Tables',
    '/components/tabs': 'Tabs',
    '/components/text-fields': 'Text Fields',
    '/components/textarea-autosize': 'Textarea Autosize',
    '/components/toggle-button': 'Toggle Button',
    '/components/tooltips': 'Tooltips',
    '/components/transfer-list': 'Transfer List',
    '/components/transitions': 'Transitions',
    '/components/tree-view': 'Tree View',
    '/components/typography': 'Typography',
    '/components/use-media-query': 'useMediaQuery',
    '/components/utils': 'Utils',
    '/css-in-js': 'Styles',
    '/css-in-js/advanced': 'Advanced',
    '/css-in-js/basics': 'Basics',
    '/customization': 'Customization',
    '/customization/breakpoints': 'Breakpoints',
    '/customization/color': 'Color',
    '/customization/components': 'Components',
    '/customization/default-theme': 'Default Theme',
    '/customization/density': 'Density',
    '/customization/globals': 'Globals',
    '/customization/palette': 'Palette',
    '/customization/spacing': 'Spacing',
    '/customization/themes': 'Overview',
    '/customization/theming': 'Overview',
    '/customization/type': 'Type (light / dark theme)',
    '/customization/typography': 'Typography',
    '/customization/z-index': 'z-index',
    '/discover-more': 'Discover More',
    '/discover-more/backers': 'Sponsors & Backers',
    '/discover-more/changelog': 'Changelog',
    '/discover-more/community': 'Community',
    '/discover-more/governance': 'Governance',
    '/discover-more/languages': 'Languages',
    '/discover-more/related-projects': 'Related Projects',
    '/discover-more/roadmap': 'Roadmap',
    '/discover-more/showcase': 'Showcase',
    '/discover-more/team': 'Team',
    '/discover-more/vision': 'Vision',
    '/getting-started': 'Getting Started',
    '/getting-started/example-projects': 'Example Projects',
    '/getting-started/faq': 'FAQs',
    '/getting-started/installation': 'Installation',
    '/getting-started/learn': 'Learn',
    '/getting-started/support': 'Support',
    '/getting-started/supported-components': 'Supported Components',
    '/getting-started/supported-platforms': 'Supported Platforms',
    '/getting-started/templates': 'Templates',
    '/getting-started/usage': 'Usage',
    '/guides': 'Guides',
    '/guides/api': 'API Design Approach',
    '/guides/composition': 'Composition',
    '/guides/flow': 'Flow',
    '/guides/interoperability': 'Style Library Interoperability',
    '/guides/localization': 'Localization',
    '/guides/migration-v0x': 'Migration From v0.x',
    '/guides/migration-v3': 'Migration From v3',
    '/guides/minimizing-bundle-size': 'Minimizing Bundle Size',
    '/guides/responsive-ui': 'Responsive UI',
    '/guides/right-to-left': 'Right-to-left',
    '/guides/server-rendering': 'Server Rendering',
    '/guides/testing': 'Testing',
    '/guides/typescript': 'TypeScript',
    '/styles': 'Styles',
    '/styles/advanced': 'Advanced',
    '/styles/basics': 'Basics',
    '/system': 'System',
    '/system/basics': 'Basics',
    '/system/borders': 'Borders',
    '/system/display': 'Display',
    '/system/flexbox': 'Flexbox',
    '/system/palette': 'Palette',
    '/system/positions': 'Positions',
    '/system/shadows': 'Shadows',
    '/system/sizing': 'Sizing',
    '/system/spacing': 'Spacing',
    '/system/typography': 'Typography',
    '/versions': 'Versions',
    'https://themes.material-ui.com/': 'Premium Themes'
  },
  pricingDescr: 'Quickly build an effective pricing table for your potential customers with this page layout.',
  pricingTitle: 'Pricing',
  resetDensity: 'Reset density',
  seeMore: 'See more',
  showFullSource: 'Show the full source',
  showJSSource: 'Show JavaScript source',
  showSource: 'Show the source',
  showTSSource: 'Show TypeScript source',
  signInDescr: 'A simple Sign In page.',
  signInSideDescr: 'A simple Sign In side page.',
  signInSideTitle: 'Sign-in side',
  signInTitle: 'Sign In',
  signUpDescr: 'A simple Sign Up page.',
  signUpTitle: 'Sign Up',
  skipToContent: 'Skip to content',
  sourceCode: 'Source code',
  spacingUnit: 'Spacing unit',
  stackblitz: 'Edit in StackBlitz (JS only)',
  stars: 'GitHub stars',
  stickyFooterDescr: 'Attach a footer to the bottom of the viewport when page content is short.',
  stickyFooterTitle: 'Sticky footer',
  strapline: 'React components for faster and easier web development. Build your own design system, or start with Material Design.',
  tableOfContents: 'Contents',
  thanks: 'Thank you!',
  themes: 'Premium themes',
  themesButton: 'Browse themes',
  themesDescr: 'Take Material-UI to the next level with premium themes from our official marketplace – all built on Material-UI.',
  toggleRTL: 'Toggle right-to-left/left-to-right',
  toggleTheme: 'Toggle light/dark theme',
  traffic: 'Traffic',
  usage: 'Usage',
  usageButton: 'Explore the docs',
  usageDescr: "Krowdy-UI components work without any additional setup, and don't pollute the global scope.",
  useHighDensity: 'Apply higher density via props',
  usingMui: 'Are you using Material-UI?',
  viewGitHub: 'View the source on GitHub',
  visit: 'Visit the website',
  whosUsing: "Who's using Material-UI?"
}

export function t(key) { 
  return translations[key] 
}


function includePeerDependencies(deps, versions) {
  Object.assign(deps, {
    react: versions.react,
    'react-dom': versions['react-dom'],
  })

  if (deps['@krowdy-ui/lab'] && !deps['@krowdy-ui/core']) {
    deps['@krowdy-ui/core'] = versions['@krowdy-ui/core']
  }
}

const packagesWithBundledTypes = ['@krowdy-ui/core', '@krowdy-ui/lab']

/**
 * WARNING: Always uses `latest` typings.
 *
 * Adds dependencies to @types packages only for packages that are not listed
 * in packagesWithBundledTypes
 *
 * @see packagesWithBundledTypes in this module namespace
 *
 * @param {Record<string, string>} deps - list of dependency as `name => version`
 */
function addTypeDeps(deps) {
  const packagesWithDTPackage = Object.keys(deps).filter(
    name => packagesWithBundledTypes.indexOf(name) === -1,
  )

  packagesWithDTPackage.forEach(name => {
    let resolvedName = name
    // scoped package?
    if (name.startsWith('@')) {
      // https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages
      resolvedName = name.slice(1).replace('/', '__')
    }

    deps[`@types/${resolvedName}`] = 'latest'
  })
}

/**
 * @param {string} raw - ES6 source with es module imports
 * @param {objects} options
 * @param {'JS' | 'TS'} options.codeLanguage
 * @param {'next' | 'latest'} options.reactVersion
 * @returns {Record<string, 'latest'>} map of packages with their required version
 */
export function getDependencies(raw, options = {}) {
  const { codeLanguage = CODE_VARIANTS.JS, reactVersion = 'latest' } = options

  const deps = {}
  const versions = {
    '@krowdy-ui/core': 'latest',
    '@krowdy-ui/styles': 'latest',
    '@material-ui/icons': 'latest',
    '@material-ui/lab': 'latest',
    '@material-ui/system': 'latest',
    '@material-ui/utils': 'latest',
    'date-fns': 'next',
    jss: 'next',
    'jss-plugin-template': 'next',
    react: reactVersion,
    'react-dom': reactVersion,
  }

  const re = /^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm
  let m
  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(raw))) {
    let name

    if (m[2]) {
      // full import
      // handle scope names
      name = m[2].charAt(0) === '@' ? m[2].split('/', 2).join('/') : m[2].split('/', 1)[0]
    } else {
      name = m[1]
    }

    if (!deps[name]) {
      deps[name] = versions[name] ? versions[name] : 'latest'
    }
  }

  includePeerDependencies(deps, versions)

  if (codeLanguage === CODE_VARIANTS.TS) {
    addTypeDeps(deps)
    deps.typescript = 'latest'
  }

  return deps
}

export function compress(object) {
  return LZString.compressToBase64(JSON.stringify(object))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}

function makeUnique(hash, unique, i = 1) {
  const uniqueHash = i === 1 ? hash : `${hash}-${i}`

  if (!unique[uniqueHash]) {
    unique[uniqueHash] = true
    return uniqueHash
  }

  return makeUnique(hash, unique, i + 1)
}

export function textToHash(text, unique = {}) {
  return makeUnique(
    encodeURI(
      text
        .toLowerCase()
        .replace(/<\/?[^>]+(>|$)/g, '') // remove HTML
        .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, '')
        .replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, '-')
        .replace(
          /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          '',
        ) // remove emojis
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
    ),
    unique,
  )
}


export default function getJsxPreview(code, defaultCodeOpen) {
  /* The regex matches the content of the return statement in the default export,
   * stripping any wrapper divs:
   *
   * `export default.*`
   * `\n  return (\n` or `\n  return `
   * `    <div.*>\n` (optional)
   *  everything until:
   * `\n    </div>` (optional)
   * `  );\n}` or `;\n}`
   */
  let jsx = code.match(
    /export default .*(?:\n {2}return \(\n|\n {2}return )(?: {4}<div.*?>\n)?(.*?)(\n {4}<\/div>)?(\n {2}\);\n}|;\n})/s,
  )
  // Just the match, otherwise the full source if either no match or preview disabled,
  // so as not to break the Collapse transition.
  jsx = jsx && defaultCodeOpen !== false ? jsx[1] : code

  // Remove leading spaces from each line
  return jsx.split(/\n/).reduce(
    (acc, line) =>
      `${acc}${line.slice(
        // Number of leading spaces on the first line
        jsx.match(/^ */)[0].length,
      )}\n`,
    '',
  )
}
