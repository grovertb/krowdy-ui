import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent,
} from '@krowdy-ui/core'

export const styles = theme => ({
  cardContent: {
    align: 'left',
    color: theme.palette.grey['700'],
    padding: theme.spacing(0, 3),
  },
  cardHeader: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  displayHover: {
    '&:hover': {
      border: `1px solid ${theme.palette.primary[500]}`,
      boxShadow: '0px 4px 5px rgba(0, 39, 102, 0.08), 0px 3px 14px rgba(0, 39, 102, 0.04), 0px 8px 10px rgba(0, 39, 102, 0.05)'
    }
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    boxShadow: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: 14,
    height:'auto',
  },
  title: {
    color: theme.palette.grey['800'],
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0
  },
  whitoutAvatar: {
    paddingLeft: theme.spacing(3)
  }
})

const CardTask = props => {
  const {
    avatar,
    classes,
    content,
    title,
    cardProps,
    cardContentProps,
    cardHeaderProps,
    disabledHover,
    rightElement,
    onClick = () => { }
  } = props


  return (
    <Card className={clsx(classes.root, { [classes.displayHover]: !disabledHover })}
      raised
      onClick={onClick}
      {...cardProps}
    >
      <CardHeader
        className={clsx(classes.cardHeader, { [classes.whitoutAvatar]: !avatar })}
        avatar={avatar}
        title={(title || typeof title === 'string')
          ? <div className={classes.title}>{title}</div>
          : title}
        rightElement={rightElement}
        {...cardHeaderProps}
      />
      <CardContent className={classes.cardContent} {...cardContentProps}>{content}</CardContent>
    </Card>
  )
}

CardTask.propTypes = {
  avatar: PropTypes.node,
  cardContentProps: PropTypes.object,
  cardHeaderProps : PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.object,
  content: PropTypes.node,
  disabledHover: PropTypes.bool,
  onClick: PropTypes.func,
  rightElement: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CardTask.muiName = 'CardTask'

export default withStyles(styles, { name: 'KrowdyCardTask' })(CardTask)