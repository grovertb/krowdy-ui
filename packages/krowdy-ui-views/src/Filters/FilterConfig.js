import DayJSUtils from '@date-io/dayjs'
import { Button, FormControl, makeStyles, MenuItem, Select, TextField } from '@krowdy-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import dayjs from 'dayjs'
import esLocale from 'dayjs/locale/es'
import React, { useState } from 'react'
import InputChip from './InputChip'
import { PropTypes } from 'prop-types'

const CONFIG_TYPES = {
  category: {
    _id         : 3,
    initialValue: [],
    options     : [
      {
        label   : 'Es cualquiera de',
        operator: '$in'
      },
      {
        label   : 'Es cualquiera de',
        operator: '$nin'
      },
      {
        label   : 'Es conocido',
        operator: '$ne'
      },
      {
        label   : 'Es desconocido',
        operator: '$eq'
      }
    ],
    type: 'category'
  },
  date: {
    _id         : 2,
    initialValue: {
      first : null, // from
      second: null // to
    },
    options: [
      {
        label         : 'Es igual a',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        label         : 'Es posterior a',
        numberOfInputs: 1,
        operator      : '$gt'
      },
      {
        label         : 'Es anterior a',
        numberOfInputs: 1,
        operator      : '$lt'
      },
      {
        label         : 'Está entre',
        numberOfInputs: 2,
        operator      : '$range' // rage a - b
      },
      {
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type: 'date'
  },
  generic: {
    _id         : 4,
    initialValue: [],
    options     : [
      {
        initialValue  : [],
        label         : 'Contiene exactamente',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        initialValue  : [],
        label         : 'No contiene exactamente',
        numberOfInputs: 1,
        operator      : '$ne'
      },
      {
        initialValue  : [],
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        initialValue  : [],
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type: 'generic'
  },
  number: {
    _id         : 1,
    initialValue: {
      first : '', // from
      second: '' // to
    },
    options: [
      {
        label         : 'Es igual a',
        numberOfInputs: 1,
        operator      : '$eq'
      },
      {
        label         : 'No es igual a',
        numberOfInputs: 1,
        operator      : '$ne'
      },
      {
        label         : 'Es mayor que',
        numberOfInputs: 1,
        operator      : '$gt'
      },
      {
        label         : 'Es mayor o igual que',
        numberOfInputs: 1,
        operator      : '$gte'
      },
      {
        label         : 'Es menor que',
        numberOfInputs: 1,
        operator      : '$lt'
      },
      {
        label         : 'Es menor o igual que',
        numberOfInputs: 1,
        operator      : '$lte'
      },
      {
        label         : 'Está entre',
        numberOfInputs: 2,
        operator      : '$range'
      },
      {
        label         : 'Es conocido',
        numberOfInputs: 0,
        operator      : '$ne'
      },
      {
        label         : 'Es desconocido',
        numberOfInputs: 0,
        operator      : '$eq'
      }
    ],
    type: 'number'
  }
}

const useStyles = makeStyles((theme) => ({
  addFilterButton: {
    marginTop: 22
  },
  center: {
    display       : 'flex',
    justifyContent: 'center'
  },
  configOptionContainer: {
    padding: '20px 0'
  },
  firstInputContainer: {
    '& p': {
      fontSize   : 14,
      margin     : 0,
      paddingLeft: 8
    },
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
    '&&': {
      background: '#F3FBFF'
    },
    color: theme.palette.primary[500]
  },
  secondInputContainer: {
    paddingTop: 18
  },
  select: {
    fontSize     : 12,
    paddingBottom: 7,
    paddingTop   : 7
  },
  selectForm: {
    // background: 'red',
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
    padding          : '4px 0'
  }
}))

const FilterConfig = (props) => {
  const {
    filter,
    onClickApply
  } = props
  console.log('Dante: FilterConfig -> filter', filter)

  const classes = useStyles()
  const [ optionIndex, setOptionIndex ]  = useState(0)
  const type = CONFIG_TYPES[filter.typeFilter]
  const option = type.options[optionIndex]

  const [ filterConfig, setFilterConfig ] = useState(type.initialValue)
  console.log('Dante: FilterConfig -> filterConfig', filterConfig)

  const _handleOptionChange = (event) => {
    setOptionIndex(event.target.value)
  }

  const _handleChange = (key) => (eventOrValue) => {
    if(eventOrValue && typeof eventOrValue === 'object' && eventOrValue.target)
      eventOrValue.persist()

    switch (filter.typeFilter) {
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
        setFilterConfig(eventOrValue)
        break
      case 'category':
        break
      default:
        break
    }
  }

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
          return filterConfig.first

        else if(option.numberOfInputs === 2)
          return [ filterConfig.first, filterConfig.second ]

        return null
      case 'generic':
        return filterConfig
      case 'category':
        return filterConfig
      default:
        return null
    }
  }

  const _handleClickApply = () => {
    const configValue = getFilterConfigValue(filter.typeFilter)
    console.log('Dante: _handleClickApply -> configValue', configValue)

    const res = {
      key     : filter.key,
      label   : filter.label,
      operator: option.operator,
      value   : configValue
    }
    onClickApply(res)
  }

  const renderConfigOption = (filterType,  optionIndex) => {
    const showInputs = type.options[optionIndex].numberOfInputs > 0
    const showSecondInput = type.options[optionIndex].numberOfInputs === 2
    switch (filterType) {
      case 'number':
        return (
          <>
            <div className={classes.firstInputContainer}>
              <TextField
                fullWidth
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                onChange={_handleChange('first')}
                placeholder='Valor'
                size='small'
                value={filterConfig.first} />
              { showSecondInput && <p>y</p>}
            </div>
            { showSecondInput &&
              <div className={classes.secondInputContainer}>
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  onChange={_handleChange('second')}
                  placeholder='Valor'
                  size='small'
                  value={filterConfig.second} />
              </div>
            }
          </>
        )
      case 'generic':
        return (
          <div>
            {
              showInputs &&
              <InputChip onChange={_handleChange()} values={filterConfig} />
            }
          </div>
        )
      case 'date':
        return (
          <MuiPickersUtilsProvider  locale={esLocale} utils={DayJSUtils}>
            <>
              <div className={classes.firstInputContainer}>
                <KeyboardDatePicker
                  format='DD/MM/YYYY'
                  fullWidth
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
                  onChange={_handleChange('first')}
                  placeholder='DD/MM/AAAA'
                  size='small'
                  value={filterConfig.first} />
                { showSecondInput && <p>y</p> }
              </div>
              { showSecondInput &&
                <div className={classes.secondInputContainer}>
                  <KeyboardDatePicker
                    format='DD/MM/YYYY'
                    fullWidth
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
          <div>
            COnfig Categoria
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div>
      <p className={classes.title}>{filter.label}</p>
      <FormControl
        className={classes.selectForm}
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
          renderConfigOption(filter.typeFilter, optionIndex)
        }
      </div>
      <div className={classes.center}>
        <Button
          className={classes.addFilterButton}
          color='primary'
          onClick={_handleClickApply}>
          Aplicar filtros
        </Button>
      </div>
    </div>
  )
}

FilterConfig.propTypes = {
  filter: PropTypes.shape({
    _id       : PropTypes.string.isRequired,
    key       : PropTypes.string.isRequired,
    label     : PropTypes.string.isRequired,
    typeFilter: PropTypes.string.isRequired
  }),
  onClickApply: PropTypes.func.isRequired
}

export default FilterConfig
