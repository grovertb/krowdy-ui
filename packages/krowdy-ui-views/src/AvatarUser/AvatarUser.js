import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'
import { HighlightOff as HighlightOffIcon } from '@material-ui/icons'

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
    alignItems     : 'center',
    backgroundColor: 'white',
    border         : `solid 1px ${theme.palette.primary.main}`,
    borderRadius   : '50%',
    display        : 'flex',
    fontSize       : 14,
    justifyContent : 'center'
    // marginRight: theme.spacing(2),
  },
  defaultAvatarNothing: {
    background: theme.palette.grey[400]
  },
  deleteIcon: {
    backgroundColor: theme.palette.primary[500],
    borderRadius   : '50%',
    color          : 'white',
    cursor         : 'pointer',
    display        : 'none',
    height         : theme.spacing(1.5),
    padding        : 0,
    position       : 'absolute',
    right          : 0,
    top            : 0,
    width          : theme.spacing(1.5)
  },
  hover: {
    '&:hover': {
      border: `solid 3px ${theme.palette.primary[300]}`
    }
  },
  image: {
    border      : `solid 3px ${theme.palette.primary[300]}`,
    borderRadius: '50%'
    // marginRight: theme.spacing(2),
  },
  imageActive: {
    border: `solid 3px ${theme.palette.primary.main}`
  },
  imageDefault: {
    border: `solid 3px ${theme.palette.grey[300]}`
  },
  root: {
    '&:hover': {
      '& $deleteIcon': {
        display: 'block'
      }
    },
    position: 'relative'
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
    hover,
    size = 'default',
    onDelete
  } = props

  const acro = `${user.firstName && typeof user.firstName === 'string' ? user.firstName.charAt() : ''}${user.lastName && typeof user.lastName === 'string' ? user.lastName.charAt() : ''}`

  const _handleClickDelete = () => onDelete()

  return (
    <div className={classes.root}>
      {
        user ?
          user.photo ?
            <img
              alt={acro}
              className={clsx(classes.image, {
                [ classes.imageDefault ]: active === undefined,
                [ classes.imageActive]  : active,
                [ classes.hover ]       : !active && hover,
                [ classes.default ]     : size === 'default',
                [ classes.small ]       : size === 'small',
                [ classes.big ]         : size === 'big'
              })}
              src={user.photo} /> :
            <div
              className={clsx(classes.defaultAvatar, {
                [ classes.default ]: size === 'default',
                [ classes.small ]  : size === 'small',
                [ classes.big ]    : size === 'big'
              })}>
              {acro}
            </div> :
          null // <div className={clsx(classes.defaultAvatar, classes.defaultAvatarNothing )} />
      }
      {onDelete && (
        <HighlightOffIcon
          className={classes.deleteIcon}
          fontSize='small'
          onClick={_handleClickDelete} />
      )}
    </div>
  )
}

AvatarUser.propTypes = {
  active : PropTypes.bool,
  classes: PropTypes.object,
  hover  : PropTypes.bool,
  size   : PropTypes.string,
  user   : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

AvatarUser.muiName = 'AvatarUser'

export default withStyles(styles, { name: 'AvatarUser' })(AvatarUser)
