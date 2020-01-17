import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Card,
  Avatar,
  CardHeader,
  CardContent,
  List,
  Divider,
  ListItem,
  ListItemText,
} from '@krowdy-ui/core'
/* import { NavigateNext, Assignment, Videocam } from '@krowdy-ui/icons' */

export const styles = theme => ({
  card: {
    borderRadius: '8px',
    width: theme.spacing(50),
  },
  header: {
    margin: theme.spacing(1, 1, 0, 1),
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 4)
  },
  moreButton: {
    'float': 'right'
  },
  next: {
    'float': 'right',
    marginLeft: theme.spacing(2),
  },
  title: {
    fontSize: '25px',
  },
})

function generate(items, classes, nextIcon) {
  return items.map((value, index) => {
    return (<ListItem key={index} className={classes.item} >
      <div className={classes.icon}>{(value.icon) ? value.icon : null}</div>
      <ListItemText primary={value.text} />
      <div>{(value.rating) ? value.rating : null}</div>
      <div className={classes.next}>{(nextIcon) ? nextIcon : null}</div>
    </ListItem>
    )
  })
}

const CardUser = props => {
  const {
    classes,
    iconRight,
    items,
    nextIcon,
    title,
    withAvatar = true,
    withDivider = true,
  } = props

  return (
    <Card
      className={clsx(classes.card)}
    >
      <CardHeader
        className={classes.header}
        avatar={
          (withAvatar)
            ? <Avatar />
            : null
        }
        title={
          <div className={classes.title}>
            {title}
          </div>
        }
        rightElement={(iconRight) ? <div className={classes.moreButton} >{iconRight}</div> : null}
      />
      {
        (withDivider)
          ? <div className={classes.divider}><Divider variant='middle' /></div>
          : null
      }
      <CardContent variant='narrow'>{(items && items.length > 0) ? <List> {generate(items, classes, nextIcon)}</List> : []}</CardContent>
    </Card>
  )
}

CardUser.propTypes = {
  classes: PropTypes.object,
  iconRight: PropTypes.node,
  items: PropTypes.array,
  nextIcon: PropTypes.node,
  title: PropTypes.string.isRequired,
  withAvatar: PropTypes.bool,
  withDivider: PropTypes.bool,
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)