import { Box, makeStyles, OutlinedInput as MuiOutlinedInput } from '@krowdy-ui/core'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { createStyles, withStyles } from '@krowdy-ui/styles'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { isPositiveNumberString } from '../../utils'
import LimitSelect from './LimitSelect'

const TablePagination = ({
  onChangePage = () => { },
  onChangeLimit = () => { },
  page = 1,
  totalPages = 1
}) => {
  const { icon, bgMargin, smMargin, slash, ...classes } = useStyles()

  const backPage = () => {
    const newPage = page - 1
    if(newPage >= 1)
      onChangePage(newPage)
  }

  const sgtPage = () => {
    const newPage = page + 1
    if(newPage <= totalPages)
      onChangePage(newPage)
  }

  const _handleChange = (event) => {
    event.persist()
    if(event.target.value === '') {
      onChangePage('')
    }
    else if(isPositiveNumberString(event.target.value)) {
      let newValue = parseInt(event.target.value)
      if(newValue > totalPages)
        newValue = totalPages ? totalPages : 1
      onChangePage(newValue)
    }
  }

  const _handleKeyDown = ({ key }) => {
    switch (key) {
      case 'ArrowUp': {
        sgtPage()
        break
      }
      case 'ArrowDown': {
        backPage()
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <Box alignItems='center' display='flex'>
      <LimitSelect
        className={bgMargin}
        onChange={(val) => {
          onChangeLimit(val)
          onChangePage(1)
        }} />
      <Box alignItems='center' className={bgMargin} display='flex'>
        <KeyboardArrowLeftIcon
          className={icon}
          data-test='before-page'
          onClick={backPage} />
        <OutlinedInput
          className={smMargin}
          data-test='page-number'
          onChange={_handleChange}
          onKeyDown={_handleKeyDown}
          value={page} />
        <span className={`${slash} ${smMargin}`}>/</span>
        <span className={classes.totalPages} data-test='total-pages'>{totalPages > 0 ? totalPages : 1}</span>
        <KeyboardArrowRightIcon
          className={`${icon} ${smMargin}`}
          data-test='next-page'
          onClick={sgtPage} />
      </Box>
    </Box>
  )
}

const OutlinedInput = withStyles(({ palette: { krowdyFontGray } }) => ({
  input: {
    color    : krowdyFontGray,
    fontSize : 12,
    margin   : 0,
    padding  : '4px 3px',
    textAlign: 'center',
    width    : 34
  },
  notchedOutline: {
    borderColor: 'rgba(0, 0, 0, 0.23) !important',
    borderWidth: 1
  },
  root: {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23) !important',
      borderWidth: 1
    }
  }
}))(MuiOutlinedInput)

const useStyles = makeStyles(({
  palette: {
    krowdyFontGray
  }
}) => createStyles({
  bgMargin: {
    marginLeft: 12
  },
  icon: {
    color   : '#262626',
    cursor  : 'pointer',
    fontSize: 16
  },
  slash: {
    color   : krowdyFontGray,
    fontSize: 12
  },
  smMargin: {
    marginLeft: '6px'
  },
  totalPages: {
    color    : '#595959',
    fontSize : 12,
    margin   : '0px -10px 0px 0px',
    padding  : '4px 3px',
    textAlign: 'center',
    width    : 34
  }
}))

export default withRouter(TablePagination)
