import React from 'react'
import MuiCard from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  displayHover: {
    '&:hover': {
      border   : `1px solid ${theme.palette.primary[500]}`,
      boxShadow: `${theme.spacing(0, 0.5, 0.6)}  rgba(0, 39, 102, 0.08), ${theme.spacing(0, 0.4, 1.75)} rgba(0, 39, 102, 0.04),  ${theme.spacing(0, 1, 1.25)} rgba(0, 39, 102, 0.05)`,
      cursor   : 'pointer'
    }
  },
  lessStyle: {
    margin : 0,
    padding: 0
  },
  outlineround: {
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8
  },
  outlinesquare: {
    border: `1px solid ${theme.palette.grey[300]}`
  },
  root: {
    boxShadow: 'none',
    fontSize : 14
  },
  sizePaddinglarge: {
    padding: 20
  },
  sizePaddingmiddle: {
    padding: 12
  },
  sizePaddingsmall: {
    padding: 8
  }
})

const Card = React.forwardRef(function Card({ ...props }, ref) {
  const {
    className: classNameProps,
    classes,
    hoverable,
    sizePadding = 'middle',
    outlined,
    ...otherProps
  } = props

  return <MuiCard
    classes={{
      root: clsx(classes.lessStyle,
        { [classes.displayHover]: hoverable, [classes[`outline${outlined}`]]: outlined },
        classes[`sizePadding${sizePadding}`],
        classes.root)
    }}
    raised={false}
    ref={ref}
    {...otherProps} />
})

Card.propTypes = {
  /**
   * The content of the Card.
   */
  children   : PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className  : PropTypes.string,
  /**
   * @ignore
   */
  classes    : PropTypes.object,
  /**
 * If `true`, the Card will be hover.
 */
  hoverable  : PropTypes.bool,
  /**
   * Less shadow
   */
  outlined   : PropTypes.oneOf([ 'round', 'square' ]),
  sizePadding: PropTypes.oneOf([ 'large', 'small', 'middle' ])
}

export default withStyles(styles, { name: 'KrowdyCard' })(Card)
