import { bluePrimary, blueSecondary, krowdy, grey } from '../colors'

export default {
  palette: {
    primary: bluePrimary,
    secondary: blueSecondary,
    krowdy,
    grey
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform : 'initial',
        fontWeight: 400
      }
    },
    MuiTypography: {
      h1: {
        fontSize: '2.75rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '1.8125rem',
        fontWeight: 'bold'
      },
      h4: {
        fontSize: '1.4375rem',
        fontWeight: 'bold'
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 'bold'
      },
      h6: {
        fontSize: '0.875rem',
        fontWeight: 'bold'
      },
      body1: {
        fontSize: '0.75rem'
      }
    }
  }
}
