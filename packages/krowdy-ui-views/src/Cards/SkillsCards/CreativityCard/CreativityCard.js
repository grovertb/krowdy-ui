import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent,
} from '@krowdy-ui/core'

export const styles = theme => ({
  card: {

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

const CreativityCard = props => {
  const {
    classes,
    content,
    title,
    cardProps,
    cardContentProps,
    focused
  } = props


  return (
    <Card className={clsx(classes.card, { [classes.lessShadow]: !focused })}
      raised={focused}
      {...cardProps}
    >
      <CardHeader
        className={classes.header}
        title={(!title || typeof title === 'string')
          ? <div className={classes.title}>{title}</div>
          : null}
      />
      <CardContent className={classes.content} {...cardContentProps}>{content}</CardContent>
    </Card>
  )
}

CreativityCard.propTypes = {
  avatar: PropTypes.node,
  avatarProps: PropTypes.object,
  cardContentProps: PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.object,
  content: PropTypes.node,
  focused: PropTypes.bool,
  iconRight: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CreativityCard.muiName = 'CreativityCard'

export default withStyles(styles, { name: 'KrowdyCreativityCard' })(CreativityCard)