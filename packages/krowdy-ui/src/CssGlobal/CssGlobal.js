import withStyles from '../styles/withStyles'

const GlobalCss = withStyles(theme => ({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    '::-webkit-scrollbar': {
      height: 6,
      width : 6
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius   : '10px'
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px'
    },
    body: {
      '&::backdrop': {
        backgroundColor: theme.palette.background.default
      }, // Remove the margin in all browsers.
      '@media print': {
        // Save printer ink.
        backgroundColor: theme.palette.common.white
      },
      ...theme.typography.body2,
      backgroundColor: theme.palette.background.default,
      color          : theme.palette.text.primary,
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      margin         : 0
    },
    html: {
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      // Change from `box-sizing: content-box` so that `width`
      // is not affected by `padding` or `border`.
      boxSizing          : 'border-box'
    },
    'strong, b': {
      fontWeight: 'bolder'
    }
  }
}), { name: 'GlobalCss' })(() => null)

export default GlobalCss
