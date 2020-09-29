import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles, Tooltip, Typography } from '@krowdy-ui/core'
import { AvatarUser } from '@krowdy-ui/views'

const Avatar = (props) => {
  const {
    subtitle,
    photo,
    active,
    selected,
    firstName,
    lastName,
    classes
  } = props

  return (
    <div
      className={classes.hover}>
      <div className={clsx(classes.root, {
        [classes.unselected]: !selected
      })}>
        <Tooltip
          arrow
          placement='top'
          title={(
            <>
              <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
              <Typography>{subtitle}</Typography>
            </>
          )}>
          <div>
            <AvatarUser
              active={active} hover size='small'
              user={{ firstName, lastName, photo }} />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

Avatar.propTypes = {
  active : PropTypes.bool,
  classes: PropTypes.shape({
    avatar      : PropTypes.string,
    hover       : PropTypes.string,
    point       : PropTypes.string,
    root        : PropTypes.string,
    tooltipTitle: PropTypes.string,
    unselected  : PropTypes.string
  }),
  firstName: PropTypes.string,
  lastName : PropTypes.string,
  photo    : PropTypes.string,
  selected : PropTypes.bool,
  subtitle : PropTypes.string
}

export default withStyles(() => ({
  avatar: {},
  hover : {
    '&:hover': {
      '& $unselected': {
        visibility: 'visible'
      }
    }
  },
  point: {
    backgroundColor: 'white',
    borderRadius   : '50%',
    height         : ({ size = 0 }) => size,
    width          : ({ size = 0 }) => size
  },
  root: {
    '& $avatar': {
      display: 'none'
    },
    '& $point': {
    },
    '&:hover': {
      '& $avatar': {
        display: 'block'
      },
      '& $point': {
        display: 'none'
      }
    },
    alignItems    : 'center',
    display       : 'flex',
    height        : 28,
    justifyContent: 'center',
    left          : ({ leftPercent = 0 }) => `calc(${leftPercent}% - 6px)`,
    width         : 28
  },
  tooltipTitle: {
    fontSize  : 12,
    fontWeight: 'bold'
  },
  unselected: {
    visibility: 'hidden'
  }
}), { name: 'Avatar' })(Avatar)
