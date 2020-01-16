import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import MuiFab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => {
  return ({
    /* Styles applied to the root element if `color="krowdy"`. */
    error: {
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: theme.palette.error.main,
        },
        // Reset on touch devices, it doesn't add specificity
        backgroundColor: theme.palette.error.dark,
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    /* Styles applied to the root element if `color="error"`. */
    krowdy: {
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: theme.palette.krowdy.main,
        },
        // Reset on touch devices, it doesn't add specificity
        backgroundColor: theme.palette.krowdy.dark,
      },
      backgroundColor: theme.palette.krowdy.main,
      color: theme.palette.krowdy.contrastText,
    },
  })
})

function Fab({color = 'default', className: classNameProps, ...props }) {

  const classes = useStyles()

  const className = clsx(
    classNameProps,
    {
      [classes.krowdy]: color === 'krowdy',
      [classes.error]: color === 'error'
    }
  )

  if(color === 'krowdy' || color === 'error') color = 'default'
  
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
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'krowdy', 'error']),
}

export default Fab
