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
    '&:hover': {
      border: `1px solid ${theme.palette.primary[500]}`,
      boxShadow: '0px 4px 5px rgba(0, 39, 102, 0.08), 0px 3px 14px rgba(0, 39, 102, 0.04), 0px 8px 10px rgba(0, 39, 102, 0.05)'
    },
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: 14
  },
  content: {
    align: 'left',
    color: theme.palette.grey['700'],
    padding: theme.spacing(0, 3),
  },
  header: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  lessShadow: {
    boxShadow: 'none'
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
    focused,
    onClick
  } = props


  return (
    <Card className={clsx(classes.card, { [classes.lessShadow]: !focused })}
      raised={focused}
      onClick={onClick}
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
  avatarProps: PropTypes.object,
  cardContentProps: PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.object,
  content: PropTypes.node,
  focused: PropTypes.bool,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CardTask.muiName = 'CardTask'

export default withStyles(styles, { name: 'KrowdyCardTask' })(CardTask)