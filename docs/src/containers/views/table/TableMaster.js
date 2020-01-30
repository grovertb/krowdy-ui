import React, { useState } from 'react'
import { Grid } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'

const demoColumns = [
  {
    editable: true,
    key     : 'name',
    label   : 'Nombre',
    minWidth: 150,
    ordering: true,
    type    : 'text'
  }, {
    editable: false,
    key     : 'status',
    label   : 'Estado',
    minWidth: 120,
    ordering: true,
    type    : 'text'
  }, {
    editable: false,
    key     : 'type',
    label   : 'Tipo de actividad',
    minWidth: 170,
    ordering: false,
    type    : 'text'
  }, {
    editable: true,
    key     : 'incharge',
    label   : 'Encargado',
    minWidth: 100,
    ordering: false,
    type    : 'select'
  }, {
    align   : 'right',
    editable: true,
    key     : 'currentTasks',
    label   : 'Tareas actuales',
    minWidth: 150,
    ordering: true,
    type    : 'date'
  }, {
    align   : 'right',
    editable: true,
    key     : 'amountPayable',
    label   : 'Monto por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'number'
  }, {
    align   : 'right',
    editable: true,
    key     : 'amountTasks',
    label   : 'Tareas por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'text'
  }, {
    align   : 'right',
    editable: true,
    key     : 'incidents',
    label   : 'Incidentes',
    minWidth: 90,
    ordering: true,
    type    : 'text'
  }, {
    editable: true,
    key     : 'other',
    label   : 'Otro valor',
    minWidth: 120,
    ordering: false,
    type    : 'text',
    visible : false
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
  const [ sort, setSort ] = useState({ orderBy: null, sort: 'asc' })
  const [ columns, setColumns ] = useState(demoColumns)
  const searchSuggestions = [
    {
      title: 'The Shawshank Redemption',
      year : 1994
    }, {
      title: 'The Godfather',
      year : 1972
    }, {
      title: 'The Godfather: Part II',
      year : 1974
    }, {
      title: 'The Dark Knight',
      year : 2008
    }, {
      title: '12 Angry Men',
      year : 1957
    }, {
      title: "Schindler's List",
      year : 1993
    }, {
      title: 'Pulp Fiction',
      year : 1994
    }, {
      title: 'The Lord of the Rings: The Return of the King',
      year : 2003
    }, {
      title: 'The Good, the Bad and the Ugly',
      year : 1966
    }, {
      title: 'Fight Club',
      year : 1999
    }, {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year : 2001
    }, {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year : 1980
    }, {
      title: 'Forrest Gump',
      year : 1994
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
      disabled     : true,
      extra        : 'Status',
      incharge     : 'Jimena',
      incidents    : 0,
      name         : 'Juana de Arco',
      selected     : true,
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
  const _handleSortTable = (sort) => {
    setSort(sort)
    console.log('TCL: _handleSortTable -> orderby', sort)
  }
  const _handleSearch = (search) => {
    console.log('TCL: _handleSearch -> search', search)
  }
  const _handleBtnAction = (e) => {
    console.log('TCL: _handleBtnAction -> e', e)
  }
  const _handleChangeRowsPerPage = () => {
    console.log('change row per page')
  }
  const _handleChangePage = (e, page) => {
    console.log('TCL: _handleChangeRowsPerPage -> page', page)
    console.log('TCL: _handleChangeRowsPerPage -> e', e)
    console.log('change page')
  }
  const _handleSelectAll = (value) => {
    console.log('click select all', value)
  }
  const _handleSelectItem = (index) => {
    console.log('click en select', index)
  }
  const _handlePaymentButton = () => {
    console.log('click en pagar ')
  }
  const _handleToggleColumnTable = (id) => {
    console.log('click en column con id', id)
    const newCols = columns.map((column) => column.id === id ? {
      ...column,
      active: !column.active
    } : column)
    setColumns(newCols)
  }
  const _handleAddNewCell = (newCell) => {
    console.log('TCL: _handleAddNewCell -> newCell', newCell)
  }

  const _handleClickRow = (id) => {
    console.log('TCL: _handleClickRow -> id', id)
  }

  const _handleSelectAutocomplete = (e, value) => {
    console.log('TCL: _handleSelectAutocomplete -> value', value)
  }

  return (
    <Grid container>
      <Table
        columns={columns}
        enableAddCell={false}
        iconButton={<AddIcon />}
        // maxHeight={400}
        newCellProps={newCellProps}
        onHandleAddNewCell={_handleAddNewCell}
        onHandleBtnAction={_handleBtnAction}
        onHandleChangePage={_handleChangePage}
        onHandleChangeRowsPerPage={_handleChangeRowsPerPage}
        onHandleClickRow={_handleClickRow}
        onHandlePaymentButton={_handlePaymentButton}
        // titleTable='Tabla de Krowders'
        onHandleSearch={_handleSearch}
        onHandleSelectAll={_handleSelectAll}
        onHandleSelectAutocomplete={_handleSelectAutocomplete}
        onHandleSelectItem={_handleSelectItem}
        onHandleSortTable={_handleSortTable}
        onHandleToggleColumnTable={_handleToggleColumnTable}
        pagination={
          {
            page   : 1,
            perPage: 25,
            total  : 275
          }
        }
        paymentAmount={0}
        rows={rows}
        searchSuggestions={searchSuggestions}
        sortTable={sort}
        titleButton='Agregar Krowder'
        withAutocomplete={true}
        withButton={false}
        withCheckbox={true}
        withFooter={true}
        withHeader={true}
        withMenuColumns={true}
        withOrder={true}
        withPagination={true}
        withSearch={true} />
    </Grid>
  )
}
