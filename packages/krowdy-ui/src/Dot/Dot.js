import React from 'react'
import { makeStyles, Tooltip } from '@krowdy-ui/core'

const StatusDot = ({ color = 'default', title  }) => {
  const classes = useStyles({ color })

  if(title) return <Tooltip title={title}><div className={classes.root} /></Tooltip>

  return (
    <div className={classes.root} />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ color }) => {
      switch (color) {
        case 'success': {
          return theme.palette.success.main
        }
        case 'error': {
          return theme.palette.error.main
        }
        default: {
          return theme.palette.grey[500]
        }
      }
    },
    borderRadius: '50%',
    display     : 'inline-block',
    height      : 8,
    width       : 8
  }
}))

export default StatusDot
