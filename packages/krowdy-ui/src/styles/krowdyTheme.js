import { bluePrimary, blueSecondary, krowdy, grey } from '../colors'
import shadows from './shadows'

export default {
  overrides: {
    MuiButton: {
      root: {
        fontWeight   : 400,
        textTransform: 'initial'
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '1.125rem'
      }
    },
    MuiSwitch: {
      switchBase: {
        color: grey[400]
      }
    },
    MuiTypography: {
      body1: {
        fontSize: '0.75rem'
      },
      h1: {
        fontSize  : '2.75rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize  : '2.25rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize  : '1.8125rem',
        fontWeight: 'bold'
      },
      h4: {
        fontSize  : '1.4375rem',
        fontWeight: 'bold'
      },
      h5: {
        fontSize  : '1.125rem',
        fontWeight: 'bold'
      },
      h6: {
        fontSize  : '0.875rem',
        fontWeight: 'bold'
      }
    }
  },
  palette: {
    grey,
    krowdy,
    primary  : bluePrimary,
    secondary: blueSecondary
  },
  shadows
}
