import React, { useState } from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button } from '@krowdy-ui/core'

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
        label   : 'Es igual a',
        operator: '$eq'
      },
      {
        label   : 'Es posterior a',
        operator: '$gt'
      },
      {
        label   : 'Es anterior a',
        operator: '$lt'
      },
      {
        label   : 'Está entre',
        operator: '$range'
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
        label   : 'Es igual a',
        operator: '$eq'
      },
      {
        label   : 'No es igual a',
        operator: '$ne'
      },
      {
        label   : 'Es mayor que',
        operator: '$gt'
      },
      {
        label   : 'Es mayor o igual que',
        operator: '$gte'
      },
      {
        label   : 'Es menor que',
        operator: '$lt'
      },
      {
        label   : 'Es menor o igual que',
        operator: '$lte'
      },
      {
        label   : 'Está entre',
        operator: '$range'
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
    type: 'number'
  }
}

const useStyles = makeStyles((theme) => ({
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
                value={index}>
                {option.label}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <Button
        color='primary'
        onClick={onClickApply}>
          Añadir filtro
      </Button>
    </div>
  )
}

export default FilterConfig
