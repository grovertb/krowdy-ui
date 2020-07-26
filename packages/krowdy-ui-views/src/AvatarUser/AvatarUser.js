import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'

// import clsx from 'clsx'

export const styles = theme => ({
  big: {
    height: 44,
    width : 44
  },
  'default': {
    height: 36,
    width : 36
  },
  defaultAvatar: {
    alignItems    : 'center',
    border        : `solid 2px ${theme.palette.primary.main}`,
    borderRadius  : '50%',
    display       : 'flex',
    fontSize      : 14,
    justifyContent: 'center'
    // marginRight: theme.spacing(2),
  },
  defaultAvatarNothing: {
    background: theme.palette.grey[400]
  },
  image: {
    border      : `solid 3px ${theme.palette.primary[300]}`,
    borderRadius: '50%'
    // marginRight: theme.spacing(2),
  },
  imageActive: {
    border: `solid 3px ${theme.palette.primary.main}`
  },
  small: {
    height: 28,
    width : 28
  }
})

function AvatarUser(props) {
  const {
    user,
    classes,
    active,
    size = 'default'
  } = props

  return (
    user ?
      user.photo ?
        <img
          alt={`${user.firstName} ${user.lastName}`}
          className={clsx(classes.image, {
            [ classes.imageActive]: active,
            [ classes.default ]   : size === 'default',
            [ classes.small ]     : size === 'small',
            [ classes.big ]       : size === 'big'
          })}
          src={user.photo} /> :
        <div
          className={clsx(classes.defaultAvatar, {
            [ classes.default ]: size === 'default',
            [ classes.small ]  : size === 'small',
            [ classes.big ]    : size === 'big'
          })}>
          {
            `${user.firstName && typeof user.firstName === 'string' ? user.firstName.charAt() : ''}${user.lastName && typeof user.lastName === 'string' ? user.lastName.charAt() : ''}`
          }
        </div> :
      null // <div className={clsx(classes.defaultAvatar, classes.defaultAvatarNothing )} />
  )
}

AvatarUser.propTypes = {
  active : PropTypes.bool,
  classes: PropTypes.object,
  size   : PropTypes.string,
  user   : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

AvatarUser.muiName = 'AvatarUser'

export default withStyles(styles, { name: 'AvatarUser' })(AvatarUser)
