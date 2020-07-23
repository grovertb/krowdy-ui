import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, Typography, CardContent, CardActions, Dot, withStyles } from '@krowdy-ui/core'

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
    height  : 344,
    overflow: 'auto',
    padding : 12,
    width   : 296
  },
  header: {
    padding: 12
  },
  root : {},
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
    rightActionFooter = <div />
  } = props

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        action={action}
        className={classes.header}
        title={(
          <div className={classes.containerTitle}>
            <Dot color={status ? 'success' : 'default'} />
            <Typography className={classes.title}>{title}</Typography>
          </div>
        )} />
      <CardContent className={classes.content}>
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
  classes: PropTypes.shape({
    buttongroup: PropTypes.string
  })
}

export default withStyles(styles, { name: 'RankingGroup' })(RankingGroup)
