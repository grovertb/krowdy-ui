import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon
} from '@material-ui/icons'
import { Box, Typography, InputBase, Select, MenuItem, Input, IconButton } from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = theme => ({
  boxStyle: {
    alignItems: 'center',
    display   : 'flex'
  },
  color: {
    color: theme.palette.grey[700]
  },
  icon: {
    height: 18,
    width : 18
  },
  input: {
    fontSize : 12,
    textAlign: 'center'
  },
  inputSel: {
    fontSize : 12,
    padding  : theme.spacing(0.625, 1),
    textAlign: 'center'
  },
  inputSelect: {
    padding: theme.spacing(0.625, 0.8)
  },
  label: {
    marginRight: theme.spacing(1.5)
  },
  rootLeftIcon: {
    marginLeft : theme.spacing(2.5),
    marginRight: theme.spacing(1.25),
    padding    : theme.spacing(0)
  },
  rootMenuItem: {
    color   : theme.palette.grey[700],
    fontSize: 12
  },
  rootRightIcon: {
    marginLeft: theme.spacing(1.5),
    padding   : theme.spacing(0)
  },
  rootTextfield: {
    border      : ` 1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    color       : theme.palette.grey[700],
    fontSize    : 12,
    width       : 25
  },
  select: {
    '&$selectMenu': {
      paddingLeft : theme.spacing(0),
      paddingRight: theme.spacing(2)
    },
    '&:focus': {
      borderRadius: 4
    },
    border      : `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    width       : 47
  },
  selectIcon: {
    '& svg': {
      height: 18,
      width : 18
    },
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  selectMenu: {
    fontSize  : 12,
    lineHeight: '14px',
    textAlign : 'center'
  },
  selectedMenuItem: {},
  slash           : {
    padding: theme.spacing(0, 0.75)
  }

})

const Pagination = props => {
  const {
    classes,
    onChangeSelect = () => { },
    valueSelect,
    onChangePage = () => { },
    page,
    limits = [],
    totalPages
  } = props

  const _handleClickLeft = () => {
    onClickButton('left')
  }
  const _handleClickRight = () => {
    onClickButton('right')
  }
  const onClickButton = (type) => {
    if(type === 'left')
      page > 1 && onChangePage(page - 1)
    else if(type === 'right')
      page < totalPages && onChangePage(page + 1)
  }

  return (
    <Box className={classes.boxStyle} >
      <Typography className={classes.label}>Mostrar</Typography>
      <Select
        classes={{
          icon      : classes.selectIcon,
          root      : classes.select,
          selectMenu: classes.selectMenu
        }}
        input={<InputBase />}
        inputProps={{
          classes: {
            input: clsx(classes.inputSel, classes.color),
            root : clsx(classes.inputSelect, classes.color)
          }
        }}
        onChange={onChangeSelect}
        value={valueSelect}>
        {limits.map((limit, index) => (
          <MenuItem
            classes={{
              root    : classes.rootMenuItem,
              selected: classes.selectedMenuItem
            }}
            key={index}
            value={limit}>{limit}</MenuItem>
        ))}
      </Select>
      <Box className={classes.boxStyle}>
        <IconButton
          className={classes.rootLeftIcon}
          onClick={_handleClickLeft}
          size='small'>
          <ArrowLeftIcon
            className={classes.icon} />
        </IconButton>
        <Input
          classes={{
            input: clsx(classes.input, classes.color),
            root : classes.rootTextfield
          }}
          disableUnderline
          value={page} />
        <Typography className={classes.slash}>/</Typography>
        <Typography>{totalPages > 0 ? totalPages : 1}</Typography>
        <IconButton
          className={classes.rootRightIcon}
          onClick={_handleClickRight}
          size='small'>
          <ArrowRightIcon
            className={classes.icon} />
        </IconButton>
      </Box>
    </Box>
  )
}

Pagination.propTypes = {
  limits        : PropTypes.array,
  onChangePage  : PropTypes.func,
  onChangeSelect: PropTypes.func,
  page          : PropTypes.number,
  totalPages    : PropTypes.number,
  valueSelect   : PropTypes.number
}

Pagination.muiName = 'Pagination'

export default withStyles(styles, { name: 'KrowdyPagination' })(Pagination)
