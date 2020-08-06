import React from 'react'
import { Divider, Typography, makeStyles } from '@krowdy-ui/core'

const useStyles = makeStyles((theme) => ({
  divider: {
    width: '25%'
  },
  root: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    width         : '100%'
  },
  text: {
    color   : theme.palette.secondary[100],
    fontSize: 14,
    margin  : theme.spacing(.5, 1)
  }
}))

const DividerWithText = ({ title }) => {
  const classes = useStyles()

  return  (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Typography className={classes.text} variant='body2'>{title}</Typography>
      <Divider className={classes.divider} />
    </div>
  )
}

export default DividerWithText
