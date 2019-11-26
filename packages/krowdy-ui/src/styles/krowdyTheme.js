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
    }
  }
}
