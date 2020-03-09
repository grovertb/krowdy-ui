import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DayJSUtils from '@date-io/dayjs'
import dayjs from 'dayjs'
import esLocale from 'dayjs/locale/es'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Button, FormControl, makeStyles, MenuItem, Select, TextField } from '@krowdy-ui/core'
import generateRandomId from '../utils/generateRandomId'
import CategoryItems from './CategoryItems'
import InputChip from './InputChip'
import useFilterValidator from './useFilterValidator'

const useStyles = makeStyles((theme) => ({
  and: {
    fontSize   : 14,
    margin     : theme.spacing(0),
    paddingLeft: theme.spacing(1)
  },
  applyFilterButton: {
    marginTop: theme.spacing(2)
  },
  center: {
    display       : 'flex',
    justifyContent: 'center'
  },
  configOptionContainer: {
    padding: theme.spacing(2.5, 0)
  },
  firstInputContainer: {
    alignItems: 'flex-end',
    display   : 'flex'
  },
  input: {
    fontSize: 12
  },
  inputEndAdornment: {
    fontSize: 12
  },
  menuItem: {
    '&:hover': {
      background: '#F3FBFF',
      color     : theme.palette.primary[500]
    },
    fontSize  : 12,
    transition: '.3s'
  },
  menuItemSelected: {
    // '&&': {
    //   backgroundColor: '#F3FBFF'
    // },
    backgroundColor: '#F3FBFF',
    color          : theme.palette.primary[500]
  },
  secondInputContainer: {
    paddingTop: theme.spacing(2)
  },
  select: {
    fontSize     : 12,
    paddingBottom: theme.spacing(1),
    paddingTop   : theme.spacing(1)
  },
  selectPaper: {
    borderRadius: 2
  },
  title: {
    borderBottom     : '1px solid',
    borderBottomColor: theme.palette.grey[300],
    fontSize         : 12,
    fontWeight       : 'bold',
    lineHeight       : '20px',
    marginTop        : 0,
    padding          : theme.spacing(0.5, 0)
  }
}), {
  name: 'KrowdyFilterConfig'
})

const parseToValidDate = (date) => {
  if(date)
    return dayjs(date).toISOString()

  return null
}

const FilterConfig = (props) => {
  const {
    filter,
    categoryItems,
    onClickApply,
    hasNextPage,
    filterTypes = [],
    listWidth,
    edit = false,
    onSelectCategoryFilter,
    loadMoreCategoryItems
  } = props

  const classes = useStyles()

  const [ optionIndex, setOptionIndex ] = useState(filter.optionIndex || 0)

  const type = filterTypes.find(f => f.type === filter.type)
  const option = type.options[optionIndex]

  const [ filterConfig, setFilterConfig ] = useState(() => {
    if(!type) return null
    if(filter.value && option.numberOfInputs)
      switch (filter.type) {
        case 'number':
        case 'date':
          switch (option.operator) {
            case '$range':
              const [ first, second ] = filter.value

              return {
                first,
                second
              }
            default:
              return {
                ...type.initialValue,
                first : filter.value,
                second: ''
              }
          }
        case 'category':
        case 'generic':
          return filter.value
        default:
          return type.initialValue
      }

    return type.initialValue
  })

  const errors = useFilterValidator(filterConfig, filter.type, option)

  if(!type) return null

  const getFilterConfigValue = (filterType) => {
    switch (filterType) {
      case 'number':
        if(option.numberOfInputs === 1)
          return filterConfig.first

        else if(option.numberOfInputs === 2)
          return [ filterConfig.first, filterConfig.second ]

        return null
      case 'date':
        if(option.numberOfInputs === 1)
          return parseToValidDate(filterConfig.first)

        else if(option.numberOfInputs === 2)
          return [ parseToValidDate(filterConfig.first), parseToValidDate(filterConfig.second) ]

        return null
      case 'generic':
      case 'category':
        return filterConfig
      default:
        return null
    }
  }

  const _handleOptionChange = (event) => {
    setOptionIndex(event.target.value)
  }

  const _handleChange = (key) => (eventOrValue) => {
    if(eventOrValue && typeof eventOrValue === 'object' && eventOrValue.target)
      eventOrValue.persist()

    switch (filter.type) {
      case 'number':
        setFilterConfig(prev => ({
          ...prev,
          [key]: eventOrValue.target.value
        }))
        break
      case 'date':
        setFilterConfig(prev => ({
          ...prev,
          [key]: eventOrValue
        }))
        break
      case 'generic':
      case 'category':
        setFilterConfig(eventOrValue)
        break
      default:
        break
    }
  }

  const _handleClickApply = () => {
    const configValue = getFilterConfigValue(filter.type)
    const _id = edit ? filter._id : generateRandomId()

    const res = {
      _id,
      key          : filter.key,
      label        : filter.label,
      operator     : option.operator,
      operatorLabel: option.label,
      optionIndex  : optionIndex,
      type         : filter.type,
      value        : configValue
    }
    onClickApply(res)
  }

  const _handleLoadMoreItems = (categoryKey) => () => {
    loadMoreCategoryItems(categoryKey)
  }

  const renderConfigOption = (filterType,  optionIndex) => {
    const showInputs = type.options[optionIndex].numberOfInputs > 0
    if(!showInputs) return null
    const showSecondInput = type.options[optionIndex].numberOfInputs === 2
    switch (filterType) {
      case 'number':
        return (
          <>
            <div className={classes.firstInputContainer}>
              <TextField
                // error={Boolean(errors && errors.first)}
                fullWidth
                // helperText={errors && errors.first}
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                onChange={_handleChange('first')}
                placeholder='Valor'
                size='small'
                type='number'
                value={filterConfig.first} />
              { showSecondInput && <p className={classes.and}>y</p>}
            </div>
            { showSecondInput &&
              <div className={classes.secondInputContainer}>
                <TextField
                  // error={Boolean(errors && errors.second)}
                  fullWidth
                  // helperText={errors && errors.second}
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  onChange={_handleChange('second')}
                  placeholder='Valor'
                  size='small'
                  type='number'
                  value={filterConfig.second} />
              </div>
            }
          </>
        )
      case 'generic':
        return <InputChip onChange={_handleChange()} values={filterConfig} />
      case 'date':
        return (
          <MuiPickersUtilsProvider  locale={esLocale} utils={DayJSUtils}>
            <>
              <div className={classes.firstInputContainer}>
                <KeyboardDatePicker
                  format='DD/MM/YYYY'
                  fullWidth
                  {...(
                    errors && errors.first ?
                      {
                        error     : true,
                        helperText: errors.first
                      } :
                      {}
                  )}
                  initialFocusedDate={dayjs(new Date()).minute(0).second(0).format()}
                  InputAdornmentProps={{
                    classes: {
                      root: classes.inputEndAdornment
                    }

                  }}
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  maxDateMessage='El rango es incorrecto'
                  minDateMessage='El rango es incorrecto'
                  onChange={_handleChange('first')}
                  placeholder='DD/MM/AAAA'
                  size='small'
                  value={filterConfig.first} />
                { showSecondInput && <p className={classes.and}>y</p> }
              </div>
              { showSecondInput &&
                <div className={classes.secondInputContainer}>
                  <KeyboardDatePicker
                    format='DD/MM/YYYY'
                    fullWidth
                    {...(
                      errors && errors.second ?
                        {
                          error     : true,
                          helperText: errors.second
                        } :
                        {}
                    )}
                    initialFocusedDate={dayjs(new Date()).minute(0).second(0).format()}
                    InputAdornmentProps={{
                      classes: {
                        root: classes.inputEndAdornment
                      }

                    }}
                    InputProps={{
                      classes: {
                        input: classes.input
                      }
                    }}
                    maxDateMessage='El rango es incorrecto'
                    minDate={filterConfig.first}
                    minDateMessage='El rango es incorrecto'
                    onChange={_handleChange('second')}
                    placeholder='DD/MM/AAAA'
                    size='small'
                    value={filterConfig.second} />
                </div>
              }
            </>
          </MuiPickersUtilsProvider>
        )
      case 'category':
        return (
          <CategoryItems
            categoryKey={filter.key}
            hasNextPage={hasNextPage}
            items={categoryItems}
            listWidth={listWidth}
            loadMore={_handleLoadMoreItems(filter.key)}
            onChangeSelected={_handleChange()}
            onResetCategoryItems={onSelectCategoryFilter}
            selectedItems={filterConfig} />
        )
      default:
        return null
    }
  }

  return (
    <>
      <p className={classes.title}>{filter.label}</p>
      <FormControl
        color='primary'
        fullWidth
        variant='outlined'>
        <Select
          classes={{
            root: classes.select
          }}
          color='primary'
          MenuProps={{
            anchorOrigin: {
              horizontal: 'left',
              vertical  : 'bottom'
            },
            classes: {
              paper: classes.selectPaper
            },
            getContentAnchorEl: null
          }}
          onChange={_handleOptionChange}
          value={optionIndex}>
          {
            type.options.map((option, index) => (
              <MenuItem
                classes={{
                  root    : classes.menuItem,
                  selected: classes.menuItemSelected
                }}
                key={index}
                value={index}>
                {option.label}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <div className={classes.configOptionContainer}>
        {
          renderConfigOption(filter.type, optionIndex)
        }
      </div>
      <div className={classes.center}>
        <Button
          className={classes.applyFilterButton}
          color='primary'
          disabled={Boolean(errors)}
          onClick={_handleClickApply}>
          Aplicar filtros
        </Button>
      </div>
    </>
  )
}

FilterConfig.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  edit  : PropTypes.bool,
  filter: PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    key  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
  }),
  filterToEdit: PropTypes.shape({
    _id          : PropTypes.string.isRequired,
    key          : PropTypes.string.isRequired,
    label        : PropTypes.string.isRequired,
    operator     : PropTypes.string.isRequired,
    operatorLabel: PropTypes.string.isRequired,
    optionIndex  : PropTypes.number.isRequired,
    type         : PropTypes.string.isRequired,
    value        : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array
    ])
  }),
  hasNextPage           : PropTypes.bool.isRequired,
  loadMoreCategoryItems : PropTypes.func.isRequired,
  onClickApply          : PropTypes.func.isRequired,
  onSelectCategoryFilter: PropTypes.func
}

export default FilterConfig
