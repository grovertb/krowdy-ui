import React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiIconButton from '@material-ui/core/IconButton'
import capitalize from '../utils/capitalize';
import withStyles from '../styles/withStyles';
import { fade } from '../styles/colorManipulator';

export const styles = theme => ({
  /* Styles applied to the root element if `color="krowdy"`. */
  colorKrowdy: {
    color: theme.palette.krowdy.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
})

const IconButton = React.forwardRef(function IconButton({ color = 'default', ...props }, ref) {
  const {
    className: classNameProps,
    classes,
    
    ...otherProps
  } = props

  const className = clsx(
    classNameProps,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
    }
  )

  if(color === 'krowdy' || color === 'error') color = 'default'
 
  return (
    <MuiIconButton ref={ref} className={className} color={color} {...otherProps} />
  );
})

IconButton.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'error'])
}

export default withStyles(styles, { name: 'KrowdyIconButton' })(IconButton);
