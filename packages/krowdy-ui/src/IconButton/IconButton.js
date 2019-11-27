import React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles';
import MuiIconButton from '@material-ui/core/IconButton'
import capitalize from '../utils/capitalize';
import { fade } from '../styles/colorManipulator';

const useStyles = makeStyles(theme => {
  return ({
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
}, { name: 'KrowdyIconButton'})

function IconButton({ color = 'default', className: classNameProps, ...props}) {
  const classes = useStyles()

  const className = clsx(
    classNameProps,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
    }
  )

  if(color === 'krowdy' || color === 'error') color = 'default'
 
  return (
    <MuiIconButton className={className} color={color} {...props} />
  );
}

IconButton.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'error'])
}

export default IconButton;