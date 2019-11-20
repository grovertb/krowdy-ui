import React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import capitalize from '../utils/capitalize';
import { fade } from '../styles/colorManipulator';

const useStyles = makeStyles(theme => {
  return ({
    textKrowdy: {
      color: theme.palette.krowdy.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    textDanger: {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    contained: {
      '&:hover': {
        boxShadow: 'none'
      },
      boxShadow: 'none'
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    containedKrowdy: {
      color: theme.palette.krowdy.contrastText,
      backgroundColor: theme.palette.krowdy.main,
      '&:hover': {
        backgroundColor: theme.palette.krowdy.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.krowdy.main,
        },
      },
    },
    containedDanger: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.error.main,
        },
      },
    },
    outlinedKrowdy: {
      color: theme.palette.krowdy.main,
      border: `1px solid ${fade(theme.palette.krowdy.main, 0.5)}`,
      '&:hover': {
        border: `1px solid ${theme.palette.krowdy.main}`,
        backgroundColor: fade(theme.palette.krowdy.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        border: `1px solid ${theme.palette.action.disabled}`,
      },
    },
    outlinedDanger: {
      color: theme.palette.error.main,
      border: `1px solid ${fade(theme.palette.error.main, 0.5)}`,
      '&:hover': {
        border: `1px solid ${theme.palette.error.main}`,
        backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        border: `1px solid ${theme.palette.action.disabled}`,
      },
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled:{}
  })
}, {name: 'KrowdyButton'})

function Button({
  color = 'default',
  variant = 'text',
  ...props
}) {

  const { 
    children,
    className: classNameProps, 
    ...otherProps
  } = props

  const classes = useStyles()
  
  const className = clsx(
    classNameProps,
    classes[variant],
    {
      [classes[`${variant}${capitalize(color)}`]]: color !== 'default' && color !== 'inherit',
    }
  )

  if(color === 'krowdy' || color === 'danger') color = 'default'
  if(variant === 'krowdy') variant = 'text'

  return (
    <MuiButton className={className} color={color} variant={variant} {...otherProps}>
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'danger']),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

export default Button;