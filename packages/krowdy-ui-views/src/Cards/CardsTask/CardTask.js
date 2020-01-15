import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import clsx from 'clsx'
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from '@krowdy-ui/core'

export const styles = theme => ({
  card: {
    border: `${1} solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  content: {
    align: 'left',
    color: theme.palette.grey['700'],
    padding: theme.spacing(0, 3),
    verticalAlign: 'top',
  },
  header: {
    paddingBottom: 0,
    paddingLeft: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  title: {
    color: theme.palette.grey['800'],
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0
  }
})

const CardTask = props => {
  const {
    avatarProps,
    classes,
    content,
    title,
    cardProps,
    cardContentProps,
  } = props


  return (
    <Card
      className={clsx(classes.card)}
      {...cardProps}
    >
      <CardHeader
        className={classes.header}
        avatar={<Avatar {...avatarProps} />}
        title={(!title || typeof title === 'string')
          ? <div className={classes.title}>{title}</div>
          : null}
      />
      <CardContent className={classes.content} {...cardContentProps}>{content}</CardContent>
    </Card>
  )
}

CardTask.propTypes = {
  avatar: PropTypes.node,
  avatarProps: PropTypes.object,
  cardContentProps: PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.object,
  content: PropTypes.node,
  iconRight: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CardTask.muiName = 'CardTask'

export default withStyles(styles, { name: 'KrowdyCardTask' })(CardTask)