import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Typography, withStyles } from '@material-ui/core'
import { AvatarUser } from '@krowdy-ui/views'

const styles = {
  avatar: {},
  point : {
    backgroundColor: 'white',
    borderRadius   : '50%',
    height         : ({ size = 8 }) => size,
    width          : ({ size = 8 }) => size
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
    bottom        : ({ bottom = 0 }) => bottom,
    display       : 'flex',
    height        : 12,
    justifyContent: 'center',
    left          : ({ leftPercent = 0 }) => `calc(${leftPercent}% - 6px)`,
    position      : 'absolute',
    width         : 12
  },
  tooltipTitle: {
    fontSize  : 12,
    fontWeight: 'bold'
  }
}

const UserPoint = ({
  classes,
  subtitle = '',
  photo,
  active = false,
  firstName = '',
  lastName = ''
}) => {
  if(active)
    return (
      <div className={classes.root}>
        <Tooltip
          arrow
          title={(
            <>
              <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
              <Typography>{subtitle}</Typography>
            </>
          )}>
          <div>
            <AvatarUser active={active} size='small' user={{ firstName, lastName, photo }} />
          </div>
        </Tooltip>
      </div>
    )

  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <Tooltip
          arrow
          title={(
            <>
              <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
              <Typography>{subtitle}</Typography>
            </>
          )}
          TransitionProps={{ timeout: 0 }}>
          <div>
            <AvatarUser active={false} size='small' user={{ firstName, lastName, photo }} />
          </div>
        </Tooltip>
      </div>
      <div className={classes.point} />
    </div>
  )
}

UserPoint.propTypes = {
  active     : PropTypes.bool,
  firstName  : PropTypes.string,
  lastName   : PropTypes.string,
  leftPercent: PropTypes.number,
  photo      : PropTypes.string,
  size       : PropTypes.number,
  subtitle   : PropTypes.string
}

export default withStyles(styles, { name: 'UserPoint' })(UserPoint)
