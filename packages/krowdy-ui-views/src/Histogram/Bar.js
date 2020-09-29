import React from 'react'
import { makeStyles } from '@krowdy-ui/core'
import { UserPoint } from '@krowdy-ui/views'

const Bar = ({ candidate, maxCandidates, index, max }) => {
  const percent =  100 / maxCandidates
  const classes = useStyles({ index, max, percent })

  const { firstName, lastName, salary, photo, selected } = candidate

  return (
    <div className={classes.bar}>
      <UserPoint
        active={selected}
        bottom={'50%'}
        classes={{
          avatar: classes.avatar,
          point : classes.point
        }}
        firstName={firstName}
        lastName={lastName}
        leftPercent={50}
        photo={photo}
        subtitle={`S/ ${salary}`} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: theme.palette.primary[100],
    // borderTop      : ({ avarage }) => `${avarage <= 1 ? 1 : 0}px solid ${theme.palette.primary[600]}`,
    height         : ({ percent }) => `${percent}%`,
    position       : 'relative',
    width          : '100%',
    zIndex         : ({ index, max }) => max - index
  }
}))

export default Bar
