import { withStyles as withStylesWithoutDefault } from '@krowdy-ui/styles'
import createTheme from './createTheme'
import krowdyTheme from './krowdyTheme'

const defaultTheme = createTheme(krowdyTheme)

function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options
  })
}

export default withStyles
