import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      style={{
        width: 150
      }}
      value={60}
      variant='determinate' />
  )
}
