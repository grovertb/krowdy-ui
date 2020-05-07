// export { default } from '@material-ui/core/CardHeader'
import React from 'react'
import MuiCardHeader from '@material-ui/core/CardHeader'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  shadow: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    boxShadow   : '0px 2px 5px rgba(0, 0, 0, 0.05)',
    padding     : theme.spacing(1.25, 2)
  }
})

const CardHeader = React.forwardRef(function CardHeader(props, ref) {
  const {
    className: classNameProps,
    classes,
    shadow = false,
    ...othersProps
  } = props

  return (
    <MuiCardHeader
      classes={classes}
      className={
        clsx(
          classNameProps,
          {
            [classes.shadow]: shadow
          }
        )
      }
      ref={ref}
      {...othersProps} />
  )
})

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action                  : PropTypes.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar                  : PropTypes.node,
  /**
   * @ignore
   */
  className               : PropTypes.string,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes                 : PropTypes.object.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component               : PropTypes.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography       : PropTypes.bool,
  shadow                  : PropTypes.bool,
  /**
   * The content of the component.
   */
  subheader               : PropTypes.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: PropTypes.object,
  /**
   * The content of the Card Title.
   */
  title                   : PropTypes.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps    : PropTypes.object
}

export default withStyles(styles, { name: 'KrowdyCardHeader' })(CardHeader)
