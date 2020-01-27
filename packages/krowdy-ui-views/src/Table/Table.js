import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableSortLabel,
  TablePagination,
  TableRow,
  Checkbox,
  Typography,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Box,
  InputAdornment,
  TextField,
  Button,
  Select,
  Popover,
  makeStyles,
  Input
} from '@krowdy-ui/core'
// import KeyboardDatePicker from '@material-ui/lab/'
import { Table as MuiTable, TableContainer, IconButton } from '@krowdy-ui/core/'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles(theme => ({
  addCell: {
    color    : theme.palette.primary.main,
    cursor   : 'pointer',
    textAlign: 'right'
  },
  buttonFooter: {
    fontSize: 12,
    width   : '100px'
  },
  container: {
    // maxHeight: 200,
    // overflow : 'auto'
  },
  containerHeaderTable: {
    padding: theme.spacing(2)
  },
  containerSearch: {
    display       : 'flex',
    justifyContent: 'space-between'
  },
  containerTable: {
    overflow: 'hidden',
    width   : '100%'
  },
  customBottomAdd: {
    border       : 'dashed 1px',
    margin       : '2px 10px',
    textTransform: 'initial'
  },
  customCheckbox: {
    '& svg': {
      height: 18,
      width : 18
    }
  },
  customMenuHead: {
    padding: theme.spacing(2)
  },
  customMenuHeadTitle: {
    color       : theme.palette.grey[800],
    fontWeight  : 'bold',
    marginBottom: 12
  },
  editableCell: {
    display: 'flex'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  headerTable: {
    fontWeight: 'bold'
  },
  iconAdd: {
    '&:nth-last-child(1)': {
      marginLeft: theme.spacing(1)
    },
    cursor  : 'pointer',
    fontSize: 18
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
  menuItem: {
    fontSize: 14
  },
  optionSelect: {
    fontSize: 14
  },
  searchIcon: {
    cursor: 'pointer'
  },
  spaceBetween: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between'
  },
  stickyHeader: {
    left: 'inherit'
  },
  tableHead: {
    backgroundColor: theme.palette.grey[100]
  },
  textAmount: {
    color     : theme.palette.primary.main,
    fontWeight: 'bold'
  },
  textTotal: {
    fontWeight : 'bold',
    lineHeight : '20px',
    marginRight: 5
  },
  titleTable: {
    fontWeight: 'bold'
  }
}))

const Table = ({
  titleTable,
  titleButton,
  paymentAmount,
  iconButton,
  maxHeight = 'auto',
  pagination = {},
  newCellProps = {},
  sortTable = {},
  columns = [],
  rows = [],
  searchSuggestions = [],
  stickyHeader = false,
  withFooter = false,
  withCheckbox = false,
  withPagination = false,
  withHeader = false,
  withMenuColumns = false,
  withOrder = false,
  withSearch = true,
  withAutocomplete = false,
  withButton = false,
  enableAddCell = false,
  onHandleSortTable = () => false,
  onHandleSearch = () => false,
  onHandleBtnAction = () => false,
  onHandleChangePage = () => false,
  onHandleChangeRowsPerPage = () => false,
  onHandleSelectAll = () => false,
  onHandleSelectItem = () => false,
  onHandlePaymentButton = () => false,
  onHandleToggleColumnTable = () => false,
  onHandleAddNewCell = () => false,
  onHandleClickRow = () => false
}) => {
  const { orderBy = '', sort = 'asc' } = sortTable
  const { totalRows, currentPage, rowsPerPage } = pagination
  const validateNewCellProps = Object.keys(newCellProps).length
  const classes = useStyles()
  const inputSearch = useRef(null)
  const [ openMenu, setOpenMenu ] = useState(null)
  const [ addNewCell, setAddNewCell ] = useState(false)
  const [ localNewCellProps, setLocalNewCellProps ] = useState({})
  const visibleColumns = columns.filter(({ visible = true }) => visible)

  useEffect(() => {
    if(validateNewCellProps)
      setLocalNewCellProps(newCellProps)
  }, [ newCellProps, validateNewCellProps ])

  const _handleClickOpenMenu = event => {
    setOpenMenu(event.currentTarget)
  }

  const _handleClickClose = () => {
    setOpenMenu(null)
  }

  const _handleSearchValidate = (e) => {
    const { value } = e.target
    if(e.keyCode === 13) onHandleSearch(value)
  }

  const _handleSortTable = (id, ref) => {
    const { orderBy, sort } = ref
    const invertSort = sort === 'asc' ? 'desc' : 'asc'
    if(id !== orderBy)
      return onHandleSortTable({ orderBy: id, sort: 'asc' })

    return onHandleSortTable({ orderBy: id, sort: invertSort })
  }

  const _handleClickToggleCell = () => {
    setAddNewCell(!addNewCell)
  }

  const _handleRemoveCell = () => {
    setAddNewCell(!addNewCell)
    setLocalNewCellProps({})
  }

  const _handleChangeNewCell = (e) => {
    const { value, id } = e.target
    setLocalNewCellProps((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const _handleAddNewCell = () => {
    onHandleAddNewCell(localNewCellProps)
  }

  const _handleClickTableRow = (id) => {
    onHandleClickRow(id)
  }

  const _handleClickSelectItem = (e, id) => {
    e.stopPropagation()
    onHandleSelectItem(id)
  }

  return (
    <Paper className={classes.containerTable}>
      {
        withHeader ? (
          <div className={clsx(classes.containerHeaderTable, { [classes.spaceBetween]: titleTable })}>
            {titleTable && <Typography className={classes.titleTable} variant='body2'>{titleTable}</Typography>}
            <div className={clsx(classes.containerSearch, { [classes.flexEnd]: titleTable })}>
              {withSearch ? withAutocomplete ? (
                <Autocomplete
                  noOptionsText='No hay coincidencias'
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
              ): (
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
              {withButton ? (
                <Button
                  className={classes.customBottomAdd}
                  color='primary'
                  onClick={onHandleBtnAction}
                  variant='outlined'>
                  {iconButton}
                  {titleButton}
                </Button>
              ) : null}

            </div>
          </div>
        ) : null
      }
      <TableContainer className={classes.container} style={{ maxHeight }} >
        <MuiTable aria-label='sticky table' stickyHeader={stickyHeader}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {withCheckbox ? (
                <TableCell padding='checkbox'>
                  <Checkbox
                    inputProps={{ 'aria-label': 'select all desserts' }}
                    onChange={(e) => onHandleSelectAll(e.target.checked)} />
                </TableCell>
              ) : null}
              {visibleColumns.map(({ key, align, minWidth, label, ordering }) => (
                <TableCell
                  align={align}
                  classes={{
                    stickyHeader: classes.stickyHeader
                  }}
                  key={key}
                  sortDirection={orderBy === key ? sort : false}
                  style={{ minWidth }}>
                  {withOrder && ordering ? (
                    <TableSortLabel
                      active={orderBy === key}
                      direction={orderBy === key ? sort : 'asc'}
                      onClick={() => _handleSortTable(key, sortTable)}>
                      <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                    </TableSortLabel>
                  ) : (
                    <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                  ) }
                </TableCell>
              ))}
              {withMenuColumns ? (
                <TableCell padding='checkbox'>
                  <IconButton color='primary' onClick={_handleClickOpenMenu}>
                    <MoreVertIcon />
                  </IconButton>
                  <Popover
                    anchorEl={openMenu}
                    anchorOrigin={{
                      horizontal: 'left',
                      vertical  : 'bottom'
                    }}
                    onClose={_handleClickClose}
                    open={Boolean(openMenu)}
                    transformOrigin={{
                      horizontal: 'right',
                      vertical  : 'top'
                    }}>
                    <div className={classes.customMenuHead}>
                      <Typography className={classes.customMenuHeadTitle} variant='body2'>Columnas</Typography>
                      <FormGroup>
                        {
                          columns.map(({ key, label, visible = true }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={visible}
                                  className={classes.customCheckbox}
                                  color='primary'
                                  disabled={columns.filter(({ visible }) => visible).length === 1 && visible}
                                  onChange={() => onHandleToggleColumnTable(key)}
                                  value={key} />
                              }
                              key={key}
                              label={label} />
                          ))
                        }
                      </FormGroup>
                    </div>
                  </Popover>
                </TableCell>
              ) : null}

            </TableRow>
          </TableHead>
          <TableBody>
            {(enableAddCell && validateNewCellProps) ? (
              addNewCell ? (
                <TableRow>
                  {visibleColumns.map(({ key, type, editable }, index) => {
                    const lastCell = index === visibleColumns.length - 1

                    return (
                      <TableCell key={key}>
                        <Box alignItems='center' display='flex' justifyContent={lastCell ? 'space-between' : 'flex-start'}>
                          {editable ?
                            type === 'select' ? (
                              <Select
                                className={classes.optionSelect} id={key} onChange={_handleChangeNewCell}
                                value={Array.isArray(localNewCellProps[key]) ? '' : localNewCellProps[key]}>
                                {newCellProps[key].map(({ value, label }, index) =>
                                  (<MenuItem className={classes.optionSelect} key={index} value={value}>{label}</MenuItem>))
                                }
                              </Select>
                            ) : (
                              <Input
                                className={classes.inputSearch}
                                defaultValue={newCellProps[key]}
                                fullWidth
                                id={key}
                                onChange={_handleChangeNewCell}
                                type={type} />
                            ) :
                            (
                              <Typography>{Array.isArray(newCellProps[key]) ? (newCellProps[key].join(', ')) : newCellProps[key]}</Typography>
                            )}
                          {lastCell && (
                            <Box display='flex' marginLeft={2}>
                              <CloseIcon className={clsx(classes.iconAdd)} color='error' onClick={_handleRemoveCell} />
                              <CheckIcon className={clsx(classes.iconAdd)} color='primary' onClick={_handleAddNewCell} />
                            </Box>
                          )}
                        </Box>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} >
                    <Typography className={classes.addCell} onClick={_handleClickToggleCell}>Agregar incidente</Typography>
                  </TableCell>
                </TableRow>
              )

            ) : null}
            {rows.map((row, index) => {
              const { _id, selected = false } = row

              return (
                <TableRow
                  hover key={index}
                  onClick={() => _handleClickTableRow(_id)}>
                  {withCheckbox ? (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selected}
                        onClick={(e) => _handleClickSelectItem(e, _id)} />
                    </TableCell>
                  ) : null}
                  {visibleColumns.map(({ key, align }) => (
                    <TableCell align={align || 'left'} key={key}>
                      <Typography className={classes.bodyTable} variant='body1'>
                        {Array.isArray(row[key]) ? (row[key].join(', ')) : row[key] }
                      </Typography>
                    </TableCell>
                  ))}
                  {withMenuColumns ? (<TableCell />) : null}
                </TableRow>
              )
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {
        withPagination ? (
          <TablePagination
            component='div'
            count={totalRows}
            onChangePage={onHandleChangePage}
            onChangeRowsPerPage={onHandleChangeRowsPerPage}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[ 10, 25, 100 ]} />
        ) : null
      }
      {
        withFooter ? (
          <Box
            className={classes.footerTable} display='flex' justifyContent='flex-end'
            padding={2}>
            <Box className={classes.containerPayment} display='flex'>
              <Box
                alignItems='center' className={classes.paymentText} display='flex'
                marginRight={3}>
                <Typography className={classes.textTotal} variant='h6'>Total</Typography>
                <Typography className={classes.textAmount} variant='h5'>s/ {paymentAmount.toFixed(2)}</Typography>
              </Box>
              <Button
                className={classes.buttonFooter} color='primary' onClick={onHandlePaymentButton}
                variant='contained'>Pagar</Button>
            </Box>
          </Box>
        ) : null
      }
    </Paper>
  )
}

Table.propTypes = {
  /**
   * Columns sirve para pasar la cabecera de la tabla
   */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      align   : PropTypes.string,
      key     : PropTypes.string.isRequired,
      label   : PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      ordering: PropTypes.bool
    })
  ).isRequired,
  /**
   * eneableAddCell muetra un boton para agregar una nueva celda
   */
  enableAddCell            : PropTypes.bool,
  /**
   * iconBotton recibe un nodo para pinterlo al boton del header
   */
  iconButton               : PropTypes.element,
  /**
   * maxHeigth string | number para la altura de la tabla
   */
  maxHeight                : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  /**
   * newCellProps un array de objetos con las keys a editar cuando se agregue una nueva celda, requiere de `enableAddCell`
   */
  newCellProps             : PropTypes.object,
  onHandleAddNewCell       : PropTypes.func,
  onHandleBtnAction        : PropTypes.func,
  onHandleChangePage       : PropTypes.func,
  onHandleChangeRowsPerPage: PropTypes.func,
  onHandleClickRow         : PropTypes.func,
  onHandlePaymentButton    : PropTypes.func,
  onHandleSearch           : PropTypes.func,
  onHandleSelectAll        : PropTypes.func,
  onHandleSelectItem       : PropTypes.func,
  onHandleSortTable        : PropTypes.func,
  onHandleToggleColumnTable: PropTypes.func,
  /**
   * pagination objeto para paginar, requiere  de `withPagination`
   */
  pagination               : PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    totalRows  : PropTypes.number.isRequired
  }),
  /**
   * paymentAmount number para mostrar total a pagar
   */
  paymentAmount: PropTypes.number,
  /**
   * rows son las filas de la tabla
   */
  rows         : PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  searchSuggestions: PropTypes.array,
  sortTable        : PropTypes.shape({
    orderBy: PropTypes.string,
    sort   : PropTypes.oneOf([ 'asc', 'desc' ])
  }),
  stickyHeader    : PropTypes.bool,
  titleButton     : PropTypes.string,
  titleTable      : PropTypes.string,
  /**
   * withAutocomplete muestra el search con autocompletado, requiere de `searchSuggestions`
   */
  withAutocomplete: PropTypes.bool,
  withButton      : PropTypes.bool,
  withCheckbox    : PropTypes.bool,
  withFooter      : PropTypes.bool,
  withHeader      : PropTypes.bool,
  withMenuColumns : PropTypes.bool,
  withOrder       : PropTypes.bool,
  withPagination  : PropTypes.bool,
  withSearch      : PropTypes.bool
}

export default Table
