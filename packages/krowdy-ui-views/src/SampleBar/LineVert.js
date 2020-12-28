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
    left    : ({ leftPercent }) => `${leftPercent}%`,
    position: 'absolute'
  },
  rootLabel: {
    bottom  : -theme.spacing(3),
    color   : theme.palette.grey[600],
    fontSize: 12,
    left    : ({ leftPercent }) => `calc(${leftPercent}% - 4px)`
  }
}))

const LineVert = ({ leftPercent = 0, index, customLabel }) => {
  const classes = useStyles({ leftPercent })

  return (
    <>
      <div className={clsx(classes.root, classes.bar)} />
      <div className={clsx(classes.root, classes.rootLabel)}>{customLabel ? customLabel(index): index}</div>
    </>
  )
}

export default LineVert
