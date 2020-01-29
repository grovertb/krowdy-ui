import React from 'react'
import MuiCardHeader from '@material-ui/core/CardHeader'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  action: {
    margin: 0
  },
  actionPosition: {
    paddingTop: 10
  },
  header: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right   : 10
  },
  shadow: {
    boxShadow: `${theme.spacing(0, 0.25, 0.6)} rgba(0, 0, 0, 0.05)`
  },
  styleLess: {
    margin : 0,
    padding: 0
  },
  titleStyles: {
    fontWeight: 'bold'
  }
})

const CardHeader = React.forwardRef(function CardHeader({ ...props }, ref) {
  const {
    action,
    avatar,
    className: classNameProps,
    classes,
    shadow,
    title,
    ...othersProps
  } = props

  return <MuiCardHeader
    action={action}
    avatar={avatar}
    classes={{ action: clsx(classes.action, classes.icon, { [classes.actionPosition]: avatar }), content: clsx({ [classes.titleStyles]: !avatar }), root: clsx(classes.styleLess, classes.header) }}
    className={clsx({ [classes.shadow]: shadow })}
    disableTypography
    ref={ref}
    title={title}
    {...othersProps} />
})

CardHeader.propTypes = {
  action : PropTypes.node,
  avatar : PropTypes.node,
  classes: PropTypes.object,
  shadow : PropTypes.bool,
  title  : PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
}

export default withStyles(styles, { name: 'KrowdyCardHeader' })(CardHeader)
