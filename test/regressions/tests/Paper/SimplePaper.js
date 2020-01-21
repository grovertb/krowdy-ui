import React from 'react'
import Paper from '@material-ui/core/Paper'

const style = {
  margin : 15,
  padding: 30
}

export default function SimplePaper() {
  return (
    <div>
      <Paper style={style} />
      <Paper square style={style} />
      <Paper elevation={6} style={style} />
    </div>
  )
}
