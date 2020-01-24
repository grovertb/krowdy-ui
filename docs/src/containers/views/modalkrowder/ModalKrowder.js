import React, { useState } from 'react'
import { ModalKrowder, Table, ToggleRole } from '@krowdy-ui/views'

const demoColumns = [
  {
    active  : true,
    editable: true,
    id      : 'name',
    label   : 'Nombre',
    minWidth: 150,
    ordering: true,
    type    : 'text'
  }, {
    active  : true,
    editable: false,
    id      : 'status',
    label   : 'Estado',
    minWidth: 120,
    ordering: true,
    type    : 'text'
  }, {
    active  : true,
    editable: false,
    id      : 'type',
    label   : 'Tipo de actividad',
    minWidth: 170,
    ordering: false,
    type    : 'text'
  }, {
    active  : true,
    editable: true,
    id      : 'incharge',
    label   : 'Encargado',
    minWidth: 100,
    ordering: false,
    type    : 'select'
  }, {
    active  : true,
    align   : 'right',
    editable: true,
    id      : 'currentTasks',
    label   : 'Tareas actuales',
    minWidth: 150,
    ordering: true,
    type    : 'date'
  }, {
    active  : true,
    align   : 'right',
    editable: true,
    id      : 'amountPayable',
    label   : 'Monto por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'number'
  }, {
    active  : false,
    align   : 'right',
    editable: true,
    id      : 'amountTasks',
    label   : 'Tareas por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'text'
  }, {
    active  : false,
    align   : 'right',
    editable: true,
    id      : 'incidents',
    label   : 'Incidentes',
    minWidth: 90,
    ordering: true,
    type    : 'text'
  }, {
    active  : false,
    editable: true,
    id      : 'other',
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

export default function () {
  const [ open, setOpen ] = useState(false)

  const _handleClickOpen = () => {
    setOpen(true)
  }

  const _handleClickClose = () => {
    setOpen(false)
  }

  const _handleClickSuspend = () => {
    console.log('SUSPEND')
  }

  const _handleClickDelete = () => {
    console.log('DELETE')
  }

  const _handleChangeRole = name  => {
    console.log('Xavi :) ===> :(: name', name)
  }

  const Tasks = () => <Table
    columns={demoColumns}
    rows={rows} />

  const Payments = () => <Table
    columns={demoColumns}
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
        collapses={[
          {
            component: <Roles />,
            title    : 'Roles'
          },
          {
            component: <Tasks />,
            title    : 'Tareas'
          },
          {
            component: <Payments />,
            title    : 'Pagos'
          },
          {
            component: <Reports />,
            title    : 'Incidencias'
          }
        ]}
        onclose={_handleClickClose}
        ondelete={_handleClickDelete}
        onsuspend={_handleClickSuspend}
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
