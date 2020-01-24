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
  ListItemText
} from '@krowdy-ui/core'
/* import { NavigateNext, Assignment, Videocam } from '@krowdy-ui/icons' */

export const styles = theme => ({
  card: {
    borderRadius: 8,
    width       : theme.spacing(50)
  },
  header: {
    margin: theme.spacing(1, 1, 0, 1)
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 4)
  },
  title: {
    fontSize: 25
  }
})

function generate(items, classes, nextIcon) {
  return items.map((value, index) => (<ListItem className={classes.item} key={index} >
    <div className={classes.icon}>{(value.icon) ? value.icon : null}</div>
    <ListItemText primary={value.text} />
    <div>{(value.rating) ? value.rating : null}</div>
    <div>{(nextIcon) ? nextIcon : null}</div>
  </ListItem>
  ))
}

const CardUser = props => {
  const {
    classes,
    iconRight,
    items,
    nextIcon,
    title,
    withAvatar = true,
    withDivider = true
  } = props

  return (
    <Card
      className={clsx(classes.card)}>
      <CardHeader
        avatar={
          (withAvatar) ?
            <Avatar /> :
            null
        }
        className={classes.header}
        rightElement={(iconRight) ? <div>{iconRight}</div> : null}
        title={
          <div className={classes.title}>
            {title}
          </div>
        } />
      {
        (withDivider) ?
          <div className={classes.divider}><Divider variant='middle' /></div> :
          null
      }
      <CardContent variant='narrow'>{(items && items.length > 0) ? <List> {generate(items, classes, nextIcon)}</List> : []}</CardContent>
    </Card>
  )
}

CardUser.propTypes = {
  classes    : PropTypes.object,
  iconRight  : PropTypes.node,
  items      : PropTypes.array,
  nextIcon   : PropTypes.node,
  title      : PropTypes.string.isRequired,
  withAvatar : PropTypes.bool,
  withDivider: PropTypes.bool
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)
