import React, { useState } from 'react'
import { withStyles } from '@krowdy-ui/styles'
import {
  IconButton,
  Typography
} from '@krowdy-ui/core'
import { ModalKrowder, Table, ToggleRole } from '@krowdy-ui/views'
import {
  Delete as DeleteIcon,
  HowToReg as HowToRegIcon,
  Brightness2 as Brightness2Icon
} from '@material-ui/icons'

const demoColumns = [
  {
    active  : true,
    editable: true,
    key     : 'name',
    label   : 'Nombre',
    minWidth: 150,
    ordering: true,
    type    : 'text'
  }, {
    active  : true,
    editable: false,
    key     : 'status',
    label   : 'Estado',
    minWidth: 120,
    ordering: true,
    type    : 'text'
  }, {
    active  : true,
    editable: false,
    key     : 'type',
    label   : 'Tipo de actividad',
    minWidth: 170,
    ordering: false,
    type    : 'text'
  }, {
    active  : true,
    editable: true,
    key     : 'incharge',
    label   : 'Encargado',
    minWidth: 100,
    ordering: false,
    type    : 'select'
  }, {
    active  : true,
    align   : 'right',
    editable: true,
    key     : 'currentTasks',
    label   : 'Tareas actuales',
    minWidth: 150,
    ordering: true,
    type    : 'date'
  }, {
    active  : true,
    align   : 'right',
    editable: true,
    key     : 'amountPayable',
    label   : 'Monto por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'number'
  }, {
    active  : false,
    align   : 'right',
    editable: true,
    key     : 'amountTasks',
    label   : 'Tareas por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'text'
  }, {
    active  : false,
    align   : 'right',
    editable: true,
    key     : 'incidents',
    label   : 'Incidentes',
    minWidth: 90,
    ordering: true,
    type    : 'text'
  }, {
    active  : false,
    editable: true,
    key     : 'other',
    label   : 'Otro valor',
    minWidth: 120,
    ordering: false,
    type    : 'text'
  }
]

const rows = [
  {
    _id          : '0',
    amountPayable: 45,
    amountTasks  : 2,
    currentTasks : 5,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 5,
    name         : 'Juan Perez',
    status       : 'En linea',
    type         : [ 'LL', 'Ln', 'VoD', 'VE' ]
  }, {
    _id          : '1',
    amountPayable: 15,
    amountTasks  : 0,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 0,
    name         : 'Juana de Arco',
    status       : 'Hace 2 dias',
    type         : [ 'LL', 'Ln' ]
  }, {
    _id          : '2',
    amountPayable: 15,
    amountTasks  : 0,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 1,
    name         : 'Pedro de Arco',
    status       : 'Hace 7 dias',
    type         : [ 'LL', 'Ln' ]
  }, {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  },
  {
    _id          : '3',
    amountPayable: 123,
    amountTasks  : 4,
    currentTasks : 2,
    extra        : 'Status',
    incharge     : 'Jimena',
    incidents    : 2,
    name         : 'Pedro Colmenarez',
    status       : 'Invitado',
    type         : [ 'LL', 'Ln' ]
  }
]

const newCellProps = {
  amountPayable: '',
  currentTasks : '',
  incharge     : [
    {
      label: 'Edward Sanchez',
      value: 0
    }, {
      label: 'Jose Perez',
      value: 1
    }, {
      label: 'Manuel Perez',
      value: 2
    }, {
      label: 'Pedro Perez',
      value: 3
    }
  ],
  name  : '',
  status: 'Pendiente',
  type  : [ 'LL', 'VE' ]
}

export const styles = theme => ({
  iconProfileActionDelete: {
    cursor  : 'pointer',
    fontSize: '1.125rem'
  },
  iconProfileActionPause: {
    cursor  : 'pointer',
    fontSize: '1.125rem'
  },
  krowderEmail: {
    color       : theme.palette.grey[700],
    fontSize    : '0.75rem',
    marginBottom: 4
  },
  krowderName: {
    color       : theme.palette.grey[800],
    fontSize    : '1.125rem',
    fontWeight  : 'bold',
    marginBottom: 4
  },
  krowderPhone: {
    color   : theme.palette.grey[700],
    fontSize: '0.75rem'
  }
})

function ModalKrowderDoc({ classes }) {
  const [ open, setOpen ] = useState(false)
  const [ userStatus, setUserStatus ] = useState('')

  const _handleClickOpen = () => {
    setOpen(true)
  }

  const _handleClickClose = () => {
    setOpen(false)
  }

  const _handleClickToggleSuspend = () => {
    setUserStatus(prevState => prevState === 'Suspend' ? 'Confimed' : 'Suspend')
  }

  const _handleClickDelete = () => {
    console.log('DELETE')
  }

  const _handleChangeRole = name  => {
    console.log(name)
  }

  const _handleClickCollapse = (ev) => {
    console.log(ev)
  }

  const Tasks = () => <Table
    columns={demoColumns}
    maxHeight={'40vh'}
    rows={rows} />

  const Payments = () => <Table
    columns={demoColumns}
    maxHeight={'40vh'}
    onHandlePaymentButton={() => {}}
    onHandleSelectAll={() => {}}
    onHandleSelectItem={() => {}}
    paymentAmount={350.20}
    rows={rows}
    withCheckbox={true}
    withFooter={true}
    withMenuColumns={true} />

  const Reports = () => <Table
    columns={demoColumns}
    enableAddCell={true}
    newCellProps={newCellProps}
    rows={rows} />

  const Roles = () => <div style={{ width: '100%' }}>
    <ToggleRole
      checked={false}
      name='role1'
      onchange={_handleChangeRole}
      subtitle='El Krowder puede hacer seguimiento de los procesos.'
      title='Seguimiento'
      value='traking' />

    <ToggleRole
      checked={true}
      name='role2'
      onchange={_handleChangeRole}
      subtitle='El Krowder es capaz de leer, prepararse, editar y entregar.'
      title='Video Cuestionario'
      value='traking' />

    <ToggleRole
      checked={true}
      name='role3'
      onchange={_handleChangeRole}
      subtitle='El Krowder es capaz de leer, prepararse, entrevistar, editar y entregar.'
      title='Video Entrevista'
      value='traking' />
  </div>

  return (
    <div>
      <button onClick={_handleClickOpen}>open</button>
      <ModalKrowder
        action={
          <>
            <IconButton
              color='primary'
              onClick={_handleClickToggleSuspend}
              tooltip={userStatus === 'Suspend' ? 'Activar' : 'Suspender'}>
              {
                userStatus === 'Suspend' ?
                  <HowToRegIcon
                    className={classes.iconProfileActionPause} /> :
                  <Brightness2Icon
                    className={classes.iconProfileActionPause} />
              }
            </IconButton>

            <IconButton color='error' onClick={_handleClickDelete} tooltip='Eliminar'>
              <DeleteIcon
                className={classes.iconProfileActionDelete} />
            </IconButton>
          </>

        }
        collapses={[
          {
            component: <Roles />,
            key      : 'role',
            title    : 'Roles'
          },
          {
            component: <Tasks />,
            key      : 'task',
            title    : 'Tareas'
          },
          {
            component: <Payments />,
            key      : 'pay',
            title    : 'Pagos'
          },
          {
            component: <Reports />,
            key      : 'inc',
            title    : 'Incidencias'
          }
        ]}
        headerContent={
          <div>
            <Typography className={classes.krowderName}>Nombre Apellido</Typography>
            <Typography className={classes.krowderEmail}>email@gmail.com</Typography>
            <Typography className={classes.krowderPhone}>+51 555 555 555</Typography>
          </div>
        }
        onChangeCollapse={_handleClickCollapse}
        onclose={_handleClickClose}
        open={open}
        user={{
          email    : 'xavi@mail.com',
          firstName: 'Xavi',
          lastName : 'Gonzalez',
          phone    : '+51 555 555 555',
          photo    : ''
        }} />
    </div>
  )}

ModalKrowderDoc.muiName = 'ModalKrowderDoc'

export default withStyles(styles, { name: 'ModalKrowderDoc' })(ModalKrowderDoc)
