import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Dot,
  withStyles
} from '@krowdy-ui/core'

export const styles = (theme) => ({
  actions: {
    alignItems    : 'center',
    borderTop     : `solid 1px ${theme.palette.grey[300]}`,
    display       : 'flex',
    height        : 56,
    justifyContent: 'space-between',
    width         : '100%'
  },
  containerTitle: {
    alignItems: 'center',
    display   : 'flex'
  },
  content: {
    padding: 12,
    width  : 296
  },
  header: {
    padding: 12
  },
  root  : {},
  scroll: {
    height  : 344,
    overflow: 'auto'
  },
  subheaderContent: {
    alignItems: 'center',
    display   : 'flex',
    padding   : theme.spacing(0,1.5),
    paddingTop: 12
  },
  subtitle: {
    color     : theme.palette.grey[600],
    fontSize  : 14,
    marginLeft: 20
  },
  title: {
    color     : theme.palette.secondary[400],
    fontSize  : 14,
    fontWeight: 'bold',
    marginLeft: 8
  }
})

const RankingGroup = props => {
  const {
    classes,
    status,
    title,
    children,
    action,
    leftActionFooter = <div />,
    rightActionFooter = <div />,
    subtitle,
    subHeader,
    scroll,
    shadow
  } = props

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        action={action}
        className={classes.header}
        shadow={shadow}
        title={(
          <div className={classes.containerTitle}>
            { !shadow && <Dot color={status ? 'success' : 'default'} />}
            <Typography className={classes.title}>{title}</Typography>
            {subtitle && <Typography className={classes.subtitle} variant='body2'>{subtitle}</Typography>}
          </div>
        )} />
      {subHeader && (
        <CardContent className={classes.subheaderContent}>
          {subHeader}
        </CardContent>
      )}
      <CardContent className={clsx(classes.content,{ [classes.scroll]: scroll })}>
        {children}
      </CardContent>
      <CardActions className={classes.actions}>
        {leftActionFooter}
        {rightActionFooter}
      </CardActions>
    </Card>
  )
}

RankingGroup.propTypes = {
  action           : PropTypes.node,
  children         : PropTypes.node,
  classes          : PropTypes.object,
  leftActionFooter : PropTypes.node,
  rightActionFooter: PropTypes.node,
  scroll           : PropTypes.bool,
  status           : PropTypes.bool,
  subHeader        : PropTypes.node,
  subtitle         : PropTypes.string,
  title            : PropTypes.string
}

export default withStyles(styles, { name: 'RankingGroup' })(RankingGroup)
