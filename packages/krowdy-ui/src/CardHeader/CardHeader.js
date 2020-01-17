import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiCardHeader from '@material-ui/core/CardHeader'
import withStyles from '../styles/withStyles'
import Typography from '../Typography'

export const styles = {
  action: {
    alignSelf: 'flex-start',
    flex: '0 0 auto',
    marginRight: -8,
    marginTop: -8,
  },
  avatar: {
    flex: '0 0 auto',
    marginRight: 17,
  },
  content: {
    flex: '1 1 auto',
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    padding: 10,
  },
  title: {
    color: '#595959',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '100%',
  },
}

const CardHeader = React.forwardRef(function CardHeader(props, ref) {
  const {
    action,
    avatar,
    classes,
    className,
    component: Component = 'div',
    disableTypography = false,
    title: titleProp,
    titleTypographyProps,
    rightElement: rightComponent,
    subheader,
    subheaderTypographyProps,
    ...other
  } = props

  let title = titleProp

  if (titleProp != null && titleProp.type !== Typography && !disableTypography) {
    title = (
      <Typography
        variant={avatar ? 'body2' : 'h5'}
        className={classes.title}
        component='span'
        {...titleTypographyProps}
      >
        {titleProp}
      </Typography>
    )
  }

  if (!subheader && !subheaderTypographyProps) {
    return (
      <Component className={clsx(classes.root, className)} ref={ref} {...other}>
        {avatar && <div className={classes.avatar}>{avatar}</div>}
        <div className={classes.content}>
          {title}
        </div>
        {rightComponent && <div className={classes.rightComponent}>{rightComponent}</div>}
        {action && <div className={classes.action}>{action}</div>}
      </Component>
    )
  }
  return <MuiCardHeader ref={ref} {...props} />

})

CardHeader.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  component: PropTypes.elementType,
  disableTypography: PropTypes.bool,
  rightElement: PropTypes.node,
  subheader: PropTypes.node,
  subheaderTypographyProps: PropTypes.object,
  title: PropTypes.node,
  titleTypographyProps: PropTypes.object,
}
export default withStyles(styles, { name: 'KrowdyHeader' })(CardHeader)