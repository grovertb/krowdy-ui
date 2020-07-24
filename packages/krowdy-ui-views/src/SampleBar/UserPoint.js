import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { AvatarUser } from '@krowdy-ui/views'

const useStyles = makeStyles({
  point: {
    backgroundColor: 'white',
    borderRadius   : '50%',
    height         : ({ size }) => size,
    left           : ({ leftPercent, size }) => `calc(${leftPercent}% - ${size}px)`,
    top            : 2,
    width          : ({ size }) => size
  },
  root: {
    position: 'absolute'
  },
  selected: {
    backgroundColor: 'white',
    borderRadius   : '50%',
    left           : ({ leftPercent }) => `calc(${leftPercent}% - 18px)`,
    top            : -12
  }
})

const UserPoint = ({ leftPercent, /* title, */ photo, selected, firstName, lastName,  size = 8 }) => {
  const classes = useStyles({ leftPercent, size })
  if(selected)
    return (
      <div className={clsx(classes.root, classes.selected)}>
        <AvatarUser user={{ firstName,lastName,photo }} />
      </div>
    )

  return <div className={clsx(classes.root, classes.point)} />
}

export default UserPoint
