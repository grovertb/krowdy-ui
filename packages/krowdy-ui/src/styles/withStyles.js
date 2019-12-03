import { withStyles as withStylesWithoutDefault } from '@krowdy-ui/styles';
import { createMuiTheme } from "."
import krowdyTheme from './krowdyTheme'

const defaultTheme = createMuiTheme(krowdyTheme);

export default function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options,
  }) 
};
