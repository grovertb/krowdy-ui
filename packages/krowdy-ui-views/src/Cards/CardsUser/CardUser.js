import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
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
    margin: theme.spacing(0, 1, 0, 5)
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

function generate(items, classes) {
  return items.map((value, index) => {
    return (<ListItem key={index} className={classes.item} >
      {
/*         (value.type === 'video') ? {/* <Videocam className={classes.icon} /> } : <Assignment className={classes.icon} />
 */      }
      <ListItemText primary={value.text} />
      {/*       <Rating name={`rating-${index}`} value={value.rating} size='small' precision={0.5} />
 */}      <div className={classes.next}>{/* <NavigateNext /> */}</div>
    </ListItem>
    )
  })
}

const CardUser = props => {
  const {
    classes,
    items,
    title,
    withAvatar = false,
    withDivider = false,
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
/*         rightElement={(iconRight) ? <div className={classes.moreButton} >{iconRight}</div> : null}
 */      />
      {
        (withDivider)
          ? <div className={classes.divider}><Divider variant='middle' /></div>
          : null
      }
      <CardContent variant='narrow'>{(items && items.length > 0) ? <List> {generate(items, classes)}</List> : []}</CardContent>
    </Card>
  )
}

CardUser.propTypes = {
  classes: PropTypes.object,
  iconRight: PropTypes.node,
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
  withAvatar: PropTypes.bool,
  withDivider: PropTypes.bool,
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)