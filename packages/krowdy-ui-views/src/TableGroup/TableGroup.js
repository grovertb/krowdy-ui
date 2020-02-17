import React, { useState } from 'react'
import { withStyles } from '@krowdy-ui/styles'
import {
  Grid,
  Paper,
  TextField,
  InputAdornment
} from '@krowdy-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import {
  GroupingState,
  IntegratedSorting,
  SortingState,
  CustomGrouping
} from '@devexpress/dx-react-grid'
import {
  Grid as GridTable,
  Table,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui'

export const styles = theme => ({
  containerFullwidth: {
    height: '100%'
  },
  contetPagination: {
    display       : 'flex',
    justifyContent: 'flex-end',
    padding       : 20
  },
  gridTableGroupingEmpty: {
    '& > div': {
      background: 'transparent',
      border    : `solid 1px ${theme.palette.primary.main}`,
      color     : '#595959'
    },
    alignItems: 'center',
    display   : 'flex',
    height    : '32px',
    marginTop : theme.spacing(1)
  },
  gridTableHeader: {
    '& svg': {
      color: `${theme.palette.primary.main} !important`
    },
    '& th': {
    },
    fontSize  : '0.875rem',
    fontWeight: 'bold',
    padding   : theme.spacing(1, 2)
  },
  gridTableHeaderGroup: {
    '& > td': {
      background: '#E6E9F0'
    },
    '& > td > div': {
      background: '#E6E9F0',
      color     : '#262626',
      fontWeight: 'bold'
    },
    background: '#E6E9F0'
  },
  gridTableHeaderRoot: {
    background: '#F2F4F7'
  },
  gridTableSearch: {
    background   : '#fff',
    padding      : theme.spacing(2),
    paddingBottom: 0
  },
  gridTableToolbar: {
    display      : 'flex',
    flexDirection: 'column',
    padding      : theme.spacing(2)
  },
  inputSearch: {
    '& * input': {
      fontSize: 14,
      padding : '12px 10px !important'
    },
    '& > div': {
      padding: '0 14px 0 0 !important'
    },
    margin: '2px 0'
  },
  paperRoot: {
    '& > div:first-child': {
      height: '100%'
    },
    '& > div:first-child > div:nth-child(2)': {
      flex    : 1,
      overflow: 'auto'
    },
    height: '100%'
  },
  searchIcon: {
    cursor: 'pointer'
  },
  tableContainer: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100%'
  }
})

// const dataExmpleGroup = [
//   {
//     items: [
//       {
//         items: [
//           {
//             _id         : '5e46d81c9838b30009e984ad',
//             activitytype: [
//               'QQQ'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Confirmed'
//           },
//           {
//             _id         : 'cccccc',
//             activitytype: [
//               'QQQ'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Confirmed'
//           }
//         ],
//         key: 'QQQ'
//       },
//       {
//         items: [
//           {
//             _id         : '5e46d81c9838b30009e984ad',
//             activitytype: [
//               'BEEEE'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Confirmed'
//           },
//           {
//             _id         : 'cccccc',
//             activitytype: [
//               'BEEEE'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Confirmed'
//           }
//         ],
//         key: 'BEEEE'
//       }
//     ],
//     key: 'Confirmed'
//   },
//   {
//     items: [
//       {
//         items: [
//           {
//             _id         : '5e46d81dsa983sd8b30009e984ad',
//             activitytype: [
//               'VEE'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Pending'
//           },
//           {
//             _id         : '5e46d81hhdsa9838b30009e984ad',
//             activitytype: [
//               'VEE'
//             ],
//             currenttask: 15,
//             name       : 'Jorge Alonso Eyzaguirre Herrera',
//             paytask    : 0,
//             paytotal   : 0,
//             status     : 'Pending'
//           }
//         ],
//         key: 'VEE'
//       }
//     ],
//     key: 'Pending'
//   }
// ]

const dataExmple = [
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
    status     : 'Confirmed'
  }
]

const TableGroup = props => {
  const {
    classes
    // sorting
  } = props

  const [ columns ] = useState([
    { name: 'name', title: 'Name' },
    { name: 'status', title: 'status' },
    { name: 'activitytype', title: 'activitytype' },
    { name: 'currenttask', title: 'currenttask' },
    { name: 'paytotal', title: 'paytotal' },
    { name: 'paytask', title: 'paytask' }
  ])

  const [ rows ] = useState([ ...dataExmple ])
  const [ sortingData, setSortingData ] = useState([ ])
  const [ grouping, setGrouping ] = useState([ ])
  const [ groupingStateColumnExtensions ] = useState([
    { columnName: 'name', groupingEnabled: false }
  ])

  // actions
  const getRowId = row => row._id

  const getChildGroups = groups => groups
    .map(group => ({ childRows: group.items, key: group.key }))

  const changeSorting = (value) => {
    setSortingData(value)
    // setGrouping(value)
    // dispatch({ payload: value, type: 'CHANGE_GROUPING' })
  }

  const changeGrouping = (value) => {
    setGrouping(value)
    // dispatch({ payload: value, type: 'CHANGE_GROUPING' })
  }

  return (

    <Grid container>
      <Grid className={classes.containerFullwidth} item xs={12}>
        <Paper
          classes={{
            root: classes.paperRoot
          }}
          style={{ position: 'relative' }}>
          <div className={classes.tableContainer}>
            {/* search */}
            <div className={classes.gridTableSearch}>
              <TextField
                className={classes.inputSearch}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchIcon
                      // onClick={onHandleSearch}
                        className={classes.searchIcon} />
                    </InputAdornment>
                  )
                }}
                // onChange={_handleChangeSearch}

                placeholder='Buscar'
                style={{ width: 400 }}
                // value={searchValue}
                variant='outlined' />
            </div>

            <GridTable
              columns={columns}
              getRowId={getRowId}
              rows={rows}>

              {/* others */}

              {/* <Toolbar /> */}
              <Toolbar rootComponent={(props) => (
                <div className={classes.gridTableToolbar}>
                  {props.children}
                </div>
              )} />

              {/* search */}

              {/* sorting */}
              <SortingState
                onSortingChange={changeSorting}
                sorting={sortingData} />
              <IntegratedSorting />

              {/* Paging */}
              {/* <PagingState
                  defaultCurrentPage={0}
                  pageSize={5} />
                <IntegratedPaging />
                <PagingPanel /> */}

              {/* Grouping */}
              <DragDropProvider />
              <GroupingState
                columnExtensions={groupingStateColumnExtensions}
                grouping={grouping}
                onGroupingChange={changeGrouping} />
              <CustomGrouping
                // expandedGroups={tempExpandedGroups}
                getChildGroups={getChildGroups}
                grouping={null} />
              <Table />

              <TableGroupRow
                rowComponent={({ children }) =>(
                  <TableHeaderRow.Row className={classes.gridTableHeaderGroup}>{children}</TableHeaderRow.Row>
                )} />
              <GroupingPanel
                emptyMessageComponent={() => (
                  <div className={classes.gridTableGroupingEmpty}>Arrastra aquí una columna para agrupar tus registros.</div>
                )}
                showGroupingControls />

              {/* Table Row and header */}
              <TableHeaderRow
                cellComponent={(props) => (
                  <TableHeaderRow.Cell
                    {...props}
                    className={classes.gridTableHeader} />
                )}
                messages={{ sortingHint: 'Ordenar' }}
                rowComponent={({ children }) => (
                  <TableHeaderRow.Row className={classes.gridTableHeaderRoot}>{children}</TableHeaderRow.Row>
                )}
                showSortingControls />

            </GridTable>
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}

TableGroup.muiName = 'TableGroup'

export default withStyles(styles, { name: 'KrowdyTableGroup' })(TableGroup)

