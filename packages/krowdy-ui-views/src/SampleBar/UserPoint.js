import React from 'react'
import clsx from 'clsx'
import { makeStyles, Tooltip } from '@material-ui/core'
import { AvatarUser } from '@krowdy-ui/views'
import { Typography } from '@krowdy-ui/core'

const useStyles = makeStyles({
  avatar: {
  },
  point: {
    backgroundColor: 'white',
    borderRadius   : '50%',
    height         : ({ size }) => size,
    width          : ({ size }) => size
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
    height        : 12,
    justifyContent: 'center',
    left          : ({ leftPercent }) => `calc(${leftPercent}% - 6px)`,
    position      : 'absolute',
    top           : 0,
    width         : 12
  },
  tooltipTitle: {
    fontSize  : 12,
    fontWeight: 'bold'
  }
})

const UserPoint = ({ leftPercent, subtitle, photo, active, firstName, lastName,  size = 8 }) => {
  const classes = useStyles({ leftPercent, size })
  if(active)
    return (
      <div className={clsx(classes.root)}>
        <Tooltip
          title={(
            <>
              <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
              <Typography>{subtitle}</Typography>
            </>
          )}>
          <div>
            <AvatarUser active={active} user={{ firstName, lastName, photo }} />
          </div>
        </Tooltip>
      </div>
    )

  return (
    <div className={clsx(classes.root)}>
      <Tooltip
        title={(
          <>
            <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
            <Typography>{subtitle}</Typography>
          </>
        )}>
        <div className={classes.avatar}>
          <AvatarUser user={{ firstName, lastName, photo }} />
        </div>
      </Tooltip>
      <div className={classes.point} />
    </div>
  )
}

export default UserPoint
