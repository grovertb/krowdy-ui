import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiButton from '@material-ui/core/Button'
import capitalize from '../utils/capitalize'
import withStyles from '../styles/withStyles'
import { fade } from '../styles/colorManipulator'

export const styles = theme => ({
  contained: {
    '&:hover': {
      boxShadow: 'none'
    },
    boxShadow: 'none'
  },
  containedError: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.error.main,
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: theme.palette.error.light,
    },
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  containedKrowdy: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.krowdy.main,
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: theme.palette.krowdy.light,
    },
    backgroundColor: theme.palette.krowdy.main,
    color: theme.palette.krowdy.contrastText,
  },
  containedPrimary: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: theme.palette.primary.light,
    },
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  containedSecondary: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main,
      },
      // Reset on touch devices, it doesn't add specificity
      backgroundColor: theme.palette.secondary.light,
    },
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  disabled:{},
  fullWidth: {},
  outlinedError: {
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      border: `1px solid ${theme.palette.error.main}`,
    },
    border: `1px solid ${fade(theme.palette.error.main, 0.5)}`,
    color: theme.palette.error.main,
  },
  outlinedKrowdy: {
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      border: `1px solid ${theme.palette.krowdy.main}`,
    },
    border: `1px solid ${fade(theme.palette.krowdy.main, 0.5)}`,
    color: theme.palette.krowdy.main,
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  textError: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
    },
    color: theme.palette.error.main,
  },
  textKrowdy: {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
    },
    color: theme.palette.krowdy.main,
  }
})

const Button = React.forwardRef(function Button({ color = 'default', variant = 'text', ...props }, ref) {

  const { 
    className: classNameProps,
    classes,
    fullWidth = false,
    ...otherProps
  } = props
  
  const className = clsx(
    classNameProps,
    classes[variant],
    {
      [classes[`${variant}${capitalize(color)}`]]: color !== 'default' && color !== 'inherit',
      [classes.fullWidth]: fullWidth,
    }
  )

  if(color === 'krowdy' || color === 'error') color = 'default'
  if(variant === 'krowdy') variant = 'text'

  return <MuiButton ref={ref} fullWidth={fullWidth} className={className} color={color} variant={variant} {...otherProps} />
})

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'error']),
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

export default withStyles(styles, { name: 'KrowdyButton' })(Button)
