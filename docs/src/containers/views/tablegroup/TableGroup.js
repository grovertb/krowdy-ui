import React, { useState } from 'react'
import { Grid } from '@krowdy-ui/core'
import { TableGroup } from '@krowdy-ui/views'
// import { makeStyles } from '@krowdy-ui/styles'

// const useStyles = makeStyles(() => ({
//   root: {
//     color     : '#595959',
//     fontSize  : 12,
//     fontWeight: 'normal',
//     maxWidth  : 249,
//     minWidth  : 247
//   }
// }))

// label => title
// key => name
const columns = [
  {
    draggable: false,
    key      : 'name',
    label    : 'ddsfdsf',
    ordering : true,
    visible  : true
  },
  {
    draggable: true,
    key      : 'status',
    label    : 'status',
    ordering : true,
    visible  : true
  },
  {
    draggable: false,
    key      : 'activitytype',
    label    : 'activitytype',
    ordering : true,
    visible  : true
  },
  {
    draggable: false,
    key      : 'currenttask',
    label    : 'currenttask',
    ordering : true,
    visible  : true
  },
  {
    draggable: false,
    key      : 'paytotal',
    label    : 'paytotal',
    ordering : true,
    visible  : true
  },
  {
    draggable: false,
    key      : 'paytask',
    label    : 'paytask',
    ordering : true,
    visible  : true
  }
]

var rowsData = [
  {
    _id         : '5e46d81c9838b30009e984add',
    activitytype: [
      'QQQ'
    ],
    currenttask: 15,
    name       : 'Jorge Alonso Eyzaguirre Herrera',
    paytask    : 0,
    paytotal   : 0,
    status     : 'Confirmed'
  },
  {
    _id         : 'cccccc',
    activitytype: [
      'QQQ'
    ],
    currenttask: 15,
    name       : 'Jorge Alonso Eyzaguirre Herrera',
    paytask    : 0,
    paytotal   : 0,
    status     : 'Pending'
  }
]

const dataExmpleGroupLevel1 = [
  {
    items: [
      {
        _id         : '5e46d81c9838b3d0009e984ad',
        activitytype: [
          'BEEEE'
        ],
        currenttask: 15,
        name       : 'Jorge Alonso Eyzaguirre Herrera',
        paytask    : 0,
        paytotal   : 0,
        status     : 'Confirmed'
      },
      {
        _id         : 'cccccc',
        activitytype: [
          'BEEEE'
        ],
        currenttask: 15,
        name       : 'Jorge Alonso Eyzaguirre Herrera',
        paytask    : 0,
        paytotal   : 0,
        status     : 'Confirmed'
      }
    ],
    key: 'Confirmed'
  },
  {
    items: [
      {
        _id         : '5e46d81dsa983sd8b30009e984ad',
        activitytype: [
          'VEE'
        ],
        currenttask: 15,
        name       : 'Jorge Alonso Eyzaguirre Herrera',
        paytask    : 0,
        paytotal   : 0,
        status     : 'Pending'
      },
      {
        _id         : '5e46d81hhdsa9838b30009e984ad',
        activitytype: [
          'VEE'
        ],
        currenttask: 15,
        name       : 'Jorge Alonso Eyzaguirre Herrera',
        paytask    : 0,
        paytotal   : 0,
        status     : 'Pending'
      }
    ],
    key: 'Pending'
  }
]

export default function () {
  const [ groupingData, setGroupingData ] = useState([])
  const [ sortingData, setSortingData ] = useState([])
  const [ rows, setRows ] = useState(rowsData)

  const _handleChangeGrouping = value => {
    setGroupingData(value)
    setRows(dataExmpleGroupLevel1)
  }

  const _handleChangeSorting = value => {
    console.log('%c Xavi :) ===> :(: value', 'color: orange; font-size: 16px', value)
    setSortingData(value)
  }

  const _handleSearch = (search) => {
    console.log('TCL: _handleSearch -> search', search)
  }

  const _handleSelectAutocomplete = (e, value) => {
    console.log('TCL: _handleSelectAutocomplete -> value', value)
  }

  return (
    <Grid>
      <TableGroup
        changeGrouping={_handleChangeGrouping}
        changeSorting={_handleChangeSorting}
        columns={columns}
        grouping
        groupingData={groupingData}
        onHandleSearch={_handleSearch}
        onHandleSelectAutocomplete={_handleSelectAutocomplete}
        rows={rows}
        sorting
        sortingData={sortingData}
        withAutocomplete
        withHeader
        withSearch />
    </Grid>
  )
}

// sorting? Bolean
// grouping? Bolean
