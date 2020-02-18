import React, { useState, useEffect, useRef } from 'react'
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

const formatColumns = columns => columns.map(column => ({ name: column.key, title: column.label }))

const columnsDraggableDisable = columns => columns.map(column => ({ columnName: column.key, groupingEnabled: column.draggable }))

const sortingFormat = sortings => sortings.map(sorting => ({ columnName: sorting.orderBy, direction: sorting.sort }))
const sortingFormatReverse = sortings => sortings.map(sorting => ({ orderBy: sorting.columnName, sort: sorting.direction }))

const getRowId = row => row._id

const TableGroup = props => {
  const {
    classes,
    rows = [],
    columns = [],
    groupingData = [],
    changeGrouping = () => false,
    sorting = false,
    grouping = false,
    sortingData = [],
    changeSorting = () => false,
    withHeader = false,
    withSearch = false,
    withAutocomplete = false,
    searchSuggestions = [],
    onHandleSearch = () => false,
    onHandleSelectAutocomplete = () => false
  } = props

  const [ columnsData, setColumnData ] = useState([])
  const [ sortingDataFormat, setSortingFormat ] = useState([])

  const [ groupingStateColumnExtensions, setGroupingStateColumnExtensions ] = useState([])
  const [ expandData, setExpandData ] = useState([])
  const inputSearch = useRef(null)

  // effects
  useEffect(() => {
    if(columns.length) {
      setColumnData(formatColumns(columns))
      setGroupingStateColumnExtensions(columnsDraggableDisable(columns))
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
    console.log('%c Xavi :) ===> :(: valuddsde', 'color: orange; font-size: 16px', value)
    // changeSorting
    changeSorting(sortingFormatReverse(value))
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
                grouping &&
                  <DragDropProvider />
              }
              <GroupingState
                // expandedGroups={[ 'Confirmed' ]}
                columnExtensions={groupingStateColumnExtensions}
                grouping={groupingData}
                onExpandedGroupsChange={setExpandedGroups}
                onGroupingChange={changeGrouping} />
              <CustomGrouping
                expandedGroups={expandData}
                getChildGroups={getChildGroups}
                grouping={null} />

              <Table />

              <TableHeaderRow messages={{ sortingHint: 'Ordenar' }} showSortingControls={sorting} />

              <TableGroupRow
                rowComponent={({ children }) =>(
                  <TableHeaderRow.Row className={classes.gridTableHeaderGroup}>{children}</TableHeaderRow.Row>
                )} />

              <Toolbar />

              <GroupingPanel
                emptyMessageComponent={() => (
                  <div className={classes.gridTableGroupingEmpty}>Arrastra aquí una columna para agrupar tus registros.</div>
                )}
                showGroupingControls />

            </GridTable>
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}

TableGroup.muiName = 'TableGroup'

export default withStyles(styles, { name: 'KrowdyTableGroup' })(TableGroup)

