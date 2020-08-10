import React from 'react'
import { makeStyles, Typography } from '@krowdy-ui/core'

const Count = ({ count, index }) => {
  const classes = useStyles({ count })
  const showNumber = (index) % 2 === 0

  return (
    <div className={classes.count}>
      {
        showNumber ?  (
          <Typography variant='body1'>{count - index}</Typography>
        ) : null
      }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  count: {
    alignItems : 'center',
    color      : theme.palette.grey[600],
    display    : 'flex',
    height     : ({ count }) => `${100 / count}%`,
    marginRight: theme.spacing(1)
  }
}))

export default Count
