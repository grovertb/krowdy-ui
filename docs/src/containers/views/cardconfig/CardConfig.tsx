import React from 'react'
import { CardConfig } from '@krowdy-ui/views'
import { makeStyles, Paper } from '@krowdy-ui/core'
import {
  AssignmentTurnedIn as AssignmentTurnedInIcon
} from '@material-ui/icons'

export default function() {
  const classes = useStyles()

  return (
    <div style={{ width: 452 }}>
      <Paper className={classes.container} variant='outlined'>
        <CardConfig
          icon={<AssignmentTurnedInIcon />}
          subtitle='Candidatos que vas a evaluar.'
          title='Aptos para revisar'>
          <div>
            prueba
          </div>
        </CardConfig>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display       : 'flex',
    height        : 400,
    justifyContent: 'space-between',
    padding       : 12,
    width         : '100%'
  }
}))
