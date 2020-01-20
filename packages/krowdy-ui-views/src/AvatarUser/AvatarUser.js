import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
// import clsx from 'clsx'


export const styles = theme => ({
  defaultAvatar: {
    alignItems: 'center',
    border: `solid 2px ${theme.palette.primary.main}`,
    borderRadius: '50%',
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    width: 48
  },
  defaultAvatarNothing: {
    background: theme.palette.grey[400]
  },
  image:{
    border: `solid 2px ${theme.palette.primary.main}`,
    height: 48,
    marginRight: theme.spacing(2),
    width: 48
  },
})

function AvatarUsrer (props) {
  const {
    user,
    classes

  } = props

  return (
    user ?
      user.photo ?
        <img
          alt={`${user.firstName} ${user.lastName}`}
          className={classes.image}
          src={user.photo} />
      : <div className={classes.defaultAvatar}>
          {
            `${user.firstName ?
              typeof user.firstName === 'string'
                ? user.firstName.charAt().toUpperCase()
                : ''
              : ''}
              ${user.lastName ?
                typeof user.lastName === 'string'
                  ? user.lastName.charAt().toUpperCase()
                  : ''
                : ''}`
          }
        </div> 
    : null //<div className={clsx(classes.defaultAvatar, classes.defaultAvatarNothing )} />
  )
}

AvatarUsrer.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string
  }),
}

AvatarUsrer.muiName = 'AvatarUsrer'

export default withStyles(styles, { name: 'AvatarUsrer' })(AvatarUsrer)
