import React, { useState } from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button, TextField } from '@krowdy-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayJSUtils from '@date-io/dayjs'

const CONFIG_TYPES = {
  category: {
    _id    : 3,
    options: [
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
    _id    : 2,
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
    type: 'date'
  },
  generic: {
    _id    : 4,
    options: [
      {
        label   : 'Contiene exactamente',
        operator: '$eq'
      },
      {
        label   : 'No contiene exactamente',
        operator: '$ne'
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
    type: 'generic'
  },
  number: {
    _id    : 1,
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
    padding          : '4px 0'
  }
}))

const FilterConfig = (props) => {
  const {
    filter,
    onClickApply
  } = props

  const classes = useStyles()
  const [ option, setOption ]  = useState(0)

  const type = CONFIG_TYPES[filter.typeFilter]

  const _handleChange = (event) => {
    setOption(event.target.value)
  }

  const renderConfigOption = (filterType, /* option */) => {
    const showSecondInput = type.options[option].numberOfInputs === 2
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
                placeholder='Valor'
                size='small' />
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
                  placeholder='Valor'
                  size='small' />
              </div>
            }
          </>
        )
      case 'generic':
        return null
      case 'date':
        return (
          <MuiPickersUtilsProvider utils={DayJSUtils}>
            <>
              <div className={classes.firstInputContainer}>
                <KeyboardDatePicker
                  format='DD/MM/YYYY'
                  fullWidth
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
                  placeholder='DD/MM/AAAA'
                  size='small' />
                { showSecondInput && <p>y</p> }
              </div>
              { showSecondInput &&
              <div className={classes.secondInputContainer}>
                <KeyboardDatePicker
                  format='DD/MM/YYYY'
                  fullWidth
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
                  placeholder='DD/MM/AAAA'
                  size='small' />
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
          onChange={_handleChange}
          value={option}>
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
          renderConfigOption(filter.typeFilter, option)
        }
      </div>
      <div className={classes.center}>
        <Button
          className={classes.addFilterButton}
          color='primary'
          onClick={onClickApply}>
          Aplicar filtros
        </Button>
      </div>
    </div>
  )
}

export default FilterConfig
