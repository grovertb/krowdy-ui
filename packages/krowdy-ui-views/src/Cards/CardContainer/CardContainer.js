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
    '&:last-child': {
      paddingBottom: 0
    },
    align: 'left',
    color: theme.palette.grey['700'],
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
  lessStyle: {
    margin: 0,
    padding: 0,
  },
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    boxShadow: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontSize: 14,
    height: 'auto',
  },
  sizePaddingmiddle: {
    padding: 20
  },
  sizePaddingsmall: {
    padding: 12
  },
  title: {
    color: theme.palette.grey[800],
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0
  },
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
    sizePadding = 'middle',
    onClick = () => { }
  } = props


  return (
    <Card className={clsx(classes.root, classes.lessStyle, { [classes.displayHover]: !disabledHover }, classes[`sizePadding${sizePadding}`])}
      raised
      onClick={onClick}
      {...cardProps}
    >
      <CardHeader
        className={clsx(classes.lessStyle)}
        avatar={avatar}
        title={(title || typeof title === 'string')
          ? <div className={classes.title}>{title}</div>
          : title}
        rightElement={rightElement}
        {...cardHeaderProps}
      />
      <CardContent
        classes={{ root: classes.lessStyle }}
        className={classes.cardContent}
        {...cardContentProps}>{content}</CardContent>
    </Card>
  )
}

CardTask.propTypes = {
  avatar: PropTypes.node,
  cardContentProps: PropTypes.object,
  cardHeaderProps: PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.object,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabledHover: PropTypes.bool,
  onClick: PropTypes.func,
  rightElement: PropTypes.node,
  sizePadding: PropTypes.oneOf(['small', 'middle']),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CardTask.muiName = 'CardTask'

export default withStyles(styles, { name: 'KrowdyCardTask' })(CardTask)