import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    height         : 12,
    left           : ({ left }) => `${left}px`,
    position       : 'absolute',
    top            : 0,
    width          : 2
  }
}))

const LineVert = ({ left }) => {
  const classes = useStyles({ left })

  return <div className={classes.root} />
}

export default LineVert
