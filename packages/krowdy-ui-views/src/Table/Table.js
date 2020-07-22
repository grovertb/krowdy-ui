import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import XDate from 'xdate'
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
  checkImage: {},
  checkRoot : {
    '& $checkbox': {
      display: 'none'
    },
    '&:hover': {
      '& $checkImage': {
        display: 'none'
      },
      '& $checkbox': {
        display: 'inline-flex'
      }
    },
    display       : 'flex',
    justifyContent: 'center'
  },
  checkbox : {},
  container: {
    flex    : 1,
    overflow: 'auto'
  },
  containerHeaderTable: {
    padding: theme.spacing(2)
  },
  containerSearch: {
    display       : 'flex',
    justifyContent: 'space-between'
  },
  containerTable: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100%',
    overflow     : 'hidden',
    width        : '100%'
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
  disableText: {
  },
  editableCell: {
    display: 'flex'
  },
  emptyComponent: {
    backgroundPosition: 'center',
    backgroundRepeat  : 'no-repeat',
    backgroundSize    : 'cover',
    width             : 'auto'
  },
  emptyContainer: {
    alignItems    : 'center',
    display       : 'flex',
    flex          : 1,
    justifyContent: 'center',
    justifyItems  : 'center',
    paddingTop    : theme.spacing(1.5)
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  headerTable: {
    fontWeight: 'bold'
  },
  hiddenCheck: {
    '& $checkImage': {
      display: 'none'
    },
    '& $checkbox': {
      display: 'inline-flex'
    }
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
  sizeIcon: {
    height: 30,
    width : 30
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
    '&$disableText': {
      color: theme.palette.grey[500]
    },
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
}), { name: 'KrowdyTable' })

const Table = ({
  checkIcons = [],
  titleTable,
  titleButton,
  paymentAmount,
  iconButton,
  maxHeight = 'auto',
  maxWidth = 'auto',
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
  currency = 'S/',
  addNewCell = false,
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
  onHandleSendNewCell = () => false,
  onHandleClickRow = () => false,
  onHandleSelectAutocomplete = () => false
}) => {
  const { orderBy = '', sort = 'asc' } = sortTable
  const { totalPages = 0, totalItems = 0, page, perPage } = pagination
  const validateNewCellProps = Object.keys(newCellProps).length
  const classes = useStyles()
  const inputSearch = useRef(null)
  const [ openMenu, setOpenMenu ] = useState(null)
  const [ localNewCellProps, setLocalNewCellProps ] = useState({})
  const visibleColumns = columns.filter(({ visible = true }) => visible)
  const [ validNewCell, setValidNewCell ] = useState(false)

  useEffect(() => {
    if(!addNewCell)
      setLocalNewCellProps({})
  }, [ addNewCell ])

  useEffect(() => {
    const localCellLength = Object.keys(localNewCellProps).length
    if(validateNewCellProps && !localCellLength) {
      const cell = {}
      for (const key in newCellProps)
        cell[key] = (typeof newCellProps[key] !== 'object' && newCellProps[key] !== '') ? newCellProps[key] : ''

      setLocalNewCellProps(cell)
    }
  }, [ localNewCellProps, newCellProps, validateNewCellProps ])

  useEffect(() => {
    const isValid = Object.values(localNewCellProps).every((once) => once !== '' )
    if(isValid && !validNewCell)
      setValidNewCell(true)
    else if(!isValid && validNewCell)
      setValidNewCell(false)
  }, [ localNewCellProps, validNewCell ])

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

  const _handleRemoveCell = () => {
    onHandleAddNewCell()
    setLocalNewCellProps({})
  }

  const _handleChangeNewCell = (value, source) => {
    setLocalNewCellProps((prevState) => ({
      ...prevState,
      [source]: value
    }))
  }

  const _handleSendNewCell = () => {
    onHandleSendNewCell(localNewCellProps)
  }

  const _handleAddNewCell = () => {
    onHandleAddNewCell()
  }

  const _handleClickTableRow = (id) => {
    onHandleClickRow(id)
  }

  const _handleClickSelectItem = (e, id) => {
    e.stopPropagation()
    onHandleSelectItem(id)
  }

  const _handleChangePage = (currentPage) => {
    onHandleChangePage(parseInt(currentPage))
  }

  return (
    <Paper className={classes.containerTable} variant='outlined'>
      {
        withHeader ? (
          <div className={clsx(classes.containerHeaderTable, { [classes.spaceBetween]: titleTable })}>
            {titleTable && <Typography className={classes.titleTable} variant='body2'>{titleTable}</Typography>}
            <div className={clsx(classes.containerSearch, { [classes.flexEnd]: titleTable })}>
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
      <TableContainer className={classes.container} style={{ maxHeight, maxWidth }} >
        <MuiTable aria-label='sticky table' stickyHeader={stickyHeader}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {withCheckbox ? (
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='primary'
                    inputProps={{ 'aria-label': 'select all desserts' }}
                    onChange={(e) => onHandleSelectAll(e.target.checked)} />
                </TableCell>
              ) : null}
              {visibleColumns.map(({ key, align, minWidth, label = null, columnComponent: Component, ordering }) => (
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
                      {
                        Component ?
                          <Component /> :
                          <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                      }
                    </TableSortLabel>
                  ) : (
                    Component ?
                      <Component /> :
                      <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                  )}
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
                          columns.map(({ key, label, visible = true, excludeOfFilter }) => (
                            <React.Fragment>
                              {
                                excludeOfFilter ? null :
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
                              }
                            </React.Fragment>
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
                                className={classes.optionSelect} name={key} onChange={(e) => _handleChangeNewCell(e.target.value, key)}
                                value={localNewCellProps[key]}>
                                {newCellProps[key].map(({ value, label }, index) =>
                                  (<MenuItem
                                    className={classes.optionSelect} key={index}
                                    name={label}
                                    value={value}>{label}</MenuItem>))
                                }
                              </Select>
                            ) : (
                              <Input
                                className={classes.inputSearch}
                                defaultValue={newCellProps[key]}
                                fullWidth
                                onChange={(e) => _handleChangeNewCell(e.target.value, key)}
                                type={type} />
                            ) :
                            type === 'today' ? (
                              <Typography>{newCellProps[key] ? newCellProps[key] : localNewCellProps[key] ? localNewCellProps[key] : (() => {
                                const date = new XDate().toString('yyyy/MM/dd')
                                _handleChangeNewCell(date, key)

                                return date
                              })()}</Typography>
                            ) :
                              type === 'hours' ? (
                                <Typography>{newCellProps[key] ? newCellProps[key] : localNewCellProps[key] ? localNewCellProps[key] : (() => {
                                  const hours = new XDate().toString('h(:mm)TT')
                                  _handleChangeNewCell(hours, key)

                                  return hours
                                })()}</Typography>
                              ) :
                                (
                                  <Typography>{Array.isArray(newCellProps[key]) ? (newCellProps[key].join(', ')) : newCellProps[key]}</Typography>
                                )}
                          {lastCell && (
                            <Box display='flex' marginLeft={2}>
                              <CloseIcon className={clsx(classes.iconAdd)} color='error' onClick={_handleRemoveCell} />
                              <CheckIcon
                                className={clsx(classes.iconAdd)} color={validNewCell ? 'primary' : 'disabled'} onClick={() => validNewCell ? _handleSendNewCell() : null} />
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
                    <Typography className={classes.addCell} onClick={_handleAddNewCell}>Agregar incidente</Typography>
                  </TableCell>
                </TableRow>
              )

            ) : null}
            {rows.length ? rows.map((row, index) => {
              const { _id, selected = false, disabled = false, codeCheck, urlIcon } = row
              const currentImage = checkIcons.find(({ code }) => code === codeCheck)

              return (
                <TableRow
                  hover key={index}
                  onClick={() => _handleClickTableRow(_id)}>
                  {withCheckbox ? (
                    <TableCell padding='checkbox'>
                      {
                        checkIcons && checkIcons.length ?
                          <div className={clsx({ [classes.hiddenCheck]: selected, [classes.checkRoot]: !selected })}>
                            <Checkbox
                              checked={selected}
                              className={classes.checkbox}
                              color='primary'
                              disabled={disabled}
                              onClick={(e) => _handleClickSelectItem(e, _id)} />
                            <div className={classes.checkImage}>{currentImage && currentImage.component}</div>
                          </div>:
                          urlIcon?
                            <div className={clsx({ [classes.hiddenCheck]: selected, [classes.checkRoot]: !selected })}>
                              <Checkbox
                                checked={selected}
                                className={classes.checkbox}
                                color='primary'
                                disabled={disabled}
                                onClick={(e) => _handleClickSelectItem(e, _id)} />
                              <div className={classes.checkImage}>
                                <img alt='icon' className={classes.sizeIcon} src={urlIcon} />
                              </div>
                            </div> :
                            <Checkbox
                              checked={selected}
                              className={classes.checkbox}
                              color='primary'
                              disabled={disabled}
                              onClick={(e) => _handleClickSelectItem(e, _id)} />
                      }
                    </TableCell>
                  ) : null}
                  {visibleColumns.map(({ key, align, component: Componente, currency: currencyTableCell }) => Componente ? (
                    <TableCell align={align || 'left'} key={key}>
                      <Componente value={row[key]} />
                    </TableCell>
                  ) : (
                    <TableCell align={align || 'left'} key={key}>
                      <Typography className={classes.bodyTable} variant='body1'>
                        {currencyTableCell && `${currency} `}
                        {Array.isArray(row[key]) ? (row[key].join(', ')) : row[key]}
                      </Typography>
                    </TableCell>
                  ))}
                  {withMenuColumns ? (<TableCell />) : null}
                </TableRow>
              )
            }) : null}
          </TableBody>
        </MuiTable>
        {
          !rows.length && <div className={classes.emptyContainer}>
            <img
              alt='empty'
              className={classes.emptyComponent}
              component='img'
              src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/Mesa_de_trabajo.svg' />
          </div>
        }
      </TableContainer>
      {
        withPagination ? (
          <TablePagination
            backIconButtonText='Página anterior'
            component='div'
            // count={total}
            labelRowsPerPage='Mostrar'
            nextIconButtonText='Página siguiente'
            onChangePage={_handleChangePage}
            onChangeRowsPerPage={onHandleChangeRowsPerPage}
            page={page}
            rowsPerPage={perPage}
            rowsPerPageOptions={[ 10, 25, 100 ]}
            totalItems={totalItems}
            totalPages={totalPages} />
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
                <Typography className={clsx(classes.textAmount, { [classes.disableText]: !paymentAmount })} color='primary' variant='h5'>{currency} {paymentAmount.toFixed(2)}</Typography>
              </Box>
              <Button
                className={classes.buttonFooter} color='primary' disabled={!paymentAmount}
                onClick={onHandlePaymentButton}
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
  addNewCell: PropTypes.bool,
  checkIcons: PropTypes.arrayOf(
    PropTypes.shape({
      code     : PropTypes.string.isRequired,
      component: PropTypes.node.isRequired
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      align          : PropTypes.string,
      columnComponent: PropTypes.node,
      currency       : PropTypes.bool,
      key            : PropTypes.string.isRequired,
      label          : PropTypes.string,
      minWidth       : PropTypes.number,
      ordering       : PropTypes.bool
    })
  ).isRequired,
  /**
   * eneableAddCell muetra un boton para agregar una nueva celda
   */
  currency                  : PropTypes.string,
  /**
   * iconBotton recibe un nodo para pinterlo al boton del header
   */
  enableAddCell             : PropTypes.bool,
  /**
   * maxHeigth string | number para la altura de la tabla
   */
  iconButton                : PropTypes.element,
  /**
   * newCellProps un array de objetos con las keys a editar cuando se agregue una nueva celda, requiere de `enableAddCell`
   */
  maxHeight                 : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  newCellProps              : PropTypes.object,
  onHandleAddNewCell        : PropTypes.func,
  onHandleBtnAction         : PropTypes.func,
  onHandleChangePage        : PropTypes.func,
  onHandleChangeRowsPerPage : PropTypes.func,
  onHandleClickRow          : PropTypes.func,
  onHandlePaymentButton     : PropTypes.func,
  onHandleSearch            : PropTypes.func,
  onHandleSelectAll         : PropTypes.func,
  onHandleSelectAutocomplete: PropTypes.func,
  onHandleSelectItem        : PropTypes.func,
  onHandleSendNewCell       : PropTypes.func,
  onHandleSortTable         : PropTypes.func,
  /**
   * pagination objeto para paginar, requiere de `withPagination`
   */
  onHandleToggleColumnTable : PropTypes.func,
  /**
   * paymentAmount number para mostrar total a pagar
   */
  pagination                : PropTypes.shape({
    page   : PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired
    // total  : PropTypes.number.isRequired
  }),
  /**
   * rows son las filas de la tabla
   */
  paymentAmount: PropTypes.number,
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
