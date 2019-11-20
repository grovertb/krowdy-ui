import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles';
import MuiFab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => {
  return ({
    /* Styles applied to the root element if `color="krowdy"`. */
    krowdy: {
      color: theme.palette.krowdy.contrastText,
      backgroundColor: theme.palette.krowdy.main,
      '&:hover': {
        backgroundColor: theme.palette.krowdy.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.krowdy.main,
        },
      },
    },
    /* Styles applied to the root element if `color="danger"`. */
    danger: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.error.main,
        },
      },
    },
  })
})

function Fab({color = 'default', className: classNameProps, ...props }) {

  const classes = useStyles()

  const className = clsx(
    classNameProps,
    {
      [classes.krowdy]: color === 'krowdy',
      [classes.danger]: color === 'danger'
    }
  )

  if(color === 'krowdy' || color === 'danger') color = 'default'
  
  return (
    <MuiFab
      className={className}
      color={color} 
      {...props} />
  )
}

Fab.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'danger']),
}

export default Fab
