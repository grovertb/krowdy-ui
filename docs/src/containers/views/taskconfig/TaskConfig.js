import React from 'react'
import { Button, IconButton, Paper, TextField } from '@krowdy-ui/core'
import { TaskConfig } from '@krowdy-ui/views'
import {
  Close as CloseIcon
} from '@material-ui/icons'

export default function () {
  return (
    <Paper elevation={0}>
      <TaskConfig
        action={(
          <IconButton color='primary' onClick={() => {}} size='small'>
            <CloseIcon fontSize='small' />
          </IconButton>
        )}
        actionFooter={(
          <div>
            <>
              <Button
                color='primary'
                onClick={() => {}}>
              Guardar borrador
              </Button>
              <Button
                color='primary'
                onClick={() => {}}
                variant='contained'>
                Activar tarea
              </Button>
            </>
          </div>
        )}
        panelCandidates={<div>panel de candidatos</div>}
        panelResponsable={<div>panel de responsable</div>}
        panelTask={<div>panel de tarea</div>}
        taskTextField={(
          <TextField
            name='name'
            onChange={() => {}}
            size='small'
            value={'Nombre'}
            variant='outlined' />
        )}
        urlIconTask='https://s3.amazonaws.com/cdn.krowdy.com/media/images/RankingIcon.svg' />
    </Paper>
  )
}
