import React from 'react'
import { Paper, IconButton, makeStyles, Button } from '@krowdy-ui/core'
import { TableInfinity } from '@krowdy-ui/views'
import { Delete } from '@material-ui/icons'

const CustomComponent = () => (
  <div style={{
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  }}>
    <IconButton>
      <Delete color='primary' />
    </IconButton>
  </div>
)

const Action = ({ value }) => {
  const classes = useStyles()

  const _handleAction = () => {
    console.log('click')
  }

  return (
    <div className={classes.container}>
      <Button
        color='primary'
        onClick={_handleAction}>
        {value}
      </Button>
    </div>
  )
}

const columns = [
  {
    editable: false,
    key     : 'assigneds',
    label   : 'Asignadas',
    minWidth: 150,
    ordering: true,
    type    : 'text',
    visible : true
  }, {
    editable: false,
    key     : 'job',
    label   : 'Job',
    minWidth: 200,
    ordering: true,
    type    : 'text',
    visible : true
  }, {
    editable: false,
    key     : 'status',
    label   : 'Estado',
    minWidth: 200,
    ordering: false,
    type    : 'text',
    visible : true
  }, {
    editable: false,
    key     : 'assigned',
    label   : 'Asignada',
    minWidth: 200,
    ordering: false,
    type    : 'select'
  }, {
    align   : 'center',
    editable: false,
    key     : 'finished',
    label   : 'Finaliza en',
    minWidth: 200,
    ordering: true,
    type    : 'date'
  },
  {
    align          : 'right',
    columnComponent: CustomComponent,
    editable       : false,
    key            : 'action',
    label          : '',
    minWidth       : 200,
    ordering       : true,
    rowComponent   : Action,
    type           : 'date'
  }
]

const sample = [
  {
    _id      : '0',
    action   : 'Realizar',
    assigned : '16/05/20',
    assigneds: 'Video cuestionario',
    finished : '00:15:31',
    job      : 'UI Senior',
    status   : 'Por realizar'
  },
  {
    _id      : '1',
    action   : 'Realizar',
    assigned : '16/05/20',
    assigneds: 'Video Entrevista',
    finished : '00:20:69',
    job      : 'UI Senior',
    status   : 'En Proceso'
  }, {
    _id      : '2',
    action   : 'Revisar',
    assigned : '18/05/20',
    assigneds: 'Hunting',
    finished : '4 días',
    job      : 'Dev',
    status   : 'Por realizar'
  }, {
    _id      : '3',
    action   : 'Revisar',
    assigned : '19/05/20',
    assigneds: 'Video cuestionario',
    finished : '13 días',
    job      : 'UI Senior',
    status   : 'Por revisar'
  }
]

function createData(id, { action, assigned, assigneds, finished, job, status }) {
  return { action, assigned, assigneds, finished, id, job, status }
}

const rows = []

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)]
  rows.push(createData(i, randomSelection))
}

export default function () {
  return (
    <Paper
      elevation={0} style={{
        height  : '100%',
        overflow: 'hidden',
        width   : '100%'
      }}>
      <TableInfinity
        columns={columns} rows={rows} />
    </Paper>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display      : 'flex',
    flexDirection: 'column'
  }
}))
