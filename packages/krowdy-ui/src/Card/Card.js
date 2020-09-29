import React from 'react'
import MuiCard from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  hoverable: {
    '&:hover': {
      border   : `1px solid ${theme.palette.primary.main}`,
      boxShadow: '0px 4px 5px rgba(0, 39, 102, 0.08), 0px 3px 14px rgba(0, 39, 102, 0.04), 0px 8px 10px rgba(0, 39, 102, 0.05)',
      cursor   : 'pointer',
      margin   : props => props.variant !== 'outlined' ?  -1: ''
    }
  },
  selected: {
    border   : `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 4px 5px rgba(0, 39, 102, 0.08), 0px 3px 14px rgba(0, 39, 102, 0.04), 0px 8px 10px rgba(0, 39, 102, 0.05)',
    cursor   : 'pointer',
    margin   : props => props.variant !== 'outlined' ?  -1: ''
  }
})

const Card = React.forwardRef(function Card(props, ref) {
  const {
    className: classNameProps,
    classes,
    hoverable = false,
    selected = false,
    ...otherProps
  } = props

  return (
    <MuiCard
      className={
        clsx(
          classNameProps,
          {
            [classes.hoverable]: hoverable,
            [classes.selected] : selected
          }
        )
      }
      ref={ref}
      {...otherProps} />
  )
})

Card.propTypes = {
  /**
   * The content of the Card.
   */
  children : PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  classes  : PropTypes.object,
  /**
   * If `true`, the Card will be hover.
   */
  hoverable: PropTypes.bool,
  /**
   * if `true`, the Card will be selected.
   */
  selected : PropTypes.bool
}

export default withStyles(styles, { name: 'KrowdyCard' })(Card)
