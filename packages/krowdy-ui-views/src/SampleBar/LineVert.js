import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: 'white',
    height         : 12,
    top            : 0,
    width          : 2
  },
  root: {
    left    : ({ left }) => `${left}px`,
    position: 'absolute'
  },
  rootLabel: {
    bottom  : -24,
    color   : theme.palette.grey[600],
    fontSize: 12,
    left    : ({ left }) => `calc(${left}px - 4px)`
  }
}))

const LineVert = ({ left, index }) => {
  const classes = useStyles({ left })

  return (
    <>
      <div className={clsx(classes.root, classes.bar)} />
      <div className={clsx(classes.root, classes.rootLabel)}>{index}</div>
    </>
  )
}

export default LineVert
