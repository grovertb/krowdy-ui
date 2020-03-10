import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Paper,
  TextField,
  InputAdornment,
  TablePagination
} from '@krowdy-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {
  GroupingState,
  SortingState,
  IntegratedSorting,
  CustomGrouping
} from '@devexpress/dx-react-grid'
import {
  Grid as GridTable,
  Table,
  // VirtualTable,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar
} from '@devexpress/dx-react-grid-material-ui'
import Autocomplete from '@material-ui/lab/Autocomplete'

export const styles = theme => ({
  containerFullwidth: {
    height: '100%'
  },
  containerHeaderTable: {
    padding: theme.spacing(2)
  },
  containerSearch: {
    display       : 'flex',
    justifyContent: 'space-between'
  },
  contetPagination: {
    display       : 'flex',
    justifyContent: 'flex-end',
    padding       : 20
  },
  gridTableChip: {
    '&:focus': {
      '& > div': {
        '&:focus': {
          background: '#F3FBFF'
        }
      }
    },
    '&:hover': {
      background: '#F3FBFF'
    },
    background: '#F3FBFF',
    border    : '1px solid #80DBFF'
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

const formatColumnsExtension = columns => columns.map(column => {
  if(column.type)
    if(column.type === 'star')
      column.width = 160

  return ({ ...column, columnName: column.key, title: column.label })
})

const formatColumns = columns => columns.map(column => ({ ...column, name: column.key, title: column.label }))

const columnsDraggableDisable = columns => columns.map(column => ({ columnName: column.key, groupingEnabled: column.draggable }))

const sortingFormat = sortings => sortings.map(sorting => ({ columnName: sorting.orderBy, direction: sorting.sort }))
const sortingFormatReverse = sortings => sortings.map(sorting => ({ orderBy: sorting.columnName, sort: sorting.direction }))

const getRowId = row => row._id

const TableRow = ({ row, ...restProps }, callback) => (
  <Table.Row
    {...restProps}
    onClick={() => callback(row._id)}
    style={{
      cursor: 'pointer'
    }} />
)

const StartCell = ({ value, ...restProps }) => {
  const {
    column
  } = restProps

  return (
    <Table.Cell
      {...restProps}>
      <span>
        {
          value ?
            [ 1, 2, 3, 4, 5 ].map((currentValue) => (
              currentValue <= value ? <StarIcon color='primary' key={`star-${column._id}-${currentValue}`} /> :
                <StarBorderIcon color='primary' key={`star-${column._id}-${currentValue}`} />
            )) : ''
        }
      </span>
    </Table.Cell>
  )
}

const TableCell = (props) => {
  const { column } = props

  if(column.type === 'star')
    return <StartCell {...props} />

  return <Table.Cell {...props} />
}

const TableGroup = props => {
  const {
    classes,
    rows = [],
    columns = [],
    groupingData = [],
    changeGrouping = () => { },
    sorting = false,
    grouping = false,
    sortingData = [],
    changeSorting = () => { },
    withPagination = false,
    withHeader = false,
    withSearch = false,
    onChangePerPage = () => { },
    withAutocomplete = false,
    searchSuggestions = [],
    onHandleSearch = () => { },
    groupingDataTemp = null,
    pagination = {},
    limitDragable = 1,
    onChangePage = () => { },
    onClickRow = () => { },
    // multiSorting = false,
    onHandleSelectAutocomplete = () => { }
  } = props

  const [ columnsData, setColumnData ] = useState(formatColumns(columns))
  const [ columnsDataExtension, setColumnsDataExtension ] = useState(formatColumnsExtension(columns))
  const [ sortingDataFormat, setSortingFormat ] = useState(sortingFormat(sortingData))

  const [ groupingStateColumnExtensions, setGroupingStateColumnExtensions ] = useState(columnsDraggableDisable(columns))
  const [ expandData, setExpandData ] = useState([])
  const inputSearch = useRef(null)

  // effects
  useEffect(() => {
    if(columns.length) {
      setColumnData(formatColumns(columns))
      setGroupingStateColumnExtensions(columnsDraggableDisable(columns))
      setColumnsDataExtension(formatColumnsExtension(columns))
    }
  }, [ columns ])

  useEffect(() => {
    if(sortingData.length)
      setSortingFormat(sortingFormat(sortingData))
  }, [ sortingData ])

  // actions

  const getChildGroups = groups => groups
    .map(group => ({ childRows: group.items, key: group.key }))

  const setExpandedGroups = (value) => {
    // recibe un array de string ["Confirmed", "Completed"]
    setExpandData(value)
  }

  const _handleSearchValidate = (e) => {
    const { value } = e.target
    if(e.keyCode === 13) onHandleSearch(value)
  }

  const onChangeSorting = value => {
    // if(multiSorting)
    //   if(sortingData.length) {
    //     const data = [
    //       ...sortingDataFormat.map(item => item.columnName === value[0].columnName ? value[0] : item),
    //       ...value
    //     ]
    //     changeSorting(sortingFormatReverse(data))
    //   } else {
    //   }
    changeSorting(sortingFormatReverse(value))
  }

  const onChangeGrouping = value => {
    if(rows.length)
      if(value.length <= limitDragable)
        changeGrouping(value)
  }

  return (

    <Paper
      classes={{
        root: classes.paperRoot
      }}
      style={{ position: 'relative' }}
      variant='outlined'>
      <div className={classes.tableContainer}>
        {/* search */}
        {
          withHeader ? (
            <div className={classes.containerHeaderTable}>
              <div className={classes.containerSearch}>
                {withSearch ? withAutocomplete ? (
                  <Autocomplete
                    freeSolo
                    noOptionsText='No hay coincidencias'
                    onChange={onHandleSelectAutocomplete}
                    options={searchSuggestions.map(option => option.title)}
                    popupIcon={<SearchIcon />}
                    renderInput={params => (
                      <TextField
                        {...params}
                        className={classes.inputSearch}
                        fullWidth
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position='end'>
                              <SearchIcon className={classes.searchIcon} onClick={() => onHandleSearch(inputSearch.current.value)} />
                            </InputAdornment>
                          )
                        }}
                        inputRef={inputSearch}
                        onKeyUp={_handleSearchValidate}
                        placeholder='Buscar'
                        variant='outlined' />
                    )}
                    style={{ width: 400 }} />
                ) : (
                  <TextField
                    className={classes.inputSearch}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <SearchIcon className={classes.searchIcon} onClick={() => onHandleSearch(inputSearch.current.value)} />
                        </InputAdornment>
                      )
                    }}
                    inputRef={inputSearch}
                    onKeyUp={_handleSearchValidate}
                    placeholder='Buscar'
                    style={{ width: 400 }}
                    variant='outlined' />
                ) : null}

              </div>
            </div>
          ) : null
        }

        <GridTable
          columns={columnsData}
          getRowId={getRowId}
          rows={rows}>

          {/* sorting */}
          <SortingState
            onSortingChange={onChangeSorting}
            sorting={sortingDataFormat} />

          {/* grouping */}
          {
            grouping && <DragDropProvider />
          }
          <GroupingState
            // expandedGroups={[ 'Confirmed' ]}
            columnExtensions={groupingStateColumnExtensions}
            grouping={groupingData}
            onExpandedGroupsChange={setExpandedGroups}
            onGroupingChange={onChangeGrouping} />
          <CustomGrouping
            expandedGroups={expandData}
            getChildGroups={getChildGroups}
            grouping={groupingDataTemp} />
          <IntegratedSorting />

          <Table
            cellComponent={TableCell}
            columnExtensions={columnsDataExtension}
            rowComponent={row => TableRow(row, onClickRow)} />

          <TableHeaderRow
            messages={{ sortingHint: 'Ordenar' }}
            showSortingControls={/* groupingData.length ? false : */ sorting} />

          <TableGroupRow
            rowComponent={({ children }) => (
              <TableHeaderRow.Row className={classes.gridTableHeaderGroup}>{children}</TableHeaderRow.Row>
            )} />

          <Toolbar />

          <GroupingPanel
            emptyMessageComponent={() => (
              <div className={classes.gridTableGroupingEmpty}>Arrastra aquí una columna para agrupar tus registros.</div>
            )}
            itemComponent={ev => {
              const customSorting = true
              // const customSorting = (ev.item && ev.item.column && groupingData.length) ?
              //   Boolean(ev.item.column.name === groupingData[0].columnName) : true

              return <GroupingPanel.Item {...ev} className={classes.gridTableChip} sortingEnabled={customSorting} />
            }}
            showGroupingControls
            showSortingControls />

        </GridTable>
        {
          withPagination ?
            <div className={classes.contetPagination}>
              <TablePagination
                backIconButtonText='Página anterior'
                component='div'
                labelRowsPerPage='Mostrar'
                nextIconButtonText='Página siguiente'
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangePerPage}
                page={pagination.page}
                rowsPerPage={pagination.perPage}
                rowsPerPageOptions={[ 10, 25, 100 ]}
                totalItems={pagination.totalItems}
                totalPages={pagination.totalPages} />
            </div> : null
        }
      </div>
    </Paper>

  )
}

TableGroup.propTypes = {
  changeGrouping: PropTypes.func,
  changeSorting : PropTypes.func,
  columns       : PropTypes.arrayOf(
    PropTypes.shape({
      align   : PropTypes.string,
      currency: PropTypes.bool,
      key     : PropTypes.string.isRequired,
      label   : PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      ordering: PropTypes.bool
    })
  ).isRequired,
  grouping    : PropTypes.bool,
  groupingData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  limitDragable             : PropTypes.number,
  onChangePage              : PropTypes.func,
  onChangePerPage           : PropTypes.func,
  onClickRow                : PropTypes.func,
  onHandleSearch            : PropTypes.func,
  onHandleSelectAutocomplete: PropTypes.func,
  pagination                : PropTypes.object,
  rows                      : PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  searchSuggestions: PropTypes.array,
  sorting          : PropTypes.bool,
  sortingData      : PropTypes.arrayOf(PropTypes.shape({
    orderBy: PropTypes.string,
    sort   : PropTypes.string
  })),
  withAutocomplete: PropTypes.bool,
  withHeader      : PropTypes.bool,
  withPagination  : PropTypes.bool,
  withSearch      : PropTypes.bool
}

TableGroup.muiName = 'TableGroup'

export default withStyles(styles, { name: 'KrowdyTableGroup' })(TableGroup)

