import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    '& > section': {
      '& > *': {
        margin: 4
      },
      backgroundColor: '#f5f5f5',
      borderRadius: 4,
      padding: 16,
      display: 'flex',
      marginTop: 4
    },
    padding: 16
  }
}, { name: 'ContentItems' })

export default function ContentItems({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>{children}</div>
  )
}